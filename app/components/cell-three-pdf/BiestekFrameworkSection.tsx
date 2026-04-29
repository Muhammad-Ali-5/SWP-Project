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
    <section className="relative overflow-hidden rounded-3xl border border-purple-500/20 bg-slate-900/50 px-4 py-14 shadow-2xl shadow-purple-900/10 backdrop-blur-sm md:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(168,85,247,0.16),transparent_30%),radial-gradient(circle_at_82%_8%,rgba(59,130,246,0.14),transparent_28%),radial-gradient(circle_at_72%_86%,rgba(16,185,129,0.1),transparent_28%)]" />
      <div className="pointer-events-none absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-purple-600 via-blue-500 to-emerald-500 opacity-70" />

      <div className="relative z-10">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
          <div className="flex min-h-[390px] flex-col justify-between rounded-3xl border border-purple-500/20 bg-slate-950/45 p-6 shadow-2xl shadow-purple-950/20 backdrop-blur md:p-8">
            <div>


              <h2 className="mt-6 max-w-4xl bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-3xl font-bold leading-tight text-transparent md:text-5xl">
                Biestek&apos;s 7 Principles as a Digital Field Framework
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
                A short field guide that turns casework ethics into QR profiles, scripts,
                expression tools, therapist escalation, and privacy controls.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <div className="text-2xl font-bold text-white">{item.value}</div>
                  <div className="mt-1 text-sm font-semibold text-purple-200">{item.label}</div>
                  <p className="mt-2 text-xs leading-5 text-slate-400">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-blue-500/20 bg-slate-950/35 p-5 backdrop-blur md:p-6">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
                  Shelter Workflow
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  A simple response path for volunteers working under pressure.
                </p>
              </div>
              <div className="hidden h-14 w-14 shrink-0 place-items-center rounded-2xl border border-blue-400/30 bg-blue-500/10 text-blue-200 sm:grid">
                <ShieldCheck className="h-7 w-7" />
              </div>
            </div>

            <div className="mt-5 space-y-4">
              {workflow.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="grid grid-cols-[auto_1fr] gap-4 rounded-2xl border border-white/10 bg-slate-950/45 p-4"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-200 ring-1 ring-purple-400/25">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-semibold text-slate-500">
                          0{index + 1}
                        </span>
                        <h3 className="text-base font-semibold text-white">{item.label}</h3>
                      </div>
                      <p className="mt-1 text-sm leading-6 text-slate-300">{item.text}</p>
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
