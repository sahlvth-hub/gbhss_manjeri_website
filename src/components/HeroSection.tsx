import React from 'react';
import {
  ArrowRight,
  Maximize2,
  ShieldCheck,
  MapPin,
  Sparkles,
  Award,
  BookOpen,
  GraduationCap,
  Trophy,
  Users,
} from 'lucide-react';
import { SchoolEmblem } from './SchoolEmblem';
import schoolCampusPhoto from '../assets/images/gbhss-campus-hero.jpg';

interface HeroSectionProps {
  onExploreClick: () => void;
  onDiscoverHistoryClick: () => void;
  onViewPhotoFullscreen?: () => void;
  onOpenPortal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onDiscoverHistoryClick,
  onViewPhotoFullscreen,
  onOpenPortal,
}) => {
  return (
    <section
      id="home"
      className="relative w-full min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-slate-950 text-white border-b border-slate-800"
    >
      {/* 1. Full-Screen Background Image with Cinematic Grading */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <img
          src={schoolCampusPhoto}
          alt="Govt. Boys Higher Secondary School Manjeri Main Multilevel Academic Complex"
          className="w-full h-full object-cover object-[center_35%] scale-100 filter brightness-[0.88] contrast-[1.05] transition-transform duration-1000 ease-out"
          loading="eager"
          decoding="async"
        />

        {/* Cinematic Layered Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950/95" />
        <div className="absolute inset-0 bg-radial-at-tl from-amber-500/15 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* 2. Top-Right "View Full Photo" Floating Control */}
      {/* {onViewPhotoFullscreen && (
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 flex justify-end">
          <button
            onClick={onViewPhotoFullscreen}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-xs font-semibold text-slate-200 hover:text-white backdrop-blur-md border border-white/20 transition-all shadow-lg active:scale-95"
            title="View School Photo Fullscreen"
          >
            <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
            <span>Full Campus View</span>
          </button>
        </div>
      )} */}

      {/* 3. Main Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 lg:py-16 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">

          {/* Institutional Badge with Official School Emblem */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/85 backdrop-blur-md border border-amber-400/40 text-amber-200 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-5 shadow-2xl">
            <SchoolEmblem size={28} className="ring-2 ring-amber-400/60 rounded-full" />
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-white">Govt. Boys Higher Secondary School</span>
              <span className="text-amber-400">•</span>
              <span className="text-amber-300 font-bold">Estd. 1908</span>
            </div>
          </div>

          {/* Bilingual Title: Malayalam + English */}
          <div className="mb-4">
            <p className="text-sm sm:text-base font-semibold text-amber-300/90 tracking-wide font-serif-title">
              ഗവൺമെന്റ് ബോയ്സ് ഹയർ സെക്കൻഡറി സ്കൂൾ, മഞ്ചേരി
            </p>
          </div>

          {/* Grand Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] mb-6 drop-shadow-md font-crest">
            <span>LEARNING TODAY, </span>
            <br />
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              LEADING TOMORROW.
            </span>
          </h1>

          {/* Subtitle with High Legibility */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed max-w-2xl mb-8 font-normal drop-shadow-sm">
            Welcome to the official portal of <strong className="text-white font-bold">GBHSS Manjeri</strong>. Over a century of distinguished public education, state championship honors, and artistic brilliance in Malappuram, Kerala.
          </p>

          {/* Call to Action Buttons */}
          {/* <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-8">
            <button
              onClick={onExploreClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 active:scale-[0.98] rounded-full transition-all shadow-[0_4px_20px_rgba(245,158,11,0.35)] group"
            >
              <span>Explore Academics &amp; Streams</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onDiscoverHistoryClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-slate-900/80 hover:bg-slate-800/90 active:scale-[0.98] backdrop-blur-md border border-white/20 rounded-full transition-all shadow-md group"
            >
              <span>Our 118-Year Heritage</span>
              <span className="text-amber-400 group-hover:translate-x-0.5 transition-transform">→</span>
            </button>

            {onOpenPortal && (
              <button
                onClick={onOpenPortal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-full border border-white/10"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Admission Desk #18021</span>
              </button>
            )}
          </div> */}

          {/* Key School Highlights Quick Bar */}
          {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 max-w-2xl">
            <div className="p-3 rounded-2xl bg-slate-900/70 backdrop-blur-md border border-white/10 flex items-center gap-2.5">
              <GraduationCap className="w-4 h-4 text-blue-400 shrink-0" />
              <div>
                <span className="block text-xs font-black text-white">100% Pass</span>
                <span className="text-[10px] text-slate-400">SSLC Board Results</span>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-900/70 backdrop-blur-md border border-white/10 flex items-center gap-2.5">
              <Trophy className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <span className="block text-xs font-black text-white">State Rank #38</span>
                <span className="text-[10px] text-slate-400">43 Kalolsavam Pts</span>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-900/70 backdrop-blur-md border border-white/10 flex items-center gap-2.5">
              <Award className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <span className="block text-xs font-black text-white">State Gold 🥇</span>
                <span className="text-[10px] text-slate-400">Fencing &amp; Boxing</span>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-900/70 backdrop-blur-md border border-white/10 flex items-center gap-2.5">
              <Users className="w-4 h-4 text-rose-400 shrink-0" />
              <div>
                <span className="block text-xs font-black text-white">2,400+ Boys</span>
                <span className="text-[10px] text-slate-400">82 Expert Faculty</span>
              </div>
            </div>
          </div> */}

        </div>
      </div>

      {/* 4. Full-Width Bottom Metadata Strip (Glassmorphic) */}


    </section>
  );
};
