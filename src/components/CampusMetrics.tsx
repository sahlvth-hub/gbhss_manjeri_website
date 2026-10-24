import React from 'react';
import {
  FlaskConical,
  Monitor,
  Trophy,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const CampusMetrics: React.FC = () => {
  const { t, isMalayalam } = useLanguage();

  const coreFacilities = [
    {
      id: "laboratories",
      title: t.facilities.labs.title,
      category: t.facilities.labs.category,
      badge: t.facilities.labs.badge,
      icon: FlaskConical,
      iconColor: "text-cyan-700 bg-cyan-50 border-cyan-200",
      description: t.facilities.labs.description,
      features: t.facilities.labs.features,
    },
    {
      id: "classrooms",
      title: t.facilities.classrooms.title,
      category: t.facilities.classrooms.category,
      badge: t.facilities.classrooms.badge,
      icon: Monitor,
      iconColor: "text-blue-700 bg-blue-50 border-blue-200",
      description: t.facilities.classrooms.description,
      features: t.facilities.classrooms.features,
    },
    {
      id: "sports",
      title: t.facilities.sports.title,
      category: t.facilities.sports.category,
      badge: t.facilities.sports.badge,
      icon: Trophy,
      iconColor: "text-amber-700 bg-amber-50 border-amber-200",
      description: t.facilities.sports.description,
      features: t.facilities.sports.features,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
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
    <section id="facilities" className="py-16 lg:py-24 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Framer Motion Reveal */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          <motion.span
            variants={headerVariants}
            className="text-[0.72rem] font-bold uppercase tracking-widest text-amber-700 block mb-2"
          >
            {t.facilities.kicker}
          </motion.span>
          <motion.h2
            variants={headerVariants}
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 ${
              isMalayalam ? 'font-sans' : 'font-crest'
            }`}
          >
            {t.facilities.title}
          </motion.h2>
          <motion.p
            variants={headerVariants}
            className="text-sm sm:text-base text-slate-600 leading-relaxed"
          >
            {t.facilities.description}
          </motion.p>
        </motion.div>

        {/* 3 Pillar Facility Cards with Framer Motion Stagger & Hover */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          {coreFacilities.map((fac) => {
            const Icon = fac.icon;
            return (
              <motion.div
                key={fac.id}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="bg-[#FCFDFE] rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-xs group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 ${fac.iconColor}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-slate-900 text-amber-300 shadow-xs">
                      {fac.badge}
                    </span>
                  </div>

                  <span className="text-[0.68rem] font-bold uppercase tracking-widest text-slate-400 block mb-1">
                    {fac.category}
                  </span>
                  <h3 className={`text-lg sm:text-xl font-black text-slate-900 tracking-tight mb-3 group-hover:text-blue-900 transition-colors ${
                    isMalayalam ? 'font-sans' : 'font-crest'
                  }`}>
                    {fac.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {fac.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-slate-100">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                    {t.facilities.keyFeaturesHeading}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-700">
                    {fac.features.map((feat) => (
                      <div
                        key={feat}
                        className="flex items-center gap-2 p-2 rounded-xl bg-white border border-slate-200/70 shadow-2xs hover:border-amber-300 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                        <span className="truncate" title={feat}>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
