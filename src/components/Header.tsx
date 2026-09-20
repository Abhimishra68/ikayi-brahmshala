import React, { useState, useEffect } from 'react';
import { Phone, CheckCircle2, GraduationCap, Menu, X, Search } from 'lucide-react';
import { BRANCH_INFO } from '../data/coachingData';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenDemoModal: () => void;
}

const NAV_ITEMS = [
  { id: 'programs', label: 'Programs', href: '#programs' },
  { id: 'fee-estimator', label: 'Fees & Aid', href: '#fee-estimator' },
  { id: 'pedagogy-matrix', label: 'Pedagogy', href: '#pedagogy-matrix' },
  { id: 'faculty-benchmarks', label: 'Faculty', href: '#faculty-benchmarks' },
  { id: 'toppers', label: 'Results', href: '#toppers' },
  { id: 'campuses', label: 'Campuses', href: '#campuses' }
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
      <div className="w-full bg-[#071A2F] text-white py-2 px-4 sm:px-6 lg:px-10 2xl:px-12 border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto flex flex-wrap items-center justify-between gap-2 text-xs font-medium">
          
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="inline-flex items-center gap-1.5 bg-[#D97706] px-2.5 py-0.5 rounded-full text-white font-bold tracking-wide text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Admissions Open 2026–27
            </span>
            <span className="text-slate-200 text-xs hidden sm:inline">
              Brahmshala SAT (Up to 100% Scholarship): Every Sunday
            </span>
          </div>

          <div className="flex items-center gap-5 ml-auto text-slate-300 text-xs">
            <span className="hidden md:inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              ISO 9001:2015 Accredited
            </span>
            <a
              href={`tel:${BRANCH_INFO.phonePrimary}`}
              className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Toll-Free: 1800-890-IKAYI</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="h-20 max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12 flex items-center justify-between gap-6">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 shrink-0 group">
          <div className="h-11 px-2.5 py-1 rounded-xl bg-[#071A2F] flex items-center justify-center shadow-xs border border-slate-800 group-hover:scale-[1.02] transition-transform">
            <img 
              src="/ibs-logo.jpg" 
              alt="Ikayi Brahmshala (IBS) Logo" 
              className="h-8 w-auto object-contain rounded"
            />
          </div>
          <div>
            <div className="font-extrabold text-lg sm:text-xl tracking-tight text-[#0F172A] leading-none mb-1 font-['Outfit']">
              IKAYI BRAHMSHALA
            </div>
            <div className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase">
              IIT-JEE • NEET • Olympiad Academy
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
        <div className="flex items-center gap-3 shrink-0">
          
          {/* Quick Search Button */}
          <button
            onClick={onOpenSearch}
            className="px-3.5 py-2.5 rounded-xl text-slate-600 hover:text-[#0F172A] bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all text-xs font-semibold flex items-center gap-2"
            title="Search Courses & Exam Info (Ctrl+K)"
          >
            <Search className="w-4 h-4 text-slate-500" />
            <span className="hidden sm:inline text-slate-600">Search</span>
            <kbd className="hidden md:inline bg-white px-1.5 py-0.5 rounded text-[10px] text-slate-400 border border-slate-200 font-mono">
              Ctrl K
            </kbd>
          </button>

          {/* Primary Action CTA Button */}
          <button
            onClick={onOpenDemoModal}
            className="px-5 py-2.5 rounded-xl bg-[#D97706] hover:bg-[#B45309] active:scale-95 text-white font-bold text-xs sm:text-sm transition-all shadow-xs flex items-center gap-2"
          >
            <GraduationCap className="w-4.5 h-4.5 text-white" />
            <span>Book SAT Test</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:bg-slate-100 rounded-xl lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-3 shadow-xl">
          {NAV_ITEMS.map(item => {
            const isSelected = activeNav === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => {
                  setActiveNav(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between p-3 rounded-xl font-bold transition-all text-xs sm:text-sm ${
                  isSelected
                    ? 'bg-[#071A2F] text-white'
                    : 'text-slate-800 hover:text-[#D97706] hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
                {isSelected && <span className="w-2 h-2 rounded-full bg-[#D97706]" />}
              </a>
            );
          })}

          <div className="pt-3 border-t border-slate-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemoModal();
              }}
              className="w-full bg-[#D97706] hover:bg-[#B45309] text-white font-bold py-3 rounded-xl text-center shadow-xs flex items-center justify-center gap-2 text-xs sm:text-sm"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Book Free SAT Test</span>
            </button>
          </div>
        </div>
      )}

    </header>
  );
};
