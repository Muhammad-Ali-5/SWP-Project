"use client";

type DamageBarTooltipProps = {
  active?: boolean;
  payload?: Array<{
    value: number;
    payload: { name: string };
  }>;
};

export function DamageBarTooltip({ active, payload }: DamageBarTooltipProps) {
  if (!active || !payload?.length) return null;

  const point = payload[0];

  return (
    <div className="rounded-lg border border-slate-700 bg-slate-950/95 px-3 py-2 shadow-[0_0_18px_rgba(2,6,23,0.7)] backdrop-blur">
      <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">{point.payload.name}</p>
      <p className="mt-1 text-base font-mono font-bold text-cyan-300">{point.value.toLocaleString()} structures</p>
    </div>
  );
}
