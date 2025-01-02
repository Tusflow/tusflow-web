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
const MAX_CHUNK_SIZE = 50 * 1024 * 1024; // 50MB
const OPTIMAL_CHUNK_COUNT = 10000; // Optimal number of chunks for large files

const calculateOptimalChunkSize = (fileSize: number, networkSpeed: number) => {
  let chunkSize = Math.ceil(fileSize / OPTIMAL_CHUNK_COUNT);

  if (networkSpeed > 0) {
    const networkBasedSize = networkSpeed * 1.5;
    chunkSize = Math.min(chunkSize, networkBasedSize);
  }

  chunkSize = Math.max(MIN_CHUNK_SIZE, Math.min(chunkSize, MAX_CHUNK_SIZE));
  return Math.ceil(chunkSize / (1024 * 1024)) * (1024 * 1024);
};

export const UppyProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [networkSpeed, setNetworkSpeed] = useState<number>(0);
  const [lastUploadTime, setLastUploadTime] = useState<number>(0);

  const [uppy] = useState(() =>
    new Uppy({
      autoProceed: false,
      restrictions: {
        maxFileSize: 5 * 1024 * 1024 * 1024,
        minFileSize: 1000000,
        maxNumberOfFiles: 5,
      },
      debug: true,
      onBeforeUpload: (files: { [key: string]: UppyFile<Meta, TusBody> }) => {
        const file = Object.values(files)[0];
        if (file?.size && file.size > 5 * 1024 * 1024 * 1024) {
          toast.error('File size exceeds 5GB limit');
          return false;
        }
        return true;
      },
    }).use(Tus, {
      endpoint: 'https://tusflow-api.marsappollo3.workers.dev/files/',
      limit: 5,
      onChunkComplete(chunkSize, bytesAccepted, bytesTotal) {
        console.log('Chunk complete:', chunkSize, bytesAccepted, bytesTotal);
      },
      withCredentials: false,
      overridePatchMethod: false,
      removeFingerprintOnSuccess: true,
      retryDelays: [0, 1000, 3000, 5000],
      onBeforeRequest: (req, file) => {
        const dynamicChunkSize = calculateOptimalChunkSize(
          file.size ?? 0,
          networkSpeed ?? 0
        );
        req.setHeader('Authorization', `Bearer 3ZWwFYmKYWzMZsiLUaDkbyPk`);
      },
      onAfterResponse: (req, res) => {
        // Handle response if needed
        console.log('Response:', res);
      },
      chunkSize: MIN_CHUNK_SIZE, // Set initial chunk size
      onProgress: (bytesUploaded, bytesTotal) => {
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
