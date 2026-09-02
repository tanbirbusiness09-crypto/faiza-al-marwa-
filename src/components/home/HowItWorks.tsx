'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import { HOW_IT_WORKS_DATA } from '@/lib/data';
import { smoothEase, staggerContainer, staggerItem } from '@/lib/animations';

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section className="container-custom py-14" id="how">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: smoothEase }}
        className="max-w-2xl mb-12"
      >
        <div className="eyebrow">{t('how_eyebrow', 'Simple process')}</div>
        <h2 className="text-3xl sm:text-4xl text-ink font-display font-bold">
          {t('how_title', 'How It Works')}
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 route-timeline"
      >
        {HOW_IT_WORKS_DATA.map((step, idx) => (
          <motion.div
            key={idx}
            variants={staggerItem}
            whileHover={{ y: -4 }}
            className="relative z-10 space-y-3"
          >
            <div className="w-12 h-12 rounded-full bg-teal-deep text-white font-display font-bold text-sm flex items-center justify-center shadow-md">
              {step.step}
            </div>
            <h3 className="text-base font-bold text-ink font-display pt-1">
              {step.title}
            </h3>
            <p className="text-xs sm:text-sm text-softText leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
