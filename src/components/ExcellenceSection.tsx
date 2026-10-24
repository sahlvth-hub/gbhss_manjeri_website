import React from 'react';
import {
  Trophy,
  Award,
  Star,
  BookOpen,
  Users,
  GraduationCap,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

// Icon mapping for each award card
const awardIcons = [
  Users,        // SSSS Award — Community Service
  GraduationCap, // PTA Best Teacher — Teaching Excellence
  BookOpen,     // Aksharamuttam Quiz — Academic Contest
  Award,        // State Sports & Kalolsavam — Sports & Cultural Arts
];

// Accent color palette for award cards
const awardAccents = [
  { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', topBar: 'bg-emerald-600', badge: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
  { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', topBar: 'bg-blue-600', badge: 'bg-blue-50 text-blue-800 border-blue-200' },
  { bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-200', topBar: 'bg-violet-600', badge: 'bg-violet-50 text-violet-800 border-violet-200' },
  { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200', topBar: 'bg-rose-600', badge: 'bg-rose-50 text-rose-800 border-rose-200' },
];

export const ExcellenceSection: React.FC = () => {
  const { t, isMalayalam } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
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
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      id="excellence"
      className="py-16 lg:py-24 bg-gradient-to-b from-white via-amber-50/20 to-white border-b border-slate-100 overflow-hidden"
      aria-labelledby="excellence-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ─── Section Header ─── */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          <motion.div variants={headerVariants} className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-[0.72rem] font-bold uppercase tracking-widest text-amber-700">
              {t.excellence.kicker}
            </span>
            <Sparkles className="w-4 h-4 text-amber-500" />
          </motion.div>

          <motion.h2
            id="excellence-heading"
            variants={headerVariants}
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 ${
              isMalayalam ? 'font-sans font-black' : 'font-outfit-hero font-extrabold'
            }`}
          >
            {t.excellence.title}
          </motion.h2>

          <motion.p
            variants={headerVariants}
            className="text-sm sm:text-base text-slate-600 leading-relaxed"
          >
            {t.excellence.subtitle}
          </motion.p>
        </motion.div>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/*  FEATURED AWARD — Sreshta Vidyalayam Puraskaram           */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="mb-10"
        >
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="relative bg-gradient-to-br from-amber-50/80 via-white to-amber-50/40 rounded-3xl p-8 sm:p-10 lg:p-12 border border-amber-200/70 shadow-sm hover:shadow-xl transition-all group"
          >
            {/* Top accent bar */}
            <div className="absolute top-0 left-10 right-10 h-[3px] bg-gradient-to-r from-amber-400 via-amber-600 to-amber-400 rounded-b" />

            <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
              {/* Trophy Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200/60 text-amber-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-amber-200/80 shadow-inner">
                  <Trophy className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-[0.68rem] font-bold uppercase tracking-wider text-amber-800 bg-amber-100/80 px-2.5 py-1 rounded border border-amber-200/60">
                    {t.excellence.featured.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[0.68rem] font-bold text-amber-700 bg-amber-50 px-2 py-1 rounded border border-amber-200/50">
                    <Star className="w-3 h-3" />
                    Featured
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight mb-3">
                  {t.excellence.featured.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-5 max-w-3xl">
                  {t.excellence.featured.description}
                </p>

                {/* Verification Status Banner */}
                <div className="inline-flex items-start gap-2.5 p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200/60">
                  <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-amber-800 block mb-0.5">
                      {t.excellence.featured.status}
                    </span>
                    <span className="text-[11px] text-amber-700/80 leading-snug">
                      {t.excellence.featured.claimNote}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/*  REMAINING AWARDS — Responsive Grid                       */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          {t.excellence.awards.map((award, index) => {
            const IconComponent = awardIcons[index] || Award;
            const accent = awardAccents[index] || awardAccents[0];

            return (
              <motion.div
                key={award.title}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="relative bg-[#FCFDFE] rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                {/* Top accent bar */}
                <div className={`absolute top-0 left-8 right-8 h-[3px] ${accent.topBar} rounded-b`} />

                <div>
                  {/* Icon & Category */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl ${accent.bg} ${accent.text} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border ${accent.border}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className={`text-[0.65rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded border ${accent.badge}`}>
                      {award.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight mb-2">
                    {award.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {award.description}
                  </p>
                </div>

                {/* Verification Note */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="flex items-start gap-2 p-3 rounded-xl bg-slate-50/80 border border-slate-200/60">
                    <AlertCircle className="w-3.5 h-3.5 text-slate-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-[0.65rem] font-bold text-slate-700 block mb-0.5">
                        {award.status}
                      </span>
                      <span className="text-[10px] text-slate-500 leading-snug">
                        {award.claimNote}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ─── Verification Disclaimer ─── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="inline-flex items-center gap-2 text-xs text-slate-500 bg-slate-50 px-4 py-2 rounded-full border border-slate-200/60">
            <AlertCircle className="w-3.5 h-3.5 text-slate-400" />
            {t.excellence.verificationNote}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
