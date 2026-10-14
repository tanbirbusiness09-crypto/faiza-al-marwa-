import React from 'react';
import Link from 'next/link';
import { DETAILED_SERVICES } from '@/lib/servicesData';
import {
  Building2,
  FileCheck2,
  Plane,
  Compass,
  Users2,
  MonitorSmartphone,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Services Directory | FAIZA AL MARWA COMPANY LTD',
  description:
    'Comprehensive MISA investor licensing & business setup, certified manpower recruitment, visa processing, international tour packages, and digital agency solutions in Saudi Arabia.',
};

const ICON_MAP: Record<string, any> = {
  Building2,
  FileCheck2,
  Plane,
  Compass,
  Users2,
  MonitorSmartphone,
};

export default function ServicesHubPage() {
  const servicesList = Object.values(DETAILED_SERVICES);

  return (
    <div className="min-h-screen bg-paper text-text pb-20">
      {/* Header Banner */}
      <section className="bg-ink text-white py-16 border-b border-gold/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(18,58,51,0.5),transparent_60%)] pointer-events-none" />
        <div className="max-w-[1480px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 text-center">
          <span className="text-gold font-display font-semibold uppercase tracking-wider text-xs block mb-2">
            Integrated Enterprise Solutions
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-paper mb-4">
            Our Services &amp; Specialized Verticals
          </h1>
          <p className="text-paper/75 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            From securing a 100% foreign-owned MISA investor license to recruiting certified workforce and planning international tours — we manage every process with complete compliance.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <div className="max-w-[1480px] mx-auto px-4 sm:px-8 lg:px-12 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => {
            const Icon = ICON_MAP[service.iconName] || Building2;
            return (
              <div
                key={service.id}
                className="flex flex-col justify-between p-7 rounded-xl bg-paper-card border border-paper-line hover:border-gold/50 shadow-sm hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-lg bg-teal-deep/10 text-teal-deep flex items-center justify-center group-hover:bg-gold group-hover:text-ink transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-paper text-text-soft uppercase tracking-wider border border-paper-line">
                      {service.categoryLabel}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-ink mb-3 group-hover:text-teal-deep transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-text-soft text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.deliverables.slice(0, 3).map((deliv, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-text font-medium">
                        <CheckCircle className="w-3.5 h-3.5 text-gold shrink-0" />
                        <span className="truncate">{deliv.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={service.href}
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-paper-line text-teal-deep font-semibold text-xs hover:text-gold transition-colors"
                >
                  <span>Explore Full Details</span>
                  <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
