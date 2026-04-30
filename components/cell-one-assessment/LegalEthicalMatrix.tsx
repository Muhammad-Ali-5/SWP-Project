"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { cardVariants, itemVariants } from "./animations";
import { islamicPrinciples, legalSignalMeters, legalSummaryStats, udhrRows } from "./data";

export function LegalEthicalMatrix() {
  return (
    <motion.section
      variants={cardVariants}
      // initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="rounded-xl border border-gray-200 bg-white/95 p-2 md:p-8 shadow-sm"
    >
      <div className="mb-6 flex flex-col gap-4 border-b border-gray-200 pb-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-700">UDHR vs Islamic Law Matrix</p>
          <h3 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">Legal &amp; Ethical Violations Matrix</h3>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            A structured comparison of human-rights articles and Islamic legal principles against documented violations.
          </p>
        </div>
        <div className="w-fit rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700">
          Animated row cards
        </div>
      </div>

      <div className="space-y-4">
        <motion.div variants={itemVariants} className="rounded-xl border border-cyan-100 bg-cyan-50/60 p-4">
          <div className="flex flex-wrap gap-3 text-xs">
            <span className="rounded-full border border-gray-200 bg-white px-3 py-1 text-slate-700">72,315 killed</span>
            <span className="rounded-full border border-cyan-100 bg-white px-3 py-1 text-slate-700">172,137 injured</span>
            <span className="rounded-full border border-cyan-100 bg-white px-3 py-1 text-slate-700">1.9M displaced</span>
            <span className="rounded-full border border-cyan-100 bg-white px-3 py-1 text-slate-700">81% structures damaged</span>
            <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-amber-700">Famine confirmed (Aug 2025)</span>
          </div>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-[1.1fr_1.4fr]">
          <motion.div variants={itemVariants} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-700">Legal Snapshot</h4>
              <span className="text-xs text-slate-500">Animated counters</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {legalSummaryStats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -2 }}
                  className="rounded-lg border border-gray-200 bg-slate-50 p-3"
                >
                  <p className="text-lg font-bold text-cyan-300">
                    <CountUp
                      end={stat.end}
                      duration={2}
                      decimals={stat.decimals ?? 0}
                      suffix={stat.suffix}
                      enableScrollSpy
                      scrollSpyOnce={false}
                    />
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-700">Rights Stress Signals</h4>
              <span className="text-xs text-slate-500">High impact indicators</span>
            </div>
            <div className="space-y-3">
              {legalSignalMeters.map((meter, idx) => (
                <div key={meter.label}>
                  <div className="mb-1 flex items-center justify-between text-xs text-slate-700">
                    <span>{meter.label}</span>
                    <span className="font-semibold text-slate-900">{meter.value}%</span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-slate-200">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${meter.value}%` }}
                      viewport={{ once: false, amount: 0.7 }}
                      transition={{ duration: 0.8, delay: idx * 0.06, ease: "easeOut" }}
                      className={`h-full rounded-full bg-linear-to-r ${meter.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-700">UDHR Violations Matrix</h4>
            <span className="text-xs text-slate-500">Article, principle, source, and documented violation</span>
          </div>

          <div className="space-y-3">
            {udhrRows.map((row, index) => (
              <motion.div
                key={row.article}
                variants={itemVariants}
                initial={{ opacity: 0, x: index % 2 === 0 ? -18 : 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                whileHover={{ y: -2, scale: 1.005 }}
                className="rounded-lg border border-gray-200 bg-slate-50 p-4 transition-colors hover:border-cyan-300"
              >
                <div className="md:flex space-y-2 items-start gap-3">
                    <div className="w-20 shrink-0 rounded-md border border-cyan-100 bg-cyan-50 px-2 py-1 text-center text-xs font-semibold text-cyan-700">
                    {row.article}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                      <h5 className="text-sm font-semibold text-white">{row.principle}</h5>
                      <span className="text-[11px] uppercase tracking-[0.2em] text-cyan-700">{row.source}</span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{row.violation}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-700">Islamic Law Principles</h4>
            <span className="text-xs text-slate-500">Principle, source, and violation summary</span>
          </div>

          <div className="space-y-3">
            {islamicPrinciples.map((item, index) => (
              <motion.div
                key={item.principle}
                variants={itemVariants}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -2 }}
                className="rounded-lg border border-gray-200 bg-slate-50 p-4 transition-colors hover:border-cyan-300"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-400" />
                  <div className="min-w-0 flex-1">
                    <h5 className="text-sm font-semibold text-slate-900">{item.principle}</h5>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-cyan-700">{item.source}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.violation}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
