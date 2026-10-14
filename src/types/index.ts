export type Language = 'en' | 'ar' | 'bn';

export interface TranslationDictionary {
  [key: string]: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: 'travel' | 'business' | 'visa' | 'manpower' | 'digital' | 'real-estate';
  categoryLabel: string;
  color: string;
  iconName: string;
  description: string;
  features?: string[];
  href: string;
}

export interface TravelPackage {
  id: string;
  category: string;
  title: string;
  place: string;
  image: string;
  from: string;
  to: string;
  duration: string;
  price: string;
  featured?: boolean;
}

export interface ManpowerCategory {
  id: string;
  label: string;
  iconName: string;
  count?: string;
}

export interface DigitalServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tags?: string[];
}

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  image: string;
  readTime: string;
  gradient: string;
  iconName: string;
  body: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company?: string;
  rating: number;
  quote: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface InquirySubmission {
  id: string;
  type: 'booking' | 'manpower' | 'job' | 'consultation' | 'general';
  name: string;
  phone: string;
  email?: string;
  details: Record<string, any>;
  createdAt: string;
  status: 'new' | 'contacted' | 'completed';
}
