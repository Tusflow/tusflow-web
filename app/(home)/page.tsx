'use client';

import Link from 'next/link';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  Github,
  Globe,
  Shield,
  Star,
  Upload,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Icons } from '@/components/ui/icons';
import { VideoUpload } from '@/components/video-upload';

// Tech stack data
const techStack = [
  {
    name: 'Hono',
    icon: 'hono',
    role: 'API Framework',
  },
  {
    name: 'Cloudflare',
    icon: 'cloudflare',
    role: 'Edge Computing',
  },
  {
    name: 'Upstash',
    icon: 'upstash',
    role: 'Rate Limiting & Caching',
  },
  {
    name: 'Unkey',
    role: 'API Key Management',
  },
  {
    name: 'Better Stack',
    role: 'Observability',
  },
  {
    name: 'OpenStatus',
    role: 'Status Page & Monitoring',
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-col items-center w-full">
      {/* Attraction Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-b from-orange-50 to-white dark:from-orange-950/20 dark:to-background">
        <div className="container px-4 mx-auto">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* SEO-Friendly Headline */}
            <motion.div
              className="flex items-center justify-center gap-2 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400">
                Open Source
              </span>
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-gray-100 dark:bg-gray-800">
                MIT License
              </span>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Modern File Upload Infrastructure{' '}
              <span className="text-orange-600 dark:text-orange-500">
                for Developers
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              A high-performance, open-source implementation of the TUS protocol
              for reliable file uploads. Built with Cloudflare Workers and
              modern web standards.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link href="/docs">
                <Button size="lg" className="font-medium">
                  Quick Start
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://github.com/evansso-bit">
                <Button variant="outline" size="lg">
                  <Github className="mr-2 h-4 w-4" />
                  Star on GitHub
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Awareness Section - Social Proof */}
      <motion.section
        className="py-16 w-full border-y dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Shield className="h-5 w-5 text-orange-500 mr-2" />
                <h3 className="text-2xl font-bold">MIT</h3>
              </div>
              <p className="text-muted-foreground">Licensed</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-5 w-5 text-orange-500 mr-2" />
                <h3 className="text-2xl font-bold">100%</h3>
              </div>
              <p className="text-muted-foreground">Free & Open</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Globe className="h-5 w-5 text-orange-500 mr-2" />
                <h3 className="text-2xl font-bold">Edge</h3>
              </div>
              <p className="text-muted-foreground">Powered</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Upload className="h-5 w-5 text-orange-500 mr-2" />
                <h3 className="text-2xl font-bold">50GB+</h3>
              </div>
              <p className="text-muted-foreground">File Support</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Nurture Section - Interactive Demo */}
      <section className="py-20 w-full">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Try It Now</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience TusFlow's powerful features firsthand. No account
              required.
            </p>
          </div>
          <VideoUpload />
          <div className="mt-8 text-center">
            <Link href="/docs">
              <Button variant="outline">
                View Documentation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid - Benefits Focused */}
      <section className="py-24 w-full">
        <div className="container px-4 mx-auto">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
              Built for the Modern Web
            </h2>
            <p className="text-xl text-muted-foreground">
              High-performance file uploads shouldn't be complicated. We've made
              it simple, reliable, and completely open source.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
                <div className="relative p-8 rounded-3xl border border-orange-100 dark:border-orange-900/50 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl hover:shadow-xl transition-all">
                  <div className="mb-6 inline-block p-4 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20">
                    <feature.icon className="h-8 w-8 text-orange-600 dark:text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">
                    {feature.title}
                  </h3>
                  <ul className="space-y-3">
                    {feature.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-orange-500 mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Code Preview Section */}
          <motion.div
            className="max-w-4xl mx-auto rounded-3xl overflow-hidden border border-orange-100 dark:border-orange-900/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-900 px-4 py-2 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <p className="text-gray-400 text-sm">Example Usage</p>
            </div>
            <div className="bg-gray-950 p-6 overflow-x-auto">
              <pre className="text-gray-100 text-sm">
                <code>{`import { TusClient } from '@tusflow/client'

const client = new TusClient({
  endpoint: 'https://api.tusflow.dev',
  chunkSize: 5242880, // 5MB chunks
  retryDelays: [0, 1000, 3000, 5000],
  parallelUploads: 2
})

// Start upload with automatic resumability
const upload = client.createUpload(file, {
  metadata: {
    filename: file.name,
    filetype: file.type
  }
})

upload.start()`}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Conversion Section */}
      <motion.section
        className="py-24 w-full bg-gradient-to-b from-orange-50 to-white dark:from-orange-950/20 dark:to-background"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="container px-4 mx-auto">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Join the Open Source Revolution
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Build better upload experiences with our community of developers.
              Free forever, backed by a growing ecosystem.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link href="/docs">
                <Button size="lg" className="h-14 px-8 text-lg">
                  Read the Docs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://github.com/evansso-bit">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-8 text-lg"
                >
                  <Github className="mr-2 h-5 w-5" />
                  Star on GitHub
                </Button>
              </Link>
            </div>
            <div className="mt-12 flex items-center justify-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>MIT Licensed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>TypeScript Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Zero Dependencies</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Tech Stack Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Powered By Modern Tech Stack
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center justify-center p-6 rounded-lg bg-gray-100 dark:bg-gray-800/50 hover:bg-gray-200 dark:hover:bg-gray-800/70 transition-colors"
              >
                {tech.icon ? (
                  <div className="w-12 h-12 mb-4">
                    {Icons[tech.icon]({
                      className: 'w-full h-full text-gray-900 dark:text-white',
                    })}
                  </div>
                ) : (
                  <div className="w-12 h-12 mb-4 flex items-center justify-center text-xl font-bold text-gray-900 dark:text-white">
                    {tech.name.charAt(0)}
                  </div>
                )}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {tech.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  {tech.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    title: 'Modern Protocol',
    icon: Upload,
    items: [
      'TUS protocol v1.0.0',
      'Chunked uploads',
      'Resumable transfers',
      'Progress tracking',
      'Parallel processing',
    ],
  },
  {
    title: 'Developer First',
    icon: Shield,
    items: [
      'TypeScript support',
      'Comprehensive docs',
      'Easy integration',
      'Flexible API',
      'MIT licensed',
    ],
  },
  {
    title: 'Edge Powered',
    icon: Globe,
    items: [
      'Cloudflare Workers',
      'Global edge network',
      'HTTP/3 & QUIC',
      'Auto-scaling',
      'High availability',
    ],
  },
];
