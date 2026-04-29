import { technicalRequirements } from "./data";
import { BatteryCharging, LockKeyhole, Network, Smartphone, UserRoundCheck } from "lucide-react";

const icons = [Smartphone, UserRoundCheck, LockKeyhole, Network, BatteryCharging];

export default function BiestekTechnicalRequirements() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur md:p-6">
      <div className="max-w-3xl">
        <div className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
          Deployment Stack
        </div>
        <h3 className="mt-2 text-2xl font-bold text-white">Technical requirements</h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          The technology layer is intentionally practical: rugged devices, offline continuity,
          encrypted records, and short training cycles for emergency field teams.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {technicalRequirements.map((item, index) => {
          const Icon = icons[index] ?? Smartphone;

          return (
          <div
            key={item.requirement}
            className="rounded-2xl border border-emerald-500/20 bg-slate-950/65 p-4 shadow-lg shadow-slate-950/20"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-200 ring-1 ring-emerald-400/25">
              <Icon className="h-5 w-5" />
            </div>
            <div className="mt-4 text-sm font-semibold text-white">{item.requirement}</div>
            <div className="mt-2 text-sm leading-6 text-slate-300">{item.specification}</div>
          </div>
          );
        })}
      </div>
    </div>
  );
}
