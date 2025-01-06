'use client';

import React from 'react';

import { useTheme } from 'next-themes';

import '@uppy/core/dist/style.min.css';
import '@uppy/dashboard/dist/style.min.css';
import { Dashboard } from '@uppy/react';
import { useUppy } from 'components/UppyProvider';

export function VideoUpload() {
  const uppy = useUppy();
  const { resolvedTheme } = useTheme();

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto">
      <div className="uppy-wrapper rounded-xl border dark:border-gray-800 bg-card">
        <Dashboard
          uppy={uppy}
          theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
          width="100%"
          height="450px"
          style={{
            borderRadius: '0.75rem',
          }}
          showProgressDetails={true}
          note="Upload images, videos, and audio files of 500MB or less"
          proudlyDisplayPoweredByUppy={false}
          locale={{
            strings: {
              dropPasteFiles: 'Drop your files here or %{browse}',
              browse: 'browse',
              uploadComplete: 'Upload successful!',
              uploadPaused: 'Upload paused',
              resumeUpload: 'Resume upload',
              pauseUpload: 'Pause upload',
              retryUpload: 'Retry',
              cancelUpload: 'Cancel',
              xFilesSelected: {
                0: '%{smart_count} file selected',
                1: '%{smart_count} files selected',
              },
              uploadingXFiles: {
                0: 'Uploading %{smart_count} file',
                1: 'Uploading %{smart_count} files',
              },
            },
            pluralize: (n) => (n === 1 ? 0 : 1),
          }}
          metaFields={[
            { id: 'name', name: 'Name', placeholder: 'File name' },
            {
              id: 'description',
              name: 'Description',
              placeholder: 'File description',
            },
            {
              id: 'tags',
              name: 'Tags',
              placeholder: 'Add tags (comma separated)',
            },
          ]}
        />
      </div>
    </div>
  );
}
