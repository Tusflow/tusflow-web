'use client';

import React, { useCallback, useEffect, useState } from 'react';

import { Meta, UppyFile } from '@uppy/core';
import { type TusBody } from '@uppy/tus';
import {
  AlertCircle,
  ArrowLeft,
  Check,
  CheckCircle,
  File,
  FileMusic,
  Pause,
  Play,
  Plus,
  Upload,
  Video,
  X,
  XCircle,
} from 'lucide-react';
import { FileIcon } from 'lucide-react';
import { toast } from 'sonner';

import { useUppy } from '@/components/UppyProvider';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';

interface FileTypeConfig {
  accept: string[];
  icon: any;
  maxSize: number; // in bytes
}

const FILE_TYPES: Record<string, FileTypeConfig> = {
  video: {
    accept: ['video/mp4', 'video/webm', 'video/ogg'],
    icon: Video,
    maxSize: 5 * 1024 * 1024 * 1024, // 5GB
  },
  image: {
    accept: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
    icon: FileIcon,
    maxSize: 50 * 1024 * 1024, // 50MB
  },
  pdf: {
    accept: ['application/pdf'],
    icon: FileIcon,
    maxSize: 100 * 1024 * 1024, // 100MB
  },
  audio: {
    accept: ['audio/mpeg', 'audio/wav', 'audio/ogg'],
    icon: FileIcon,
    maxSize: 100 * 1024 * 1024, // 100MB
  },
  document: {
    accept: [
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    ],
    icon: FileIcon,
    maxSize: 50 * 1024 * 1024, // 50MB
  },
};

type UploadStep =
  | 'default'
  | 'add-files'
  | 'uploading'
  | 'upload-complete'
  | 'upload-error';

const FileUpload: React.FC = () => {
  const uppy = useUppy();
  const [files, setFiles] = useState<UppyFile<Meta, TusBody>[]>([]);
  const [currentStep, setCurrentStep] = useState<UploadStep>('default');
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState<string | null>(null);
  const [uploadedSize, setUploadedSize] = useState(0);
  const [totalSize, setTotalSize] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [uploadStarted, setUploadStarted] = useState<number | null>(null);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  useEffect(() => {
    const updateFiles = () => {
      const uppyFiles = uppy.getFiles();
      setFiles(uppyFiles);
      setTotalSize(uppyFiles.reduce((acc, file) => acc + (file.size || 0), 0));

      if (uppyFiles.length > 0 && currentStep === 'default') {
        setCurrentStep('add-files');
      } else if (uppyFiles.length === 0) {
        setCurrentStep('default');
      }
    };

    const handleUploadProgress = (
      file: UppyFile<Meta, TusBody> | undefined,
      progress: {
        bytesUploaded: number;
        bytesTotal: number;
      }
    ) => {
      setProgress((progress.bytesUploaded / progress.bytesTotal) * 100);
      setUploadedSize(progress.bytesUploaded || 0);
      if (uploadStarted) {
        const uploadSpeed =
          progress.bytesUploaded / ((Date.now() - uploadStarted) / 1000);
        const remainingBytes = progress.bytesTotal - progress.bytesUploaded;
        const remainingSeconds = remainingBytes / uploadSpeed;
        setTimeRemaining(formatTime(remainingSeconds));
      }
    };

    const handleUploadSuccess = (file: UppyFile<Meta, TusBody>) => {
      toast.success(`Succesfully uploaded ${file.name}`);
      setUploadComplete(true);
      setUploading(false);
      setProgress(0);
      setTimeRemaining(null);
      setUploadedSize(0);
      setTotalSize(0);
      setIsPaused(false);
      setUploadStarted(null);
      setCurrentStep('upload-complete');
      setUploadError(null);
      uppy.clear();
    };

    const handleUploadError = (file: UppyFile<Meta, TusBody>, error: Error) => {
      toast.error(`Upload  Erros, ${error}`);
      setUploadError(error.message || 'Failed to upload file');
      setUploading(false);
      setUploadComplete(false);
      setProgress(0);
      setTimeRemaining(null);
      setUploadedSize(0);
      setTotalSize(0);
      setIsPaused(false);
      setUploadStarted(null);
      setCurrentStep('upload-error');
    };

    uppy.on('file-added', updateFiles);
    uppy.on('file-removed', updateFiles);
    uppy.on('upload-start', () => {
      setUploadStarted(Date.now());
      setCurrentStep('uploading');
    });
    uppy.on('upload-progress', (file, progress) => {
      handleUploadProgress(file, progress as any);
    });
    uppy.on('upload-success', (file) => {
      handleUploadSuccess(file as any);
    });
    uppy.on('upload', () => setUploading(true));
    uppy.on('cancel-all', () => {
      setCurrentStep('default');
      setFiles([]);
      setUploadError(null);
    });
    uppy.on('upload-error', (file, error) => {
      handleUploadError(file as UppyFile<Meta, TusBody>, error);
    });

    return () => {
      uppy.off('file-added', updateFiles);
      uppy.off('file-removed', updateFiles);
      uppy.off('upload-progress', (file, progress) => {
        handleUploadProgress(file, progress as any);
      });
      uppy.off('upload-success', (file) => {
        handleUploadSuccess(file as any);
      });
      uppy.off('upload', () => setUploading(true));
      uppy.off('cancel-all', () => {
        setCurrentStep('default');
        setFiles([]);
        setUploadError(null);
      });
      uppy.off('upload-error', () => {
        handleUploadError({} as UppyFile<Meta, TusBody>, new Error(''));
        setCurrentStep('upload-error');
      });
    };
  }, [uppy, currentStep]);

  const validateFile = (file: File): boolean => {
    const fileType = Object.entries(FILE_TYPES).find(([_, config]) =>
      config.accept.includes(file.type)
    );

    if (!fileType) {
      toast.error(`File type ${file.type} is not supported`);
      return false;
    }

    if (file.size > fileType[1].maxSize) {
      toast.error(
        `File size exceeds the maximum limit of ${formatFileSize(
          fileType[1].maxSize
        )}`
      );
      return false;
    }

    return true;
  };

  const onDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      setDragActive(false);
      const droppedFiles = Array.from(event.dataTransfer.files);

      droppedFiles.forEach((file) => {
        if (validateFile(file)) {
          try {
            uppy.addFile({
              name: file.name,
              type: file.type,
              data: file,
            });
          } catch (error) {
            toast.error(`Failed to add file: ${file.name}`);
          }
        }
      });
    },
    [uppy]
  );

  const onInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = Array.from(event.target.files || []);
      selectedFiles.forEach((file) => {
        if (validateFile(file)) {
          try {
            uppy.addFile({
              name: file.name,
              type: file.type,
              data: file,
            });
          } catch (error) {
            toast.error(`Failed to add file: ${file.name}`);
          }
        }
      });
    },
    [uppy]
  );

  const clearFiles = useCallback(() => {
    uppy.cancelAll();
    setFiles([]);
    setProgress(0);
    setTimeRemaining(null);
    setUploadedSize(0);
    setTotalSize(0);
    setUploading(false);
    setUploadComplete(false);
  }, [uppy]);

  const startUpload = useCallback(() => {
    setUploading(true);
    uppy.upload();
  }, [uppy]);

  const togglePause = useCallback(() => {
    if (isPaused) {
      uppy.resumeAll();
    } else {
      uppy.pauseAll();
    }
    setIsPaused(!isPaused);
  }, [uppy, isPaused]);

  const cancelUpload = useCallback(() => {
    uppy.cancelAll();
  }, [uppy]);

  const formatTime = (seconds: number): string => {
    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor((seconds % (3600 * 24)) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);

    const parts = [];
    if (d > 0) parts.push(`${d}d`);
    if (h > 0) parts.push(`${h}h`);
    if (m > 0) parts.push(`${m}m`);
    if (s > 0 || parts.length === 0) parts.push(`${s}s`);

    return parts.join(' ');
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <Card className="w-[600px] h-[500px] mx-auto shadow-lg">
      <CardContent className="p-6 h-full flex flex-col bg-gradient-to-br from-gray-50 to-white">
        {uploadError && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center text-red-700">
            <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
            <p className="text-sm">{uploadError}</p>
            <Button
              variant="ghost"
              size="sm"
              className="ml-auto"
              onClick={() => setUploadError(null)}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        )}

        {currentStep === 'default' && (
          <div
            onDrop={onDrop}
            onDragOver={(e) => {
              e.preventDefault();
              setDragActive(true);
            }}
            onDragLeave={() => setDragActive(false)}
            className={`relative border-2 border-dashed rounded-lg p-6 transition-colors ${
              dragActive
                ? 'border-primary bg-primary/5'
                : 'border-gray-200 hover:border-primary/50'
            }`}
          >
            <input
              type="file"
              id="file-input"
              className="hidden"
              onChange={onInputChange}
              multiple
              accept={Object.values(FILE_TYPES)
                .flatMap((config) => config.accept)
                .join(',')}
              aria-label="Choose files to upload"
            />
            <label
              htmlFor="file-input"
              className="cursor-pointer block text-center"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  document.getElementById('file-input')?.click();
                }
              }}
            >
              <div>
                <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                <p className="text-lg font-medium mb-2">
                  Drop your files here or click to browse
                </p>
                <p className="text-sm text-gray-500">
                  Supports video (up to 5GB), images (up to 50MB), PDF files (up
                  to 100MB), audio files (up to 100MB), and documents (up to
                  50MB)
                </p>
              </div>
            </label>
          </div>
        )}

        {currentStep === 'add-files' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  clearFiles();
                  setCurrentStep('default');
                }}
              >
                Cancel
              </Button>
              <div>
                <input
                  type="file"
                  id="file-input"
                  multiple
                  style={{ display: 'none' }}
                  onChange={(e) => {
                    if (e.target.files) {
                      // Handle your files here
                      const newFiles = Array.from(e.target.files);
                      // Add your file handling logic here
                      newFiles.forEach((file) => {
                        if (validateFile(file)) {
                          try {
                            uppy.addFile({
                              name: file.name,
                              type: file.type,
                              data: file,
                            });
                          } catch (error) {
                            toast.error(`Failed to add file: ${file.name}`);
                          }
                        }
                      });
                    }
                  }}
                />

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => document.getElementById('file-input')?.click()}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      document.getElementById('file-input')?.click();
                    }
                  }}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Files
                </Button>
              </div>
            </div>

            <ScrollArea className="flex-grow rounded-lg border">
              <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {files.map((file) => (
                  <div
                    key={file.id}
                    className="flex items-center p-3 bg-gray-50 rounded-lg group relative"
                  >
                    {file.type?.startsWith('video/') ? (
                      <Video className="w-8 h-8 text-primary mr-3 flex-shrink-0" />
                    ) : file.type === 'application/pdf' ? (
                      <File className="w-8 h-8 text-primary mr-3 flex-shrink-0" />
                    ) : file.type?.startsWith('image/') ? (
                      <div className="w-8 h-8 mr-3 flex-shrink-0 rounded overflow-hidden">
                        <img
                          src={URL.createObjectURL(file.data)}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : file.type?.startsWith('audio/') ? (
                      <FileMusic className="w-8 h-8 text-primary mr-3 flex-shrink-0" />
                    ) : (
                      <File className="w-8 h-8 text-primary mr-3 flex-shrink-0" />
                    )}
                    <div className="min-w-0 flex-1 mr-2">
                      <p className="text-sm font-medium truncate">
                        {file.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {formatFileSize(file.size || 0)}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => uppy.removeFile(file.id)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <Button size="sm" onClick={startUpload}>
              Upload {files.length > 1 ? `${files.length} Files` : 'File'}
            </Button>
          </div>
        )}

        {currentStep === 'uploading' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-medium">
                Uploading {files.length} {files.length === 1 ? 'file' : 'files'}
                ...
              </p>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" onClick={togglePause}>
                  {isPaused ? (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      Resume
                    </>
                  ) : (
                    <>
                      <Pause className="w-4 h-4 mr-2" />
                      Pause
                    </>
                  )}
                </Button>
                <Button variant="ghost" size="sm" onClick={cancelUpload}>
                  Cancel Upload
                </Button>
              </div>
            </div>

            <Progress value={progress} className="w-full h-2" />

            <div className="flex justify-between items-center text-sm text-gray-600">
              <p>
                {formatFileSize(uploadedSize)} of {formatFileSize(totalSize)} (
                {Math.round(progress)}%)
              </p>
              <p>{timeRemaining || 'Calculating...'} remaining</p>
            </div>
          </div>
        )}
        {currentStep === 'upload-complete' && (
          <div className="flex max-w-2xl items-center space-x-2 w-full">
            <Check className="w-4 h-4 text-green-500" />
            <p className="text-sm font-medium text-green-500">
              Upload Complete
            </p>
            <Button size="sm" onClick={() => setCurrentStep('default')}>
              Upload More
            </Button>
          </div>
        )}
        {currentStep === 'upload-error' && (
          <div className="flex max-w-2xl items-center space-x-2 w-full">
            <Check className="w-4 h-4 text-red-500" />
            <p className="text-sm font-medium text-red-500">Upload Error</p>
            <Button size="sm" onClick={() => setCurrentStep('default')}>
              Please Try again
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FileUpload;
