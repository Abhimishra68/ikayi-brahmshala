import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, RotateCcw, Sparkles } from 'lucide-react';
import { COURSES } from '../data/coachingData';
import type { Course } from '../data/coachingData';

interface CourseFinderQuizProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCourse: (course: Course) => void;
}

export const CourseFinderQuiz: React.FC<CourseFinderQuizProps> = ({ isOpen, onClose, onSelectCourse }) => {
  const [step, setStep] = useState<number>(1);
  const [_studentClass, setStudentClass] = useState<string>('');
  const [targetGoal, setTargetGoal] = useState<string>('');
  const [_learningMode, setLearningMode] = useState<string>('');
  const [matchedCourse, setMatchedCourse] = useState<Course | null>(null);

  if (!isOpen) return null;

  const handleClassSelect = (val: string) => {
    setStudentClass(val);
    setStep(2);
  };

  const handleGoalSelect = (val: string) => {
    setTargetGoal(val);
    setStep(3);
  };

  const handleModeSelect = (modeVal: string) => {
    setLearningMode(modeVal);
    
    // Find best matching course
    let result = COURSES.find(c => {
      if (targetGoal === 'jee') return c.category === 'jee';
      if (targetGoal === 'neet') return c.category === 'neet';
      if (targetGoal === 'foundation') return c.category === 'foundation';
      return true;
    });

    if (!result) result = COURSES[0];
    setMatchedCourse(result);
    setStep(4);
  };

  const resetQuiz = () => {
    setStep(1);
    setStudentClass('');
    setTargetGoal('');
    setLearningMode('');
    setMatchedCourse(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="bg-[#071A2F] text-white p-4 sm:p-6 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 text-amber-400 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Personalized Course Recommendation</span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold font-['Outfit']">AI Course Matcher Quiz</h2>
          <p className="text-xs text-slate-300 mt-0.5 font-normal">Answer 3 quick questions to discover your ideal batch & scholarship eligibility.</p>

          {/* Progress Indicator */}
          {step < 4 && (
            <div className="flex items-center gap-2 mt-3.5">
              <div className={`h-1.5 flex-1 rounded-full ${step >= 1 ? 'bg-[#D97706]' : 'bg-slate-800'}`} />
              <div className={`h-1.5 flex-1 rounded-full ${step >= 2 ? 'bg-[#D97706]' : 'bg-slate-800'}`} />
              <div className={`h-1.5 flex-1 rounded-full ${step >= 3 ? 'bg-[#D97706]' : 'bg-slate-800'}`} />
            </div>
          )}
        </div>

        {/* Content Body with Independent Scrollbar */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
          
          {/* Step 1: Select Class */}
          {step === 1 && (
            <div className="space-y-3.5">
              <h3 className="text-sm sm:text-base font-bold text-[#071A2F] font-['Outfit']">Step 1: Which class are you currently in?</h3>
              <div className="grid grid-cols-1 gap-2.5">
                {[
                  { label: 'Class 8th / 9th / 10th Foundation', val: 'foundation' },
                  { label: 'Class 11th (Entering 2-Year Program)', val: '11th' },
                  { label: 'Class 12th (Appearing 1-Year Fast Track)', val: '12th' },
                  { label: 'Class 12th Passed (Dropper / Repeater Batch)', val: 'dropper' }
                ].map(opt => (
                  <button
                    key={opt.val}
                    onClick={() => handleClassSelect(opt.val)}
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-[#1D4ED8] hover:bg-blue-50/40 text-left font-semibold text-slate-800 transition-all flex justify-between items-center group active:scale-[0.99]"
                  >
                    <span className="text-xs sm:text-sm">{opt.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#1D4ED8] transition-colors shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Select Exam Goal */}
          {step === 2 && (
            <div className="space-y-3.5">
              <h3 className="text-sm sm:text-base font-bold text-[#071A2F] font-['Outfit']">Step 2: What is your primary target?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { label: 'IIT-JEE (Main & Advanced)', sub: 'Engineering Target 2026-28', val: 'jee' },
                  { label: 'NEET UG (Medical Entrance)', sub: 'MBBS & AIIMS Target', val: 'neet' },
                  { label: 'Foundation & Olympiads', sub: 'Class 8-10 STEM Intuition', val: 'foundation' },
                  { label: 'Board Exams + Crash Course', sub: 'Fast Track Revision', val: 'crash' }
                ].map(opt => (
                  <button
                    key={opt.val}
                    onClick={() => handleGoalSelect(opt.val)}
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-[#1D4ED8] hover:bg-blue-50/40 text-left transition-all group active:scale-[0.99]"
                  >
                    <div className="font-bold text-slate-900 text-xs sm:text-sm">{opt.label}</div>
                    <div className="text-[11px] text-slate-500 font-normal mt-0.5">{opt.sub}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Preferred Learning Mode */}
          {step === 3 && (
            <div className="space-y-3.5">
              <h3 className="text-sm sm:text-base font-bold text-[#071A2F] font-['Outfit']">Step 3: What is your preferred learning mode?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { label: 'Offline Classroom', desc: 'In-person Branch Batch', val: 'Offline' },
                  { label: 'Hybrid Mode', desc: 'Classroom + Live App', val: 'Hybrid' },
                  { label: 'Online Live', desc: 'Study Live from Home', val: 'Online' }
                ].map(opt => (
                  <button
                    key={opt.val}
                    onClick={() => handleModeSelect(opt.val)}
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-[#1D4ED8] hover:bg-blue-50/40 text-left sm:text-center transition-all active:scale-[0.99]"
                  >
                    <div className="font-bold text-slate-900 text-xs sm:text-sm">{opt.label}</div>
                    <div className="text-[11px] text-slate-500 font-normal mt-0.5">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Recommended Result */}
          {step === 4 && matchedCourse && (
            <div className="space-y-4">
              <div className="text-center bg-emerald-50 border border-emerald-200 p-3 rounded-xl">
                <div className="inline-flex items-center gap-1.5 text-[#059669] font-bold text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>Perfect Course Match Found!</span>
                </div>
              </div>

              <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-3">
                <div className="flex justify-between items-start gap-2">
                  <span className="bg-[#071A2F] text-amber-300 text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-md">
                    {matchedCourse.badge || 'Recommended Batch'}
                  </span>
                  <span className="text-[11px] font-medium text-slate-600">Mode: {matchedCourse.mode}</span>
                </div>
                
                <h4 className="text-base sm:text-lg font-bold text-[#071A2F] font-['Outfit']">{matchedCourse.title}</h4>
                <p className="text-xs text-slate-600 font-normal">{matchedCourse.targetClass} • Duration: {matchedCourse.duration}</p>

                <div className="space-y-1.5 pt-2 border-t border-slate-200">
                  {matchedCourse.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="text-xs text-slate-700 flex items-start gap-2 font-normal">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D97706] shrink-0 mt-1" />
                      <span className="leading-tight">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap justify-between items-center text-xs gap-1 border-t border-slate-200">
                  <div>
                    <span className="text-slate-500 font-normal">Fees: </span>
                    <span className="font-bold text-[#071A2F] text-sm">{matchedCourse.fees}</span>
                  </div>
                  <div className="text-[#059669] font-bold text-xs">{matchedCourse.scholarshipOffer}</div>
                </div>
              </div>

              {/* Responsive Action Buttons (Stacked cleanly on mobile) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-1">
                <button
                  onClick={() => {
                    onSelectCourse(matchedCourse);
                    onClose();
                  }}
                  className="w-full sm:flex-1 bg-[#D97706] hover:bg-[#B45309] text-white font-bold py-3 px-4 rounded-xl text-center shadow-xs transition-all text-xs sm:text-sm flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  <span>Apply / View Batch Details</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>

                <button
                  onClick={resetQuiz}
                  className="w-full sm:w-auto py-2.5 px-4 text-slate-600 hover:text-[#071A2F] border border-slate-300 rounded-xl hover:bg-slate-100 text-xs font-bold flex items-center justify-center gap-1.5 shrink-0"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Quiz</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
