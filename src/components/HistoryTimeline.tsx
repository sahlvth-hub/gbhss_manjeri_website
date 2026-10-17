import React from 'react';
import { Landmark, Sparkles, ZoomIn } from 'lucide-react';
import { motion } from 'framer-motion';
import kailasamImage4k from '../assets/images/kailasam-heritage-4k.jpg';

interface HistoryTimelineProps {
  onOpenKailasamModal: () => void;
}

export const HistoryTimeline: React.FC<HistoryTimelineProps> = ({ onOpenKailasamModal }) => {
  // 1. Photo fades in from left with slight 3D perspective
  const photoVariants = {
    hidden: { opacity: 0, x: -60, rotateY: 8 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // 2. Title & Narrative fade in from top-right diagonal angle
  const headerTextVariants = {
    hidden: { opacity: 0, x: 50, y: -25 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.15,
      },
    },
  };

  // 3. Architectural specs grid fades in from bottom-right angle with staggered tags
  const tagsContainerVariants = {
    hidden: { opacity: 0, y: 35, x: 25 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.25,
        staggerChildren: 0.08,
      },
    },
  };

  const tagItemVariants = {
    hidden: { opacity: 0, scale: 0.88, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: 'easeOut',
      },
    },
  };

  // 4. Archival Documentation Note fades in from bottom-left diagonal angle
  const noteVariants = {
    hidden: { opacity: 0, y: 30, x: -20 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.4,
      },
    },
  };

  return (
    <section id="history" className="py-16 lg:py-20 bg-[#FBFBFA] border-b border-slate-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Kailasam Heritage Highlight Card */}
        <motion.div
          className="bg-[#FFFDF6] border-2 border-amber-300/80 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left Column: Photo (Fades in from Left Angle) */}
            <motion.div
              variants={photoVariants}
              className="lg:col-span-5 flex flex-col gap-2"
            >
              <motion.div
                onClick={onOpenKailasamModal}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
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
              </motion.div>
            </motion.div>

            {/* Right Column: Information & Archival Details */}
            <div className="lg:col-span-7 flex flex-col">

              {/* Title & Narrative (Fades in from Top-Right Angle) */}
              <motion.div variants={headerTextVariants}>
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
              </motion.div>

              {/* Architectural Tags (Fades in from Bottom-Right Angle) */}
              <motion.div
                variants={tagsContainerVariants}
                className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4"
              >
                <motion.div
                  variants={tagItemVariants}
                  whileHover={{ y: -3 }}
                  className="bg-white/90 border border-amber-200 rounded-lg p-2 text-center shadow-2xs hover:shadow-xs transition-shadow"
                >
                  <span className="text-[10px] font-semibold text-amber-800 uppercase block">Architecture</span>
                  <span className="text-xs font-bold text-slate-800">Octagonal Pavilion</span>
                </motion.div>
                <motion.div
                  variants={tagItemVariants}
                  whileHover={{ y: -3 }}
                  className="bg-white/90 border border-amber-200 rounded-lg p-2 text-center shadow-2xs hover:shadow-xs transition-shadow"
                >
                  <span className="text-[10px] font-semibold text-amber-800 uppercase block">Roofing</span>
                  <span className="text-xs font-bold text-slate-800">Terracotta Tiles</span>
                </motion.div>
                <motion.div
                  variants={tagItemVariants}
                  whileHover={{ y: -3 }}
                  className="bg-white/90 border border-amber-200 rounded-lg p-2 text-center shadow-2xs hover:shadow-xs transition-shadow"
                >
                  <span className="text-[10px] font-semibold text-amber-800 uppercase block">Campus Ascent</span>
                  <span className="text-xs font-bold text-slate-800">Laterite Stone Steps</span>
                </motion.div>
                <motion.div
                  variants={tagItemVariants}
                  whileHover={{ y: -3 }}
                  className="bg-white/90 border border-amber-200 rounded-lg p-2 text-center shadow-2xs hover:shadow-xs transition-shadow"
                >
                  <span className="text-[10px] font-semibold text-amber-800 uppercase block">Location</span>
                  <span className="text-xs font-bold text-slate-800">Kacherippadi Ridge</span>
                </motion.div>
              </motion.div>

              {/* Archival Research Note (Fades in from Bottom-Left Angle) */}
              <motion.div
                variants={noteVariants}
                className="bg-amber-50/90 border border-amber-200/80 rounded-xl p-3.5 text-xs text-amber-950 italic leading-relaxed"
              >
                <span className="font-semibold not-italic text-amber-900 block mb-0.5">
                  Official Heritage Documentation Note:
                </span>
                The exact historical documentation regarding the Kailasam landmark and its multifaceted connection to GBHSS Manjeri is actively being researched and updated by the School Heritage Documentation Committee. [Editable Archival Placeholder]
              </motion.div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
