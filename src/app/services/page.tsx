import React from 'react';
import { DETAILED_SERVICES } from '@/lib/servicesData';
import ServicesListing from './ServicesListing';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Services Directory | FAIZA AL MARWA COMPANY LTD',
  description:
    'Comprehensive MISA investor licensing & business setup, certified manpower recruitment, visa processing, international tour packages, and digital agency solutions in Saudi Arabia.',
};

export default function ServicesHubPage() {
  const servicesList = Object.values(DETAILED_SERVICES);

  return <ServicesListing services={servicesList} />;
}
