'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faLayerGroup,
  faBuildingColumns,
  faPassport,
  faPlaneDeparture,
  faUsersGear,
  faLaptopCode,
  faLocationDot,
  faCalendarCheck,
  faIdCardClip,
  faNewspaper,
  faCircleQuestion,
  faPhoneVolume,
  faMagnifyingGlass,
  faGlobe,
  faChevronDown,
  faChevronRight,
  faBars,
  faXmark,
  faArrowRight,
  faBolt,
  faShieldHalved,
} from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import { useLanguage } from '@/context/LanguageContext';
import BrandLogo from '@/components/common/BrandLogo';
import SearchModal from '@/components/layout/SearchModal';
import ConsultationModal from '@/components/layout/ConsultationModal';
import { smoothEase, hoverButton } from '@/lib/animations';

export default function Header() {
  const { language, setLanguage, t, isRTL } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [consultOpen, setConsultOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);

      if (currentScrollY > 70 && currentScrollY > lastScrollY && !mobileMenuOpen) {
        setIsVisible(false);
        setActiveDropdown(null);
      } else if (currentScrollY < lastScrollY || currentScrollY <= 70) {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  const handleMouseEnter = (menuKey: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(menuKey);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  // Structured Services Sub-Categories
  const serviceSubcategories = [
    {
      title: t('serv_cat_biz_title', 'Business Setup & MISA'),
      desc: t('serv_cat_biz_desc', '100% foreign ownership, licensing & corporate CR in KSA.'),
      href: '/#featured-services',
      icon: faBuildingColumns,
      tag: 'MISA Certified',
    },
    {
      title: t('serv_cat_visa_title', 'Visa & Immigration'),
      desc: t('serv_cat_visa_desc', 'Work permits, Iqama transfer, investor & tourist e-visas.'),
      href: '/#featured-services',
      icon: faPassport,
      tag: 'Fast-Track',
    },
    {
      title: t('serv_cat_travel_title', 'International Tour Packages'),
      desc: t('serv_cat_travel_desc', 'Curated itineraries, luxury hotels & group tours worldwide.'),
      href: '/#travel',
      icon: faPlaneDeparture,
      tag: 'Custom Tours',
    },
    {
      title: t('serv_cat_manpower_title', 'Manpower Solutions'),
      desc: t('serv_cat_manpower_desc', 'Construction, hospitality, technical & executive staffing.'),
      href: '/#manpower',
      icon: faUsersGear,
      tag: '50+ Trades',
    },
    {
      title: t('serv_cat_digital_title', 'Digital Agency Services'),
      desc: t('serv_cat_digital_desc', 'Web development, SEO, advertising & workflow automation.'),
      href: '/#digital',
      icon: faLaptopCode,
      tag: 'Growth Tech',
    },
  ];

  // Structured Travel Sub-Categories
  const travelSubcategories = [
    {
      title: t('travel_cat_dest_title', 'International Tour Packages'),
      desc: t('travel_cat_dest_desc', 'Istanbul, Cairo, Dubai, Bangkok, Bali & more.'),
      href: '/#travel',
      icon: faLocationDot,
    },
    {
      title: t('travel_cat_booking_title', 'Instant Tour Booking'),
      desc: t('travel_cat_booking_desc', 'Request package quotes, itineraries & hotel stays.'),
      href: '/#booking',
      icon: faCalendarCheck,
    },
    {
      title: t('travel_cat_custom_title', 'Custom Tour Itineraries'),
      desc: t('travel_cat_custom_desc', 'Tailored group & family tours with full support.'),
      href: '/#booking',
      icon: faPlaneDeparture,
    },
  ];

  // Company Sub-Categories
  const companySubcategories = [
    {
      title: t('comp_cat_about_title', 'About FAIZA AL MARWA'),
      desc: t('comp_cat_about_desc', 'Our heritage, Vision 2030 alignment and KSA licenses.'),
      href: '/#why',
      icon: faShieldHalved,
    },
    {
      title: t('comp_cat_news_title', 'News & Saudi Insights'),
      desc: t('comp_cat_news_desc', 'Latest immigration updates, business laws & agency news.'),
      href: '/#news',
      icon: faNewspaper,
    },
    {
      title: t('comp_cat_faq_title', 'Help & Frequently Asked Questions'),
      desc: t('comp_cat_faq_desc', 'Answers regarding fees, processing times and requirements.'),
      href: '/#faq',
      icon: faCircleQuestion,
    },
  ];

  return (
    <>
      <motion.header
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: isVisible ? 0 : -95,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease: smoothEase }}
        className={`sticky top-0 z-40 transition-colors duration-300 border-b ${
          scrolled
            ? 'bg-paper/95 backdrop-blur-md shadow-md border-paper-line py-2.5'
            : 'bg-paper/90 backdrop-blur-sm border-paper-line/60 py-3'
        }`}
      >
        <div className="container-custom flex items-center justify-between gap-4 h-12 sm:h-14">
          {/* Brand Logo with Royal Shield */}
          <BrandLogo />

          {/* Desktop Navigation Links with Structured Sub-Category Dropdowns */}
          <nav className="hidden xl:flex items-center gap-1 flex-shrink-0">
            {/* 1. Home */}
            <Link
              href="/#home"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-ink/90 hover:text-teal-deep px-3 py-2 rounded-xl hover:bg-teal-deep/8 transition-all duration-200 whitespace-nowrap flex-shrink-0"
            >
              <FontAwesomeIcon icon={faHouse} className="w-3.5 h-3.5 text-teal-deep" />
              <span className="whitespace-nowrap">{t('nav_home', 'Home')}</span>
            </Link>

            {/* 2. Services Dropdown (Mega Sub-Category Menu) */}
            <div
              className="relative flex-shrink-0"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                className={`inline-flex items-center gap-1.5 text-[13px] font-semibold px-3 py-2 rounded-xl transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                  activeDropdown === 'services'
                    ? 'bg-teal-deep text-white shadow-sm'
                    : 'text-ink/90 hover:text-teal-deep hover:bg-teal-deep/8'
                }`}
              >
                <FontAwesomeIcon
                  icon={faLayerGroup}
                  className={`w-3.5 h-3.5 transition-colors ${
                    activeDropdown === 'services' ? 'text-gold-light' : 'text-teal-deep'
                  }`}
                />
                <span className="whitespace-nowrap">{t('nav_services', 'Services')}</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`w-2.5 h-2.5 transition-transform duration-200 ${
                    activeDropdown === 'services' ? 'rotate-180 text-gold-light' : 'text-softText/70'
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: smoothEase }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[540px] bg-paper-white border border-paper-line rounded-2xl shadow-2xl p-4 z-50 overflow-hidden"
                  >
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-paper-line">
                      <span className="text-[11px] font-bold text-softText uppercase tracking-wider">
                        {t('our_core_capabilities', 'Our Core Service Divisions')}
                      </span>
                      <Link
                        href="/#featured-services"
                        onClick={() => setActiveDropdown(null)}
                        className="text-[11.5px] font-bold text-teal-deep hover:text-gold flex items-center gap-1 transition-colors"
                      >
                        <span>{t('cta_view_all_services', 'View All')}</span>
                        <FontAwesomeIcon icon={faArrowRight} className="w-2.5 h-2.5" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-1 gap-1.5">
                      {serviceSubcategories.map((sub, idx) => (
                        <Link
                          key={idx}
                          href={sub.href}
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-start gap-3.5 p-2.5 rounded-xl hover:bg-paper transition-all group border border-transparent hover:border-paper-line"
                        >
                          <div className="w-9 h-9 rounded-xl bg-teal-deep/8 group-hover:bg-teal-deep flex items-center justify-center text-teal-deep group-hover:text-gold-light transition-colors flex-shrink-0 mt-0.5">
                            <FontAwesomeIcon icon={sub.icon} className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold font-display text-ink group-hover:text-teal-deep transition-colors">
                                {sub.title}
                              </span>
                              {sub.tag && (
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gold/15 text-gold border border-gold/30">
                                  {sub.tag}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-softText leading-snug mt-0.5 line-clamp-1">
                              {sub.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Bottom Quick Help Banner */}
                    <div className="mt-3 pt-3 border-t border-paper-line bg-teal-deep/5 rounded-xl p-2.5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faBolt} className="w-3.5 h-3.5 text-gold" />
                        <span className="text-[11px] font-bold text-ink">
                          {t('custom_corp_solutions', 'Need Custom Corporate Solutions?')}
                        </span>
                      </div>
                      <button
                        onClick={() => {
                          setActiveDropdown(null);
                          setConsultOpen(true);
                        }}
                        className="text-[11px] font-bold text-teal-deep hover:text-gold underline"
                      >
                        {t('talk_to_advisor', 'Speak to Advisor')}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 3. Travel & Destinations Dropdown */}
            <div
              className="relative flex-shrink-0"
              onMouseEnter={() => handleMouseEnter('travel')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'travel' ? null : 'travel')}
                className={`inline-flex items-center gap-1.5 text-[13px] font-semibold px-3 py-2 rounded-xl transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                  activeDropdown === 'travel'
                    ? 'bg-teal-deep text-white shadow-sm'
                    : 'text-ink/90 hover:text-teal-deep hover:bg-teal-deep/8'
                }`}
              >
                <FontAwesomeIcon
                  icon={faPlaneDeparture}
                  className={`w-3.5 h-3.5 transition-colors ${
                    activeDropdown === 'travel' ? 'text-gold-light' : 'text-teal-deep'
                  }`}
                />
                <span className="whitespace-nowrap">{t('nav_travel_dest', 'Travel & Tours')}</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`w-2.5 h-2.5 transition-transform duration-200 ${
                    activeDropdown === 'travel' ? 'rotate-180 text-gold-light' : 'text-softText/70'
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === 'travel' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: smoothEase }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[420px] bg-paper-white border border-paper-line rounded-2xl shadow-2xl p-4 z-50 overflow-hidden"
                  >
                    <div className="grid grid-cols-1 gap-1.5">
                      {travelSubcategories.map((sub, idx) => (
                        <Link
                          key={idx}
                          href={sub.href}
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-start gap-3.5 p-2.5 rounded-xl hover:bg-paper transition-all group border border-transparent hover:border-paper-line"
                        >
                          <div className="w-9 h-9 rounded-xl bg-teal-deep/8 group-hover:bg-teal-deep flex items-center justify-center text-teal-deep group-hover:text-gold-light transition-colors flex-shrink-0 mt-0.5">
                            <FontAwesomeIcon icon={sub.icon} className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-xs font-bold font-display text-ink group-hover:text-teal-deep block transition-colors">
                              {sub.title}
                            </span>
                            <p className="text-[11px] text-softText leading-snug mt-0.5">
                              {sub.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 4. Company / About Dropdown */}
            <div
              className="relative flex-shrink-0"
              onMouseEnter={() => handleMouseEnter('company')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'company' ? null : 'company')}
                className={`inline-flex items-center gap-1.5 text-[13px] font-semibold px-3 py-2 rounded-xl transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                  activeDropdown === 'company'
                    ? 'bg-teal-deep text-white shadow-sm'
                    : 'text-ink/90 hover:text-teal-deep hover:bg-teal-deep/8'
                }`}
              >
                <FontAwesomeIcon
                  icon={faBuildingColumns}
                  className={`w-3.5 h-3.5 transition-colors ${
                    activeDropdown === 'company' ? 'text-gold-light' : 'text-teal-deep'
                  }`}
                />
                <span className="whitespace-nowrap">{t('nav_company', 'Company')}</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`w-2.5 h-2.5 transition-transform duration-200 ${
                    activeDropdown === 'company' ? 'rotate-180 text-gold-light' : 'text-softText/70'
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === 'company' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: smoothEase }}
                    className="absolute right-0 top-full mt-2 w-[380px] bg-paper-white border border-paper-line rounded-2xl shadow-2xl p-4 z-50 overflow-hidden"
                  >
                    <div className="grid grid-cols-1 gap-1.5">
                      {companySubcategories.map((sub, idx) => (
                        <Link
                          key={idx}
                          href={sub.href}
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-start gap-3.5 p-2.5 rounded-xl hover:bg-paper transition-all group border border-transparent hover:border-paper-line"
                        >
                          <div className="w-9 h-9 rounded-xl bg-teal-deep/8 group-hover:bg-teal-deep flex items-center justify-center text-teal-deep group-hover:text-gold-light transition-colors flex-shrink-0 mt-0.5">
                            <FontAwesomeIcon icon={sub.icon} className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-xs font-bold font-display text-ink group-hover:text-teal-deep block transition-colors">
                              {sub.title}
                            </span>
                            <p className="text-[11px] text-softText leading-snug mt-0.5">
                              {sub.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Action Buttons (Search, Language, Worker Status, Contact CTA) */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            {/* Search Icon Button */}
            <motion.button
              whileHover={{ scale: 1.06, y: -1 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => setSearchOpen(true)}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center border border-paper-line bg-paper-white hover:border-teal-deep hover:bg-teal-deep/5 text-teal-deep hover:text-gold shadow-2xs transition-colors flex-shrink-0"
              aria-label="Search site"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} className="w-3.5 h-3.5" />
            </motion.button>

            {/* Language Switcher */}
            <div className="relative flex-shrink-0">
              <motion.button
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 sm:py-2 rounded-xl border border-paper-line hover:border-teal-deep bg-paper-white text-xs font-bold text-ink shadow-2xs transition-colors whitespace-nowrap flex-shrink-0"
                aria-label="Change language"
              >
                <FontAwesomeIcon icon={faGlobe} className="w-3.5 h-3.5 text-teal-deep" />
                <span className="font-mono text-[11px] font-bold text-teal-deep whitespace-nowrap">{language.toUpperCase()}</span>
                <FontAwesomeIcon icon={faChevronDown} className="w-2.5 h-2.5 text-softText/70" />
              </motion.button>

              <AnimatePresence>
                {langMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: smoothEase }}
                    className="absolute right-0 mt-2 w-44 bg-paper-white border border-paper-line rounded-xl shadow-xl p-1.5 z-50 overflow-hidden"
                  >
                    {[
                      { code: 'en', label: 'English', native: 'English' },
                      { code: 'ar', label: 'العربية', native: 'Arabic' },
                      { code: 'bn', label: 'বাংলা', native: 'Bengali' },
                    ].map((item) => (
                      <button
                        key={item.code}
                        onClick={() => {
                          setLanguage(item.code as 'en' | 'ar' | 'bn');
                          setLangMenuOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                          language === item.code
                            ? 'bg-teal-deep text-white font-bold'
                            : 'text-ink hover:bg-paper hover:text-teal-deep'
                        }`}
                      >
                        <span>{item.label}</span>
                        <span className="font-mono text-[10px] opacity-70 uppercase">{item.code}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Worker Status Button (Next to Contact Us) */}
            <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.96 }} className="flex-shrink-0">
              <Link
                href="/worker-status"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-xl border border-teal-deep/25 bg-paper-white hover:bg-teal-deep/5 text-ink hover:text-teal-deep font-bold text-xs shadow-2xs hover:border-teal-deep transition-all duration-200 whitespace-nowrap flex-shrink-0"
              >
                <FontAwesomeIcon icon={faIdCardClip} className="w-3.5 h-3.5 text-teal-deep" />
                <span className="whitespace-nowrap">{t('nav_tracking', 'Worker Status')}</span>
              </Link>
            </motion.div>

            {/* Prominent Deep Teal Contact CTA Button */}
            <motion.div whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.96 }} className="flex-shrink-0">
              <button
                onClick={() => setConsultOpen(true)}
                className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-teal-deep hover:bg-teal-mid text-white border border-teal-line font-bold text-xs shadow-md shadow-teal-deep/15 hover:shadow-lg hover:shadow-teal-deep/25 transition-all duration-200 whitespace-nowrap flex-shrink-0"
              >
                <FontAwesomeIcon icon={faPhoneVolume} className="w-3.5 h-3.5 text-gold-light" />
                <span className="whitespace-nowrap">{t('nav_contact', 'Contact Us')}</span>
              </button>
            </motion.div>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center border border-paper-line bg-paper-white text-ink hover:text-teal-deep hover:border-teal-deep transition-colors flex-shrink-0"
              aria-label="Toggle navigation menu"
            >
              <FontAwesomeIcon icon={mobileMenuOpen ? faXmark : faBars} className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer with Accordion Sub-Categories */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: smoothEase }}
              className="xl:hidden overflow-hidden border-t border-paper-line bg-paper px-4 py-4 space-y-2 shadow-inner max-h-[80vh] overflow-y-auto"
            >
              {/* Home */}
              <Link
                href="/#home"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-bold text-sm text-ink hover:bg-teal-deep/10 hover:text-teal-deep transition-colors"
              >
                <FontAwesomeIcon icon={faHouse} className="w-4 h-4 text-teal-deep" />
                <span>{t('nav_home', 'Home')}</span>
              </Link>

              {/* Services Sub-Menu (Accordion) */}
              <div className="border border-paper-line rounded-xl overflow-hidden bg-paper-white">
                <button
                  onClick={() => setMobileSubmenu(mobileSubmenu === 'services' ? null : 'services')}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 font-bold text-sm text-ink bg-paper-2/40"
                >
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faLayerGroup} className="w-4 h-4 text-teal-deep" />
                    <span>{t('nav_services', 'Services')}</span>
                  </div>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`w-3 h-3 text-softText transition-transform ${
                      mobileSubmenu === 'services' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {mobileSubmenu === 'services' && (
                  <div className="p-2 space-y-1 bg-paper-white">
                    {serviceSubcategories.map((sub, idx) => (
                      <Link
                        key={idx}
                        href={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-ink hover:bg-teal-deep/10 hover:text-teal-deep"
                      >
                        <FontAwesomeIcon icon={sub.icon} className="w-3.5 h-3.5 text-teal-deep" />
                        <span>{sub.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Travel Sub-Menu (Accordion) */}
              <div className="border border-paper-line rounded-xl overflow-hidden bg-paper-white">
                <button
                  onClick={() => setMobileSubmenu(mobileSubmenu === 'travel' ? null : 'travel')}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 font-bold text-sm text-ink bg-paper-2/40"
                >
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faPlaneDeparture} className="w-4 h-4 text-teal-deep" />
                    <span>{t('nav_travel_dest', 'Travel & Tours')}</span>
                  </div>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`w-3 h-3 text-softText transition-transform ${
                      mobileSubmenu === 'travel' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {mobileSubmenu === 'travel' && (
                  <div className="p-2 space-y-1 bg-paper-white">
                    {travelSubcategories.map((sub, idx) => (
                      <Link
                        key={idx}
                        href={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-ink hover:bg-teal-deep/10 hover:text-teal-deep"
                      >
                        <FontAwesomeIcon icon={sub.icon} className="w-3.5 h-3.5 text-teal-deep" />
                        <span>{sub.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Status Tracker */}
              <Link
                href="/worker-status"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-bold text-sm text-ink hover:bg-teal-deep/10 hover:text-teal-deep transition-colors"
              >
                <FontAwesomeIcon icon={faIdCardClip} className="w-4 h-4 text-teal-deep" />
                <span>{t('nav_tracking', 'Status Tracker')}</span>
              </Link>

              {/* Company Sub-Menu (Accordion) */}
              <div className="border border-paper-line rounded-xl overflow-hidden bg-paper-white">
                <button
                  onClick={() => setMobileSubmenu(mobileSubmenu === 'company' ? null : 'company')}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 font-bold text-sm text-ink bg-paper-2/40"
                >
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faBuildingColumns} className="w-4 h-4 text-teal-deep" />
                    <span>{t('nav_company', 'Company')}</span>
                  </div>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`w-3 h-3 text-softText transition-transform ${
                      mobileSubmenu === 'company' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {mobileSubmenu === 'company' && (
                  <div className="p-2 space-y-1 bg-paper-white">
                    {companySubcategories.map((sub, idx) => (
                      <Link
                        key={idx}
                        href={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-ink hover:bg-teal-deep/10 hover:text-teal-deep"
                      >
                        <FontAwesomeIcon icon={sub.icon} className="w-3.5 h-3.5 text-teal-deep" />
                        <span>{sub.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Free Consultation CTA */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setConsultOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-teal-deep text-white font-bold text-sm shadow-md"
                >
                  <FontAwesomeIcon icon={faPhoneVolume} className="w-4 h-4 text-gold-light" />
                  <span>{t('cta_get_consultation', 'Get Free Consultation')}</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Modals */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <ConsultationModal isOpen={consultOpen} onClose={() => setConsultOpen(false)} />
    </>
  );
}
