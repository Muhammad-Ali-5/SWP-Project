import { ArrowRight, ShieldCheck } from "lucide-react";
import { principles } from "./data";

const accents = [
  "from-purple-500/20 to-purple-950/20 border-purple-500/30 text-purple-200",
  "from-blue-500/20 to-blue-950/20 border-blue-500/30 text-blue-200",
  "from-emerald-500/20 to-emerald-950/20 border-emerald-500/30 text-emerald-200",
];

export default function BiestekPrinciplesCards() {
  return (
    <div>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-300">
            Principle Library
          </div>
          <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">
            Compact field cards
          </h3>
        </div>
        <div className="rounded-full border border-purple-400/25 bg-purple-500/10 px-4 py-2 text-sm text-purple-200">
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
              className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-br ${accent} p-5 shadow-xl shadow-slate-950/25 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900/80`}
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950/45 ring-1 ring-white/10">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <span className="rounded-full bg-slate-950/45 px-3 py-1 text-xs font-semibold text-slate-300 ring-1 ring-white/10">
                  0{item.id}
                </span>
              </div>

              <h4 className="text-lg font-bold leading-6 text-white">{item.title}</h4>

              <div className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                <p>
                  <span className="font-semibold text-slate-100">Issue: </span>
                  {item.challenge}
                </p>
                <div className="flex gap-2 rounded-xl border border-white/10 bg-slate-950/35 p-3">
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0" />
                  <p>
                    <span className="font-semibold text-slate-100">Digital action: </span>
                    {item.techSolution}
                  </p>
                </div>
              </div>

              {shortOutcome && (
                <p className="mt-4 border-t border-white/10 pt-3 text-xs leading-5 text-slate-400">
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
