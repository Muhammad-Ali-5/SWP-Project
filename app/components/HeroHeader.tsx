"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroHeader() {
  const scrollToCell = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex flex-col h-screen overflow-hidden">
      {/* Sticky Glassmorphism Navbar */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-slate-950/60 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-lg tracking-wider text-slate-200">
            EHCC<span className="text-emerald-500">_</span>
          </div>
          <ul className="flex space-x-8 text-sm font-medium text-slate-400">
            <li>
              <button onClick={() => scrollToCell("cell-1")} className="hover:text-blue-400 transition-colors">
                1. Assessment
              </button>
            </li>
            <li>
              <button onClick={() => scrollToCell("cell-2")} className="hover:text-emerald-400 transition-colors">
                2. Logistics
              </button>
            </li>
            <li>
              <button onClick={() => scrollToCell("cell-3")} className="hover:text-purple-400 transition-colors">
                3. Implementation
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* High-tech Animated Background */}
      <div className="absolute inset-0 -z-10 bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950" />
        {/* Subtle moving CSS grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />
        {/* Animated Glow */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px]"
        />
      </div>

      {/* Hero Content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 relative z-10 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-500 pb-2 drop-shadow-sm">
            Gaza Humanitarian Response
          </h1>
          <p className="text-xl md:text-3xl text-slate-400 mb-12 font-light uppercase tracking-[0.2em]">
            Macro-Level Executive Command Center
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "backOut" }}
        >
          <Button 
            onClick={() => scrollToCell("cell-1")}
            variant="default" 
            size="lg"
            className="group relative overflow-hidden bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 hover:border-slate-500 rounded-full px-8 py-6 text-lg tracking-wide transition-all duration-300 drop-shadow-xl"
          >
            <span className="relative z-10 flex items-center gap-3">
              Initiate Briefing
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </span>
            {/* Subtle pulse effect */}
            <span className="absolute inset-0 bg-blue-500/10 rounded-full animate-pulse" />
          </Button>
        </motion.div>
      </main>
    </div>
  );
}
