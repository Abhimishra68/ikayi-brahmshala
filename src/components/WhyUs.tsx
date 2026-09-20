import React from 'react';
import { Users, HelpCircle, Cpu, UserCheck, BookMarked, ShieldCheck, Sparkles } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Max 30 Students per Batch',
      description: 'Unlike mega-coaching centers with 150+ students in a hall, our small batch sizes guarantee every student receives individual attention.'
    },
    {
      icon: HelpCircle,
      title: 'Dedicated Daily Doubt Counters',
      description: 'Never carry doubts to the next class! Our senior faculty stays available after lectures for 1:1 problem solving.'
    },
    {
      icon: Cpu,
      title: 'AI Performance Analytics',
      description: 'Get deep chapter-wise micro analytics identifying speed, accuracy, weak topics, and personalized rank trajectory.'
    },
    {
      icon: UserCheck,
      title: 'Personal Mentor Assigned',
      description: 'Every student is assigned an experienced mentor to guide study schedules, stress management, and exam temperament.'
    },
    {
      icon: BookMarked,
      title: 'Exhaustive Study Material',
      description: 'Curated theory modules, 30,000+ classified practice questions, and previous 15 years solved papers provided.'
    },
    {
      icon: ShieldCheck,
      title: 'Parent Progress Updates',
      description: 'Bi-weekly automated performance reports and regular tele-conferences with parents regarding student attendance and mock marks.'
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-[#D97706] text-xs font-bold uppercase tracking-wider border border-amber-200">
            <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
            <span>Why Choose Ikayi Brahmshala</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071A2F] tracking-tight font-['Outfit']">
            The IBS Advantage: Quality Over Quantity
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            We focus on conceptual depth, disciplined testing, and genuine care for every student's academic growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all duration-200 space-y-4"
              >
                <div className="w-11 h-11 rounded-xl bg-[#071A2F] text-amber-400 flex items-center justify-center shadow-xs">
                  <Icon className="w-5.5 h-5.5" />
                </div>
                <h3 className="text-lg font-bold text-[#071A2F] font-['Outfit']">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{item.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
