import React from 'react';
import { Landmark, Sparkles, Clock, ZoomIn } from 'lucide-react';
import kailasamImage4k from '../assets/images/kailasam-heritage-4k.jpg';

interface HistoryTimelineProps {
  onOpenKailasamModal: () => void;
}

export const HistoryTimeline: React.FC<HistoryTimelineProps> = ({ onOpenKailasamModal }) => {
  return (
    <section id="history" className="py-16 lg:py-20 bg-[#FBFBFA] border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-[0.72rem] font-bold tracking-wider uppercase mb-3">
            <Clock className="w-3.5 h-3.5 text-blue-600" />
            <span>ARCHIVAL DATABASE RECORD</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 mb-4 font-crest">
            CHRONICLES OF GBHSS MANJERI
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            From an early 20th-century educational pioneer in Eranad to a modern state-of-the-art campus, our timeline reflects relentless progress.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-amber-300/80 space-y-10 mb-14 ml-4 sm:ml-8 max-w-3xl">

          {/* Milestone 1: 1908 */}
          <div className="relative group">
            <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-4 h-4 rounded-full bg-amber-500 border-4 border-white shadow-sm ring-1 ring-amber-400 group-hover:scale-125 transition-transform" />
            <div className="inline-block px-2.5 py-0.5 rounded text-xs font-bold bg-amber-100 text-amber-900 mb-2">
              1908
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 uppercase tracking-wide mb-1.5">
              FOUNDATION OF THE SCHOOL
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Historical establishment of Government Boys School at Manjeri as documented in the official Kerala Sametham educational database records.
            </p>
          </div>

          {/* Milestone 2: 1998 */}
          <div className="relative group">
            <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-4 h-4 rounded-full bg-amber-500 border-4 border-white shadow-sm ring-1 ring-amber-400 group-hover:scale-125 transition-transform" />
            <div className="inline-block px-2.5 py-0.5 rounded text-xs font-bold bg-amber-100 text-amber-900 mb-2">
              1998
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 uppercase tracking-wide mb-1.5">
              HIGHER SECONDARY SECTION INCEPTION
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Expansion into Higher Secondary education (School Code: 11010) introducing dedicated Science, Humanities, and Commerce streams.
            </p>
          </div>

          {/* Milestone 3: August 2010 */}
          <div className="relative group">
            <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-4 h-4 rounded-full bg-amber-500 border-4 border-white shadow-sm ring-1 ring-amber-400 group-hover:scale-125 transition-transform" />
            <div className="inline-block px-2.5 py-0.5 rounded text-xs font-bold bg-amber-100 text-amber-900 mb-2">
              August 2010
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 uppercase tracking-wide mb-1.5">
              STUDENT POLICE CADET (SPC) INAUGURATION
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Historic inauguration of the official Student Police Cadet unit, cultivating democratic citizenship, civic duty, and leadership.
            </p>
          </div>

        </div>


      </div>
    </section>
  );
};
