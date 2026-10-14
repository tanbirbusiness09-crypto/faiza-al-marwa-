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
} from 'lucide-react';
import { smoothEase, hoverButton } from '@/lib/animations';

const TOUR_PACKAGES = [
  'Istanbul Historical & Bosphorus Tour (6 Days)',
  'Cairo Heritage & Nile Cruise (5 Days)',
  'Gulf Commercial Circuit — Dubai (3 Days)',
  'Kuala Lumpur & Genting Explorer (6 Days)',
  'Bangkok & Pattaya Coastal Retreat (5 Days)',
  'Bali Island Paradise Getaway (7 Days)',
];

const FIELD =
  'w-full px-3.5 py-2.5 bg-white border border-paper-line rounded-lg text-xs sm:text-sm text-ink outline-none transition-all focus:border-navy focus:ring-2 focus:ring-navy/20 hover:border-paper';

const LABEL = 'block text-[11px] font-bold uppercase tracking-wide text-softText mb-1.5';

const ASSURANCES = [
  {
    icon: BadgeCheck,
    title: 'Free quote within 24 hours',
    desc: 'No prepayment — pricing confirmed by our Riyadh travel desk.',
  },
  {
    icon: Clock3,
    title: 'Fastest possible itinerary',
    desc: 'Flight, hotel and transfers bundled into one confirmed plan.',
  },
  {
    icon: MessageCircle,
    title: '24/7 WhatsApp support',
    desc: 'One dedicated coordinator from enquiry to your return flight.',
  },
];

export default function InteractiveBooking() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    packageType: TOUR_PACKAGES[0],
    departDate: '',
    travelers: '2',
    hotelPreference: '5-Star Standard',
    notes: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'tour_booking',
          name: formData.name || 'Tour Inquirer',
          phone: formData.phone,
          details: {
            bookingType: 'tour_package',
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
          <div className="lg:col-span-4 p-6 sm:p-9 lg:p-10 flex flex-col">
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold-light mb-3 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-gold-light" />
              <span>{t('booking_eyebrow', 'Quick booking')}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-display font-bold text-white leading-[1.15]">
              {t('booking_title', 'Start Your Tour Booking')}
            </h2>

            <p className="mt-3 text-xs sm:text-[13.5px] leading-relaxed text-white/70">
              {t(
                'booking_sub',
                'Fill in a few details — our team will confirm availability, itineraries, and exact pricing with you directly.'
              )}
            </p>

            <ul className="mt-7 space-y-4">
              {ASSURANCES.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="w-9 h-9 shrink-0 rounded-lg bg-white/10 border border-white/12 flex items-center justify-center">
                    <item.icon className="w-[18px] h-[18px] text-gold-light" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[13px] font-bold text-white leading-snug">
                      {item.title}
                    </span>
                    <span className="block text-[11.5px] leading-relaxed text-white/60 mt-0.5">
                      {item.desc}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-8">
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

          {/* ---------- Right: Form card ---------- */}
          <div className="lg:col-span-8 lg:p-4 lg:pl-0">
            <div className="bg-paper-white rounded-none lg:rounded-2xl p-6 sm:p-8 text-ink shadow-2xl border-t lg:border-t-0 border-paper-line h-full">
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
                    <h3 className="text-xl font-bold font-display text-ink">Tour Inquiry Sent!</h3>
                    <p className="text-xs sm:text-sm text-softText max-w-md mx-auto leading-relaxed">
                      Our travel desk is preparing the best package rates for your trip. We will
                      send details to <strong>{formData.phone}</strong> shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 py-2.5 bg-navy text-white text-xs font-bold rounded-lg hover:bg-navy-light transition-colors"
                    >
                      Make Another Request
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="tour-form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25, ease: smoothEase }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* Step 1 — Trip details */}
                    <fieldset className="space-y-4">
                      <legend className="flex items-center gap-2.5 w-full mb-1">
                        <span className="w-6 h-6 rounded-full bg-navy text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                          1
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-navy">
                          Trip Details
                        </span>
                        <span className="flex-1 h-px bg-paper-line" />
                      </legend>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="sm:col-span-2">
                          <label className={LABEL}>Tour Package</label>
                          <select
                            value={formData.packageType}
                            onChange={(e) =>
                              setFormData({ ...formData, packageType: e.target.value })
                            }
                            className={FIELD}
                          >
                            {TOUR_PACKAGES.map((pkg) => (
                              <option key={pkg} value={pkg}>
                                {pkg}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className={LABEL}>Expected Travel Date</label>
                          <input
                            type="date"
                            required
                            value={formData.departDate}
                            onChange={(e) =>
                              setFormData({ ...formData, departDate: e.target.value })
                            }
                            className={FIELD}
                          />
                        </div>
                        <div>
                          <label className={LABEL}>Travelers</label>
                          <select
                            value={formData.travelers}
                            onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                            className={FIELD}
                          >
                            <option value="1">1 Traveler</option>
                            <option value="2">2 Travelers</option>
                            <option value="3-5">3 – 5 (Family Group)</option>
                            <option value="6+">6+ (Group / Corporate)</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className={LABEL}>Hotel Preference</label>
                          <select
                            value={formData.hotelPreference}
                            onChange={(e) =>
                              setFormData({ ...formData, hotelPreference: e.target.value })
                            }
                            className={FIELD}
                          >
                            <option value="4-Star Standard">4-Star Standard</option>
                            <option value="5-Star Standard">5-Star Standard</option>
                            <option value="5-Star Luxury">5-Star Luxury</option>
                            <option value="Budget Friendly">Budget Friendly</option>
                          </select>
                        </div>
                        <div>
                          <label className={LABEL}>Special Requests (optional)</label>
                          <input
                            type="text"
                            value={formData.notes}
                            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                            placeholder="e.g. window seat, vegan meals, guided tour..."
                            className={FIELD}
                          />
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
                        <div className="flex items-end">
                          <motion.button
                            {...hoverButton}
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 bg-navy hover:bg-navy-light text-white font-bold rounded-lg text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-navy/20 transition-colors"
                          >
                            <span>{loading ? 'Sending...' : 'Request Package Quote'}</span>
                            <ArrowRight className="w-4 h-4" />
                          </motion.button>
                        </div>
                      </div>

                      <p className="text-[11px] text-softText leading-relaxed">
                        By submitting you agree to be contacted about this enquiry. No payment is
                        taken at this stage.
                      </p>
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
