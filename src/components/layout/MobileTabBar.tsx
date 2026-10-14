'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, LayoutGrid, Plane, CalendarCheck, Phone } from 'lucide-react';

type TabKey = 'home' | 'services' | 'tours' | 'book' | 'contact';

const TABS: {
  key: TabKey;
  label: string;
  href: string;
  icon: typeof Home;
  raised?: boolean;
}[] = [
  { key: 'home', label: 'Home', href: '/#home', icon: Home },
  { key: 'services', label: 'Services', href: '/services', icon: LayoutGrid },
  { key: 'book', label: 'Book', href: '/#booking', icon: CalendarCheck, raised: true },
  { key: 'tours', label: 'Tours', href: '/#travel', icon: Plane },
  { key: 'contact', label: 'Contact', href: '/contact', icon: Phone },
];

export default function MobileTabBar() {
  const pathname = usePathname();
  const [active, setActive] = useState<TabKey>('home');

  useEffect(() => {
    if (pathname === '/') setActive('home');
    else if (pathname.startsWith('/services')) setActive('services');
    else if (pathname.startsWith('/contact')) setActive('contact');
    else if (pathname.startsWith('/news') || pathname.startsWith('/jobs') || pathname.startsWith('/careers'))
      setActive('home');
    else if (pathname.startsWith('/worker-status')) setActive('contact');
    else if (pathname.startsWith('/admin')) setActive('home');
  }, [pathname]);

  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed bottom-0 inset-x-0 z-50 lg:hidden bg-paper-white border-t border-paper-line shadow-[0_-6px_24px_rgba(14,31,27,0.10)]"
    >
      <div className="grid grid-cols-5 h-16 items-stretch">
        {TABS.map((tab) => {
          const isActive = active === tab.key;
          const Icon = tab.icon;

          if (tab.raised) {
            return (
              <Link
                key={tab.key}
                href={tab.href}
                onClick={() => setActive(tab.key)}
                className="relative flex flex-col items-center justify-center gap-1 -mt-5"
                aria-label={tab.label}
              >
                <span
                  className={`w-[52px] h-[52px] rounded-full flex items-center justify-center border-[3px] border-paper-white shadow-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-gold text-ink shadow-gold/40'
                      : 'bg-navy text-white shadow-navy/35'
                  }`}
                >
                  <Icon className="w-5 h-5" strokeWidth={2.2} />
                </span>
                <span
                  className={`text-[10px] font-bold leading-none ${
                    isActive ? 'text-gold' : 'text-navy'
                  }`}
                >
                  {tab.label}
                </span>
              </Link>
            );
          }

          return (
            <Link
              key={tab.key}
              href={tab.href}
              onClick={() => setActive(tab.key)}
              className="flex flex-col items-center justify-center gap-1 group"
              aria-label={tab.label}
              aria-current={isActive ? 'page' : undefined}
            >
              <span
                className={`relative flex items-center justify-center w-9 h-7 rounded-full transition-all duration-200 ${
                  isActive ? 'bg-navy/10' : ''
                }`}
              >
                <Icon
                  className={`w-[19px] h-[19px] transition-colors ${
                    isActive ? 'text-navy' : 'text-softText group-active:text-navy'
                  }`}
                  strokeWidth={isActive ? 2.4 : 1.9}
                />
              </span>
              <span
                className={`text-[10px] leading-none transition-colors ${
                  isActive ? 'text-navy font-bold' : 'text-softText font-semibold'
                }`}
              >
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
      <div style={{ height: 'env(safe-area-inset-bottom)' }} />
    </nav>
  );
}
