import React, { useState } from 'react';
import {
  BookOpen,
  GraduationCap,
  Users,
  Download,
  CheckCircle,
  Briefcase,
  Award,
  Layers,
  ChevronRight,
  Filter,
  Search,
  Calendar,
  Clock,
  Compass,
} from 'lucide-react';
import {
  ACADEMIC_STREAMS,
  ACADEMIC_DEPARTMENTS,
  FACULTY_DIRECTORY,
  DOWNLOAD_DOCUMENTS,
} from '../data/schoolData';

interface AcademicsSectionProps {
  onOpenPortalAdmissions?: () => void;
}

export const AcademicsSection: React.FC<AcademicsSectionProps> = ({ onOpenPortalAdmissions }) => {
  const [activeTab, setActiveTab] = useState<'courses' | 'departments' | 'teachers' | 'calendar'>('courses');
  const [facultyFilter, setFacultyFilter] = useState<string>('all');
  const [facultySearch, setFacultySearch] = useState<string>('');
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [downloadedId, setDownloadedId] = useState<string | null>(null);

  const handleDownload = (doc: typeof DOWNLOAD_DOCUMENTS[0]) => {
    setDownloadingId(doc.id);
    setTimeout(() => {
      const element = document.createElement('a');
      const sampleContent = `GOVERNMENT BOYS HIGHER SECONDARY SCHOOL MANJERI
School Code: 18021 | HSS Code: 11010 | UDISE: 32050800636
Kacherippadi, Manjeri, Malappuram, Kerala 676121

DOCUMENT TITLE: ${doc.title}
CATEGORY: ${doc.category}
ISSUED: Academic Year 2025-26

SUMMARY:
${doc.subtitle}

General Education Department, Government of Kerala.
Sametham Verified Repository Ref: SAMETHAM-GBHSS-18021
Official Contact: gbhssmanjeri11010@gmail.com`;

      const file = new Blob([sampleContent], { type: 'text/plain;charset=utf-8' });
      element.href = URL.createObjectURL(file);
      element.download = `${doc.filename.replace('.pdf', '')}.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);

      setDownloadingId(null);
      setDownloadedId(doc.id);
      setTimeout(() => setDownloadedId(null), 3500);
    }, 600);
  };

  const filteredFaculty = FACULTY_DIRECTORY.filter((f) => {
    const matchesFilter =
      facultyFilter === 'all' ||
      f.department.toLowerCase().includes(facultyFilter.toLowerCase());
    const matchesSearch =
      facultySearch === '' ||
      f.name.toLowerCase().includes(facultySearch.toLowerCase()) ||
      f.designation.toLowerCase().includes(facultySearch.toLowerCase()) ||
      f.department.toLowerCase().includes(facultySearch.toLowerCase()) ||
      f.qualification.toLowerCase().includes(facultySearch.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const academicCalendarTerms = [
    {
      term: "Term 1 (June – August)",
      focus: "Curriculum Inception & Diagnostic Assessments",
      events: [
        { date: "June 02", title: "School Reopening & Pravesanolsavam 2025" },
        { date: "June 20", title: "HSCAP Plus One Admissions Allotment Phase 1" },
        { date: "July 15", title: "Unit Tests & Little KITEs Digital Club Induction" },
        { date: "August 18", title: "First Terminal Mid-Term Examinations" },
        { date: "August 28", title: "Onam Cultural Celebrations & Onam Vacation" },
      ],
    },
    {
      term: "Term 2 (September – December)",
      focus: "Co-Curricular Triumphs & Half-Yearly Exams",
      events: [
        { date: "September 08", title: "School Reopens after Onam Vacation" },
        { date: "October 10", title: "School Kalolsavam & Sasthrolsavam (Science Fair)" },
        { date: "November 12", title: "Annual Athletic Meet & Inter-House Sports Championship" },
        { date: "December 15", title: "Half-Yearly (Christmas) Examinations 2025" },
        { date: "December 23", title: "Christmas & New Year Vacation Commences" },
      ],
    },
    {
      term: "Term 3 (January – March)",
      focus: "Board Preparation, Model Exams & Public Finals",
      events: [
        { date: "January 05", title: "School Reopens & Intensive Board Revision Begins" },
        { date: "January 20", title: "Higher Secondary Lab Practical Internal Trials" },
        { date: "February 10", title: "Kerala SSLC & Plus Two Model Examinations" },
        { date: "February 22", title: "DHSE Plus Two Practical Public Board Examinations" },
        { date: "March 03", title: "Kerala SSLC & Higher Secondary Public Examinations" },
      ],
    },
  ];

  return (
    <section id="academics" className="py-16 lg:py-24 bg-[#FBFBFA] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-[0.72rem] font-bold tracking-wider uppercase mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-blue-700" />
            <span>Academic Excellence &amp; Pedagogy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 font-crest">
            COURSES, DEPARTMENTS &amp; TEACHERS
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Delivering the gold standard of state secondary and higher secondary education in Kerala, blending academic inquiry with laboratory practice and career mentorship.
          </p>

          {/* Sub-Navigation Pill Tabs */}
          <div className="inline-flex flex-wrap justify-center p-1.5 mt-8 bg-slate-200/70 rounded-2xl border border-slate-300/80 shadow-inner gap-1">
            <button
              onClick={() => setActiveTab('courses')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'courses'
                  ? 'bg-white text-slate-950 shadow-md scale-[1.02]'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <BookOpen className="w-4 h-4 text-amber-600" />
              <span>Courses &amp; Streams</span>
            </button>
            <button
              onClick={() => setActiveTab('departments')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'departments'
                  ? 'bg-white text-slate-950 shadow-md scale-[1.02]'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <Layers className="w-4 h-4 text-blue-600" />
              <span>Departments (6)</span>
            </button>
            <button
              onClick={() => setActiveTab('teachers')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'teachers'
                  ? 'bg-white text-slate-950 shadow-md scale-[1.02]'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <Users className="w-4 h-4 text-emerald-600" />
              <span>Teachers Directory ({FACULTY_DIRECTORY.length}+)</span>
            </button>
            <button
              onClick={() => setActiveTab('calendar')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'calendar'
                  ? 'bg-white text-slate-950 shadow-md scale-[1.02]'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <Calendar className="w-4 h-4 text-purple-600" />
              <span>Academic Calendar 2025–26</span>
            </button>
          </div>
        </div>

        {/* ============================================================== */}
        {/* TAB 1: COURSES & STREAMS */}
        {/* ============================================================== */}
        {activeTab === 'courses' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in duration-300">
            {/* Courses Left (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* High School Wing */}
              <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div>
                    <span className="text-[0.7rem] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                      High School Tier • Code: 18021
                    </span>
                    <h3 className="text-xl font-black text-slate-900 tracking-tight mt-2 font-crest">
                      KERALA SSLC HIGH SCHOOL (CLASSES 8 TO 10)
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-slate-900 text-white">
                    Malayalam &amp; English Medium
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Structured foundation fostering holistic academic rigor, critical reasoning, and state board preparation under the Kerala SCERT syllabus.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-700">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">Mathematics &amp; IT</div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">Basic Science (Phy, Chem, Bio)</div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">Social Science &amp; History</div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">First Language (Malayalam)</div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">English &amp; Hindi</div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">Arabic / Urdu / Sanskrit</div>
                </div>
              </div>

              {/* Higher Secondary Streams Grid */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 pl-1">
                  HIGHER SECONDARY STREAMS (CODE: 11010 • HSCAP SINGLE WINDOW)
                </h3>

                {ACADEMIC_STREAMS.map((stream) => (
                  <div
                    key={stream.code}
                    className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:border-amber-400/80 transition-all"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center font-mono font-bold text-xs border border-amber-500/20">
                          {stream.code}
                        </span>
                        <h4 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                          {stream.name}
                        </h4>
                      </div>
                      <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                        Intake: {stream.intake} Seats
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {stream.subjects.map((sub) => (
                        <span
                          key={sub}
                          className="px-2.5 py-1 rounded-lg text-[0.72rem] font-semibold bg-slate-50 border border-slate-200 text-slate-700"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>

                    <p className="text-xs text-slate-500 italic">
                      Eligibility &amp; Gateway: {stream.qualification}
                    </p>
                  </div>
                ))}
              </div>

            </div>

            {/* Downloads Desk Right (4 cols) */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm sticky top-28">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
                  <Download className="w-5 h-5 text-amber-600" />
                  <h3 className="text-base font-bold text-slate-900 uppercase tracking-wide">
                    OFFICIAL DOWNLOADS DESK
                  </h3>
                </div>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                  Department-verified circulars, syllabus archives, and admission forms for the 2025–26 academic year.
                </p>

                <div className="space-y-3.5">
                  {DOWNLOAD_DOCUMENTS.map((doc) => (
                    <div
                      key={doc.id}
                      className="p-3.5 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:shadow-sm transition-all flex items-center justify-between gap-3"
                    >
                      <div className="min-w-0 flex-1">
                        <h4 className="text-xs font-bold text-slate-900 truncate">
                          {doc.title}
                        </h4>
                        <span className="text-[10px] text-slate-400 block mt-0.5">
                          {doc.category} • {doc.size}
                        </span>
                      </div>
                      <button
                        onClick={() => handleDownload(doc)}
                        disabled={downloadingId === doc.id}
                        className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-bold shrink-0 transition-colors"
                      >
                        {downloadingId === doc.id
                          ? 'Saving...'
                          : downloadedId === doc.id
                          ? 'Saved ✓'
                          : 'Download'}
                      </button>
                    </div>
                  ))}
                </div>

                {onOpenPortalAdmissions && (
                  <button
                    onClick={onOpenPortalAdmissions}
                    className="w-full mt-6 py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md hover:brightness-105 transition-all"
                  >
                    Open Admission Desk (HSCAP)
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 2: ACADEMIC DEPARTMENTS */}
        {/* ============================================================== */}
        {activeTab === 'departments' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
            {ACADEMIC_DEPARTMENTS.map((dept) => (
              <div
                key={dept.id}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-blue-50 text-blue-800 border border-blue-200">
                      {dept.facultyCount} Faculty Members
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      Dept #{dept.id.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 tracking-tight mb-2 group-hover:text-blue-900 transition-colors">
                    {dept.name}
                  </h3>

                  <p className="text-xs font-semibold text-amber-700 mb-3">
                    Head of Department: {dept.head}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {dept.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Subjects &amp; Disciplines Covered:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {dept.subjects.map((sub) => (
                      <span
                        key={sub}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 3: TEACHERS & FACULTY DIRECTORY (WITH SEARCH & FILTERS) */}
        {/* ============================================================== */}
        {activeTab === 'teachers' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            
            {/* Search + Filter Header */}
            <div className="p-4 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-4">
              {/* Search Box */}
              <div className="relative w-full lg:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={facultySearch}
                  onChange={(e) => setFacultySearch(e.target.value)}
                  placeholder="Search faculty by name or subject..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-amber-400 bg-slate-50/50"
                />
              </div>

              {/* Department Filter Pills */}
              <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
                {[
                  { id: 'all', label: 'All Faculty' },
                  { id: 'science', label: 'Science' },
                  { id: 'commerce', label: 'Commerce' },
                  { id: 'humanities', label: 'Humanities' },
                  { id: 'languages', label: 'Languages' },
                  { id: 'physical', label: 'Physical Ed' },
                  { id: 'it', label: 'IT & KITE' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setFacultyFilter(tab.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      facultyFilter === tab.id
                        ? 'bg-[#0A192F] text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Teachers Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredFaculty.map((teacher) => (
                <div
                  key={teacher.name}
                  className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-extrabold bg-amber-50 text-amber-900 border border-amber-200">
                        {teacher.department}
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {teacher.experience}
                      </span>
                    </div>

                    <h4 className="text-base font-extrabold text-slate-900 tracking-tight">
                      {teacher.name}
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5 mb-3 font-medium">
                      {teacher.designation}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">Qualification:</span>
                    <span className="font-semibold text-slate-800 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60">
                      {teacher.qualification}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {filteredFaculty.length === 0 && (
              <div className="p-8 text-center bg-white rounded-3xl border border-slate-200 text-slate-500 text-sm">
                No faculty members found matching "{facultySearch}". Try adjusting your search.
              </div>
            )}

            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/70 text-xs text-amber-950 flex flex-col sm:flex-row items-center justify-between gap-2">
              <span>
                Full faculty roster of <strong>82 Teaching Staff</strong> registered under Kerala General Education Department (Sametham verified).
              </span>
              <span className="font-bold">Institution ID: 18021</span>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 4: ACADEMIC CALENDAR 2025–26 */}
        {/* ============================================================== */}
        {activeTab === 'calendar' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {academicCalendarTerms.map((termBlock) => (
                <div
                  key={termBlock.term}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="px-3 py-1 rounded-full text-xs font-black bg-blue-50 text-blue-800 border border-blue-200 inline-block mb-3">
                      {termBlock.term}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-4">
                      {termBlock.focus}
                    </h3>

                    <div className="space-y-3 pt-2 border-t border-slate-100">
                      {termBlock.events.map((ev) => (
                        <div key={ev.title} className="flex items-start gap-3 text-xs">
                          <span className="px-2 py-0.5 rounded font-mono font-bold text-[10px] bg-slate-100 text-slate-700 shrink-0">
                            {ev.date}
                          </span>
                          <span className="text-slate-700 leading-snug font-medium">
                            {ev.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] text-slate-400 font-semibold">
                    Approved by Kerala DHSE &amp; SCERT
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-3xl bg-[#0A192F] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold">Standard School Working Hours</h4>
                  <p className="text-xs text-slate-300">Monday to Friday: 9:30 AM – 4:30 PM • 200+ Instructional Days</p>
                </div>
              </div>
              <button
                onClick={() => handleDownload(DOWNLOAD_DOCUMENTS[0])}
                className="px-4 py-2 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs hover:bg-amber-300 transition-colors shrink-0"
              >
                Download Full PDF Calendar
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
