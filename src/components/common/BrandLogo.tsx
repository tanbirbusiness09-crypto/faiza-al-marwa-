'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BrandLogoProps {
  className?: string;
  isFooter?: boolean;
}

export default function BrandLogo({ className = '', isFooter = false }: BrandLogoProps) {
  return (
    <Link href="/#home" className={`flex items-center gap-3 group select-none ${className}`}>
      {/* Brand Logo Image */}
      <div className="relative w-10 h-10 flex-shrink-0 rounded-xl overflow-hidden border border-gold/40 shadow-sm group-hover:scale-105 transition-transform duration-300 bg-black">
        <Image
          src="/images/logo.jpeg"
          alt="FAIZA AL MARWA Logo"
          fill
          sizes="40px"
          className="object-cover"
          priority
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center min-w-0">
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={`font-display font-bold text-base sm:text-[17px] tracking-tight uppercase ${
              isFooter ? 'text-white' : 'text-ink'
            }`}
          >
            FAIZA AL MARWA
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
        </div>
        <span
          className={`text-[9.5px] font-semibold tracking-widest uppercase mt-1 ${
            isFooter ? 'text-paper-white/60' : 'text-softText/80'
          }`}
        >
          COMPANY LTD · شركة فيصة المروة
        </span>
      </div>
    </Link>
  );
}
