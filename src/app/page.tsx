import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ServiceFinder from '@/components/home/ServiceFinder';
import QuickAccessGrid from '@/components/home/QuickAccessGrid';
import FeaturedServices from '@/components/home/FeaturedServices';
import TravelTickets from '@/components/home/TravelTickets';
import InteractiveBooking from '@/components/home/InteractiveBooking';
import ManpowerSection from '@/components/home/ManpowerSection';
import DigitalServicesGrid from '@/components/home/DigitalServicesGrid';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import HowItWorks from '@/components/home/HowItWorks';
import LiveStats from '@/components/home/LiveStats';
import LatestNews from '@/components/home/LatestNews';
import Testimonials from '@/components/home/Testimonials';
import FaqAccordion from '@/components/home/FaqAccordion';
import FinalCta from '@/components/home/FinalCta';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServiceFinder />
      <QuickAccessGrid />
      <FeaturedServices />
      <TravelTickets />
      <InteractiveBooking />
      <ManpowerSection />
      <DigitalServicesGrid />
      <WhyChooseUs />
      <HowItWorks />
      <LiveStats />
      <LatestNews />
      <Testimonials />
      <FaqAccordion />
      <FinalCta />
    </>
  );
}
