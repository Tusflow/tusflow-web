'use client';

import { useOptimistic, useTransition } from 'react';

import { motion } from 'framer-motion';
import { ClipboardCheck, ClipboardCopy } from 'lucide-react';

export const CopyToClipboard = ({ text }: { text: string }) => {
  const [state, set_state] = useOptimistic<'idle' | 'copied'>('idle');
  const [_, startTransition] = useTransition();

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => {
        startTransition(async () => {
          navigator.clipboard.writeText(text);
          set_state('copied');
          await new Promise((resolve) => setTimeout(resolve, 2000));
          set_state('idle');
        });
      }}
    >
      {state === 'idle' ? (
        <ClipboardCopy className="w-4 h-4 text-stone-500 dark:text-stone-400 hover:text-stone-600 dark:hover:text-stone-300" />
      ) : (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <ClipboardCheck className="w-4 h-4 text-green-600 dark:text-green-400" />
        </motion.div>
      )}
    </motion.button>
  );
};
