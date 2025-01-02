import Link from 'next/link';

import { Button } from 'components/ui/button';
import { Icons } from 'components/ui/icons';
import { VideoUpload } from 'components/video-upload';
import { Github } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center px-3 lg:py-20 pb-10 pt-16 max-w-screen-xl gap-24 w-full mx-auto">
      {/* Hero Section */}
      <header className="flex flex-col gap-6 items-center max-w-2xl text-center">
        <h1 className="text-4xl md:text-6xl ">
          Effortless File Uploads,{' '}
          <span className="text-orange-600 font-cal">Supercharged</span>
        </h1>
        <p className="text-xl text-fd-muted-foreground">
          Enterprise-grade file upload infrastructure with resumable uploads,
          chunking, and built-in security features.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-4">
          <Link href="/docs" className="">
            <Button size={'lg'}>
              <span>Getting Started</span>
            </Button>
          </Link>

          <Link href="https://github.com/evansso-bit" className="">
            <Button variant={'outline'} size={'lg'}>
              <span>Star on GitHub</span>
            </Button>
          </Link>
        </div>
      </header>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center max-w-4xl w-full">
        <div className="space-y-2">
          <h3 className="text-3xl font-bold">99.99%</h3>
          <p className="text-fd-muted-foreground">Uptime SLA</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-3xl font-bold">50TB+</h3>
          <p className="text-fd-muted-foreground">Data Processed</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-3xl font-bold">&lt;100ms</h3>
          <p className="text-fd-muted-foreground">Global Latency</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-3xl font-bold">50GB</h3>
          <p className="text-fd-muted-foreground">Max File Size</p>
        </div>
      </div>

      {/* Demo Section */}
      <section className="w-full max-w-4xl">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Try It Out</h2>
          <p className="text-fd-muted-foreground max-w-2xl mx-auto">
            Experience resumable uploads with TusFlow and Uppy. Built with
            modern web standards and{' '}
            <span className="text-blue-500">Shadcn/UI</span> for a seamless
            developer experience.
          </p>
          <div className="mt-8">
            <VideoUpload />
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="w-full max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold">Enterprise-Ready Features</h2>
          <p className="text-fd-muted-foreground max-w-2xl mx-auto">
            Built for scale with advanced features that make file handling
            secure, reliable, and efficient.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="p-6 rounded-lg space-y-4 text-center">
            <div className="h-12 w-12 bg-orange-100 mx-auto rounded-lg flex items-center justify-center">
              <svg
                className="h-6 w-6 text-orange-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Advanced Upload Engine</h3>
            <ul className="space-y-3 text-fd-muted-foreground">
              <li>• TUS protocol v1.0.0 support</li>
              <li>• Smart chunking with size optimization</li>
              <li>• Real-time progress tracking</li>
              <li>• Automatic retry on failures</li>
              <li>• Parallel upload support</li>
            </ul>
          </div>

          <div className="p-6 rounded-lg space-y-4 text-center">
            <div className="h-12 w-12 bg-blue-300 mx-auto rounded-lg flex items-center justify-center">
              <svg
                className="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Enterprise Security</h3>
            <ul className="space-y-3 text-fd-muted-foreground">
              <li>• End-to-end encryption</li>
              <li>• Multiple authentication methods</li>
              <li>• Advanced rate limiting</li>
              <li>• Strict security headers</li>
              <li>• Checksum verification</li>
            </ul>
          </div>

          <div className="p-6 rounded-lg space-y-4 text-center">
            <div className="h-12 w-12 bg-green-100 mx-auto rounded-lg flex items-center justify-center">
              <svg
                className="h-6 w-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Global Infrastructure</h3>
            <ul className="space-y-3 text-fd-muted-foreground">
              <li>• HTTP/3 and QUIC protocol</li>
              <li>• Global CDN distribution</li>
              <li>• Auto-scaling capabilities</li>
              <li>• Multi-region failover</li>
              <li>• 24/7 reliability monitoring</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="w-full max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold">Powered By Industry Leaders</h2>
          <p className="text-fd-muted-foreground max-w-2xl mx-auto">
            Built on a foundation of reliable, scalable, and modern
            technologies.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center">
          <div className="text-center space-y-4">
            <Icons.hono className="size-16 mx-auto" />
            <div>
              <p className="font-medium">Hono.js</p>
              <p className="text-sm text-fd-muted-foreground">
                Ultra-fast backend
              </p>
            </div>
          </div>
          <div className="text-center space-y-4">
            <Icons.cloudflare className="size-16 mx-auto" />
            <div>
              <p className="font-medium">Cloudflare Workers</p>
              <p className="text-sm text-fd-muted-foreground">Edge computing</p>
            </div>
          </div>
          <div className="text-center space-y-4">
            <Icons.upstash className="size-16 mx-auto" />
            <div>
              <p className="font-medium">Upstash Redis</p>
              <p className="text-sm text-fd-muted-foreground">
                Serverless caching
              </p>
            </div>
          </div>
          <div className="text-center space-y-4">
            <svg
              className="size-16 mx-auto"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.634 12.467c2.065 0 3.74-1.674 3.74-3.74 0-2.065-1.674-3.739-3.74-3.739-2.065 0-3.739 1.674-3.739 3.74 0 2.065 1.674 3.739 3.74 3.739zm-13.268 0c2.065 0 3.739-1.674 3.739-3.74 0-2.065-1.674-3.739-3.74-3.739S1.627 6.662 1.627 8.727c0 2.065 1.674 3.739 3.74 3.739zm13.268 1.87c-2.065 0-3.739 1.674-3.739 3.739 0 2.065 1.674 3.74 3.74 3.74 2.065 0 3.739-1.674 3.739-3.74 0-2.065-1.674-3.739-3.74-3.739zm-13.268 0c-2.065 0-3.739 1.674-3.739 3.739 0 2.065 1.674 3.74 3.74 3.74s3.739-1.674 3.739-3.74c0-2.065-1.674-3.739-3.74-3.739z" />
            </svg>
            <div>
              <p className="font-medium">AWS S3</p>
              <p className="text-sm text-fd-muted-foreground">
                Reliable storage
              </p>
            </div>
          </div>
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Baselime</h1>
            <div>
              <p className="text-sm text-fd-muted-foreground">Observability</p>
            </div>
          </div>
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">OpenStatus</h1>
            <div>
              <p className="text-sm text-fd-muted-foreground">Monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="w-full max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">See TusFlow in Action</h2>
          <p className="text-fd-muted-foreground max-w-2xl mx-auto">
            Watch how TusFlow handles large file uploads with ease,
            automatically resuming interrupted transfers and maintaining data
            integrity.
          </p>
        </div>
        <div className="max-w-4xl mx-auto aspect-video bg-black/5 rounded-xl flex items-center justify-center">
          <div className="text-center space-y-4">
            <p className="text-fd-muted-foreground">Demo video coming soon</p>
            <p className="text-sm text-fd-muted-foreground">
              Subscribe to our newsletter for updates
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
