'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import type { ServiceDetailData } from '@/lib/servicesData';
import {
  ShieldCheck,
  FileText,
  Building,
  Receipt,
  Landmark,
  Users,
  Briefcase,
  CreditCard,
  ArrowRightLeft,
  PlaneTakeoff,
  UserCheck,
  HeartHandshake,
  Plane,
  Hotel,
  Users2,
  Palmtree,
  Car,
  Headphones,
  Sparkles,
  Train,
  MapPin,
  Smartphone,
  HardHat,
  Zap,
  Wrench,
  Utensils,
  Truck,
  Code2,
  Search,
  Flame,
  ShoppingCart,
  Palette,
  Cpu,
  Home,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Clock,
  PhoneCall,
  MessageCircle,
  CalendarCheck,
} from 'lucide-react';

const ICON_MAP: Record<string, any> = {
  ShieldCheck,
  FileText,
  Building,
  Receipt,
  Landmark,
  Users,
  Briefcase,
  CreditCard,
  ArrowRightLeft,
  PlaneTakeoff,
  UserCheck,
  HeartHandshake,
  Plane,
  Hotel,
  Users2,
  Palmtree,
  Car,
  Headphones,
  Sparkles,
  Train,
  MapPin,
  Smartphone,
  HardHat,
  Zap,
  Wrench,
  Utensils,
  Truck,
  Code2,
  Search,
  Flame,
  ShoppingCart,
  Palette,
  Cpu,
  Home,
};

interface ServiceDetailProps {
  service: ServiceDetailData;
  otherServices: ServiceDetailData[];
}

export default function ServiceDetail({ service, otherServices }: ServiceDetailProps) {
  const { tx } = useLanguage();

  return (
    <div className="min-h-screen bg-paper text-text pb-20">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-ink text-white py-16 lg:py-24 border-b border-gold/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(18,58,51,0.6),transparent_60%)] pointer-events-none" />
        <div className="max-w-[1480px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 border border-gold/40 text-gold text-xs font-semibold uppercase tracking-wider mb-6">
            <span>{tx(service.heroTag, service.heroTagAr || service.heroTag, service.heroTagBn || service.heroTag)}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-paper mb-6 leading-tight max-w-4xl">
            {tx(service.heroHeadline, service.heroHeadlineAr || service.heroHeadline, service.heroHeadlineBn || service.heroHeadline)}
          </h1>

          <p className="text-paper/80 text-base sm:text-lg max-w-3xl leading-relaxed mb-8">
            {tx(service.overview, service.overviewAr || service.overview, service.overviewBn || service.overview)}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-navy-light hover:bg-[#2E66C0] text-white font-semibold text-sm transition-all shadow-md active:scale-95"
            >
              <CalendarCheck className="w-4 h-4 text-gold-light" />
              <span>{tx('Get Appointment', 'احصل على موعد', 'অ্যাপয়েন্টমেন্ট নিন')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#1EA352] hover:bg-[#188B46] text-white font-semibold text-sm transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <Link
              href="/#booking"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-paper/30 hover:border-gold text-paper hover:text-gold font-semibold text-sm transition-all bg-white/5"
            >
              <span>{tx(service.ctaText, service.ctaTextAr || service.ctaText, service.ctaTextBn || service.ctaText)}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <div className="border-b border-paper-line bg-paper-card">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-8 lg:px-12 py-3 text-xs text-text-soft flex items-center gap-2">
          <Link href="/" className="hover:text-gold transition-colors">
            {tx('Home', 'الرئيسية', 'হোম')}
          </Link>
          <span>/</span>
          <Link href="/services" className="hover:text-gold transition-colors">
            {tx('Services', 'الخدمات', 'সেবা')}
          </Link>
          <span>/</span>
          <span className="text-teal-deep font-semibold">
            {tx(service.categoryLabel, service.categoryLabelAr || service.categoryLabel, service.categoryLabelBn || service.categoryLabel)}
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1480px] mx-auto px-4 sm:px-8 lg:px-12 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Details (2 Cols) */}
          <div className="lg:col-span-2 space-y-12">
            {/* Core Capabilities */}
            <section>
              <div className="mb-8">
                <span className="text-gold font-display font-semibold uppercase tracking-wider text-xs block mb-1">
                  {tx('What We Deliver', 'ما نقدمه', 'আমরা যা প্রদান করি')}
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-ink">
                  {tx('Core Solutions & Deliverables', 'الحلول الأساسية والمخرجات', 'মূল সমাধান ও ডেলিভারেবল')}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {service.deliverables.map((item, idx) => {
                  const Icon = ICON_MAP[item.iconName] || ShieldCheck;
                  return (
                    <div
                      key={idx}
                      className="p-5 rounded-lg bg-paper-card border border-paper-line hover:border-gold/50 transition-all shadow-sm group"
                    >
                      <div className="w-10 h-10 rounded-md bg-teal-deep/10 text-teal-deep flex items-center justify-center mb-4 group-hover:bg-gold group-hover:text-ink transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-ink mb-2">
                        {tx(item.title, item.titleAr || item.title, item.titleBn || item.title)}
                      </h3>
                      <p className="text-text-soft text-sm leading-relaxed">
                        {tx(item.desc, item.descAr || item.desc, item.descBn || item.desc)}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Step-by-Step Execution Process */}
            <section className="bg-paper-card p-6 sm:p-8 rounded-xl border border-paper-line">
              <div className="mb-8">
                <span className="text-gold font-display font-semibold uppercase tracking-wider text-xs block mb-1">
                  {tx('Execution Roadmap', 'خارطة التنفيذ', 'কার্যক্রম রোডম্যাপ')}
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-ink">
                  {tx('How the Process Works', 'كيف تسير العملية', 'প্রক্রিয়া কীভাবে কাজ করে')}
                </h2>
              </div>

              <div className="space-y-6">
                {service.steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4 pb-6 border-b border-paper-line last:border-0 last:pb-0">
                    <div className="w-10 h-10 rounded-full bg-teal-deep text-gold flex items-center justify-center font-display font-bold text-sm shrink-0 shadow">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-ink mb-1">
                        {tx(step.title, step.titleAr || step.title, step.titleBn || step.title)}
                      </h4>
                      <p className="text-text-soft text-sm leading-relaxed">
                        {tx(step.desc, step.descAr || step.desc, step.descBn || step.desc)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQs */}
            <section>
              <div className="mb-6 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-gold" />
                <h2 className="text-xl sm:text-2xl font-display font-bold text-ink">
                  {tx('Frequently Asked Questions', 'الأسئلة الشائعة', 'সাধারণ জিজ্ঞাসা')}
                </h2>
              </div>

              <div className="space-y-4">
                {service.faqs.map((faq, idx) => (
                  <div key={idx} className="p-5 rounded-lg bg-paper-card border border-paper-line">
                    <h4 className="font-bold text-ink text-sm sm:text-base mb-2">
                      {tx(faq.q, faq.questionAr || faq.q, faq.questionBn || faq.q)}
                    </h4>
                    <p className="text-text-soft text-sm leading-relaxed">
                      {tx(faq.a, faq.answerAr || faq.a, faq.answerBn || faq.a)}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar (1 Col) */}
          <div className="space-y-6">
            {/* Quick Request Box */}
            <div className="p-6 rounded-xl bg-teal-deep text-white border border-teal-mid shadow-lg">
              <div className="w-10 h-10 rounded-lg bg-gold/20 text-gold flex items-center justify-center mb-4">
                <PhoneCall className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display font-bold text-paper mb-2">
                {tx('Need Fast-Track Assistance?', 'هل تحتاج إلى مساعدة سريعة؟', 'দ্রুত সহায়তা প্রয়োজন?')}
              </h3>
              <p className="text-paper/75 text-xs sm:text-sm leading-relaxed mb-6">
                {tx(
                  'Connect with our dedicated department officers for direct pricing quotes and regulatory timelines.',
                  'تواصل مع مسؤولي الأقسام المخصصة لدينا للحصول على عروض أسعار مباشرة والجداول التنظيمية.',
                  'সরাসরি মূল্য উদ্ধৃতি ও নিয়ামক সময়সীমার জন্য আমাদের বিশেষায়িত বিভাগের কর্মকর্তাদের সাথে যোগাযোগ করুন।'
                )}
              </p>

              <div className="space-y-3">
                <Link
                  href="/#booking"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md bg-navy-light hover:bg-[#2E66C0] text-white font-semibold text-xs transition-all shadow"
                >
                  <span>{tx('Submit Inquiry Online', 'أرسل استفسارك عبر الإنترنت', 'অনলাইনে জিজ্ঞাসা পাঠান')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href="https://wa.me/966500000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md bg-white/10 hover:bg-white/20 text-paper font-semibold text-xs transition-all border border-white/20"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>{tx('Direct WhatsApp Line', 'خط WhatsApp مباشر', 'সরাসরি WhatsApp লাইন')}</span>
                </a>
              </div>
            </div>

            {/* Other Services Directory */}
            <div className="p-6 rounded-xl bg-paper-card border border-paper-line">
              <h4 className="font-display font-bold text-ink text-sm uppercase tracking-wider mb-4">
                {tx('Explore Other Services', 'استكشف خدمات أخرى', 'অন্যান্য সেবা দেখুন')}
              </h4>
              <ul className="space-y-2 text-xs font-semibold">
                {otherServices.map((other) => (
                  <li key={other.id}>
                    <Link
                      href={other.href}
                      className="flex items-center justify-between p-2.5 rounded-md hover:bg-paper text-text hover:text-teal-deep border border-transparent hover:border-paper-line transition-all"
                    >
                      <span>{tx(other.title, other.titleAr || other.title, other.titleBn || other.title)}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gold" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
