export type CaseStudy = {
  slug: string;
  title: string;
  issue: string; // condition slug
  metaTitle: string;
  metaDescription: string;
  summary: string;
  presentingConcern: string;
  approach: string;
  outcome: string;
};

// Illustrative, anonymised case summaries. Replace with real, consented
// client case studies (with identifying details removed) before launch.
export const caseStudies: CaseStudy[] = [
  {
    slug: "aversion-to-sex",
    title: "Working Through an Aversion to Intimacy",
    issue: "sexual-dysfunctions",
    metaTitle: "Case Study: Aversion to Sex | Chaitanya Raj",
    metaDescription:
      "An anonymised case study on working through an aversion to intimacy using CBT and Ego State Therapy.",
    summary:
      "An adult client presented with a persistent aversion to physical intimacy that was affecting their long-term relationship.",
    presentingConcern:
      "The client described avoiding intimacy entirely, alongside anxiety whenever the topic came up in the relationship, with no clear physical cause identified by a prior medical evaluation.",
    approach:
      "Sessions combined CBT to address the anxiety and avoidance pattern with Ego State work to explore an earlier experience the client identified as connected to the aversion.",
    outcome:
      "Over a structured course of sessions, the client reported reduced anxiety around intimacy and reintroduced physical closeness in the relationship at a pace they were comfortable with."
  },
  {
    slug: "anxiety-and-depression",
    title: "Co-occurring Anxiety and Depression",
    issue: "anxiety",
    metaTitle: "Case Study: Anxiety and Depression | Chaitanya Raj",
    metaDescription:
      "An anonymised case study on treating co-occurring anxiety and depression with a combined CBT and behavioural approach.",
    summary:
      "A working professional presented with both persistent low mood and constant background anxiety that had built up over several months.",
    presentingConcern:
      "Low energy, disrupted sleep, and a racing mind that made it difficult to concentrate at work or switch off in the evenings.",
    approach:
      "A combined approach: Behaviour Modification Therapy to rebuild a structured daily routine, alongside CBT to work through the anxious thought patterns driving the racing mind.",
    outcome:
      "The client reported more stable mood, improved sleep, and a noticeably calmer baseline within a structured course of sessions, with occasional check-ins afterward."
  },
  {
    slug: "anger-management",
    title: "Reactive Anger Affecting Family Relationships",
    issue: "anger-management",
    metaTitle: "Case Study: Anger Management | Chaitanya Raj",
    metaDescription:
      "An anonymised case study on addressing reactive anger affecting family relationships through Behaviour Modification Therapy.",
    summary:
      "A client sought support after repeated conflict at home linked to reactions they described as disproportionate to the situation.",
    presentingConcern:
      "Frequent outbursts followed by regret, and a family relationship that had become increasingly strained as a result.",
    approach:
      "Behaviour Modification Therapy to map specific triggers and interrupt the reactive pattern, combined with CBT to work through the underlying stress driving it.",
    outcome:
      "The client identified their specific trigger pattern early in the process and reported significantly fewer outbursts, along with an improved relationship at home, by the end of the structured course."
  },
  {
    slug: "insomnia",
    title: "Chronic Insomnia Linked to Racing Thoughts",
    issue: "sleep-disorders",
    metaTitle: "Case Study: Insomnia | Chaitanya Raj",
    metaDescription:
      "An anonymised case study on resolving chronic insomnia using CBT-I principles and clinical hypnotherapy.",
    summary:
      "A client presented with several months of difficulty falling and staying asleep, alongside daytime fatigue affecting work performance.",
    presentingConcern:
      "An overactive mind at night, worry about not sleeping, and a sleep routine that had become inconsistent as a result.",
    approach:
      "CBT-I principles to rebuild a consistent sleep routine and address anxious thoughts about sleep, combined with hypnotherapy-based relaxation technique for use at bedtime.",
    outcome:
      "The client reported falling asleep more easily and with fewer night wakings within a few weeks, with continued improvement through the rest of the structured course."
  },
  {
    slug: "migraine",
    title: "Stress-Linked Migraine Frequency",
    issue: "stress-and-burnout",
    metaTitle: "Case Study: Migraine | Chaitanya Raj",
    metaDescription:
      "An anonymised case study on reducing stress-linked migraine frequency through mindfulness-based technique and CBT.",
    summary:
      "A client experiencing frequent migraines, previously evaluated medically, identified a clear link between episodes and periods of high stress.",
    presentingConcern:
      "Migraine episodes clustering around high-pressure periods at work, alongside general difficulty managing day-to-day stress.",
    approach:
      "Mindfulness-based technique to build early stress-recognition, combined with CBT to address the underlying workload and boundary-setting difficulties.",
    outcome:
      "The client reported a noticeable reduction in migraine frequency alongside improved stress management, tracked in coordination with their treating physician."
  }
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
