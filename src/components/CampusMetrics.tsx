import React from 'react';
import {
  BookOpen,
  FlaskConical,
  Monitor,
  Trophy,
  Dumbbell,
  Shield,
  Layers,
  Sparkles,
} from 'lucide-react';

export const CampusMetrics: React.FC = () => {
  const metrics = [
    {
      value: "7.25",
      label: "ACRES CAMPUS AREA",
      sub: "Kacherippadi Hilltop Campus",
    },
    {
      value: "71",
      label: "TOTAL CLASSROOMS",
      sub: "54 Hi-Tech Smart Rooms",
    },
    {
      value: "65+",
      label: "HIGH-TECH COMPUTERS",
      sub: "KITE Multimedia Linux Lab",
    },
    {
      value: "1,950+",
      label: "LIBRARY VOLUMES",
      sub: "Catalogued Books & Journals",
    },
  ];

  const coreFacilities = [
    {
      id: "library",
      title: "CENTRAL READING LIBRARY",
      category: "Resource Center",
      badge: "1,950+ Volumes",
      icon: BookOpen,
      iconColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
      description:
        "Extensive reference repository housing literature in Malayalam, English, and Hindi, along with educational journals, daily periodicals, and competitive examination archives (NEET, JEE, KEAM, Civil Services foundation).",
      features: [
        "Quiet reference reading hall",
        "Lending & periodical library desk",
        "Competitive exam guidance corner",
        "Digital cataloguing archive",
      ],
    },
    {
      id: "laboratories",
      title: "SCIENCE & KITE IT LABORATORIES",
      category: "Practical Research",
      badge: "4 Specialized Labs",
      icon: FlaskConical,
      iconColor: "text-cyan-700 bg-cyan-50 border-cyan-200",
      description:
        "Full-fledged Physics, Chemistry, and Biology laboratories equipped for practical experiments, state board practical examinations, and science fair innovations, alongside the Little KITEs IT computing lab.",
      features: [
        "Physics lab with optics & electrical benches",
        "Chemistry lab with chemical reagents & fume hoods",
        "Biology lab with compound microscopes & specimens",
        "65+ GNU/Linux networked workstations",
      ],
    },
    {
      id: "classrooms",
      title: "HI-TECH SMART CLASSROOMS",
      category: "Digital Pedagogy",
      badge: "54 Smart Rooms",
      icon: Monitor,
      iconColor: "text-blue-700 bg-blue-50 border-blue-200",
      description:
        "71 spacious, airy classrooms across the three-tier academic block, featuring 54 KITE-enabled smart classrooms with interactive flat touch panels, audio-visual podiums, and high-speed broadband.",
      features: [
        "Interactive flat touch display panels",
        "Multimedia projectors & sound systems",
        "High-speed fiber connectivity",
        "Ergonomic dual-bench student seating",
      ],
    },
    {
      id: "sports",
      title: "SPORTS COMPLEX & ARENAS",
      category: "Athletics & Martial Arts",
      badge: "State Championship Center",
      icon: Trophy,
      iconColor: "text-amber-700 bg-amber-50 border-amber-200",
      description:
        "Spacious sports ground and specialized indoor training facilities that have produced national and state champions in Fencing and Boxing under accredited physical education coaching.",
      features: [
        "State Fencing training strip (Piste)",
        "Dedicated Boxing training ring & punch bags",
        "Volleyball & Badminton outdoor courts",
        "Track & field athletics practice arena",
      ],
    },
  ];

  return (
    <section id="facilities" className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[0.72rem] font-bold uppercase tracking-widest text-amber-700 block mb-2">
            INFRASTRUCTURE &amp; RESOURCES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 font-crest">
            FACILITIES — LIBRARY, LABORATORIES, CLASSROOMS &amp; SPORTS
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            World-class physical, technological, and athletic facilities supporting 2,400+ students on a lush 7.25-acre campus at Kacherippadi, Manjeri.
          </p>
        </div>

        {/* 4 Stat Tiles */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="bg-[#FCFDFE] border border-slate-200/90 rounded-3xl p-6 text-center hover:border-amber-400 transition-colors shadow-xs"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tabular-nums tracking-tight mb-2">
                {metric.value}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">
                {metric.label}
              </div>
              <div className="text-[11px] font-medium text-slate-400">
                {metric.sub}
              </div>
            </div>
          ))}
        </div>

        {/* 4 Pillar Facility Cards (Library, Laboratories, Classrooms, Sports) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreFacilities.map((fac) => {
            const Icon = fac.icon;
            return (
              <div
                key={fac.id}
                className="bg-[#FCFDFE] rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-xs group-hover:scale-105 transition-transform ${fac.iconColor}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-slate-900 text-amber-300">
                      {fac.badge}
                    </span>
                  </div>

                  <span className="text-[0.68rem] font-bold uppercase tracking-widest text-slate-400 block mb-1">
                    {fac.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight mb-3 group-hover:text-blue-900 transition-colors">
                    {fac.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {fac.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-slate-100">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                    Key Features &amp; Equipment:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-700">
                    {fac.features.map((feat) => (
                      <div
                        key={feat}
                        className="flex items-center gap-2 p-2 rounded-xl bg-white border border-slate-200/70"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 5. Ancillary Campus Infrastructure Strip */}
        <div className="mt-12 p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-2xs">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0">
                🌿
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Eco-Campus &amp; Student Welfare Amenities
                </h4>
                <p className="text-xs text-slate-500">
                  Supporting sustainable campus life and holistic student well-being under Kerala Government schemes.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-semibold text-slate-700 w-full md:w-auto">
              <div className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-center">
                🍚 Midday Meal Dining
              </div>
              <div className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-center">
                ☀️ 20kW Solar Array
              </div>
              <div className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-center">
                💧 Purified Water Plant
              </div>
              <div className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-center">
                🩺 Student Health Clinic
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
