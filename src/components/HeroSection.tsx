import React from 'react';
import { motion } from 'framer-motion';
import schoolCampusPhoto from '../assets/images/gbhss-campus-hero.jpg';
import { useLanguage } from '../context/LanguageContext';

interface HeroSectionProps {
  onExploreClick: () => void;
  onDiscoverHistoryClick: () => void;
  onViewPhotoFullscreen?: () => void;
  onOpenPortal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const { t, isMalayalam } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-slate-950 text-white border-b border-slate-800"
    >
      {/* 1. Full-Screen Background Image with Cinematic Framer Motion Reveal */}
      <motion.div
        className="absolute inset-0 w-full h-full z-0 overflow-hidden"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      >
        <img
          src={schoolCampusPhoto}
          alt="Govt. Boys Higher Secondary School Manjeri Main Multilevel Academic Complex"
          className="w-full h-full object-cover object-[center_35%] filter brightness-[0.88] contrast-[1.05]"
          loading="eager"
          decoding="async"
        />

        {/* Cinematic Layered Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950/95" />
        
        {/* Animated subtle ambient glow pulse */}
        <motion.div
          className="absolute inset-0 bg-radial-at-tl from-amber-500/15 via-transparent to-transparent pointer-events-none"
          animate={{ opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* 2. Main Hero Content Container with Framer Motion Stagger */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 lg:py-16 flex-1 flex flex-col justify-center">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Kicker badge */}
          <motion.div variants={itemVariants} className="mb-4">
            <p className="inline-block text-sm sm:text-base font-semibold text-amber-300/90 tracking-wide font-serif-title border-b border-amber-400/20 pb-1">
              {t.hero.kicker}
            </p>
          </motion.div>

          {/* Grand Main Headline with Staggered Entrance */}
          <motion.h1
            variants={itemVariants}
            className={`text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.08] mb-6 drop-shadow-md ${
              isMalayalam ? 'font-sans font-black' : 'font-outfit-hero'
            }`}
          >
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            >
              {t.hero.headlinePart1}
            </motion.span>
            <br />
            <motion.span
              className="inline-block bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            >
              {t.hero.headlinePart2}
            </motion.span>
          </motion.h1>

          {/* Subtitle with High Legibility */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed max-w-2xl mb-8 font-normal drop-shadow-sm"
          >
            {isMalayalam ? (
              t.hero.subtitle
            ) : (
              <>
                Welcome to the official portal of <strong className="text-white font-bold">{t.hero.subtitleBold}</strong>. {t.hero.subtitleRest}
              </>
            )}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
