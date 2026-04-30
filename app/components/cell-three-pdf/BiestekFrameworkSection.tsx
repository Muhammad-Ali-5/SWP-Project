import BiestekPrinciplesCards from "./BiestekPrinciplesCards";
import BiestekSummaryTable from "./BiestekSummaryTable";
import BiestekTechnicalRequirements from "./BiestekTechnicalRequirements";
import { ClipboardCheck, HeartHandshake, ShieldCheck, WifiOff } from "lucide-react";

export default function BiestekFrameworkSection() {
  const highlights = [
    { label: "Principles", value: "7", detail: "Biestek ethics mapped to shelter workflows" },
    { label: "Field Scripts", value: "24/7", detail: "Crisis prompts available for volunteers" },
    { label: "Care Model", value: "Hybrid", detail: "Local support with remote therapist relay" },
  ];

  const workflow = [
    { icon: ClipboardCheck, label: "Assess", text: "Scan child profile and review trauma-safe guidance." },
    { icon: HeartHandshake, label: "Respond", text: "Use calm scripts, choices, and expression tools." },
    { icon: ShieldCheck, label: "Protect", text: "Keep case details private with role-based access." },
    { icon: WifiOff, label: "Continue", text: "Offline-first records keep service moving in low connectivity." },
  ];

  return (
    <section className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white/60 px-4 py-14 shadow-sm md:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(168,85,247,0.16),transparent_30%),radial-gradient(circle_at_82%_8%,rgba(59,130,246,0.14),transparent_28%),radial-gradient(circle_at_72%_86%,rgba(16,185,129,0.1),transparent_28%)]" />
      <div className="pointer-events-none absolute left-0 top-0 h-1 w-full bg-linear-to-r from-purple-600 via-blue-500 to-emerald-500 opacity-70" />

      <div className="relative z-10">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
          <div className="flex min-h-97.5 flex-col justify-between rounded-3xl border border-gray-200 bg-white/80 p-6 shadow-sm md:p-8">
            <div>


              <h2 className="mt-6 max-w-4xl bg-linear-to-r from-purple-700 via-blue-700 to-emerald-700 bg-clip-text text-3xl font-bold leading-tight text-transparent md:text-5xl">
                Biestek&apos;s 7 Principles as a Digital Field Framework
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-700">
                A short field guide that turns casework ethics into QR profiles, scripts,
                expression tools, therapist escalation, and privacy controls.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-gray-200 bg-slate-50 p-4">
                  <div className="text-2xl font-bold text-slate-900">{item.value}</div>
                  <div className="mt-1 text-sm font-semibold text-purple-600">{item.label}</div>
                  <p className="mt-2 text-xs leading-5 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white/80 p-5 md:p-6">
            <div className="flex items-center justify-between gap-4 border-b border-gray-200 pb-5">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                  Shelter Workflow
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  A simple response path for volunteers working under pressure.
                </p>
              </div>
              <div className="hidden h-14 w-14 shrink-0 place-items-center rounded-2xl border border-blue-200 bg-blue-50 text-blue-700 sm:grid">
                <ShieldCheck className="h-7 w-7" />
              </div>
            </div>

            <div className="mt-5 space-y-4">
              {workflow.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="grid grid-cols-[auto_1fr] gap-4 rounded-2xl border border-gray-200 bg-white/70 p-4"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 ring-1 ring-purple-100">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-semibold text-slate-500">
                          0{index + 1}
                        </span>
                        <h3 className="text-base font-semibold text-slate-900">{item.label}</h3>
                      </div>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <BiestekPrinciplesCards />
        </div>

        <div className="mt-12">
          <BiestekSummaryTable />
        </div>

        <div className="mt-12">
          <BiestekTechnicalRequirements />
        </div>
      </div>
    </section>
  );
}
