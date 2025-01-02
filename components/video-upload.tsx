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
    <div className="flex flex-col w-full">
      <div className="uppy-wrapper rounded-[0.75rem] border-2 border-dashed border-gray-200 dark:bg-gray-900 dark:border-gray-800">
        <Dashboard
          uppy={uppy}
          theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
          width="100%"
          height="450px"
          style={{
            borderRadius: '0.75rem',
          }}
          showProgressDetails={true}
          note="Video files only, up to 5GB"
          proudlyDisplayPoweredByUppy={false}
          locale={{
            strings: {
              dropPasteFiles: 'Drop your video file here or %{browse}',
              browse: 'browse',
              uploadComplete: 'Upload successful!',
              uploadPaused: 'Upload paused',
              resumeUpload: 'Resume upload',
              pauseUpload: 'Pause upload',
              retryUpload: 'Retry',
              cancelUpload: 'Cancel',
              xFilesSelected: {
                0: '%{smart_count} file selected',
                1: '%{smart_count} file selected',
              },
              uploadingXFiles: {
                0: 'Uploading %{smart_count} file',
                1: 'Uploading %{smart_count} file',
              },
            },
            pluralize: (n) => (n === 1 ? 0 : 1),
          }}
          metaFields={[
            { id: 'name', name: 'Name', placeholder: 'Video name' },
            {
              id: 'description',
              name: 'Description',
              placeholder: 'Video description',
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
