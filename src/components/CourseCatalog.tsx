import React, { useState } from 'react';
import { COURSES } from '../data/coachingData';
import type { Course } from '../data/coachingData';
import { CheckCircle2, Sparkles, ArrowRight, Flame } from 'lucide-react';

interface CourseCatalogProps {
  onBookCourse: (course: Course) => void;
}

export const CourseCatalog: React.FC<CourseCatalogProps> = ({
  onBookCourse
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredCourses = activeCategory === 'all'
    ? COURSES
    : COURSES.filter(c => c.category === activeCategory);

  return (
    <section id="courses" className="w-full py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-[#D97706] text-xs font-bold uppercase tracking-wider border border-amber-200">
            <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
            <span>Targeted Classroom Programs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071A2F] tracking-tight font-['Outfit']">
            Designed for Maximum Rank Acceleration
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            Select your academic goal below to explore course details, batch schedules, fees, and scholarship eligibility.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {[
            { id: 'all', label: 'All Programs' },
            { id: 'jee', label: 'IIT-JEE (Main & Adv)' },
            { id: 'neet', label: 'NEET Medical' },
            { id: 'foundation', label: 'Foundation (8th-10th)' },
            { id: 'crash', label: 'Crash Courses' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all border ${
                activeCategory === tab.id
                  ? 'bg-[#071A2F] text-amber-300 border-[#071A2F] shadow-xs'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => {
            return (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden relative"
              >
                
                {/* Top Badge */}
                {course.badge && (
                  <div className="absolute top-4 right-4 z-10 bg-[#D97706] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                    {course.badge}
                  </div>
                )}

                <div className="p-6 sm:p-7 space-y-4">
                  
                  {/* Category Pill */}
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#1D4ED8] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                      {course.targetClass}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">• {course.mode}</span>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-xl font-bold text-[#071A2F] leading-snug font-['Outfit']">
                    {course.title}
                  </h3>

                  {/* Batch Info */}
                  <div className="text-xs text-slate-600 space-y-1 bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-normal">Duration:</span>
                      <span className="font-bold text-slate-900">{course.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-normal">Batch Start:</span>
                      <span className="font-bold text-[#1D4ED8]">{course.batchStartTime}</span>
                    </div>
                  </div>

                  {/* Feature Highlights List */}
                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-bold text-slate-900 uppercase tracking-wider text-[10px]">What's Included:</div>
                    {course.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-normal">
                        <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Card Footer Actions */}
                <div className="bg-slate-50 p-6 border-t border-slate-200 space-y-3">
                  
                  {/* Fees & Seats */}
                  <div className="flex justify-between items-baseline">
                    <div>
                      <div className="text-xs text-slate-500 font-normal">Annual Fee</div>
                      <div className="text-lg font-bold text-[#071A2F] font-['Outfit']">{course.fees}</div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-[#D97706] text-xs font-bold">
                        <Flame className="w-3.5 h-3.5 fill-[#D97706] text-[#D97706]" />
                        <span>{course.seatsLeft} Seats Left</span>
                      </div>
                    </div>
                  </div>

                  {/* Scholarship Note */}
                  <div className="text-xs text-[#059669] font-semibold bg-emerald-50 border border-emerald-200 p-2 rounded-lg text-center">
                    {course.scholarshipOffer}
                  </div>

                  {/* Full Width Button */}
                  <div className="pt-1">
                    <button
                      onClick={() => onBookCourse(course)}
                      className="w-full bg-[#D97706] hover:bg-[#B45309] text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-all shadow-xs flex items-center justify-center gap-1.5"
                    >
                      <span>Enquire / Register</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
