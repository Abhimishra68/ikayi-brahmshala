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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
        
        {/* Header */}
        <div className="bg-[#071A2F] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Personalized Course Recommendation</span>
          </div>
          <h2 className="text-xl font-bold font-['Outfit']">AI Course Matcher Quiz</h2>
          <p className="text-xs text-slate-300 mt-1 font-normal">Answer 3 quick questions to discover your ideal batch & scholarship eligibility.</p>

          {/* Progress Indicator */}
          {step < 4 && (
            <div className="flex items-center gap-2 mt-4">
              <div className={`h-1.5 flex-1 rounded-full ${step >= 1 ? 'bg-[#D97706]' : 'bg-slate-800'}`} />
              <div className={`h-1.5 flex-1 rounded-full ${step >= 2 ? 'bg-[#D97706]' : 'bg-slate-800'}`} />
              <div className={`h-1.5 flex-1 rounded-full ${step >= 3 ? 'bg-[#D97706]' : 'bg-slate-800'}`} />
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6">
          
          {/* Step 1: Select Class */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-[#071A2F] font-['Outfit']">Step 1: Which class are you currently in or passing out from?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: 'Class 8th / 9th / 10th', val: 'foundation' },
                  { label: 'Class 11th (Entering)', val: '11th' },
                  { label: 'Class 12th (Appearing)', val: '12th' },
                  { label: 'Class 12th Passed (Dropper)', val: 'dropper' }
                ].map(opt => (
                  <button
                    key={opt.val}
                    onClick={() => handleClassSelect(opt.val)}
                    className="p-4 rounded-xl border border-slate-200 hover:border-[#1D4ED8] hover:bg-blue-50/40 text-left font-semibold text-slate-800 transition-all flex justify-between items-center group"
                  >
                    <span className="text-xs sm:text-sm">{opt.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#1D4ED8] transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Select Exam Goal */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-[#071A2F] font-['Outfit']">Step 2: What is your primary career target?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: 'IIT-JEE (Main & Advanced)', sub: 'Engineering Entrance', val: 'jee' },
                  { label: 'NEET UG (Medical Entrance)', sub: 'MBBS / AIIMS Dream', val: 'neet' },
                  { label: 'Foundation & Olympiads', sub: 'Class 8th-10th Science/Maths', val: 'foundation' },
                  { label: 'Board Exams + Crash Revision', sub: 'Fast Track Prep', val: 'crash' }
                ].map(opt => (
                  <button
                    key={opt.val}
                    onClick={() => handleGoalSelect(opt.val)}
                    className="p-4 rounded-xl border border-slate-200 hover:border-[#1D4ED8] hover:bg-blue-50/40 text-left transition-all group"
                  >
                    <div className="font-bold text-slate-900 text-xs sm:text-sm">{opt.label}</div>
                    <div className="text-xs text-slate-500 font-normal mt-0.5">{opt.sub}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Preferred Learning Mode */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-[#071A2F] font-['Outfit']">Step 3: What is your preferred mode of learning?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { label: 'Offline Classroom', desc: 'In-person at Branch', val: 'Offline' },
                  { label: 'Hybrid Mode', desc: 'Classroom + Live App', val: 'Hybrid' },
                  { label: '100% Online Live', desc: 'Study from Home', val: 'Online' }
                ].map(opt => (
                  <button
                    key={opt.val}
                    onClick={() => handleModeSelect(opt.val)}
                    className="p-4 rounded-xl border border-slate-200 hover:border-[#1D4ED8] hover:bg-blue-50/40 text-left transition-all text-center"
                  >
                    <div className="font-bold text-slate-900 text-xs sm:text-sm">{opt.label}</div>
                    <div className="text-xs text-slate-500 font-normal mt-1">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Recommended Result */}
          {step === 4 && matchedCourse && (
            <div className="space-y-5">
              <div className="text-center bg-emerald-50 border border-emerald-200 p-3.5 rounded-xl">
                <div className="inline-flex items-center gap-1.5 text-[#059669] font-bold text-xs sm:text-sm">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#059669]" />
                  <span>Perfect Course Match Found!</span>
                </div>
              </div>

              <div className="border border-slate-200 rounded-xl p-5 bg-slate-50 space-y-3">
                <div className="flex justify-between items-start gap-2">
                  <span className="bg-[#071A2F] text-amber-300 text-[11px] font-bold px-2.5 py-1 rounded-md">
                    {matchedCourse.badge || 'Recommended Batch'}
                  </span>
                  <span className="text-xs font-medium text-slate-600">Mode: {matchedCourse.mode}</span>
                </div>
                
                <h4 className="text-lg font-bold text-[#071A2F] font-['Outfit']">{matchedCourse.title}</h4>
                <p className="text-xs text-slate-600 font-normal">{matchedCourse.targetClass} | Duration: {matchedCourse.duration}</p>

                <div className="space-y-1.5 pt-2 border-t border-slate-200">
                  {matchedCourse.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="text-xs text-slate-700 flex items-center gap-2 font-normal">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D97706] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex justify-between items-center text-xs">
                  <div>
                    <span className="text-slate-500 font-normal">Fees: </span>
                    <span className="font-bold text-[#071A2F] text-sm">{matchedCourse.fees}</span>
                  </div>
                  <div className="text-[#059669] font-semibold">{matchedCourse.scholarshipOffer}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={resetQuiz}
                  className="p-3 text-slate-600 hover:text-[#071A2F] border border-slate-300 rounded-xl hover:bg-slate-100 text-xs font-bold flex items-center gap-1.5"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Restart</span>
                </button>
                <button
                  onClick={() => {
                    onSelectCourse(matchedCourse);
                    onClose();
                  }}
                  className="flex-1 bg-[#D97706] hover:bg-[#B45309] text-white font-bold py-3 px-4 rounded-xl text-center shadow-xs transition-all text-xs sm:text-sm flex items-center justify-center gap-2"
                >
                  <span>Select & View Batch Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
