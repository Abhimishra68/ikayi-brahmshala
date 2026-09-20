import React from 'react';
import { TOPPERS } from '../data/coachingData';
import { Trophy, Quote, ArrowRight } from 'lucide-react';

export const HallOfFame: React.FC = () => {
  return (
    <section id="toppers" className="w-full py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-[#D97706] text-xs font-bold uppercase tracking-wider border border-amber-200">
            <Trophy className="w-3.5 h-3.5 text-[#D97706]" />
            <span>Hall of Fame & Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071A2F] tracking-tight font-['Outfit']">
            Our Rankers Speak for Our Pedagogy
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            Year after year, Ikayi Brahmshala students secure top All India Ranks in IIT-JEE & NEET with consistent 99.9+ percentile scores.
          </p>
        </div>

        {/* Toppers Grid - Full Width Spanning 4 Columns */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOPPERS.map(topper => (
            <div
              key={topper.id}
              className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all duration-200 relative group"
            >
              
              {/* AIR Rank Banner Badge */}
              <div className="absolute -top-3 left-6 bg-[#D97706] text-white font-bold text-xs px-3 py-1 rounded-full shadow-xs flex items-center gap-1.5">
                <Trophy className="w-3.5 h-3.5 text-amber-200" />
                <span>{topper.rank}</span>
              </div>

              <div className="space-y-4 pt-2">
                {/* Photo & Name */}
                <div className="flex items-center gap-3.5">
                  <img
                    src={topper.photoUrl}
                    alt={topper.name}
                    className="w-13 h-13 rounded-full object-cover border-2 border-amber-400 shadow-xs shrink-0"
                  />
                  <div>
                    <h3 className="font-bold text-[#071A2F] text-base group-hover:text-[#1D4ED8] transition-colors font-['Outfit']">
                      {topper.name}
                    </h3>
                    <div className="text-xs font-semibold text-[#1D4ED8]">{topper.exam}</div>
                    <div className="text-[11px] text-[#059669] font-bold bg-emerald-50 px-2 py-0.5 rounded inline-block mt-1 border border-emerald-200">
                      {topper.percentile}
                    </div>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <div className="relative pt-2">
                  <Quote className="w-5 h-5 text-slate-300 absolute -top-1 -left-1" />
                  <p className="text-xs text-slate-600 italic relative z-10 leading-relaxed pl-4 font-normal">
                    "{topper.testimonial}"
                  </p>
                </div>
              </div>

              {/* Dream College Destination */}
              <div className="mt-6 pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">Selected At:</span>
                <span className="font-bold text-[#071A2F]">{topper.dreamCollege}</span>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-12 bg-[#071A2F] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-slate-800">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-amber-400 font-['Outfit']">
              Want Your Name in Next Year's Hall of Fame?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm font-normal">
              Join our specialized batch with dedicated 1:1 mentorship and small batch sizes.
            </p>
          </div>
          <a
            href="#programs"
            className="bg-[#D97706] hover:bg-[#B45309] text-white font-bold px-6 py-3 rounded-xl transition-colors shadow-xs text-xs sm:text-sm whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span>Explore Success Batches</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </a>
        </div>

      </div>
    </section>
  );
};
