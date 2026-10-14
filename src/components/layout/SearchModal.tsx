'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, ArrowRight, Tag } from 'lucide-react';
import Link from 'next/link';
import { smoothEase } from '@/lib/animations';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SEARCH_ITEMS = [
  { tag: 'Service', label: 'Investor License & Business Setup', href: '/#featured-services' },
  { tag: 'Service', label: 'Visa & Immigration Services', href: '/#featured-services' },
  { tag: 'Service', label: 'International Tour Packages', href: '/#travel' },
  { tag: 'Service', label: 'Manpower Supply & Mobilization', href: '/#manpower' },
  { tag: 'Tour', label: 'Istanbul Historical & Bosphorus Tour', href: '/#travel' },
  { tag: 'Tour', label: 'Cairo Heritage & Nile Cruise', href: '/#travel' },
  { tag: 'Tour', label: 'Dubai Corporate Circuit', href: '/#travel' },
  { tag: 'Tour', label: 'Bangkok & Pattaya Retreat', href: '/#travel' },
  { tag: 'Tour', label: 'Bali Island Paradise Getaway', href: '/#travel' },
  { tag: 'Tour', label: 'Kuala Lumpur & Genting Explorer', href: '/#travel' },
  { tag: 'Digital', label: 'Website Design & UI/UX', href: '/#digital' },
  { tag: 'Digital', label: 'Full-Stack Web Development', href: '/#digital' },
  { tag: 'Digital', label: 'SEO & Google Ads Marketing', href: '/#digital' },
  { tag: 'Digital', label: 'Business Automation & SaaS', href: '/#digital' },
  { tag: 'Job', label: 'Site Electrician (Riyadh Metro)', href: '/#manpower' },
  { tag: 'Job', label: 'HVAC Technician (Jeddah Project)', href: '/#manpower' },
  { tag: 'Job', label: 'Executive Driver (Riyadh)', href: '/#manpower' },
  { tag: 'News', label: 'How Long Does Workforce Mobilization Really Take in KSA?', href: '/news/workforce-mobilization-timelines-saudi-arabia' },
  { tag: 'News', label: 'New MISA Pathways Make 100% Foreign Ownership Easier', href: '/news/misa-investor-license-pathways-foreign-entrepreneurs' },
  { tag: 'Support', label: 'Worker Status & Visa Verification Tracker', href: '/worker-status' },
];

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const inputRef = useRef<HTMLInputElement>(null);

  const categories = ['All', 'Service', 'Tour', 'Digital', 'Job', 'News', 'Support'];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setActiveCategory('All');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const filtered = SEARCH_ITEMS.filter((item) => {
    const matchesCat = activeCategory === 'All' || item.tag === activeCategory;
    const matchesQuery = !query || item.label.toLowerCase().includes(query.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-ink/70 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -15 }}
            transition={{ duration: 0.22, ease: smoothEase }}
            className="bg-paper-white w-full max-w-2xl rounded-2xl shadow-2xl border border-paper-line overflow-hidden relative z-10 flex flex-col max-h-[80vh]"
          >
            {/* Input Bar */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-paper-line">
              <Search className="w-5 h-5 text-gold flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search services, destinations, visa, manpower, articles..."
                className="w-full text-sm sm:text-base text-ink placeholder:text-softText/60 bg-transparent outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="text-xs text-softText hover:text-ink px-2 py-1 bg-paper rounded"
                >
                  Clear
                </button>
              )}
              <button
                onClick={onClose}
                className="p-1 rounded-lg hover:bg-paper text-softText hover:text-ink transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 px-5 py-2.5 bg-paper/50 border-b border-paper-line overflow-x-auto scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                    activeCategory === cat
                      ? 'bg-navy text-white shadow-2xs'
                      : 'text-softText hover:text-ink hover:bg-paper-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Results List */}
            <div className="overflow-y-auto p-3 divide-y divide-paper-line/50">
              {filtered.length > 0 ? (
                filtered.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between px-3 py-3 rounded-lg hover:bg-paper transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-paper-2 text-teal-deep">
                        {item.tag}
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-ink group-hover:text-teal-deep transition-colors">
                        {item.label}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-softText group-hover:text-gold group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))
              ) : (
                <div className="py-12 text-center text-softText text-xs">
                  No matching results found for &ldquo;{query}&rdquo;
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-5 py-2.5 bg-paper/30 border-t border-paper-line flex items-center justify-between text-[11px] text-softText">
              <span>Press <kbd className="px-1.5 py-0.5 bg-paper-white border border-paper-line rounded font-mono text-[10px]">ESC</kbd> to close</span>
              <span>{filtered.length} results</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
