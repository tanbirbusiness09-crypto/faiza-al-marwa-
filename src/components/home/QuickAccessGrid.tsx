'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Plane, MapPin, FileCheck2, Building2, Users2, MonitorSmartphone, ArrowRight } from 'lucide-react';

const QUICK_ACCESS_ITEMS = [
  {
    icon: Building2,
    title: 'Investor License',
    desc: 'MISA license, company formation, CR licensing, and local corporate PRO.',
    href: '#featured-services',
  },
  {
    icon: Users2,
    title: 'Manpower Supply',
    desc: 'Request pre-screened technical, civil, and hospitality personnel on demand.',
    href: '#manpower',
  },
  {
    icon: FileCheck2,
    title: 'Visa Services',
    desc: 'Work permits, Iqama renewals, investor visas, and immigration compliance.',
    href: '#featured-services',
  },
  {
    icon: Plane,
    title: 'Tour Packages',
    desc: 'International tour packages with hotels, transfers, and guided itineraries.',
    href: '#travel',
  },
  {
    icon: MapPin,
    title: 'Custom Itineraries',
    desc: 'Tailored group & family tours planned end-to-end by our travel desk.',
    href: '#booking',
  },
  {
    icon: MonitorSmartphone,
    title: 'Digital Services',
    desc: 'Websites, local Saudi SEO, automated CRM, and ROI-driven marketing.',
    href: '#digital',
  },
];

export default function QuickAccessGrid() {
  const { t } = useLanguage();

  return (
    <section className="container-custom py-14" id="quick-access">
      <div className="max-w-2xl mb-10">
        <div className="eyebrow">{t('qa_eyebrow', 'Start here')}</div>
        <h2 className="text-3xl sm:text-4xl text-ink font-display font-bold">
          {t('qa_title', 'What Are You Looking For?')}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-paper-line border border-paper-line rounded-xl overflow-hidden shadow-sm">
        {QUICK_ACCESS_ITEMS.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <Link
              key={idx}
              href={item.href}
              className="bg-paper-white p-7 flex flex-col justify-between hover:bg-paper transition-all group"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-paper-2 flex items-center justify-center text-teal-deep group-hover:scale-110 group-hover:bg-teal-deep group-hover:text-white transition-all">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-ink group-hover:text-teal-deep transition-colors font-display">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-softText leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 flex items-center justify-between text-xs font-bold text-teal-deep">
                <span>Access Service</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
