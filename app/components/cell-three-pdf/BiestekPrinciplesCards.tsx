import { ArrowRight, ShieldCheck } from "lucide-react";
import { principles } from "./data";

const accents = [
  "from-white via-purple-50 to-purple-100/70 border-purple-200 text-purple-700",
  "from-white via-blue-50 to-blue-100/70 border-blue-200 text-blue-700",
  "from-white via-emerald-50 to-emerald-100/70 border-emerald-200 text-emerald-700",
];

export default function BiestekPrinciplesCards() {
  return (
    <div>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-700">
            Principle Library
          </div>
          <h3 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">
            Compact field cards
          </h3>
        </div>
        <div className="rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700">
          7 principles
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {principles.map((item, index) => {
          const accent = accents[index % accents.length];
          const shortOutcome = item.example[item.example.length - 1]?.replace("Outcome: ", "");

          return (
            <article
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl border bg-linear-to-br ${accent} p-5 shadow-md shadow-gray-200 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-50`}
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/45 ring-1 ring-black/10">
                  <ShieldCheck className="h-5 w-5 text-current" />
                </div>
                <span className="rounded-full bg-white/45 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-black/10">
                  0{item.id}
                </span>
              </div>

              <h4 className="text-lg font-bold leading-6 text-slate-900">{item.title}</h4>

              <div className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                <p>
                  <span className="font-semibold text-slate-700">Issue: </span>
                  {item.challenge}
                </p>
                <div className="flex gap-2 rounded-xl border border-gray-200 bg-white/60 p-3">
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0" />
                  <p>
                    <span className="font-semibold text-slate-700">Digital action: </span>
                    {item.techSolution}
                  </p>
                </div>
              </div>

              {shortOutcome && (
                <p className="mt-4 border-t border-gray-200 pt-3 text-xs leading-5 text-slate-600">
                  {shortOutcome}
                </p>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
