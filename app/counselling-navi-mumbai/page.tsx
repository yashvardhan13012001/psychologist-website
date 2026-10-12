// // // import Image from "next/image";
// // // import Link from "next/link";

// // // import Section from "@/components/Section";
// // // import { buildMetadata } from "@/lib/seo/metadata";
// // // import { conditions } from "@/lib/data/conditions";
// // // import { site } from "@/lib/data/site";

// // // export const metadata = buildMetadata({
// // //   title: "Counselling in Navi Mumbai | Psychology & Counselling — Chaitanya Raj",
// // //   description:
// // //     "Professional counselling in Vashi & Belapur, Navi Mumbai. Anxiety, depression, stress, relationship and trauma counselling with 25+ years' clinical experience. Book a session today.",
// // //   path: "/counselling-navi-mumbai"
// // // });

// // // const individualConditions = conditions.filter((c) => c.audience !== "corporate");

// // // const counsellingSteps = [
// // //   "Reach out by phone, email or the contact form to share what's bringing you in",
// // //   "We schedule your first counselling session, in-person at Vashi or Belapur, or online",
// // //   "In session, we listen closely and build an approach that fits your specific situation",
// // //   "You leave with a clear picture of the work ahead, and steady support at every step"
// // // ];

// // // const whyChoose = [
// // //   {
// // //     title: "25+ years of clinical experience",
// // //     description:
// // //       "Every counselling session is led personally by Lt Col Rajesh Sharma (Retd), a Clinical Hypnotherapist and Counselling Psychologist with over 25 years of practice."
// // //   },
// // //   {
// // //     title: "Evidence-based approach",
// // //     description:
// // //       "Counselling is grounded in CBT and clinical psychology, not generic advice — every session works toward a real, measurable shift in how you feel and function."
// // //   },
// // //   {
// // //     title: "A judgement-free space",
// // //     description:
// // //       "Every counselling conversation is private and confidential, held without judgement, whatever you're bringing into the room."
// // //   },
// // //   {
// // //     title: "Two centres across Navi Mumbai",
// // //     description:
// // //       "In-person counselling is available at our Vashi and Belapur centres, with online sessions also offered for those who prefer to begin remotely."
// // //   }
// // // ];

// // // const faqs = [
// // //   {
// // //     question: "What happens in the first counselling session?",
// // //     answer:
// // //       "The first session is a conversation, not a test. We take time to understand what you're dealing with, answer your questions about how counselling works, and map out an approach suited to your situation."
// // //   },
// // //   {
// // //     question: "Is online counselling available?",
// // //     answer:
// // //       "Yes. Counselling is available in-person at our Vashi or Belapur centres in Navi Mumbai, or online for those who prefer to begin remotely."
// // //   },
// // //   {
// // //     question: "How is counselling different from just talking to a friend?",
// // //     answer:
// // //       "A counsellor brings clinical training, structured techniques like CBT, and complete objectivity, so you get real tools for change, not just a sympathetic ear."
// // //   },
// // //   {
// // //     question: "Is everything discussed in counselling confidential?",
// // //     answer:
// // //       "Yes, every counselling session is confidential, held in a private space led by a qualified clinical psychologist and counsellor."
// // //   },
// // //   {
// // //     question: "How many counselling sessions will I need?",
// // //     answer:
// // //       "This varies by individual and concern. Many people notice meaningful change within a handful of sessions, though this is always discussed and reviewed with you directly."
// // //   }
// // // ];

// // // export default function CounsellingPage() {
// // //   return (
// // //     <>
// // //       {/* =====================================================
// // //           HERO
// // //       ====================================================== */}
// // //       <section className="bg-sand py-16 md:py-24">
// // //         <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[1.15fr_0.85fr] md:px-10">
// // //           <div className="max-w-3xl">
// // //             <p className="eyebrow">Professional Counselling · Vashi &amp; Belapur, Navi Mumbai</p>

// // //             <h1 className="mt-5 text-5xl leading-[1.05] text-primary-dark md:text-7xl">
// // //               Counselling in Navi Mumbai
// // //             </h1>

// // //             <p className="mt-8 text-xl leading-relaxed text-ink-soft">
// // //               Whatever you're carrying, you don't have to carry it alone. Counselling with{" "}
// // //               {site.shortName} is a calm, confidential space to work through what's weighing
// // //               on you, in person in Vashi or Belapur, or online, with someone trained to help.
// // //             </p>

// // //             <p className="mt-5 text-lg leading-relaxed text-ink-soft">
// // //               Led by {site.founder}, with over 25 years of clinical experience, we offer
// // //               dedicated counselling for anxiety, depression, stress, relationships, trauma
// // //               and every concern we treat, so you always work with someone who understands
// // //               your specific situation from the very first session.
// // //             </p>

// // //             <div className="mt-8 flex flex-wrap gap-4">
// // //               <Link href="/contact" className="btn-primary relative z-10">
// // //                 Book a Counselling Session →
// // //               </Link>
// // //               <a href={`tel:${site.phone}`} className="btn-outline relative z-10">
// // //                 Call {site.phoneDisplay}
// // //               </a>
// // //             </div>
// // //           </div>

// // //           <div className="relative">
// // //             <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full border border-primary/20" />
// // //             <div className="absolute -bottom-6 -left-6 h-40 w-40 rounded-[2rem] bg-primary/10" />
// // //             <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] bg-primary-dark shadow-xl">
// // //               <Image
// // //                 src="/founder.jpg"
// // //                 alt={`${site.founder} during a counselling session in Navi Mumbai`}
// // //                 fill
// // //                 priority
// // //                 className="object-cover"
// // //                 sizes="(max-width: 768px) 100vw, 40vw"
// // //               />
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* =====================================================
// // //           COUNSELLING TYPES — ALL CONDITIONS
// // //       ====================================================== */}
// // //       <Section
// // //         eyebrow="Counselling by concern"
// // //         title="Find the right counselling for what you're going through"
// // //       >
// // //         <p className="max-w-2xl text-lg leading-relaxed text-ink-soft mb-10">
// // //           Every counselling session is led by the same clinician, so whichever concern brought
// // //           you here, you're getting one continuous, informed approach rather than being passed
// // //           between specialists.
// // //         </p>

// // //         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // //           {individualConditions.map((c) => (
// // //             <Link
// // //               key={c.slug}
// // //               href={`/conditions/${c.slug}`}
// // //               className="card overflow-hidden flex flex-col hover:border-accent/40 hover:-translate-y-1 transition-all"
// // //             >
// // //               <div className="relative h-40 w-full">
// // //                 <Image
// // //                   src={c.image}
// // //                   alt={`${c.name} counselling in Navi Mumbai`}
// // //                   fill
// // //                   sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
// // //                   className="object-cover"
// // //                 />
// // //               </div>
// // //               <div className="p-6 flex flex-col gap-2 flex-1">
// // //                 <h3 className="text-xl text-primary-dark font-display">
// // //                   {c.name} Counselling
// // //                 </h3>
// // //                 <p className="text-ink-soft text-sm leading-relaxed flex-1">
// // //                   {c.shortDescription}
// // //                 </p>
// // //                 <span className="font-mono text-xs uppercase tracking-widest text-accent mt-1">
// // //                   Book this counselling session →
// // //                 </span>
// // //               </div>
// // //             </Link>
// // //           ))}
// // //         </div>
// // //       </Section>

// // //       {/* =====================================================
// // //           HOW COUNSELLING WORKS
// // //       ====================================================== */}
// // //       <section className="bg-primary-dark py-20 text-white md:py-28">
// // //         <div className="mx-auto max-w-7xl px-6 md:px-10">
// // //           <div className="max-w-2xl">
// // //             <p className="eyebrow text-white/60">Our process</p>
// // //             <h2 className="mt-5 text-4xl text-white md:text-6xl">
// // //               What to expect from counselling
// // //             </h2>
// // //             <p className="mt-6 text-lg leading-relaxed text-white/70">
// // //               Starting counselling is a low-pressure first step, designed to help you leave
// // //               each session with clarity, not more questions.
// // //             </p>
// // //           </div>

// // //           <div className="mt-12 grid gap-8 md:grid-cols-4">
// // //             {counsellingSteps.map((step, index) => (
// // //               <div key={step} className="border-t border-white/20 pt-6">
// // //                 <span className="text-sm text-gold">0{index + 1}</span>
// // //                 <p className="mt-5 text-lg leading-relaxed text-white/80">{step}</p>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* =====================================================
// // //           WHY CHOOSE US
// // //       ====================================================== */}
// // //       <Section eyebrow="Why choose us" title="Counselling rooted in real clinical experience">
// // //         <div className="grid sm:grid-cols-2 gap-6">
// // //           {whyChoose.map((item) => (
// // //             <div key={item.title} className="card p-6 flex flex-col gap-3">
// // //               <h3 className="text-xl text-primary-dark font-display">{item.title}</h3>
// // //               <p className="text-ink-soft text-sm leading-relaxed">{item.description}</p>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </Section>

// // //       {/* =====================================================
// // //           FAQ
// // //       ====================================================== */}
// // //       <section className="bg-sand py-20 md:py-28">
// // //         <div className="mx-auto max-w-4xl px-6 md:px-10">
// // //           <p className="eyebrow">Frequently asked questions</p>
// // //           <h2 className="mt-5 text-4xl text-primary-dark md:text-6xl">
// // //             Questions about counselling
// // //           </h2>

// // //           <div className="mt-12 divide-y divide-primary-dark/10">
// // //             {faqs.map((faq) => (
// // //               <details key={faq.question} className="group py-6">
// // //                 <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl font-medium text-primary-dark">
// // //                   {faq.question}
// // //                   <span className="text-2xl transition-transform group-open:rotate-45">+</span>
// // //                 </summary>
// // //                 <p className="mt-4 text-lg leading-relaxed text-ink-soft">{faq.answer}</p>
// // //               </details>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* =====================================================
// // //           FINAL CTA
// // //       ====================================================== */}
// // //       <section className="py-20 md:py-28">
// // //         <div className="mx-auto max-w-4xl px-6 text-center">
// // //           <p className="eyebrow">Start with a conversation</p>
// // //           <h2 className="mt-5 text-4xl leading-tight text-primary-dark md:text-6xl">
// // //             Book your counselling session in Navi Mumbai today.
// // //           </h2>
// // //           <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
// // //             Whatever you're carrying, the first step is simply saying it out loud to someone
// // //             who knows how to help.
// // //           </p>
// // //           <Link href="/contact" className="btn-primary mt-8 inline-flex">
// // //             Book a Counselling Session →
// // //           </Link>
// // //         </div>
// // //       </section>
// // //     </>
// // //   );
// // // }



// // import Image from "next/image";
// // import Link from "next/link";

// // import Section from "@/components/Section";
// // import { buildMetadata } from "@/lib/seo/metadata";
// // import { site } from "@/lib/data/site";

// // export const metadata = buildMetadata({
// //   title: "Counselling in Navi Mumbai | Chaitanya Raj",
// //   description:
// //     "Counselling in Vashi and Belapur, Navi Mumbai. Evidence-based support for anxiety, stress, relationships and more, led by 25+ years of experience.",
// //   path: "/counselling-navi-mumbai"
// // });

// // // NOTE: condition hrefs below are best-guess slugs following the existing
// // // "/conditions/{slug}" pattern used elsewhere on the site. Please confirm
// // // these against lib/data/conditions.ts and correct any that don't match.
// // const whatWeCover = [
// //   {
// //     name: "Anxiety counselling in Navi Mumbai",
// //     description: "Persistent worry, racing thoughts, or a body that won't settle.",
// //     linkText: "Learn more about anxiety counselling",
// //     href: "/conditions/anxiety"
// //   },
// //   {
// //     name: "Depression counselling in Navi Mumbai",
// //     description: "Low mood, low energy, and a loss of interest in things that used to matter.",
// //     linkText: "Learn more about depression counselling",
// //     href: "/conditions/depression"
// //   },
// //   {
// //     name: "Stress and burnout counselling",
// //     description:
// //       "The slow build-up of pressure from work, family, or simply doing too much for too long.",
// //     linkText: "Learn more about stress counselling",
// //     href: "/conditions/stress-and-burnout"
// //   },
// //   {
// //     name: "Relationship counselling in Navi Mumbai",
// //     description: "Conflict, distance, or communication that's grown careful and guarded.",
// //     linkText: "Learn more about relationship counselling",
// //     href: "/conditions/relationship-counselling"
// //   },
// //   {
// //     name: "Grief and loss counselling",
// //     description: "Support through the process of loss, at your own pace.",
// //     linkText: "Learn more about grief counselling",
// //     href: "/conditions/grief-and-loss"
// //   },
// //   {
// //     name: "Trauma and PTSD counselling",
// //     description: "Working through difficult experiences with structured, careful support.",
// //     linkText: "Learn more about trauma counselling",
// //     href: "/conditions/trauma-and-ptsd"
// //   },
// //   {
// //     name: "Sleep disorder counselling",
// //     description: "When racing thoughts or stress start affecting your sleep.",
// //     linkText: "Learn more about sleep counselling",
// //     href: "/conditions/sleep-disorders"
// //   },
// //   {
// //     name: "Anger management counselling",
// //     description: "Understanding and working through reactive anger.",
// //     linkText: "Learn more about anger management",
// //     href: "/conditions/anger-management"
// //   },
// //   {
// //     name: "Phobia and fear counselling",
// //     description: "Specific, disproportionate fears that limit what you feel able to do.",
// //     linkText: "Learn more about phobia treatment",
// //     href: "/conditions/phobias"
// //   },
// //   {
// //     name: "Child and teen counselling in Navi Mumbai",
// //     description: "Behavioural, emotional, or mood changes that need closer attention.",
// //     linkText: "Learn more about child and teen counselling",
// //     href: "/conditions/child-and-teen-counselling"
// //   }
// // ];

// // const sessionInvolves = [
// //   "A structured plan built around what you actually need, not a one-size-fits-all programme",
// //   "Cognitive Behavioural Therapy techniques, adapted to your specific situation",
// //   "Practical tools you can use between sessions",
// //   "Where useful, hypnotherapy alongside talk therapy",
// //   "Realistic milestones, reviewed and adjusted as you go"
// // ];

// // const misconceptions = [
// //   {
// //     myth: "\u201cCounselling is only for a crisis or a diagnosis.\u201d",
// //     answer:
// //       "You do not need a diagnosis, or a crisis, to start. Many clients come in simply feeling stuck, or knowing something feels off, without being able to name it yet."
// //   },
// //   {
// //     myth: "\u201cIt's just talking, it won't actually change anything.\u201d",
// //     answer:
// //       "Counselling here is structured, not open-ended venting. Sessions build toward a clear, practical plan, using techniques like CBT that are designed to shift patterns, not just discuss them."
// //   },
// //   {
// //     myth: "\u201cI have to commit to a long programme upfront.\u201d",
// //     answer:
// //       "There is no fixed length. Many clients see meaningful movement within 5 to 7 sessions. You will get a realistic estimate after your first session, not a locked-in package."
// //   }
// // ];

// // const whoItHelps = [
// //   "Constant worry that makes it hard to switch off",
// //   "A rough patch in a marriage or relationship",
// //   "Feeling low, flat, or disconnected from things that used to matter",
// //   "Grief after losing someone",
// //   "Feeling stuck, without being able to say exactly why",
// //   "Pressure from work or family that has built up over time",
// //   "Difficult patterns that keep repeating, in relationships or otherwise"
// // ];

// // const approach = [
// //   "An initial session to understand your history and current situation",
// //   "A structured plan with realistic milestones",
// //   "Practical tools you can use between sessions",
// //   "Where useful, clinical hypnotherapy alongside talk therapy",
// //   "25+ years of clinical experience as a counselling psychologist in Navi Mumbai"
// // ];

// // const faqs = [
// //   {
// //     question: "How is counselling different from therapy?",
// //     answer:
// //       "In practice, the terms are often used interchangeably. At Chaitanya Raj, counselling refers to structured, conversation-based sessions, which may also draw on techniques like CBT or hypnotherapy where useful."
// //   },
// //   {
// //     question: "How many sessions will I need?",
// //     answer:
// //       "This varies by person and by what you're working through. Many clients see meaningful movement within 5 to 7 sessions. We will give you a realistic estimate after your first session, not a fixed programme upfront."
// //   },
// //   {
// //     question: "Is counselling in Navi Mumbai confidential?",
// //     answer:
// //       "Yes. Every session, from your first enquiry onward, is treated with strict, professional confidentiality."
// //   },
// //   {
// //     question: "Do you offer online counselling?",
// //     answer:
// //       "Yes. Sessions are available in person at our Vashi and Belapur clinics, or online, so consistent care does not depend on being able to travel."
// //   },
// //   {
// //     question: "What if I'm not sure counselling is what I need?",
// //     answer:
// //       "That's a completely normal place to start. The first session is about understanding what you're dealing with and what kind of support actually fits, not committing to anything beyond that."
// //   }
// // ];

// // const credentials = [
// //   "MA Clinical Psychology, Gold Medalist",
// //   "PG Diploma, Clinical Hypnosis",
// //   "Lifetime Professional Member, Academy of Hypnosis India (Ref: 202301LM000034)",
// //   "25+ years of clinical practice"
// // ];

// // export default function CounsellingPage() {
// //   return (
// //     <>
// //       {/* =====================================================
// //           HERO
// //       ====================================================== */}
// //       <section className="bg-sand py-16 md:py-24">
// //         <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[1.15fr_0.85fr] md:px-10">
// //           <div className="max-w-3xl">
// //             <p className="eyebrow">Professional Counselling · Vashi &amp; Belapur, Navi Mumbai</p>

// //             <h1 className="mt-5 text-5xl leading-[1.05] text-primary-dark md:text-7xl">
// //               Counselling in Navi Mumbai
// //             </h1>

// //             <p className="mt-8 text-xl leading-relaxed text-ink-soft">
// //               Sometimes you know exactly what's wrong. Sometimes you just know something feels
// //               heavy, and you are not sure where to start. Counselling in Navi Mumbai at{" "}
// //               {site.shortName} is a space to work through either, in person in Vashi and
// //               Belapur, or online.
// //             </p>

// //             <p className="mt-5 text-lg leading-relaxed text-ink-soft">
// //               Led by {site.founder}, our counselling psychologist in Navi Mumbai, sessions
// //               combine structured, evidence-based talk therapy with over 25 years of clinical
// //               experience.
// //             </p>

// //             <div className="mt-8 flex flex-wrap gap-4">
// //               <Link href="/contact" className="btn-primary relative z-10">
// //                 Book a consultation →
// //               </Link>
// //               <a href={`tel:${site.phone}`} className="btn-outline relative z-10">
// //                 Call {site.phoneDisplay}
// //               </a>
// //             </div>
// //           </div>

// //           <div className="relative">
// //             <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full border border-primary/20" />
// //             <div className="absolute -bottom-6 -left-6 h-40 w-40 rounded-[2rem] bg-primary/10" />
// //             <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] bg-primary-dark shadow-xl">
// //               <Image
// //                 src="/founder.jpg"
// //                 alt="Counselling session in Navi Mumbai with Lt Col Rajesh Sharma"
// //                 fill
// //                 priority
// //                 className="object-cover"
// //                 sizes="(max-width: 768px) 100vw, 40vw"
// //               />
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* =====================================================
// //           WHAT COUNSELLING INVOLVES
// //       ====================================================== */}
// //       <Section eyebrow="Getting started" title="What counselling involves">
// //         <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-ink-soft">
// //           <p>
// //             Counselling is a series of conversations with a trained counsellor in Navi Mumbai,
// //             aimed at helping you understand what you are going through and build a practical
// //             way through it. It is not advice giving, and it is not a quick fix.
// //           </p>
// //           <p>
// //             Your first session with our counselling psychologist is mostly about listening,
// //             what's going on, how long it's been happening, and what you have already tried.
// //             From there, sessions build toward a clearer picture and a realistic plan, at a pace
// //             that suits you.
// //           </p>
// //         </div>
// //       </Section>

// //       {/* =====================================================
// //           WHAT A COUNSELLING SESSION INVOLVES
// //       ====================================================== */}
// //       <section className="bg-primary-dark py-20 text-white md:py-28">
// //         <div className="mx-auto max-w-7xl px-6 md:px-10">
// //           <div className="max-w-2xl">
// //             <p className="eyebrow text-white/60">The session itself</p>
// //             <h2 className="mt-5 text-4xl text-white md:text-6xl">
// //               What a counselling session involves
// //             </h2>
// //             <p className="mt-6 text-lg leading-relaxed text-white/70">
// //               Your first session is a conversation, not a fixed programme. We talk through
// //               what you're carrying, how long it's been going on, and what a realistic path
// //               forward looks like.
// //             </p>
// //             <p className="mt-4 text-lg leading-relaxed text-white/70">
// //               If counselling is the right fit, sessions involve:
// //             </p>
// //           </div>

// //           <div className="mt-12 grid gap-8 md:grid-cols-2">
// //             {sessionInvolves.map((item, index) => (
// //               <div key={item} className="border-t border-white/20 pt-6">
// //                 <span className="text-sm text-gold">0{index + 1}</span>
// //                 <p className="mt-5 text-lg leading-relaxed text-white/80">{item}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* =====================================================
// //           COMMON MISCONCEPTIONS
// //       ====================================================== */}
// //       <section className="bg-sand py-20 md:py-28">
// //         <div className="mx-auto max-w-4xl px-6 md:px-10">
// //           <p className="eyebrow">Setting the record straight</p>
// //           <h2 className="mt-5 text-4xl text-primary-dark md:text-6xl">
// //             Common misconceptions about counselling
// //           </h2>

// //           <div className="mt-12 space-y-8">
// //             {misconceptions.map((item) => (
// //               <div key={item.myth} className="card p-6">
// //                 <p className="text-xl font-medium text-primary-dark">{item.myth}</p>
// //                 <p className="mt-3 text-lg leading-relaxed text-ink-soft">{item.answer}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* =====================================================
// //           WHO COUNSELLING HELPS
// //       ====================================================== */}
// //       <Section eyebrow="Is this for you" title="Who counselling helps">
// //         <p className="max-w-2xl text-lg leading-relaxed text-ink-soft">
// //           You do not need a diagnosis to start counselling in Navi Mumbai. People come to us
// //           for many reasons, including:
// //         </p>

// //         <ul className="mt-8 grid gap-4 sm:grid-cols-2">
// //           {whoItHelps.map((item) => (
// //             <li key={item} className="flex gap-3 text-lg leading-relaxed text-ink-soft">
// //               <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
// //               {item}
// //             </li>
// //           ))}
// //         </ul>

// //         <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
// //           If any of this sounds familiar, it is worth having a conversation with our
// //           counsellor in Navi Mumbai, even if you are not sure counselling is the right fit
// //           yet.
// //         </p>
// //       </Section>

// //       {/* =====================================================
// //           WHAT WE COVER
// //       ====================================================== */}
// //       <section className="bg-sand py-20 md:py-28">
// //         <div className="mx-auto max-w-7xl px-6 md:px-10">
// //           <p className="eyebrow">What we cover</p>
// //           <h2 className="mt-5 max-w-2xl text-4xl text-primary-dark md:text-6xl">
// //             Counselling by concern
// //           </h2>

// //           <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
// //             {whatWeCover.map((item) => (
// //               <div key={item.name} className="card p-6 flex flex-col gap-2">
// //                 <h3 className="text-xl text-primary-dark font-display">{item.name}</h3>
// //                 <p className="text-ink-soft text-sm leading-relaxed flex-1">
// //                   {item.description}
// //                 </p>
// //                 <Link
// //                   href={item.href}
// //                   className="font-mono text-xs uppercase tracking-widest text-accent mt-1"
// //                 >
// //                   {item.linkText} →
// //                 </Link>
// //               </div>
// //             ))}
// //           </div>

// //           <Link href="/conditions" className="btn-outline mt-10 inline-flex">
// //             See all conditions we treat →
// //           </Link>
// //         </div>
// //       </section>

// //       {/* =====================================================
// //           OUR APPROACH TO COUNSELLING
// //       ====================================================== */}
// //       <Section eyebrow="Our approach" title="Our approach to counselling">
// //         <p className="max-w-2xl text-lg leading-relaxed text-ink-soft mb-10">
// //           Counselling at {site.shortName} is built on Cognitive Behavioural Therapy, adapted
// //           to what you actually need rather than a fixed programme applied to everyone.
// //         </p>

// //         <ul className="grid gap-4 sm:grid-cols-2">
// //           {approach.map((item) => (
// //             <li key={item} className="card p-6 text-lg leading-relaxed text-ink-soft">
// //               {item}
// //             </li>
// //           ))}
// //         </ul>
// //       </Section>

// //       {/* =====================================================
// //           FAQ
// //       ====================================================== */}
// //       <section className="bg-sand py-20 md:py-28">
// //         <div className="mx-auto max-w-4xl px-6 md:px-10">
// //           <p className="eyebrow">Frequently asked questions</p>
// //           <h2 className="mt-5 text-4xl text-primary-dark md:text-6xl">
// //             Questions about counselling
// //           </h2>

// //           <div className="mt-12 divide-y divide-primary-dark/10">
// //             {faqs.map((faq) => (
// //               <details key={faq.question} className="group py-6">
// //                 <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl font-medium text-primary-dark">
// //                   {faq.question}
// //                   <span className="text-2xl transition-transform group-open:rotate-45">+</span>
// //                 </summary>
// //                 <p className="mt-4 text-lg leading-relaxed text-ink-soft">{faq.answer}</p>
// //               </details>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* =====================================================
// //           PRACTITIONER CREDENTIALS
// //       ====================================================== */}
// //       <Section eyebrow="Practitioner credentials" title="Led by an experienced clinician">
// //         <div className="card max-w-2xl p-8">
// //           <h3 className="text-2xl text-primary-dark font-display">{site.founder}</h3>
// //           <p className="mt-1 text-ink-soft">
// //             Clinical Hypnotherapist and Counselling Psychologist in Navi Mumbai
// //           </p>
// //           <ul className="mt-6 space-y-3">
// //             {credentials.map((item) => (
// //               <li key={item} className="flex gap-3 text-ink-soft leading-relaxed">
// //                 <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
// //                 {item}
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       </Section>

// //       {/* =====================================================
// //           FINAL CTA — READY WHEN YOU ARE
// //       ====================================================== */}
// //       <section className="py-20 md:py-28">
// //         <div className="mx-auto max-w-4xl px-6 text-center">
// //           <p className="eyebrow">Ready when you are</p>
// //           <h2 className="mt-5 text-4xl leading-tight text-primary-dark md:text-6xl">
// //             The first conversation is about understanding what you need.
// //           </h2>
// //           <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
// //             There's no pressure to commit beyond that.
// //           </p>
// //           <Link href="/contact" className="btn-primary mt-8 inline-flex">
// //             Book a consultation →
// //           </Link>
// //         </div>
// //       </section>
// //     </>
// //   );
// // }



// import Image from "next/image";
// import Link from "next/link";

// import Section from "@/components/Section";
// import { buildMetadata } from "@/lib/seo/metadata";
// import { site } from "@/lib/data/site";

// export const metadata = buildMetadata({
//   title: "Counselling in Navi Mumbai | Chaitanya Raj",
//   description:
//     "Counselling in Vashi and Belapur, Navi Mumbai. Evidence-based support for anxiety, stress, relationships and more, led by 25+ years of experience.",
//   path: "/counselling-navi-mumbai"
// });

// // Condition hrefs below match the real slugs in lib/data/conditions.ts
// const whatWeCover = [
//   {
//     name: "Anxiety counselling in Navi Mumbai",
//     description: "Persistent worry, racing thoughts, or a body that won't settle.",
//     linkText: "Learn more about anxiety counselling",
//     href: "/conditions/anxiety-therapy-navi-mumbai"
//   },
//   {
//     name: "Depression counselling in Navi Mumbai",
//     description: "Low mood, low energy, and a loss of interest in things that used to matter.",
//     linkText: "Learn more about depression counselling",
//     href: "/conditions/depression-therapy-navi-mumbai"
//   },
//   {
//     name: "Stress and burnout counselling",
//     description:
//       "The slow build-up of pressure from work, family, or simply doing too much for too long.",
//     linkText: "Learn more about stress counselling",
//     href: "/conditions/stress-burnout-counselling-navi-mumbai"
//   },
//   {
//     name: "Relationship counselling in Navi Mumbai",
//     description: "Conflict, distance, or communication that's grown careful and guarded.",
//     linkText: "Learn more about relationship counselling",
//     href: "/conditions/relationship-counselling-navi-mumbai"
//   },
//   {
//     name: "Grief and loss counselling",
//     description: "Support through the process of loss, at your own pace.",
//     linkText: "Learn more about grief counselling",
//     href: "/conditions/grief-counselling-navi-mumbai"
//   },
//   {
//     name: "Trauma and PTSD counselling",
//     description: "Working through difficult experiences with structured, careful support.",
//     linkText: "Learn more about trauma counselling",
//     href: "/conditions/trauma-ptsd-counselling-navi-mumbai"
//   },
//   {
//     name: "Sleep disorder counselling",
//     description: "When racing thoughts or stress start affecting your sleep.",
//     linkText: "Learn more about sleep counselling",
//     href: "/conditions/sleep-disorder-counselling-navi-mumbai"
//   },
//   {
//     name: "Anger management counselling",
//     description: "Understanding and working through reactive anger.",
//     linkText: "Learn more about anger management",
//     href: "/conditions/anger-management-counselling-navi-mumbai"
//   },
//   {
//     name: "Phobia and fear counselling",
//     description: "Specific, disproportionate fears that limit what you feel able to do.",
//     linkText: "Learn more about phobia treatment",
//     href: "/conditions/phobia-treatment-navi-mumbai"
//   },
//   {
//     name: "Child and teen counselling in Navi Mumbai",
//     description: "Behavioural, emotional, or mood changes that need closer attention.",
//     linkText: "Learn more about child and teen counselling",
//     href: "/conditions/child-teen-counselling-navi-mumbai"
//   }
// ];

// const sessionInvolves = [
//   "A structured plan built around what you actually need, not a one-size-fits-all programme",
//   "Cognitive Behavioural Therapy techniques, adapted to your specific situation",
//   "Practical tools you can use between sessions",
//   "Where useful, hypnotherapy alongside talk therapy",
//   "Realistic milestones, reviewed and adjusted as you go"
// ];

// const misconceptions = [
//   {
//     myth: "\u201cCounselling is only for a crisis or a diagnosis.\u201d",
//     answer:
//       "You do not need a diagnosis, or a crisis, to start. Many clients come in simply feeling stuck, or knowing something feels off, without being able to name it yet."
//   },
//   {
//     myth: "\u201cIt's just talking, it won't actually change anything.\u201d",
//     answer:
//       "Counselling here is structured, not open-ended venting. Sessions build toward a clear, practical plan, using techniques like CBT that are designed to shift patterns, not just discuss them."
//   },
//   {
//     myth: "\u201cI have to commit to a long programme upfront.\u201d",
//     answer:
//       "How long counselling takes varies. Focused work on a specific issue can move quickly; long-standing patterns usually take longer. You will get a realistic sense of what to expect after your first session, reviewed as you go."
//   }
// ];

// const whoItHelps = [
//   "Constant worry that makes it hard to switch off",
//   "A rough patch in a marriage or relationship",
//   "Feeling low, flat, or disconnected from things that used to matter",
//   "Grief after losing someone",
//   "Feeling stuck, without being able to say exactly why",
//   "Pressure from work or family that has built up over time",
//   "Difficult patterns that keep repeating, in relationships or otherwise"
// ];

// const approach = [
//   "An initial session to understand your history and current situation",
//   "A structured plan with realistic milestones",
//   "Practical tools you can use between sessions",
//   "Where useful, clinical hypnotherapy alongside talk therapy",
//   "25+ years of clinical experience as a counselling psychologist in Navi Mumbai"
// ];

// const faqs = [
//   {
//     question: "How is counselling different from therapy?",
//     answer:
//       "In practice, the terms are often used interchangeably. At Chaitanya Raj, counselling refers to structured, conversation-based sessions, which may also draw on techniques like CBT or hypnotherapy where useful."
//   },
//   {
//     question: "How many sessions will I need?",
//     answer:
//       "This varies by person and by what you're working through. Many clients see meaningful movement within 5 to 7 sessions. We will give you a realistic estimate after your first session, not a fixed programme upfront."
//   },
//   {
//     question: "Is counselling in Navi Mumbai confidential?",
//     answer:
//       "Yes. Every session, from your first enquiry onward, is treated with strict, professional confidentiality."
//   },
//   {
//     question: "Do you offer online counselling?",
//     answer:
//       "Yes. Sessions are available in person at our Vashi and Belapur clinics, or online, so consistent care does not depend on being able to travel."
//   },
//   {
//     question: "What if I'm not sure counselling is what I need?",
//     answer:
//       "That's a completely normal place to start. The first session is about understanding what you're dealing with and what kind of support actually fits, not committing to anything beyond that."
//   }
// ];

// const credentials = [
//   "MA Clinical Psychology, Gold Medalist",
//   "PG Diploma, Clinical Hypnosis",
//   "Lifetime Professional Member, Academy of Hypnosis India (Ref: 202301LM000034)",
//   "25+ years of clinical practice"
// ];

// export default function CounsellingPage() {
//   return (
//     <>
//       {/* =====================================================
//           HERO
//       ====================================================== */}
//       <section className="bg-sand py-16 md:py-24">
//         <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[1.15fr_0.85fr] md:px-10">
//           <div className="max-w-3xl">
//             <p className="eyebrow">Professional Counselling · Vashi &amp; Belapur, Navi Mumbai</p>

//             <h1 className="mt-5 text-5xl leading-[1.05] text-primary-dark md:text-7xl">
//               Counselling in Navi Mumbai
//             </h1>

//             <p className="mt-8 text-xl leading-relaxed text-ink-soft">
//               Sometimes you know exactly what's wrong. Sometimes you just know something feels
//               heavy, and you are not sure where to start. Counselling in Navi Mumbai at{" "}
//               {site.shortName} is a space to work through either, in person in Vashi and
//               Belapur, or online.
//             </p>

//             <p className="mt-5 text-lg leading-relaxed text-ink-soft">
//               Led by {site.founder}, our counselling psychologist in Navi Mumbai, sessions
//               combine structured, evidence-based talk therapy with over 25 years of clinical
//               experience.
//             </p>

//             <div className="mt-8 flex flex-wrap gap-4">
//               <Link href="/contact" className="btn-primary relative z-10">
//                 Book a consultation →
//               </Link>
//               <a href={`tel:${site.phone}`} className="btn-outline relative z-10">
//                 Call {site.phoneDisplay}
//               </a>
//             </div>
//           </div>

//           <div className="relative">
//             <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full border border-primary/20" />
//             <div className="absolute -bottom-6 -left-6 h-40 w-40 rounded-[2rem] bg-primary/10" />
//             <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] bg-primary-dark shadow-xl">
//               <Image
//                 src="/founder.jpg"
//                 alt="Counselling session in Navi Mumbai with Lt Col Rajesh Sharma"
//                 fill
//                 priority
//                 className="object-cover"
//                 sizes="(max-width: 768px) 100vw, 40vw"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           WHAT COUNSELLING INVOLVES
//       ====================================================== */}
//       <Section eyebrow="Getting started" title="What counselling involves">
//         <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-ink-soft">
//           <p>
//             Counselling is a series of conversations with a trained counsellor in,
//             aimed at helping you understand what you are going through and build a practical
//             way through it. It is not advice giving, and it is not a quick fix.
//           </p>
//           <p>
//             Your first session with our counselling psychologist is mostly about listening,
//             what's going on, how long it's been happening, and what you have already tried.
//             From there, sessions build toward a clearer picture and a realistic plan, at a pace
//             that suits you.
//           </p>
//         </div>
//       </Section>

//       {/* =====================================================
//           WHAT A COUNSELLING SESSION INVOLVES
//       ====================================================== */}
//       <section className="bg-primary-dark py-20 text-white md:py-28">
//         <div className="mx-auto max-w-7xl px-6 md:px-10">
//           <div className="max-w-2xl">
//             <p className="eyebrow text-white/60">The session itself</p>
//             <h2 className="mt-5 text-4xl text-white md:text-6xl">
//               What a counselling session involves
//             </h2>
//             <p className="mt-6 text-lg leading-relaxed text-white/70">
//               Your first session is a conversation, not a fixed programme. We talk through
//               what you're carrying, how long it's been going on, and what a realistic path
//               forward looks like.
//             </p>
//             <p className="mt-4 text-lg leading-relaxed text-white/70">
//               If counselling is the right fit, sessions involve:
//             </p>
//           </div>

//           <div className="mt-12 grid gap-8 md:grid-cols-2">
//             {sessionInvolves.map((item, index) => (
//               <div key={item} className="border-t border-white/20 pt-6">
//                 <span className="text-sm text-gold">0{index + 1}</span>
//                 <p className="mt-5 text-lg leading-relaxed text-white/80">{item}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           COMMON MISCONCEPTIONS
//       ====================================================== */}
//       <section className="bg-sand py-20 md:py-28">
//         <div className="mx-auto max-w-4xl px-6 md:px-10">
//           <p className="eyebrow">Setting the record straight</p>
//           <h2 className="mt-5 text-4xl text-primary-dark md:text-6xl">
//             Common misconceptions about counselling
//           </h2>

//           <div className="mt-12 space-y-8">
//             {misconceptions.map((item) => (
//               <div key={item.myth} className="card p-6">
//                 <p className="text-xl font-medium text-primary-dark">{item.myth}</p>
//                 <p className="mt-3 text-lg leading-relaxed text-ink-soft">{item.answer}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           WHO COUNSELLING HELPS
//       ====================================================== */}
//       <Section eyebrow="Is this for you" title="Who counselling helps">
//         <p className="max-w-2xl text-lg leading-relaxed text-ink-soft">
//           You do not need a diagnosis to start counselling in Navi Mumbai. People come to us
//           for many reasons, including:
//         </p>

//         <ul className="mt-8 grid gap-4 sm:grid-cols-2">
//           {whoItHelps.map((item) => (
//             <li key={item} className="flex gap-3 text-lg leading-relaxed text-ink-soft">
//               <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
//               {item}
//             </li>
//           ))}
//         </ul>

//         <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
//           If any of this sounds familiar, it is worth having a conversation with our
//           counsellor, even if you are not sure counselling is the right fit
//           yet.
//         </p>
//       </Section>

//       {/* =====================================================
//           WHAT WE COVER
//       ====================================================== */}
//       <section className="bg-sand py-20 md:py-28">
//         <div className="mx-auto max-w-7xl px-6 md:px-10">
//           <p className="eyebrow">What we cover</p>
//           <h2 className="mt-5 max-w-2xl text-4xl text-primary-dark md:text-6xl">
//             Counselling by concern
//           </h2>

//           <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {whatWeCover.map((item) => (
//               <div key={item.name} className="card p-6 flex flex-col gap-2">
//                 <h3 className="text-xl text-primary-dark font-display">{item.name}</h3>
//                 <p className="text-ink-soft text-sm leading-relaxed flex-1">
//                   {item.description}
//                 </p>
//                 <Link
//                   href={item.href}
//                   className="font-mono text-xs uppercase tracking-widest text-accent mt-1"
//                 >
//                   {item.linkText} →
//                 </Link>
//               </div>
//             ))}
//           </div>

//           <Link href="/conditions" className="btn-outline mt-10 inline-flex">
//             See all conditions we treat →
//           </Link>
//         </div>
//       </section>

//       {/* =====================================================
//           OUR APPROACH TO COUNSELLING
//       ====================================================== */}
//       <Section eyebrow="Our approach" title="Our approach to counselling">
//         <p className="max-w-2xl text-lg leading-relaxed text-ink-soft mb-10">
//           Counselling at {site.shortName} is built on Cognitive Behavioural Therapy, adapted
//           to what you actually need rather than a fixed programme applied to everyone.
//         </p>

//         <ul className="grid gap-4 sm:grid-cols-2">
//           {approach.map((item) => (
//             <li key={item} className="card p-6 text-lg leading-relaxed text-ink-soft">
//               {item}
//             </li>
//           ))}
//         </ul>
//       </Section>

//       {/* =====================================================
//           FAQ
//       ====================================================== */}
//       <section className="bg-sand py-20 md:py-28">
//         <div className="mx-auto max-w-4xl px-6 md:px-10">
//           <p className="eyebrow">Frequently asked questions</p>
//           <h2 className="mt-5 text-4xl text-primary-dark md:text-6xl">
//             Questions about counselling
//           </h2>

//           <div className="mt-12 divide-y divide-primary-dark/10">
//             {faqs.map((faq) => (
//               <details key={faq.question} className="group py-6">
//                 <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl font-medium text-primary-dark">
//                   {faq.question}
//                   <span className="text-2xl transition-transform group-open:rotate-45">+</span>
//                 </summary>
//                 <p className="mt-4 text-lg leading-relaxed text-ink-soft">{faq.answer}</p>
//               </details>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           PRACTITIONER CREDENTIALS
//       ====================================================== */}
//       <Section eyebrow="Practitioner credentials" title="Led by an experienced clinician">
//         <div className="card max-w-2xl p-8">
//           <h3 className="text-2xl text-primary-dark font-display">{site.founder}</h3>
//           <p className="mt-1 text-ink-soft">
//             Clinical Hypnotherapist and Counselling Psychologist in Navi Mumbai
//           </p>
//           <ul className="mt-6 space-y-3">
//             {credentials.map((item) => (
//               <li key={item} className="flex gap-3 text-ink-soft leading-relaxed">
//                 <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </Section>

//       {/* =====================================================
//           FINAL CTA — READY WHEN YOU ARE
//       ====================================================== */}
//       <section className="py-20 md:py-28">
//         <div className="mx-auto max-w-4xl px-6 text-center">
//           <p className="eyebrow">Ready when you are</p>
//           <h2 className="mt-5 text-4xl leading-tight text-primary-dark md:text-6xl">
//             The first conversation is about understanding what you need.
//           </h2>
//           <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
//             There's no pressure to commit beyond that.
//           </p>
//           <Link href="/contact" className="btn-primary mt-8 inline-flex">
//             Book a consultation →
//           </Link>
//         </div>
//       </section>
//     </>
//   );
// }

import Image from "next/image";
import Link from "next/link";

import Section from "@/components/Section";
import { buildMetadata } from "@/lib/seo/metadata";
import { site } from "@/lib/data/site";

export const metadata = buildMetadata({
  title: "Counselling in Navi Mumbai | Chaitanya Raj",
  description:
    "Counselling in Vashi and Belapur, Navi Mumbai. Evidence-based support for anxiety, stress, relationships and more, led by 25+ years of experience.",
  path: "/counselling-navi-mumbai"
});

const whatWeCover = [
  {
    name: "Anxiety counselling in Navi Mumbai",
    description: "Persistent worry, racing thoughts, or a body that won't settle.",
    linkText: "Learn more about anxiety counselling",
    href: "/conditions/anxiety-therapy-navi-mumbai"
  },
  {
    name: "Depression counselling in Navi Mumbai",
    description: "Low mood, low energy, and a loss of interest in things that used to matter.",
    linkText: "Learn more about depression counselling",
    href: "/conditions/depression-therapy-navi-mumbai"
  },
  {
    name: "Stress and burnout counselling",
    description:
      "The slow build-up of pressure from work, family, or simply doing too much for too long.",
    linkText: "Learn more about stress counselling",
    href: "/conditions/stress-burnout-counselling-navi-mumbai"
  },
  {
    name: "Relationship counselling in Navi Mumbai",
    description: "Conflict, distance, or communication that's grown careful and guarded.",
    linkText: "Learn more about relationship counselling",
    href: "/conditions/relationship-counselling-navi-mumbai"
  },
  {
    name: "Grief and loss counselling",
    description: "Support through the process of loss, at your own pace.",
    linkText: "Learn more about grief counselling",
    href: "/conditions/grief-counselling-navi-mumbai"
  },
  {
    name: "Trauma and PTSD counselling",
    description: "Working through difficult experiences with structured, careful support.",
    linkText: "Learn more about trauma counselling",
    href: "/conditions/trauma-ptsd-counselling-navi-mumbai"
  },
  {
    name: "Sleep disorder counselling",
    description: "When racing thoughts or stress start affecting your sleep.",
    linkText: "Learn more about sleep counselling",
    href: "/conditions/sleep-disorder-counselling-navi-mumbai"
  },
  {
    name: "Anger management counselling",
    description: "Understanding and working through reactive anger.",
    linkText: "Learn more about anger management",
    href: "/conditions/anger-management-counselling-navi-mumbai"
  },
  {
    name: "Phobia and fear counselling",
    description: "Specific, disproportionate fears that limit what you feel able to do.",
    linkText: "Learn more about phobia treatment",
    href: "/conditions/phobia-treatment-navi-mumbai"
  },
  {
    name: "Child and teen counselling in Navi Mumbai",
    description: "Behavioural, emotional, or mood changes that need closer attention.",
    linkText: "Learn more about child and teen counselling",
    href: "/conditions/child-teen-counselling-navi-mumbai"
  }
];

const sessionInvolves = [
  "A structured plan built around what you actually need, not a one-size-fits-all programme",
  "Cognitive Behavioural Therapy techniques, adapted to your specific situation",
  "Practical tools you can use between sessions",
  "Where useful, hypnotherapy alongside talk therapy",
  "Realistic milestones, reviewed and adjusted as you go"
];

const misconceptions = [
  {
    myth: "\u201cCounselling is only for a crisis or a diagnosis.\u201d",
    answer:
      "You do not need a diagnosis, or a crisis, to start. Many clients come in simply feeling stuck, or knowing something feels off, without being able to name it yet."
  },
  {
    myth: "\u201cIt's just talking, it won't actually change anything.\u201d",
    answer:
      "Counselling here is structured, not open-ended venting. Sessions build toward a clear, practical plan, using techniques like CBT that are designed to shift patterns, not just discuss them."
  },
  {
    myth: "\u201cI have to commit to a long programme upfront.\u201d",
    answer:
      "There is no fixed length. Many clients see meaningful movement within 5 to 7 sessions. You will get a realistic estimate after your first session, not a locked-in package."
  }
];

const whoItHelps = [
  "Constant worry that makes it hard to switch off",
  "A rough patch in a marriage or relationship",
  "Feeling low, flat, or disconnected from things that used to matter",
  "Grief after losing someone",
  "Feeling stuck, without being able to say exactly why",
  "Pressure from work or family that has built up over time",
  "Difficult patterns that keep repeating, in relationships or otherwise"
];

const approach = [
  "An initial session to understand your history and current situation",
  "A structured plan with realistic milestones",
  "Practical tools you can use between sessions",
  "Where useful, clinical hypnotherapy alongside talk therapy",
  "25+ years of clinical experience as a counselling psychologist in Navi Mumbai"
];

const faqs = [
  {
    question: "How is counselling different from therapy?",
    answer:
      "In practice, the terms are often used interchangeably. At Chaitanya Raj, counselling refers to structured, conversation-based sessions, which may also draw on techniques like CBT or hypnotherapy where useful."
  },
  {
    question: "How many sessions will I need?",
    answer:
      "This varies by person and by what you're working through. Many clients see meaningful movement within 5 to 7 sessions. We will give you a realistic estimate after your first session, not a fixed programme upfront."
  },
  {
    question: "Is counselling in Navi Mumbai confidential?",
    answer:
      "Yes. Every session, from your first enquiry onward, is treated with strict, professional confidentiality."
  },
  {
    question: "Do you offer online counselling?",
    answer:
      "Yes. Sessions are available in person at our Vashi and Belapur clinics, or online, so consistent care does not depend on being able to travel."
  },
  {
    question: "What if I'm not sure counselling is what I need?",
    answer:
      "That's a completely normal place to start. The first session is about understanding what you're dealing with and what kind of support actually fits, not committing to anything beyond that."
  }
];

const credentials = [
  "MA Clinical Psychology, Gold Medalist",
  "PG Diploma, Clinical Hypnosis",
  "Lifetime Professional Member, Academy of Hypnosis India (Ref: 202301LM000034)",
  "25+ years of clinical practice"
];

export default function CounsellingPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="bg-sand py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[1.15fr_0.85fr] md:px-10">
          <div className="max-w-3xl">
            <p className="eyebrow">Professional Counselling · Vashi &amp; Belapur, Navi Mumbai</p>

            <h1 className="mt-5 text-5xl leading-[1.05] text-primary-dark md:text-7xl">
              Counselling in Navi Mumbai
            </h1>

            <p className="mt-8 text-xl leading-relaxed text-ink-soft">
              Sometimes you know exactly what's wrong. Sometimes you just know something feels
              heavy, and you are not sure where to start. Counselling in Navi Mumbai at{" "}
              {site.shortName} is a space to work through either, in person in Vashi and
              Belapur, or online.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Led by {site.founder}, our counselling psychologist in Navi Mumbai, sessions
              combine structured, evidence-based talk therapy with over 25 years of clinical
              experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary relative z-10">
                Book a consultation →
              </Link>
              <a href={`tel:${site.phone}`} className="btn-outline relative z-10">
                Call {site.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full border border-primary/20" />
            <div className="absolute -bottom-6 -left-6 h-40 w-40 rounded-[2rem] bg-primary/10" />
            <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] bg-primary-dark shadow-xl">
              <Image
                src="/founder.jpg"
                alt="Counselling session in Navi Mumbai with Lt Col Rajesh Sharma"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT COUNSELLING INVOLVES
      ====================================================== */}
      <Section eyebrow="Getting started" title="What counselling involves">
        <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-ink-soft">
          <p>
            Counselling is a series of conversations with a trained counsellor in Navi Mumbai,
            aimed at helping you understand what you are going through and build a practical
            way through it. It is not advice giving, and it is not a quick fix.
          </p>
          <p>
            Your first session with our counselling psychologist is mostly about listening,
            what's going on, how long it's been happening, and what you have already tried.
            From there, sessions build toward a clearer picture and a realistic plan, at a pace
            that suits you.
          </p>
        </div>
      </Section>

      {/* =====================================================
          WHAT A COUNSELLING SESSION INVOLVES
      ====================================================== */}
      <section className="bg-primary-dark py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-2xl">
            <p className="eyebrow text-white/60">The session itself</p>
            <h2 className="mt-5 text-4xl text-white md:text-6xl">
              What a counselling session involves
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Your first session is a conversation, not a fixed programme. We talk through
              what you're carrying, how long it's been going on, and what a realistic path
              forward looks like.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              If counselling is the right fit, sessions involve:
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {sessionInvolves.map((item, index) => (
              <div key={item} className="border-t border-white/20 pt-6">
                <span className="text-sm text-gold">0{index + 1}</span>
                <p className="mt-5 text-lg leading-relaxed text-white/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          COMMON MISCONCEPTIONS
      ====================================================== */}
      <section className="bg-sand py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <p className="eyebrow">Setting the record straight</p>
          <h2 className="mt-5 text-4xl text-primary-dark md:text-6xl">
            Common misconceptions about counselling
          </h2>

          <div className="mt-12 space-y-8">
            {misconceptions.map((item) => (
              <div key={item.myth} className="card p-6">
                <p className="text-xl font-medium text-primary-dark">{item.myth}</p>
                <p className="mt-3 text-lg leading-relaxed text-ink-soft">{item.answer}</p>
              </div>
            ))}
          </div>

          
        </div>
      </section>

      {/* =====================================================
          WHO COUNSELLING HELPS
      ====================================================== */}
      <Section eyebrow="Is this for you" title="Who counselling helps">
        <p className="max-w-2xl text-lg leading-relaxed text-ink-soft">
          You do not need a diagnosis to start counselling in Navi Mumbai. People come to us
          for many reasons, including:
        </p>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {whoItHelps.map((item) => (
            <li key={item} className="flex gap-3 text-lg leading-relaxed text-ink-soft">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
          If any of this sounds familiar, it is worth having a conversation with our
          counsellor in Navi Mumbai, even if you are not sure counselling is the right fit
          yet.
        </p>
      </Section>

      {/* =====================================================
          WHAT WE COVER
      ====================================================== */}
      <section className="bg-sand py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="eyebrow">What we cover</p>
          <h2 className="mt-5 max-w-2xl text-4xl text-primary-dark md:text-6xl">
            Counselling by concern
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whatWeCover.map((item) => (
              <div key={item.name} className="card p-6 flex flex-col gap-2">
                <h3 className="text-xl text-primary-dark font-display">{item.name}</h3>
                <p className="text-ink-soft text-sm leading-relaxed flex-1">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="font-mono text-xs uppercase tracking-widest text-accent mt-1"
                >
                  {item.linkText} →
                </Link>
              </div>
            ))}
          </div>

          <Link href="/conditions" className="btn-outline mt-10 inline-flex">
            See all conditions we treat →
          </Link>
        </div>
      </section>

      {/* =====================================================
          OUR APPROACH TO COUNSELLING
      ====================================================== */}
      <Section eyebrow="Our approach" title="Our approach to counselling">
        <p className="max-w-2xl text-lg leading-relaxed text-ink-soft mb-10">
          Counselling at {site.shortName} is built on Cognitive Behavioural Therapy, adapted
          to what you actually need rather than a fixed programme applied to everyone.
        </p>

        <ul className="grid gap-4 sm:grid-cols-2">
          {approach.map((item) => (
            <li key={item} className="card p-6 text-lg leading-relaxed text-ink-soft">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {/* =====================================================
          FAQ
      ====================================================== */}
      <section className="bg-sand py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <p className="eyebrow">Frequently asked questions</p>
          <h2 className="mt-5 text-4xl text-primary-dark md:text-6xl">
            Questions about counselling
          </h2>

          <div className="mt-12 divide-y divide-primary-dark/10">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl font-medium text-primary-dark">
                  {faq.question}
                  <span className="text-2xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-lg leading-relaxed text-ink-soft">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PRACTITIONER CREDENTIALS
      ====================================================== */}
      <Section eyebrow="Practitioner credentials" title="Led by an experienced clinician">
        <div className="card max-w-2xl p-8">
          <h3 className="text-2xl text-primary-dark font-display">{site.founder}</h3>
          <p className="mt-1 text-ink-soft">
            Clinical Hypnotherapist and Counselling Psychologist in Navi Mumbai
          </p>
          <ul className="mt-6 space-y-3">
            {credentials.map((item) => (
              <li key={item} className="flex gap-3 text-ink-soft leading-relaxed">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* =====================================================
          FINAL CTA — READY WHEN YOU ARE
      ====================================================== */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="eyebrow">Ready when you are</p>
          <h2 className="mt-5 text-4xl leading-tight text-primary-dark md:text-6xl">
            The first conversation is about understanding what you need.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            There's no pressure to commit beyond that.
          </p>
          <Link href="/contact" className="btn-primary mt-8 inline-flex">
            Book a consultation →
          </Link>
        </div>
      </section>
    </>
  );
}
