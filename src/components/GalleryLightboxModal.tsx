import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Sparkles, Image as ImageIcon } from 'lucide-react';
import schoolCampusPhoto from '../assets/images/gbhss-campus-hero.jpg';
import campusHeroImage from '../assets/images/hero_school_campus_1791614641768.jpg';
import kalolsavamImage from '../assets/images/kalolsavam_arts_troupe_1791614655995.jpg';
import sportsImage from '../assets/images/school_sports_fencing_boxing_1791614667762.jpg';
import itClassroomImage from '../assets/images/smart_it_classroom_1791614679947.jpg';
import kailasamImage4k from '../assets/images/kailasam-heritage-4k.jpg';
import kailasamImageOriginal from '../assets/images/kailasam-heritage-original.jpg';

interface GalleryLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentIndex: number;
  onSelectIndex: (idx: number) => void;
}

export const GalleryLightboxModal: React.FC<GalleryLightboxModalProps> = ({
  isOpen,
  onClose,
  currentIndex,
  onSelectIndex,
}) => {
  const [kailasamViewMode, setKailasamViewMode] = useState<'4k' | 'original'>('4k');

  if (!isOpen) return null;

  const photos = [
    {
      src: schoolCampusPhoto,
      title: "GBHSS Manjeri Multilevel Academic Complex",
      location: "Kacherippadi, Manjeri, Malappuram • Estd. 1908",
      description: "Authentic view of the three-tier academic building block, architectural courtyard, and school grounds at Govt. Boys Higher Secondary School, Manjeri.",
      isKailasam: false,
    },
    {
      src: kailasamViewMode === '4k' ? kailasamImage4k : kailasamImageOriginal,
      title: "Kailasam Octagonal Heritage Pavilion (4K Clear Restoration)",
      location: "Campus Ridge, Kacherippadi • GBHSS Manjeri (Estd. 1908)",
      description: "Historic octagonal pavilion on the campus hill slope featuring traditional terracotta Mangalore tiles, timber clerestory windows, and stone steps. An enduring emblem in the school's oral and architectural history.",
      isKailasam: true,
    },
    {
      src: kalolsavamImage,
      title: "State Kalolsavam Troupe Performances",
      location: "Kerala School Youth Festival State Stages",
      description: "GBHSS Manjeri students in traditional performance attire securing 43 state points across Classical Music, Mohiniyattam, Folk Dance, and Patriotic Group Song.",
      isKailasam: false,
    },
    {
      src: sportsImage,
      title: "Fencing & Boxing State Champions",
      location: "Kerala State School Games Championship Hall",
      description: "Senior and Junior Boys state gold medallists in Foil Fencing, Sabre, and Boxing under school specialized physical education coaching.",
      isKailasam: false,
    },
    {
      src: itClassroomImage,
      title: "Hi-Tech KITE Smart Classroom & Linux Lab",
      location: "Multilevel Academic Wing",
      description: "Interactive flat panels, digital smart boards, and Linux computers deployed under Kerala Infrastructure and Technology for Education (KITE).",
      isKailasam: false,
    },
  ];

  const currentPhoto = photos[currentIndex % photos.length];

  const handlePrev = () => {
    onSelectIndex((currentIndex - 1 + photos.length) % photos.length);
  };

  const handleNext = () => {
    onSelectIndex((currentIndex + 1) % photos.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-5xl max-h-[95vh] flex flex-col bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
        
        {/* Top bar */}
        <div className="p-4 px-6 flex items-center justify-between text-white border-b border-white/10 shrink-0">
          <div>
            <h3 className="text-sm sm:text-base font-bold tracking-tight">
              {currentPhoto.title}
            </h3>
            <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{currentPhoto.location}</span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            {currentPhoto.isKailasam && (
              <div className="hidden sm:inline-flex rounded-lg bg-white/10 p-0.5 border border-white/20">
                <button
                  type="button"
                  onClick={() => setKailasamViewMode('4k')}
                  className={`px-2.5 py-1 text-[11px] font-bold rounded-md transition-all flex items-center gap-1 ${
                    kailasamViewMode === '4k'
                      ? 'bg-amber-400 text-slate-950 font-extrabold shadow-xs'
                      : 'text-amber-200/80 hover:text-white'
                  }`}
                >
                  <Sparkles className="w-3 h-3" />
                  <span>✨ 4K Clear</span>
                </button>
                <button
                  type="button"
                  onClick={() => setKailasamViewMode('original')}
                  className={`px-2.5 py-1 text-[11px] font-bold rounded-md transition-all flex items-center gap-1 ${
                    kailasamViewMode === 'original'
                      ? 'bg-amber-700 text-white font-extrabold shadow-xs'
                      : 'text-amber-200/80 hover:text-white'
                  }`}
                >
                  <ImageIcon className="w-3 h-3" />
                  <span>📷 Original Photo</span>
                </button>
              </div>
            )}

            <span className="text-xs font-mono text-slate-400 mr-2">
              {currentIndex + 1} / {photos.length}
            </span>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Center Image Container */}
        <div className="relative flex-1 min-h-[300px] max-h-[65vh] flex items-center justify-center bg-black/60 overflow-hidden">
          <img
            src={currentPhoto.src}
            alt={currentPhoto.title}
            className="w-full h-full object-contain max-h-[65vh]"
            referrerPolicy="no-referrer"
          />

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white border border-white/20 transition-all shadow-lg"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white border border-white/20 transition-all shadow-lg"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Details & Thumbnails */}
        <div className="p-4 px-6 bg-slate-950 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
            {currentPhoto.description}
          </p>

          <div className="flex items-center gap-2 shrink-0">
            {photos.map((p, idx) => (
              <button
                key={p.title}
                onClick={() => onSelectIndex(idx)}
                className={`w-12 h-10 rounded-lg overflow-hidden border-2 transition-all ${
                  idx === currentIndex ? 'border-amber-400 scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={p.src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
