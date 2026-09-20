import React from 'react';
import { UPCOMING_EXAMS } from '../data/coachingData';
import { Calendar, Clock, Download } from 'lucide-react';

export const ExamDashboard: React.FC = () => {
  return (
    <section id="exams" className="w-full py-16 lg:py-24 bg-[#071A2F] text-white border-b border-slate-800">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-amber-400 text-xs font-bold uppercase tracking-wider border border-slate-700">
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <span>Official Exam Tracker 2026–27</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-['Outfit']">
            Upcoming Exam Dates & Live Countdown
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-normal">
            Stay ahead with accurate exam schedules, test dates, and syllabus breakdown prepared by IBS senior faculty.
          </p>
        </div>

        {/* Countdown Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {UPCOMING_EXAMS.map(exam => (
            <div
              key={exam.id}
              className="bg-[#0B1220] border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all duration-200 group"
            >
              <div className="space-y-4">
                {/* Category Pill & Countdown */}
                <div className="flex justify-between items-center">
                  <span className="bg-slate-800 text-amber-400 border border-slate-700 text-[10px] font-bold px-2.5 py-1 rounded-md">
                    {exam.category}
                  </span>
                  <span className="text-xs text-amber-400 font-semibold flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>{exam.daysRemaining} Days Left</span>
                  </span>
                </div>

                <h3 className="font-bold text-lg text-white group-hover:text-amber-400 transition-colors font-['Outfit']">
                  {exam.name}
                </h3>

                <div className="text-xs text-slate-300 space-y-1.5 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Target Date:</span>
                    <span className="font-semibold text-white">{exam.date}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {exam.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-800">
                <button
                  onClick={() => alert(`Official syllabus & sample paper for ${exam.name} has been initiated for download.`)}
                  className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold py-2.5 px-3 rounded-xl text-xs transition-colors flex items-center justify-center gap-2 border border-slate-700"
                >
                  <Download className="w-4 h-4 text-amber-400" />
                  <span>Download Syllabus PDF</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
