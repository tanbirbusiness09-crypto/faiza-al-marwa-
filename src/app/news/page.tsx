import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NEWS_DATA } from '@/lib/data';
import { ArrowLeft, ArrowRight, Clock, CalendarDays } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News, Guides & Regulatory Updates | FAIZA AL MARWA',
  description:
    'Insights from Riyadh on MISA investor licensing, manpower mobilization, Saudi compliance, and digital transformation for foreign businesses.',
};

export default function NewsIndexPage() {
  const [featured, ...rest] = NEWS_DATA;

  return (
    <div className="min-h-screen bg-paper text-text pb-20">
      {/* Header Banner */}
      <section className="bg-ink text-white py-14 border-b border-gold/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(18,58,51,0.55),transparent_60%)] pointer-events-none" />
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-paper/70 hover:text-gold transition-colors mb-5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
          <span className="text-gold font-display font-semibold uppercase tracking-wider text-xs block mb-2">
            Insights from Riyadh
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-paper mb-4">
            News, Guides &amp; Regulatory Updates
          </h1>
          <p className="text-paper/75 text-sm sm:text-base max-w-2xl leading-relaxed">
            Practical briefings on Saudi investor licensing, workforce mobilization, compliance
            checkpoints, and digital growth — written by the team running these processes daily.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12 pt-12">
        <Link
          href={`/news/${featured.slug}`}
          className="group grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-paper-card border border-paper-line rounded-2xl overflow-hidden p-6 sm:p-8 hover:border-gold/50 hover:shadow-md transition-all"
        >
          <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <span className="absolute left-3 top-3 text-[10px] font-bold uppercase tracking-wider bg-navy text-white px-2.5 py-1 rounded-full">
              Featured
            </span>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-3 text-[11px] text-text-soft mb-3">
              <span className="font-bold text-navy uppercase tracking-wider">
                {featured.category}
              </span>
              <span className="flex items-center gap-1">
                <CalendarDays className="w-3 h-3" />
                {featured.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {featured.readTime}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-bold text-ink leading-snug group-hover:text-navy transition-colors">
              {featured.title}
            </h2>

            <p className="text-text-soft text-sm leading-relaxed mt-3 line-clamp-3">
              {featured.summary}
            </p>

            <span className="inline-flex items-center gap-1.5 mt-5 text-xs font-bold text-teal-deep group-hover:text-navy transition-colors">
              <span>Read Full Article</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </Link>

        {/* Remaining Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {rest.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.slug}`}
              className="group flex flex-col bg-paper-card border border-paper-line rounded-xl overflow-hidden hover:border-gold/50 hover:shadow-md transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute left-3 top-3 text-[10px] font-bold uppercase tracking-wider bg-navy text-white px-2 py-0.5 rounded-full">
                  {item.category}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-[11px] text-text-soft mb-2">
                  <span className="flex items-center gap-1">
                    <CalendarDays className="w-3 h-3" />
                    {item.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {item.readTime}
                  </span>
                </div>

                <h3 className="text-base font-display font-bold text-ink leading-snug group-hover:text-navy transition-colors line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-xs text-text-soft leading-relaxed line-clamp-3 mt-2">
                  {item.summary}
                </p>

                <span className="inline-flex items-center gap-1 mt-4 pt-3 border-t border-paper-line text-xs font-bold text-teal-deep group-hover:text-navy transition-colors">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
