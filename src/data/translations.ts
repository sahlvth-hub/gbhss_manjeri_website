export type Language = 'en' | 'ml';

export interface Translations {
  nav: {
    home: string;
    about: string;
    facilities: string;
    achievements: string;
    portalBtn: string;
    languageToggle: string;
    estd: string;
    schoolSubtitle: string;
  };
  hero: {
    kicker: string;
    headlinePart1: string;
    headlinePart2: string;
    subtitle: string;
    subtitleBold: string;
    subtitleRest: string;
  };
  heritage: {
    kicker: string;
    title: string;
    description: string;
    visionTitle: string;
    visionDesc: string;
    visionTag: string;
    missionTitle: string;
    missionDesc: string;
    missionTag: string;
    valuesTitle: string;
    valuesDesc: string;
    valuesTag: string;
  };
  facilities: {
    kicker: string;
    title: string;
    description: string;
    keyFeaturesHeading: string;
    labs: {
      title: string;
      category: string;
      badge: string;
      description: string;
      features: string[];
    };
    classrooms: {
      title: string;
      category: string;
      badge: string;
      description: string;
      features: string[];
    };
    sports: {
      title: string;
      category: string;
      badge: string;
      description: string;
      features: string[];
    };
  };
  history: {
    landmarkBadge: string;
    verifiedBadge: string;
    title: string;
    description: string;
    imageTag4k: string;
    imageTapOpen: string;
    imageCaptionTitle: string;
    imageCaptionSub: string;
    specs: {
      architectureLabel: string;
      architectureVal: string;
      roofingLabel: string;
      roofingVal: string;
      ascentLabel: string;
      ascentVal: string;
      locationLabel: string;
      locationVal: string;
    };
    archivalNoteTitle: string;
    archivalNoteBody: string;
  };
  achievements: {
    kicker: string;
    title: string;
    description: string;
    shootingTitle: string;
    sportsCard: {
      tag: string;
      badge: string;
      title: string;
      subtitle: string;
      historicRecordLabel: string;
      historicRecordText: string;
      ctaBtn: string;
    };
    artsCard: {
      tag: string;
      rankBadge: string;
      title: string;
      subtitleLead: string;
      subtitleRank: string;
      subtitleMid: string;
      subtitlePoints: string;
      pointsScore: string;
      recentYearNote: string;
      recentPoints: string;
      ctaBtn: string;
      disciplines: string[];
    };
  };
  gallery: {
    kicker: string;
    title: string;
    description: string;
    items: {
      campus: {
        tag: string;
        title: string;
        caption: string;
      };
      kailasam: {
        tag: string;
        title: string;
        sub: string;
        caption: string;
      };
      kalolsavam: {
        tag: string;
        title: string;
        sub: string;
        caption: string;
      };
      sports: {
        tag: string;
        title: string;
        sub: string;
        caption: string;
      };
    };
  };
  footer: {
    tagline: string;
    quickNavTitle: string;
    home: string;
    about: string;
    facilities: string;
    achievements: string;
    portalLink: string;
    verifiedReposTitle: string;
    kalolsavamRepo: string;
    sportsRepo: string;
    samethamRepo: string;
    hscapRepo: string;
    deskHoursTitle: string;
    monFriLabel: string;
    monFriTime: string;
    satLabel: string;
    satTime: string;
    sunLabel: string;
    sunTime: string;
    address: string;
    copyright: string;
    rti: string;
    samethamSync: string;
    archivalHeritage: string;
  };
  modals: {
    close: string;
    sportsTitle: string;
    kalolsavamTitle: string;
    printDossier: string;
    kailasamDossier: string;
  };
  excellence: {
    kicker: string;
    title: string;
    subtitle: string;
    verificationNote: string;
    featured: {
      title: string;
      category: string;
      description: string;
      status: string;
      claimNote: string;
    };
    awards: {
      title: string;
      category: string;
      description: string;
      status: string;
      claimNote: string;
    }[];
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      facilities: 'Facilities',
      achievements: 'Achievements',
      portalBtn: 'Open Official School Portal (#18021)',
      languageToggle: 'Change Language',
      estd: 'ESTD. 1908',
      schoolSubtitle: 'Govt. Boys Higher Secondary School • Malappuram',
    },
    hero: {
      kicker: 'Government Boys Higher Secondary School, Manjeri',
      headlinePart1: 'Empowering Minds, ',
      headlinePart2: 'Shaping Futures',
      subtitle: 'Welcome to the official portal of GBHSS Manjeri. Over a century of distinguished public education, state championship honors, and artistic brilliance in Malappuram, Kerala.',
      subtitleBold: 'GBHSS Manjeri',
      subtitleRest: 'Over a century of distinguished public education, state championship honors, and artistic brilliance in Malappuram, Kerala.',
    },
    heritage: {
      kicker: 'ABOUT US — ESTABLISHED 1908',
      title: 'Vision, Mission & Core Values',
      description: 'Government Boys Higher Secondary School, Manjeri, stands as a premier educational anchor in Malappuram district. Over 118 years of public school stewardship, academic triumphs, and civic leadership.',
      visionTitle: 'VISION',
      visionDesc: 'To empower students from all socio-economic backgrounds with transformative knowledge, scientific inquiry, ethical responsibility, and forward-looking leadership suited for the modern world.',
      visionTag: 'Sametham Ref: Verified Vision',
      missionTitle: 'MISSION',
      missionDesc: 'Deliver high-standard state curriculum across high school and higher secondary tiers, fostering critical thinking, sports excellence, arts expression, and inclusive civic development.',
      missionTag: 'Sametham Ref: Verified Mission',
      valuesTitle: 'CORE VALUES',
      valuesDesc: 'Discipline through cadet corps, creative resonance in Kalolsavam, social empathy, athletic perseverance, and unwavering dedication to constitutional secular ethics.',
      valuesTag: 'Institutional Heritage',
    },
    facilities: {
      kicker: 'INFRASTRUCTURE & RESOURCES',
      title: 'Facilities — Laboratories, Classrooms & Sports',
      description: 'World-class physical, technological, and athletic facilities supporting 2,400+ students on a lush 7.25-acre campus at Kacherippadi, Manjeri.',
      keyFeaturesHeading: 'Key Features & Equipment:',
      labs: {
        title: 'SCIENCE & KITE IT LABORATORIES',
        category: 'Practical Research',
        badge: '4 Specialized Labs',
        description: 'Full-fledged Physics, Chemistry, and Biology laboratories equipped for practical experiments, state board practical examinations, and science fair innovations, alongside the Little KITEs IT computing lab.',
        features: [
          'Physics lab with optics & electrical benches',
          'Chemistry lab with chemical reagents & fume hoods',
          'Biology lab with compound microscopes & specimens',
          '65+ GNU/Linux networked workstations',
        ],
      },
      classrooms: {
        title: 'HI-TECH SMART CLASSROOMS',
        category: 'Digital Pedagogy',
        badge: '54 Smart Rooms',
        description: '71 spacious, airy classrooms across the three-tier academic block, featuring 54 KITE-enabled smart classrooms with interactive flat touch panels, audio-visual podiums, and high-speed broadband.',
        features: [
          'Interactive flat touch display panels',
          'Multimedia projectors & sound systems',
          'High-speed fiber connectivity',
          'Ergonomic dual-bench student seating',
        ],
      },
      sports: {
        title: 'SPORTS COMPLEX & ARENAS',
        category: 'Athletics & Martial Arts',
        badge: 'State Championship Center',
        description: 'Spacious sports ground and specialized indoor training facilities that have produced national and state champions in Fencing and Boxing under accredited physical education coaching.',
        features: [
          'State Fencing training strip (Piste)',
          'Dedicated Boxing training ring & punch bags',
          'Volleyball & Badminton outdoor courts',
          'Track & field athletics practice arena',
        ],
      },
    },
    history: {
      landmarkBadge: 'HISTORICAL LANDMARK • KAILASAM',
      verifiedBadge: 'Verified Heritage Site',
      title: 'KAILASAM — A PART OF OUR HERITAGE',
      description: 'In institutional records and oral history, the association with "Kailasam" represents an enduring cultural and local landmark connected with the school\'s historical surroundings, campus geography at Kacherippadi, and shared community memory dating back to the early decades of the 20th century.',
      imageTag4k: '4K Ultra HD Restored View',
      imageTapOpen: 'Tap to Open',
      imageCaptionTitle: 'Kailasam Octagonal Pavilion',
      imageCaptionSub: 'Kacherippadi Hilltop Ridge • GBHSS Manjeri',
      specs: {
        architectureLabel: 'Architecture',
        architectureVal: 'Octagonal Pavilion',
        roofingLabel: 'Roofing',
        roofingVal: 'Terracotta Tiles',
        ascentLabel: 'Campus Ascent',
        ascentVal: 'Laterite Stone Steps',
        locationLabel: 'Location',
        locationVal: 'Kacherippadi Ridge',
      },
      archivalNoteTitle: 'Official Heritage Documentation Note:',
      archivalNoteBody: 'The exact historical documentation regarding the Kailasam landmark and its multifaceted connection to GBHSS Manjeri is actively being researched and updated by the School Heritage Documentation Committee. [Editable Archival Placeholder]',
    },
    achievements: {
      kicker: 'STATE CHAMPIONS & CULTURAL HONOURS',
      title: 'Sports Awards & Arts Achievements',
      description: 'Documented state-level competitive records, Shooting Championship triumphs, Kerala State School Games medals, and Kerala School Kalolsavam arts honours.',
      shootingTitle: 'Shooting Championship — Overall First 🏆',
      sportsCard: {
        tag: 'Sports Awards & State Games',
        badge: '13 Pts in 2026',
        title: 'Kerala State School Games Champions',
        subtitle: 'Official state records in Foil Fencing, Sabre Fencing, and State Boxing Tournaments.',
        historicRecordLabel: 'Historic 2024 Sabre Fencing State Record:',
        historicRecordText: '• Abhinav Unni (1st Place Gold)  |  • Parthiv S Cherukad (2nd Place Silver)',
        ctaBtn: 'View Full Sports Dossier',
      },
      artsCard: {
        tag: 'Student Accomplishments (Arts)',
        rankBadge: 'State Rank #38',
        title: 'Kerala School Kalolsavam Record',
        subtitleLead: 'Ranked',
        subtitleRank: '38th overall',
        subtitleMid: 'in the state of Kerala with',
        subtitlePoints: '43 Points',
        pointsScore: '43 Pts',
        recentYearNote: 'Kalolsavam 2025–26 Results: Official published standing with 25 points.',
        recentPoints: '25 Pts',
        ctaBtn: 'View Kalolsavam Standings',
        disciplines: [
          'Classical Music (1st)',
          'Mohiniyattam (2nd)',
          'Patriotic Song (1st)',
          'Group Song (2nd)',
          'Ottanthullal (3rd)',
          'Western Guitar (1st)',
          'Bharatanatyam (A)',
          'Sanskrit Speech (2nd)',
          'Parichamuttu (A)',
        ],
      },
    },
    gallery: {
      kicker: 'CAMPUS CHRONICLES',
      title: 'Moments at GBHSS Manjeri',
      description: 'A glimpse into daily school life, celebrations, athletic drills, and artistic expressions.',
      items: {
        campus: {
          tag: 'CAMPUS HERITAGE',
          title: 'Main Block & Courtyard',
          caption: 'Multi-level academic complex with architectural courtyard in Kacherippadi, Manjeri.',
        },
        kailasam: {
          tag: '✨ 4K HERITAGE LANDMARK',
          title: 'Kailasam Pavilion',
          sub: 'Octagonal Architecture • Estd. 1908',
          caption: 'Historic octagonal building with Mangalore terracotta tiles and stone steps.',
        },
        kalolsavam: {
          tag: 'ARTS & KALOLSAVAM',
          title: 'State Kalolsavam Troupe',
          sub: '38th State Position • 43 Points in 2024–25',
          caption: 'Vibrant performances in Mohiniyattam, Classical Music, and Folk traditions at the Kerala School Kalolsavam.',
        },
        sports: {
          tag: 'ATHLETIC ARENA',
          title: 'Fencing & Boxing Champions',
          sub: 'State Champions 2024 & 2026',
          caption: 'Gold and Silver medal-winning student athletes in Foil, Sabre, and State Boxing tournaments.',
        },
      },
    },
    footer: {
      tagline: 'Government Boys Higher Secondary School Manjeri. Serving generations with exemplary public school education in Malappuram, Kerala since 1908.',
      quickNavTitle: 'QUICK NAVIGATION',
      home: 'Home (Highlights & Campus)',
      about: 'About Us (Vision, Mission & Core Values)',
      facilities: 'Facilities (Laboratories, Classrooms & Sports)',
      achievements: 'Achievements (Academics, Sports & Kalolsavam)',
      portalLink: 'Official School Portal #18021',
      verifiedReposTitle: 'VERIFIED REPOSITORIES',
      kalolsavamRepo: 'KITE Kalolsavam 2024–25',
      sportsRepo: 'Kerala School Games 2026',
      samethamRepo: 'Sametham Educational Portal',
      hscapRepo: 'HSCAP Kerala Admissions',
      deskHoursTitle: 'DESK HOURS',
      monFriLabel: 'Monday – Friday:',
      monFriTime: '9:30 AM – 4:30 PM',
      satLabel: 'Saturday:',
      satTime: 'As per academic schedule',
      sunLabel: 'Sunday & Public Holidays:',
      sunTime: 'Closed',
      address: 'Court Road, Kacherippadi, Manjeri, Malappuram, Kerala 676121',
      copyright: '© 1908–2026 Government Boys Higher Secondary School, Manjeri. All Rights Reserved.',
      rti: 'Right to Information (RTI)',
      samethamSync: 'Sametham Sync',
      archivalHeritage: 'Archival Heritage',
    },
    modals: {
      close: 'Close',
      sportsTitle: 'KERALA SCHOOL GAMES HONOURS',
      kalolsavamTitle: 'KERALA SCHOOL KALOLSAVAM RECORD',
      printDossier: 'Print Record Sheet',
      kailasamDossier: 'KAILASAM HERITAGE DOSSIER',
    },
    excellence: {
      kicker: 'HONOURS & RECOGNITION',
      title: 'Excellence in Education',
      subtitle: 'Celebrating our achievements, dedication and commitment to learning.',
      verificationNote: 'Some details are pending official verification and will be updated once confirmed.',
      featured: {
        title: 'Sreshta Vidyalayam Puraskaram',
        category: 'State-Level School Recognition',
        description: 'State-level recognition under the Sreshta Vidyalayam Puraskaram scheme. Reported to have secured a top position in the Secondary Category in Kerala.',
        status: 'Pending Verification',
        claimNote: 'Exact rank, category, year, and prize details are awaiting official confirmation before publication.',
      },
      awards: [
        {
          title: 'School Social Service Scheme (SSSS) Award',
          category: 'Community Service',
          description: 'Recognised under the School Social Service Scheme for outstanding community engagement and social outreach activities.',
          status: 'Pending Verification',
          claimNote: 'Official award name, winning years, and consecutive-win claims require verification.',
        },
        {
          title: 'State PTA Best Teacher Award',
          category: 'Teaching Excellence',
          description: 'State-level PTA recognition awarded for exemplary teaching and student mentorship.',
          status: 'Pending Verification',
          claimNote: 'Recipient name and award year to be added upon verification.',
        },
        {
          title: 'Deshabhimani Aksharamuttam Quiz Championships',
          category: 'Quiz & Academic Contest',
          description: 'Notable participation and achievements in the Deshabhimani Aksharamuttam quiz competition at district and regional levels.',
          status: 'Pending Verification',
          claimNote: 'Exact placements, competition stages, and years require confirmation.',
        },
        {
          title: 'Kerala State School Sports & Kalolsavam',
          category: 'Sports & Cultural Arts',
          description: 'Achievements in athletics, football, and performing arts at the Kerala State School Sports and Kalolsavam competitions.',
          status: 'Pending Verification',
          claimNote: 'Verified results, event names, and student/team placements to be published once confirmed.',
        },
      ],
    },
  },

  ml: {
    nav: {
      home: 'ഹോം',
      about: 'ഞങ്ങളെക്കുറിച്ച്',
      facilities: 'സൗകര്യങ്ങൾ',
      achievements: 'നേട്ടങ്ങൾ',
      portalBtn: 'സ്കൂൾ പോർട്ടൽ (#18021)',
      languageToggle: 'ഭാഷ മാറ്റുക',
      estd: 'സ്ഥാപിതം 1908',
      schoolSubtitle: 'ഗവ. ബോയ്സ് ഹയർ സെക്കൻഡറി സ്കൂൾ • മലപ്പുറം',
    },
    hero: {
      kicker: 'ഗവൺമെന്റ് ബോയ്സ് ഹയർ സെക്കൻഡറി സ്കൂൾ, മഞ്ചേരി',
      headlinePart1: 'ചിന്തകൾക്ക് ചിറകേകി, ',
      headlinePart2: 'ഭാവിയെ രൂപപ്പെടുത്തുന്നു',
      subtitle: 'ജി.ബി.എച്ച്.എസ്.എസ് മഞ്ചേരിയുടെ ഔദ്യോഗിക പോർട്ടലിലേക്ക് സ്വാഗതം. ഒരു നൂറ്റാണ്ടിലധികം നീളുന്ന പൊതുവിദ്യാഭ്യാസ പാരമ്പര്യം, സംസ്ഥാനതല കായിക-കലാ നേട്ടങ്ങൾ, സാമൂഹിക പ്രതിബദ്ധത.',
      subtitleBold: 'ജി.ബി.എച്ച്.എസ്.എസ് മഞ്ചേരി',
      subtitleRest: 'ഒരു നൂറ്റാണ്ടിലധികം നീളുന്ന പൊതുവിദ്യാഭ്യാസ പാരമ്പര്യം, സംസ്ഥാനതല കായിക-കലാ നേട്ടങ്ങൾ, മികവിന്റെ വഴിയിൽ മലപ്പുറത്തിന്റെ അഭിമാനം.',
    },
    heritage: {
      kicker: 'ഞങ്ങളെക്കുറിച്ച് — സ്ഥാപിതം 1908',
      title: 'ദർശനം, ലക്ഷ്യം & മൂല്യങ്ങൾ',
      description: 'മലപ്പുറം ജില്ലയിലെ പ്രമുഖവും ചരിത്രപ്രസിദ്ധവുമായ പൊതുവിദ്യാഭ്യാസ കേന്ദ്രമാണ് മഞ്ചേരി ഗവൺമെന്റ് ബോയ്സ് ഹയർ സെക്കൻഡറി സ്കൂൾ. 118-ലധികം വർഷത്തെ സേവനപാരമ്പര്യവും അക്കാദമിക മികവും.',
      visionTitle: 'ദർശനം (VISION)',
      visionDesc: 'എല്ലാ സാമൂഹിക-സാമ്പത്തിക പശ്ചാത്തലങ്ങളിലുമുള്ള വിദ്യാർത്ഥികൾക്ക് ഗുണനിലവാരമുള്ള വിദ്യാഭ്യാസവും ശാസ്ത്രീയ മനോഭാവവും ധാർമ്മിക മൂല്യങ്ങളും പകർന്നുനൽകി ആധുനിക സമൂഹത്തെ നയിക്കാൻ പ്രാപ്തരാക്കുക.',
      visionTag: 'സമഗ്ര ദർശനം — സമേതം പോർട്ടൽ',
      missionTitle: 'ലക്ഷ്യം (MISSION)',
      missionDesc: 'ഹൈസ്കൂൾ, ഹയർ സെക്കൻഡറി തലങ്ങളിൽ മികച്ച പാഠ്യപദ്ധതി ഉറപ്പുവരുത്തുകയും, സർഗ്ഗാത്മക ചിന്ത, കായിക വൈഭവം, കലാ നൈപുണ്യം എന്നിവ വളർത്തിയെടുക്കുകയും ചെയ്യുക.',
      missionTag: 'സമഗ്ര ലക്ഷ്യം — പൊതുവിദ്യാഭ്യാസം',
      valuesTitle: 'മൂല്യങ്ങൾ (CORE VALUES)',
      valuesDesc: 'കേഡറ്റ് കോറുകളിലൂടെയുള്ള അച്ചടക്കം, കലോത്സവ വേദികളിലെ സർഗ്ഗാത്മകത, സാമൂഹിക സഹാനുഭൂതി, കായിക പ്രതിബദ്ധത, ഭരണഘടനാ മൂല്യങ്ങളോടുള്ള ആദരവ്.',
      valuesTag: 'പാരമ്പര്യ മൂല്യങ്ങൾ',
    },
    facilities: {
      kicker: 'ഭൗതിക സൗകര്യങ്ങൾ & വിഭവങ്ങൾ',
      title: 'സൗകര്യങ്ങൾ — ലാബുകൾ, ക്ലാസ്സ് മുറികൾ & കായികം',
      description: 'മഞ്ചേരി കച്ചേരിപ്പടിയിലെ 7.25 ഏക്കർ ഹരിത കാമ്പസിൽ 2,400-ലധികം വിദ്യാർത്ഥികൾക്കായി ഒരുക്കിയിട്ടുള്ള ആധുനിക അക്കാദമിക്, കായിക, സാങ്കേതിക സൗകര്യങ്ങൾ.',
      keyFeaturesHeading: 'പ്രധാന സൗകര്യങ്ങളും ഉപകരണങ്ങളും:',
      labs: {
        title: 'സയൻസ് & കൈറ്റ് ഐ.ടി ലാബുകൾ',
        category: 'പ്രാക്ടിക്കൽ പഠന ഗവേഷണം',
        badge: '4 പ്രത്യേക ലാബുകൾ',
        description: 'ഫിസിക്സ്, കെമിസ്ട്രി, ബയോളജി പ്രാക്ടിക്കൽ പരീക്ഷണങ്ങൾക്കും സംസ്ഥാന തല ശാസ്ത്രമേളകൾക്കുമുള്ള സജ്ജീകരണങ്ങളും ലിറ്റിൽ കൈറ്റ്സ് ഐ.ടി കമ്പ്യൂട്ടിംഗ് ലാബും.',
        features: [
          'ഒപ്റ്റിക്സ്, ഇലക്ട്രിക്കൽ സൗകര്യങ്ങളുള്ള ഫിസിക്സ് ലാബ്',
          'ആധുനിക കെമിക്കൽ റിയേജന്റുകളുള്ള കെമിസ്ട്രി ലാബ്',
          'കോമ്പൗണ്ട് മൈക്രോസ്കോപ്പുകളുള്ള ബയോളജി ലാബ്',
          '65+ ഗ്നൂ/ലിനക്സ് നെറ്റ്‌വർക്ക്ഡ് കമ്പ്യൂട്ടറുകൾ',
        ],
      },
      classrooms: {
        title: 'ഹൈടെക് സ്മാർട്ട് ക്ലാസ്സ് മുറികൾ',
        category: 'ഡിജിറ്റൽ അധ്യയനം',
        badge: '54 സ്മാർട്ട് റൂമുകൾ',
        description: 'മൂന്നുനിലകളിലായി സ്ഥിതിചെയ്യുന്ന 71 വിശാലമായ ക്ലാസ്സ് മുറികൾ. ഇതിൽ 54 ക്ലാസ്സ് മുറികളിൽ കൈറ്റ് ഡിജിറ്റൽ ടച്ച് പാനലുകളും ഓഡിയോ-വിഷ്വൽ സംവിധാനങ്ങളും ഹൈസ്പീഡ് ഇന്റർനെറ്റും ലഭ്യമാണ്.',
        features: [
          'ഇന്ററാക്ടീവ് ഫ്ലാറ്റ് ടച്ച് ഡിസ്പ്ലേ പാനലുകൾ',
          'മൾട്ടിമീഡിയ പ്രൊജക്ടറുകളും സൗണ്ട് സിസ്റ്റവും',
          'ഹൈസ്പീഡ് ഫൈബർ ഒപ്റ്റിക് കണക്റ്റിവിറ്റി',
          'സൗകര്യപ്രദമായ ഡ്യുവൽ ബെഞ്ച് ഇരിപ്പിടങ്ങൾ',
        ],
      },
      sports: {
        title: 'സ്പോർട്സ് കോംപ്ലക്സ് & പരിശീലന കേന്ദ്രങ്ങൾ',
        category: 'കായികം & ആയോധനകല',
        badge: 'സംസ്ഥാന ചാമ്പ്യൻഷിപ്പ് കേന്ദ്രം',
        description: 'വിശാലമായ കളിസ്ഥലവും ഫെൻസിങ്, ബോക്സിങ് എന്നിവയിൽ ദേശീയ-സംസ്ഥാന ചാമ്പ്യന്മാരെ വാർത്തെടുക്കുന്ന പ്രത്യേക ഇൻഡോർ പരിശീലന സൗകര്യങ്ങളും.',
        features: [
          'സംസ്ഥാന ഫെൻസിങ് പരിശീലന സ്ട്രിപ്പ് (Piste)',
          'പ്രത്യേക ബോക്സിങ് പരിശീലന റിംഗും പഞ്ചു ബാഗുകളും',
          'വോളിബോൾ, ബാഡ്മിന്റൺ ഔട്ട്ഡോർ കോർട്ടുകൾ',
          'ട്രാക്ക് & ഫീൽഡ് അത്‌ലറ്റിക്സ് പരിശീലന ഗ്രൗണ്ട്',
        ],
      },
    },
    history: {
      landmarkBadge: 'ചരിത്ര സ്മാരകം • കൈലാസം',
      verifiedBadge: 'പൈതൃക സ്മാരകം',
      title: 'കൈലാസം — നമ്മുടെ അഭിമാന പൈതൃകം',
      description: 'സ്കൂളിന്റെ ചരിത്രരേഖകളിലും പൂമുഖ ഓർമ്മകളിലും നിറഞ്ഞുനിൽക്കുന്ന സാംസ്കാരിക അടയാളമാണ് "കൈലാസം". കച്ചേരിപ്പടിയിലെ സ്കൂൾ കുന്നിൻമുകളിലെ ഈ ചരിത്രനിർമ്മിതി ഇരുപതാം നൂറ്റാണ്ടിന്റെ ആദ്യദശകങ്ങളിലെ സാമൂഹിക പൈതൃകവുമായി ഇഴചേർന്നുനിൽക്കുന്നു.',
      imageTag4k: '4K അൾട്രാ എച്ച്.ഡി പുനഃസ്ഥാപിത ദൃശ്യം',
      imageTapOpen: 'തുറക്കാൻ ക്ലിക്ക് ചെയ്യുക',
      imageCaptionTitle: 'കൈലാസം എൺകോൺ മണ്ഡപം',
      imageCaptionSub: 'കച്ചേരിപ്പടി കുന്നിൻമുകൾ • ജി.ബി.എച്ച്.എസ്.എസ് മഞ്ചേരി',
      specs: {
        architectureLabel: 'വാസ്തുവിദ്യ',
        architectureVal: 'എൺകോൺ മണ്ഡപം (Octagonal)',
        roofingLabel: 'മേൽക്കൂര',
        roofingVal: 'മംഗലാപുരം ഓടുകൾ',
        ascentLabel: 'പ്രവേശന പാത',
        ascentVal: 'വെട്ടുക്കല്ല് പടവുകൾ',
        locationLabel: 'സ്ഥാനം',
        locationVal: 'കച്ചേരിപ്പടി കുന്ന്',
      },
      archivalNoteTitle: 'ഔദ്യോഗിക പൈതൃക രേഖാ കുറിപ്പ്:',
      archivalNoteBody: 'കൈലാസം പൈതൃക മന്ദിരത്തെക്കുറിച്ചും ജി.ബി.എച്ച്.എസ്.എസ് മഞ്ചേരിയുമായുള്ള ചരിത്രബന്ധത്തെക്കുറിച്ചുമുള്ള സമഗ്രമായ രേഖകൾ സ്കൂൾ ഹെറിറ്റേജ് ഡോക്യുമെന്റേഷൻ കമ്മിറ്റി സമാഹരിച്ചുവരുന്നു.',
    },
    achievements: {
      kicker: 'സംസ്ഥാന ചാമ്പ്യന്മാർ & സാംസ്കാരിക പുരസ്കാരങ്ങൾ',
      title: 'കായിക നേട്ടങ്ങൾ & കലോത്സവ പുരസ്കാരങ്ങൾ',
      description: 'സംസ്ഥാനതല ഷൂട്ടിംഗ് ചാമ്പ്യൻഷിപ്പ് കിരീടം, കേരള സ്കൂൾ ഗെയിംസ് മെഡലുകൾ, കേരള സ്കൂൾ കലോത്സവത്തിലെ ഉജ്ജ്വല കലാവിജയങ്ങൾ.',
      shootingTitle: 'ഷൂട്ടിംഗ് ചാമ്പ്യൻഷിപ്പ് — ഓവറോൾ ഒന്നാം സ്ഥാനം 🏆',
      sportsCard: {
        tag: 'കായിക പുരസ്കാരങ്ങൾ & സംസ്ഥാന ഗെയിംസ്',
        badge: '2026-ൽ 13 പോയിന്റുകൾ',
        title: 'കേരള സംസ്ഥാന സ്കൂൾ ഗെയിംസ് ചാമ്പ്യന്മാർ',
        subtitle: 'ഫോയിൽ ഫെൻസിങ്, സേബർ ഫെൻസിങ്, സംസ്ഥാന ബോക്സിങ് മത്സരങ്ങളിലെ ഔദ്യോഗിക നേട്ടങ്ങൾ.',
        historicRecordLabel: '2024 സേബർ ഫെൻസിങ് ചരിത്ര നേട്ടം:',
        historicRecordText: '• അഭിനവ് ഉണ്ണി (സ്വർണ്ണ മെഡൽ)  |  • പാർത്ഥിവ് എസ് ചേറുകാട് (വെള്ളി മെഡൽ)',
        ctaBtn: 'കായിക നേട്ടങ്ങൾ പൂർണ്ണമായി കാണുക',
      },
      artsCard: {
        tag: 'വിദ്യാർത്ഥി നേട്ടങ്ങൾ (കലോത്സവം)',
        rankBadge: 'സംസ്ഥാന റാങ്ക് #38',
        title: 'കേരള സ്കൂൾ കലോത്സവ നേട്ടം',
        subtitleLead: 'കേരളത്തിൽ ആകെ',
        subtitleRank: '38-ാം സ്ഥാനം',
        subtitleMid: 'നേടി സ്കൂൾ കരസ്ഥമാക്കിയത്',
        subtitlePoints: '43 പോയിന്റുകൾ',
        pointsScore: '43 പോയിന്റ്',
        recentYearNote: 'കലോത്സവം 2025–26 ഫലം: 25 പോയിന്റുകളോടെ ഔദ്യോഗിക വിജയം.',
        recentPoints: '25 പോയിന്റ്',
        ctaBtn: 'കലോത്സവ ഫലങ്ങൾ കാണുക',
        disciplines: [
          'ശാസ്ത്രീയ സംഗീതം (ഒന്നാം സ്ഥാനം)',
          'മോഹിനിയാട്ടം (രണ്ടാം സ്ഥാനം)',
          'ദേശഭക്തി ഗാനം (ഒന്നാം സ്ഥാനം)',
          'സംഘഗാനം (രണ്ടാം സ്ഥാനം)',
          'ഓട്ടൻതുള്ളൽ (മൂന്നാം സ്ഥാനം)',
          'വെസ്റ്റേൺ ഗിറ്റാർ (ഒന്നാം സ്ഥാനം)',
          'ഭരതനാട്യം (എ ഗ്രേഡ്)',
          'സംസ്കൃത പ്രസംഗം (രണ്ടാം സ്ഥാനം)',
          'പരിചമുട്ട് (എ ഗ്രേഡ്)',
        ],
      },
    },
    gallery: {
      kicker: 'കാമ്പസ് വിശേഷങ്ങൾ',
      title: 'ജി.ബി.എച്ച്.എസ്.എസ് മഞ്ചേരിയിലെ നിമിഷങ്ങൾ',
      description: 'ദൈനംദിന സ്കൂൾ ജീവിതം, ആഘോഷങ്ങൾ, കായിക പരിശീലനങ്ങൾ, കലാ പ്രകടനങ്ങൾ എന്നിവയുടെ നേർക്കാഴ്ചകൾ.',
      items: {
        campus: {
          tag: 'കാമ്പസ് പൈതൃകം',
          title: 'മെയിൻ ബ്ലോക്കും പൂമുഖവും',
          caption: 'കച്ചേരിപ്പടിയിലെ മനോഹരമായ വാസ്തുവിദ്യയോടുകൂടിയ അക്കാദമിക് കോംപ്ലക്സ്.',
        },
        kailasam: {
          tag: '✨ 4K പൈതൃക സ്മാരകം',
          title: 'കൈലാസം മണ്ഡപം',
          sub: 'എൺകോൺ വാസ്തുവിദ്യ • സ്ഥാപിതം 1908',
          caption: 'മംഗലാപുരം ഓടുകളും വെട്ടുകല്ല് പടവുകളുമുള്ള ചരിത്രപ്രസിദ്ധമായ എൺകോൺ മന്ദിരം.',
        },
        kalolsavam: {
          tag: 'കല & കലോത്സവം',
          title: 'സംസ്ഥാന കലോത്സവ സംഘം',
          sub: 'സംസ്ഥാനതലത്തിൽ 38-ാം സ്ഥാനം • 43 പോയിന്റുകൾ',
          caption: 'മോഹിനിയാട്ടം, ശാസ്ത്രീയ സംഗീതം, നാടൻ കലകൾ എന്നിവയിലെ വർണ്ണാഭമായ പ്രകടനങ്ങൾ.',
        },
        sports: {
          tag: 'കായിക വേദി',
          title: 'ഫെൻസിങ്, ബോക്സിങ് ചാമ്പ്യന്മാർ',
          sub: 'സംസ്ഥാന ചാമ്പ്യന്മാർ 2024 & 2026',
          caption: 'ഫോയിൽ, സേബർ ഫെൻസിങ്, ബോക്സിങ് മത്സരങ്ങളിൽ സ്വർണ്ണ-വെള്ളി മെഡലുകൾ നേടിയ കായികതാരങ്ങൾ.',
        },
      },
    },
    footer: {
      tagline: 'ഗവൺമെന്റ് ബോയ്സ് ഹയർ സെക്കൻഡറി സ്കൂൾ മഞ്ചേരി. 1908 മുതൽ മലപ്പുറത്തിന്റെ വിദ്യാഭ്യാസ മുന്നേറ്റത്തിന് നേതൃത്വം നൽകുന്ന പൊതുവിദ്യാഭ്യാസ സ്ഥാപനം.',
      quickNavTitle: 'പ്രധാന ലിങ്കുകൾ',
      home: 'ഹോം (വിശേഷങ്ങളും കാമ്പസും)',
      about: 'ഞങ്ങളെക്കുറിച്ച് (ദർശനവും ലക്ഷ്യവും)',
      facilities: 'സൗകര്യങ്ങൾ (ലാബുകൾ & ക്ലാസ്സ് മുറികൾ)',
      achievements: 'നേട്ടങ്ങൾ (കായിക-കലാ പുരസ്കാരങ്ങൾ)',
      portalLink: 'ഔദ്യോഗിക സ്കൂൾ പോർട്ടൽ #18021',
      verifiedReposTitle: 'ഔദ്യോഗിക പോർട്ടലുകൾ',
      kalolsavamRepo: 'കൈറ്റ് കലോത്സവം 2024–25',
      sportsRepo: 'കേരള സ്കൂൾ ഗെയിംസ് 2026',
      samethamRepo: 'സമേതം എജ്യുക്കേഷണൽ പോർട്ടൽ',
      hscapRepo: 'HSCAP കേരള അഡ്മിഷൻ',
      deskHoursTitle: 'ഓഫീസ് സമയം',
      monFriLabel: 'തിങ്കൾ – വെള്ളി:',
      monFriTime: 'രാവിലെ 9:30 – വൈകുന്നേരം 4:30',
      satLabel: 'ശനി:',
      satTime: 'അക്കാദമിക് കലണ്ടർ പ്രകാരം',
      sunLabel: 'ഞായർ & പൊതു അവധി:',
      sunTime: 'അവധി',
      address: 'കോടതി റോഡ്, കച്ചേരിപ്പടി, മഞ്ചേരി, മലപ്പുറം, കേരളം 676121',
      copyright: '© 1908–2026 ഗവൺമെന്റ് ബോയ്സ് ഹയർ സെക്കൻഡറി സ്കൂൾ മഞ്ചേരി. സർവ്വ അവകാശങ്ങളും നിക്ഷിപ്തം.',
      rti: 'വിവരാവകാശ നിയമം (RTI)',
      samethamSync: 'സമേതം സമന്വയം',
      archivalHeritage: 'പൈതൃക രേഖകൾ',
    },
    modals: {
      close: 'അടയ്ക്കുക',
      sportsTitle: 'കേരള സ്കൂൾ ഗെയിംസ് നേട്ടങ്ങൾ',
      kalolsavamTitle: 'കേരള സ്കൂൾ കലോത്സവ രേഖകൾ',
      printDossier: 'പ്രിന്റ് എടുക്കുക',
      kailasamDossier: 'കൈലാസം പൈതൃക രേഖകൾ',
    },
    excellence: {
      kicker: 'ബഹുമതികൾ & അംഗീകാരങ്ങൾ',
      title: 'വിദ്യാഭ്യാസ മികവ്',
      subtitle: 'നമ്മുടെ നേട്ടങ്ങളും സമർപ്പണവും പഠനത്തോടുള്ള പ്രതിബദ്ധതയും ആഘോഷിക്കുന്നു.',
      verificationNote: 'ചില വിവരങ്ങൾ ഔദ്യോഗിക സ്ഥിരീകരണത്തിന് കാത്തിരിക്കുന്നു, സ്ഥിരീകരിച്ചാലുടൻ അപ്ഡേറ്റ് ചെയ്യും.',
      featured: {
        title: 'ശ്രേഷ്ഠ വിദ്യാലയം പുരസ്കാരം',
        category: 'സംസ്ഥാനതല സ്കൂൾ അംഗീകാരം',
        description: 'ശ്രേഷ്ഠ വിദ്യാലയം പുരസ്കാരം പദ്ധതിയിൽ സംസ്ഥാനതല അംഗീകാരം. സെക്കൻഡറി വിഭാഗത്തിൽ കേരളത്തിൽ മുൻനിര സ്ഥാനം നേടിയതായി റിപ്പോർട്ട്.',
        status: 'സ്ഥിരീകരണം ബാക്കി',
        claimNote: 'കൃത്യമായ റാങ്ക്, വിഭാഗം, വർഷം, സമ്മാന വിവരങ്ങൾ ഔദ്യോഗിക സ്ഥിരീകരണത്തിന് ശേഷം പ്രസിദ്ധീകരിക്കും.',
      },
      awards: [
        {
          title: 'സ്കൂൾ സാമൂഹിക സേവന പദ്ധതി (SSSS) അവാർഡ്',
          category: 'സാമൂഹിക സേവനം',
          description: 'മികച്ച സാമൂഹിക പ്രവർത്തനങ്ങൾക്കും സേവന പ്രവർത്തനങ്ങൾക്കും സ്കൂൾ സാമൂഹിക സേവന പദ്ധതിയിൽ അംഗീകാരം.',
          status: 'സ്ഥിരീകരണം ബാക്കി',
          claimNote: 'ഔദ്യോഗിക അവാർഡ് പേര്, വിജയ വർഷങ്ങൾ, തുടർച്ചയായ വിജയ അവകാശവാദങ്ങൾ സ്ഥിരീകരണം ആവശ്യമാണ്.',
        },
        {
          title: 'സ്റ്റേറ്റ് PTA മികച്ച അധ്യാപക പുരസ്കാരം',
          category: 'അധ്യാപന മികവ്',
          description: 'മികച്ച അധ്യാപനത്തിനും വിദ്യാർത്ഥി മാർഗ്ഗദർശനത്തിനുമുള്ള സംസ്ഥാനതല PTA അംഗീകാരം.',
          status: 'സ്ഥിരീകരണം ബാക്കി',
          claimNote: 'സ്വീകർത്താവിന്റെ പേരും അവാർഡ് വർഷവും സ്ഥിരീകരണത്തിന് ശേഷം ചേർക്കും.',
        },
        {
          title: 'ദേശാഭിമാനി അക്ഷരമുറ്റം ക്വിസ് ചാമ്പ്യൻഷിപ്പ്',
          category: 'ക്വിസ് & അക്കാദമിക് മത്സരം',
          description: 'ദേശാഭിമാനി അക്ഷരമുറ്റം ക്വിസ് മത്സരത്തിൽ ജില്ലാ-മേഖലാ തലങ്ങളിൽ ശ്രദ്ധേയമായ പങ്കാളിത്തവും നേട്ടങ്ങളും.',
          status: 'സ്ഥിരീകരണം ബാക്കി',
          claimNote: 'കൃത്യമായ സ്ഥാനങ്ങൾ, മത്സര ഘട്ടങ്ങൾ, വർഷങ്ങൾ സ്ഥിരീകരണം ആവശ്യമാണ്.',
        },
        {
          title: 'കേരള സംസ്ഥാന സ്കൂൾ സ്പോർട്സ് & കലോത്സവം',
          category: 'കായികം & സാംസ്കാരിക കല',
          description: 'കേരള സംസ്ഥാന സ്കൂൾ സ്പോർട്സ്, കലോത്സവ മത്സരങ്ങളിൽ അത്‌ലറ്റിക്സ്, ഫുട്ബോൾ, പ്രകടന കലകൾ എന്നിവയിലെ നേട്ടങ്ങൾ.',
          status: 'സ്ഥിരീകരണം ബാക്കി',
          claimNote: 'സ്ഥിരീകരിച്ച ഫലങ്ങൾ, ഇവന്റ് പേരുകൾ, വിദ്യാർത്ഥി/ടീം സ്ഥാനങ്ങൾ സ്ഥിരീകരണത്തിന് ശേഷം പ്രസിദ്ധീകരിക്കും.',
        },
      ],
    },
  },
};
