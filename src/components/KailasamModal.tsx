import React, { useState } from 'react';
import { X, Landmark, History, Shield, FileText, Sparkles, Image as ImageIcon } from 'lucide-react';
import { SchoolEmblem } from './SchoolEmblem';
import kailasamImage4k from '../assets/images/kailasam-heritage-4k.jpg';
import kailasamImageOriginal from '../assets/images/kailasam-heritage-original.jpg';

interface KailasamModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const KailasamModal: React.FC<KailasamModalProps> = ({ isOpen, onClose }) => {
  const [photoView, setPhotoView] = useState<'4k' | 'original'>('4k');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-sm animate-in fade-in">
      <div className="bg-[#FFFDF8] rounded-3xl w-full max-w-3xl max-h-[92vh] flex flex-col shadow-2xl border border-amber-200 overflow-hidden animate-in zoom-in-95 duration-200">

        {/* Header */}
        <div className="px-6 py-5 bg-[#2B1B17] text-white flex items-center justify-between border-b border-amber-900/40 shrink-0">
          <div className="flex items-center gap-3">
            <SchoolEmblem size={44} className="ring-1 ring-amber-500/50 rounded-full" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base tracking-tight font-crest text-amber-100">
                  KAILASAM HERITAGE DOSSIER
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/40 uppercase">
                  Archival Research
                </span>
              </div>
              <p className="text-[11px] text-amber-200/80">
                School Heritage Documentation Committee • GBHSS Manjeri
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-amber-200 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">

          {/* Visual Heritage Showcase: 4K Clear & Original */}
          <div className="bg-[#1C130E] rounded-2xl p-4 sm:p-5 border border-amber-900/50 text-white shadow-xl overflow-hidden">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3 pb-3 border-b border-amber-900/50">
              <div className="flex items-center gap-2">
                <span className="p-1 rounded-md bg-amber-500/20 text-amber-300">
                  <Sparkles className="w-4 h-4" />
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold tracking-wide text-amber-100 uppercase font-crest">
                    Visual Archive: Kailasam Pavilion
                  </h4>
                  <p className="text-[11px] text-amber-300/70">
                    High-definition architectural restoration alongside archival field photograph
                  </p>
                </div>
              </div>

              {/* View Switcher Tabs */}
              <div className="inline-flex rounded-xl bg-white/10 p-1 border border-white/10">
                <button
                  type="button"
                  onClick={() => setPhotoView('4k')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 ${photoView === '4k'
                      ? 'bg-amber-400 text-slate-950 shadow-sm'
                      : 'text-amber-200/80 hover:text-white'
                    }`}
                >
                  <Sparkles className="w-3 h-3" />
                  <span>4K Clear View</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPhotoView('original')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 ${photoView === 'original'
                      ? 'bg-amber-700 text-white shadow-sm'
                      : 'text-amber-200/80 hover:text-white'
                    }`}
                >
                  <ImageIcon className="w-3 h-3" />
                  <span>Original Photo</span>
                </button>
              </div>
            </div>

            {/* Main Image Frame */}
            <div className="relative rounded-xl overflow-hidden bg-black/80 aspect-[16/10] sm:aspect-[16/9] border border-amber-500/20 group">
              <img
                src={photoView === '4k' ? kailasamImage4k : kailasamImageOriginal}
                alt="Kailasam Heritage Building"
                className="w-full h-full object-cover object-center transition-all duration-500"
              />

              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-black/70 backdrop-blur-md text-amber-300 border border-amber-400/40">
                  {photoView === '4k' ? '✨ 4K Ultra Clear Restoration' : '📷 Authentic Field Photograph'}
                </span>
              </div>

              <div className="absolute bottom-0 inset-x-0 p-3.5 sm:p-4 bg-gradient-to-t from-black/95 via-black/60 to-transparent flex flex-col sm:flex-row sm:items-end justify-between gap-2 text-white">
                <div>
                  <p className="text-xs font-bold text-amber-200 tracking-wide font-crest uppercase">
                    The Kailasam Octagonal Heritage Pavilion • GBHSS Manjeri
                  </p>
                  <p className="text-[11px] text-slate-300 mt-0.5">
                    {photoView === '4k'
                      ? 'Reconstructed with crystal-clear 4K resolution, showing authentic Mangalore tiles, timber clerestory, and laterite stone stairway.'
                      : 'Original archival field capture preserved by the School Heritage Documentation Committee.'}
                  </p>
                </div>
                <div className="text-[10px] text-amber-300/80 bg-black/40 px-2 py-1 rounded border border-white/10 shrink-0 self-start sm:self-auto">
                  Ref: GBHSS-ARCH-KAILASAM
                </div>
              </div>
            </div>

            {/* Quick Architectural Specs Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3 pt-3 border-t border-amber-900/40 text-[11px]">
              <div className="bg-white/5 rounded-lg p-2 border border-white/5">
                <span className="text-amber-400/80 block text-[10px] uppercase font-semibold">Geometry</span>
                <span className="text-slate-200 font-medium">Octagonal Pavilion</span>
              </div>
              <div className="bg-white/5 rounded-lg p-2 border border-white/5">
                <span className="text-amber-400/80 block text-[10px] uppercase font-semibold">Roof Work</span>
                <span className="text-slate-200 font-medium">Terracotta Hip Roof</span>
              </div>
              <div className="bg-white/5 rounded-lg p-2 border border-white/5">
                <span className="text-amber-400/80 block text-[10px] uppercase font-semibold">Clerestory</span>
                <span className="text-slate-200 font-medium">Octagonal Attic Windows</span>
              </div>
              <div className="bg-white/5 rounded-lg p-2 border border-white/5">
                <span className="text-amber-400/80 block text-[10px] uppercase font-semibold">Location</span>
                <span className="text-slate-200 font-medium">Kacherippadi Ridge</span>
              </div>
            </div>
          </div>

          {/* Historical Context Callout */}
          <div className="bg-amber-100/50 border border-amber-300/80 rounded-2xl p-5 text-amber-950">
            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-900 mb-1 flex items-center gap-2">
              <History className="w-4 h-4 text-amber-700" />
              <span>Cultural &amp; Geographical Association</span>
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-amber-900/90 mt-2">
              In institutional records and oral history, the association with <strong>"Kailasam"</strong> represents an enduring cultural and local landmark connected with the school's historical surroundings, campus geography at Kacherippadi, and shared community memory dating back to the early decades of the 20th century.
            </p>
          </div>

          {/* Dossier Chapters */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 border border-amber-200/70 shadow-xs">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4 text-amber-600" />
                <span>1. Genesis at Kacherippadi Court Ridge (1908)</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                GBHSS Manjeri was founded in 1908 as an educational beacon in the Eranad taluk of Malappuram. Situated adjacent to Court Road and Kacherippadi ("the court steps"), the school grounds naturally adjoined the local geographic rise colloquially commemorated as Kailasam. Generations of teachers and pupils have passed through these verandas, weaving local geography with academic progress.
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-amber-200/70 shadow-xs">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                <Shield className="w-4 h-4 text-amber-600" />
                <span>2. The School Heritage Documentation Committee</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                The Heritage Committee is actively collating colonial-era revenue surveys, centenary commemorative souvenir accounts, and audio interviews with senior alumni to compile a definitive scholarly chapter on Kailasam's socio-cultural footprint in Manjeri's public schooling.
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-amber-200/70 shadow-xs">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                <Landmark className="w-4 h-4 text-amber-600" />
                <span>3. Architectural Profile of the Octagonal Pavilion</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                The Kailasam building is distinguished by its rare octagonal geometry, developed to facilitate 360-degree natural breeze and cross-ventilation in the tropical climate of Malappuram. The double-tiered Mangalore terracotta tiled roof features a raised central attic cupola with timber ventilation casements, complemented by cylindrical veranda pillars and ancient laterite stone steps carved into the hillside.
              </p>
            </div>
          </div>

          {/* Archival Research Note Quote */}
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-300/60 text-xs text-amber-950 italic leading-relaxed">
            <strong className="not-italic text-amber-900 font-bold block mb-1">
              Official Committee Archival Note:
            </strong>
            "The exact historical documentation regarding the Kailasam landmark and its multifaceted connection to GBHSS Manjeri is actively being researched and updated by the School Heritage Documentation Committee. [Editable Archival Placeholder]"
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-amber-50/80 border-t border-amber-200/80 flex items-center justify-between text-[11px] text-amber-900 shrink-0">
          <span>Archival Dossier Ref: GBHSS-ARCH-KAILASAM-1908</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-white border border-amber-300 rounded-lg font-medium text-amber-950 hover:bg-amber-100"
          >
            Close Dossier
          </button>
        </div>

      </div>
    </div>
  );
};
