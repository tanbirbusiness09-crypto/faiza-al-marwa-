'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, CalendarCheck, ShieldCheck, Check } from 'lucide-react';
import { smoothEase, staggerContainer, staggerItem, hoverButton } from '@/lib/animations';
import TypeWriter from '@/components/common/TypeWriter';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="home" className="pt-6 sm:pt-14 pb-6 sm:pb-8 overflow-hidden relative">
      {/* Luxury Animated Background Wave & Flight Contour Lines (Restored) */}
      <div className="hero-animated-bg">
        <svg className="bg-flowing-lines-svg" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Subtle Radial Gradient Glows */}
          <circle cx="200" cy="300" r="280" fill="rgba(184,134,47,0.06)" filter="blur(60px)" />
          <circle cx="1100" cy="400" r="350" fill="rgba(18,58,51,0.08)" filter="blur(80px)" />

          {/* Animated Gold Contour Wave Line 1 */}
          <path
            className="wave-line-1"
            d="M -100 250 C 200 120, 500 380, 850 200 C 1200 20, 1400 320, 1600 180"
            stroke="#B8862F"
            strokeWidth="1.2"
            strokeOpacity="0.35"
          />

          {/* Animated Gold Wave Line 2 */}
          <path
            className="wave-line-2"
            d="M -150 400 C 150 280, 450 520, 800 350 C 1150 180, 1350 480, 1650 320"
            stroke="#B8862F"
            strokeWidth="1.5"
            strokeOpacity="0.28"
          />

          {/* Animated Deep Teal Wave Line 3 */}
          <path
            className="wave-line-3"
            d="M -50 550 C 250 420, 600 680, 950 480 C 1300 280, 1500 580, 1700 420"
            stroke="#123A33"
            strokeWidth="1.2"
            strokeOpacity="0.22"
          />

          {/* Flowing Dotted Flight Route Curves */}
          <path
            className="flight-trail-anim"
            d="M 50 650 C 350 450, 700 250, 1250 150 C 1400 120, 1550 180, 1650 120"
            stroke="#B8862F"
            strokeWidth="1.8"
            strokeOpacity="0.45"
          />
          <path
            className="flight-trail-anim"
            d="M -80 180 C 220 320, 600 120, 1050 380 C 1350 550, 1550 350, 1680 400"
            stroke="#2A6357"
            strokeWidth="1.4"
            strokeOpacity="0.3"
          />

          {/* Topographic Fine Grid Lines */}
          <path d="M 0 100 Q 720 280 1440 100" stroke="#B8862F" strokeWidth="0.8" strokeOpacity="0.18" />
          <path d="M 0 700 Q 720 520 1440 700" stroke="#B8862F" strokeWidth="0.8" strokeOpacity="0.18" />
        </svg>
      </div>

      <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Copy Column with Staggered Motion Entrance */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="lg:col-span-6 space-y-6"
        >
          {/* Location Badge */}
          <motion.div variants={staggerItem}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/15 border border-gold/30 text-gold text-xs font-bold tracking-wide">
              <span>📍</span>
              <span>{t('hero_eyebrow', 'Based in Saudi Arabia')}</span>
            </div>
          </motion.div>

          {/* Headline (Typewriter Entrance) — mobile-friendly size */}
          <motion.h1
            variants={staggerItem}
            className="block text-[27px] leading-[1.18] sm:text-4xl sm:leading-[1.15] md:text-5xl lg:text-[54px] text-ink font-display font-bold tracking-tight max-w-[580px] min-h-[2.4em]"
          >
            <TypeWriter
              parts={[
                { text: 'Beyond Journeys.', br: true },
                { text: 'Building Futures. ' },
                { text: 'Together.', gold: true },
              ]}
              speed={55}
              delay={500}
            />
          </motion.h1>

          {/* Subtitle (3 Lines Clean Layout) */}
          <motion.p
            variants={staggerItem}
            className="text-[13.5px] sm:text-[15px] md:text-[15.5px] text-text-soft leading-[1.6] sm:leading-[1.65] max-w-[530px]"
          >
            {t(
              'hero_lead',
              'FAIZA AL MARWA delivers MISA investor licensing, certified manpower recruitment, international tour packages, visa processing and digital services under one roof — so every business and travel request starts in the same place.'
            )}
          </motion.p>

          {/* CTA Buttons — full-width app style on mobile */}
          <motion.div
            variants={staggerItem}
            className="grid grid-cols-1 sm:flex sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-3.5 pt-1 sm:pt-2"
          >
            <motion.div {...hoverButton} className="w-full sm:w-auto">
              <Link
                href="#featured-services"
                className="btn-app bg-navy hover:bg-navy-light text-white shadow-md shadow-navy/25"
              >
                <span>{t('cta_explore_services', 'Explore Services')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div {...hoverButton} className="w-full sm:w-auto">
              <Link
                href="#booking"
                className="btn-app border border-ink/40 bg-paper-white hover:bg-paper text-ink shadow-2xs"
              >
                <CalendarCheck className="w-4 h-4 text-navy" />
                <span>{t('cta_book_now', 'Book Now')}</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Quick Access Pills with matching icons */}
          <motion.div
            variants={staggerItem}
            className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-2 sm:pt-4 text-xs font-semibold text-ink"
          >
            <Link href="#featured-services" className="flex items-center gap-2 hover:text-gold transition-colors group">
              <span className="text-gold text-sm group-hover:scale-110 transition-transform">🏛️</span>
              <span>{t('cta_investor_license', 'Investor License')}</span>
            </Link>
            <Link href="#manpower" className="flex items-center gap-2 hover:text-gold transition-colors group">
              <span className="text-gold text-sm group-hover:scale-110 transition-transform">👥</span>
              <span>{t('cta_request_manpower', 'Request Manpower')}</span>
            </Link>
            <Link href="#digital" className="flex items-center gap-2 hover:text-gold transition-colors group">
              <span className="text-gold text-sm group-hover:scale-110 transition-transform">💻</span>
              <span>{t('cta_digital_services', 'Digital Services')}</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Visual Composition (Arch Portal + Soaring Saudia Aircraft + Layered Passes) */}
        <div className="lg:col-span-6 relative flex items-center justify-center min-h-[300px] sm:min-h-[460px]">
          {/* Soaring Saudia Airlines Commercial Aircraft (Marked Position with Motion) */}
          <motion.div
            initial={{ opacity: 0, x: -60, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: smoothEase }}
            className="absolute -top-4 sm:-top-10 -left-4 sm:-left-10 w-[200px] sm:w-[330px] z-30 pointer-events-none animate-float"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/saudia-airplane.png"
              alt="Saudia Airlines Boeing Passenger Jet"
              className="w-full h-auto object-contain drop-shadow-[0_25px_35px_rgba(14,31,27,0.28)]"
            />
          </motion.div>

          {/* Background Curved Flight Path Trajectory SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 600 500" fill="none">
            <path
              d="M 60 360 C 140 230, 240 70, 540 80"
              stroke="#B8862F"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              opacity="0.5"
            />
            <path d="M 540 80 L 552 83 L 546 72 Z" fill="#B8862F" opacity="0.7" />
          </svg>

          {/* Architectural Golden Arch Portal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: smoothEase }}
            className="relative w-[240px] sm:w-[350px] h-[310px] sm:h-[440px] rounded-t-full rounded-b-2xl overflow-hidden shadow-2xl border-4 border-gold-light z-10 bg-[#F4EEDC] flex-shrink-0 -translate-x-2 sm:-translate-x-10 group"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero-arch-skyline.jpg"
              alt="Riyadh Skyline, Kingdom Centre and Flight"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Layered Interactive Service Passes (Overlaid on Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: smoothEase }}
            className="hidden sm:block absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 w-[280px] sm:w-[340px] z-20"
          >
            {/* Rear Tilted Card (SETUP LLC Approved) */}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 6 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -right-4 top-6 w-[200px] sm:w-[220px] bg-paper-white border border-paper-line rounded-xl shadow-lg opacity-90 pointer-events-none z-0"
            >
              <div className="bg-gold text-ink px-3 py-1.5 text-[10px] font-extrabold text-right uppercase tracking-wider">
                SETUP
              </div>
              <div className="p-4 text-center space-y-1">
                <div className="font-display font-extrabold text-xs sm:text-sm text-ink">LLC</div>
                <div className="text-[10px] font-bold text-emerald-700">Approved</div>
                <div className="text-2xl pt-1 opacity-70">🏛️</div>
              </div>
            </motion.div>

            {/* Front Service Pass Card */}
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.25, ease: smoothEase }}
              className="relative bg-paper-white border border-paper-line rounded-2xl shadow-2xl overflow-hidden z-10 cursor-pointer"
            >
              {/* Card Header */}
              <div className="bg-teal-deep text-white px-4 sm:px-5 py-3.5 flex items-center justify-between">
                <span className="font-display font-bold text-xs tracking-wider">FAIZA AL MARWA</span>
                <span className="bg-gold text-ink text-[9.5px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  SERVICE PASS
                </span>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 space-y-3">
                <div className="flex justify-between items-start text-xs">
                  <div>
                    <span className="text-[9.5px] uppercase font-semibold text-text-soft block mb-0.5">
                      CLIENT TYPE
                    </span>
                    <strong className="font-display font-bold text-sm text-ink block">Foreign Investor</strong>
                  </div>
                  <div className="text-right">
                    <span className="text-[9.5px] uppercase font-semibold text-text-soft block mb-0.5">
                      SERVICE LINE
                    </span>
                    <strong className="font-display font-bold text-sm text-teal-deep block">Investor License</strong>
                  </div>
                </div>

                {/* Route Strip */}
                <div className="flex items-center justify-between py-2 border-y border-dashed border-paper-line">
                  <div>
                    <span className="text-[9px] uppercase text-text-soft block">LICENSE</span>
                    <strong className="font-display font-extrabold text-base text-ink">MISA</strong>
                  </div>
                  <div className="text-center">
                    <span className="text-[10px] font-bold text-gold flex items-center justify-center gap-1">
                      ⚡ FAST-TRACK
                    </span>
                    <span className="text-[9px] text-text-soft block">100% Foreign Ownership</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] uppercase text-text-soft block">OUTCOME</span>
                    <strong className="font-display font-extrabold text-base text-ink">CR Issued</strong>
                  </div>
                </div>

                {/* Workforce Count */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[9.5px] uppercase font-semibold text-text-soft block mb-1">
                      WORKFORCE
                    </span>
                    <div className="flex items-center">
                      {['👨‍💼', '👷', '👨‍🔧', '👩‍💻'].map((emoji, idx) => (
                        <div
                          key={idx}
                          className="w-5 h-5 rounded-full bg-paper-2 border border-paper-white flex items-center justify-center text-[10px] -ml-1.5 first:ml-0"
                        >
                          {emoji}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-display font-extrabold text-teal-deep">
                      +1200 Deployed
                    </span>
                  </div>
                </div>

                {/* Footer Badges */}
                <div className="pt-2.5 border-t border-paper-line flex items-center justify-between text-[10px] font-semibold text-text-soft">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                    <span>24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Trusted &amp; Approved</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
