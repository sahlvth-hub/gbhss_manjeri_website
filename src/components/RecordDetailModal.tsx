import React from 'react';
import { X, Award, Trophy, CheckCircle, ExternalLink, Printer } from 'lucide-react';
import { SchoolEmblem } from './SchoolEmblem';
import { KALOLSAVAM_RECORDS, SPORTS_RECORDS } from '../data/schoolData';

interface RecordDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'kalolsavam' | 'sports';
}

export const RecordDetailModal: React.FC<RecordDetailModalProps> = ({
  isOpen,
  onClose,
  type,
}) => {
  if (!isOpen) return null;

  const isKalolsavam = type === 'kalolsavam';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl w-full max-w-3xl max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="px-6 py-4.5 bg-[#0A192F] text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <SchoolEmblem size={40} className="ring-1 ring-amber-400/50 rounded-full" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-sm sm:text-base tracking-tight font-crest text-white">
                  {isKalolsavam ? "KERALA SCHOOL KALOLSAVAM RECORD" : "KERALA SCHOOL GAMES HONOURS"}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-400 text-slate-950">
                  INSTITUTION #18021
                </span>
              </div>
              <p className="text-[11px] text-slate-300">
                Official Department of General Education &amp; KITE Verified Data
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

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
          
          {isKalolsavam ? (
            <>
              {/* Kalolsavam 2024-25 Primary Card */}
              <div className="bg-amber-50/50 border border-amber-200/80 rounded-2xl p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-amber-200/60">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900 bg-amber-100 px-2 py-0.5 rounded">
                      State Level Championship
                    </span>
                    <h3 className="text-xl font-black text-slate-900 mt-1">
                      Kalolsavam 2024–25 School Point Table
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      State School Standing: Ranked <strong className="text-slate-900">38th</strong> in overall State School Ranking.
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-3xl sm:text-4xl font-black text-amber-700 tabular-nums">
                      43 Points
                    </span>
                    <span className="block text-[11px] text-amber-900 font-semibold">
                      Total State Tally
                    </span>
                  </div>
                </div>

                {/* Detailed Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-amber-200 text-slate-500 uppercase tracking-wider text-[10px]">
                        <th className="py-2">Item / Discipline</th>
                        <th className="py-2">Achievement / Grade</th>
                        <th className="py-2 text-right">Points</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-amber-100/70">
                      {KALOLSAVAM_RECORDS.year2025.disciplines.map((d) => (
                        <tr key={d.name} className="hover:bg-amber-100/30">
                          <td className="py-2.5 font-semibold text-slate-800">{d.name}</td>
                          <td className="py-2.5 text-slate-600">
                            <span className="px-2 py-0.5 rounded bg-white border border-amber-200 text-amber-950 font-bold text-[11px]">
                              {d.rank}
                            </span>
                          </td>
                          <td className="py-2.5 text-right font-mono font-bold text-slate-900">
                            {d.points} Pts
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Kalolsavam 2025-26 Summary */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Kalolsavam 2025–26 Results
                    </h4>
                    <p className="text-xs text-slate-500">
                      State Level Cumulative Standing
                    </p>
                  </div>
                  <span className="text-2xl font-black text-slate-800 tabular-nums">
                    25 Points
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {KALOLSAVAM_RECORDS.year2026.disciplines.map((d) => (
                    <div key={d.name} className="bg-white p-2.5 rounded-lg border border-slate-200 text-xs">
                      <span className="font-bold text-slate-800 block truncate">{d.name}</span>
                      <span className="text-[11px] text-slate-500">{d.rank} • {d.points} pts</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Sports Primary Card */}
              <div className="bg-blue-50/50 border border-blue-200/80 rounded-2xl p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-blue-200/60">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-900 bg-blue-100 px-2 py-0.5 rounded">
                      Kerala State School Games
                    </span>
                    <h3 className="text-xl font-black text-slate-900 mt-1">
                      Athletics, Fencing &amp; Boxing State Honours (2026)
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Fencing &amp; Combat Sports Specialized High School Training Wing
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-3xl sm:text-4xl font-black text-blue-700 tabular-nums">
                      13 Points
                    </span>
                    <span className="block text-[11px] text-blue-900 font-semibold">
                      Championship Points
                    </span>
                  </div>
                </div>

                {/* Athlete roster */}
                <div className="space-y-3">
                  {SPORTS_RECORDS.current2026.standings.map((ath) => (
                    <div
                      key={ath.student}
                      className="bg-white border border-blue-200/80 rounded-xl p-4 flex items-center justify-between shadow-xs"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-black text-xs">
                          {ath.badge === 'Gold Medal' ? '🥇' : '🥈'}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900">{ath.student}</h4>
                          <p className="text-xs text-slate-500 font-medium">
                            {ath.division} • {ath.event}
                          </p>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="px-3 py-1 bg-amber-50 border border-amber-300 text-amber-900 font-bold text-xs rounded-lg inline-block">
                          {ath.place}
                        </span>
                        <span className="block text-[10px] font-semibold text-slate-400 mt-0.5">
                          {ath.badge}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Historic 2024 Sabre Record */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  State Games 2024 Sabre Fencing Record
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {SPORTS_RECORDS.historic2024.standings.map((ath) => (
                    <div key={ath.student} className="bg-white p-3 rounded-xl border border-slate-200">
                      <strong className="block text-slate-900">{ath.student}</strong>
                      <span className="text-slate-500 text-[11px]">{ath.division}</span>
                      <span className="block mt-1 font-bold text-blue-700">{ath.place}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 shrink-0">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Official Government Verified Data (Code: 18021)</span>
          </div>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-100 font-medium"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Standings</span>
          </button>
        </div>

      </div>
    </div>
  );
};
