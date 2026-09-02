'use client';

import React from 'react';
import Link from 'next/link';

interface BrandLogoProps {
  className?: string;
  isFooter?: boolean;
}

export default function BrandLogo({ className = '', isFooter = false }: BrandLogoProps) {
  return (
    <Link href="/#home" className={`flex items-center gap-3 group select-none ${className}`}>
      {/* Luxury Royal Emblem SVG */}
      <div className="relative w-10 h-10 flex-shrink-0">
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
        >
          {/* Outer Gold Shield/Octagram Border */}
          <rect
            x="3"
            y="3"
            width="42"
            height="42"
            rx="12"
            className="fill-teal-deep stroke-gold stroke-[1.5]"
          />
          
          {/* Inner Accent Ring */}
          <circle
            cx="24"
            cy="24"
            r="16"
            stroke="#E7C77A"
            strokeWidth="0.8"
            strokeDasharray="2 2"
            className="opacity-60"
          />

          {/* Stylized Saudi Palm & Falcon Wing Silhouette */}
          <path
            d="M24 10C24 10 25.5 15 28 17C26 17 24 15.5 24 15.5C24 15.5 22 17 20 17C22.5 15 24 10 24 10Z"
            fill="#E7C77A"
          />
          <path
            d="M24 17C24 17 27.5 20.5 31 21C28.5 21.5 25.5 19.5 24 18.5C22.5 19.5 19.5 21.5 17 21C20.5 20.5 24 17 24 17Z"
            fill="#B8862F"
          />
          
          {/* Stylized Crescent & Letter M Curve */}
          <path
            d="M16 28C17.5 33 21 35.5 24 35.5C27 35.5 30.5 33 32 28C29.5 30.5 26.5 31.5 24 31.5C21.5 31.5 18.5 30.5 16 28Z"
            fill="#E7C77A"
          />
          
          {/* Central Golden Diamond Star */}
          <polygon
            points="24,20 26.5,24.5 24,29 21.5,24.5"
            fill="#FFFDF8"
            className="opacity-95"
          />
          <circle cx="24" cy="24.5" r="1.5" fill="#B8862F" />

          {/* Palm Trunk Centerline */}
          <line
            x1="24"
            y1="19"
            x2="24"
            y2="31"
            stroke="#B8862F"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
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
