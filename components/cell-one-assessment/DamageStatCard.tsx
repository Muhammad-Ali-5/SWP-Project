"use client";

import { motion } from "framer-motion";
import { itemVariants } from "./animations";

type DamageStatCardProps = {
  label: string;
  value: string;
  meta?: string;
};

export function DamageStatCard({ label, value, meta }: DamageStatCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -3, scale: 1.02 }}
      className="min-w-42.5 flex-1 rounded-xl border border-slate-800 bg-slate-900/70 p-4 shadow-lg shadow-black/10"
    >
      <div className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
        {value}
        {meta ? <span className="ml-2 text-sm font-semibold text-cyan-300">{meta}</span> : null}
      </div>
      <div className="mt-2 text-xs uppercase tracking-[0.28em] text-slate-400">{label}</div>
    </motion.div>
  );
}
