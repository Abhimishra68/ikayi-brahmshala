import React, { useState } from 'react';
import { X, Send, CheckCircle2, GraduationCap, ShieldCheck } from 'lucide-react';
import type { Course } from '../data/coachingData';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedCourse?: Course | null;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, preSelectedCourse }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    targetExam: preSelectedCourse ? preSelectedCourse.title : 'IIT-JEE Target 2028',
    studentClass: 'Class 11th',
    mode: 'Offline Classroom'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
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
          
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
            <GraduationCap className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Admission & Free Demo Booking</span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold font-['Outfit']">Book Free Demo & Scholarship Seat</h2>
          <p className="text-xs text-slate-300 mt-0.5 font-normal">
            Experience 3 days of live classroom lectures with IITian faculty before finalizing admission.
          </p>
        </div>

        {/* Form Body with Scrollbar */}
        <div className="p-4 sm:p-6 overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-[#059669] mx-auto" />
              <h3 className="text-lg font-bold text-[#071A2F] font-['Outfit']">Registration Successful!</h3>
              <p className="text-xs text-slate-600 max-w-xs mx-auto font-normal">
                Your free demo class seat passes have been issued. Our academic counselor will WhatsApp you the timetable.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Student Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter student name"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:border-[#1D4ED8]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit number"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:border-[#1D4ED8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Class</label>
                  <select
                    value={formData.studentClass}
                    onChange={e => setFormData({ ...formData, studentClass: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:border-[#1D4ED8]"
                  >
                    <option value="Class 8th-10th">Class 8th-10th</option>
                    <option value="Class 11th">Class 11th</option>
                    <option value="Class 12th">Class 12th</option>
                    <option value="Dropper / Repeater">Dropper</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Selected Program</label>
                <input
                  type="text"
                  readOnly
                  value={formData.targetExam}
                  className="w-full bg-slate-100 border border-slate-200 text-[#071A2F] font-bold rounded-xl px-3.5 py-2.5 text-xs"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#D97706] hover:bg-[#B45309] text-white font-bold py-3 px-4 rounded-xl text-xs transition-all shadow-xs flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm Free Demo Registration</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-[#059669]" />
                <span>Zero registration fees • 100% Free Demo Access</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
