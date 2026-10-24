import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Maximize2 } from 'lucide-react';
import schoolBuildingPhoto from '../assets/images/school-building-33.jpg';
import { useLanguage } from '../context/LanguageContext';

interface HeroSectionProps {
  onExploreClick: () => void;
  onDiscoverHistoryClick?: () => void;
  onViewPhotoFullscreen?: () => void;
  onOpenPortal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onDiscoverHistoryClick,
  onViewPhotoFullscreen,
  onOpenPortal,
}) => {
  const { t, isMalayalam } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
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
      id="home"
      className="relative w-full min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-[#F3F4F6] text-slate-900 border-b border-slate-200/80"
    >
      {/* 1. SEPARATE BACKGROUND LAYER (Authentic Building 33 + Atmospheric Fog & Liquid Caustics) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Authentic School Building Photograph (Image 33) */}
        <motion.img
          src={schoolBuildingPhoto}
          alt="Govt. Boys Higher Secondary School Manjeri Main Multilevel Academic Complex"
          className="w-full h-full object-cover object-[center_35%] filter blur-[1.2px] brightness-[0.98] contrast-[1.02] scale-[1.02]"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1.02 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          loading="eager"
        />

        {/* Atmospheric Depth Wash */}
        <div className="absolute inset-0 bg-slate-900/22 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/15 to-white/30 backdrop-blur-[0.5px]" />

        {/* Ambient Liquid Light Orbs (Floating gentle iridescent caustic lights) */}
        <div
          aria-hidden="true"
          className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-radial from-amber-200/35 via-white/20 to-transparent blur-3xl animate-liquid-orb-1 pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-1/3 right-1/4 w-[28rem] h-[28rem] rounded-full bg-radial from-sky-100/40 via-white/25 to-transparent blur-3xl animate-liquid-orb-2 pointer-events-none"
        />

        {/* Drifting Atmospheric Fog Veils */}
        <div
          aria-hidden="true"
          className="absolute -inset-x-24 bottom-0 h-3/4 opacity-45 animate-fog-slow-1 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 30% 75%, rgba(255, 255, 255, 0.8), rgba(241, 245, 249, 0.4) 50%, transparent 80%)',
          }}
        />
        <div
          aria-hidden="true"
          className="absolute -inset-x-24 top-0 h-4/5 opacity-40 animate-fog-slow-2 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 65% 45% at 75% 35%, rgba(255, 255, 255, 0.7), rgba(226, 232, 240, 0.3) 55%, transparent 80%)',
          }}
        />

        {/* Seamless Blending Gradients (Header & Body Transition) */}
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-white/70 via-white/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#FBFBFA] via-[#FBFBFA]/85 to-transparent" />
      </div>

      {/* 2. Top-Right "View Full Photo" Floating Liquid Glass Pill */}
      {onViewPhotoFullscreen && (
        <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 flex justify-end">
          <button
            onClick={onViewPhotoFullscreen}
            className="group liquid-glass-pill inline-flex items-center gap-2 px-4 py-2 rounded-full text-slate-800 text-xs font-semibold hover:scale-105 active:scale-95 transition-all cursor-pointer"
            title="View School Building Photo Fullscreen"
          >
            <Maximize2 className="w-3.5 h-3.5 text-amber-700 transition-transform group-hover:scale-110" />
            <span className="tracking-tight">Full Campus Photo</span>
          </button>
        </div>
      )}

      {/* 3. Main Hero Liquid Glass Vessel Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 flex-1 flex flex-col justify-center">
        <motion.div
          className="relative max-w-3xl rounded-[2.5rem] p-7 sm:p-11 lg:p-14 liquid-glass-panel overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Liquid Glass Prismatic Specular Rim Highlights */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/95 to-transparent pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-white/45 blur-2xl pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-amber-200/20 blur-2xl pointer-events-none"
          />

          {/* Grand Main Headline with Liquid Shimmer Accents */}
          <motion.h1
            variants={itemVariants}
            className={`text-3xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 leading-[1.12] mb-5 ${
              isMalayalam ? 'font-sans font-black' : 'font-outfit-hero font-extrabold'
            }`}
          >
            <span className="block text-slate-900 drop-shadow-xs">
              {t.hero.headlinePart1}
            </span>
            <span className="block bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 bg-clip-text text-transparent drop-shadow-xs">
              {t.hero.headlinePart2}
            </span>
          </motion.h1>

          {/* Subtitle with High-Contrast Legibility */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed max-w-2xl mb-8 font-normal"
          >
            {isMalayalam ? (
              t.hero.subtitle
            ) : (
              <>
                Welcome to the official portal of <strong className="text-slate-900 font-bold">{t.hero.subtitleBold}</strong>. {t.hero.subtitleRest}
              </>
            )}
          </motion.p>

          {/* Call to Action Button - Liquid Glass Button */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={onExploreClick}
              className="liquid-glass-btn-primary inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs sm:text-sm font-bold text-white rounded-2xl transition-all cursor-pointer group active:scale-[0.98]"
            >
              <span>Explore Campus</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
