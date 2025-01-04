import type { ReactNode } from 'react';

import type { Metadata } from 'next';

import { UppyProvider } from 'components/UppyProvider';
import Footer from 'components/footer';
import { Toaster } from 'components/ui/sonner';
import { calSans, inter } from 'fonts';
import { RootProvider } from 'fumadocs-ui/provider';

import { cn } from '@/lib/utils';

import '@/styles/global.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://tusflow.com'),
  title: {
    default: 'TusFlow - Modern File Upload Infrastructure',
    template: '%s - TusFlow',
  },
  description:
    'High-performance, open-source implementation of the TUS protocol for reliable file uploads. Built with Cloudflare Workers and modern web standards.',
  openGraph: {
    title: 'TusFlow - Modern File Upload Infrastructure',
    description:
      'High-performance, open-source implementation of the TUS protocol for reliable file uploads. Built with Cloudflare Workers and modern web standards.',
    url: 'https://tusflow.com',
    siteName: 'TusFlow',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TusFlow - Modern File Upload Infrastructure',
    description:
      'High-performance, open-source implementation of the TUS protocol for reliable file uploads. Built with Cloudflare Workers and modern web standards.',
    creator: '@evansso_',
    images: ['/og.png'],
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={cn(
        inter.variable,
        calSans.variable,
        'scroll-smooth antialiased'
      )}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col bg-white text-gray-950 antialiased dark:bg-gray-950 dark:text-gray-50">
        <div className="fixed inset-0 flex justify-center">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)]" />
          <div className="absolute top-0 h-[200px] w-full bg-gradient-to-b from-orange-100 opacity-[0.15] dark:from-orange-900 dark:opacity-20 blur-[1px]" />
        </div>
        <RootProvider>
          <UppyProvider>
            <main className="relative flex-1">{children}</main>
            <Footer />
            <Toaster
              position="bottom-right"
              richColors
              closeButton
              className="dark:hidden"
            />
            <Toaster
              position="bottom-right"
              theme="dark"
              richColors
              closeButton
              className="hidden dark:block"
            />
          </UppyProvider>
        </RootProvider>
      </body>
    </html>
  );
}
