

export type ConditionVariant = {
  title: string;
  description: string;
};

export type ConditionFAQ = {
  question: string;
  answer: string;
};

export type ConditionBenefit = {
  title: string;
  description: string;
};

export type ContentSection = {
  title: string;
  description: string;
};

export type Condition = {
  slug: string;
  name: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  image: string; // path under /public, e.g. "/images/conditions/anxiety.jpg" — used on the card and as the detail page hero
  imageAlt: string; // descriptive alt text, e.g. "Person sitting calmly during an anxiety therapy session in Navi Mumbai"
  intro: string;
  signs: string[];
  signsHeading?: string;
  process?: string; // optional: how the first session / early sessions work
  variants?: ConditionVariant[]; // optional: sub-forms of the condition (e.g. panic, social anxiety)
  approach: string;
  approachPoints?: string[]; // optional: bullet breakdown of the approach
  faqs?: ConditionFAQ[]; // optional: condition-specific FAQs
  relatedTherapies: string[]; // therapy slugs
  category?: "Condition" | "Therapy" | "Service";
  audience?: "individual" | "corporate"; // which nav/page group this condition appears under — unset defaults to "individual"

  benefits?: ConditionBenefit[];
  locations?: string[];
};

export const conditions: Condition[] = [
  {
    slug: "anxiety-therapy-navi-mumbai",
    name: "Anxiety",
    audience: "individual",
    shortDescription: "Persistent worry, racing thoughts, or a body that won't settle.",
    metaTitle: "Anxiety & Panic Therapy in Navi Mumbai | Chaitanya Raj",
    metaDescription:
      "Evidence-based anxiety, panic, and social anxiety therapy in Vashi, Navi Mumbai. CBT and hypnotherapy with 25+ years' experience. Book a consultation.",
    image: "/images/conditions/anxiety-therapy-navi-mumbai.png",
    imageAlt: "Placeholder — replace with a descriptive alt text for anxiety therapy navi mumbai",
    intro:
      "A racing heart before a meeting that hasn't even started yet. A text replayed in your head for hours. A knot in your stomach that won't loosen, even when nothing is technically wrong. If this sounds familiar, you're not overreacting, and you're not 'just stressed' you're dealing with anxiety, and it responds well to the right kind of help. At Chaitanya Raj in Vashi & Belapur, Navi Mumbai, we work with anxiety in its many forms, led by Lt. Col. Rajesh Sharma (Retd), with over 25 years of experience in hypnotherapy and cognitive behavioural approaches.",
    signs: [
      "Racing or repetitive worry that's hard to switch off",
      "Physical symptoms :- tight chest, palpitations, racing heart, restlessness, disturbed sleep",
      "Avoiding situations that used to feel manageable",
      "A constant sense of being 'on edge' without a clear reason"
    ],
    process:
      "Anxiety counselling starts with understanding your specific pattern what triggers it, how it shows up in your body, and what you've already tried. Your first session is a conversation: what's going on, how long it's been happening, and what a realistic path forward looks like. From there, we build a plan using cognitive behavioural techniques and, where useful, hypnotherapy, to help you interrupt the anxiety cycle.",
    variants: [
      {
        title: "Panic Attack Therapy",
        description:
          "A racing heart. Tight chest. Sudden dizziness. A feeling that something is seriously wrong, even when a doctor has confirmed nothing is. Panic attack therapy focuses on two things at once: giving you tools to calm your body in the moment, and working on the underlying anxiety so attacks become less frequent and less intense over time."
      },
      {
        title: "Social Anxiety Therapy",
        description:
          "Dreading a meeting because you'll have to speak. Rehearsing a simple hello before a party. Social anxiety isn't shyness it's a persistent fear of being judged that can quietly shape where you go, what you say, and what opportunities you turn down. Therapy focuses on the specific situations that trigger you and builds confidence gradually, rather than asking you to 'just relax.'"
      },
      {
        title: "Stress and Anxiety Therapy",
        description:
          "Most people don't experience stress and anxiety as two separate things — they blur into each other. Work pressure turns into constant worry; constant worry turns into trouble sleeping. This track looks at the whole picture: what's driving the stress, how it's turned into anxiety, and how to break the cycle before it becomes chronic."
      }
    ],
    approach:
      "Our approach combines Cognitive Behavioural Therapy (CBT) and clinical hypnotherapy, tailored to how your anxiety actually shows up not a fixed programme applied to everyone.",
    approachPoints: [
      "An initial session to understand your history and current symptoms",
      "A structured plan with realistic milestones",
      "Practical tools you can use between sessions",
      "25+ years of clinical experience working specifically with anxiety, panic, and stress"
    ],
    faqs: [
      {
        question: "How do I know if I have anxiety or just stress?",
        answer:
          "Stress usually has a clear cause and eases once that cause is resolved. Anxiety tends to persist, or shows up even when there's no obvious trigger, and often comes with physical symptoms like a racing heart or trouble sleeping. If it's been going on for weeks or is affecting your daily life, it's worth having it assessed."
      },
      {
        question: "How many sessions does anxiety therapy usually take?",
        answer:
          "It varies by individual, but many clients see meaningful improvement within 5 to 7 sessions. Panic attacks and specific phobias can sometimes respond faster; long-standing generalised anxiety may take longer. We'll give you a realistic estimate after the first session."
      },
      {
        question: "Can hypnotherapy help with panic attacks?",
        answer:
          "Yes. Hypnotherapy can help calm the nervous system's response and reduce the frequency and intensity of panic attacks, particularly when combined with CBT techniques that address the underlying anxiety."
      },
      {
        question: "Is anxiety therapy confidential?",
        answer:
          "Yes, every session is completely confidential. What you share stays between you and your therapist."
      }
    ],
    relatedTherapies: ["cognitive-behavioural-therapy", "clinical-hypnotherapy"]
  },
  {
    slug: "ocd-therapy-navi-mumbai",
    name: "OCD (Obsessive-compulsive disorder)",
    audience: "individual",
    shortDescription: "Intrusive thoughts and the compulsions that follow, however small or hidden they've become.",
    metaTitle: "OCD Therapy in Navi Mumbai | Obsessive-Compulsive Disorder Counselling | Chaitanya Raj",
    metaDescription:
      "Evidence-based OCD therapy in Vashi & Belapur, Navi Mumbai. CBT with ERP and clinical hypnotherapy, led by Lt. Col. Rajesh Sharma (Retd), 25+ years experience. Book a consultation.",
    image: "/images/conditions/ocd-therapy-navi-mumbai.png",
    imageAlt: "Placeholder — replace with a descriptive alt text for ocd therapy navi mumbai",
    intro:
      "Checking the lock a fourth time, even though you already know it's locked. A thought that intrudes and won't leave until you've counted, arranged, or repeated something in a very particular way. An hour disappears to a ritual you didn't choose and can't quite explain to anyone else. OCD isn't about being tidy or particular it's a cycle of intrusive thoughts and the compulsions that temporarily relieve them, and it responds well to the right, structured treatment. At Chaitanya Raj in Vashi & Belapur, Navi Mumbai, we work with obsessive-compulsive disorder in its many forms, led by Lt. Col. Rajesh Sharma (Retd), with over 25 years of experience in hypnotherapy and cognitive behavioural approaches.",
    signs: [
      "Intrusive, unwanted thoughts that repeat and feel hard to dismiss",
      "Rituals or checking behaviours that need to be done a specific way, or repeated until it 'feels right'",
      "Time lost each day to compulsions, even ones that feel minor from the outside",
      "Avoiding people, places, or situations that tend to trigger the thoughts"
    ],
    process:
      "OCD counselling starts with mapping your specific obsessions and compulsions in detail what the thought is, what the compulsion looks like, and what happens if it isn't completed. Your first session is a conversation about how long this has been going on and how much space it's taking up in your day. From there, we build a graded plan using Exposure and Response Prevention (ERP) within a CBT framework, moving at a pace that's structured but never overwhelming.",
    variants: [
      {
        title: "Checking & Contamination OCD",
        description:
          "Repeated checking locks, switches, appliances or washing and cleaning rituals driven by a fear of contamination are among the most common presentations of OCD. Treatment uses graded ERP to gradually reduce the compulsion while working through the anxiety it's masking, rather than asking you to stop cold."
      },
      {
        title: "Intrusive Thoughts (Pure O)",
        description:
          "Not all OCD looks like visible rituals. Intrusive, unwanted thoughts often disturbing or out of character, with mental compulsions like reviewing, reassurance-seeking, or silent counting can be just as consuming and are frequently misunderstood, even by the person experiencing them. This track focuses specifically on reducing the mental compulsions and the anxiety driving them."
      },
      {
        title: "Symmetry, Ordering & Counting Compulsions",
        description:
          "A need for things to be arranged, aligned, or repeated a specific number of times until it 'feels right' can quietly take over daily routines. This track works with the specific triggers involved, gradually building tolerance for things being left 'undone' or imperfect."
      }
    ],
    approach:
      "Our approach combines Cognitive Behavioural Therapy with Exposure and Response Prevention (ERP), considered the gold-standard treatment for OCD, alongside clinical hypnotherapy where useful for managing underlying anxiety.",
    approachPoints: [
      "An initial session to map your specific obsessions, compulsions, and triggers",
      "A structured, graded ERP plan that never moves faster than you're ready for",
      "Practical tools for resisting compulsions between sessions",
      "25+ years of clinical experience working specifically with OCD and anxiety-related disorders"
    ],
    faqs: [
      {
        question: "How do I know if it's OCD or just being particular?",
        answer:
          "OCD involves genuine distress the thoughts feel intrusive and unwanted, and the compulsions take up real time or interfere with daily life, rather than simply reflecting a preference for order. If it's causing distress or eating into your day, it's worth having it assessed."
      },
      {
        question: "What is ERP and does it mean facing my worst fear right away?",
        answer:
          "Exposure and Response Prevention (ERP) is a structured form of CBT that gradually exposes you to a feared thought or situation while resisting the compulsion. It's done in a graded way, starting with less distressing triggers and building up, always at a pace you're ready for."
      },
      {
        question: "How many sessions does OCD therapy usually take?",
        answer:
          "It varies by individual and how long the pattern has been established, but many clients see meaningful improvement within 10 to 16 sessions of ERP-based CBT. A realistic estimate is shared after the first session."
      },
      {
        question: "Is OCD therapy confidential?",
        answer:
          "Yes, every session is completely confidential. What you share stays between you and your therapist."
      }
    ],
    relatedTherapies: ["cognitive-behavioural-therapy", "clinical-hypnotherapy"]
  },
  {
    slug: "depression-therapy-navi-mumbai",
    name: "Depression",
    audience: "individual",
    shortDescription: "Low mood, low energy, and a loss of interest in things that used to matter.",
    metaTitle: "Depression Therapy in Navi Mumbai | Mood Disorder & Emotional Wellbeing Counselling | Chaitanya Raj",
    metaDescription:
      "Feeling low, unmotivated, or disconnected? Get evidence-based depression counselling in Navi Mumbai with Lt. Col. Rajesh Sharma (Retd), 25+ years experience. Book a consultation today.",
    image: "/images/conditions/depression-therapy-navi-mumbai.png",
    imageAlt: "Placeholder — replace with a descriptive alt text for depression therapy navi mumbai",
    intro:
      "Getting out of bed feels harder than it used to. Things you once enjoyed have lost their pull. You're tired even after sleeping, or sleep won't come at all. People keep asking if you're okay, and you're searching for an honest answer. These feelings are real, and they respond well to the right kind of support — depression is treatable, and reaching out is a strong first step. At Chaitanya Raj in Vashi & Belapur, Navi Mumbai, we support people through persistent low mood, mood disorders, and the broader emotional disconnection that often comes with them, led by Lt. Col. Rajesh Sharma (Retd), with over 25 years of experience in hypnotherapy and cognitive behavioural approaches.",
    signs: [
      "Low energy or motivation that doesn't lift with rest",
      "Losing interest in things you'd usually enjoy",
      "Difficulty concentrating or making decisions",
      "Changes in appetite or sleep"
    ],
    process:
      "Depression counselling begins with understanding your story — when things shifted, how it shows up for you day to day, and what's already helped, even a little. Your first session is a conversation at your own pace, exploring what's changed and when, and a collaborative look at what support could look like for you. From there, we use cognitive behavioural techniques and, where helpful, hypnotherapy, to work with the patterns keeping the low mood in place.",
    variants: [
      {
        title: "Depression Therapy",
        description:
          "Depression can sit quietly beneath a functioning life — showing up for work, caring for family, while feeling flat inside. Depression therapy meets you at that level, working with the thought patterns, motivation, sleep, and energy that shape how you feel each day, understanding what's reinforcing the low mood and building small, achievable steps to reconnect with things that matter, tracked together session by session."
      },
      {
        title: "Mood Disorder Therapy",
        description:
          "Some depression carries clear highs and lows, or moves alongside anxiety, irritability, or shifting energy. Recognising this pattern is the first step toward the right kind of care — understanding your specific mood pattern in detail, identifying what triggers shifts and when they tend to happen, and building a plan suited to that particular pattern."
      },
      {
        title: "Emotional Wellbeing",
        description:
          "Support is valuable even without a clinical diagnosis attached. A general sense of feeling flat, disconnected, or stuck is worth exploring, and worth addressing. These sessions focus on reconnecting with what feels meaningful to you, building healthier daily rhythms and routines, and working through the life circumstances contributing to how you feel."
      }
    ],
    approach:
      "Our approach combines Cognitive Behavioural Therapy (CBT) and clinical hypnotherapy, shaped around your specific experience.",
    approachPoints: [
      "An initial session to understand your history and current experience",
      "A structured plan with realistic, achievable milestones",
      "Practical tools you can use between sessions",
      "Ongoing sessions guided by 25+ years of clinical experience in depression and mood disorders"
    ],
    faqs: [
      {
        question: "How do I know if I'm dealing with depression?",
        answer:
          "Depression tends to persist for a few weeks or longer, and often comes with physical signs like fatigue, changes in appetite, or disrupted sleep. If this feels familiar and is shaping your daily life, it's worth having it assessed."
      },
      {
        question: "How many sessions does depression therapy usually take?",
        answer:
          "Many clients see meaningful improvement within 8 to 12 sessions, with the exact pace depending on your history. A realistic estimate is shared after the first session."
      },
      {
        question: "Can hypnotherapy help with depression?",
        answer:
          "Yes. Hypnotherapy works well alongside CBT, helping address emotional patterns at a deeper level while building practical coping strategies."
      },
      {
        question: "Is depression counselling confidential?",
        answer:
          "Yes, every session is completely confidential, held between you and your therapist."
      }
    ],
    relatedTherapies: ["behaviour-modification-therapy", "cognitive-behavioural-therapy", "clinical-hypnotherapy"]
  },
  {
    slug: "relationship-counselling-navi-mumbai",
    name: "Relationships",
    audience: "individual",
    shortDescription: "Conflict, distance, or communication that's grown careful and guarded.",
    metaTitle: "Relationship Counselling in Navi Mumbai | Couples, Marriage & Family Therapy | Chaitanya Raj",
    metaDescription:
      "Struggling with communication, conflict, or distance in a relationship? Get relationship, couples, marriage & family counselling in Navi Mumbai with Lt. Col. Rajesh Sharma (Retd), 25+ years experience. Book a consultation today.",
    image: "/images/conditions/relationship-counselling-navi-mumbai.png",
    imageAlt: "Placeholder — replace with a descriptive alt text for relationship counselling navi mumbai",
    intro:
      "The same argument keeps resurfacing, just with different words. Conversations that once came easily now feel careful and guarded. You're sharing a home, maybe a family, and still searching to feel truly heard. Relationships go through seasons, and every pattern can shift with the right support and attention — counselling helps bring clarity to what's happening beneath the surface. At Chaitanya Raj in Vashi and Belapur, Navi Mumbai, we support couples, marriages, and families navigating conflict, distance, or change, led by Lt. Col. Rajesh Sharma (Retd), with over 25 years of experience in hypnotherapy and cognitive behavioural approaches.",
    signs: [
      "The same disagreement resurfacing again and again",
      "Conversations that feel careful, guarded, or avoided altogether",
      "A growing sense of distance from someone you're close to",
      "Feeling unheard, even in a relationship that matters to you"
    ],
    process:
      "Relationship counselling supports any relationship working through a pattern that keeps repeating — recurring arguments, growing distance, or simply feeling out of sync with someone important to you. Sessions focus on understanding the pattern from both perspectives, identifying what's really driving the conflict, and building practical changes you can both work toward.",
    variants: [
      {
        title: "Couples Counselling",
        description:
          "Couples counselling supports romantic partners working through conflict, disconnection, or a relationship finding its footing again. Whether it's communication gaps, unresolved feelings, or drifting apart over time, sessions bring clarity to what's happening beneath the disagreements — joint sessions where both partners are heard equally, rebuilding shared understanding and trust, and practical tools for handling disagreements going forward."
      },
      {
        title: "Marriage Counselling",
        description:
          "Marriage carries its own weight — shared finances, family expectations, children, years of history. Counselling addresses the relationship itself while honouring the practical realities that come with a long-term commitment, understanding the roles and pressures shaping the marriage, realigning both partners around shared goals, and working toward a version of the marriage that genuinely works for both people."
      },
      {
        title: "Family Therapy",
        description:
          "Family therapy brings the people involved into the room together, whether that's parents and adult children finding new understanding, siblings working through old patterns, or a family adjusting to a big life change. Sessions bring all relevant family members into the conversation, work through communication patterns and unspoken expectations, and rebuild a sense of connection and being on the same side."
      }
    ],
    approach:
      "Our approach combines Cognitive Behavioural Therapy (CBT) and clinical hypnotherapy, shaped around the specific relationship and pattern you're working through.",
    approachPoints: [
      "An initial session to understand the history and current situation",
      "A structured plan with realistic, achievable milestones",
      "Practical tools you can use between sessions",
      "Ongoing sessions guided by 25+ years of clinical experience with couples, marriages, and families"
    ],
    faqs: [
      {
        question: "Can I start relationship or couples counselling on my own?",
        answer:
          "Yes. Many people begin individually to gain clarity, and bring their partner in once there's shared readiness to work on it together."
      },
      {
        question: "How many sessions does relationship or marriage counselling usually take?",
        answer:
          "Many couples see meaningful progress within 8 to 12 sessions, with the exact pace shaped by how long the pattern has been in place. A realistic estimate is shared after the first session."
      },
      {
        question: "Can family therapy help with just one family member attending?",
        answer:
          "Yes. Individual sessions help you understand the dynamic and shift your part in it, which often creates movement in the pattern for the whole family."
      },
      {
        question: "Is relationship or couples counselling confidential?",
        answer:
          "Yes, every session is completely confidential, held between you and your therapist."
      }
    ],
    relatedTherapies: ["cognitive-behavioural-therapy", "clinical-hypnotherapy"]
  },
  {
    slug: "child-teen-counselling-navi-mumbai",
    name: "Child & Teen",
    audience: "individual",
    shortDescription: "Behavioural, emotional, or mood changes in a child or teenager that need closer attention.",
    metaTitle: "Child & Teen Counselling in Navi Mumbai | Child Psychologist & Parenting Support | Chaitanya Raj",
    metaDescription:
      "Worried about your child or teen's behaviour, mood, or emotions? Get child counselling, teen counselling & parenting support in Navi Mumbai with Lt. Col. Rajesh Sharma (Retd), 25+ years experience. Book a consultation today.",
    image: "/images/conditions/child-teen-counselling-navi-mumbai.png",
    imageAlt: "Placeholder — replace with a descriptive alt text for child teen counselling navi mumbai",
    intro:
      "Your child has grown quieter, or reacts with an intensity that feels unfamiliar. Your teenager keeps their world to themselves, and the moments you do connect can turn tense quickly. You're trying to read whether this is a passing phase or something that needs closer attention. Children and teenagers experience real emotional shifts as they grow, and the right support at the right time makes a meaningful difference, for them, and for your relationship with them. At Chaitanya Raj in Vashi and Belapur, Navi Mumbai, we support children and teenagers navigating anxiety, behavioural changes, low mood, and the pressures of growing up, alongside parents seeking guidance on how to help, led by Lt. Col. Rajesh Sharma (Retd), with over 25 years of experience in hypnotherapy and cognitive behavioural approaches.",
    signs: [
      "A noticeable change in mood, behaviour, or sleep lasting several weeks",
      "Reacting with more intensity than feels usual for them",
      "Withdrawing from friends, family, or things they used to enjoy",
      "Changes that have started affecting school life or friendships"
    ],
    process:
      "Children express what's bothering them through behaviour, sleep, appetite, and mood, often before they have the words for it. Sessions are shaped around age-appropriate conversation, activities, or play based on your child's comfort, understanding what's happening at school, at home, or within them, and building emotional tools your child can carry forward. Parents are involved at the start and kept informed throughout, for consistency between sessions and home.",
    variants: [
      {
        title: "Child Psychologist",
        description:
          "A child psychologist helps uncover what's happening beneath the surface and supports your child in processing it at their own pace, through age-appropriate conversation, activities, or play based on your child's comfort, and by understanding what's happening at school, at home, or within them."
      },
      {
        title: "Child Counselling",
        description:
          "Child counselling supports younger children working through specific moments — a new school, a family change, fears, or big feelings they're still learning to name — helping them understand and express what they're feeling, using methods suited to how children naturally communicate, and keeping parents involved for consistency between sessions and home."
      },
      {
        title: "Teen Counselling",
        description:
          "Adolescence brings its own world — identity, friendships, academic pressure, social media, and a growing need for independence. Teen counselling offers a space that belongs to your teenager, where they can speak openly and be heard, building coping tools that respect their growing independence and strengthening their confidence and sense of self."
      },
      {
        title: "Parenting Support",
        description:
          "Sometimes the most valuable support is for the parent navigating new territory. Parenting support helps you understand what your child or teen is experiencing and how to respond in ways that genuinely help — understanding their perspective, practical responses suited to your specific situation, and rebuilding closeness where things have felt distant."
      }
    ],
    approach:
      "Our approach combines age-appropriate cognitive behavioural techniques and, where suitable, hypnotherapy, shaped around your child or teen's age, personality, and situation.",
    approachPoints: [
      "An initial session involving parents and child, together and separately",
      "A structured plan with realistic, achievable milestones",
      "Practical tools for both the child or teen and the parents",
      "Ongoing sessions guided by 25+ years of clinical experience with children and families"
    ],
    faqs: [
      {
        question: "How do I know if my child would benefit from counselling?",
        answer:
          "It's worth exploring support when changes in mood, behaviour, or sleep continue for several weeks, or begin shaping school life and friendships."
      },
      {
        question: "Will I be involved in my child's or teen's sessions?",
        answer:
          "Yes. Parents are involved at the start and kept informed throughout. Teenagers are also given space for one-on-one sessions to build trust and openness."
      },
      {
        question: "How many sessions does child or teen counselling usually take?",
        answer:
          "Many families see meaningful progress within 6 to 10 sessions, with the pace shaped by your child's specific situation. A realistic estimate is shared after the first session."
      },
      {
        question: "Is child and teen counselling confidential?",
        answer:
          "Yes. For younger children, general progress is shared with parents to support consistency at home. For teenagers, privacy is prioritised to build trust, with important safety matters always communicated."
      }
    ],
    relatedTherapies: ["cognitive-behavioural-therapy", "clinical-hypnotherapy"]
  },
  {
    slug: "best-past-life-regression-therapy-in-navi-mumbai",
    name: "Past Life Regression Therapy",
    audience: "individual",

    shortDescription:
      "A guided journey into deeper layers of memory, emotion, and subconscious experience for self-discovery, emotional healing, and personal growth.",

    metaTitle:
      "Past Life Regression Therapy in Mumbai, Navi Mumbai & Thane | Chaitanya Raj",

    metaDescription:
      "Experience guided Past Life Regression therapy, in person or online, for emotional healing, self-discovery, and root cause healing. Sessions with Lt. Col. Rajesh Sharma (Retd), 25+ years experience. Book today.",

    image: "/images/conditions/past-life-regression-therapy.png",
    imageAlt: "Placeholder — replace with a descriptive alt text for past life regression therapy",
    intro:
      "Some fears don't seem to have a clear origin. Some patterns in relationships repeat, no matter how much you try to change them. Some feelings sit quietly beneath the surface, familiar, but hard to place. Past Life Regression Therapy offers a gentle, guided way to explore these deeper layers, connecting present-day emotions to their root, and creating space for genuine healing and clarity. At Chaitanya Raj in Vashi and Belapur, Navi Mumbai, we offer Past Life Regression sessions, in person and online, for clients across Mumbai, Navi Mumbai, and Thane. Led by Lt. Col. Rajesh Sharma (Retd), with over 25 years of experience in hypnotherapy and regression therapy, every session is guided at your pace, in a safe and supportive space.",

    signs: [
      "Fears or emotional reactions that seem to have no clear origin",
      "Recurring patterns in relationships or life situations",
      "Emotional blocks that feel difficult to understand or release",
      "A desire for deeper self-discovery and personal insight"
    ],

    process:
      "A Past Life Regression session begins with a grounding conversation to understand what you are hoping to explore. You are then guided through gentle relaxation into a deeply meditative state, followed by a guided journey through relevant memories or experiences. Every session concludes with time for reflection and integration, helping you make sense of what came up.",

    approach:
      "Our approach combines guided hypnotherapy and Past Life Regression techniques, shaped around what you are hoping to explore and heal. Every session is fully guided, paced to your comfort level, and followed by time for reflection and integration.",

    approachPoints: [
      "An initial conversation to understand your intention for the session",
      "Gentle guided relaxation into a deep, meditative state",
      "A fully guided regression experience paced to your comfort",
      "A supportive, judgment-free space throughout the session",
      "Time for reflection and integration after the experience",
      "Ongoing support guided by 25+ years of clinical experience in hypnotherapy and regression work"
    ],

    benefits: [
      {
        title: "Understanding Unexplained Fears",
        description:
          "Explore fears, emotional reactions, or patterns that seem to have no clear origin in your present-day experiences."
      },
      {
        title: "Exploring Repeating Life Patterns",
        description:
          "Gain deeper insight into recurring patterns in relationships, emotions, and life situations that seem difficult to change."
      },
      {
        title: "Working Through Emotional Blocks",
        description:
          "Explore the deeper emotional experiences that may be connected to feelings of being stuck, held back, or unable to move forward."
      },
      {
        title: "Connecting With Your Inner Self",
        description:
          "Create space for deeper self-reflection and a greater understanding of your emotions, experiences, and personal journey."
      },
      {
        title: "Exploring the Roots of Emotional Pain",
        description:
          "Look beyond surface-level symptoms and explore experiences that may be connected to unresolved emotional patterns."
      },
      {
        title: "Inner Child Healing",
        description:
          "Reconnect with earlier emotional experiences and create space to understand, acknowledge, and nurture parts of yourself that may still need attention."
      },
      {
        title: "Finding Greater Clarity",
        description:
          "Use guided exploration and reflection to gain a different perspective on personal experiences, relationships, and the questions you carry."
      },
      {
        title: "Personal Growth & Self-Discovery",
        description:
          "Explore your inner world with curiosity and openness as part of a deeper journey of personal growth and self-understanding."
      }
    ],

    variants: [
      {
        title: "What Is Past Life Regression Therapy?",
        description:
          "Past Life Regression Therapy is a guided hypnotherapy technique that helps you access deeper layers of memory and subconscious experience, believed by many traditions to include past lives. The goal is practical: identifying the root of a present-day pattern, fear, or emotional block, and working through it at its source."
      },
      {
        title: "Guided Past Life Regression Sessions",
        description:
          "Every session is fully guided; you are never left to navigate the experience alone. Your therapist walks with you throughout, creating a calm and safe space for whatever surfaces. Sessions are paced according to your comfort level and include clear reflection and integration afterward."
      },
      {
        title: "Past Life Regression in Mumbai, Navi Mumbai & Thane",
        description:
          "Sessions are available in person at our Vashi and Belapur, Navi Mumbai centre, easily accessible for clients across Mumbai, Navi Mumbai, and Thane. Online Past Life Regression sessions are also available for clients who prefer to experience the session from the comfort of their own space."
      },
      {
        title: "Online Past Life Regression Therapy",
        description:
          "Online sessions follow the same guided structure as in-person sessions. Many clients find that experiencing the session from a familiar and comfortable environment supports relaxation and allows them to engage fully with the process."
      }
    ],

    locations: [
      "In-person sessions at our Vashi and Belapur, Navi Mumbai centre",
      "Online sessions from anywhere",
      "Sessions available for clients across Mumbai, Navi Mumbai, and Thane",
      "Flexible scheduling to suit your availability"
    ],

    faqs: [
      {
        question: "What happens during a Past Life Regression session?",
        answer:
          "You are guided into a deeply relaxed, meditative state and then gently guided through relevant memories or experiences connected to what you are exploring. Every session ends with time to reflect and make sense of what came up."
      },
      {
        question: "Is Past Life Regression the same as hypnosis?",
        answer:
          "Past Life Regression uses hypnotherapy techniques to reach a deeply relaxed state, allowing access to subconscious memory and experience. You remain aware and in control throughout the session."
      },
      {
        question: "Can Past Life Regression be done online?",
        answer:
          "Yes. Online sessions follow the same guided structure as in-person sessions, and many clients find that the comfort of their own space supports the experience well."
      },
      {
        question: "How many sessions are recommended?",
        answer:
          "Many clients find value in a single session, while others choose a short series to explore a specific pattern more deeply. This is discussed together based on what you are hoping to work through."
      },
      {
        question: "Is a Past Life Regression session confidential?",
        answer:
          "Yes, every session is completely confidential. What you share and experience stays between you and your therapist."
      }
    ],

    relatedTherapies: ["clinical-hypnotherapy"]
  },
  // {
  //   slug: "leaderhsipa and team building "
  // },
  {
    slug: "stress-burnout-counselling-navi-mumbai",
    name: "Stress & Burnout",
    audience: "corporate",
    shortDescription: "The slow build-up of pressure from work, family, or simply doing too much for too long.",
    metaTitle: "Stress & Burnout Counselling in Navi Mumbai | Workplace Stress & Burnout Recovery | Chaitanya Raj",
    metaDescription:
      "Feeling constantly depleted or on edge? Get evidence-based stress and burnout counselling in Navi Mumbai with Lt. Col. Rajesh Sharma (Retd), 25+ years experience. Book a consultation today.",
    image: "/images/conditions/stress-burnout-counselling-navi-mumbai.png",
    imageAlt: "Placeholder — replace with a descriptive alt text for stress burnout counselling navi mumbai",
    intro:
      "Rest doesn't seem to fix it anymore. You're short-tempered with people you'd normally have patience for, and the headaches or tight shoulders have become background noise you've stopped mentioning. Stress isn't always dramatic — often it's cumulative, built from months of over-functioning until the body and mind start signalling that something has to change. At Chaitanya Raj in Vashi & Belapur, Navi Mumbai, we work with chronic stress and burnout in its many forms, led by Lt. Col. Rajesh Sharma (Retd), with over 25 years of experience in hypnotherapy and cognitive behavioural approaches.",
    signs: [
      "Feeling constantly depleted, even after rest",
      "Irritability or a shorter fuse than usual",
      "Trouble switching off from work or responsibilities",
      "Physical symptoms — headaches, tension, fatigue"
    ],
    process:
      "Stress and burnout counselling starts with mapping where the pressure is actually coming from — work, home, or a combination that's been building for longer than you realised. Your first session is a conversation about what's unsustainable right now, and what a realistic path back to capacity looks like. From there, sessions focus on practical boundary-setting, structured relaxation, and where useful, mindfulness-based technique to rebuild a pace you can actually sustain.",
    variants: [
      {
        title: "Workplace Stress Counselling",
        description:
          "Deadlines, workload, and a culture of constant availability can push stress from occasional to chronic without anyone quite noticing the shift. This track looks at what's driving the pressure at work specifically, and builds boundaries and coping strategies that hold up in a demanding job, not just in theory."
      },
      {
        title: "Burnout Recovery",
        description:
          "Burnout is what happens when stress goes on long enough that even rest stops helping — exhaustion, cynicism, and a sense of reduced capacity that doesn't lift with a weekend off. Recovery work focuses on rebuilding energy gradually, understanding what led to the depletion, and making changes that prevent it from recurring."
      },
      {
        title: "Caregiver & Parental Burnout",
        description:
          "Caring for others — children, ageing parents, a family member managing illness — carries a specific kind of exhaustion that's easy to minimise because it doesn't look like 'work' from the outside. This track makes space for that fatigue directly, without guilt, and builds sustainable ways to keep giving without running yourself empty."
      }
    ],
    approach:
      "Our approach combines practical boundary-setting, structured relaxation training, and mindfulness-based technique, shaped around what's actually driving your stress rather than a generic 'relax more' plan.",
    approachPoints: [
      "An initial session to map what's driving the stress and where it's showing up in your body",
      "A structured plan with realistic, achievable milestones",
      "Practical tools you can use between sessions",
      "Ongoing sessions guided by 25+ years of clinical experience with stress and burnout"
    ],
    faqs: [
      {
        question: "How is burnout different from ordinary stress?",
        answer:
          "Ordinary stress usually eases once the specific cause resolves. Burnout is more chronic — exhaustion, reduced capacity, and a sense of detachment that doesn't lift with rest alone, often because the underlying pressure has been present for months."
      },
      {
        question: "How many sessions does stress or burnout counselling usually take?",
        answer:
          "Many clients notice a shift in capacity within 6 to 10 sessions, with the exact pace depending on how long the pattern has been building. A realistic estimate is shared after the first session."
      },
      {
        question: "Can I keep working while going through burnout counselling?",
        answer:
          "Yes, for most clients. Sessions are built around your actual schedule and responsibilities, and focus on sustainable changes you can make while continuing to work, rather than requiring a full stop."
      },
      {
        question: "Is stress and burnout counselling confidential?",
        answer:
          "Yes, every session is completely confidential, held between you and your therapist."
      }
    ],
    relatedTherapies: ["mindfulness-based-therapy", "cognitive-behavioural-therapy"]
  },
  {
    slug: "phobia-treatment-navi-mumbai",
    name: "Phobias & Fears",
    audience: "individual",
    shortDescription: "A specific, disproportionate fear that limits what you feel able to do.",
    metaTitle: "Phobia Treatment in Navi Mumbai | Fear of Flying, Heights & Specific Phobias | Chaitanya Raj",
    metaDescription:
      "Structured, gradual treatment for specific phobias and fears in Navi Mumbai — flying, heights, medical procedures, and more. Book a consultation today.",
    image: "/images/conditions/phobia-treatment-navi-mumbai.png",
    imageAlt: "Placeholder — replace with a descriptive alt text for phobia treatment navi mumbai",
    intro:
      "You know, rationally, that the flight is statistically safer than the drive to the airport. That knowledge doesn't touch the fear. A phobia is a fear response that's become disproportionate to the actual risk, and it can quietly limit travel, medical care, or everyday choices long before anyone else notices. At Chaitanya Raj in Vashi & Belapur, Navi Mumbai, we work with specific phobias and fears, led by Lt. Col. Rajesh Sharma (Retd), with over 25 years of experience in hypnotherapy and cognitive behavioural approaches.",
    signs: [
      "Intense, immediate fear triggered by a specific object or situation",
      "Avoidance that's started limiting daily choices",
      "Physical panic symptoms when confronted with the trigger",
      "Recognising the fear is disproportionate, but feeling unable to control it"
    ],
    process:
      "Phobia treatment starts with understanding exactly what triggers the fear and how it shows up in your body, then builds a structured, graded plan — never diving straight into the most feared situation. Your first session is a conversation about the specific fear, how long it's been there, and what avoiding it has cost you. From there, we combine graded exposure with CBT and clinical hypnotherapy, usually moving faster than clients expect once the avoidance cycle is interrupted.",
    variants: [
      {
        title: "Fear of Flying",
        description:
          "Turbulence, takeoff, or simply being unable to leave — fear of flying can range from mild discomfort to avoiding travel altogether. Treatment combines graded exposure to flight-related triggers with hypnotherapy to calm the body's automatic panic response, so travel becomes manageable rather than something to be avoided."
      },
      {
        title: "Fear of Heights",
        description:
          "A fear of heights can limit far more than the obvious situations — balconies, glass lifts, even stairs with an open view down. This track works gradually with the specific triggers involved, building tolerance step by step rather than asking you to confront your worst fear on day one."
      },
      {
        title: "Medical & Needle Phobias",
        description:
          "Fear of injections, blood draws, or medical procedures can lead to delaying necessary care, which carries its own real cost. Treatment focuses on calming the physiological panic response specifically, so appointments become something you can get through rather than something you avoid."
      }
    ],
    approach:
      "Our approach combines graded exposure with Cognitive Behavioural Therapy and clinical hypnotherapy, working with the automatic fear response at a physiological level rather than just talking through it.",
    approachPoints: [
      "An initial session to understand your specific trigger and its history",
      "A structured, graded plan that never moves faster than you're ready for",
      "Practical tools you can use between sessions",
      "25+ years of clinical experience working specifically with phobias and fear responses"
    ],
    faqs: [
      {
        question: "How many sessions does phobia treatment usually take?",
        answer:
          "Specific phobias often respond faster than people expect — many clients see meaningful change within 4 to 8 sessions. A realistic estimate is shared after understanding your specific fear."
      },
      {
        question: "Will I have to face my worst fear right away?",
        answer:
          "No. Treatment uses graded exposure, meaning we build up gradually from less distressing situations toward more challenging ones, always at a pace you're ready for."
      },
      {
        question: "Can hypnotherapy help with a specific phobia?",
        answer:
          "Yes. Hypnotherapy can help calm the body's automatic panic response to a specific trigger, which often makes the gradual exposure work more manageable."
      },
      {
        question: "Is phobia treatment confidential?",
        answer:
          "Yes, every session is completely confidential, held between you and your therapist."
      }
    ],
    relatedTherapies: ["cognitive-behavioural-therapy", "clinical-hypnotherapy"]
  },
  {
    slug: "grief-counselling-navi-mumbai",
    name: "Grief & Loss",
    audience: "individual",
    shortDescription: "Making space to process loss — of a person, a relationship, or a chapter of life.",
    metaTitle: "Grief Counselling in Navi Mumbai | Loss of a Loved One & Life Transitions | Chaitanya Raj",
    metaDescription:
      "Supportive grief counselling in Navi Mumbai for loss of a loved one or a significant life change. No fixed timeline, no judgement. Book a consultation today.",
    image: "/images/conditions/grief-counselling-navi-mumbai.png",
    imageAlt: "Placeholder — replace with a descriptive alt text for grief counselling navi mumbai",
    intro:
      "There's no correct way to be doing this. Some days it's manageable, and others a small, ordinary thing brings it all back. People around you may have moved on faster than you have, or expect you to be further along than you are. Grief doesn't follow a schedule, and it deserves a space that doesn't rush you through it. At Chaitanya Raj in Vashi & Belapur, Navi Mumbai, we support people through grief and loss in its many forms, led by Lt. Col. Rajesh Sharma (Retd), with over 25 years of experience in hypnotherapy and cognitive behavioural approaches.",
    signs: [
      "Waves of sadness that feel unpredictable",
      "Difficulty accepting or processing what's happened",
      "Withdrawing from people or routines",
      "Guilt, anger, or numbness that doesn't feel like it's easing"
    ],
    process:
      "Grief counselling begins with simply making space for what you're carrying — there's no agenda to move you through stages on a schedule. Your first session is a conversation about the loss, what it's meant, and what support could look like for you right now. From there, sessions draw on grief-specific frameworks and, where helpful, Ego State work to process difficult memories, always at your own pace.",
    variants: [
      {
        title: "Loss of a Loved One",
        description:
          "The death of someone close reshapes daily life in ways that are hard to anticipate — an empty chair, a habit you no longer need, a call you keep almost making. Sessions offer a steady, unhurried space to process the loss and gradually find your footing again, without a fixed timeline attached."
      },
      {
        title: "Anticipatory Grief",
        description:
          "Grief doesn't always begin after a loss — caring for someone with a terminal or degenerative condition often brings grief while they're still here. This track makes space for that particular, complicated form of loss, alongside the practical and emotional weight of caregiving."
      },
      {
        title: "Loss Beyond Death",
        description:
          "Grief also shows up after the end of a relationship, a job, a chapter of identity, or a future you'd planned for that didn't happen. These losses are just as real, even without a funeral to mark them, and are met with the same care and space."
      }
    ],
    approach:
      "A supportive, unhurried counselling approach, drawing on grief-specific frameworks and, where helpful, Ego State work to process difficult memories.",
    approachPoints: [
      "An initial session to understand the loss and what you're carrying",
      "A pace set entirely by you, with no fixed timeline",
      "Practical support for the waves of grief as they come",
      "Ongoing sessions guided by 25+ years of clinical experience supporting loss and life transitions"
    ],
    faqs: [
      {
        question: "How long does grief counselling usually take?",
        answer:
          "There's no fixed length — grief doesn't follow a schedule. Some clients find a handful of sessions helpful during a difficult stretch; others continue longer. The pace is set by you."
      },
      {
        question: "Is it normal to still be grieving after a long time?",
        answer:
          "Yes. Grief doesn't move in a straight line, and there's no correct timeline for when it should ease. If it's affecting your daily life, support can help, regardless of how much time has passed."
      },
      {
        question: "Can grief counselling help with losses other than death?",
        answer:
          "Yes. Grief counselling supports any significant loss — the end of a relationship, a job, or a chapter of life — not only bereavement."
      },
      {
        question: "Is grief counselling confidential?",
        answer:
          "Yes, every session is completely confidential, held between you and your therapist."
      }
    ],
    relatedTherapies: ["ego-state-therapy", "cognitive-behavioural-therapy"]
  },
  {
    slug: "trauma-ptsd-counselling-navi-mumbai",
    name: "Trauma & PTSD",
    audience: "individual",
    shortDescription: "The lasting effects of a distressing event that the mind hasn't fully processed.",
    metaTitle: "Trauma & PTSD Counselling in Navi Mumbai | Trauma-Informed Therapy | Chaitanya Raj",
    metaDescription:
      "Trauma-informed counselling in Navi Mumbai for PTSD and the lasting effects of distressing events. A careful, paced approach. Book a consultation today.",
    image: "/images/conditions/trauma-ptsd-counselling-navi-mumbai.png",
    imageAlt: "Placeholder — replace with a descriptive alt text for trauma ptsd counselling navi mumbai",
    intro:
      "A sound, a smell, or an offhand comment can bring it all back, even years later. You might feel constantly braced for something to go wrong, or numb in a way that keeps you at a distance from your own life. These are trauma responses, not a character flaw, and they respond to careful, paced treatment. At Chaitanya Raj in Vashi & Belapur, Navi Mumbai, we work with trauma and PTSD, led by Lt. Col. Rajesh Sharma (Retd), with over 25 years of experience in hypnotherapy and cognitive behavioural approaches.",
    signs: [
      "Intrusive memories, flashbacks, or nightmares",
      "Feeling constantly on guard or easily startled",
      "Avoiding reminders of the event",
      "Emotional numbness or disconnection"
    ],
    process:
      "Trauma-informed treatment is paced deliberately — safety and stabilisation always come before processing the event itself. Your first session focuses on understanding what happened and how it's showing up now, and building a sense of safety before any deeper work begins. From there, we use a phased approach combining stabilisation technique, CBT, and clinical hypnotherapy, moving only as fast as feels manageable.",
    variants: [
      {
        title: "PTSD Therapy",
        description:
          "Post-traumatic stress can follow a single distressing event or a period of sustained threat, showing up as flashbacks, hypervigilance, or a nervous system that won't fully stand down. Therapy works through the event carefully, once grounding and safety are established, rather than asking you to relive it before you're ready."
      },
      {
        title: "Complex & Developmental Trauma",
        description:
          "Trauma that builds up over years — often starting in childhood — can shape how safe relationships and the world feel, long after the original circumstances have changed. This track works with the accumulated pattern, not just a single incident, at a pace that respects how long it took to form."
      },
      {
        title: "Single-Incident Trauma",
        description:
          "An accident, an assault, a medical emergency, or another sudden distressing event can leave a lasting imprint even after the immediate danger has passed. This track focuses specifically on processing that event and reducing its ongoing hold on your nervous system."
      }
    ],
    approach:
      "A phased, trauma-informed approach combining stabilisation techniques, CBT, and clinical hypnotherapy used carefully and only once grounding is established.",
    approachPoints: [
      "An initial session focused on safety and stabilisation, not immediate processing",
      "A structured, paced plan that never moves faster than you're ready for",
      "Practical grounding tools you can use between sessions",
      "25+ years of clinical experience working specifically with trauma and PTSD"
    ],
    faqs: [
      {
        question: "Will I have to describe the event in detail right away?",
        answer:
          "No. Treatment is trauma-informed and paced deliberately — safety and stabilisation come first, and deeper processing only happens once you're ready, at a pace you control."
      },
      {
        question: "How many sessions does trauma or PTSD therapy usually take?",
        answer:
          "It varies significantly depending on whether the trauma is a single incident or accumulated over time. A realistic estimate is shared after the first session, once we understand your specific history."
      },
      {
        question: "Can hypnotherapy help with trauma?",
        answer:
          "Yes, once safety and stabilisation are established. Clinical hypnotherapy can help work with the body's automatic stress response alongside CBT."
      },
      {
        question: "Is trauma and PTSD counselling confidential?",
        answer:
          "Yes, every session is completely confidential, held between you and your therapist."
      }
    ],
    relatedTherapies: ["clinical-hypnotherapy", "ego-state-therapy"]
  },
  {
    slug: "sleep-disorder-counselling-navi-mumbai",
    name: "Sleep Disorders",
    audience: "individual",
    shortDescription: "Trouble falling asleep, staying asleep, or waking up rested.",
    metaTitle: "Sleep Disorder & Insomnia Counselling in Navi Mumbai | Chaitanya Raj",
    metaDescription:
      "Struggling to fall or stay asleep? Get evidence-based insomnia and sleep disorder counselling in Navi Mumbai with Lt. Col. Rajesh Sharma (Retd), 25+ years experience. Book today.",
    image: "/images/conditions/sleep-disorder-counselling-navi-mumbai.png",
    imageAlt: "Placeholder — replace with a descriptive alt text for sleep disorder counselling navi mumbai",
    intro:
      "You're exhausted by 9pm and wide awake at midnight, mind running through tomorrow's list on a loop. Or you fall asleep fine and wake at 3am, unable to switch off again. Sleep trouble is frequently a symptom rather than the root problem — of anxiety, an overactive mind at night, or habits that have quietly disrupted the body's natural rhythm. At Chaitanya Raj in Vashi & Belapur, Navi Mumbai, we work with insomnia and sleep disturbance, led by Lt. Col. Rajesh Sharma (Retd), with over 25 years of experience in hypnotherapy and cognitive behavioural approaches.",
    signs: [
      "Difficulty falling asleep despite feeling tired",
      "Waking frequently or too early",
      "A racing mind once the lights go off",
      "Daytime fatigue affecting concentration and mood"
    ],
    process:
      "Sleep counselling starts with understanding your specific pattern — when the trouble started, what a typical night looks like, and what you've already tried. Your first session maps out the thinking patterns and habits around sleep. From there, we use Cognitive Behavioural Therapy for Insomnia (CBT-I) principles, paired with relaxation and hypnotherapy technique to quiet an overactive mind at night.",
    variants: [
      {
        title: "Insomnia Therapy",
        description:
          "Whether it's trouble falling asleep, frequent waking, or waking too early, insomnia therapy uses CBT-I principles to rebuild a consistent, workable sleep pattern — addressing both the habits around sleep and the anxious thoughts that keep the mind active at night."
      },
      {
        title: "Anxiety-Related Sleep Issues",
        description:
          "For many people, sleep trouble is anxiety showing up at night — a mind that only slows down enough to worry once the day's distractions are gone. This track addresses the anxious thought patterns directly, alongside relaxation technique for use at bedtime."
      },
      {
        title: "Sleep Routine & Habit Rebuilding",
        description:
          "Irregular schedules, screen habits, or an inconsistent wind-down routine can quietly erode the body's natural sleep rhythm over months. This track focuses on practical, sustainable routine changes alongside the psychological factors keeping sleep disrupted."
      }
    ],
    approach:
      "Cognitive Behavioural Therapy for Insomnia (CBT-I) principles, paired with relaxation and hypnotherapy techniques to quiet an overactive mind at night.",
    approachPoints: [
      "An initial session to map your specific sleep pattern and history",
      "A structured plan with realistic, achievable milestones",
      "Practical relaxation tools you can use at bedtime",
      "25+ years of clinical experience working specifically with sleep and insomnia"
    ],
    faqs: [
      {
        question: "How many sessions does sleep or insomnia counselling usually take?",
        answer:
          "Many clients notice improvement within 4 to 8 sessions using CBT-I principles, with the exact pace depending on how long the pattern has been in place. A realistic estimate is shared after the first session."
      },
      {
        question: "Is medication needed for insomnia?",
        answer:
          "Not necessarily. CBT-I is a well-established, non-medication approach to insomnia. Where a medical factor is suspected, we'll suggest a referral to a physician alongside counselling."
      },
      {
        question: "Can hypnotherapy help me fall asleep?",
        answer:
          "Yes. Hypnotherapy-based relaxation technique can help quiet an overactive mind at bedtime, and works well alongside CBT-I principles for longer-term change."
      },
      {
        question: "Is sleep disorder counselling confidential?",
        answer:
          "Yes, every session is completely confidential, held between you and your therapist."
      }
    ],
    relatedTherapies: ["cognitive-behavioural-therapy", "clinical-hypnotherapy"]
  },
  {
    slug: "addiction-counselling-navi-mumbai",
    name: "Drug & Alcohol Dependence",
    audience: "individual",
    shortDescription: "Support for dependence, and the patterns that keep it going.",
    metaTitle: "Drug & Alcohol Addiction Counselling in Navi Mumbai | Chaitanya Raj",
    metaDescription:
      "Confidential counselling for drug and alcohol dependence in Navi Mumbai, addressing the underlying triggers alongside the behaviour itself. Book a consultation today.",
    image: "/images/conditions/addiction-counselling-navi-mumbai.png",
    imageAlt: "Placeholder — replace with a descriptive alt text for addiction counselling navi mumbai",
    intro:
      "Cutting back on your own hasn't stuck, or the strain it's putting on your relationships and responsibilities has become harder to ignore. Dependence rarely exists in isolation — it's usually tangled up with stress, trauma, or an attempt to manage difficult emotions. Reaching out is a strong first step, and support works alongside any medical care already involved. At Chaitanya Raj in Vashi & Belapur, Navi Mumbai, we support people working through drug and alcohol dependence, led by Lt. Col. Rajesh Sharma (Retd), with over 25 years of experience in hypnotherapy and cognitive behavioural approaches.",
    signs: [
      "Increasing reliance on a substance to function or cope",
      "Failed attempts to cut back on your own",
      "Strained relationships or responsibilities affected by use",
      "Withdrawal symptoms when not using"
    ],
    process:
      "Counselling looks at both the behaviour itself and what it's been standing in for — stress, trauma, or difficult emotions that are harder to sit with directly. Your first session is a confidential conversation about your history with the substance and what support could look like. Where supervised withdrawal is needed, referral to a medical practitioner is arranged alongside counselling, never instead of it.",
    variants: [
      {
        title: "Alcohol Dependence Counselling",
        description:
          "Whether it's daily reliance or drinking that's become harder to control than it used to be, this track works with the specific triggers and reinforcement patterns behind alcohol use, alongside the underlying stress or emotions it's been managing."
      },
      {
        title: "Drug Dependence Counselling",
        description:
          "Dependence on prescription or recreational substances is approached without judgement, focused on understanding the pattern and building a realistic path forward, in coordination with medical care where withdrawal management is required."
      },
      {
        title: "Family Support for Addiction",
        description:
          "Watching someone you love struggle with dependence carries its own weight and confusion. This track supports family members directly — understanding the dynamic, setting sustainable boundaries, and finding support for yourself alongside your concern for them."
      }
    ],
    approach:
      "Behaviour Modification Therapy to interrupt the reinforcement cycle, combined with CBT to address the underlying triggers. Referral to a medical practitioner for supervised withdrawal is arranged where necessary.",
    approachPoints: [
      "A confidential initial session to understand your history and current situation",
      "Coordination with medical care where supervised withdrawal is needed",
      "Practical tools to interrupt the reinforcement cycle",
      "Ongoing sessions guided by 25+ years of clinical experience with dependence and behaviour change"
    ],
    faqs: [
      {
        question: "Do I need to have stopped using before starting counselling?",
        answer:
          "No. We meet you where you currently are, and work together on a realistic plan, which may include coordinating with a medical practitioner if supervised withdrawal is appropriate."
      },
      {
        question: "How many sessions does addiction counselling usually take?",
        answer:
          "It varies significantly by individual and substance. A realistic estimate is shared after the first confidential conversation about your history and goals."
      },
      {
        question: "Is family involvement part of the process?",
        answer:
          "It can be, where helpful and with your consent. Family sessions or separate support for family members are both available."
      },
      {
        question: "Is addiction counselling confidential?",
        answer:
          "Yes, every session is completely confidential, held between you and your therapist."
      }
    ],
    relatedTherapies: ["behaviour-modification-therapy", "cognitive-behavioural-therapy"]
  },
  {
    slug: "sexual-dysfunction-counselling-navi-mumbai",
    name: "Sexual Dysfunctions",
    audience: "individual",
    shortDescription: "Difficulties with desire, performance, or intimacy that carry a psychological component.",
    metaTitle: "Sexual Dysfunction Counselling in Navi Mumbai | Confidential & Discreet | Chaitanya Raj",
    metaDescription:
      "Confidential counselling for sexual dysfunctions in Navi Mumbai, addressing the psychological factors behind difficulties with intimacy. Book a consultation today.",
    image: "/images/conditions/sexual-dysfunction-counselling-navi-mumbai.png",
    imageAlt: "Placeholder — replace with a descriptive alt text for sexual dysfunction counselling navi mumbai",
    intro:
      "It's a difficult thing to bring up, even with a partner, let alone a stranger — but many sexual difficulties have a significant psychological component, even where a physical factor is also present. You deserve a space to talk about it without embarrassment or rushed advice. At Chaitanya Raj in Vashi & Belapur, Navi Mumbai, we support clients working through difficulties with desire, performance, and intimacy, led by Lt. Col. Rajesh Sharma (Retd), with over 25 years of experience in hypnotherapy and cognitive behavioural approaches.",
    signs: [
      "Loss of desire without a clear physical cause",
      "Performance anxiety that's become self-reinforcing",
      "Avoidance of intimacy",
      "Distress connected to a specific past experience"
    ],
    process:
      "Sessions are handled with particular discretion, starting with an unhurried conversation about what's been happening and how long it's been an issue. Where a physical cause hasn't been ruled out, a referral for medical evaluation is suggested alongside counselling. From there, we work with the psychological patterns — anxiety, avoidance, or past experience — contributing to the difficulty.",
    variants: [
      {
        title: "Low Desire & Arousal Difficulties",
        description:
          "A drop in desire or difficulty with arousal, without a clear physical explanation, is often connected to stress, relationship dynamics, or how safe and present you feel in the moment. This track explores those factors directly and works toward reconnecting with desire at your own pace."
      },
      {
        title: "Performance Anxiety",
        description:
          "Worry about performance can become self-reinforcing — the anxiety itself starts causing the very difficulty you're anxious about. This track addresses the anxiety and avoidance cycle directly, using CBT technique to interrupt the pattern."
      },
      {
        title: "Intimacy After a Difficult Experience",
        description:
          "Where avoidance or distress connects to a specific past experience, Ego State work can help process what's underneath the avoidance, at a pace entirely set by you, alongside practical work on rebuilding comfort with intimacy."
      }
    ],
    approach:
      "CBT to address performance anxiety and avoidance patterns, with Ego State Therapy where past experience is a contributing factor.",
    approachPoints: [
      "A confidential, unhurried initial conversation",
      "Referral for medical evaluation where a physical factor hasn't been ruled out",
      "A structured plan with realistic, achievable milestones",
      "25+ years of clinical experience working specifically with sexual and intimacy difficulties"
    ],
    faqs: [
      {
        question: "Should I see a doctor first, or start with counselling?",
        answer:
          "Either is fine as a starting point. Where a physical cause hasn't been ruled out, we'll suggest a medical evaluation alongside counselling, since both can run in parallel."
      },
      {
        question: "Can I attend these sessions without my partner?",
        answer:
          "Yes. Many clients begin individually, and involve a partner later if and when that feels right."
      },
      {
        question: "How many sessions does this usually take?",
        answer:
          "It varies by individual and what's contributing to the difficulty. A realistic estimate is shared after the first confidential conversation."
      },
      {
        question: "Is this kind of counselling confidential?",
        answer:
          "Yes, every session is completely confidential, held between you and your therapist."
      }
    ],
    relatedTherapies: ["cognitive-behavioural-therapy", "ego-state-therapy"]
  },
  {
    slug: "stammering-therapy-navi-mumbai",
    name: "Stammering",
    audience: "individual",
    shortDescription: "Speech disfluency, often worsened by the anxiety around it.",
    metaTitle: "Stammering & Speech Anxiety Counselling in Navi Mumbai | Chaitanya Raj",
    metaDescription:
      "Psychological support for stammering in Navi Mumbai — addressing the anxiety that often intensifies speech disfluency. Works alongside speech therapy. Book today.",
    image: "/images/conditions/stammering-therapy-navi-mumbai.png",
    imageAlt: "Placeholder — replace with a descriptive alt text for stammering therapy navi mumbai",
    intro:
      "Rehearsing a sentence before you say it, choosing easier words to avoid a difficult sound, dreading a phone call you'd otherwise make without thinking twice. While stammering has physiological roots, the anxiety around speaking situations frequently makes it worse, creating a cycle that's hard to break alone. At Chaitanya Raj in Vashi & Belapur, Navi Mumbai, we support clients working through stammering and the anxiety around it, led by Lt. Col. Rajesh Sharma (Retd), with over 25 years of experience in hypnotherapy and cognitive behavioural approaches.",
    signs: [
      "Disfluency that increases under social or performance pressure",
      "Avoidance of speaking situations",
      "Anticipatory anxiety before conversations or calls",
      "Frustration or self-consciousness around speech"
    ],
    process:
      "Counselling works alongside speech therapy, not in place of it, focused specifically on the anxiety component. Your first session is a conversation about which situations feel hardest, and what avoidance has already cost you. From there, we use CBT to reduce speech-related anxiety, with clinical hypnotherapy to ease the physiological tension that often intensifies disfluency.",
    variants: [
      {
        title: "Speech Anxiety Counselling",
        description:
          "The anticipatory dread before a call, meeting, or introduction often does more damage than the stammer itself. This track works directly on that anxiety, reducing the anticipatory spiral that tends to make speech harder in the moment."
      },
      {
        title: "Adult Stammering Support",
        description:
          "Many adults have lived with stammering for years and built quiet workarounds — avoided words, avoided situations — that have their own cost. This track supports reducing avoidance and building confidence in speech situations that have long felt off-limits."
      },
      {
        title: "Confidence Building for Public Speaking",
        description:
          "Presentations, meetings, and public speaking bring a specific kind of pressure. This track combines anxiety-reduction technique with practical confidence-building, so speaking up feels less like something to survive."
      }
    ],
    approach:
      "CBT to reduce speech-related anxiety, with clinical hypnotherapy used to ease the physiological tension that often intensifies disfluency. Works best alongside a speech-language therapist.",
    approachPoints: [
      "An initial session to understand which situations feel hardest",
      "A structured plan focused specifically on the anxiety component",
      "Practical tools you can use before and during difficult speech situations",
      "25+ years of clinical experience working alongside speech-language therapy"
    ],
    faqs: [
      {
        question: "Does this replace speech therapy?",
        answer:
          "No. This counselling addresses the anxiety and avoidance around speaking, and works best alongside, not instead of, a speech-language therapist."
      },
      {
        question: "Can hypnotherapy help with stammering?",
        answer:
          "Yes, particularly with the physiological tension that often intensifies disfluency under pressure. It's used alongside CBT for the anxiety component."
      },
      {
        question: "How many sessions does this usually take?",
        answer:
          "It varies by individual. A realistic estimate is shared after understanding your specific situations and history with speech anxiety."
      },
      {
        question: "Is this counselling confidential?",
        answer:
          "Yes, every session is completely confidential, held between you and your therapist."
      }
    ],
    relatedTherapies: ["cognitive-behavioural-therapy", "clinical-hypnotherapy"]
  },
  {
    slug: "abuse-trauma-counselling-navi-mumbai",
    name: "Sexual, Domestic & Childhood Abuse",
    audience: "individual",
    shortDescription: "A confidential space to process the impact of past or ongoing abuse.",
    metaTitle: "Abuse Counselling in Navi Mumbai | Confidential, Trauma-Informed Support | Chaitanya Raj",
    metaDescription:
      "Confidential, trauma-informed counselling for survivors of sexual, domestic or childhood abuse in Navi Mumbai. A pace set by you. Book a consultation today.",
    image: "/images/conditions/abuse-trauma-counselling-navi-mumbai.png",
    imageAlt: "Placeholder — replace with a descriptive alt text for abuse trauma counselling navi mumbai",
    intro:
      "The impact of abuse can surface immediately or years later, and it deserves a pace and level of care set entirely by what feels safe for you. This work is trauma-informed throughout, with safety and stabilisation always coming first. At Chaitanya Raj in Vashi & Belapur, Navi Mumbai, we support survivors of sexual, domestic, and childhood abuse, led by Lt. Col. Rajesh Sharma (Retd), with over 25 years of experience in hypnotherapy and cognitive behavioural approaches. If you are in immediate danger, please contact local emergency services first.",
    signs: [
      "Intrusive memories or heightened anxiety connected to the past",
      "Difficulty trusting or feeling safe in relationships",
      "Shame or self-blame that hasn't eased with time",
      "Feeling unsafe in a current relationship or living situation"
    ],
    process:
      "Sessions begin with safety and stabilisation, at whatever pace you need — there is no expectation to share more than feels manageable, especially early on. From there, a carefully paced, trauma-informed approach combines stabilisation technique, Ego State Therapy, and clinical hypnotherapy once safety is established.",
    variants: [
      {
        title: "Childhood Abuse",
        description:
          "The effects of childhood abuse often surface long into adulthood, shaping trust, relationships, and self-worth in ways that can be hard to trace back to their origin. Sessions offer a safe, paced space to process this, entirely on your terms."
      },
      {
        title: "Domestic Abuse",
        description:
          "Whether you're processing the aftermath of a past relationship or navigating a current situation, support is shaped around your safety first. If you are currently in danger, please contact local emergency services or a domestic abuse helpline before or alongside starting counselling."
      },
      {
        title: "Sexual Assault Support",
        description:
          "Support after sexual assault is entirely survivor-led — nothing is asked of you before you're ready to share it. Sessions focus on safety, stabilisation, and rebuilding a sense of control, at whatever pace feels right."
      }
    ],
    approach:
      "A carefully paced, trauma-informed approach combining stabilisation, Ego State Therapy, and clinical hypnotherapy once safety is established. If you are in immediate danger, please contact local emergency services first.",
    approachPoints: [
      "An initial session focused entirely on safety, with no pressure to share details before you're ready",
      "A pace set completely by you, with stabilisation always coming first",
      "Practical grounding tools for use between sessions",
      "25+ years of clinical experience providing trauma-informed care"
    ],
    faqs: [
      {
        question: "Do I have to talk about what happened in detail?",
        answer:
          "No. You share only what feels manageable, at your own pace. Early sessions focus on safety and stabilisation, not on recounting details."
      },
      {
        question: "What if I'm currently in an unsafe situation?",
        answer:
          "Please contact local emergency services or a domestic abuse helpline first if you are in immediate danger. Counselling can run alongside steps toward safety."
      },
      {
        question: "How many sessions does this kind of support usually take?",
        answer:
          "It varies significantly and is never rushed. Pace and length are shaped entirely by what you need, reviewed together as you go."
      },
      {
        question: "Is this counselling confidential?",
        answer:
          "Yes, every session is completely confidential, held between you and your therapist."
      }
    ],
    relatedTherapies: ["ego-state-therapy", "clinical-hypnotherapy"]
  },
  {
    slug: "abandonment-counselling-navi-mumbai",
    name: "Abandonment",
    audience: "individual",
    shortDescription: "Fear of being left, often rooted in earlier relationships.",
    metaTitle: "Abandonment Issues Counselling in Navi Mumbai | Attachment & Trust Patterns | Chaitanya Raj",
    metaDescription:
      "Counselling for abandonment fears and attachment patterns in Navi Mumbai, working through their roots in earlier relationships. Book a consultation today.",
    image: "/images/conditions/abandonment-counselling-navi-mumbai.png",
    imageAlt: "Placeholder — replace with a descriptive alt text for abandonment counselling navi mumbai",
    intro:
      "You catch yourself pulling away before someone else can, or asking for reassurance in a way that doesn't quite ease the worry, even when it's given. A persistent fear of being left — by a partner, friend, or family member — often traces back to an earlier experience of loss or inconsistency. At Chaitanya Raj in Vashi & Belapur, Navi Mumbai, we support clients working through abandonment fears and attachment patterns, led by Lt. Col. Rajesh Sharma (Retd), with over 25 years of experience in hypnotherapy and cognitive behavioural approaches.",
    signs: [
      "Intense anxiety at the thought of a relationship ending",
      "Difficulty trusting that people will stay",
      "Pushing people away to avoid being left first",
      "Reassurance-seeking that doesn't fully ease the worry"
    ],
    process:
      "Working through where the pattern began makes it easier to respond to the present differently. Your first session explores the current pattern and, gently, where it might have started. From there, we use Ego State Therapy to work with the earlier experience underlying the pattern, alongside CBT to build more stable, present-day relationship responses.",
    variants: [
      {
        title: "Fear of Abandonment",
        description:
          "An intense, disproportionate fear of being left can shape how you show up in relationships long before there's any real sign of someone leaving. This track works with that fear directly, tracing its roots and building a more grounded sense of security."
      },
      {
        title: "Attachment Patterns in Relationships",
        description:
          "Patterns like pushing people away, over-monitoring a partner, or struggling to trust reassurance often trace back to earlier attachment experiences. This track helps you recognise the pattern as it plays out now, and build more secure ways of relating."
      },
      {
        title: "Rebuilding Trust After Being Left",
        description:
          "A significant experience of being left — by a parent, partner, or close friend — can make trusting again feel genuinely risky. This track works through that specific experience and its lasting effect on how safe closeness feels."
      }
    ],
    approach:
      "Ego State Therapy to work with the earlier experience underlying the pattern, alongside CBT to build more stable, present-day relationship responses.",
    approachPoints: [
      "An initial session to understand the current pattern and its history",
      "A structured plan with realistic, achievable milestones",
      "Practical tools for moments of reassurance-seeking or anxiety",
      "25+ years of clinical experience working with attachment and relationship patterns"
    ],
    faqs: [
      {
        question: "How do I know if this is an abandonment pattern or just normal relationship worry?",
        answer:
          "Occasional worry about a relationship is normal. An abandonment pattern tends to be more persistent and disproportionate, often showing up across multiple relationships and shaping behaviour like pushing people away or constant reassurance-seeking."
      },
      {
        question: "How many sessions does this usually take?",
        answer:
          "Many clients notice a shift within 8 to 12 sessions, with the pace depending on how long the pattern has been in place. A realistic estimate is shared after the first session."
      },
      {
        question: "Will this involve talking about my childhood?",
        answer:
          "Often, yes, since these patterns frequently trace back to earlier relationships. The pace and depth of that exploration is always guided by what feels right for you."
      },
      {
        question: "Is this counselling confidential?",
        answer:
          "Yes, every session is completely confidential, held between you and your therapist."
      }
    ],
    relatedTherapies: ["ego-state-therapy", "cognitive-behavioural-therapy"]
  },
  {
    slug: "anger-management-counselling-navi-mumbai",
    name: "Anger Management",
    audience: "corporate",
    shortDescription: "Reactions that feel disproportionate, or hard to control once triggered.",
    metaTitle: "Anger Management Counselling in Navi Mumbai | Chaitanya Raj",
    metaDescription:
      "Anger management counselling in Navi Mumbai. Understand your triggers and build practical, lasting self-regulation skills. Book a consultation today.",
    image: "/images/conditions/anger-management-counselling-navi-mumbai.png",
    imageAlt: "Placeholder — replace with a descriptive alt text for anger management counselling navi mumbai",
    intro:
      "The reaction is over before you've had a chance to think, and the regret usually arrives right after. Anger is rarely the whole story — underneath it there's often stress, hurt, or a boundary that's been crossed repeatedly. At Chaitanya Raj in Vashi & Belapur, Navi Mumbai, we work with reactive anger and its impact on work and family relationships, led by Lt. Col. Rajesh Sharma (Retd), with over 25 years of experience in hypnotherapy and cognitive behavioural approaches.",
    signs: [
      "Reacting more intensely than the situation seems to call for",
      "Regretting words or actions after the moment has passed",
      "Physical tension building before an outburst",
      "Strained relationships at home or work because of reactivity"
    ],
    process:
      "Counselling works to identify the actual trigger pattern and build regulation tools that hold up under real pressure, not just in a calm therapy room. Your first session maps out specific recent examples — what led up to the reaction, and what was really going on underneath it. From there, we use Behaviour Modification Therapy to interrupt reactive patterns, combined with CBT to work through the underlying triggers.",
    variants: [
      {
        title: "Anger Management Therapy",
        description:
          "For anger that's become a recurring pattern rather than an occasional flare-up, this track maps your specific triggers and the physical build-up that precedes an outburst, building practical tools to interrupt the cycle before it escalates."
      },
      {
        title: "Workplace Anger & Reactivity",
        description:
          "Pressure, deadlines, and difficult colleagues can make reactivity at work feel constant, with real consequences for relationships and reputation. This track focuses on regulation tools that work in a professional setting, under real time pressure."
      },
      {
        title: "Anger's Impact on Family Relationships",
        description:
          "Outbursts at home tend to land hardest on the people closest to you, and the guilt afterward can compound the original stress. This track works on both the reactive pattern itself and repairing the strain it's placed on family relationships."
      }
    ],
    approach:
      "Behaviour Modification Therapy to interrupt reactive patterns, combined with CBT to work through the underlying triggers.",
    approachPoints: [
      "An initial session to map specific triggers and recent examples",
      "A structured plan with realistic, achievable milestones",
      "Practical tools to interrupt the pattern before it escalates",
      "25+ years of clinical experience working specifically with anger and reactivity"
    ],
    faqs: [
      {
        question: "How many sessions does anger management usually take?",
        answer:
          "Many clients identify their specific trigger pattern early and see meaningful change within 6 to 10 sessions. A realistic estimate is shared after the first session."
      },
      {
        question: "Is anger management only for people with 'anger problems'?",
        answer:
          "No. Many clients come in simply wanting better regulation under stress, or to repair the impact reactivity has had on a relationship — it isn't limited to extreme cases."
      },
      {
        question: "Can this help even if the anger only shows up at home?",
        answer:
          "Yes. Anger that only surfaces in specific relationships is common and responds well to identifying the particular triggers and dynamics involved."
      },
      {
        question: "Is anger management counselling confidential?",
        answer:
          "Yes, every session is completely confidential, held between you and your therapist."
      }
    ],
    relatedTherapies: ["behaviour-modification-therapy", "cognitive-behavioural-therapy"]
  },
  {
    slug: "leadership-team-building-programs",
    name: "Leadership & Team Building Programs",
    audience: "corporate",
    shortDescription: "Psychologist-led leadership development and team building programs for organisations, delivered globally.",
    metaTitle: "Leadership & Team Building Programs | Corporate Psychologist-Led Training | Chaitanya Raj",
    metaDescription:
      "Global leadership development and team building programs led by a psychologist, Lt Col Rajesh Sharma (Retd), with 25+ years of experience. In-person and virtual delivery worldwide. Book a consultation today.",
    image: "/images/corporate/leadership-wellness.jpg",
    imageAlt: "Placeholder replace with a descriptive alt text for leadership and team building programs",
    intro:
      "Most leadership training teaches frameworks. Few address what actually determines whether a team performs under pressure — how people communicate when stressed, how trust is built or eroded day to day, and how a leader's own patterns shape the culture around them. Led by Lt. Col. Rajesh Sharma (Retd), with over 25 years of experience in psychology, hypnotherapy, and behavioural science, our leadership and team building programs are grounded in applied psychology rather than generic corporate theory. Programs are delivered for organisations across India and internationally, in-person or virtually.",
    signs: [
      "Teams that function well individually but struggle to collaborate",
      "Leaders who are technically strong but struggle to motivate or retain people",
      "Recurring communication breakdowns or unresolved interpersonal friction",
      "Organisations going through change, restructuring, or rapid growth"
    ],
    process:
      "Every program begins with understanding the organisation's specific context — team size, industry pressures, and what's actually not working day to day. From there, we design a program combining psychological principles, structured exercises, and facilitated group work, rather than applying a fixed template. Programs can run as a single intensive workshop, a multi-day offsite, or an ongoing engagement with periodic sessions over months.",
    variants: [
      {
        title: "Leadership Development",
        description:
          "One-on-one and group work with leaders and managers, focused on self-awareness, decision-making under pressure, and the psychological patterns that shape how they lead. Draws on clinical psychology and behavioural science rather than generic management theory."
      },
      {
        title: "Team Building & Cohesion",
        description:
          "Structured group programs designed to rebuild trust, improve communication, and address friction within teams — particularly useful after restructuring, leadership changes, or periods of high pressure."
      },
      {
        title: "Corporate Offsites & Retreats",
        description:
          "Multi-day, immersive programs combining leadership and team-building work, typically delivered at an offsite location, for organisations wanting a concentrated reset away from daily work pressures."
      },
      {
        title: "Global & Virtual Delivery",
        description:
          "Programs delivered internationally for distributed and multinational teams, combining in-person sessions where possible with virtual facilitation for organisations spread across geographies."
      }
    ],
    approach:
      "Our approach combines applied psychology, structured group facilitation, and practical leadership tools, tailored to the organisation's actual team dynamics rather than a one-size-fits-all corporate template.",
    approachPoints: [
      "An initial consultation to understand the organisation's context, goals, and challenges",
      "A program design tailored to team size, industry, and specific objectives",
      "Delivery in-person, virtually, or as a hybrid, depending on the organisation's location and needs",
      "Guided by 25+ years of clinical and organisational psychology experience"
    ],
    faqs: [
      {
        question: "Do you work with organisations outside India?",
        answer:
          "Yes, programs are delivered for organisations across the world, either in-person for international offsites or virtually for distributed teams."
      },
      {
        question: "How long does a typical program run?",
        answer:
          "This varies by organisation — some programs are a single intensive workshop, others run as a multi-day offsite, and some are ongoing engagements with periodic sessions over several months. The right format is discussed during the initial consultation."
      },
      {
        question: "How is this different from a standard corporate training provider?",
        answer:
          "Programs are designed and delivered by a psychologist, drawing on clinical and behavioural expertise rather than generic management frameworks, so the focus is on the actual psychological and interpersonal patterns affecting a team's performance."
      },
      {
        question: "Can programs be customised for a specific team size or industry?",
        answer:
          "Yes, every program is designed around the organisation's specific context, team size, and industry after an initial consultation."
      }
    ],
    relatedTherapies: ["cognitive-behavioural-therapy", "mindfulness-based-therapy"]
  },
];

export function getCondition(slug: string) {
  return conditions.find((c) => c.slug === slug);
}