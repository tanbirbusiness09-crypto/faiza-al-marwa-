export interface SiteSettings {
  brandNameEn: string;
  brandNameAr: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  phoneMain: string;
  phoneSupport: string;
  whatsappNumber: string;
  emailMain: string;
  emailCareers: string;
  addressRiyadh: string;
  addressJeddah: string;
  addressDammam: string;
  workingHours: string;
  instagramUrl: string;
  linkedinUrl: string;
  xUrl: string;
}

export interface CMSService {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  color: string;
  iconName: string;
  description: string;
  href: string;
  priceNote?: string;
  deliverables: { title: string; desc: string }[];
}

export interface CMSTravelPackage {
  id: string;
  cat: string;
  title: string;
  from: string;
  to: string;
  duration: string;
  price: string;
  badge?: string;
}

export interface CMSDestination {
  id: string;
  name: string;
  country: string;
  desc: string;
  tag: string;
}

export interface CMSJobPosting {
  id: string;
  title: string;
  category: string;
  location: string;
  type: string;
  salary: string;
  vacancies: number;
  experience: string;
  requirements: string[];
}

export interface CMSJobApplicant {
  id: string;
  jobId: string;
  jobTitle: string;
  name: string;
  phone: string;
  passportNumber: string;
  experienceYears: string;
  currentLocation: string;
  date: string;
  status: 'applied' | 'interview_scheduled' | 'gamca_medical' | 'visa_issued' | 'rejected';
}

export interface CMSWorkerStatus {
  id: string;
  refCode: string;
  fullName: string;
  passportNumber: string;
  trade: string;
  employer: string;
  currentStage: number; // 1 to 5
  statusLabel: string;
  updatedAt: string;
  stages: { name: string; date: string; status: 'completed' | 'in_progress' | 'pending' }[];
}

export interface CMSNewsArticle {
  id: string;
  cat: string;
  title: string;
  date: string;
  summary: string;
}

export interface CMSTestimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  quote: string;
}

export interface CMSFAQ {
  id: string;
  category: string;
  q: string;
  a: string;
}

export interface CMSInquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  serviceCategory: string;
  date: string;
  status: 'new' | 'in_review' | 'contacted' | 'completed';
  details: string;
}

export interface CMSDatabase {
  settings: SiteSettings;
  services: CMSService[];
  travelPackages: CMSTravelPackage[];
  destinations: CMSDestination[];
  jobs: CMSJobPosting[];
  applicants: CMSJobApplicant[];
  workers: CMSWorkerStatus[];
  news: CMSNewsArticle[];
  testimonials: CMSTestimonial[];
  faqs: CMSFAQ[];
  inquiries: CMSInquiry[];
}

export const INITIAL_CMS_DATABASE: CMSDatabase = {
  settings: {
    brandNameEn: 'FAIZA AL MARWA COMPANY LTD',
    brandNameAr: 'شركة فيصة المروة المحدودة',
    heroEyebrow: 'Based in Riyadh, Kingdom of Saudi Arabia',
    heroTitle: 'Your Journey. Your Business. <span class="text-teal-deep font-bold">Your Future.</span>',
    heroSubtitle: 'FAIZA AL MARWA brings travel, business setup, visa, manpower and digital services together under one roof — so every request starts in the same place.',
    phoneMain: '+966 11 000 0000',
    phoneSupport: '+966 50 000 0000',
    whatsappNumber: '+966 50 000 0000',
    emailMain: 'info@faizaalmarwa.com',
    emailCareers: 'careers@faizaalmarwa.com',
    addressRiyadh: 'King Fahd Road, Al Olaya District, P.O. Box 11564, Riyadh, KSA',
    addressJeddah: 'King Abdulaziz Road, Al Shatie District, Jeddah, KSA',
    addressDammam: 'King Saud St, Al Hussam, Dammam, KSA',
    workingHours: 'Sun – Thu: 8:00 AM – 6:00 PM (AST)',
    instagramUrl: 'https://instagram.com',
    linkedinUrl: 'https://linkedin.com',
    xUrl: 'https://x.com',
  },
  services: [
    {
      id: 'business-setup',
      title: 'Business Setup & MISA',
      category: 'business',
      categoryLabel: 'Business Formation',
      color: '#123A33',
      iconName: 'Building2',
      description: 'Complete commercial registration (CR), 100% foreign ownership MISA investor license, tax registration, and corporate bank account opening.',
      href: '/services/business-setup',
      deliverables: [
        { title: '100% Foreign Ownership MISA License', desc: 'Direct corporate establishment without local partner requirements.' },
        { title: 'Commercial Registration (CR)', desc: 'Official Ministry of Commerce company registration.' },
        { title: 'ZATCA Tax & GOSI Setup', desc: 'Complete VAT and social insurance compliance.' },
      ],
    },
    {
      id: 'visa-immigration',
      title: 'Visa & Corporate Immigration',
      category: 'visa',
      categoryLabel: 'Visa & Immigration',
      color: '#B8862F',
      iconName: 'FileCheck2',
      description: 'Corporate and personal visa handling, Iqama issuance & renewal, Qiwa portal sponsorship transfers, and Muqeem services.',
      href: '/services/visa-immigration',
      deliverables: [
        { title: 'Work & Employment Visas', desc: 'International visa stamping through official centers.' },
        { title: 'Qiwa Sponsorship Transfers', desc: 'Fast electronic employee contract transfers.' },
      ],
    },
    {
      id: 'travel-tourism',
      title: 'Travel, Flights & Tourism',
      category: 'travel',
      categoryLabel: 'Travel & Tourism',
      color: '#2A6357',
      iconName: 'Plane',
      description: 'Global airline tickets, luxury and budget hotel reservations, corporate business travel circuits, and tailored vacations.',
      href: '/services/travel-tourism',
      deliverables: [
        { title: 'Worldwide Airline Ticketing', desc: 'Corporate fares on Saudia, Emirates, and top carriers.' },
        { title: 'Luxury Hotel Reservations', desc: 'Preferred rates at 4-star and 5-star properties.' },
      ],
    },
    {
      id: 'umrah',
      title: 'Umrah & Religious Ziyarah',
      category: 'travel',
      categoryLabel: 'Umrah & Religious Tours',
      color: '#2A6357',
      iconName: 'Compass',
      description: 'Customized Umrah packages from Riyadh, Jeddah, and worldwide with luxury Haram-view hotels, Haramain train, and Nusuk support.',
      href: '/services/umrah',
      deliverables: [
        { title: 'Haram-Facing 5-Star Hotels', desc: 'Prime locations in Makkah & Madinah central zones.' },
        { title: 'Haramain High-Speed Train', desc: 'First class tickets between Makkah and Madinah.' },
      ],
    },
    {
      id: 'manpower',
      title: 'Manpower Supply & Recruitment',
      category: 'manpower',
      categoryLabel: 'Manpower Solutions',
      color: '#A23B2E',
      iconName: 'Users2',
      description: 'Sourcing, technical trade testing, medical verification, and mobilizing qualified workforce across civil, technical, and hospitality sectors.',
      href: '/services/manpower',
      deliverables: [
        { title: 'Technical Trade Testing', desc: 'Practical institute examinations before mobilization.' },
        { title: 'GAMCA Medical & Visa Logistics', desc: 'Fast turnaround deployment in 15-30 days.' },
      ],
    },
    {
      id: 'digital',
      title: 'Digital Agency & Web Tech',
      category: 'digital',
      categoryLabel: 'Digital Agency',
      color: '#1C4F45',
      iconName: 'MonitorSmartphone',
      description: 'High-converting Next.js web development, local Saudi SEO, Google Ads management, corporate branding, and CRM automation.',
      href: '/services/digital',
      deliverables: [
        { title: 'Next.js & React Web Apps', desc: 'Blazing fast, SEO-optimized digital platforms.' },
        { title: 'Saudi & GCC Local SEO', desc: 'Top Google search rankings in Arabic and English.' },
      ],
    },
  ],
  travelPackages: [
    { id: 'tp-1', cat: 'Umrah', title: 'Riyadh to Madinah Umrah Express', from: 'RUH', to: 'MED', duration: '5 Days / 4 Nights', price: '1,450', badge: 'Popular' },
    { id: 'tp-2', cat: 'Holiday', title: 'Istanbul & Bosphorus Explorer', from: 'JED', to: 'IST', duration: '7 Days / 6 Nights', price: '3,200', badge: 'Best Seller' },
    { id: 'tp-3', cat: 'Business', title: 'Dubai Corporate Direct Transit', from: 'RUH', to: 'DXB', duration: '3 Days / 2 Nights', price: '1,890' },
    { id: 'tp-4', cat: 'Umrah VIP', title: 'Makkah Clock Tower VIP Pilgrimage', from: 'DMM', to: 'JED', duration: '10 Days / 9 Nights', price: '5,600', badge: 'Luxury' },
  ],
  destinations: [
    { id: 'dest-1', name: 'Madinah', country: 'Saudi Arabia', tag: 'Spiritual Heritage', desc: 'Al-Masjid an-Nabawi, peaceful ambiance, and revered Islamic landmarks.' },
    { id: 'dest-2', name: 'Jeddah', country: 'Saudi Arabia', tag: 'Coastal Gateway', desc: 'The historic Al-Balad, Red Sea corniche, and gateway to Makkah.' },
    { id: 'dest-3', name: 'Riyadh', country: 'Saudi Arabia', tag: 'Capital & Business', desc: 'Kingdom Center, Boulevard City, and thriving enterprise center.' },
    { id: 'dest-4', name: 'Dubai', country: 'United Arab Emirates', tag: 'Shopping & Leisure', desc: 'Burj Khalifa, international business summits, and world-class luxury.' },
    { id: 'dest-5', name: 'Istanbul', country: 'Türkiye', tag: 'Culture & Nature', desc: 'Historic Bosphorus straits, Hagia Sophia, and vibrant markets.' },
    { id: 'dest-6', name: 'Cairo', country: 'Egypt', tag: 'Ancient History', desc: 'Giza Pyramids, Grand Egyptian Museum, and Nile river cruises.' },
  ],
  jobs: [
    {
      id: 'fam-job-01',
      title: 'Industrial & Panel Board Electrician',
      category: 'Electrical & Power',
      location: 'Riyadh, Saudi Arabia',
      type: 'Full-Time / 2-Year Contract',
      salary: 'SAR 2,200 - 3,000 / month',
      vacancies: 25,
      experience: '3+ Years in Industrial Wiring',
      requirements: ['Experience in cable tray laying and panel termination', 'Valid technical diploma', 'Medical fitness'],
    },
    {
      id: 'fam-job-02',
      title: 'HVAC & Central AC Maintenance Technician',
      category: 'Mechanical & HVAC',
      location: 'Jeddah & Makkah, Saudi Arabia',
      type: 'Full-Time / 2-Year Contract',
      salary: 'SAR 2,500 - 3,500 / month',
      vacancies: 18,
      experience: '4+ Years in VRV/VRF Systems',
      requirements: ['Troubleshooting commercial chillers', 'GAMCA medical readiness', 'Blueprint reading'],
    },
    {
      id: 'fam-job-03',
      title: 'Executive & Heavy Trailer Driver',
      category: 'Transportation & Logistics',
      location: 'Dammam & Eastern Province',
      type: 'Full-Time / 2-Year Contract',
      salary: 'SAR 2,000 - 2,800 / month',
      vacancies: 30,
      experience: '2+ Years Heavy License',
      requirements: ['Valid Heavy Driving License', 'Clean traffic record', 'GPS navigation'],
    },
    {
      id: 'fam-job-04',
      title: 'Commercial Kitchen Chef / Line Cook',
      category: 'Hospitality & Catering',
      location: 'Madinah, Saudi Arabia',
      type: 'Full-Time / 2-Year Contract',
      salary: 'SAR 1,800 - 2,600 / month',
      vacancies: 15,
      experience: '2+ Years in Hotel Kitchens',
      requirements: ['Middle Eastern & Continental food', 'Hygiene certification', 'Team player'],
    },
  ],
  applicants: [
    {
      id: 'app-1',
      jobId: 'fam-job-01',
      jobTitle: 'Industrial Electrician',
      name: 'Kamrul Hassan',
      phone: '+880 1819 123456',
      passportNumber: 'A09876543',
      experienceYears: '5 Years',
      currentLocation: 'Dhaka',
      date: 'Today, 10:15 AM',
      status: 'gamca_medical',
    },
    {
      id: 'app-2',
      jobId: 'fam-job-02',
      jobTitle: 'HVAC Technician',
      name: 'Tanvir Ahmed',
      phone: '+880 1712 987654',
      passportNumber: 'B12345678',
      experienceYears: '4 Years',
      currentLocation: 'Chittagong',
      date: 'Yesterday, 03:40 PM',
      status: 'interview_scheduled',
    },
  ],
  workers: [
    {
      id: 'wrk-1',
      refCode: 'FAM-MOB-84920',
      fullName: 'Mohammed Faruk Ahmed',
      passportNumber: 'A12345678',
      trade: 'Industrial Electrician',
      employer: 'Al-Bawani Contracting Co., Riyadh',
      currentStage: 4,
      statusLabel: 'Air Ticket Issued — Mobilization on 10 Sep 2026',
      updatedAt: '02 Sep 2026',
      stages: [
        { name: 'Document Verification & GAMCA Medical', date: '10 Aug 2026', status: 'completed' },
        { name: 'Technical Trade Test (Certified Institute)', date: '16 Aug 2026', status: 'completed' },
        { name: 'Qiwa Contract & MOFA Visa Stamping', date: '25 Aug 2026', status: 'completed' },
        { name: 'Flight Ticketing & Departure Briefing', date: '01 Sep 2026', status: 'in_progress' },
        { name: 'Airport Reception & Site Deployment (KSA)', date: '10 Sep 2026', status: 'pending' },
      ],
    },
    {
      id: 'wrk-2',
      refCode: 'FAM-MOB-84921',
      fullName: 'Shahidul Islam',
      passportNumber: 'B98765432',
      trade: 'HVAC Maintenance Specialist',
      employer: 'Nesma & Partners, Jeddah',
      currentStage: 3,
      statusLabel: 'MOFA Visa Stamping In Progress',
      updatedAt: '01 Sep 2026',
      stages: [
        { name: 'Document Verification & GAMCA Medical', date: '12 Aug 2026', status: 'completed' },
        { name: 'Technical Trade Test (Certified Institute)', date: '20 Aug 2026', status: 'completed' },
        { name: 'Qiwa Contract & MOFA Visa Stamping', date: '28 Aug 2026', status: 'in_progress' },
        { name: 'Flight Ticketing & Departure Briefing', date: 'Pending', status: 'pending' },
        { name: 'Airport Reception & Site Deployment (KSA)', date: 'Pending', status: 'pending' },
      ],
    },
  ],
  news: [
    { id: 'news-1', cat: 'Company News', title: 'FAIZA AL MARWA Expands Digital Services Division in Riyadh', date: 'Aug 2026', summary: 'New specialized software and local Saudi SEO division launched to support enterprises.' },
    { id: 'news-2', cat: 'Manpower', title: 'Understanding Workforce Mobilization Timelines under Qiwa Portal', date: 'Aug 2026', summary: 'Step-by-step breakdown of GAMCA medical, trade test, and electronic contract issuance.' },
    { id: 'news-3', cat: 'Travel & Umrah', title: 'Planning Umrah Pilgrimage during Peak Season: Essential Guide', date: 'Jul 2026', summary: 'Practical tips for Nusuk permits, Haramain rail reservations, and hotel selection.' },
    { id: 'news-4', cat: 'Visa & Iqama', title: 'Common Iqama Renewal & Labor Quota Rules in Saudi Arabia', date: 'Jul 2026', summary: 'A quick checklist for HR managers before renewal appointments.' },
  ],
  testimonials: [
    { id: 'test-1', name: 'A. Hassan', role: 'Managing Director, Gulf Logistics', rating: 5, quote: 'Handled our company establishment and 25 investor/worker visas without a single unexpected delay.' },
    { id: 'test-2', name: 'R. Karim', role: 'Project HR Manager, Nesma', rating: 5, quote: 'Manpower mobilization that used to take months was completed in 20 days with pre-screened certified electricians.' },
    { id: 'test-3', name: 'S. Noor', role: 'Family Traveler', rating: 5, quote: 'Booked our family VIP Umrah package end-to-end. Clock Tower hotel rooms and Haramain train transfers were perfect.' },
  ],
  faqs: [
    { id: 'faq-1', category: 'General', q: 'What services does FAIZA AL MARWA provide?', a: 'We provide travel, business setup, visa and immigration, manpower, and digital agency solutions — all coordinated through one team.' },
    { id: 'faq-2', category: 'Manpower', q: 'How can an employer request manpower?', a: 'Use the Request Manpower form or contact our corporate manpower desk directly with headcount and job roles.' },
    { id: 'faq-3', category: 'Travel', q: 'How do we book customized Umrah packages?', a: 'Choose from our standard packages or send a custom itinerary request via WhatsApp for instant hotel and train confirmation.' },
    { id: 'faq-4', category: 'Business', q: 'Can foreign investors own 100% of a company in Saudi Arabia?', a: 'Yes. Under MISA regulations, foreign investors can own 100% of companies across commercial, industrial, and service sectors.' },
  ],
  inquiries: [
    {
      id: 'FAM-INQ-9482',
      name: 'Tariq Al-Mansoor',
      phone: '+966 50 123 4567',
      email: 'tariq@mansoor-holding.sa',
      serviceCategory: 'Business Setup',
      date: 'Today, 09:30 AM',
      status: 'new',
      details: 'Looking to establish 100% foreign-owned LLC for industrial contracting with MISA license and 15 investor visas.',
    },
    {
      id: 'FAM-INQ-9481',
      name: 'Apex Construction Co.',
      phone: '+966 55 987 6543',
      email: 'hr@apexconstruction.com',
      serviceCategory: 'Manpower Supply',
      date: 'Today, 08:15 AM',
      status: 'in_review',
      details: 'Requisition for 40 industrial electricians and 25 HVAC duct fitters for Qiddiya project mobilization.',
    },
    {
      id: 'FAM-INQ-9480',
      name: 'Dr. Fatima Rahman',
      phone: '+880 1711 000000',
      email: 'fatima.rahman@gmail.com',
      serviceCategory: 'VIP Umrah Package',
      date: 'Yesterday, 04:20 PM',
      status: 'contacted',
      details: 'Family of 5 requesting 10-day VIP Umrah package with Clock Tower Makkah Haram view and Haramain first class train.',
    },
  ],
};
