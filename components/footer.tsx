'use client';

import { Suspense } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { StatusWidget } from '@openstatus/react';
import { motion } from 'framer-motion';

import { Icons } from './ui/icons';

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

export default function Footer() {
  const pathname = usePathname();

  if (pathname.startsWith('/docs')) {
    return null;
  }

  return (
    <motion.footer
      className="w-full border-t border-orange-900/10 dark:border-orange-100/10 bg-gradient-to-b from-transparent to-orange-50/5 dark:to-orange-950/5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <motion.div
            className="grid grid-cols-1 gap-8 xl:grid-cols-3"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            {/* Company Info */}
            <motion.div className="space-y-6" variants={fadeInUp}>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
                  TusFlow
                </h3>
                <p className="text-base text-muted-foreground max-w-md">
                  Modern file upload infrastructure for the edge. Built for
                  developers, designed for scale.
                </p>
              </div>
              <div>
                <Suspense
                  fallback={
                    <div className="h-6 w-24 bg-muted animate-pulse rounded" />
                  }
                >
                  <StatusWidget
                    slug="tusflow"
                    href="https://tusflow.openstatus.dev"
                  />
                </Suspense>
              </div>
            </motion.div>

            {/* Resources */}
            <motion.div className="space-y-6" variants={fadeInUp}>
              <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
                Resources
              </h3>
              <ul className="space-y-4">
                <motion.li variants={fadeInUp}>
                  <Link
                    href="/docs/api"
                    className="group flex items-center text-base text-muted-foreground hover:text-orange-500 transition-colors"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500/50 group-hover:bg-orange-500 transition-colors mr-3" />
                    Documentation
                  </Link>
                </motion.li>
                <motion.li variants={fadeInUp}>
                  <Link
                    href="/docs/openapi"
                    className="group flex items-center text-base text-muted-foreground hover:text-orange-500 transition-colors"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500/50 group-hover:bg-orange-500 transition-colors mr-3" />
                    OpenAPI Reference
                  </Link>
                </motion.li>
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div className="space-y-6" variants={fadeInUp}>
              <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
                Connect With Us
              </h3>
              <div className="flex space-x-5">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-lg p-2 hover:bg-orange-500/10 transition-colors"
                >
                  <Link
                    href="https://github.com/Tusflow/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-orange-500 transition-colors"
                  >
                    <Icons.github className="h-5 w-5" />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-lg p-2 hover:bg-orange-500/10 transition-colors"
                >
                  <Link
                    href="https://x.com/evansso_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-orange-500 transition-colors"
                  >
                    <Icons.twitter className="h-5 w-5" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-12 pt-8 border-t border-orange-900/10 dark:border-orange-100/10"
            variants={fadeInUp}
          >
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} TusFlow. Built with{' '}
              <span className="text-orange-500">❤️</span> for the open source
              community.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
