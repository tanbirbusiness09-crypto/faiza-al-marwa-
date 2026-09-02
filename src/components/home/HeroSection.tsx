'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faPlane,
  faShieldHalved,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '@/context/LanguageContext';
import { smoothEase, hoverButton } from '@/lib/animations';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="home" className="pt-8 sm:pt-12 pb-8 overflow-hidden relative">
      {/* Luxury Animated Background Wave & Flight Contour Lines (Hardware-Accelerated) */}
      <div className="hero-animated-bg pointer-events-none transform-gpu">
        <svg className="bg-flowing-lines-svg" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="300" r="280" fill="rgba(184,134,47,0.06)" filter="blur(60px)" />
          <circle cx="1100" cy="400" r="350" fill="rgba(18,58,51,0.08)" filter="blur(80px)" />

          <path
            className="wave-line-1"
            d="M -100 250 C 200 120, 500 380, 850 200 C 1200 20, 1400 320, 1600 180"
            stroke="#B8862F"
            strokeWidth="1.2"
            strokeOpacity="0.35"
          />
          <path
            className="wave-line-2"
            d="M -150 400 C 150 280, 450 520, 800 350 C 1150 180, 1350 480, 1650 320"
            stroke="#B8862F"
            strokeWidth="1.5"
            strokeOpacity="0.28"
          />
          <path
            className="wave-line-3"
            d="M -50 550 C 250 420, 600 680, 950 480 C 1300 280, 1500 580, 1700 420"
            stroke="#123A33"
            strokeWidth="1.2"
            strokeOpacity="0.22"
          />
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
          <path d="M 0 100 Q 720 280 1440 100" stroke="#B8862F" strokeWidth="0.8" strokeOpacity="0.18" />
          <path d="M 0 700 Q 720 520 1440 700" stroke="#B8862F" strokeWidth="0.8" strokeOpacity="0.18" />
        </svg>
      </div>

      <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Copy Column with Fast, Silky Smooth Single-Pass Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: smoothEase }}
          className="lg:col-span-6 space-y-5 transform-gpu"
        >
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/15 border border-gold/30 text-gold text-xs font-bold tracking-wide">
            <span>📍</span>
            <span>{t('hero_eyebrow', 'Based in Saudi Arabia')}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-ink font-display font-bold leading-[1.12] tracking-tight">
            Beyond Journeys.<br />
            Building Futures.<br />
            <span className="text-gold font-bold">Together.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-text-soft leading-relaxed max-w-xl">
            {t(
              'hero_lead',
              'From a single flight to a full corporate setup — FAIZA AL MARWA is your trusted partner for travel, business, visa, manpower and digital services.'
            )}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <motion.div {...hoverButton}>
              <Link
                href="#featured-services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gold hover:bg-gold-light text-ink font-bold text-sm shadow-md transition-all"
              >
                <span>{t('cta_explore_services', 'Explore Services')}</span>
                <FontAwesomeIcon icon={faArrowRight} className="w-3.5 h-3.5" />
              </Link>
            </motion.div>

            <motion.div {...hoverButton}>
              <Link
                href="#booking"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-ink/40 bg-paper-white hover:bg-paper text-ink font-bold text-sm shadow-2xs transition-all"
              >
                <FontAwesomeIcon icon={faPlane} className="w-3.5 h-3.5 text-teal-deep" />
                <span>{t('cta_book_now', 'Book Now')}</span>
              </Link>
            </motion.div>
          </div>

          {/* Quick Access Pills with matching icons */}
          <div className="flex flex-wrap items-center gap-5 pt-3 text-xs font-semibold text-ink">
            <Link href="#destinations" className="flex items-center gap-2 hover:text-gold transition-colors group">
              <span className="text-gold text-sm group-hover:scale-110 transition-transform">📍</span>
              <span>{t('cta_find_destination', 'Find a Destination')}</span>
            </Link>
            <Link href="#manpower" className="flex items-center gap-2 hover:text-gold transition-colors group">
              <span className="text-gold text-sm group-hover:scale-110 transition-transform">👥</span>
              <span>{t('cta_request_manpower', 'Request Manpower')}</span>
            </Link>
            <Link href="#digital" className="flex items-center gap-2 hover:text-gold transition-colors group">
              <span className="text-gold text-sm group-hover:scale-110 transition-transform">💻</span>
              <span>{t('cta_digital_services', 'Digital Services')}</span>
            </Link>
          </div>
        </motion.div>

        {/* Right Visual Composition (Hardware-Accelerated Entrance) */}
        <div className="lg:col-span-6 relative flex items-center justify-center min-h-[440px] transform-gpu">
          {/* Soaring Saudia Airlines Airplane (Smooth Motion Wrapper + Smooth Floating Plane) */}
          <motion.div
            initial={{ opacity: 0, x: -35, y: 15 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: smoothEase }}
            className="absolute -top-8 sm:-top-10 -left-6 sm:-left-10 w-[260px] sm:w-[330px] z-30 pointer-events-none transform-gpu will-change-transform"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/saudia-airplane.png"
              alt="Saudia Airlines Boeing Passenger Jet"
              className="w-full h-auto object-contain drop-shadow-[0_20px_30px_rgba(14,31,27,0.22)] animate-float transform-gpu"
            />
          </motion.div>

          {/* Background Curved Flight Path Trajectory SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 600 500" fill="none">
            <path
              d="M 60 360 C 140 230, 240 70, 540 80"
              stroke="#B8862F"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              opacity="0.45"
            />
            <path d="M 540 80 L 552 83 L 546 72 Z" fill="#B8862F" opacity="0.65" />
          </svg>

          {/* Architectural Golden Arch Portal */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: smoothEase }}
            className="relative w-full max-w-[400px] aspect-[4/5] rounded-t-[200px] rounded-b-3xl border-2 border-gold/40 shadow-xl overflow-hidden bg-teal-deep p-1.5 transform-gpu"
          >
            <div className="w-full h-full rounded-t-[194px] rounded-b-[20px] overflow-hidden relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero-arch-skyline.jpg"
                alt="Saudi Skyline Architecture"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />

              <div className="absolute top-12 left-0 right-0 text-center pointer-events-none px-4">
                <span className="text-[11px] uppercase tracking-widest text-gold-light font-bold">
                  Kingdom of Saudi Arabia
                </span>
                <p className="text-xs text-white/80 font-arabic mt-0.5">المملكة العربية السعودية</p>
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white text-center space-y-1">
                <span className="text-xs text-gold-light font-semibold uppercase tracking-wider block">
                  Vision 2030 Partner
                </span>
                <p className="text-sm font-bold font-display">
                  Corporate &amp; Travel Excellence
                </p>
              </div>
            </div>
          </motion.div>

          {/* Overlaid Layer 1: Travel Boarding Pass (Smooth Entrance, GPU-rendered) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, zIndex: 40 }}
            transition={{ duration: 0.5, delay: 0.25, ease: smoothEase }}
            className="absolute -bottom-4 -left-4 sm:-left-8 w-64 sm:w-72 bg-paper-white border border-paper-line rounded-2xl shadow-xl p-4 text-ink z-20 -rotate-3 transition-transform transform-gpu"
          >
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-paper-line text-xs font-bold text-teal-deep">
              <span className="font-display">FAIZA AL MARWA</span>
              <span className="px-2 py-0.5 rounded bg-gold/15 text-gold text-[10px] uppercase tracking-wider">
                Umrah Pass
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-[10px] text-text-soft block">ROUTE</span>
                <strong className="font-bold text-ink">RUH ✈ JED</strong>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-text-soft block">CLASS</span>
                <strong className="font-bold text-teal-deep">VIP Group</strong>
              </div>
            </div>
          </motion.div>

          {/* Overlaid Layer 2: Corporate Manpower Pass (Smooth Entrance, GPU-rendered) */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, zIndex: 40 }}
            transition={{ duration: 0.5, delay: 0.3, ease: smoothEase }}
            className="absolute -top-4 -right-4 sm:-right-8 w-64 sm:w-72 bg-paper-white border border-paper-line rounded-2xl shadow-xl p-4 text-ink z-20 rotate-3 transition-transform transform-gpu"
          >
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-paper-line text-xs font-bold text-teal-deep">
              <span className="font-display">MANPOWER DEPLOYMENT</span>
              <span className="px-2 py-0.5 rounded bg-teal-deep/10 text-teal-deep text-[10px] uppercase tracking-wider font-bold">
                Verified
              </span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-teal-deep text-gold-light flex items-center justify-center font-bold">
                  KSA
                </div>
                <div>
                  <strong className="block text-ink text-xs leading-tight">50+ Trades</strong>
                  <span className="text-[10px] text-text-soft">Construction &amp; Tech</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-display font-extrabold text-teal-deep">
                  +1200 Deployed
                </span>
              </div>
            </div>

            <div className="pt-2.5 border-t border-paper-line flex items-center justify-between text-[10px] font-semibold text-text-soft mt-2">
              <div className="flex items-center gap-1.5">
                <FontAwesomeIcon icon={faShieldHalved} className="w-3 h-3 text-gold" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FontAwesomeIcon icon={faCircleCheck} className="w-3 h-3 text-emerald-600" />
                <span>Trusted &amp; Approved</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
