import React, { useState } from 'react';
import { SchoolEmblem } from './SchoolEmblem';
import { Lock, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenPortal: () => void;
  onOpenHistoryModal: () => void;
}

interface NavLinkItem {
  label: string;
  href: string;
  action?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPortal, onOpenHistoryModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: NavLinkItem[] = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Academics', href: '#academics' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Programmes', href: '#programmes' },
    { label: 'Achievements', href: '#achievements' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Left */}
          <a href="#" className="flex items-center gap-3.5 group">
            <SchoolEmblem size={46} className="transition-transform group-hover:scale-105 duration-200" />
            <div className="flex flex-col">
              <span className="font-extrabold text-[1.125rem] tracking-tight text-slate-900 group-hover:text-blue-900 transition-colors">
                GBHSS MANJERI
              </span>
              <span className="text-[0.72rem] font-medium text-slate-500 tracking-wide">
                Estd. 1908 • Malappuram, Kerala
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  if (link.action) {
                    e.preventDefault();
                    link.action();
                  }
                }}
                className="text-[0.84rem] font-medium text-slate-600 hover:text-slate-950 transition-colors tracking-tight whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenPortal}
              className="inline-flex items-center gap-2 px-4 py-2 text-[0.8rem] font-semibold text-white bg-[#0A192F] hover:bg-[#152a48] active:scale-[0.98] rounded-full transition-all shadow-sm"
              title="Open Official School Portal (Code 18021)"
            >
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              <span>School Portal #18021</span>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenPortal}
              className="inline-flex sm:hidden items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#0A192F] rounded-full"
            >
              <Lock className="w-3 h-3 text-amber-400" />
              <span>#18021</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2 pb-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (link.action) {
                    e.preventDefault();
                    link.action();
                  }
                }}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-900 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPortal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-white bg-[#0A192F] rounded-lg"
            >
              <Lock className="w-4 h-4 text-amber-400" />
              <span>Open School Portal (Code #18021)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
