export type Condition = {
  slug: string;
  name: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  signs: string[];
  approach: string;
  relatedTherapies: string[]; // therapy slugs
};

export const conditions: Condition[] = [
  {
    slug: "anxiety",
    name: "Anxiety",
    shortDescription: "Persistent worry, racing thoughts, or a body that won't settle.",
    metaTitle: "Anxiety Counselling in Navi Mumbai | Chaitanya Raj",
    metaDescription:
      "Evidence-based anxiety counselling in Vashi, Navi Mumbai. Understand your triggers and build practical tools to feel steady again. Book a consultation.",
    intro:
      "Anxiety often shows up long before it's named — a tight chest before a meeting, a mind that won't stop rehearsing worst-case scenarios, nights where sleep won't come easily. Treatment focuses on understanding what's driving it and building tools that hold up in real life, not just in the therapy room.",
    signs: [
      "Racing or repetitive worry that's hard to switch off",
      "Physical symptoms — tight chest, restlessness, disturbed sleep",
      "Avoiding situations that used to feel manageable",
      "A constant sense of being 'on edge' without a clear reason"
    ],
    approach:
      "Sessions typically combine Cognitive Behavioural Therapy to work with thought patterns, and where useful, clinical hypnotherapy to work with the body's stress response directly.",
    relatedTherapies: ["cognitive-behavioural-therapy", "clinical-hypnotherapy"]
  },
  {
    slug: "depression",
    name: "Depression",
    shortDescription: "Low mood, low energy, and a loss of interest in things that used to matter.",
    metaTitle: "Depression Counselling in Navi Mumbai | Chaitanya Raj",
    metaDescription:
      "Compassionate, structured support for depression in Vashi, Navi Mumbai. Practical, evidence-based counselling to help you rebuild momentum.",
    intro:
      "Depression can make even small tasks feel disproportionately heavy. It isn't a lack of willpower — it's a shift in how the mind and body regulate mood, energy and motivation. Counselling works to understand the pattern behind it and rebuild momentum gradually, at a pace that doesn't overwhelm.",
    signs: [
      "Low energy or motivation that doesn't lift with rest",
      "Losing interest in things you'd usually enjoy",
      "Difficulty concentrating or making decisions",
      "Changes in appetite or sleep"
    ],
    approach:
      "Behaviour Modification Therapy alongside CBT is typically used to rebuild routine and re-engage with life step by step, alongside a review of any medical factors worth discussing with a physician.",
    relatedTherapies: ["behaviour-modification-therapy", "cognitive-behavioural-therapy"]
  },
  {
    slug: "stress-and-burnout",
    name: "Stress & Burnout",
    shortDescription: "The slow build-up of pressure from work, family, or simply doing too much for too long.",
    metaTitle: "Stress & Burnout Counselling in Navi Mumbai | Chaitanya Raj",
    metaDescription:
      "Counselling for chronic stress and burnout in Vashi, Navi Mumbai. Practical strategies to recover capacity and set sustainable boundaries.",
    intro:
      "Stress isn't always dramatic — often it's cumulative, built from months of over-functioning until the body and mind start signalling that something has to change. Counselling here is less about 'relaxing' and more about identifying what's actually unsustainable, and what to do about it.",
    signs: [
      "Feeling constantly depleted, even after rest",
      "Irritability or a shorter fuse than usual",
      "Trouble switching off from work or responsibilities",
      "Physical symptoms — headaches, tension, fatigue"
    ],
    approach:
      "Sessions focus on practical boundary-setting, structured relaxation training, and where relevant, mindfulness-based techniques to rebuild a sustainable pace.",
    relatedTherapies: ["mindfulness-based-therapy", "cognitive-behavioural-therapy"]
  },
  {
    slug: "phobias-and-fears",
    name: "Phobias & Fears",
    shortDescription: "A specific, disproportionate fear that limits what you feel able to do.",
    metaTitle: "Phobia Treatment in Navi Mumbai | Chaitanya Raj",
    metaDescription:
      "Structured, gradual treatment for specific phobias and fears in Vashi, Navi Mumbai — flying, heights, medical procedures, and more.",
    intro:
      "A phobia is a fear response that's become disproportionate to the actual risk — of flying, heights, needles, or a specific situation. It responds well to structured, gradual treatment, usually faster than people expect once the avoidance cycle is interrupted.",
    signs: [
      "Intense, immediate fear triggered by a specific object or situation",
      "Avoidance that's started limiting daily choices",
      "Physical panic symptoms when confronted with the trigger",
      "Recognising the fear is disproportionate, but feeling unable to control it"
    ],
    approach:
      "Graded exposure combined with CBT, and clinical hypnotherapy to work with the automatic fear response at a physiological level.",
    relatedTherapies: ["cognitive-behavioural-therapy", "clinical-hypnotherapy"]
  },
  {
    slug: "grief-and-loss",
    name: "Grief & Loss",
    shortDescription: "Making space to process loss — of a person, a relationship, or a chapter of life.",
    metaTitle: "Grief Counselling in Navi Mumbai | Chaitanya Raj",
    metaDescription:
      "Supportive grief counselling in Vashi, Navi Mumbai, for loss of a loved one or a significant life change. No fixed timeline, no judgement.",
    intro:
      "Grief doesn't follow a schedule, and there's no correct way to move through it. Counselling offers a steady space to process loss at your own pace — whether that's the death of someone close, the end of a relationship, or a loss that's harder to name.",
    signs: [
      "Waves of sadness that feel unpredictable",
      "Difficulty accepting or processing what's happened",
      "Withdrawing from people or routines",
      "Guilt, anger, or numbness that doesn't feel like it's easing"
    ],
    approach:
      "A supportive, unhurried counselling approach, drawing on grief-specific frameworks and, where helpful, Ego State work to process difficult memories.",
    relatedTherapies: ["ego-state-therapy", "cognitive-behavioural-therapy"]
  },
  {
    slug: "trauma-and-ptsd",
    name: "Trauma & PTSD",
    shortDescription: "The lasting effects of a distressing event that the mind hasn't fully processed.",
    metaTitle: "Trauma & PTSD Counselling in Navi Mumbai | Chaitanya Raj",
    metaDescription:
      "Trauma-informed counselling in Vashi, Navi Mumbai, for PTSD and the lasting effects of distressing events. A careful, paced approach.",
    intro:
      "Trauma responses can show up as flashbacks, hypervigilance, or a nervous system that stays braced for danger long after the event has passed. Treatment is paced deliberately — safety and stabilisation always come before processing the event itself.",
    signs: [
      "Intrusive memories, flashbacks, or nightmares",
      "Feeling constantly on guard or easily startled",
      "Avoiding reminders of the event",
      "Emotional numbness or disconnection"
    ],
    approach:
      "A phased, trauma-informed approach combining stabilisation techniques, CBT, and clinical hypnotherapy used carefully and only once grounding is established.",
    relatedTherapies: ["clinical-hypnotherapy", "ego-state-therapy"]
  },
  {
    slug: "sleep-disorders",
    name: "Sleep Disorders",
    shortDescription: "Trouble falling asleep, staying asleep, or waking up rested.",
    metaTitle: "Sleep Disorder Counselling in Navi Mumbai | Chaitanya Raj",
    metaDescription:
      "Counselling for insomnia and sleep disturbance in Vashi, Navi Mumbai, addressing the anxious thoughts and habits that disrupt sleep.",
    intro:
      "Sleep trouble is frequently a symptom rather than the root problem — of anxiety, an overactive mind at night, or habits that have quietly disrupted the body's natural rhythm. Treatment addresses both the thinking patterns and the routine around sleep.",
    signs: [
      "Difficulty falling asleep despite feeling tired",
      "Waking frequently or too early",
      "A racing mind once the lights go off",
      "Daytime fatigue affecting concentration and mood"
    ],
    approach:
      "Cognitive Behavioural Therapy for Insomnia (CBT-I) principles, paired with relaxation and hypnotherapy techniques to quiet an overactive mind at night.",
    relatedTherapies: ["cognitive-behavioural-therapy", "clinical-hypnotherapy"]
  },
  {
    slug: "drug-or-alcohol-abuse",
    name: "Drug or Alcohol Abuse",
    shortDescription: "Support for dependence, and the patterns that keep it going.",
    metaTitle: "Drug & Alcohol Abuse Counselling in Navi Mumbai | Chaitanya Raj",
    metaDescription:
      "Counselling support for drug and alcohol dependence in Vashi, Navi Mumbai, addressing the underlying triggers alongside the behaviour itself.",
    intro:
      "Dependence rarely exists in isolation — it's usually tangled up with stress, trauma, or an attempt to manage difficult emotions. Counselling looks at both the behaviour itself and what it's been standing in for, working alongside medical treatment where withdrawal management is needed.",
    signs: [
      "Increasing reliance on a substance to function or cope",
      "Failed attempts to cut back on your own",
      "Strained relationships or responsibilities affected by use",
      "Withdrawal symptoms when not using"
    ],
    approach:
      "Behaviour Modification Therapy to interrupt the reinforcement cycle, combined with CBT to address the underlying triggers. Referral to a medical practitioner for supervised withdrawal is arranged where necessary.",
    relatedTherapies: ["behaviour-modification-therapy", "cognitive-behavioural-therapy"]
  },
  {
    slug: "sexual-dysfunctions",
    name: "Sexual Dysfunctions",
    shortDescription: "Difficulties with desire, performance, or intimacy that carry a psychological component.",
    metaTitle: "Sexual Dysfunction Counselling in Navi Mumbai | Chaitanya Raj",
    metaDescription:
      "Confidential counselling for sexual dysfunctions in Vashi, Navi Mumbai, addressing the psychological factors behind difficulties with intimacy.",
    intro:
      "Many sexual difficulties have a significant psychological component — anxiety, past experience, or relationship dynamics — even where a physical factor is also present. Sessions are handled with particular discretion and, where relevant, alongside a referral for medical evaluation.",
    signs: [
      "Loss of desire without a clear physical cause",
      "Performance anxiety that's become self-reinforcing",
      "Avoidance of intimacy",
      "Distress connected to a specific past experience"
    ],
    approach:
      "CBT to address performance anxiety and avoidance patterns, with Ego State Therapy where past experience is a contributing factor.",
    relatedTherapies: ["cognitive-behavioural-therapy", "ego-state-therapy"]
  },
  {
    slug: "stammering",
    name: "Stammering",
    shortDescription: "Speech disfluency, often worsened by the anxiety around it.",
    metaTitle: "Stammering Counselling in Navi Mumbai | Chaitanya Raj",
    metaDescription:
      "Psychological support for stammering in Vashi, Navi Mumbai — addressing the anxiety that often intensifies speech disfluency.",
    intro:
      "While stammering has physiological roots, the anxiety around speaking situations frequently makes it worse, creating a cycle that's hard to break alone. Counselling works alongside speech therapy to address that anxiety directly.",
    signs: [
      "Disfluency that increases under social or performance pressure",
      "Avoidance of speaking situations",
      "Anticipatory anxiety before conversations or calls",
      "Frustration or self-consciousness around speech"
    ],
    approach:
      "CBT to reduce speech-related anxiety, with clinical hypnotherapy used to ease the physiological tension that often intensifies disfluency. Works best alongside a speech-language therapist.",
    relatedTherapies: ["cognitive-behavioural-therapy", "clinical-hypnotherapy"]
  },
  {
    slug: "abuse",
    name: "Sexual, Domestic & Childhood Abuse",
    shortDescription: "A confidential space to process the impact of past or ongoing abuse.",
    metaTitle: "Abuse Counselling in Navi Mumbai | Chaitanya Raj",
    metaDescription:
      "Confidential, trauma-informed counselling for survivors of sexual, domestic or childhood abuse in Vashi, Navi Mumbai.",
    intro:
      "The impact of abuse can surface immediately or years later, and it deserves a pace and level of care set entirely by what feels safe for you. This work is trauma-informed throughout — safety and stabilisation always come first.",
    signs: [
      "Intrusive memories or heightened anxiety connected to the past",
      "Difficulty trusting or feeling safe in relationships",
      "Shame or self-blame that hasn't eased with time",
      "Feeling unsafe in a current relationship or living situation"
    ],
    approach:
      "A carefully paced, trauma-informed approach combining stabilisation, Ego State Therapy, and clinical hypnotherapy once safety is established. If you are in immediate danger, please contact local emergency services first.",
    relatedTherapies: ["ego-state-therapy", "clinical-hypnotherapy"]
  },
  {
    slug: "abandonment",
    name: "Abandonment",
    shortDescription: "Fear of being left, often rooted in earlier relationships.",
    metaTitle: "Abandonment Issues Counselling in Navi Mumbai | Chaitanya Raj",
    metaDescription:
      "Counselling for abandonment fears and attachment patterns in Vashi, Navi Mumbai, working through their roots in earlier relationships.",
    intro:
      "A persistent fear of being left — by a partner, friend, or family member — often traces back to an earlier experience of loss or inconsistency. Working through where the pattern began makes it easier to respond to the present differently.",
    signs: [
      "Intense anxiety at the thought of a relationship ending",
      "Difficulty trusting that people will stay",
      "Pushing people away to avoid being left first",
      "Reassurance-seeking that doesn't fully ease the worry"
    ],
    approach:
      "Ego State Therapy to work with the earlier experience underlying the pattern, alongside CBT to build more stable, present-day relationship responses.",
    relatedTherapies: ["ego-state-therapy", "cognitive-behavioural-therapy"]
  },
  {
    slug: "anger-management",
    name: "Anger Management",
    shortDescription: "Reactions that feel disproportionate, or hard to control once triggered.",
    metaTitle: "Anger Management Counselling in Navi Mumbai | Chaitanya Raj",
    metaDescription:
      "Anger management counselling in Vashi, Navi Mumbai. Understand your triggers and build practical, lasting self-regulation skills.",
    intro:
      "Anger is rarely the whole story — underneath it there's often stress, hurt, or a boundary that's been crossed repeatedly. Counselling works to identify the actual trigger pattern and build regulation tools that hold up under real pressure.",
    signs: [
      "Reacting more intensely than the situation seems to call for",
      "Regretting words or actions after the moment has passed",
      "Physical tension building before an outburst",
      "Strained relationships at home or work because of reactivity"
    ],
    approach:
      "Behaviour Modification Therapy to interrupt reactive patterns, combined with CBT to work through the underlying triggers.",
    relatedTherapies: ["behaviour-modification-therapy", "cognitive-behavioural-therapy"]
  }
];

export function getCondition(slug: string) {
  return conditions.find((c) => c.slug === slug);
}
