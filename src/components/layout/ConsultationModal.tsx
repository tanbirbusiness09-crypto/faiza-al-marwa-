'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, Phone, Mail, User, Building, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { smoothEase, hoverButton } from '@/lib/animations';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Business Setup',
    company: '',
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
          type: 'consultation',
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          details: {
            service: formData.service,
            company: formData.company,
            message: formData.message,
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
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-ink/75 backdrop-blur-sm"
          />

          {/* Dialog Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ duration: 0.25, ease: smoothEase }}
            className="bg-paper-white w-full max-w-lg rounded-2xl shadow-2xl border border-paper-line overflow-hidden relative z-10"
          >
            {/* Header */}
            <div className="bg-teal-deep text-white px-6 py-5 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-gold-light uppercase tracking-wider block mb-1">
                  Expert Advisory
                </span>
                <h3 className="text-xl font-bold text-white font-display">
                  Request a Free Consultation
                </h3>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Content */}
            <div className="p-6">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-ink mb-2">Thank You, {formData.name}!</h4>
                  <p className="text-sm text-softText max-w-sm mx-auto mb-6">
                    Your consultation request has been received. Our senior advisor will call you directly at <strong>{formData.phone}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      onClose();
                    }}
                    className="px-6 py-2.5 bg-gold hover:bg-gold-light text-ink font-semibold rounded-lg transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-softText mb-1.5">
                      Service of Interest *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-paper border border-paper-line rounded-lg text-xs sm:text-sm text-ink outline-none focus:border-teal-deep"
                    >
                      <option value="Business Setup">100% Foreign Business Setup (MISA)</option>
                      <option value="Visa Services">Work & Employment Visa Stamping</option>
                      <option value="Manpower Supply">Corporate Manpower & Staffing</option>
                      <option value="Travel & Umrah">Corporate Travel & VIP Umrah</option>
                      <option value="Digital Services">Custom Web & Tech Solutions</option>
                      <option value="Other">Other Custom Inquiries</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-softText mb-1.5">
                        Your Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-softText absolute left-3 top-3" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Ahmed Al-Otaibi"
                          className="w-full pl-9 pr-3.5 py-2.5 bg-paper border border-paper-line rounded-lg text-xs sm:text-sm text-ink outline-none focus:border-teal-deep"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-softText mb-1.5">
                        WhatsApp / Phone *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-softText absolute left-3 top-3" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+966 5X XXX XXXX"
                          className="w-full pl-9 pr-3.5 py-2.5 bg-paper border border-paper-line rounded-lg text-xs sm:text-sm text-ink outline-none focus:border-teal-deep"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-softText mb-1.5">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-softText absolute left-3 top-3" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full pl-9 pr-3.5 py-2.5 bg-paper border border-paper-line rounded-lg text-xs sm:text-sm text-ink outline-none focus:border-teal-deep"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-softText mb-1.5">
                        Company Name
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-softText absolute left-3 top-3" />
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Company LLC"
                          className="w-full pl-9 pr-3.5 py-2.5 bg-paper border border-paper-line rounded-lg text-xs sm:text-sm text-ink outline-none focus:border-teal-deep"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-softText mb-1.5">
                      How can we assist you?
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-softText absolute left-3 top-3" />
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Briefly describe your requirements..."
                        className="w-full pl-9 pr-3.5 py-2 bg-paper border border-paper-line rounded-lg text-xs sm:text-sm text-ink outline-none focus:border-teal-deep resize-none"
                      />
                    </div>
                  </div>

                  <motion.button
                    {...hoverButton}
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-teal-deep hover:bg-teal-mid text-white font-bold rounded-lg text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Send className="w-4 h-4 text-gold-light" />
                    <span>{loading ? 'Submitting...' : 'Submit Request'}</span>
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
