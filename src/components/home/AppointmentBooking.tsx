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
} from 'lucide-react';
import { smoothEase, hoverButton } from '@/lib/animations';

const SERVICE_OPTIONS = [
  'Investor License & Business Setup',
  'Manpower & Recruitment',
  'Real Estate & Property Solutions',
  'Travel & Tourism / Tour Packages',
  'Visa & Immigration',
  'Digital & IT Services',
  'General Consultation',
];

const TIME_SLOTS = [
  '09:00 – 12:00 — Morning',
  '12:00 – 15:00 — Afternoon',
  '15:00 – 18:00 — Evening',
  'Flexible — anytime',
];

const MEETING_MODES = [
  { label: 'Office Visit', icon: Building2 },
  { label: 'Phone Call', icon: Phone },
  { label: 'WhatsApp', icon: MessageCircle },
  { label: 'Video Meeting', icon: Video },
];

const FIELD =
  'w-full px-3.5 py-2.5 bg-white border border-paper-line rounded-lg text-xs sm:text-sm text-ink outline-none transition-all focus:border-navy focus:ring-2 focus:ring-navy/20 hover:border-paper';

const LABEL = 'block text-[11px] font-bold uppercase tracking-wide text-softText mb-1.5';

const ASSURANCES = [
  {
    icon: BadgeCheck,
    title: 'Free first consultation',
    desc: 'No fee to talk — you only proceed when the plan and price fit you.',
  },
  {
    icon: Clock3,
    title: 'Slot confirmed within 1 hour',
    desc: 'Our Riyadh team verifies availability and calls you back fast.',
  },
  {
    icon: Video,
    title: 'Meet however you prefer',
    desc: 'Riyadh office, phone, WhatsApp or video call — your choice.',
  },
];

export default function AppointmentBooking() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    service: SERVICE_OPTIONS[0],
    date: '',
    timeSlot: TIME_SLOTS[0],
    mode: 'Office Visit',
    name: '',
    phone: '',
    email: '',
    notes: '',
  });

  const today = new Date().toISOString().split('T')[0];

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
          details: {
            bookingType: 'appointment',
            ...formData,
          },
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
        className="relative rounded-3xl overflow-hidden shadow-xl bg-[linear-gradient(135deg,#003078_0%,#001F52_58%,#001029_100%)]"
      >
        {/* Decorative glow + rings */}
        <div className="absolute -top-24 -left-16 w-96 h-96 rounded-full bg-gold/12 blur-3xl pointer-events-none" />
        <div className="absolute -right-24 top-10 w-80 h-80 rounded-full border border-white/8 pointer-events-none" />
        <div className="absolute -right-10 top-24 w-56 h-56 rounded-full border border-white/8 pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12">
          {/* ---------- Left: Pitch column ---------- */}
          <div className="lg:col-span-4 p-5 sm:p-9 lg:p-10 flex flex-col">
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold-light mb-3 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-gold-light" />
              <span>{t('booking_eyebrow', 'Free consultation')}</span>
            </div>

            <h2 className="text-xl sm:text-3xl lg:text-[34px] font-display font-bold text-white leading-[1.18] sm:leading-[1.15]">
              {t('booking_title', 'Book an Appointment')}
            </h2>

            <p className="mt-3 text-xs sm:text-[13.5px] leading-relaxed text-white/70">
              {t(
                'booking_sub',
                'Pick any service, choose your preferred date and time — our team confirms the slot and meets you however you like.'
              )}
            </p>

            <ul className="mt-5 sm:mt-7 space-y-3.5 sm:space-y-4">
              {ASSURANCES.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 rounded-lg bg-white/10 border border-white/12 flex items-center justify-center">
                    <item.icon className="w-[18px] h-[18px] text-gold-light" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[12.5px] sm:text-[13px] font-bold text-white leading-snug">
                      {item.title}
                    </span>
                    <span className="block text-[11px] sm:text-[11.5px] leading-relaxed text-white/60 mt-0.5">
                      {item.desc}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-5 sm:pt-8">
              <span className="block text-[11px] uppercase tracking-wider text-white/50 mb-2">
                Prefer to talk?
              </span>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href="https://wa.me/966500000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#1EA352] hover:bg-[#188B46] text-white text-xs font-bold transition-colors shadow-md"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="tel:+966110000000"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/18 border border-white/15 text-white text-xs font-bold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-light" />
                  <span>+966 11 000 0000</span>
                </a>
              </div>
            </div>
          </div>

          {/* ---------- Right: Appointment form card ---------- */}
          <div className="lg:col-span-8 p-3 sm:p-4 lg:p-4 lg:pl-0">
            <div className="bg-paper-white rounded-2xl p-5 sm:p-8 text-ink shadow-2xl border border-paper-line h-full">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="submitted"
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.35, ease: smoothEase }}
                    className="text-center py-14 space-y-3"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="text-xl font-bold font-display text-ink">
                      Appointment Request Received!
                    </h3>
                    <p className="text-xs sm:text-sm text-softText max-w-md mx-auto leading-relaxed">
                      <strong>{formData.service}</strong> — {formData.date || 'date to be agreed'},{' '}
                      {formData.timeSlot}. We will confirm your {formData.mode.toLowerCase()} slot at{' '}
                      <strong>{formData.phone}</strong> within the hour.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 py-2.5 bg-navy text-white text-xs font-bold rounded-lg hover:bg-navy-light transition-colors"
                    >
                      Book Another Appointment
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
                    className="space-y-5 sm:space-y-6"
                  >
                    {/* Step 1 — Appointment details */}
                    <fieldset className="space-y-4">
                      <legend className="flex items-center gap-2.5 w-full mb-1">
                        <span className="w-6 h-6 rounded-full bg-navy text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                          1
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-navy">
                          Appointment Details
                        </span>
                        <span className="flex-1 h-px bg-paper-line" />
                      </legend>

                      <div>
                        <label className={LABEL}>Service / Subject</label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className={FIELD}
                        >
                          {SERVICE_OPTIONS.map((svc) => (
                            <option key={svc} value={svc}>
                              {svc}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className={LABEL}>Preferred Date</label>
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
                          <label className={LABEL}>Preferred Time</label>
                          <select
                            value={formData.timeSlot}
                            onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                            className={FIELD}
                          >
                            {TIME_SLOTS.map((slot) => (
                              <option key={slot} value={slot}>
                                {slot}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className={LABEL}>How should we meet?</label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                          {MEETING_MODES.map((opt) => {
                            const active = formData.mode === opt.label;
                            return (
                              <button
                                key={opt.label}
                                type="button"
                                onClick={() => setFormData({ ...formData, mode: opt.label })}
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
                                <span className="text-center leading-tight">{opt.label}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </fieldset>

                    {/* Step 2 — Contact details */}
                    <fieldset className="space-y-4">
                      <legend className="flex items-center gap-2.5 w-full mb-1">
                        <span className="w-6 h-6 rounded-full bg-navy text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                          2
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-navy">
                          Your Details
                        </span>
                        <span className="flex-1 h-px bg-paper-line" />
                      </legend>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className={LABEL}>Full Name *</label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Full Name"
                            className={FIELD}
                          />
                        </div>
                        <div>
                          <label className={LABEL}>WhatsApp / Phone *</label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+966 5X XXX XXXX"
                            className={FIELD}
                          />
                        </div>
                        <div>
                          <label className={LABEL}>Email (optional)</label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="you@company.com"
                            className={FIELD}
                          />
                        </div>
                      </div>

                      <div>
                        <label className={LABEL}>What would you like to discuss?</label>
                        <textarea
                          rows={3}
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          placeholder="Briefly describe your requirement, budget or question..."
                          className={`${FIELD} resize-none leading-relaxed`}
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-1">
                        <motion.button
                          {...hoverButton}
                          type="submit"
                          disabled={loading}
                          className="btn-app bg-navy hover:bg-navy-light text-white shadow-md shadow-navy/20"
                        >
                          <span>{loading ? 'Sending...' : 'Confirm Appointment'}</span>
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                        <p className="text-[11px] text-softText leading-relaxed">
                          Free &amp; no obligation — we reply within 1 hour during working days.
                        </p>
                      </div>
                    </fieldset>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
