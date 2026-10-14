'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import {
  CheckCircle2,
  ArrowRight,
  BadgeCheck,
  Clock3,
  MessageCircle,
  Phone,
  Building2,
  Video,
  CalendarCheck,
} from 'lucide-react';
import { smoothEase, hoverButton } from '@/lib/animations';

type Tri = { en: string; ar: string; bn: string };

const SERVICE_OPTIONS: Tri[] = [
  { en: 'Investor License & Business Setup', ar: 'ترخيص المستثمر وتأسيس الشركات', bn: 'ইনভেস্টর লাইসেন্স ও বিজনেস সেটআপ' },
  { en: 'Manpower & Recruitment', ar: 'القوى العاملة والتوظيف', bn: 'জনশক্তি ও রিক্রুটমেন্ট' },
  { en: 'Real Estate & Property Solutions', ar: 'العقارات وحلول الممتلكات', bn: 'রিয়েল এস্টেট ও প্রপার্টি সমাধান' },
  { en: 'Travel & Tourism / Tour Packages', ar: 'السفر والسياحة وباقات الجولات', bn: 'ট্র্যাভেল ও টুরিজম / ট্যুর প্যাকেজ' },
  { en: 'Visa & Immigration', ar: 'التأشيرات والهجرة', bn: 'ভিসা ও ইমিগ্রেশন' },
  { en: 'Digital & IT Services', ar: 'الخدمات الرقمية وتقنية المعلومات', bn: 'ডিজিটাল ও আইটি সেবা' },
  { en: 'General Consultation', ar: 'استشارة عامة', bn: 'জেনারেল কনসালটেশন' },
];

const TIME_SLOTS: Tri[] = [
  { en: '09:00 – 12:00 — Morning', ar: '09:00 – 12:00 — صباحاً', bn: '09:00 – 12:00 — সকাল' },
  { en: '12:00 – 15:00 — Afternoon', ar: '12:00 – 15:00 — ظهراً', bn: '12:00 – 15:00 — দুপুর' },
  { en: '15:00 – 18:00 — Evening', ar: '15:00 – 18:00 — مساءً', bn: '15:00 – 18:00 — বিকাল' },
  { en: 'Flexible — anytime', ar: 'مرن — في أي وقت', bn: 'নমনীয় — যেকোনো সময়' },
];

const MEETING_MODES: (Tri & { icon: typeof Building2 })[] = [
  { en: 'Office Visit', ar: 'زيارة المكتب', bn: 'অফিস ভিজিট', icon: Building2 },
  { en: 'Phone Call', ar: 'مكالمة هاتفية', bn: 'ফোন কল', icon: Phone },
  { en: 'WhatsApp', ar: 'واتساب', bn: 'হোয়াটসঅ্যাপ', icon: MessageCircle },
  { en: 'Video Meeting', ar: 'اجتماع مرئي', bn: 'ভিডিও মিটিং', icon: Video },
];

const ASSURANCES: (Tri & { icon: typeof BadgeCheck; desc: Tri })[] = [
  {
    en: 'Free first consultation',
    ar: 'استشارة أولى مجانية',
    bn: 'প্রথম পরামর্শ ফ্রি',
    icon: BadgeCheck,
    desc: { en: 'No fee to talk — you only proceed when the plan and price fit you.', ar: 'لا رسوم للحديث — تكمل فقط عندما يناسبك الخطة والسعر.', bn: 'কথা বলার জন্য কোনো ফি নেই — প্ল্যান ও দাম মানানসই হলে তবেই এগোন।' } as Tri,
  },
  {
    en: 'Slot confirmed within 1 hour',
    ar: 'تأكيد الموعد خلال ساعة',
    bn: '১ ঘণ্টায় সময় নিশ্চিত',
    icon: Clock3,
    desc: { en: 'Our Riyadh team verifies availability and calls you back fast.', ar: 'فريقنا في الرياض يتحقق من المواعيد ويتواصل بك بسرعة.', bn: 'আমাদের রিয়াদ টিম সময় যাচাই করে দ্রুত আপনাকে কল করে।' } as Tri,
  },
  {
    en: 'Meet however you prefer',
    ar: 'نلتقي كما تفضل',
    bn: 'আপনার পছন্দমতো সাক্ষাৎ',
    icon: Video,
    desc: { en: 'Riyadh office, phone, WhatsApp or video call — your choice.', ar: 'مكتب الرياض، هاتف، واتساب أو مكالمة فيديو — اختيارك.', bn: 'রিয়াদ অফিস, ফোন, হোয়াটসঅ্যাপ বা ভিডিও কল — আপনার পছন্দ।' } as Tri,
  },
];

const FIELD =
  'w-full px-3.5 py-2.5 bg-white border border-paper-line rounded-lg text-xs sm:text-sm text-ink outline-none transition-all focus:border-navy focus:ring-2 focus:ring-navy/20 hover:border-paper';

const LABEL = 'block text-[11px] font-bold uppercase tracking-wide text-softText mb-1.5';

const LEGEND =
  'flex items-center gap-2.5 w-full mb-1 [&>span:first-child]:font-bold';

export default function AppointmentBooking() {
  const { t, tx, language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    service: SERVICE_OPTIONS[0].en,
    date: '',
    timeSlot: TIME_SLOTS[0].en,
    mode: MEETING_MODES[0].en,
    name: '',
    phone: '',
    email: '',
    notes: '',
  });

  const today = new Date().toISOString().split('T')[0];

  const labelOf = (opt: Tri) => (language === 'ar' ? opt.ar : language === 'bn' ? opt.bn : opt.en);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'appointment',
          name: formData.name || 'Appointment Request',
          phone: formData.phone,
          email: formData.email,
          details: { bookingType: 'appointment', ...formData },
        }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container-custom py-14" id="booking">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: smoothEase }}
        className="relative"
      >
        {/* ---------- Navy header band ---------- */}
        <div className="relative overflow-hidden rounded-t-3xl md:rounded-3xl bg-[linear-gradient(135deg,#003078_0%,#001F52_58%,#001029_100%)] px-5 sm:px-8 lg:px-12 pt-8 sm:pt-10 lg:pt-12 pb-20 sm:pb-24">
          <div className="absolute -top-24 -left-16 w-96 h-96 rounded-full bg-gold/12 blur-3xl pointer-events-none" />
          <div className="absolute -right-24 top-10 w-80 h-80 rounded-full border border-white/8 pointer-events-none" />
          <div className="absolute -right-10 top-24 w-56 h-56 rounded-full border border-white/8 pointer-events-none" />

          <div className="relative z-10 grid gap-7 lg:grid-cols-12 lg:gap-10 items-start">
            {/* Pitch */}
            <div className="lg:col-span-5">
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold-light mb-3 flex items-center gap-2">
                <span className="w-5 h-0.5 bg-gold-light" />
                <span>{t('booking_eyebrow', 'Free consultation')}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-display font-bold text-white leading-[1.18] sm:leading-[1.15]">
                {t('booking_title', 'Book an Appointment')}
              </h2>

              <p className="mt-3 text-xs sm:text-[13.5px] leading-relaxed text-white/70 max-w-md">
                {t(
                  'booking_sub',
                  'Pick any service, choose your preferred date and time — our team confirms the slot and meets you however you like.'
                )}
              </p>

              <div className="mt-5 flex flex-wrap gap-2.5">
                <a
                  href="https://wa.me/966500000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#1EA352] hover:bg-[#188B46] text-white text-xs font-bold transition-colors shadow-md"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{tx('WhatsApp', 'واتساب', 'হোয়াটসঅ্যাপ')}</span>
                </a>
                <a
                  href="tel:+966110000000"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/18 border border-white/15 text-white text-xs font-bold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-light" />
                  <span dir="ltr">+966 11 000 0000</span>
                </a>
              </div>
            </div>

            {/* Assurance cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4">
              {ASSURANCES.map((item) => (
                <div
                  key={item.en}
                  className="flex sm:flex-col items-start gap-3 rounded-xl bg-white/8 border border-white/12 px-3.5 py-3 sm:p-4 backdrop-blur-sm"
                >
                  <span className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 rounded-lg bg-gold/20 border border-gold/30 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-gold-light" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[12.5px] sm:text-[13px] font-bold text-white leading-snug">
                      {labelOf(item)}
                    </span>
                    <span className="hidden sm:block text-[11.5px] leading-relaxed text-white/60 mt-1">
                      {labelOf(item.desc as Tri)}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ---------- Floating form card ---------- */}
        <div className="relative z-10 -mt-14 sm:-mt-16 px-0 md:px-8 lg:px-12">
          <div className="bg-paper-white rounded-2xl border border-paper-line shadow-2xl p-5 sm:p-7 lg:p-9">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="submitted"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.35, ease: smoothEase }}
                  className="text-center py-12 sm:py-16 space-y-3"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-ink">
                    {tx('Appointment Request Received!', 'تم استلام طلب الموعد!', 'অ্যাপয়েন্টমেন্টের অনুরোধ পাওয়া গেছে!')}
                  </h3>
                  <p className="text-xs sm:text-sm text-softText max-w-md mx-auto leading-relaxed">
                    <strong>{labelOf(SERVICE_OPTIONS.find((s) => s.en === formData.service) || SERVICE_OPTIONS[0])}</strong>
                    {' — '}
                    {formData.date || tx('date to be agreed', 'يُتفق عليه لاحقاً', 'তারিখ পরে নিশ্চিত হবে')}, {labelOf(TIME_SLOTS.find((s) => s.en === formData.timeSlot) || TIME_SLOTS[0])}.{' '}
                    {tx('We will confirm your', 'سنؤكد', 'আমরা আপনার')}{' '}
                    {labelOf(MEETING_MODES.find((m) => m.en === formData.mode) || MEETING_MODES[0]).toLowerCase()}{' '}
                    {tx('slot at', 'في الموعد بـ', 'সময় নিশ্চিত করব')} <strong dir="ltr">{formData.phone}</strong>{' '}
                    {tx('within the hour.', 'خلال ساعة.', '১ ঘণ্টার মধ্যে।')}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 bg-navy text-white text-xs font-bold rounded-lg hover:bg-navy-light transition-colors"
                  >
                    {tx('Book Another Appointment', 'احجز موعداً آخر', 'আরেকটি অ্যাপয়েন্টমেন্ট নিন')}
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="appointment-form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: smoothEase }}
                  onSubmit={handleSubmit}
                >
                  {/* Card header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 pb-5 mb-6 border-b border-paper-line">
                    <div className="flex items-start gap-3 min-w-0">
                      <span className="w-10 h-10 shrink-0 rounded-xl bg-navy text-white flex items-center justify-center shadow-md shadow-navy/25">
                        <CalendarCheck className="w-5 h-5" />
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-display font-bold text-ink text-[17px] sm:text-lg leading-snug">
                          {tx('Request an appointment', 'طلب موعد', 'অ্যাপয়েন্টমেন্ট নিন')}
                        </h3>
                        <p className="text-[11.5px] sm:text-xs text-softText mt-0.5 leading-snug">
                          {tx(
                            'Choose a service and time — we confirm within 1 hour.',
                            'اختر الخدمة والوقت — نؤكد لك خلال ساعة.',
                            'সেবা ও সময় বেছে নিন — ১ ঘণ্টার মধ্যে নিশ্চিত করব।'
                          )}
                        </p>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-wider bg-gold/15 text-gold border border-gold/30 px-2.5 py-1.5 rounded-full shrink-0">
                      <BadgeCheck className="w-3.5 h-3.5" />
                      {tx('Free · No obligation', 'مجاني · بلا التزام', 'ফ্রি · কোনো দায়বদ্ধতা নেই')}
                    </span>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-7 lg:gap-10">
                    {/* ---------- Step 1 ---------- */}
                    <fieldset className="space-y-4">
                      <legend className={LEGEND}>
                        <span className="w-6 h-6 rounded-full bg-navy text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                          1
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-navy">
                          {tx('Appointment Details', 'تفاصيل الموعد', 'অ্যাপয়েন্টমেন্টের বিবরণ')}
                        </span>
                        <span className="flex-1 h-px bg-paper-line" />
                      </legend>

                      <div>
                        <label className={LABEL}>{tx('Service / Subject', 'الخدمة / الموضوع', 'সেবা / বিষয়')}</label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className={FIELD}
                        >
                          {SERVICE_OPTIONS.map((opt) => (
                            <option key={opt.en} value={opt.en}>
                              {labelOf(opt)}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className={LABEL}>{tx('Preferred Date', 'التاريخ المفضل', 'পছন্দের তারিখ')}</label>
                          <input
                            type="date"
                            required
                            min={today}
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className={FIELD}
                          />
                        </div>
                        <div>
                          <label className={LABEL}>{tx('Preferred Time', 'الوقت المفضل', 'পছন্দের সময়')}</label>
                          <select
                            value={formData.timeSlot}
                            onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                            className={FIELD}
                          >
                            {TIME_SLOTS.map((opt) => (
                              <option key={opt.en} value={opt.en}>
                                {labelOf(opt)}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className={LABEL}>{tx('How should we meet?', 'كيف نلتقي؟', 'কীভাবে সাক্ষাৎ করব?')}</label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2.5">
                          {MEETING_MODES.map((opt) => {
                            const active = formData.mode === opt.en;
                            return (
                              <button
                                key={opt.en}
                                type="button"
                                onClick={() => setFormData({ ...formData, mode: opt.en })}
                                aria-pressed={active}
                                className={[
                                  'flex flex-col items-center gap-1.5 px-2 py-3 rounded-lg border text-[11px] font-bold transition-all',
                                  active
                                    ? 'border-navy bg-navy text-white shadow-md shadow-navy/20'
                                    : 'border-paper-line bg-white text-softText hover:border-navy/40 hover:text-navy',
                                ].join(' ')}
                              >
                                <opt.icon
                                  className={`w-4 h-4 ${active ? 'text-gold-light' : 'text-navy'}`}
                                />
                                <span className="text-center leading-tight">{labelOf(opt)}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </fieldset>

                    {/* ---------- Step 2 ---------- */}
                    <fieldset className="space-y-4">
                      <legend className={LEGEND}>
                        <span className="w-6 h-6 rounded-full bg-navy text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                          2
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-navy">
                          {tx('Your Details', 'بياناتك', 'আপনার তথ্য')}
                        </span>
                        <span className="flex-1 h-px bg-paper-line" />
                      </legend>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className={LABEL}>{tx('Full Name *', 'الاسم الكامل *', 'পুরো নাম *')}</label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder={tx('Full Name', 'الاسم الكامل', 'পুরো নাম')}
                            className={FIELD}
                          />
                        </div>
                        <div>
                          <label className={LABEL}>{tx('WhatsApp / Phone *', 'واتساب / هاتف *', 'হোয়াটসঅ্যাপ / ফোন *')}</label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+966 5X XXX XXXX"
                            className={FIELD}
                            dir="ltr"
                          />
                        </div>
                      </div>

                      <div>
                        <label className={LABEL}>{tx('Email (optional)', 'البريد الإلكتروني (اختياري)', 'ইমেইল (ঐচ্ছিক)')}</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@company.com"
                          className={FIELD}
                          dir="ltr"
                        />
                      </div>

                      <div>
                        <label className={LABEL}>
                          {tx('What would you like to discuss?', 'ما الذي ترغب في مناقشته?', 'আপনি কী নিয়ে আলোচনা করতে চান?')}
                        </label>
                        <textarea
                          rows={3}
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          placeholder={tx(
                            'Briefly describe your requirement, budget or question...',
                            'صف احتياجك أو ميزانيتك أو سؤالك باختصار...',
                            'আপনার চাহিদা, বাজেট বা প্রশ্নটি সংক্ষেপে লিখুন...'
                          )}
                          className={`${FIELD} resize-none leading-relaxed`}
                        />
                      </div>

                      <div className="flex flex-col gap-3 pt-1">
                        <motion.button {...hoverButton} type="submit" disabled={loading} className="btn-app bg-navy hover:bg-navy-light text-white shadow-md shadow-navy/20">
                          <span>{loading ? tx('Sending...', 'جارٍ الإرسال...', 'পাঠানো হচ্ছে...') : tx('Confirm Appointment', 'تأكيد الموعد', 'অ্যাপয়েন্টমেন্ট নিশ্চিত করুন')}</span>
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                        <p className="text-[11px] text-softText leading-relaxed text-center sm:text-left">
                          {tx(
                            'Free & no obligation — we reply within 1 hour during working days.',
                            'مجاني وبلا التزام — نرد خلال ساعة في أيام العمل.',
                            'ফ্রি ও কোনো দায়বদ্ধতা নেই — কর্মদিবসে ১ ঘণ্টার মধ্যে উত্তর দিই।'
                          )}
                        </p>
                      </div>
                    </fieldset>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
