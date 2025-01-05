'use client';

import Link from 'next/link';

import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Clock, Github } from 'lucide-react';

import { Button } from '@/components/ui/button';

// Roadmap data
const roadmapItems = [
  {
    status: 'completed',
    title: 'Core Upload Infrastructure',
    description: 'TUS protocol implementation with chunked upload support',
    items: [
      'TUS v1.0.0 protocol support',
      'Chunked upload handling',
      'Upload resumability',
      'Progress tracking',
      'Error handling',
    ],
  },
  {
    status: 'in-progress',
    title: 'Advanced Features',
    description: 'Enhanced functionality for enterprise use cases',
    items: [
      'Multi-cloud storage support',
      'Advanced rate limiting',
      'Custom metadata handling',
      'Webhook integrations',
      'Analytics dashboard',
    ],
  },
  {
    status: 'planned',
    title: 'Enterprise Features',
    description: 'Security and scalability improvements',
    items: [
      'Role-based access control',
      'Audit logging',
      'Custom storage providers',
      'Advanced security features',
      'Enterprise support',
    ],
  },
];

export default function RoadmapPage() {
  return (
    <main className="flex flex-col items-center w-full overflow-hidden bg-white dark:bg-gray-950">
      {/* Header Section */}
      <section className="w-full py-16 sm:py-20 relative">
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
            <Link href="/" className="inline-block mb-8">
              <Button
                variant="ghost"
                className="group text-base hover:bg-orange-50 dark:hover:bg-orange-950/20"
              >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
              Product Roadmap
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our vision for the future of Tusflow. See what we're building and
              help shape the future of file uploads.
            </p>
            <div className="flex justify-center">
              <Link
                href="https://github.com/Tusflow/Tusflow-api/issues"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="text-base hover:bg-orange-50 dark:hover:bg-orange-950/20"
                >
                  <Github className="mr-2 h-5 w-5" />
                  Suggest Features
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="w-full py-16 sm:py-20 relative bg-gray-50/50 dark:bg-gray-900/50 border-y border-gray-100 dark:border-gray-800">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid gap-8 md:grid-cols-3">
            {roadmapItems.map((section, index) => (
              <motion.div
                key={section.title}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-xl blur-lg group-hover:blur-xl transition-all" />
                <div className="relative h-full p-8 rounded-xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border border-orange-100 dark:border-orange-900/50 hover:shadow-lg transition-all">
                  <div className="mb-6">
                    {section.status === 'completed' ? (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                        <CheckCircle className="mr-1.5 h-4 w-4" />
                        Completed
                      </span>
                    ) : section.status === 'in-progress' ? (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">
                        <Clock className="mr-1.5 h-4 w-4 animate-spin" />
                        In Progress
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400">
                        Planned
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {section.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {section.description}
                  </p>
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 mr-3 opacity-50" />
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

      {/* CTA Section */}
      <section className="w-full py-16 sm:py-20 relative">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
              Help Shape Our Future
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're building Tusflow in the open. Join our community and help us
              make file uploads better for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/docs" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-12 px-8 text-base bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                >
                  Read the Docs
                  <ArrowLeft className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link
                href="https://github.com/Tusflow"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto h-12 px-8 text-base hover:bg-orange-50 dark:hover:bg-orange-950/20"
                >
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
