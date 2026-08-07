// // export type Therapy = {
// //   slug: string;
// //   name: string;
// //   shortDescription: string;
// //   metaTitle: string;
// //   metaDescription: string;
// //   intro: string;
// //   whatToExpect: string[];
// //   goodFor: string[]; // condition slugs
// // };

// // export const therapies: Therapy[] = [
// //   {
// //     slug: "cognitive-behavioural-therapy",
// //     name: "Cognitive Behavioural Therapy (CBT)",
// //     shortDescription: "A structured, evidence-based approach to changing unhelpful thought patterns.",
// //     metaTitle: "CBT Therapist in Navi Mumbai | Chaitanya Raj",
// //     metaDescription:
// //       "Cognitive Behavioural Therapy in Vashi, Navi Mumbai. A structured, practical approach to anxiety, depression and stress.",
// //     intro:
// //       "CBT is one of the most researched forms of talk therapy, built on a simple idea: thoughts, feelings and behaviour are closely linked, and changing one changes the others. Sessions are structured and goal-oriented, usually with practical exercises to try between sessions.",
// //     whatToExpect: [
// //       "An initial assessment to understand your specific thought and behaviour patterns",
// //       "Collaborative goal-setting for what you want to change",
// //       "Structured exercises to notice and challenge unhelpful thinking",
// //       "Between-session practice to apply what's discussed in real situations"
// //     ],
// //     goodFor: ["anxiety", "depression", "phobias-and-fears", "sleep-disorders", "anger-management"]
// //   },
// //   {
// //     slug: "behaviour-modification-therapy",
// //     name: "Behaviour Modification Therapy",
// //     shortDescription: "Working directly with habits and behaviours to build new, healthier patterns.",
// //     metaTitle: "Behaviour Modification Therapy in Navi Mumbai | Chaitanya Raj",
// //     metaDescription:
// //       "Behaviour modification therapy in Vashi, Navi Mumbai, for habit change, anger management and rebuilding routine after depression.",
// //     intro:
// //       "Rather than focusing primarily on thoughts, this approach works directly with behaviour — identifying what reinforces an unwanted pattern and building structured steps toward a healthier one.",
// //     whatToExpect: [
// //       "Mapping the specific triggers and reinforcements behind a pattern",
// //       "Small, achievable behavioural targets rather than one large change",
// //       "Regular review of what's working and what needs adjusting",
// //       "A focus on building routines that are genuinely sustainable"
// //     ],
// //     goodFor: ["depression", "anger-management"]
// //   },
// //   {
// //     slug: "clinical-hypnotherapy",
// //     name: "Clinical Hypnotherapy",
// //     shortDescription: "A recognised therapeutic technique using focused relaxation to work with the subconscious.",
// //     metaTitle: "Clinical Hypnotherapy in Navi Mumbai | Chaitanya Raj",
// //     metaDescription:
// //       "Clinical hypnotherapy in Vashi, Navi Mumbai, for anxiety, phobias, trauma and sleep — recognised by the British Psychological Society.",
// //     intro:
// //       "Clinical hypnotherapy uses a state of focused, relaxed attention to work with patterns that are harder to reach through conversation alone — particularly useful for phobias, deep-seated anxiety, and the body's automatic stress response. It's recognised by the British Psychological Society as an effective therapeutic technique when practised by a trained clinician.",
// //     whatToExpect: [
// //       "A clear explanation of the process before any session begins",
// //       "A guided state of focused relaxation — you remain aware and in control throughout",
// //       "Targeted work on the specific pattern being addressed",
// //       "Integration discussion afterward to connect the session to daily life"
// //     ],
// //     goodFor: ["anxiety", "phobias-and-fears", "trauma-and-ptsd", "sleep-disorders"]
// //   },
// //   {
// //     slug: "ego-state-therapy",
// //     name: "Ego State Therapy",
// //     shortDescription: "Working with different internal 'parts' of yourself that hold different memories and reactions.",
// //     metaTitle: "Ego State Therapy in Navi Mumbai | Chaitanya Raj",
// //     metaDescription:
// //       "Ego State Therapy in Vashi, Navi Mumbai, to work through unresolved trauma, grief and internal conflict in a structured, guided way.",
// //     intro:
// //       "Ego State Therapy works from the idea that we hold different internal 'parts' shaped by different experiences and ages — some protective, some wounded. Therapy helps these parts communicate rather than work against each other, particularly useful for unresolved trauma and grief.",
// //     whatToExpect: [
// //       "A gentle introduction to the concept before any deeper work",
// //       "Guided, structured sessions to access and work with specific states",
// //       "A pace led entirely by what feels manageable to you",
// //       "Integration work to bring insights into daily functioning"
// //     ],
// //     goodFor: ["trauma-and-ptsd", "grief-and-loss"]
// //   },
// //   {
// //     slug: "past-life-regression-therapy",
// //     name: "Past-Life Regression Therapy (PLRT)",
// //     shortDescription: "A guided hypnotic technique exploring past-life narratives believed to influence present-day patterns.",
// //     metaTitle: "Past-Life Regression Therapy (PLRT) in Navi Mumbai | Chaitanya Raj",
// //     metaDescription:
// //       "Past-Life Regression Therapy (PLRT) in Vashi, Navi Mumbai — a guided hypnotic technique used to explore unresolved patterns some clients trace to past-life narratives.",
// //     intro:
// //       "PLRT is a hypnosis-based technique in which a client, in a guided relaxed state, explores narratives experienced as memories from a past life. It sits outside mainstream evidence-based psychology and its effects are understood by practitioners as symbolic or narrative rather than literal — many clients find the process helps surface and reframe deep-seated fears or patterns that talk therapy alone hasn't shifted, regardless of how the phenomenon itself is interpreted.",
// //     whatToExpect: [
// //       "A clear, honest conversation about what PLRT is and isn't before beginning",
// //       "A guided hypnotic relaxation state, with you fully aware and able to stop at any point",
// //       "Space to explore whatever narrative or imagery arises",
// //       "A grounding and integration conversation afterward"
// //     ],
// //     goodFor: []
// //   },
// //   {
// //     slug: "spirit-release-therapy",
// //     name: "Spirit Release Therapy (SRT)",
// //     shortDescription: "A hypnotherapy-based technique some clients use to work through a felt sense of external attachment or influence.",
// //     metaTitle: "Spirit Release Therapy (SRT) in Navi Mumbai | Chaitanya Raj",
// //     metaDescription:
// //       "Spirit Release Therapy (SRT) in Vashi, Navi Mumbai — a specialised hypnotherapy technique for clients experiencing a felt sense of external attachment or influence.",
// //     intro:
// //       "SRT is a specialised hypnotherapy technique used with clients who describe a persistent felt sense of an external presence or influence. As with PLRT, this approach sits outside mainstream clinical psychology; it's offered for clients who specifically seek it, following an honest conversation about what the process involves.",
// //     whatToExpect: [
// //       "A thorough initial conversation to understand what you're experiencing",
// //       "A clear explanation of the technique and its scope before any session begins",
// //       "A guided hypnotherapy session tailored to what you've described",
// //       "Follow-up support to integrate the session"
// //     ],
// //     goodFor: []
// //   },
// //   {
// //     slug: "age-regression",
// //     name: "Age Regression",
// //     shortDescription: "A hypnotic technique for revisiting an earlier memory to work through its lasting effect.",
// //     metaTitle: "Age Regression Therapy in Navi Mumbai | Chaitanya Raj",
// //     metaDescription:
// //       "Age Regression therapy in Vashi, Navi Mumbai — a hypnotic technique used to access and work through earlier memories connected to present-day patterns.",
// //     intro:
// //       "Age regression uses hypnosis to guide a client back to an earlier memory believed to be connected to a current difficulty, allowing it to be revisited and reprocessed with the resources and perspective of the present. It's a recognised technique within clinical hypnotherapy, often used alongside Ego State work.",
// //     whatToExpect: [
// //       "Identifying, together, which pattern or memory the session will focus on",
// //       "A guided relaxation state, with you aware and able to pause at any time",
// //       "Revisiting the memory with support to reprocess it",
// //       "Grounding back to the present before the session ends"
// //     ],
// //     goodFor: ["trauma-and-ptsd", "abandonment"]
// //   },
// //   {
// //     slug: "third-party-regression",
// //     name: "Third Party Regression / Hypnotherapy",
// //     shortDescription: "A technique some clients use to explore a difficult dynamic with someone else, in their absence.",
// //     metaTitle: "Third Party Regression Therapy in Navi Mumbai | Chaitanya Raj",
// //     metaDescription:
// //       "Third Party Regression / Hypnotherapy in Vashi, Navi Mumbai — exploring a difficult relational dynamic through guided hypnotic work.",
// //     intro:
// //       "This technique uses guided hypnotic work to explore a difficult dynamic with another person — living or deceased — from the client's own perspective, without that person present. It's typically used when a relationship or its unresolved ending is contributing to present-day distress.",
// //     whatToExpect: [
// //       "A conversation about the relationship or dynamic you want to work through",
// //       "A guided hypnotic session focused specifically on that relationship",
// //       "Space to process feelings that haven't had an outlet",
// //       "Integration discussion connecting the session to daily life"
// //     ],
// //     goodFor: ["grief-and-loss", "abandonment"]
// //   },
// //   {
// //     slug: "energy-exchange",
// //     name: "Energy Exchange",
// //     shortDescription: "A complementary relaxation-based technique used alongside talk therapy for stress relief.",
// //     metaTitle: "Energy Exchange Therapy in Navi Mumbai | Chaitanya Raj",
// //     metaDescription:
// //       "Energy Exchange sessions in Vashi, Navi Mumbai — a complementary relaxation technique offered alongside evidence-based counselling.",
// //     intro:
// //       "Energy Exchange is offered as a complementary relaxation practice, used alongside — never instead of — evidence-based counselling. It's best suited to clients looking for an additional grounding technique as part of a broader treatment plan.",
// //     whatToExpect: [
// //       "A conversation about how this fits alongside your existing treatment plan",
// //       "A calm, guided relaxation session",
// //       "Space for reflection afterward"
// //     ],
// //     goodFor: ["stress-and-burnout"]
// //   },
// //   {
// //     slug: "quantum-therapy",
// //     name: "Quantum Therapy",
// //     shortDescription: "A guided visualisation technique some clients use to explore beliefs at a deeper, symbolic level.",
// //     metaTitle: "Quantum Therapy in Navi Mumbai | Chaitanya Raj",
// //     metaDescription:
// //       "Quantum Therapy sessions in Vashi, Navi Mumbai — a guided visualisation technique offered as a complementary approach to belief-pattern work.",
// //     intro:
// //       "Quantum Therapy uses guided visualisation to work symbolically with deep-seated beliefs and patterns. Like PLRT and SRT, it's offered as a complementary approach outside mainstream clinical psychology, for clients who specifically seek this kind of work, always alongside an honest conversation about what it involves.",
// //     whatToExpect: [
// //       "A clear conversation about the technique before beginning",
// //       "A guided visualisation session",
// //       "Time afterward to discuss and integrate what came up"
// //     ],
// //     goodFor: []
// //   },
// //   {
// //     slug: "couples-and-relationship-counselling",
// //     name: "Couples & Relationship Counselling",
// //     shortDescription: "Structured support for communication breakdowns, conflict, or disconnection.",
// //     metaTitle: "Couples Counselling in Navi Mumbai | Chaitanya Raj",
// //     metaDescription:
// //       "Couples and relationship counselling in Vashi, Navi Mumbai, for communication, conflict and rebuilding connection.",
// //     intro:
// //       "Relationship difficulties rarely stem from one issue — they build from patterns of communication, unmet expectations, and cycles that are hard to see from inside them. Sessions create a structured, neutral space to work through these patterns together.",
// //     whatToExpect: [
// //       "Joint sessions focused on communication patterns, not blame",
// //       "Identifying the specific cycle driving repeated conflict",
// //       "Practical tools for de-escalating disagreements",
// //       "Individual sessions where useful, alongside joint work"
// //     ],
// //     goodFor: []
// //   },
// //   {
// //     slug: "mindfulness-based-therapy",
// //     name: "Mindfulness-Based Therapy",
// //     shortDescription: "Practical techniques for staying grounded under chronic stress or overwhelm.",
// //     metaTitle: "Mindfulness-Based Therapy in Navi Mumbai | Chaitanya Raj",
// //     metaDescription:
// //       "Mindfulness-based therapy in Vashi, Navi Mumbai, for chronic stress, burnout and staying grounded under pressure.",
// //     intro:
// //       "Mindfulness-based approaches build practical, teachable skills for staying present rather than swept up in stress or rumination — a useful complement to CBT for people dealing with chronic pressure or burnout.",
// //     whatToExpect: [
// //       "Guided practice in session, not just theory",
// //       "Techniques adapted to fit realistically into a busy schedule",
// //       "A focus on noticing patterns early, before they escalate",
// //       "Combining well with CBT for longer-term stress management"
// //     ],
// //     goodFor: ["stress-and-burnout"]
// //   }
// // ];

// // export function getTherapy(slug: string) {
// //   return therapies.find((t) => t.slug === slug);
// // }



// export type Therapy = {
//   slug: string;
//   name: string;
//   shortDescription: string;
//   metaTitle: string;
//   metaDescription: string;
//   intro: string;
//   whatToExpect: string[];
//   goodFor: string[]; // condition slugs
// };

// export const therapies: Therapy[] = [
//   {
//     slug: "cognitive-behavioural-therapy",
//     name: "Cognitive Behavioural Therapy (CBT)",
//     shortDescription: "A structured, evidence-based approach to changing unhelpful thought patterns.",
//     metaTitle: "CBT Therapist in Navi Mumbai | Chaitanya Raj",
//     metaDescription:
//       "Cognitive Behavioural Therapy in Vashi, Navi Mumbai. A structured, practical approach to anxiety, depression and stress.",
//     intro:
//       "CBT is one of the most researched forms of talk therapy, built on a simple idea: thoughts, feelings and behaviour are closely linked, and changing one changes the others. Sessions are structured and goal-oriented, usually with practical exercises to try between sessions.",
//     whatToExpect: [
//       "An initial assessment to understand your specific thought and behaviour patterns",
//       "Collaborative goal-setting for what you want to change",
//       "Structured exercises to notice and challenge unhelpful thinking",
//       "Between-session practice to apply what's discussed in real situations"
//     ],
//     goodFor: ["anxiety-therapy-navi-mumbai", "depression-therapy-navi-mumbai", "phobias-and-fears", "sleep-disorders", "anger-management"]
//   },
//   {
//     slug: "behaviour-modification-therapy",
//     name: "Behaviour Modification Therapy",
//     shortDescription: "Working directly with habits and behaviours to build new, healthier patterns.",
//     metaTitle: "Behaviour Modification Therapy in Navi Mumbai | Chaitanya Raj",
//     metaDescription:
//       "Behaviour modification therapy in Vashi, Navi Mumbai, for habit change, anger management and rebuilding routine after depression.",
//     intro:
//       "Rather than focusing primarily on thoughts, this approach works directly with behaviour — identifying what reinforces an unwanted pattern and building structured steps toward a healthier one.",
//     whatToExpect: [
//       "Mapping the specific triggers and reinforcements behind a pattern",
//       "Small, achievable behavioural targets rather than one large change",
//       "Regular review of what's working and what needs adjusting",
//       "A focus on building routines that are genuinely sustainable"
//     ],
//     goodFor: ["depression-therapy-navi-mumbai", "anger-management"]
//   },
//   {
//     slug: "clinical-hypnotherapy",
//     name: "Clinical Hypnotherapy",
//     shortDescription: "A recognised therapeutic technique using focused relaxation to work with the subconscious.",
//     metaTitle: "Clinical Hypnotherapy in Navi Mumbai | Chaitanya Raj",
//     metaDescription:
//       "Clinical hypnotherapy in Vashi, Navi Mumbai, for anxiety, phobias, trauma and sleep — recognised by the British Psychological Society.",
//     intro:
//       "Clinical hypnotherapy uses a state of focused, relaxed attention to work with patterns that are harder to reach through conversation alone — particularly useful for phobias, deep-seated anxiety, and the body's automatic stress response. It's recognised by the British Psychological Society as an effective therapeutic technique when practised by a trained clinician.",
//     whatToExpect: [
//       "A clear explanation of the process before any session begins",
//       "A guided state of focused relaxation — you remain aware and in control throughout",
//       "Targeted work on the specific pattern being addressed",
//       "Integration discussion afterward to connect the session to daily life"
//     ],
//     goodFor: ["anxiety-therapy-navi-mumbai", "phobias-and-fears", "trauma-and-ptsd", "sleep-disorders"]
//   },
//   {
//     slug: "ego-state-therapy",
//     name: "Ego State Therapy",
//     shortDescription: "Working with different internal 'parts' of yourself that hold different memories and reactions.",
//     metaTitle: "Ego State Therapy in Navi Mumbai | Chaitanya Raj",
//     metaDescription:
//       "Ego State Therapy in Vashi, Navi Mumbai, to work through unresolved trauma, grief and internal conflict in a structured, guided way.",
//     intro:
//       "Ego State Therapy works from the idea that we hold different internal 'parts' shaped by different experiences and ages — some protective, some wounded. Therapy helps these parts communicate rather than work against each other, particularly useful for unresolved trauma and grief.",
//     whatToExpect: [
//       "A gentle introduction to the concept before any deeper work",
//       "Guided, structured sessions to access and work with specific states",
//       "A pace led entirely by what feels manageable to you",
//       "Integration work to bring insights into daily functioning"
//     ],
//     goodFor: ["trauma-and-ptsd", "grief-and-loss"]
//   },
//   {
//     slug: "past-life-regression-technique",
//     name: "Past-Life Regression Therapy (PLRT)",
//     shortDescription: "A guided hypnotic technique exploring past-life narratives believed to influence present-day patterns.",
//     metaTitle: "How Past-Life Regression Therapy Works | Chaitanya Raj",
//     metaDescription:
//       "How Past-Life Regression Therapy (PLRT) works as a hypnotherapy technique. For sessions and booking, see our full PLRT service page.",
//     intro:
//       "PLRT is a hypnosis-based technique in which a client, in a guided relaxed state, explores narratives experienced as memories from a past life. It sits outside mainstream evidence-based psychology and its effects are understood by practitioners as symbolic or narrative rather than literal — many clients find the process helps surface and reframe deep-seated fears or patterns that talk therapy alone hasn't shifted, regardless of how the phenomenon itself is interpreted.",
//     whatToExpect: [
//       "A clear, honest conversation about what PLRT is and isn't before beginning",
//       "A guided hypnotic relaxation state, with you fully aware and able to stop at any point",
//       "Space to explore whatever narrative or imagery arises",
//       "A grounding and integration conversation afterward"
//     ],
//     goodFor: []
//   },
//   {
//     slug: "spirit-release-therapy",
//     name: "Spirit Release Therapy (SRT)",
//     shortDescription: "A hypnotherapy-based technique some clients use to work through a felt sense of external attachment or influence.",
//     metaTitle: "Spirit Release Therapy (SRT) in Navi Mumbai | Chaitanya Raj",
//     metaDescription:
//       "Spirit Release Therapy (SRT) in Vashi, Navi Mumbai — a specialised hypnotherapy technique for clients experiencing a felt sense of external attachment or influence.",
//     intro:
//       "SRT is a specialised hypnotherapy technique used with clients who describe a persistent felt sense of an external presence or influence. As with PLRT, this approach sits outside mainstream clinical psychology; it's offered for clients who specifically seek it, following an honest conversation about what the process involves.",
//     whatToExpect: [
//       "A thorough initial conversation to understand what you're experiencing",
//       "A clear explanation of the technique and its scope before any session begins",
//       "A guided hypnotherapy session tailored to what you've described",
//       "Follow-up support to integrate the session"
//     ],
//     goodFor: []
//   },
//   {
//     slug: "age-regression",
//     name: "Age Regression",
//     shortDescription: "A hypnotic technique for revisiting an earlier memory to work through its lasting effect.",
//     metaTitle: "Age Regression Therapy in Navi Mumbai | Chaitanya Raj",
//     metaDescription:
//       "Age Regression therapy in Vashi, Navi Mumbai — a hypnotic technique used to access and work through earlier memories connected to present-day patterns.",
//     intro:
//       "Age regression uses hypnosis to guide a client back to an earlier memory believed to be connected to a current difficulty, allowing it to be revisited and reprocessed with the resources and perspective of the present. It's a recognised technique within clinical hypnotherapy, often used alongside Ego State work.",
//     whatToExpect: [
//       "Identifying, together, which pattern or memory the session will focus on",
//       "A guided relaxation state, with you aware and able to pause at any time",
//       "Revisiting the memory with support to reprocess it",
//       "Grounding back to the present before the session ends"
//     ],
//     goodFor: ["trauma-and-ptsd", "abandonment"]
//   },
//   {
//     slug: "third-party-regression",
//     name: "Third Party Regression / Hypnotherapy",
//     shortDescription: "A technique some clients use to explore a difficult dynamic with someone else, in their absence.",
//     metaTitle: "Third Party Regression Therapy in Navi Mumbai | Chaitanya Raj",
//     metaDescription:
//       "Third Party Regression / Hypnotherapy in Vashi, Navi Mumbai — exploring a difficult relational dynamic through guided hypnotic work.",
//     intro:
//       "This technique uses guided hypnotic work to explore a difficult dynamic with another person — living or deceased — from the client's own perspective, without that person present. It's typically used when a relationship or its unresolved ending is contributing to present-day distress.",
//     whatToExpect: [
//       "A conversation about the relationship or dynamic you want to work through",
//       "A guided hypnotic session focused specifically on that relationship",
//       "Space to process feelings that haven't had an outlet",
//       "Integration discussion connecting the session to daily life"
//     ],
//     goodFor: ["grief-and-loss", "abandonment"]
//   },
//   {
//     slug: "energy-exchange",
//     name: "Energy Exchange",
//     shortDescription: "A complementary relaxation-based technique used alongside talk therapy for stress relief.",
//     metaTitle: "Energy Exchange Therapy in Navi Mumbai | Chaitanya Raj",
//     metaDescription:
//       "Energy Exchange sessions in Vashi, Navi Mumbai — a complementary relaxation technique offered alongside evidence-based counselling.",
//     intro:
//       "Energy Exchange is offered as a complementary relaxation practice, used alongside — never instead of — evidence-based counselling. It's best suited to clients looking for an additional grounding technique as part of a broader treatment plan.",
//     whatToExpect: [
//       "A conversation about how this fits alongside your existing treatment plan",
//       "A calm, guided relaxation session",
//       "Space for reflection afterward"
//     ],
//     goodFor: ["stress-and-burnout"]
//   },
//   {
//     slug: "quantum-therapy",
//     name: "Quantum Therapy",
//     shortDescription: "A guided visualisation technique some clients use to explore beliefs at a deeper, symbolic level.",
//     metaTitle: "Quantum Therapy in Navi Mumbai | Chaitanya Raj",
//     metaDescription:
//       "Quantum Therapy sessions in Vashi, Navi Mumbai — a guided visualisation technique offered as a complementary approach to belief-pattern work.",
//     intro:
//       "Quantum Therapy uses guided visualisation to work symbolically with deep-seated beliefs and patterns. Like PLRT and SRT, it's offered as a complementary approach outside mainstream clinical psychology, for clients who specifically seek this kind of work, always alongside an honest conversation about what it involves.",
//     whatToExpect: [
//       "A clear conversation about the technique before beginning",
//       "A guided visualisation session",
//       "Time afterward to discuss and integrate what came up"
//     ],
//     goodFor: []
//   },
//   {
//     slug: "couples-and-relationship-counselling",
//     name: "Couples & Relationship Counselling",
//     shortDescription: "Structured support for communication breakdowns, conflict, or disconnection.",
//     metaTitle: "Couples Counselling in Navi Mumbai | Chaitanya Raj",
//     metaDescription:
//       "Couples and relationship counselling in Vashi, Navi Mumbai, for communication, conflict and rebuilding connection.",
//     intro:
//       "Relationship difficulties rarely stem from one issue — they build from patterns of communication, unmet expectations, and cycles that are hard to see from inside them. Sessions create a structured, neutral space to work through these patterns together.",
//     whatToExpect: [
//       "Joint sessions focused on communication patterns, not blame",
//       "Identifying the specific cycle driving repeated conflict",
//       "Practical tools for de-escalating disagreements",
//       "Individual sessions where useful, alongside joint work"
//     ],
//     goodFor: []
//   },
//   {
//     slug: "mindfulness-based-therapy",
//     name: "Mindfulness-Based Therapy",
//     shortDescription: "Practical techniques for staying grounded under chronic stress or overwhelm.",
//     metaTitle: "Mindfulness-Based Therapy in Navi Mumbai | Chaitanya Raj",
//     metaDescription:
//       "Mindfulness-based therapy in Vashi, Navi Mumbai, for chronic stress, burnout and staying grounded under pressure.",
//     intro:
//       "Mindfulness-based approaches build practical, teachable skills for staying present rather than swept up in stress or rumination — a useful complement to CBT for people dealing with chronic pressure or burnout.",
//     whatToExpect: [
//       "Guided practice in session, not just theory",
//       "Techniques adapted to fit realistically into a busy schedule",
//       "A focus on noticing patterns early, before they escalate",
//       "Combining well with CBT for longer-term stress management"
//     ],
//     goodFor: ["stress-and-burnout"]
//   }
// ];

// export function getTherapy(slug: string) {
//   return therapies.find((t) => t.slug === slug);
// }


export type Therapy = {
  slug: string;
  name: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  whatToExpect: string[];
  goodFor: string[]; // condition slugs
};

export const therapies: Therapy[] = [
  {
    slug: "cognitive-behavioural-therapy",
    name: "Cognitive Behavioural Therapy (CBT)",
    shortDescription: "A structured, evidence-based approach to changing unhelpful thought patterns.",
    metaTitle: "CBT Therapist in Navi Mumbai | Chaitanya Raj",
    metaDescription:
      "Cognitive Behavioural Therapy in Vashi, Navi Mumbai. A structured, practical approach to anxiety, depression and stress.",
    intro:
      "CBT is one of the most researched forms of talk therapy, built on a simple idea: thoughts, feelings and behaviour are closely linked, and changing one changes the others. Sessions are structured and goal-oriented, usually with practical exercises to try between sessions.",
    whatToExpect: [
      "An initial assessment to understand your specific thought and behaviour patterns",
      "Collaborative goal-setting for what you want to change",
      "Structured exercises to notice and challenge unhelpful thinking",
      "Between-session practice to apply what's discussed in real situations"
    ],
    goodFor: ["anxiety-therapy-navi-mumbai", "depression-therapy-navi-mumbai", "phobia-treatment-navi-mumbai", "sleep-disorder-counselling-navi-mumbai", "anger-management-counselling-navi-mumbai"]
  },
  {
    slug: "behaviour-modification-therapy",
    name: "Behaviour Modification Therapy",
    shortDescription: "Working directly with habits and behaviours to build new, healthier patterns.",
    metaTitle: "Behaviour Modification Therapy in Navi Mumbai | Chaitanya Raj",
    metaDescription:
      "Behaviour modification therapy in Vashi, Navi Mumbai, for habit change, anger management and rebuilding routine after depression.",
    intro:
      "Rather than focusing primarily on thoughts, this approach works directly with behaviour — identifying what reinforces an unwanted pattern and building structured steps toward a healthier one.",
    whatToExpect: [
      "Mapping the specific triggers and reinforcements behind a pattern",
      "Small, achievable behavioural targets rather than one large change",
      "Regular review of what's working and what needs adjusting",
      "A focus on building routines that are genuinely sustainable"
    ],
    goodFor: ["depression-therapy-navi-mumbai", "anger-management-counselling-navi-mumbai"]
  },
  {
    slug: "clinical-hypnotherapy",
    name: "Clinical Hypnotherapy",
    shortDescription: "A recognised therapeutic technique using focused relaxation to work with the subconscious.",
    metaTitle: "Clinical Hypnotherapy in Navi Mumbai | Chaitanya Raj",
    metaDescription:
      "Clinical hypnotherapy in Vashi, Navi Mumbai, for anxiety, phobias, trauma and sleep — recognised by the British Psychological Society.",
    intro:
      "Clinical hypnotherapy uses a state of focused, relaxed attention to work with patterns that are harder to reach through conversation alone — particularly useful for phobias, deep-seated anxiety, and the body's automatic stress response. It's recognised by the British Psychological Society as an effective therapeutic technique when practised by a trained clinician.",
    whatToExpect: [
      "A clear explanation of the process before any session begins",
      "A guided state of focused relaxation — you remain aware and in control throughout",
      "Targeted work on the specific pattern being addressed",
      "Integration discussion afterward to connect the session to daily life"
    ],
    goodFor: ["anxiety-therapy-navi-mumbai", "phobia-treatment-navi-mumbai", "trauma-ptsd-counselling-navi-mumbai", "sleep-disorder-counselling-navi-mumbai"]
  },
  {
    slug: "ego-state-therapy",
    name: "Ego State Therapy",
    shortDescription: "Working with different internal 'parts' of yourself that hold different memories and reactions.",
    metaTitle: "Ego State Therapy in Navi Mumbai | Chaitanya Raj",
    metaDescription:
      "Ego State Therapy in Vashi, Navi Mumbai, to work through unresolved trauma, grief and internal conflict in a structured, guided way.",
    intro:
      "Ego State Therapy works from the idea that we hold different internal 'parts' shaped by different experiences and ages — some protective, some wounded. Therapy helps these parts communicate rather than work against each other, particularly useful for unresolved trauma and grief.",
    whatToExpect: [
      "A gentle introduction to the concept before any deeper work",
      "Guided, structured sessions to access and work with specific states",
      "A pace led entirely by what feels manageable to you",
      "Integration work to bring insights into daily functioning"
    ],
    goodFor: ["trauma-ptsd-counselling-navi-mumbai", "grief-counselling-navi-mumbai"]
  },
  {
    slug: "past-life-regression-technique",
    name: "Past-Life Regression Therapy (PLRT)",
    shortDescription: "A guided hypnotic technique exploring past-life narratives believed to influence present-day patterns.",
    metaTitle: "How Past-Life Regression Therapy Works | Chaitanya Raj",
    metaDescription:
      "How Past-Life Regression Therapy (PLRT) works as a hypnotherapy technique. For sessions and booking, see our full PLRT service page.",
    intro:
      "PLRT is a hypnosis-based technique in which a client, in a guided relaxed state, explores narratives experienced as memories from a past life. It sits outside mainstream evidence-based psychology and its effects are understood by practitioners as symbolic or narrative rather than literal — many clients find the process helps surface and reframe deep-seated fears or patterns that talk therapy alone hasn't shifted, regardless of how the phenomenon itself is interpreted.",
    whatToExpect: [
      "A clear, honest conversation about what PLRT is and isn't before beginning",
      "A guided hypnotic relaxation state, with you fully aware and able to stop at any point",
      "Space to explore whatever narrative or imagery arises",
      "A grounding and integration conversation afterward"
    ],
    goodFor: []
  },
  {
    slug: "spirit-release-therapy",
    name: "Spirit Release Therapy (SRT)",
    shortDescription: "A hypnotherapy-based technique some clients use to work through a felt sense of external attachment or influence.",
    metaTitle: "Spirit Release Therapy (SRT) in Navi Mumbai | Chaitanya Raj",
    metaDescription:
      "Spirit Release Therapy (SRT) in Vashi, Navi Mumbai — a specialised hypnotherapy technique for clients experiencing a felt sense of external attachment or influence.",
    intro:
      "SRT is a specialised hypnotherapy technique used with clients who describe a persistent felt sense of an external presence or influence. As with PLRT, this approach sits outside mainstream clinical psychology; it's offered for clients who specifically seek it, following an honest conversation about what the process involves.",
    whatToExpect: [
      "A thorough initial conversation to understand what you're experiencing",
      "A clear explanation of the technique and its scope before any session begins",
      "A guided hypnotherapy session tailored to what you've described",
      "Follow-up support to integrate the session"
    ],
    goodFor: []
  },
  {
    slug: "age-regression",
    name: "Age Regression",
    shortDescription: "A hypnotic technique for revisiting an earlier memory to work through its lasting effect.",
    metaTitle: "Age Regression Therapy in Navi Mumbai | Chaitanya Raj",
    metaDescription:
      "Age Regression therapy in Vashi, Navi Mumbai — a hypnotic technique used to access and work through earlier memories connected to present-day patterns.",
    intro:
      "Age regression uses hypnosis to guide a client back to an earlier memory believed to be connected to a current difficulty, allowing it to be revisited and reprocessed with the resources and perspective of the present. It's a recognised technique within clinical hypnotherapy, often used alongside Ego State work.",
    whatToExpect: [
      "Identifying, together, which pattern or memory the session will focus on",
      "A guided relaxation state, with you aware and able to pause at any time",
      "Revisiting the memory with support to reprocess it",
      "Grounding back to the present before the session ends"
    ],
    goodFor: ["trauma-ptsd-counselling-navi-mumbai", "abandonment-counselling-navi-mumbai"]
  },
  {
    slug: "third-party-regression",
    name: "Third Party Regression / Hypnotherapy",
    shortDescription: "A technique some clients use to explore a difficult dynamic with someone else, in their absence.",
    metaTitle: "Third Party Regression Therapy in Navi Mumbai | Chaitanya Raj",
    metaDescription:
      "Third Party Regression / Hypnotherapy in Vashi, Navi Mumbai — exploring a difficult relational dynamic through guided hypnotic work.",
    intro:
      "This technique uses guided hypnotic work to explore a difficult dynamic with another person — living or deceased — from the client's own perspective, without that person present. It's typically used when a relationship or its unresolved ending is contributing to present-day distress.",
    whatToExpect: [
      "A conversation about the relationship or dynamic you want to work through",
      "A guided hypnotic session focused specifically on that relationship",
      "Space to process feelings that haven't had an outlet",
      "Integration discussion connecting the session to daily life"
    ],
    goodFor: ["grief-counselling-navi-mumbai", "abandonment-counselling-navi-mumbai"]
  },
  {
    slug: "energy-exchange",
    name: "Energy Exchange",
    shortDescription: "A complementary relaxation-based technique used alongside talk therapy for stress relief.",
    metaTitle: "Energy Exchange Therapy in Navi Mumbai | Chaitanya Raj",
    metaDescription:
      "Energy Exchange sessions in Vashi, Navi Mumbai — a complementary relaxation technique offered alongside evidence-based counselling.",
    intro:
      "Energy Exchange is offered as a complementary relaxation practice, used alongside — never instead of — evidence-based counselling. It's best suited to clients looking for an additional grounding technique as part of a broader treatment plan.",
    whatToExpect: [
      "A conversation about how this fits alongside your existing treatment plan",
      "A calm, guided relaxation session",
      "Space for reflection afterward"
    ],
    goodFor: ["stress-burnout-counselling-navi-mumbai"]
  },
  {
    slug: "quantum-therapy",
    name: "Quantum Therapy",
    shortDescription: "A guided visualisation technique some clients use to explore beliefs at a deeper, symbolic level.",
    metaTitle: "Quantum Therapy in Navi Mumbai | Chaitanya Raj",
    metaDescription:
      "Quantum Therapy sessions in Vashi, Navi Mumbai — a guided visualisation technique offered as a complementary approach to belief-pattern work.",
    intro:
      "Quantum Therapy uses guided visualisation to work symbolically with deep-seated beliefs and patterns. Like PLRT and SRT, it's offered as a complementary approach outside mainstream clinical psychology, for clients who specifically seek this kind of work, always alongside an honest conversation about what it involves.",
    whatToExpect: [
      "A clear conversation about the technique before beginning",
      "A guided visualisation session",
      "Time afterward to discuss and integrate what came up"
    ],
    goodFor: []
  },
  {
    slug: "couples-and-relationship-counselling",
    name: "Couples & Relationship Counselling",
    shortDescription: "Structured support for communication breakdowns, conflict, or disconnection.",
    metaTitle: "Couples Counselling in Navi Mumbai | Chaitanya Raj",
    metaDescription:
      "Couples and relationship counselling in Vashi, Navi Mumbai, for communication, conflict and rebuilding connection.",
    intro:
      "Relationship difficulties rarely stem from one issue — they build from patterns of communication, unmet expectations, and cycles that are hard to see from inside them. Sessions create a structured, neutral space to work through these patterns together.",
    whatToExpect: [
      "Joint sessions focused on communication patterns, not blame",
      "Identifying the specific cycle driving repeated conflict",
      "Practical tools for de-escalating disagreements",
      "Individual sessions where useful, alongside joint work"
    ],
    goodFor: []
  },
  {
    slug: "mindfulness-based-therapy",
    name: "Mindfulness-Based Therapy",
    shortDescription: "Practical techniques for staying grounded under chronic stress or overwhelm.",
    metaTitle: "Mindfulness-Based Therapy in Navi Mumbai | Chaitanya Raj",
    metaDescription:
      "Mindfulness-based therapy in Vashi, Navi Mumbai, for chronic stress, burnout and staying grounded under pressure.",
    intro:
      "Mindfulness-based approaches build practical, teachable skills for staying present rather than swept up in stress or rumination — a useful complement to CBT for people dealing with chronic pressure or burnout.",
    whatToExpect: [
      "Guided practice in session, not just theory",
      "Techniques adapted to fit realistically into a busy schedule",
      "A focus on noticing patterns early, before they escalate",
      "Combining well with CBT for longer-term stress management"
    ],
    goodFor: ["stress-burnout-counselling-navi-mumbai"]
  }
];

export function getTherapy(slug: string) {
  return therapies.find((t) => t.slug === slug);
}