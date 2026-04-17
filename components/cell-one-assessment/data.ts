export const TOTAL_STRUCTURES = 198273;

export type DamageStat = {
  label: string;
  end?: number;
  decimals?: number;
  separator?: string;
  suffix?: string;
  meta?: string;
  value?: string;
};

export type DamageBreakdownItem = {
  label: string;
  value: number;
  color: string;
  fill: string;
};

export const damageStats: DamageStat[] = [
  { label: "Killed", end: 72315, separator: "," },
  { label: "Injured", end: 172137, separator: "," },
  { label: "Displaced", end: 1.9, decimals: 1, suffix: "M", meta: "90%" },
  { label: "Structures Damaged", end: 81, suffix: "%" },
  { label: "Famine Confirmed", value: "Aug 2025" },
];

export const damageBreakdown: DamageBreakdownItem[] = [
  { label: "Destroyed", value: 123464, color: "from-rose-500 to-red-400", fill: "#f43f5e" },
  { label: "Severe", value: 17116, color: "from-orange-500 to-amber-400", fill: "#fb923c" },
  { label: "Moderate", value: 33857, color: "from-yellow-500 to-amber-300", fill: "#facc15" },
  { label: "Possible", value: 23836, color: "from-cyan-500 to-blue-400", fill: "#38bdf8" },
];

export const damageChartData = damageBreakdown.map((item) => ({
  name: item.label,
  value: item.value,
  fill: item.fill,
}));

export const infrastructureHighlights = [
  {
    title: "Healthcare",
    stats: [
      "94% hospitals damaged",
      "50% partially functional",
      "46.5% primary care operational",
    ],
  },
  {
    title: "Education",
    stats: [
      "97.5% schools damaged",
      "91.8% require reconstruction",
      "637k-658k children out of school",
    ],
  },
];

export const udhrRows = [
  {
    article: "Article 3",
    principle: "Right to Life",
    source: "UDHR Article 3",
    violation:
      "72,315 killed and civilians repeatedly targeted across homes, hospitals, and displacement sites.",
  },
  {
    article: "Article 5",
    principle: "Freedom from Inhuman Treatment",
    source: "UDHR Article 5",
    violation:
      "Starvation conditions, water reduced to 3L/day in areas, and famine confirmed in Aug 2025.",
  },
  {
    article: "Article 7",
    principle: "Equality Before Law",
    source: "UDHR Article 7",
    violation:
      "International legal protections are unevenly enforced; accountability gap remains systemic.",
  },
  {
    article: "Article 9",
    principle: "Forced Displacement",
    source: "UDHR Article 9",
    violation:
      "1.9M people displaced, many repeatedly relocated multiple times under unsafe conditions.",
  },
  {
    article: "Article 12",
    principle: "Right to Home",
    source: "UDHR Article 12",
    violation: "81% of structures damaged and 320,622 housing units affected.",
  },
  {
    article: "Article 13",
    principle: "Freedom of Movement",
    source: "UDHR Article 13",
    violation:
      "Blockade, crossing closures, and internal mobility collapse due to damaged roads.",
  },
  {
    article: "Article 14",
    principle: "Right to Seek Asylum",
    source: "UDHR Article 14",
    violation: "Exit routes sealed; Rafah closure and naval blockade prevent asylum access.",
  },
  {
    article: "Article 17",
    principle: "Right to Property",
    source: "UDHR Article 17",
    violation:
      "198,273 structures destroyed/damaged including homes, hospitals, schools, and businesses.",
  },
  {
    article: "Article 19",
    principle: "Freedom of Expression",
    source: "UDHR Article 19",
    violation:
      "251 journalists killed, undermining information flow and independent reporting.",
  },
  {
    article: "Article 25",
    principle: "Adequate Standard of Living",
    source: "UDHR Article 25",
    violation:
      "Food supply below 5%, widespread service collapse, and severe healthcare degradation.",
  },
  {
    article: "Article 26",
    principle: "Right to Education",
    source: "UDHR Article 26",
    violation:
      "97.5% schools damaged and 637k-658k children out of formal learning.",
  },
  {
    article: "Article 28",
    principle: "Right to a Just International Order",
    source: "UDHR Article 28",
    violation:
      "Enforcement paralysis and persistent failure to implement protection measures.",
  },
];

export const islamicPrinciples = [
  {
    principle: "Prohibition of killing civilians",
    source: "Quran 6:151, 17:33; Hadith (Abu Dawud)",
    violation:
      "21,289+ children killed and civilian-heavy casualty profile (women, children, elderly).",
  },
  {
    principle: "Prohibition of starvation as a weapon",
    source: "Quran 5:32; Muwatta Malik; Abu Dawud",
    violation:
      "Famine declared Aug 2025; food under 5% requirement and severe water deprivation.",
  },
  {
    principle: "Protection of hospitals and healing spaces",
    source: "Al-Mawardi; al-Shaybani",
    violation:
      "94% of hospitals damaged and sustained targeting of medical infrastructure.",
  },
  {
    principle: "No collective punishment",
    source: "Quran 6:164; 17:15",
    violation:
      "Population-wide siege effects on 2.3M civilians through food, fuel, medicine restrictions.",
  },
  {
    principle: "Humane treatment of vulnerable people",
    source: "Quran 76:8-9",
    violation:
      "101,000 children at malnutrition risk and severe breakdown of care conditions.",
  },
  {
    principle: "Protection of orphans",
    source: "Quran 93:9; Sahih al-Bukhari",
    violation:
      "19,000-39,000 children orphaned and 17,000 unaccompanied or separated minors.",
  },
];

export const legalSummaryStats = [
  { label: "UDHR Articles Mapped", end: 12, suffix: "" },
  { label: "Islamic Principles", end: 6, suffix: "" },
  { label: "Population Displaced", end: 1.9, decimals: 1, suffix: "M" },
  { label: "Structures Damaged", end: 81, suffix: "%" },
];

export const legalSignalMeters = [
  { label: "Civilian Protection Collapse", value: 96, color: "from-rose-500 to-red-400" },
  { label: "Healthcare System Stress", value: 94, color: "from-orange-500 to-amber-400" },
  { label: "Education System Disruption", value: 98, color: "from-yellow-500 to-amber-300" },
  { label: "Movement Restriction Severity", value: 92, color: "from-cyan-500 to-blue-400" },
];
