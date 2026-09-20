import React from 'react';
import { Phone, MessageSquare, MapPin, GraduationCap } from 'lucide-react';
import { BRANCH_INFO } from '../data/coachingData';

interface FloatingActionsProps {
  onOpenDemoModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenDemoModal }) => {
  return (
    <>
      {/* Desktop Floating Action Dock (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col items-end gap-3.5 pointer-events-none">
        
        {/* 1. Find Nearest Campus Button */}
        <div className="relative group pointer-events-auto flex items-center justify-center">
          {/* Periodic Radar Pulse Wave */}
          <div className="absolute inset-0 rounded-2xl bg-blue-500/30 animate-radar-wave pointer-events-none" />
          <a
            href="#campuses"
            aria-label="Find Nearest Campus"
            className="relative w-12 h-12 rounded-2xl bg-[#071A2F] hover:bg-[#0B1220] text-white shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center border border-slate-700/80"
          >
            <MapPin className="w-5.5 h-5.5 text-amber-400 animate-ring-shake shrink-0" />
          </a>
          <span className="opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 rounded-xl bg-[#071A2F] text-white text-xs font-bold whitespace-nowrap shadow-xl border border-slate-700">
            Find Nearest Center
          </span>
        </div>

        {/* 2. Call Counselor Button */}
        <div className="relative group pointer-events-auto flex items-center justify-center">
          {/* Periodic Radar Pulse Wave */}
          <div className="absolute inset-0 rounded-2xl bg-amber-500/30 animate-radar-wave-delay-1 pointer-events-none" />
          <a
            href={`tel:${BRANCH_INFO.phonePrimary}`}
            aria-label="Call Admissions Counselor"
            className="relative w-12 h-12 rounded-2xl bg-[#071A2F] hover:bg-[#0B1220] text-white shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center border border-slate-700/80"
          >
            <Phone className="w-5.5 h-5.5 text-amber-400 animate-ring-shake-delay-1 shrink-0" />
          </a>
          <span className="opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 rounded-xl bg-[#071A2F] text-white text-xs font-bold whitespace-nowrap shadow-xl border border-slate-700">
            Call Counselor: 1800-890-IKAYI
          </span>
        </div>

        {/* 3. WhatsApp Button */}
        <div className="relative group pointer-events-auto flex items-center justify-center">
          {/* Periodic Radar Pulse Wave */}
          <div className="absolute inset-0 rounded-2xl bg-emerald-500/40 animate-radar-wave-delay-2 pointer-events-none" />
          <a
            href={`https://wa.me/${BRANCH_INFO.whatsappNumber}?text=Hello%20Ikayi%20Brahmshala,%20I%20wish%20to%20inquire%20about%20admissions.`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="relative w-12 h-12 rounded-2xl bg-[#059669] hover:bg-[#047857] text-white shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center border border-emerald-400/50"
          >
            <MessageSquare className="w-5.5 h-5.5 fill-white text-white animate-ring-shake-delay-2 shrink-0" />
          </a>
          <span className="opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 rounded-xl bg-[#071A2F] text-white text-xs font-bold whitespace-nowrap shadow-xl border border-slate-700">
            Chat on WhatsApp
          </span>
        </div>

      </div>

      {/* Mobile Sticky Bottom Quick Action Dock */}
      <aside className="md:hidden fixed bottom-0 left-0 w-full z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 py-2 px-3 shadow-lg">
        <div className="grid grid-cols-4 gap-2">
          <a
            href={`tel:${BRANCH_INFO.phonePrimary}`}
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-slate-100 text-[#071A2F] text-[10px] font-bold"
          >
            <Phone className="w-4 h-4 text-[#D97706] mb-0.5 animate-ring-shake-delay-1" />
            <span>Call</span>
          </a>

          <a
            href={`https://wa.me/${BRANCH_INFO.whatsappNumber}?text=Hello%20Ikayi%20Brahmshala,%20I%20wish%20to%20inquire%20about%20admissions.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-emerald-50 text-emerald-900 text-[10px] font-bold border border-emerald-200"
          >
            <MessageSquare className="w-4 h-4 fill-[#059669] text-[#059669] mb-0.5 animate-ring-shake-delay-2" />
            <span>WhatsApp</span>
          </a>

          <a
            href="#campuses"
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-slate-100 text-[#071A2F] text-[10px] font-bold"
          >
            <MapPin className="w-4 h-4 text-[#1D4ED8] mb-0.5 animate-ring-shake" />
            <span>Centers</span>
          </a>

          <button
            onClick={onOpenDemoModal}
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-[#D97706] text-white text-[10px] font-bold shadow-xs"
          >
            <GraduationCap className="w-4 h-4 text-white mb-0.5" />
            <span>Free SAT</span>
          </button>
        </div>
      </aside>
    </>
  );
};
