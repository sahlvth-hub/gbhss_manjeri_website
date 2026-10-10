import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const ContactLeadership: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    purpose: 'General School Inquiries',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setErrorMsg('Please complete all required fields before transmitting.');
      return;
    }

    setErrorMsg('');
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormState({
        name: '',
        phone: '',
        email: '',
        purpose: 'General School Inquiries',
        message: '',
      });
      setTimeout(() => setSubmitted(false), 7000);
    }, 700);
  };

  return (
    <section id="contact" className="py-16 lg:py-20 bg-[#FBFBFA] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: School Administration */}
          <div className="lg:col-span-5">
            <span className="text-[0.72rem] font-bold uppercase tracking-widest text-amber-700 block mb-2">
              SCHOOL ADMINISTRATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mb-3 font-crest">
              INSTITUTIONAL LEADERSHIP
            </h2>
            <p className="text-sm text-slate-600 mb-8 leading-relaxed">
              Steering academic integrity and campus development.
            </p>

            {/* Leadership Cards */}
            <div className="space-y-4 mb-8">
              
              {/* Headmaster */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-900 font-black text-sm flex items-center justify-center shrink-0">
                  HM
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Headmaster (High School)
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    Administration &amp; General Discipline
                  </p>
                  <span className="inline-block mt-1 text-[11px] font-semibold text-blue-700">
                    GBHSS Manjeri (Code: 18021)
                  </span>
                </div>
              </div>

              {/* Principal */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-900 font-black text-sm flex items-center justify-center shrink-0">
                  PR
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Principal (Higher Secondary)
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    Academics &amp; DHSE Affairs
                  </p>
                  <span className="inline-block mt-1 text-[11px] font-semibold text-amber-800">
                    HSS Section (Code: 11010)
                  </span>
                </div>
              </div>

              {/* PTA President */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-900 font-black text-sm flex items-center justify-center shrink-0">
                  PTA
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    PTA President &amp; Committee
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    Parent Teacher Association
                  </p>
                  <span className="inline-block mt-1 text-[11px] font-semibold text-emerald-700">
                    Active Campus Welfare Wing
                  </span>
                </div>
              </div>

            </div>

            {/* Official UDISE Callout Box */}
            <div className="bg-[#FFFDF6] border border-amber-200/80 rounded-2xl p-4.5 text-xs text-slate-700 leading-relaxed shadow-xs">
              <span className="font-bold text-slate-900">UDISE Code:</span> 32050800636 •{' '}
              <span className="font-bold text-slate-900">Revenue District:</span> Malappuram •{' '}
              <span className="font-bold text-slate-900">Sub District:</span> Manjeri •{' '}
              <span className="font-bold text-slate-900">Parliamentary Constituency:</span> Malappuram.
            </div>

          </div>

          {/* Right Column: Office Coordinates & Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-9 border border-slate-200/90 shadow-sm">
              
              <span className="text-[0.72rem] font-bold uppercase tracking-widest text-slate-400 block mb-1">
                OFFICE COORDINATES
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 mb-2">
                GET IN TOUCH WITH GBHSS MANJERI
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mb-8">
                General inquiries, admission desks, and archival queries.
              </p>

              {/* Info Badges Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-50/80 border border-slate-200/70 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[0.7rem] uppercase tracking-wider font-bold text-slate-400">
                        School Address
                      </span>
                      <p className="text-xs font-medium text-slate-800 mt-1 leading-snug">
                        Court Road, Kacherippadi, Manjeri, Kerala 676121, India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50/80 border border-slate-200/70 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[0.7rem] uppercase tracking-wider font-bold text-slate-400">
                        Official E-Mail
                      </span>
                      <p className="text-xs font-mono font-medium text-slate-800 mt-1 break-all">
                        gbhssmanjeri11010@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submission Alert */}
              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="font-bold block">Message Transmitted Successfully!</strong>
                    Your dispatch has been registered with the GBHSS Manjeri Administrative Office. Ref Ticket: #GBHSS-{Math.floor(100000 + Math.random() * 900000)}.
                  </div>
                </div>
              )}

              {errorMsg && (
                <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div className="text-xs font-medium">{errorMsg}</div>
                </div>
              )}

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Student / Parent Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter full name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Contact Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98470 00000"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Inquiry Purpose
                    </label>
                    <select
                      value={formState.purpose}
                      onChange={(e) => setFormState({ ...formState, purpose: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
                    >
                      <option>General School Inquiries</option>
                      <option>HSS Admissions (Single-Window)</option>
                      <option>Kalolsavam &amp; Sports Wings</option>
                      <option>Archival Records &amp; Kailasam Heritage</option>
                      <option>Transfer Certificate (TC) &amp; Records</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Message / Detail *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="State your requirements or question..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-[#0A192F] hover:bg-[#152e52] active:scale-[0.99] transition-all shadow-md"
                  >
                    {loading ? (
                      <span className="animate-pulse">TRANSMITTING TO OFFICE...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-amber-400" />
                        <span>TRANSMIT MESSAGE TO OFFICE</span>
                      </>
                    )}
                  </button>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
