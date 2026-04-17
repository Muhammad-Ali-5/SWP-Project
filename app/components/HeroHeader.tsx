"use client";

import { motion } from "framer-motion";
import { ArrowDown, Command, Activity, Fingerprint } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroHeader() {
  const scrollToCell = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex flex-col h-screen overflow-hidden bg-slate-950 font-sans selection:bg-emerald-500/30">
      {/* Sleek, Technical Top Navbar */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-slate-950/60 border-b border-slate-800/60 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-default">
            <Command className="w-5 h-5 text-emerald-500" />
            <div className="font-sans font-bold text-sm tracking-widest text-slate-200">
              PHC<span className="text-emerald-500">-</span>GAZA
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-1 font-mono text-[10px] sm:text-xs">
            <button onClick={() => scrollToCell("cell-1")} className="px-4 py-2 text-slate-400 hover:text-emerald-400 hover:bg-slate-800/50 rounded transition-all">
              01_ASSESSMENT
            </button>
            <div className="w-[1px] h-4 bg-slate-800" />
            <button onClick={() => scrollToCell("cell-2")} className="px-4 py-2 text-slate-400 hover:text-emerald-400 hover:bg-slate-800/50 rounded transition-all">
              02_LOGISTICS
            </button>
            <div className="w-[1px] h-4 bg-slate-800" />
            <button onClick={() => scrollToCell("cell-3")} className="px-4 py-2 text-slate-400 hover:text-emerald-400 hover:bg-slate-800/50 rounded transition-all">
              03_IMPLEMENTATION
            </button>
          </div>

          <div className="flex items-center gap-2 cursor-default">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            <span className="text-[10px] font-mono text-emerald-500 tracking-widest hidden sm:inline-block">SECURE</span>
          </div>
        </div>
      </nav>

      {/* High-tech Animated Background */}
      <div className="absolute inset-0 -z-10 bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950" />
        {/* Subtle moving CSS grid overlay requested by the user, now with radial fading */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#33415520_1px,transparent_1px),linear-gradient(to_bottom,#33415520_1px,transparent_1px)] bg-[size:24px_24px] xl:bg-[size:32px_32px]"
          style={{ maskImage: "radial-gradient(circle at center, black, transparent 80%)" }}
        />
      </div>

      {/* Hero Content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 relative z-10 pt-16">
        
        {/* Sleeker System Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 flex items-center gap-2 px-3 py-1 rounded bg-slate-900/50 border border-emerald-900/40 backdrop-blur-md cursor-default"
        >
          <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
          <span className="text-[10px] font-mono tracking-[0.2em] text-emerald-300/80">
            LIVE TELEMETRY // ACTIVE
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative max-w-5xl px-8"
        >
          {/* Decorative Corner Brackets (Palantir Vibe) */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-slate-700/50" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-slate-700/50" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-slate-700/50" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-slate-700/50" />

          {/* Re-designed Sleek Silver Title (Scaled Down for Professionalism) */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-slate-300 to-slate-500 py-4 drop-shadow-sm leading-tight cursor-default">
            Gaza Humanitarian Response
          </h1>
          <p className="text-sm md:text-base text-slate-400 mb-10 font-mono uppercase tracking-[0.3em] max-w-2xl mx-auto flex items-center justify-center gap-3 cursor-default">
            <span className="w-8 h-[1px] bg-slate-700 hidden sm:block" />
            Macro-Level Command Center
            <span className="w-8 h-[1px] bg-slate-700 hidden sm:block" />
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="mt-8"
        >
          <Button 
            onClick={() => scrollToCell("cell-1")}
            variant="outline"
            className="group relative h-12 px-8 overflow-hidden bg-slate-900/50 hover:bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-500 rounded font-mono text-xs uppercase tracking-widest transition-all duration-300 backdrop-blur-sm"
          >
            <div className="absolute inset-0 w-0 bg-emerald-500/10 group-hover:w-full transition-all duration-500 ease-out" />
            <span className="relative z-10 flex items-center gap-3">
              <Fingerprint className="w-4 h-4 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
              Initialize Briefing
            </span>
          </Button>
        </motion.div>
      </main>

      {/* Scroll indicator overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10 pointer-events-none"
      >
        <span className="text-[9px] font-mono text-slate-500 tracking-[0.3em]">SCROLL</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-slate-500 to-transparent" />
      </motion.div>
    </div>
  );
}
