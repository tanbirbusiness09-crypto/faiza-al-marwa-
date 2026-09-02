'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import { DIGITAL_SERVICES_DATA } from '@/lib/data';
import IconRenderer from '@/components/common/IconRenderer';
import { ArrowRight } from 'lucide-react';
import { smoothEase, staggerContainer, staggerItem } from '@/lib/animations';

export default function DigitalServicesGrid() {
  const { t } = useLanguage();

  return (
    <section className="container-custom py-14" id="digital">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: smoothEase }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4"
      >
        <div className="max-w-xl">
          <div className="eyebrow">{t('digi_eyebrow', 'Grow online')}</div>
          <h2 className="text-3xl sm:text-4xl text-ink font-display font-bold">
            {t('digi_title', 'Digital Services & Tech Solutions')}
          </h2>
        </div>
        <Link
          href="#booking"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-teal-deep hover:text-gold transition-colors group"
        >
          <span>{t('cta_explore_digital', 'Request Digital Consultation')}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-paper-line border border-paper-line rounded-xl overflow-hidden shadow-sm"
      >
        {DIGITAL_SERVICES_DATA.map((item) => (
          <motion.div
            key={item.id}
            variants={staggerItem}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2, ease: smoothEase }}
            className="bg-paper-white p-5 sm:p-6 flex flex-col justify-between hover:bg-paper transition-colors group"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-paper-2 flex items-center justify-center text-teal-deep mb-4 group-hover:bg-teal-deep group-hover:text-white transition-colors">
                <IconRenderer name={item.iconName} className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-ink font-display group-hover:text-teal-deep transition-colors mb-1.5">
                {item.title}
              </h3>
              <p className="text-xs text-softText leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="pt-4 mt-2">
              <Link
                href="#booking"
                className="inline-flex items-center gap-1 text-[11px] font-bold text-teal-deep group-hover:text-gold transition-colors"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
