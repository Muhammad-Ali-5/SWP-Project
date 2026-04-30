import { summaryRows } from "./data";

export default function BiestekSummaryTable() {
  return (
    <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white/90 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 bg-white/95 p-5 md:p-6">
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
            Action Map
          </div>
          <h3 className="mt-2 text-2xl font-bold text-slate-900">
            Principles to volunteer decisions
          </h3>
        </div>
        <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
          Quick field mapping
        </span>
      </div>
      <div className="overflow-x-auto p-4 md:p-5">
        <table className="w-full min-w-180 border-separate border-spacing-0 overflow-hidden rounded-2xl text-sm">
          <thead>
            <tr className="bg-slate-100 text-left text-slate-900">
              <th className="border-b border-gray-200 px-4 py-3 font-semibold">Principle</th>
              <th className="border-b border-gray-200 px-4 py-3 font-semibold">Tech Solution</th>
              <th className="border-b border-gray-200 px-4 py-3 font-semibold">Volunteer Action</th>
            </tr>
          </thead>
          <tbody>
            {summaryRows.map((row) => (
              <tr
                key={row.principle}
                className="text-slate-700 transition-colors odd:bg-slate-50 even:bg-slate-100 hover:bg-purple-50"
              >
                <td className="border-b border-gray-200 px-4 py-3 font-medium text-slate-900">
                  {row.principle}
                </td>
                <td className="border-b border-gray-200 px-4 py-3">{row.techSolution}</td>
                <td className="border-b border-gray-200 px-4 py-3">{row.volunteerAction}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
