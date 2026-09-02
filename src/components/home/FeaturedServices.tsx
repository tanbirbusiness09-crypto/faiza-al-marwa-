'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import { SERVICES_DATA } from '@/lib/data';
import IconRenderer from '@/components/common/IconRenderer';
import { ArrowRight } from 'lucide-react';
import { smoothEase, staggerContainer, staggerItem } from '@/lib/animations';

export default function FeaturedServices() {
  const { t } = useLanguage();

  return (
    <section className="container-custom py-14" id="featured-services">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: smoothEase }}
        className="max-w-2xl mb-10"
      >
        <div className="eyebrow">{t('fs_eyebrow', 'What we do')}</div>
        <h2 className="text-3xl sm:text-4xl text-ink font-display font-bold">
          {t('fs_title', 'Our Featured Services')}
        </h2>
        <p className="mt-3 text-sm sm:text-base text-softText">
          {t('fs_sub', 'A snapshot of where we help most. The full list lives on the Services page.')}
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {SERVICES_DATA.map((service) => (
          <motion.div
            key={service.id}
            variants={staggerItem}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.22, ease: smoothEase }}
            className="bg-paper-white border border-paper-line rounded-r-xl border-l-4 p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            style={{ borderLeftColor: service.color }}
          >
            <div>
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 text-white"
                style={{ backgroundColor: service.color }}
              >
                <IconRenderer name={service.iconName} className="w-5 h-5" />
              </div>

              <span
                className="text-[11px] font-bold tracking-wider uppercase block mb-1"
                style={{ color: service.color }}
              >
                {service.categoryLabel}
              </span>

              <h3 className="text-xl font-bold text-ink font-display mb-2">
                {service.title}
              </h3>

              <p className="text-xs sm:text-sm text-softText leading-relaxed mb-4">
                {service.description}
              </p>

              {service.features && (
                <ul className="space-y-1.5 mb-6">
                  {service.features.slice(0, 3).map((feat, fidx) => (
                    <li key={fidx} className="text-xs text-softText flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div>
              <Link
                href="#booking"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-deep hover:text-gold transition-colors group"
              >
                <span>Request Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
