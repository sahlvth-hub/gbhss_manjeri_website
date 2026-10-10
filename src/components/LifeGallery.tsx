import React from 'react';
import { ZoomIn, Sparkles } from 'lucide-react';
import schoolCampusPhoto from '../assets/images/gbhss-campus-hero.jpg';
import campusHeroImage from '../assets/images/hero_school_campus_1791614641768.jpg';
import kalolsavamImage from '../assets/images/kalolsavam_arts_troupe_1791614655995.jpg';
import sportsImage from '../assets/images/school_sports_fencing_boxing_1791614667762.jpg';
import itClassroomImage from '../assets/images/smart_it_classroom_1791614679947.jpg';
import kailasamImage4k from '../assets/images/kailasam-heritage-4k.jpg';

interface LifeGalleryProps {
  onOpenPhotoLightbox: (photoIndex: number) => void;
}

export const LifeGallery: React.FC<LifeGalleryProps> = ({ onOpenPhotoLightbox }) => {
  const galleryItems = [
    {
      image: schoolCampusPhoto,
      tag: "CAMPUS HERITAGE",
      title: "Main Block & Courtyard",
      caption: "Multi-level academic complex with architectural courtyard in Kacherippadi, Manjeri.",
      tagColor: "bg-amber-100 text-amber-900 border-amber-300",
    },
    {
      image: kailasamImage4k,
      tag: "✨ 4K HERITAGE LANDMARK",
      title: "Kailasam Pavilion",
      sub: "Octagonal Architecture • Estd. 1908",
      caption: "Historic octagonal building with Mangalore terracotta tiles and stone steps.",
      tagColor: "bg-amber-400 text-slate-950 border-amber-500 font-extrabold",
    },
    {
      image: kalolsavamImage,
      tag: "ARTS & KALOLSAVAM",
      title: "State Kalolsavam Troupe",
      sub: "38th State Position • 43 Points in 2024–25",
      caption: "Vibrant performances in Mohiniyattam, Classical Music, and Folk traditions at the Kerala School Kalolsavam.",
      tagColor: "bg-orange-100 text-orange-950 border-orange-300",
    },
    {
      image: sportsImage,
      tag: "ATHLETIC ARENA",
      title: "Fencing & Boxing Champions",
      sub: "State Champions 2024 & 2026",
      caption: "Gold and Silver medal-winning student athletes in Foil, Sabre, and State Boxing tournaments.",
      tagColor: "bg-slate-800 text-amber-300 border-slate-700",
    },
  ];

  return (
    <section id="gallery" className="py-16 lg:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[0.72rem] font-bold uppercase tracking-widest text-amber-700 block mb-2">
            CAMPUS CHRONICLES
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 mb-4 font-crest">
            LIFE AT GBHSS MANJERI
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            A glimpse into daily school life, celebrations, athletic drills, and artistic expressions.
          </p>
        </div>

        {/* 4 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={item.title}
              onClick={() => onOpenPhotoLightbox(idx)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all relative flex flex-col justify-end min-h-[340px]"
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-108"
                referrerPolicy="no-referrer"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent group-hover:via-slate-950/50 transition-colors" />

              {/* Zoom pill indicator */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Content text */}
              <div className="relative p-6 z-10">
                <span
                  className={`inline-block px-2.5 py-0.5 rounded text-[0.68rem] font-extrabold uppercase tracking-wider border mb-2.5 ${item.tagColor}`}
                >
                  {item.tag}
                </span>

                <h3 className="text-lg font-bold text-white tracking-tight leading-snug group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>

                {item.sub && (
                  <p className="text-xs text-slate-300 mt-1 font-medium">
                    {item.sub}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
