import React from 'react';
import { Phone, MessageSquare, MapPin, GraduationCap } from 'lucide-react';
import { BRANCH_INFO } from '../data/coachingData';

interface MobileActionBarProps {
  onOpenDemoModal: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onOpenDemoModal }) => {
  return (
    <aside className="sm:hidden fixed bottom-0 left-0 w-full z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200 py-2 px-3 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
      <div className="grid grid-cols-4 gap-2 text-center">
        
        {/* Call */}
        <a
          href={`tel:${BRANCH_INFO.phonePrimary}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-slate-100 text-indigo-950 text-[10px] font-bold transition-colors"
        >
          <Phone className="w-5 h-5 text-amber-600 mb-0.5" />
          <span>Call</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${BRANCH_INFO.whatsappNumber}?text=Hello%20Ikayi%20Brahmshala,%20I%20want%20to%20inquire%20about%20admissions.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-emerald-50 text-emerald-800 text-[10px] font-bold transition-colors"
        >
          <MessageSquare className="w-5 h-5 fill-emerald-600 text-emerald-600 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Centers / Location */}
        <a
          href="#campuses"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-slate-100 text-indigo-950 text-[10px] font-bold transition-colors"
        >
          <MapPin className="w-5 h-5 text-indigo-700 mb-0.5" />
          <span>Centers</span>
        </a>

        {/* Free SAT / Demo Button */}
        <button
          onClick={onOpenDemoModal}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-amber-500 text-indigo-950 text-[10px] font-extrabold shadow-sm transition-transform active:scale-95"
        >
          <GraduationCap className="w-5 h-5 text-indigo-950 mb-0.5" />
          <span>Free SAT</span>
        </button>

      </div>
    </aside>
  );
};
