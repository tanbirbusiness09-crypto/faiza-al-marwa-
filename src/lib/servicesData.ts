import { ServiceItem } from '@/types';

export interface ServiceDetailData extends ServiceItem {
  titleAr?: string;
  titleBn?: string;
  categoryLabelAr?: string;
  categoryLabelBn?: string;
  descriptionAr?: string;
  descriptionBn?: string;
  heroTag: string;
  heroTagAr?: string;
  heroTagBn?: string;
  heroHeadline: string;
  heroHeadlineAr?: string;
  heroHeadlineBn?: string;
  overview: string;
  overviewAr?: string;
  overviewBn?: string;
  deliverables: {
    title: string;
    titleAr?: string;
    titleBn?: string;
    desc: string;
    descAr?: string;
    descBn?: string;
    iconName: string;
  }[];
  steps: {
    step: string;
    title: string;
    titleAr?: string;
    titleBn?: string;
    desc: string;
    descAr?: string;
    descBn?: string;
  }[];
  faqs: {
    q: string;
    questionAr?: string;
    questionBn?: string;
    a: string;
    answerAr?: string;
    answerBn?: string;
  }[];
  ctaText: string;
  ctaTextAr?: string;
  ctaTextBn?: string;
}

export const DETAILED_SERVICES: Record<string, ServiceDetailData> = {
  'business-setup': {
    id: 'business-setup',
    title: 'Investor License & Business Setup in Saudi Arabia',
    titleAr: 'رخصة المستثمر وتأسيس الشركات في السعودية',
    titleBn: 'সৌদি আরবে বিনিয়োগকারীর লাইসেন্স ও ব্যবসা প্রতিষ্ঠা',
    category: 'business',
    categoryLabel: 'Business Formation',
    categoryLabelAr: 'تأسيس الشركات',
    categoryLabelBn: 'ব্যবসা প্রতিষ্ঠা',
    color: '#123A33',
    iconName: 'Building2',
    description: 'Complete commercial registration (CR), 100% foreign ownership MISA investor license, tax registration, and corporate bank account opening.',
    descriptionAr: 'التسجيل التجاري الكامل (CR)، رخصة مستثمر MISA بملكية أجنبية 100%، التسجيل الضريبي، وفتح حساب بنكي للشركات.',
    descriptionBn: 'সম্পূর্ণ বাণিজ্যিক নিবন্ধন (CR), ১০০% বিদেশি মালিকানায় MISA বিনিয়োগকারী লাইসেন্স, কর নিবন্ধন এবং কর্পোরেট ব্যাংক অ্যাকাউন্ট খোলা।',
    href: '/services/business-setup',
    heroTag: 'Saudi Vision 2030 Fast-Track',
    heroTagAr: 'مسار سريع لرؤية السعودية 2030',
    heroTagBn: 'সৌদি ভিশন ২০৩০ ফাস্ট-ট্র্যাক',
    heroHeadline: 'Launch Your Business in Saudi Arabia with 100% Foreign Ownership',
    heroHeadlineAr: 'أطلق عملك في السعودية بملكية أجنبية 100%',
    heroHeadlineBn: '১০০% বিদেশি মালিকানায় সৌদি আরবে আপনার ব্যবসা শুরু করুন',
    overview: 'Saudi Arabia offers immense commercial growth under Vision 2030. FAIZA AL MARWA provides end-to-end corporate establishment services for international entrepreneurs, GCC nationals, and local investors — handling all regulatory licensing from MISA through the Ministry of Commerce to tax and banking.',
    overviewAr: 'تفتح السعودية فرصًا تجارية ضخمة للنمو تحت مظلة رؤية 2030. توفر FAIZA AL MARWA خدمات تأسيس شركات شاملة لرواد الأعمال الدوليين ومواطني دول مجلس التعاون والمستثمرين المحليين — مع الإشراف على جميع التراخيص التنظيمية من هيئة الاستثمار (MISA) ووزارة التجارة وحتى الضرائب والخدمات المصرفية.',
    overviewBn: 'সৌদি ভিশন ২০৩০-এর অধীনে সৌদি আরবে বিপুল বাণিজ্যিক প্রবৃদ্ধির সুযোগ রয়েছে। FAIZA AL MARWA আন্তর্জাতিক উদ্যোক্তা, GCC দেশের নাগরিক ও স্থানীয় বিনিয়োগকারীদের জন্য পূর্ণাঙ্গ কর্পোরেট প্রতিষ্ঠা সেবা প্রদান করে — MISA থেকে বাণিজ্য মন্ত্রণালয়, কর ও ব্যাংকিং পর্যন্ত সব নিয়ামক লাইসেন্সিং পরিচালনা করে।',
    deliverables: [
      { title: '100% Foreign Ownership MISA License', titleAr: 'رخصة MISA بملكية أجنبية 100%', titleBn: '১০০% বিদেশি মালিকানার MISA লাইসেন্স', desc: 'Secure your Ministry of Investment (MISA) license without requiring a local Saudi partner.', descAr: 'احصل على رخصة هيئة الاستثمار (MISA) دون الحاجة إلى شريك سعودي محلي.', descBn: 'স্থানীয় সৌদি অংশীদার ছাড়াই আপনার বিনিয়োগ কর্তৃপক্ষ (MISA) লাইসেন্স নিশ্চিত করুন।', iconName: 'ShieldCheck' },
      { title: 'Commercial Registration (CR)', titleAr: 'التسجيل التجاري (CR)', titleBn: 'বাণিজ্যিক নিবন্ধন (CR)', desc: 'Issuance of official Commercial Registration from the Ministry of Commerce with approved business activities.', descAr: 'إصدار السجل التجاري الرسمي من وزارة التجارة مع اعتماد الأنشطة التجارية.', descBn: 'অনুমোদিত ব্যবসায়িক কার্যক্রমসহ বাণিজ্য মন্ত্রণালয় থেকে সরকারি বাণিজ্যিক নিবন্ধন ইস্যু।', iconName: 'FileText' },
      { title: 'Chamber of Commerce & Municipal Licensing', titleAr: 'غرفة التجارة والتراخيص البلدية', titleBn: 'চেম্বার অব কমার্স ও পৌর লাইসেন্স', desc: 'Electronic Chamber membership and Balady municipal municipality business permits.', descAr: 'العضوية الإلكترونية في الغرفة وأذونات الأعمال البلدية عبر منصة بلدي.', descBn: 'ইলেকট্রনিক চেম্বার সদস্যপদ এবং বালদি পৌর ব্যবসা অনুমতিপত্র।', iconName: 'Building' },
      { title: 'ZATCA & GOSI Tax Registration', titleAr: 'التسجيل الضريبي لدى ZATCA وGOSI', titleBn: 'ZATCA ও GOSI কর নিবন্ধন', desc: 'Full setup for Corporate Income Tax, VAT compliance, and Social Insurance (GOSI) accounts.', descAr: 'إعداد كامل لضريبة دخل الشركات، والامتثال لضريبة القيمة المضافة، وحسابات التأمينات الاجتماعية (GOSI).', descBn: 'কর্পোরেট আয়কর, VAT সম্মতি এবং সামাজিক বীমা (GOSI) অ্যাকাউন্টের পূর্ণাঙ্গ সেটআপ।', iconName: 'Receipt' },
      { title: 'Corporate Bank Account Opening', titleAr: 'فتح حساب بنكي للشركات', titleBn: 'কর্পোরেট ব্যাংক অ্যাকাউন্ট খোলা', desc: 'Assistance with top Saudi commercial banks (Al Rajhi, SNB, Riyad Bank, SABB).', descAr: 'المساعدة في أفضل البنوك التجارية السعودية (الراجحي، الأهلي، الرياض، سابب).', descBn: 'শীর্ষ সৌদি বাণিজ্যিক ব্যাংকে (Al Rajhi, SNB, Riyad Bank, SABB) সহায়তা।', iconName: 'Landmark' },
      { title: 'Government Relations (PRO / Muqeem)', titleAr: 'العلاقات الحكومية (PRO / Muqeem)', titleBn: 'সরকারি সম্পর্ক (PRO / Muqeem)', desc: 'Ongoing corporate PRO, Qiwa platform management, and labor quota allocations.', descAr: 'متابعة شؤون PRO للشركات، وإدارة منصة قوى، وتخصيصات حصص العمالة.', descBn: 'চলমান কর্পোরেট PRO, Qiwa প্ল্যাটফর্ম ব্যবস্থাপনা এবং শ্রম কোটা বরাদ্দ।', iconName: 'Users' },
    ],
    steps: [
      { step: '01', title: 'Consultation & Entity Structure', titleAr: 'الاستشارة والهيكلة القانونية', titleBn: 'পরামর্শ ও প্রতিষ্ঠান কাঠামো', desc: 'Determine the best corporate structure (LLC, Branch, Joint Venture) and capital requirements.', descAr: 'تحديد أفضل هيكل شركي (شركة ذات مسؤولية محدودة، فرع، مشروع مشترك) ومتطلبات رأس المال.', descBn: 'সেরা কর্পোরেট কাঠামো (LLC, শাখা, জয়েন্ট ভেঞ্চার) এবং মূলধনের প্রয়োজন নির্ধারণ করা।' },
      { step: '02', title: 'MISA Licensing & Name Reservation', titleAr: 'رخصة MISA وحجز الاسم التجاري', titleBn: 'MISA লাইসেন্সিং ও নাম সংরক্ষণ', desc: 'File application on the MISA portal and reserve commercial name with Ministry of Commerce.', descAr: 'تقديم الطلب عبر بوابة MISA وحجز الاسم التجاري لدى وزارة التجارة.', descBn: 'MISA পোর্টালে আবেদন জমা দিন এবং বাণিজ্য মন্ত্রণালয়ে বাণিজ্যিক নাম সংরক্ষণ করুন।' },
      { step: '03', title: 'Articles of Association & CR Issuance', titleAr: 'عقد التأسيس وإصدار السجل التجاري', titleBn: 'সংঘবিধি ও CR ইস্যু', desc: 'E-notarization of company bylaws and instant Commercial Registration issuance.', descAr: 'التوثيق الإلكتروني لنظام الشركة وإصدار السجل التجاري فورًا.', descBn: 'কোম্পানি বাইল-নামার ই-নোটারাইজেশন এবং তাৎক্ষণিক বাণিজ্যিক নিবন্ধন ইস্যু।' },
      { step: '04', title: 'Tax, Qiwa & Bank Account Setup', titleAr: 'الضرائب وقوى والحساب البنكي', titleBn: 'কর, Qiwa ও ব্যাংক অ্যাকাউন্ট সেটআপ', desc: 'Complete ZATCA tax files, GOSI, labor files, and activate corporate banking.', descAr: 'إكمال ملفات ZATCA الضريبية وGOSI وملفات العمالة وتفعيل الخدمات المصرفية للشركات.', descBn: 'ZATCA কর ফাইল, GOSI, শ্রম ফাইল সম্পন্ন করুন এবং কর্পোরেট ব্যাংকিং সক্রিয় করুন।' },
    ],
    faqs: [
      { q: 'Can a foreign national own 100% of a company in Saudi Arabia?', questionAr: 'هل يمكن لغير السعودي امتلاك 100% من شركة في السعودية؟', questionBn: 'কি একজন বিদেশি নাগরিক সৌদি আরবে কোম্পানির ১০০% মালিক হতে পারেন?', a: 'Yes. Under MISA regulations, foreign investors can own 100% of companies across services, contracting, trading, and industrial sectors.', answerAr: 'نعم. بموجب أنظمة MISA، يمكن للمستثمرين الأجانب امتلاك 100% من الشركات في قطاعات الخدمات والمقاولات والتجارة والصناعة.', answerBn: 'হ্যাঁ। MISA বিধিমালা অনুযায়ী, বিদেশি বিনিয়োগকারীরা সেবা, ঠিকাদারি, বাণিজ্য ও শিল্প খাতে কোম্পানির ১০০% মালিক হতে পারেন।' },
      { q: 'How long does the entire business setup take?', questionAr: 'كم تستغرق عملية تأسيس الشركة بالكامل؟', questionBn: 'সম্পূর্ণ ব্যবসা প্রতিষ্ঠায় কত সময় লাগে?', a: 'Standard LLC formation with CR issuance typically takes 3 to 7 working days once all attested documents are submitted.', answerAr: 'يستغرك تأسيس LLC القياسي وإصدار السجل التجاري عادة من 3 إلى 7 أيام عمل بعد تقديم جميع المستندات المصدقة.', answerBn: 'সব প্রমাণিত নথি জমা দেওয়ার পর সাধারণ LLC প্রতিষ্ঠা ও CR ইস্যুতে সাধারণত ৩ থেকে ৭ কর্মদিবস লাগে।' },
      { q: 'Do you assist with General Manager visas and Iqamas?', questionAr: 'هل تساعدون في تأشيرات وإقامات المدير العام؟', questionBn: 'আপনি কি জেনারেল ম্যানেজারের ভিসা ও ইকামায় সহায়তা করেন?', a: 'Yes, we process General Manager investor visas, resident Iqamas, and employee transfer files.', answerAr: 'نعم، نعالج تأشيرات المستثمرين للمدير العام والإقامات وملفات نقل الموظفين.', answerBn: 'হ্যাঁ, আমরা জেনারেল ম্যানেজার বিনিয়োগকারী ভিসা, বাসিন্দা ইকামা এবং কর্মী হস্তান্তর ফাইল প্রক্রিয়া করি।' },
    ],
    ctaText: 'Start Your Business Setup in KSA',
    ctaTextAr: 'ابدأ تأسيس شركتك في المملكة العربية السعودية',
    ctaTextBn: 'সৌদি আরবে আপনার ব্যবসা প্রতিষ্ঠা শুরু করুন',
  },
  'visa-immigration': {
    id: 'visa-immigration',
    title: 'Visa Processing & Corporate Immigration',
    titleAr: 'معالجة التأشيرات والهجرة المؤسسية',
    titleBn: 'ভিসা প্রসেসিং ও কর্পোরেট অভিবাসন',
    category: 'visa',
    categoryLabel: 'Visa & Immigration',
    categoryLabelAr: 'التأشيرات والهجرة',
    categoryLabelBn: 'ভিসা ও অভিবাসন',
    color: '#B8862F',
    iconName: 'FileCheck2',
    description: 'Corporate and personal visa handling, Iqama issuance & renewal, Qiwa portal sponsorship transfers, and Muqeem services.',
    descriptionAr: 'معالجة التأشيرات للشركات والأفراد، إصدار وتجديد الإقامات، نقل الكفالة عبر بوابة قوى، وخدمات مقيم.',
    descriptionBn: 'কর্পোরেট ও ব্যক্তিগত ভিসা পরিচালনা, ইকামা ইস্যু ও নবায়ন, Qiwa পোর্টালে পৃষ্ঠপোষকতা হস্তান্তর এবং Muqeem সেবা।',
    href: '/services/visa-immigration',
    heroTag: 'Govt. Portals Certified Support',
    heroTagAr: 'دعم معتمد لبوابات حكومية',
    heroTagBn: 'সরকারি পোর্টাল সার্টিফায়েড সাপোর্ট',
    heroHeadline: 'Fast, Compliant Visa & Iqama Services in Saudi Arabia',
    heroHeadlineAr: 'خدمات تأشيرات وإقامات سريعة ومتوافقة مع أنظمة السعودية',
    heroHeadlineBn: 'সৌদি আরবে দ্রুত ও বিধিবদ্ধ ভিসা ও ইকামা সেবা',
    overview: 'Navigating Saudi immigration regulations requires precision and up-to-the-minute regulatory knowledge. FAIZA AL MARWA coordinates directly with Qiwa, Absher, Muqeem, and Ministry of Foreign Affairs (MOFA) systems to ensure legal compliance and rapid approvals.',
    overviewAr: 'يتطلب الالتزام بأنظمة الهجرة في السعودية دقة ومعرفة تنظيمية محدثة. تنسيق FAIZA AL MARWA مباشرة مع أنظمة قوى وأبشر ومقيم ووزارة الخارجية (MOFA) لضمان الامتثال القانوني والموافقات السريعة.',
    overviewBn: 'সৌদি অভিবাসন বিধিমালা মেনে চলতে নিখুঁততা ও সর্বশেষ আইনি জ্ঞান প্রয়োজন। FAIZA AL MARWA সরাসরি Qiwa, Absher, Muqeem এবং পররাজ্য মন্ত্রণালয় (MOFA) সিস্টেমের সাথে সমন্বয় করে আইনগত সম্মতি ও দ্রুত অনুমোদন নিশ্চিত করে।',
    deliverables: [
      { title: 'Work & Employment Visas', titleAr: 'تأشيرات العمل والتوظيف', titleBn: 'কর্ম ও কর্মসংস্থান ভিসা', desc: 'Sourcing and stamping work visas through Saudi embassies and authorized visa centers worldwide.', descAr: 'الاستحواذ على تأشيرات العمل وختمها عبر السفارات السعودية ومراكز التأشيرات المعتمدة حول العالم.', descBn: 'বিশ্বব্যাপী সৌদি দূতাবাস ও অনুমোদিত ভিসা কেন্দ্রের মাধ্যমে কর্ম ভিসা সংগ্রহ ও সিলিং।', iconName: 'Briefcase' },
      { title: 'Iqama Issuance & Yearly Renewals', titleAr: 'إصدار الإقامة وتجديدها السنوي', titleBn: 'ইকামা ইস্যু ও বার্ষিক নবায়ন', desc: 'Prompt processing of medical reports, insurance approvals, and electronic Iqama cards.', descAr: 'المعالجة السريعة للتقارير الطبية والموافقات التأمينية وبطاقات الإقامة الإلكترونية.', descBn: 'চিকিৎসা রিপোর্ট, বীমা অনুমোদন এবং ইলেকট্রনিক ইকামা কার্ডের দ্রুত প্রক্রিয়াকরণ।', iconName: 'CreditCard' },
      { title: 'Qiwa Electronic Sponsorship Transfers', titleAr: 'نقل الكفالة الإلكتروني عبر قوى', titleBn: 'Qiwa ইলেকট্রনিক পৃষ্ঠপোষকতা হস্তান্তর', desc: 'Smooth employee transfers (Naqal Kafala) through the official Qiwa labor portal.', descAr: 'نقل الموظفين بسلاسة (نقل الكفالة) عبر بوابة قوى الرسمية للعمالة.', descBn: 'সরকারি Qiwa শ্রম পোর্টালের মাধ্যমে ঝামেলাহীন কর্মী হস্তান্তর (Naqal Kafala)।', iconName: 'ArrowRightLeft' },
      { title: 'Exit-Re-Entry & Final Exit Permits', titleAr: 'تصاريح العودة والخروج النهائي', titleBn: 'এক্সিট-রি-এন্ট্রি ও ফাইনাল এক্সিট পারমিট', desc: 'Single and multiple re-entry visa issuance for corporate staff and families.', descAr: 'إصدار تأشيرات العودة مرة واحدة ومرات عديدة لموظفين الشركات والعائلات.', descBn: 'কর্পোরেট কর্মী ও পরিবারের জন্য একক ও বহুবার পুনর্প্রবেশ ভিসা ইস্যু।', iconName: 'PlaneTakeoff' },
      { title: 'Business & Investor Visit Visas', titleAr: 'تأشيرات الزيارة للأعمال والمستثمرين', titleBn: 'ব্যবসায়িক ও বিনিয়োগকারী ভিজিট ভিসা', desc: 'Commercial visit invitations for international executives, consultants, and trade delegations.', descAr: 'دعوات الزيارات التجارية للمديرين التنفيذيين الدوليين والمستشارين والوفود التجارية.', descBn: 'আন্তররাষ্ট্রীয় এক্সেকিউটিভ, উপদেষ্টা ও বাণিজ্য প্রতিনিধিদলের জন্য বাণিজ্যিক ভিজিট আমন্ত্রণ।', iconName: 'UserCheck' },
      { title: 'Family Residence Visas & Istiqdam', titleAr: 'تأشيرات إقامة العائلة والاستقدام', titleBn: 'পারিবারিক রেসিডেন্সি ভিসা ও Istiqdam', desc: 'Permanent family residency permits and family visit visa processing.', descAr: 'تصاريح إقامة عائلية دائمة ومعالجة تأشيرات زيارات العائلة.', descBn: 'স্থায়ী পারিবারিক রেসিডেন্সি অনুমতিপত্র এবং পারিবারিক ভিজিট ভিসা প্রক্রিয়াকরণ।', iconName: 'HeartHandshake' },
    ],
    steps: [
      { step: '01', title: 'Document Audit', titleAr: 'مراجعة المستندات', titleBn: 'নথি পর্যালোচনা', desc: 'Review passports, medical clearance, and professional qualification attestations.', descAr: 'مراجعة جوازات السفر والتصاريح الطبية وشهادات اعتماد المؤهلات المهنية.', descBn: 'পাসপোর্ট, চিকিৎসা অনুমোদন এবং পেশাগত যোগ্যতার সনদ পর্যালোচনা করা।' },
      { step: '02', title: 'Portal Filing (Qiwa / MOFA)', titleAr: 'التقديم عبر المنصات (قوى / الخارجية)', titleBn: 'পোর্টাল ফাইলিং (Qiwa / MOFA)', desc: 'Submit visa quota requests or electronic contract authorizations.', descAr: 'تقديم طلبات حصص التأشيرات أو تفويضات العقود الإلكترونية.', descBn: 'ভিসা কোটা আবেদন বা ইলেকট্রনিক চুক্তি অনুমোদন জমা দিন।' },
      { step: '03', title: 'Embassy Stamping & Staging', titleAr: 'الختم في السفارات والتجهيز', titleBn: 'দূতাবাস সিলিং ও প্রস্তুতি', desc: 'Coordinate with international visa application centers for biometric stamping.', descAr: 'التنسيق مع مراكز طلبات التأشيرات الدولية لأداء الختم والبصمة.', descBn: 'বায়োমেট্রিক সিলিংয়ের জন্য আন্তররাষ্ট্রীয় ভিসা আবেদন কেন্দ্রের সাথে সমন্বয় করা।' },
      { step: '04', title: 'Iqama Delivery & Activation', titleAr: 'تسليم الإقامة وتفعيلها', titleBn: 'ইকামা ডেলিভারি ও সক্রিয়করণ', desc: 'Issue physical resident ID and digital Absher/Muqeem profile activation.', descAr: 'إصدار بطاقة الإقامة الفعلية وتفعيل الملف الرقمي عبر أبشر ومقيم.', descBn: 'বাস্তব রেসিডেন্ট আইডি ইস্যু এবং ডিজিটাল Absher/Muqeem প্রোফাইল সক্রিয়করণ।' },
    ],
    faqs: [
      { q: 'How can an employer transfer an employee through Qiwa?', questionAr: 'كيف يمكن لصاحب العمل نقل موظف عبر قوى؟', questionBn: 'একজন নিয়োগকর্তা Qiwa-র মাধ্যমে কীভাবে একজন কর্মী হস্তান্তর করতে পারেন?', a: 'We initiate the contract transfer request on Qiwa, ensure labor compliance, and finalize the transfer within Ministry timelines.', answerAr: 'نبدأ طلب نقل العقد عبر قوى، ونضمن الامتثال للعمالة، ونستكمل النقل ضمن المدد المحددة من الوزارة.', answerBn: 'আমরা Qiwa-তে চুক্তি হস্তান্তরের আবেদন শুরু করি, শ্রম সম্মতি নিশ্চিত করি এবং মন্ত্রণালয়ের সময়সীমার মধ্যে হস্তান্তর সম্পন্ন করি।' },
      { q: 'What is required for Iqama renewal?', questionAr: 'ما المتطلبات لتجديد الإقامة؟', questionBn: 'ইকামা নবায়নের জন্য কী প্রয়োজন?', a: 'Valid medical insurance, labor office fees clearance (Maktab Amal), and Jawazat renewal processing.', answerAr: 'تأمين طبي ساري، وسداد رسوم مكتب العمل، ومعالجة التجديد لدى الجوازات.', answerBn: 'বৈধ চিকিৎসা বীমা, শ্রম অফিস ফি পরিশোধ (Maktab Amal), এবং Jawazat নবায়ন প্রক্রিয়াকরণ।' },
    ],
    ctaText: 'Submit Visa & Iqama Request',
    ctaTextAr: 'قدّم طلب التأشيرة والإقامة',
    ctaTextBn: 'ভিসা ও ইকামা আবেদন জমা দিন',
  },
  'travel-tourism': {
    id: 'travel-tourism',
    title: 'Travel, Flight Bookings & Tourism',
    titleAr: 'السفر وحجز الطيران والسياحة',
    titleBn: 'ভ্রমণ, ফ্লাইট বুকিং ও পর্যটন',
    category: 'travel',
    categoryLabel: 'Travel & Tourism',
    categoryLabelAr: 'السفر والسياحة',
    categoryLabelBn: 'ভ্রমণ ও পর্যটন',
    color: '#2A6357',
    iconName: 'Plane',
    description: 'Global airline tickets, luxury and budget hotel reservations, corporate business travel circuits, and tailored vacations.',
    descriptionAr: 'تذاكر طيران عالمية، حجوزات فنادق فاخرة وبأسعار مناسبة، رحلات أعمال مؤسسية، وإجازات مصممة حسب الطلب.',
    descriptionBn: 'বৈশ্বিক এয়ারলাইন টিকিট, বিলাসবহুল ও সাশ্রয়ী হোটেল রিজার্ভেশন, কর্পোরেট ব্যবসায়িক ভ্রমণ, এবং প্রয়োজন অনুযায়ী ছুটির প্যাকেজ।',
    href: '/services/travel-tourism',
    heroTag: 'Worldwide Airline & Hotel Partnerships',
    heroTagAr: 'شراكات عالمية مع طيران وفنادق',
    heroTagBn: 'বিশ্বব্যাপী এয়ারলাইন ও হোটেল অংশীদারিত্ব',
    heroHeadline: 'Seamless Travel Experiences Designed for Business & Leisure',
    heroHeadlineAr: 'تجارب سفر متكاملة مصممة للأعمال والترفيه',
    heroHeadlineBn: 'ব্যবসা ও বিনোদনের জন্য ডিজাইন করা ঝামেলাহীন ভ্রমণ অভিজ্ঞতা',
    overview: 'From urgent corporate flights between Riyadh, Dubai, and international hubs to unforgettable family holidays in Türkiye and Egypt, FAIZA AL MARWA provides 24/7 dedicated booking support, preferential airline fares, and handpicked hotels.',
    overviewAr: 'من الرحلات المؤسسية العاجلة بين الرياض ودبي والمدن العالمية إلى إجازات عائلية لا تُنسى في تركيا ومصر، توفر FAIZA AL MARWA دعم حجز مخصصًا على مدار الساعة، وأسعار طيران تفضيلية، وفنادق مختارة بعناية.',
    overviewBn: 'রিয়াদ, দুবাই ও আন্তররাষ্ট্রীয় হাবের মধ্যে জরুরি কর্পোরেট ফ্লাইট থেকে তুরস্ক ও মিশরে অবিস্মরণীয় পারিবারিক ছুটি — FAIZA AL MARWA ২৪/৭ বিশেষায়িত বুকিং সাপোর্ট, অগ্রাধিকারমূলক এয়ারলাইন ভাড়া এবং বাছাই করা হোটেল প্রদান করে।',
    deliverables: [
      { title: 'Domestic & International Airline Bookings', titleAr: 'حجوزات طيران محلية ودولية', titleBn: 'দেশীয় ও আন্তররাষ্ট্রীয় এয়ারলাইন বুকিং', desc: 'Direct corporate ticketing on Saudia, Flynas, Emirates, Qatar Airways, Turkish Airlines, and global carriers.', descAr: 'تذاكر مباشرة للشركات عبر السعودية وطيران ناس والطيران الإماراتي وقطر Airways والخطوط التركية وناقلات عالمية.', descBn: 'Saudia, Flynas, Emirates, Qatar Airways, Turkish Airlines এবং বৈশ্বিক এয়ারলাইনেসে সরাসরি কর্পোরেট টিকেটিং।', iconName: 'Plane' },
      { title: 'Curated Hotel Reservations', titleAr: 'حجوزات فندقية مختارة', titleBn: 'নির্বাচিত হোটেল রিজার্ভেশন', desc: 'Exclusive rates at 4-star and 5-star hotels worldwide with flexible cancellation options.', descAr: 'أسعار حصرية في فنادق 4 و5 نجوم حول العالم مع خيارات إلغاء مرنة.', descBn: 'বিশ্বব্যাপী ৪-স্টার ও ৫-স্টার হোটেলে একচেটিয়া মূল্য এবং নমনীয় বাতিলের সুবিধা।', iconName: 'Hotel' },
      { title: 'Corporate Group Travel Management', titleAr: 'إدارة سفر المجموعات المؤسسية', titleBn: 'কর্পোরেট গ্রুপ ট্রাভেল ব্যবস্থাপনা', desc: 'Dedicated travel logistics for business conferences, trade missions, and staff relocations.', descAr: 'لوجستيات سفر مخصصة لمؤتمرات الأعمال والبعثات التجارية ونقل الموظفين.', descBn: 'ব্যবসায়িক সম্মেলন, বাণিজ্য মিশন ও কর্মী স্থানান্তরের জন্য বিশেষায়িত ভ্রমণ লজিস্টিকস।', iconName: 'Users2' },
      { title: 'Custom Holiday Packages', titleAr: 'باقات إجازات مخصصة', titleBn: 'কাস্টম হলিডে প্যাকেজ', desc: 'All-inclusive family getaways, honeymoon escapes, and cultural tours.', descAr: 'إقامات عائلية شاملة كل شيء، ورحلات شهر العسل، وجولات ثقافية.', descBn: 'সম্পূর্ণ পারিবারিক অবকাশ, হানিমুন ট্রিপ এবং সাংস্কৃতিক সফর।', iconName: 'Palmtree' },
      { title: 'VIP Airport Meet & Assist', titleAr: 'استقبال ومساعدة VIP في المطارات', titleBn: 'ভিআইপি এয়ারপোর্ট মিট ও অ্যাসিস্ট', desc: 'Fast-track immigration, private lounge access, and chauffeured airport transfers.', descAr: 'مرور سريع للجوازات، وصول إلى صالات خاصة، وتنقلات مطار بسائق خاص.', descBn: 'ফাস্ট-ট্র্যাক অভিবাসন, ব্যক্তিগত লাউঞ্জ প্রবেশাধিকার এবং চালকসহ এয়ারপোর্ট ট্রান্সফার।', iconName: 'Car' },
      { title: '24/7 Flight Rebooking Support', titleAr: 'دعم إعادة حجز الطيران 24/7', titleBn: '২৪/৭ ফ্লাইট রিবুকিং সাপোর্ট', desc: 'Immediate change of dates, ticket re-issuance, and emergency travel coordination on WhatsApp.', descAr: 'تغيير فوري للتواريخ وإعادة إصدار التذاكر وتنسيق السفر الطارئ عبر WhatsApp.', descBn: 'তাৎক্ষণিক তারিখ পরিবর্তন, টিকিট পুনঃইস্যু এবং WhatsApp-এ জরুরি ভ্রমণ সমন্বয়।', iconName: 'Headphones' },
    ],
    steps: [
      { step: '01', title: 'Share Travel Itinerary', titleAr: 'شارك برنامج السفر', titleBn: 'ভ্রমণ সূচি শেয়ার করুন', desc: 'Specify your travel dates, cabin class, hotel preferences, and headcount.', descAr: 'حدد تواريخ السفر ودرجة المقعد وتفضيلات الفندق وعدد الأشخاص.', descBn: 'আপনার ভ্রমণের তারিখ, কেবিন ক্লাস, হোটেল পছন্দ এবং মানুষের সংখ্যা উল্লেখ করুন।' },
      { step: '02', title: 'Receive Optimized Quotes', titleAr: 'احصل على عروض أسعار محسنة', titleBn: 'অপ্টিমাইজড কোট পান', desc: 'Our travel desk compares live global inventories to deliver best routes and pricing.', descAr: 'يقارن مكتب السفر لدينا المخزون العالمي المباشر لتقديم أفضل المسارات والأسعار.', descBn: 'আমাদের ট্রাভেল ডেস্ক সেরা রুট ও মূল্য দিতে বৈশ্বিক লাইভ ইনভেন্টরি তুলনা করে।' },
      { step: '03', title: 'Instant Confirmation & E-Tickets', titleAr: 'تأكيد فوري وتذاكر إلكترونية', titleBn: 'তাৎক্ষণিক নিশ্চিতকরণ ও ই-টিকিট', desc: 'Receive instant boarding vouchers, hotel confirmations, and transport details.', descAr: 'استلام قسائم الصعود وتأكيدات الفندق وتفاصيل النقل فورًا.', descBn: 'তাৎক্ষণিক বোর্ডিং ভাউচার, হোটেল নিশ্চিতকরণ এবং পরিবহণের বিবরণ পান।' },
    ],
    faqs: [
      { q: 'Can you handle group bookings for corporate teams?', questionAr: 'هل يمكنكم التعامل مع حجوزات المجموعات لفرق الشركات؟', questionBn: 'আপনি কি কর্পোরেট টিমের জন্য গ্রুপ বুকিং পরিচালনা করেন?', a: 'Yes, we manage group bookings of any size with consolidated billing and dedicated travel managers.', answerAr: 'نعم، ندير حجوزات المجموعات بأي حجم مع فواتير موحدة ومديري سفر مخصصين.', answerBn: 'হ্যাঁ, আমরা সমেক্ষিত বিলিং ও বিশেষায়িত ট্রাভেল ম্যানেজারসহ যেকোনো আকারের গ্রুপ বুকিং পরিচালনা করি।' },
      { q: 'Do you offer emergency ticket rescheduling?', questionAr: 'هل تقدمون إعادة جدولة عاجلة للتذاكر؟', questionBn: 'আপনি কি জরুরি টিকিট পুনর্নির্ধারণ অফার করেন?', a: 'Our travel desk operates 24/7 via WhatsApp to handle urgent flight modifications.', answerAr: 'يعمل مكتب السفر لدينا عبر WhatsApp على مدار الساعة لمعالجة تعديلات الرحلات العاجلة.', answerBn: 'জরুরি ফ্লাইট পরিবর্তন সামলাতে আমাদের ট্রাভেল ডেস্ক WhatsApp-এর মাধ্যমে ২৪/৭ চলে।' },
    ],
    ctaText: 'Book Your Flights & Hotels',
    ctaTextAr: 'احجز رحلاتك وفنادقك',
    ctaTextBn: 'আপনার ফ্লাইট ও হোটেল বুক করুন',
  },
  'manpower': {
    id: 'manpower',
    title: 'Corporate Manpower Supply & Recruitment',
    titleAr: 'توريد العمالة وتوظيفها للشركات',
    titleBn: 'কর্পোরেট ম্যানপাওয়ার সরবরাহ ও নিয়োগ',
    category: 'manpower',
    categoryLabel: 'Manpower Solutions',
    categoryLabelAr: 'حلول توريد العمالة',
    categoryLabelBn: 'ম্যানপাওয়ার সমাধান',
    color: '#A23B2E',
    iconName: 'Users2',
    description: 'Sourcing, technical trade testing, medical verification, and mobilizing qualified workforce across civil, technical, and hospitality sectors.',
    descriptionAr: 'الاستقطاب والاختبارات الفنية والتحقق الطبي وتوظيف القوى المؤهلة في القطاعات المدنية والفنية والضيافة.',
    descriptionBn: 'সংগ্রহ, কারিগরি ট্রেড টেস্ট, চিকিৎসা যাচাই এবং অবকাঠামো, কারিগরি ও আতিথেয়তা খাতে যোগ্য শ্রমশক্তি নিয়োজন।',
    href: '/services/manpower',
    heroTag: 'Saudi Labor Law Compliant',
    heroTagAr: 'متوافق مع نظام العمل السعودي',
    heroTagBn: 'সৌদি শ্রম আইন সম্মত',
    heroHeadline: 'Mobilize Skilled & Semi-Skilled Workforce for Your Projects',
    heroHeadlineAr: 'جدول قوى عاملة مؤهلة وشبه مؤهلة لمشاريعك',
    heroHeadlineBn: 'আপনার প্রকল্পের জন্য দক্ষ ও অর্ধ-দক্ষ শ্রমশক্তি নিয়োজিত করুন',
    overview: 'Major construction, engineering, and service projects in Saudi Arabia require reliable, tested, and pre-screened labor. FAIZA AL MARWA provides rapid manpower recruitment and mobilization across 10+ core trade verticals with total legal compliance.',
    overviewAr: 'تتطلب مشاريع البناء والهندسة والخدمات الكبرى في السعودية عمالة موثوقة ومختبرة ومهنية مسبقًا. توفر FAIZA AL MARWA توظيفًا سريعًا وجدولة عمالة عبر أكثر من 10 تخصصات فنية رئيسية مع امتثال قانوني كامل.',
    overviewBn: 'সৌদি আরবের বড় নির্মাণ, প্রকৌশল ও সেবা প্রকল্পের জন্য নির্ভরযোগ্য, পরীক্ষিত ও পূর্ব-স্ক্রিন করা শ্রম প্রয়োজন। FAIZA AL MARWA ১০+ প্রধান ট্রেড বিভাগজুড়ে দ্রুত ম্যানপাওয়ার নিয়োগ ও নিয়োজন প্রদান করে, সম্পূর্ণ আইনগত সম্মতিসহ।',
    deliverables: [
      { title: 'Civil & Construction Trades', titleAr: 'الحرف المدنية والإنشائية', titleBn: 'সিভিল ও নির্মাণ ট্রেড', desc: 'Masons, steel fixers, carpenters, scaffolders, and heavy equipment operators.', descAr: 'بناؤون وحدادو حديد ونجارون وعاملو سقالات ومشغلو معدات ثقيلة.', descBn: 'রাজমিস্ত্রি, স্টিল ফিক্সার, কাঠমিস্ত্রি, স্ক্যাফোল্ডার এবং ভারী যন্ত্রপাতি চালক।', iconName: 'HardHat' },
      { title: 'Electrical & Power Systems', titleAr: 'الكهرباء وأنظمة الطاقة', titleBn: 'বৈদ্যুতিক ও শক্তি সিস্টেম', desc: 'Industrial electricians, panel board wiremen, low-current & telecom technicians.', descAr: 'كهربائيون صناعيون وعاملو لوحات التوزيع وفنيو التيار المنخفض والاتصالات.', descBn: 'শিল্প ইলেকট্রিশিয়ান, প্যানেল বোর্ড ওয়্যারম্যান, লো-কারেন্ট ও টেলিকম কারিগর।', iconName: 'Zap' },
      { title: 'Mechanical, Plumbing & HVAC', titleAr: 'الميكانيكا والسباكة والتكييف', titleBn: 'মেকানিক্যাল, প্লাম্বিং ও HVAC', desc: 'HVAC technicians, certified pipe fitters, duct men, and industrial mechanics.', descAr: 'فنيو تكييف ومعتمدون لتركيب الأنابيب وعمال ترع وميكانيكيون صناعيون.', descBn: 'HVAC কারিগর, সনদপ্রাপ্ত পাইপ ফিটার, ডাক্ট কর্মী এবং শিল্প মেকানিক।', iconName: 'Wrench' },
      { title: 'Hospitality & Catering Staff', titleAr: 'عمالة الضيافة والإطعام', titleBn: 'আতিথেয়তা ও ক্যাটারিং কর্মী', desc: 'Hotel housekeepers, commercial kitchen chefs, waitstaff, and baristas.', descAr: 'عاملو نظافة الفنادق وطهاة المطابخ التجارية ونادلات وباريستا.', descBn: 'হোটেল হাউসকিপার, বাণিজ্যিক রান্নাঘরের রাঁধুনি, ওয়েটস্টাফ এবং বারিস্টা।', iconName: 'Utensils' },
      { title: 'Facility Cleaning & Janitorial', titleAr: 'التنظيف وخدمات المرافق', titleBn: 'সুবিধা পরিচ্ছন্নতা ও জানিটরিয়াল', desc: 'Commercial building cleaners, mall maintenance crews, and industrial cleaners.', descAr: 'عمال نظافة المباني التجارية وفرق صيانة المولات وعمال التنظيف الصناعي.', descBn: 'বাণিজ্যিক ভবন পরিষ্কারক, মল রক্ষণাবেক্ষণ দল এবং শিল্প পরিষ্কারক।', iconName: 'Sparkles' },
      { title: 'Drivers & Fleet Operators', titleAr: 'السائقون ومشغلو الأساطيل', titleBn: 'চালক ও ফ্লিট পরিচালক', desc: 'Heavy trailer drivers, bus drivers, and executive chauffeur drivers.', descAr: 'سائقو الشاحنات الثقيلة والحافلات وسائقو السيارات التنفيذية.', descBn: 'ভারী ট্রেইলার চালক, বাস চালক এবং এক্সেকিউটিভ চালক।', iconName: 'Truck' },
    ],
    steps: [
      { step: '01', title: 'Headcount Requisition', titleAr: 'طلب عدد العمالة', titleBn: 'হেডকাউন্ট রিকোয়িজিশন', desc: 'Specify job roles, required trade certifications, quantities, and site location.', descAr: 'حدد المسميات الوظيفية والشهادات المطلوبة والكميات وموقع الموقع.', descBn: 'চাকরির ভূমিকা, প্রয়োজনীয় ট্রেড সনদ, পরিমাণ এবং সাইটের অবস্থান উল্লেখ করুন।' },
      { step: '02', title: 'Candidate Screening & Trade Testing', titleAr: 'فرز المرشحين واختبار الحرف', titleBn: 'প্রার্থী স্ক্রিনিং ও ট্রেড টেস্টিং', desc: 'Practical trade testing in certified technical institutes with video verification.', descAr: 'اختبارات عملية في معاهد فنية معتمدة مع التحقق بالفيديو.', descBn: 'ভিডিও যাচাইসহ সনদপ্রাপ্ত কারিগরি প্রতিষ্ঠানে ব্যবহারিক ট্রেড টেস্ট।' },
      { step: '03', title: 'Visa Stamping & Medical Clearance', titleAr: 'ختم التأشيرات والتصاريح الطبية', titleBn: 'ভিসা সিলিং ও চিকিৎসা অনুমোদন', desc: 'Complete GAMCA medical check, visa endorsement, and airline bookings.', descAr: 'إكمال الفحص الطبي GAMCA واعتماد التأشيرات وحجوزات الطيران.', descBn: 'GAMCA চিকিৎসা পরীক্ষা, ভিসা এনডোর্সমেন্ট এবং এয়ারলাইন বুকিং সম্পন্ন করুন।' },
      { step: '04', title: 'Site Deployment & Onboarding', titleAr: 'النشر في الموقع وإعداد العمال', titleBn: 'সাইট ডিপ্লয়মেন্ট ও অনবোর্ডিং', desc: 'Worker mobilization to your project site in Saudi Arabia with full documentation.', descAr: 'جدولة العمال إلى موقع مشروعك في السعودية مع كامل المستندات.', descBn: 'পূর্ণ ডকুমেন্টেশনসহ সৌদি আরবে আপনার প্রকল্প সাইটে কর্মী নিয়োজন।' },
    ],
    faqs: [
      { q: 'What is the mobilization timeline for manpower recruitment?', questionAr: 'ما المدة الزمنية لجدولة العمالة؟', questionBn: 'ম্যানপাওয়ার নিয়োগের নিয়োজন সময়সীমা কত?', a: 'Standard mobilization ranges from 15 to 35 days depending on visa availability and trade test scheduling.', answerAr: 'تتراوح الجدولة المعتادة من 15 إلى 35 يومًا حسب توفر التأشيرات وجدولة اختبار المهارات.', answerBn: 'ভিসার প্রাপ্যতা ও ট্রেড টেস্টের সময়সূচির ওপর নির্ভর করে সাধারণ নিয়োজন ১৫ থেকে ৩৫ দিনের মধ্যে হয়।' },
      { q: 'Do candidates undergo technical trade tests before arrival?', questionAr: 'هل يخضع المرشحون لاختبارات فنية قبل الوصول؟', questionBn: 'আগমনের আগে কি প্রার্থীদের কারিগরি ট্রেড টেস্ট দিতে হয়?', a: 'Yes, 100% of technical trades undergo physical practical exams in certified workshops.', answerAr: 'نعم، 100% من الحرف الفنية تخضع لامتحانات عملية في ورش معتمدة.', answerBn: 'হ্যাঁ, ১০০% কারিগরি ট্রেডে সনদপ্রাপ্ত ওয়ার্কশপে ব্যবহারিক পরীক্ষা দিতে হয়।' },
    ],
    ctaText: 'Request Manpower Requisition',
    ctaTextAr: 'اطلب توريد العمالة',
    ctaTextBn: 'ম্যানপাওয়ার রিকোয়িজিশনের অনুরোধ করুন',
  },
  'digital': {
    id: 'digital',
    title: 'Digital Agency, Web & Tech Solutions',
    titleAr: 'الوكالة الرقمية وحلول الويب والتقنية',
    titleBn: 'ডিজিটাল এজেন্সি, ওয়েব ও টেক সমাধান',
    category: 'digital',
    categoryLabel: 'Digital Agency',
    categoryLabelAr: 'الوكالة الرقمية',
    categoryLabelBn: 'ডিজিটাল এজেন্সি',
    color: '#1C4F45',
    iconName: 'MonitorSmartphone',
    description: 'High-converting Next.js web development, local Saudi SEO, Google Ads management, corporate branding, and CRM automation.',
    descriptionAr: 'تطوير مواقع Next.js عالية التحويل، وتحسين محركات البحث محليًا في السعودية، وإدارة إعلانات Google، والهوية المؤسسية، وأتمتة CRM.',
    descriptionBn: 'উচ্চ রূপান্তরকারী Next.js ওয়েব ডেভেলপমেন্ট, স্থানীয় সৌদি SEO, Google Ads ব্যবস্থাপনা, কর্পোরেট ব্র্যান্ডিং এবং CRM অটোমেশন।',
    href: '/services/digital',
    heroTag: 'High-Performance Engineering',
    heroTagAr: 'هندسة عالية الأداء',
    heroTagBn: 'উচ্চ-পারফরম্যান্স প্রকৌশল',
    heroHeadline: 'Accelerate Your Business Growth with Modern Digital Solutions',
    heroHeadlineAr: 'عجل نمو أعمالك مع حلول رقمية حديثة',
    heroHeadlineBn: 'আধুনিক ডিজিটাল সমাধানে আপনার ব্যবসার প্রবৃদ্ধি ত্বরান্তিত করুন',
    overview: 'A powerful online presence is critical for commanding market leadership in the GCC. FAIZA AL MARWA\u2019s digital team designs blazing fast web applications, manages high-ROI performance advertising, and automates business operations.',
    overviewAr: 'الحضور القوي عبر الإنترنت أمر حاسم لريادة السوق في دول الخليج. يصمم فريق FAIZA AL MARWA الرقمي تطبيقات ويب فائقة السرعة، ويدير إعلانات الأداء عالية العائد، وأتمتة عمليات الأعمال.',
    overviewBn: 'GCC-এ বাজার নেতৃত্বের জন্য শক্তিশালী অনলাইন উপস্থিতি অপরিহার্য। FAIZA AL MARWA-র ডিজিটাল দল অতি দ্রুত ওয়েব অ্যাপ্লিকেশন ডিজাইন করে, উচ্চ-ROI পারফরম্যান্স বিজ্ঞাপন পরিচালনা করে এবং ব্যবসায়িক কার্যক্রম স্বয়ংক্রিয় করে।',
    deliverables: [
      { title: 'Next.js & React Web Applications', titleAr: 'تطبيقات ويب Next.js وReact', titleBn: 'Next.js ও React ওয়েব অ্যাপ্লিকেশন', desc: 'Modern, mobile-responsive, lightning-fast web platforms built with TypeScript and Tailwind.', descAr: 'منصات ويب حديثة متجاوبة مع الجوال وفائقة السرعة مبنية بـ TypeScript وTailwind.', descBn: 'TypeScript ও Tailwind দিয়ে নির্মিত আধুনিক, মোবাইল-রেসপনসিভ, অতি দ্রুত ওয়েব প্ল্যাটফর্ম।', iconName: 'Code2' },
      { title: 'Local Saudi & GCC SEO', titleAr: 'تحسين محركات البحث محليًا في السعودية والخليج', titleBn: 'স্থানীয় সৌদি ও GCC SEO', desc: 'Dominating top Google search positions for high-intent Arabic and English commercial keywords.', descAr: 'الهيمنة على أعلى نتائج Google للكلمات التجارية العربية والإنجليزية عالية النية.', descBn: 'উচ্চ-উদ্দেশ্যের আরবি ও ইংরেজি বাণিজ্যিক কীওয়ার্ডে Google অনুসন্ধানে শীর্ষ অবস্থান দখল।', iconName: 'Search' },
      { title: 'Performance Google & Social Ads', titleAr: 'إعلانات Google ووسائل التواصل بالأداء', titleBn: 'পারফরম্যান্স Google ও সোশ্যাল অ্যাড', desc: 'Data-driven paid search, display, and TikTok/Instagram ad campaigns that drive real sales.', descAr: 'حملات بحث مدفوعة وعروض وإعلانات TikTok/Instagram مدفوعة بالبيانات تحقق مبيعات حقيقية.', descBn: 'প্রকৃত বিক্রি তৈরিকারী ডেটা-চালিত পেইড সার্চ, ডিসপ্লে এবং TikTok/Instagram বিজ্ঞাপন ক্যাম্পেইন।', iconName: 'Flame' },
      { title: 'E-Commerce with Saudi Payments', titleAr: 'التجارة الإلكترونية مع وسائل الدفع السعودية', titleBn: 'সৌদি পেমেন্টসহ ই-কমার্স', desc: 'Online stores integrated with Mada, Apple Pay, Tabby, Tamara, and Visa payment gateways.', descAr: 'متاجر إلكترونية متكاملة مع بوابات الدفع Mada وApple Pay وTabby وTamara وVisa.', descBn: 'Mada, Apple Pay, Tabby, Tamara ও Visa পেমেন্ট গেটওয়েসহ অনলাইন স্টোর।', iconName: 'ShoppingCart' },
      { title: 'Corporate Identity & Branding', titleAr: 'الهوية المؤسسية والعلامة التجارية', titleBn: 'কর্পোরেট আইডেন্টিটি ও ব্র্যান্ডিং', desc: 'Bilingual logo design, typography, brand guidelines, and corporate marketing materials.', descAr: 'تصميم شعار ثنائي اللغة والطباعة وإرشادات العلامة ومواد التسويق المؤسسية.', descBn: 'দ্বিভাষিক লোগো ডিজাইন, টাইপোগ্রাফি, ব্র্যান্ড গাইডলাইন এবং কর্পোরেট মার্কেটিং উপকরণ।', iconName: 'Palette' },
      { title: 'WhatsApp & Business CRM Automation', titleAr: 'أتمتة WhatsApp وأنظمة CRM', titleBn: 'WhatsApp ও বিজনেস CRM অটোমেশন', desc: 'Automated customer messaging, lead capture bots, and ERP integration.', descAr: 'رسائل عملاء آلية وروبوتات لالتقاط العملاء وتكامل ERP.', descBn: 'স্বয়ংক্রিয় কাস্টমার মেসেজিং, লিড ক্যাপচার বট এবং ERP ইন্টিগ্রেশন।', iconName: 'Cpu' },
    ],
    steps: [
      { step: '01', title: 'Discovery & Strategy', titleAr: 'الاكتشاف والاستراتيجية', titleBn: 'ডিসকভারি ও কৌশল', desc: 'Analyze your market, competitors, and growth objectives.', descAr: 'تحليل السوق والمنافسين وأهداف النمو.', descBn: 'আপনার বাজার, প্রতিযোগী এবং প্রবৃদ্ধির লক্ষ্য বিশ্লেষণ করা।' },
      { step: '02', title: 'UI/UX Design & Prototyping', titleAr: 'تصميم UI/UX والنماذج الأولية', titleBn: 'UI/UX ডিজাইন ও প্রোটোটাইপিং', desc: 'Craft modern, high-converting bilingual interface designs.', descAr: 'تصميم واجهات حديثة ثنائية اللغة عالية التحويل.', descBn: 'আধুনিক, উচ্চ রূপান্তরকারী দ্বিভাষিক ইন্টারফেস ডিজাইন তৈরি।' },
      { step: '03', title: 'Full-Stack Development', titleAr: 'تطوير متكامل', titleBn: 'ফুল-স্ট্যাক ডেভেলপমেন্ট', desc: 'Build, optimize, and test with clean architecture and maximum page speed.', descAr: 'البناء والتحسين والاختبار ببنية نظيفة وأقصى سرعة للصفحات.', descBn: 'পরিচ্ছন্ন স্থাপত্য ও সর্বোচ্চ পেজ স্পিডসহ নির্মাণ, অপ্টিমাইজেশন ও পরীক্ষা।' },
      { step: '04', title: 'Launch & ROI Marketing', titleAr: 'الإطلاق وتسويق العائد', titleBn: 'লঞ্চ ও ROI মার্কেটিং', desc: 'Deploy on high-speed infrastructure and scale customer acquisition.', descAr: 'النشر على بنية تحتية عالية السرعة وتوسيع اكتساب العملاء.', descBn: 'উচ্চ-গতির অবকাঠামোতে ডিপ্লয় এবং কাস্টমার অধিগ্রহণ বৃদ্ধি।' },
    ],
    faqs: [
      { q: 'What technologies do you use for website development?', questionAr: 'ما التقنيات التي تستخدمونها لتطوير المواقع؟', questionBn: 'ওয়েবসাইট ডেভেলপমেন্টে আপনি কোন প্রযুক্তি ব্যবহার করেন?', a: 'We specialize in Next.js, React, TypeScript, Tailwind CSS, and Node.js for maximum speed, security, and SEO ranking.', answerAr: 'نتخصص في Next.js وReact وTypeScript وTailwind CSS وNode.js لأقصى سرعة وأمان وترتيب في محركات البحث.', answerBn: 'সর্বোচ্চ গতি, নিরাপত্তা ও SEO র‍্যাঙ্কিংয়ের জন্য আমরা Next.js, React, TypeScript, Tailwind CSS ও Node.js-এ বিশেষায়িত।' },
      { q: 'Do you provide bilingual Arabic and English websites?', questionAr: 'هل تقدمون مواقعًا ثنائية اللغة بالعربية والإنجليزية؟', questionBn: 'আপনি কি আরবি ও ইংরেজি দ্বিভাষিক ওয়েবসাইট প্রদান করেন?', a: 'Yes, every digital product we build includes native Arabic RTL and English support.', answerAr: 'نعم، كل منتج رقمي نبنيه يدعم العربية (من اليمين لليسار) والإنجليزية.', answerBn: 'হ্যাঁ, আমাদের প্রতিটি ডিজিটাল প্রোডাক্টে স্বাভাবিক আরবি RTL ও ইংরেজি সাপোর্ট থাকে।' },
    ],
    ctaText: 'Start Your Digital Project',
    ctaTextAr: 'ابدأ مشروعك الرقمي',
    ctaTextBn: 'আপনার ডিজিটাল প্রকল্প শুরু করুন',
  },
  'real-estate': {
    id: 'real-estate',
    title: 'Real Estate & Property Solutions in Saudi Arabia',
    titleAr: 'حلول العقار والعقارات في السعودية',
    titleBn: 'সৌদি আরবের রিয়েল এস্টেট ও সম্পত্তি সমাধান',
    category: 'real-estate',
    categoryLabel: 'Real Estate',
    categoryLabelAr: 'العقارات',
    categoryLabelBn: 'রিয়েল এস্টেট',
    color: '#003078',
    iconName: 'Home',
    description: 'Commercial and residential property sourcing, lease drafting, Ejari registration, and property investment advisory for Saudi and foreign investors.',
    descriptionAr: 'توريد العقارات التجارية والسكنية، وصياغة عقود الإيجار، والتسجيل العيني، والاستشارات الاستثمارية العقارية للمستثمرين السعوديين والأجانب.',
    descriptionBn: 'বাণিজ্যিক ও আবাসিক সম্পত্তি সংগ্রহ, লিজ খসড়া, Ejari নিবন্ধন, এবং সৌদি ও বিদেশি বিনিয়োগকারীদের জন্য সম্পত্তি বিনিয়োগ পরামর্শ।',
    href: '/services/real-estate',
    heroTag: 'Riyadh · Jeddah · Dammam Coverage',
    heroTagAr: 'تغطية الرياض · جدة · الدمام',
    heroTagBn: 'রিয়াদ · জেদ্দাহ · দাম্মাম কভারেজ',
    heroHeadline: 'Find, Secure and Manage the Right Property in Saudi Arabia',
    heroHeadlineAr: 'اعثر على العقار المناسب واحصل عليه وأدره في السعودية',
    heroHeadlineBn: 'সৌদি আরবে সঠিক সম্পত্তি খুঁজুন, নিশ্চিত করুন ও পরিচালনা করুন',
    overview: 'Saudi Arabia\u2019s real estate market is expanding rapidly under Vision 2030. FAIZA AL MARWA supports companies and investors with end-to-end property services \u2014 from sourcing offices and labor accommodation to lease negotiation, municipal registration, and long-term portfolio management.',
    overviewAr: 'يشهد السوق العقاري في السعودية نموًا سريعًا تحت مظلة رؤية 2030. تدعم FAIZA AL MARWA الشركات والمستثمرين بخدمات عقارية شاملة — من توريد المكاتب وسكن العمالة إلى التفاوض على الإيجارات والتسجيل البلدي وإدارة المحافظ طويلة الأجل.',
    overviewBn: 'সৌদি ভিশন ২০৩০-এর অধীনে সৌদি আরবের রিয়েল এস্টেট বাজার দ্রুত বর্ধনশীল। FAIZA AL MARWA কোম্পানি ও বিনিয়োগকারীদের পূর্ণাঙ্গ সম্পত্তি সেবা দেয় — অফিস ও শ্রম আবাসন সংগ্রহ থেকে লিজ আলোচনা, পৌর নিবন্ধন ও দীর্ঘমেয়াদি পোর্টফোলিও ব্যবস্থাপনা পর্যন্ত।',
    deliverables: [
      { title: 'Commercial Office Sourcing', titleAr: 'توريد المكاتب التجارية', titleBn: 'বাণিজ্যিক অফিস সংগ্রহ', desc: 'Shortlisting Grade-A offices, co-working spaces, and retail units aligned with your budget and district.', descAr: 'تقصير قائمة مكاتب من الفئة A ومساحات العمل المشتركة ووحدات البيع بما يتوافق مع ميزانيتك ومنطقتك.', descBn: 'আপনার বাজেট ও এলাকার সাথে সামঞ্জস্যপূর্ণ Grade-A অফিস, কো-ওয়ার্কিং স্পেস ও রিটেইল ইউনিটের সংক্ষিপ্ত তালিকা।', iconName: 'Building' },
      { title: 'Labor Accommodation Sourcing', titleAr: 'توريد سكن العمالة', titleBn: 'শ্রম আবাসন সংগ্রহ', desc: 'Compliant manpower housing and worker camps meeting Saudi municipal standards.', descAr: 'مساكن عمالة متوافقة ومعسكرات عمال تفي بمعايير بلدية سعودية.', descBn: 'সৌদি পৌর মান পূরণকারী বিধিবদ্ধ ম্যানপাওয়ার আবাসন ও কর্মী ক্যাম্প।', iconName: 'HardHat' },
      { title: 'Lease Drafting & Negotiation', titleAr: 'صياغة عقود الإيجار والتفاوض', titleBn: 'লিজ খসড়া ও দরকষাকষি', desc: 'Rent contract review, escalation caps, and tenant protection clauses in Arabic and English.', descAr: 'مراجعة عقد الإيجار وسقف الزيادة وبنود حماية المستأجر بالعربية والإنجليزية.', descBn: 'আরবি ও ইংরেজিতে ভাড়া চুক্তি পর্যালোচনা, বৃদ্ধির সীমা এবং ভাড়াটে সুরক্ষা ধারা।', iconName: 'FileText' },
      { title: 'Municipal & Ejari-Style Registration', titleAr: 'التسجيل البلدي ونظام عيني', titleBn: 'পৌর ও Ejari-ধাঁচের নিবন্ধন', desc: 'Official lease attestation and registration with the relevant municipality portal.', descAr: 'توثيق عقد الإيجار وتسجيله رسميًا عبر بوابة البلدية المختصة.', descBn: 'সংশ্লিষ্ট পৌর পোর্টালে সরকারি লিজ প্রতিপাদন ও নিবন্ধন।', iconName: 'Receipt' },
      { title: 'Property Investment Advisory', titleAr: 'الاستشارات الاستثمارية العقارية', titleBn: 'সম্পত্তি বিনিয়োগ পরামর্শ', desc: 'Rental yield analysis, district growth reports, and off-plan purchase guidance.', descAr: 'تحليل العائد الإيجاري وتقارير نمو المناطق والإرشاد لشراء المخططات.', descBn: 'ভাড়ার প্রতিফল বিশ্লেষণ, এলাকার প্রবৃদ্ধি প্রতিবেদন এবং অফ-প্ল্যান ক্রয় নির্দেশিকা।', iconName: 'Landmark' },
      { title: 'Facility & Tenant Management', titleAr: 'إدارة المرافق والمستأجرين', titleBn: 'সুবিধা ও ভাড়াটে ব্যবস্থাপনা', desc: 'Maintenance coordination, rent collection support, and landlord representation.', descAr: 'تنسيق الصيانة ودعم تحصيل الإيجار وتمثيل المالك.', descBn: 'রক্ষণাবেক্ষণ সমন্বয়, ভাড়া আদায়ে সহায়তা এবং সম্পত্তি মালিকের প্রতিনিধিত্ব।', iconName: 'Wrench' },
    ],
    steps: [
      { step: '01', title: 'Requirement & Budget Brief', titleAr: 'تحديد المتطلبات والميزانية', titleBn: 'প্রয়োজন ও বাজেট ব্রিফ', desc: 'Define location, square meters, use type, and budget range with our property advisors.', descAr: 'حدد الموقع والمساحة ونوع الاستخدام ونطاق الميزانية مع مستشارينا العقاريين.', descBn: 'আমাদের সম্পত্তি উপদেষ্টাদের সাথে অবস্থান, বর্গমিটার, ব্যবহারের ধরন এবং বাজেটের পরিসর নির্ধারণ করুন।' },
      { step: '02', title: 'Shortlist & Physical Viewings', titleAr: 'قائمة مختصرة ومعاينات فعلية', titleBn: 'সংক্ষিপ্ত তালিকা ও স্থানীয় পরিদর্শন', desc: 'Receive a curated property shortlist and schedule on-site inspections.', descAr: 'استلم قائمة عقارات مختارة وحدد مواعيد المعاينات في الموقع.', descBn: 'বাছাই করা সম্পত্তির সংক্ষিপ্ত তালিকা পান এবং স্থানীয় পরিদর্শনের সময়সূচি নির্ধারণ করুন।' },
      { step: '03', title: 'Negotiation & Contract Signing', titleAr: 'التفاوض وتوقيع العقد', titleBn: 'দরকষাকষি ও চুক্তি স্বাক্ষর', desc: 'We negotiate rent, warranty period, and terms, then finalize the lease agreement.', descAr: 'نتفاوض على الإيجار ومدة الضمان والشروط، ثم ننهي اتفاقية الإيجار.', descBn: 'আমরা ভাড়া, ওয়ারেন্টি সময়কাল ও শর্ত নিয়ে দরকষাকষি করি, তারপর লিজ চুক্তি চূড়ান্ত করি।' },
      { step: '04', title: 'Registration & Handover', titleAr: 'التسجيل والتسليم', titleBn: 'নিবন্ধন ও হস্তান্তর', desc: 'Attest the contract, complete utility transfers, and hand over the property.', descAr: 'توثيق العقد وإكمال نقل المرافق وتسليم العقار.', descBn: 'চুক্তি প্রতিপাদন, ইউটিলিটি হস্তান্তর সম্পন্ন করা এবং সম্পত্তি হস্তান্তর করা।' },
    ],
    faqs: [
      { q: 'Can a foreign company sign a commercial lease in Saudi Arabia?', questionAr: 'هل يمكن لشركة أجنبية توقيع عقد إيجار تجاري في السعودية؟', questionBn: 'একটি বিদেশি কোম্পানি কি সৌদি আরবে বাণিজ্যিক লিজ স্বাক্ষর করতে পারে?', a: 'Yes. Once your CR and MISA license are issued, your company can sign commercial and industrial leases in its own name.', answerAr: 'نعم. بمجرد إصدار سجلك التجاري ورخصة MISA، يمكن لشركتك توقيع العقود التجارية والصناعية باسمها.', answerBn: 'হ্যাঁ। আপনার CR ও MISA লাইসেন্স ইস্যু হলেই আপনার কোম্পানি নিজের নামে বাণিজ্যিক ও শিল্প লিজ স্বাক্ষর করতে পারে।' },
      { q: 'How long does it take to secure an office in Riyadh?', questionAr: 'كم يستغرق الحصول على مكتب في الرياض؟', questionBn: 'রিয়াদে একটি অফিস নিশ্চিত করতে কত সময় লাগে?', a: 'Typical sourcing and handover takes 5 to 15 working days depending on district and fit-out requirements.', answerAr: 'يستغرك التوريد والتسليم عادة من 5 إلى 15 يوم عمل حسب المنطقة ومتطلبات التجهيز.', answerBn: 'এলাকা ও ফিট-আউটের প্রয়োজন অনুযায়ী সাধারণ সংগ্রহ ও হস্তান্তরে ৫ থেকে ১৫ কর্মদিবস লাগে।' },
      { q: 'Do you handle lease registration and utilities?', questionAr: 'هل تتولون تسجيل الإيجار ونقل الخدمات؟', questionBn: 'আপনি কি লিজ নিবন্ধন ও ইউটিলিটি পরিচালনা করেন?', a: 'Yes, we manage contract attestation, municipality registration, electricity, water, and internet transfers.', answerAr: 'نعم، ندير توثيق العقد والتسجيل البلدي ونقل الكهرباء والماء والإنترنت.', answerBn: 'হ্যাঁ, আমরা চুক্তি প্রতিপাদন, পৌর নিবন্ধন, বিদ্যুৎ, পানি ও ইন্টারনেট হস্তান্তর পরিচালনা করি।' },
    ],
    ctaText: 'Get a Property Consultation',
    ctaTextAr: 'احصل على استشارة عقارية',
    ctaTextBn: 'সম্পত্তি পরামর্শ নিন',
  },
};
