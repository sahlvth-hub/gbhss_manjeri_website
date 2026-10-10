import React, { useState } from 'react';
import {
  Award,
  Trophy,
  GraduationCap,
  Sparkles,
  ExternalLink,
  Medal,
  CheckCircle2,
  TrendingUp,
  Target,
  Star,
  Crosshair,
} from 'lucide-react';
import { KALOLSAVAM_RECORDS, SPORTS_RECORDS, SHOOTING_RECORDS } from '../data/schoolData';
import shootingTeamImg from '../assets/images/shooting-team-champions.png';
import sreehariImg from '../assets/images/sreehari-k-shooting.png';
import amithImg from '../assets/images/amith-p-air-rifle.png';
import lanhaImg from '../assets/images/lanha-suman-air-pistol.png';
import aishwaryaImg from '../assets/images/aishwarya-p-air-rifle.png';

interface AchievementsSectionProps {
  onOpenKalolsavamDetail: () => void;
  onOpenSportsDetail: () => void;
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({
  onOpenKalolsavamDetail,
  onOpenSportsDetail,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'academic' | 'sports' | 'accomplishments'>('all');

  const championPhotos = [
    { name: "Sreehari K", event: "Air Rifle", img: sreehariImg },
    { name: "Amith P", event: "Air Rifle", img: amithImg },
    { name: "Lanha Suman", event: "Air Pistol", img: lanhaImg },
    { name: "Aishwarya P", event: "Air Rifle", img: aishwaryaImg },
  ];

  const academicHonours = [
    {
      title: "Kerala SSLC Board Examination Records",
      stat: "100% Pass",
      sub: "High School Wing (Code: 18021)",
      description: "Consistent 100% success rate with over 45 students securing full A+ (All 10 Subjects) in the Kerala Secondary School Leaving Certificate (SSLC) examinations.",
      highlights: ["45+ Full A+ Achievers", "Malayalam & English Medium Toppers", "Subject-wise 100% Pass Rates"],
    },
    {
      title: "Higher Secondary DHSE Examination Results",
      stat: "98.4% Pass",
      sub: "HSS Section (Code: 11010)",
      description: "Exemplary performance across Science (Bio-Maths & Computer Science), Commerce, and Humanities streams with students gaining admissions to top medical and engineering colleges.",
      highlights: ["Top State Percentiles in Biology & Chemistry", "Full A+ in Commerce Streams", "Merit Admissions to KEAM & NEET"],
    },
    {
      title: "National & State Scholarship Triumphs",
      stat: "35+ Scholars",
      sub: "Competitive Scholarship Exams",
      description: "Recipients of National Means-cum-Merit Scholarship (NMMS), USS (Upper Secondary Scholarship), and state-level mathematics olympiad citations.",
      highlights: ["NMMS National Merit Scholars", "USS District Rank Holders", "KITE State Digital Talent Awards"],
    },
  ];

  return (
    <section id="achievements" className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[0.72rem] font-bold uppercase tracking-widest text-amber-700 block mb-2">
            PROVEN EXCELLENCE &amp; HONOURS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 font-crest">
            ACHIEVEMENTS — ACADEMIC RESULTS, SPORTS AWARDS &amp; STUDENT ACCOMPLISHMENTS
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Documented state-level competitive records, academic board triumphs, and student achievements verified by the Department of General Education &amp; KITE.
          </p>

          {/* Category Filter Pills */}
          <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 mt-8 bg-slate-200/70 rounded-2xl border border-slate-300/80">
            {[
              { id: 'all', label: 'All Achievements' },
              { id: 'academic', label: 'Academic Results' },
              { id: 'sports', label: 'Sports Awards' },
              { id: 'accomplishments', label: 'Student Accomplishments' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeCategory === tab.id
                    ? 'bg-white text-slate-950 shadow-md scale-[1.02]'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 1. ACADEMIC RESULTS */}
        {(activeCategory === 'all' || activeCategory === 'academic') && (
          <div className="mb-14">
            <div className="flex items-center gap-2.5 mb-6">
              <GraduationCap className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-black text-slate-900 tracking-tight uppercase">
                1. Academic Examination Results &amp; Scholarships
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {academicHonours.map((item) => (
                <div
                  key={item.title}
                  className="bg-[#FCFDFE] rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-3xl font-black text-slate-900 tabular-nums tracking-tight">
                        {item.stat}
                      </span>
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-extrabold bg-blue-50 text-blue-800 border border-blue-200">
                        {item.sub}
                      </span>
                    </div>

                    <h4 className="text-base font-extrabold text-slate-900 tracking-tight mb-2">
                      {item.title}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 space-y-1.5">
                    {item.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-[11px] font-semibold text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════ */}
        {/*  SHOOTING CHAMPIONSHIP — OVERALL FIRST  🎯               */}
        {/* ═══════════════════════════════════════════════════════════ */}
        {(activeCategory === 'all' || activeCategory === 'sports') && (
          <div className="mb-14">
            <div className="flex items-center gap-2.5 mb-6">
              <Target className="w-5 h-5 text-red-600" />
              <h3 className="text-lg font-black text-slate-900 tracking-tight uppercase">
                Shooting Championship — Overall First 🏆
              </h3>
            </div>

            {/* Dark premium card with team photo and champion grid */}
            <div className="bg-gradient-to-br from-[#0c1a2e] via-[#122240] to-[#0a1628] rounded-3xl border border-amber-500/30 shadow-2xl overflow-hidden relative">
              {/* Subtle ambient light overlay */}
              <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 20% 50%, rgba(251,191,36,0.3), transparent 50%), radial-gradient(circle at 80% 20%, rgba(251,191,36,0.2), transparent 40%)',
                }}
              />

              {/* Team Photo Banner */}
              <div className="relative">
                <div className="aspect-[21/9] sm:aspect-[3/1] overflow-hidden">
                  <img
                    src={shootingTeamImg}
                    alt="GBHSS Manjeri Shooting Championship Team — Overall First"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a2e] via-[#0c1a2e]/60 to-transparent" />
                </div>

                {/* Floating badges */}
                <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                  <span className="px-3 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/30 flex items-center gap-1.5">
                    <Trophy className="w-3.5 h-3.5" />
                    Overall First
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/15 backdrop-blur-md text-white border border-white/20">
                    State School Olympics
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 sm:p-8 relative z-10">
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-crest uppercase">
                    Proud of Our Champions! 🎯
                  </h3>
                  <p className="text-sm text-amber-200/80 mt-1">
                    Air Pistol &amp; Air Rifle — Qualified for State School Olympics
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Department of Physical Education • GBHSS Manjeri
                  </p>
                </div>

                {/* Individual Champion Photo Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
                  {championPhotos.map((champ) => (
                    <div
                      key={champ.name}
                      className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-amber-400/50 transition-all hover:shadow-lg hover:shadow-amber-500/10"
                    >
                      {/* Champion Photo */}
                      <div className="aspect-[3/4] overflow-hidden bg-slate-900">
                        <img
                          src={champ.img}
                          alt={`${champ.name} — ${champ.event} Champion`}
                          className="w-full h-full object-cover object-top transform transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Name & event overlay */}
                      <div className="p-3 bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-transparent absolute inset-x-0 bottom-0">
                        <h4 className="text-sm font-bold text-white tracking-tight leading-tight">
                          {champ.name}
                        </h4>
                        <div className="flex items-center gap-1.5 mt-1">
                          <span className="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/30">
                            {champ.event}
                          </span>
                          <Crosshair className="w-3 h-3 text-red-400/70" />
                        </div>
                      </div>

                      {/* Star badge on hover */}
                      <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-amber-400/90 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                        <Star className="w-3.5 h-3.5 text-slate-950 fill-slate-950" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats Bar */}
                <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-white/5 rounded-xl p-3 border border-white/5 text-center">
                    <span className="text-amber-400 text-[10px] uppercase font-bold block">Discipline</span>
                    <span className="text-white text-sm font-bold">Air Rifle &amp; Air Pistol</span>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 border border-white/5 text-center">
                    <span className="text-amber-400 text-[10px] uppercase font-bold block">Standing</span>
                    <span className="text-white text-sm font-bold">Overall 1st Place 🥇</span>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 border border-white/5 text-center">
                    <span className="text-amber-400 text-[10px] uppercase font-bold block">Qualified For</span>
                    <span className="text-white text-sm font-bold">State School Olympics</span>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 border border-white/5 text-center">
                    <span className="text-amber-400 text-[10px] uppercase font-bold block">Champions</span>
                    <span className="text-white text-sm font-bold">4 Qualified Athletes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. SPORTS AWARDS & 3. STUDENT ACCOMPLISHMENTS (KALOLSAVAM) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* SPORTS AWARDS */}
          {(activeCategory === 'all' || activeCategory === 'sports') && (
            <div className="bg-[#FCFDFE] rounded-3xl border border-slate-200/90 p-7 sm:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-amber-500" />
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-50 px-2.5 py-1 rounded">
                      2. Sports Awards &amp; State Games
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    13 Pts in 2026
                  </span>
                </div>

                <h3 className="text-xl font-black text-slate-900 tracking-tight mb-2">
                  Kerala State School Games Champions
                </h3>
                <p className="text-xs text-slate-600 mb-6">
                  Official state records in Foil Fencing, Sabre Fencing, and State Boxing Tournaments.
                </p>

                {/* Individual Medallists List */}
                <div className="space-y-3 mb-6">
                  {SPORTS_RECORDS.current2026.standings.map((athlete) => (
                    <div
                      key={athlete.student}
                      className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs">
                          🥇
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                            {athlete.student}
                          </h4>
                          <p className="text-[11px] text-slate-500">
                            {athlete.division} • {athlete.event}
                          </p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200">
                        {athlete.place}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-50/80 border border-slate-200/70 rounded-2xl p-4 text-xs text-slate-600 mb-6">
                  <strong className="text-slate-900 block mb-1">Historic 2024 Sabre Fencing State Record:</strong>
                  <span>• Abhinav Unni (1st Place Gold) &nbsp;|&nbsp; • Parthiv S Cherukad (2nd Place Silver)</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <button
                  onClick={onOpenSportsDetail}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-[#0A192F] hover:bg-slate-800 rounded-xl transition-colors shadow-sm"
                >
                  <span>View Full Sports Dossier</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STUDENT ACCOMPLISHMENTS (KALOLSAVAM & ARTS) */}
          {(activeCategory === 'all' || activeCategory === 'accomplishments') && (
            <div className="bg-[#FCFDFE] rounded-3xl border border-slate-200/90 p-7 sm:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-rose-500" />
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-900 bg-rose-50 px-2.5 py-1 rounded">
                      3. Student Accomplishments (Arts)
                    </span>
                  </div>
                  <span className="text-xs font-black text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                    State Rank #38
                  </span>
                </div>

                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-black text-slate-900 tracking-tight">
                      Kerala School Kalolsavam Record
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Ranked <strong className="text-slate-900 font-extrabold">38th overall</strong> in the state of Kerala with <strong className="text-amber-700 font-black">43 Points</strong>.
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-black text-amber-700 tabular-nums">
                      43 Pts
                    </span>
                  </div>
                </div>

                {/* 9 A-Grade Disciplines Grid */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {[
                    "Classical Music (1st)",
                    "Mohiniyattam (2nd)",
                    "Patriotic Song (1st)",
                    "Group Song (2nd)",
                    "Ottanthullal (3rd)",
                    "Western Guitar (1st)",
                    "Bharatanatyam (A)",
                    "Sanskrit Speech (2nd)",
                    "Parichamuttu (A)",
                  ].map((d) => (
                    <div
                      key={d}
                      className="p-2 rounded-xl bg-white border border-slate-200/80 text-center text-[10px] font-bold text-slate-700 shadow-2xs truncate"
                      title={d}
                    >
                      {d}
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/60 text-xs text-slate-700 flex items-center justify-between mb-6">
                  <span>
                    <strong>Kalolsavam 2025–26 Results:</strong> Official published standing with 25 points.
                  </span>
                  <span className="font-bold text-amber-900">25 Pts</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <button
                  onClick={onOpenKalolsavamDetail}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-[#0A192F] hover:bg-slate-800 rounded-xl transition-colors shadow-sm"
                >
                  <span>View Kalolsavam Standings</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
