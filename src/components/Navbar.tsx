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

  const navLinks: NavLinkItem[] = [
    { label: 'Home', href: '#home', icon: Home },
    { label: 'About Us', href: '#about', icon: Info },
    { label: 'Facilities', href: '#facilities', icon: Building2 },
    { label: 'Achievements', href: '#achievements', icon: Trophy },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-xl border-b border-white/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)] supports-[backdrop-filter]:bg-white/60 transition-all">

      {/* Main Navigation Bar (Same Structure) */}
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
                <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-extrabold bg-amber-100/90 text-amber-900 border border-amber-300/80">
                  ESTD. 1908
                </span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 tracking-wide">
                ഗവ. ബോയ്സ് ഹയർ സെക്കൻഡറി സ്കൂൾ • Malappuram
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Desktop) with Glass Hover Style */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 rounded-xl text-xs xl:text-sm font-bold text-slate-700 hover:text-blue-900 hover:bg-white/60 hover:backdrop-blur-md transition-all tracking-tight whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-white/60 rounded-xl transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer with Glassmorphism */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/80 backdrop-blur-xl border-b border-white/50 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/60 hover:bg-amber-50/80 hover:text-blue-900 text-xs font-bold text-slate-800 transition-colors border border-white/60 shadow-2xs"
                >
                  <Icon className="w-4 h-4 text-amber-600" />
                  <span>{link.label}</span>
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
              className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold text-white bg-[#0A192F]/90 backdrop-blur-md rounded-2xl shadow-md"
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
