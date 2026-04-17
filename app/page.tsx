import CellOneAssessment from './components/CellOneAssessment';
import CellTwoLogistics from './components/CellTwoLogistics';
import CellThreeImplementation from './components/CellThreeImplementation';
import { ArrowDown } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30">
      
      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 -z-10"></div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
          Gaza Humanitarian Response
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mb-12 uppercase tracking-widest">
          Macro-Level Executive Command Center
        </p>
        <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-all border border-slate-700 hover:border-slate-500">
          Initiate Briefing
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </button>
      </section>

      {/* CELL 1: ASSESSMENT */}
      <section id="cell-1" className="min-h-screen py-20 px-8 lg:px-24 border-b border-slate-800">
        <CellOneAssessment />
      </section>

      {/* CELL 2: LOGISTICS */}
      <section id="cell-2" className="min-h-screen py-20 px-8 lg:px-24 border-b border-slate-800 bg-slate-900/50">
        <CellTwoLogistics />
      </section>

      {/* CELL 3: IMPLEMENTATION */}
      <section id="cell-3" className="min-h-screen py-20 px-8 lg:px-24">
        <CellThreeImplementation />
      </section>

    </main>
  );
}
