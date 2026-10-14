import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { NEWS_DATA } from '@/lib/data';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  CalendarDays,
  Tag,
  Share2,
  MessageCircle,
} from 'lucide-react';
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
    <div className="min-h-screen bg-paper text-text">
      {/* ---------- Article Hero ---------- */}
      <section className="relative">
        <div className="relative h-[300px] sm:h-[400px] lg:h-[460px] overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,31,27,.55)_0%,rgba(14,31,27,.35)_45%,rgba(14,31,27,.92)_100%)]" />
        </div>

        {/* All hero text stays inside the dark gradient — never spills onto paper */}
        <div className="absolute inset-x-0 bottom-0">
          <div className="max-w-[860px] mx-auto px-4 sm:px-8 pb-8 sm:pb-10">
            <Link
              href="/news"
              className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-white/75 hover:text-gold-light transition-colors mb-4"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Articles</span>
            </Link>

            <div className="flex flex-wrap items-center gap-2.5 mb-3.5">
              <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-wider bg-gold text-ink px-2.5 py-1 rounded-full">
                <Tag className="w-3 h-3" />
                {article.category}
              </span>
              <span className="flex items-center gap-1.5 text-[11.5px] font-medium text-white/80">
                <CalendarDays className="w-3.5 h-3.5 text-gold-light" />
                {article.date}
              </span>
              <span className="flex items-center gap-1.5 text-[11.5px] font-medium text-white/80">
                <Clock className="w-3.5 h-3.5 text-gold-light" />
                {article.readTime}
              </span>
            </div>

            <h1 className="text-[26px] leading-[1.15] sm:text-4xl lg:text-[44px] sm:leading-[1.12] font-display font-bold text-white drop-shadow-sm">
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      {/* ---------- Reading Card ---------- */}
      <div className="max-w-[860px] mx-auto px-4 sm:px-8 -mt-4 sm:-mt-6 relative z-10">
        <article className="bg-paper-white border border-paper-line rounded-2xl shadow-pass p-5 sm:p-9 lg:p-11">
          {/* Byline / tools bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-7 border-b border-paper-line">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center shrink-0">
                <span className="text-[13px] font-display font-bold">FM</span>
              </div>
              <div className="leading-tight">
                <span className="block text-[13px] font-bold text-ink">
                  FAIZA AL MARWA Editorial
                </span>
                <span className="block text-[11px] text-softText">
                  Riyadh, Saudi Arabia · {article.date}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-softText bg-paper px-2.5 py-1.5 rounded-lg border border-paper-line">
                <Clock className="w-3.5 h-3.5 text-navy" />
                {article.readTime}
              </span>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(`${article.title} — faizaalmarwa.com/news/${article.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on WhatsApp"
                className="inline-flex items-center gap-1.5 text-[11px] font-bold text-white bg-[#1EA352] hover:bg-[#188B46] px-3 py-1.5 rounded-lg transition-colors"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share</span>
              </a>
            </div>
          </div>

          {/* Lead paragraph */}
          <div className="mb-8 bg-paper border-l-4 border-gold rounded-r-xl px-5 py-4">
            <p className="text-[15.5px] sm:text-[17px] leading-[1.75] font-medium text-ink">
              {article.summary}
            </p>
          </div>

          {/* Body — each paragraph highlights on hover for easier reading */}
          <div className="space-y-1.5">
            {article.body.map((para, i) => (
              <p
                key={i}
                className={[
                  'text-[15.5px] leading-[1.85] text-ink/85 rounded-lg px-4 -mx-4 py-2',
                  'transition-colors duration-200 ease-out',
                  'hover:bg-paper hover:text-ink hover:shadow-sm',
                  i === 0
                    ? 'first-letter:font-display first-letter:font-bold first-letter:text-navy first-letter:text-[52px] first-letter:leading-[0.85] first-letter:float-left first-letter:mr-2.5 first-letter:mt-1.5'
                    : '',
                ].join(' ')}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Tags + CTA */}
          <div className="mt-9 flex flex-wrap gap-2">
            {[article.category, 'FAIZA AL MARWA', 'Riyadh'].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-navy bg-navy/8 border border-navy/15 px-2.5 py-1 rounded-full"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-7 p-6 sm:p-8 rounded-xl bg-[linear-gradient(135deg,#003078_0%,#001F52_100%)] text-white relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full border border-white/10 pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-lg sm:text-xl font-display font-bold mb-2 leading-snug">
                Need this handled for your business?
              </h3>
              <p className="text-white/80 text-[13.5px] leading-relaxed mb-5 max-w-lg">
                Our Riyadh team handles investor licensing, manpower mobilization, and compliance
                end-to-end. Book a free consultation or message us on WhatsApp.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-navy hover:bg-gold-light hover:text-ink font-bold text-xs sm:text-sm transition-colors shadow-md"
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
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* ---------- Related Articles ---------- */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12 pt-14 pb-16">
        <div className="flex items-end justify-between mb-6 gap-4">
          <h2 className="text-xl sm:text-2xl font-display font-bold text-ink">Keep Reading</h2>
          <Link
            href="/news"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-navy hover:text-navy-light transition-colors group"
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
              className="group flex flex-col bg-paper-card border border-paper-line rounded-xl overflow-hidden hover:border-gold/50 hover:shadow-cardHover transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute left-3 top-3 text-[10px] font-bold uppercase tracking-wider bg-gold text-ink px-2 py-0.5 rounded-full">
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
