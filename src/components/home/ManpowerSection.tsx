'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import { MANPOWER_CATEGORIES_DATA } from '@/lib/data';
import IconRenderer from '@/components/common/IconRenderer';
import { ArrowRight, CheckCircle2, UserCheck, Briefcase } from 'lucide-react';
import { smoothEase, staggerContainer, staggerItem, hoverButton } from '@/lib/animations';

export default function ManpowerSection() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section className="container-custom py-14" id="manpower">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: smoothEase }}
        className="max-w-2xl mb-10"
      >
        <div className="eyebrow">{t('mp_eyebrow', 'Reliable Workforce for Your Business')}</div>
        <h2 className="text-3xl sm:text-4xl text-ink font-display font-bold">
          {t('mp_title', 'Manpower Solutions')}
        </h2>
      </motion.div>

      {/* Dual Audience Split Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-paper-line border border-paper-line rounded-2xl overflow-hidden shadow-sm mb-8">
        {/* For Companies */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: smoothEase }}
          className="bg-paper-white p-8 sm:p-10 flex flex-col justify-between hover:bg-paper/40 transition-colors"
        >
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-gold uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5" />
              <span>{t('mp_for_companies_kicker', 'For Companies')}</span>
            </div>
            <h3 className="text-2xl font-bold text-ink font-display">
              {t('mp_for_companies_title', 'Hire the workforce your project needs')}
            </h3>
            <p className="text-xs sm:text-sm text-softText leading-relaxed">
              {t(
                'mp_for_companies_body',
                'Tell us the roles, headcount and timeline — we source, screen and mobilize workers across every category below.'
              )}
            </p>
          </div>

          <div className="pt-6">
            <motion.div {...hoverButton}>
              <Link
                href="#booking"
                className="inline-flex items-center gap-2 px-6 py-3 bg-navy hover:bg-navy-light text-white font-bold text-xs sm:text-sm rounded-lg shadow-sm block"
              >
                <span>{t('cta_request_manpower', 'Request Manpower')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* For Job Seekers */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: smoothEase }}
          className="bg-paper-white p-8 sm:p-10 flex flex-col justify-between hover:bg-paper/40 transition-colors"
        >
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-teal-deep uppercase tracking-wider">
              <UserCheck className="w-3.5 h-3.5" />
              <span>{t('mp_for_seekers_kicker', 'For Job Seekers')}</span>
            </div>
            <h3 className="text-2xl font-bold text-ink font-display">
              {t('mp_for_seekers_title', 'Find work that matches your skills')}
            </h3>
            <p className="text-xs sm:text-sm text-softText leading-relaxed">
              {t(
                'mp_for_seekers_body',
                'Browse open roles across construction, hospitality, technical trades and more, and apply directly.'
              )}
            </p>
          </div>

          <div className="pt-6">
            <motion.div {...hoverButton}>
              <Link
                href="#booking"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold text-xs sm:text-sm rounded-lg transition-colors block"
              >
                <span>{t('cta_find_jobs', 'Find Jobs & Apply')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* 10 Manpower Trade Categories */}
      <div>
        <h4 className="text-xs font-bold uppercase tracking-wider text-softText mb-4">
          Core Trade Specialties & Mobilization Categories
        </h4>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-wrap gap-2.5 sm:gap-3"
        >
          {MANPOWER_CATEGORIES_DATA.map((cat) => (
            <motion.button
              key={cat.id}
              variants={staggerItem}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
              className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border text-xs sm:text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? 'bg-gold text-ink border-gold font-bold shadow-sm'
                  : 'bg-paper-white border-paper-line text-ink hover:border-gold hover:bg-paper'
              }`}
            >
              <IconRenderer name={cat.iconName} className="w-4 h-4 text-teal-deep" />
              <span>{cat.label}</span>
              <span className="text-[10px] opacity-70 font-mono">({cat.count})</span>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
