import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { BRANCH_INFO } from '../data/coachingData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#071A2F] text-white pt-16 pb-24 sm:pb-16 border-t-4 border-[#D97706]">
      
      {/* Schema.org Local SEO JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Ikayi Brahmshala",
            "url": "https://www.ikayibrahmshala.org",
            "telephone": BRANCH_INFO.phonePrimary,
            "email": BRANCH_INFO.email,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": BRANCH_INFO.address,
              "addressLocality": "New Delhi",
              "addressRegion": "Delhi",
              "postalCode": "110005",
              "addressCountry": "IN"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Elite Preparatory Cohorts",
              "itemListElement": [
                {
                  "@type": "Course",
                  "name": "Brahmastra: 2-Year Integrated JEE Advanced & Olympiad Track",
                  "description": "Rigorous IIT-JEE training for Class 11-12 with 30-student cohort limits."
                },
                {
                  "@type": "Course",
                  "name": "Dhanvantari: 2-Year Comprehensive NEET-UG Medical Immersion",
                  "description": "NCERT axiomatic drill with AIIMS clinical council mentorship."
                },
                {
                  "@type": "Course",
                  "name": "Aryabhata: Foundation & Junior Olympiad Accelerator",
                  "description": "STEM intuition and Olympiad preparation for Classes 8, 9 & 10."
                }
              ]
            }
          })
        }}
      />

      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Summary */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="h-11 px-2.5 py-1 rounded-xl bg-[#0B1220] border border-slate-800 flex items-center justify-center shadow-xs">
                <img 
                  src="/ibs-logo.jpg" 
                  alt="Ikayi Brahmshala (IBS) Logo" 
                  className="h-8 w-auto object-contain rounded"
                />
              </div>
              <div className="font-extrabold text-xl tracking-tight text-white font-['Outfit']">
                IKAYI BRAHMSHALA
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm font-normal">
              Grounded in pure conceptual clarity, rigorous scientific pedagogy, and timeless scholarly dedication. Premier institutional preparatory board for JEE (Advanced/Main), NEET-UG, and National Olympiads.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 bg-slate-900 text-emerald-400 px-3 py-1 rounded-lg text-[11px] font-semibold border border-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                ISO 9001:2015 Accredited
              </span>
              <span className="inline-flex items-center gap-1.5 bg-slate-900 text-amber-300 px-3 py-1 rounded-lg text-[11px] font-semibold border border-slate-800">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                Strict 30 Seat Cohorts
              </span>
            </div>
          </div>

          {/* Col 1: Academic Wings */}
          <div>
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-3">Academic Wings</h4>
            <ul className="flex flex-col gap-2 text-xs text-slate-300 font-normal">
              <li><a href="#programs" className="hover:text-amber-300 transition-colors">Class 8-10 Brahm Foundation</a></li>
              <li><a href="#programs" className="hover:text-amber-300 transition-colors">JEE Advanced Apex Wing</a></li>
              <li><a href="#programs" className="hover:text-amber-300 transition-colors">NEET Medical Achievers Cell</a></li>
              <li><a href="#programs" className="hover:text-amber-300 transition-colors">National Olympiad Bureau (IOQM)</a></li>
              <li><a href="#fee-estimator" className="hover:text-amber-300 transition-colors">Brahmshala SAT Scholarships</a></li>
            </ul>
          </div>

          {/* Col 2: Academic Transparency */}
          <div>
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-3">Transparency</h4>
            <ul className="flex flex-col gap-2 text-xs text-slate-300 font-normal">
              <li><a href="#pedagogy-matrix" className="hover:text-amber-300 transition-colors">Biometric SMS Attendance</a></li>
              <li><a href="#pedagogy-matrix" className="hover:text-amber-300 transition-colors">Algorithmic Error Diary</a></li>
              <li><a href="#faculty-benchmarks" className="hover:text-amber-300 transition-colors">1-on-1 Faculty Office Hours</a></li>
              <li><a href="#fee-estimator" className="hover:text-amber-300 transition-colors">Transparent Fee Estimator</a></li>
              <li><a href="#campuses" className="hover:text-amber-300 transition-colors">Campus Visit Protocol</a></li>
            </ul>
          </div>

          {/* Col 3: Institutional Campuses */}
          <div>
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-3">Campuses</h4>
            <ul className="flex flex-col gap-3 text-xs text-slate-300">
              <li>
                <strong className="text-white block font-bold">New Delhi — Apex Campus</strong>
                <span className="text-slate-400">Pusa Road, Metro Pillar 118</span>
                <a href="https://www.google.com/maps/dir/?api=1&destination=28.6139,77.2090" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 mt-0.5 font-semibold">
                  <span>Google Maps Location</span>
                  <ArrowRight className="w-3 h-3 text-amber-400" />
                </a>
              </li>
              <li>
                <strong className="text-white block font-bold">Kota — Gurukul Campus</strong>
                <span className="text-slate-400">Vigyan Nagar Institutional Enclave</span>
                <a href="https://www.google.com/maps/dir/?api=1&destination=25.1388,75.8491" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 mt-0.5 font-semibold">
                  <span>Google Maps Location</span>
                  <ArrowRight className="w-3 h-3 text-amber-400" />
                </a>
              </li>
              <li>
                <strong className="text-white block font-bold">Patna — Vidyapeeth Center</strong>
                <span className="text-slate-400">Boring Road Crossing</span>
                <a href="https://www.google.com/maps/dir/?api=1&destination=25.6127,85.1245" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 mt-0.5 font-semibold">
                  <span>Google Maps Location</span>
                  <ArrowRight className="w-3 h-3 text-amber-400" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-normal">
          <div className="flex flex-wrap items-center gap-4">
            <a href="#" className="hover:text-white">Academic Regulations</a>
            <a href="#" className="hover:text-white">Refund & Fee Policy</a>
            <a href="#" className="hover:text-white">SAT Examination Bylaws</a>
            <a href="#" className="hover:text-white">Campus Safety</a>
          </div>
          <div>
            © 2026 Ikayi Brahmshala Education Foundation. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
