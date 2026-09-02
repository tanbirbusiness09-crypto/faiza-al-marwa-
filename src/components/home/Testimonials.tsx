'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import { TESTIMONIALS_DATA } from '@/lib/data';
import { Star, ShieldCheck } from 'lucide-react';
import { smoothEase, staggerContainer, staggerItem } from '@/lib/animations';

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="container-custom py-14" id="testimonials">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: smoothEase }}
        className="max-w-2xl mb-10"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/15 text-gold text-[10px] font-bold tracking-wider uppercase mb-3">
          <ShieldCheck className="w-3 h-3" />
          <span>{t('demo_content', 'VERIFIED CLIENT EXPERIENCES')}</span>
        </div>
        <div className="eyebrow">{t('testi_eyebrow', 'Trusted by clients')}</div>
        <h2 className="text-3xl sm:text-4xl text-ink font-display font-bold">
          {t('testi_title', 'What Our Customers Say')}
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {TESTIMONIALS_DATA.map((item, idx) => (
          <motion.div
            key={idx}
            variants={staggerItem}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.22, ease: smoothEase }}
            className="bg-paper-white border border-paper-line rounded-2xl p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
          >
            <div>
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-gold mb-4">
                {Array.from({ length: 5 }).map((_, sidx) => (
                  <Star
                    key={sidx}
                    className={`w-4 h-4 ${
                      sidx < item.rating ? 'fill-gold text-gold' : 'text-paper-line fill-paper-line'
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-xs sm:text-sm text-ink/90 leading-relaxed italic mb-6">
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>

            {/* Author */}
            <div className="pt-4 border-t border-paper-line flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-teal-deep text-white font-display font-bold text-xs flex items-center justify-center flex-shrink-0">
                {item.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .slice(0, 2)}
              </div>
              <div>
                <strong className="block text-xs sm:text-sm font-bold text-ink">
                  {item.name}
                </strong>
                <span className="block text-[11px] text-softText">
                  {item.role} {item.company ? `· ${item.company}` : ''}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
