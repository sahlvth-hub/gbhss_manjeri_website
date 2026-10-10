import React from 'react';
import { ArrowRight, Maximize2, ShieldCheck, MapPin, Sparkles, Award } from 'lucide-react';
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
    <section id="home" className="relative w-full min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-slate-950 text-white border-b border-slate-800">
      
      {/* 1. Full-Screen Background Image */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <img
          src={schoolCampusPhoto}
          alt="Govt. Boys Higher Secondary School Manjeri Main Multilevel Academic Complex"
          className="w-full h-full object-cover object-[center_35%] scale-100 filter brightness-[0.88] contrast-[1.05] transition-transform duration-1000 ease-out"
          loading="eager"
          decoding="async"
        />
        
        {/* Layered cinematic gradients for flawless contrast and readability */}
        {/* Left gradient for prominent text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/30" />
        
        {/* Vertical gradient to frame top navigation and bottom metadata bar */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-transparent to-slate-950/95" />
        
        {/* Subtle warm ambient tint */}
        <div className="absolute inset-0 bg-radial-at-tl from-amber-500/10 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* 2. Top-Right "View Full Photo" Floating Control */}
      {onViewPhotoFullscreen && (
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 flex justify-end">
          <button
            onClick={onViewPhotoFullscreen}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-xs font-semibold text-slate-200 hover:text-white backdrop-blur-md border border-white/20 transition-all shadow-lg active:scale-95"
            title="View School Photo Fullscreen"
          >
            <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
            <span>Full Image View</span>
          </button>
        </div>
      )}

      {/* 3. Main Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-20 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          
          {/* Official Kicker Badge with Real School Emblem */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-amber-400/40 text-amber-200 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-500">
            <SchoolEmblem size={26} className="ring-2 ring-amber-400/60 rounded-full" />
            <div className="flex items-center gap-2">
              <span>Govt. Boys Higher Secondary School</span>
              <span className="hidden sm:inline text-amber-400">•</span>
              <span className="hidden sm:inline text-slate-300 font-normal">Estd. 1908</span>
            </div>
          </div>

          {/* Majestic Hero Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] mb-6 drop-shadow-md">
            <span>LEARNING TODAY, </span>
            <br />
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              LEADING TOMORROW.
            </span>
          </h1>

          {/* Subtitle with High Legibility */}
          <p className="text-base sm:text-xl text-slate-200 leading-relaxed max-w-2xl mb-8 font-normal drop-shadow-sm">
            Welcome to the official portal of <strong className="text-white font-semibold">GBHSS Manjeri</strong>.
            Over a century of academic distinction, sports championships, and artistic brilliance at Kacherippadi, Malappuram.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-8">
            <button
              onClick={onExploreClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 active:scale-[0.98] rounded-full transition-all shadow-[0_4px_20px_rgba(245,158,11,0.35)] group"
            >
              <span>Explore Our School</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onDiscoverHistoryClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-white bg-slate-900/80 hover:bg-slate-800/90 active:scale-[0.98] backdrop-blur-md border border-white/20 rounded-full transition-all shadow-md group"
            >
              <span>Our 1908 History</span>
              <span className="text-amber-400 group-hover:translate-x-0.5 transition-transform">→</span>
            </button>

            {onOpenPortal && (
              <button
                onClick={onOpenPortal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Portal Code #18021</span>
              </button>
            )}
          </div>

          {/* Quick Location & Campus Pill */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-300 bg-black/40 backdrop-blur-sm px-3.5 py-1.5 rounded-xl border border-white/10">
            <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Main Campus: Kacherippadi, Manjeri, Malappuram, Kerala</span>
          </div>

        </div>
      </div>

      {/* 4. Full-Width Bottom Metadata Strip (Glassmorphic) */}
      <div className="relative z-10 w-full bg-slate-950/85 backdrop-blur-xl border-t border-white/15 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 items-center">
          
          {/* Stat 1 */}
          <div className="flex flex-col">
            <span className="text-[0.68rem] uppercase tracking-wider text-amber-400/90 font-bold">
              School Code
            </span>
            <span className="text-xl sm:text-2xl font-black text-white tabular-nums tracking-tight">
              18021
            </span>
            <span className="text-[0.68rem] text-slate-400">Kerala General Education</span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col border-l border-white/10 pl-4 sm:pl-6">
            <span className="text-[0.68rem] uppercase tracking-wider text-amber-400/90 font-bold">
              HSS Code
            </span>
            <span className="text-xl sm:text-2xl font-black text-white tabular-nums tracking-tight">
              11010
            </span>
            <span className="text-[0.68rem] text-slate-400">Higher Secondary Wing</span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col border-l border-white/10 pl-4 sm:pl-6">
            <span className="text-[0.68rem] uppercase tracking-wider text-amber-400/90 font-bold">
              UDISE Code
            </span>
            <span className="text-xl sm:text-2xl font-black text-white tabular-nums tracking-tight">
              32050800636
            </span>
            <span className="text-[0.68rem] text-slate-400">National School Registry</span>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col border-l border-white/10 pl-4 sm:pl-6">
            <span className="text-[0.68rem] uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Campus Status
            </span>
            <span className="text-xs sm:text-sm font-bold text-white tracking-tight mt-0.5 truncate">
              Multilevel Academic Block
            </span>
            <span className="text-[0.68rem] text-slate-400 truncate">
              Kacherippadi, Manjeri (Estd. 1908)
            </span>
          </div>

        </div>
      </div>

    </section>
  );
};
