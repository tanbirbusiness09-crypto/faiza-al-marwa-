'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Building,
  CheckCircle2,
  Search,
  Filter,
  ArrowRight,
  Upload,
  User,
  Phone,
  Mail,
  FileText,
  X,
  Sparkles,
} from 'lucide-react';

interface JobPosting {
  id: string;
  title: string;
  category: string;
  location: string;
  type: string;
  salary: string;
  vacancies: number;
  experience: string;
  requirements: string[];
  description: string;
}

const JOBS_DATA: JobPosting[] = [
  {
    id: 'fam-job-01',
    title: 'Industrial & Panel Board Electrician',
    category: 'Electrical & Power',
    location: 'Riyadh, Saudi Arabia',
    type: 'Full-Time / 2-Year Contract',
    salary: 'SAR 2,200 - 3,000 / month + Accommodation',
    vacancies: 25,
    experience: '3+ Years in Industrial Wiring',
    requirements: [
      'Experience in cable tray laying and panel termination',
      'Valid technical trade diploma or vocational certificate',
      'Basic English or Arabic conversational ability',
    ],
    description: 'Seeking certified industrial electricians for major commercial construction and facility management projects in Riyadh.',
  },
  {
    id: 'fam-job-02',
    title: 'HVAC & Central AC Maintenance Technician',
    category: 'Mechanical & HVAC',
    location: 'Jeddah & Makkah, Saudi Arabia',
    type: 'Full-Time / 2-Year Contract',
    salary: 'SAR 2,500 - 3,500 / month + Food & Housing',
    vacancies: 18,
    experience: '4+ Years in Chiller & Package Units',
    requirements: [
      'Hands-on expertise in VRV/VRF systems, ducting, and troubleshooting',
      'GAMCA medical clearance readiness',
      'Ability to read mechanical blueprints',
    ],
    description: 'Responsible for installation, diagnostic repair, and preventive maintenance of commercial HVAC units in hospitality towers.',
  },
  {
    id: 'fam-job-03',
    title: 'Executive & Heavy Trailer Driver',
    category: 'Transportation & Logistics',
    location: 'Dammam & Eastern Province',
    type: 'Full-Time / 2-Year Contract',
    salary: 'SAR 2,000 - 2,800 / month + Trip Allowances',
    vacancies: 30,
    experience: '2+ Years GCC or Home Country License',
    requirements: [
      'Valid Heavy Driving License',
      'Clean traffic record and medical fitness',
      'Knowledge of GPS navigation across Saudi highways',
    ],
    description: 'Operating transport trailers and fleet buses between ports, logistics hubs, and project sites.',
  },
  {
    id: 'fam-job-04',
    title: 'Commercial Kitchen Chef / Line Cook',
    category: 'Hospitality & Catering',
    location: 'Madinah, Saudi Arabia',
    type: 'Full-Time / 2-Year Contract',
    salary: 'SAR 1,800 - 2,600 / month + Duty Meals',
    vacancies: 15,
    experience: '2+ Years in Hotel or Restaurant Kitchens',
    requirements: [
      'Experience in Middle Eastern, Asian, or Continental cuisine',
      'Food hygiene and safety certification',
      'High stamina in fast-paced catering environments',
    ],
    description: 'Preparing high-volume buffet meals and à la carte dishes for 4-star and 5-star hotel guests during peak tourism season.',
  },
  {
    id: 'fam-job-05',
    title: 'Civil Construction Foreman & Supervisor',
    category: 'Civil & Construction',
    location: 'NEOM & Tabuk, Saudi Arabia',
    type: 'Full-Time / 2-Year Contract',
    salary: 'SAR 3,800 - 5,000 / month + Full Benefits',
    vacancies: 8,
    experience: '5+ Years Supervising Concrete & Steel Sites',
    requirements: [
      'Diploma in Civil Engineering or equivalent supervisory experience',
      'Proven leadership over 30+ site workers',
      'Strict adherence to OSHA/Saudi safety guidelines',
    ],
    description: 'Supervising site execution, concrete pours, scaffolding safety, and subcontractor timelines on infrastructure packages.',
  },
  {
    id: 'fam-job-06',
    title: 'Facility Cleaning & Housekeeping Staff',
    category: 'Facility Management',
    location: 'Riyadh & Jeddah',
    type: 'Full-Time / 2-Year Contract',
    salary: 'SAR 1,400 - 1,800 / month + Accommodation',
    vacancies: 50,
    experience: 'Entry-Level / 1+ Year preferred',
    requirements: [
      'Physical fitness and willingness to learn',
      'Medical clearance certificate',
      'Punctual and cooperative team player',
    ],
    description: 'Maintaining pristine cleanliness in corporate headquarters, shopping malls, and healthcare facilities.',
  },
];

const CATEGORIES = [
  'All Trades',
  'Electrical & Power',
  'Mechanical & HVAC',
  'Transportation & Logistics',
  'Hospitality & Catering',
  'Civil & Construction',
  'Facility Management',
];

export default function CareersPage() {
  const [selectedCat, setSelectedCat] = useState('All Trades');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeJob, setActiveJob] = useState<JobPosting | null>(null);
  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    passportNumber: '',
    experienceYears: '',
    currentLocation: '',
  });

  const filteredJobs = JOBS_DATA.filter((job) => {
    const matchesCat = selectedCat === 'All Trades' || job.category === selectedCat;
    const matchesQuery =
      !searchQuery ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedCode = `FAM-APP-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedId(generatedCode);
  };

  return (
    <div className="min-h-screen bg-paper text-text pb-20">
      {/* Header Banner */}
      <section className="bg-ink text-white py-16 border-b border-gold/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(18,58,51,0.5),transparent_60%)] pointer-events-none" />
        <div className="max-w-[1480px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 text-center">
          <span className="text-gold font-display font-semibold uppercase tracking-wider text-xs block mb-2">
            Saudi Arabia Workforce Opportunities
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-paper mb-4">
            Careers &amp; Job Seekers Portal
          </h1>
          <p className="text-paper/75 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Find vetted employment opportunities with licensed Saudi employers. We manage technical trade verification, visa processing, and deployment end-to-end.
          </p>
        </div>
      </section>

      {/* Main Jobs Section */}
      <div className="max-w-[1480px] mx-auto px-4 sm:px-8 lg:px-12 pt-10">
        {/* Search & Category Filter Bar */}
        <div className="bg-paper-card p-5 rounded-xl border border-paper-line shadow-sm mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-text-soft absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search job title, skills, or city (e.g. Electrician, HVAC, Riyadh)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-md border border-paper-line bg-paper text-sm text-ink placeholder:text-text-soft/60 focus:outline-none focus:border-gold"
              />
            </div>
          </div>

          {/* Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            <span className="text-text-soft font-semibold shrink-0 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Trades:
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-3 py-1.5 rounded-md font-medium whitespace-nowrap transition-colors ${
                  selectedCat === cat
                    ? 'bg-teal-deep text-paper font-semibold'
                    : 'bg-paper text-text-soft hover:text-ink border border-paper-line'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Jobs List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="p-6 rounded-xl bg-paper-card border border-paper-line hover:border-gold/50 shadow-sm transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded bg-teal-deep/10 text-teal-deep uppercase tracking-wider">
                    {job.category}
                  </span>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    {job.vacancies} Openings
                  </span>
                </div>

                <h3 className="text-lg font-display font-bold text-ink mb-2 group-hover:text-teal-deep transition-colors">
                  {job.title}
                </h3>

                <p className="text-text-soft text-xs sm:text-sm leading-relaxed mb-4">
                  {job.description}
                </p>

                <div className="grid grid-cols-2 gap-2 text-xs text-text-soft mb-5 pb-5 border-b border-paper-line">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span className="truncate">{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span className="truncate font-semibold text-ink">{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span>{job.experience}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span>{job.type}</span>
                  </div>
                </div>

                <div className="space-y-1.5 mb-6">
                  {job.requirements.map((req, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-text">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setActiveJob(job);
                  setSubmittedId(null);
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-md bg-navy hover:bg-navy-light text-white font-semibold text-xs transition-all shadow active:scale-95"
              >
                <span>Apply for this Job</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Application Modal */}
      {activeJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-paper-card w-full max-w-lg rounded-xl border border-paper-line shadow-2xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveJob(null)}
              className="absolute right-4 top-4 p-1.5 rounded-full hover:bg-paper text-text-soft hover:text-ink transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submittedId ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-ink">Application Submitted!</h3>
                <p className="text-text-soft text-sm max-w-sm mx-auto">
                  Your application for <strong>{activeJob.title}</strong> has been registered in our recruitment database.
                </p>

                <div className="p-4 rounded-lg bg-paper border border-paper-line text-left space-y-1 max-w-xs mx-auto">
                  <span className="text-[11px] text-text-soft block uppercase font-semibold">Your Tracking Code</span>
                  <div className="font-mono text-lg font-bold text-teal-deep select-all">{submittedId}</div>
                  <span className="text-[10px] text-text-soft block">Save this code to check your mobilization status anytime.</span>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href={`/worker-status?code=${submittedId}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-navy hover:bg-navy-light text-white font-semibold text-xs transition-all shadow"
                  >
                    <span>Check Live Status</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => setActiveJob(null)}
                    className="px-5 py-2.5 rounded-md border border-paper-line hover:bg-paper text-text-soft hover:text-ink font-semibold text-xs transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-gold font-display font-semibold uppercase tracking-wider text-xs block mb-1">
                    Direct Application
                  </span>
                  <h3 className="text-xl font-display font-bold text-ink">{activeJob.title}</h3>
                  <p className="text-text-soft text-xs mt-1">{activeJob.location} · {activeJob.salary}</p>
                </div>

                <form onSubmit={handleSubmitApplication} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-text mb-1">Full Name (as in Passport) *</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-text-soft absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Mohammed Faruk Ahmed"
                        className="w-full pl-9 pr-3 py-2 rounded-md border border-paper-line bg-paper text-xs text-ink focus:outline-none focus:border-gold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-text mb-1">WhatsApp / Phone *</label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-text-soft absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+880 / +966..."
                          className="w-full pl-9 pr-3 py-2 rounded-md border border-paper-line bg-paper text-xs text-ink focus:outline-none focus:border-gold"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-text mb-1">Passport Number *</label>
                      <div className="relative">
                        <FileText className="w-4 h-4 text-text-soft absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={formData.passportNumber}
                          onChange={(e) => setFormData({ ...formData, passportNumber: e.target.value })}
                          placeholder="e.g. A09876543"
                          className="w-full pl-9 pr-3 py-2 rounded-md border border-paper-line bg-paper text-xs text-ink focus:outline-none focus:border-gold"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-text mb-1">Years of Experience</label>
                      <input
                        type="text"
                        value={formData.experienceYears}
                        onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                        placeholder="e.g. 4 Years"
                        className="w-full px-3 py-2 rounded-md border border-paper-line bg-paper text-xs text-ink focus:outline-none focus:border-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-text mb-1">Current Country / City</label>
                      <input
                        type="text"
                        value={formData.currentLocation}
                        onChange={(e) => setFormData({ ...formData, currentLocation: e.target.value })}
                        placeholder="e.g. Dhaka / Chittagong"
                        className="w-full px-3 py-2 rounded-md border border-paper-line bg-paper text-xs text-ink focus:outline-none focus:border-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-text mb-1">Upload CV / Trade Certificate</label>
                    <div className="border-2 border-dashed border-paper-line rounded-lg p-4 text-center hover:border-gold transition-colors bg-paper cursor-pointer">
                      <Upload className="w-6 h-6 text-gold mx-auto mb-1" />
                      <span className="text-xs text-text-soft block">Click to browse or drop PDF / JPG here</span>
                      <span className="text-[10px] text-text-soft/60">Max size: 5MB</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-md bg-navy hover:bg-navy-light text-white font-semibold text-xs transition-all shadow-md active:scale-95"
                  >
                    Submit Application &amp; Generate Tracking Code
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
