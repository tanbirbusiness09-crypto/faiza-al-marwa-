'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ChevronRight as ArrowRightIcon } from 'lucide-react';
import { smoothEase, staggerContainer, staggerItem, hoverCard } from '@/lib/animations';

interface FinderServiceItem {
  icon: string;
  title: string;
  sub: string;
  href: string;
}

const TAB_DATA: Record<string, { label: string; items: FinderServiceItem[] }> = {
  travel: {
    label: 'Travel',
    items: [
      { icon: '✈️', title: 'Flight Booking', sub: 'Domestic & International', href: '#booking' },
      { icon: '🏢', title: 'Hotel Reservations', sub: 'Stay with Comfort', href: '#booking' },
      { icon: '🗺️', title: 'Custom Tour Packages', sub: 'Tailored for You', href: '#travel' },
      { icon: '🕋', title: 'Umrah & Ziyarah', sub: 'Spiritual Journey', href: '#travel' },
    ],
  },
  business: {
    label: 'Business',
    items: [
      { icon: '🏛️', title: '100% Foreign Business Setup', sub: 'MISA Investor License', href: '#featured-services' },
      { icon: '📜', title: 'Commercial Registration', sub: 'CR & Ministry Filing', href: '#featured-services' },
      { icon: '📑', title: 'ZATCA & Tax Filing', sub: 'VAT & GOSI Compliance', href: '#featured-services' },
      { icon: '🏦', title: 'Corporate Bank Opening', sub: 'Saudi Banking Support', href: '#featured-services' },
    ],
  },
  visa: {
    label: 'Visa & Iqama',
    items: [
      { icon: '🛂', title: 'Work & Employment Visas', sub: 'Official Visa Stamping', href: '#featured-services' },
      { icon: '🪪', title: 'Iqama Issuance & Renewal', sub: 'Muqeem & Absher', href: '#featured-services' },
      { icon: '🔄', title: 'Qiwa Sponsorship Transfer', sub: 'Naqal Kafala Portal', href: '#featured-services' },
      { icon: '👨‍👩‍👧', title: 'Family & Visit Visas', sub: 'Tourist & Dependent', href: '#featured-services' },
    ],
  },
  manpower: {
    label: 'Manpower',
    items: [
      { icon: '👷', title: 'Industrial & Electrical Trades', sub: 'Pre-screened & Tested', href: '#manpower' },
      { icon: '❄️', title: 'HVAC & Mechanical Teams', sub: 'Certified Technicians', href: '#manpower' },
      { icon: '🏨', title: 'Hospitality & Facility Staff', sub: 'Hotels & Catering', href: '#manpower' },
      { icon: '📋', title: 'Browse Active Job Vacancies', sub: 'Direct Saudi Contracts', href: '#manpower' },
    ],
  },
  digital: {
    label: 'Digital Service',
    items: [
      { icon: '💻', title: 'Custom Next.js Web Dev', sub: 'High-Converting Platforms', href: '#digital' },
      { icon: '🚀', title: 'Local Saudi SEO', sub: 'Top Google Search Ranks', href: '#digital' },
      { icon: '📈', title: 'Google Ads Management', sub: 'Targeted Lead Generation', href: '#digital' },
      { icon: '⚙️', title: 'Business Automation', sub: 'CRM & Workflow Systems', href: '#digital' },
    ],
  },
};

const TAB_KEYS = ['travel', 'business', 'visa', 'manpower', 'digital'];

export default function ServiceFinder() {
  const [activeKey, setActiveKey] = useState('travel');

  const currentIndex = TAB_KEYS.indexOf(activeKey);

  const shiftTab = (direction: number) => {
    const nextIdx = (currentIndex + direction + TAB_KEYS.length) % TAB_KEYS.length;
    setActiveKey(TAB_KEYS[nextIdx]);
  };

  const currentTab = TAB_DATA[activeKey] || TAB_DATA.travel;

  return (
    <section className="container-custom py-6" id="finder">
      {/* Tabs Pill Row with Arrows */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: smoothEase }}
        className="flex flex-wrap items-center justify-between gap-3 mb-4"
      >
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1">
          {TAB_KEYS.map((key) => {
            const isActive = activeKey === key;
            return (
              <button
                key={key}
                onClick={() => setActiveKey(key)}
                className={`relative px-5 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors ${
                  isActive
                    ? 'text-white'
                    : 'text-text-soft hover:text-teal-deep hover:bg-paper-2'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFinderTab"
                    className="absolute inset-0 bg-teal-deep rounded-full shadow-sm ring-1 ring-gold/40 z-0"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{TAB_DATA[key].label}</span>
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-1.5">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => shiftTab(-1)}
            aria-label="Previous tab"
            className="w-8 h-8 rounded-full border border-paper-line bg-paper-white hover:border-gold hover:text-gold flex items-center justify-center text-text-soft transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => shiftTab(1)}
            aria-label="Next tab"
            className="w-8 h-8 rounded-full border border-paper-line bg-paper-white hover:border-gold hover:text-gold flex items-center justify-center text-text-soft transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>
      </motion.div>

      {/* 4 Interactive Service Cards Grid with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeKey}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {currentTab.items.map((card, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: smoothEase }}
            >
              <Link
                href={card.href}
                className="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-paper-white border border-paper-line hover:border-gold hover:shadow-md transition-colors group h-full"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-paper-2 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <div>
                    <strong className="font-display font-bold text-xs sm:text-sm text-ink block group-hover:text-gold transition-colors">
                      {card.title}
                    </strong>
                    <span className="text-[11px] text-text-soft block mt-0.5">
                      {card.sub}
                    </span>
                  </div>
                </div>

                <ArrowRightIcon className="w-4 h-4 text-text-soft group-hover:text-gold group-hover:translate-x-1 transition-all" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
