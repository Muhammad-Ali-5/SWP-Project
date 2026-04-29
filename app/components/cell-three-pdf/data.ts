export type PrincipleItem = {
  id: number;
  title: string;
  clinicalDefinition: string;
  challenge: string;
  techSolution: string;
  howItWorks: string[];
  example: string[];
};

export const principles: PrincipleItem[] = [
  {
    id: 1,
    title: "Individualization",
    clinicalDefinition:
      "Recognizing each client as a unique individual with their own experiences, traumas, and needs.",
    challenge:
      "In crowded Gaza shelters, workers naturally see a crowd rather than individuals.",
    techSolution: "Digital Case File System with QR identification.",
    howItWorks: [
      "Each child receives a unique QR wristband.",
      "The app stores trauma history, family status, and behavior patterns.",
      "Scanning a child shows custom handling guidance.",
    ],
    example: [
      "The app warns volunteers not to ask orphaned children about family.",
      "Outcome: individualized and safer communication.",
    ],
  },
  {
    id: 2,
    title: "Purposeful Expression of Feelings",
    clinicalDefinition:
      "Allowing free emotional expression, especially grief, anger, and fear.",
    challenge:
      "Children often have no private space to speak inside damaged shelters.",
    techSolution: "Green Zone geofencing with digital expression tools.",
    howItWorks: [
      "Designated Green Zones trigger a calming app interface.",
      "Workers can use emoji boards, drawing canvas, and digital sandtray.",
    ],
    example: [
      "A child draws an explosion in a Green Zone instead of verbal disclosure.",
      "Outcome: trauma expression without pressure.",
    ],
  },
  {
    id: 3,
    title: "Controlled Emotional Involvement",
    clinicalDefinition:
      "Workers respond with empathy while maintaining professional objectivity.",
    challenge:
      "Local volunteers are also traumatized and can become overwhelmed.",
    techSolution: "Remote therapist relay and emotional check-in prompts.",
    howItWorks: [
      "Volunteers log emotional state in-app.",
      "Heavy cases are escalated to remote therapists in Pakistan.",
      "Volunteer remains the local hands and eyes while specialist guides.",
    ],
    example: [
      "Escalation triggers a therapist-guided script in real time.",
      "Outcome: continuity of care without burnout.",
    ],
  },
  {
    id: 4,
    title: "Acceptance",
    clinicalDefinition:
      "Accepting clients as they are, including fear, anger, and regression.",
    challenge:
      "Regressive behavior can frustrate exhausted workers.",
    techSolution: "Behavioral normalization prompts.",
    howItWorks: [
      "The app explains regression as a trauma symptom.",
      "Workers receive non-shaming scripts for response.",
    ],
    example: [
      "For bedwetting or thumb-sucking, volunteers use normalization language.",
      "Outcome: support replaces punishment.",
    ],
  },
  {
    id: 5,
    title: "Non-Judgmental Attitude",
    clinicalDefinition:
      "Avoiding moral labels for trauma-driven behavior.",
    challenge:
      "Aggression can trigger punitive reactions in crisis shelters.",
    techSolution: "Crisis Mode script shield.",
    howItWorks: [
      "Volunteers press Crisis Mode during dysregulated episodes.",
      "The AI provides a calm non-judgmental script.",
    ],
    example: [
      "Replace 'stop being bad' with 'I see you are very angry; let us sit together.'",
      "Outcome: de-escalation without shame.",
    ],
  },
  {
    id: 6,
    title: "Client Self-Determination",
    clinicalDefinition:
      "Protecting the child’s right to choose within safe boundaries.",
    challenge:
      "Crisis settings often default to total worker control.",
    techSolution: "A/B choice interface.",
    howItWorks: [
      "The app presents two valid options.",
      "The child selects and the worker honors the choice.",
    ],
    example: [
      "Draw or sandtray selection gives agency back to the child.",
      "Outcome: restored control in a high-loss environment.",
    ],
  },
  {
    id: 7,
    title: "Confidentiality",
    clinicalDefinition:
      "Protecting private trauma data and limiting access to authorized staff.",
    challenge:
      "Multi-volunteer environments can leak sensitive details.",
    techSolution: "Encrypted case files with access controls and audit logs.",
    howItWorks: [
      "AES-256 encryption for storage and transfer.",
      "Role-based visibility and logged access events.",
      "In-app reminders prevent verbal case gossip.",
    ],
    example: [
      "Case file views are timestamped by device and user.",
      "Outcome: privacy and ethical continuity.",
    ],
  },
];

export const summaryRows = [
  {
    principle: "Individualization",
    techSolution: "QR Code + Digital Case File",
    volunteerAction: "Scan ID and follow custom prompt",
  },
  {
    principle: "Purposeful Expression",
    techSolution: "Green Zone + Drawing Tool",
    volunteerAction: "Guide child to draw/play",
  },
  {
    principle: "Controlled Emotional Involvement",
    techSolution: "Remote Therapist Relay",
    volunteerAction: "Escalate when overwhelmed",
  },
  {
    principle: "Acceptance",
    techSolution: "Behavioral Normalization Prompts",
    volunteerAction: "Use normalization scripts",
  },
  {
    principle: "Non-Judgmental Attitude",
    techSolution: "Crisis Mode + Script Shield",
    volunteerAction: "Use non-judgmental script",
  },
  {
    principle: "Client Self-Determination",
    techSolution: "Choice Interface (A/B)",
    volunteerAction: "Offer options and honor choice",
  },
  {
    principle: "Confidentiality",
    techSolution: "Encrypted Files + Access Logs",
    volunteerAction: "Avoid verbal case disclosure",
  },
];

export const technicalRequirements = [
  {
    requirement: "Mobile Device",
    specification: "Ruggedized Android smartphones (5,000 units)",
  },
  {
    requirement: "App Features",
    specification: "QR scanner, drawing tool, sandtray simulator, script library, escalation button",
  },
  {
    requirement: "Encryption",
    specification: "AES-256 for all stored and transmitted data",
  },
  {
    requirement: "Connectivity",
    specification: "Offline-first mesh network + satellite backhaul for escalations",
  },
  {
    requirement: "Training",
    specification: "4-hour module: Biestek principles + app usage",
  },
];
