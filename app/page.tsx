"use client";

import { motion, Variants } from "framer-motion";
import HeroHeader from "./components/HeroHeader";
import ProjectIntroduction from "./components/ProjectIntroduction";
import RouteAssessment from "./components/RouteAssessment";
import CellOneAssessment from "./components/CellOneAssessment";
import CellTwoLogistics from "./components/CellTwoLogistics";
import CellThreeImplementationV2 from "./components/CellThreeImplementationV2";
import { Card } from "@/components/ui/card";

export default function Home() {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <main className="bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      <HeroHeader />

      <ProjectIntroduction />

      {/* PHASE 2: ECONOMIC ENGINE */}
      <div className="bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950 border-b border-white/5">
        <motion.div 
          className="max-w-7xl mx-auto py-16 px-4 md:px-8 lg:px-24 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >

        </motion.div>
      </div>



      <div className="relative z-10 bg-slate-950">
        
        {/* CELL 1: ASSESSMENT */}
        <section id="cell-1" className="min-h-screen py-32 px-4 md:px-8 lg:px-24 border-b border-white/5 relative">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <Card className="bg-slate-900/50 border-blue-500/20 backdrop-blur-sm shadow-2xl shadow-blue-900/10 rounded-3xl overflow-hidden  md:p-12 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-transparent opacity-50" />
              <CellOneAssessment />
            </Card>
          </motion.div>
        </section>

        {/* CELL 2: LOGISTICS */}
        <section id="cell-2" className="min-h-screen py-32  md:px-8 lg:px-24 border-b border-white/5 bg-slate-900/20 relative">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <Card className="bg-slate-900/50 border-emerald-500/20 backdrop-blur-sm shadow-2xl shadow-emerald-900/10 rounded-3xl overflow-hidden p-8 md:p-12 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 to-transparent opacity-50" />
              <CellTwoLogistics />
            </Card>
          </motion.div>
        </section>

        {/* CELL 3: IMPLEMENTATION */}
        <section id="cell-3" className="min-h-screen py-32 md:px-8 lg:px-24 relative">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <Card className="bg-slate-900/50 border-purple-500/20 backdrop-blur-sm shadow-2xl shadow-purple-900/10 rounded-3xl overflow-hidden p-8 md:p-12 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-transparent opacity-50" />
              <CellThreeImplementationV2 />
            </Card>
          </motion.div>
        </section>
        
      </div>
    </main>
  );
}
