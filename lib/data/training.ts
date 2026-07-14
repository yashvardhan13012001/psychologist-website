export type TrainingProgram = {
  slug: string;
  name: string;
  level: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  whoItsFor: string[];
  curriculum: string[];
};

export const trainingPrograms: TrainingProgram[] = [
  {
    slug: "basic-training-in-hypnosis-and-plrt",
    name: "Basic Training in Hypnosis and PLRT",
    level: "Foundation",
    shortDescription: "An introduction to hypnosis fundamentals and Past-Life Regression Therapy technique.",
    metaTitle: "Basic Hypnosis & PLRT Training in Navi Mumbai | Chaitanya Raj",
    metaDescription:
      "Foundational training in hypnosis and Past-Life Regression Therapy (PLRT) in Vashi, Navi Mumbai, for those new to hypnotherapy practice.",
    intro:
      "This foundation course introduces the core principles of hypnosis and the specific technique of Past-Life Regression Therapy, for participants with little or no prior background in hypnotherapy.",
    whoItsFor: [
      "Counsellors and psychologists exploring hypnotherapy as an additional technique",
      "Newcomers to the field with a genuine interest in the discipline",
      "Practitioners wanting a structured foundation before advanced training"
    ],
    curriculum: [
      "History and principles of clinical hypnosis",
      "Induction techniques and depth assessment",
      "Ethical practice and client screening",
      "Introduction to the PLRT process and framework",
      "Supervised practice sessions"
    ]
  },
  {
    slug: "advanced-training-level-1",
    name: "Advanced Training — Level 1",
    level: "Advanced I",
    shortDescription: "Building on foundation skills with Ego State Therapy and Age Regression technique.",
    metaTitle: "Advanced Hypnotherapy Training Level 1 in Navi Mumbai | Chaitanya Raj",
    metaDescription:
      "Advanced Level 1 hypnotherapy training in Vashi, Navi Mumbai, covering Ego State Therapy and Age Regression for practitioners with foundation training.",
    intro:
      "Building directly on the foundation course, Level 1 introduces Ego State Therapy and Age Regression technique for practitioners ready to deepen their clinical toolkit.",
    whoItsFor: [
      "Graduates of the Basic Training course",
      "Practising hypnotherapists looking to formalise these specific techniques"
    ],
    curriculum: [
      "Principles of Ego State Therapy",
      "Age Regression technique and safe practice",
      "Working with abreaction and emotional release",
      "Case formulation for complex presentations",
      "Supervised practice and peer feedback"
    ]
  },
  {
    slug: "advanced-training-level-2",
    name: "Advanced Training — Level 2",
    level: "Advanced II",
    shortDescription: "Specialised technique training, including Spirit Release Therapy and Third Party Regression.",
    metaTitle: "Advanced Hypnotherapy Training Level 2 in Navi Mumbai | Chaitanya Raj",
    metaDescription:
      "Advanced Level 2 hypnotherapy training in Vashi, Navi Mumbai, covering Spirit Release Therapy and Third Party Regression for experienced practitioners.",
    intro:
      "The final level in the training pathway, covering the most specialised techniques in the practice, for practitioners who have completed Levels 1 and Basic Training.",
    whoItsFor: [
      "Graduates of Advanced Training Level 1",
      "Experienced practitioners seeking certification in specialised technique"
    ],
    curriculum: [
      "Spirit Release Therapy: framework and safe practice",
      "Third Party Regression / Hypnotherapy technique",
      "Advanced case supervision",
      "Building an ethical, sustainable specialised practice",
      "Certification assessment"
    ]
  }
];

export function getTrainingProgram(slug: string) {
  return trainingPrograms.find((t) => t.slug === slug);
}
