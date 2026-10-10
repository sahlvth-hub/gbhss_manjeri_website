import React from 'react';
import { Eye, Zap, ShieldCheck } from 'lucide-react';
import { SchoolEmblem } from './SchoolEmblem';

export const HeritageSection: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 flex flex-col items-center">
          <div className="mb-4 inline-flex p-1.5 rounded-full bg-gradient-to-br from-amber-100 via-white to-amber-50 border border-amber-200/80 shadow-md">
            <SchoolEmblem size={72} className="ring-2 ring-white rounded-full shadow-inner" />
          </div>
          <span className="text-[0.72rem] font-bold uppercase tracking-widest text-amber-700 block mb-2">
            ABOUT US — ESTABLISHED 1908
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 font-crest">
            SCHOOL HISTORY, VISION, MISSION &amp; HERITAGE
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Government Boys Higher Secondary School, Manjeri, stands as a premier educational anchor in the Malappuram district of Kerala. Our legacy spans over a century, providing rigorous academic instruction, holistic extracurricular leadership, and inclusive civic development.
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Vision */}
          <div className="relative bg-[#FCFDFE] rounded-2xl p-7 border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow flex flex-col justify-between group">
            <div className="absolute top-0 left-8 right-8 h-[3px] bg-blue-600 rounded-b" />
            <div>
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 tracking-wide uppercase mb-3">
                INSTITUTIONAL VISION
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To empower students from all walks of life with transformative knowledge, scientific inquiry, ethical responsibility, and leadership qualities suited for the modern world.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-400 group-hover:text-blue-700 transition-colors">
              Sametham Ref: Verified Vision
            </div>
          </div>

          {/* Card 2: Mission */}
          <div className="relative bg-[#FCFDFE] rounded-2xl p-7 border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow flex flex-col justify-between group">
            <div className="absolute top-0 left-8 right-8 h-[3px] bg-amber-500 rounded-b" />
            <div>
              <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 tracking-wide uppercase mb-3">
                INSTITUTIONAL MISSION
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Deliver high-standard state curriculum across high school and higher secondary tiers, fostering critical thinking, sports excellence, arts expression, and inclusive civic development.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-400 group-hover:text-amber-700 transition-colors">
              Sametham Ref: Verified Mission
            </div>
          </div>

          {/* Card 3: Core Values */}
          <div className="relative bg-[#FCFDFE] rounded-2xl p-7 border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow flex flex-col justify-between group">
            <div className="absolute top-0 left-8 right-8 h-[3px] bg-emerald-600 rounded-b" />
            <div>
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 tracking-wide uppercase mb-3">
                CORE VALUES
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Discipline through cadet corps, creative resonance in Kalolsavam, social empathy, athletic perseverance, and dedication to constitutional secular ethics.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-400 group-hover:text-emerald-700 transition-colors">
              Institutional Heritage
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
