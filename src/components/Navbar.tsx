import React, { useState, useEffect } from 'react';
import { SchoolEmblem } from './SchoolEmblem';
import {
  Lock,
  Menu,
  X,
  Bell,
  ExternalLink,
  ChevronRight,
  Shield,
  Phone,
  BookOpen,
  Home,
  Info,
  GraduationCap,
  Building2,
  Calendar,
  Trophy,
} from 'lucide-react';

interface NavbarProps {
  onOpenPortal: () => void;
  onOpenHistoryModal: () => void;
}

interface NavLinkItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  action?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPortal, onOpenHistoryModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNoticeIdx, setActiveNoticeIdx] = useState(0);

  const announcements = [
    "📢 HSCAP Kerala Plus One Single-Window Admission Desk Active (School Code: 11010)",
    "🏆 Kerala School Kalolsavam 2024–25: GBHSS Manjeri achieves 38th State Rank with 43 Points",
    "🥇 Kerala State School Games 2026: State Gold Medals in Foil Fencing & Silver in Boxing",
    "📋 Kerala SSLC Examination 2025–26: 100% Pass Rate with 45+ Full A+ Achievers",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNoticeIdx((prev) => (prev + 1) % announcements.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [announcements.length]);

  const navLinks: NavLinkItem[] = [
    { label: 'Home', href: '#home', icon: Home },
    { label: 'About Us', href: '#about', icon: Info },
    { label: 'Academics', href: '#academics', icon: GraduationCap },
    { label: 'Facilities', href: '#facilities', icon: Building2 },
    { label: 'Programmes', href: '#programmes', icon: Calendar },
    { label: 'Achievements', href: '#achievements', icon: Trophy },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.03)] transition-all">


      {/* 2. Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Brand Left with Official Seal */}
          <a href="#home" className="flex items-center gap-3.5 group">
            <SchoolEmblem size={50} className="transition-transform group-hover:scale-105 duration-200 ring-2 ring-amber-400/40 rounded-full" />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-black text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-blue-900 transition-colors font-crest">
                  GBHSS MANJERI
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-extrabold bg-amber-100 text-amber-900 border border-amber-300/80">
                  ESTD. 1908
                </span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 tracking-wide">
                ഗവ. ബോയ്സ് ഹയർ സെക്കൻഡറി സ്കൂൾ • Malappuram
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 rounded-xl text-xs xl:text-sm font-bold text-slate-700 hover:text-blue-900 hover:bg-slate-100/80 transition-all tracking-tight whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          {/* <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenPortal}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-[#0A192F] to-[#132c4f] hover:from-[#132c4f] hover:to-[#0A192F] active:scale-[0.98] rounded-full transition-all shadow-md border border-slate-700"
              title="Open Official School Portal (Code 18021)"
            >
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              <span>School Portal #18021</span>
            </button>
          </div> */}

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenPortal}
              className="inline-flex sm:hidden items-center gap-1 px-3 py-1.5 text-xs font-bold text-white bg-[#0A192F] rounded-full"
            >
              <Lock className="w-3 h-3 text-amber-400" />
              <span>#18021</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* 3. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-slate-50 hover:bg-amber-50 hover:text-blue-900 text-xs font-bold text-slate-800 transition-colors border border-slate-200/70"
                >
                  <Icon className="w-4 h-4 text-amber-600" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPortal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold text-white bg-[#0A192F] rounded-2xl shadow-md"
            >
              <Lock className="w-4 h-4 text-amber-400" />
              <span>Open Official School Portal (#18021)</span>
            </button>
          </div>
        </div>
      )}

    </header>
  );
};
