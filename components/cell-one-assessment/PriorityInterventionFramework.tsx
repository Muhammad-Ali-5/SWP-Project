"use client";

import { motion } from "framer-motion";
import { priorityInterventions } from "./data";
import { cardVariants, itemVariants } from "./animations";
import { AlertCircle, CheckCircle2, Zap } from "lucide-react";

const priorityIcons = {
  P1: AlertCircle,
  P2: Zap,
  P3: CheckCircle2,
};

const priorityBgGradients = {
  P1: "bg-linear-to-br from-rose-50 to-red-100",
  P2: "bg-linear-to-br from-amber-50 to-yellow-100",
  P3: "bg-linear-to-br from-cyan-50 to-blue-100",
};

export function PriorityInterventionFramework() {
  return (
    <motion.section variants={cardVariants}  whileInView="visible" viewport={{ once: false, amount: 0.3 }} className="w-full">
      <div className="mb-6 sm:mb-8 border-l-4 border-cyan-500 pl-4 sm:pl-6">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Priority-Based Intervention Framework</h3>
        <p className="mt-2 text-xs sm:text-sm text-slate-600">Life-Saving vs. Life-Sustaining response framework aligned with urgency levels</p>
      </div>

      <div className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-3">
        {priorityInterventions.map((priority, idx) => {
          const IconComponent = priorityIcons[priority.level];

          return (
            <motion.div
              key={priority.level}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className={`group relative overflow-hidden rounded-lg border border-gray-200 transition-all duration-300 ${priorityBgGradients[priority.level]}`}
            >
              {/* Animated gradient overlay on hover */}
              <div className={`absolute inset-0 bg-linear-to-br ${priority.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`} />

              <div className="relative space-y-3 sm:space-y-4 p-4 sm:p-5 lg:p-6">
                {/* Header with icon and level */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-bold text-white text-xs bg-linear-to-br ${priority.color}`}>
                        {priority.level}
                      </span>
                      <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-600">Urgency Level</span>
                    </div>
                    <h4 className={`text-base sm:text-lg font-bold bg-linear-to-r ${priority.color} bg-clip-text text-transparent wrap-break-word`}>{priority.title}</h4>
                  </div>
                  <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 text-slate-500 group-hover:text-slate-700 transition-colors" />
                </div>

                {/* Urgency and timeframe */}
                <div className="space-y-2 border-t border-gray-200 pt-3 sm:pt-4">
                  <div>
                    <p className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-500">Urgency</p>
                    <p className={`text-xs sm:text-sm font-semibold bg-linear-to-r ${priority.color} bg-clip-text text-transparent`}>{priority.urgency}</p>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-500">Timeframe</p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800">{priority.timeframe}</p>
                  </div>
                </div>

                {/* Focus area */}
                <div className="border-t border-gray-200 pt-3 sm:pt-4">
                  <p className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-500 mb-2">Focus</p>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-700">{priority.focus}</p>
                </div>

                {/* Details sections */}
                <div className="border-t border-gray-200 pt-3 sm:pt-4 space-y-3 sm:space-y-4">
                  {priority.details.map((detail) => (
                    <motion.div
                      key={detail.heading}
                      className="space-y-2"
                      initial={{ opacity: 0, y: 4 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                      viewport={{ once: false }}
                    >
                      <p className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-linear-to-r ${priority.color} bg-clip-text text-transparent`}>
                        {detail.heading}
                      </p>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {detail.points.map((point, pointIdx) => (
                          <li key={pointIdx} className="flex gap-2 text-[11px] sm:text-xs text-slate-600 leading-snug sm:leading-relaxed">
                            <span className={`mt-1 sm:mt-1.5 shrink-0 h-1 w-1 rounded-full bg-linear-to-r ${priority.color}`} />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>

                {/* Status indicator */}
                <div className="border-t border-gray-200 pt-3 sm:pt-4 flex items-center gap-2">
                  <div className={`h-2 flex-1 rounded-full bg-linear-to-r ${priority.color}`} />
                  <span className="text-[10px] sm:text-xs text-slate-500 font-medium">Active Framework</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Summary footer */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="mt-6 sm:mt-8 rounded-lg border border-gray-200 bg-white p-4 sm:p-6"
      >
        <div className="grid gap-3 sm:gap-4 grid-cols-1 md:grid-cols-3">
          <div>
            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-500 mb-1 sm:mb-2">Framework Principle</p>
            <p className="text-xs sm:text-sm font-semibold text-slate-900">Life-Saving vs. Life-Sustaining</p>
          </div>
          <div>
            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-500 mb-1 sm:mb-2">Coverage</p>
            <p className="text-xs sm:text-sm font-semibold text-slate-900">3 Priority Levels</p>
          </div>
          <div>
            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-500 mb-1 sm:mb-2">Total Timeframe</p>
            <p className="text-xs sm:text-sm font-semibold text-slate-900">0–72 hours → Years</p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
