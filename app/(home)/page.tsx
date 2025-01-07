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

import { CopyToClipboard } from '@/components/copytoclipboard';
import { VideoUpload } from '@/components/file-uploader';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Icons } from '@/components/ui/icons';

// Tech stack data
const techStack = [
  {
    name: 'Hono',
    icon: 'hono',
    role: 'API Framework',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    name: 'Cloudflare',
    icon: 'cloudflare',
    role: 'Edge Computing',
    gradient: 'from-orange-500 to-orange-600',
  },
  {
    name: 'Upstash',
    icon: 'upstash',
    role: 'Serverless Redis Database & Rate Limiting',
    gradient: 'from-purple-500 to-purple-600',
  },
  {
    name: 'AWS S3',
    role: 'Storage',
    gradient: 'from-pink-500 to-pink-600',
  },
  {
    name: 'Unkey',
    role: 'API Key Management',
    gradient: 'from-green-500 to-green-600',
  },
  {
    name: 'Better Stack',
    role: 'Observability',
    gradient: 'from-pink-500 to-pink-600',
  },
  {
    name: 'OpenStatus',
    role: 'Status Page & Monitoring',
    gradient: 'from-indigo-500 to-indigo-600',
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-col items-center w-full overflow-hidden bg-white dark:bg-gray-950">
      {/* Hero Section with Improved Background */}
      <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)]" />
          <div className="absolute left-0 right-0 top-0 h-[200px] bg-gradient-to-b from-orange-100 opacity-20 dark:from-orange-900 dark:opacity-20" />
        </div>
        <div className="container relative px-4 sm:px-6 lg:px-8 mx-auto">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium rounded-full bg-orange-100/80 text-orange-600 dark:bg-orange-900/80 dark:text-orange-300 backdrop-blur-sm">
                Open Source
              </span>
              <span className="px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium rounded-full bg-gray-100/80 text-gray-600 dark:bg-gray-800/80 dark:text-gray-300 backdrop-blur-sm">
                MIT License
              </span>
            </motion.div>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6 lg:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-orange-500 to-red-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Modern File Upload Infrastructure
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              A high-performance, open-source implementation of the TUS protocol
              for reliable file uploads. Built with Cloudflare Workers and
              modern web standards.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link href="/docs/api" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto font-medium text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-8 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                >
                  Quick Start
                  <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
                </Button>
              </Link>
              <Link href="https://git.new/tusflow" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto h-10 sm:h-12 px-6 sm:px-8 text-sm sm:text-base hover:bg-orange-50 dark:hover:bg-orange-950/20"
                >
                  <Github className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                  Star on GitHub
                </Button>
              </Link>
            </motion.div>
            <motion.div
              className="relative group mx-auto max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl blur group-hover:blur-xl transition-all" />
              <div className="relative flex items-center justify-center gap-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-orange-200/50 dark:border-orange-800/50">
                <code className="text-xs sm:text-sm md:text-base text-gray-800 dark:text-gray-200">
                  git clone https://github.com/Tusflow/tusflow-api.git
                </code>
                <CopyToClipboard text="git clone https://github.com/Tusflow/tusflow-api.git" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section with Improved Background */}
      <motion.section
        className="py-12 sm:py-16 md:py-20 w-full relative bg-gray-50/50 dark:bg-gray-900/50 border-y border-gray-100 dark:border-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { icon: Shield, label: 'MIT', value: 'Licensed' },
              { icon: Star, label: '100%', value: 'Free & Open' },
              { icon: Globe, label: 'Edge', value: 'Powered' },
              { icon: Upload, label: '50GB+', value: 'File Support' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-xl blur-lg group-hover:blur-xl transition-all" />
                <div className="relative p-4 sm:p-6 text-center rounded-xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-orange-100 dark:border-orange-900/50">
                  <div className="flex items-center justify-center mb-2 sm:mb-3">
                    <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-gradient-to-r from-orange-500 to-red-500" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {stat.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Demo Section with Clean Background */}
      <section className="py-12 sm:py-16 md:py-24 w-full bg-white dark:bg-gray-950">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <motion.div
            className="text-center mb-8 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
              Try It Now
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience Tusflow's powerful features firsthand. No account
              required.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <VideoUpload />
          </motion.div>
          <motion.div
            className="mt-6 sm:mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
              Want to build this UI? Check out our{' '}
              <Link
                href="/docs/ui"
                className="text-orange-500 hover:text-orange-600 underline underline-offset-4"
              >
                UI documentation
              </Link>
            </p>
            <Link href="/docs/api">
              <Button
                variant="outline"
                className="h-9 sm:h-11 px-4 sm:px-6 text-sm sm:text-base hover:bg-orange-50 dark:hover:bg-orange-950/20"
              >
                View Documentation
                <ArrowRight className="ml-2 h-3 sm:h-4 w-3 sm:w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Grid with Improved Background */}
      <section className="py-16 sm:py-20 md:py-32 w-full relative bg-gray-50/50 dark:bg-gray-900/50 border-y border-gray-100 dark:border-gray-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)]" />
        </div>
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 md:mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
              Built for the Modern Web
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              High-performance file uploads shouldn't be complicated. We've made
              it simple, reliable, and completely open source.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative h-full p-6 sm:p-8 rounded-2xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-orange-100 dark:border-orange-900/50 hover:shadow-xl transition-all">
                  <div className="mb-4 sm:mb-6 inline-flex p-2 sm:p-3 rounded-xl bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20">
                    <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 text-gradient-to-r from-orange-600 to-red-600" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                    {feature.title}
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {feature.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm sm:text-base text-muted-foreground group-hover:text-foreground transition-colors"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Clean Background */}
      <motion.section
        className="py-16 sm:py-20 md:py-32 w-full relative bg-white dark:bg-gray-950"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        <div className="container relative px-4 sm:px-6 lg:px-8 mx-auto">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
              Join the Open Source Revolution
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10">
              Build better upload experiences with our community of developers.
              Free forever, backed by a growing ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-10">
              <Link href="/docs/api" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-10 sm:h-12 px-6 sm:px-8 text-sm sm:text-base bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                >
                  Read the Docs
                  <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
                </Button>
              </Link>
              <Link
                href="https://github.com/Tusflow"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto h-10 sm:h-12 px-6 sm:px-8 text-sm sm:text-base hover:bg-orange-50 dark:hover:bg-orange-950/20"
                >
                  <Github className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                  Star on GitHub
                </Button>
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm sm:text-base text-muted-foreground">
              {['MIT Licensed', 'TypeScript Ready', 'Zero Dependencies'].map(
                (item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-green-500" />
                    <span>{item}</span>
                  </div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Tech Stack Section with Subtle Background */}
      <section className="py-12 sm:py-16 md:py-24 w-full bg-gray-50/50 dark:bg-gray-900/50 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
            Powered By Modern Tech Stack
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-xl blur-lg group-hover:blur-xl transition-all" />
                <div className="relative p-4 sm:p-6 rounded-xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border border-orange-100 dark:border-orange-900/50 flex flex-col items-center justify-center hover:shadow-lg transition-all">
                  {tech.icon ? (
                    <div className="w-8 h-8 sm:w-12 sm:h-12 mb-3 sm:mb-4">
                      {Icons[tech.icon]({
                        className: `w-full h-full bg-clip-text text-transparent bg-gradient-to-r ${tech.gradient}`,
                      })}
                    </div>
                  ) : (
                    <div className="w-8 h-8 sm:w-12 sm:h-12 mb-3 sm:mb-4 flex items-center justify-center text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
                      {tech.name.charAt(0)}
                    </div>
                  )}
                  <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-center">
                    {tech.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground text-center">
                    {tech.role}
                  </p>
                </div>
              </motion.div>
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
      'Auto-scaling',
      'High availability',
    ],
  },
];
