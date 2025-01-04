'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Circle, Rocket } from 'lucide-react';

import { Card } from '@/components/ui/card';

const completedFeatures = [
  {
    title: 'Initial project setup',
    description:
      'Foundation of the TusFlow project structure and configuration',
  },
  {
    title: 'TUS protocol implementation',
    description:
      'Core file upload functionality using the TUS resumable upload protocol',
  },
  {
    title: 'Upstash Redis integration',
    description: 'Caching layer implementation for improved performance',
  },
  {
    title: 'AWS S3 integration',
    description: 'Secure and scalable file storage solution',
  },
  {
    title: 'Unkey authentication',
    description: 'Secure API key management and authentication system',
  },
  {
    title: 'Rate limiting',
    description: 'Request throttling using Upstash Rate Limit',
  },
  {
    title: 'Cloudflare Workers',
    description: 'Edge computing deployment configuration',
  },
  {
    title: 'Hono framework',
    description: 'Modern web framework implementation',
  },
  {
    title: 'Error handling',
    description: 'Comprehensive error handling and logging system',
  },
  {
    title: 'Documentation',
    description: 'Detailed API documentation and usage guides',
  },
  {
    title: 'Security',
    description: 'Security policies and best practices implementation',
  },
  {
    title: 'Contributing guidelines',
    description: 'Documentation for community contributions',
  },
];

const upcomingFeatures = [
  {
    title: 'TusFlow UI Components',
    description: 'Ready-to-use UI components for file uploads',
    items: [
      'Drag and drop file upload zone',
      'Progress bar and status indicators',
      'File preview thumbnails',
      'Upload retry mechanism',
      'Responsive design for all devices',
    ],
  },
  {
    title: 'Core Enhancements',
    description: 'Improvements to the core functionality',
    items: [
      'Chunk size optimization',
      'Upload pause and resume',
      'Concurrent upload handling',
      'Automatic retry on failure',
      'Upload speed analytics',
    ],
  },
  {
    title: 'Developer Tools',
    description: 'Tools to improve developer experience',
    items: [
      'React hooks for easy integration',
      'Vue.js component support',
      'Detailed upload event system',
      'Custom middleware support',
      'Debug mode with detailed logs',
    ],
  },
  {
    title: 'Enterprise Features',
    description: 'Advanced features for enterprise users',
    items: [
      'Upload bandwidth control',
      'Custom storage providers',
      'Advanced security rules',
      'Usage analytics dashboard',
      'Team collaboration tools',
    ],
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function RoadmapPage() {
  return (
    <main className="flex flex-col items-center w-full">
      <section className="w-full py-12 sm:py-20 md:py-32 bg-gradient-to-b from-orange-50 to-white dark:from-orange-950/20 dark:to-background">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Project{' '}
              <span className="bg-gradient-to-r from-orange-600 to-orange-500 dark:from-orange-500 dark:to-orange-400 bg-clip-text text-transparent">
                Roadmap
              </span>
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Track our progress and upcoming features as we build the future of
              file uploads
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Completed Features */}
      <section className="w-full py-12 sm:py-16">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
              Completed Features
            </h2>
            <p className="text-muted-foreground">
              Features and milestones we've already achieved
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {completedFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
                <Card className="relative p-6 border border-orange-100 dark:border-orange-900/50 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Upcoming Features */}
      <section className="w-full py-12 sm:py-16 bg-gradient-to-b from-orange-50 to-white dark:from-orange-950/20 dark:to-background">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
              Coming Soon
            </h2>
            <p className="text-muted-foreground">
              Exciting features and improvements in development
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {upcomingFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
                <Card className="relative p-6 border border-orange-100 dark:border-orange-900/50 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Rocket className="h-6 w-6 text-orange-500" />
                      <div>
                        <h3 className="font-semibold">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {feature.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <Circle className="h-4 w-4 text-orange-500" />
                          <span className="text-sm text-muted-foreground">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Request Feature Button */}
      <section className="w-full py-12 sm:py-16">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Card className="p-8 border border-orange-100 dark:border-orange-900/50 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl">
              <h2 className="text-2xl font-bold mb-4">Missing Something?</h2>
              <p className="text-muted-foreground mb-6">
                We're always looking to improve TusFlow. If you have a feature
                in mind that would make your file upload experience better, let
                us know!
              </p>
              <a
                href="https://github.com/tusflow/tusflow-web/issues/new?labels=feature-request&template=feature_request.md"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-orange-600 to-red-600 text-white font-medium hover:from-orange-700 hover:to-red-700 transition-colors"
              >
                Request a Feature
              </a>
            </Card>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
