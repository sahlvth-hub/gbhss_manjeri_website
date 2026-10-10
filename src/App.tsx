import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HeritageSection } from './components/HeritageSection';
import { HistoryTimeline } from './components/HistoryTimeline';
import { CampusMetrics } from './components/CampusMetrics';
import { ProgrammesSection } from './components/ProgrammesSection';
import { AchievementsSection } from './components/AchievementsSection';
import { AcademicsSection } from './components/AcademicsSection';
import { LifeGallery } from './components/LifeGallery';
import { ContactLeadership } from './components/ContactLeadership';
import { Footer } from './components/Footer';
import { SchoolPortalModal } from './components/SchoolPortalModal';
import { KailasamModal } from './components/KailasamModal';
import { RecordDetailModal } from './components/RecordDetailModal';
import { GalleryLightboxModal } from './components/GalleryLightboxModal';

export default function App() {
  // Modal states
  const [portalOpen, setPortalOpen] = useState(false);
  const [historyModalOpen, setHistoryModalOpen] = useState(false);
  const [recordModalOpen, setRecordModalOpen] = useState(false);
  const [recordType, setRecordType] = useState<'kalolsavam' | 'sports'>('kalolsavam');
  
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleExploreClick = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenKalolsavam = () => {
    setRecordType('kalolsavam');
    setRecordModalOpen(true);
  };

  const handleOpenSports = () => {
    setRecordType('sports');
    setRecordModalOpen(true);
  };

  const handleOpenPhotoLightbox = (idx: number) => {
    setPhotoIndex(idx);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] selection:bg-amber-100 selection:text-amber-900">
      {/* Top Navigation */}
      <Navbar
        onOpenPortal={() => setPortalOpen(true)}
        onOpenHistoryModal={() => setHistoryModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onExploreClick={handleExploreClick}
          onDiscoverHistoryClick={() => setHistoryModalOpen(true)}
          onViewPhotoFullscreen={() => handleOpenPhotoLightbox(0)}
          onOpenPortal={() => setPortalOpen(true)}
        />

        {/* Institutional Heritage (Vision, Mission, Values) */}
        <HeritageSection />

        {/* Archival Database Record (Chronicles of GBHSS Manjeri + Kailasam Note) */}
        <HistoryTimeline
          onOpenKailasamModal={() => setHistoryModalOpen(true)}
        />

        {/* Infrastructure & Resources (Campus Overview & Metrics) */}
        <CampusMetrics />

        {/* Co-Curricular & Civic Training (Student Programmes & Uniformed Wings) */}
        <ProgrammesSection />

        {/* Verified Documented Records (State Honours & Competitive Triumphs) */}
        <AchievementsSection
          onOpenKalolsavamDetail={handleOpenKalolsavam}
          onOpenSportsDetail={handleOpenSports}
        />

        {/* Academic Excellence (Curriculum Streams & Official Downloads Desk) */}
        <AcademicsSection />

        {/* Campus Chronicles (Life at GBHSS Manjeri) */}
        <LifeGallery
          onOpenPhotoLightbox={handleOpenPhotoLightbox}
        />

        {/* School Administration & Office Coordinates */}
        <ContactLeadership />
      </main>

      {/* Footer */}
      <Footer
        onOpenPortal={() => setPortalOpen(true)}
        onOpenHistory={() => setHistoryModalOpen(true)}
        onOpenKalolsavam={handleOpenKalolsavam}
        onOpenSports={handleOpenSports}
      />

      {/* Interactive Modals */}
      <SchoolPortalModal
        isOpen={portalOpen}
        onClose={() => setPortalOpen(false)}
      />

      <KailasamModal
        isOpen={historyModalOpen}
        onClose={() => setHistoryModalOpen(false)}
      />

      <RecordDetailModal
        isOpen={recordModalOpen}
        onClose={() => setRecordModalOpen(false)}
        type={recordType}
      />

      <GalleryLightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        currentIndex={photoIndex}
        onSelectIndex={(idx) => setPhotoIndex(idx)}
      />
    </div>
  );
}
