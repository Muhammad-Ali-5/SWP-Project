"use client";

import { DamageAssessmentDashboard } from "../../components/cell-one-assessment/DamageAssessmentDashboard";
import { LegalEthicalMatrix } from "../../components/cell-one-assessment/LegalEthicalMatrix";

export default function CellOneAssessment() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="mb-12 border-l-4 border-blue-500 pl-6">
        <h2 className="text-3xl font-bold text-slate-100 uppercase tracking-wider">Phase 1: Factual Baseline</h2>
        <p className="text-slate-400 mt-2">Damage Assessment & Human Rights Legal Audit</p>
      </div>

      <div className="space-y-8">
        <DamageAssessmentDashboard />
        <LegalEthicalMatrix />
      </div>
    </div>
  );
}
