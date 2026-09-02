'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import { NEWS_DATA } from '@/lib/data';
import IconRenderer from '@/components/common/IconRenderer';
import { ArrowRight, Clock } from 'lucide-react';
import { smoothEase, staggerContainer, staggerItem } from '@/lib/animations';

export default function LatestNews() {
  const { t } = useLanguage();

  return (
    <section className="container-custom py-14" id="news">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: smoothEase }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4"
      >
        <div className="max-w-xl">
          <div className="eyebrow">{t('news_eyebrow', 'Stay updated')}</div>
          <h2 className="text-3xl sm:text-4xl text-ink font-display font-bold">
            {t('news_title', 'Latest News & Regulatory Updates')}
          </h2>
        </div>
        <Link
          href="#news"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-teal-deep hover:text-gold transition-colors group"
        >
          <span>{t('cta_view_all_news', 'View All Articles')}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {NEWS_DATA.map((item) => (
          <motion.div
            key={item.id}
            variants={staggerItem}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.22, ease: smoothEase }}
            className="bg-paper-white border border-paper-line rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
          >
            <div>
              {/* Header Gradient */}
              <div
                className="h-32 p-4 flex items-end justify-between text-white"
                style={{ background: item.gradient }}
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                  <IconRenderer name={item.iconName} className="w-4 h-4 text-gold-light" />
                </div>
                <div className="flex items-center gap-1 text-[10px] text-white/80">
                  <Clock className="w-3 h-3" />
                  <span>{item.readTime}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5">
                <div className="flex items-center gap-2 text-[11px] text-softText mb-2">
                  <span className="font-bold text-gold">{item.category}</span>
                  <span>·</span>
                  <span>{item.date}</span>
                </div>

                <h3 className="text-sm font-bold text-ink font-display group-hover:text-teal-deep transition-colors line-clamp-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-softText mt-2 leading-relaxed line-clamp-3">
                  {item.summary}
                </p>
              </div>
            </div>

            <div className="p-5 pt-0">
              <Link
                href="#booking"
                className="inline-flex items-center gap-1 text-xs font-bold text-teal-deep group-hover:text-gold transition-colors"
              >
                <span>Read Article</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
