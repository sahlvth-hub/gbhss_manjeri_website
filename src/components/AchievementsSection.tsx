import React from 'react';
import {
  Award,
  Trophy,
  ExternalLink,
  Target,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { SPORTS_RECORDS } from '../data/schoolData';
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
  const championPhotos = [
    { name: "Sreehari K", event: "Air Rifle", img: sreehariImg },
    { name: "Amith P", event: "Air Rifle", img: amithImg },
    { name: "Lanha Suman", event: "Air Pistol", img: lanhaImg },
    { name: "Aishwarya P", event: "Air Rifle", img: aishwaryaImg },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="achievements" className="py-16 lg:py-24 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header with Staggered Entrance (same pattern as Vision, Mission & Values) */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          <motion.span
            variants={headerVariants}
            className="text-[0.72rem] font-bold uppercase tracking-widest text-amber-700 block mb-2"
          >
            STATE CHAMPIONS &amp; CULTURAL HONOURS
          </motion.span>
          <motion.h2
            variants={headerVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 font-crest"
          >
            SPORTS AWARDS &amp; ARTS ACHIEVEMENTS
          </motion.h2>
          <motion.p
            variants={headerVariants}
            className="text-sm sm:text-base text-slate-600 leading-relaxed"
          >
            Documented state-level competitive records, Shooting Championship triumphs, Kerala State School Games medals, and Kerala School Kalolsavam arts honours.
          </motion.p>
        </motion.div>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/*  SHOOTING CHAMPIONSHIP — OVERALL FIRST  🎯               */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <div className="mb-14">
          <div className="flex items-center gap-2.5 mb-6">
            <Target className="w-5 h-5 text-red-600" />
            <h3 className="text-lg font-black text-slate-900 tracking-tight uppercase">
              Shooting Championship — Overall First 🏆
            </h3>
          </div>

          {/* Photo Cards — Framer Motion Pure Fade-In on Photos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            {/* Card 1: Overall Champions Team */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="col-span-2 sm:col-span-1 group bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="aspect-square w-full overflow-hidden bg-slate-50">
                <img
                  src={shootingTeamImg}
                  alt="GBHSS Manjeri Shooting Championship Team — Overall First"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Cards 2–5: Individual Champions */}
            {championPhotos.map((champ, index) => (
              <motion.div
                key={champ.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (index + 1) * 0.12, ease: 'easeOut' }}
                className="group bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="aspect-square w-full overflow-hidden bg-slate-50">
                  <img
                    src={champ.img}
                    alt={`${champ.name} — ${champ.event}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/*  SPORTS AWARDS & ARTS ACCOMPLISHMENTS (Animated Cards)    */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >

          {/* SPORTS AWARDS */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className="bg-[#FCFDFE] rounded-3xl border border-slate-200/90 p-7 sm:p-8 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-amber-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-50 px-2.5 py-1 rounded">
                    Sports Awards &amp; State Games
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
          </motion.div>

          {/* STUDENT ACCOMPLISHMENTS (KALOLSAVAM & ARTS) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className="bg-[#FCFDFE] rounded-3xl border border-slate-200/90 p-7 sm:p-8 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-rose-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-900 bg-rose-50 px-2.5 py-1 rounded">
                    Student Accomplishments (Arts)
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
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};
