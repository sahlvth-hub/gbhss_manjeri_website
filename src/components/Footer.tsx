import React from 'react';
import { SchoolEmblem } from './SchoolEmblem';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onOpenPortal: () => void;
  onOpenHistory: () => void;
  onOpenKalolsavam: () => void;
  onOpenSports: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPortal,
  onOpenHistory,
  onOpenKalolsavam,
  onOpenSports,
}) => {
  const { t, isMalayalam } = useLanguage();

  return (
    <footer className="bg-[#080E1E] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: School Identity */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <SchoolEmblem size={44} />
              <div className="flex flex-col">
                <span className="font-extrabold text-white text-base tracking-tight font-crest">
                  GBHSS MANJERI
                </span>
                <span className="text-[0.7rem] text-slate-400">
                  {t.nav.estd} • Malappuram, Kerala
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5 max-w-sm">
              {t.footer.tagline}
            </p>

            <div className="inline-block px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400">
              UDISE: 32050800636 &nbsp;|&nbsp; School: 18021
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              {t.footer.quickNavTitle}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">
                  {t.footer.home}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  {t.footer.about}
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-amber-400 transition-colors">
                  {t.footer.facilities}
                </a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-amber-400 transition-colors">
                  {t.footer.achievements}
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenPortal}
                  className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 mt-1"
                >
                  <span>{t.footer.portalLink}</span>
                  <span>→</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Verified Repositories */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              {t.footer.verifiedReposTitle}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={onOpenKalolsavam}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 text-left"
                >
                  <span>{t.footer.kalolsavamRepo}</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenSports}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 text-left"
                >
                  <span>{t.footer.sportsRepo}</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </button>
              </li>
              <li>
                <a
                  href="https://sametham.kite.kerala.gov.in"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1"
                >
                  <span>{t.footer.samethamRepo}</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://hscap.kerala.gov.in"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1"
                >
                  <span>{t.footer.hscapRepo}</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Desk Hours */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              {t.footer.deskHoursTitle}
            </h4>
            <div className="space-y-2 text-xs text-slate-400 mb-4">
              <p>
                <strong className="text-slate-300">{t.footer.monFriLabel}</strong> {t.footer.monFriTime}
              </p>
              <p>
                <strong className="text-slate-300">{t.footer.satLabel}</strong> {t.footer.satTime}
              </p>
              <p>
                <strong className="text-slate-300">{t.footer.sunLabel}</strong> {t.footer.sunTime}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-500 flex items-start gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
              <span>{t.footer.address}</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            {t.footer.copyright}
          </p>

          <div className="flex items-center gap-4 text-[11px]">
            <a href="#" className="hover:text-slate-400 transition-colors">
              {t.footer.rti}
            </a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400 transition-colors">
              {t.footer.samethamSync}
            </a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400 transition-colors">
              {t.footer.archivalHeritage}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
