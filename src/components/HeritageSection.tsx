import React, { useState } from 'react';
import {
  Eye,
  Zap,
  ShieldCheck,
  Award,
  BookOpen,
  Quote,
  Flame,
  Sun,
  Scroll,
  Sparkles,
} from 'lucide-react';
import { SchoolEmblem } from './SchoolEmblem';

export const HeritageSection: React.FC = () => {
  const [activeEmblemPart, setActiveEmblemPart] = useState<number>(0);

  const emblemSymbolism = [
    {
      title: "Nilavilakku & Sacred Flame",
      subtitle: "The Light of Knowledge (തമസോ മാ ജ്യോതിർഗമയ)",
      desc: "Represents the eternal flame of wisdom dispelling ignorance, rooted in Kerala's enlightened educational traditions.",
      icon: Flame,
    },
    {
      title: "Open Book & Lotus Petals",
      subtitle: "Intellectual Purity & Scholarly Awakening",
      desc: "Signifies pure intellectual pursuit, academic rigor, and the synthesis of scientific curiosity with humanities and arts.",
      icon: BookOpen,
    },
    {
      title: "Golden Sunburst Rays",
      subtitle: "Dawn of Enlightenment across Eranad",
      desc: "Radiating golden rays symbolizing the dawn of public education in Malabar since 1908, empowering generations of scholars.",
      icon: Sun,
    },
    {
      title: "Maroon & Navy Circular Crest",
      subtitle: "Honor, Integrity & Institutional Unity",
      desc: "The protective seal inscribed with 'Govt. Boys Higher Secondary School Manjeri, Malappuram District' affirming state dedication.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 flex flex-col items-center">
          <div className="mb-4 inline-flex p-2 rounded-full bg-gradient-to-br from-amber-100 via-white to-amber-50 border border-amber-200/80 shadow-md">
            <SchoolEmblem size={76} className="ring-2 ring-white rounded-full shadow-inner" />
          </div>
          <span className="text-[0.72rem] font-bold uppercase tracking-widest text-amber-700 block mb-2">
            ABOUT US — ESTABLISHED 1908
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 font-crest">
            SCHOOL HISTORY, VISION, MISSION &amp; HERITAGE
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Government Boys Higher Secondary School, Manjeri, stands as a premier educational anchor in Malappuram district. Over 118 years of public school stewardship, academic triumphs, and civic leadership.
          </p>
        </div>

        {/* 1. LEADERSHIP WELCOME DESK (Principal & Headmaster) */}

        {/* 2. VISION, MISSION & VALUES (3 Pillars) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">

          {/* Card 1: Vision */}
          <div className="relative bg-[#FCFDFE] rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
            <div className="absolute top-0 left-8 right-8 h-[3px] bg-blue-600 rounded-b" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-blue-100">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-slate-900 tracking-wide uppercase mb-3">
                VISION
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To empower students from all socio-economic backgrounds with transformative knowledge, scientific inquiry, ethical responsibility, and forward-looking leadership suited for the modern world.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-400 group-hover:text-blue-700 transition-colors">
              Sametham Ref: Verified Vision
            </div>
          </div>

          {/* Card 2: Mission */}
          <div className="relative bg-[#FCFDFE] rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
            <div className="absolute top-0 left-8 right-8 h-[3px] bg-amber-500 rounded-b" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-amber-100">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-slate-900 tracking-wide uppercase mb-3">
                MISSION
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Deliver high-standard state curriculum across high school and higher secondary tiers, fostering critical thinking, sports excellence, arts expression, and inclusive civic development.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-400 group-hover:text-amber-700 transition-colors">
              Sametham Ref: Verified Mission
            </div>
          </div>

          {/* Card 3: Core Values */}
          <div className="relative bg-[#FCFDFE] rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
            <div className="absolute top-0 left-8 right-8 h-[3px] bg-emerald-600 rounded-b" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-emerald-100">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-slate-900 tracking-wide uppercase mb-3">
                CORE VALUES
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Discipline through cadet corps, creative resonance in Kalolsavam, social empathy, athletic perseverance, and unwavering dedication to constitutional secular ethics.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-400 group-hover:text-emerald-700 transition-colors">
              Institutional Heritage
            </div>
          </div>

        </div>

        {/* 3. OFFICIAL EMBLEM INSIGNIA DECODED */}
        <div className="bg-[#FCFDFE] rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-gradient-to-br from-amber-100 via-white to-amber-50 border border-amber-300 shadow-md mb-4">
                <SchoolEmblem size={130} className="rounded-full shadow-inner" />
              </div>
              <h4 className="text-base font-black text-slate-900 font-crest">
                OFFICIAL SEAL OF GBHSS MANJERI
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                Preserving historical heraldry since 1908
              </p>
            </div>

            <div className="lg:col-span-8">
              <span className="text-[0.7rem] font-bold uppercase tracking-wider text-amber-700 block mb-1">
                HERALDRY &amp; SYMBOLISM
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 font-crest">
                DECODING OUR CENTURY-OLD EMBLEM
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {emblemSymbolism.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-amber-300 transition-colors"
                    >
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center shrink-0 border border-amber-200">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="text-xs font-bold text-slate-900">
                            {item.title}
                          </h5>
                          <span className="text-[10px] text-amber-700 font-semibold block">
                            {item.subtitle}
                          </span>
                        </div>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
