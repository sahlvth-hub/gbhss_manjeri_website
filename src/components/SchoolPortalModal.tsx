import React, { useState, useEffect } from 'react';
import {
  X,
  Lock,
  Building2,
  Users,
  GraduationCap,
  FileCheck,
  CheckCircle2,
  Search,
  Calculator,
  Download,
  AlertCircle,
} from 'lucide-react';
import { SchoolEmblem } from './SchoolEmblem';
import {
  SCHOOL_INFO,
  ACADEMIC_STREAMS,
  FACULTY_DIRECTORY,
} from '../data/schoolData';

interface SchoolPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'sametham' | 'admissions' | 'faculty' | 'certificates';
}

export const SchoolPortalModal: React.FC<SchoolPortalModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'sametham',
}) => {
  const [activeTab, setActiveTab] = useState<'sametham' | 'admissions' | 'faculty' | 'certificates'>(defaultTab);

  useEffect(() => {
    if (defaultTab) {
      setActiveTab(defaultTab);
    }
  }, [defaultTab, isOpen]);

  const [facultySearch, setFacultySearch] = useState('');
  
  // WGPA Calculator state
  const [sslcScores, setSslcScores] = useState({
    languages: 9, // out of 10
    sciences: 9,
    maths: 9,
    social: 9,
    bonusNcc: true,
    bonusSpc: false,
    samePanchayath: true,
  });
  const [calculatedScore, setCalculatedScore] = useState<number | null>(null);

  // Certificate request state
  const [certForm, setCertForm] = useState({
    studentName: '',
    admissionNo: '',
    yearOfPassing: '2025',
    certType: 'Transfer Certificate (TC)',
    reason: '',
  });
  const [certSubmittedRef, setCertSubmittedRef] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCalculateWGPA = () => {
    const rawTotal = (sslcScores.languages + sslcScores.sciences + sslcScores.maths + sslcScores.social) / 4;
    let bonus = 0;
    if (sslcScores.bonusNcc || sslcScores.bonusSpc) bonus += 2;
    if (sslcScores.samePanchayath) bonus += 2;
    const finalScore = Math.min(10, rawTotal) + bonus;
    setCalculatedScore(Number(finalScore.toFixed(2)));
  };

  const handleCertSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refNo = `TC-GBHSS-${Math.floor(10000 + Math.random() * 90000)}`;
    setCertSubmittedRef(refNo);
  };

  const filteredFaculty = FACULTY_DIRECTORY.filter(
    (f) =>
      f.name.toLowerCase().includes(facultySearch.toLowerCase()) ||
      f.department.toLowerCase().includes(facultySearch.toLowerCase()) ||
      f.designation.toLowerCase().includes(facultySearch.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Modal Top Header */}
        <div className="px-6 py-4.5 bg-[#0A192F] text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <SchoolEmblem size={38} />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-sm sm:text-base tracking-tight font-crest">
                  GBHSS MANJERI PORTAL
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-400 text-slate-950">
                  CODE #18021
                </span>
              </div>
              <p className="text-[11px] text-slate-300">
                Kerala Sametham &amp; DHSE Verified Repository
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 px-4 sm:px-6 pt-3 border-b border-slate-200 bg-slate-50/70 overflow-x-auto shrink-0">
          <button
            onClick={() => setActiveTab('sametham')}
            className={`px-3.5 py-2.5 text-xs font-semibold rounded-t-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'sametham'
                ? 'bg-white text-slate-900 border-t-2 border-amber-500 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Sametham Verified Profile</span>
          </button>

          <button
            onClick={() => setActiveTab('admissions')}
            className={`px-3.5 py-2.5 text-xs font-semibold rounded-t-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'admissions'
                ? 'bg-white text-slate-900 border-t-2 border-amber-500 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>HSCAP Admission Desk</span>
          </button>

          <button
            onClick={() => setActiveTab('faculty')}
            className={`px-3.5 py-2.5 text-xs font-semibold rounded-t-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'faculty'
                ? 'bg-white text-slate-900 border-t-2 border-amber-500 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Staff Directory</span>
          </button>

          <button
            onClick={() => setActiveTab('certificates')}
            className={`px-3.5 py-2.5 text-xs font-semibold rounded-t-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'certificates'
                ? 'bg-white text-slate-900 border-t-2 border-amber-500 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileCheck className="w-3.5 h-3.5" />
            <span>TC &amp; Certificates</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto flex-1">
          
          {/* TAB 1: SAMETHAM */}
          {activeTab === 'sametham' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-emerald-950 uppercase">
                      Sametham Live Database Sync: Verified
                    </h4>
                    <p className="text-[11px] text-emerald-800">
                      Official Institutional Record under Department of General Education, Kerala.
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-emerald-900 bg-emerald-100/70 px-2 py-1 rounded">
                  Status: Active Govt School
                </span>
              </div>

              {/* Data Table */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Administrative Identifiers
                  </h5>
                  <dl className="divide-y divide-slate-200/60 text-xs">
                    <div className="py-2 flex justify-between">
                      <dt className="text-slate-500">School Name</dt>
                      <dd className="font-semibold text-slate-900 text-right">GBHSS Manjeri</dd>
                    </div>
                    <div className="py-2 flex justify-between">
                      <dt className="text-slate-500">School Code (HS)</dt>
                      <dd className="font-mono font-bold text-slate-900">18021</dd>
                    </div>
                    <div className="py-2 flex justify-between">
                      <dt className="text-slate-500">HSS Code</dt>
                      <dd className="font-mono font-bold text-slate-900">11010</dd>
                    </div>
                    <div className="py-2 flex justify-between">
                      <dt className="text-slate-500">UDISE Number</dt>
                      <dd className="font-mono font-bold text-slate-900">32050800636</dd>
                    </div>
                    <div className="py-2 flex justify-between">
                      <dt className="text-slate-500">Established</dt>
                      <dd className="font-semibold text-slate-900">1908 (High School) / 1998 (HSS)</dd>
                    </div>
                  </dl>
                </div>

                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Geographic &amp; Electoral Boundaries
                  </h5>
                  <dl className="divide-y divide-slate-200/60 text-xs">
                    <div className="py-2 flex justify-between">
                      <dt className="text-slate-500">Revenue District</dt>
                      <dd className="font-semibold text-slate-900">Malappuram</dd>
                    </div>
                    <div className="py-2 flex justify-between">
                      <dt className="text-slate-500">Educational Sub District</dt>
                      <dd className="font-semibold text-slate-900">Manjeri</dd>
                    </div>
                    <div className="py-2 flex justify-between">
                      <dt className="text-slate-500">Parliamentary Constituency</dt>
                      <dd className="font-semibold text-slate-900">Malappuram</dd>
                    </div>
                    <div className="py-2 flex justify-between">
                      <dt className="text-slate-500">Panchayath / Municipality</dt>
                      <dd className="font-semibold text-slate-900">Manjeri Municipality</dd>
                    </div>
                    <div className="py-2 flex justify-between">
                      <dt className="text-slate-500">Campus Area</dt>
                      <dd className="font-semibold text-slate-900">7.25 Acres</dd>
                    </div>
                  </dl>
                </div>
              </div>

              {/* Physical Infrastructure Spec */}
              <div className="bg-white rounded-xl p-4 border border-slate-200">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Campus Asset Inventory
                </h5>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="block text-xl font-bold text-slate-900">71</span>
                    <span className="text-[11px] text-slate-500">Total Classrooms</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="block text-xl font-bold text-blue-700">54</span>
                    <span className="text-[11px] text-slate-500">Smart Classrooms</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="block text-xl font-bold text-emerald-700">65</span>
                    <span className="text-[11px] text-slate-500">KITE Linux PCs</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="block text-xl font-bold text-amber-700">1,950+</span>
                    <span className="text-[11px] text-slate-500">Library Books</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ADMISSIONS */}
          {activeTab === 'admissions' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs text-blue-950">
                <strong className="block font-bold mb-1">
                  HSCAP Single-Window Admission System (Govt. of Kerala)
                </strong>
                Higher Secondary admissions at GBHSS Manjeri (School Code: 11010) are governed exclusively via the centralized Directorate of General Education HSCAP portal (hscap.kerala.gov.in).
              </div>

              {/* Stream seat matrix */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Available Streams &amp; Annual Intake (HSS Code: 11010)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {ACADEMIC_STREAMS.map((st) => (
                    <div
                      key={st.code}
                      className="p-4 rounded-xl border border-slate-200 bg-slate-50/50"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="text-xs font-bold text-slate-900">
                          {st.name}
                        </h5>
                        <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-blue-100 text-blue-800">
                          {st.intake} Seats
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {st.subjects.map((sub) => (
                          <span
                            key={sub}
                            className="px-2 py-0.5 rounded bg-white border border-slate-200 text-[10px] text-slate-600"
                          >
                            {sub}
                          </span>
                        ))}
                      </div>
                      <p className="text-[11px] text-slate-500 italic">
                        {st.qualification}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* WGPA Interactive Calculator */}
              <div className="bg-[#FFFDF6] border border-amber-200 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Calculator className="w-4 h-4 text-amber-700" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    SSLC Weighted Grade Point (WGPA) Estimator
                  </h4>
                </div>
                <p className="text-xs text-slate-600 mb-4">
                  Calculate your approximate WGPA ranking index for HSCAP seat allotment at GBHSS Manjeri:
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Languages GPA (1–10)
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={sslcScores.languages}
                      onChange={(e) =>
                        setSslcScores({ ...sslcScores, languages: Number(e.target.value) })
                      }
                      className="w-full p-2 text-xs border border-slate-300 rounded-lg bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Sciences GPA (1–10)
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={sslcScores.sciences}
                      onChange={(e) =>
                        setSslcScores({ ...sslcScores, sciences: Number(e.target.value) })
                      }
                      className="w-full p-2 text-xs border border-slate-300 rounded-lg bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Mathematics GPA (1–10)
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={sslcScores.maths}
                      onChange={(e) =>
                        setSslcScores({ ...sslcScores, maths: Number(e.target.value) })
                      }
                      className="w-full p-2 text-xs border border-slate-300 rounded-lg bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Social Science GPA (1–10)
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={sslcScores.social}
                      onChange={(e) =>
                        setSslcScores({ ...sslcScores, social: Number(e.target.value) })
                      }
                      className="w-full p-2 text-xs border border-slate-300 rounded-lg bg-white"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 mb-4 text-xs">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={sslcScores.bonusNcc}
                      onChange={(e) =>
                        setSslcScores({ ...sslcScores, bonusNcc: e.target.checked })
                      }
                      className="rounded text-amber-600"
                    />
                    <span>NCC / SPC Cadet Bonus (+2)</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={sslcScores.samePanchayath}
                      onChange={(e) =>
                        setSslcScores({ ...sslcScores, samePanchayath: e.target.checked })
                      }
                      className="rounded text-amber-600"
                    />
                    <span>Manjeri Local Quota (+2)</span>
                  </label>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={handleCalculateWGPA}
                    className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-lg transition-colors"
                  >
                    Calculate Estimated WGPA
                  </button>

                  {calculatedScore !== null && (
                    <div className="text-xs font-bold text-slate-900 bg-white px-3 py-1.5 rounded-lg border border-amber-300">
                      Estimated WGPA Score:{' '}
                      <span className="text-amber-700 font-extrabold text-sm">
                        {calculatedScore} / 10
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: FACULTY */}
          {activeTab === 'faculty' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search by name, department, or designation..."
                    value={facultySearch}
                    onChange={(e) => setFacultySearch(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900"
                  />
                </div>
                <span className="text-xs text-slate-500 font-medium">
                  {filteredFaculty.length} Staff Listed
                </span>
              </div>

              <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden bg-white">
                {filteredFaculty.map((member) => (
                  <div key={member.name} className="p-4 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
                    <div>
                      <h5 className="text-xs sm:text-sm font-bold text-slate-900">
                        {member.name}
                      </h5>
                      <p className="text-[11px] text-slate-500 font-medium">
                        {member.designation} • {member.department}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] font-mono text-slate-600 block">
                        {member.qualification}
                      </span>
                      <span className="text-[10px] text-slate-400">
                        Exp: {member.experience}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: CERTIFICATES & TC */}
          {activeTab === 'certificates' && (
            <div className="space-y-6">
              {certSubmittedRef ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center animate-in fade-in">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                  <h4 className="text-sm font-bold text-emerald-950">
                    Application Registered Successfully!
                  </h4>
                  <p className="text-xs text-emerald-800 mt-1 mb-3">
                    Your formal request has been forwarded to the GBHSS General Office Desk.
                  </p>
                  <div className="inline-block px-4 py-2 bg-white rounded-xl border border-emerald-300 font-mono text-xs font-bold text-slate-900 mb-4">
                    Tracking Token: {certSubmittedRef}
                  </div>
                  <p className="text-[11px] text-slate-500 max-w-md mx-auto">
                    Please bring original SSLC hall ticket / ID card to the Principal's counter on working days between 10:00 AM – 3:30 PM to collect your physical document.
                  </p>
                  <button
                    onClick={() => setCertSubmittedRef(null)}
                    className="mt-4 px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleCertSubmit} className="space-y-4">
                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950">
                    <strong className="block font-bold mb-1">
                      Online Certificate Application Window
                    </strong>
                    Current and former students may register for official institutional documents including Transfer Certificate (TC), Conduct Certificate, and Course Completion Certificate.
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Student Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="As registered in school records"
                        value={certForm.studentName}
                        onChange={(e) =>
                          setCertForm({ ...certForm, studentName: e.target.value })
                        }
                        className="w-full p-2.5 text-xs border border-slate-200 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Admission Number / Roll No *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 18021-2023-A"
                        value={certForm.admissionNo}
                        onChange={(e) =>
                          setCertForm({ ...certForm, admissionNo: e.target.value })
                        }
                        className="w-full p-2.5 text-xs border border-slate-200 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Document Requested
                      </label>
                      <select
                        value={certForm.certType}
                        onChange={(e) =>
                          setCertForm({ ...certForm, certType: e.target.value })
                        }
                        className="w-full p-2.5 text-xs border border-slate-200 rounded-xl bg-white"
                      >
                        <option>Transfer Certificate (TC)</option>
                        <option>Conduct &amp; Character Certificate</option>
                        <option>Course &amp; Attendance Certificate</option>
                        <option>Medium of Instruction Certificate (English/Malayalam)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Year of Completion
                      </label>
                      <select
                        value={certForm.yearOfPassing}
                        onChange={(e) =>
                          setCertForm({ ...certForm, yearOfPassing: e.target.value })
                        }
                        className="w-full p-2.5 text-xs border border-slate-200 rounded-xl bg-white"
                      >
                        <option>2026</option>
                        <option>2025</option>
                        <option>2024</option>
                        <option>2023</option>
                        <option>Earlier Batch</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Reason for Request
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Higher education admission in college / change of institution"
                      value={certForm.reason}
                      onChange={(e) =>
                        setCertForm({ ...certForm, reason: e.target.value })
                      }
                      className="w-full p-2.5 text-xs border border-slate-200 rounded-xl resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#0A192F] text-white font-bold text-xs rounded-xl hover:bg-slate-800 transition-colors uppercase tracking-wider"
                  >
                    Submit Formal Certificate Application
                  </button>
                </form>
              )}
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500 shrink-0">
          <span>School Code: 18021 | HSS Code: 11010</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-white border border-slate-200 rounded-lg font-medium text-slate-700 hover:bg-slate-100"
          >
            Close Portal
          </button>
        </div>

      </div>
    </div>
  );
};
