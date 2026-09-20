import React, { useState, useEffect } from 'react';
import { Search, X, BookOpen, Calendar, ArrowRight } from 'lucide-react';
import { COURSES, UPCOMING_EXAMS } from '../data/coachingData';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCourse: (course: any) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({ isOpen, onClose, onSelectCourse }) => {
  const [query, setQuery] = useState('');

  // Handle Cmd+K / Ctrl+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const matchedCourses = COURSES.filter(c =>
    c.title.toLowerCase().includes(query.toLowerCase()) ||
    c.targetClass.toLowerCase().includes(query.toLowerCase()) ||
    c.category.toLowerCase().includes(query.toLowerCase())
  );

  const matchedExams = UPCOMING_EXAMS.filter(e =>
    e.name.toLowerCase().includes(query.toLowerCase()) ||
    e.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-slate-900/75 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
        
        {/* Search Header */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-[#071A2F] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search courses, exams, fees, scholarships... (e.g. JEE, NEET, Class 11)"
            className="flex-1 bg-transparent text-sm text-slate-900 placeholder-slate-400 focus:outline-none font-medium"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          
          {/* Courses */}
          {matchedCourses.length > 0 && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#1D4ED8]" />
                <span>Courses & Batches ({matchedCourses.length})</span>
              </div>
              <div className="space-y-2">
                {matchedCourses.map(course => (
                  <button
                    key={course.id}
                    onClick={() => {
                      onSelectCourse(course);
                      onClose();
                    }}
                    className="w-full p-3 rounded-xl border border-slate-200 hover:border-[#1D4ED8] hover:bg-blue-50/30 text-left transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-bold text-sm text-[#071A2F] group-hover:text-[#1D4ED8] font-['Outfit']">
                        {course.title}
                      </div>
                      <div className="text-xs text-slate-500 font-normal">
                        {course.targetClass} • Fees: {course.fees} • {course.mode}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#1D4ED8]" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Exams */}
          {matchedExams.length > 0 && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#D97706]" />
                <span>Exam Dates ({matchedExams.length})</span>
              </div>
              <div className="space-y-2">
                {matchedExams.map(exam => (
                  <div
                    key={exam.id}
                    className="p-3 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between text-xs"
                  >
                    <div>
                      <div className="font-bold text-[#071A2F]">{exam.name}</div>
                      <div className="text-slate-500 font-normal">{exam.date}</div>
                    </div>
                    <span className="font-semibold text-[#D97706] bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                      {exam.daysRemaining} Days Remaining
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {matchedCourses.length === 0 && matchedExams.length === 0 && (
            <div className="text-center py-8 text-slate-500 text-xs font-normal">
              No matching courses or exams found. Try searching for "JEE", "NEET", "Foundation", or "Scholarship".
            </div>
          )}

        </div>

        {/* Footer info */}
        <div className="bg-slate-100 px-4 py-2.5 text-[11px] text-slate-500 flex justify-between items-center border-t border-slate-200">
          <span>Press ESC or click X to close search</span>
          <span className="font-semibold text-[#071A2F]">Ikayi Brahmshala Admissions</span>
        </div>

      </div>
    </div>
  );
};
