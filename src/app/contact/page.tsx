'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Building,
  CheckCircle2,
  ShieldCheck,
  Globe,
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'business',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          serviceCategory: formData.service,
          details: { message: formData.message },
        }),
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-paper text-text pb-20">
      {/* Header Banner */}
      <section className="bg-ink text-white py-16 border-b border-gold/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(18,58,51,0.5),transparent_60%)] pointer-events-none" />
        <div className="max-w-[1480px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 text-center">
          <span className="text-gold font-display font-semibold uppercase tracking-wider text-xs block mb-2">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-paper mb-4">
            Contact FAIZA AL MARWA
          </h1>
          <p className="text-paper/75 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Headquartered in Riyadh with regional coverage across Jeddah, Dammam, and international hubs. Connect with our dedicated advisory team.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <div className="max-w-[1480px] mx-auto px-4 sm:px-8 lg:px-12 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Office Locations & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* HQ Card */}
            <div className="p-6 rounded-xl bg-paper-card border border-paper-line shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-teal-deep text-gold flex items-center justify-center">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-ink">Riyadh Headquarters</h3>
                  <span className="text-xs text-text-soft">Kingdom of Saudi Arabia</span>
                </div>
              </div>

              <div className="space-y-3 text-xs text-text-soft">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>King Fahd Road, Al Olaya District, P.O. Box 11564, Riyadh, KSA</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-gold shrink-0" />
                  <span>+966 11 000 0000 / +966 50 000 0000</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-gold shrink-0" />
                  <span>info@faizaalmarwa.com</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-gold shrink-0" />
                  <span>Sun – Thu: 8:00 AM – 6:00 PM (AST)</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-paper-line flex items-center gap-3">
                <a
                  href="https://wa.me/966500000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Concierge</span>
                </a>
              </div>
            </div>

            {/* Regional Desks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-paper-card border border-paper-line text-xs">
                <strong className="block text-ink text-sm mb-1">Jeddah Regional Desk</strong>
                <p className="text-text-soft mb-2">King Abdulaziz Road, Al Shatie, Jeddah</p>
                <span className="text-teal-deep font-semibold">jeddah@faizaalmarwa.com</span>
              </div>
              <div className="p-4 rounded-lg bg-paper-card border border-paper-line text-xs">
                <strong className="block text-ink text-sm mb-1">Dammam Hub</strong>
                <p className="text-text-soft mb-2">King Saud St, Al Hussam, Dammam</p>
                <span className="text-teal-deep font-semibold">dammam@faizaalmarwa.com</span>
              </div>
            </div>

            {/* Department Hotlines */}
            <div className="p-5 rounded-xl bg-teal-deep text-white">
              <h4 className="font-display font-bold text-sm text-gold uppercase tracking-wider mb-3">
                Department Direct Lines
              </h4>
              <div className="space-y-2 text-xs text-paper/85">
                <div className="flex justify-between py-1 border-b border-teal-mid">
                  <span>Business Setup &amp; MISA Desk</span>
                  <span className="font-mono text-gold">+966 11 000 0001</span>
                </div>
                <div className="flex justify-between py-1 border-b border-teal-mid">
                  <span>Flight Ticketing &amp; Umrah Desk</span>
                  <span className="font-mono text-gold">+966 11 000 0002</span>
                </div>
                <div className="flex justify-between py-1 border-b border-teal-mid">
                  <span>Corporate Manpower Recruitment</span>
                  <span className="font-mono text-gold">+966 11 000 0003</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Digital Agency &amp; Software</span>
                  <span className="font-mono text-gold">+966 11 000 0004</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Consultation Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-paper-card border border-paper-line shadow-sm">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-ink">Inquiry Received!</h3>
                  <p className="text-text-soft text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. A specialized consultant from our Riyadh office will contact you within 2 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', service: 'business', message: '' });
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-gold hover:bg-gold-light text-ink font-semibold text-xs transition-all shadow"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div>
                  <div className="mb-6">
                    <span className="text-gold font-display font-semibold uppercase tracking-wider text-xs block mb-1">
                      Direct Advisory
                    </span>
                    <h2 className="text-2xl font-display font-bold text-ink">
                      Send a Message or Request Consultation
                    </h2>
                    <p className="text-text-soft text-xs sm:text-sm mt-1">
                      Fill out the form below and our team will prepare the necessary documentation and pricing details.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-text mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Abdullah Al-Otaibi"
                          className="w-full px-3 py-2 rounded-md border border-paper-line bg-paper text-xs text-ink focus:outline-none focus:border-gold"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-text mb-1">Phone / WhatsApp Number *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+966 50 000 0000"
                          className="w-full px-3 py-2 rounded-md border border-paper-line bg-paper text-xs text-ink focus:outline-none focus:border-gold"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-text mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full px-3 py-2 rounded-md border border-paper-line bg-paper text-xs text-ink focus:outline-none focus:border-gold"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-text mb-1">Service Required *</label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-3 py-2 rounded-md border border-paper-line bg-paper text-xs text-ink focus:outline-none focus:border-gold"
                        >
                          <option value="business">Business Setup &amp; MISA</option>
                          <option value="visa">Visa &amp; Iqama Immigration</option>
                          <option value="travel">Travel, Flights &amp; Hotels</option>
                          <option value="umrah">Umrah Pilgrimage Packages</option>
                          <option value="manpower">Corporate Manpower Supply</option>
                          <option value="digital">Digital Agency &amp; Web Development</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-text mb-1">Inquiry / Project Details *</label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please tell us about your requirements, headcount, target timeline, or destination..."
                        className="w-full px-3 py-2 rounded-md border border-paper-line bg-paper text-xs text-ink focus:outline-none focus:border-gold"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-md bg-gold hover:bg-gold-light text-ink font-semibold text-xs transition-all shadow-md active:scale-95 disabled:opacity-50"
                    >
                      {loading ? <span>Sending...</span> : (
                        <>
                          <span>Submit Message to Advisory Team</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
