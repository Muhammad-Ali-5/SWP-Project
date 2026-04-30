"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import CountUp from "react-countup";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Sector,
  CartesianGrid,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Plane,
  Truck,
  ArrowRight,
  AlertTriangle,
  ShieldCheck,
  Activity,
  Workflow,
  Cpu,
  Landmark,
  Database,
  Ship,
  HeartPulse,
  GraduationCap,
  PackageOpen,
  Wifi,
} from "lucide-react";
import RouteAssessment from "./RouteAssessment";

// Bypass rigid Recharts 3.x generic typings for active props
const TypedPie = Pie as any;

export default function CellTwoLogistics() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [chartsInView, setChartsInView] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const aidData = [
    { name: "NDMA", tons: 2827 },
    { name: "Alkhidmat", tons: 6524 },
  ];

  const allocationData: any[] = [
    { name: "Immediate Rescue", value: 45 },
    { name: "Rehabilitation", value: 35 },
    { name: "Rebuilding", value: 20 },
  ];

  const COLORS = ["#ef4444", "#8b5cf6", "#3b82f6"];

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const renderActiveShape = (props: any) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } =
      props;

    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius + 6}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
          style={{ filter: `drop-shadow(0px 0px 8px ${fill}90)` }}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 10}
          outerRadius={outerRadius + 14}
          fill={fill}
        />
      </g>
    );
  };

  const PieTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-950/95 border border-slate-700 backdrop-blur-md p-3 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.6)] text-center relative z-50">
          <p className="text-slate-300 font-bold uppercase tracking-widest text-[10px] mb-1">
            {payload[0].name}
          </p>
          <p
            className="font-mono text-xl"
            style={{ color: payload[0].payload.fill || "#34d399" }}
          >
            {payload[0].value}%
          </p>
        </div>
      );
    }
    return null;
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-950/95 border border-slate-700 backdrop-blur-md p-4 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.6)]">
          <p className="text-slate-300 font-bold uppercase tracking-wider text-xs mb-1.5">
            {payload[0].payload.name}
          </p>
          <p className="text-emerald-400 font-mono text-xl">
            {payload[0].value.toLocaleString()} Tons
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="w-full max-w-7xl mx-auto space-y-12 pb-16 px-4 md:px-6"
    >
      <motion.div
        variants={itemVariants}
        className="border-l-4 border-emerald-500 pl-5 mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 uppercase tracking-widest glow-text drop-shadow-sm">
          Phase 2: Economic Engine
        </h2>
        <p className="text-slate-400 mt-2 text-sm uppercase tracking-[0.2em] font-mono">
          Logistical Routing // Anticipation Pipeline // The 3 A's
        </p>

      </motion.div>
            <RouteAssessment />

      {/* PANEL 1: THE LOGISTICAL BLUEPRINT */}
      <motion.div variants={itemVariants}>
        <h3 className="text-lg font-bold text-slate-300 mb-6 flex items-center gap-3 font-mono uppercase tracking-widest">
          <Workflow className="w-5 h-5 text-emerald-400" />
          [SYSTEM.LOGISTICS.ROUTING]
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Plan A: Physical Flow */}
          <Card className="bg-slate-900/40 border-rose-500/20 shadow-[0_0_20px_-5px_rgba(244,63,94,0.1)] overflow-hidden backdrop-blur-sm group hover:border-rose-500/40 transition-colors">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-slate-900 via-rose-600 to-slate-900 opacity-50 group-hover:opacity-100 transition-opacity" />
            <CardHeader className="py-4 px-6">
              <CardTitle className="text-rose-400 tracking-wider text-sm font-mono uppercase flex items-center gap-2">
                Plan A_Physical
                <span className="text-[10px] font-mono font-bold bg-rose-500/10 text-rose-300 px-2.5 py-1 rounded border border-rose-500/20 ml-auto animate-pulse">
                  COMPROMISED
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 px-6 pb-6">
              <div className="flex flex-col gap-5 text-slate-300 font-mono text-sm relative border-l-2 border-slate-700/50 pl-6 ml-3">
                <div className="relative">
                  <div className="absolute w-3 h-3 bg-slate-500 rounded-full -left-[32px] top-2 ring-4 ring-slate-900/50" />
                  <div className="flex items-center gap-4 bg-slate-800/40 p-4 rounded-lg border border-slate-700/50">
                    <Plane className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    <div>
                      <p className="text-slate-200 font-bold uppercase text-xs">
                        Pakistan Airports
                      </p>
                      <p className="text-slate-500 text-[11px] mt-1">
                        Origin Staging (KHI, LHE, ISB)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute w-3 h-3 bg-yellow-500/80 rounded-full -left-[32px] top-2 ring-4 ring-slate-900/50 animate-pulse" />
                  <div className="flex items-center gap-4 bg-slate-800/40 p-4 rounded-lg border border-slate-700/50">
                    <Truck className="w-5 h-5 text-yellow-500/80 flex-shrink-0" />
                    <div>
                      <p className="text-yellow-100 font-bold uppercase text-xs">
                        El Arish (Egypt)
                      </p>
                      <p className="text-yellow-600 text-[11px] mt-1">
                        Primary Bottleneck / ERCS Transfer
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute w-4 h-4 bg-rose-600 rounded-full -left-[34px] top-2 ring-4 ring-rose-900/50 shadow-[0_0_12px_rgba(244,63,94,0.6)] animate-pulse" />
                  <div className="flex items-center gap-4 bg-rose-950/40 p-5 rounded-lg border border-rose-500/50 shadow-[0_0_20px_-5px_rgba(244,63,94,0.2)]">
                    <AlertTriangle className="w-6 h-6 text-rose-500 drop-shadow-[0_0_5px_rgba(244,63,94,0.8)] flex-shrink-0" />
                    <div>
                      <p className="text-rose-100 font-bold uppercase text-sm">
                        Rafah Crossings
                      </p>
                      <p className="text-rose-400 text-xs font-semibold mt-1">
                        86% Interception & Failure Rate
                      </p>
                      <p className="text-rose-500/80 text-[10px] mt-1">
                        Only 300 / 2,545 trucks reached destination.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Plan B: Digital Flow */}
          <Card className="bg-slate-900/40 border-emerald-500/20 shadow-[0_0_20px_-5px_rgba(16,185,129,0.1)] overflow-hidden backdrop-blur-sm group hover:border-emerald-500/40 transition-colors">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-slate-900 via-emerald-500 to-slate-900 opacity-50 group-hover:opacity-100 transition-opacity" />
            <CardHeader className="py-4 px-6">
              <CardTitle className="text-emerald-400 tracking-wider text-sm font-mono uppercase flex items-center gap-2">
                Plan B_Digital Bypass
                <span className="text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-300 px-2.5 py-1 rounded border border-emerald-500/20 ml-auto">
                  VIABLE_ROUTE
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 px-6 pb-6">
              <div className="flex flex-col gap-5 text-slate-300 font-mono text-sm relative border-l-2 border-emerald-700/40 pl-6 ml-3">
                <div className="relative">
                  <div className="absolute w-3 h-3 bg-slate-500 rounded-full -left-[32px] top-2 ring-4 ring-slate-900/50" />
                  <div className="flex items-center gap-4 bg-slate-800/40 p-4 rounded-lg border border-slate-700/50">
                    <Activity className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    <div>
                      <p className="text-slate-200 font-bold uppercase text-xs">
                        Command Center
                      </p>
                      <p className="text-slate-500 text-[11px] mt-1">
                        Liquid Capital Allocation
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute w-3 h-3 bg-teal-400 rounded-full -left-[32px] top-2 ring-4 ring-slate-900/50 shadow-[0_0_8px_rgba(45,212,191,0.5)]" />
                  <div className="flex items-center gap-4 bg-teal-950/20 p-4 rounded-lg border border-teal-500/30">
                    <Cpu className="w-5 h-5 text-teal-400 flex-shrink-0" />
                    <div>
                      <p className="text-teal-200 font-bold uppercase text-xs">
                        Web3 / Encrypted Transfer
                      </p>
                      <p className="text-teal-600/80 text-[11px] mt-1">
                        Direct Digital Decentralized Route
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 hover:scale-[1.02] transition-transform cursor-crosshair">
                  <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-[34px] top-2 ring-4 ring-emerald-900/50 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
                  <div className="flex items-center gap-4 bg-emerald-950/40 p-5 rounded-lg border border-emerald-500/50 shadow-[0_0_20px_-5px_rgba(16,185,129,0.2)]">
                    <ShieldCheck className="w-6 h-6 text-emerald-400 drop-shadow-[0_0_5px_rgba(52,211,153,0.8)] flex-shrink-0" />
                    <div>
                      <p className="text-emerald-100 font-bold uppercase text-sm">
                        Local Ground Worker
                      </p>
                      <p className="text-emerald-400 text-xs font-semibold mt-1">
                        Instant Market Purchasing
                      </p>
                      <p className="text-emerald-500/80 text-[10px] mt-1">
                        Bypasses COGAT bottlenecks & interceptions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* PANEL 2: THE ECONOMIC ENGINE & 3 A's */}
      <motion.div variants={itemVariants} className="pt-8">
        <h3 className="text-lg font-bold text-slate-300 mb-6 flex items-center gap-3 font-mono uppercase tracking-widest">
          <Landmark className="w-5 h-5 text-blue-400" />
          [SYSTEM.LOGISTICS.ECONOMICS]
        </h3>

        {/* Global Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-slate-900/60 border border-slate-800 backdrop-blur-md relative overflow-hidden py-6">
            <div className="absolute -inset-10 bg-emerald-500/10 blur-[100px] pointer-events-none" />
            <CardContent className="p-0 text-center flex flex-col items-center justify-center cursor-default">
              <p className="text-slate-400 uppercase tracking-widest text-xs mb-3 font-mono font-bold">
                Total Physical Aid Drafted
              </p>
              <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-emerald-300 to-emerald-600 filter drop-shadow-[0_0_12px_rgba(52,211,153,0.3)]">
                <CountUp
                  end={9351}
                  separator=","
                  duration={3}
                  enableScrollSpy
                  scrollSpyOnce={false}
                />
                <span className="text-2xl md:text-3xl text-emerald-600/50 ml-2 font-mono">
                  MT
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/60 border border-slate-800 backdrop-blur-md relative overflow-hidden py-6">
            <div className="absolute -inset-10 bg-blue-500/10 blur-[100px] pointer-events-none" />
            <CardContent className="p-0 text-center flex flex-col items-center justify-center cursor-default">
              <p className="text-slate-400 uppercase tracking-widest text-xs mb-3 font-mono font-bold">
                Capital Pledged (Liquid)
              </p>
              <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-blue-600 filter drop-shadow-[0_0_12px_rgba(96,165,250,0.3)]">
                <span className="text-2xl md:text-3xl text-blue-600/50 mr-2 font-mono">
                  PKR
                </span>
                <CountUp
                  end={24.5}
                  decimals={1}
                  duration={3}
                  enableScrollSpy
                  scrollSpyOnce={false}
                />
                <span className="text-2xl md:text-3xl text-blue-600/50 ml-2 font-mono">
                  Billion
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts & Tech Strategies */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Assessment Bar Chart */}
          <Card className="lg:col-span-1 bg-slate-900/40 border border-slate-800 backdrop-blur-md p-2 group">
            <CardHeader className="mb-0 pb-3 pt-4 px-4">
              <CardTitle className="text-slate-200 text-sm font-mono tracking-widest uppercase">
                1_Assessment [Physical]
              </CardTitle>
            </CardHeader>
            <CardContent className="h-[220px] w-full px-3 pb-3">
              <motion.div className="w-full h-full" onViewportEnter={() => setChartsInView(true)} viewport={{ once: true, margin: "-50px" }}>
                {chartsInView && (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={aidData}
                      margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                    >
                  <defs>
                    <linearGradient id="barGlow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop
                        offset="100%"
                        stopColor="#064e3b"
                        stopOpacity={0.4}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#1e293b"
                  />
                  <XAxis
                    dataKey="name"
                    stroke="#64748b"
                    tick={{
                      fill: "#94a3b8",
                      fontSize: 11,
                      fontFamily: "monospace",
                    }}
                  />
                  <YAxis
                    stroke="#64748b"
                    tick={{
                      fill: "#94a3b8",
                      fontSize: 11,
                      fontFamily: "monospace",
                    }}
                  />
                  <Tooltip
                    cursor={{ fill: "rgba(255,255,255,0.05)" }}
                    content={<CustomTooltip />}
                  />
                  <Bar
                    dataKey="tons"
                    radius={[4, 4, 0, 0]}
                    isAnimationActive={true}
                    animationDuration={2000}
                  >
                    {aidData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill="url(#barGlow)"
                        style={{
                          filter:
                            "drop-shadow(0px -3px 10px rgba(16,185,129,0.3))",
                        }}
                        className="hover:opacity-80 transition-opacity cursor-pointer"
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
                )}
              </motion.div>
            </CardContent>
          </Card>



          {/* Acquiring Tech Strategy */}
          <Card className="lg:col-span-1 bg-slate-900/40 border border-slate-800 backdrop-blur-md overflow-hidden p-2">
            <CardHeader className="mb-0 pb-3 pt-4 px-4">
              <CardTitle className="text-slate-200 text-sm font-mono tracking-widest uppercase">
                2_Acquiring_Tech
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 px-4 pb-4">
              <div className="bg-slate-950/50 p-3 border border-blue-500/20 rounded-lg hover:border-blue-500/60 hover:bg-blue-500/5 transition-all group cursor-pointer shadow-sm">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="p-1.5 bg-blue-500/10 rounded text-blue-400 group-hover:bg-blue-500/20 transition-all flex-shrink-0">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <h4 className="text-blue-100 font-mono tracking-wider text-xs font-semibold uppercase">
                    Web3 Gateways
                  </h4>
                </div>
                <p className="text-slate-400 text-[11px] leading-snug">
                  Bypassing SWIFT via USDC transfers on low-fee networks for
                  instant global donor capital.
                </p>
              </div>

              <div className="bg-slate-950/50 p-3 border border-purple-500/20 rounded-lg hover:border-purple-500/60 hover:bg-purple-500/5 transition-all group cursor-pointer shadow-sm">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="p-1.5 bg-purple-500/10 rounded text-purple-400 group-hover:bg-purple-500/20 transition-all flex-shrink-0">
                    <Activity className="w-4 h-4" />
                  </div>
                  <h4 className="text-purple-100 font-mono tracking-wider text-xs font-semibold uppercase">
                    B2B CSR Hooks
                  </h4>
                </div>
                <p className="text-slate-400 text-[11px] leading-snug">
                  API integration with corporate giving platforms for automated
                  employee matching.
                </p>
              </div>

              <div className="bg-slate-950/50 p-3 border border-emerald-500/20 rounded-lg hover:border-emerald-500/60 hover:bg-emerald-500/5 transition-all group cursor-pointer shadow-sm">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="p-1.5 bg-emerald-500/10 rounded text-emerald-400 group-hover:bg-emerald-500/20 transition-all flex-shrink-0">
                    <Database className="w-4 h-4" />
                  </div>
                  <h4 className="text-emerald-100 font-mono tracking-wider text-xs font-semibold uppercase">
                    Transparency Ledger
                  </h4>
                </div>
                <p className="text-slate-400 text-[11px] leading-snug">
                  Public dashboard verifying 100% of capital transfer to local
                  ground workers directly.
                </p>
              </div>
            </CardContent>
          </Card>
                    {/* Allocation Donut Chart */}
          <Card className="lg:col-span-1 bg-slate-900/40 border border-slate-800 backdrop-blur-md p-2">
            <CardHeader className="mb-0 pb-2 pt-4 px-4">
              <CardTitle className="text-slate-200 text-sm font-mono tracking-widest uppercase">
                3_Allocation_Pipeline
              </CardTitle>
            </CardHeader>
            <CardContent className="h-[270px] w-full relative pb-3 pt-0">
              <motion.div className="w-full h-full" onViewportEnter={() => setChartsInView(true)} viewport={{ once: true, margin: "-50px" }}>
                {chartsInView && (
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                  <TypedPie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={allocationData}
                    cx="50%"
                    cy="45%"
                    innerRadius={55}
                    outerRadius={85}
                    paddingAngle={4}
                    dataKey="value"
                    stroke="none"
                    onMouseEnter={onPieEnter}
                    isAnimationActive={true}
                    animationDuration={1500}
                    className="cursor-crosshair outline-none"
                  >
                    {allocationData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </TypedPie>
                  <Tooltip content={<PieTooltip />} />
                  <Legend
                    verticalAlign="bottom"
                    height={25}
                    wrapperStyle={{
                      fontSize: "11px",
                      fontFamily: "monospace",
                      color: "#cbd5e1",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
                )}
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* PANEL 3: GRANULAR ASSET TELEMETRY (2-Col Layout) */}
      <motion.div variants={itemVariants} className="pt-8">
        <h3 className="text-lg font-bold text-slate-300 mb-6 flex items-center gap-3 font-mono uppercase tracking-widest">
          <Database className="w-5 h-5 text-indigo-400" />
          [SYSTEM.ASSET.TELEMETRY]
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Active Fleet Corridors */}
          <Card className="bg-slate-900/40 border border-slate-800 backdrop-blur-md group hover:border-indigo-500/50 transition-colors">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-indigo-500/10 rounded text-indigo-400">
                  <Ship className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-indigo-500/70 uppercase tracking-widest font-bold">
                  Fleet Core
                </span>
              </div>
              <h4 className="text-slate-200 font-mono text-sm uppercase mb-4 tracking-wide">
                Transport Modalities
              </h4>
              <ul className="space-y-3 text-slate-400 text-xs font-mono leading-relaxed">
                <li className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-500">Flights:</span>{" "}
                  <span className="text-slate-200 text-right">
                    34 (100-ton capacity)
                  </span>
                </li>
                <li className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-500">Marine Ships:</span>{" "}
                  <span className="text-slate-200 text-right">
                    04 Commercial Freighters
                  </span>
                </li>
                <li className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-500">Trucks:</span>{" "}
                  <span className="text-slate-200 text-right">
                    73 Ground Transports
                  </span>
                </li>
                <li className="flex justify-between pt-1">
                  <span className="text-slate-500">Land Routes:</span>{" "}
                  <span className="text-slate-200 text-right">
                    02 Approved Arteries
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Medical Assets */}
          <Card className="bg-slate-900/40 border border-slate-800 backdrop-blur-md group hover:border-rose-500/50 transition-colors">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-rose-500/10 rounded text-rose-400">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-rose-500/70 uppercase tracking-widest font-bold">
                  Triage Assets
                </span>
              </div>
              <h4 className="text-slate-200 font-mono text-sm uppercase mb-4 tracking-wide">
                Medical Delivery
              </h4>
              <ul className="space-y-6 text-slate-400 text-xs font-mono leading-relaxed">
                <li className="flex items-center gap-4">
                  <span className="text-rose-400 font-black text-3xl w-14">
                    <CountUp
                      end={444}
                      duration={3}
                      enableScrollSpy
                      scrollSpyOnce={false}
                    />
                  </span>
                  <span className="text-slate-300 leading-snug break-words">
                    Tons of essential medicines & surgical supplies transferred
                    to border triage staging zones.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-rose-400 font-black text-3xl w-14 pl-2">
                    <CountUp
                      end={3}
                      duration={3}
                      enableScrollSpy
                      scrollSpyOnce={false}
                    />
                  </span>
                  <span className="text-slate-300 leading-snug">
                    Fully equipped border-adjacent triage ambulances active and
                    operational.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Psychosocial Data */}
          <Card className="bg-slate-900/40 border border-slate-800 backdrop-blur-md group hover:border-amber-500/50 transition-colors">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-amber-500/10 rounded text-amber-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-amber-500/70 uppercase tracking-widest font-bold">
                  Rehab
                </span>
              </div>
              <h4 className="text-slate-200 font-mono text-sm uppercase mb-4 tracking-wide">
                Psychosocial Support
              </h4>
              <ul className="space-y-6 text-slate-400 text-xs font-mono leading-relaxed">
                <li className="flex items-center gap-4">
                  <span className="text-amber-400 font-black text-3xl w-14">
                    <CountUp
                      end={750}
                      duration={3}
                      enableScrollSpy
                      scrollSpyOnce={false}
                    />
                  </span>
                  <span className="text-slate-300 leading-snug">
                    Orphaned children actively receiving $50/month stipends via
                    tracked digital transfers.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-amber-400 font-black text-3xl w-14 pl-2">
                    <CountUp
                      end={2}
                      duration={3}
                      enableScrollSpy
                      scrollSpyOnce={false}
                    />
                  </span>
                  <span className="text-slate-300 leading-snug">
                    Fully operational pop-up tent schools established directly
                    inside the conflict zone.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Systemic Shifts */}
          <Card className="bg-slate-900/40 border border-slate-800 backdrop-blur-md group hover:border-slate-500/50 transition-colors flex flex-col justify-between">
            <CardContent className="p-6 space-y-4">
              <div className="p-4 bg-slate-800/40 rounded-xl border border-slate-700/80 shadow-inner">
                <div className="flex items-center gap-3 mb-2">
                  <PackageOpen className="w-4 h-4 text-slate-300" />
                  <span className="text-xs font-mono text-slate-200 font-bold uppercase">
                    Cargo Typology Shift
                  </span>
                </div>
                <div className="space-y-1.5 text-[11px] font-mono text-slate-400 leading-relaxed">
                  <p>
                    <span className="text-slate-200 font-bold">Initial:</span>{" "}
                    Trauma kits & winterized shelter.
                  </p>
                  <p>
                    <span className="text-slate-200 font-bold">Current:</span>{" "}
                    Prioritizes MREs, dates & canned fruit.
                  </p>
                  <p>
                    <span className="text-rose-400 font-bold">Catalyst:</span>{" "}
                    Total collapse of power grid & absolute lack of potable
                    water required to cook raw grains.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-slate-800/40 rounded-xl border border-slate-700/80 shadow-inner">
                <div className="flex items-center gap-3 mb-2">
                  <Wifi className="w-4 h-4 text-slate-300" />
                  <span className="text-xs font-mono text-slate-200 font-bold uppercase">
                    Ground Routing Networks
                  </span>
                </div>
                <p className="text-[11px] font-mono text-slate-400 leading-relaxed">
                  Saylani (SWT) & Baitussalam executing internal digital capital
                  transfers to effortlessly bypass physical blockades.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </motion.div>
  );
}
