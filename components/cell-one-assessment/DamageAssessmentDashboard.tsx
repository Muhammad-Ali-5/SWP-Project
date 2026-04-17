"use client";

import { motion } from "framer-motion";
import { Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import type { ChartConfig } from "@/components/ui/chart";
import { cardVariants, itemVariants } from "./animations";
import {
  damageBreakdown,
  damageChartData,
  damageStats,
  infrastructureHighlights,
  TOTAL_STRUCTURES,
} from "./data";
import { DamageCounterCard } from "./DamageCounterCard";
import { DamageStatCard } from "./DamageStatCard";
import { DamageBarTooltip } from "./DamageBarTooltip";

const damageChartConfig = {
  value: { label: "Affected Structures", color: "#38bdf8" },
} satisfies ChartConfig;

export function DamageAssessmentDashboard() {
  return (
    <motion.section
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="rounded-xl border border-slate-800 w-full bg-slate-950/90 p-2 md:p-8 shadow-xl shadow-blue-950/20"
    >
      <div className="mb-6 flex flex-col gap-4 border-b border-slate-800 pb-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">Damage Assessment Dashboard</p>
          <h3 className="mt-2 text-2xl md:text-3xl font-bold text-white">Damage Assessment Overview (2000-2026)</h3>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
            Longitudinal structural loss, displacement, and service collapse extracted from the humanitarian report.
          </p>
        </div>
        <div className="w-fit rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
          Factual baseline
        </div>
      </div>

      <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
        {damageStats.map((stat) => (
          typeof stat.end === "number" ? (
            <DamageCounterCard
              key={stat.label}
              label={stat.label}
              end={stat.end}
              decimals={stat.decimals}
              separator={stat.separator}
              suffix={stat.suffix}
              meta={stat.meta}
            />
          ) : (
            <DamageStatCard key={stat.label} label={stat.label} value={stat.value ?? ""} />
          )
        ))}
      </motion.div>

      <div className="mt-8 flex flex-col gap-6 lg:flex-row">
        <motion.div variants={itemVariants} className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 md:p-5 lg:flex-[1.1]">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-200">Structural damage chart</h4>
            <span className="text-xs text-slate-400">198,273 affected structures</span>
          </div>

          <ChartContainer
            config={damageChartConfig}
            className="h-70 w-full [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-transparent"
          >
            <BarChart data={damageChartData} margin={{ top: 12, right: 8, left: -16, bottom: 0 }}>
              <defs>
                <linearGradient id="damageGlow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#0f172a" stopOpacity={0.35} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} />
              <YAxis tickLine={false} axisLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} />
              <Tooltip content={<DamageBarTooltip />} cursor={false} />
              <Bar dataKey="value" radius={[8, 8, 0, 0]} isAnimationActive animationDuration={1700} activeBar={false}>
                {damageChartData.map((entry) => (
                  <Cell key={entry.name} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ChartContainer>
        </motion.div>

        <motion.div variants={itemVariants} className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 md:p-5 lg:w-[320px] lg:flex-none">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-200">Damage mix</h4>
            <span className="text-xs text-slate-400">Share of affected stock</span>
          </div>

          <div className="mx-auto h-55 w-full max-w-65">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={damageChartData} dataKey="value" nameKey="name" innerRadius={64} outerRadius={92} paddingAngle={4}>
                  {damageChartData.map((entry) => (
                    <Cell key={entry.name} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => (typeof value === "number" ? value.toLocaleString() : value ?? "")}
                  contentStyle={{
                    backgroundColor: "#020617",
                    border: "1px solid rgba(30, 41, 59, 1)",
                    borderRadius: "0.75rem",
                    color: "#e2e8f0",
                  }}
                  labelStyle={{ color: "#94a3b8" }}
                  itemStyle={{ color: "#e2e8f0" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-4 space-y-2">
            {damageChartData.map((item) => (
              <div key={item.name} className="flex items-center justify-between gap-3 rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-300">
                <span className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.fill }} />
                  {item.name}
                </span>
                <span className="font-medium text-white">{item.value.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mt-8 space-y-4">
        <motion.div variants={itemVariants} className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 md:p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-200">Structural damage breakdown</h4>
            <span className="text-xs text-slate-400">Total: {TOTAL_STRUCTURES.toLocaleString()} structures</span>
          </div>

          <div className="space-y-3">
            {damageBreakdown.map((item) => {
              const percentage = (item.value / TOTAL_STRUCTURES) * 100;

              return (
                <div key={item.label}>
                  <div className="mb-1 flex items-center justify-between text-xs text-slate-300">
                    <span>{item.label}</span>
                    <span>{item.value.toLocaleString()} structures</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-slate-800">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${percentage}%` }}
                      viewport={{ once: false, amount: 0.6 }}
                      transition={{ duration: 0.9, ease: "easeOut" }}
                      className={`h-full rounded-full bg-linear-to-r ${item.color}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <div className="flex flex-col gap-4 md:flex-row">
          {infrastructureHighlights.map((block) => (
            <motion.div
              key={block.title}
              variants={itemVariants}
              whileHover={{ y: -2 }}
              className="flex-1 rounded-xl border border-slate-800 bg-slate-900/70 p-4 md:p-5"
            >
              <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">{block.title}</div>
              <ul className="space-y-2 text-sm text-slate-300">
                {block.stats.map((stat) => (
                  <li key={stat} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    <span>{stat}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
