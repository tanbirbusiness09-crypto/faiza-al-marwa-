'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  LayoutDashboard,
  Kanban,
  Settings as SettingsIcon,
  Layers,
  Plane,
  MapPin,
  Briefcase,
  UserCheck,
  Newspaper,
  Star,
  HelpCircle,
  Inbox,
  Plus,
  Trash2,
  Edit3,
  Save,
  Download,
  Search,
  ExternalLink,
  CheckCircle2,
  Lock,
  Eye,
  MessageSquare,
  Sliders,
  X,
  ChevronRight,
  Sparkles,
  ArrowRight,
  TrendingUp,
  History,
  Copy,
  Send,
  RefreshCw,
} from 'lucide-react';
import {
  INITIAL_CMS_DATABASE,
  CMSDatabase,
  CMSService,
  CMSTravelPackage,
  CMSDestination,
  CMSJobPosting,
  CMSWorkerStatus,
  CMSNewsArticle,
  CMSTestimonial,
  CMSFAQ,
  CMSInquiry,
} from '@/lib/cmsStore';

type AdminTab =
  | 'dashboard'
  | 'kanban'
  | 'site_setup'
  | 'services'
  | 'travel_packages'
  | 'destinations'
  | 'jobs'
  | 'workers'
  | 'news'
  | 'testimonials'
  | 'faqs'
  | 'inquiries'
  | 'audit_log'
  | 'settings';

interface AuditEvent {
  id: string;
  time: string;
  user: string;
  action: string;
  detail: string;
  type: 'lead' | 'update' | 'worker' | 'system';
}

const INITIAL_AUDIT_EVENTS: AuditEvent[] = [
  { id: 'ev-1', time: '10 mins ago', user: 'Admin (Riyadh)', action: 'Worker Milestone Advanced', detail: 'Mohammed Faruk (FAM-MOB-84920) updated to Stage 4 (Flight Ticket Issued)', type: 'worker' },
  { id: 'ev-2', time: '25 mins ago', user: 'System CRM', action: 'New Lead Submission', detail: 'Tariq Al-Mansoor submitted 100% Foreign LLC Setup inquiry', type: 'lead' },
  { id: 'ev-3', time: '1 hour ago', user: 'Admin (Riyadh)', action: 'Package Price Updated', detail: 'Istanbul & Bosphorus Explorer updated to SAR 4,100', type: 'update' },
  { id: 'ev-4', time: '3 hours ago', user: 'System Portal', action: 'Job Application Received', detail: 'Kamrul Hassan applied for Industrial Electrician role', type: 'lead' },
  { id: 'ev-5', time: 'Yesterday', user: 'Admin (Riyadh)', action: 'Site Settings Saved', detail: 'Updated Riyadh HQ direct desk phone lines & WhatsApp hotline', type: 'system' },
];

export default function UltraPremiumEnterpriseAdmin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [activeTab, setActiveTab] = useState<AdminTab>('dashboard');
  const [cmsData, setCmsData] = useState<CMSDatabase>(INITIAL_CMS_DATABASE);
  const [auditEvents, setAuditEvents] = useState<AuditEvent[]>(INITIAL_AUDIT_EVENTS);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Command Palette & Notifications
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [paletteQuery, setPaletteQuery] = useState('');
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  // Riyadh Live Clock
  const [riyadhTime, setRiyadhTime] = useState('');

  // Modals & Drawers
  const [editingService, setEditingService] = useState<CMSService | null>(null);
  const [editingTravel, setEditingTravel] = useState<CMSTravelPackage | null>(null);
  const [editingDestination, setEditingDestination] = useState<CMSDestination | null>(null);
  const [editingJob, setEditingJob] = useState<CMSJobPosting | null>(null);
  const [editingWorker, setEditingWorker] = useState<CMSWorkerStatus | null>(null);
  const [editingNews, setEditingNews] = useState<CMSNewsArticle | null>(null);
  const [editingReview, setEditingReview] = useState<CMSTestimonial | null>(null);
  const [editingFAQ, setEditingFAQ] = useState<CMSFAQ | null>(null);
  const [inspectInquiry, setInspectInquiry] = useState<CMSInquiry | null>(null);
  const [whatsAppModalInquiry, setWhatsAppModalInquiry] = useState<CMSInquiry | null>(null);

  // Clock Ticker
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Riyadh',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setRiyadhTime(now.toLocaleTimeString('en-US', options) + ' (AST / Riyadh)');
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Keyboard shortcut for Command Palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setCommandPaletteOpen(false);
        setNotificationsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Load CMS Data on start
  useEffect(() => {
    const saved = localStorage.getItem('faiza_cms_data');
    if (saved) {
      try {
        setCmsData(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse cached CMS data', e);
      }
    }
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const addAudit = (action: string, detail: string, type: AuditEvent['type'] = 'update') => {
    const newEvent: AuditEvent = {
      id: `ev-${Date.now()}`,
      time: 'Just now',
      user: 'Admin (Riyadh)',
      action,
      detail,
      type,
    };
    setAuditEvents((prev) => [newEvent, ...prev]);
  };

  const saveAllChanges = (updatedData: CMSDatabase = cmsData, logMsg?: string) => {
    setCmsData(updatedData);
    localStorage.setItem('faiza_cms_data', JSON.stringify(updatedData));
    fetch('/api/cms', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedData),
    }).catch((err) => console.error(err));
    if (logMsg) addAudit('Data Updated', logMsg, 'update');
    showToast('Saved & Synchronized Live across Platform!');
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === 'FAIZA2030' || passcode === 'admin' || passcode === '') {
      setIsAuthenticated(true);
      addAudit('Admin Session Authenticated', 'Master Key verified successfully', 'system');
    } else {
      alert('Access Code is FAIZA2030 (Demo Mode)');
      setIsAuthenticated(true);
    }
  };

  const exportJSONBackup = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(cmsData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `faiza_al_marwa_full_backup_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    addAudit('Full Backup Exported', 'JSON snapshot downloaded to local machine', 'system');
    showToast('Full website backup exported as JSON!');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0C1E1B] text-paper px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,134,47,0.15),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(18,58,51,0.5),transparent_60%)] pointer-events-none" />

        <div className="w-full max-w-md bg-[#122A25]/90 border border-gold/30 rounded-2xl p-8 sm:p-10 shadow-2xl relative z-10 backdrop-blur-md text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-deep to-[#0E2621] border border-gold/50 flex items-center justify-center mx-auto mb-6 shadow-lg">
            <span className="text-2xl">👑</span>
          </div>

          <span className="text-[11px] font-display font-semibold uppercase tracking-widest text-gold block mb-1">
            FAIZA AL MARWA COMPANY LTD
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">Executive Command Center</h2>
          <p className="text-paper/70 text-xs mb-8 leading-relaxed">
            Central management platform for website content, services, packages, worker visas, and CRM leads.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <Lock className="w-4 h-4 text-gold/70 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter Access Key (or click Sign In)"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gold/30 bg-[#0A1815] text-sm text-white placeholder:text-paper/40 focus:outline-none focus:border-gold text-center font-mono tracking-wider"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-gold to-gold-light hover:brightness-110 text-ink font-bold text-xs uppercase tracking-wider transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Authenticate &amp; Open Portal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-paper/10 text-[11px] text-paper/60 flex items-center justify-between">
            <span>Demo Master Key:</span>
            <strong className="text-gold font-mono font-bold">FAIZA2030</strong>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0E1F1B] text-paper flex flex-col font-sans selection:bg-gold selection:text-ink">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3 rounded-xl bg-teal-deep text-paper border border-gold/60 shadow-2xl animate-fade-in text-xs font-semibold backdrop-blur-md">
          <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* ================= TOP EXECUTIVE BAR ================= */}
      <header className="bg-[#122E28] border-b border-gold/25 px-4 sm:px-8 py-3 flex items-center justify-between sticky top-0 z-40 shadow-md">
        {/* Left: Brand Seal & Title */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-deep to-ink border border-gold/50 flex items-center justify-center text-gold font-bold text-xs shadow">
              👑
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-sm text-white tracking-wide">
                  FAIZA AL MARWA
                </span>
                <span className="px-1.5 py-0.2 rounded bg-gold/20 text-gold text-[9px] font-bold uppercase tracking-wider border border-gold/30">
                  Enterprise Command Center
                </span>
              </div>
              <span className="text-[10px] text-paper/60 block font-mono">
                {riyadhTime || 'AST (Riyadh GMT+3)'}
              </span>
            </div>
          </div>
        </div>

        {/* Center: Command Palette Trigger */}
        <button
          onClick={() => setCommandPaletteOpen(true)}
          className="hidden md:flex items-center gap-3 px-4 py-1.5 rounded-lg bg-[#0A1A17] border border-paper/15 hover:border-gold/40 text-paper/60 hover:text-paper text-xs transition-all shadow-inner"
        >
          <Search className="w-3.5 h-3.5 text-gold" />
          <span>Type a command or search anything...</span>
          <span className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] font-mono text-paper/70 font-semibold">
            Ctrl + K
          </span>
        </button>

        {/* Right Action Icons */}
        <div className="flex items-center gap-3">
          {/* Notifications Trigger */}
          <div className="relative">
            <button
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-paper border border-white/10 relative transition-colors"
            >
              <Inbox className="w-4 h-4 text-gold" />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-[9px] font-bold flex items-center justify-center">
                {cmsData.inquiries.filter((i) => i.status === 'new').length || 3}
              </span>
            </button>

            {/* Notifications Dropdown */}
            {notificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-[#14332D] border border-gold/30 rounded-xl shadow-2xl p-4 z-50 space-y-3">
                <div className="flex items-center justify-between border-b border-paper/10 pb-2">
                  <span className="font-display font-bold text-xs text-white">Live System Events</span>
                  <span className="text-[10px] text-gold font-mono font-semibold">3 New Leads</span>
                </div>
                <div className="space-y-2 max-h-60 overflow-y-auto text-xs">
                  {cmsData.inquiries.slice(0, 3).map((inq) => (
                    <div
                      key={inq.id}
                      onClick={() => {
                        setInspectInquiry(inq);
                        setNotificationsOpen(false);
                      }}
                      className="p-2.5 rounded-lg bg-[#0E2621] hover:bg-[#1B433B] border border-paper/5 cursor-pointer transition-colors"
                    >
                      <div className="flex justify-between items-center mb-1">
                        <strong className="text-white text-xs font-semibold">{inq.name}</strong>
                        <span className="text-[9px] text-gold font-mono">{inq.id}</span>
                      </div>
                      <p className="text-paper/70 text-[11px] truncate">{inq.serviceCategory} — {inq.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/"
            target="_blank"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-paper text-xs font-semibold border border-white/15 transition-all"
          >
            <ExternalLink className="w-3.5 h-3.5 text-gold" />
            <span>Live Site</span>
          </Link>

          <button
            onClick={() => saveAllChanges(cmsData, 'Manual Save All triggered from Topbar')}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-gradient-to-r from-gold to-gold-light text-ink text-xs font-bold shadow-md hover:brightness-110 active:scale-95 transition-all"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Save All</span>
          </button>

          <button
            onClick={() => setIsAuthenticated(false)}
            className="px-3 py-1.5 rounded-lg bg-red-950/50 hover:bg-red-900/70 text-red-300 text-xs font-semibold border border-red-800/40 transition-colors"
          >
            Sign Out
          </button>
        </div>
      </header>

      {/* ================= COMMAND PALETTE MODAL (CTRL+K) ================= */}
      {commandPaletteOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-[#122E28] w-full max-w-xl rounded-2xl border border-gold/40 shadow-2xl overflow-hidden animate-scale-up">
            <div className="flex items-center gap-3 px-4 py-3 border-b border-paper/15 bg-[#0C221D]">
              <Search className="w-4 h-4 text-gold" />
              <input
                type="text"
                autoFocus
                value={paletteQuery}
                onChange={(e) => setPaletteQuery(e.target.value)}
                placeholder="Jump to any module or execute command (e.g. Tours, Jobs, CRM, Hero, Backup)..."
                className="w-full bg-transparent text-sm text-white focus:outline-none placeholder:text-paper/40"
              />
              <span className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] font-mono text-paper/60">ESC</span>
            </div>

            <div className="p-3 space-y-1 max-h-80 overflow-y-auto text-xs">
              {[
                { label: '📊 Dashboard Overview & Metrics', tab: 'dashboard', desc: 'Real-time counters and conversions' },
                { label: '🎛️ Kanban Leads Pipeline & CRM', tab: 'kanban', desc: 'Visual stages and WhatsApp generator' },
                { label: '🏠 Edit Hero Headline & Contact Numbers', tab: 'site_setup', desc: 'Update numbers, WhatsApp and copy' },
                { label: '🏢 Manage Services & Deliverables', tab: 'services', desc: 'Add or edit 6+ service verticals' },
                { label: '✈️ Manage International Tour Packages', tab: 'travel_packages', desc: 'Edit tour routes, prices, and itineraries' },
                { label: '🌍 Destinations & City Skylines', tab: 'destinations', desc: 'Manage destination cards and tours' },
                { label: '💼 Job Openings & Candidate CVs', tab: 'jobs', desc: 'Recruitment portal and applicant status' },
                { label: '🔍 Worker Visa Mobilization Stepper', tab: 'workers', desc: 'Track passport milestones 1 to 5' },
                { label: '📥 Customer Inquiries & Leads', tab: 'inquiries', desc: 'View submissions and export CSV' },
                { label: '📜 Live Audit Trail & History', tab: 'audit_log', desc: 'View real-time event log' },
                { label: '⚙️ Full System Backup & Restore', tab: 'settings', desc: 'Download JSON snapshot of website' },
              ]
                .filter((item) => !paletteQuery || item.label.toLowerCase().includes(paletteQuery.toLowerCase()) || item.desc.toLowerCase().includes(paletteQuery.toLowerCase()))
                .map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveTab(item.tab as AdminTab);
                      setCommandPaletteOpen(false);
                      setPaletteQuery('');
                    }}
                    className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-[#1A4139] text-left transition-colors group"
                  >
                    <div>
                      <strong className="block text-white text-xs group-hover:text-gold">{item.label}</strong>
                      <span className="text-[11px] text-paper/60">{item.desc}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-paper/40 group-hover:text-gold" />
                  </button>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* ================= MAIN SPLIT WORKSPACE ================= */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Left Dark Luxury Sidebar */}
        <aside className="w-full md:w-64 bg-[#112924] border-r border-paper/10 flex flex-col shrink-0">
          <div className="p-4 space-y-4">
            {/* Group 1: Command & Overview */}
            <div>
              <span className="text-[10px] uppercase font-bold text-gold tracking-widest block mb-2 px-2">
                Command &amp; Pipeline
              </span>
              <nav className="space-y-1">
                {[
                  { id: 'dashboard', label: 'Dashboard Overview', icon: LayoutDashboard },
                  { id: 'kanban', label: 'Kanban Leads CRM', icon: Kanban, badge: cmsData.inquiries.length },
                  { id: 'audit_log', label: 'Live Audit Trail', icon: History },
                ].map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id as AdminTab)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                        isActive
                          ? 'bg-gradient-to-r from-teal-deep to-[#164037] text-white border border-gold/40 shadow-sm'
                          : 'text-paper/70 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className={`w-4 h-4 ${isActive ? 'text-gold' : 'text-paper/50'}`} />
                        <span>{item.label}</span>
                      </div>
                      {item.badge && (
                        <span className="px-1.5 py-0.2 rounded-full bg-gold text-ink text-[10px] font-bold">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Group 2: Website & Offerings */}
            <div>
              <span className="text-[10px] uppercase font-bold text-gold tracking-widest block mb-2 px-2">
                Website &amp; Inventory
              </span>
              <nav className="space-y-1">
                {[
                  { id: 'site_setup', label: 'Hero & Contacts', icon: Sliders },
                  { id: 'services', label: 'Services & Deliverables', icon: Layers },
                  { id: 'travel_packages', label: 'Tour Packages', icon: Plane },
                  { id: 'destinations', label: 'Destinations Hub', icon: MapPin },
                ].map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id as AdminTab)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                        isActive
                          ? 'bg-gradient-to-r from-teal-deep to-[#164037] text-white border border-gold/40 shadow-sm'
                          : 'text-paper/70 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className={`w-4 h-4 ${isActive ? 'text-gold' : 'text-paper/50'}`} />
                        <span>{item.label}</span>
                      </div>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Group 3: Recruitment & Visas */}
            <div>
              <span className="text-[10px] uppercase font-bold text-gold tracking-widest block mb-2 px-2">
                HR &amp; Visa Operations
              </span>
              <nav className="space-y-1">
                {[
                  { id: 'jobs', label: 'Jobs & Candidates', icon: Briefcase, badge: cmsData.applicants.length },
                  { id: 'workers', label: 'Worker Visa Stepper', icon: UserCheck, badge: cmsData.workers.length },
                ].map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id as AdminTab)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                        isActive
                          ? 'bg-gradient-to-r from-teal-deep to-[#164037] text-white border border-gold/40 shadow-sm'
                          : 'text-paper/70 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className={`w-4 h-4 ${isActive ? 'text-gold' : 'text-paper/50'}`} />
                        <span>{item.label}</span>
                      </div>
                      {item.badge && (
                        <span className="px-1.5 py-0.2 rounded-full bg-teal-mid text-white text-[10px] font-bold">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Group 4: Content & System */}
            <div>
              <span className="text-[10px] uppercase font-bold text-gold tracking-widest block mb-2 px-2">
                Content &amp; System
              </span>
              <nav className="space-y-1">
                {[
                  { id: 'news', label: 'News & Articles', icon: Newspaper },
                  { id: 'testimonials', label: 'Client Reviews', icon: Star },
                  { id: 'faqs', label: 'FAQ Center', icon: HelpCircle },
                  { id: 'inquiries', label: 'Inquiries Table', icon: Inbox },
                  { id: 'settings', label: 'Backup & Restore', icon: SettingsIcon },
                ].map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id as AdminTab)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                        isActive
                          ? 'bg-gradient-to-r from-teal-deep to-[#164037] text-white border border-gold/40 shadow-sm'
                          : 'text-paper/70 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className={`w-4 h-4 ${isActive ? 'text-gold' : 'text-paper/50'}`} />
                        <span>{item.label}</span>
                      </div>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
        </aside>

        {/* Dynamic Center Stage */}
        <main className="flex-1 p-4 sm:p-8 overflow-y-auto max-w-7xl bg-[#0E1F1B]">
          {/* ================= TAB: DASHBOARD ================= */}
          {activeTab === 'dashboard' && (
            <div className="space-y-8 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-gold font-display font-semibold uppercase tracking-wider text-xs block mb-1">
                    Mission Control
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-display font-bold text-white">
                    Executive Operations Dashboard
                  </h1>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab('kanban')}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#14332D] hover:bg-[#1B433B] text-paper text-xs font-semibold border border-gold/30 transition-all"
                  >
                    <Kanban className="w-3.5 h-3.5 text-gold" />
                    <span>Open Kanban CRM</span>
                  </button>
                  <button
                    onClick={exportJSONBackup}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-paper text-xs font-semibold border border-white/20 transition-all"
                  >
                    <Download className="w-3.5 h-3.5 text-gold" />
                    <span>Backup JSON</span>
                  </button>
                </div>
              </div>

              {/* High-Contrast Metrics Row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 rounded-2xl bg-gradient-to-br from-[#14332D] to-[#0E2621] border border-gold/30 shadow-lg relative overflow-hidden">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-paper/70 uppercase">Total Inquiries</span>
                    <Inbox className="w-4 h-4 text-gold" />
                  </div>
                  <div className="text-3xl font-bold font-display text-white">{cmsData.inquiries.length}</div>
                  <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" /> +18% this month
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-gradient-to-br from-[#14332D] to-[#0E2621] border border-gold/30 shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-paper/70 uppercase">Active Services</span>
                    <Layers className="w-4 h-4 text-teal-300" />
                  </div>
                  <div className="text-3xl font-bold font-display text-white">{cmsData.services.length}</div>
                  <span className="text-[11px] text-paper/60 block mt-1">Configured Verticals</span>
                </div>

                <div className="p-5 rounded-2xl bg-gradient-to-br from-[#14332D] to-[#0E2621] border border-gold/30 shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-paper/70 uppercase">Job Applicants</span>
                    <Briefcase className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="text-3xl font-bold font-display text-white">{cmsData.applicants.length}</div>
                  <span className="text-[11px] text-amber-300 font-semibold block mt-1">Across {cmsData.jobs.length} Vacancies</span>
                </div>

                <div className="p-5 rounded-2xl bg-gradient-to-br from-[#14332D] to-[#0E2621] border border-gold/30 shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-paper/70 uppercase">Worker Visas</span>
                    <UserCheck className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-3xl font-bold font-display text-white">{cmsData.workers.length}</div>
                  <span className="text-[11px] text-emerald-400 font-semibold block mt-1">In Active Mobilization</span>
                </div>
              </div>

              {/* Quick Action Dock */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-teal-deep via-[#16443B] to-[#0F2E27] border border-gold/40 shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-display font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-gold" />
                    <span>Quick Management Actions</span>
                  </h3>
                  <span className="text-xs text-gold/80 font-mono">1-Click Fast Trigger</span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  <button
                    onClick={() => {
                      setActiveTab('services');
                      setEditingService({
                        id: `service-${Date.now()}`,
                        title: 'New Service Vertical',
                        category: 'business',
                        categoryLabel: 'Custom Vertical',
                        color: '#123A33',
                        iconName: 'Building2',
                        description: 'Detailed service description...',
                        href: '/services',
                        deliverables: [{ title: 'Feature 1', desc: 'Deliverable details' }],
                      });
                    }}
                    className="px-3.5 py-2 rounded-lg bg-gold hover:bg-gold-light text-ink text-xs font-bold shadow-md transition-all active:scale-95"
                  >
                    + Add New Service
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab('travel_packages');
                      setEditingTravel({
                        id: `tp-${Date.now()}`,
                        cat: 'Holiday',
                        title: 'New Tour Package',
                        from: 'RUH',
                        to: 'IST',
                        duration: '5 Days / 4 Nights',
                        price: '1,500',
                        badge: 'Featured',
                      });
                    }}
                    className="px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-all"
                  >
                    + Add Tour Package
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab('jobs');
                      setEditingJob({
                        id: `job-${Date.now()}`,
                        title: 'New Job Vacancy',
                        category: 'Electrical & Power',
                        location: 'Riyadh, Saudi Arabia',
                        type: 'Full-Time / 2-Year Contract',
                        salary: 'SAR 2,500 / month',
                        vacancies: 10,
                        experience: '3+ Years',
                        requirements: ['Trade Certification', 'Medical Fit'],
                      });
                    }}
                    className="px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-all"
                  >
                    + Post Job Vacancy
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab('workers');
                      setEditingWorker({
                        id: `wrk-${Date.now()}`,
                        refCode: `FAM-MOB-${Math.floor(10000 + Math.random() * 90000)}`,
                        fullName: 'Worker Name',
                        passportNumber: 'Passport#',
                        trade: 'Industrial Electrician',
                        employer: 'Saudi Contracting Co.',
                        currentStage: 1,
                        statusLabel: 'Document Verification Started',
                        updatedAt: 'Today',
                        stages: [
                          { name: 'Document Verification & GAMCA Medical', date: 'Today', status: 'in_progress' },
                          { name: 'Technical Trade Test', date: 'Pending', status: 'pending' },
                          { name: 'Qiwa Contract & Visa Stamping', date: 'Pending', status: 'pending' },
                          { name: 'Flight Ticketing', date: 'Pending', status: 'pending' },
                          { name: 'Airport Reception & Deployment', date: 'Pending', status: 'pending' },
                        ],
                      });
                    }}
                    className="px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-all"
                  >
                    + Register Worker Visa Mobilization
                  </button>
                </div>
              </div>

              {/* Recent Audit & Recent Inquiries Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Inquiries */}
                <div className="p-6 rounded-2xl bg-[#122E28] border border-gold/25 shadow-lg space-y-4">
                  <div className="flex items-center justify-between border-b border-paper/10 pb-3">
                    <h3 className="font-display font-bold text-white text-base">Incoming Leads Stream</h3>
                    <button onClick={() => setActiveTab('kanban')} className="text-xs text-gold font-semibold hover:underline">
                      Kanban Board →
                    </button>
                  </div>
                  <div className="divide-y divide-paper/10">
                    {cmsData.inquiries.map((inq) => (
                      <div key={inq.id} className="py-3 flex items-center justify-between text-xs">
                        <div>
                          <strong className="block text-white font-semibold">{inq.name}</strong>
                          <span className="text-paper/60">{inq.serviceCategory} · {inq.phone}</span>
                        </div>
                        <button
                          onClick={() => setInspectInquiry(inq)}
                          className="px-2.5 py-1 rounded bg-gold/20 hover:bg-gold text-ink font-semibold transition-colors"
                        >
                          Inspect Lead
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Audit Stream */}
                <div className="p-6 rounded-2xl bg-[#122E28] border border-gold/25 shadow-lg space-y-4">
                  <div className="flex items-center justify-between border-b border-paper/10 pb-3">
                    <h3 className="font-display font-bold text-white text-base">Live Audit Activity Stream</h3>
                    <button onClick={() => setActiveTab('audit_log')} className="text-xs text-gold font-semibold hover:underline">
                      View Full History →
                    </button>
                  </div>
                  <div className="space-y-3">
                    {auditEvents.slice(0, 4).map((ev) => (
                      <div key={ev.id} className="flex items-start gap-3 text-xs">
                        <div className="w-2.5 h-2.5 rounded-full bg-gold shrink-0 mt-1.5" />
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <strong className="text-white font-semibold">{ev.action}</strong>
                            <span className="text-[10px] text-gold font-mono">{ev.time}</span>
                          </div>
                          <p className="text-paper/70 text-[11px] mt-0.5">{ev.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= TAB: KANBAN CRM PIPELINE ================= */}
          {activeTab === 'kanban' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-gold font-display font-semibold uppercase tracking-wider text-xs block mb-1">
                    Visual Pipeline
                  </span>
                  <h2 className="text-2xl font-display font-bold text-white">Interactive Leads Kanban Board</h2>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      const newInq: CMSInquiry = {
                        id: `FAM-INQ-${Math.floor(1000 + Math.random() * 9000)}`,
                        name: 'New Corporate Client',
                        phone: '+966 50 000 0000',
                        email: 'client@company.sa',
                        serviceCategory: 'Business Setup',
                        date: 'Today',
                        status: 'new',
                        details: 'Direct inquiry for corporate formation in Riyadh.',
                      };
                      saveAllChanges({ ...cmsData, inquiries: [newInq, ...cmsData.inquiries] }, 'Added new lead via Kanban');
                    }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-gold text-ink text-xs font-bold shadow"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>+ Add Manual Lead</span>
                  </button>
                </div>
              </div>

              {/* 4 Kanban Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {(
                  [
                    { id: 'new', title: '📥 New Inquiries', color: 'border-amber-400/40 bg-amber-950/20' },
                    { id: 'in_review', title: '⏳ Under Review', color: 'border-blue-400/40 bg-blue-950/20' },
                    { id: 'contacted', title: '💬 Contacted / WhatsApp', color: 'border-purple-400/40 bg-purple-950/20' },
                    { id: 'completed', title: '✅ Won & Completed', color: 'border-emerald-400/40 bg-emerald-950/20' },
                  ] as const
                ).map((col) => {
                  const colLeads = cmsData.inquiries.filter((i) => i.status === col.id);
                  return (
                    <div key={col.id} className={`p-4 rounded-2xl border ${col.color} flex flex-col justify-between min-h-[500px] shadow-lg`}>
                      <div>
                        <div className="flex items-center justify-between border-b border-paper/10 pb-2 mb-3">
                          <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">{col.title}</h4>
                          <span className="px-2 py-0.5 rounded-full bg-white/10 text-white text-[10px] font-bold">
                            {colLeads.length}
                          </span>
                        </div>

                        <div className="space-y-3">
                          {colLeads.map((lead) => (
                            <div
                              key={lead.id}
                              className="p-4 rounded-xl bg-[#14332D] border border-gold/30 shadow-md space-y-2 hover:border-gold transition-all cursor-pointer group"
                            >
                              <div className="flex justify-between items-start">
                                <strong className="text-white text-xs group-hover:text-gold transition-colors">
                                  {lead.name}
                                </strong>
                                <span className="font-mono text-[10px] text-gold">{lead.id}</span>
                              </div>
                              <span className="text-[11px] font-semibold text-teal-300 block">{lead.serviceCategory}</span>
                              <p className="text-paper/70 text-[11px] line-clamp-2 leading-relaxed">{lead.details}</p>

                              <div className="pt-2 border-t border-paper/10 flex items-center justify-between text-[10px]">
                                <button
                                  onClick={() => setWhatsAppModalInquiry(lead)}
                                  className="inline-flex items-center gap-1 text-emerald-400 hover:underline font-semibold"
                                >
                                  <MessageSquare className="w-3 h-3" /> WhatsApp Template
                                </button>
                                <button
                                  onClick={() => setInspectInquiry(lead)}
                                  className="text-gold hover:underline font-semibold"
                                >
                                  Move Stage →
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ================= TAB: SITE SETUP WITH LIVE CARD PREVIEW ================= */}
          {activeTab === 'site_setup' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-gold font-display font-semibold uppercase tracking-wider text-xs block mb-1">
                    Live Split-Screen Editor
                  </span>
                  <h2 className="text-2xl font-display font-bold text-white">Hero Copy &amp; Contact Setup</h2>
                </div>
                <button
                  onClick={() => saveAllChanges(cmsData, 'Updated Hero Headline & Contact Numbers')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gold hover:bg-gold-light text-ink text-xs font-bold shadow-md"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Changes</span>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Form Controls (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="p-6 rounded-2xl bg-[#122E28] border border-gold/30 shadow-lg space-y-4">
                    <h3 className="font-display font-bold text-gold text-xs uppercase tracking-wider border-b border-paper/10 pb-2">
                      Hero Headline &amp; Subtitle
                    </h3>

                    <div>
                      <label className="block text-xs font-semibold text-paper/80 mb-1">Hero Eyebrow Tag</label>
                      <input
                        type="text"
                        value={cmsData.settings.heroEyebrow}
                        onChange={(e) =>
                          setCmsData({
                            ...cmsData,
                            settings: { ...cmsData.settings, heroEyebrow: e.target.value },
                          })
                        }
                        className="w-full px-3 py-2.5 rounded-lg border border-paper/20 bg-[#0A1A17] text-xs text-white focus:outline-none focus:border-gold"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-paper/80 mb-1">Hero Main Title (HTML span styled)</label>
                      <input
                        type="text"
                        value={cmsData.settings.heroTitle}
                        onChange={(e) =>
                          setCmsData({
                            ...cmsData,
                            settings: { ...cmsData.settings, heroTitle: e.target.value },
                          })
                        }
                        className="w-full px-3 py-2.5 rounded-lg border border-paper/20 bg-[#0A1A17] text-xs text-white focus:outline-none focus:border-gold font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-paper/80 mb-1">Hero Lead Subtitle</label>
                      <textarea
                        rows={3}
                        value={cmsData.settings.heroSubtitle}
                        onChange={(e) =>
                          setCmsData({
                            ...cmsData,
                            settings: { ...cmsData.settings, heroSubtitle: e.target.value },
                          })
                        }
                        className="w-full px-3 py-2.5 rounded-lg border border-paper/20 bg-[#0A1A17] text-xs text-white focus:outline-none focus:border-gold"
                      />
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#122E28] border border-gold/30 shadow-lg space-y-4">
                    <h3 className="font-display font-bold text-gold text-xs uppercase tracking-wider border-b border-paper/10 pb-2">
                      Contact Hotlines &amp; Official Addresses
                    </h3>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-paper/80 mb-1">Main Phone Line</label>
                        <input
                          type="text"
                          value={cmsData.settings.phoneMain}
                          onChange={(e) =>
                            setCmsData({
                              ...cmsData,
                              settings: { ...cmsData.settings, phoneMain: e.target.value },
                            })
                          }
                          className="w-full px-3 py-2 rounded-lg border border-paper/20 bg-[#0A1A17] text-xs text-white focus:outline-none focus:border-gold"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-paper/80 mb-1">WhatsApp Concierge</label>
                        <input
                          type="text"
                          value={cmsData.settings.whatsappNumber}
                          onChange={(e) =>
                            setCmsData({
                              ...cmsData,
                              settings: { ...cmsData.settings, whatsappNumber: e.target.value },
                            })
                          }
                          className="w-full px-3 py-2 rounded-lg border border-paper/20 bg-[#0A1A17] text-xs text-white focus:outline-none focus:border-gold"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-paper/80 mb-1">Riyadh HQ Physical Address</label>
                      <input
                        type="text"
                        value={cmsData.settings.addressRiyadh}
                        onChange={(e) =>
                          setCmsData({
                            ...cmsData,
                            settings: { ...cmsData.settings, addressRiyadh: e.target.value },
                          })
                        }
                        className="w-full px-3 py-2 rounded-lg border border-paper/20 bg-[#0A1A17] text-xs text-white focus:outline-none focus:border-gold"
                      />
                    </div>
                  </div>
                </div>

                {/* Live Preview Card (5 cols) */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="sticky top-20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold text-gold uppercase tracking-wider flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5" /> Instant Live Website Preview
                      </span>
                      <span className="text-[10px] text-paper/50">Desktop Render</span>
                    </div>

                    <div className="p-6 rounded-2xl bg-paper text-ink border-2 border-gold shadow-2xl space-y-4">
                      <div className="inline-block px-3 py-1 rounded-full bg-gold/15 text-gold text-[10px] font-bold uppercase tracking-wider">
                        {cmsData.settings.heroEyebrow}
                      </div>

                      <h3
                        className="text-xl sm:text-2xl font-display font-bold text-ink leading-tight"
                        dangerouslySetInnerHTML={{ __html: cmsData.settings.heroTitle }}
                      />

                      <p className="text-text-soft text-xs leading-relaxed">
                        {cmsData.settings.heroSubtitle}
                      </p>

                      <div className="pt-4 border-t border-paper-line flex items-center justify-between text-xs font-semibold">
                        <span className="text-teal-deep">Hotline: {cmsData.settings.phoneMain}</span>
                        <span className="text-emerald-700">WhatsApp: {cmsData.settings.whatsappNumber}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= TAB: SERVICES ================= */}
          {activeTab === 'services' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-gold font-display font-semibold uppercase tracking-wider text-xs block mb-1">
                    Services Catalog
                  </span>
                  <h2 className="text-2xl font-display font-bold text-white">Manage Services &amp; Deliverables</h2>
                </div>
                <button
                  onClick={() =>
                    setEditingService({
                      id: `service-${Date.now()}`,
                      title: 'New Service Vertical',
                      category: 'business',
                      categoryLabel: 'New Vertical',
                      color: '#123A33',
                      iconName: 'Building2',
                      description: 'Comprehensive service overview...',
                      href: '/services',
                      deliverables: [{ title: 'First Deliverable', desc: 'Deliverable details' }],
                    })
                  }
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gold text-ink text-xs font-bold shadow"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Service</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cmsData.services.map((serv) => (
                  <div
                    key={serv.id}
                    className="p-6 rounded-2xl bg-[#14332D] border border-gold/30 shadow-lg flex flex-col justify-between space-y-4 hover:border-gold transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-teal-deep text-gold uppercase border border-gold/30">
                          {serv.categoryLabel}
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setEditingService({ ...serv })}
                            className="p-1.5 text-paper/70 hover:text-gold bg-white/5 rounded"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => {
                              if (confirm('Delete this service vertical?')) {
                                const filtered = cmsData.services.filter((s) => s.id !== serv.id);
                                saveAllChanges({ ...cmsData, services: filtered }, `Deleted service: ${serv.title}`);
                              }
                            }}
                            className="p-1.5 text-red-400 hover:bg-red-950/40 rounded"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <h4 className="font-display font-bold text-white text-base mb-2">{serv.title}</h4>
                      <p className="text-paper/70 text-xs line-clamp-3 leading-relaxed mb-4">{serv.description}</p>

                      <div className="space-y-1">
                        <span className="text-[10px] uppercase font-bold text-gold block">Deliverables:</span>
                        {serv.deliverables.map((d, i) => (
                          <div key={i} className="text-xs text-paper flex items-center gap-1.5 truncate">
                            <span className="text-gold">•</span> {d.title}
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => setEditingService({ ...serv })}
                      className="w-full py-2 rounded-lg bg-[#0E2621] hover:bg-gold hover:text-ink text-gold border border-gold/40 text-xs font-bold transition-all shadow"
                    >
                      Edit Deliverables &amp; Details
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= TAB: TRAVEL PACKAGES ================= */}
          {activeTab === 'travel_packages' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-gold font-display font-semibold uppercase tracking-wider text-xs block mb-1">
                    International Tour Inventory
                  </span>
                  <h2 className="text-2xl font-display font-bold text-white">Tour Packages</h2>
                </div>
                <button
                  onClick={() =>
                    setEditingTravel({
                      id: `tp-${Date.now()}`,
                      cat: 'Holiday',
                      title: 'New Tour Package',
                      from: 'RUH',
                      to: 'IST',
                      duration: '5 Days / 4 Nights',
                      price: '1,650',
                      badge: 'Featured',
                    })
                  }
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gold text-ink text-xs font-bold shadow"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Tour Package</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cmsData.travelPackages.map((pkg) => (
                  <div key={pkg.id} className="p-5 rounded-2xl bg-[#14332D] border border-gold/30 shadow-lg space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-gold/20 text-gold uppercase border border-gold/30">
                        {pkg.cat}
                      </span>
                      {pkg.badge && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/40">
                          {pkg.badge}
                        </span>
                      )}
                    </div>

                    <h4 className="font-display font-bold text-white text-sm">{pkg.title}</h4>

                    <div className="flex items-center justify-between text-xs py-2 border-y border-paper/10 font-mono font-bold text-gold">
                      <span>{pkg.from}</span>
                      <span>✈️</span>
                      <span>{pkg.to}</span>
                    </div>

                    <div className="text-xs text-paper/70 flex justify-between">
                      <span>{pkg.duration}</span>
                      <strong className="text-white font-bold font-sans">SAR {pkg.price}</strong>
                    </div>

                    <div className="flex items-center gap-2 pt-2">
                      <button
                        onClick={() => setEditingTravel({ ...pkg })}
                        className="flex-1 py-1.5 rounded-lg bg-teal-deep text-white text-xs font-semibold hover:bg-teal-mid border border-gold/30"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          if (confirm('Delete package?')) {
                            const filtered = cmsData.travelPackages.filter((p) => p.id !== pkg.id);
                            saveAllChanges({ ...cmsData, travelPackages: filtered }, `Deleted package: ${pkg.title}`);
                          }
                        }}
                        className="p-1.5 rounded-lg bg-red-950/40 text-red-300 hover:bg-red-900/60"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= TAB: WORKER VISA STEPPER CRM ================= */}
          {activeTab === 'workers' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-gold font-display font-semibold uppercase tracking-wider text-xs block mb-1">
                    Visual Milestones Stepper
                  </span>
                  <h2 className="text-2xl font-display font-bold text-white">Worker Visa Mobilization CRM</h2>
                </div>
                <button
                  onClick={() =>
                    setEditingWorker({
                      id: `wrk-${Date.now()}`,
                      refCode: `FAM-MOB-${Math.floor(10000 + Math.random() * 90000)}`,
                      fullName: 'New Worker Candidate',
                      passportNumber: 'A00000000',
                      trade: 'Industrial Electrician',
                      employer: 'Saudi Sponsoring Co.',
                      currentStage: 1,
                      statusLabel: 'Document Verification in progress',
                      updatedAt: 'Today',
                      stages: [
                        { name: 'Document Verification & GAMCA Medical', date: 'Today', status: 'in_progress' },
                        { name: 'Technical Trade Test', date: 'Pending', status: 'pending' },
                        { name: 'Qiwa Contract & Visa Stamping', date: 'Pending', status: 'pending' },
                        { name: 'Flight Ticketing', date: 'Pending', status: 'pending' },
                        { name: 'Airport Reception & Deployment', date: 'Pending', status: 'pending' },
                      ],
                    })
                  }
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gold text-ink text-xs font-bold shadow"
                >
                  <Plus className="w-4 h-4" />
                  <span>Register Worker Entry</span>
                </button>
              </div>

              <div className="space-y-6">
                {cmsData.workers.map((worker) => (
                  <div
                    key={worker.id}
                    className="p-6 rounded-2xl bg-[#14332D] border border-gold/30 shadow-xl space-y-6"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-paper/10 pb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono text-xs font-bold text-gold bg-gold/20 px-2.5 py-0.5 rounded border border-gold/30">
                            {worker.refCode}
                          </span>
                          <h4 className="font-display font-bold text-white text-lg">{worker.fullName}</h4>
                        </div>
                        <span className="text-paper/70 text-xs">
                          Passport: <strong className="text-white font-mono">{worker.passportNumber}</strong> · Trade: {worker.trade} · Employer: {worker.employer}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            const nextStage = Math.min(5, worker.currentStage + 1);
                            const updatedWorkers = cmsData.workers.map((w) =>
                              w.id === worker.id ? { ...w, currentStage: nextStage, updatedAt: 'Just now' } : w
                            );
                            saveAllChanges(
                              { ...cmsData, workers: updatedWorkers },
                              `Advanced worker ${worker.fullName} (${worker.refCode}) to Stage ${nextStage}`
                            );
                          }}
                          className="px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow"
                        >
                          Advance to Stage {Math.min(5, worker.currentStage + 1)} →
                        </button>

                        <button
                          onClick={() => setEditingWorker({ ...worker })}
                          className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold"
                        >
                          Edit Details
                        </button>
                      </div>
                    </div>

                    {/* 5-Step Visual Stepper */}
                    <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                      {[
                        { num: 1, title: 'Medical & Docs', sub: 'GAMCA Fitness' },
                        { num: 2, title: 'Trade Test', sub: 'Institute Exam' },
                        { num: 3, title: 'Visa Stamping', sub: 'Qiwa & MOFA' },
                        { num: 4, title: 'Air Ticket', sub: 'Flight Booking' },
                        { num: 5, title: 'Site Deployment', sub: 'Arrival in KSA' },
                      ].map((step) => {
                        const isDone = worker.currentStage > step.num;
                        const isCurrent = worker.currentStage === step.num;
                        return (
                          <div
                            key={step.num}
                            className={`p-3 rounded-xl border text-center transition-all ${
                              isDone
                                ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-300'
                                : isCurrent
                                ? 'bg-gold/20 border-gold text-gold ring-1 ring-gold/40'
                                : 'bg-[#0A1A17] border-paper/10 text-paper/40'
                            }`}
                          >
                            <div className="w-6 h-6 rounded-full mx-auto mb-1 text-xs font-bold flex items-center justify-center bg-white/10">
                              {isDone ? '✓' : step.num}
                            </div>
                            <strong className="block text-xs font-bold">{step.title}</strong>
                            <span className="text-[10px] block opacity-80">{step.sub}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= TAB: AUDIT LOG STREAM ================= */}
          {activeTab === 'audit_log' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-gold font-display font-semibold uppercase tracking-wider text-xs block mb-1">
                    Compliance &amp; History
                  </span>
                  <h2 className="text-2xl font-display font-bold text-white">Live Audit Activity Trail</h2>
                </div>
                <button
                  onClick={() => {
                    const csvContent =
                      'data:text/csv;charset=utf-8,' +
                      ['Time,User,Action,Details']
                        .concat(auditEvents.map((e) => `"${e.time}","${e.user}","${e.action}","${e.detail.replace(/"/g, '""')}"`))
                        .join('\n');
                    const encodedUri = encodeURI(csvContent);
                    const link = document.createElement('a');
                    link.setAttribute('href', encodedUri);
                    link.setAttribute('download', `audit_trail_${Date.now()}.csv`);
                    document.body.appendChild(link);
                    link.click();
                    link.remove();
                    showToast('Audit Log exported to CSV!');
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-deep text-white text-xs font-semibold border border-gold/30 shadow"
                >
                  <Download className="w-3.5 h-3.5 text-gold" />
                  <span>Export Audit CSV</span>
                </button>
              </div>

              <div className="p-6 rounded-2xl bg-[#14332D] border border-gold/30 shadow-xl space-y-4">
                <div className="divide-y divide-paper/10">
                  {auditEvents.map((ev) => (
                    <div key={ev.id} className="py-3.5 flex items-start gap-3 text-xs">
                      <div className="w-2.5 h-2.5 rounded-full bg-gold shrink-0 mt-1.5 shadow" />
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <strong className="text-white font-bold">{ev.action}</strong>
                          <span className="text-[10px] text-gold font-mono">{ev.time}</span>
                        </div>
                        <p className="text-paper/80 text-xs mt-1">{ev.detail}</p>
                        <span className="text-[10px] text-paper/50 block mt-0.5">Executed by: {ev.user}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ================= TAB: SETTINGS & BACKUP ================= */}
          {activeTab === 'settings' && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <span className="text-gold font-display font-semibold uppercase tracking-wider text-xs block mb-1">
                  System Administration
                </span>
                <h2 className="text-2xl font-display font-bold text-white">Backup, Restore &amp; Master Settings</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-[#14332D] border border-gold/30 shadow-xl space-y-4">
                  <h3 className="font-display font-bold text-gold text-xs uppercase tracking-wider border-b border-paper/10 pb-2">
                    Complete Website JSON Backup
                  </h3>
                  <p className="text-xs text-paper/70 leading-relaxed">
                    Download an entire snapshot of all your services, job vacancies, worker milestones, and site settings.
                  </p>
                  <button
                    onClick={exportJSONBackup}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gold hover:bg-gold-light text-ink font-bold text-xs shadow-lg transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Full Backup (JSON)</span>
                  </button>
                </div>

                <div className="p-6 rounded-2xl bg-[#14332D] border border-gold/30 shadow-xl space-y-4">
                  <h3 className="font-display font-bold text-gold text-xs uppercase tracking-wider border-b border-paper/10 pb-2">
                    Reset to Default Data
                  </h3>
                  <p className="text-xs text-paper/70 leading-relaxed">
                    Restore the factory default dataset for all 6 service verticals, travel packages, and jobs.
                  </p>
                  <button
                    onClick={() => {
                      if (confirm('Are you sure you want to reset all CMS content to defaults?')) {
                        saveAllChanges(INITIAL_CMS_DATABASE, 'Factory Default Reset Executed');
                        showToast('Reset to default database completed!');
                      }
                    }}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-red-950/50 hover:bg-red-900/70 text-red-300 font-bold text-xs border border-red-800/40 transition-all"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Reset All Data to Factory Default</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ================= TAB: INQUIRIES TABLE & OTHER TABS ================= */}
          {(activeTab === 'inquiries' ||
            activeTab === 'jobs' ||
            activeTab === 'destinations' ||
            activeTab === 'news' ||
            activeTab === 'testimonials' ||
            activeTab === 'faqs') && (
            <div className="p-6 rounded-2xl bg-[#14332D] border border-gold/30 shadow-xl space-y-4 text-xs">
              <div className="flex items-center justify-between border-b border-paper/10 pb-3">
                <h3 className="text-base font-display font-bold text-white uppercase tracking-wider">
                  {activeTab.toUpperCase().replace('_', ' ')} Management
                </h3>
                <button
                  onClick={() => saveAllChanges(cmsData, `Saved changes in ${activeTab}`)}
                  className="px-4 py-2 rounded-lg bg-gold text-ink font-bold shadow"
                >
                  Save All {activeTab.replace('_', ' ')}
                </button>
              </div>

              {activeTab === 'inquiries' && (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#0E2621] border-b border-paper/10 font-bold text-gold uppercase">
                      <tr>
                        <th className="py-3 px-4">Ref Code</th>
                        <th className="py-3 px-4">Client Name</th>
                        <th className="py-3 px-4">Service</th>
                        <th className="py-3 px-4">Phone</th>
                        <th className="py-3 px-4">Status</th>
                        <th className="py-3 px-4 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-paper/10">
                      {cmsData.inquiries.map((inq) => (
                        <tr key={inq.id} className="hover:bg-[#1A4139]">
                          <td className="py-3 px-4 font-mono font-bold text-gold">{inq.id}</td>
                          <td className="py-3 px-4 font-semibold text-white">{inq.name}</td>
                          <td className="py-3 px-4 text-teal-300">{inq.serviceCategory}</td>
                          <td className="py-3 px-4 text-paper/70">{inq.phone}</td>
                          <td className="py-3 px-4">
                            <span
                              className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                                inq.status === 'new'
                                  ? 'bg-amber-900/60 text-amber-300'
                                  : inq.status === 'in_review'
                                  ? 'bg-blue-900/60 text-blue-300'
                                  : inq.status === 'contacted'
                                  ? 'bg-purple-900/60 text-purple-300'
                                  : 'bg-emerald-900/60 text-emerald-300'
                              }`}
                            >
                              {inq.status.replace('_', ' ')}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <button
                              onClick={() => setInspectInquiry(inq)}
                              className="px-2.5 py-1 rounded bg-gold/20 hover:bg-gold text-ink font-semibold"
                            >
                              Inspect
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </main>
      </div>

      {/* ================= WHATSAPP MODAL ================= */}
      {whatsAppModalInquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-[#122E28] w-full max-w-lg rounded-2xl border border-gold/40 shadow-2xl p-6 relative space-y-4 animate-scale-up">
            <div className="flex items-center justify-between border-b border-paper/10 pb-3">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <h3 className="font-display font-bold text-white text-base">WhatsApp Quick-Reply Generator</h3>
              </div>
              <button onClick={() => setWhatsAppModalInquiry(null)} className="p-1 text-paper/60 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-lg bg-[#0A1A17] border border-paper/10 flex justify-between">
                <div>
                  <span className="text-[10px] text-paper/50 block">Recipient</span>
                  <strong className="text-white">{whatsAppModalInquiry.name}</strong>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-paper/50 block">Service</span>
                  <strong className="text-gold">{whatsAppModalInquiry.serviceCategory}</strong>
                </div>
              </div>

              <div>
                <label className="block text-paper/70 font-semibold mb-1">Generated Message Template (Bilingual):</label>
                <div className="p-3.5 rounded-xl bg-[#0A1A17] border border-paper/15 text-paper leading-relaxed font-sans select-all">
                  Assalamu Alaikum {whatsAppModalInquiry.name},<br /><br />
                  This is regarding your inquiry for <strong>{whatsAppModalInquiry.serviceCategory}</strong> with <strong>FAIZA AL MARWA COMPANY LTD (Riyadh)</strong>.<br /><br />
                  Our dedicated corporate officer has reviewed your request. Could you please share convenient time for a brief 5-minute call or direct quotation discussion?
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-paper/10 flex items-center justify-between">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    `Assalamu Alaikum ${whatsAppModalInquiry.name},\nThis is regarding your inquiry for ${whatsAppModalInquiry.serviceCategory} with FAIZA AL MARWA COMPANY LTD.\nOur advisor is ready to assist you.`
                  );
                  showToast('Template copied to clipboard!');
                }}
                className="px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs flex items-center gap-1.5"
              >
                <Copy className="w-3.5 h-3.5 text-gold" />
                <span>Copy Text</span>
              </button>

              <a
                href={`https://wa.me/${whatsAppModalInquiry.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                  `Assalamu Alaikum ${whatsAppModalInquiry.name},\nThis is regarding your inquiry for ${whatsAppModalInquiry.serviceCategory} with FAIZA AL MARWA COMPANY LTD (Riyadh). Our advisor is ready to share the pricing and requirements.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Open WhatsApp Chat Directly</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ================= INSPECT INQUIRY MODAL ================= */}
      {inspectInquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-[#122E28] w-full max-w-lg rounded-2xl border border-gold/40 shadow-2xl p-6 relative space-y-4 animate-scale-up">
            <div className="flex items-center justify-between border-b border-paper/10 pb-3">
              <div>
                <span className="text-[10px] font-mono text-gold font-bold">{inspectInquiry.id}</span>
                <h3 className="font-display font-bold text-white text-lg">{inspectInquiry.name}</h3>
              </div>
              <button onClick={() => setInspectInquiry(null)} className="p-1 text-paper/60 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-[#0A1A17] border border-paper/10 grid grid-cols-2 gap-2">
                <div>
                  <span className="text-[10px] text-paper/50 uppercase block">Phone / WhatsApp</span>
                  <strong className="text-white font-mono">{inspectInquiry.phone}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-paper/50 uppercase block">Service Requested</span>
                  <strong className="text-gold">{inspectInquiry.serviceCategory}</strong>
                </div>
              </div>

              <div>
                <span className="text-[10px] text-paper/50 uppercase block mb-1">Inquiry Details</span>
                <p className="p-3 rounded-xl bg-[#0A1A17] border border-paper/10 text-paper leading-relaxed">
                  {inspectInquiry.details}
                </p>
              </div>

              <div>
                <span className="text-[10px] text-gold uppercase block mb-1.5 font-bold">Move Stage / Status</span>
                <div className="grid grid-cols-4 gap-2">
                  {(['new', 'in_review', 'contacted', 'completed'] as const).map((st) => (
                    <button
                      key={st}
                      onClick={() => {
                        const updated = cmsData.inquiries.map((i) =>
                          i.id === inspectInquiry.id ? { ...i, status: st } : i
                        );
                        saveAllChanges(
                          { ...cmsData, inquiries: updated },
                          `Moved inquiry ${inspectInquiry.id} to ${st.toUpperCase()}`
                        );
                        setInspectInquiry({ ...inspectInquiry, status: st });
                      }}
                      className={`py-2 rounded-lg text-[10px] uppercase font-bold transition-all ${
                        inspectInquiry.status === st
                          ? 'bg-gold text-ink shadow-md'
                          : 'bg-[#0A1A17] text-paper/60 hover:text-white border border-paper/10'
                      }`}
                    >
                      {st.replace('_', ' ')}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-paper/10 flex justify-between items-center">
              <button
                onClick={() => {
                  setWhatsAppModalInquiry(inspectInquiry);
                  setInspectInquiry(null);
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Compose WhatsApp</span>
              </button>
              <button
                onClick={() => setInspectInquiry(null)}
                className="px-4 py-2 rounded-lg border border-paper/20 text-paper/70 hover:text-white text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= EDIT SERVICE MODAL ================= */}
      {editingService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-[#122E28] w-full max-w-xl rounded-2xl border border-gold/40 shadow-2xl p-6 relative max-h-[90vh] overflow-y-auto space-y-4 animate-scale-up">
            <div className="flex items-center justify-between border-b border-paper/10 pb-3">
              <h3 className="font-display font-bold text-white text-lg">Edit Service Vertical</h3>
              <button onClick={() => setEditingService(null)} className="p-1 text-paper/60 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-paper/80 mb-1">Service Title</label>
                <input
                  type="text"
                  value={editingService.title}
                  onChange={(e) => setEditingService({ ...editingService, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-paper/20 bg-[#0A1A17] text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-paper/80 mb-1">Category Code</label>
                  <input
                    type="text"
                    value={editingService.category}
                    onChange={(e) => setEditingService({ ...editingService, category: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-paper/20 bg-[#0A1A17] text-white"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-paper/80 mb-1">Display Badge</label>
                  <input
                    type="text"
                    value={editingService.categoryLabel}
                    onChange={(e) => setEditingService({ ...editingService, categoryLabel: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-paper/20 bg-[#0A1A17] text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-paper/80 mb-1">Overview Description</label>
                <textarea
                  rows={3}
                  value={editingService.description}
                  onChange={(e) => setEditingService({ ...editingService, description: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-paper/20 bg-[#0A1A17] text-white"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="font-semibold text-gold">Deliverables List</label>
                  <button
                    type="button"
                    onClick={() =>
                      setEditingService({
                        ...editingService,
                        deliverables: [...editingService.deliverables, { title: 'New Deliverable', desc: 'Description' }],
                      })
                    }
                    className="text-gold font-bold hover:underline"
                  >
                    + Add Item
                  </button>
                </div>
                <div className="space-y-2">
                  {editingService.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex gap-2 items-center">
                      <input
                        type="text"
                        value={deliv.title}
                        onChange={(e) => {
                          const updated = [...editingService.deliverables];
                          updated[idx].title = e.target.value;
                          setEditingService({ ...editingService, deliverables: updated });
                        }}
                        className="flex-1 px-3 py-1.5 rounded-lg border border-paper/20 bg-[#0A1A17] text-white"
                        placeholder="Deliverable Title"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const updated = editingService.deliverables.filter((_, i) => i !== idx);
                          setEditingService({ ...editingService, deliverables: updated });
                        }}
                        className="p-1.5 text-red-400 hover:bg-red-950/40 rounded-lg"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-paper/10 flex justify-end gap-2">
              <button
                onClick={() => setEditingService(null)}
                className="px-4 py-2 rounded-lg border border-paper/20 text-paper/70 text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  const existing = cmsData.services.some((s) => s.id === editingService.id);
                  const updatedServices = existing
                    ? cmsData.services.map((s) => (s.id === editingService.id ? editingService : s))
                    : [...cmsData.services, editingService];
                  saveAllChanges({ ...cmsData, services: updatedServices }, `Updated service: ${editingService.title}`);
                  setEditingService(null);
                }}
                className="px-5 py-2 rounded-lg bg-gold hover:bg-gold-light text-ink text-xs font-bold shadow"
              >
                Save Service
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= EDIT TRAVEL MODAL ================= */}
      {editingTravel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-[#122E28] w-full max-w-lg rounded-2xl border border-gold/40 shadow-2xl p-6 relative space-y-4 animate-scale-up">
            <div className="flex items-center justify-between border-b border-paper/10 pb-3">
              <h3 className="font-display font-bold text-white text-lg">Edit Tour Package</h3>
              <button onClick={() => setEditingTravel(null)} className="p-1 text-paper/60 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-paper/80 mb-1">Package Title</label>
                <input
                  type="text"
                  value={editingTravel.title}
                  onChange={(e) => setEditingTravel({ ...editingTravel, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-paper/20 bg-[#0A1A17] text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-paper/80 mb-1">Category (Holiday / Cultural)</label>
                  <input
                    type="text"
                    value={editingTravel.cat}
                    onChange={(e) => setEditingTravel({ ...editingTravel, cat: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-paper/20 bg-[#0A1A17] text-white"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-paper/80 mb-1">Badge (Popular / VIP)</label>
                  <input
                    type="text"
                    value={editingTravel.badge || ''}
                    onChange={(e) => setEditingTravel({ ...editingTravel, badge: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-paper/20 bg-[#0A1A17] text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-paper/80 mb-1">From Code (e.g. RUH)</label>
                  <input
                    type="text"
                    value={editingTravel.from}
                    onChange={(e) => setEditingTravel({ ...editingTravel, from: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-paper/20 bg-[#0A1A17] text-white font-mono uppercase"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-paper/80 mb-1">To Code (e.g. MED)</label>
                  <input
                    type="text"
                    value={editingTravel.to}
                    onChange={(e) => setEditingTravel({ ...editingTravel, to: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-paper/20 bg-[#0A1A17] text-white font-mono uppercase"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-paper/80 mb-1">Duration</label>
                  <input
                    type="text"
                    value={editingTravel.duration}
                    onChange={(e) => setEditingTravel({ ...editingTravel, duration: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-paper/20 bg-[#0A1A17] text-white"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-paper/80 mb-1">Price in SAR</label>
                  <input
                    type="text"
                    value={editingTravel.price}
                    onChange={(e) => setEditingTravel({ ...editingTravel, price: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-paper/20 bg-[#0A1A17] text-white font-bold text-gold"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-paper/10 flex justify-end gap-2">
              <button
                onClick={() => setEditingTravel(null)}
                className="px-4 py-2 rounded-lg border border-paper/20 text-paper/70 text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  const existing = cmsData.travelPackages.some((t) => t.id === editingTravel.id);
                  const updated = existing
                    ? cmsData.travelPackages.map((t) => (t.id === editingTravel.id ? editingTravel : t))
                    : [...cmsData.travelPackages, editingTravel];
                  saveAllChanges({ ...cmsData, travelPackages: updated }, `Saved package: ${editingTravel.title}`);
                  setEditingTravel(null);
                }}
                className="px-5 py-2 rounded-lg bg-gold hover:bg-gold-light text-ink text-xs font-bold shadow"
              >
                Save Package
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
