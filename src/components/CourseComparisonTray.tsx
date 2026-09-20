import React from 'react';
import { COURSES } from '../data/coachingData';
import type { Course } from '../data/coachingData';
import { X, ArrowRight, Layers } from 'lucide-react';

interface CourseComparisonTrayProps {
  selectedIds: string[];
  onRemove: (id: string) => void;
  onClear: () => void;
  onBookCourse: (course: Course) => void;
}

export const CourseComparisonTray: React.FC<CourseComparisonTrayProps> = ({
  selectedIds,
  onRemove,
  onClear,
  onBookCourse
}) => {
  if (selectedIds.length === 0) return null;

  const comparedCourses = COURSES.filter(c => selectedIds.includes(c.id));

  return (
    <div className="fixed bottom-16 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 w-full max-w-4xl px-4 animate-fadeIn">
      <div className="bg-[#071A2F] text-white rounded-2xl shadow-2xl border border-slate-700 p-4 sm:p-5 backdrop-blur-md">
        
        {/* Header bar */}
        <div className="flex justify-between items-center pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-amber-400" />
            <span className="font-bold text-sm sm:text-base font-['Outfit']">Course Comparison Tray</span>
            <span className="bg-[#D97706] text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
              {comparedCourses.length} Selected
            </span>
          </div>

          <button
            onClick={onClear}
            className="text-xs text-slate-300 hover:text-white underline font-medium"
          >
            Clear All
          </button>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-3">
          {comparedCourses.map(course => (
            <div key={course.id} className="bg-[#0B1220] border border-slate-800 rounded-xl p-3 relative flex flex-col justify-between space-y-2 text-xs">
              <button
                onClick={() => onRemove(course.id)}
                className="absolute top-2 right-2 text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800 transition-colors"
                title="Remove from comparison"
              >
                <X className="w-3.5 h-3.5" />
              </button>

              <div className="pr-6">
                <div className="text-[10px] text-amber-400 font-bold uppercase">{course.targetClass}</div>
                <div className="font-bold text-white text-sm line-clamp-1 font-['Outfit']">{course.title}</div>
              </div>

              <div className="space-y-1 text-slate-300 text-[11px] pt-1 border-t border-slate-800">
                <div className="flex justify-between">
                  <span className="text-slate-400">Fees:</span>
                  <span className="font-bold text-amber-300">{course.fees}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Mode:</span>
                  <span className="text-white font-semibold">{course.mode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Duration:</span>
                  <span className="text-white">{course.duration}</span>
                </div>
              </div>

              <button
                onClick={() => onBookCourse(course)}
                className="w-full bg-[#D97706] hover:bg-[#B45309] text-white font-bold py-1.5 px-2 rounded-lg text-[11px] transition-colors flex items-center justify-center gap-1 shadow-xs"
              >
                <span>Select Course</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
