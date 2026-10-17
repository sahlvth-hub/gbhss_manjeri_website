import React from 'react';
import {
  FlaskConical,
  Monitor,
  Trophy,
} from 'lucide-react';
import { motion } from 'framer-motion';

export const CampusMetrics: React.FC = () => {
  const coreFacilities = [
    {
      id: "laboratories",
      title: "SCIENCE & KITE IT LABORATORIES",
      category: "Practical Research",
      badge: "4 Specialized Labs",
      icon: FlaskConical,
      iconColor: "text-cyan-700 bg-cyan-50 border-cyan-200",
      description:
        "Full-fledged Physics, Chemistry, and Biology laboratories equipped for practical experiments, state board practical examinations, and science fair innovations, alongside the Little KITEs IT computing lab.",
      features: [
        "Physics lab with optics & electrical benches",
        "Chemistry lab with chemical reagents & fume hoods",
        "Biology lab with compound microscopes & specimens",
        "65+ GNU/Linux networked workstations",
      ],
    },
    {
      id: "classrooms",
      title: "HI-TECH SMART CLASSROOMS",
      category: "Digital Pedagogy",
      badge: "54 Smart Rooms",
      icon: Monitor,
      iconColor: "text-blue-700 bg-blue-50 border-blue-200",
      description:
        "71 spacious, airy classrooms across the three-tier academic block, featuring 54 KITE-enabled smart classrooms with interactive flat touch panels, audio-visual podiums, and high-speed broadband.",
      features: [
        "Interactive flat touch display panels",
        "Multimedia projectors & sound systems",
        "High-speed fiber connectivity",
        "Ergonomic dual-bench student seating",
      ],
    },
    {
      id: "sports",
      title: "SPORTS COMPLEX & ARENAS",
      category: "Athletics & Martial Arts",
      badge: "State Championship Center",
      icon: Trophy,
      iconColor: "text-amber-700 bg-amber-50 border-amber-200",
      description:
        "Spacious sports ground and specialized indoor training facilities that have produced national and state champions in Fencing and Boxing under accredited physical education coaching.",
      features: [
        "State Fencing training strip (Piste)",
        "Dedicated Boxing training ring & punch bags",
        "Volleyball & Badminton outdoor courts",
        "Track & field athletics practice arena",
      ],
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
            INFRASTRUCTURE &amp; RESOURCES
          </motion.span>
          <motion.h2
            variants={headerVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 font-crest"
          >
            FACILITIES — LABORATORIES, CLASSROOMS &amp; SPORTS
          </motion.h2>
          <motion.p
            variants={headerVariants}
            className="text-sm sm:text-base text-slate-600 leading-relaxed"
          >
            World-class physical, technological, and athletic facilities supporting 2,400+ students on a lush 7.25-acre campus at Kacherippadi, Manjeri.
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
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight mb-3 group-hover:text-blue-900 transition-colors font-crest">
                    {fac.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {fac.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-slate-100">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                    Key Features &amp; Equipment:
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
