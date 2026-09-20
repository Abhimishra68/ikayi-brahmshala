import React, { useState } from 'react';
import { Clock, ArrowRight, Flame } from 'lucide-react';
import { COURSES } from '../data/coachingData';
import type { Course } from '../data/coachingData';

interface BatchScheduleProps {
  onBookCourse: (course: Course) => void;
}

export const BatchSchedule: React.FC<BatchScheduleProps> = ({ onBookCourse }) => {
  const [selectedTiming, setSelectedTiming] = useState<'all' | 'morning' | 'evening' | 'weekend'>('all');

  const batches = [
    {
      courseId: 'jee-2-yr',
      title: 'IIT-JEE Pinnacle 2028 (Class 11th)',
      slot: 'Morning Batch (8:30 AM - 1:00 PM)',
      days: 'Monday to Friday',
      timingType: 'morning',
      seats: '4 Seats Left',
      status: 'High Demand'
    },
    {
      courseId: 'jee-1-yr',
      title: 'IIT-JEE Achievers 2027 (Class 12th/Dropper)',
      slot: 'Evening Batch (3:30 PM - 7:45 PM)',
      days: 'Monday to Saturday',
      timingType: 'evening',
      seats: '2 Seats Left',
      status: 'Almost Full'
    },
    {
      courseId: 'neet-2-yr',
      title: 'NEET Medical Ascent (Class 11th)',
      slot: 'Morning Batch (9:00 AM - 1:30 PM)',
      days: 'Monday to Friday',
      timingType: 'morning',
      seats: '6 Seats Left',
      status: 'Admissions Open'
    },
    {
      courseId: 'foundation-builder',
      title: 'Foundation Champs (Class 8th-10th)',
      slot: 'Evening Batch (4:30 PM - 7:00 PM)',
      days: 'Mon, Wed, Fri & Sat',
      timingType: 'evening',
      seats: '8 Seats Left',
      status: 'Admissions Open'
    },
    {
      courseId: 'jee-2-yr',
      title: 'IIT-JEE & NEET Weekend Special',
      slot: 'Weekend Batch (8:00 AM - 2:00 PM)',
      days: 'Saturday & Sunday',
      timingType: 'weekend',
      seats: '5 Seats Left',
      status: 'Weekend Special'
    }
  ];

  const filteredBatches = selectedTiming === 'all'
    ? batches
    : batches.filter(b => b.timingType === selectedTiming);

  return (
    <section id="schedule" className="w-full py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-[#D97706] text-xs font-bold uppercase tracking-wider border border-amber-200">
            <Clock className="w-3.5 h-3.5 text-[#D97706]" />
            <span>Interactive Timetable</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071A2F] tracking-tight font-['Outfit']">
            Upcoming Batch Timings & Seats
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            Choose a batch schedule that fits perfectly alongside your school or self-study routine.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {[
            { id: 'all', label: 'All Batches' },
            { id: 'morning', label: 'Morning Batches' },
            { id: 'evening', label: 'Evening Batches' },
            { id: 'weekend', label: 'Weekend Batches' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedTiming(tab.id as any)}
              className={`px-4 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all border ${
                selectedTiming === tab.id
                  ? 'bg-[#071A2F] text-amber-300 border-[#071A2F] shadow-xs'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Batches Table List */}
        <div className="mt-8 space-y-4">
          {filteredBatches.map((batch, idx) => {
            const courseObj = COURSES.find(c => c.id === batch.courseId) || COURSES[0];

            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-slate-300 transition-all hover:shadow-xs"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#D97706] text-white font-bold text-[10px] px-2.5 py-0.5 rounded-full">
                      {batch.status}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">{batch.days}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#071A2F] font-['Outfit']">{batch.title}</h3>
                  <div className="text-xs text-[#1D4ED8] font-semibold flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#1D4ED8]" />
                    <span>{batch.slot}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-4 pt-2 md:pt-0 border-t md:border-t-0 border-slate-200">
                  <div className="text-xs text-[#D97706] font-bold flex items-center gap-1 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200">
                    <Flame className="w-3.5 h-3.5 fill-[#D97706] text-[#D97706]" />
                    <span>{batch.seats}</span>
                  </div>

                  <button
                    onClick={() => onBookCourse(courseObj)}
                    className="bg-[#071A2F] hover:bg-[#0B1220] text-white font-bold text-xs py-2 px-4 rounded-xl transition-all flex items-center gap-1.5 shrink-0 shadow-xs"
                  >
                    <span>Reserve Seat</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
