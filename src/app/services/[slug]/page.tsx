import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DETAILED_SERVICES } from '@/lib/servicesData';
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
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Clock,
  PhoneCall,
  MessageCircle,
} from 'lucide-react';
import type { Metadata } from 'next';

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
};

export async function generateStaticParams() {
  return Object.keys(DETAILED_SERVICES).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = DETAILED_SERVICES[slug];

  if (!service) {
    return {
      title: 'Service Not Found — FAIZA AL MARWA',
    };
  }

  return {
    title: `${service.title} | FAIZA AL MARWA COMPANY LTD`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = DETAILED_SERVICES[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-paper text-text pb-20">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-ink text-white py-16 lg:py-24 border-b border-gold/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(18,58,51,0.6),transparent_60%)] pointer-events-none" />
        <div className="max-w-[1480px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 border border-gold/40 text-gold text-xs font-semibold uppercase tracking-wider mb-6">
            <span>{service.heroTag}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-paper mb-6 leading-tight max-w-4xl">
            {service.heroHeadline}
          </h1>

          <p className="text-paper/80 text-base sm:text-lg max-w-3xl leading-relaxed mb-8">
            {service.overview}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/#booking"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-gold hover:bg-gold-light text-ink font-semibold text-sm transition-all shadow-md active:scale-95"
            >
              <span>{service.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-paper/30 hover:border-gold text-paper hover:text-gold font-semibold text-sm transition-all bg-white/5"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Talk to an Advisor</span>
            </a>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <div className="border-b border-paper-line bg-paper-card">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-8 lg:px-12 py-3 text-xs text-text-soft flex items-center gap-2">
          <Link href="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/services" className="hover:text-gold transition-colors">
            Services
          </Link>
          <span>/</span>
          <span className="text-teal-deep font-semibold">{service.categoryLabel}</span>
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
                  What We Deliver
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-ink">
                  Core Solutions &amp; Deliverables
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
                      <h3 className="text-base font-bold text-ink mb-2">{item.title}</h3>
                      <p className="text-text-soft text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Step-by-Step Execution Process */}
            <section className="bg-paper-card p-6 sm:p-8 rounded-xl border border-paper-line">
              <div className="mb-8">
                <span className="text-gold font-display font-semibold uppercase tracking-wider text-xs block mb-1">
                  Execution Roadmap
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-ink">
                  How the Process Works
                </h2>
              </div>

              <div className="space-y-6">
                {service.steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4 pb-6 border-b border-paper-line last:border-0 last:pb-0">
                    <div className="w-10 h-10 rounded-full bg-teal-deep text-gold flex items-center justify-center font-display font-bold text-sm shrink-0 shadow">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-ink mb-1">{step.title}</h4>
                      <p className="text-text-soft text-sm leading-relaxed">{step.desc}</p>
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
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-4">
                {service.faqs.map((faq, idx) => (
                  <div key={idx} className="p-5 rounded-lg bg-paper-card border border-paper-line">
                    <h4 className="font-bold text-ink text-sm sm:text-base mb-2">{faq.q}</h4>
                    <p className="text-text-soft text-sm leading-relaxed">{faq.a}</p>
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
                Need Fast-Track Assistance?
              </h3>
              <p className="text-paper/75 text-xs sm:text-sm leading-relaxed mb-6">
                Connect with our dedicated department officers for direct pricing quotes and regulatory timelines.
              </p>

              <div className="space-y-3">
                <Link
                  href="/#booking"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md bg-gold hover:bg-gold-light text-ink font-semibold text-xs transition-all shadow"
                >
                  <span>Submit Inquiry Online</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href="https://wa.me/966500000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md bg-white/10 hover:bg-white/20 text-paper font-semibold text-xs transition-all border border-white/20"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Direct WhatsApp Line</span>
                </a>
              </div>
            </div>

            {/* Other Services Directory */}
            <div className="p-6 rounded-xl bg-paper-card border border-paper-line">
              <h4 className="font-display font-bold text-ink text-sm uppercase tracking-wider mb-4">
                Explore Other Services
              </h4>
              <ul className="space-y-2 text-xs font-semibold">
                {Object.values(DETAILED_SERVICES)
                  .filter((s) => s.id !== service.id)
                  .map((other) => (
                    <li key={other.id}>
                      <Link
                        href={other.href}
                        className="flex items-center justify-between p-2.5 rounded-md hover:bg-paper text-text hover:text-teal-deep border border-transparent hover:border-paper-line transition-all"
                      >
                        <span>{other.title}</span>
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
