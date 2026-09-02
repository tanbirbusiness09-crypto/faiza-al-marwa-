'use client';

import React from 'react';
import { motion } from 'motion/react';
import { smoothEase } from '@/lib/animations';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: smoothEase }}
    >
      {children}
    </motion.div>
  );
}
