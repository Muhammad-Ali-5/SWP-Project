"use client";

import { DamageAssessmentDashboard } from "../../components/cell-one-assessment/DamageAssessmentDashboard";
import { LegalEthicalMatrix } from "../../components/cell-one-assessment/LegalEthicalMatrix";
import { PriorityInterventionFramework } from "../../components/cell-one-assessment/PriorityInterventionFramework";

export default function CellOneAssessment() {
  return (
    <div className="w-full md:max-w-7xl mx-auto">
      <div className="mb-12 border-l-4 border-blue-500 pl-6">
        <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-wider">Phase 1: Factual Baseline</h2>
        <p className="mt-2 text-slate-600">Damage Assessment & Human Rights Legal Audit</p>
      </div>

      <div className="space-y-8 w-full">
        <DamageAssessmentDashboard />
        <LegalEthicalMatrix />
        <PriorityInterventionFramework />
      </div>
    </div>
  );
}
