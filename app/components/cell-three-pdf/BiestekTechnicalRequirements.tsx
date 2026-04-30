import { technicalRequirements } from "./data";
import { BatteryCharging, LockKeyhole, Network, Smartphone, UserRoundCheck } from "lucide-react";

const icons = [Smartphone, UserRoundCheck, LockKeyhole, Network, BatteryCharging];

export default function BiestekTechnicalRequirements() {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white/90 p-5 md:p-6">
      <div className="max-w-3xl">
        <div className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">
          Deployment Stack
        </div>
        <h3 className="mt-2 text-2xl font-bold text-slate-900">Technical requirements</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">
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
            className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
              <Icon className="h-5 w-5" />
            </div>
            <div className="mt-4 text-sm font-semibold text-slate-900">{item.requirement}</div>
            <div className="mt-2 text-sm leading-6 text-slate-600">{item.specification}</div>
          </div>
          );
        })}
      </div>
    </div>
  );
}
