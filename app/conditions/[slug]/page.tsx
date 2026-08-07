// // // // import { notFound } from "next/navigation";
// // // // import Link from "next/link";
// // // // import Section from "@/components/Section";
// // // // import { conditions, getCondition } from "@/lib/data/conditions";
// // // // import { getTherapy } from "@/lib/data/therapies";
// // // // import { buildMetadata } from "@/lib/seo/metadata";
// // // // import { BreadcrumbJsonLd } from "@/lib/seo/jsonld";

// // // // export function generateStaticParams() {
// // // //   return conditions.map((c) => ({ slug: c.slug }));
// // // // }

// // // // export function generateMetadata({ params }: { params: { slug: string } }) {
// // // //   const condition = getCondition(params.slug);
// // // //   if (!condition) return {};
// // // //   return buildMetadata({
// // // //     title: condition.metaTitle,
// // // //     description: condition.metaDescription,
// // // //     path: `/conditions/${condition.slug}`
// // // //   });
// // // // }

// // // // export default function ConditionPage({ params }: { params: { slug: string } }) {
// // // //   const condition = getCondition(params.slug);
// // // //   if (!condition) notFound();

// // // //   return (
// // // //     <>
// // // //       <BreadcrumbJsonLd
// // // //         items={[
// // // //           { name: "Home", path: "/" },
// // // //           { name: "Conditions", path: "/conditions" },
// // // //           { name: condition.name, path: `/conditions/${condition.slug}` }
// // // //         ]}
// // // //       />
// // // //       <Section eyebrow="Condition" title={condition.name}>
// // // //         <div className="grid md:grid-cols-3 gap-12">
// // // //           <div className="md:col-span-2 space-y-8">
// // // //             <p className="text-lg text-ink-soft leading-relaxed">{condition.intro}</p>

// // // //             <div>
// // // //               <h2 className="text-xl mb-3">Common signs</h2>
// // // //               <ul className="space-y-2">
// // // //                 {condition.signs.map((s) => (
// // // //                   <li key={s} className="flex gap-3 text-ink-soft">
// // // //                     <span className="text-gold mt-1">•</span>
// // // //                     <span>{s}</span>
// // // //                   </li>
// // // //                 ))}
// // // //               </ul>
// // // //             </div>

// // // //             <div>
// // // //               <h2 className="text-xl mb-3">Our approach</h2>
// // // //               <p className="text-ink-soft leading-relaxed">{condition.approach}</p>
// // // //             </div>

// // // //             <Link href="/contact" className="btn-primary inline-flex">
// // // //               Book a consultation
// // // //             </Link>
// // // //           </div>

// // // //           <aside className="card p-6 h-fit">
// // // //             <p className="eyebrow mb-4">Related therapies</p>
// // // //             <ul className="space-y-3">
// // // //               {condition.relatedTherapies.map((slug) => {
// // // //                 const therapy = getTherapy(slug);
// // // //                 if (!therapy) return null;
// // // //                 return (
// // // //                   <li key={slug}>
// // // //                     <Link href={`/therapies/${slug}`} className="text-primary-dark hover:text-accent font-medium">
// // // //                       {therapy.name}
// // // //                     </Link>
// // // //                   </li>
// // // //                 );
// // // //               })}
// // // //             </ul>
// // // //           </aside>
// // // //         </div>
// // // //       </Section>
// // // //     </>
// // // //   );
// // // // }


// // // import { notFound } from "next/navigation";
// // // import Link from "next/link";
// // // import Section from "@/components/Section";
// // // import { conditions, getCondition } from "@/lib/data/conditions";
// // // import { getTherapy } from "@/lib/data/therapies";
// // // import { buildMetadata } from "@/lib/seo/metadata";
// // // import { BreadcrumbJsonLd } from "@/lib/seo/jsonld";
// // // import FAQAccordion from "@/components/FAQAccordion";

// // // export function generateStaticParams() {
// // //   return conditions.map((c) => ({ slug: c.slug }));
// // // }

// // // export function generateMetadata({ params }: { params: { slug: string } }) {
// // //   const condition = getCondition(params.slug);
// // //   if (!condition) return {};
// // //   return buildMetadata({
// // //     title: condition.metaTitle,
// // //     description: condition.metaDescription,
// // //     path: `/conditions/${condition.slug}`
// // //   });
// // // }

// // // export default function ConditionPage({ params }: { params: { slug: string } }) {
// // //   const condition = getCondition(params.slug);
// // //   if (!condition) notFound();

// // //   const faqJsonLd = condition.faqs?.length
// // //     ? {
// // //         "@context": "https://schema.org",
// // //         "@type": "FAQPage",
// // //         mainEntity: condition.faqs.map((f) => ({
// // //           "@type": "Question",
// // //           name: f.question,
// // //           acceptedAnswer: {
// // //             "@type": "Answer",
// // //             text: f.answer
// // //           }
// // //         }))
// // //       }
// // //     : null;

// // //   return (
// // //     <>
// // //       <BreadcrumbJsonLd
// // //         items={[
// // //           { name: "Home", path: "/" },
// // //           { name: "Conditions", path: "/conditions" },
// // //           { name: condition.name, path: `/conditions/${condition.slug}` }
// // //         ]}
// // //       />

// // //       {faqJsonLd && (
// // //         <script
// // //           type="application/ld+json"
// // //           dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
// // //         />
// // //       )}

// // //       <Section eyebrow="Condition" title={condition.name}>
// // //         <div className="grid md:grid-cols-3 gap-12">
// // //           <div className="md:col-span-2 space-y-8">
// // //             <p className="text-lg text-ink-soft leading-relaxed">{condition.intro}</p>

// // //             <div>
// // //   <h2 className="text-xl mb-4">Common signs</h2>
// // //   <div className="grid sm:grid-cols-2 gap-3">
// // //     {condition.signs.map((s) => (
// // //       <div
// // //         key={s}
// // //         className="group flex gap-3 rounded-lg border border-gold/20 bg-gold/[0.03] p-4 transition-colors hover:border-gold/40 hover:bg-gold/[0.06]"
// // //       >
// // //         <span className="mt-1.5 h-2 w-2 shrink-0 rotate-45 bg-gold transition-transform duration-200 group-hover:rotate-0" />
// // //         <span className="text-ink-soft leading-relaxed">{s}</span>
// // //       </div>
// // //     ))}
// // //   </div>
// // // </div>

// // // {condition.process && (
// // //   <div>
// // //     <h2 className="text-xl mb-3">How it works</h2>
// // //     <div className="border-l-2 border-gold/40 pl-6">
// // //       <p className="text-lg text-ink-soft leading-relaxed">{condition.process}</p>
// // //     </div>
// // //   </div>
// // // )}

// // // {condition.variants && condition.variants.length > 0 && (
// // //   <div className="space-y-6">
// // //     {condition.variants.map((v) => (
// // //       <div key={v.title}>
// // //         <h2 className="text-xl mb-2">{v.title}</h2>
// // //         <p className="text-ink-soft leading-relaxed">{v.description}</p>
// // //       </div>
// // //     ))}
// // //   </div>
// // // )}

// // // <div>
// // //   <h2 className="text-xl mb-3">Our approach</h2>
// // //   <p className="text-ink-soft leading-relaxed mb-6">{condition.approach}</p>

// // //   {condition.approachPoints && condition.approachPoints.length > 0 && (
// // //     <div className="grid sm:grid-cols-2 gap-4">
// // //       {condition.approachPoints.map((p) => (
// // //         <div
// // //           key={p}
// // //           className="flex gap-3 rounded-lg border border-primary-dark/10 bg-primary-dark/[0.03] p-4"
// // //         >
// // //           <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-primary-dark" />
// // //           <span className="text-sm text-ink-soft leading-relaxed">{p}</span>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   )}
// // // </div>

// // //             {/* <div>
// // //               <h2 className="text-xl mb-3">Common signs</h2>
// // //               <ul className="space-y-2">
// // //                 {condition.signs.map((s) => (
// // //                   <li key={s} className="flex gap-3 text-ink-soft">
// // //                     <span className="text-gold mt-1">•</span>
// // //                     <span>{s}</span>
// // //                   </li>
// // //                 ))}
// // //               </ul>
// // //             </div>

// // //             {condition.process && (
// // //               <div>
// // //                 <h2 className="text-xl mb-3">How it works</h2>
// // //                 <p className="text-ink-soft leading-relaxed">{condition.process}</p>
// // //               </div>
// // //             )}

// // //             {condition.variants && condition.variants.length > 0 && (
// // //               <div className="space-y-6">
// // //                 {condition.variants.map((v) => (
// // //                   <div key={v.title}>
// // //                     <h2 className="text-xl mb-2">{v.title}</h2>
// // //                     <p className="text-ink-soft leading-relaxed">{v.description}</p>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             )}

// // //             <div>
// // //               <h2 className="text-xl mb-3">Our approach</h2>
// // //               <p className="text-ink-soft leading-relaxed mb-4">{condition.approach}</p>

// // //               {condition.approachPoints && condition.approachPoints.length > 0 && (
// // //                 <ul className="space-y-2">
// // //                   {condition.approachPoints.map((p) => (
// // //                     <li key={p} className="flex gap-3 text-ink-soft">
// // //                       <span className="text-gold mt-1">•</span>
// // //                       <span>{p}</span>
// // //                     </li>
// // //                   ))}
// // //                 </ul>
// // //               )}
// // //             </div> */}

// // //             {/* {condition.faqs && condition.faqs.length > 0 && (
// // //               <div>
// // //                 <h2 className="text-xl mb-3">Frequently asked questions</h2>
// // //                 <div className="space-y-5">
// // //                   {condition.faqs.map((f) => (
// // //                     <div key={f.question}>
// // //                       <h3 className="font-medium mb-1">{f.question}</h3>
// // //                       <p className="text-ink-soft leading-relaxed">{f.answer}</p>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             )} */}
// // //             {condition.faqs && condition.faqs.length > 0 && (
// // //   <div>
// // //     <h2 className="text-xl mb-3">Frequently asked questions</h2>
// // //     <FAQAccordion faqs={condition.faqs} />
// // //   </div>
// // // )}

// // //             <Link href="/contact" className="btn-primary inline-flex">
// // //               Book a consultation
// // //             </Link>
// // //           </div>

// // //           <aside className="card p-6 h-fit">
// // //             <p className="eyebrow mb-4">Related therapies</p>
// // //             <ul className="space-y-3">
// // //               {condition.relatedTherapies.map((slug) => {
// // //                 const therapy = getTherapy(slug);
// // //                 if (!therapy) return null;
// // //                 return (
// // //                   <li key={slug}>
// // //                     <Link href={`/therapies/${slug}`} className="text-primary-dark hover:text-accent font-medium">
// // //                       {therapy.name}
// // //                     </Link>
// // //                   </li>
// // //                 );
// // //               })}
// // //             </ul>
// // //           </aside>
// // //         </div>
// // //       </Section>
// // //     </>
// // //   );
// // // }


// // import { notFound } from "next/navigation";
// // import Link from "next/link";
// // import { ArrowRight } from "lucide-react";
// // import Section from "@/components/Section";
// // import FAQAccordion from "@/components/FAQAccordion";
// // import { conditions, getCondition } from "@/lib/data/conditions";
// // import { getTherapy } from "@/lib/data/therapies";
// // import { buildMetadata } from "@/lib/seo/metadata";
// // import { BreadcrumbJsonLd } from "@/lib/seo/jsonld";
// // import { getTone, splitLede } from "@/lib/tones";

// // export function generateStaticParams() {
// //   return conditions.map((c) => ({ slug: c.slug }));
// // }

// // export function generateMetadata({ params }: { params: { slug: string } }) {
// //   const condition = getCondition(params.slug);
// //   if (!condition) return {};
// //   return buildMetadata({
// //     title: condition.metaTitle,
// //     description: condition.metaDescription,
// //     path: `/conditions/${condition.slug}`
// //   });
// // }

// // export default function ConditionPage({ params }: { params: { slug: string } }) {
// //   const condition = getCondition(params.slug);
// //   if (!condition) notFound();

// //   const tone = getTone(condition.slug);
// //   const { lede, rest } = splitLede(condition.intro);

// //   const faqJsonLd = condition.faqs?.length
// //     ? {
// //         "@context": "https://schema.org",
// //         "@type": "FAQPage",
// //         mainEntity: condition.faqs.map((f) => ({
// //           "@type": "Question",
// //           name: f.question,
// //           acceptedAnswer: { "@type": "Answer", text: f.answer }
// //         }))
// //       }
// //     : null;

// //   return (
// //     <>
// //       <BreadcrumbJsonLd
// //         items={[
// //           { name: "Home", path: "/" },
// //           { name: "Conditions", path: "/conditions" },
// //           { name: condition.name, path: `/conditions/${condition.slug}` }
// //         ]}
// //       />

// //       {faqJsonLd && (
// //         <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
// //       )}

// //       <div className={`hero-panel tone-${tone}`}>
// //         <div className="mx-auto max-w-6xl px-6 pt-16 pb-14 md:pt-24 md:pb-20">
// //           <div className="flex items-center gap-4 mb-6">
// //             <div className={`icon-tile tone-${tone}`}>
// //               <span className={`h-3 w-3 rotate-45 tone-${tone} bg-current`} />
// //             </div>
// //             {/* <p className="eyebrow">Condition</p> */}
// //             <p className="eyebrow">{condition.category || "Condition"}</p>
// //           </div>
// //           <h1 className="font-display text-4xl md:text-5xl text-primary-dark leading-[1.1] max-w-2xl">
// //             {condition.name}
// //           </h1>
// //           <p className="mt-6 max-w-xl text-lg md:text-xl text-ink-soft leading-relaxed">
// //             {condition.shortDescription}
// //           </p>
// //         </div>
// //       </div>

// //       <Section>
// //         <div className="grid md:grid-cols-3 gap-12">
// //           <div className="md:col-span-2 space-y-10">
// //             <p className="leading-relaxed">
// //               <span className="font-display text-2xl text-primary-dark">{lede} </span>
// //               {rest && <span className="text-lg text-ink-soft">{rest}</span>}
// //             </p>

// //             <div>
// //               {/* <h2 className="text-xl mb-4">Common signs</h2> */}
// //               <h2 className="text-xl mb-4">
// //                  {condition.signsHeading || "Common signs"}
// //               </h2>
// //               <div className="grid sm:grid-cols-2 gap-3">
// //                 {condition.signs.map((s) => (
// //                   <div
// //                     key={s}
// //                     className={`group flex gap-3 rounded-lg border border-${tone === "teal" ? "primary" : "gold"}/20 bg-surface-soft/40 p-4 transition-colors hover:bg-surface-soft`}
// //                   >
// //                     <span className={`mt-1.5 h-2 w-2 shrink-0 rotate-45 tone-${tone} bg-current transition-transform duration-200 group-hover:rotate-0`} />
// //                     <span className="text-ink-soft leading-relaxed">{s}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             {condition.benefits && condition.benefits.length > 0 && (
// //   <div>
// //     <h2 className="text-xl mb-6">
// //       What Can Past Life Regression Help You Explore?
// //     </h2>

// //     <div className="grid sm:grid-cols-2 gap-4">
// //       {condition.benefits.map((benefit) => (
// //         <div key={benefit.title} className="card p-6">
// //           <h3 className="text-lg mb-2">{benefit.title}</h3>
// //           <p className="text-sm text-ink-soft leading-relaxed">
// //             {benefit.description}
// //           </p>
// //         </div>
// //       ))}
// //     </div>
// //   </div>
// // )}

// //             {condition.process && (
// //               <div>
// //                 <h2 className="text-xl mb-3">How it works</h2>
// //                 <div className={`border-l-2 tone-${tone} pl-6`} style={{ borderColor: "currentColor" }}>
// //                   <p className={`text-lg text-ink-soft leading-relaxed tone-${tone}`}>
// //                     <span className="text-ink-soft">{condition.process}</span>
// //                   </p>
// //                 </div>
// //               </div>
// //             )}

// //             {condition.variants && condition.variants.length > 0 && (
// //               <div className="space-y-6">
// //                 {condition.variants.map((v) => (
// //                   <div key={v.title} className="card p-6">
// //                     <h2 className="text-xl mb-2">{v.title}</h2>
// //                     <p className="text-ink-soft leading-relaxed">{v.description}</p>
// //                   </div>
// //                 ))}
// //               </div>
// //             )}

// //             <div>
// //               <h2 className="text-xl mb-3">Our approach</h2>
// //               <p className="text-ink-soft leading-relaxed mb-6">{condition.approach}</p>

// //               {condition.approachPoints && condition.approachPoints.length > 0 && (
// //                 <div className="grid sm:grid-cols-2 gap-4">
// //                   {condition.approachPoints.map((p) => (
// //                     <div key={p} className="flex gap-3 rounded-lg border border-primary/15 p-4">
// //                       <span className={`mt-1.5 h-2 w-2 shrink-0 rotate-45 border tone-${tone}`} style={{ borderColor: "currentColor" }} />
// //                       <span className="text-sm text-ink-soft leading-relaxed">{p}</span>
// //                     </div>
// //                   ))}
// //                 </div>
// //               )}
// //             </div>

// //             {condition.faqs && condition.faqs.length > 0 && (
// //               <div>
// //                 <h2 className="text-xl mb-3">Frequently asked questions</h2>
// //                 <FAQAccordion faqs={condition.faqs} />
// //               </div>
// //             )}

// //             <Link href="/contact" className="btn-primary inline-flex">
// //               Book a consultation
// //               <ArrowRight className="h-4 w-4" />
// //             </Link>
// //           </div>

// //           <aside className="card p-6 h-fit">
// //             <p className="eyebrow mb-3">Related therapies</p>
// //             <div className="divider mb-4" />
// //             <ul className="space-y-3">
// //               {condition.relatedTherapies.map((slug) => {
// //                 const therapy = getTherapy(slug);
// //                 if (!therapy) return null;
// //                 return (
// //                   <li key={slug}>
// //                     <Link href={`/therapies/${slug}`} className="text-primary-dark hover:text-accent font-medium">
// //                       {therapy.name}
// //                     </Link>
// //                   </li>
// //                 );
// //               })}
// //             </ul>
// //           </aside>
// //         </div>
// //       </Section>
// //     </>
// //   );
// // }



 
// import { notFound } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";
// import { ArrowRight } from "lucide-react";
// import Section from "@/components/Section";
// import FAQAccordion from "@/components/FAQAccordion";
// import { conditions, getCondition } from "@/lib/data/conditions";
// import { getTherapy } from "@/lib/data/therapies";
// import { buildMetadata } from "@/lib/seo/metadata";
// import { BreadcrumbJsonLd } from "@/lib/seo/jsonld";
// import { getTone, splitLede } from "@/lib/tones";
 
// export function generateStaticParams() {
//   return conditions.map((c) => ({ slug: c.slug }));
// }
 
// export function generateMetadata({ params }: { params: { slug: string } }) {
//   const condition = getCondition(params.slug);
//   if (!condition) return {};
//   return buildMetadata({
//     title: condition.metaTitle,
//     description: condition.metaDescription,
//     path: `/conditions/${condition.slug}`
//   });
// }
 
// export default function ConditionPage({ params }: { params: { slug: string } }) {
//   const condition = getCondition(params.slug);
//   if (!condition) notFound();
 
//   const tone = getTone(condition.slug);
//   const { lede, rest } = splitLede(condition.intro);
 
//   const faqJsonLd = condition.faqs?.length
//     ? {
//         "@context": "https://schema.org",
//         "@type": "FAQPage",
//         mainEntity: condition.faqs.map((f) => ({
//           "@type": "Question",
//           name: f.question,
//           acceptedAnswer: { "@type": "Answer", text: f.answer }
//         }))
//       }
//     : null;
 
//   return (
//     <>
//       <BreadcrumbJsonLd
//         items={[
//           { name: "Home", path: "/" },
//           { name: "Conditions", path: "/conditions" },
//           { name: condition.name, path: `/conditions/${condition.slug}` }
//         ]}
//       />
 
//       {faqJsonLd && (
//         <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
//       )}
 
//       <div className={`hero-panel tone-${tone} relative overflow-hidden`}>
//         {condition.image && (
//           <>
//             <Image
//               src={condition.image}
//               alt={condition.imageAlt || condition.name}
//               fill
//               priority
//               sizes="100vw"
//               className="object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/70 to-surface/10" />
//           </>
//         )}
//         <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-14 md:pt-24 md:pb-20">
//           <div className="flex items-center gap-4 mb-6">
//             <div className={`icon-tile tone-${tone}`}>
//               <span className={`h-3 w-3 rotate-45 tone-${tone} bg-current`} />
//             </div>
//             <p className="eyebrow">{condition.category || "Condition"}</p>
//           </div>
//           <h1 className="font-display text-4xl md:text-5xl text-primary-dark leading-[1.1] max-w-2xl">
//             {condition.name}
//           </h1>
//           <p className="mt-6 max-w-xl text-lg md:text-xl text-ink-soft leading-relaxed">
//             {condition.shortDescription}
//           </p>
//         </div>
//       </div>
 
//       <Section>
//         <div className="grid md:grid-cols-3 gap-12">
//           <div className="md:col-span-2 space-y-10">
//             <p className="leading-relaxed">
//               <span className="font-display text-2xl text-primary-dark">{lede} </span>
//               {rest && <span className="text-lg text-ink-soft">{rest}</span>}
//             </p>
 
//             <div>
//               {/* <h2 className="text-xl mb-4">Common signs</h2> */}
//               <h2 className="text-xl mb-4">
//                  {condition.signsHeading || "Common signs"}
//               </h2>
//               <div className="grid sm:grid-cols-2 gap-3">
//                 {condition.signs.map((s) => (
//                   <div
//                     key={s}
//                     className={`group flex gap-3 rounded-lg border border-${tone === "teal" ? "primary" : "gold"}/20 bg-surface-soft/40 p-4 transition-colors hover:bg-surface-soft`}
//                   >
//                     <span className={`mt-1.5 h-2 w-2 shrink-0 rotate-45 tone-${tone} bg-current transition-transform duration-200 group-hover:rotate-0`} />
//                     <span className="text-ink-soft leading-relaxed">{s}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
 
//             {condition.benefits && condition.benefits.length > 0 && (
//   <div>
//     <h2 className="text-xl mb-6">
//       What Can Past Life Regression Help You Explore?
//     </h2>
 
//     <div className="grid sm:grid-cols-2 gap-4">
//       {condition.benefits.map((benefit) => (
//         <div key={benefit.title} className="card p-6">
//           <h3 className="text-lg mb-2">{benefit.title}</h3>
//           <p className="text-sm text-ink-soft leading-relaxed">
//             {benefit.description}
//           </p>
//         </div>
//       ))}
//     </div>
//   </div>
// )}
 
//             {condition.process && (
//               <div>
//                 <h2 className="text-xl mb-3">How it works</h2>
//                 <div className={`border-l-2 tone-${tone} pl-6`} style={{ borderColor: "currentColor" }}>
//                   <p className={`text-lg text-ink-soft leading-relaxed tone-${tone}`}>
//                     <span className="text-ink-soft">{condition.process}</span>
//                   </p>
//                 </div>
//               </div>
//             )}
 
//             {condition.variants && condition.variants.length > 0 && (
//               <div className="space-y-6">
//                 {condition.variants.map((v) => (
//                   <div key={v.title} className="card p-6">
//                     <h2 className="text-xl mb-2">{v.title}</h2>
//                     <p className="text-ink-soft leading-relaxed">{v.description}</p>
//                   </div>
//                 ))}
//               </div>
//             )}
 
//             <div>
//               <h2 className="text-xl mb-3">Our approach</h2>
//               <p className="text-ink-soft leading-relaxed mb-6">{condition.approach}</p>
 
//               {condition.approachPoints && condition.approachPoints.length > 0 && (
//                 <div className="grid sm:grid-cols-2 gap-4">
//                   {condition.approachPoints.map((p) => (
//                     <div key={p} className="flex gap-3 rounded-lg border border-primary/15 p-4">
//                       <span className={`mt-1.5 h-2 w-2 shrink-0 rotate-45 border tone-${tone}`} style={{ borderColor: "currentColor" }} />
//                       <span className="text-sm text-ink-soft leading-relaxed">{p}</span>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
 
//             {condition.faqs && condition.faqs.length > 0 && (
//               <div>
//                 <h2 className="text-xl mb-3">Frequently asked questions</h2>
//                 <FAQAccordion faqs={condition.faqs} />
//               </div>
//             )}
 
//             <Link href="/contact" className="btn-primary inline-flex">
//               Book a consultation
//               <ArrowRight className="h-4 w-4" />
//             </Link>
//           </div>
 
//           <aside className="card p-6 h-fit">
//             <p className="eyebrow mb-3">Related therapies</p>
//             <div className="divider mb-4" />
//             <ul className="space-y-3">
//               {condition.relatedTherapies.map((slug) => {
//                 const therapy = getTherapy(slug);
//                 if (!therapy) return null;
//                 return (
//                   <li key={slug}>
//                     <Link href={`/therapies/${slug}`} className="text-primary-dark hover:text-accent font-medium">
//                       {therapy.name}
//                     </Link>
//                   </li>
//                 );
//               })}
//             </ul>
//           </aside>
//         </div>
//       </Section>
//     </>
//   );
// }


import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Section from "@/components/Section";
import FAQAccordion from "@/components/FAQAccordion";
import { conditions, getCondition } from "@/lib/data/conditions";
import { getTherapy } from "@/lib/data/therapies";
import { buildMetadata } from "@/lib/seo/metadata";
import { BreadcrumbJsonLd } from "@/lib/seo/jsonld";
import { getTone, splitLede } from "@/lib/tones";

export function generateStaticParams() {
  return conditions.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const condition = getCondition(params.slug);
  if (!condition) return {};
  return buildMetadata({
    title: condition.metaTitle,
    description: condition.metaDescription,
    path: `/conditions/${condition.slug}`
  });
}

export default function ConditionPage({ params }: { params: { slug: string } }) {
  const condition = getCondition(params.slug);
  if (!condition) notFound();

  const tone = getTone(condition.slug);
  const { lede, rest } = splitLede(condition.intro);

  const faqJsonLd = condition.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: condition.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer }
        }))
      }
    : null;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Conditions", path: "/conditions" },
          { name: condition.name, path: `/conditions/${condition.slug}` }
        ]}
      />

      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}

      <div className={`hero-panel tone-${tone} relative overflow-hidden`}>
        {condition.image && (
          <>
            <Image
              src={condition.image}
              alt={condition.imageAlt || condition.name}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/70 to-surface/10" />
          </>
        )}
        <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-14 md:pt-24 md:pb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className={`icon-tile tone-${tone}`}>
              <span className={`h-3 w-3 rotate-45 tone-${tone} bg-current`} />
            </div>
            <p className="eyebrow">{condition.category || "Condition"}</p>
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-primary-dark leading-[1.1] max-w-2xl">
            {condition.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg md:text-xl text-ink-soft leading-relaxed">
            {condition.shortDescription}
          </p>
        </div>
      </div>

      <Section>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-10">
            <p className="leading-relaxed">
              <span className="font-display text-2xl text-primary-dark">{lede} </span>
              {rest && <span className="text-lg text-ink-soft">{rest}</span>}
            </p>

            <div>
              <h2 className="text-xl mb-4">
                 {condition.signsHeading || "Common signs"}
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {condition.signs.map((s) => (
                  <div
                    key={s}
                    className={`group flex gap-3 rounded-lg border border-${tone === "teal" ? "primary" : "gold"}/20 bg-surface-soft/40 p-4 transition-colors hover:bg-surface-soft`}
                  >
                    <span className={`mt-1.5 h-2 w-2 shrink-0 rotate-45 tone-${tone} bg-current transition-transform duration-200 group-hover:rotate-0`} />
                    <span className="text-ink-soft leading-relaxed">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {condition.benefits && condition.benefits.length > 0 && (
              <div>
                <h2 className="text-xl mb-6">
                  What this can help with
                </h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  {condition.benefits.map((benefit) => (
                    <div key={benefit.title} className="card p-6">
                      <h3 className="text-lg mb-2">{benefit.title}</h3>
                      <p className="text-sm text-ink-soft leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {condition.process && (
              <div>
                <h2 className="text-xl mb-3">How it works</h2>
                <div className={`border-l-2 tone-${tone} pl-6`} style={{ borderColor: "currentColor" }}>
                  <p className={`text-lg text-ink-soft leading-relaxed tone-${tone}`}>
                    <span className="text-ink-soft">{condition.process}</span>
                  </p>
                </div>
              </div>
            )}

            {condition.variants && condition.variants.length > 0 && (
              <div className="space-y-6">
                {condition.variants.map((v) => (
                  <div key={v.title} className="card p-6">
                    <h2 className="text-xl mb-2">{v.title}</h2>
                    <p className="text-ink-soft leading-relaxed">{v.description}</p>
                  </div>
                ))}
              </div>
            )}

            <div>
              <h2 className="text-xl mb-3">Our approach</h2>
              <p className="text-ink-soft leading-relaxed mb-6">{condition.approach}</p>

              {condition.approachPoints && condition.approachPoints.length > 0 && (
                <div className="grid sm:grid-cols-2 gap-4">
                  {condition.approachPoints.map((p) => (
                    <div key={p} className="flex gap-3 rounded-lg border border-primary/15 p-4">
                      <span className={`mt-1.5 h-2 w-2 shrink-0 rotate-45 border tone-${tone}`} style={{ borderColor: "currentColor" }} />
                      <span className="text-sm text-ink-soft leading-relaxed">{p}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {condition.faqs && condition.faqs.length > 0 && (
              <div>
                <h2 className="text-xl mb-3">Frequently asked questions</h2>
                <FAQAccordion faqs={condition.faqs} />
              </div>
            )}

            <Link href="/contact" className="btn-primary inline-flex">
              Book a consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <aside className="card p-6 h-fit">
            <p className="eyebrow mb-3">Related therapies</p>
            <div className="divider mb-4" />
            <ul className="space-y-3">
              {condition.relatedTherapies.map((slug) => {
                const therapy = getTherapy(slug);
                if (!therapy) return null;
                return (
                  <li key={slug}>
                    <Link href={`/therapies/${slug}`} className="text-primary-dark hover:text-accent font-medium">
                      {therapy.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
      </Section>
    </>
  );
}