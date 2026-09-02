'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import { DESTINATIONS_DATA } from '@/lib/data';
import { ArrowRight, MapPin } from 'lucide-react';
import { smoothEase, staggerContainer, staggerItem } from '@/lib/animations';

const SKYLINES: Record<string, React.ReactNode> = {
  Madinah: (
    <svg viewBox="0 0 300 180" preserveAspectRatio="xMidYMax slice" className="absolute inset-0 w-full h-full opacity-30">
      <rect width="300" height="180" fill="none" />
      <g fill="#FFFDF8">
        <rect x="0" y="140" width="300" height="40" />
        <rect x="120" y="60" width="60" height="80" />
        <path d="M150 20a20 20 0 0 1 20 20h-40a20 20 0 0 1 20-20Z" />
        <rect x="118" y="40" width="6" height="40" />
        <rect x="176" y="40" width="6" height="40" />
        <circle cx="121" cy="38" r="4" />
        <circle cx="179" cy="38" r="4" />
      </g>
    </svg>
  ),
  Jeddah: (
    <svg viewBox="0 0 300 180" preserveAspectRatio="xMidYMax slice" className="absolute inset-0 w-full h-full opacity-30">
      <g fill="#FFFDF8">
        <rect x="0" y="150" width="300" height="30" />
        <rect x="30" y="90" width="24" height="60" />
        <rect x="70" y="60" width="20" height="90" />
        <rect x="105" y="100" width="22" height="50" />
        <rect x="150" y="40" width="16" height="110" />
        <rect x="180" y="80" width="24" height="70" />
        <rect x="220" y="65" width="18" height="85" />
        <rect x="255" y="95" width="20" height="55" />
      </g>
    </svg>
  ),
  Riyadh: (
    <svg viewBox="0 0 300 180" preserveAspectRatio="xMidYMax slice" className="absolute inset-0 w-full h-full opacity-30">
      <g fill="#FFFDF8">
        <rect x="0" y="150" width="300" height="30" />
        <polygon points="140,20 160,20 170,150 130,150" />
        <circle cx="150" cy="50" r="10" fill="none" stroke="#FFFDF8" strokeWidth="4" />
        <rect x="50" y="80" width="30" height="70" />
        <rect x="220" y="60" width="35" height="90" />
      </g>
    </svg>
  ),
  Dubai: (
    <svg viewBox="0 0 300 180" preserveAspectRatio="xMidYMax slice" className="absolute inset-0 w-full h-full opacity-30">
      <g fill="#FFFDF8">
        <rect x="0" y="155" width="300" height="25" />
        <polygon points="150,15 168,155 132,155" />
        <rect x="60" y="90" width="16" height="65" />
        <rect x="90" y="70" width="14" height="85" />
        <rect x="200" y="75" width="16" height="80" />
        <rect x="230" y="100" width="18" height="55" />
      </g>
    </svg>
  ),
  Istanbul: (
    <svg viewBox="0 0 300 180" preserveAspectRatio="xMidYMax slice" className="absolute inset-0 w-full h-full opacity-30">
      <g fill="#FFFDF8">
        <rect x="0" y="150" width="300" height="30" />
        <circle cx="150" cy="110" r="34" />
        <rect x="130" y="140" width="40" height="40" />
        <rect x="60" y="60" width="8" height="90" />
        <circle cx="64" cy="58" r="6" />
        <rect x="228" y="55" width="8" height="95" />
        <circle cx="232" cy="53" r="6" />
      </g>
    </svg>
  ),
  Cairo: (
    <svg viewBox="0 0 300 180" preserveAspectRatio="xMidYMax slice" className="absolute inset-0 w-full h-full opacity-30">
      <g fill="#FFFDF8">
        <rect x="0" y="160" width="300" height="20" />
        <polygon points="80,160 130,70 180,160" />
        <polygon points="150,160 195,95 240,160" />
        <polygon points="40,160 70,105 100,160" />
      </g>
    </svg>
  ),
};

export default function DestinationsSlider() {
  const { t } = useLanguage();

  return (
    <section className="container-custom py-14" id="destinations">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: smoothEase }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4"
      >
        <div className="max-w-xl">
          <div className="eyebrow">{t('dest_eyebrow', 'Where to next')}</div>
          <h2 className="text-3xl sm:text-4xl text-ink font-display font-bold">
            {t('dest_title', 'Explore Destinations')}
          </h2>
        </div>
        <Link
          href="#booking"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-teal-deep hover:text-gold transition-colors group"
        >
          <span>{t('cta_explore_all_destinations', 'View All Flight Routes')}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
        className="flex gap-6 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory"
      >
        {DESTINATIONS_DATA.map((dest) => (
          <motion.div
            key={dest.id}
            variants={staggerItem}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.22, ease: smoothEase }}
            className="flex-none w-[280px] sm:w-[320px] snap-start bg-paper-white border border-paper-line rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
          >
            {/* Silhouette Header */}
            <div
              className="h-44 relative overflow-hidden flex items-start justify-between p-4"
              style={{ background: dest.gradient }}
            >
              {SKYLINES[dest.skylineKey]}
              <span className="relative z-10 text-[11px] font-bold bg-gold text-ink px-3 py-1 rounded-full shadow-sm">
                {dest.tag}
              </span>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col justify-between h-[200px]">
              <div>
                <div className="flex items-center gap-1 text-[11px] uppercase tracking-wider text-softText font-semibold">
                  <MapPin className="w-3 h-3 text-gold" />
                  <span>{dest.country}</span>
                </div>
                <h3 className="text-xl font-bold text-ink font-display mt-1 group-hover:text-gold transition-colors">
                  {dest.name}
                </h3>
                <p className="text-xs text-softText mt-2 leading-relaxed line-clamp-3">
                  {dest.description}
                </p>
              </div>

              <div className="pt-3 border-t border-paper-line flex items-center justify-between">
                <span className="text-[11px] text-teal-deep font-semibold">
                  {dest.popularFor}
                </span>
                <Link
                  href="#booking"
                  className="inline-flex items-center gap-1 text-xs font-bold text-teal-deep group-hover:text-gold transition-colors"
                >
                  <span>Book Trip</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
