import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, Sparkles, ArrowRight, Play, Pause } from 'lucide-react';
import { COURSES } from '../data/coachingData';
import type { Course } from '../data/coachingData';

interface ProgramCarouselProps {
  onOpenDemoModal: (course?: Course) => void;
}

export const ProgramCarousel: React.FC<ProgramCarouselProps> = ({
  onOpenDemoModal
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const filteredCourses = activeCategory === 'all'
    ? COURSES
    : COURSES.filter(c => c.category === activeCategory);

  // Automatic Horizontal Smooth Auto-Scroll Loop
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        // If reached end, wrap back to start smoothly
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollBy({ left: 340, behavior: 'smooth' });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, filteredCourses]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  const getCategoryStyles = (category: string) => {
    switch (category) {
      case 'jee':
        return {
          badgeBg: 'bg-[#071A2F] text-amber-300',
          btnBg: 'bg-[#D97706] hover:bg-[#B45309]',
        };
      case 'neet':
        return {
          badgeBg: 'bg-[#059669] text-white',
          btnBg: 'bg-[#059669] hover:bg-[#047857]',
        };
      case 'foundation':
        return {
          badgeBg: 'bg-[#1D4ED8] text-white',
          btnBg: 'bg-[#1D4ED8] hover:bg-[#1E40AF]',
        };
      default:
        return {
          badgeBg: 'bg-slate-800 text-white',
          btnBg: 'bg-[#D97706] hover:bg-[#B45309]',
        };
    }
  };

  return (
    <section id="programs" className="w-full py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-[#D97706] text-xs font-bold uppercase tracking-wider mb-2 border border-amber-200">
              <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
              <span>Targeted Academic Cohorts</span>
              <span className="text-slate-300">•</span>
              <span className="inline-flex items-center gap-1 text-[11px] text-slate-600 font-semibold lowercase">
                {isPaused ? <Pause className="w-3 h-3 text-amber-600" /> : <Play className="w-3 h-3 text-emerald-600 animate-pulse" />}
                {isPaused ? 'paused' : 'auto-scrolling'}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071A2F] tracking-tight font-['Outfit']">
              Engineered for Top 100 Ranks
            </h2>
            <p className="text-sm text-slate-600 font-normal mt-1">
              Every cohort is strictly capped at 30 students. Swipe or hover to inspect details.
            </p>
          </div>

          {/* Carousel Scroll Controls */}
          <div className="flex items-center gap-2.5 self-start md:self-auto">
            <span className="text-xs text-slate-500 font-medium hidden sm:inline">Auto-Scroll Carousel</span>
            <button
              onClick={scrollLeft}
              aria-label="Previous Programs"
              className="w-10 h-10 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-[#071A2F] flex items-center justify-center transition-all shadow-xs active:scale-95"
              type="button"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              aria-label="Next Programs"
              className="w-10 h-10 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-[#071A2F] flex items-center justify-center transition-all shadow-xs active:scale-95"
              type="button"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="mb-8 flex flex-wrap gap-2">
          {[
            { id: 'all', label: 'All Cohorts' },
            { id: 'jee', label: 'IIT-JEE (Main & Adv)' },
            { id: 'neet', label: 'NEET Medical' },
            { id: 'foundation', label: 'Foundation (8th-10th)' },
            { id: 'crash', label: 'Crash & Dropper Tracks' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                activeCategory === tab.id
                  ? 'bg-[#071A2F] text-white border-[#071A2F] shadow-xs'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Carousel Container with Spinning Gradient Border Cards */}
        <div 
          className="relative w-full group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Subtle Left & Right Edge Fade Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6 pt-2 w-full scroll-smooth"
          >
            {filteredCourses.map(course => {
              const styles = getCategoryStyles(course.category);

              return (
                <div
                  key={course.id}
                  className="snap-start shrink-0 w-[280px] xs:w-[320px] sm:w-[350px] lg:w-[380px] xl:w-[410px] spinning-gradient-card transition-transform duration-300 hover:scale-[1.015]"
                >
                  <div className="spinning-gradient-card-inner">
                    
                    <div className="p-6 space-y-4">
                      
                      {/* Top Badge & Target Class */}
                      <div className="flex items-center justify-between gap-2">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold ${styles.badgeBg}`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          {course.badge || 'Strict 30-Seat Cap'}
                        </span>
                        <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                          {course.targetClass}
                        </span>
                      </div>

                      {/* Course Title */}
                      <h3 className="text-lg font-bold text-[#071A2F] leading-snug font-['Outfit']">
                        {course.title}
                      </h3>

                      {/* Features List */}
                      <div className="space-y-2 pt-1">
                        {course.features.slice(0, 3).map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-normal">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0 mt-0.5" />
                            <span className="leading-tight">{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Metrics Box */}
                      <div className="grid grid-cols-3 gap-2 p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
                        <div>
                          <span className="text-xs font-bold text-[#071A2F] block">{course.duration}</span>
                          <span className="text-[10px] text-slate-500 font-medium">Duration</span>
                        </div>
                        <div className="border-x border-slate-200">
                          <span className="text-xs font-bold text-[#071A2F] block">{course.mode}</span>
                          <span className="text-[10px] text-slate-500 font-medium">Mode</span>
                        </div>
                        <div>
                          <span className="text-xs font-bold text-[#D97706] block">{course.fees}</span>
                          <span className="text-[10px] text-slate-500 font-medium">Annual Fee</span>
                        </div>
                      </div>

                    </div>

                    {/* Card Footer Actions - Full Width CTA */}
                    <div className="p-4 bg-slate-50/80 border-t border-slate-200 flex items-center">
                      <button
                        onClick={() => onOpenDemoModal(course)}
                        className={`w-full py-3 px-4 rounded-xl ${styles.btnBg} text-white text-xs sm:text-sm font-bold text-center transition-colors shadow-xs flex items-center justify-center gap-2`}
                      >
                        <span>Apply for Cohort</span>
                        <ArrowRight className="w-4 h-4 text-white" />
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
