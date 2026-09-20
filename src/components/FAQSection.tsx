import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What syllabus is tested in the Brahmshala SAT Scholarship Test?',
      a: 'The Brahmshala Scholastic Aptitude Test (SAT) tests first-principles conceptual insight rather than rote memory. For Class 10 moving to 11, it assesses NCERT Science & Mathematics principles with non-routine physics problems, basic algebraic proofs, and logical spatial reasoning. Model papers are sent immediately upon registration.'
    },
    {
      q: 'How strictly is the 30-student cohort ceiling enforced?',
      a: 'Absolute institutional enforcement. Once 30 students enroll in a designated cohort (e.g. Brahmastra-11A), registrations for that batch are closed. This preserves our 1:15 mentor ratio and ensures senior faculty personally monitor every student’s Error Diary.'
    },
    {
      q: 'Are Gurukul residential hostel facilities available for outstation students?',
      a: 'Yes. Both our Kota and New Delhi campuses provide supervised Gurukul residential accommodation with single distraction-free study pods, pure vegetarian nutrition, 24/7 biometric security, and on-site resident mentors who supervise evening problem-solving halls.'
    },
    {
      q: 'What happens if a student misses a lecture due to illness or school exams?',
      a: 'Every classroom is equipped with high-definition lecture archiving systems. Missed sessions are immediately uploaded to the student’s portal alongside 1:1 faculty backup slots to ensure zero backlog.'
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-[#D97706] text-xs font-bold uppercase tracking-wider border border-amber-200">
            <HelpCircle className="w-3.5 h-3.5 text-[#D97706]" />
            <span>Parent & Student Directory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071A2F] tracking-tight font-['Outfit']">
            Frequently Addressed Questions
          </h2>
          <p className="text-sm text-slate-600 font-normal">
            Transparent institutional policies regarding tests, cohorts, and residential boarding.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-[#071A2F] text-sm sm:text-base focus:outline-none font-['Outfit']"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#D97706] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-3 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
