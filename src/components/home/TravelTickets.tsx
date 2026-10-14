'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import { TRAVEL_PACKAGES_DATA } from '@/lib/data';
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
          {t('travel_title', 'International Tour Packages')}
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
            className="bg-paper-white border border-paper-line rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
          >
            {/* Destination Image + Place */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={pkg.image}
                alt={pkg.place}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              <span className="absolute left-4 bottom-3 font-display font-bold text-xl text-white drop-shadow">
                {pkg.place}
              </span>
            </div>

            {/* Book Now button with package name + price */}
            <div className="p-4 mt-auto">
              <motion.div {...hoverButton}>
                <Link
                  href="#booking"
                  className="block w-full px-4 py-3 bg-navy hover:bg-navy-light text-white rounded-lg shadow-sm text-center transition-colors"
                >
                  <span className="block text-xs font-semibold leading-snug line-clamp-2">
                    {pkg.title}
                  </span>
                  <strong className="block font-display text-lg font-bold leading-tight mt-0.5">
                    SAR {pkg.price}
                  </strong>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
