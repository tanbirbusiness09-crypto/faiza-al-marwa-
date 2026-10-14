'use client';

import React from 'react';
import { APP_CONFIG } from '@/lib/data';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${APP_CONFIG.whatsappNumber}?text=Hello%20FAIZA%20AL%20MARWA%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with FAIZA AL MARWA on WhatsApp"
      className="fixed bottom-24 right-4 lg:bottom-6 lg:right-6 z-40 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#1EA352] text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 group"
    >
      <MessageCircle className="w-6 h-6 lg:w-7 lg:h-7 fill-white/20" />
      {/* Tooltip on hover */}
      <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-ink text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-lg">
        Chat with Us on WhatsApp
      </span>
    </a>
  );
}
