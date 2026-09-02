'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import { APP_CONFIG } from '@/lib/data';
import { PhoneCall, MessageCircle, ArrowRight } from 'lucide-react';
import ConsultationModal from '@/components/layout/ConsultationModal';
import { smoothEase, hoverButton } from '@/lib/animations';

export default function FinalCta() {
  const { t } = useLanguage();
  const [consultOpen, setConsultOpen] = useState(false);

  return (
    <>
      <section className="container-custom py-14" id="final-cta">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: smoothEase }}
          className="bg-teal-deep rounded-3xl p-8 sm:p-14 text-center text-white relative overflow-hidden shadow-2xl"
        >
          {/* Background decorative ring */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-white/10 pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full border border-white/10 pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-white">
              {t('final_title', 'Need Help Choosing the Right Service?')}
            </h2>

            <p className="text-xs sm:text-base text-white/75 leading-relaxed max-w-lg mx-auto">
              {t('final_sub', 'Talk to our team in Riyadh and get the exact solution tailored for your business or personal journey.')}
            </p>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-3">
              <motion.button
                {...hoverButton}
                onClick={() => setConsultOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gold hover:bg-gold-light text-ink font-bold text-xs sm:text-sm rounded-lg shadow-md"
              >
                <span>{t('cta_get_consultation', 'Get Free Consultation')}</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.a
                {...hoverButton}
                href={`https://wa.me/${APP_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1EA352] hover:bg-[#188B46] text-white font-bold text-xs sm:text-sm rounded-lg shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t('cta_whatsapp', 'WhatsApp Us')}</span>
              </motion.a>

              <motion.a
                {...hoverButton}
                href={`tel:${APP_CONFIG.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/40 hover:border-gold-light text-white hover:text-gold-light font-bold text-xs sm:text-sm rounded-lg"
              >
                <PhoneCall className="w-4 h-4 text-gold-light" />
                <span>{APP_CONFIG.phone}</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>

      <ConsultationModal isOpen={consultOpen} onClose={() => setConsultOpen(false)} />
    </>
  );
}
