import React, { useState } from 'react';
import { BRANCH_INFO } from '../data/coachingData';
import { MessageSquare, Calculator, CheckCircle2, Percent } from 'lucide-react';

export const FeeEstimator: React.FC = () => {
  const [selectedGrade, setSelectedGrade] = useState<string>('11');
  const [selectedStream, setSelectedStream] = useState<'jee' | 'neet' | 'olympiad'>('jee');
  const [scorePercentile, setScorePercentile] = useState<number>(85);

  const baseFees: Record<string, number> = {
    '8': 85000,
    '9': 95000,
    '10': 110000,
    '11': 140000,
    '12': 145000,
    'dropper': 130000
  };

  const streamMultipliers: Record<string, number> = {
    jee: 1.0,
    neet: 0.96,
    olympiad: 0.88
  };

  const streamDisplayNames: Record<string, string> = {
    jee: 'JEE Advanced Track',
    neet: 'NEET Medical Wing',
    olympiad: 'Olympiad Accelerator'
  };

  const calculateScholarship = (percentile: number): number => {
    if (percentile >= 95) return 0.70;
    if (percentile >= 90) return 0.50;
    if (percentile >= 80) return 0.40;
    if (percentile >= 70) return 0.25;
    return 0.15;
  };

  const baseTuition = Math.round((baseFees[selectedGrade] || 140000) * (streamMultipliers[selectedStream] || 1.0));
  const discountPct = calculateScholarship(scorePercentile);
  const discountAmount = Math.round(baseTuition * discountPct);
  const netPayable = baseTuition - discountAmount;
  const emiMonthly = Math.round(netPayable / 12);

  const gradeTitle = selectedGrade === 'dropper' ? 'Repeater Batch' : `Class ${selectedGrade}`;
  const streamTitle = streamDisplayNames[selectedStream];

  const whatsappText = encodeURIComponent(
    `Hello Ikayi Brahmshala, I wish to lock my estimated scholarship quote of ₹${netPayable.toLocaleString('en-IN')}/yr for ${gradeTitle} (${streamTitle}).`
  );

  return (
    <section id="fee-estimator" className="w-full py-16 lg:py-24 bg-[#F8FAFC] border-b border-slate-200">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-[#D97706] text-xs font-bold uppercase tracking-wider border border-amber-200">
            <Calculator className="w-3.5 h-3.5 text-[#D97706]" />
            <span>Radical Scholastic Transparency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071A2F] tracking-tight font-['Outfit']">
            Interactive Fee & Merit Scholarship Estimator
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            Zero hidden registration surcharges. Calculate accurate net tuition according to candidate class and Brahmshala SAT diagnostic score.
          </p>
        </div>

        {/* Dual Panel Container */}
        <div className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Controls (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col gap-8 bg-slate-50/50">
            
            {/* Step 1: Grade Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold uppercase tracking-wider text-[#071A2F] flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#071A2F] text-amber-300 text-[11px] flex items-center justify-center font-bold">1</span>
                  Candidate Class (2026–27)
                </label>
                <span className="text-xs font-bold text-[#D97706]">{gradeTitle}</span>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {[
                  { id: '8', label: 'Class 8' },
                  { id: '9', label: 'Class 9' },
                  { id: '10', label: 'Class 10' },
                  { id: '11', label: 'Class 11' },
                  { id: '12', label: 'Class 12' },
                  { id: 'dropper', label: 'Repeater' }
                ].map(item => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedGrade(item.id)}
                    className={`py-2.5 rounded-xl text-xs font-semibold transition-all border ${
                      selectedGrade === item.id
                        ? 'bg-[#071A2F] text-white border-[#071A2F] shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Stream Selection */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#071A2F] flex items-center gap-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-[#071A2F] text-amber-300 text-[11px] flex items-center justify-center font-bold">2</span>
                Career Immersion Stream
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'jee', title: 'IIT-JEE', desc: 'Advanced & Main' },
                  { id: 'neet', title: 'NEET-UG', desc: 'AIIMS & Medical' },
                  { id: 'olympiad', title: 'Olympiad', desc: 'IOQM / RMO / NSEJS' }
                ].map(stream => (
                  <button
                    key={stream.id}
                    type="button"
                    onClick={() => setSelectedStream(stream.id as any)}
                    className={`p-3.5 rounded-xl bg-white border text-left transition-all shadow-xs ${
                      selectedStream === stream.id
                        ? 'border-[#D97706] ring-1 ring-[#D97706]'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-[#071A2F]">{stream.title}</span>
                      <span className={`w-2 h-2 rounded-full ${selectedStream === stream.id ? 'bg-[#D97706]' : 'bg-slate-300'}`} />
                    </div>
                    <span className="text-[11px] text-slate-500 font-medium block">{stream.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Interactive Diagnostic Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#071A2F] flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#071A2F] text-amber-300 text-[11px] flex items-center justify-center font-bold">3</span>
                  Estimated Brahmshala SAT Score Bracket
                </label>
                <span className="text-sm font-bold text-[#D97706] bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200">
                  {scorePercentile}% Tier
                </span>
              </div>

              <p className="text-xs text-slate-600 font-normal mb-4">Move slider to simulate scholarship slab achieved in our Sunday Diagnostic.</p>

              <input
                type="range"
                min="60"
                max="98"
                step="1"
                value={scorePercentile}
                onChange={e => setScorePercentile(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#D97706]"
              />

              <div className="flex justify-between text-[11px] text-slate-600 font-semibold mt-2">
                <span>60% (15% Waiver)</span>
                <span>75% (25% Waiver)</span>
                <span>90% (50% Waiver)</span>
                <span className="text-[#D97706]">95%+ (70-100%)</span>
              </div>
            </div>

          </div>

          {/* Right Summary Breakdown Output */}
          <div className="lg:col-span-5 p-6 sm:p-10 bg-[#071A2F] text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-800">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <div>
                  <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block mb-1">QUOTATION SUMMARY</span>
                  <p className="text-lg font-bold text-white font-['Outfit']">{gradeTitle} • {streamTitle}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>
              </div>

              {/* Pricing Stack */}
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-slate-300 font-normal">Standard Institutional Tuition:</span>
                  <span className="font-semibold text-white">₹{baseTuition.toLocaleString('en-IN')} / yr</span>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm bg-emerald-950/40 p-3 rounded-xl border border-emerald-500/20">
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <Percent className="w-4 h-4 text-emerald-400" />
                    <span>Merit Waiver ({Math.round(discountPct * 100)}% Tier):</span>
                  </span>
                  <span className="font-bold text-emerald-300 text-base">-₹{discountAmount.toLocaleString('en-IN')}</span>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-slate-300 font-normal">Books, CBT Lab & Mentorship:</span>
                  <span className="text-teal-300 font-semibold">Included (₹0)</span>
                </div>

                <div className="pt-5 border-t border-slate-800 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">Net Annual Tuition</span>
                    <span className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-['Outfit']">₹{netPayable.toLocaleString('en-IN')}</span>
                    <span className="text-[10px] text-slate-400 font-normal block">Inclusive of 18% GST</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-emerald-400 font-semibold block">0% Interest EMI</span>
                    <span className="text-lg sm:text-xl font-bold text-white">₹{emiMonthly.toLocaleString('en-IN')} / mo</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Lock Quote CTA */}
            <div className="flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${BRANCH_INFO.whatsappNumber}?text=${whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-xs sm:text-sm transition-all shadow-xs flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4.5 h-4.5 fill-white text-white" />
                <span>Lock Quote on WhatsApp (Guaranteed 7 Days)</span>
              </a>
              <p className="text-center text-[10px] text-slate-400 font-normal">Official validation confirmed upon Sunday Brahmshala SAT.</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
