import React from 'react';
import { Award, BookOpen, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const FacultyMatrix: React.FC = () => {
  return (
    <section id="faculty-benchmarks" className="w-full py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-16">
          
          {/* Faculty Council Feature */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col shadow-xs">
            <span className="text-xs font-bold text-[#D97706] uppercase tracking-widest block mb-2">
              PURE SCHOLASTIC LEADERSHIP
            </span>
            <h3 className="text-2xl font-extrabold text-[#071A2F] mb-4 font-['Outfit']">
              Faculty Council Built on Pedagogy & Research
            </h3>

            <div className="relative w-full h-64 rounded-xl overflow-hidden mb-6 bg-[#071A2F] shadow-xs border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80"
                alt="Prof. Radhakrishnan Varma"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-[#071A2F]/95 backdrop-blur-md px-3.5 py-2 rounded-lg text-white text-xs font-medium border border-slate-700 flex items-center justify-between">
                <span>Prof. Radhakrishnan Varma</span>
                <span className="text-amber-400 text-[11px] font-bold">Dean Academic Council</span>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6 italic font-normal">
              "We reject commercial shortcuts and formula memorization that crumble when JEE sets a non-standard paper. Our students master first-principles physics so novelty never creates panic."
            </p>

            <div className="flex flex-col gap-3 text-xs font-semibold text-slate-800">
              <div className="flex items-center gap-2.5">
                <BookOpen className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>Authored 4 International Treatises on Classical Mechanics</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Award className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>Mentored AIR 1, AIR 4, and AIR 11 in JEE Advanced</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>B.Tech & Ph.D., Department of Physics, IIT Kanpur</span>
              </div>
            </div>
          </div>

          {/* Benchmark Comparison Table */}
          <div className="lg:col-span-7 flex flex-col" id="pedagogy-matrix">
            <span className="text-xs font-bold text-[#D97706] uppercase tracking-widest block mb-2">
              INSTITUTIONAL AUDIT BENCHMARK
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#071A2F] mb-3 font-['Outfit']">
              Precision Brahmshala vs. Mass Factory Coaching
            </h3>
            <p className="text-sm text-slate-600 font-normal mb-6">
              How micro-cohort engineering completely eliminates marks stagnation and student burnout.
            </p>

            <div className="w-full overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-[#071A2F] text-white">
                    <th className="p-3.5 font-bold">Pedagogical Parameter</th>
                    <th className="p-3.5 font-normal text-slate-300">Mass Factory Coaching</th>
                    <th className="p-3.5 font-bold text-amber-300 bg-[#0B1220] border-l border-slate-700">
                      Ikayi Brahmshala Standard
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="bg-white hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-[#071A2F]">Classroom Size</td>
                    <td className="p-3.5 text-slate-600 font-normal">150 to 350+ Packed in Hall</td>
                    <td className="p-3.5 font-bold text-[#059669] bg-emerald-50/50 border-l border-slate-200">
                      Strictly Capped at 30 Students
                    </td>
                  </tr>
                  <tr className="bg-slate-50/60 hover:bg-slate-100">
                    <td className="p-3.5 font-bold text-[#071A2F]">Doubt Clearance</td>
                    <td className="p-3.5 text-slate-600 font-normal">Junior TAs; Senior faculty inaccessible</td>
                    <td className="p-3.5 font-bold text-[#059669] bg-emerald-50/50 border-l border-slate-200">
                      Daily Direct Senior Faculty Office Hours
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-[#071A2F]">Error Remediation</td>
                    <td className="p-3.5 text-slate-600 font-normal">Generic printed answer keys only</td>
                    <td className="p-3.5 font-bold text-[#D97706] bg-amber-50/60 border-l border-slate-200">
                      Algorithmic Error Diary Tracking
                    </td>
                  </tr>
                  <tr className="bg-slate-50/60 hover:bg-slate-100">
                    <td className="p-3.5 font-bold text-[#071A2F]">Parent Transparency</td>
                    <td className="p-3.5 text-slate-600 font-normal">Infrequent quarterly test reports</td>
                    <td className="p-3.5 font-bold text-[#059669] bg-emerald-50/50 border-l border-slate-200">
                      Biometric SMS & Weekly Calls
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-[#071A2F]">Syllabus Pacing</td>
                    <td className="p-3.5 text-slate-600 font-normal">Rushed for sales deadlines</td>
                    <td className="p-3.5 font-bold text-[#059669] bg-emerald-50/50 border-l border-slate-200">
                      Spiral Mastery & Milestone Checks
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Guarantee Note */}
            <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-800 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>Zero arbitrary batch reshuffling. Every student is mentored by lead faculty.</span>
              </span>
              <a href="#fee-estimator" className="text-xs font-bold text-[#D97706] hover:underline shrink-0">
                Enroll Now
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
