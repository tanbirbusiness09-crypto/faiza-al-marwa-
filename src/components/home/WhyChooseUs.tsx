'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import { WHY_CHOOSE_US_DATA } from '@/lib/data';
import IconRenderer from '@/components/common/IconRenderer';
import { smoothEase, staggerContainer, staggerItem } from '@/lib/animations';

export default function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section className="bg-ink text-white py-16 sm:py-20 border-y border-paper-line/20" id="why">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: smoothEase }}
          className="max-w-2xl mb-12"
        >
          <div className="text-xs font-bold uppercase tracking-wider text-gold-light mb-2 flex items-center gap-2">
            <span className="w-4 h-0.5 bg-gold-light" />
            <span>{t('why_eyebrow', 'Why FAIZA AL MARWA')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl text-white font-display font-bold">
            {t('why_title', 'Why Choose FAIZA AL MARWA?')}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-paper-white/65">
            A proven partner bringing operational integrity, licensed regulatory mastery, and unified service delivery.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
        >
          {WHY_CHOOSE_US_DATA.map((item, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              whileHover={{ backgroundColor: 'rgba(18, 58, 51, 0.6)' }}
              transition={{ duration: 0.2 }}
              className="bg-ink p-7 sm:p-8 flex flex-col justify-between transition-colors"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gold-light mb-5">
                  <IconRenderer name={item.iconName} className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white font-display mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-paper-white/65 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
