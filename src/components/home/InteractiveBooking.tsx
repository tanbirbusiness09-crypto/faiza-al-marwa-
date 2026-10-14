'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { smoothEase, hoverButton } from '@/lib/animations';

const TOUR_PACKAGES = [
  'Istanbul Historical & Bosphorus Tour (6 Days)',
  'Cairo Heritage & Nile Cruise (5 Days)',
  'Gulf Commercial Circuit — Dubai (3 Days)',
  'Kuala Lumpur & Genting Explorer (6 Days)',
  'Bangkok & Pattaya Coastal Retreat (5 Days)',
  'Bali Island Paradise Getaway (7 Days)',
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
        className="bg-teal-deep rounded-3xl p-6 sm:p-10 lg:p-12 text-white shadow-xl relative overflow-hidden"
      >
        {/* Background decorative circles */}
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full border border-white/10 pointer-events-none" />
        <div className="absolute -right-10 -top-10 w-60 h-60 rounded-full border border-white/10 pointer-events-none" />

        <div className="max-w-2xl mb-8 relative z-10">
          <div className="text-xs font-bold uppercase tracking-wider text-gold-light mb-2 flex items-center gap-2">
            <span className="w-4 h-0.5 bg-gold-light" />
            <span>{t('booking_eyebrow', 'Quick booking')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            {t('booking_title', 'Start Your Tour Booking')}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-white/75">
            {t('booking_sub', 'Fill in a few details — our team will confirm availability, itineraries, and exact pricing with you directly.')}
          </p>
        </div>

        {/* Tour Package Form Panel */}
        <div className="bg-paper-white rounded-2xl p-6 sm:p-8 text-ink relative z-10 shadow-lg">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="submitted"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35, ease: smoothEase }}
                className="text-center py-10 space-y-3"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-display text-ink">Tour Inquiry Sent!</h3>
                <p className="text-xs sm:text-sm text-softText max-w-md mx-auto">
                  Our travel desk is preparing the best package rates for your trip. We will send details to <strong>{formData.phone}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 bg-teal-deep text-white text-xs font-bold rounded-lg hover:bg-teal-mid transition-colors"
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
                className="space-y-4"
              >
                {/* Package & Travel Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-softText mb-1">Tour Package</label>
                    <select
                      value={formData.packageType}
                      onChange={(e) => setFormData({ ...formData, packageType: e.target.value })}
                      className="w-full px-3 py-2.5 bg-paper border border-paper-line rounded-lg text-xs sm:text-sm text-ink outline-none focus:border-teal-deep"
                    >
                      {TOUR_PACKAGES.map((pkg) => (
                        <option key={pkg} value={pkg}>{pkg}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-softText mb-1">Expected Travel Date</label>
                    <input
                      type="date"
                      required
                      value={formData.departDate}
                      onChange={(e) => setFormData({ ...formData, departDate: e.target.value })}
                      className="w-full px-3 py-2.5 bg-paper border border-paper-line rounded-lg text-xs sm:text-sm text-ink outline-none focus:border-teal-deep"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-softText mb-1">Number of Travelers</label>
                    <select
                      value={formData.travelers}
                      onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                      className="w-full px-3 py-2.5 bg-paper border border-paper-line rounded-lg text-xs sm:text-sm text-ink outline-none focus:border-teal-deep"
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
                    <label className="block text-xs font-bold text-softText mb-1">Hotel Preference</label>
                    <select
                      value={formData.hotelPreference}
                      onChange={(e) => setFormData({ ...formData, hotelPreference: e.target.value })}
                      className="w-full px-3 py-2.5 bg-paper border border-paper-line rounded-lg text-xs sm:text-sm text-ink outline-none focus:border-teal-deep"
                    >
                      <option value="4-Star Standard">4-Star Standard</option>
                      <option value="5-Star Standard">5-Star Standard</option>
                      <option value="5-Star Luxury">5-Star Luxury</option>
                      <option value="Budget Friendly">Budget Friendly</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-softText mb-1">Special Requests (optional)</label>
                    <input
                      type="text"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. window seat, vegan meals, guided tour..."
                      className="w-full px-3 py-2.5 bg-paper border border-paper-line rounded-lg text-xs sm:text-sm text-ink outline-none focus:border-teal-deep"
                    />
                  </div>
                </div>

                {/* Contact Fields Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-paper-line/60 items-end">
                  <div>
                    <label className="block text-xs font-bold text-softText mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Full Name"
                      className="w-full px-3 py-2.5 bg-paper border border-paper-line rounded-lg text-xs sm:text-sm text-ink outline-none focus:border-teal-deep"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-softText mb-1">WhatsApp / Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+966 5X XXX XXXX"
                      className="w-full px-3 py-2.5 bg-paper border border-paper-line rounded-lg text-xs sm:text-sm text-ink outline-none focus:border-teal-deep"
                    />
                  </div>
                  <div>
                    <motion.button
                      {...hoverButton}
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 bg-gold hover:bg-gold-light text-ink font-bold rounded-lg text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm"
                    >
                      <span>{loading ? 'Sending...' : 'Request Package Quote'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
