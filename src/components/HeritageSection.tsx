import React from 'react';
import { Eye, Zap, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { SchoolEmblem } from './SchoolEmblem';

export const HeritageSection: React.FC = () => {
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
    <section id="about" className="py-16 lg:py-24 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header with Staggered Entrance */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14 flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          {/* Emblem with subtle scale bounce */}
          <motion.div
            variants={headerVariants}
            whileHover={{ scale: 1.06, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="mb-4 inline-flex p-2 rounded-full bg-gradient-to-br from-amber-100 via-white to-amber-50 border border-amber-200/80 shadow-md cursor-pointer"
          >
            <SchoolEmblem size={76} className="ring-2 ring-white rounded-full shadow-inner" />
          </motion.div>

          {/* Kicker Badge */}
          <motion.span
            variants={headerVariants}
            className="text-[0.72rem] font-bold uppercase tracking-widest text-amber-700 block mb-2"
          >
            ABOUT US — ESTABLISHED 1908
          </motion.span>

          {/* Main Section Title */}
          <motion.h2
            variants={headerVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 font-crest"
          >
            VISION, MISSION &amp; CORE VALUES
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={headerVariants}
            className="text-sm sm:text-base text-slate-600 leading-relaxed"
          >
            Government Boys Higher Secondary School, Manjeri, stands as a premier educational anchor in Malappuram district. Over 118 years of public school stewardship, academic triumphs, and civic leadership.
          </motion.p>
        </motion.div>

        {/* 2. VISION, MISSION & VALUES (3 Pillars Grid Animated with Framer Motion) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >

          {/* Card 1: Vision */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className="relative bg-[#FCFDFE] rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
          >
            <div className="absolute top-0 left-8 right-8 h-[3px] bg-blue-600 rounded-b" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 border border-blue-100">
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
          </motion.div>

          {/* Card 2: Mission */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className="relative bg-[#FCFDFE] rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
          >
            <div className="absolute top-0 left-8 right-8 h-[3px] bg-amber-500 rounded-b" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 border border-amber-100">
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
          </motion.div>

          {/* Card 3: Core Values */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className="relative bg-[#FCFDFE] rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
          >
            <div className="absolute top-0 left-8 right-8 h-[3px] bg-emerald-600 rounded-b" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 border border-emerald-100">
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
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};
