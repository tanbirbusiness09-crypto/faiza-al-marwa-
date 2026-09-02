'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import { Plane, Building, Compass, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { smoothEase, hoverButton } from '@/lib/animations';

const BOOKING_TABS = [
  { id: 'flight', label: 'Flight Booking', icon: Plane },
  { id: 'hotel', label: 'Hotel Booking', icon: Building },
  { id: 'tour', label: 'Tour Packages', icon: Compass },
  { id: 'umrah', label: 'Umrah Package', icon: Sparkles },
];

export default function InteractiveBooking() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('flight');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    from: 'Riyadh (RUH)',
    to: 'Jeddah (JED)',
    departDate: '',
    returnDate: '',
    passengers: '1',
    hotelLocation: 'Makkah Al-Mukarramah',
    checkIn: '',
    checkOut: '',
    guests: '2',
    packageType: 'Umrah VIP Group',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'booking',
          name: formData.name || 'Travel Inquirer',
          phone: formData.phone,
          details: {
            bookingType: activeTab,
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
            {t('booking_title', 'Start Your Booking')}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-white/75">
            {t('booking_sub', 'Fill in a few details — our team will confirm availability and pricing with you directly.')}
          </p>
        </div>

        {/* Tab Headers with Motion */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none relative z-10">
          {BOOKING_TABS.map((tab) => {
            const IconC = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  setActiveTab(tab.id);
                  setSubmitted(false);
                }}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap ${
                  isActive
                    ? 'bg-gold text-ink shadow-md font-bold'
                    : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white border border-white/15'
                }`}
              >
                <IconC className="w-4 h-4" />
                <span>{tab.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Booking Form Panel */}
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
                <h3 className="text-xl font-bold font-display text-ink">Booking Inquiry Sent!</h3>
                <p className="text-xs sm:text-sm text-softText max-w-md mx-auto">
                  Our reservation desk is checking the best live rates for your trip. We will send details to <strong>{formData.phone}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 bg-teal-deep text-white text-xs font-bold rounded-lg hover:bg-teal-mid transition-colors"
                >
                  Make Another Search
                </button>
              </motion.div>
            ) : (
              <motion.form
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: smoothEase }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                {/* Flight Fields */}
                {activeTab === 'flight' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-softText mb-1">From</label>
                      <input
                        type="text"
                        required
                        value={formData.from}
                        onChange={(e) => setFormData({ ...formData, from: e.target.value })}
                        className="w-full px-3 py-2.5 bg-paper border border-paper-line rounded-lg text-xs sm:text-sm text-ink outline-none focus:border-teal-deep"
                        placeholder="e.g. Riyadh (RUH)"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-softText mb-1">To</label>
                      <input
                        type="text"
                        required
                        value={formData.to}
                        onChange={(e) => setFormData({ ...formData, to: e.target.value })}
                        className="w-full px-3 py-2.5 bg-paper border border-paper-line rounded-lg text-xs sm:text-sm text-ink outline-none focus:border-teal-deep"
                        placeholder="e.g. Jeddah (JED)"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-softText mb-1">Departure Date</label>
                      <input
                        type="date"
                        required
                        value={formData.departDate}
                        onChange={(e) => setFormData({ ...formData, departDate: e.target.value })}
                        className="w-full px-3 py-2.5 bg-paper border border-paper-line rounded-lg text-xs sm:text-sm text-ink outline-none focus:border-teal-deep"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-softText mb-1">Passengers</label>
                      <select
                        value={formData.passengers}
                        onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                        className="w-full px-3 py-2.5 bg-paper border border-paper-line rounded-lg text-xs sm:text-sm text-ink outline-none focus:border-teal-deep"
                      >
                        <option value="1">1 Passenger (Economy)</option>
                        <option value="2">2 Passengers</option>
                        <option value="3+">3+ Family Group</option>
                        <option value="Business">1 Passenger (Business Class)</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Hotel Fields */}
                {activeTab === 'hotel' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-softText mb-1">City / Destination</label>
                      <input
                        type="text"
                        required
                        value={formData.hotelLocation}
                        onChange={(e) => setFormData({ ...formData, hotelLocation: e.target.value })}
                        className="w-full px-3 py-2.5 bg-paper border border-paper-line rounded-lg text-xs sm:text-sm text-ink outline-none focus:border-teal-deep"
                        placeholder="Makkah, Madinah, Riyadh..."
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-softText mb-1">Check-in Date</label>
                      <input
                        type="date"
                        required
                        value={formData.checkIn}
                        onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                        className="w-full px-3 py-2.5 bg-paper border border-paper-line rounded-lg text-xs sm:text-sm text-ink outline-none focus:border-teal-deep"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-softText mb-1">Check-out Date</label>
                      <input
                        type="date"
                        required
                        value={formData.checkOut}
                        onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                        className="w-full px-3 py-2.5 bg-paper border border-paper-line rounded-lg text-xs sm:text-sm text-ink outline-none focus:border-teal-deep"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-softText mb-1">Rooms & Guests</label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-3 py-2.5 bg-paper border border-paper-line rounded-lg text-xs sm:text-sm text-ink outline-none focus:border-teal-deep"
                      >
                        <option value="1">1 Room, 1 Guest</option>
                        <option value="2">1 Room, 2 Guests</option>
                        <option value="Family">2 Rooms, Family Suite</option>
                        <option value="5-Star">5-Star Haram View Suite</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Tour & Umrah Fields */}
                {(activeTab === 'tour' || activeTab === 'umrah') && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-softText mb-1">Package Selection</label>
                      <select
                        value={formData.packageType}
                        onChange={(e) => setFormData({ ...formData, packageType: e.target.value })}
                        className="w-full px-3 py-2.5 bg-paper border border-paper-line rounded-lg text-xs sm:text-sm text-ink outline-none focus:border-teal-deep"
                      >
                        <option value="Umrah Group 7 Days">Umrah Group Package (7 Days)</option>
                        <option value="Umrah VIP Private 5 Days">VIP Executive Umrah (5-Star Haram View)</option>
                        <option value="Red Sea Holiday 4 Days">Red Sea Resort Gateway (4 Days)</option>
                        <option value="Istanbul Vacation 6 Days">Istanbul Family Vacation (6 Days)</option>
                        <option value="Cairo Heritage 5 Days">Cairo & Pyramids Heritage Tour</option>
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
                      <input
                        type="number"
                        min="1"
                        value={formData.passengers}
                        onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                        className="w-full px-3 py-2.5 bg-paper border border-paper-line rounded-lg text-xs sm:text-sm text-ink outline-none focus:border-teal-deep"
                        placeholder="e.g. 2"
                      />
                    </div>
                  </div>
                )}

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
                      <span>{loading ? 'Searching...' : 'Search Availability'}</span>
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
