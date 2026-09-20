import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Trophy, CheckCircle2, Users, Phone } from 'lucide-react';

interface HeroProps {
  onOpenQuiz: () => void;
  onOpenDemoModal: () => void;
}

const DYNAMIC_PHRASES = [
  "Derive Every Solution.",
  "Master IIT-JEE Advanced.",
  "Crack NEET-UG Top Ranks.",
  "Achieve 100% Concept Mastery.",
  "Secure AIR 1 & Top 100."
];

export const Hero: React.FC<HeroProps> = ({ onOpenQuiz, onOpenDemoModal }) => {
  const [activeTab, setActiveTab] = useState<'jee' | 'neet' | 'found'>('jee');
  const [phoneInput, setPhoneInput] = useState('');
  const [callSubmitted, setCallSubmitted] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % DYNAMIC_PHRASES.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const handleCallSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCallSubmitted(true);
    setTimeout(() => {
      setCallSubmitted(false);
      setPhoneInput('');
    }, 4000);
  };

  return (
    <section className="relative w-full overflow-hidden academic-mesh-bg pt-6 pb-16 lg:pt-10 lg:pb-24 border-b border-slate-200">
      
      {/* Soft Moving Ambient Glow Layers */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-amber-500/10 via-blue-500/5 to-transparent blur-3xl pointer-events-none -z-10 animate-ambient-glow" />
      <div className="absolute top-28 right-12 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & High Impact CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Pre-title Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-300/80 text-slate-900 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D97706]" />
              </span>
              <span className="text-xs font-bold tracking-wide text-[#071A2F] flex items-center gap-1.5">
                Academic Session 2026–27
                <span className="text-slate-400">•</span>
                <span className="text-[#D97706] font-extrabold">Admissions & Scholarships Open</span>
              </span>
            </div>

            {/* Commanding Headline & Dynamic Animated Text */}
            <div className="space-y-2 w-full">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#071A2F] tracking-tight leading-[1.1] font-['Outfit']">
                Deconstruct the Axiom.
              </h1>
              
              {/* Fixed Non-Clipping Dynamic Text Flip Container */}
              <div className="min-h-[3.5rem] sm:min-h-[4.5rem] lg:min-h-[5.25rem] flex items-center relative py-1">
                <span 
                  key={phraseIndex}
                  className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] multicolor-wave-text font-['Outfit'] animate-phrase-slide block"
                >
                  {DYNAMIC_PHRASES[phraseIndex]}
                </span>
              </div>

              {/* Dynamic Vector Underline */}
              <svg className="w-60 sm:w-80 h-3 text-[#D97706] opacity-90 mt-1" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 9C50 3 150 2 298 9" stroke="url(#undergradient)" strokeWidth="4" strokeLinecap="round" />
                <defs>
                  <linearGradient id="undergradient" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#D97706" />
                    <stop offset="0.7" stopColor="#F59E0B" />
                    <stop offset="1" stopColor="#1D4ED8" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Subtitle with High-Contrast Typography & Highlight Badges */}
            <p className="text-sm sm:text-base text-slate-700 max-w-2xl leading-relaxed font-normal">
              Pioneered by <span className="px-2 py-0.5 rounded bg-amber-50 text-[#071A2F] border border-amber-200 font-bold text-xs inline-block">Ex-IIT Kanpur Faculty</span> and <span className="px-2 py-0.5 rounded bg-blue-50 text-[#1D4ED8] border border-blue-200 font-bold text-xs inline-block">National Olympiad Mentors</span>. Immersive classroom training for <strong className="text-[#071A2F] font-bold">JEE Advanced, NEET-UG</strong>, and <strong className="text-[#071A2F] font-bold">Classes 8–10 Foundation</strong> with an institutional guarantee of <span className="text-[#D97706] font-bold underline underline-offset-4 decoration-[#D97706]/40">strict 30-student cohort limits</span>.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2">
              <button
                onClick={() => onOpenDemoModal()}
                className="btn-primary-gold inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-xs"
              >
                <span>Apply for Brahmshala SAT (Free Test)</span>
                <ArrowRight className="w-4.5 h-4.5" />
              </button>

              <button
                onClick={onOpenQuiz}
                className="btn-secondary-white inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-xs"
              >
                <Sparkles className="w-4 h-4 text-[#D97706]" />
                <span>Course Matcher Quiz</span>
              </button>
            </div>

            {/* Refined Stat Cards */}
            <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-4 shadow-xs items-center">
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#071A2F] text-amber-400 flex items-center justify-center shrink-0">
                  <Trophy className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-sm font-extrabold text-[#071A2F] leading-none mb-1">142+ AIR Top 100</p>
                  <p className="text-xs text-slate-500 font-medium">JEE & NEET Ranks</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:border-l sm:border-slate-200 sm:pl-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#059669] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#059669]" />
                </div>
                <div>
                  <p className="text-sm font-extrabold text-[#071A2F] leading-none mb-1">84.6% Selection</p>
                  <p className="text-xs text-slate-500 font-medium">Institutional Audit</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:border-l sm:border-slate-200 sm:pl-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-[#1D4ED8]" />
                </div>
                <div>
                  <p className="text-sm font-extrabold text-[#071A2F] leading-none mb-1">Strict 1:15 Ratio</p>
                  <p className="text-xs text-slate-500 font-medium">Senior Faculty Mentors</p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Admissions Dashboard Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-md border border-slate-200 relative overflow-hidden">
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D97706] animate-pulse" />
                  <span className="text-xs font-bold tracking-wider uppercase text-[#D97706]">
                    Flagship Academic Cohorts
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-rose-50 text-rose-700 px-2.5 py-0.5 rounded-full border border-rose-200">
                  Only 8 seats left in Batch A
                </span>
              </div>

              {/* Cohort Switcher Tabs */}
              <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-xl mb-5 border border-slate-200">
                <button
                  type="button"
                  onClick={() => setActiveTab('jee')}
                  className={`py-2 rounded-lg text-xs font-bold transition-all ${
                    activeTab === 'jee'
                      ? 'bg-[#071A2F] text-white shadow-xs'
                      : 'text-slate-600 hover:text-[#071A2F]'
                  }`}
                >
                  IIT-JEE Adv
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('neet')}
                  className={`py-2 rounded-lg text-xs font-bold transition-all ${
                    activeTab === 'neet'
                      ? 'bg-[#059669] text-white shadow-xs'
                      : 'text-slate-600 hover:text-[#071A2F]'
                  }`}
                >
                  NEET Medical
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('found')}
                  className={`py-2 rounded-lg text-xs font-bold transition-all ${
                    activeTab === 'found'
                      ? 'bg-[#1D4ED8] text-white shadow-xs'
                      : 'text-slate-600 hover:text-[#071A2F]'
                  }`}
                >
                  Foundations
                </button>
              </div>

              {/* Cohort Details Panel */}
              {activeTab === 'jee' && (
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-[#071A2F] text-sm">Brahmastra 2-Year Integrated</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">Class 11 & 12</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">First-principles theoretical physics, advanced math proofing, and CBT diagnostics.</p>
                  <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                    <div className="bg-white border border-slate-200 p-2 rounded-lg font-semibold text-[#071A2F]">960+ Hrs Class</div>
                    <div className="bg-white border border-slate-200 p-2 rounded-lg font-semibold text-[#071A2F]">Max 30 Seats</div>
                    <div className="bg-amber-50 border border-amber-200 p-2 rounded-lg font-bold text-[#D97706]">100% Remediation</div>
                  </div>
                </div>
              )}

              {activeTab === 'neet' && (
                <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-[#059669] text-sm">Dhanvantari 2-Year NEET-UG</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-emerald-300">Class 11 & 12</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">Exhaustive NCERT deconstruction, spatial diagram memory systems, and AIIMS senior clinical mentoring.</p>
                  <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                    <div className="bg-white border border-emerald-200 p-2 rounded-lg font-semibold text-[#059669]">880+ Hrs Class</div>
                    <div className="bg-white border border-emerald-200 p-2 rounded-lg font-semibold text-[#059669]">120+ OMR Tests</div>
                    <div className="bg-emerald-100 border border-emerald-300 p-2 rounded-lg font-bold text-[#059669]">AIIMS Mentors</div>
                  </div>
                </div>
              )}

              {activeTab === 'found' && (
                <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-[#1D4ED8] text-sm">Aryabhata Junior Olympiad</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-900 border border-blue-300">Classes 8, 9 & 10</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">High STEM intuition, IOQM/PRMO problem sets, and mathematical foundations for board toppers.</p>
                  <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                    <div className="bg-white border border-blue-200 p-2 rounded-lg font-semibold text-[#1D4ED8]">640+ Hrs Class</div>
                    <div className="bg-white border border-blue-200 p-2 rounded-lg font-semibold text-[#1D4ED8]">IOQM Mapped</div>
                    <div className="bg-blue-100 border border-blue-300 p-2 rounded-lg font-bold text-[#1D4ED8]">1-on-1 Mentor</div>
                  </div>
                </div>
              )}

              {/* Instant Callback Request Form */}
              <div className="mt-5 pt-4 border-t border-slate-200">
                <h5 className="text-xs font-bold text-[#071A2F] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-[#D97706]" />
                  <span>Request Instant Academic Counseling Call</span>
                </h5>

                {callSubmitted ? (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-center text-xs font-semibold flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                    <span>Callback logged! Senior counselor will reach out via WhatsApp shortly.</span>
                  </div>
                ) : (
                  <form onSubmit={handleCallSubmit} className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      value={phoneInput}
                      onChange={e => setPhoneInput(e.target.value)}
                      placeholder="Enter 10-digit WhatsApp number"
                      className="flex-1 h-10 px-3.5 rounded-xl bg-slate-50 border border-slate-300 text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:border-[#1D4ED8]"
                    />
                    <button
                      type="submit"
                      className="h-10 px-4 rounded-xl bg-[#071A2F] hover:bg-[#0B1220] text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shrink-0 shadow-xs"
                    >
                      <span>Call Me Back</span>
                      <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                    </button>
                  </form>
                )}
                <span className="text-[10px] text-slate-500 font-normal block mt-1.5">No spam. Direct interaction with verified academic counselors only.</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
