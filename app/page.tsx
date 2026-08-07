// // // // // // // // import Link from "next/link";
// // // // // // // // import Hero from "@/components/Hero";
// // // // // // // // import Section from "@/components/Section";
// // // // // // // // import ConditionCard from "@/components/ConditionCard";
// // // // // // // // import TherapyCard from "@/components/TherapyCard";
// // // // // // // // import PlaceholderImage from "@/components/PlaceholderImage";
// // // // // // // // import { conditions } from "@/lib/data/conditions";
// // // // // // // // import { therapies } from "@/lib/data/therapies";
// // // // // // // // import { differentiators } from "@/lib/data/differentiators";
// // // // // // // // import { upcomingEvents } from "@/lib/data/events";
// // // // // // // // import { galleryItems } from "@/lib/data/gallery";
// // // // // // // // import { site } from "@/lib/data/site";
// // // // // // // // import { buildMetadata } from "@/lib/seo/metadata";

// // // // // // // // export const metadata = buildMetadata({
// // // // // // // //   title: `${site.name} | Psychologist in Navi Mumbai`,
// // // // // // // //   description: site.description,
// // // // // // // //   path: "/"
// // // // // // // // });

// // // // // // // // export default function HomePage() {
// // // // // // // //   return (
// // // // // // // //     <>
// // // // // // // //       <Hero />

// // // // // // // //       {/* About */}
// // // // // // // //       <Section eyebrow="About us" title="A practice built on discipline and care">
// // // // // // // //         <div className="grid md:grid-cols-5 gap-12 items-center">
// // // // // // // //           <div className="md:col-span-2">
// // // // // // // //             <PlaceholderImage
// // // // // // // //               label="Founder photo"
// // // // // // // //               className="w-full aspect-[4/5] rounded-organic border border-primary/10"
// // // // // // // //             />
// // // // // // // //             <p className="mt-4 font-display text-lg text-primary-dark">{site.founder}</p>
// // // // // // // //             <p className="eyebrow mt-1">{site.founderCredentials}</p>
// // // // // // // //           </div>
// // // // // // // //           <div className="md:col-span-3 space-y-5 text-ink-soft text-lg leading-relaxed">
// // // // // // // //             <p>
// // // // // // // //               {site.name} is led by {site.founder}, a {site.founderCredentials.toLowerCase()}.
// // // // // // // //               Two decades of structured, disciplined service before entering full-time clinical
// // // // // // // //               practice shape the way sessions are run here — methodical, unhurried, and focused
// // // // // // // //               on what actually helps.
// // // // // // // //             </p>
// // // // // // // //             <p>
// // // // // // // //               The practice combines evidence-based talk therapy with clinical hypnotherapy,
// // // // // // // //               recognised by the British Psychological Society, offering a grounded path through
// // // // // // // //               anxiety, depression, trauma, relationships and more.
// // // // // // // //             </p>
// // // // // // // //             <Link href="/about" className="btn-outline inline-flex">
// // // // // // // //               Read our full story
// // // // // // // //             </Link>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </Section>

// // // // // // // //       {/* Why we're different */}
// // // // // // // //       <Section eyebrow="Why Chaitanya Raj" title="What makes us different in Navi Mumbai" className="bg-surface-soft/60 rounded-3xl">
// // // // // // // //         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // // // //           {differentiators.map((d) => (
// // // // // // // //             <div key={d.title} className="card p-6">
// // // // // // // //               <p className="text-lg font-display text-primary-dark mb-2">{d.title}</p>
// // // // // // // //               <p className="text-ink-soft text-sm leading-relaxed">{d.description}</p>
// // // // // // // //             </div>
// // // // // // // //           ))}
// // // // // // // //         </div>
// // // // // // // //       </Section>

// // // // // // // //       {/* Conditions */}
// // // // // // // //       <Section eyebrow="What brings people in" title="Support for what you're carrying">
// // // // // // // //         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
// // // // // // // //           {conditions.slice(0, 8).map((c) => (
// // // // // // // //             <ConditionCard key={c.slug} condition={c} />
// // // // // // // //           ))}
// // // // // // // //         </div>
// // // // // // // //         <div className="mt-8">
// // // // // // // //           <Link href="/conditions" className="btn-outline inline-flex">
// // // // // // // //             See all conditions we treat
// // // // // // // //           </Link>
// // // // // // // //         </div>
// // // // // // // //       </Section>

// // // // // // // //       {/* Therapies */}
// // // // // // // //       <Section eyebrow="How we work" title="Therapies we practise" className="bg-surface-soft/60 rounded-3xl">
// // // // // // // //         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // // // //           {therapies.slice(0, 6).map((t) => (
// // // // // // // //             <TherapyCard key={t.slug} therapy={t} />
// // // // // // // //           ))}
// // // // // // // //         </div>
// // // // // // // //         <div className="mt-8">
// // // // // // // //           <Link href="/therapies" className="btn-outline inline-flex">
// // // // // // // //             See all therapies
// // // // // // // //           </Link>
// // // // // // // //         </div>
// // // // // // // //       </Section>

// // // // // // // //       {/* Notices / upcoming events */}
// // // // // // // //       <Section eyebrow="Notices" title="Upcoming camps, outings & events">
// // // // // // // //         <div className="grid md:grid-cols-3 gap-6">
// // // // // // // //           {upcomingEvents.map((e) => (
// // // // // // // //             <div key={e.title} className="card overflow-hidden flex flex-col">
// // // // // // // //               <PlaceholderImage label={e.tag} className="w-full aspect-[4/3]" />
// // // // // // // //               <div className="p-6 flex flex-col gap-2 flex-1">
// // // // // // // //                 <p className="eyebrow">{e.date} · {e.location}</p>
// // // // // // // //                 <h3 className="text-lg font-display text-primary-dark">{e.title}</h3>
// // // // // // // //                 <p className="text-ink-soft text-sm leading-relaxed flex-1">{e.description}</p>
// // // // // // // //                 <Link href="/contact" className="font-mono text-xs uppercase tracking-widest text-accent mt-2">
// // // // // // // //                   Reserve a spot →
// // // // // // // //                 </Link>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           ))}
// // // // // // // //         </div>
// // // // // // // //       </Section>

// // // // // // // //       {/* Gallery */}
// // // // // // // //       <Section eyebrow="Gallery" title="From past events" className="bg-surface-soft/60 rounded-3xl">
// // // // // // // //         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // // // //           {galleryItems.map((g, i) => (
// // // // // // // //             <div key={i} className="rounded-2xl overflow-hidden border border-primary/10">
// // // // // // // //               <PlaceholderImage label={`${g.event}, ${g.year}`} className="w-full aspect-square" />
// // // // // // // //               <p className="px-4 py-3 text-sm text-ink-soft bg-surface">{g.caption}</p>
// // // // // // // //             </div>
// // // // // // // //           ))}
// // // // // // // //         </div>
// // // // // // // //       </Section>

// // // // // // // //       {/* Schedule a visit */}
// // // // // // // //       <Section eyebrow="Ready when you are" title="Schedule a visit">
// // // // // // // //         <div className="card p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
// // // // // // // //           <p className="text-ink-soft max-w-lg">
// // // // // // // //             Sessions are available in person in Vashi, Navi Mumbai, and online. The first
// // // // // // // //             conversation is about understanding what you need — there&apos;s no pressure to
// // // // // // // //             commit beyond that.
// // // // // // // //           </p>
// // // // // // // //           <Link href="/contact" className="btn-primary whitespace-nowrap">
// // // // // // // //             Schedule a visit
// // // // // // // //           </Link>
// // // // // // // //         </div>
// // // // // // // //       </Section>
// // // // // // // //     </>
// // // // // // // //   );
// // // // // // // // }



// // // // // // // import Link from "next/link";
// // // // // // // import Image from "next/image";
// // // // // // // import Hero from "@/components/Hero";
// // // // // // // import Section from "@/components/Section";
// // // // // // // import ConditionCard from "@/components/ConditionCard";
// // // // // // // import TherapyCard from "@/components/TherapyCard";
// // // // // // // import PlaceholderImage from "@/components/PlaceholderImage";
// // // // // // // import { conditions } from "@/lib/data/conditions";
// // // // // // // import { therapies } from "@/lib/data/therapies";
// // // // // // // import { differentiators } from "@/lib/data/differentiators";
// // // // // // // import { upcomingEvents } from "@/lib/data/events";
// // // // // // // import { galleryItems } from "@/lib/data/gallery";
// // // // // // // import { site } from "@/lib/data/site";
// // // // // // // import { buildMetadata } from "@/lib/seo/metadata";

// // // // // // // export const metadata = buildMetadata({
// // // // // // //   title: `${site.name} | Psychologist in Navi Mumbai`,
// // // // // // //   description: site.description,
// // // // // // //   path: "/"
// // // // // // // });

// // // // // // // export default function HomePage() {
// // // // // // //   return (
// // // // // // //     <>
// // // // // // //       <Hero />

// // // // // // //       {/* About */}
// // // // // // //       <Section eyebrow="About us" title="A practice built on discipline and care">
// // // // // // //         <div className="grid md:grid-cols-5 gap-12 items-center">
// // // // // // //           <div className="md:col-span-2">
// // // // // // //             <div className="relative w-full aspect-[4/5] rounded-organic border border-primary/10 overflow-hidden">
// // // // // // //               <Image
// // // // // // //                 src="/founder.jpg"
// // // // // // //                 alt={site.founder}
// // // // // // //                 fill
// // // // // // //                 sizes="(min-width: 768px) 40vw, 100vw"
// // // // // // //                 className="object-cover"
// // // // // // //                 priority
// // // // // // //               />
// // // // // // //             </div>
// // // // // // //             <p className="mt-4 font-display text-lg text-primary-dark">{site.founder}</p>
// // // // // // //             <p className="eyebrow mt-1">{site.founderCredentials}</p>
// // // // // // //           </div>
// // // // // // //           <div className="md:col-span-3 space-y-5 text-ink-soft text-lg leading-relaxed">
// // // // // // //             <p>
// // // // // // //               {site.name} is led by {site.founder}, a {site.founderCredentials.toLowerCase()}.
// // // // // // //               Two decades of structured, disciplined service before entering full-time clinical
// // // // // // //               practice shape the way sessions are run here — methodical, unhurried, and focused
// // // // // // //               on what actually helps.
// // // // // // //             </p>
// // // // // // //             <p>
// // // // // // //               The practice combines evidence-based talk therapy with clinical hypnotherapy,
// // // // // // //               recognised by the British Psychological Society, offering a grounded path through
// // // // // // //               anxiety, depression, trauma, relationships and more.
// // // // // // //             </p>
// // // // // // //             <Link href="/about" className="btn-outline inline-flex">
// // // // // // //               Read our full story
// // // // // // //             </Link>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </Section>

// // // // // // //       {/* Why we're different */}
// // // // // // //       <Section eyebrow="Why Chaitanya Raj" title="What makes us different in Navi Mumbai" className="bg-surface-soft/60 rounded-3xl">
// // // // // // //         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // // //           {differentiators.map((d) => (
// // // // // // //             <div key={d.title} className="card p-6">
// // // // // // //               <p className="text-lg font-display text-primary-dark mb-2">{d.title}</p>
// // // // // // //               <p className="text-ink-soft text-sm leading-relaxed">{d.description}</p>
// // // // // // //             </div>
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //       </Section>

// // // // // // //       {/* Conditions */}
// // // // // // //       <Section eyebrow="What brings people in" title="Support for what you're carrying">
// // // // // // //         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
// // // // // // //           {conditions.slice(0, 8).map((c) => (
// // // // // // //             <ConditionCard key={c.slug} condition={c} />
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //         <div className="mt-8">
// // // // // // //           <Link href="/conditions" className="btn-outline inline-flex">
// // // // // // //             See all conditions we treat
// // // // // // //           </Link>
// // // // // // //         </div>
// // // // // // //       </Section>

// // // // // // //       {/* Therapies */}
// // // // // // //       <Section eyebrow="How we work" title="Therapies we practise" className="bg-surface-soft/60 rounded-3xl">
// // // // // // //         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // // //           {therapies.slice(0, 6).map((t) => (
// // // // // // //             <TherapyCard key={t.slug} therapy={t} />
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //         <div className="mt-8">
// // // // // // //           <Link href="/therapies" className="btn-outline inline-flex">
// // // // // // //             See all therapies
// // // // // // //           </Link>
// // // // // // //         </div>
// // // // // // //       </Section>

// // // // // // //       {/* Notices / upcoming events */}
// // // // // // //       <Section eyebrow="Notices" title="Upcoming camps, outings & events">
// // // // // // //         <div className="grid md:grid-cols-3 gap-6">
// // // // // // //           {upcomingEvents.map((e) => (
// // // // // // //             <div key={e.title} className="card overflow-hidden flex flex-col">
// // // // // // //               <PlaceholderImage label={e.tag} className="w-full aspect-[4/3]" />
// // // // // // //               <div className="p-6 flex flex-col gap-2 flex-1">
// // // // // // //                 <p className="eyebrow">{e.date} · {e.location}</p>
// // // // // // //                 <h3 className="text-lg font-display text-primary-dark">{e.title}</h3>
// // // // // // //                 <p className="text-ink-soft text-sm leading-relaxed flex-1">{e.description}</p>
// // // // // // //                 <Link href="/contact" className="font-mono text-xs uppercase tracking-widest text-accent mt-2">
// // // // // // //                   Reserve a spot →
// // // // // // //                 </Link>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //       </Section>

// // // // // // //       {/* Gallery */}
// // // // // // //       <Section eyebrow="Gallery" title="From past events" className="bg-surface-soft/60 rounded-3xl">
// // // // // // //         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // // //           {galleryItems.map((g, i) => (
// // // // // // //             <div key={i} className="rounded-2xl overflow-hidden border border-primary/10">
// // // // // // //               <PlaceholderImage label={`${g.event}, ${g.year}`} className="w-full aspect-square" />
// // // // // // //               <p className="px-4 py-3 text-sm text-ink-soft bg-surface">{g.caption}</p>
// // // // // // //             </div>
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //       </Section>

// // // // // // //       {/* Schedule a visit */}
// // // // // // //       <Section eyebrow="Ready when you are" title="Schedule a visit">
// // // // // // //         <div className="card p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
// // // // // // //           <p className="text-ink-soft max-w-lg">
// // // // // // //             Sessions are available in person in Vashi, Navi Mumbai, and online. The first
// // // // // // //             conversation is about understanding what you need — there&apos;s no pressure to
// // // // // // //             commit beyond that.
// // // // // // //           </p>
// // // // // // //           <Link href="/contact" className="btn-primary whitespace-nowrap">
// // // // // // //             Schedule a visit
// // // // // // //           </Link>
// // // // // // //         </div>
// // // // // // //       </Section>
// // // // // // //     </>
// // // // // // //   );
// // // // // // // }


// // // // // // import Link from "next/link";
// // // // // // import Image from "next/image";
// // // // // // import Hero from "@/components/Hero";
// // // // // // import Section from "@/components/Section";
// // // // // // import ConditionCard from "@/components/ConditionCard";
// // // // // // // import TherapyCard from "@/components/TherapyCard";
// // // // // // import PlaceholderImage from "@/components/PlaceholderImage";
// // // // // // import { conditions } from "@/lib/data/conditions";
// // // // // // import { therapies } from "@/lib/data/therapies";
// // // // // // import { differentiators } from "@/lib/data/differentiators";
// // // // // // import { upcomingEvents } from "@/lib/data/events";
// // // // // // import { galleryItems } from "@/lib/data/gallery";
// // // // // // import { site } from "@/lib/data/site";
// // // // // // import { buildMetadata } from "@/lib/seo/metadata";

// // // // // // export const metadata = buildMetadata({
// // // // // //   title: `${site.name} | Psychologist in Navi Mumbai`,
// // // // // //   description: site.description,
// // // // // //   path: "/"
// // // // // // });

// // // // // // export default function HomePage() {
// // // // // //   return (
// // // // // //     <>
// // // // // //       <Hero />

// // // // // //       {/* About */}
// // // // // //       <Section eyebrow="About us" title="A practice built on discipline and care">
// // // // // //         <div className="grid md:grid-cols-5 gap-12 items-center">
// // // // // //           <div className="md:col-span-2">
// // // // // //             <div className="relative w-full aspect-[4/5] rounded-organic border border-primary/10 overflow-hidden">
// // // // // //               <Image
// // // // // //                 src="/IMG_6121.jpg"
// // // // // //                 alt={site.founder}
// // // // // //                 fill
// // // // // //                 sizes="(min-width: 768px) 40vw, 100vw"
// // // // // //                 className="object-cover"
// // // // // //                 priority
// // // // // //               />
// // // // // //             </div>
// // // // // //             <p className="mt-4 font-display text-lg text-primary-dark">{site.founder}</p>
// // // // // //             <p className="eyebrow mt-1">{site.founderCredentials}</p>
// // // // // //           </div>
// // // // // //           <div className="md:col-span-3 space-y-5 text-ink-soft text-lg leading-relaxed">
// // // // // //             <p>
// // // // // //               {site.name} is led by {site.founder}, a {site.founderCredentials.toLowerCase()}.
// // // // // //               Two decades of structured, disciplined service before entering full-time clinical
// // // // // //               practice shape the way sessions are run here — methodical, unhurried, and focused
// // // // // //               on what actually helps.
// // // // // //             </p>
// // // // // //             <p>
// // // // // //               The practice combines evidence-based talk therapy with clinical hypnotherapy,
// // // // // //               recognised by the British Psychological Society, offering a grounded path through
// // // // // //               anxiety, depression, trauma, relationships and more.
// // // // // //             </p>
// // // // // //             <Link href="/about/the-founder" className="btn-outline inline-flex">
// // // // // //               Read our full story
// // // // // //             </Link>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </Section>

// // // // // //       {/* Why we're different */}
// // // // // //       <Section eyebrow="Why Chaitanya Raj" title="What makes us different in Navi Mumbai" className="bg-surface-soft/60 rounded-3xl">
// // // // // //         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // //           {differentiators.map((d) => (
// // // // // //             <div key={d.title} className="card p-6">
// // // // // //               <p className="text-lg font-display text-primary-dark mb-2">{d.title}</p>
// // // // // //               <p className="text-ink-soft text-sm leading-relaxed">{d.description}</p>
// // // // // //             </div>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       </Section>

// // // // // //       {/* Conditions */}
// // // // // //       <Section eyebrow="What brings people in" title="Support for what you're carrying">
// // // // // //         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
// // // // // //           {conditions.slice(0, 8).map((c) => (
// // // // // //             <ConditionCard key={c.slug} condition={c} />
// // // // // //           ))}
// // // // // //         </div>
// // // // // //         <div className="mt-8">
// // // // // //           <Link href="/conditions" className="btn-outline inline-flex">
// // // // // //             See all conditions we treat
// // // // // //           </Link>
// // // // // //         </div>
// // // // // //       </Section>

// // // // // //       <section className="bg-primary-dark py-20 text-white md:py-28">
// // // // // //   <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[0.9fr_1.1fr] md:px-10">
// // // // // //     <div>
// // // // // //       <p className="eyebrow text-white/60">
// // // // // //         For Organisations
// // // // // //       </p>

// // // // // //       <h2 className="mt-5 max-w-xl text-4xl leading-tight text-white md:text-6xl">
// // // // // //        Healthier people. Stronger organisations.
// // // // // //       </h2>
// // // // // //     </div>

// // // // // //     <div className="max-w-xl">
// // // // // //       <p className="text-lg leading-relaxed text-white/70">
// // // // // //         Stress, burnout, and unresolved conflict do not stay contained to one
// // // // // //         individual. They can affect absenteeism, engagement, team dynamics,
// // // // // //         retention, and workplace culture.
// // // // // //       </p>

// // // // // //       <p className="mt-5 text-lg leading-relaxed text-white/70">
// // // // // //         We work with organisations across Navi Mumbai to provide structured
// // // // // //         psychological support through Employee Assistance Programs, workshops,
// // // // // //         leadership wellness, burnout prevention, and tailored corporate wellness
// // // // // //         solutions.
// // // // // //       </p>

// // // // // //       <Link
// // // // // //         href="/corporate-wellness-programs-navi-mumbai"
// // // // // //         className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-primary-dark transition hover:bg-white/90"
// // // // // //       >
// // // // // //         Explore Corporate Wellness →
// // // // // //       </Link>
// // // // // //     </div>
// // // // // //   </div>
// // // // // // </section>

// // // // // //       {/* Therapies */}
// // // // // //       {/* <Section eyebrow="How we work" title="Therapies we practise" className="bg-surface-soft/60 rounded-3xl">
// // // // // //         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // //           {therapies.slice(0, 6).map((t) => (
// // // // // //             <TherapyCard key={t.slug} therapy={t} />
// // // // // //           ))}
// // // // // //         </div>
// // // // // //         <div className="mt-8">
// // // // // //           <Link href="/therapies" className="btn-outline inline-flex">
// // // // // //             See all therapies
// // // // // //           </Link>
// // // // // //         </div>
// // // // // //       </Section> */}

// // // // // //       {/* Notices / upcoming events */}
// // // // // //       <Section eyebrow="Notices" title="Upcoming camps, outings & events">
// // // // // //         <div className="grid md:grid-cols-3 gap-6">
// // // // // //           {upcomingEvents.map((e) => (
// // // // // //             <div key={e.title} className="card overflow-hidden flex flex-col">
// // // // // //               <PlaceholderImage label={e.tag} className="w-full aspect-[4/3]" />
// // // // // //               <div className="p-6 flex flex-col gap-2 flex-1">
// // // // // //                 <p className="eyebrow">{e.date} · {e.location}</p>
// // // // // //                 <h3 className="text-lg font-display text-primary-dark">{e.title}</h3>
// // // // // //                 <p className="text-ink-soft text-sm leading-relaxed flex-1">{e.description}</p>
// // // // // //                 <Link href="/contact" className="font-mono text-xs uppercase tracking-widest text-accent mt-2">
// // // // // //                   Reserve a spot →
// // // // // //                 </Link>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       </Section>

// // // // // //       {/* Gallery */}
// // // // // //       <Section eyebrow="Gallery" title="From past events" className="bg-surface-soft/60 rounded-3xl">
// // // // // //         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // //           {galleryItems.slice(0, 6).map((g, i) => (
// // // // // //             <div key={i} className="rounded-2xl overflow-hidden border border-primary/10">
// // // // // //               <PlaceholderImage label={`${g.event}, ${g.year}`} className="w-full aspect-square" />
// // // // // //               <p className="px-4 py-3 text-sm text-ink-soft bg-surface">{g.caption}</p>
// // // // // //             </div>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //         <div className="mt-8">
// // // // // //           <Link href="/gallery" className="btn-outline inline-flex">
// // // // // //             View our work
// // // // // //           </Link>
// // // // // //         </div>
// // // // // //       </Section>

// // // // // //       {/* Schedule a visit */}
// // // // // //       <Section eyebrow="Ready when you are" title="Schedule a visit">
// // // // // //         <div className="card p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
// // // // // //           <p className="text-ink-soft max-w-lg">
// // // // // //             Sessions are available in person in Vashi, Navi Mumbai, and online. The first
// // // // // //             conversation is about understanding what you need — there&apos;s no pressure to
// // // // // //             commit beyond that.
// // // // // //           </p>
// // // // // //           <Link href="/contact" className="btn-primary whitespace-nowrap">
// // // // // //             Schedule a visit
// // // // // //           </Link>
// // // // // //         </div>
// // // // // //       </Section>
// // // // // //     </>
// // // // // //   );
// // // // // // }


// // // // // import Link from "next/link";
// // // // // import Image from "next/image";

// // // // // import Hero from "@/components/Hero";
// // // // // import Section from "@/components/Section";
// // // // // import ConditionCard from "@/components/ConditionCard";
// // // // // // import PlaceholderImage from "@/components/PlaceholderImage";

// // // // // import { conditions } from "@/lib/data/conditions";
// // // // // import { differentiators } from "@/lib/data/differentiators";
// // // // // import { galleryItems } from "@/lib/data/gallery";
// // // // // import { site } from "@/lib/data/site";
// // // // // import { buildMetadata } from "@/lib/seo/metadata";
// // // // // import { getPublishedEvents } from "@/lib/firebase/events";
// // // // // import EventsSection from "@/components/EventsSection";

// // // // // export const metadata = buildMetadata({
// // // // //   title: `${site.name} | Psychologist in Navi Mumbai`,
// // // // //   description: site.description,
// // // // //   path: "/"
// // // // // });

// // // // // export default async function HomePage() {
// // // // //   /*
// // // // //    * =====================================================
// // // // //    * FETCH EVENTS FROM FIRESTORE
// // // // //    * =====================================================
// // // // //    */

// // // // //   let events = [];

// // // // //   try {
// // // // //     events = await getPublishedEvents();
// // // // //   } catch (error) {
// // // // //     console.error("Failed to fetch events:", error);
// // // // //   }

// // // // //   /*
// // // // //    * =====================================================
// // // // //    * SPLIT EVENTS INTO UPCOMING AND PREVIOUS
// // // // //    * =====================================================
// // // // //    */

// // // // //   const today = new Date();
// // // // //   today.setHours(0, 0, 0, 0);

// // // // //   const upcomingEvents = events.filter((event) => {
// // // // //     const eventDate = new Date(event.date);
// // // // //     eventDate.setHours(0, 0, 0, 0);

// // // // //     return eventDate >= today;
// // // // //   });

// // // // //   const previousEvents = events
// // // // //     .filter((event) => {
// // // // //       const eventDate = new Date(event.date);
// // // // //       eventDate.setHours(0, 0, 0, 0);

// // // // //       return eventDate < today;
// // // // //     })
// // // // //     .sort(
// // // // //       (a, b) =>
// // // // //         new Date(b.date).getTime() -
// // // // //         new Date(a.date).getTime()
// // // // //     );

// // // // //   /*
// // // // //    * =====================================================
// // // // //    * DISPLAY UPCOMING EVENTS FIRST
// // // // //    * OTHERWISE SHOW PREVIOUS EVENTS
// // // // //    * =====================================================
// // // // //    */

// // // // //   const displayedEvents =
// // // // //     upcomingEvents.length > 0
// // // // //       ? upcomingEvents
// // // // //       : previousEvents;

// // // // //   const isShowingUpcomingEvents =
// // // // //     upcomingEvents.length > 0;

// // // // //   return (
// // // // //     <>
// // // // //       {/* =====================================================
// // // // //           HERO
// // // // //       ====================================================== */}

// // // // //       <Hero />

// // // // //       {/* =====================================================
// // // // //           ABOUT
// // // // //       ====================================================== */}

// // // // //       <Section
// // // // //         eyebrow="About us"
// // // // //         title="A practice built on discipline and care"
// // // // //       >
// // // // //         <div className="grid items-center gap-12 md:grid-cols-5">

// // // // //           <div className="md:col-span-2">

// // // // //             <div className="relative aspect-[4/5] w-full overflow-hidden rounded-organic border border-primary/10">

// // // // //               <Image
// // // // //                 src="/IMG_6121.jpg"
// // // // //                 alt={site.founder}
// // // // //                 fill
// // // // //                 sizes="(min-width: 768px) 40vw, 100vw"
// // // // //                 className="object-cover"
// // // // //                 priority
// // // // //               />

// // // // //             </div>

// // // // //             <p className="mt-4 font-display text-lg text-primary-dark">
// // // // //               {site.founder}
// // // // //             </p>

// // // // //             <p className="eyebrow mt-1">
// // // // //               {site.founderCredentials}
// // // // //             </p>

// // // // //           </div>

// // // // //           <div className="space-y-5 text-lg leading-relaxed text-ink-soft md:col-span-3">

// // // // //             <p>
// // // // //               {site.name} is led by {site.founder}, a{" "}
// // // // //               {site.founderCredentials.toLowerCase()}.
// // // // //               Two decades of structured, disciplined service before entering
// // // // //               full-time clinical practice shape the way sessions are run here —
// // // // //               methodical, unhurried, and focused on what actually helps.
// // // // //             </p>

// // // // //             <p>
// // // // //               The practice combines evidence-based talk therapy with clinical
// // // // //               hypnotherapy, recognised by the British Psychological Society,
// // // // //               offering a grounded path through anxiety, depression, trauma,
// // // // //               relationships and more.
// // // // //             </p>

// // // // //             <Link
// // // // //               href="/about/the-founder"
// // // // //               className="btn-outline inline-flex"
// // // // //             >
// // // // //               Read our full story
// // // // //             </Link>

// // // // //           </div>

// // // // //         </div>
// // // // //       </Section>

// // // // //       {/* =====================================================
// // // // //           WHY WE ARE DIFFERENT
// // // // //       ====================================================== */}

// // // // //       <Section
// // // // //         eyebrow="Why Chaitanya Raj"
// // // // //         title="What makes us different in Navi Mumbai"
// // // // //         className="rounded-3xl bg-surface-soft/60"
// // // // //       >
// // // // //         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

// // // // //           {differentiators.map((d) => (
// // // // //             <div
// // // // //               key={d.title}
// // // // //               className="card p-6"
// // // // //             >
// // // // //               <p className="mb-2 font-display text-lg text-primary-dark">
// // // // //                 {d.title}
// // // // //               </p>

// // // // //               <p className="text-sm leading-relaxed text-ink-soft">
// // // // //                 {d.description}
// // // // //               </p>
// // // // //             </div>
// // // // //           ))}

// // // // //         </div>
// // // // //       </Section>

// // // // //       {/* =====================================================
// // // // //           CONDITIONS
// // // // //       ====================================================== */}

// // // // //       <Section
// // // // //         eyebrow="What brings people in"
// // // // //         title="Support for what you're carrying"
// // // // //       >

// // // // //         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

// // // // //           {conditions
// // // // //             .slice(0, 8)
// // // // //             .map((condition) => (
// // // // //               <ConditionCard
// // // // //                 key={condition.slug}
// // // // //                 condition={condition}
// // // // //               />
// // // // //             ))}

// // // // //         </div>

// // // // //         <div className="mt-8">

// // // // //           <Link
// // // // //             href="/conditions"
// // // // //             className="btn-outline inline-flex"
// // // // //           >
// // // // //             See all conditions we treat
// // // // //           </Link>

// // // // //         </div>

// // // // //       </Section>

// // // // //       {/* =====================================================
// // // // //           ORGANISATIONS
// // // // //       ====================================================== */}

// // // // //       <section className="bg-primary-dark py-20 text-white md:py-28">

// // // // //         <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[0.9fr_1.1fr] md:px-10">

// // // // //           <div>

// // // // //             <p className="eyebrow text-white/60">
// // // // //               For Organisations
// // // // //             </p>

// // // // //             <h2 className="mt-5 max-w-xl text-4xl leading-tight text-white md:text-6xl">
// // // // //               Healthier people. Stronger organisations.
// // // // //             </h2>

// // // // //           </div>

// // // // //           <div className="max-w-xl">

// // // // //             <p className="text-lg leading-relaxed text-white/70">
// // // // //               Stress, burnout, and unresolved conflict do not stay contained
// // // // //               to one individual. They can affect absenteeism, engagement, team
// // // // //               dynamics, retention, and workplace culture.
// // // // //             </p>

// // // // //             <p className="mt-5 text-lg leading-relaxed text-white/70">
// // // // //               We work with organisations across Navi Mumbai to provide
// // // // //               structured psychological support through Employee Assistance
// // // // //               Programs, workshops, leadership wellness, burnout prevention, and
// // // // //               tailored corporate wellness solutions.
// // // // //             </p>

// // // // //             <Link
// // // // //               href="/corporate-wellness-programs-navi-mumbai"
// // // // //               className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-primary-dark transition hover:bg-white/90"
// // // // //             >
// // // // //               Explore Corporate Wellness →
// // // // //             </Link>

// // // // //           </div>

// // // // //         </div>

// // // // //       </section>

// // // // //       {/* =====================================================
// // // // //           EVENTS
// // // // //       ====================================================== */}

// // // // //       {displayedEvents.length > 0 && (

// // // // //         <Section
// // // // //           eyebrow={
// // // // //             isShowingUpcomingEvents
// // // // //               ? "Notices"
// // // // //               : "From our community"
// // // // //           }
// // // // //           title={
// // // // //             isShowingUpcomingEvents
// // // // //               ? "Upcoming camps, outings & events"
// // // // //               : "Previous camps, outings & events"
// // // // //           }
// // // // //         >

// // // // //           <div className="grid gap-6 md:grid-cols-3">

// // // // //             {displayedEvents.map((event) => (

// // // // //               <div
// // // // //                 key={event.id}
// // // // //                 className="card flex flex-col overflow-hidden"
// // // // //               >

// // // // //                 {/* EVENT IMAGE */}

// // // // //                 {event.imageUrl ? (

// // // // //                   <div className="relative aspect-[4/3] w-full">

// // // // //                     <Image
// // // // //                       src={event.imageUrl}
// // // // //                       alt={event.title}
// // // // //                       fill
// // // // //                       sizes="(min-width: 768px) 33vw, 100vw"
// // // // //                       className="object-cover"
// // // // //                     />

// // // // //                   </div>

// // // // //                 ) : (

// // // // //                   <PlaceholderImage
// // // // //                     label="Event"
// // // // //                     className="aspect-[4/3] w-full"
// // // // //                   />

// // // // //                 )}

// // // // //                 {/* EVENT CONTENT */}

// // // // //                 <div className="flex flex-1 flex-col gap-2 p-6">

// // // // //                   <p className="eyebrow">

// // // // //                     {new Date(event.date).toLocaleDateString(
// // // // //                       "en-IN",
// // // // //                       {
// // // // //                         day: "numeric",
// // // // //                         month: "short",
// // // // //                         year: "numeric"
// // // // //                       }
// // // // //                     )}

// // // // //                     {event.location && (
// // // // //                       <>
// // // // //                         {" · "}
// // // // //                         {event.location}
// // // // //                       </>
// // // // //                     )}

// // // // //                   </p>

// // // // //                   <h3 className="font-display text-lg text-primary-dark">
// // // // //                     {event.title}
// // // // //                   </h3>

// // // // //                   <p className="flex-1 text-sm leading-relaxed text-ink-soft">
// // // // //                     {event.shortDescription}
// // // // //                   </p>

// // // // //                   {isShowingUpcomingEvents &&
// // // // //                     event.registrationLink && (

// // // // //                       <a
// // // // //                         href={event.registrationLink}
// // // // //                         target="_blank"
// // // // //                         rel="noopener noreferrer"
// // // // //                         className="mt-2 font-mono text-xs uppercase tracking-widest text-accent"
// // // // //                       >
// // // // //                         Reserve a spot →
// // // // //                       </a>

// // // // //                     )}

// // // // //                 </div>

// // // // //               </div>

// // // // //             ))}

// // // // //           </div>

// // // // //         </Section>

// // // // //       )}

// // // // //       {/* =====================================================
// // // // //           GALLERY
// // // // //       ====================================================== */}

// // // // //       <Section
// // // // //         eyebrow="Gallery"
// // // // //         title="From past events"
// // // // //         className="rounded-3xl bg-surface-soft/60"
// // // // //       >

// // // // //         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

// // // // //           {galleryItems
// // // // //             .slice(0, 6)
// // // // //             .map((g, i) => (

// // // // //               <div
// // // // //                 key={i}
// // // // //                 className="overflow-hidden rounded-2xl border border-primary/10"
// // // // //               >

// // // // //                 <PlaceholderImage
// // // // //                   label={`${g.event}, ${g.year}`}
// // // // //                   className="aspect-square w-full"
// // // // //                 />

// // // // //                 <p className="bg-surface px-4 py-3 text-sm text-ink-soft">
// // // // //                   {g.caption}
// // // // //                 </p>

// // // // //               </div>

// // // // //             ))}

// // // // //         </div>

// // // // //         <div className="mt-8">

// // // // //           <Link
// // // // //             href="/gallery"
// // // // //             className="btn-outline inline-flex"
// // // // //           >
// // // // //             View our work
// // // // //           </Link>

// // // // //         </div>

// // // // //       </Section>

// // // // //       {/* =====================================================
// // // // //           SCHEDULE A VISIT
// // // // //       ====================================================== */}

// // // // //       <Section
// // // // //         eyebrow="Ready when you are"
// // // // //         title="Schedule a visit"
// // // // //       >

// // // // //         <div className="card flex flex-col items-start justify-between gap-6 p-10 md:flex-row md:items-center">

// // // // //           <p className="max-w-lg text-ink-soft">
// // // // //             Sessions are available in person in Vashi, Navi Mumbai, and online.
// // // // //             The first conversation is about understanding what you need —
// // // // //             there&apos;s no pressure to commit beyond that.
// // // // //           </p>

// // // // //           <Link
// // // // //             href="/contact"
// // // // //             className="btn-primary whitespace-nowrap"
// // // // //           >
// // // // //             Schedule a visit
// // // // //           </Link>

// // // // //         </div>

// // // // //       </Section>

// // // // //     </>
// // // // //   );
// // // // // }

// // // // import { getPublishedAlbums, getPhotosForAlbum, GalleryAlbum, GalleryPhoto } from "@/lib/firebase/gallery";
// // // // import Link from "next/link";
// // // // import Image from "next/image";

// // // // import Hero from "@/components/Hero";
// // // // import Section from "@/components/Section";
// // // // import ConditionCard from "@/components/ConditionCard";
// // // // import PlaceholderImage from "@/components/PlaceholderImage";

// // // // import { conditions } from "@/lib/data/conditions";
// // // // import { differentiators } from "@/lib/data/differentiators";
// // // // import { site } from "@/lib/data/site";
// // // // import { buildMetadata } from "@/lib/seo/metadata";
// // // // import { getPublishedEvents } from "@/lib/firebase/events";
// // // // import { EventItem } from "@/lib/data/types";




// // // // export const metadata = buildMetadata({
// // // //   title: `${site.name} | Psychologist in Navi Mumbai`,
// // // //   description: site.description,
// // // //   path: "/"
// // // // });

// // // // // export default async function HomePage() {
// // // // //   // let events = [];
// // // // //   let events: EventItem[] = [];

// // // // //   try {
// // // // //     events = await getPublishedEvents();
// // // // //   } catch (error) {
// // // // //     console.error("Failed to fetch events:", error);
// // // // //   }

// // // // export default async function HomePage() {
// // // //   let events: EventItem[] = [];

// // // //   try {
// // // //     events = await getPublishedEvents();
// // // //   } catch (error) {
// // // //     console.error("Failed to fetch events:", error);
// // // //   }

// // // //   console.log("RAW EVENTS FROM FIRESTORE:", JSON.stringify(events, null, 2));

// // // //   let albums: GalleryAlbum[] = [];
// // // // let photosByAlbum: Record<string, GalleryPhoto[]> = {};

// // // // try {
// // // //   albums = await getPublishedAlbums();
// // // //   const photoLists = await Promise.all(albums.map((a) => getPhotosForAlbum(a.id)));
// // // //   albums.forEach((a, i) => {
// // // //     photosByAlbum[a.id] = photoLists[i];
// // // //   });
// // // // } catch (error) {
// // // //   console.error("Failed to fetch gallery albums:", error);
// // // // }

// // // // // flatten into a single list of photos (with album context) for the homepage preview grid
// // // // const allPhotos = albums.flatMap((album) =>
// // // //   (photosByAlbum[album.id] ?? []).map((photo) => ({ ...photo, album }))
// // // // );

// // // //   /*
// // // //    * =====================================================
// // // //    * SPLIT EVENTS INTO UPCOMING AND PREVIOUS
// // // //    * =====================================================
// // // //    */

// // // //   const today = new Date();

// // // //   today.setHours(0, 0, 0, 0);

// // // //   const upcomingEvents = events.filter((event) => {
// // // //     const eventDate = new Date(`${event.date}T00:00:00`);

// // // //     return eventDate >= today;
// // // //   });

// // // //   const previousEvents = events
// // // //     .filter((event) => {
// // // //       const eventDate = new Date(`${event.date}T00:00:00`);

// // // //       return eventDate < today;
// // // //     })
// // // //     .sort((a, b) => {
// // // //       return (
// // // //         new Date(`${b.date}T00:00:00`).getTime() -
// // // //         new Date(`${a.date}T00:00:00`).getTime()
// // // //       );
// // // //     });

// // // //   /*
// // // //    * =====================================================
// // // //    * SHOW UPCOMING EVENTS FIRST
// // // //    * OTHERWISE SHOW PREVIOUS EVENTS
// // // //    * =====================================================
// // // //    */

// // // //   const isShowingUpcomingEvents = upcomingEvents.length > 0;

// // // //   const displayedEvents = isShowingUpcomingEvents
// // // //     ? upcomingEvents
// // // //     : previousEvents;

// // // //   return (
// // // //     <>
// // // //       {/* =====================================================
// // // //           HERO
// // // //       ====================================================== */}

// // // //       <Hero />

// // // //       {/* =====================================================
// // // //           ABOUT
// // // //       ====================================================== */}

// // // //       <Section
// // // //         eyebrow="About us"
// // // //         title="A practice built on discipline and care"
// // // //       >
// // // //         <div className="grid items-center gap-12 md:grid-cols-5">

// // // //           <div className="md:col-span-2">

// // // //             <div className="relative aspect-[4/5] w-full overflow-hidden rounded-organic border border-primary/10">

// // // //               <Image
// // // //                 src="/IMG_6121.jpg"
// // // //                 alt={site.founder}
// // // //                 fill
// // // //                 sizes="(min-width: 768px) 40vw, 100vw"
// // // //                 className="object-cover"
// // // //                 priority
// // // //               />

// // // //             </div>

// // // //             <p className="mt-4 font-display text-lg text-primary-dark">
// // // //               {site.founder}
// // // //             </p>

// // // //             <p className="eyebrow mt-1">
// // // //               {site.founderCredentials}
// // // //             </p>

// // // //           </div>

// // // //           <div className="space-y-5 text-lg leading-relaxed text-ink-soft md:col-span-3">

// // // //             <p>
// // // //               {site.name} is led by {site.founder}, a{" "}
// // // //               {site.founderCredentials.toLowerCase()}.
// // // //               Two decades of structured, disciplined service before entering
// // // //               full-time clinical practice shape the way sessions are run here —
// // // //               methodical, unhurried, and focused on what actually helps.
// // // //             </p>

// // // //             <p>
// // // //               The practice combines evidence-based talk therapy with clinical
// // // //               hypnotherapy, recognised by the British Psychological Society,
// // // //               offering a grounded path through anxiety, depression, trauma,
// // // //               relationships and more.
// // // //             </p>

// // // //             <Link
// // // //               href="/about/the-founder"
// // // //               className="btn-outline inline-flex"
// // // //             >
// // // //               Read our full story
// // // //             </Link>

// // // //           </div>

// // // //         </div>
// // // //       </Section>

// // // //       {/* =====================================================
// // // //           WHY WE ARE DIFFERENT
// // // //       ====================================================== */}

// // // //       <Section
// // // //         eyebrow="Why Chaitanya Raj"
// // // //         title="What makes us different in Navi Mumbai"
// // // //         className="rounded-3xl bg-surface-soft/60"
// // // //       >
// // // //         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

// // // //           {differentiators.map((d) => (
// // // //             <div
// // // //               key={d.title}
// // // //               className="card p-6"
// // // //             >
// // // //               <p className="mb-2 font-display text-lg text-primary-dark">
// // // //                 {d.title}
// // // //               </p>

// // // //               <p className="text-sm leading-relaxed text-ink-soft">
// // // //                 {d.description}
// // // //               </p>
// // // //             </div>
// // // //           ))}

// // // //         </div>
// // // //       </Section>

// // // //       {/* =====================================================
// // // //           CONDITIONS
// // // //       ====================================================== */}

// // // //       <Section
// // // //         eyebrow="What brings people in"
// // // //         title="Support for what you're carrying"
// // // //       >

// // // //         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

// // // //           {conditions
// // // //             .slice(0, 8)
// // // //             .map((condition) => (
// // // //               <ConditionCard
// // // //                 key={condition.slug}
// // // //                 condition={condition}
// // // //               />
// // // //             ))}

// // // //         </div>

// // // //         <div className="mt-8">

// // // //           <Link
// // // //             href="/conditions"
// // // //             className="btn-outline inline-flex"
// // // //           >
// // // //             See all conditions we treat
// // // //           </Link>

// // // //         </div>

// // // //       </Section>

// // // //       {/* =====================================================
// // // //           ORGANISATIONS
// // // //       ====================================================== */}

// // // //       <section className="bg-primary-dark py-20 text-white md:py-28">

// // // //         <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[0.9fr_1.1fr] md:px-10">

// // // //           <div>

// // // //             <p className="eyebrow text-white/60">
// // // //               For Organisations
// // // //             </p>

// // // //             <h2 className="mt-5 max-w-xl text-4xl leading-tight text-white md:text-6xl">
// // // //               Healthier people. Stronger organisations.
// // // //             </h2>

// // // //           </div>

// // // //           <div className="max-w-xl">

// // // //             <p className="text-lg leading-relaxed text-white/70">
// // // //               Stress, burnout, and unresolved conflict do not stay contained
// // // //               to one individual. They can affect absenteeism, engagement, team
// // // //               dynamics, retention, and workplace culture.
// // // //             </p>

// // // //             <p className="mt-5 text-lg leading-relaxed text-white/70">
// // // //               We work with organisations across Navi Mumbai to provide
// // // //               structured psychological support through Employee Assistance
// // // //               Programs, workshops, leadership wellness, burnout prevention, and
// // // //               tailored corporate wellness solutions.
// // // //             </p>

// // // //             <Link
// // // //               href="/corporate-wellness-programs-navi-mumbai"
// // // //               className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-primary-dark transition hover:bg-white/90"
// // // //             >
// // // //               Explore Corporate Wellness →
// // // //             </Link>

// // // //           </div>

// // // //         </div>

// // // //       </section>

// // // //       {/* =====================================================
// // // //           EVENTS
// // // //       ====================================================== */}

// // // //       {displayedEvents.length > 0 && (

// // // //         <Section
// // // //           eyebrow={
// // // //             isShowingUpcomingEvents
// // // //               ? "Notices"
// // // //               : "From our community"
// // // //           }
// // // //           title={
// // // //             isShowingUpcomingEvents
// // // //               ? "Upcoming camps, outings & events"
// // // //               : "Previous camps, outings & events"
// // // //           }
// // // //         >

// // // //           <div className="grid gap-6 md:grid-cols-3">

// // // //             {displayedEvents.map((event) => (

// // // //               <div
// // // //                 key={event.id}
// // // //                 className="card flex flex-col overflow-hidden"
// // // //               >

// // // //                 {/* EVENT IMAGE */}

// // // //                 {event.imageUrl ? (

// // // //                   <div className="relative aspect-[4/3] w-full">

// // // //                     <Image
// // // //                       src={event.imageUrl}
// // // //                       alt={event.title}
// // // //                       fill
// // // //                       sizes="(min-width: 768px) 33vw, 100vw"
// // // //                       className="object-cover"
// // // //                     />

// // // //                   </div>

// // // //                 ) : (

// // // //                   <PlaceholderImage
// // // //                     label="Event"
// // // //                     className="aspect-[4/3] w-full"
// // // //                   />

// // // //                 )}

// // // //                 {/* EVENT CONTENT */}

// // // //                 <div className="flex flex-1 flex-col gap-2 p-6">

// // // //                   <p className="eyebrow">

// // // //                     {new Date(
// // // //                       `${event.date}T00:00:00`
// // // //                     ).toLocaleDateString(
// // // //                       "en-IN",
// // // //                       {
// // // //                         day: "numeric",
// // // //                         month: "short",
// // // //                         year: "numeric"
// // // //                       }
// // // //                     )}

// // // //                     {event.location && (
// // // //                       <>
// // // //                         {" · "}
// // // //                         {event.location}
// // // //                       </>
// // // //                     )}

// // // //                   </p>

// // // //                   <h3 className="font-display text-lg text-primary-dark">
// // // //                     {event.title}
// // // //                   </h3>

// // // //                   <p className="flex-1 text-sm leading-relaxed text-ink-soft">
// // // //                     {event.shortDescription}
// // // //                   </p>

// // // //                   {isShowingUpcomingEvents &&
// // // //                     event.registrationLink && (

// // // //                       <a
// // // //                         href={event.registrationLink}
// // // //                         target="_blank"
// // // //                         rel="noopener noreferrer"
// // // //                         className="mt-2 font-mono text-xs uppercase tracking-widest text-accent"
// // // //                       >
// // // //                         Reserve a spot →
// // // //                       </a>

// // // //                     )}

// // // //                 </div>

// // // //               </div>

// // // //             ))}

// // // //           </div>

// // // //         </Section>

// // // //       )}

// // // //       {/* =====================================================
// // // //           GALLERY
// // // //       ====================================================== */}

// // // //       {/* <Section
// // // //         eyebrow="Gallery"
// // // //         title="From past events"
// // // //         className="rounded-3xl bg-surface-soft/60"
// // // //       >

// // // //         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

// // // //           {galleryItems
// // // //             .slice(0, 6)
// // // //             .map((g, i) => (

// // // //               <div
// // // //                 key={i}
// // // //                 className="overflow-hidden rounded-2xl border border-primary/10"
// // // //               >

// // // //                 <PlaceholderImage
// // // //                   label={`${g.event}, ${g.year}`}
// // // //                   className="aspect-square w-full"
// // // //                 />

// // // //                 <p className="bg-surface px-4 py-3 text-sm text-ink-soft">
// // // //                   {g.caption}
// // // //                 </p>

// // // //               </div>

// // // //             ))}

// // // //         </div>

// // // //         <div className="mt-8">

// // // //           <Link
// // // //             href="/gallery"
// // // //             className="btn-outline inline-flex"
// // // //           >
// // // //             View our work
// // // //           </Link>

// // // //         </div>

// // // //       </Section> */}

// // // // <Section
// // // //   eyebrow="Gallery"
// // // //   title="From past events"
// // // //   className="rounded-3xl bg-surface-soft/60"
// // // // >
// // // //   {allPhotos.length === 0 ? (
// // // //     <p className="text-ink-soft">No gallery photos published yet.</p>
// // // //   ) : (
// // // //     <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
// // // //       {allPhotos.slice(0, 6).map((photo) => (
// // // //         <div key={photo.id} className="overflow-hidden rounded-2xl border border-primary/10">
// // // //           {photo.imageUrl ? (
// // // //             <div className="relative aspect-square w-full">
// // // //               <Image
// // // //                 src={photo.imageUrl}
// // // //                 alt={photo.caption ?? photo.album.heading}
// // // //                 fill
// // // //                 sizes="(max-width: 768px) 100vw, 33vw"
// // // //                 className="object-cover"
// // // //               />
// // // //             </div>
// // // //           ) : (
// // // //             <PlaceholderImage
// // // //               label={`${photo.album.event}, ${photo.album.year}`}
// // // //               className="aspect-square w-full"
// // // //             />
// // // //           )}
// // // //           <p className="bg-surface px-4 py-3 text-sm text-ink-soft">
// // // //             {photo.caption ?? photo.album.heading}
// // // //           </p>
// // // //         </div>
// // // //       ))}
// // // //     </div>
// // // //   )}

// // // //   <div className="mt-8">
// // // //     <Link href="/gallery" className="btn-outline inline-flex">
// // // //       View our work
// // // //     </Link>
// // // //   </div>
// // // // </Section>

// // // //       {/* =====================================================
// // // //           SCHEDULE A VISIT
// // // //       ====================================================== */}

// // // //       <Section
// // // //         eyebrow="Ready when you are"
// // // //         title="Schedule a visit"
// // // //       >

// // // //         <div className="card flex flex-col items-start justify-between gap-6 p-10 md:flex-row md:items-center">

// // // //           <p className="max-w-lg text-ink-soft">
// // // //             Sessions are available in person in Vashi, Navi Mumbai, and online.
// // // //             The first conversation is about understanding what you need —
// // // //             there&apos;s no pressure to commit beyond that.
// // // //           </p>

// // // //           <Link
// // // //             href="/contact"
// // // //             className="btn-primary whitespace-nowrap"
// // // //           >
// // // //             Schedule a visit
// // // //           </Link>

// // // //         </div>

// // // //       </Section>

// // // //     </>
// // // //   );
// // // // }



// // // import { getPublishedAlbums, getPhotosForAlbum, GalleryAlbum, GalleryPhoto } from "@/lib/firebase/gallery";
// // // import Link from "next/link";
// // // import Image from "next/image";
 
// // // import Hero from "@/components/Hero";
// // // import Section from "@/components/Section";
// // // import ConditionCard from "@/components/ConditionCard";
// // // import PlaceholderImage from "@/components/PlaceholderImage";
 
// // // import { conditions } from "@/lib/data/conditions";
// // // import { differentiators } from "@/lib/data/differentiators";
// // // import { site } from "@/lib/data/site";
// // // import { buildMetadata } from "@/lib/seo/metadata";
// // // import { getPublishedEvents } from "@/lib/firebase/events";
// // // import { EventItem } from "@/lib/data/types";
// // // import { getPublishedBlogPosts, BlogPost } from "@/lib/firebase/blogs";
 
 
 
 
// // // export const metadata = buildMetadata({
// // //   title: `${site.name} | Psychologist in Navi Mumbai`,
// // //   description: site.description,
// // //   path: "/"
// // // });
 
// // // // export default async function HomePage() {
// // // //   // let events = [];
// // // //   let events: EventItem[] = [];
 
// // // //   try {
// // // //     events = await getPublishedEvents();
// // // //   } catch (error) {
// // // //     console.error("Failed to fetch events:", error);
// // // //   }
 
// // // export default async function HomePage() {
// // //   let events: EventItem[] = [];
 
// // //   try {
// // //     events = await getPublishedEvents();
// // //   } catch (error) {
// // //     console.error("Failed to fetch events:", error);
// // //   }
 
// // //   console.log("RAW EVENTS FROM FIRESTORE:", JSON.stringify(events, null, 2));
 
// // //   let albums: GalleryAlbum[] = [];
// // // let photosByAlbum: Record<string, GalleryPhoto[]> = {};
 
// // // try {
// // //   albums = await getPublishedAlbums();
// // //   const photoLists = await Promise.all(albums.map((a) => getPhotosForAlbum(a.id)));
// // //   albums.forEach((a, i) => {
// // //     photosByAlbum[a.id] = photoLists[i];
// // //   });
// // // } catch (error) {
// // //   console.error("Failed to fetch gallery albums:", error);
// // // }
 
// // // // flatten into a single list of photos (with album context) for the homepage preview grid
// // // const allPhotos = albums.flatMap((album) =>
// // //   (photosByAlbum[album.id] ?? []).map((photo) => ({ ...photo, album }))
// // // );
 
// // // let blogPosts: BlogPost[] = [];
 
// // // try {
// // //   blogPosts = await getPublishedBlogPosts();
// // // } catch (error) {
// // //   console.error("Failed to fetch blog posts:", error);
// // // }
 
// // //   /*
// // //    * =====================================================
// // //    * SPLIT EVENTS INTO UPCOMING AND PREVIOUS
// // //    * =====================================================
// // //    */
 
// // //   const today = new Date();
 
// // //   today.setHours(0, 0, 0, 0);
 
// // //   const upcomingEvents = events.filter((event) => {
// // //     const eventDate = new Date(`${event.date}T00:00:00`);
 
// // //     return eventDate >= today;
// // //   });
 
// // //   const previousEvents = events
// // //     .filter((event) => {
// // //       const eventDate = new Date(`${event.date}T00:00:00`);
 
// // //       return eventDate < today;
// // //     })
// // //     .sort((a, b) => {
// // //       return (
// // //         new Date(`${b.date}T00:00:00`).getTime() -
// // //         new Date(`${a.date}T00:00:00`).getTime()
// // //       );
// // //     });
 
// // //   /*
// // //    * =====================================================
// // //    * SHOW UPCOMING EVENTS FIRST
// // //    * OTHERWISE SHOW PREVIOUS EVENTS
// // //    * =====================================================
// // //    */
 
// // //   const isShowingUpcomingEvents = upcomingEvents.length > 0;
 
// // //   const displayedEvents = isShowingUpcomingEvents
// // //     ? upcomingEvents
// // //     : previousEvents;
 
// // //   return (
// // //     <>
// // //       {/* =====================================================
// // //           HERO
// // //       ====================================================== */}
 
// // //       <Hero />
 
// // //       {/* =====================================================
// // //           ABOUT
// // //       ====================================================== */}
 
// // //       <Section
// // //         eyebrow="About us"
// // //         title="A practice built on discipline and care"
// // //       >
// // //         <div className="grid items-center gap-12 md:grid-cols-5">
 
// // //           <div className="md:col-span-2">
 
// // //             <div className="relative aspect-[4/5] w-full overflow-hidden rounded-organic border border-primary/10">
 
// // //               <Image
// // //                 src="/IMG_6121.jpg"
// // //                 alt={site.founder}
// // //                 fill
// // //                 sizes="(min-width: 768px) 40vw, 100vw"
// // //                 className="object-cover"
// // //                 priority
// // //               />
 
// // //             </div>
 
// // //             <p className="mt-4 font-display text-lg text-primary-dark">
// // //               {site.founder}
// // //             </p>
 
// // //             <p className="eyebrow mt-1">
// // //               {site.founderCredentials}
// // //             </p>
 
// // //           </div>
 
// // //           <div className="space-y-5 text-lg leading-relaxed text-ink-soft md:col-span-3">
 
// // //             <p>
// // //               {site.name} is led by {site.founder}, a{" "}
// // //               {site.founderCredentials.toLowerCase()}.
// // //               Two decades of structured, disciplined service before entering
// // //               full-time clinical practice shape the way sessions are run here —
// // //               methodical, unhurried, and focused on what actually helps.
// // //             </p>
 
// // //             <p>
// // //               The practice combines evidence-based talk therapy with clinical
// // //               hypnotherapy, recognised by the British Psychological Society,
// // //               offering a grounded path through anxiety, depression, trauma,
// // //               relationships and more.
// // //             </p>
 
// // //             <Link
// // //               href="/about/the-founder"
// // //               className="btn-outline inline-flex"
// // //             >
// // //               Read our full story
// // //             </Link>
 
// // //           </div>
 
// // //         </div>
// // //       </Section>
 
// // //       {/* =====================================================
// // //           WHY WE ARE DIFFERENT
// // //       ====================================================== */}
 
// // //       <Section
// // //         eyebrow="Why Chaitanya Raj"
// // //         title="What makes us different in Navi Mumbai"
// // //         className="rounded-3xl bg-surface-soft/60"
// // //       >
// // //         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
 
// // //           {differentiators.map((d) => (
// // //             <div
// // //               key={d.title}
// // //               className="card p-6"
// // //             >
// // //               <p className="mb-2 font-display text-lg text-primary-dark">
// // //                 {d.title}
// // //               </p>
 
// // //               <p className="text-sm leading-relaxed text-ink-soft">
// // //                 {d.description}
// // //               </p>
// // //             </div>
// // //           ))}
 
// // //         </div>
// // //       </Section>
 
// // //       {/* =====================================================
// // //           CONDITIONS
// // //       ====================================================== */}
 
// // //       <Section
// // //         eyebrow="What brings people in"
// // //         title="Support for what you're carrying"
// // //       >
 
// // //         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
 
// // //           {conditions
// // //             .slice(0, 8)
// // //             .map((condition) => (
// // //               <ConditionCard
// // //                 key={condition.slug}
// // //                 condition={condition}
// // //               />
// // //             ))}
 
// // //         </div>
 
// // //         <div className="mt-8">
 
// // //           <Link
// // //             href="/conditions"
// // //             className="btn-outline inline-flex"
// // //           >
// // //             See all conditions we treat
// // //           </Link>
 
// // //         </div>
 
// // //       </Section>
 
// // //       {/* =====================================================
// // //           ORGANISATIONS
// // //       ====================================================== */}
 
// // //       <section className="bg-primary-dark py-20 text-white md:py-28">
 
// // //         <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[0.9fr_1.1fr] md:px-10">
 
// // //           <div>
 
// // //             <p className="eyebrow text-white/60">
// // //               For Organisations
// // //             </p>
 
// // //             <h2 className="mt-5 max-w-xl text-4xl leading-tight text-white md:text-6xl">
// // //               Healthier people. Stronger organisations.
// // //             </h2>
 
// // //           </div>
 
// // //           <div className="max-w-xl">
 
// // //             <p className="text-lg leading-relaxed text-white/70">
// // //               Stress, burnout, and unresolved conflict do not stay contained
// // //               to one individual. They can affect absenteeism, engagement, team
// // //               dynamics, retention, and workplace culture.
// // //             </p>
 
// // //             <p className="mt-5 text-lg leading-relaxed text-white/70">
// // //               We work with organisations across Navi Mumbai to provide
// // //               structured psychological support through Employee Assistance
// // //               Programs, workshops, leadership wellness, burnout prevention, and
// // //               tailored corporate wellness solutions.
// // //             </p>
 
// // //             <Link
// // //               href="/corporate-wellness-programs-navi-mumbai"
// // //               className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-primary-dark transition hover:bg-white/90"
// // //             >
// // //               Explore Corporate Wellness →
// // //             </Link>
 
// // //           </div>
 
// // //         </div>
 
// // //       </section>
 
// // //       {/* =====================================================
// // //           EVENTS
// // //       ====================================================== */}
 
// // //       {displayedEvents.length > 0 && (
 
// // //         <Section
// // //           eyebrow={
// // //             isShowingUpcomingEvents
// // //               ? "Notices"
// // //               : "From our community"
// // //           }
// // //           title={
// // //             isShowingUpcomingEvents
// // //               ? "Upcoming camps, outings & events"
// // //               : "Previous camps, outings & events"
// // //           }
// // //         >
 
// // //           <div className="grid gap-6 md:grid-cols-3">
 
// // //             {displayedEvents.map((event) => (
 
// // //               <div
// // //                 key={event.id}
// // //                 className="card flex flex-col overflow-hidden"
// // //               >
 
// // //                 {/* EVENT IMAGE */}
 
// // //                 {event.imageUrl ? (
 
// // //                   <div className="relative aspect-[4/3] w-full">
 
// // //                     <Image
// // //                       src={event.imageUrl}
// // //                       alt={event.title}
// // //                       fill
// // //                       sizes="(min-width: 768px) 33vw, 100vw"
// // //                       className="object-cover"
// // //                     />
 
// // //                   </div>
 
// // //                 ) : (
 
// // //                   <PlaceholderImage
// // //                     label="Event"
// // //                     className="aspect-[4/3] w-full"
// // //                   />
 
// // //                 )}
 
// // //                 {/* EVENT CONTENT */}
 
// // //                 <div className="flex flex-1 flex-col gap-2 p-6">
 
// // //                   <p className="eyebrow">
 
// // //                     {new Date(
// // //                       `${event.date}T00:00:00`
// // //                     ).toLocaleDateString(
// // //                       "en-IN",
// // //                       {
// // //                         day: "numeric",
// // //                         month: "short",
// // //                         year: "numeric"
// // //                       }
// // //                     )}
 
// // //                     {event.location && (
// // //                       <>
// // //                         {" · "}
// // //                         {event.location}
// // //                       </>
// // //                     )}
 
// // //                   </p>
 
// // //                   <h3 className="font-display text-lg text-primary-dark">
// // //                     {event.title}
// // //                   </h3>
 
// // //                   <p className="flex-1 text-sm leading-relaxed text-ink-soft">
// // //                     {event.shortDescription}
// // //                   </p>
 
// // //                   {isShowingUpcomingEvents &&
// // //                     event.registrationLink && (
 
// // //                       <a
// // //                         href={event.registrationLink}
// // //                         target="_blank"
// // //                         rel="noopener noreferrer"
// // //                         className="mt-2 font-mono text-xs uppercase tracking-widest text-accent"
// // //                       >
// // //                         Reserve a spot →
// // //                       </a>
 
// // //                     )}
 
// // //                 </div>
 
// // //               </div>
 
// // //             ))}
 
// // //           </div>
 
// // //         </Section>
 
// // //       )}
 
// // //       {/* =====================================================
// // //           BLOG
// // //       ====================================================== */}
 
// // //       {blogPosts.length > 0 && (
 
// // //         <Section
// // //           eyebrow="From the blog"
// // //           title="Latest thoughts & articles"
// // //         >
 
// // //           <div className="grid gap-6 md:grid-cols-3">
 
// // //             {blogPosts.slice(0, 3).map((post) => (
 
// // //               <Link
// // //                 key={post.id}
// // //                 href={`/blog/${post.slug}`}
// // //                 className="card flex flex-col overflow-hidden"
// // //               >
 
// // //                 {post.coverImageUrl ? (
 
// // //                   <div className="relative aspect-[4/3] w-full">
 
// // //                     <Image
// // //                       src={post.coverImageUrl}
// // //                       alt={post.title}
// // //                       fill
// // //                       sizes="(min-width: 768px) 33vw, 100vw"
// // //                       className="object-cover"
// // //                     />
 
// // //                   </div>
 
// // //                 ) : (
 
// // //                   <PlaceholderImage
// // //                     label="Blog"
// // //                     className="aspect-[4/3] w-full"
// // //                   />
 
// // //                 )}
 
// // //                 <div className="flex flex-1 flex-col gap-2 p-6">
 
// // //                   <p className="eyebrow">
// // //                     {new Date(`${post.date}T00:00:00`).toLocaleDateString(
// // //                       "en-IN",
// // //                       {
// // //                         day: "numeric",
// // //                         month: "short",
// // //                         year: "numeric"
// // //                       }
// // //                     )}
// // //                   </p>
 
// // //                   <h3 className="font-display text-lg text-primary-dark">
// // //                     {post.title}
// // //                   </h3>
 
// // //                   <p className="flex-1 text-sm leading-relaxed text-ink-soft">
// // //                     {post.excerpt}
// // //                   </p>
 
// // //                   <span className="mt-2 font-mono text-xs uppercase tracking-widest text-accent">
// // //                     Read more →
// // //                   </span>
 
// // //                 </div>
 
// // //               </Link>
 
// // //             ))}
 
// // //           </div>
 
// // //           <div className="mt-8">
 
// // //             <Link
// // //               href="/blog"
// // //               className="btn-outline inline-flex"
// // //             >
// // //               View all articles
// // //             </Link>
 
// // //           </div>
 
// // //         </Section>
 
// // //       )}
 
// // //       {/* =====================================================
// // //           GALLERY
// // //       ====================================================== */}
 
// // //       {/* <Section
// // //         eyebrow="Gallery"
// // //         title="From past events"
// // //         className="rounded-3xl bg-surface-soft/60"
// // //       >
 
// // //         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
 
// // //           {galleryItems
// // //             .slice(0, 6)
// // //             .map((g, i) => (
 
// // //               <div
// // //                 key={i}
// // //                 className="overflow-hidden rounded-2xl border border-primary/10"
// // //               >
 
// // //                 <PlaceholderImage
// // //                   label={`${g.event}, ${g.year}`}
// // //                   className="aspect-square w-full"
// // //                 />
 
// // //                 <p className="bg-surface px-4 py-3 text-sm text-ink-soft">
// // //                   {g.caption}
// // //                 </p>
 
// // //               </div>
 
// // //             ))}
 
// // //         </div>
 
// // //         <div className="mt-8">
 
// // //           <Link
// // //             href="/gallery"
// // //             className="btn-outline inline-flex"
// // //           >
// // //             View our work
// // //           </Link>
 
// // //         </div>
 
// // //       </Section> */}
 
// // // <Section
// // //   eyebrow="Gallery"
// // //   title="From past events"
// // //   className="rounded-3xl bg-surface-soft/60"
// // // >
// // //   {allPhotos.length === 0 ? (
// // //     <p className="text-ink-soft">No gallery photos published yet.</p>
// // //   ) : (
// // //     <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
// // //       {allPhotos.slice(0, 6).map((photo) => (
// // //         <div key={photo.id} className="overflow-hidden rounded-2xl border border-primary/10">
// // //           {photo.imageUrl ? (
// // //             <div className="relative aspect-square w-full">
// // //               <Image
// // //                 src={photo.imageUrl}
// // //                 alt={photo.caption ?? photo.album.heading}
// // //                 fill
// // //                 sizes="(max-width: 768px) 100vw, 33vw"
// // //                 className="object-cover"
// // //               />
// // //             </div>
// // //           ) : (
// // //             <PlaceholderImage
// // //               label={`${photo.album.event}, ${photo.album.year}`}
// // //               className="aspect-square w-full"
// // //             />
// // //           )}
// // //           <p className="bg-surface px-4 py-3 text-sm text-ink-soft">
// // //             {photo.caption ?? photo.album.heading}
// // //           </p>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   )}
 
// // //   <div className="mt-8">
// // //     <Link href="/gallery" className="btn-outline inline-flex">
// // //       View our work
// // //     </Link>
// // //   </div>
// // // </Section>
 
// // //       {/* =====================================================
// // //           SCHEDULE A VISIT
// // //       ====================================================== */}
 
// // //       <Section
// // //         eyebrow="Ready when you are"
// // //         title="Schedule a visit"
// // //       >
 
// // //         <div className="card flex flex-col items-start justify-between gap-6 p-10 md:flex-row md:items-center">
 
// // //           <p className="max-w-lg text-ink-soft">
// // //             Sessions are available in person in Vashi, Navi Mumbai, and online.
// // //             The first conversation is about understanding what you need —
// // //             there&apos;s no pressure to commit beyond that.
// // //           </p>
 
// // //           <Link
// // //             href="/contact"
// // //             className="btn-primary whitespace-nowrap"
// // //           >
// // //             Schedule a visit
// // //           </Link>
 
// // //         </div>
 
// // //       </Section>
 
// // //     </>
// // //   );
// // // }



// // import { getPublishedAlbums, getPhotosForAlbum, GalleryAlbum, GalleryPhoto } from "@/lib/firebase/gallery";
// // import Link from "next/link";
// // import Image from "next/image";
 
// // import Hero from "@/components/Hero";
// // import Section from "@/components/Section";
// // import ConditionCard from "@/components/ConditionCard";
// // import PlaceholderImage from "@/components/PlaceholderImage";
 
// // import { conditions } from "@/lib/data/conditions";
// // import { differentiators } from "@/lib/data/differentiators";
// // import { site } from "@/lib/data/site";
// // import { buildMetadata } from "@/lib/seo/metadata";
// // import { getPublishedEvents } from "@/lib/firebase/events";
// // import { EventItem } from "@/lib/data/types";
// // import { getPublishedPosts, BlogPost } from "@/lib/firebase/blogs";
 
 
 
 
// // export const metadata = buildMetadata({
// //   title: `${site.name} | Psychologist in Navi Mumbai`,
// //   description: site.description,
// //   path: "/"
// // });
 
// // // export default async function HomePage() {
// // //   // let events = [];
// // //   let events: EventItem[] = [];
 
// // //   try {
// // //     events = await getPublishedEvents();
// // //   } catch (error) {
// // //     console.error("Failed to fetch events:", error);
// // //   }
 
// // export default async function HomePage() {
// //   let events: EventItem[] = [];
 
// //   try {
// //     events = await getPublishedEvents();
// //   } catch (error) {
// //     console.error("Failed to fetch events:", error);
// //   }
 
// //   console.log("RAW EVENTS FROM FIRESTORE:", JSON.stringify(events, null, 2));
 
// //   let albums: GalleryAlbum[] = [];
// // let photosByAlbum: Record<string, GalleryPhoto[]> = {};
 
// // try {
// //   albums = await getPublishedAlbums();
// //   const photoLists = await Promise.all(albums.map((a) => getPhotosForAlbum(a.id)));
// //   albums.forEach((a, i) => {
// //     photosByAlbum[a.id] = photoLists[i];
// //   });
// // } catch (error) {
// //   console.error("Failed to fetch gallery albums:", error);
// // }
 
// // // flatten into a single list of photos (with album context) for the homepage preview grid
// // const allPhotos = albums.flatMap((album) =>
// //   (photosByAlbum[album.id] ?? []).map((photo) => ({ ...photo, album }))
// // );
 
// // let blogPosts: BlogPost[] = [];
 
// // try {
// //   blogPosts = await getPublishedPosts();
// // } catch (error) {
// //   console.error("Failed to fetch blog posts:", error);
// // }
 
// //   /*
// //    * =====================================================
// //    * SPLIT EVENTS INTO UPCOMING AND PREVIOUS
// //    * =====================================================
// //    */
 
// //   const today = new Date();
 
// //   today.setHours(0, 0, 0, 0);
 
// //   const upcomingEvents = events.filter((event) => {
// //     const eventDate = new Date(`${event.date}T00:00:00`);
 
// //     return eventDate >= today;
// //   });
 
// //   const previousEvents = events
// //     .filter((event) => {
// //       const eventDate = new Date(`${event.date}T00:00:00`);
 
// //       return eventDate < today;
// //     })
// //     .sort((a, b) => {
// //       return (
// //         new Date(`${b.date}T00:00:00`).getTime() -
// //         new Date(`${a.date}T00:00:00`).getTime()
// //       );
// //     });
 
// //   /*
// //    * =====================================================
// //    * SHOW UPCOMING EVENTS FIRST
// //    * OTHERWISE SHOW PREVIOUS EVENTS
// //    * =====================================================
// //    */
 
// //   const isShowingUpcomingEvents = upcomingEvents.length > 0;
 
// //   const displayedEvents = isShowingUpcomingEvents
// //     ? upcomingEvents
// //     : previousEvents;
 
// //   return (
// //     <>
// //       {/* =====================================================
// //           HERO
// //       ====================================================== */}
 
// //       <Hero />
 
// //       {/* =====================================================
// //           ABOUT
// //       ====================================================== */}
 
// //       <Section
// //         eyebrow="About us"
// //         title="A practice built on discipline and care"
// //       >
// //         <div className="grid items-center gap-12 md:grid-cols-5">
 
// //           <div className="md:col-span-2">
 
// //             <div className="relative aspect-[4/5] w-full overflow-hidden rounded-organic border border-primary/10">
 
// //               <Image
// //                 src="/IMG_6121.jpg"
// //                 alt={site.founder}
// //                 fill
// //                 sizes="(min-width: 768px) 40vw, 100vw"
// //                 className="object-cover"
// //                 priority
// //               />
 
// //             </div>
 
// //             <p className="mt-4 font-display text-lg text-primary-dark">
// //               {site.founder}
// //             </p>
 
// //             <p className="eyebrow mt-1">
// //               {site.founderCredentials}
// //             </p>
 
// //           </div>
 
// //           <div className="space-y-5 text-lg leading-relaxed text-ink-soft md:col-span-3">
 
// //             <p>
// //               {site.name} is led by {site.founder}, a{" "}
// //               {site.founderCredentials.toLowerCase()}.
// //               Two decades of structured, disciplined service before entering
// //               full-time clinical practice shape the way sessions are run here —
// //               methodical, unhurried, and focused on what actually helps.
// //             </p>
 
// //             <p>
// //               The practice combines evidence-based talk therapy with clinical
// //               hypnotherapy, recognised by the British Psychological Society,
// //               offering a grounded path through anxiety, depression, trauma,
// //               relationships and more.
// //             </p>
 
// //             <Link
// //               href="/about/the-founder"
// //               className="btn-outline inline-flex"
// //             >
// //               Read our full story
// //             </Link>
 
// //           </div>
 
// //         </div>
// //       </Section>
 
// //       {/* =====================================================
// //           WHY WE ARE DIFFERENT
// //       ====================================================== */}
 
// //       <Section
// //         eyebrow="Why Chaitanya Raj"
// //         title="What makes us different in Navi Mumbai"
// //         className="rounded-3xl bg-surface-soft/60"
// //       >
// //         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
 
// //           {differentiators.map((d) => (
// //             <div
// //               key={d.title}
// //               className="card p-6"
// //             >
// //               <p className="mb-2 font-display text-lg text-primary-dark">
// //                 {d.title}
// //               </p>
 
// //               <p className="text-sm leading-relaxed text-ink-soft">
// //                 {d.description}
// //               </p>
// //             </div>
// //           ))}
 
// //         </div>
// //       </Section>
 
// //       {/* =====================================================
// //           CONDITIONS
// //       ====================================================== */}
 
// //       <Section
// //         eyebrow="What brings people in"
// //         title="Support for what you're carrying"
// //       >
 
// //         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
 
// //           {conditions
// //             .slice(0, 8)
// //             .map((condition) => (
// //               <ConditionCard
// //                 key={condition.slug}
// //                 condition={condition}
// //               />
// //             ))}
 
// //         </div>
 
// //         <div className="mt-8">
 
// //           <Link
// //             href="/conditions"
// //             className="btn-outline inline-flex"
// //           >
// //             See all conditions we treat
// //           </Link>
 
// //         </div>
 
// //       </Section>
 
// //       {/* =====================================================
// //           ORGANISATIONS
// //       ====================================================== */}
 
// //       <section className="bg-primary-dark py-20 text-white md:py-28">
 
// //         <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[0.9fr_1.1fr] md:px-10">
 
// //           <div>
 
// //             <p className="eyebrow text-white/60">
// //               For Organisations
// //             </p>
 
// //             <h2 className="mt-5 max-w-xl text-4xl leading-tight text-white md:text-6xl">
// //               Healthier people. Stronger organisations.
// //             </h2>
 
// //           </div>
 
// //           <div className="max-w-xl">
 
// //             <p className="text-lg leading-relaxed text-white/70">
// //               Stress, burnout, and unresolved conflict do not stay contained
// //               to one individual. They can affect absenteeism, engagement, team
// //               dynamics, retention, and workplace culture.
// //             </p>
 
// //             <p className="mt-5 text-lg leading-relaxed text-white/70">
// //               We work with organisations across Navi Mumbai to provide
// //               structured psychological support through Employee Assistance
// //               Programs, workshops, leadership wellness, burnout prevention, and
// //               tailored corporate wellness solutions.
// //             </p>
 
// //             <Link
// //               href="/corporate-wellness-programs-navi-mumbai"
// //               className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-primary-dark transition hover:bg-white/90"
// //             >
// //               Explore Corporate Wellness →
// //             </Link>
 
// //           </div>
 
// //         </div>
 
// //       </section>
 
// //       {/* =====================================================
// //           EVENTS
// //       ====================================================== */}
 
// //       {displayedEvents.length > 0 && (
 
// //         <Section
// //           eyebrow={
// //             isShowingUpcomingEvents
// //               ? "Notices"
// //               : "From our community"
// //           }
// //           title={
// //             isShowingUpcomingEvents
// //               ? "Upcoming camps, outings & events"
// //               : "Previous camps, outings & events"
// //           }
// //         >
 
// //           <div className="grid gap-6 md:grid-cols-3">
 
// //             {displayedEvents.map((event) => (
 
// //               <div
// //                 key={event.id}
// //                 className="card flex flex-col overflow-hidden"
// //               >
 
// //                 {/* EVENT IMAGE */}
 
// //                 {event.imageUrl ? (
 
// //                   <div className="relative aspect-[4/3] w-full">
 
// //                     <Image
// //                       src={event.imageUrl}
// //                       alt={event.title}
// //                       fill
// //                       sizes="(min-width: 768px) 33vw, 100vw"
// //                       className="object-cover"
// //                     />
 
// //                   </div>
 
// //                 ) : (
 
// //                   <PlaceholderImage
// //                     label="Event"
// //                     className="aspect-[4/3] w-full"
// //                   />
 
// //                 )}
 
// //                 {/* EVENT CONTENT */}
 
// //                 <div className="flex flex-1 flex-col gap-2 p-6">
 
// //                   <p className="eyebrow">
 
// //                     {new Date(
// //                       `${event.date}T00:00:00`
// //                     ).toLocaleDateString(
// //                       "en-IN",
// //                       {
// //                         day: "numeric",
// //                         month: "short",
// //                         year: "numeric"
// //                       }
// //                     )}
 
// //                     {event.location && (
// //                       <>
// //                         {" · "}
// //                         {event.location}
// //                       </>
// //                     )}
 
// //                   </p>
 
// //                   <h3 className="font-display text-lg text-primary-dark">
// //                     {event.title}
// //                   </h3>
 
// //                   <p className="flex-1 text-sm leading-relaxed text-ink-soft">
// //                     {event.shortDescription}
// //                   </p>
 
// //                   {isShowingUpcomingEvents &&
// //                     event.registrationLink && (
 
// //                       <a
// //                         href={event.registrationLink}
// //                         target="_blank"
// //                         rel="noopener noreferrer"
// //                         className="mt-2 font-mono text-xs uppercase tracking-widest text-accent"
// //                       >
// //                         Reserve a spot →
// //                       </a>
 
// //                     )}
 
// //                 </div>
 
// //               </div>
 
// //             ))}
 
// //           </div>
 
// //         </Section>
 
// //       )}
 
// //       {/* =====================================================
// //           BLOG
// //       ====================================================== */}
 
// //       {blogPosts.length > 0 && (
 
// //         <Section
// //           eyebrow="From the blog"
// //           title="Latest thoughts & articles"
// //         >
 
// //           <div className="grid gap-6 md:grid-cols-3">
 
// //             {blogPosts.slice(0, 3).map((post) => (
 
// //               <Link
// //                 key={post.id}
// //                 href={`/blog/${post.slug}`}
// //                 className="card flex flex-col overflow-hidden"
// //               >
 
// //                 {post.coverImageUrl ? (
 
// //                   <div className="relative aspect-[4/3] w-full">
 
// //                     <Image
// //                       src={post.coverImageUrl}
// //                       alt={post.title}
// //                       fill
// //                       sizes="(min-width: 768px) 33vw, 100vw"
// //                       className="object-cover"
// //                     />
 
// //                   </div>
 
// //                 ) : (
 
// //                   <PlaceholderImage
// //                     label="Blog"
// //                     className="aspect-[4/3] w-full"
// //                   />
 
// //                 )}
 
// //                 <div className="flex flex-1 flex-col gap-2 p-6">
 
// //                   <p className="eyebrow">
// //                     {new Date(`${post.publishedDate}T00:00:00`).toLocaleDateString(
// //                       "en-IN",
// //                       {
// //                         day: "numeric",
// //                         month: "short",
// //                         year: "numeric"
// //                       }
// //                     )}
// //                   </p>
 
// //                   <h3 className="font-display text-lg text-primary-dark">
// //                     {post.title}
// //                   </h3>
 
// //                   <p className="flex-1 text-sm leading-relaxed text-ink-soft">
// //                     {post.excerpt}
// //                   </p>
 
// //                   <span className="mt-2 font-mono text-xs uppercase tracking-widest text-accent">
// //                     Read more →
// //                   </span>
 
// //                 </div>
 
// //               </Link>
 
// //             ))}
 
// //           </div>
 
// //           <div className="mt-8">
 
// //             <Link
// //               href="/blog"
// //               className="btn-outline inline-flex"
// //             >
// //               View all articles
// //             </Link>
 
// //           </div>
 
// //         </Section>
 
// //       )}
 
// //       {/* =====================================================
// //           GALLERY
// //       ====================================================== */}
 
// //       {/* <Section
// //         eyebrow="Gallery"
// //         title="From past events"
// //         className="rounded-3xl bg-surface-soft/60"
// //       >
 
// //         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
 
// //           {galleryItems
// //             .slice(0, 6)
// //             .map((g, i) => (
 
// //               <div
// //                 key={i}
// //                 className="overflow-hidden rounded-2xl border border-primary/10"
// //               >
 
// //                 <PlaceholderImage
// //                   label={`${g.event}, ${g.year}`}
// //                   className="aspect-square w-full"
// //                 />
 
// //                 <p className="bg-surface px-4 py-3 text-sm text-ink-soft">
// //                   {g.caption}
// //                 </p>
 
// //               </div>
 
// //             ))}
 
// //         </div>
 
// //         <div className="mt-8">
 
// //           <Link
// //             href="/gallery"
// //             className="btn-outline inline-flex"
// //           >
// //             View our work
// //           </Link>
 
// //         </div>
 
// //       </Section> */}
 
// // <Section
// //   eyebrow="Gallery"
// //   title="From past events"
// //   className="rounded-3xl bg-surface-soft/60"
// // >
// //   {allPhotos.length === 0 ? (
// //     <p className="text-ink-soft">No gallery photos published yet.</p>
// //   ) : (
// //     <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
// //       {allPhotos.slice(0, 6).map((photo) => (
// //         <div key={photo.id} className="overflow-hidden rounded-2xl border border-primary/10">
// //           {photo.imageUrl ? (
// //             <div className="relative aspect-square w-full">
// //               <Image
// //                 src={photo.imageUrl}
// //                 alt={photo.caption ?? photo.album.heading}
// //                 fill
// //                 sizes="(max-width: 768px) 100vw, 33vw"
// //                 className="object-cover"
// //               />
// //             </div>
// //           ) : (
// //             <PlaceholderImage
// //               label={`${photo.album.event}, ${photo.album.year}`}
// //               className="aspect-square w-full"
// //             />
// //           )}
// //           <p className="bg-surface px-4 py-3 text-sm text-ink-soft">
// //             {photo.caption ?? photo.album.heading}
// //           </p>
// //         </div>
// //       ))}
// //     </div>
// //   )}
 
// //   <div className="mt-8">
// //     <Link href="/gallery" className="btn-outline inline-flex">
// //       View our work
// //     </Link>
// //   </div>
// // </Section>
 
// //       {/* =====================================================
// //           SCHEDULE A VISIT
// //       ====================================================== */}
 
// //       <Section
// //         eyebrow="Ready when you are"
// //         title="Schedule a visit"
// //       >
 
// //         <div className="card flex flex-col items-start justify-between gap-6 p-10 md:flex-row md:items-center">
 
// //           <p className="max-w-lg text-ink-soft">
// //             Sessions are available in person in Vashi, Navi Mumbai, and online.
// //             The first conversation is about understanding what you need —
// //             there&apos;s no pressure to commit beyond that.
// //           </p>
 
// //           <Link
// //             href="/contact"
// //             className="btn-primary whitespace-nowrap"
// //           >
// //             Schedule a visit
// //           </Link>
 
// //         </div>
 
// //       </Section>
 
// //     </>
// //   );
// // }



// import { getPublishedAlbums, getPhotosForAlbum, GalleryAlbum, GalleryPhoto } from "@/lib/firebase/gallery";
// import Link from "next/link";
// import Image from "next/image";
 
// import Hero from "@/components/Hero";
// import Section from "@/components/Section";
// import ConditionCard from "@/components/ConditionCard";
// import PlaceholderImage from "@/components/PlaceholderImage";
 
// import { conditions } from "@/lib/data/conditions";
// import { differentiators } from "@/lib/data/differentiators";
// import { site } from "@/lib/data/site";
// import { buildMetadata } from "@/lib/seo/metadata";
// import { getPublishedEvents } from "@/lib/firebase/events";
// import { EventItem } from "@/lib/data/types";
// import { getPublishedPosts, BlogPost } from "@/lib/firebase/blogs";
 
 
 
 
// export const metadata = buildMetadata({
//   title: `${site.name} | Psychologist in Navi Mumbai`,
//   description: site.description,
//   path: "/"
// });
 
// export default async function HomePage() {
//   let events: EventItem[] = [];
 
//   try {
//     events = await getPublishedEvents();
//   } catch (error) {
//     console.error("Failed to fetch events:", error);
//   }
 
//   console.log("RAW EVENTS FROM FIRESTORE:", JSON.stringify(events, null, 2));
 
//   let albums: GalleryAlbum[] = [];
// let photosByAlbum: Record<string, GalleryPhoto[]> = {};
 
// try {
//   albums = await getPublishedAlbums();
//   const photoLists = await Promise.all(albums.map((a) => getPhotosForAlbum(a.id)));
//   albums.forEach((a, i) => {
//     photosByAlbum[a.id] = photoLists[i];
//   });
// } catch (error) {
//   console.error("Failed to fetch gallery albums:", error);
// }
 
// // flatten into a single list of photos (with album context) for the homepage preview grid
// const allPhotos = albums.flatMap((album) =>
//   (photosByAlbum[album.id] ?? []).map((photo) => ({ ...photo, album }))
// );
 
// let blogPosts: BlogPost[] = [];
 
// try {
//   blogPosts = await getPublishedPosts();
// } catch (error) {
//   console.error("Failed to fetch blog posts:", error);
// }
 
//   /*
//    * =====================================================
//    * SPLIT EVENTS INTO UPCOMING AND PREVIOUS
//    * =====================================================
//    */
 
//   const today = new Date();
 
//   today.setHours(0, 0, 0, 0);
 
//   const upcomingEvents = events.filter((event) => {
//     const eventDate = new Date(`${event.date}T00:00:00`);
 
//     return eventDate >= today;
//   });
 
//   const previousEvents = events
//     .filter((event) => {
//       const eventDate = new Date(`${event.date}T00:00:00`);
 
//       return eventDate < today;
//     })
//     .sort((a, b) => {
//       return (
//         new Date(`${b.date}T00:00:00`).getTime() -
//         new Date(`${a.date}T00:00:00`).getTime()
//       );
//     });
 
//   /*
//    * =====================================================
//    * SHOW UPCOMING EVENTS FIRST
//    * OTHERWISE SHOW PREVIOUS EVENTS
//    * =====================================================
//    */
 
//   const isShowingUpcomingEvents = upcomingEvents.length > 0;
 
//   const displayedEvents = isShowingUpcomingEvents
//     ? upcomingEvents
//     : previousEvents;
 
//   return (
//     <>
//       {/* =====================================================
//           HERO
//       ====================================================== */}
 
//       <Hero />
 
//       {/* =====================================================
//           ABOUT
//       ====================================================== */}
 
//       <div id="about" className="scroll-mt-24">
//         <Section
//           eyebrow="About us"
//           title="A practice built on discipline and care"
//         >
//           <div className="grid items-center gap-12 md:grid-cols-5">

//             <div className="md:col-span-2">

//               <div className="relative aspect-[4/5] w-full overflow-hidden rounded-organic border border-primary/10">

//                 <Image
//                   src="/IMG_6121.jpg"
//                   alt={site.founder}
//                   fill
//                   sizes="(min-width: 768px) 40vw, 100vw"
//                   className="object-cover"
//                   priority
//                 />

//               </div>

//               <p className="mt-4 font-display text-lg text-primary-dark">
//                 {site.founder}
//               </p>

//               <p className="eyebrow mt-1">
//                 {site.founderCredentials}
//               </p>

//             </div>

//             <div className="space-y-5 text-lg leading-relaxed text-ink-soft md:col-span-3">

//               <p>
//                 {site.name} is led by {site.founder}, a{" "}
//                 {site.founderCredentials.toLowerCase()}.
//                 Two decades of structured, disciplined service before entering
//                 full-time clinical practice shape the way sessions are run here —
//                 methodical, unhurried, and focused on what actually helps.
//               </p>

//               <p>
//                 The practice combines evidence-based talk therapy with clinical
//                 hypnotherapy, recognised by the British Psychological Society,
//                 offering a grounded path through anxiety, depression, trauma,
//                 relationships and more.
//               </p>

//               <Link
//                 href="/about/the-founder"
//                 className="btn-outline inline-flex"
//               >
//                 Read our full story
//               </Link>

//             </div>

//           </div>
//         </Section>
//       </div>
 
//       {/* =====================================================
//           WHY WE ARE DIFFERENT
//       ====================================================== */}
 
//       <Section
//         eyebrow="Why Chaitanya Raj"
//         title="What makes us different in Navi Mumbai"
//         className="rounded-3xl bg-surface-soft/60"
//       >
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
 
//           {differentiators.map((d) => (
//             <div
//               key={d.title}
//               className="card p-6"
//             >
//               <p className="mb-2 font-display text-lg text-primary-dark">
//                 {d.title}
//               </p>
 
//               <p className="text-sm leading-relaxed text-ink-soft">
//                 {d.description}
//               </p>
//             </div>
//           ))}
 
//         </div>
//       </Section>
 
//       {/* =====================================================
//           CONDITIONS
//       ====================================================== */}
 
//       <Section
//         eyebrow="What brings people in"
//         title="Support for what you're carrying"
//       >
 
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
 
//           {conditions
//             .slice(0, 8)
//             .map((condition) => (
//               <ConditionCard
//                 key={condition.slug}
//                 condition={condition}
//               />
//             ))}
 
//         </div>
 
//         <div className="mt-8">
 
//           <Link
//             href="/conditions"
//             className="btn-outline inline-flex"
//           >
//             See all conditions we treat
//           </Link>
 
//         </div>
 
//       </Section>
 
//       {/* =====================================================
//           ORGANISATIONS
//       ====================================================== */}
 
//       <section className="bg-primary-dark py-20 text-white md:py-28">
 
//         <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[0.9fr_1.1fr] md:px-10">
 
//           <div>
 
//             <p className="eyebrow text-white/60">
//               For Organisations
//             </p>
 
//             <h2 className="mt-5 max-w-xl text-4xl leading-tight text-white md:text-6xl">
//               Healthier people. Stronger organisations.
//             </h2>
 
//           </div>
 
//           <div className="max-w-xl">
 
//             <p className="text-lg leading-relaxed text-white/70">
//               Stress, burnout, and unresolved conflict do not stay contained
//               to one individual. They can affect absenteeism, engagement, team
//               dynamics, retention, and workplace culture.
//             </p>
 
//             <p className="mt-5 text-lg leading-relaxed text-white/70">
//               We work with organisations across Navi Mumbai to provide
//               structured psychological support through Employee Assistance
//               Programs, workshops, leadership wellness, burnout prevention, and
//               tailored corporate wellness solutions.
//             </p>
 
//             <Link
//               href="/corporate-wellness-programs-navi-mumbai"
//               className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-primary-dark transition hover:bg-white/90"
//             >
//               Explore Corporate Wellness →
//             </Link>
 
//           </div>
 
//         </div>
 
//       </section>
 
//       {/* =====================================================
//           EVENTS
//       ====================================================== */}
 
//       {displayedEvents.length > 0 && (
 
//         <Section
//           eyebrow={
//             isShowingUpcomingEvents
//               ? "Notices"
//               : "From our community"
//           }
//           title={
//             isShowingUpcomingEvents
//               ? "Upcoming camps, outings & events"
//               : "Previous camps, outings & events"
//           }
//         >
 
//           <div className="grid gap-6 md:grid-cols-3">
 
//             {displayedEvents.map((event) => (
 
//               <div
//                 key={event.id}
//                 className="card flex flex-col overflow-hidden"
//               >
 
//                 {/* EVENT IMAGE */}
 
//                 {event.imageUrl ? (
 
//                   <div className="relative aspect-[4/3] w-full">
 
//                     <Image
//                       src={event.imageUrl}
//                       alt={event.title}
//                       fill
//                       sizes="(min-width: 768px) 33vw, 100vw"
//                       className="object-cover"
//                     />
 
//                   </div>
 
//                 ) : (
 
//                   <PlaceholderImage
//                     label="Event"
//                     className="aspect-[4/3] w-full"
//                   />
 
//                 )}
 
//                 {/* EVENT CONTENT */}
 
//                 <div className="flex flex-1 flex-col gap-2 p-6">
 
//                   <p className="eyebrow">
 
//                     {new Date(
//                       `${event.date}T00:00:00`
//                     ).toLocaleDateString(
//                       "en-IN",
//                       {
//                         day: "numeric",
//                         month: "short",
//                         year: "numeric"
//                       }
//                     )}
 
//                     {event.location && (
//                       <>
//                         {" · "}
//                         {event.location}
//                       </>
//                     )}
 
//                   </p>
 
//                   <h3 className="font-display text-lg text-primary-dark">
//                     {event.title}
//                   </h3>
 
//                   <p className="flex-1 text-sm leading-relaxed text-ink-soft">
//                     {event.shortDescription}
//                   </p>
 
//                   {isShowingUpcomingEvents &&
//                     event.registrationLink && (
 
                      
//                         href={event.registrationLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="mt-2 font-mono text-xs uppercase tracking-widest text-accent"
//                       >
//                         Reserve a spot →
//                       </a>
 
//                     )}
 
//                 </div>
 
//               </div>
 
//             ))}
 
//           </div>
 
//         </Section>
 
//       )}
 
//       {/* =====================================================
//           BLOG
//       ====================================================== */}
 
//       {blogPosts.length > 0 && (
 
//         <Section
//           eyebrow="From the blog"
//           title="Latest thoughts & articles"
//         >
 
//           <div className="grid gap-6 md:grid-cols-3">
 
//             {blogPosts.slice(0, 3).map((post) => (
 
//               <Link
//                 key={post.id}
//                 href={`/blog/${post.slug}`}
//                 className="card flex flex-col overflow-hidden"
//               >
 
//                 {post.coverImageUrl ? (
 
//                   <div className="relative aspect-[4/3] w-full">
 
//                     <Image
//                       src={post.coverImageUrl}
//                       alt={post.title}
//                       fill
//                       sizes="(min-width: 768px) 33vw, 100vw"
//                       className="object-cover"
//                     />
 
//                   </div>
 
//                 ) : (
 
//                   <PlaceholderImage
//                     label="Blog"
//                     className="aspect-[4/3] w-full"
//                   />
 
//                 )}
 
//                 <div className="flex flex-1 flex-col gap-2 p-6">
 
//                   <p className="eyebrow">
//                     {new Date(`${post.publishedDate}T00:00:00`).toLocaleDateString(
//                       "en-IN",
//                       {
//                         day: "numeric",
//                         month: "short",
//                         year: "numeric"
//                       }
//                     )}
//                   </p>
 
//                   <h3 className="font-display text-lg text-primary-dark">
//                     {post.title}
//                   </h3>
 
//                   <p className="flex-1 text-sm leading-relaxed text-ink-soft">
//                     {post.excerpt}
//                   </p>
 
//                   <span className="mt-2 font-mono text-xs uppercase tracking-widest text-accent">
//                     Read more →
//                   </span>
 
//                 </div>
 
//               </Link>
 
//             ))}
 
//           </div>
 
//           <div className="mt-8">
 
//             <Link
//               href="/blog"
//               className="btn-outline inline-flex"
//             >
//               View all articles
//             </Link>
 
//           </div>
 
//         </Section>
 
//       )}
 
//       {/* =====================================================
//           GALLERY
//       ====================================================== */}
 
// <Section
//   eyebrow="Gallery"
//   title="From past events"
//   className="rounded-3xl bg-surface-soft/60"
// >
//   {allPhotos.length === 0 ? (
//     <p className="text-ink-soft">No gallery photos published yet.</p>
//   ) : (
//     <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//       {allPhotos.slice(0, 6).map((photo) => (
//         <div key={photo.id} className="overflow-hidden rounded-2xl border border-primary/10">
//           {photo.imageUrl ? (
//             <div className="relative aspect-square w-full">
//               <Image
//                 src={photo.imageUrl}
//                 alt={photo.caption ?? photo.album.heading}
//                 fill
//                 sizes="(max-width: 768px) 100vw, 33vw"
//                 className="object-cover"
//               />
//             </div>
//           ) : (
//             <PlaceholderImage
//               label={`${photo.album.event}, ${photo.album.year}`}
//               className="aspect-square w-full"
//             />
//           )}
//           <p className="bg-surface px-4 py-3 text-sm text-ink-soft">
//             {photo.caption ?? photo.album.heading}
//           </p>
//         </div>
//       ))}
//     </div>
//   )}
 
//   <div className="mt-8">
//     <Link href="/gallery" className="btn-outline inline-flex">
//       View our work
//     </Link>
//   </div>
// </Section>
 
//       {/* =====================================================
//           SCHEDULE A VISIT
//       ====================================================== */}
 
//       <Section
//         eyebrow="Ready when you are"
//         title="Schedule a visit"
//       >
 
//         <div className="card flex flex-col items-start justify-between gap-6 p-10 md:flex-row md:items-center">
 
//           <p className="max-w-lg text-ink-soft">
//             Sessions are available in person in Vashi, Navi Mumbai, and online.
//             The first conversation is about understanding what you need —
//             there&apos;s no pressure to commit beyond that.
//           </p>
 
//           <Link
//             href="/contact"
//             className="btn-primary whitespace-nowrap"
//           >
//             Schedule a visit
//           </Link>
 
//         </div>
 
//       </Section>
 
//     </>
//   );
// }


// import { getPublishedAlbums, getPhotosForAlbum, GalleryAlbum, GalleryPhoto } from "@/lib/firebase/gallery";
// import Link from "next/link";
// import Image from "next/image";

// import Hero from "@/components/Hero";
// import Section from "@/components/Section";
// import ConditionCard from "@/components/ConditionCard";
// import PlaceholderImage from "@/components/PlaceholderImage";

// import { conditions } from "@/lib/data/conditions";
// import { differentiators } from "@/lib/data/differentiators";
// import { site } from "@/lib/data/site";
// import { buildMetadata } from "@/lib/seo/metadata";
// import { getPublishedEvents } from "@/lib/firebase/events";
// import { EventItem } from "@/lib/data/types";
// import { getPublishedPosts, BlogPost } from "@/lib/firebase/blogs";




// export const metadata = buildMetadata({
//   title: `${site.name} | Psychologist in Navi Mumbai`,
//   description: site.description,
//   path: "/"
// });

// export default async function HomePage() {
//   let events: EventItem[] = [];

//   try {
//     events = await getPublishedEvents();
//   } catch (error) {
//     console.error("Failed to fetch events:", error);
//   }

//   console.log("RAW EVENTS FROM FIRESTORE:", JSON.stringify(events, null, 2));

//   let albums: GalleryAlbum[] = [];
//   let photosByAlbum: Record<string, GalleryPhoto[]> = {};

//   try {
//     albums = await getPublishedAlbums();
//     const photoLists = await Promise.all(albums.map((a) => getPhotosForAlbum(a.id)));
//     albums.forEach((a, i) => {
//       photosByAlbum[a.id] = photoLists[i];
//     });
//   } catch (error) {
//     console.error("Failed to fetch gallery albums:", error);
//   }

//   // flatten into a single list of photos (with album context) for the homepage preview grid
//   const allPhotos = albums.flatMap((album) =>
//     (photosByAlbum[album.id] ?? []).map((photo) => ({ ...photo, album }))
//   );

//   let blogPosts: BlogPost[] = [];

//   try {
//     blogPosts = await getPublishedPosts();
//   } catch (error) {
//     console.error("Failed to fetch blog posts:", error);
//   }

//   /*
//    * =====================================================
//    * SPLIT EVENTS INTO UPCOMING AND PREVIOUS
//    * =====================================================
//    */

//   const today = new Date();

//   today.setHours(0, 0, 0, 0);

//   const upcomingEvents = events.filter((event) => {
//     const eventDate = new Date(`${event.date}T00:00:00`);

//     return eventDate >= today;
//   });

//   const previousEvents = events
//     .filter((event) => {
//       const eventDate = new Date(`${event.date}T00:00:00`);

//       return eventDate < today;
//     })
//     .sort((a, b) => {
//       return (
//         new Date(`${b.date}T00:00:00`).getTime() -
//         new Date(`${a.date}T00:00:00`).getTime()
//       );
//     });

//   /*
//    * =====================================================
//    * SHOW UPCOMING EVENTS FIRST
//    * OTHERWISE SHOW PREVIOUS EVENTS
//    * =====================================================
//    */

//   const isShowingUpcomingEvents = upcomingEvents.length > 0;

//   const displayedEvents = isShowingUpcomingEvents
//     ? upcomingEvents
//     : previousEvents;

//   return (
//     <>
//       {/* =====================================================
//           HERO
//       ====================================================== */}

//       <Hero />

//       {/* =====================================================
//           ABOUT
//       ====================================================== */}

//       <div id="about" className="scroll-mt-24">
//         <Section
//           eyebrow="About us"
//           title="A practice built on discipline and care"
//         >
//           <div className="grid items-center gap-12 md:grid-cols-5">

//             <div className="md:col-span-2">

//               <div className="relative aspect-[4/5] w-full overflow-hidden rounded-organic border border-primary/10">

//                 <Image
//                   src="/IMG_6121.jpg"
//                   alt={site.founder}
//                   fill
//                   sizes="(min-width: 768px) 40vw, 100vw"
//                   className="object-cover"
//                   priority
//                 />

//               </div>

//               <p className="mt-4 font-display text-lg text-primary-dark">
//                 {site.founder}
//               </p>

//               <p className="eyebrow mt-1">
//                 {site.founderCredentials}
//               </p>

//             </div>

//             <div className="space-y-5 text-lg leading-relaxed text-ink-soft md:col-span-3">

//               <p>
//                 {site.name} is led by {site.founder}, a{" "}
//                 {site.founderCredentials.toLowerCase()}.
//                 Two decades of structured, disciplined service before entering
//                 full-time clinical practice shape the way sessions are run here —
//                 methodical, unhurried, and focused on what actually helps.
//               </p>

//               <p>
//                 The practice combines evidence-based talk therapy with clinical
//                 hypnotherapy, recognised by the British Psychological Society,
//                 offering a grounded path through anxiety, depression, trauma,
//                 relationships and more.
//               </p>

//               <Link
//                 href="/about/the-founder"
//                 className="btn-outline inline-flex"
//               >
//                 Read our full story
//               </Link>

//             </div>

//           </div>
//         </Section>
//       </div>

//       {/* =====================================================
//           WHY WE ARE DIFFERENT
//       ====================================================== */}

//       <Section
//         eyebrow="Why Chaitanya Raj"
//         title="What makes us different in Navi Mumbai"
//         className="rounded-3xl bg-surface-soft/60"
//       >
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

//           {differentiators.map((d) => (
//             <div
//               key={d.title}
//               className="card p-6"
//             >
//               <p className="mb-2 font-display text-lg text-primary-dark">
//                 {d.title}
//               </p>

//               <p className="text-sm leading-relaxed text-ink-soft">
//                 {d.description}
//               </p>
//             </div>
//           ))}

//         </div>
//       </Section>

//       {/* =====================================================
//           CONDITIONS
//       ====================================================== */}

//       <Section
//         eyebrow="What brings people in"
//         title="Support for what you're carrying"
//       >

//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

//           {conditions
//             .slice(0, 8)
//             .map((condition) => (
//               <ConditionCard
//                 key={condition.slug}
//                 condition={condition}
//               />
//             ))}

//         </div>

//         <div className="mt-8">

//           <Link
//             href="/conditions"
//             className="btn-outline inline-flex"
//           >
//             See all conditions we treat
//           </Link>

//         </div>

//       </Section>

//       {/* =====================================================
//           ORGANISATIONS
//       ====================================================== */}

//       <section className="bg-primary-dark py-20 text-white md:py-28">

//         <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[0.9fr_1.1fr] md:px-10">

//           <div>

//             <p className="eyebrow text-white/60">
//               For Organisations
//             </p>

//             <h2 className="mt-5 max-w-xl text-4xl leading-tight text-white md:text-6xl">
//               Healthier people. Stronger organisations.
//             </h2>

//           </div>

//           <div className="max-w-xl">

//             <p className="text-lg leading-relaxed text-white/70">
//               Stress, burnout, and unresolved conflict do not stay contained
//               to one individual. They can affect absenteeism, engagement, team
//               dynamics, retention, and workplace culture.
//             </p>

//             <p className="mt-5 text-lg leading-relaxed text-white/70">
//               We work with organisations across Navi Mumbai to provide
//               structured psychological support through Employee Assistance
//               Programs, workshops, leadership wellness, burnout prevention, and
//               tailored corporate wellness solutions.
//             </p>

//             <Link
//               href="/corporate-wellness-programs-navi-mumbai"
//               className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-primary-dark transition hover:bg-white/90"
//             >
//               Explore Corporate Wellness →
//             </Link>

//           </div>

//         </div>

//       </section>

//       {/* =====================================================
//           EVENTS
//       ====================================================== */}

//       {displayedEvents.length > 0 && (

//         <Section
//           eyebrow={
//             isShowingUpcomingEvents
//               ? "Notices"
//               : "From our community"
//           }
//           title={
//             isShowingUpcomingEvents
//               ? "Upcoming camps, outings & events"
//               : "Previous camps, outings & events"
//           }
//         >

//           <div className="grid gap-6 md:grid-cols-3">

//             {displayedEvents.map((event) => (

//               <div
//                 key={event.id}
//                 className="card flex flex-col overflow-hidden"
//               >

//                 {/* EVENT IMAGE */}

//                 {event.imageUrl ? (

//                   <div className="relative aspect-[4/3] w-full">

//                     <Image
//                       src={event.imageUrl}
//                       alt={event.title}
//                       fill
//                       sizes="(min-width: 768px) 33vw, 100vw"
//                       className="object-cover"
//                     />

//                   </div>

//                 ) : (

//                   <PlaceholderImage
//                     label="Event"
//                     className="aspect-[4/3] w-full"
//                   />

//                 )}

//                 {/* EVENT CONTENT */}

//                 <div className="flex flex-1 flex-col gap-2 p-6">

//                   <p className="eyebrow">

//                     {new Date(
//                       `${event.date}T00:00:00`
//                     ).toLocaleDateString(
//                       "en-IN",
//                       {
//                         day: "numeric",
//                         month: "short",
//                         year: "numeric"
//                       }
//                     )}

//                     {event.location && (
//                       <>
//                         {" · "}
//                         {event.location}
//                       </>
//                     )}

//                   </p>

//                   <h3 className="font-display text-lg text-primary-dark">
//                     {event.title}
//                   </h3>

//                   <p className="flex-1 text-sm leading-relaxed text-ink-soft">
//                     {event.shortDescription}
//                   </p>

//                   {isShowingUpcomingEvents &&
//                     event.registrationLink && (

                      
//                         href={event.registrationLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="mt-2 font-mono text-xs uppercase tracking-widest text-accent"
//                       >
//                         Reserve a spot →
//                       </a>

//                     )}

//                 </div>

//               </div>

//             ))}

//           </div>

//         </Section>

//       )}

//       {/* =====================================================
//           BLOG
//       ====================================================== */}

//       {blogPosts.length > 0 && (

//         <Section
//           eyebrow="From the blog"
//           title="Latest thoughts & articles"
//         >

//           <div className="grid gap-6 md:grid-cols-3">

//             {blogPosts.slice(0, 3).map((post) => (

//               <Link
//                 key={post.id}
//                 href={`/blog/${post.slug}`}
//                 className="card flex flex-col overflow-hidden"
//               >

//                 {post.coverImageUrl ? (

//                   <div className="relative aspect-[4/3] w-full">

//                     <Image
//                       src={post.coverImageUrl}
//                       alt={post.title}
//                       fill
//                       sizes="(min-width: 768px) 33vw, 100vw"
//                       className="object-cover"
//                     />

//                   </div>

//                 ) : (

//                   <PlaceholderImage
//                     label="Blog"
//                     className="aspect-[4/3] w-full"
//                   />

//                 )}

//                 <div className="flex flex-1 flex-col gap-2 p-6">

//                   <p className="eyebrow">
//                     {new Date(`${post.publishedDate}T00:00:00`).toLocaleDateString(
//                       "en-IN",
//                       {
//                         day: "numeric",
//                         month: "short",
//                         year: "numeric"
//                       }
//                     )}
//                   </p>

//                   <h3 className="font-display text-lg text-primary-dark">
//                     {post.title}
//                   </h3>

//                   <p className="flex-1 text-sm leading-relaxed text-ink-soft">
//                     {post.excerpt}
//                   </p>

//                   <span className="mt-2 font-mono text-xs uppercase tracking-widest text-accent">
//                     Read more →
//                   </span>

//                 </div>

//               </Link>

//             ))}

//           </div>

//           <div className="mt-8">

//             <Link
//               href="/blog"
//               className="btn-outline inline-flex"
//             >
//               View all articles
//             </Link>

//           </div>

//         </Section>

//       )}

//       {/* =====================================================
//           GALLERY
//       ====================================================== */}

//       <Section
//         eyebrow="Gallery"
//         title="From past events"
//         className="rounded-3xl bg-surface-soft/60"
//       >
//         {allPhotos.length === 0 ? (
//           <p className="text-ink-soft">No gallery photos published yet.</p>
//         ) : (
//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {allPhotos.slice(0, 6).map((photo) => (
//               <div key={photo.id} className="overflow-hidden rounded-2xl border border-primary/10">
//                 {photo.imageUrl ? (
//                   <div className="relative aspect-square w-full">
//                     <Image
//                       src={photo.imageUrl}
//                       alt={photo.caption ?? photo.album.heading}
//                       fill
//                       sizes="(max-width: 768px) 100vw, 33vw"
//                       className="object-cover"
//                     />
//                   </div>
//                 ) : (
//                   <PlaceholderImage
//                     label={`${photo.album.event}, ${photo.album.year}`}
//                     className="aspect-square w-full"
//                   />
//                 )}
//                 <p className="bg-surface px-4 py-3 text-sm text-ink-soft">
//                   {photo.caption ?? photo.album.heading}
//                 </p>
//               </div>
//             ))}
//           </div>
//         )}

//         <div className="mt-8">
//           <Link href="/gallery" className="btn-outline inline-flex">
//             View our work
//           </Link>
//         </div>
//       </Section>

//       {/* =====================================================
//           SCHEDULE A VISIT
//       ====================================================== */}

//       <Section
//         eyebrow="Ready when you are"
//         title="Schedule a visit"
//       >

//         <div className="card flex flex-col items-start justify-between gap-6 p-10 md:flex-row md:items-center">

//           <p className="max-w-lg text-ink-soft">
//             Sessions are available in person in Vashi, Navi Mumbai, and online.
//             The first conversation is about understanding what you need —
//             there&apos;s no pressure to commit beyond that.
//           </p>

//           <Link
//             href="/contact"
//             className="btn-primary whitespace-nowrap"
//           >
//             Schedule a visit
//           </Link>

//         </div>

//       </Section>

//     </>
//   );
// }

export const dynamic = "force-dynamic";

import { getPublishedAlbums, getPhotosForAlbum, GalleryAlbum, GalleryPhoto } from "@/lib/firebase/gallery";
import Link from "next/link";
import Image from "next/image";
import Testimonials from "@/components/Testimonials";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ConditionCard from "@/components/ConditionCard";
import PlaceholderImage from "@/components/PlaceholderImage";

import { conditions } from "@/lib/data/conditions";
import { differentiators } from "@/lib/data/differentiators";
import { site } from "@/lib/data/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { getPublishedEvents } from "@/lib/firebase/events";
import { EventItem } from "@/lib/data/types";
import { getPublishedPosts, BlogPost } from "@/lib/firebase/blogs";
import LocationMap from "@/components/LocationMap";

const featuredGalleryPhotos = [
  {
    imageUrl: "/images/featured-1.jpg",
    heading: "Corporate Leadership & Team Building workshop, 2024",
    description: "Group session exploring guided visualisation techniques."
  },
  {
    imageUrl: "/images/featured-2.jpg",
    heading: "Corporate Wellness Program",
    description: "On-site stress management session for a Navi Mumbai team."
  },
  {
    imageUrl: "/images/featured-3.jpg",
    heading: "Training Cohort, 2023",
    description: "Practitioners completing their certification module."
  }
];

export const metadata = buildMetadata({
  title: `${site.name} | Psychologist in Navi Mumbai`,
  description: site.description,
  path: "/"
});

export default async function HomePage() {
  let events: EventItem[] = [];

  try {
    events = await getPublishedEvents();
  } catch (error) {
    console.error("Failed to fetch events:", error);
  }

  let albums: GalleryAlbum[] = [];
  let photosByAlbum: Record<string, GalleryPhoto[]> = {};

  try {
    albums = await getPublishedAlbums();
    const photoLists = await Promise.all(albums.map((a) => getPhotosForAlbum(a.id)));
    albums.forEach((a, i) => {
      photosByAlbum[a.id] = photoLists[i];
    });
  } catch (error) {
    console.error("Failed to fetch gallery albums:", error);
  }

  // flatten into a single list of photos (with album context) for the homepage preview grid
  const allPhotos = albums.flatMap((album) =>
    (photosByAlbum[album.id] ?? []).map((photo) => ({ ...photo, album }))
  );

  let blogPosts: BlogPost[] = [];

  try {
    blogPosts = await getPublishedPosts();
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
  }

  /*
   * =====================================================
   * SPLIT EVENTS INTO UPCOMING AND PREVIOUS
   * =====================================================
   */

  const today = new Date();

  today.setHours(0, 0, 0, 0);

  const upcomingEvents = events.filter((event) => {
    const eventDate = new Date(`${event.date}T00:00:00`);

    return eventDate >= today;
  });

  const previousEvents = events
    .filter((event) => {
      const eventDate = new Date(`${event.date}T00:00:00`);

      return eventDate < today;
    })
    .sort((a, b) => {
      return (
        new Date(`${b.date}T00:00:00`).getTime() -
        new Date(`${a.date}T00:00:00`).getTime()
      );
    });

  /*
   * =====================================================
   * SHOW UPCOMING EVENTS FIRST
   * OTHERWISE SHOW PREVIOUS EVENTS
   * =====================================================
   */

  const isShowingUpcomingEvents = upcomingEvents.length > 0;

  const displayedEvents = isShowingUpcomingEvents
    ? upcomingEvents
    : previousEvents;

  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}

      <Hero />

      {/* =====================================================
          ABOUT
      ====================================================== */}

      {/* <div id="about" className="scroll-mt-24">
        <Section
          eyebrow="About us"
          title="A practice built on discipline and care"
        >
          <div className="grid items-center gap-12 md:grid-cols-5">

            <div className="md:col-span-2">

              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-organic border border-primary/10">

                <Image
                  src="/IMG_6121.jpg"
                  alt={site.founder}
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                  priority
                />

              </div>

              <p className="mt-4 font-display text-lg text-primary-dark">
                {site.founder}
              </p>

              <p className="eyebrow mt-1">
                {site.founderCredentials}
              </p>

            </div>

            <div className="space-y-5 text-lg leading-relaxed text-ink-soft md:col-span-3">

              <p>
                {site.name} is led by {site.founder}, a{" "}
                {site.founderCredentials}.
                Two decades of structured, disciplined service before entering
                full-time clinical practice shape the way sessions are run here
                methodical, unhurried, and focused on what actually helps.
              </p>

              <p>
                The practice combines evidence-based talk therapy with clinical
                hypnotherapy, recognised by the Academy Of Hypnosis India (Lifetime Membership 202301LM000034),
                offering a grounded path through anxiety, depression, trauma,
                relationships and more.
              </p>

              <Link
                href="/about/the-founder"
                className="btn-outline inline-flex"
              >
                Read our full story
              </Link>

            </div>

          </div>
        </Section>
      </div> */}


{/* <div id="about" className="scroll-mt-24">
  <Section
    eyebrow="About us"
    title="A practice built on discipline and care"
  >
    <div className="grid items-center gap-12 md:grid-cols-5">

      <div className="md:col-span-2">

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-organic border border-primary/10">
          <Image
            src="/IMG_6121.jpg"
            alt={site.founder}
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
            priority
          />
        </div>

       
        <div className="relative -mt-10 ml-auto h-28 w-28 overflow-hidden rounded-organic border-4 border-background shadow-lg md:h-32 md:w-32">
          <Image
            src="/IMG_3650.jpeg"
            alt={`${site.founder}'s degree`}
            fill
            sizes="128px"
            className="object-cover"
          />
        </div>

        <p className="mt-4 font-display text-lg text-primary-dark">
          {site.founder}
        </p>

        <p className="eyebrow mt-1">
          {site.founderCredentials}
        </p>

      </div>

      <div className="space-y-5 text-lg leading-relaxed text-ink-soft md:col-span-3">

        <p>
          {site.name} is led by {site.founder}, a{" "}
          {site.founderCredentials}.
          Two decades of structured, disciplined service before entering
          full-time clinical practice shape the way sessions are run here
          methodical, unhurried, and focused on what actually helps.
        </p>

        <p>
          The practice combines evidence-based talk therapy with clinical
          hypnotherapy, recognised by the Academy Of Hypnosis India (Lifetime Membership 202301LM000034),
          offering a grounded path through anxiety, depression, trauma,
          relationships and more.
        </p>

        <Link
          href="/about/the-founder"
          className="btn-outline inline-flex"
        >
          Read our full story
        </Link>

      </div>

    </div>
  </Section>
</div> */}


<div id="about" className="scroll-mt-24">
  <Section
    eyebrow="About us"
    title="A practice built on discipline and care"
  >
    <div className="space-y-16">

      {/* Row 1: Portrait + intro paragraph */}
      <div className="grid items-center gap-12 md:grid-cols-5">

        <div className="md:col-span-2">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-organic border border-primary/10">
            <Image
              src="/IMG_6121.jpg"
              alt={site.founder}
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <p className="mt-4 font-display text-lg text-primary-dark">
            {site.founder}
          </p>

          <p className="eyebrow mt-1">
            {site.founderCredentials}
          </p>
        </div>

        <div className="space-y-5 text-lg leading-relaxed text-ink-soft md:col-span-3">
          <p>
            {site.name} is led by {site.founder}, a{" "}
            {site.founderCredentials}.
            Two decades of structured, disciplined service before entering
            full-time clinical practice shape the way sessions are run here
            methodical, unhurried, and focused on what actually helps.
          </p>
        </div>

      </div>

      {/* Row 2: Degree + credentials paragraph */}
      <div className="grid items-center gap-12 md:grid-cols-5">

        <div className="md:col-span-2 md:order-2">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-organic border border-primary/10">
            <Image
              src="/IMG_3650.jpeg"
              alt={`${site.founder}'s degree certificate`}
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-contain bg-white"
            />
          </div>
        </div>

        <div className="space-y-5 text-lg leading-relaxed text-ink-soft md:col-span-3 md:order-1">
          <p>
          The practice combines evidence-based talk therapy with clinical hypnotherapy, recognised by the Academy of Hypnosis
          , India's only professional hypnotherapy academy (Lifetime Membership: 202301LM000034), offering a grounded path through 
          anxiety, depression, trauma, relationships, and more.

          </p>

          <Link
            href="/about/the-founder"
            className="btn-outline inline-flex"
          >
            Read our full story
          </Link>
        </div>

      </div>

    </div>
  </Section>
</div>


      {/* =====================================================
          WHY WE ARE DIFFERENT
      ====================================================== */}

      <Section
        eyebrow="Why Chaitanya Raj"
        title="What makes us different in Navi Mumbai"
        className="rounded-3xl bg-surface-soft/60"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {differentiators.map((d) => (
            <div
              key={d.title}
              className="card p-6"
            >
              <p className="mb-2 font-display text-lg text-primary-dark">
                {d.title}
              </p>

              <p className="text-sm leading-relaxed text-ink-soft">
                {d.description}
              </p>
            </div>
          ))}

        </div>
      </Section>

      {/* =====================================================
          CONDITIONS
      ====================================================== */}

<section className="bg-primary-dark py-20 text-white md:py-28">

<div className="mx-auto max-w-7xl px-6 md:px-10">

  <p className="eyebrow text-white/60">
    What brings people in
  </p>

  <h2 className="mt-5 max-w-xl text-4xl leading-tight text-white md:text-6xl">
    Support for what you&apos;re carrying
  </h2>

  <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

    {conditions
      .slice(0, 8)
      .map((condition) => (
        <ConditionCard
          key={condition.slug}
          condition={condition}
        />
      ))}

  </div>

  <div className="mt-8">

    <Link
      href="/conditions"
      className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-primary-dark transition hover:bg-white/90"
    >
      See all conditions we treat
    </Link>

  </div>

</div>

</section>
      {/* <Section
        eyebrow="What brings people in"
        title="Support for what you're carrying"
      >

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {conditions
            .slice(0, 8)
            .map((condition) => (
              <ConditionCard
                key={condition.slug}
                condition={condition}
              />
            ))}

        </div>

        <div className="mt-8">

          <Link
            href="/conditions"
            className="btn-outline inline-flex"
          >
            See all conditions we treat
          </Link>

        </div>

      </Section> */}

      

{/* =====================================================
    PAST LIFE REGRESSION THERAPY
====================================================== */}

{/* <Section
  eyebrow="Clinical Hypnotherapy"
  title="When nothing else has worked, this might be why"
>

  <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-start">

    
<div className="card relative flex h-full flex-col justify-center overflow-hidden p-8">

<span className="pointer-events-none absolute -left-2 -top-6 font-display text-[160px] leading-none text-gold/15">
  &ldquo;
</span>

<p className="relative font-display text-2xl leading-snug text-primary-dark">
  Some patterns don&apos;t make sense in this lifetime alone.
</p>

<div className="divider relative my-5" />

<p className="relative text-sm leading-relaxed text-ink-soft">
  Past life regression therapy explores what talk therapy and
  conventional treatment sometimes can&apos;t reach.
</p>

</div>

    <div>

      <p className="text-lg leading-relaxed text-ink-soft">
        If you&apos;ve tried therapy, medication, self-help, and every other
        approach — and a fear, pattern, or block still won&apos;t budge —
        past life regression therapy offers a different lens. Guided by
        techniques recognised by the British Psychological Society, it helps
        uncover what&apos;s been sitting underneath, out of reach of
        conventional treatment.
      </p>

      <ul className="mt-6 space-y-4">

        {[
          "For fears and blocks that haven't responded to other approaches",
          "Guided by a BPS-recognised hypnotherapy practitioner",
          "Offered alongside, not instead of, evidence-based care",
          "Available in person and online"
        ].map((point) => (
          <li key={point} className="flex gap-3 text-ink-soft">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>{point}</span>
          </li>
        ))}

      </ul>

      <Link
        href="/past-life-regression-therapy-navi-mumbai"
        className="btn-primary mt-8 inline-flex"
      >
        Learn how it works →
      </Link>

    </div>

  </div>

</Section> */}

{/* <Section eyebrow="Clinical Hypnotherapy">

<h2 className="mt-5 max-w-xl font-display text-xl leading-tight text-primary-dark md:text-5xl">
  When nothing else has worked, this might be why
</h2> */}
{/* <Section
  eyebrow="Clinical Hypnotherapy"
  title="When nothing else has worked, this might be why"
>
  <div className="mt-12 grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-start"> */}
    {/* "sound familiar" card */}
    {/* <div className="card flex h-full flex-col justify-center p-8">
      <p className="eyebrow">
        Does this sound familiar?
      </p>
      <ul className="mt-5 space-y-4">
        {[
          "A fear or anxiety you can't trace back to anything in this life",
          "The same pattern repeating in every relationship, job, or decision",
          "Therapy and medication have helped, but something still feels unresolved",
          "A pull toward a place, era, or person you can't explain"
        ].map((point) => (
          <li key={point} className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
            <span className="font-display text-lg leading-snug text-primary-dark">
              {point}
            </span>
          </li>
        ))}
      </ul>
    </div>
    <div>
      <p className="text-lg leading-relaxed text-ink-soft">
        <strong className="font-display font-normal text-primary-dark">
          Past life regression therapy
        </strong>{" "}
        is a form of clinical hypnotherapy that gently guides you into a
        relaxed, focused state to explore what the subconscious mind is
        holding onto — patterns, fears, or blocks that talk therapy,
        medication, and self-help haven&apos;t fully resolved. Sessions
        follow techniques recognised by the British Psychological Society,
        combining regression therapy with an evidence-informed approach to
        care.
      </p>
      <ul className="mt-6 space-y-4">
        {[
          "For fears and blocks that haven't responded to other approaches",
          "Guided by a BPS-recognised hypnotherapy practitioner",
          "Offered alongside, not instead of, evidence-based psychological care",
          "Past life regression sessions available in person and online"
        ].map((point) => (
          <li key={point} className="flex gap-3 text-ink-soft">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/best-past-life-regression-therapy-in-navi-mumbai"
        className="btn-primary mt-8 inline-flex"
      >
        Learn about past life regression therapy →
      </Link>
    </div>
  </div>
</Section> */}

<Section
  eyebrow="Clinical Hypnotherapy"
  title="When nothing else has worked, this might be why"
>
  <div className="mt-12 grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-start">
    {/* "sound familiar" card */}
    <div className="card flex h-full flex-col justify-center p-8">
      <p className="eyebrow">
        You&apos;ve probably felt this
      </p>
      <ul className="mt-5 space-y-4">
        {[
          "A fear with no memory attached to it you just know it's there",
          "The same relationship, the same ending, no matter who it's with",
          "Years of therapy that helped, but never quite finished the job",
          "A place you've never been that somehow feels like home"
        ].map((point) => (
          <li key={point} className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
            <span className="font-display text-lg leading-snug text-primary-dark">
              {point}
            </span>
          </li>
        ))}
      </ul>
    </div>
    <div>
      <p className="text-lg leading-relaxed text-ink-soft">
        <strong className="font-display font-normal text-primary-dark text-3xl">
          Past life regression therapy
        </strong>{" "}
        isn&apos;t about proving reincarnation it&apos;s clinical
        hypnotherapy used to reach what&apos;s sitting just beneath the
        surface of the conscious mind. When a pattern, fear, or block keeps
        resurfacing despite everything else you&apos;ve tried, regression
        therapy offers a way in that talk therapy alone sometimes can&apos;t
        reach. Sessions follow techniques recognised by the Academy 
        Of Hypnosis, used alongside never instead of
        evidence-based psychological care.
      </p>
      <ul className="mt-6 space-y-4">
        {[
          "For fears and blocks that haven't responded to other approaches",
          "Guided by a AOH-recognised hypnotherapy practitioner",
          "A complement to therapy, not a replacement for it",
          "Past life regression sessions available in person and online"
        ].map((point) => (
          <li key={point} className="flex gap-3 text-ink-soft">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <Link
  href="/conditions/best-past-life-regression-therapy-in-navi-mumbai"
  className="btn-primary mt-8 inline-flex"
>
  Learn about past life regression therapy →
</Link>
    </div>
  </div>
</Section>
      {/* =====================================================
          ORGANISATIONS
      ====================================================== */}

      <section className="bg-primary-dark py-20 text-white md:py-28">

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[0.9fr_1.1fr] md:px-10">

          <div>

            <p className="eyebrow text-white/60">
              For Organisations
            </p>

            <h2 className="mt-5 max-w-xl text-4xl leading-tight text-white md:text-6xl">
              Healthier people. Stronger organisations.
            </h2>

          </div>

          <div className="max-w-xl">

            <p className="text-lg leading-relaxed text-white/70">
              Stress, burnout, and unresolved conflict do not stay contained
              to one individual. They can affect absenteeism, engagement, team
              dynamics, retention, and workplace culture.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-white/70">
              We work with organisations across Navi Mumbai, Mumbai and pan India to provide
              structured psychological support through Employee Assistance
              Programs, workshops, leadership wellness, burnout prevention, and
              tailored corporate wellness solutions.
            </p>

            <Link
              href="/corporate-wellness-programs-navi-mumbai"
              className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-primary-dark transition hover:bg-white/90"
            >
              Explore Corporate Wellness →
            </Link>

          </div>

        </div>

      </section>

      {/* =====================================================
          EVENTS
      ====================================================== */}

      {displayedEvents.length > 0 && (

        <Section
          eyebrow={
            isShowingUpcomingEvents
              ? "Notices"
              : "From our community"
          }
          title={
            isShowingUpcomingEvents
              ? "Upcoming camps, outings & events"
              : "Previous camps, outings & events"
          }
        >

          <div className="grid gap-6 md:grid-cols-3">

            {displayedEvents.map((event) => (

              <div
                key={event.id}
                className="card flex flex-col overflow-hidden"
              >

                {/* EVENT IMAGE */}

                {event.imageUrl ? (

                  <div className="relative aspect-[4/3] w-full">

                    <Image
                      src={event.imageUrl}
                      alt={event.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />

                  </div>

                ) : (

                  <PlaceholderImage
                    label="Event"
                    className="aspect-[4/3] w-full"
                  />

                )}

                {/* EVENT CONTENT */}

                <div className="flex flex-1 flex-col gap-2 p-6">

                  <p className="eyebrow">

                    {new Date(
                      `${event.date}T00:00:00`
                    ).toLocaleDateString(
                      "en-IN",
                      {
                        day: "numeric",
                        month: "short",
                        year: "numeric"
                      }
                    )}

                    {event.location && (
                      <>
                        {" · "}
                        {event.location}
                      </>
                    )}

                  </p>

                  <h3 className="font-display text-lg text-primary-dark">
                    {event.title}
                  </h3>

                  <p className="flex-1 text-sm leading-relaxed text-ink-soft">
                    {event.shortDescription}
                  </p>

                  {isShowingUpcomingEvents &&
                    event.registrationLink && (

                      <a
                        href={event.registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 font-mono text-xs uppercase tracking-widest text-accent"
                      >
                        Reserve a spot →
                      </a>

                    )}

                </div>

              </div>

            ))}

          </div>

        </Section>

      )}

<Testimonials />

      {/* =====================================================
          BLOG
      ====================================================== */}

      {blogPosts.length > 0 && (

        <Section
          eyebrow="From the blog"
          title="Latest thoughts & articles"
        >

          <div className="grid gap-6 md:grid-cols-3">

            {blogPosts.slice(0, 3).map((post) => (

              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="card flex flex-col overflow-hidden"
              >

                {post.coverImageUrl ? (

                  <div className="relative aspect-[4/3] w-full">

                    <Image
                      src={post.coverImageUrl}
                      alt={post.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />

                  </div>

                ) : (

                  <PlaceholderImage
                    label="Blog"
                    className="aspect-[4/3] w-full"
                  />

                )}

                <div className="flex flex-1 flex-col gap-2 p-6">

                  <p className="eyebrow">
                    {new Date(`${post.publishedDate}T00:00:00`).toLocaleDateString(
                      "en-IN",
                      {
                        day: "numeric",
                        month: "short",
                        year: "numeric"
                      }
                    )}
                  </p>

                  <h3 className="font-display text-lg text-primary-dark">
                    {post.title}
                  </h3>

                  <p className="flex-1 text-sm leading-relaxed text-ink-soft">
                    {post.excerpt}
                  </p>

                  <span className="mt-2 font-mono text-xs uppercase tracking-widest text-accent">
                    Read more →
                  </span>

                </div>

              </Link>

            ))}

          </div>

          <div className="mt-8">

            <Link
              href="/blog"
              className="btn-outline inline-flex"
            >
              View all articles
            </Link>

          </div>

        </Section>

      )}

      {/* =====================================================
          GALLERY
      ====================================================== */}

{/* <Section
  eyebrow="Gallery"
  title="From past events"
  className="rounded-3xl bg-surface-soft/60"
>
  {albums.length === 0 ? (
    <p className="text-ink-soft">No gallery albums published yet.</p>
  ) : (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {albums.slice(0, 6).map((album) => {
        const coverPhoto = photosByAlbum[album.id]?.[0];

        return (
          <Link
            key={album.id}
            href={`/gallery`}
            className="group relative block aspect-square overflow-hidden rounded-2xl border border-primary/10"
          >
            {coverPhoto?.imageUrl ? (
              <Image
                src={coverPhoto.imageUrl}
                alt={album.heading}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <PlaceholderImage
                label={`${album.event}, ${album.year}`}
                className="h-full w-full"
              />
            )}

            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/10 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h3 className="font-display text-lg text-white">
                {album.heading}
              </h3>
              {album.description && (
                <p className="mt-1 line-clamp-2 text-sm text-white/80">
                  {album.description}
                </p>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  )}

  <div className="mt-8">
    <Link href="/gallery" className="btn-outline inline-flex">
      View our work
    </Link>
  </div>
</Section> */}


<Section
  eyebrow="Gallery"
  title="From past events"
  className="rounded-3xl bg-surface-soft/60"
>
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {featuredGalleryPhotos.map((photo) => (
      <Link
        key={photo.imageUrl}
        href="/gallery"
        className="group relative block aspect-square overflow-hidden rounded-2xl border border-primary/10"
      >
        <Image
          src={photo.imageUrl}
          alt={photo.heading}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/10 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <h3 className="font-display text-lg text-white">
            {photo.heading}
          </h3>
          {photo.description && (
            <p className="mt-1 line-clamp-2 text-sm text-white/80">
              {photo.description}
            </p>
          )}
        </div>
      </Link>
    ))}
  </div>

  <div className="mt-8">
    <Link href="/gallery" className="btn-outline inline-flex">
      View our work
    </Link>
  </div>
</Section>

      {/* <Section
        eyebrow="Gallery"
        title="From past events"
        className="rounded-3xl bg-surface-soft/60"
      >
        {allPhotos.length === 0 ? (
          <p className="text-ink-soft">No gallery photos published yet.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allPhotos.slice(0, 6).map((photo) => (
              <div key={photo.id} className="overflow-hidden rounded-2xl border border-primary/10">
                {photo.imageUrl ? (
                  <div className="relative aspect-square w-full">
                    <Image
                      src={photo.imageUrl}
                      alt={photo.caption ?? photo.album.heading}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <PlaceholderImage
                    label={`${photo.album.event}, ${photo.album.year}`}
                    className="aspect-square w-full"
                  />
                )}
                <p className="bg-surface px-4 py-3 text-sm text-ink-soft">
                  {photo.caption ?? photo.album.heading}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8">
          <Link href="/gallery" className="btn-outline inline-flex">
            View our work
          </Link>
        </div>
      </Section> */}

      

      {/* =====================================================
          SCHEDULE A VISIT
      ====================================================== */}

      <Section
        eyebrow="Ready when you are"
        title="Schedule a visit"
      >

        <div className="card flex flex-col items-start justify-between gap-6 p-10 md:flex-row md:items-center">

          <p className="max-w-lg text-ink-soft">
            Sessions are available in person in Vashi, Navi Mumbai, and online.
            The first conversation is about understanding what you need —
            there&apos;s no pressure to commit beyond that.
          </p>

          <Link
            href="/contact"
            className="btn-primary whitespace-nowrap"
          >
            Schedule a visit
          </Link>

        </div>

      </Section>


      {/* //contatc us section below  */}

      {/* <Section eyebrow="Find us" title="How to reach us" id="contact" className="scroll-mt-24">
  <div className="grid gap-8 md:grid-cols-2">
    <div className="space-y-4 text-ink-soft">
      <div>
        <p className="eyebrow">Address</p>
        <p>
          {site.address.street}<br />
          {site.address.locality}, {site.address.region} {site.address.postalCode}
        </p>
      </div>

      <div>
        <p className="eyebrow">Phone</p>
        <a href={`tel:${site.phone}`} className="hover:text-accent">
          {site.phoneDisplay}
        </a>
      </div>

      <div>
        <p className="eyebrow">Email</p>
        <a href={`mailto:${site.email}`} className="hover:text-accent">
          {site.email}
        </a>
      </div>

      <div>
        <p className="eyebrow">Hours</p>
        <p>{site.hours}</p>
      </div>

      <Link href="/contact" className="btn-primary inline-flex mt-2">
        Schedule a visit
      </Link>
    </div>

    <div className="overflow-hidden rounded-organic border border-primary/10 aspect-[4/3]">
    <iframe
  title="Location map"
  src={`https://www.google.com/maps?q=${site.geo.lat},${site.geo.lng}&z=17&output=embed`}
  width="100%"
  height="100%"
  style={{ border: 0 }}
  loading="lazy"
/>
    </div>
  </div>
</Section> */}

<div id="contact" className="scroll-mt-24">
  <Section eyebrow="Find us" title="How to reach us">
    <LocationMap />
  </Section>
</div>

    </>
  );
}