import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { NEWS_DATA } from '@/lib/data';
import { ArrowLeft, ArrowRight, Clock, CalendarDays, Tag } from 'lucide-react';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return NEWS_DATA.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = NEWS_DATA.find((n) => n.slug === slug);

  if (!article) {
    return { title: 'Article Not Found — FAIZA AL MARWA' };
  }

  return {
    title: `${article.title} | FAIZA AL MARWA News`,
    description: article.summary,
  };
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = NEWS_DATA.find((n) => n.slug === slug);

  if (!article) {
    notFound();
  }

  const related = NEWS_DATA.filter((n) => n.slug !== article.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-paper text-text pb-20">
      {/* Article Hero */}
      <section className="relative">
        <div className="relative h-[280px] sm:h-[380px] lg:h-[440px] overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/25" />
        </div>

        <div className="max-w-[820px] mx-auto px-4 sm:px-8 -mt-28 sm:-mt-32 relative z-10">
          <Link
            href="/news"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-white/85 hover:text-gold transition-colors mb-5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Articles</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-[11px] text-white/85 mb-4">
            <span className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider bg-navy text-white px-2.5 py-1 rounded-full">
              <Tag className="w-3 h-3" />
              {article.category}
            </span>
            <span className="flex items-center gap-1">
              <CalendarDays className="w-3.5 h-3.5 text-gold-light" />
              {article.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-gold-light" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white leading-tight drop-shadow">
            {article.title}
          </h1>
        </div>
      </section>

      {/* Article Body */}
      <article className="max-w-[820px] mx-auto px-4 sm:px-8 pt-8">
        <p className="text-base sm:text-lg text-text leading-relaxed font-medium border-l-4 border-gold pl-4 mb-7">
          {article.summary}
        </p>

        <div className="space-y-5">
          {article.body.map((para, i) => (
            <p key={i} className="text-[15px] leading-[1.8] text-text">
              {para}
            </p>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-navy text-white relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full border border-white/10 pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl font-display font-bold mb-2">
              Need this handled for your business?
            </h3>
            <p className="text-white/80 text-sm leading-relaxed mb-5 max-w-lg">
              Our Riyadh team handles investor licensing, manpower mobilization, and compliance
              end-to-end. Book a free consultation or message us on WhatsApp.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gold hover:bg-gold-light text-ink font-bold text-xs sm:text-sm transition-colors shadow-md"
              >
                <span>Get Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/966500000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#1EA352] hover:bg-[#188B46] text-white font-bold text-xs sm:text-sm transition-colors shadow-md"
              >
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12 pt-14">
        <div className="flex items-end justify-between mb-6 gap-4">
          <h2 className="text-xl sm:text-2xl font-display font-bold text-ink">
            Keep Reading
          </h2>
          <Link
            href="/news"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-deep hover:text-navy transition-colors group"
          >
            <span>All Articles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((item) => (
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
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute left-3 top-3 text-[10px] font-bold uppercase tracking-wider bg-navy text-white px-2 py-0.5 rounded-full">
                  {item.category}
                </span>
              </div>

              <div className="p-5">
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

                <h3 className="text-sm font-display font-bold text-ink leading-snug group-hover:text-navy transition-colors line-clamp-2">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
