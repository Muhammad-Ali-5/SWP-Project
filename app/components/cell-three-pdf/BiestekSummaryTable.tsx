import { summaryRows } from "./data";

export default function BiestekSummaryTable() {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 shadow-2xl shadow-slate-950/35 backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-white/[0.035] p-5 md:p-6">
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
            Action Map
          </div>
          <h3 className="mt-2 text-2xl font-bold text-white">
            Principles to volunteer decisions
          </h3>
        </div>
        <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
          Quick field mapping
        </span>
      </div>
      <div className="overflow-x-auto p-4 md:p-5">
        <table className="w-full min-w-[720px] border-separate border-spacing-0 overflow-hidden rounded-2xl text-sm">
          <thead>
            <tr className="bg-slate-800/90 text-left text-slate-100">
              <th className="border-b border-white/10 px-4 py-3 font-semibold">Principle</th>
              <th className="border-b border-white/10 px-4 py-3 font-semibold">Tech Solution</th>
              <th className="border-b border-white/10 px-4 py-3 font-semibold">Volunteer Action</th>
            </tr>
          </thead>
          <tbody>
            {summaryRows.map((row) => (
              <tr
                key={row.principle}
                className="text-slate-300 transition-colors odd:bg-white/[0.025] even:bg-white/[0.05] hover:bg-purple-500/10"
              >
                <td className="border-b border-white/5 px-4 py-3 font-medium text-white">
                  {row.principle}
                </td>
                <td className="border-b border-white/5 px-4 py-3">{row.techSolution}</td>
                <td className="border-b border-white/5 px-4 py-3">{row.volunteerAction}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
