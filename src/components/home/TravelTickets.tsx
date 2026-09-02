'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import { TRAVEL_PACKAGES_DATA } from '@/lib/data';
import { Sparkles } from 'lucide-react';
import { smoothEase, staggerContainer, staggerItem, hoverButton } from '@/lib/animations';

export default function TravelTickets() {
  const { t } = useLanguage();

  return (
    <section className="container-custom py-14" id="travel">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: smoothEase }}
        className="max-w-2xl mb-10"
      >
        <div className="eyebrow">{t('travel_eyebrow', 'Ready-made trips')}</div>
        <h2 className="text-3xl sm:text-4xl text-ink font-display font-bold">
          {t('travel_title', 'Featured Travel Experiences')}
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {TRAVEL_PACKAGES_DATA.map((pkg) => (
          <motion.div
            key={pkg.id}
            variants={staggerItem}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.22, ease: smoothEase }}
            className="bg-paper-white border border-paper-line rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            {/* Ticket Top */}
            <div className="p-6">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gold">
                  {pkg.category}
                </span>
                {pkg.featured && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-gold/15 text-gold px-2 py-0.5 rounded-full">
                    <Sparkles className="w-2.5 h-2.5" />
                    <span>Popular</span>
                  </span>
                )}
              </div>

              <h3 className="text-lg font-bold text-ink font-display min-h-[52px]">
                {pkg.title}
              </h3>

              {/* Route Line */}
              <div className="flex items-center gap-3 my-4 py-2 border-y border-paper-line/60">
                <span className="font-display font-bold text-base text-ink">{pkg.from}</span>
                <span className="route-line" />
                <span className="font-display font-bold text-base text-ink">{pkg.to}</span>
              </div>

              <div className="text-xs text-softText">
                Duration: <strong className="text-ink">{pkg.duration}</strong>
              </div>
            </div>

            {/* Perforation */}
            <div className="border-t-2 border-dashed border-paper-line mx-6 relative">
              <span className="w-4 h-4 rounded-full bg-paper absolute -left-8 -top-2 border border-paper-line/40" />
              <span className="w-4 h-4 rounded-full bg-paper absolute -right-8 -top-2 border border-paper-line/40" />
            </div>

            {/* Ticket Bottom */}
            <div className="p-6 bg-paper/30 flex items-center justify-between">
              <div>
                <span className="block text-[10px] uppercase text-softText font-medium">Starting From</span>
                <strong className="font-display text-xl text-teal-deep font-bold">
                  SAR {pkg.price}
                </strong>
              </div>

              <motion.div {...hoverButton}>
                <Link
                  href="#booking"
                  className="px-4 py-2 bg-gold hover:bg-gold-light text-ink font-bold text-xs rounded-lg shadow-sm block"
                >
                  {t('cta_book_now', 'Book Now')}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
