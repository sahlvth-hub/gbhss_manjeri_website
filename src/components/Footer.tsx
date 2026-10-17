import React from 'react';
import { SchoolEmblem } from './SchoolEmblem';
import { ArrowUpRight, MapPin } from 'lucide-react';

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
                  Estd. 1908 • Malappuram, Kerala
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5 max-w-sm">
              Government Boys Higher Secondary School Manjeri. Serving generations with exemplary public school education in Malappuram, Kerala since 1908.
            </p>

            <div className="inline-block px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400">
              UDISE: 32050800636 &nbsp;|&nbsp; School: 18021
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">
                  Home (Highlights &amp; Campus)
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  About Us (History, Vision &amp; Heritage)
                </a>
              </li>
              <li>
                <a href="#academics" className="hover:text-amber-400 transition-colors">
                  Academics (Courses, Departments &amp; Teachers)
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-amber-400 transition-colors">
                  Facilities (Library, Labs, Classrooms &amp; Sports)
                </a>
              </li>
              <li>
                <a href="#programmes" className="hover:text-amber-400 transition-colors">
                  Programmes (Events, Clubs, Arts &amp; Wings)
                </a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-amber-400 transition-colors">
                  Achievements (Academics, Sports &amp; Kalolsavam)
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenPortal}
                  className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 mt-1"
                >
                  <span>Official School Portal #18021</span>
                  <span>→</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Verified Repositories */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              VERIFIED REPOSITORIES
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={onOpenKalolsavam}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 text-left"
                >
                  <span>KITE Kalolsavam 2024–25</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenSports}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 text-left"
                >
                  <span>Kerala School Games 2026</span>
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
                  <span>Sametham Educational Portal</span>
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
                  <span>HSCAP Kerala Admissions</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Desk Hours */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              DESK HOURS
            </h4>
            <div className="space-y-2 text-xs text-slate-400 mb-4">
              <p>
                <strong className="text-slate-300">Monday – Friday:</strong> 9:30 AM – 4:30 PM
              </p>
              <p>
                <strong className="text-slate-300">Saturday:</strong> As per academic schedule
              </p>
              <p>
                <strong className="text-slate-300">Sunday &amp; Public Holidays:</strong> Closed
              </p>
            </div>

            <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-500 flex items-start gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
              <span>Court Road, Kacherippadi, Manjeri, Malappuram, Kerala 676121</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © 1908–2026 Government Boys Higher Secondary School, Manjeri. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4 text-[11px]">
            <a href="#" className="hover:text-slate-400 transition-colors">
              Right to Information (RTI)
            </a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400 transition-colors">
              Sametham Sync
            </a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400 transition-colors">
              Archival Heritage
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
