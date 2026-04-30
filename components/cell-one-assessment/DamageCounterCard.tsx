"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { itemVariants } from "./animations";

type DamageCounterCardProps = {
  label: string;
  end: number;
  decimals?: number;
  separator?: string;
  suffix?: string;
  meta?: string;
};

export function DamageCounterCard({
  label,
  end,
  decimals,
  separator,
  suffix,
  meta,
}: DamageCounterCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -3, scale: 1.02 }}
      className="min-w-42.5 flex-1 rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
    >
      <div className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">
        <CountUp
          end={end}
          duration={2.2}
          decimals={decimals ?? 0}
          separator={separator ?? ""}
          suffix={suffix ?? ""}
          enableScrollSpy
          scrollSpyOnce={false}
        />
        {meta ? <span className="ml-2 text-sm font-semibold text-cyan-700">{meta}</span> : null}
      </div>
      <div className="mt-2 text-xs uppercase tracking-[0.28em] text-slate-500">{label}</div>
    </motion.div>
  );
}
