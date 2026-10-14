'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import { FAQS_DATA } from '@/lib/data';
import { smoothEase, hoverButton } from '@/lib/animations';
import { Plus, MessageCircle, ShieldCheck, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function FaqAccordion() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container-custom py-14" id="faq">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Clean Illustration Image Only (Zero Frames/Boxes) */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: smoothEase }}
          className="lg:col-span-5 flex justify-center items-center"
        >
          <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-md border border-paper-line/60">
            <Image
              src="/images/faq-travel-illustration.jpg"
              alt="Saudi Travel, Visa & Manpower Verified Services"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 460px"
            />
          </div>
        </motion.div>

        {/* Right Column: FAQ Accordion List */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: smoothEase }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Section Header */}
          <div className="space-y-2">
            <div className="eyebrow">{t('faq_eyebrow', 'Common questions')}</div>
            <h2 className="text-3xl sm:text-4xl text-ink font-display font-bold">
              {t('faq_title', 'Frequently Asked Questions')}
            </h2>
            <p className="text-xs sm:text-sm text-softText max-w-xl">
              {t(
                'faq_subtitle',
                'Everything you need to know about our investor licensing, manpower recruitment, visa processing, international tours, and digital services.'
              )}
            </p>
          </div>

          {/* Accordion Container */}
          <div className="border-t border-paper-line divide-y divide-paper-line">
            {FAQS_DATA.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index} className="py-2 transition-colors">
                  <button
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    className="w-full py-4 flex items-center justify-between text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-lg"
                  >
                    <span
                      className={`text-sm sm:text-base font-bold font-display transition-colors pr-4 ${
                        isOpen ? 'text-teal-deep' : 'text-ink group-hover:text-gold'
                      }`}
                    >
                      {t(`faq_q_${index}`, faq.question)}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.22, ease: smoothEase }}
                      className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                        isOpen ? 'bg-gold text-ink font-bold' : 'bg-paper-2 text-gold group-hover:bg-gold/20'
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: smoothEase }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs sm:text-sm text-softText pb-4 leading-relaxed max-w-2xl">
                          {t(`faq_a_${index}`, faq.answer)}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* View All FAQs Link */}
          <div className="pt-2">
            <Link
              href="#booking"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-teal-deep hover:text-gold transition-colors"
            >
              <span>{t('cta_view_all_faqs', 'View All FAQs & Knowledge Base')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
