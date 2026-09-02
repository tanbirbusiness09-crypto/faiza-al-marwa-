'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Search, CheckCircle2, Clock, AlertCircle, ArrowLeft, ShieldCheck, User, Calendar, FileText, MapPin } from 'lucide-react';

interface TrackingRecord {
  applicantName: string;
  passportNumber: string;
  profession: string;
  company: string;
  destination: string;
  status: 'In Progress' | 'Approved' | 'Dispatched';
  stages: { name: string; date: string; completed: boolean }[];
}

const MOCK_RECORDS: Record<string, TrackingRecord> = {
  'A12345678': {
    applicantName: 'Mohammad Tariqul Islam',
    passportNumber: 'A12345678',
    profession: 'Industrial Electrician',
    company: 'Saudi Binladin Construction Group',
    destination: 'Riyadh, Saudi Arabia',
    status: 'Approved',
    stages: [
      { name: 'Trade Testing & Medical Clearance', date: '10 Aug 2026', completed: true },
      { name: 'Qiwa Electronic Contract Verified', date: '16 Aug 2026', completed: true },
      { name: 'Embassy Visa Stamping Completed', date: '24 Aug 2026', completed: true },
      { name: 'Flight Ticket Issued & Mobilization', date: '04 Sep 2026', completed: false },
    ],
  },
  'B98765432': {
    applicantName: 'Abdul Rahman Siddique',
    passportNumber: 'B98765432',
    profession: 'HVAC Maintenance Specialist',
    company: 'Al-Marwa Facility Management',
    destination: 'Jeddah, Saudi Arabia',
    status: 'In Progress',
    stages: [
      { name: 'Trade Testing & Medical Clearance', date: '18 Aug 2026', completed: true },
      { name: 'Qiwa Electronic Contract Verified', date: '28 Aug 2026', completed: true },
      { name: 'Embassy Visa Stamping In Progress', date: 'Pending', completed: false },
      { name: 'Flight Ticket & Deployment', date: 'Pending', completed: false },
    ],
  },
};

export default function WorkerStatusPage() {
  const { t } = useLanguage();
  const [searchId, setSearchId] = useState('');
  const [searched, setSearched] = useState(false);
  const [result, setResult] = useState<TrackingRecord | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
    const cleanId = searchId.trim().toUpperCase();
    const found = MOCK_RECORDS[cleanId] || null;
    setResult(found);
  };

  return (
    <div className="container-custom py-12 sm:py-16">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link
          href="/#home"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-deep hover:text-gold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="max-w-3xl mx-auto text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold text-xs font-bold tracking-wider uppercase mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Verified Government Portal Sync</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-ink">
          {t('status_tracker_title', 'Track Worker / Visa Status')}
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-softText max-w-xl mx-auto">
          {t('status_tracker_sub', 'Enter your Passport Number or Application ID to check real-time mobilization progress.')}
        </p>
      </div>

      {/* Search Card */}
      <div className="max-w-2xl mx-auto bg-paper-white border border-paper-line rounded-2xl p-6 sm:p-8 shadow-sm mb-10">
        <form onSubmit={handleSearch} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-softText mb-1.5">
              Passport Number or Application ID
            </label>
            <div className="relative">
              <Search className="w-5 h-5 text-softText/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                placeholder="e.g. A12345678 or B98765432"
                className="w-full pl-11 pr-4 py-3 bg-paper border border-paper-line rounded-xl text-sm font-semibold text-ink outline-none focus:border-teal-deep uppercase"
              />
            </div>
            <div className="flex gap-2 mt-2 text-[11px] text-softText">
              <span>Demo IDs for instant test:</span>
              <button
                type="button"
                onClick={() => setSearchId('A12345678')}
                className="text-teal-deep font-bold underline"
              >
                A12345678
              </button>
              <span>or</span>
              <button
                type="button"
                onClick={() => setSearchId('B98765432')}
                className="text-teal-deep font-bold underline"
              >
                B98765432
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-gold hover:bg-gold-light text-ink font-bold rounded-xl text-sm transition-transform active:scale-95 shadow-sm"
          >
            Check Real-Time Status
          </button>
        </form>
      </div>

      {/* Result Display */}
      {searched && (
        <div className="max-w-2xl mx-auto animate-in fade-in zoom-in-95 duration-200">
          {result ? (
            <div className="bg-paper-white border border-paper-line rounded-2xl overflow-hidden shadow-md">
              {/* Status Header */}
              <div className="bg-teal-deep text-white p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] text-gold-light uppercase font-bold tracking-wider">
                    VERIFIED APPLICATION FILE
                  </span>
                  <h3 className="text-xl font-bold font-display text-white mt-0.5">
                    {result.applicantName}
                  </h3>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{result.status}</span>
                </div>
              </div>

              {/* Details Grid */}
              <div className="p-6 grid grid-cols-2 gap-4 border-b border-paper-line bg-paper/30 text-xs">
                <div>
                  <span className="text-softText block">Passport Number:</span>
                  <strong className="text-ink font-mono text-sm">{result.passportNumber}</strong>
                </div>
                <div>
                  <span className="text-softText block">Assigned Profession:</span>
                  <strong className="text-ink text-sm">{result.profession}</strong>
                </div>
                <div>
                  <span className="text-softText block">Sponsoring Employer:</span>
                  <strong className="text-ink text-sm">{result.company}</strong>
                </div>
                <div>
                  <span className="text-softText block">Destination Hub:</span>
                  <strong className="text-ink text-sm">{result.destination}</strong>
                </div>
              </div>

              {/* Progress Stepper */}
              <div className="p-6 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-softText">
                  Mobilization & Visa Stages
                </h4>
                <div className="space-y-3">
                  {result.stages.map((stage, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center justify-between p-3 rounded-lg border ${
                        stage.completed
                          ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                          : 'bg-paper border-paper-line text-softText'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                            stage.completed
                              ? 'bg-emerald-600 text-white'
                              : 'bg-paper-line text-softText'
                          }`}
                        >
                          {idx + 1}
                        </div>
                        <span className="text-xs sm:text-sm font-semibold">{stage.name}</span>
                      </div>
                      <span className="text-[11px] font-mono font-medium">{stage.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-paper-white border border-paper-line rounded-2xl p-8 text-center space-y-2">
              <AlertCircle className="w-10 h-10 text-amber-600 mx-auto" />
              <h3 className="text-base font-bold text-ink font-display">No Record Found</h3>
              <p className="text-xs text-softText max-w-sm mx-auto">
                We couldn&apos;t find an active file with Passport Number &ldquo;{searchId}&rdquo;. Please verify your ID or contact our recruitment desk on WhatsApp.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
