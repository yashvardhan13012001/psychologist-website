// // // import Image from "next/image";
// // // import Link from "next/link";

// // // import Section from "@/components/Section";
// // // import { buildMetadata } from "@/lib/seo/metadata";
// // // import { site } from "@/lib/data/site";

// // // export const metadata = buildMetadata({
// // //   title: "Best Hypnotherapist in Navi Mumbai | Clinical Hypnotherapy — Chaitanya Raj",
// // //   description:
// // //     "Clinical hypnotherapy in Vashi & Belapur, Navi Mumbai, led by Lt Col Rajesh Sharma (Retd), with 25+ years' experience. Trusted hypnotherapist for anxiety, phobias, trauma, sleep and more.",
// // //   path: "/hypnotherapy-navi-mumbai"
// // // });

// // // const whatToExpect = [
// // //   "A clear, jargon-free explanation of the process before any session begins",
// // //   "A guided state of focused relaxation — you remain fully aware and in control throughout",
// // //   "Targeted work on the specific pattern, fear, or block being addressed",
// // //   "An integration discussion afterward, connecting the session to everyday life"
// // // ];

// // // const goodFor = [
// // //   "Anxiety & panic",
// // //   "Phobias & fears",
// // //   "Trauma & PTSD",
// // //   "Sleep disorders",
// // //   "Stress & burnout",
// // //   "Stammering",
// // //   "Sexual dysfunctions",
// // //   "Anger management"
// // // ];

// // // const whyChoose = [
// // //   {
// // //     title: "25+ years of clinical experience",
// // //     description:
// // //       "Hypnotherapy sessions are led personally by Lt Col Rajesh Sharma (Retd), a Clinical Hypnotherapist and Counselling Psychologist with over 25 years of practice."
// // //   },
// // //   {
// // //     title: "Clinically recognised technique",
// // //     description:
// // //       "Hypnotherapy is recognised by the British Psychological Society as an effective therapeutic technique when practised by a trained clinician, not a stage performer."
// // //   },
// // //   {
// // //     title: "Combined with psychological expertise",
// // //     description:
// // //       "Sessions are grounded in clinical psychology and CBT, so hypnotherapy is used as part of a considered treatment approach, not as a standalone gimmick."
// // //   },
// // //   {
// // //     title: "Two centres across Navi Mumbai",
// // //     description:
// // //       "In-person sessions are available at our Vashi and Belapur centres, with online sessions also offered for those who prefer to begin remotely."
// // //   }
// // // ];

// // // const faqs = [
// // //   {
// // //     question: "What makes someone the best hypnotherapist in Navi Mumbai?",
// // //     answer:
// // //       "Clinical training, real credentials, and years of practice treating real conditions, not entertainment-style hypnosis. Sessions here are led by a qualified Clinical Hypnotherapist and Counselling Psychologist with over 25 years of experience."
// // //   },
// // //   {
// // //     question: "Is hypnotherapy safe?",
// // //     answer:
// // //       "Yes. Clinical hypnotherapy is a recognised, evidence-informed technique. You remain aware and in control throughout every session, and nothing happens without your consent."
// // //   },
// // //   {
// // //     question: "What conditions can hypnotherapy help with?",
// // //     answer:
// // //       "Hypnotherapy is particularly useful for anxiety, phobias, trauma, sleep disorders, stress, stammering, and other patterns that are harder to reach through conversation alone."
// // //   },
// // //   {
// // //     question: "How many sessions will I need?",
// // //     answer:
// // //       "This varies by individual and condition. Many people notice change within a handful of sessions, though this is always discussed and reviewed as part of your consultation."
// // //   },
// // //   {
// // //     question: "Do you offer hypnotherapy online?",
// // //     answer:
// // //       "Yes. Hypnotherapy is available in-person at our Vashi or Belapur centres, or online for clients who prefer to begin remotely."
// // //   }
// // // ];

// // // export default function HypnotherapyPage() {
// // //   return (
// // //     <>
// // //       {/* =====================================================
// // //           HERO
// // //       ====================================================== */}
// // //       <section className="bg-sand py-16 md:py-24">
// // //         <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[1.15fr_0.85fr] md:px-10">
// // //           <div className="max-w-3xl">
// // //             <p className="eyebrow">Clinical Hypnotherapy · Vashi &amp; Belapur, Navi Mumbai</p>

// // //             <h1 className="mt-5 text-5xl leading-[1.05] text-primary-dark md:text-7xl">
// // //               Best Hypnotherapist in Navi Mumbai
// // //             </h1>

// // //             <p className="mt-8 text-xl leading-relaxed text-ink-soft">
// // //               Clinical hypnotherapy uses a state of focused, relaxed attention to work with
// // //               patterns that are harder to reach through conversation alone, particularly
// // //               useful for phobias, deep-seated anxiety, and the body's automatic stress
// // //               response.
// // //             </p>

// // //             <p className="mt-5 text-lg leading-relaxed text-ink-soft">
// // //               Sessions at {site.shortName} are led personally by {site.founder},{" "}
// // //               {site.founderCredentials}, making this one of the most experienced clinical
// // //               hypnotherapy practices in Navi Mumbai.
// // //             </p>

// // //             <div className="mt-8 flex flex-wrap gap-4">
// // //               <Link href="/contact" className="btn-primary relative z-10">
// // //                 Book a Hypnotherapy Session →
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
// // //                 alt={`${site.founder}, hypnotherapist in Navi Mumbai`}
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
// // //           WHAT IS HYPNOTHERAPY
// // //       ====================================================== */}
// // //       <Section eyebrow="What is hypnotherapy" title="A recognised technique, not a stage trick">
// // //         <div className="grid items-center gap-12 md:grid-cols-2">
// // //           <div className="space-y-6 text-lg leading-relaxed text-ink-soft">
// // //             <p>
// // //               Clinical hypnotherapy is often misunderstood, thanks to stage hypnosis and pop
// // //               culture. In a clinical setting, it's a structured, evidence-informed technique
// // //               used to help the mind and body settle enough to work with patterns that talk
// // //               therapy alone sometimes can't reach.
// // //             </p>
// // //             <p>
// // //               You remain fully aware and in control throughout every session. Nothing is done
// // //               without your consent, and the process is explained clearly before it begins.
// // //             </p>
// // //             <p>
// // //               As one of the most experienced hypnotherapy practices in Navi Mumbai, our
// // //               approach combines hypnotherapy with clinical psychology and CBT, so it's used
// // //               as part of a considered treatment plan rather than in isolation.
// // //             </p>
// // //           </div>
// // //           <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
// // //             <Image
// // //               src="/images/conditions/past-life-regression-therapy.png"
// // //               alt="Clinical hypnotherapy session in Navi Mumbai"
// // //               fill
// // //               className="object-cover"
// // //               sizes="(max-width: 768px) 100vw, 50vw"
// // //             />
// // //           </div>
// // //         </div>
// // //       </Section>

// // //       {/* =====================================================
// // //           WHAT TO EXPECT
// // //       ====================================================== */}
// // //       <section className="bg-primary-dark py-20 text-white md:py-28">
// // //         <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2 md:px-10">
// // //           <div>
// // //             <p className="eyebrow text-white/60">A session, step by step</p>
// // //             <h2 className="mt-5 text-4xl leading-tight text-white md:text-6xl">
// // //               What to expect from a hypnotherapy session
// // //             </h2>
// // //             <p className="mt-6 text-lg leading-relaxed text-white/70">
// // //               Every session follows the same considered structure, so you always know what's
// // //               happening and why.
// // //             </p>
// // //             <ul className="mt-8 space-y-4 text-white/75">
// // //               {whatToExpect.map((point) => (
// // //                 <li key={point} className="flex gap-3">
// // //                   <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
// // //                   {point}
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           </div>
// // //           <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
// // //             <Image
// // //               src="/images/corporate/chp.jpg"
// // //               alt="Guided hypnotherapy relaxation session"
// // //               fill
// // //               className="object-cover"
// // //               sizes="(max-width: 768px) 100vw, 50vw"
// // //             />
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* =====================================================
// // //           WHY CHOOSE US
// // //       ====================================================== */}
// // //       <Section eyebrow="Why choose us" title="What sets this practice apart">
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
// // //           CONDITIONS TREATED
// // //       ====================================================== */}
// // //       <section className="bg-sand py-20 md:py-28">
// // //         <div className="mx-auto max-w-7xl px-6 md:px-10">
// // //           <div className="max-w-2xl">
// // //             <p className="eyebrow">Good for</p>
// // //             <h2 className="mt-5 text-4xl text-primary-dark md:text-6xl">
// // //               Conditions hypnotherapy can help with
// // //             </h2>
// // //             <p className="mt-6 text-lg leading-relaxed text-ink-soft">
// // //               Hypnotherapy is offered as part of a wider treatment approach across the
// // //               conditions we see most often in Navi Mumbai.
// // //             </p>
// // //           </div>

// // //           <div className="mt-12 flex flex-wrap gap-3">
// // //             {goodFor.map((item) => (
// // //               <span
// // //                 key={item}
// // //                 className="rounded-full border border-primary-dark/20 px-5 py-3 text-sm text-ink-soft"
// // //               >
// // //                 {item}
// // //               </span>
// // //             ))}
// // //           </div>

// // //           <Link href="/conditions" className="btn-outline mt-10 inline-flex">
// // //             Explore all conditions we treat →
// // //           </Link>
// // //         </div>
// // //       </section>

// // //       {/* =====================================================
// // //           FAQ
// // //       ====================================================== */}
// // //       <section className="py-20 md:py-28">
// // //         <div className="mx-auto max-w-4xl px-6 md:px-10">
// // //           <p className="eyebrow">Frequently asked questions</p>
// // //           <h2 className="mt-5 text-4xl text-primary-dark md:text-6xl">
// // //             Questions about hypnotherapy in Navi Mumbai
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
// // //       <section className="bg-primary-dark py-20 text-white md:py-28">
// // //         <div className="mx-auto max-w-4xl px-6 text-center">
// // //           <p className="eyebrow text-white/60">Ready when you are</p>
// // //           <h2 className="mt-5 text-4xl leading-tight text-white md:text-6xl">
// // //             Speak to Navi Mumbai's trusted hypnotherapist.
// // //           </h2>
// // //           <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
// // //             Book a consultation to find out whether hypnotherapy is the right fit for what
// // //             you're working through.
// // //           </p>
// // //           <Link href="/contact" className="btn-primary mt-8 inline-flex">
// // //             Book a Hypnotherapy Session →
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
// //   title: "Hypnotherapist in Navi Mumbai | Chaitanya Raj",
// //   description:
// //     "Clinical hypnotherapy in Vashi and Belapur, Navi Mumbai, led by an Academy of Hypnosis India lifetime member. 25+ years of experience.",
// //   path: "/hypnotherapy-navi-mumbai"
// // });

// // const sessionInvolves = [
// //   "A calm, guided relaxation process, fully explained beforehand",
// //   "You remaining aware and in control at every point",
// //   "A structured approach, built around your specific situation, not a script",
// //   "Techniques drawn from Academy of Hypnosis recognised training"
// // ];

// // const misconceptions = [
// //   {
// //     myth: "\u201cI'll lose control or say things I don't mean.\u201d",
// //     answer:
// //       "You remain aware throughout. Hypnotherapy is a state of focused relaxation, not unconsciousness."
// //   },
// //   {
// //     myth: "\u201cIt's a stage trick.\u201d",
// //     answer:
// //       "Clinical hypnotherapy has no connection to stage or entertainment hypnosis. It is a structured therapeutic technique."
// //   },
// //   {
// //     myth: "\u201cIt works instantly, for everything.\u201d",
// //     answer:
// //       "Like any therapeutic approach, results build over sessions and depend on the individual. We will give you a realistic sense of what to expect after your first session, not a guarantee."
// //   }
// // ];

// // const whoItMayHelp = [
// //   "Fears and blocks that haven't responded fully to talk therapy alone",
// //   "Anxiety and panic, alongside CBT-based work",
// //   "Sleep difficulties linked to racing thoughts",
// //   "Deep-rooted patterns that keep repeating despite other work"
// // ];

// // // NOTE: hrefs below are best-guess slugs following the existing
// // // "/conditions/{slug}" pattern used elsewhere on the site. Please confirm
// // // these against lib/data/conditions.ts and correct any that don't match.
// // const beyondStandard = [
// //   {
// //     title: "Past Life Regression Therapy",
// //     description:
// //       "A guided technique used to explore patterns and blocks that haven't responded to other approaches, used alongside, never instead of, evidence-based care.",
// //     href: "/conditions/past-life-regression-therapy"
// //   },
// //   {
// //     title: "Spirit Release Therapy",
// //     description:
// //       "A specialised technique within our hypnotherapy practice. Learn more about what it involves and who it may help.",
// //     href: "/conditions/spirit-release-therapy"
// //   }
// // ];

// // const faqs = [
// //   {
// //     question: "Is hypnotherapy safe?",
// //     answer:
// //       "Yes, clinical hypnotherapy is safe when practised by a trained professional. At Chaitanya Raj in Navi Mumbai, sessions are led by Lt Col Rajesh Sharma (Retd), a Lifetime Professional Member of the Academy of Hypnosis India, and clients remain aware and in control throughout every session."
// //   },
// //   {
// //     question: "Will I lose control or say things I don't mean during hypnotherapy?",
// //     answer:
// //       "No. Hypnotherapy is a state of focused relaxation, not unconsciousness. At Chaitanya Raj Psychology & Counselling in Navi Mumbai, clients remain fully aware and in control throughout the session."
// //   },
// //   {
// //     question: "Does hypnotherapy work instantly, or for everything?",
// //     answer:
// //       "No, results build over sessions and depend on the individual, the same as any therapeutic approach. At Chaitanya Raj Psychology & Counselling in Navi Mumbai, Lt Col Rajesh Sharma (Retd) gives clients a realistic sense of what to expect after the first session, rather than a guarantee."
// //   },
// //   {
// //     question: "How many hypnotherapy sessions will I need?",
// //     answer:
// //       "The number of sessions depends on what the client is working through. At Chaitanya Raj Psychology & Counselling in Navi Mumbai, Lt Col Rajesh Sharma (Retd) gives a realistic estimate after understanding the individual's situation in the first session."
// //   },
// //   {
// //     question: "Can hypnotherapy help with anxiety and panic attacks?",
// //     answer:
// //       "Yes, hypnotherapy can help with anxiety and panic attacks, particularly when combined with CBT based work. At Chaitanya Raj in Navi Mumbai, this combined approach is used to calm the nervous system's response over time."
// //   },
// //   {
// //     question: "Is hypnotherapy available online, or only in person?",
// //     answer:
// //       "Chaitanya Raj Psychology & Counselling offers hypnotherapy both online and in person, at clinics in Vashi and CBD Belapur, Navi Mumbai."
// //   },
// //   {
// //     question: "What is the difference between hypnotherapy and past life regression therapy?",
// //     answer:
// //       "Hypnotherapy is the broader clinical technique, used for anxiety, sleep difficulties, and repeating patterns, while past life regression therapy is a specialised technique within hypnotherapy, used for fears and blocks that haven't responded to other approaches. Both are offered at Chaitanya Raj Psychology & Counselling in Navi Mumbai by Lt Col Rajesh Sharma (Retd)."
// //   },
// //   {
// //     question: "Who is the hypnotherapist at Chaitanya Raj in Navi Mumbai?",
// //     answer:
// //       "Lt Col Rajesh Sharma (Retd) is the clinical hypnotherapist and counselling psychologist at Chaitanya Raj Psychology & Counselling in Navi Mumbai. He holds an MA in Clinical Psychology as a Gold Medalist, a PG Diploma in Clinical Hypnosis, and is a Lifetime Professional Member of the Academy of Hypnosis India, with over 25 years of clinical experience."
// //   }
// // ];

// // export default function HypnotherapyPage() {
// //   return (
// //     <>
// //       {/* =====================================================
// //           HERO
// //       ====================================================== */}
// //       <section className="bg-sand py-16 md:py-24">
// //         <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[1.15fr_0.85fr] md:px-10">
// //           <div className="max-w-3xl">
// //             <p className="eyebrow">Clinical Hypnotherapy · Vashi &amp; Belapur, Navi Mumbai</p>

// //             <h1 className="mt-5 text-5xl leading-[1.05] text-primary-dark md:text-7xl">
// //               Hypnotherapist in Navi Mumbai
// //             </h1>

// //             <p className="mt-8 text-xl leading-relaxed text-ink-soft">
// //               Clinical hypnotherapy at {site.shortName} is led by {site.founder}, a Lifetime
// //               Professional Member of the Academy of Hypnosis, India's dedicated professional
// //               body for hypnotherapy, membership reference 202301LM000034.
// //             </p>

// //             <p className="mt-5 text-lg leading-relaxed text-ink-soft">
// //               With over 25 years of clinical experience, sessions are available in Vashi and
// //               Belapur, Navi Mumbai, and online.
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
// //                 alt={`${site.founder}, hypnotherapist in Navi Mumbai`}
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
// //           WHAT HYPNOTHERAPY IS
// //       ====================================================== */}
// //       <Section eyebrow="What hypnotherapy is" title="A recognised technique, not a stage trick">
// //         <div className="grid items-center gap-12 md:grid-cols-2">
// //           <div className="space-y-6 text-lg leading-relaxed text-ink-soft">
// //             <p>
// //               Hypnotherapy is a guided, focused state of relaxed attention, used alongside
// //               evidence-based talk therapy, never instead of it. It is not stage hypnosis, and
// //               you remain aware and in control throughout.
// //             </p>
// //             <p>
// //               It is used to reach patterns, fears, or blocks that sometimes sit beneath what
// //               talk therapy alone can reach, particularly when something keeps resurfacing
// //               despite other approaches.
// //             </p>
// //           </div>
// //           <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
// //             <Image
// //               src="/images/conditions/past-life-regression-therapy.png"
// //               alt="Clinical hypnotherapy session in Navi Mumbai"
// //               fill
// //               className="object-cover"
// //               sizes="(max-width: 768px) 100vw, 50vw"
// //             />
// //           </div>
// //         </div>
// //       </Section>

// //       {/* =====================================================
// //           WHAT A SESSION ACTUALLY INVOLVES
// //       ====================================================== */}
// //       <section className="bg-primary-dark py-20 text-white md:py-28">
// //         <div className="mx-auto max-w-7xl px-6 md:px-10">
// //           <div className="max-w-2xl">
// //             <p className="eyebrow text-white/60">A session, step by step</p>
// //             <h2 className="mt-5 text-4xl leading-tight text-white md:text-6xl">
// //               What a session actually involves
// //             </h2>
// //             <p className="mt-6 text-lg leading-relaxed text-white/70">
// //               Your first session is a conversation, not a hypnosis session. We talk through
// //               what you're dealing with, what you've already tried, and whether hypnotherapy is
// //               a genuine fit for what you need.
// //             </p>
// //             <p className="mt-4 text-lg leading-relaxed text-white/70">If it is, sessions involve:</p>
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
// //           <h2 className="mt-5 text-4xl text-primary-dark md:text-6xl">Common misconceptions</h2>

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
// //           WHO HYPNOTHERAPY MAY HELP
// //       ====================================================== */}
// //       <Section eyebrow="Is this for you" title="Who hypnotherapy may help">
// //         <ul className="grid gap-4 sm:grid-cols-2">
// //           {whoItMayHelp.map((item) => (
// //             <li key={item} className="flex gap-3 text-lg leading-relaxed text-ink-soft">
// //               <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
// //               {item}
// //             </li>
// //           ))}
// //         </ul>

// //         <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
// //           Hypnotherapy is a complement to psychological care, not a replacement for it. Where
// //           something needs medical evaluation, for example a physical health concern or a
// //           condition requiring psychiatric care, we will always say so and point you toward the
// //           right professional.
// //         </p>
// //       </Section>

// //       {/* =====================================================
// //           BEYOND STANDARD HYPNOTHERAPY
// //       ====================================================== */}
// //       <section className="bg-sand py-20 md:py-28">
// //         <div className="mx-auto max-w-7xl px-6 md:px-10">
// //           <div className="max-w-2xl">
// //             <p className="eyebrow">Beyond standard hypnotherapy</p>
// //             <h2 className="mt-5 text-4xl text-primary-dark md:text-6xl">
// //               Specialised techniques
// //             </h2>
// //             <p className="mt-6 text-lg leading-relaxed text-ink-soft">
// //               For clients who want to go deeper, we also offer two specialised techniques,
// //               each explained fully on its own page since they involve a different kind of
// //               work:
// //             </p>
// //           </div>

// //           <div className="mt-12 grid gap-6 sm:grid-cols-2">
// //             {beyondStandard.map((item) => (
// //               <Link
// //                 key={item.title}
// //                 href={item.href}
// //                 className="card p-6 flex flex-col gap-2 hover:border-accent/40 hover:-translate-y-1 transition-all"
// //               >
// //                 <h3 className="text-xl text-primary-dark font-display">{item.title} →</h3>
// //                 <p className="text-ink-soft text-sm leading-relaxed">{item.description}</p>
// //               </Link>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* =====================================================
// //           FAQ
// //       ====================================================== */}
// //       <section className="py-20 md:py-28">
// //         <div className="mx-auto max-w-4xl px-6 md:px-10">
// //           <p className="eyebrow">Frequently asked questions</p>
// //           <h2 className="mt-5 text-4xl text-primary-dark md:text-6xl">
// //             Frequently Asked Questions
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
// //           FINAL CTA
// //       ====================================================== */}
// //       <section className="bg-primary-dark py-20 text-white md:py-28">
// //         <div className="mx-auto max-w-4xl px-6 text-center">
// //           <p className="eyebrow text-white/60">Ready when you are</p>
// //           <h2 className="mt-5 text-4xl leading-tight text-white md:text-6xl">
// //             Speak to Navi Mumbai's trusted hypnotherapist.
// //           </h2>
// //           <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
// //             Book a consultation to find out whether hypnotherapy is the right fit for what
// //             you're working through.
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
//   title: "Hypnotherapist in Navi Mumbai | Chaitanya Raj",
//   description:
//     "Clinical hypnotherapy in Vashi and Belapur, Navi Mumbai, led by an Academy of Hypnosis India lifetime member. 25+ years of experience.",
//   path: "/hypnotherapy-navi-mumbai"
// });

// const sessionInvolves = [
//   "A calm, guided relaxation process, fully explained beforehand",
//   "You remaining aware and in control at every point",
//   "A structured approach, built around your specific situation, not a script",
//   "Techniques drawn from Academy of Hypnosis recognised training"
// ];

// const misconceptions = [
//   {
//     myth: "\u201cI'll lose control or say things I don't mean.\u201d",
//     answer:
//       "You remain aware throughout. Hypnotherapy is a state of focused relaxation, not unconsciousness."
//   },
//   {
//     myth: "\u201cIt's a stage trick.\u201d",
//     answer:
//       "Clinical hypnotherapy has no connection to stage or entertainment hypnosis. It is a structured therapeutic technique."
//   },
//   {
//     myth: "\u201cIt works instantly, for everything.\u201d",
//     answer:
//       "Like any therapeutic approach, results build over sessions and depend on the individual. We will give you a realistic sense of what to expect after your first session, not a guarantee."
//   }
// ];

// const whoItMayHelp = [
//   "Fears and blocks that haven't responded fully to talk therapy alone",
//   "Anxiety and panic, alongside CBT-based work",
//   "Sleep difficulties linked to racing thoughts",
//   "Deep-rooted patterns that keep repeating despite other work"
// ];

// // Past Life Regression Therapy matches the real slug in lib/data/conditions.ts.
// // Spirit Release Therapy has no entry in conditions.ts yet — it isn't linked
// // until that page exists (see note below).
// const beyondStandard = [
//   {
//     title: "Past Life Regression Therapy",
//     description:
//       "A guided technique used to explore patterns and blocks that haven't responded to other approaches, used alongside, never instead of, evidence-based care.",
//     href: "/conditions/best-past-life-regression-therapy-in-navi-mumbai"
//   },
//   {
//     title: "Spirit Release Therapy",
//     description:
//       "A specialised technique within our hypnotherapy practice. Learn more about what it involves and who it may help.",
//     href: null
//   }
// ];

// const faqs = [
//   {
//     question: "Is hypnotherapy safe?",
//     answer:
//       "Yes, clinical hypnotherapy is safe when practised by a trained professional. At Chaitanya Raj in Navi Mumbai, sessions are led by Lt Col Rajesh Sharma (Retd), a Lifetime Professional Member of the Academy of Hypnosis India, and clients remain aware and in control throughout every session."
//   },
//   {
//     question: "Will I lose control or say things I don't mean during hypnotherapy?",
//     answer:
//       "No. Hypnotherapy is a state of focused relaxation, not unconsciousness. At Chaitanya Raj Psychology & Counselling in Navi Mumbai, clients remain fully aware and in control throughout the session."
//   },
//   {
//     question: "Does hypnotherapy work instantly, or for everything?",
//     answer:
//       "No, results build over sessions and depend on the individual, the same as any therapeutic approach. At Chaitanya Raj Psychology & Counselling in Navi Mumbai, Lt Col Rajesh Sharma (Retd) gives clients a realistic sense of what to expect after the first session, rather than a guarantee."
//   },
//   {
//     question: "How many hypnotherapy sessions will I need?",
//     answer:
//       "The number of sessions depends on what the client is working through. At Chaitanya Raj Psychology & Counselling in Navi Mumbai, Lt Col Rajesh Sharma (Retd) gives a realistic estimate after understanding the individual's situation in the first session."
//   },
//   {
//     question: "Can hypnotherapy help with anxiety and panic attacks?",
//     answer:
//       "Yes, hypnotherapy can help with anxiety and panic attacks, particularly when combined with CBT based work. At Chaitanya Raj in Navi Mumbai, this combined approach is used to calm the nervous system's response over time."
//   },
//   {
//     question: "Is hypnotherapy available online, or only in person?",
//     answer:
//       "Chaitanya Raj Psychology & Counselling offers hypnotherapy both online and in person, at clinics in Vashi and CBD Belapur, Navi Mumbai."
//   },
//   {
//     question: "What is the difference between hypnotherapy and past life regression therapy?",
//     answer:
//       "Hypnotherapy is the broader clinical technique, used for anxiety, sleep difficulties, and repeating patterns, while past life regression therapy is a specialised technique within hypnotherapy, used for fears and blocks that haven't responded to other approaches. Both are offered at Chaitanya Raj Psychology & Counselling in Navi Mumbai by Lt Col Rajesh Sharma (Retd)."
//   },
//   {
//     question: "Who is the hypnotherapist at Chaitanya Raj in Navi Mumbai?",
//     answer:
//       "Lt Col Rajesh Sharma (Retd) is the clinical hypnotherapist and counselling psychologist at Chaitanya Raj Psychology & Counselling in Navi Mumbai. He holds an MA in Clinical Psychology as a Gold Medalist, a PG Diploma in Clinical Hypnosis, and is a Lifetime Professional Member of the Academy of Hypnosis India, with over 25 years of clinical experience."
//   }
// ];

// export default function HypnotherapyPage() {
//   return (
//     <>
//       {/* =====================================================
//           HERO
//       ====================================================== */}
//       <section className="bg-sand py-16 md:py-24">
//         <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[1.15fr_0.85fr] md:px-10">
//           <div className="max-w-3xl">
//             <p className="eyebrow">Clinical Hypnotherapy · Vashi &amp; Belapur, Navi Mumbai</p>

//             <h1 className="mt-5 text-5xl leading-[1.05] text-primary-dark md:text-7xl">
//               Hypnotherapist in Navi Mumbai
//             </h1>

//             <p className="mt-8 text-xl leading-relaxed text-ink-soft">
//               Clinical hypnotherapy at {site.shortName} is led by {site.founder}, a Lifetime
//               Professional Member of the Academy of Hypnosis, India's dedicated professional
//               body for hypnotherapy, membership reference 202301LM000034.
//             </p>

//             <p className="mt-5 text-lg leading-relaxed text-ink-soft">
//               With over 25 years of clinical experience, sessions are available in Vashi and
//               Belapur, Navi Mumbai, and online.
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
//                 alt={`${site.founder}, hypnotherapist in Navi Mumbai`}
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
//           WHAT HYPNOTHERAPY IS
//       ====================================================== */}
//       <Section eyebrow="What hypnotherapy is" title="A recognised technique, not a stage trick">
//         <div className="grid items-center gap-12 md:grid-cols-2">
//           <div className="space-y-6 text-lg leading-relaxed text-ink-soft">
//             <p>
//               Hypnotherapy is a guided, focused state of relaxed attention, used alongside
//               evidence-based talk therapy, never instead of it. It is not stage hypnosis, and
//               you remain aware and in control throughout.
//             </p>
//             <p>
//               It is used to reach patterns, fears, or blocks that sometimes sit beneath what
//               talk therapy alone can reach, particularly when something keeps resurfacing
//               despite other approaches.
//             </p>
//           </div>
//           <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
//             <Image
//               src="/images/conditions/past-life-regression-therapy.png"
//               alt="Clinical hypnotherapy session in Navi Mumbai"
//               fill
//               className="object-cover"
//               sizes="(max-width: 768px) 100vw, 50vw"
//             />
//           </div>
//         </div>
//       </Section>

//       {/* =====================================================
//           WHAT A SESSION ACTUALLY INVOLVES
//       ====================================================== */}
//       <section className="bg-primary-dark py-20 text-white md:py-28">
//         <div className="mx-auto max-w-7xl px-6 md:px-10">
//           <div className="max-w-2xl">
//             <p className="eyebrow text-white/60">A session, step by step</p>
//             <h2 className="mt-5 text-4xl leading-tight text-white md:text-6xl">
//               What a session actually involves
//             </h2>
//             <p className="mt-6 text-lg leading-relaxed text-white/70">
//               Your first session is a conversation, not a hypnosis session. We talk through
//               what you're dealing with, what you've already tried, and whether hypnotherapy is
//               a genuine fit for what you need.
//             </p>
//             <p className="mt-4 text-lg leading-relaxed text-white/70">If it is, sessions involve:</p>
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
//           <h2 className="mt-5 text-4xl text-primary-dark md:text-6xl">Common misconceptions</h2>

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
//           WHO HYPNOTHERAPY MAY HELP
//       ====================================================== */}
//       <Section eyebrow="Is this for you" title="Who hypnotherapy may help">
//         <ul className="grid gap-4 sm:grid-cols-2">
//           {whoItMayHelp.map((item) => (
//             <li key={item} className="flex gap-3 text-lg leading-relaxed text-ink-soft">
//               <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
//               {item}
//             </li>
//           ))}
//         </ul>

//         <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
//           Hypnotherapy is a complement to psychological care, not a replacement for it. Where
//           something needs medical evaluation, for example a physical health concern or a
//           condition requiring psychiatric care, we will always say so and point you toward the
//           right professional.
//         </p>
//       </Section>

//       {/* =====================================================
//           BEYOND STANDARD HYPNOTHERAPY
//       ====================================================== */}
//       <section className="bg-sand py-20 md:py-28">
//         <div className="mx-auto max-w-7xl px-6 md:px-10">
//           <div className="max-w-2xl">
//             <p className="eyebrow">Beyond standard hypnotherapy</p>
//             <h2 className="mt-5 text-4xl text-primary-dark md:text-6xl">
//               Specialised techniques
//             </h2>
//             <p className="mt-6 text-lg leading-relaxed text-ink-soft">
//               For clients who want to go deeper, we also offer two specialised techniques,
//               each explained fully on its own page since they involve a different kind of
//               work:
//             </p>
//           </div>

//           <div className="mt-12 grid gap-6 sm:grid-cols-2">
//             {beyondStandard.map((item) =>
//               item.href ? (
//                 <Link
//                   key={item.title}
//                   href={item.href}
//                   className="card p-6 flex flex-col gap-2 hover:border-accent/40 hover:-translate-y-1 transition-all"
//                 >
//                   <h3 className="text-xl text-primary-dark font-display">{item.title} →</h3>
//                   <p className="text-ink-soft text-sm leading-relaxed">{item.description}</p>
//                 </Link>
//               ) : (
//                 <div key={item.title} className="card p-6 flex flex-col gap-2">
//                   <h3 className="text-xl text-primary-dark font-display">{item.title}</h3>
//                   <p className="text-ink-soft text-sm leading-relaxed">{item.description}</p>
//                 </div>
//               )
//             )}
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           FAQ
//       ====================================================== */}
//       <section className="py-20 md:py-28">
//         <div className="mx-auto max-w-4xl px-6 md:px-10">
//           <p className="eyebrow">Frequently asked questions</p>
//           <h2 className="mt-5 text-4xl text-primary-dark md:text-6xl">
//             Frequently Asked Questions
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
//           FINAL CTA
//       ====================================================== */}
//       <section className="bg-primary-dark py-20 text-white md:py-28">
//         <div className="mx-auto max-w-4xl px-6 text-center">
//           <p className="eyebrow text-white/60">Ready when you are</p>
//           <h2 className="mt-5 text-4xl leading-tight text-white md:text-6xl">
//             Speak to Navi Mumbai's trusted hypnotherapist.
//           </h2>
//           <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
//             Book a consultation to find out whether hypnotherapy is the right fit for what
//             you're working through.
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
  title: "Hypnotherapist in Navi Mumbai | Chaitanya Raj",
  description:
    "Clinical hypnotherapy in Vashi and Belapur, Navi Mumbai, led by an Academy of Hypnosis India lifetime member. 25+ years of experience.",
  path: "/hypnotherapy-navi-mumbai"
});

const sessionInvolves = [
  "A calm, guided relaxation process, fully explained beforehand",
  "You remaining aware and in control at every point",
  "A structured approach, built around your specific situation, not a script",
  "Techniques drawn from Academy of Hypnosis recognised training"
];

const misconceptions = [
  {
    myth: "\u201cI'll lose control or say things I don't mean.\u201d",
    answer:
      "You remain aware throughout. Hypnotherapy is a state of focused relaxation, not unconsciousness."
  },
  {
    myth: "\u201cIt's a stage trick.\u201d",
    answer:
      "Clinical hypnotherapy has no connection to stage or entertainment hypnosis. It is a structured therapeutic technique."
  },
  {
    myth: "\u201cIt works instantly, for everything.\u201d",
    answer:
      "Like any therapeutic approach, results build over sessions and depend on the individual. We will give you a realistic sense of what to expect after your first session, not a guarantee."
  }
];

const whoItMayHelp = [
  "Fears and blocks that haven't responded fully to talk therapy alone",
  "Anxiety and panic, alongside CBT-based work",
  "Sleep difficulties linked to racing thoughts",
  "Deep-rooted patterns that keep repeating despite other work"
];

const beyondStandard = [
  {
    title: "Past Life Regression Therapy",
    description:
      "A guided technique used to explore patterns and blocks that haven't responded to other approaches, used alongside, never instead of, evidence-based care.",
    href: "/conditions/best-past-life-regression-therapy-in-navi-mumbai"
  },
  {
    title: "Spirit Release Therapy",
    description:
      "A specialised technique within our hypnotherapy practice. Learn more about what it involves and who it may help.",
    href: "/therapies/spirit-release-therapy"
  }
];

const faqs = [
  {
    question: "Is hypnotherapy safe?",
    answer:
      "Yes, clinical hypnotherapy is safe when practised by a trained professional. At Chaitanya Raj in Navi Mumbai, sessions are led by Lt Col Rajesh Sharma (Retd), a Lifetime Professional Member of the Academy of Hypnosis India, and clients remain aware and in control throughout every session."
  },
  {
    question: "Will I lose control or say things I don't mean during hypnotherapy?",
    answer:
      "No. Hypnotherapy is a state of focused relaxation, not unconsciousness. At Chaitanya Raj Psychology & Counselling in Navi Mumbai, clients remain fully aware and in control throughout the session."
  },
  {
    question: "Does hypnotherapy work instantly, or for everything?",
    answer:
      "No, results build over sessions and depend on the individual, the same as any therapeutic approach. At Chaitanya Raj Psychology & Counselling in Navi Mumbai, Lt Col Rajesh Sharma (Retd) gives clients a realistic sense of what to expect after the first session, rather than a guarantee."
  },
  {
    question: "How many hypnotherapy sessions will I need?",
    answer:
      "The number of sessions depends on what the client is working through. At Chaitanya Raj Psychology & Counselling in Navi Mumbai, Lt Col Rajesh Sharma (Retd) gives a realistic estimate after understanding the individual's situation in the first session."
  },
  {
    question: "Can hypnotherapy help with anxiety and panic attacks?",
    answer:
      "Yes, hypnotherapy can help with anxiety and panic attacks, particularly when combined with CBT based work. At Chaitanya Raj in Navi Mumbai, this combined approach is used to calm the nervous system's response over time."
  },
  {
    question: "Is hypnotherapy available online, or only in person?",
    answer:
      "Chaitanya Raj Psychology & Counselling offers hypnotherapy both online and in person, at clinics in Vashi and CBD Belapur, Navi Mumbai."
  },
  {
    question: "What is the difference between hypnotherapy and past life regression therapy?",
    answer:
      "Hypnotherapy is the broader clinical technique, used for anxiety, sleep difficulties, and repeating patterns, while past life regression therapy is a specialised technique within hypnotherapy, used for fears and blocks that haven't responded to other approaches. Both are offered at Chaitanya Raj Psychology & Counselling in Navi Mumbai by Lt Col Rajesh Sharma (Retd)."
  },
  {
    question: "Who is the hypnotherapist at Chaitanya Raj in Navi Mumbai?",
    answer:
      "Lt Col Rajesh Sharma (Retd) is the clinical hypnotherapist and counselling psychologist at Chaitanya Raj Psychology & Counselling in Navi Mumbai. He holds an MA in Clinical Psychology as a Gold Medalist, a PG Diploma in Clinical Hypnosis, and is a Lifetime Professional Member of the Academy of Hypnosis India, with over 25 years of clinical experience."
  }
];

export default function HypnotherapyPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="bg-sand py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[1.15fr_0.85fr] md:px-10">
          <div className="max-w-3xl">
            <p className="eyebrow">Clinical Hypnotherapy · Vashi &amp; Belapur, Navi Mumbai</p>

            <h1 className="mt-5 text-5xl leading-[1.05] text-primary-dark md:text-7xl">
              Hypnotherapist in Navi Mumbai
            </h1>

            <p className="mt-8 text-xl leading-relaxed text-ink-soft">
              Clinical hypnotherapy at {site.shortName} is led by {site.founder}, a Lifetime
              Professional Member of the Academy of Hypnosis, India's dedicated professional
              body for hypnotherapy, membership reference 202301LM000034.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              With over 25 years of clinical experience, sessions are available in Vashi and
              Belapur, Navi Mumbai, and online.
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
                alt={`${site.founder}, hypnotherapist in Navi Mumbai`}
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
          WHAT HYPNOTHERAPY IS
      ====================================================== */}
      <Section eyebrow="What hypnotherapy is" title="A recognised technique, not a stage trick">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6 text-lg leading-relaxed text-ink-soft">
            <p>
              Hypnotherapy is a guided, focused state of relaxed attention, used alongside
              evidence-based talk therapy, never instead of it. It is not stage hypnosis, and
              you remain aware and in control throughout.
            </p>
            <p>
              It is used to reach patterns, fears, or blocks that sometimes sit beneath what
              talk therapy alone can reach, particularly when something keeps resurfacing
              despite other approaches.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/conditions/past-life-regression-therapy.png"
              alt="Clinical hypnotherapy session in Navi Mumbai"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      {/* =====================================================
          WHAT A SESSION ACTUALLY INVOLVES
      ====================================================== */}
      <section className="bg-primary-dark py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-2xl">
            <p className="eyebrow text-white/60">A session, step by step</p>
            <h2 className="mt-5 text-4xl leading-tight text-white md:text-6xl">
              What a session actually involves
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Your first session is a conversation, not a hypnosis session. We talk through
              what you're dealing with, what you've already tried, and whether hypnotherapy is
              a genuine fit for what you need.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white/70">If it is, sessions involve:</p>
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
          <h2 className="mt-5 text-4xl text-primary-dark md:text-6xl">Common misconceptions</h2>

          <div className="mt-12 space-y-8">
            {misconceptions.map((item) => (
              <div key={item.myth} className="card p-6">
                <p className="text-xl font-medium text-primary-dark">{item.myth}</p>
                <p className="mt-3 text-lg leading-relaxed text-ink-soft">{item.answer}</p>
              </div>
            ))}
          </div>
          <Link
            href="/about/myths-and-facts-about-hypnotherapy"
            className="btn-outline mt-10 inline-flex"
          >
            More myths and facts about hypnotherapy →
          </Link>
        </div>
      </section>

      {/* =====================================================
          WHO HYPNOTHERAPY MAY HELP
      ====================================================== */}
      <Section eyebrow="Is this for you" title="Who hypnotherapy may help">
        <ul className="grid gap-4 sm:grid-cols-2">
          {whoItMayHelp.map((item) => (
            <li key={item} className="flex gap-3 text-lg leading-relaxed text-ink-soft">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Hypnotherapy is a complement to psychological care, not a replacement for it. Where
          something needs medical evaluation, for example a physical health concern or a
          condition requiring psychiatric care, we will always say so and point you toward the
          right professional.
        </p>
      </Section>

      {/* =====================================================
          BEYOND STANDARD HYPNOTHERAPY
      ====================================================== */}
      <section className="bg-sand py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-2xl">
            <p className="eyebrow">Beyond standard hypnotherapy</p>
            <h2 className="mt-5 text-4xl text-primary-dark md:text-6xl">
              Specialised techniques
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              For clients who want to go deeper, we also offer two specialised techniques,
              each explained fully on its own page since they involve a different kind of
              work:
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {beyondStandard.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="card p-6 flex flex-col gap-2 hover:border-accent/40 hover:-translate-y-1 transition-all"
              >
                <h3 className="text-xl text-primary-dark font-display">{item.title} →</h3>
                <p className="text-ink-soft text-sm leading-relaxed">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <p className="eyebrow">Frequently asked questions</p>
          <h2 className="mt-5 text-4xl text-primary-dark md:text-6xl">
            Frequently Asked Questions
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
          FINAL CTA
      ====================================================== */}
      <section className="bg-primary-dark py-20 text-white md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="eyebrow text-white/60">Ready when you are</p>
          <h2 className="mt-5 text-4xl leading-tight text-white md:text-6xl">
            Speak to Navi Mumbai's trusted hypnotherapist.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Book a consultation to find out whether hypnotherapy is the right fit for what
            you're working through.
          </p>
          <Link href="/contact" className="btn-primary mt-8 inline-flex">
            Book a consultation →
          </Link>
        </div>
      </section>
    </>
  );
}
