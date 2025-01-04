import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: <h1 className="text-xl font-cal">Tusflow</h1>,
  },
  links: [
    {
      text: 'Documentation',
      url: '/docs/api',
      active: 'nested-url',
    },
    {
      text: 'Roadmap',
      url: '/roadmap',
      active: 'nested-url',
    },
  ],
  disableThemeSwitch: true,
  githubUrl: 'https://github.com/Tusflow/',
};
