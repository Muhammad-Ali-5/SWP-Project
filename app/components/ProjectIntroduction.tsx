"use client";

import { motion, Variants } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function ProjectIntroduction() {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const sections = [
    {
      title: "The Historical and Geographic Baseline (< 30 Years)",
      number: "1",
      color: "from-blue-500 to-blue-600",
      accent: "ring-blue-500/25",
      badge: "Baseline",
      content: (
        <div className="space-y-3 text-slate-300 leading-relaxed">
          <p>
            To architect a viable humanitarian response in the Gaza Strip, the operational framework must first acknowledge the geopolitical and historical realities that engineered the current "Systemic Vacuum." This project initiates its data collection baseline in the year 2000, framing a timeline of no more than 30 years.
          </p>
          <p>
            The origins of the current infrastructure collapse trace back to the unfulfilled mandates of the Oslo Accords (1993/1995). Rather than resulting in sovereignty, the decades following Oslo solidified a fractured geography of occupation extending from the Jordan River to the Mediterranean, encompassing the West Bank, the annexed Golan Heights, and culminating in the territorial isolation of the Gaza Strip.
          </p>
        </div>
      ),
    },
    {
      title: "The Era of Intifada: Asymmetric Resistance",
      number: "2",
      color: "from-emerald-500 to-emerald-600",
      accent: "ring-emerald-500/25",
      badge: "Context",
      content: (
        <div className="space-y-3 text-slate-300 leading-relaxed">
          <p>
            The period from 2000 onward was defined by the Intifada (meaning to "shake off"). It is critical to define that the Intifadas were not conventional wars between equal state militaries, but mass civil uprisings against military occupation. This era was characterized by profound asymmetry—best encapsulated by the internationally recognized reality of Palestinian children and youth utilizing stones to resist heavily armored main battle tanks.
          </p>
          <p>
            Israel frequently cited security concerns regarding these uprisings, yet the extreme disparity of force (rocks versus tanks) highlighted a civilian population struggling against systemic, state-level military disenfranchisement rather than a symmetrical threat.
          </p>
        </div>
      ),
    },
    {
      title: "The 1.5-Year Escalation to Genocide (2023–2026)",
      number: "3",
      color: "from-red-500 to-red-600",
      accent: "ring-red-500/25",
      badge: "Escalation",
      content: (
        <div className="space-y-3 text-slate-300 leading-relaxed">
          <p>
            While the struggle spans decades, the primary operational focus of this command center addresses the catastrophic escalation of the last 1.5 to 2 years (October 2023 – April 2026). During this specific timeframe, the theater shifted from military occupation to what international legal experts and UN bodies have characterized as a Genocide.
          </p>
          <p className="font-semibold text-amber-300 bg-amber-900/20 p-3 rounded-lg border border-amber-500/30">
            Relying exclusively on authentic, verified statistics from the World Health Organization (WHO), UN OCHA, UNICEF, and UNOSAT: 72,315 Palestinians have been killed, 81% of all civilian infrastructure has been eradicated, and famine was officially declared in 2025.
          </p>
        </div>
      ),
    },
    {
      title: "The Legal Framework of the Crisis",
      number: "4",
      color: "from-violet-500 to-violet-600",
      accent: "ring-violet-500/25",
      badge: "Law",
      content: (
        <div className="space-y-3 text-slate-300 leading-relaxed">
          <p>
            The humanitarian crisis is not merely a logistical failure; it is a profound legal collapse. This project defines the problem and structures its response by evaluating the crisis through three distinct legal lenses:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex gap-3">
              <span className="text-violet-400 font-bold shrink-0">•</span>
              <span><strong className="text-violet-300">International Humanitarian Law & the UDHR:</strong> Documenting the systematic violation of the 1948 Universal Declaration of Human Rights, specifically the denial of the right to life, shelter, and freedom from collective punishment.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-400 font-bold shrink-0">•</span>
              <span><strong className="text-violet-300">The Laws of Occupation:</strong> Highlighting the failure of the occupying power to provide for the civilian population as mandated by the Fourth Geneva Convention.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-400 font-bold shrink-0">•</span>
              <span><strong className="text-violet-300">Islamic Jurisprudence (Siyar):</strong> Evaluating the destruction through the principles of La Tufsidul Ard (the prohibition of corrupting/destroying the earth and civilian infrastructure) and the strict prohibition of targeting non-combatants, children, and hospitals under Islamic laws of warfare.</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Project Objective: The 3-Cell Command Architecture",
      number: "5",
      color: "from-cyan-500 to-cyan-600",
      accent: "ring-cyan-500/25",
      badge: "Framework",
      content: (
        <div className="space-y-3 text-slate-300 leading-relaxed">
          <p>
            Because physical international law has failed to protect the population, and traditional humanitarian logistics suffer an 86% physical interception rate at the borders, a new framework is required.
          </p>
          <p className="font-semibold mb-3">This project operates as a Macro-Level Executive Command Center, divided into three integrated Cells to bypass the blockades:</p>
          <ul className="space-y-2 ml-4">
            <li className="flex gap-3">
              <span className="text-cyan-400 font-bold shrink-0">→</span>
              <span><strong className="text-cyan-300">Cell 1 (Damage Assessment):</strong> Quantifying the exact physical and human destruction.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-400 font-bold shrink-0">→</span>
              <span><strong className="text-cyan-300">Cell 2 (Logistics & Resources):</strong> Designing the economic engine and digital financial bypasses from Pakistan to Gaza.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-400 font-bold shrink-0">→</span>
              <span><strong className="text-cyan-300">Cell 3 (Implementation):</strong> Engineering a decentralized, vehicle-based Mesh Communication Network to execute "Tele-Social Work" and medical triage without relying on destroyed infrastructure.</span>
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section className="min-h-screen py-24 md:py-28 px-4 md:px-8 lg:px-24 relative border-b border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.10),transparent_30%),linear-gradient(to_bottom,rgba(2,6,23,0.96),rgba(15,23,42,0.92),rgba(2,6,23,0.98))]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,rgba(255,255,255,0.9)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.9)_1px,transparent_1px)] bg-size-[72px_72px]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="relative z-10 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 xl:grid-cols-[0.95fr_1.05fr] gap-10 items-start mb-14">
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-4 py-2 text-xs font-semibold tracking-[0.2em] uppercase text-cyan-300 backdrop-blur-sm">
              Project Introduction
            </div>

            <h2 className="text-4xl  font-black leading-tight text-slate-50 max-w-3xl">
              Project Introduction & Historical Baseline
            </h2>

            <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl">
              <span className="font-semibold text-slate-100">PHC-GAZA</span> is framed as a macro-level humanitarian executive command center, built to connect historical context, crisis law, and operational architecture into a single response model.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
              {[
                { label: "Baseline", value: "2000" },
                { label: "Scope", value: "30 Years" },
                { label: "Focus", value: "2024–2026" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={cardVariants}
                  transition={{ delay: index * 0.08 }}
                >
                  <Card className="border border-white/10 bg-white/5 backdrop-blur-md px-5 py-4 shadow-lg shadow-black/20">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-slate-50">{stat.value}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <Card className="relative overflow-hidden border border-cyan-500/20 bg-slate-950/65 backdrop-blur-xl shadow-2xl shadow-cyan-950/20 rounded-3xl p-8 md:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.10),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.08),transparent_32%)]" />
              <div className="relative space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300 mb-2">Executive Overview</p>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-50">Humanitarian command logic built on layered escalation</h3>
                  </div>
                  <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15 border border-cyan-400/20 text-cyan-300 text-xl">
                    ⌁
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-1">Operational Lens</p>
                    <p className="text-slate-200 leading-relaxed text-sm">Historical baseline, legal framing, logistics, and implementation are treated as connected layers rather than isolated sections.</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-1">Design Intent</p>
                    <p className="text-slate-200 leading-relaxed text-sm">Every phase is positioned as a responsive system component, with motion-driven visual hierarchy and high-contrast presentation.</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Header */}
        <motion.div
          variants={itemVariants}
          className="mb-12 max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-4 md:gap-6 items-stretch">
            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-5 py-4 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.32em] text-cyan-300 mb-1">
                Historical timeline
              </p>
              <p className="text-sm text-slate-200 leading-snug">
                The baseline is anchored to a 30-year operational window.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm md:flex md:items-center">
              <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                <span className="font-semibold text-slate-100">Data Collection Scope:</span> 2000 – April 2026, with emphasis on the 2024–2026 escalation
              </p>
            </div>
          </div>
        </motion.div>

        {/* Sections Grid */}
        <div className="space-y-5 md:space-y-6 relative before:absolute before:left-6 md:before:left-7 before:top-2 before:bottom-2 before:w-px before:bg-linear-to-b before:from-cyan-500/0 before:via-cyan-500/35 before:to-cyan-500/0">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              transition={{ delay: index * 0.08 }}
              className="relative pl-16 md:pl-20"
            >
              <div className="absolute left-0 top-8 flex items-center justify-center">
                <div className={`h-4 w-4 rounded-full bg-linear-to-br ${section.color} ring-8 ${section.accent} shadow-[0_0_24px_rgba(34,211,238,0.25)]`} />
              </div>

              <Card className="relative overflow-hidden border border-white/10 bg-slate-950/65 backdrop-blur-xl shadow-xl shadow-black/20 transition-all duration-300 hover:border-white/20 hover:bg-slate-950/80">
                <div className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${section.color}`} />
                <div className="absolute right-6 top-6 text-[11px] uppercase tracking-[0.22em] text-slate-500">
                  {section.badge}
                </div>

                <div className="p-7 md:p-9">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
                    <div className={`shrink-0 w-14 h-14 rounded-2xl bg-linear-to-br ${section.color} flex items-center justify-center shadow-lg shadow-black/20`}>
                      <span className="text-white font-black text-lg">{section.number}</span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-50 leading-tight max-w-4xl">
                        {section.title}
                      </h3>
                      <div className="h-1 w-20 rounded-full bg-white/10" />
                    </div>
                  </div>

                  <div className="text-[15px] md:text-base">
                    {section.content}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500 mb-2">Structural Summary</p>
              <h4 className="text-xl md:text-2xl font-bold text-slate-50">From historical context to operational architecture</h4>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.9)]" />
              Animated timeline layout
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
