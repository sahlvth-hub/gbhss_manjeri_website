import React, { useState } from 'react';
import { SchoolEmblem } from './SchoolEmblem';
import {
  Lock,
  Menu,
  X,
  Home,
  Info,
  Building2,
  Trophy,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

interface NavbarProps {
  onOpenPortal: () => void;
  onOpenHistoryModal: () => void;
}

interface NavLinkItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPortal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, isMalayalam } = useLanguage();

  const navLinks: NavLinkItem[] = [
    { label: t.nav.home, href: '#home', icon: Home },
    { label: t.nav.about, href: '#about', icon: Info },
    { label: t.nav.facilities, href: '#facilities', icon: Building2 },
    { label: t.nav.achievements, href: '#achievements', icon: Trophy },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-white/60 shadow-[0_4px_30px_rgba(0,0,0,0.03)] transition-all">

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Brand Left with Official Seal */}
          <a href="#home" className="flex items-center gap-3.5 group">
            <SchoolEmblem size={50} className="transition-transform group-hover:scale-105 duration-200 ring-2 ring-amber-400/40 rounded-full shrink-0" />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-black text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-blue-900 transition-colors font-crest">
                  GBHSS MANJERI
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-extrabold bg-amber-100/90 text-amber-900 border border-amber-300/80">
                  {t.nav.estd}
                </span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 tracking-wide line-clamp-1">
                {t.nav.schoolSubtitle}
              </span>
            </div>
          </a>

          {/* Center Navigation Links & Language Switcher (Desktop) */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <nav className="flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-xl text-xs xl:text-sm font-bold text-slate-700 hover:text-blue-900 hover:bg-white/70 hover:backdrop-blur-md transition-all tracking-tight whitespace-nowrap ${
                    isMalayalam ? 'tracking-normal' : ''
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="h-6 w-px bg-slate-200" />

            {/* Desktop Language Switcher */}
            <LanguageSwitcher />
          </div>

          {/* Mobile Right Controls: Language Switcher + Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <LanguageSwitcher variant="compact" />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-white/60 rounded-xl transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer with Glassmorphism */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-white/50 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between pb-2 mb-1 border-b border-slate-100 px-1">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              {t.nav.languageToggle}
            </span>
            <LanguageSwitcher />
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/70 hover:bg-amber-50/80 hover:text-blue-900 text-xs font-bold text-slate-800 transition-colors border border-slate-100 shadow-2xs"
                >
                  <Icon className="w-4 h-4 text-amber-600 shrink-0" />
                  <span className="truncate">{link.label}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-200/50 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPortal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold text-white bg-[#0A192F]/90 backdrop-blur-md rounded-2xl shadow-md cursor-pointer hover:bg-slate-800 transition-colors"
            >
              <Lock className="w-4 h-4 text-amber-400" />
              <span>{t.nav.portalBtn}</span>
            </button>
          </div>
        </div>
      )}

    </header>
  );
};
