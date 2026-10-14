import React from 'react';
import { notFound } from 'next/navigation';
import { DETAILED_SERVICES } from '@/lib/servicesData';
import ServiceDetail from './ServiceDetail';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return Object.keys(DETAILED_SERVICES).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = DETAILED_SERVICES[slug];

  if (!service) {
    return {
      title: 'Service Not Found — FAIZA AL MARWA',
    };
  }

  return {
    title: `${service.title} | FAIZA AL MARWA COMPANY LTD`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = DETAILED_SERVICES[slug];

  if (!service) {
    notFound();
  }

  const otherServices = Object.values(DETAILED_SERVICES).filter((s) => s.id !== service.id);

  return <ServiceDetail service={service} otherServices={otherServices} />;
}
