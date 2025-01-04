import type { ReactNode } from 'react';

import { baseOptions } from 'app/layout.config';
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from 'lib/source';
import { Activity, Code } from 'lucide-react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions}
      sidebar={{
        tabs: false,
        defaultOpenLevel: 1,
        banner: (
          <RootToggle
            options={[
              {
                title: 'Tusflow API',
                description: 'Tusflow API docs',
                icon: <Activity className="w-5 h-5" />,
                url: '/docs/api',
              },
              {
                title: 'OpenAPI Specification',
                description: 'Interactive API documentation',
                icon: <Code className="w-6 h-6" />,
                url: '/docs/openapi',
              },
            ]}
          />
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
