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
      title: "The 30-Year History & Root Causes",
      number: "01",
      color: "from-blue-500/20 to-cyan-500/10",
      borderColor: "border-blue-500/40",
      textColor: "text-blue-300",
      gradient: "from-blue-500 via-cyan-500 to-blue-600",
      icon: "📚",
      badge: "Historical Context",
      content: (
        <div className="space-y-4 text-slate-300 leading-relaxed">
          <p>
            This crisis traces back to the unfulfilled promises of the Oslo Accords in the 1990s. Instead of bringing peace, those agreements solidified a fractured geography, separating the West Bank, annexing the Golan Heights, and completely isolating the Gaza Strip.
          </p>
          <p>
            From the year 2000 onward, the region was defined by the Intifadas. This was an era of extreme asymmetry—a reality where Palestinian youth utilized stones to resist heavily armored main battle tanks. 
          </p>
          <p>
            The true logistical nightmare began in 2007 with a complete military blockade. For nearly two decades, the flow of food, water, and medicine was strictly choked, resulting in the systematic de-development of an entire society.
          </p>
        </div>
      ),
    },
    {
      title: "The Current Reality (2024–2026)",
      number: "02",
      color: "from-rose-500/20 to-red-500/10",
      borderColor: "border-rose-500/40",
      textColor: "text-rose-300",
      gradient: "from-rose-500 via-red-500 to-rose-600",
      icon: "⚠️",
      badge: "Crisis Baseline",
      content: (
        <div className="space-y-4 text-slate-300 leading-relaxed">
          <p>
            All of this history has culminated in a catastrophic escalation. Based on verified statistics from the UN, WHO, and UNOSAT, the reality on the ground is staggering:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-200 font-medium">
            <li>Over 72,000 Palestinians have been killed.</li>
            <li>81% of all civilian structures are destroyed, including 94% of primary hospitals.</li>
            <li>1.9 million people (90% of the population) are displaced.</li>
            <li>Famine is officially declared, with water access at just 3 liters per person per day.</li>
          </ul>
          <p>
            This represents a complete collapse of global law, including the Universal Declaration of Human Rights and Islamic Jurisprudence (La Tufsidul Ard).
          </p>
        </div>
      ),
    },
    {
      title: "The Logistical Bottleneck",
      number: "03",
      color: "from-amber-500/20 to-orange-500/10",
      borderColor: "border-amber-500/40",
      textColor: "text-amber-300",
      gradient: "from-amber-500 via-orange-500 to-amber-600",
      icon: "🚛",
      badge: "Systemic Failure",
      content: (
        <div className="space-y-4 text-slate-300 leading-relaxed">
          <p>
            Understanding the history was only step one. We had to answer: <strong>How do we actually deliver aid when the laws have failed and the system is broken?</strong>
          </p>
          <p>
            Mapping the physical supply routes from Pakistan to Egypt and Jordan revealed a terrifying statistic:
          </p>
          <div className="bg-gradient-to-r from-amber-500/15 to-orange-500/15 border border-amber-500/30 p-4 rounded-xl my-4 text-center backdrop-blur-sm">
            <span className="text-3xl font-bold text-amber-300">86%</span>
            <p className="text-amber-200 mt-2">Of physical aid trucks entering Gaza fail to reach the people.</p>
          </div>
          <p>
            Furthermore, 77% of all internal roads are destroyed. We realized immediately that sending more physical trucks is a failed strategy.
          </p>
        </div>
      ),
    },
    {
      title: "Our Solution: The 3 Cells",
      number: "04",
      color: "from-emerald-500/20 to-green-500/10",
      borderColor: "border-emerald-500/40",
      textColor: "text-emerald-300",
      gradient: "from-emerald-500 via-cyan-500 to-emerald-600",
      icon: "⚡",
      badge: "Executive Architecture",
      content: (
        <div className="space-y-4 text-slate-300 leading-relaxed">
          <p>
            Because physical logistics are failing, we engineered a completely new 3-part Command Center to bypass the blockades:
          </p>
          <ul className="space-y-3">
            <li className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 p-4 rounded-xl border border-emerald-500/30 hover:border-emerald-500/50 transition-all duration-300">
              <strong className="text-emerald-300">Cell 1: Damage Assessment.</strong> Identified 19,000 orphaned children (WCNSF). Determined that our absolute priority is Immediate Rescue and medical triage, not long-term rebuilding.
            </li>
            <li className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 p-4 rounded-xl border border-emerald-500/30 hover:border-emerald-500/50 transition-all duration-300">
              <strong className="text-emerald-300">Cell 2: Logistics & The Digital Bypass.</strong> Because 86% of trucks fail, we use Web3/stablecoins to send liquid capital directly to verified social workers inside Gaza, completely skipping border guards.
            </li>
            <li className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 p-4 rounded-xl border border-emerald-500/30 hover:border-emerald-500/50 transition-all duration-300">
              <strong className="text-emerald-300">Cell 3: Van-Based Mesh Network.</strong> To solve the communication gap, mobile vans act as moving internet routers, bouncing signals to satellite gateways so volunteers can coordinate rescues without cell towers.
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section className="relative w-full bg-[#020617] overflow-hidden font-sans">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative">
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center px-2 sm:px-4 py-8 lg:py-10 min-h-[80vh]"
        >
          <div className="text-center max-w-5xl w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 mb-8 backdrop-blur-sm hover:border-cyan-500/60 transition-colors"
            >
              <motion.span 
                className="w-2 h-2 rounded-full bg-cyan-400" 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-medium text-cyan-300 uppercase tracking-wider">PHC-GAZA Command Center</span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Executive <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Framework</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
              A macro-level technological system designed to deliver humanitarian aid into war zones where traditional methods have completely failed.
            </p>
          </div>
        </motion.div>

        {/* Content Sections */}
        <div className="flex flex-col space-y-0">
          {sections.map((section, index) => (
            <motion.div
              key={section.number}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center px-2 sm:px-3 py-8 lg:py-10 min-h-[85vh]"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative w-full max-w-6xl group">
                {/* Gradient Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${section.gradient} opacity-0 group-hover:opacity-15 rounded-2xl blur-2xl transition-opacity duration-500`} />
                
                {/* Card */}
                <Card className={`relative bg-gradient-to-br ${section.color} backdrop-blur-xl ${section.borderColor} border overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.8)] transition-all duration-500`}>
                  {/* Top Accent Bar */}
                  <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${section.gradient}`} />
                  
                  <div className="p-6 lg:p-8 space-y-4">
                    {/* Header with Icon and Badge */}
                    <motion.div 
                      className="flex items-start justify-between gap-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center gap-6">
                        <motion.div 
                          className={`text-4xl p-3 rounded-xl bg-gradient-to-br ${section.gradient} opacity-100`}
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          {section.icon}
                        </motion.div>
                        <div>
                          <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                            Section {section.number}
                          </div>
                        </div>
                      </div>
                      <motion.span 
                        className={`text-xs font-bold uppercase tracking-widest ${section.textColor} bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent px-4 py-2 rounded-full border ${section.borderColor} backdrop-blur-sm whitespace-nowrap`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {section.badge}
                      </motion.span>
                    </motion.div>

                    {/* Title */}
                    <motion.h3 
                      className={`text-3xl lg:text-4xl font-bold text-slate-50 group-hover:${section.textColor} transition-colors duration-300 leading-tight`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      {section.title}
                    </motion.h3>
                    
                    {/* Content */}
                    <motion.div 
                      className="prose prose-invert prose-base max-w-none"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {section.content}
                    </motion.div>
                  </div>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}