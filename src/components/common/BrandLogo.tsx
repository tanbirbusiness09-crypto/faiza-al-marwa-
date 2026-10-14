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
    <Link href="/#home" className={`flex items-center gap-2 sm:gap-2.5 group select-none ${className}`}>
      {/* Brand Logo Image */}
      <div
        className={`relative flex-shrink-0 group-hover:scale-105 transition-transform duration-300 ${
          isFooter ? 'w-11 h-11 sm:w-12 sm:h-12' : 'w-9 h-9 sm:w-10 sm:h-10'
        }`}
      >
        <Image
          src="/images/logo.png"
          alt="FAIZA AL MARWA Logo"
          fill
          sizes={isFooter ? '48px' : '40px'}
          className="object-contain"
          priority
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center min-w-0">
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={`font-display font-bold tracking-tight uppercase ${
              isFooter
                ? 'text-white text-base sm:text-[17px]'
                : 'text-ink text-[14.5px] sm:text-[16px]'
            }`}
          >
            FAIZA AL MARWA
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
        </div>
      </div>
    </Link>
  );
}
