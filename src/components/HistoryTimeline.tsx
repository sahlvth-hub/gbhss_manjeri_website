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

        {/* Kailasam Heritage Highlight Card with 4K Clear Photo */}
        <div className="bg-[#FFFDF6] border-2 border-amber-300/80 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Kailasam 4K Photo Showcase */}
            <div className="lg:col-span-5 flex flex-col gap-2">
              <div
                onClick={onOpenKailasamModal}
                className="relative rounded-2xl overflow-hidden border border-amber-300/90 shadow-md group cursor-pointer bg-slate-900 aspect-[4/3] sm:aspect-[4/3]"
                title="Tap or click to view Kailasam Archival Dossier"
              >
                <img
                  src={kailasamImage4k}
                  alt="Kailasam Heritage Building GBHSS Manjeri"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />

                {/* Badge Overlay */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-400/40 text-[11px] font-bold text-amber-300 shadow">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>4K Ultra HD Restored View</span>
                </div>

                {/* Tap to open indicator */}
                <div className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[11px] font-medium text-white shadow group-hover:bg-amber-400 group-hover:text-slate-950 transition-all">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Tap to Open</span>
                </div>

                {/* Bottom Gradient with caption */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white">
                  <p className="text-xs font-semibold text-amber-100 tracking-wide font-crest uppercase">
                    Kailasam Octagonal Pavilion
                  </p>
                  <p className="text-[11px] text-amber-200/80 mt-0.5">
                    Kacherippadi Hilltop Ridge • GBHSS Manjeri
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Kailasam Information & Archival Details */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Landmark className="w-4 h-4" />
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[0.68rem] font-extrabold uppercase tracking-wider bg-amber-200/80 text-amber-950 border border-amber-300">
                  HISTORICAL LANDMARK • KAILASAM
                </span>
                <span className="px-2 py-0.5 rounded-full text-[0.62rem] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Verified Heritage Site
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 uppercase tracking-tight font-crest mt-1 mb-3">
                KAILASAM — A PART OF OUR HERITAGE
              </h3>

              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                In institutional records and oral history, the association with <strong>"Kailasam"</strong> represents an enduring cultural and local landmark connected with the school's historical surroundings, campus geography at Kacherippadi, and shared community memory dating back to the early decades of the 20th century.
              </p>

              {/* Architectural Tags */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                <div className="bg-white/90 border border-amber-200 rounded-lg p-2 text-center">
                  <span className="text-[10px] font-semibold text-amber-800 uppercase block">Architecture</span>
                  <span className="text-xs font-bold text-slate-800">Octagonal Pavilion</span>
                </div>
                <div className="bg-white/90 border border-amber-200 rounded-lg p-2 text-center">
                  <span className="text-[10px] font-semibold text-amber-800 uppercase block">Roofing</span>
                  <span className="text-xs font-bold text-slate-800">Terracotta Tiles</span>
                </div>
                <div className="bg-white/90 border border-amber-200 rounded-lg p-2 text-center">
                  <span className="text-[10px] font-semibold text-amber-800 uppercase block">Campus Ascent</span>
                  <span className="text-xs font-bold text-slate-800">Laterite Stone Steps</span>
                </div>
                <div className="bg-white/90 border border-amber-200 rounded-lg p-2 text-center">
                  <span className="text-[10px] font-semibold text-amber-800 uppercase block">Location</span>
                  <span className="text-xs font-bold text-slate-800">Kacherippadi Ridge</span>
                </div>
              </div>

              {/* Archival Research Note */}
              <div className="bg-amber-50/90 border border-amber-200/80 rounded-xl p-3.5 text-xs text-amber-950 italic leading-relaxed">
                <span className="font-semibold not-italic text-amber-900 block mb-0.5">
                  Official Heritage Documentation Note:
                </span>
                The exact historical documentation regarding the Kailasam landmark and its multifaceted connection to GBHSS Manjeri is actively being researched and updated by the School Heritage Documentation Committee. [Editable Archival Placeholder]
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
