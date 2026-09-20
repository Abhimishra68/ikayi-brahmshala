import React, { useState, useEffect } from 'react';
import { Phone, CheckCircle2, GraduationCap, Menu, X, Search, BookOpen, Calculator, Sparkles, Users, Trophy, MapPin, ChevronRight, MessageSquare } from 'lucide-react';
import { BRANCH_INFO } from '../data/coachingData';
import ibsLogo from '../assets/ibs-logo.jpg';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenDemoModal: () => void;
}

const NAV_ITEMS = [
  { id: 'programs', label: 'Programs', href: '#programs', icon: BookOpen, desc: 'Targeted IIT-JEE & NEET Cohorts' },
  { id: 'fee-estimator', label: 'Fees & Aid', href: '#fee-estimator', icon: Calculator, desc: 'Merit Scholarship Calculator' },
  { id: 'pedagogy-matrix', label: 'Pedagogy', href: '#pedagogy-matrix', icon: Sparkles, desc: '1:1 Daily Remediation Clinic' },
  { id: 'faculty-benchmarks', label: 'Faculty', href: '#faculty-benchmarks', icon: Users, desc: 'Ex-IIT & AIIMS Mentors' },
  { id: 'toppers', label: 'Results', href: '#toppers', icon: Trophy, desc: '142+ AIR Top 100 Rankers' },
  { id: 'campuses', label: 'Campuses', href: '#campuses', icon: MapPin, desc: 'Interactive Location Finder' }
];

export const Header: React.FC<HeaderProps> = ({ onOpenSearch, onOpenDemoModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('programs');

  // Automatic Active Section Scroll Detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const element = document.getElementById(item.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveNav(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
      
      {/* Top Announcement Bar */}
      <div className="w-full bg-[#071A2F] text-white py-1.5 sm:py-2 px-3 sm:px-6 lg:px-10 2xl:px-12 border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto flex items-center justify-between gap-2 text-[10px] sm:text-xs font-medium">
          
          <div className="flex items-center gap-2 shrink-0">
            <span className="inline-flex items-center gap-1.5 bg-[#D97706] px-2 sm:px-2.5 py-0.5 rounded-full text-white font-bold tracking-wide text-[10px] sm:text-[11px] shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Admissions Open 2026–27
            </span>
            <span className="text-slate-200 text-xs hidden sm:inline">
              Brahmshala SAT (Up to 100% Scholarship): Every Sunday
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-5 text-slate-300 text-[10px] sm:text-xs shrink-0">
            <span className="hidden md:inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              ISO 9001:2015 Accredited
            </span>
            <a
              href={`tel:${BRANCH_INFO.phonePrimary}`}
              className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 transition-colors font-semibold shrink-0"
            >
              <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" />
              <span>Toll-Free: 1800-890-IKAYI</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="h-16 sm:h-20 max-w-[1536px] mx-auto px-3 sm:px-6 lg:px-10 2xl:px-12 flex items-center justify-between gap-2 sm:gap-6">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-1.5 sm:gap-3 shrink-0 group">
          <div className="h-8 sm:h-11 px-1.5 sm:px-2.5 py-1 rounded-lg sm:rounded-xl bg-[#071A2F] flex items-center justify-center shadow-xs border border-slate-800 group-hover:scale-[1.02] transition-transform shrink-0">
            <img 
              src={ibsLogo} 
              alt="Ikayi Brahmshala (IBS) Logo" 
              className="h-5 sm:h-8 w-auto object-contain rounded"
            />
          </div>
          <div className="shrink-0">
            <div className="font-extrabold text-[13px] xs:text-base sm:text-xl tracking-tight text-[#0F172A] leading-none mb-0.5 sm:mb-1 font-['Outfit']">
              IKAYI BRAHMSHALA
            </div>
            <div className="text-[8px] sm:text-[10px] text-slate-500 font-semibold tracking-wider uppercase">
              IIT-JEE • NEET • Olympiad
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links with Selection Effect */}
        <nav className="hidden lg:flex items-center gap-2 text-sm font-semibold text-slate-700">
          {NAV_ITEMS.map(item => {
            const isSelected = activeNav === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setActiveNav(item.id)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center ${
                  isSelected
                    ? 'text-[#071A2F] bg-slate-100 border border-slate-200 shadow-xs'
                    : 'text-slate-600 hover:text-[#071A2F] hover:bg-slate-50 border border-transparent'
                }`}
              >
                <span>{item.label}</span>
                {isSelected && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#D97706] rounded-full animate-fadeIn" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-1 sm:gap-3 shrink-0">
          
          {/* Quick Search Button */}
          <button
            onClick={onOpenSearch}
            className="p-1.5 sm:px-3.5 sm:py-2.5 rounded-lg sm:rounded-xl text-slate-600 hover:text-[#0F172A] bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all text-xs font-semibold flex items-center gap-2"
            title="Search Courses & Exam Info (Ctrl+K)"
          >
            <Search className="w-4 h-4 text-slate-500" />
            <span className="hidden sm:inline text-slate-600">Search</span>
            <kbd className="hidden md:inline bg-white px-1.5 py-0.5 rounded text-[10px] text-slate-400 border border-slate-200 font-mono">
              Ctrl K
            </kbd>
          </button>

          {/* Primary Action CTA Button (Desktop Only to Avoid Mobile Redundancy) */}
          <button
            onClick={onOpenDemoModal}
            className="hidden lg:flex px-5 py-2.5 rounded-xl bg-[#D97706] hover:bg-[#B45309] active:scale-95 text-white font-bold text-sm transition-all shadow-xs items-center gap-2"
          >
            <GraduationCap className="w-4.5 h-4.5 text-white shrink-0" />
            <span>Book SAT Test</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-slate-700 hover:bg-slate-100 rounded-lg sm:rounded-xl lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#D97706]" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>

        </div>

      </div>

      {/* Mobile Navigation Drawer with Dimmed Backdrop */}
      {mobileMenuOpen && (
        <>
          {/* Dimmed Blur Backdrop Overlay */}
          <div 
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 top-[90px] sm:top-[110px] bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          />

          {/* Premium Animated Drawer Panel */}
          <div className="fixed top-[90px] sm:top-[110px] left-0 right-0 z-50 lg:hidden bg-white border-t-2 border-[#D97706] border-b border-slate-200 rounded-b-3xl shadow-2xl overflow-hidden animate-drawer-slide-down max-h-[calc(100vh-120px)] flex flex-col">
            
            {/* Drawer Header Badge */}
            <div className="px-5 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D97706] animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#071A2F]">
                  ACADEMIC NAVIGATION MENU
                </span>
              </div>
              <span className="text-[10px] font-semibold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                6 Core Sections
              </span>
            </div>

            {/* Menu Links with Icons, Subtitles & Selection State */}
            <div className="p-4 space-y-2 overflow-y-auto max-h-[55vh]">
              {NAV_ITEMS.map(item => {
                const isSelected = activeNav === item.id;
                const Icon = item.icon;

                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => {
                      setActiveNav(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-between p-3.5 rounded-2xl font-bold transition-all text-xs sm:text-sm group ${
                      isSelected
                        ? 'bg-[#071A2F] text-white shadow-md border border-slate-800'
                        : 'bg-slate-50 text-slate-800 border border-slate-200/80 hover:bg-amber-50/50 hover:border-amber-300/60'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'bg-amber-500/20 text-amber-300'
                          : 'bg-white text-[#D97706] border border-slate-200 group-hover:border-amber-300'
                      }`}>
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold font-['Outfit'] text-sm">{item.label}</span>
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
                        </div>
                        <span className={`text-[10px] block font-normal ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                          {item.desc}
                        </span>
                      </div>
                    </div>

                    <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-amber-400 translate-x-0.5' : 'text-slate-400 group-hover:translate-x-0.5'}`} />
                  </a>
                );
              })}
            </div>

            {/* Drawer Footer Actions */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 space-y-2.5">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${BRANCH_INFO.phonePrimary}`}
                  className="py-2.5 px-3 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-slate-100"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D97706]" />
                  <span>Call Us</span>
                </a>
                <a
                  href={`https://wa.me/${BRANCH_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-emerald-100"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#059669]" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemoModal();
                }}
                className="w-full bg-[#D97706] hover:bg-[#B45309] active:scale-95 text-white font-bold py-3 px-4 rounded-xl text-center shadow-xs flex items-center justify-center gap-2 text-xs sm:text-sm"
              >
                <GraduationCap className="w-4.5 h-4.5" />
                <span>Book Free Brahmshala SAT Test</span>
              </button>
            </div>

          </div>
        </>
      )}

    </header>
  );
};
