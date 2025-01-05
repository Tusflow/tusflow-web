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
      className="w-full border-t  backdrop-blur-sm border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <motion.div
            className="grid grid-cols-1 gap-12 xl:grid-cols-3"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            {/* Company Info */}
            <motion.div className="space-y-8" variants={fadeInUp}>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
                    Tusflow
                  </span>
                </h3>
                <p className="text-base text-muted-foreground max-w-md">
                  Modern file upload infrastructure for the edge. Built for
                  developers, designed for scale.
                </p>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-lg blur-lg group-hover:blur-xl transition-all" />
                <div className="relative">
                  <Suspense
                    fallback={
                      <div className="h-6 w-24 bg-muted animate-pulse rounded" />
                    }
                  >
                    <StatusWidget
                      slug="Tusflow"
                      href="https://Tusflow.openstatus.dev"
                    />
                  </Suspense>
                </div>
              </div>
            </motion.div>

            {/* Resources */}
            <motion.div className="space-y-6" variants={fadeInUp}>
              <h3 className="text-lg font-semibold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
                  Resources
                </span>
              </h3>
              <ul className="space-y-4">
                {[
                  { href: '/docs/api', label: 'Documentation' },
                  { href: '/docs/openapi', label: 'OpenAPI Reference' },
                  { href: '/roadmap', label: 'Roadmap' },
                ].map((item, index) => (
                  <motion.li key={index} variants={fadeInUp}>
                    <Link
                      href={item.href}
                      className="group flex items-center text-base text-muted-foreground hover:text-orange-500 transition-colors"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 opacity-50 group-hover:opacity-100 transition-opacity mr-3" />
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div className="space-y-6" variants={fadeInUp}>
              <h3 className="text-lg font-semibold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
                  Connect With Us
                </span>
              </h3>
              <div className="flex space-x-4">
                {[
                  { href: 'https://github.com/Tusflow/', icon: 'github' },
                  { href: 'https://x.com/evansso_', icon: 'twitter' },
                ].map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-lg blur-lg group-hover:blur-xl transition-all" />
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border border-orange-100 dark:border-orange-900/50 text-muted-foreground hover:text-orange-500 transition-colors"
                    >
                      {Icons[social.icon]({ className: 'h-5 w-5' })}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800"
            variants={fadeInUp}
          >
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} Tusflow. Built with{' '}
              <span className="text-orange-500">❤️</span> for the open source
              community.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
