export interface AchievementRecord {
  id: string;
  category: 'kalolsavam' | 'sports';
  title: string;
  year: string;
  points: number;
  standing: string;
  items: {
    event: string;
    student?: string;
    category?: string;
    rank: string;
    points: number;
  }[];
}

export interface StreamOption {
  code: string;
  name: string;
  subjects: string[];
  intake: number;
  qualification: string;
}

export interface StaffMember {
  name: string;
  designation: string;
  department: string;
  qualification: string;
  experience: string;
}

export const SCHOOL_INFO = {
  name: "Govt. Boys Higher Secondary School Manjeri",
  shortName: "GBHSS MANJERI",
  establishedYear: 1908,
  hssEstablishedYear: 1998,
  location: "Kacherippadi, Manjeri, Malappuram, Kerala",
  pincode: "676121",
  schoolCode: "18021",
  hssCode: "11010",
  udiseCode: "32050800636",
  email: "gbhssmanjeri11010@gmail.com",
  phone: "+91 483 2769430",
  revenueDistrict: "Malappuram",
  subDistrict: "Manjeri",
  parliamentaryConstituency: "Malappuram",
  campusAreaAcres: "7.25",
  totalClassrooms: 71,
  smartClassrooms: 54,
  highTechComputers: 65,
  libraryVolumes: "1,950+",
  studentStrength: "2,400+",
  teachingStaff: 82,
  nonTeachingStaff: 12,
  leadDeveloper: "Mohammed Sahl",
  developerTitle: "Lead Portal Architect & Full-Stack Engineer",
};

export const KALOLSAVAM_RECORDS = {
  year2025: {
    year: "2024-25",
    totalPoints: 43,
    stateRank: 38,
    label: "Kalolsavam 2024-25 Record",
    disciplines: [
      { name: "Classical Music (Carnatic)", rank: "A Grade - 1st", points: 5 },
      { name: "Mohiniyattam", rank: "A Grade - 2nd", points: 5 },
      { name: "Patriotic Group Song", rank: "A Grade - 1st", points: 5 },
      { name: "Group Song (General)", rank: "A Grade - 2nd", points: 5 },
      { name: "Ottanthullal", rank: "A Grade - 3rd", points: 5 },
      { name: "Western Guitar", rank: "A Grade - 1st", points: 5 },
      { name: "Bharatanatyam", rank: "A Grade", points: 5 },
      { name: "Sanskrit Speech", rank: "A Grade - 2nd", points: 5 },
      { name: "Parichamuttu", rank: "A Grade", points: 3 },
    ],
  },
  year2026: {
    year: "2025-26",
    totalPoints: 25,
    stateRank: 42,
    label: "Kalolsavam 2025-26 Results",
    disciplines: [
      { name: "Classical Music", rank: "A Grade", points: 5 },
      { name: "Patriotic Song", rank: "A Grade", points: 5 },
      { name: "Mridangam", rank: "A Grade", points: 5 },
      { name: "Folk Dance (Group)", rank: "A Grade", points: 5 },
      { name: "Malayalam Elocution", rank: "B Grade", points: 5 },
    ],
  },
};

export const SPORTS_RECORDS = {
  current2026: {
    year: "2026",
    points: 13,
    standings: [
      {
        student: "Asheervad K",
        division: "Senior Boys",
        event: "Foil Fencing",
        place: "1st Place (5 pts)",
        badge: "Gold Medal",
      },
      {
        student: "Abhiram K",
        division: "Junior Boys",
        event: "Foil Fencing",
        place: "1st Place (5 pts)",
        badge: "Gold Medal",
      },
      {
        student: "Arjun Babu E",
        division: "Junior Boys",
        event: "Boxing (below 66 kg)",
        place: "2nd Place (3 pts)",
        badge: "Silver Medal",
      },
    ],
  },
  historic2024: {
    year: "2024",
    title: "State Games 2024 Sabre Fencing Record",
    standings: [
      {
        student: "Abhinav Unni",
        division: "Senior Boys, Sabre",
        place: "1st Place (5 pts)",
      },
      {
        student: "Parthiv S Cherukad",
        division: "Senior Boys, Sabre",
        place: "2nd Place (3 pts)",
      },
    ],
  },
};

export const SHOOTING_RECORDS = {
  title: "Shooting Championship — Overall First",
  subtitle: "Air Pistol & Air Rifle • Qualified for State School Olympics",
  department: "Department of Physical Education • GBHSS Manjeri",
  champions: [
    {
      name: "Sreehari K",
      event: "Air Rifle",
      achievement: "Shooting Champion",
      qualification: "State School Olympics Qualifier",
    },
    {
      name: "Amith P",
      event: "Air Rifle",
      achievement: "State School Olympics Qualifier",
      qualification: "Qualified in to State School Olympics",
    },
    {
      name: "Lanha Suman",
      event: "Air Pistol",
      achievement: "State School Olympics Qualifier",
      qualification: "Qualified in to State School Olympics",
    },
    {
      name: "Aishwarya P",
      event: "Air Rifle",
      achievement: "State School Olympics Qualifier",
      qualification: "Qualified in to State School Olympics",
    },
  ],
};

export const ACADEMIC_STREAMS: StreamOption[] = [
  {
    code: "01",
    name: "Science: Bio-Mathematics",
    subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "English", "Second Language"],
    intake: 120,
    qualification: "SSLC with high grades in Science & Mathematics",
  },
  {
    code: "02",
    name: "Science: Computer Science",
    subjects: ["Physics", "Chemistry", "Mathematics", "Computer Science", "English", "Second Language"],
    intake: 60,
    qualification: "SSLC with high grades in Mathematics & IT",
  },
  {
    code: "03",
    name: "Commerce with Computer Applications",
    subjects: ["Accountancy", "Business Studies", "Economics", "Computer Applications", "English", "Second Language"],
    intake: 120,
    qualification: "SSLC qualification through HSCAP single window",
  },
  {
    code: "04",
    name: "Humanities & Social Sciences",
    subjects: ["History", "Economics", "Political Science", "Sociology", "English", "Second Language"],
    intake: 60,
    qualification: "SSLC qualification through HSCAP single window",
  },
];

export const DOWNLOAD_DOCUMENTS = [
  {
    id: "doc-1",
    title: "Academic Calendar 2025-26",
    subtitle: "Exam schedules & working days",
    size: "1.4 MB",
    filename: "GBHSS_Manjeri_Academic_Calendar_2025-26.pdf",
    category: "Academic",
  },
  {
    id: "doc-2",
    title: "Higher Secondary Admission Prospectus",
    subtitle: "Single-window HSCAP guidance & seat matrix",
    size: "2.1 MB",
    filename: "GBHSS_HSS_Admission_Prospectus_2025.pdf",
    category: "Admissions",
  },
  {
    id: "doc-3",
    title: "School Magazine & Literary Souvenir",
    subtitle: "Student poems, essays & artworks",
    size: "14.8 MB",
    filename: "GBHSS_Manjeri_Souvenir_Annual_Magazine.pdf",
    category: "Publications",
  },
  {
    id: "doc-4",
    title: "PTA Bylaws & Annual Report",
    subtitle: "Executive committee resolutions & development fund audit",
    size: "860 KB",
    filename: "GBHSS_PTA_Annual_Report_Bylaws.pdf",
    category: "Governance",
  },
];

export interface AcademicDepartment {
  id: string;
  name: string;
  head: string;
  description: string;
  subjects: string[];
  facultyCount: number;
}

export const ACADEMIC_DEPARTMENTS: AcademicDepartment[] = [
  {
    id: "science",
    name: "Department of Science & Mathematics",
    head: "Sri. Haridasan V",
    description: "Hands-on conceptual inquiry across Physics, Chemistry, Biology, and Advanced Mathematics equipped with dedicated laboratory apparatus.",
    subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "Basic Science"],
    facultyCount: 24,
  },
  {
    id: "commerce",
    name: "Department of Commerce & Management",
    head: "Smt. Fathima Suhara C",
    description: "Practical accounting, business communication, and economic analysis combined with computer application software training.",
    subjects: ["Accountancy", "Business Studies", "Economics", "Computer Applications"],
    facultyCount: 12,
  },
  {
    id: "humanities",
    name: "Department of Humanities & Social Sciences",
    head: "Sri. Venu Gopal K",
    description: "Deep study of political systems, socio-economic history, geographic transformations, and civic development.",
    subjects: ["History", "Political Science", "Sociology", "Economics", "Social Science"],
    facultyCount: 16,
  },
  {
    id: "languages",
    name: "Department of Languages & Literature",
    head: "Sri. Pradeep Kumar T",
    description: "Linguistic excellence and literary appreciation across regional, national, and international languages.",
    subjects: ["Malayalam", "English", "Hindi", "Arabic", "Urdu", "Sanskrit"],
    facultyCount: 18,
  },
  {
    id: "it",
    name: "Department of Computer Science & Little KITEs",
    head: "Sri. Abdul Rasheed K",
    description: "Digital literacy, open-source programming, Scratch animation, robotics, and cyber ethics under Kerala KITE framework.",
    subjects: ["Computer Science", "Information Technology", "AI Basics", "Linux OS"],
    facultyCount: 6,
  },
  {
    id: "sports",
    name: "Department of Physical Education & Sports",
    head: "Sri. Sureshkumar K",
    description: "Comprehensive physical conditioning, fencing coaching, boxing arena training, and athletics.",
    subjects: ["Physical Health Education", "Fencing", "Boxing", "Athletics", "Team Sports"],
    facultyCount: 6,
  },
];

export const FACULTY_DIRECTORY: StaffMember[] = [
  {
    name: "Sri. K. Narayanan",
    designation: "Headmaster (High School)",
    department: "Administration & High School Wing",
    qualification: "M.Sc., M.Ed.",
    experience: "26 Years",
  },
  {
    name: "Dr. P. Radhakrishnan",
    designation: "Principal (Higher Secondary)",
    department: "DHSE & Academics",
    qualification: "M.Sc., Ph.D., B.Ed.",
    experience: "28 Years",
  },
  {
    name: "Smt. Lathika Kumari M",
    designation: "Higher Secondary Teacher (Chemistry)",
    department: "Science",
    qualification: "M.Sc., B.Ed., SET",
    experience: "18 Years",
  },
  {
    name: "Sri. Mohammed Shafi P",
    designation: "Higher Secondary Teacher (Physics)",
    department: "Science",
    qualification: "M.Sc., B.Ed., SET",
    experience: "15 Years",
  },
  {
    name: "Sri. Haridasan V",
    designation: "Higher Secondary Teacher (Mathematics)",
    department: "Science",
    qualification: "M.Sc., B.Ed., NET",
    experience: "21 Years",
  },
  {
    name: "Dr. Anitha K",
    designation: "High School Teacher (Natural Science / Biology)",
    department: "Science",
    qualification: "M.Sc. Zoology, Ph.D., B.Ed.",
    experience: "16 Years",
  },
  {
    name: "Smt. Fathima Suhara C",
    designation: "Higher Secondary Teacher (Commerce)",
    department: "Commerce",
    qualification: "M.Com., B.Ed., SET",
    experience: "14 Years",
  },
  {
    name: "Sri. Ashraf Ali M",
    designation: "Higher Secondary Teacher (Economics)",
    department: "Humanities",
    qualification: "M.A. Economics, B.Ed., SET",
    experience: "19 Years",
  },
  {
    name: "Sri. Venu Gopal K",
    designation: "High School Teacher (Social Science)",
    department: "Humanities",
    qualification: "M.A. History, B.Ed.",
    experience: "22 Years",
  },
  {
    name: "Smt. Mini V. P.",
    designation: "Higher Secondary Teacher (English)",
    department: "Languages",
    qualification: "M.A. English, B.Ed., SET",
    experience: "17 Years",
  },
  {
    name: "Sri. Pradeep Kumar T",
    designation: "Higher Secondary Teacher (Malayalam)",
    department: "Languages",
    qualification: "M.A. Malayalam, B.Ed.",
    experience: "20 Years",
  },
  {
    name: "Smt. Sujatha P",
    designation: "High School Teacher (Hindi)",
    department: "Languages",
    qualification: "M.A. Hindi, B.Ed., SET",
    experience: "13 Years",
  },
  {
    name: "Sri. Abdul Rasheed K",
    designation: "IT Master & Little KITEs In-Charge",
    department: "IT & Computer Science",
    qualification: "MCA, B.Ed.",
    experience: "12 Years",
  },
  {
    name: "Sri. Sureshkumar K",
    designation: "Physical Education Teacher & Sports Master",
    department: "Physical Education",
    qualification: "M.P.Ed., NIS (Fencing)",
    experience: "16 Years",
  },
];

