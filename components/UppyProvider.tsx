'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

import Uppy, { type Meta, type UppyFile } from '@uppy/core';
import Tus, { type TusBody } from '@uppy/tus';
import { toast } from 'sonner';

const UppyContext = createContext<Uppy<Meta, TusBody> | null>(null);

export const useUppy = () => {
  const context = useContext(UppyContext);
  if (!context) {
    throw new Error('useUppy must be used within an UppyProvider');
  }
  return context;
};

const MIN_CHUNK_SIZE = 5 * 1024 * 1024; // 5MB (S3 minimum)
const allowedFileTypes = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/webp',
  'video/mp4',
  'video/quicktime',
  'video/x-matroska', // For MKV
  'audio/mpeg', // MP3
  'audio/wav',
  'audio/ogg',
  'audio/webm',
];

export const UppyProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [networkSpeed, setNetworkSpeed] = useState<number>(0);
  const [lastUploadTime, setLastUploadTime] = useState<number>(0);

  const [uppy] = useState(() =>
    new Uppy({
      autoProceed: false,
      restrictions: {
        maxFileSize: 500 * 1024 * 1024,
        minFileSize: 1000000,
        maxNumberOfFiles: 5,
        allowedFileTypes: allowedFileTypes,
      },
      debug: true,
      onBeforeUpload: (files: { [key: string]: UppyFile<Meta, TusBody> }) => {
        const file = Object.values(files)[0];
        if (file?.size && file.size > 500 * 1024 * 1024) {
          toast.error('File size exceeds 500MB limit');
          return false;
        }
        return true;
      },
    }).use(Tus, {
      endpoint: process.env.NEXT_PUBLIC_WORKERS_API_ENDPOINT,
      limit: 5,
      withCredentials: true,
      overridePatchMethod: true,
      removeFingerprintOnSuccess: true,
      retryDelays: [0, 1000, 3000, 5000],
      onBeforeRequest: (req, file) => {
        req.setHeader(
          'Authorization',
          `Bearer ${process.env.NEXT_PUBLIC_WORKERS_API_KEY}`
        );
      },
      chunkSize: MIN_CHUNK_SIZE, // Set initial chunk size
      onProgress: (bytesUploaded) => {
        const currentTime = Date.now();
        if (lastUploadTime > 0) {
          const timeDiff = currentTime - lastUploadTime;
          const currentSpeed = bytesUploaded / (timeDiff / 1000);

          const alpha = 0.2;
          setNetworkSpeed((prevSpeed) =>
            prevSpeed === 0
              ? currentSpeed
              : (1 - alpha) * prevSpeed + alpha * currentSpeed
          );
        }
        setLastUploadTime(currentTime);
      },
    })
  );

  useEffect(() => {
    uppy.on('file-added', (file: UppyFile<Meta, TusBody>) => {
      toast.success(`File ${file.meta.name} added successfully`);
    });

    uppy.on('upload-success', (file, response) => {
      toast.success(`Successfully uploaded ${file?.meta.name}!`);
    });

    uppy.on('upload-error', (file, error) => {
      console.error('Upload error:', error);
      toast.error(`Failed to upload ${file?.meta.name}: ${error.message}`);
    });

    uppy.on('restriction-failed', (file, error) => {
      toast.error(`${error.message} for file ${file?.meta.name}`);
    });

    uppy.on('upload-retry', (file: UppyFile<Meta, TusBody>) => {
      toast.info(`Retrying upload for ${file?.meta.name}...`);
    });

    return () => {
      uppy.cancelAll();
    };
  }, [uppy, networkSpeed]);

  return <UppyContext.Provider value={uppy}>{children}</UppyContext.Provider>;
};
