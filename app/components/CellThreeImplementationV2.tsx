"use client";

import { motion, Variants } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function CellThreeImplementation() {
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

  const stepVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const pulseVariants: Variants = {
    hidden: { scale: 1, opacity: 0.5 },
    visible: {
      scale: [1, 1.1, 1],
      opacity: [0.5, 1, 0.5],
      transition: { duration: 2, repeat: Infinity },
    },
  };

  // 3R Model Data
  const threeRModel = [
    {
      phase: "RESCUE",
      focus: "Medical corridors, clean water, emergency food, shelter",
      urgency: "Extreme / Critical (0-72 hours)",
      role: "Real-time needs tracking, medical triage, evacuation alerts",
      icon: "🚨",
      color: "from-red-500/20 to-orange-500/10 border-red-500/40",
      textColor: "text-red-300",
    },
    {
      phase: "REHABILITATE",
      focus: "Trauma support for orphans, WCNSF children",
      urgency: "High (3 days - 3 months)",
      role: "Basic Psychological First Aid (PFA) AFTER survival stable",
      icon: "💙",
      color: "from-blue-500/20 to-cyan-500/10 border-blue-500/40",
      textColor: "text-blue-300",
    },
    {
      phase: "REBUILD",
      focus: "Infrastructure, schools, economy",
      urgency: "Moderate to Low (months - years)",
      role: "Data collection for future planning",
      icon: "🏗️",
      color: "from-emerald-500/20 to-green-500/10 border-emerald-500/40",
      textColor: "text-emerald-300",
    },
  ];

  // Critical Statistics
  const criticalStats = [
    { label: "Aid Interception Rate", value: "86%", icon: "⚠️" },
    { label: "Water per Person (North Gaza)", value: "3L", icon: "💧" },
    { label: "Internally Displaced", value: "1.9M", icon: "👥" },
    { label: "Orphaned Children", value: "19K-39K", icon: "🤝" },
  ];

  // Rescue Workflow Steps
  const rescueSteps = [
    {
      step: 1,
      title: "Identify Emergency",
      desc: "Local volunteer finds emergency (medical, water, food, shelter)",
      action: "Uses handheld pager/radio connected to nearest van",
    },
    {
      step: 2,
      title: "Data Entry",
      desc: "Report entered via mobile app (offline-capable)",
      action: "Categories: Medical / Water / Food / Shelter / Evacuation",
    },
    {
      step: 3,
      title: "Mesh Relay",
      desc: "Vehicle mesh network relays message",
      action: "Self-healing routing: A→B→C or A→D→C if B is down",
    },
    {
      step: 4,
      title: "Border Gateway",
      desc: "Gateway node in Egypt receives message",
      action: "Forwards to Pakistan via internet or Starlink satellite",
    },
    {
      step: 5,
      title: "Remote Triage",
      desc: "Remote coordinator (Pakistan) prioritizes response",
      action: "Medical → contact border corridor / Water/Food → dispatch / Evacuation → coordinate gates",
    },
    {
      step: 6,
      title: "Confirmation & Follow-up",
      desc: "Confirmation sent back via same path",
      action: "Volunteer receives ETA of aid or evacuation instructions",
    },
  ];

  // Training Modules
  const trainingModules = [
    {
      num: 1,
      title: "Emergency Triage",
      content: "How to assess: Medical vs Water vs Food vs Shelter (0-72 hour window)",
      icon: "🏥",
    },
    {
      num: 2,
      title: "Needs Reporting",
      content: "Using mobile app + pager/radio. Categories aligned with mesh network",
      icon: "📱",
    },
    {
      num: 3,
      title: "Evacuation Coordination",
      content: "Safe routes to Rafah, Zikim (reopened April 13, 2026), Kerem Shalom",
      icon: "🚗",
    },
    {
      num: 4,
      title: "WCNSF Child Handling",
      content: "Identify Wounded Child No Surviving Family (19,000-39,000 orphans)",
      icon: "👧",
    },
    {
      num: 5,
      title: "86% Interception Bypass",
      content: "Digital reporting instead of physical convoys. Direct financial transfers",
      icon: "💻",
    },
    {
      num: 6,
      title: "Volunteer Self-Care",
      content: "Burnout prevention in active war zone. Peer support via mesh network",
      icon: "🧠",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="space-y-16"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
          Tele-Social Work Framework for Rescue Coordination
        </h2>
        <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
          Vehicle-based mesh communication network enabling real-time humanitarian rescue operations, medical evacuations, and resource coordination without relying on destroyed infrastructure
        </p>
      </motion.div>

      {/* Critical Challenge */}
      <motion.div variants={itemVariants}>
        <Card className="bg-gradient-to-r from-red-900/20 via-orange-900/20 to-red-900/20 border border-red-500/30 backdrop-blur-lg p-8 shadow-2xl">
          <div className="flex gap-4 items-start">
            <span className="text-4xl flex-shrink-0">⚠️</span>
            <div>
              <h3 className="text-2xl font-bold text-red-300 mb-3">The Critical Problem</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                With <span className="font-bold text-red-400">86% of physical humanitarian aid intercepted or looted</span> before reaching civilians, and <span className="font-bold text-red-400">1.9 million people displaced (90% of Gaza's population)</span>, traditional logistics has failed. Water availability in North Gaza stands at just <span className="font-bold text-red-400">3 liters per person daily</span> (WHO minimum: 15L). Famine was officially confirmed in August 2025.
              </p>
              <p className="text-slate-300 leading-relaxed">
                <strong>The solution:</strong> Digital-first rescue coordination using vehicle-based mesh networks that bypass physical blockades and enable real-time triage, evacuation coordination, and resource distribution directly to affected communities.
              </p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Critical Statistics Grid */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {criticalStats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-900/60 border border-purple-500/30 p-6 text-center">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <p className="text-2xl font-bold text-purple-300 mb-1">{stat.value}</p>
              <p className="text-xs text-slate-400">{stat.label}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* 3R Model */}
      <motion.div variants={itemVariants}>
        <h3 className="text-3xl font-bold text-slate-50 mb-8 text-center">
          The <span className="bg-gradient-to-r from-red-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">3R Model</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {threeRModel.map((model, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              viewport={{ once: true }}
            >
              <Card
                className={`bg-gradient-to-br ${model.color} backdrop-blur-lg p-8 h-full border shadow-xl hover:shadow-2xl transition-all duration-300`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-5xl">{model.icon}</span>
                  <h4 className={`text-2xl font-bold ${model.textColor}`}>
                    {model.phase}
                  </h4>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Focus</p>
                    <p className="text-slate-300 font-semibold">{model.focus}</p>
                  </div>

                  <div className="border-t border-white/10 pt-4">
                    <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Urgency</p>
                    <p className={`${model.textColor} font-bold`}>{model.urgency}</p>
                  </div>

                  <div className="border-t border-white/10 pt-4">
                    <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Tele-Social Work Role</p>
                    <p className="text-slate-300">{model.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Rescue Workflow */}
      <motion.div variants={itemVariants}>
        <h3 className="text-3xl font-bold text-slate-50 mb-8 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            6-Step Rescue Workflow
          </span>
        </h3>

        <div className="space-y-4">
          {rescueSteps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={stepVariants}
              custom={idx}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="bg-gradient-to-r from-slate-900/80 to-slate-900/40 border border-cyan-500/30 backdrop-blur-lg p-6 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex gap-6 items-start">
                  <motion.div
                    className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white text-xl shadow-lg"
                    whileHover={{ scale: 1.1 }}
                  >
                    {step.step}
                  </motion.div>

                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-cyan-300 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-slate-300 mb-3">{step.desc}</p>
                    <div className="flex items-center gap-2 text-emerald-400 text-sm">
                      <span className="inline-block w-1 h-1 bg-emerald-400 rounded-full" />
                      {step.action}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Communication Architecture */}
      <motion.div variants={itemVariants}>
        <Card className="bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-purple-500/40 backdrop-blur-lg p-10">
          <h3 className="text-2xl font-bold text-purple-300 mb-8">
            Communication Architecture
          </h3>

          <div className="space-y-6">
            {/* Message Path Visualization */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 flex-wrap">
              {[
                { label: "🏘️ Volunteer", desc: "Field Team" },
                { label: "📻 Pager/Radio", desc: "Local Comms" },
                { label: "🚐 Van Node", desc: "Mobile Hub" },
                { label: "🌐 Mesh Network", desc: "Self-Healing" },
                { label: "🇪🇬 Egypt Gateway", desc: "Border Relay" },
                { label: "🛰️ Satellite/Internet", desc: "Pakistan Link" },
                { label: "✅ Response", desc: "Confirmation" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-xl mb-2 text-slate-100 ">{item.label}</div>
                  <p className="text-xs text-slate-100">{item.desc}</p>

                  {idx < 6 && (
                    <motion.div
                      className="hidden md:block absolute right-0 transform translate-x-8 text-purple-400"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: idx * 0.1 }}
                    >
                      →
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 pt-8 border-t border-purple-500/20">
              {[
                {
                  title: "Self-Healing Mesh",
                  desc: "Routes automatically reroute through available nodes when primary paths fail",
                },
                {
                  title: "Infrastructure Independent",
                  desc: "Functions without fixed telecom towers or centralized facilities",
                },
                {
                  title: "Mobile-First Network",
                  desc: "All nodes are vehicle-based, enabling dynamic topology adaptation",
                },
                {
                  title: "Decentralized Coordination",
                  desc: "No single point of failure - each vehicle operates independently",
                },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-3"
                >
                  <span className="text-purple-400 font-bold flex-shrink-0">✓</span>
                  <div>
                    <p className="font-semibold text-purple-300">{feature.title}</p>
                    <p className="text-sm text-slate-400">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Operational Map */}
      <motion.div variants={itemVariants}>
        <h3 className="text-3xl font-bold text-slate-50 mb-8 text-center">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Operational Coverage Map
          </span>
        </h3>
        <div className="relative p-1 rounded-2xl bg-gradient-to-r from-purple-500/40 via-pink-500/40 to-purple-500/40 shadow-2xl">
          <div className="bg-slate-900/80 backdrop-blur-lg rounded-2xl p-8 overflow-hidden">
            <Image
              src="/map.jpeg"
              alt="Operational Coverage Map"
              width={800}
              height={600}
              className="rounded-xl w-full h-auto shadow-lg"
              priority
            />
          </div>
        </div>
      </motion.div>

      {/* Training Framework */}
      <motion.div variants={itemVariants}>
        <h3 className="text-3xl font-bold text-slate-50 mb-8 text-center">
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Train-the-Trainer Model
          </span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainingModules.map((module, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-emerald-900/30 to-cyan-900/20 border border-emerald-500/40 backdrop-blur-lg p-6 h-full hover:border-emerald-400/60 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <motion.span
                    className="text-4xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    {module.icon}
                  </motion.span>
                  <h4 className="text-lg font-bold text-emerald-300">
                    Module {module.num}
                  </h4>
                </div>

                <h5 className="font-bold text-slate-50 mb-3">{module.title}</h5>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {module.content}
                </p>

                <div className="mt-4 pt-4 border-t border-emerald-500/20">
                  <p className="text-xs text-slate-400">
                    📹 Pre-recorded videos | 🎙️ Live mesh audio | 📱 Offline app
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 p-6 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-xl"
        >
          <p className="text-slate-300 text-center">
            <strong className="text-emerald-300">Delivery Methods:</strong> Pre-recorded videos (offline), live mesh network audio calls (weekly coordination), searchable digital handbook in app, peer-to-peer training via mesh network
          </p>
        </motion.div>
      </motion.div>

      {/* Example Scenario */}
      <motion.div variants={itemVariants}>
        <Card className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/40 backdrop-blur-lg p-10">
          <h3 className="text-2xl font-bold text-blue-300 mb-6 flex items-center gap-3">
            <span>📋</span> Real-World Scenario: WCNSF Child
          </h3>

          <div className="space-y-4">
            <div className="bg-slate-900/50 p-4 rounded-lg border border-blue-500/20">
              <p className="text-sm text-slate-400 uppercase tracking-wide mb-2">Background</p>
              <p className="text-slate-300 leading-relaxed">
                A WCNSF child (Wounded Child, No Surviving Family) – 9-year-old, lost entire family in airstrike, leg wound infected and untreated for 5 days, hiding in rubble in North Gaza with only 3 liters of water available daily.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { step: "1", action: "Volunteer (trained teacher) finds child during food distribution. Uses handheld pager → nearest van" },
                { step: "2", action: "Reports via mobile app (offline): 'WCNSF child, leg wound infected, no surviving family, location North Gaza'" },
                { step: "3", action: "Vehicle mesh network relays message. Self-healing routing A→B→C to Egypt gateway (86% physical aid interception bypassed via digital reporting)" },
                { step: "4", action: "Remote coordinator (Pakistan) triages as RESCUE – Medical" },
                { step: "5", action: "Coordinator contacts medical corridor at Zikim Crossing (reopened April 13, 2026). Evacuation coordinated" },
                { step: "6", action: "Child evacuated within 48 hours. Wound treated. Infection controlled. Survival secured" },
                { step: "7", action: "ONLY AFTER rescue → Child added to tele-psychiatry waitlist for trauma counseling (Rehabilitation phase)" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  className="flex gap-4 items-start"
                >
                  <motion.div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center font-bold text-blue-300 text-sm">
                    {item.step}
                  </motion.div>
                  <p className="text-slate-300 pt-0.5">{item.action}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/10 border border-green-500/30 p-4 rounded-lg mt-6">
              <p className="text-green-300 font-semibold">✓ Outcome:</p>
              <p className="text-slate-300 text-sm mt-2">
                Child survives. Receives immediate physical rescue and medical care, then transitions to psychological support in the Rehabilitation phase. All through a decentralized, mesh-networked system that bypasses the 86% physical aid interception rate.
              </p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Tele-Psychiatry Integration */}
      <motion.div variants={itemVariants}>
        <Card className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 border border-pink-500/40 backdrop-blur-lg p-10">
          <h3 className="text-2xl font-bold text-pink-300 mb-6">
            Tele-Psychiatry Integration (Rehabilitation Phase)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Audio Calls (Primary)",
                desc: "Low bandwidth, works via mesh network. 80% of sessions",
                icon: "🎙️",
              },
              {
                title: "Video Calls (When Available)",
                desc: "For diagnostic assessment. Requires better connection",
                icon: "📹",
              },
              {
                title: "Text via Pager System",
                desc: "Check-ins, appointment reminders, crisis messages",
                icon: "💬",
              },
            ].map((method, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{method.icon}</div>
                <h4 className="font-bold text-pink-300 mb-2">{method.title}</h4>
                <p className="text-slate-300 text-sm">{method.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-pink-500/20">
            <p className="text-slate-300 italic text-center">
              This ensures <strong>continuity of care AFTER physical survival is secured</strong> – aligning with the 3R model and prioritizing rescue over rehabilitation
            </p>
          </div>
        </Card>
      </motion.div>

      {/* Key Achievements */}
      <motion.div variants={itemVariants}>
        <Card className="bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-white/20 backdrop-blur-lg p-10">
          <h3 className="text-2xl font-bold text-slate-50 mb-8 text-center">
            Framework Capabilities
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "🛡️",
                title: "Bypasses 86% Aid Interception",
                desc: "Digital needs reporting instead of physical convoys that get looted",
              },
              {
                icon: "📡",
                title: "Works Without Internet",
                desc: "Vehicle mesh network + handheld pagers ensure functionality in all conditions",
              },
              {
                icon: "🚨",
                title: "Prioritizes Rescue Correctly",
                desc: "Medical/water/food/evacuation BEFORE counseling or rehabilitation",
              },
              {
                icon: "📈",
                title: "Scales to 1.9M Displaced",
                desc: "970 displacement sites covered via van-based mesh network",
              },
              {
                icon: "👧",
                title: "Supports WCNSF Children",
                desc: "Identification → evacuation → later rehabilitation (19,000-39,000 orphans)",
              },
              {
                icon: "💳",
                title: "Enables Digital Bypass",
                desc: "Direct financial transfers to local workers (Plan B) bypassing physical barriers",
              },
            ].map((capability, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <span className="text-3xl flex-shrink-0">{capability.icon}</span>
                <div>
                  <h4 className="font-bold text-slate-50 mb-1">{capability.title}</h4>
                  <p className="text-slate-400 text-sm">{capability.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Final Statement */}
      <motion.div
        variants={itemVariants}
        className="text-center p-10 bg-gradient-to-r from-purple-900/40 via-pink-900/40 to-red-900/40 border border-purple-500/30 rounded-2xl backdrop-blur-lg"
      >
        <p className="text-lg text-slate-300 leading-relaxed">
          This <strong className="text-purple-300">Tele-Social Work Framework for Rescue Coordination</strong> makes rescue-phase psychosocial coordination possible in Gaza despite physical access limitations – aligning with humanitarian mandates while maximizing operational efficiency through decentralized, mesh-networked infrastructure.
        </p>
      </motion.div>
    </motion.div>
  );
}
