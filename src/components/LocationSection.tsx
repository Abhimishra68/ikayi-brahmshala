import React, { useState } from 'react';
import { BRANCH_INFO } from '../data/coachingData';
import { MapPin, Phone, Clock, Navigation, ExternalLink, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: 'IIT-JEE Target',
    studentClass: 'Class 11th'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', course: 'IIT-JEE Target', studentClass: 'Class 11th' });
    }, 4000);
  };

  return (
    <section id="location" className="w-full py-16 lg:py-24 bg-[#071A2F] text-white relative overflow-hidden border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Location Info & Quick Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-amber-400 text-xs font-bold uppercase tracking-wider border border-slate-700">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Visit Our Campus</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Outfit']">
              Located Center of Education City
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              Our state-of-the-art campus features air-conditioned digital smart classrooms, dedicated quiet library study halls, and 1:1 faculty doubt cabins.
            </p>

            {/* Address Box */}
            <div className="bg-[#0B1220] border border-slate-800 rounded-2xl p-6 space-y-4 shadow-md">
              <div className="flex items-start gap-3.5">
                <div className="p-3 bg-[#D97706] text-white rounded-xl shrink-0 font-bold">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base font-['Outfit']">{BRANCH_INFO.name}</h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed font-normal">{BRANCH_INFO.address}</p>
                </div>
              </div>

              {/* Tap-to-Navigate Google Maps Button */}
              <a
                href={BRANCH_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#D97706] hover:bg-[#B45309] text-white font-bold py-3 px-4 rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 text-xs sm:text-sm"
              >
                <Navigation className="w-4 h-4 fill-white text-white" />
                <span>Tap to Open Location in Google Maps</span>
                <ExternalLink className="w-4 h-4 opacity-80" />
              </a>
            </div>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`tel:${BRANCH_INFO.phonePrimary}`}
                className="bg-[#0B1220] hover:bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center gap-3 transition-colors"
              >
                <div className="p-2.5 bg-slate-800 text-amber-400 rounded-lg">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div className="text-xs">
                  <div className="text-slate-400 font-medium">Admission Helpline</div>
                  <div className="font-bold text-white text-sm">{BRANCH_INFO.phonePrimary}</div>
                </div>
              </a>

              <a
                href={`https://wa.me/${BRANCH_INFO.whatsappNumber}?text=Hi%20Ikayi%20Brahmshala,%20I%20want%20to%20visit%20the%20branch.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-950/40 hover:bg-emerald-950/60 border border-emerald-800/60 p-4 rounded-xl flex items-center gap-3 transition-colors"
              >
                <div className="p-2.5 bg-[#059669] text-white rounded-lg">
                  <MessageSquare className="w-4.5 h-4.5 fill-white text-white" />
                </div>
                <div className="text-xs">
                  <div className="text-emerald-300 font-medium">WhatsApp Support</div>
                  <div className="font-bold text-white text-sm">Instant Chat</div>
                </div>
              </a>
            </div>

            {/* Opening Hours */}
            <div className="flex items-center gap-2 text-xs text-slate-400 bg-[#0B1220] p-3 rounded-xl border border-slate-800 font-normal">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{BRANCH_INFO.openingHours}</span>
            </div>

          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#0B1220] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-md">
              <h3 className="text-xl font-bold text-white font-['Outfit']">Get Instant Callback</h3>
              <p className="text-xs text-slate-400 mt-1 font-normal">Our academic counselor will call you back within 15 minutes.</p>

              {submitted ? (
                <div className="mt-6 p-4 bg-emerald-950/80 border border-emerald-700/60 rounded-xl text-center space-y-2">
                  <CheckCircle2 className="w-7 h-7 text-[#059669] mx-auto" />
                  <div className="font-bold text-emerald-300 text-sm">Callback Request Submitted!</div>
                  <p className="text-xs text-slate-300">Thank you! Our senior team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 mt-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Student / Parent Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter full name"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Mobile Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="10-digit mobile number"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Class</label>
                      <select
                        value={formData.studentClass}
                        onChange={e => setFormData({ ...formData, studentClass: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                      >
                        <option value="Class 8th-10th">Class 8th-10th</option>
                        <option value="Class 11th">Class 11th</option>
                        <option value="Class 12th">Class 12th</option>
                        <option value="Dropper / Repeater">Dropper</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Target Exam</label>
                      <select
                        value={formData.course}
                        onChange={e => setFormData({ ...formData, course: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                      >
                        <option value="IIT-JEE Target">IIT-JEE</option>
                        <option value="NEET Medical">NEET UG</option>
                        <option value="Foundation Olympiad">Foundation</option>
                        <option value="Crash Course">Crash Course</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#D97706] hover:bg-[#B45309] text-white font-bold py-3 px-4 rounded-xl text-xs transition-all shadow-xs flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Request Free Callback</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
