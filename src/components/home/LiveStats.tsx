'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Plane, Users, Briefcase, Headphones } from 'lucide-react';
import { smoothEase, staggerContainer, staggerItem } from '@/lib/animations';

export default function LiveStats() {
  const statsList = [
    {
      num: '2,500+',
      label: 'Flights Booked',
      sub: 'Monthly',
      icon: Plane,
      isDark: true,
    },
    {
      num: '1,200+',
      label: 'Workers Deployed',
      sub: 'Successfully',
      icon: Users,
      isDark: false,
    },
    {
      num: '800+',
      label: 'Business Setups',
      sub: 'Completed',
      icon: Briefcase,
      isDark: false,
    },
    {
      num: '24/7',
      label: 'Customer Support',
      sub: 'Always Here',
      icon: Headphones,
      isDark: false,
    },
  ];

  return (
    <section className="container-custom pt-0 pb-6" id="stats">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: smoothEase }}
        className="bg-paper-white border border-paper-line rounded-2xl shadow-sm flex flex-col lg:flex-row items-stretch overflow-hidden"
      >
        {/* Left Islamic Arabic Calligraphy Gold Seal Emblem Block */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-teal-deep min-w-[170px] lg:min-w-[200px] flex items-center justify-center p-4 lg:p-6 border-b lg:border-b-0 lg:border-r border-paper-line shrink-0 cursor-pointer"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/arabic-gold-seal.jpg"
            alt="Royal Islamic Arabic Calligraphy Seal"
            className="w-28 lg:w-32 h-auto object-contain drop-shadow-md hover:rotate-1 transition-transform"
          />
        </motion.div>

        {/* 4 Stats Grid with Staggered Motion */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center p-4 sm:p-6 divide-y sm:divide-y-0 sm:divide-x divide-paper-line"
        >
          {statsList.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                variants={staggerItem}
                whileHover={{ y: -2 }}
                className="flex items-center gap-4 px-4 py-3 sm:py-2 transition-transform"
              >
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 shadow-xs ${
                    stat.isDark
                      ? 'bg-teal-deep text-white'
                      : 'bg-gold/15 text-gold'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <div>
                  <div className="text-xl sm:text-2xl font-display font-extrabold text-ink leading-none">
                    {stat.num}
                  </div>
                  <div className="text-xs text-text-soft font-medium mt-1 leading-tight">
                    {stat.label}
                    <br />
                    <span className="text-[11px] opacity-80">{stat.sub}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
