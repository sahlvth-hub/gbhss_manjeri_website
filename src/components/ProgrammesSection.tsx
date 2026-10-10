import React, { useState } from 'react';
import {
  Calendar,
  Sparkles,
  Palette,
  Shield,
  Award,
  Users,
  Compass,
  CheckCircle2,
} from 'lucide-react';

export const ProgrammesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'events' | 'clubs' | 'arts' | 'wings'>('all');

  const events = [
    {
      title: "Annual School Day & Cultural Gala",
      time: "Annual Academic Term",
      category: "School Event",
      badge: "Flagship Event",
      description: "Grand annual convergence celebrating student talents, stage dramas, musical performances, and annual institutional reports.",
    },
    {
      title: "Annual Athletic Meet & Sports Day",
      time: "December / January",
      category: "Sports Event",
      badge: "Inter-House Championship",
      description: "Two-day athletic extravaganza with track & field races, march-pasts by cadet wings, fencing exhibitions, and house trophies.",
    },
    {
      title: "School Sasthrolsavam (Science & Maths Fair)",
      time: "Annual State Calendar",
      category: "Academic Fair",
      badge: "Innovation Expo",
      description: "Hands-on working models, mathematics puzzles, IT digital projects, and social science research exhibits created by students.",
    },
    {
      title: "Merit Day & Academic Felicitations",
      time: "Post-Result Season",
      category: "Academic Honours",
      badge: "Toppers Awards",
      description: "Ceremonial felicitation of SSLC & Higher Secondary full A+ achievers, state rank holders, and dedicated faculty mentors.",
    },
  ];

  const clubs = [
    {
      code: "KITE",
      title: "Little KITEs IT Club",
      lead: "Sri. Abdul Rasheed K",
      category: "Digital Technology",
      description: "Flagship digital club training students in GNU/Linux, Python coding, Scratch animation, cyber safety, graphic design, and robotics.",
    },
    {
      code: "ECO",
      title: "Haritha Sena & Nature Club",
      lead: "Science Faculty",
      category: "Environmental Stewardship",
      description: "Campus biodiversity mapping, herbal garden maintenance, vegetable farming, rainwater harvesting awareness, and clean drives.",
    },
    {
      code: "SCI",
      title: "Vidyarangam & Science Club",
      lead: "Physics & Chemistry Faculty",
      category: "Scientific Inquiry",
      description: "Experimentation circles, sky-watching nights, science seminars, and preparation for District and State Sasthrolsavam competitions.",
    },
    {
      code: "LIT",
      title: "Sahithya Vedi (Literary & Debating Club)",
      lead: "Language Faculty",
      category: "Creative Expression",
      description: "Malayalam and English debating forums, manuscript magazine compilation, creative writing workshops, and poetry recitation circles.",
    },
  ];

  const arts = [
    {
      discipline: "Classical & Vocal Music",
      level: "State A-Grade",
      points: "Carnatic Vocal, Mridangam & Western Guitar",
      description: "Specialized vocal and instrumental coaching under seasoned vidwans that brought top honors at the Kerala School Kalolsavam.",
    },
    {
      discipline: "Mohiniyattam & Classical Dance",
      level: "State A-Grade",
      points: "Traditional Kerala Dance Form",
      description: "Graceful choreography, authentic mudras, and traditional costume grooming representing Malappuram in State Kalolsavam.",
    },
    {
      discipline: "Patriotic & Group Songs",
      level: "State 1st Position",
      points: "Synchronized Vocal Choral Ensemble",
      description: "State championship-winning choral renditions fostering patriotic fervor, harmony, and pristine musical pitch.",
    },
    {
      discipline: "Ottanthullal & Folk Traditions",
      level: "State A-Grade",
      points: "Satirical Performing Art & Parichamuttu",
      description: "Vibrant performances combining rhythmic footwork, expressive verse recitation, and martial folk traditions.",
    },
  ];

  const wings = [
    {
      code: "NCC",
      title: "National Cadet Corps (Army Wing)",
      badge: "Unity and Discipline",
      badgeColor: "bg-red-50 text-red-800 border-red-200",
      description: "Rigorous military drill, weapon training, adventure camps, national integration rallies, and grooming for Armed Forces careers.",
    },
    {
      code: "SPC",
      title: "Student Police Cadet Project",
      badge: "Estd. Aug 2010",
      badgeColor: "bg-blue-50 text-blue-800 border-blue-200",
      description: "Premier unit cultivating constitutional values, road safety protocols, self-defense, anti-narcotic vigilance, and civic leadership.",
    },
    {
      code: "NSS",
      title: "National Service Scheme (DHSE)",
      badge: "Not Me But You",
      badgeColor: "bg-purple-50 text-purple-800 border-purple-200",
      description: "Higher Secondary community service wing conducting blood donation drives, village adoptions, and 7-day annual residential camps.",
    },
    {
      code: "JRC",
      title: "Junior Red Cross & Scouts",
      badge: "Humanitarian Service",
      badgeColor: "bg-rose-50 text-rose-800 border-rose-200",
      description: "First-aid response drills, disaster mitigation readiness, public health hygiene drives, and community empathy outreach.",
    },
  ];

  return (
    <section id="programmes" className="py-16 lg:py-24 bg-[#FBFBFA] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[0.72rem] font-bold uppercase tracking-widest text-amber-700 block mb-2">
            CO-CURRICULAR &amp; CIVIC LEADERSHIP
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 font-crest">
            PROGRAMMES — EVENTS, CLUBS, ARTS &amp; EXTRACURRICULAR
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Nurturing well-rounded scholars through ceremonial campus events, dynamic student clubs, celebrated Kalolsavam arts, and disciplined cadet wings.
          </p>

          {/* Filter Pills */}
          <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 mt-8 bg-slate-200/70 rounded-2xl border border-slate-300/80">
            {[
              { id: 'all', label: 'All Programmes' },
              { id: 'events', label: 'Events' },
              { id: 'clubs', label: 'Clubs' },
              { id: 'arts', label: 'Arts & Kalolsavam' },
              { id: 'wings', label: 'Extracurricular & Wings' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-slate-950 shadow-md scale-[1.02]'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 1. EVENTS SECTION */}
        {(activeTab === 'all' || activeTab === 'events') && (
          <div className="mb-14">
            <div className="flex items-center gap-2.5 mb-6">
              <Calendar className="w-5 h-5 text-amber-600" />
              <h3 className="text-lg font-black text-slate-900 tracking-tight uppercase">
                Campus Events &amp; Celebrations
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {events.map((ev) => (
                <div
                  key={ev.title}
                  className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-extrabold bg-amber-50 text-amber-900 border border-amber-200 inline-block mb-3">
                      {ev.badge}
                    </span>
                    <h4 className="text-base font-extrabold text-slate-900 tracking-tight mb-2">
                      {ev.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {ev.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 text-[11px] font-semibold text-slate-400">
                    Schedule: {ev.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. CLUBS SECTION */}
        {(activeTab === 'all' || activeTab === 'clubs') && (
          <div className="mb-14">
            <div className="flex items-center gap-2.5 mb-6">
              <Users className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-black text-slate-900 tracking-tight uppercase">
                Student Clubs &amp; Inquiry Forums
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {clubs.map((cl) => (
                <div
                  key={cl.title}
                  className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-8 h-8 rounded-xl bg-blue-50 text-blue-800 font-mono font-bold text-xs flex items-center justify-center border border-blue-200">
                        {cl.code}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-400">
                        {cl.category}
                      </span>
                    </div>
                    <h4 className="text-base font-extrabold text-slate-900 tracking-tight mb-2">
                      {cl.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {cl.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 text-[11px] font-semibold text-slate-500">
                    Lead Mentor: {cl.lead}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. ARTS & KALOLSAVAM */}
        {(activeTab === 'all' || activeTab === 'arts') && (
          <div className="mb-14">
            <div className="flex items-center gap-2.5 mb-6">
              <Palette className="w-5 h-5 text-rose-600" />
              <h3 className="text-lg font-black text-slate-900 tracking-tight uppercase">
                Arts &amp; Kerala School Kalolsavam Wing
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {arts.map((art) => (
                <div
                  key={art.discipline}
                  className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-extrabold bg-rose-50 text-rose-800 border border-rose-200 inline-block mb-3">
                      {art.level}
                    </span>
                    <h4 className="text-base font-extrabold text-slate-900 tracking-tight mb-1">
                      {art.discipline}
                    </h4>
                    <p className="text-[11px] font-semibold text-amber-700 mb-2">
                      {art.points}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {art.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>State Kalolsavam Regular</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. EXTRACURRICULAR & UNIFORMED WINGS */}
        {(activeTab === 'all' || activeTab === 'wings') && (
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <Shield className="w-5 h-5 text-emerald-600" />
              <h3 className="text-lg font-black text-slate-900 tracking-tight uppercase">
                Extracurricular &amp; Uniformed Cadet Wings
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {wings.map((w) => (
                <div
                  key={w.title}
                  className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-8 h-8 rounded-xl bg-slate-900 text-white font-mono font-bold text-xs flex items-center justify-center">
                        {w.code}
                      </span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold border ${w.badgeColor}`}>
                        {w.badge}
                      </span>
                    </div>
                    <h4 className="text-base font-extrabold text-slate-900 tracking-tight mb-2">
                      {w.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {w.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 text-[11px] font-semibold text-slate-400">
                    Active Cadet Intake Open
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
