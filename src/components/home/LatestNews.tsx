'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import { NEWS_DATA } from '@/lib/data';
import { ArrowRight, Clock, CalendarDays } from 'lucide-react';
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
          <div className="eyebrow">{t('news_eyebrow', 'Insights from Riyadh')}</div>
          <h2 className="text-3xl sm:text-4xl text-ink font-display font-bold">
            {t('news_title', 'News, Guides & Regulatory Updates')}
          </h2>
        </div>
        <Link
          href="/news"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-teal-deep hover:text-navy transition-colors group"
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
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-4 px-4 pb-3 md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-4"
      >
        {NEWS_DATA.map((item) => (
          <motion.div
            key={item.id}
            variants={staggerItem}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.22, ease: smoothEase }}
            className="snap-start shrink-0 w-[80%] max-w-[340px] sm:w-[55%] md:w-auto md:max-w-none bg-paper-white border border-paper-line rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
          >
            <div>
              {/* Cover Image */}
              <Link href={`/news/${item.slug}`} className="block relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
                <span className="absolute left-3 top-3 text-[10px] font-bold uppercase tracking-wider bg-navy text-white px-2 py-0.5 rounded-full">
                  {item.category}
                </span>
                <span className="absolute right-3 bottom-2.5 flex items-center gap-1 text-[10px] text-white/90">
                  <Clock className="w-3 h-3" />
                  <span>{item.readTime}</span>
                </span>
              </Link>

              {/* Body */}
              <div className="p-5">
                <div className="flex items-center gap-2 text-[11px] text-softText mb-2">
                  <CalendarDays className="w-3 h-3 text-navy" />
                  <span>{item.date}</span>
                </div>

                <h3 className="text-sm font-bold text-ink font-display group-hover:text-navy transition-colors line-clamp-2 leading-snug">
                  <Link href={`/news/${item.slug}`}>{item.title}</Link>
                </h3>

                <p className="text-xs text-softText mt-2 leading-relaxed line-clamp-3">
                  {item.summary}
                </p>
              </div>
            </div>

            <div className="p-5 pt-0">
              <Link
                href={`/news/${item.slug}`}
                className="inline-flex items-center gap-1 text-xs font-bold text-teal-deep group-hover:text-navy transition-colors"
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
