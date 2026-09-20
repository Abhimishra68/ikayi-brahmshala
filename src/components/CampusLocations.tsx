import React from 'react';
import { Clock, Phone, MapPin, ExternalLink, Calendar } from 'lucide-react';

export const CampusLocations: React.FC = () => {
  return (
    <section id="campuses" className="w-full py-16 lg:py-24 bg-[#F8FAFC] border-b border-slate-200">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-[#D97706] uppercase tracking-widest block">
            STATE-OF-THE-ART INFRASTRUCTURE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071A2F] tracking-tight font-['Outfit']">
            Institutional Flagship Campuses
          </h2>
          <p className="text-sm text-slate-600 font-normal">
            Acoustically engineered smart lecture rooms, experimental labs, and silent Gurukul reading pods.
          </p>
        </div>

        {/* Campuses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Campus 1: New Delhi Apex */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold text-amber-900 bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
                  Apex Campus
                </span>
                <span className="text-xs font-medium text-slate-500">New Delhi</span>
              </div>

              <h3 className="text-lg font-bold text-[#071A2F] mb-2 font-['Outfit']">Knowledge Park Campus</h3>
              <p className="text-xs text-slate-600 mb-5 font-normal leading-relaxed">
                Pusa Road Institutional Area, Karol Bagh Metro Pillar 118, New Delhi — 110005
              </p>

              <div className="flex flex-col gap-2.5 text-xs text-slate-700 mb-6 pb-6 border-b border-slate-200 font-medium">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#D97706] shrink-0" />
                  <span>Hours: 08:00 AM – 08:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#D97706] shrink-0" />
                  <a href="tel:+9118008904529" className="hover:text-[#D97706] font-bold text-slate-900">
                    +91-1800-890-4529 (Ext. 01)
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=28.6139,77.2090"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-[#071A2F] hover:bg-[#0B1220] text-white text-xs font-bold text-center transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <a
                href="https://wa.me/9118008904529?text=Hello%20Delhi%20Campus,%20I%20want%20to%20schedule%20a%20campus%20walkthrough."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-[#071A2F] border border-slate-300 text-xs font-bold text-center transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#D97706]" />
                <span>Schedule Campus Walkthrough</span>
              </a>
            </div>
          </div>

          {/* Campus 2: Kota Gurukul */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold text-emerald-900 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
                  Gurukul Wing
                </span>
                <span className="text-xs font-medium text-slate-500">Rajasthan</span>
              </div>

              <h3 className="text-lg font-bold text-[#059669] mb-2 font-['Outfit']">Kota Academic Campus</h3>
              <p className="text-xs text-slate-600 mb-5 font-normal leading-relaxed">
                Sector B, Vigyan Nagar Institutional Enclave, Kota, Rajasthan — 324005
              </p>

              <div className="flex flex-col gap-2.5 text-xs text-slate-700 mb-6 pb-6 border-b border-slate-200 font-medium">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>Hours: 08:00 AM – 08:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#059669] shrink-0" />
                  <a href="tel:+9118008904529" className="hover:text-[#059669] font-bold text-slate-900">
                    +91-1800-890-4529 (Ext. 02)
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=25.1388,75.8491"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-[#071A2F] hover:bg-[#0B1220] text-white text-xs font-bold text-center transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <a
                href="https://wa.me/9118008904529?text=Hello%20Kota%20Campus,%20I%20want%20to%20schedule%20a%20hostel%20inspection."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-[#071A2F] border border-slate-300 text-xs font-bold text-center transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#059669]" />
                <span>Schedule Campus Walkthrough</span>
              </a>
            </div>
          </div>

          {/* Campus 3: Patna Vidyapeeth */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold text-blue-900 bg-blue-50 px-3 py-1 rounded-md border border-blue-200">
                  Vidyapeeth Wing
                </span>
                <span className="text-xs font-medium text-slate-500">Bihar</span>
              </div>

              <h3 className="text-lg font-bold text-[#1D4ED8] mb-2 font-['Outfit']">Patna Examination Center</h3>
              <p className="text-xs text-slate-600 mb-5 font-normal leading-relaxed">
                Boring Canal Road Crossing, Near Alpana Market, Patna, Bihar — 800001
              </p>

              <div className="flex flex-col gap-2.5 text-xs text-slate-700 mb-6 pb-6 border-b border-slate-200 font-medium">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#1D4ED8] shrink-0" />
                  <span>Hours: 08:00 AM – 08:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#1D4ED8] shrink-0" />
                  <a href="tel:+9118008904529" className="hover:text-[#1D4ED8] font-bold text-slate-900">
                    +91-1800-890-4529 (Ext. 03)
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=25.6127,85.1245"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-[#071A2F] hover:bg-[#0B1220] text-white text-xs font-bold text-center transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <a
                href="https://wa.me/9118008904529?text=Hello%20Patna%20Campus,%20I%20want%20to%20inquire%20about%20admissions."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-[#071A2F] border border-slate-300 text-xs font-bold text-center transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#1D4ED8]" />
                <span>Schedule Campus Walkthrough</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
