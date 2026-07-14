export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  date: string; // ISO
  author: string;
  readingTime: string;
  body: string[]; // paragraphs
};

export const blogPosts: BlogPost[] = [
  {
    slug: "grounding-techniques-before-a-big-moment",
    title: "5 Grounding Techniques for Anxiety Before an Exam or Interview",
    excerpt:
      "Simple, discreet techniques you can use minutes before a high-pressure moment to bring your nervous system back to baseline.",
    metaDescription:
      "Five practical grounding techniques for anxiety before exams, interviews or presentations, from a psychology practice in Navi Mumbai.",
    date: "2026-05-02",
    author: "Chaitanya Raj Team",
    readingTime: "4 min read",
    body: [
      "The minutes before a big exam or interview are rarely the moment to start deep emotional work — what's more useful is a small set of techniques that calm the body quickly enough to think clearly again.",
      "Start with your breath, but change the ratio rather than just 'breathing deeply'. A longer exhale than inhale — for instance, in for four counts, out for six — signals safety to the nervous system faster than breathing deeply alone.",
      "Name five things you can see, four you can hear, three you can physically feel, two you can smell, and one you can taste. This '5-4-3-2-1' technique interrupts spiralling thoughts by redirecting attention to the present moment through the senses.",
      "Press your feet firmly into the floor and notice the contact point. It sounds small, but proprioceptive grounding — feeling your body's physical connection to something stable — reliably reduces the sensation of 'floating' anxiety.",
      "Give the nervous system a job: tense your shoulders hard for five seconds, then release. A short burst of controlled physical tension, followed by release, mimics the natural stress-response cycle and helps complete it instead of leaving it unresolved.",
      "If anxiety around specific high-pressure moments keeps recurring, it's often a sign the underlying pattern is worth addressing directly, rather than only managing the symptoms in the moment."
    ]
  },
  {
    slug: "supporting-a-partner-through-depression",
    title: "How to Support a Partner Going Through Depression",
    excerpt:
      "Practical, realistic guidance for supporting someone you love without losing yourself in the process.",
    metaDescription:
      "Guidance for supporting a partner with depression — what helps, what to avoid, and when to encourage professional support.",
    date: "2026-04-18",
    author: "Chaitanya Raj Team",
    readingTime: "5 min read",
    body: [
      "Watching someone you love go through depression can leave you feeling helpless, especially when the usual encouragement — 'just try to get out more', 'think positive' — doesn't seem to land.",
      "The most useful starting point is usually acknowledgment rather than advice. Depression often comes with a quiet belief that no one really understands, so simply naming what you observe — 'this has been really heavy for you lately' — tends to land better than suggestions.",
      "Avoid taking withdrawal personally. Reduced energy for conversation, plans, or affection is frequently a symptom of depression itself, not a reflection of the relationship.",
      "Offer specific, low-effort help rather than open-ended offers. 'Can I bring dinner over on Thursday' is easier to accept than 'let me know if you need anything', which puts the burden of asking back on someone who's already depleted.",
      "Protect your own capacity too. Supporting someone through depression over weeks or months is genuinely demanding, and burning out yourself helps no one — it's reasonable to have your own support in place as well.",
      "If low mood has lasted more than two weeks, is affecting daily functioning, or involves thoughts of self-harm, professional support is worth encouraging directly and without judgement."
    ]
  },
  {
    slug: "what-happens-in-your-first-cbt-session",
    title: "Understanding CBT: What Happens in Your First Session",
    excerpt:
      "A walkthrough of what to expect from an initial Cognitive Behavioural Therapy consultation, for anyone nervous about starting.",
    metaDescription:
      "What to expect in your first CBT session — from assessment to goal-setting — explained by a psychology practice in Navi Mumbai.",
    date: "2026-03-22",
    author: "Chaitanya Raj Team",
    readingTime: "4 min read",
    body: [
      "A lot of the anxiety around starting therapy comes from simply not knowing what the first session looks like. With CBT, the structure is usually more straightforward than people expect.",
      "The first session is primarily an assessment — understanding what's brought you in, how long it's been going on, and what a specific recent example of the difficulty looked like in practice.",
      "You'll typically be asked about the connection between a specific situation, the thoughts that came up, the feelings that followed, and what you did as a result. This 'situation-thought-feeling-behaviour' chain is the basic working model CBT uses.",
      "Rather than open-ended exploration, CBT sessions tend to have a clear agenda, usually set collaboratively at the start of each session so time is spent on what matters most that week.",
      "By the end of the first session, most people leave with a clearer working model of their pattern, and often one small, specific exercise to try before the next session.",
      "There's no obligation to commit to a fixed number of sessions upfront — progress is usually reviewed regularly, and the plan adjusts based on what's actually working."
    ]
  }
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
