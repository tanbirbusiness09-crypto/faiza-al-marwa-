import { ServiceItem } from '@/types';

export interface ServiceDetailData extends ServiceItem {
  heroTag: string;
  heroHeadline: string;
  overview: string;
  deliverables: { title: string; desc: string; iconName: string }[];
  steps: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  ctaText: string;
}

export const DETAILED_SERVICES: Record<string, ServiceDetailData> = {
  'business-setup': {
    id: 'business-setup',
    title: 'Investor License & Business Setup in Saudi Arabia',
    category: 'business',
    categoryLabel: 'Business Formation',
    color: '#123A33',
    iconName: 'Building2',
    description: 'Complete commercial registration (CR), 100% foreign ownership MISA investor license, tax registration, and corporate bank account opening.',
    href: '/services/business-setup',
    heroTag: 'Saudi Vision 2030 Fast-Track',
    heroHeadline: 'Launch Your Business in Saudi Arabia with 100% Foreign Ownership',
    overview: 'Saudi Arabia offers immense commercial growth under Vision 2030. FAIZA AL MARWA provides end-to-end corporate establishment services for international entrepreneurs, GCC nationals, and local investors — handling all regulatory licensing from MISA through the Ministry of Commerce to tax and banking.',
    deliverables: [
      { title: '100% Foreign Ownership MISA License', desc: 'Secure your Ministry of Investment (MISA) license without requiring a local Saudi partner.', iconName: 'ShieldCheck' },
      { title: 'Commercial Registration (CR)', desc: 'Issuance of official Commercial Registration from the Ministry of Commerce with approved business activities.', iconName: 'FileText' },
      { title: 'Chamber of Commerce & Municipal Licensing', desc: 'Electronic Chamber membership and Balady municipal municipality business permits.', iconName: 'Building' },
      { title: 'ZATCA & GOSI Tax Registration', desc: 'Full setup for Corporate Income Tax, VAT compliance, and Social Insurance (GOSI) accounts.', iconName: 'Receipt' },
      { title: 'Corporate Bank Account Opening', desc: 'Assistance with top Saudi commercial banks (Al Rajhi, SNB, Riyad Bank, SABB).', iconName: 'Landmark' },
      { title: 'Government Relations (PRO / Muqeem)', desc: 'Ongoing corporate PRO, Qiwa platform management, and labor quota allocations.', iconName: 'Users' },
    ],
    steps: [
      { step: '01', title: 'Consultation & Entity Structure', desc: 'Determine the best corporate structure (LLC, Branch, Joint Venture) and capital requirements.' },
      { step: '02', title: 'MISA Licensing & Name Reservation', desc: 'File application on the MISA portal and reserve commercial name with Ministry of Commerce.' },
      { step: '03', title: 'Articles of Association & CR Issuance', desc: 'E-notarization of company bylaws and instant Commercial Registration issuance.' },
      { step: '04', title: 'Tax, Qiwa & Bank Account Setup', desc: 'Complete ZATCA tax files, GOSI, labor files, and activate corporate banking.' },
    ],
    faqs: [
      { q: 'Can a foreign national own 100% of a company in Saudi Arabia?', a: 'Yes. Under MISA regulations, foreign investors can own 100% of companies across services, contracting, trading, and industrial sectors.' },
      { q: 'How long does the entire business setup take?', a: 'Standard LLC formation with CR issuance typically takes 3 to 7 working days once all attested documents are submitted.' },
      { q: 'Do you assist with General Manager visas and Iqamas?', a: 'Yes, we process General Manager investor visas, resident Iqamas, and employee transfer files.' },
    ],
    ctaText: 'Start Your Business Setup in KSA',
  },
  'visa-immigration': {
    id: 'visa-immigration',
    title: 'Visa Processing & Corporate Immigration',
    category: 'visa',
    categoryLabel: 'Visa & Immigration',
    color: '#B8862F',
    iconName: 'FileCheck2',
    description: 'Corporate and personal visa handling, Iqama issuance & renewal, Qiwa portal sponsorship transfers, and Muqeem services.',
    href: '/services/visa-immigration',
    heroTag: 'Govt. Portals Certified Support',
    heroHeadline: 'Fast, Compliant Visa & Iqama Services in Saudi Arabia',
    overview: 'Navigating Saudi immigration regulations requires precision and up-to-the-minute regulatory knowledge. FAIZA AL MARWA coordinates directly with Qiwa, Absher, Muqeem, and Ministry of Foreign Affairs (MOFA) systems to ensure legal compliance and rapid approvals.',
    deliverables: [
      { title: 'Work & Employment Visas', desc: 'Sourcing and stamping work visas through Saudi embassies and authorized visa centers worldwide.', iconName: 'Briefcase' },
      { title: 'Iqama Issuance & Yearly Renewals', desc: 'Prompt processing of medical reports, insurance approvals, and electronic Iqama cards.', iconName: 'CreditCard' },
      { title: 'Qiwa Electronic Sponsorship Transfers', desc: 'Smooth employee transfers (Naqal Kafala) through the official Qiwa labor portal.', iconName: 'ArrowRightLeft' },
      { title: 'Exit-Re-Entry & Final Exit Permits', desc: 'Single and multiple re-entry visa issuance for corporate staff and families.', iconName: 'PlaneTakeoff' },
      { title: 'Business & Investor Visit Visas', desc: 'Commercial visit invitations for international executives, consultants, and trade delegations.', iconName: 'UserCheck' },
      { title: 'Family Residence Visas & Istiqdam', desc: 'Permanent family residency permits and family visit visa processing.', iconName: 'HeartHandshake' },
    ],
    steps: [
      { step: '01', title: 'Document Audit', desc: 'Review passports, medical clearance, and professional qualification attestations.' },
      { step: '02', title: 'Portal Filing (Qiwa / MOFA)', desc: 'Submit visa quota requests or electronic contract authorizations.' },
      { step: '03', title: 'Embassy Stamping & Staging', desc: 'Coordinate with international visa application centers for biometric stamping.' },
      { step: '04', title: 'Iqama Delivery & Activation', desc: 'Issue physical resident ID and digital Absher/Muqeem profile activation.' },
    ],
    faqs: [
      { q: 'How can an employer transfer an employee through Qiwa?', a: 'We initiate the contract transfer request on Qiwa, ensure labor compliance, and finalize the transfer within Ministry timelines.' },
      { q: 'What is required for Iqama renewal?', a: 'Valid medical insurance, labor office fees clearance (Maktab Amal), and Jawazat renewal processing.' },
    ],
    ctaText: 'Submit Visa & Iqama Request',
  },
  'travel-tourism': {
    id: 'travel-tourism',
    title: 'Travel, Flight Bookings & Tourism',
    category: 'travel',
    categoryLabel: 'Travel & Tourism',
    color: '#2A6357',
    iconName: 'Plane',
    description: 'Global airline tickets, luxury and budget hotel reservations, corporate business travel circuits, and tailored vacations.',
    href: '/services/travel-tourism',
    heroTag: 'Worldwide Airline & Hotel Partnerships',
    heroHeadline: 'Seamless Travel Experiences Designed for Business & Leisure',
    overview: 'From urgent corporate flights between Riyadh, Dubai, and international hubs to unforgettable family holidays in Türkiye and Egypt, FAIZA AL MARWA provides 24/7 dedicated booking support, preferential airline fares, and handpicked hotels.',
    deliverables: [
      { title: 'Domestic & International Airline Bookings', desc: 'Direct corporate ticketing on Saudia, Flynas, Emirates, Qatar Airways, Turkish Airlines, and global carriers.', iconName: 'Plane' },
      { title: 'Curated Hotel Reservations', desc: 'Exclusive rates at 4-star and 5-star hotels worldwide with flexible cancellation options.', iconName: 'Hotel' },
      { title: 'Corporate Group Travel Management', desc: 'Dedicated travel logistics for business conferences, trade missions, and staff relocations.', iconName: 'Users2' },
      { title: 'Custom Holiday Packages', desc: 'All-inclusive family getaways, honeymoon escapes, and cultural tours.', iconName: 'Palmtree' },
      { title: 'VIP Airport Meet & Assist', desc: 'Fast-track immigration, private lounge access, and chauffeured airport transfers.', iconName: 'Car' },
      { title: '24/7 Flight Rebooking Support', desc: 'Immediate change of dates, ticket re-issuance, and emergency travel coordination on WhatsApp.', iconName: 'Headphones' },
    ],
    steps: [
      { step: '01', title: 'Share Travel Itinerary', desc: 'Specify your travel dates, cabin class, hotel preferences, and headcount.' },
      { step: '02', title: 'Receive Optimized Quotes', desc: 'Our travel desk compares live global inventories to deliver best routes and pricing.' },
      { step: '03', title: 'Instant Confirmation & E-Tickets', desc: 'Receive instant boarding vouchers, hotel confirmations, and transport details.' },
    ],
    faqs: [
      { q: 'Can you handle group bookings for corporate teams?', a: 'Yes, we manage group bookings of any size with consolidated billing and dedicated travel managers.' },
      { q: 'Do you offer emergency ticket rescheduling?', a: 'Our travel desk operates 24/7 via WhatsApp to handle urgent flight modifications.' },
    ],
    ctaText: 'Book Your Flights & Hotels',
  },
  'manpower': {
    id: 'manpower',
    title: 'Corporate Manpower Supply & Recruitment',
    category: 'manpower',
    categoryLabel: 'Manpower Solutions',
    color: '#A23B2E',
    iconName: 'Users2',
    description: 'Sourcing, technical trade testing, medical verification, and mobilizing qualified workforce across civil, technical, and hospitality sectors.',
    href: '/services/manpower',
    heroTag: 'Saudi Labor Law Compliant',
    heroHeadline: 'Mobilize Skilled & Semi-Skilled Workforce for Your Projects',
    overview: 'Major construction, engineering, and service projects in Saudi Arabia require reliable, tested, and pre-screened labor. FAIZA AL MARWA provides rapid manpower recruitment and mobilization across 10+ core trade verticals with total legal compliance.',
    deliverables: [
      { title: 'Civil & Construction Trades', desc: 'Masons, steel fixers, carpenters, scaffolders, and heavy equipment operators.', iconName: 'HardHat' },
      { title: 'Electrical & Power Systems', desc: 'Industrial electricians, panel board wiremen, low-current & telecom technicians.', iconName: 'Zap' },
      { title: 'Mechanical, Plumbing & HVAC', desc: 'HVAC technicians, certified pipe fitters, duct men, and industrial mechanics.', iconName: 'Wrench' },
      { title: 'Hospitality & Catering Staff', desc: 'Hotel housekeepers, commercial kitchen chefs, waitstaff, and baristas.', iconName: 'Utensils' },
      { title: 'Facility Cleaning & Janitorial', desc: 'Commercial building cleaners, mall maintenance crews, and industrial cleaners.', iconName: 'Sparkles' },
      { title: 'Drivers & Fleet Operators', desc: 'Heavy trailer drivers, bus drivers, and executive chauffeur drivers.', iconName: 'Truck' },
    ],
    steps: [
      { step: '01', title: 'Headcount Requisition', desc: 'Specify job roles, required trade certifications, quantities, and site location.' },
      { step: '02', title: 'Candidate Screening & Trade Testing', desc: 'Practical trade testing in certified technical institutes with video verification.' },
      { step: '03', title: 'Visa Stamping & Medical Clearance', desc: 'Complete GAMCA medical check, visa endorsement, and airline bookings.' },
      { step: '04', title: 'Site Deployment & Onboarding', desc: 'Worker mobilization to your project site in Saudi Arabia with full documentation.' },
    ],
    faqs: [
      { q: 'What is the mobilization timeline for manpower recruitment?', a: 'Standard mobilization ranges from 15 to 35 days depending on visa availability and trade test scheduling.' },
      { q: 'Do candidates undergo technical trade tests before arrival?', a: 'Yes, 100% of technical trades undergo physical practical exams in certified workshops.' },
    ],
    ctaText: 'Request Manpower Requisition',
  },
  'digital': {
    id: 'digital',
    title: 'Digital Agency, Web & Tech Solutions',
    category: 'digital',
    categoryLabel: 'Digital Agency',
    color: '#1C4F45',
    iconName: 'MonitorSmartphone',
    description: 'High-converting Next.js web development, local Saudi SEO, Google Ads management, corporate branding, and CRM automation.',
    href: '/services/digital',
    heroTag: 'High-Performance Engineering',
    heroHeadline: 'Accelerate Your Business Growth with Modern Digital Solutions',
    overview: 'A powerful online presence is critical for commanding market leadership in the GCC. FAIZA AL MARWA’s digital team designs blazing fast web applications, manages high-ROI performance advertising, and automates business operations.',
    deliverables: [
      { title: 'Next.js & React Web Applications', desc: 'Modern, mobile-responsive, lightning-fast web platforms built with TypeScript and Tailwind.', iconName: 'Code2' },
      { title: 'Local Saudi & GCC SEO', desc: 'Dominating top Google search positions for high-intent Arabic and English commercial keywords.', iconName: 'Search' },
      { title: 'Performance Google & Social Ads', desc: 'Data-driven paid search, display, and TikTok/Instagram ad campaigns that drive real sales.', iconName: 'Flame' },
      { title: 'E-Commerce with Saudi Payments', desc: 'Online stores integrated with Mada, Apple Pay, Tabby, Tamara, and Visa payment gateways.', iconName: 'ShoppingCart' },
      { title: 'Corporate Identity & Branding', desc: 'Bilingual logo design, typography, brand guidelines, and corporate marketing materials.', iconName: 'Palette' },
      { title: 'WhatsApp & Business CRM Automation', desc: 'Automated customer messaging, lead capture bots, and ERP integration.', iconName: 'Cpu' },
    ],
    steps: [
      { step: '01', title: 'Discovery & Strategy', desc: 'Analyze your market, competitors, and growth objectives.' },
      { step: '02', title: 'UI/UX Design & Prototyping', desc: 'Craft modern, high-converting bilingual interface designs.' },
      { step: '03', title: 'Full-Stack Development', desc: 'Build, optimize, and test with clean architecture and maximum page speed.' },
      { step: '04', title: 'Launch & ROI Marketing', desc: 'Deploy on high-speed infrastructure and scale customer acquisition.' },
    ],
    faqs: [
      { q: 'What technologies do you use for website development?', a: 'We specialize in Next.js, React, TypeScript, Tailwind CSS, and Node.js for maximum speed, security, and SEO ranking.' },
      { q: 'Do you provide bilingual Arabic and English websites?', a: 'Yes, every digital product we build includes native Arabic RTL and English support.' },
    ],
    ctaText: 'Start Your Digital Project',
  },
};
