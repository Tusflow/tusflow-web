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
  title: {
    default: 'Tusflow - Effortless File Uploads, Supercharged',
    template: '%s - Tusflow',
  },
  description: 'Tusflow is a file upload service that supports HTTP/3 and QUIC',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={cn(inter.variable, calSans.variable)}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="flex flex-col min-h-screen antialiased w-full ">
        <RootProvider>
          <UppyProvider>
            <Toaster richColors />
            {children}
          </UppyProvider>
        </RootProvider>
        <Footer />
      </body>
    </html>
  );
}
