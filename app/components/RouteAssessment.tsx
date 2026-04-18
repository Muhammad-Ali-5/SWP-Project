"use client";

import { motion, Variants } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function RouteAssessment() {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const mapVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const pathVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  const pulseVariants: Variants = {
    hidden: { scale: 1, opacity: 0.3 },
    visible: {
      scale: [1, 1.3, 1],
      opacity: [0.8, 0.3, 0.8],
      transition: { duration: 2.5, repeat: Infinity },
    },
  };

  return (
    <section className="py-20   relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent leading-tight">
            Route Assessment & Logistics Network
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full" />
          <p className="text-slate-400 text-lg mt-8 max-w-2xl mx-auto">
            Establishing secure humanitarian corridors from South Asia through Egypt to Gaza
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Strategic Information */}
          <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6">
            {/* Card 1: Route Overview */}
            <Card className="bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-cyan-500/30 backdrop-blur-lg p-8 hover:border-cyan-400/50 transition-all duration-300 shadow-2xl shadow-cyan-900/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-cyan-500/20 rounded-lg">
                  <span className="text-2xl">🗺️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cyan-300">Primary Route</h3>
                  <p className="text-xs text-cyan-200/60">Pakistan → Egypt → Gaza</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2 items-center text-slate-300">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                  Rafah Crossing Point
                </li>
                <li className="flex gap-2 items-center text-slate-300">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                  Established Corridors
                </li>
                <li className="flex gap-2 items-center text-slate-300">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                  Real-time Verification
                </li>
              </ul>
            </Card>

            {/* Card 2: Secondary Routes */}
            <Card className="bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-emerald-500/30 backdrop-blur-lg p-8 hover:border-emerald-400/50 transition-all duration-300 shadow-2xl shadow-emerald-900/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-emerald-500/20 rounded-lg">
                  <span className="text-2xl">⛴️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-emerald-300">Maritime Routes</h3>
                  <p className="text-xs text-emerald-200/60">Mediterranean Corridors</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2 items-center text-slate-300">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                  High-value Supplies
                </li>
                <li className="flex gap-2 items-center text-slate-300">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                  Medical Equipment
                </li>
                <li className="flex gap-2 items-center text-slate-300">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                  Emergency Response
                </li>
              </ul>
            </Card>

            {/* Card 3: Critical Challenge */}
            <Card className="bg-gradient-to-br from-red-900/20 to-orange-900/10 border border-orange-500/30 backdrop-blur-lg p-8 shadow-2xl shadow-orange-900/10">
              <div className="flex items-start gap-3">
                <span className="text-3xl">⚠️</span>
                <div>
                  <p className="font-bold text-orange-300 mb-2">Blockade Challenge</p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    86% interception rate at borders requires decentralized micro-logistics nodes and digital financial channels
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Right Column - Map */}
          <motion.div variants={mapVariants} className="lg:col-span-2">
            <Card className="bg-slate-900/60 border border-blue-500/40 backdrop-blur-lg overflow-hidden shadow-2xl shadow-blue-900/30">
              <svg
                viewBox="0 0 600 500"
                className="w-full h-auto bg-gradient-to-br from-slate-800 via-blue-900/30 to-slate-900"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="egyptGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#475569" />
                    <stop offset="100%" stopColor="#334155" />
                  </linearGradient>
                  <linearGradient id="gazaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#991b1b" />
                    <stop offset="100%" stopColor="#7c2d12" />
                  </linearGradient>
                  <linearGradient id="seaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0f172a" />
                    <stop offset="100%" stopColor="#1e293b" />
                  </linearGradient>
                  <filter id="nodeShadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="0" stdDeviation="3" floodOpacity="0.5" />
                  </filter>
                </defs>

                {/* Sea Background */}
                <rect width="600" height="500" fill="url(#seaGrad)" />

                {/* Decorative Grid */}
                <g opacity="0.05" stroke="#00bcd4" strokeWidth="1">
                  <line x1="0" y1="50" x2="600" y2="50" />
                  <line x1="0" y1="100" x2="600" y2="100" />
                  <line x1="0" y1="150" x2="600" y2="150" />
                  <line x1="0" y1="200" x2="600" y2="200" />
                  <line x1="0" y1="250" x2="600" y2="250" />
                  <line x1="0" y1="300" x2="600" y2="300" />
                  <line x1="0" y1="350" x2="600" y2="350" />
                  <line x1="0" y1="400" x2="600" y2="400" />
                  <line x1="0" y1="450" x2="600" y2="450" />
                  <line x1="100" y1="0" x2="100" y2="500" />
                  <line x1="200" y1="0" x2="200" y2="500" />
                  <line x1="300" y1="0" x2="300" y2="500" />
                  <line x1="400" y1="0" x2="400" y2="500" />
                  <line x1="500" y1="0" x2="500" y2="500" />
                </g>

                {/* Egypt Region */}
                <motion.g
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <polygon
                    points="50,100 120,95 130,250 115,260 45,255"
                    fill="url(#egyptGrad)"
                    stroke="#64748b"
                    strokeWidth="2"
                    filter="url(#nodeShadow)"
                  />
                  <text x="85" y="180" fill="#cbd5e1" fontSize="14" fontWeight="bold" textAnchor="middle">
                    EGYPT
                  </text>
                </motion.g>

                {/* Gaza Region */}
                <motion.g
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <polygon
                    points="150,110 200,105 210,260 195,270 145,265"
                    fill="url(#gazaGrad)"
                    stroke="#ea580c"
                    strokeWidth="2.5"
                    filter="url(#nodeShadow)"
                  />
                  <text x="177" y="190" fill="#fbbf24" fontSize="14" fontWeight="bold" textAnchor="middle">
                    GAZA
                  </text>
                </motion.g>

                {/* Pakistan Supply Hub */}
                <motion.g
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <circle cx="450" cy="80" r="35" fill="#10b981" opacity="0.2" stroke="#10b981" strokeWidth="2.5" />
                  <circle
                    cx="450"
                    cy="80"
                    r="35"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    opacity="0.5"
                  />
                  <text x="450" y="88" fill="#86efac" fontSize="12" fontWeight="bold" textAnchor="middle">
                    PAKISTAN
                  </text>
                </motion.g>

                {/* Primary Route: Pakistan → Rafah */}
                <motion.path
                  d="M 420,110 Q 280,120 130,180"
                  stroke="#06b6d4"
                  strokeWidth="2.5"
                  fill="none"
                  strokeDasharray="6,3"
                  variants={pathVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                />

                {/* Secondary Maritime Route */}
                <motion.path
                  d="M 450,115 Q 300,200 180,240"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="8,4"
                  variants={pathVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  opacity="0.7"
                />

                {/* Rafah Crossing Point */}
                <motion.circle
                  cx="130"
                  cy="180"
                  r="12"
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="2.5"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 1.8, duration: 0.4 }}
                  viewport={{ once: true }}
                  filter="url(#nodeShadow)"
                />
                <motion.circle
                  cx="130"
                  cy="180"
                  r="12"
                  fill="#06b6d4"
                  opacity="0.3"
                  variants={pulseVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                />

                {/* Destination Gaza Port */}
                <motion.circle
                  cx="177"
                  cy="190"
                  r="14"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="3"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 2, duration: 0.4 }}
                  viewport={{ once: true }}
                  filter="url(#nodeShadow)"
                />
                <motion.circle
                  cx="177"
                  cy="190"
                  r="14"
                  fill="#ef4444"
                  opacity="0.2"
                  variants={pulseVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                />

                {/* Supply Source Node */}
                <motion.circle
                  cx="450"
                  cy="80"
                  r="10"
                  fill="#10b981"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  viewport={{ once: true }}
                  filter="url(#nodeShadow)"
                />

                {/* Route Labels */}
                <motion.g
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 2.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <rect x="80" y="135" width="90" height="25" fill="rgba(6, 182, 212, 0.15)" rx="4" stroke="#06b6d4" strokeWidth="1" />
                  <text x="125" y="153" fill="#06b6d4" fontSize="11" fontWeight="bold" textAnchor="middle">
                    RAFAH CROSSING
                  </text>
                </motion.g>

                {/* Legend Box */}
                <motion.g
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.8, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <rect x="20" y="350" width="220" height="130" fill="rgba(15, 23, 42, 0.9)" stroke="#475569" strokeWidth="1.5" rx="8" />
                  <text x="130" y="370" fill="#06b6d4" fontSize="12" fontWeight="bold" textAnchor="middle">
                    LOGISTICS ROUTES
                  </text>

                  <line x1="30" y1="380" x2="55" y2="380" stroke="#06b6d4" strokeWidth="2" strokeDasharray="6,3" />
                  <text x="65" y="385" fill="#cbd5e1" fontSize="9">
                    Primary Route
                  </text>

                  <line x1="30" y1="400" x2="55" y2="400" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="8,4" />
                  <text x="65" y="405" fill="#cbd5e1" fontSize="9">
                    Maritime Route
                  </text>

                  <circle cx="42" cy="420" r="3.5" fill="#10b981" />
                  <text x="65" y="425" fill="#cbd5e1" fontSize="9">
                    Supply Hub
                  </text>

                  <circle cx="42" cy="440" r="5" fill="none" stroke="#ef4444" strokeWidth="1.5" />
                  <text x="65" y="445" fill="#cbd5e1" fontSize="9">
                    Destination
                  </text>

                  <circle cx="42" cy="460" r="4" fill="none" stroke="#06b6d4" strokeWidth="1.5" />
                  <text x="65" y="465" fill="#cbd5e1" fontSize="9">
                    Key Junction
                  </text>
                </motion.g>
              </svg>
            </Card>
          </motion.div>
        </div>

        {/* Bottom KPIs */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: "📊",
              metric: "86%",
              label: "Interception Rate",
              color: "from-red-500/20 to-orange-500/10 border-orange-500/30",
            },
            {
              icon: "🔄",
              metric: "3",
              label: "Primary Route Nodes",
              color: "from-cyan-500/20 to-blue-500/10 border-cyan-500/30",
            },
            {
              icon: "⚡",
              metric: "Real-Time",
              label: "Active Monitoring",
              color: "from-emerald-500/20 to-green-500/10 border-emerald-500/30",
            },
          ].map((kpi, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              viewport={{ once: true }}
            >
              <Card className={`bg-gradient-to-br ${kpi.color} backdrop-blur-lg p-8 text-center border shadow-lg`}>
                <div className="text-4xl mb-3">{kpi.icon}</div>
                <p className="text-2xl md:text-3xl font-bold text-slate-50 mb-2">{kpi.metric}</p>
                <p className="text-slate-400 text-sm">{kpi.label}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
