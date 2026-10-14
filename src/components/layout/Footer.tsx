'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { APP_CONFIG } from '@/lib/data';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import BrandLogo from '@/components/common/BrandLogo';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-ink text-paper-white/80 pt-16 pb-8 border-t border-paper-line/20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo isFooter={true} />

            <p className="text-xs sm:text-sm text-paper-white/65 leading-relaxed max-w-sm">
              {t('footer_about_body', 'MISA investor licensing, manpower recruitment, visa processing, international tour packages, and digital agency solutions for the Saudi market and beyond.')}
            </p>

            <div className="pt-2 space-y-2 text-xs text-paper-white/70">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold-light flex-shrink-0" />
                <span>{APP_CONFIG.addressEn}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold-light flex-shrink-0" />
                <span>{APP_CONFIG.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gold-light flex-shrink-0" />
                <span>{APP_CONFIG.email}</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-light font-body">
              {t('footer_company', 'Company')}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-paper-white/75">
              <li>
                <Link href="/#home" className="hover:text-gold-light transition-colors">
                  {t('footer_about', 'About Us')}
                </Link>
              </li>
              <li>
                <Link href="/#why" className="hover:text-gold-light transition-colors">
                  {t('why_title', 'Why Us')}
                </Link>
              </li>
              <li>
                <Link href="/#news" className="hover:text-gold-light transition-colors">
                  {t('nav_news', 'News & Updates')}
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="hover:text-gold-light transition-colors">
                  {t('testi_title', 'Client Reviews')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-light font-body">
              {t('footer_services', 'Services')}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-paper-white/75">
              <li>
                <Link href="/#featured-services" className="hover:text-gold-light transition-colors">
                  Investor License & Business Setup
                </Link>
              </li>
              <li>
                <Link href="/#featured-services" className="hover:text-gold-light transition-colors">
                  Visa & Iqama
                </Link>
              </li>
              <li>
                <Link href="/#manpower" className="hover:text-gold-light transition-colors">
                  Manpower Supply
                </Link>
              </li>
              <li>
                <Link href="/#digital" className="hover:text-gold-light transition-colors">
                  Digital Agency
                </Link>
              </li>
              <li>
                <Link href="/#travel" className="hover:text-gold-light transition-colors">
                  International Tour Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Portals & Tools */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-light font-body">
              {t('footer_explore', 'Portals')}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-paper-white/75">
              <li>
                <Link href="/worker-status" className="hover:text-gold-light transition-colors flex items-center gap-1">
                  <span>Worker Status Tracker</span>
                  <ArrowUpRight className="w-3 h-3 text-gold" />
                </Link>
              </li>
              <li>
                <Link href="/#booking" className="hover:text-gold-light transition-colors">
                  Book an Appointment
                </Link>
              </li>
              <li>
                <Link href="/#travel" className="hover:text-gold-light transition-colors">
                  International Tours
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-gold-light transition-colors">
                  FAQs & Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-light font-body">
              Operating Hours
            </h4>
            <p className="text-xs text-paper-white/70 leading-relaxed">
              Saturday – Thursday<br />
              08:30 AM – 09:30 PM (AST)<br />
              <span className="text-gold-light font-semibold">24/7 Support via WhatsApp</span>
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/${APP_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-700/60 hover:bg-emerald-600 text-white text-xs font-semibold transition-colors"
              >
                <span>Live Chat Support</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-paper-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-paper-white/50">
          <p>© 2026 {APP_CONFIG.companyName}. {t('footer_rights', 'All rights reserved.')}</p>
          <div className="flex items-center gap-6">
            <Link href="/#home" className="hover:text-gold-light transition-colors">
              {t('footer_privacy', 'Privacy Policy')}
            </Link>
            <Link href="/#home" className="hover:text-gold-light transition-colors">
              {t('footer_terms', 'Terms & Conditions')}
            </Link>
            <Link href="/#final-cta" className="hover:text-gold-light transition-colors">
              Riyadh, KSA
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
