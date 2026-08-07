// // import Section from "@/components/Section";
// // import Link from "next/link";
// // import { buildMetadata } from "@/lib/seo/metadata";
// // import { PersonJsonLd, BreadcrumbJsonLd } from "@/lib/seo/jsonld";
// // import { founder } from "@/lib/data/about";

// // export const metadata = buildMetadata({
// //   title: "The Founder",
// //   description: `Meet ${founder.name}, ${founder.title.toLowerCase()} with over 25 years of clinical experience.`,
// //   path: "/about/the-founder"
// // });

// // export default function FounderPage() {
// //   return (
// //     <>
// //       <PersonJsonLd />
// //       <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }, { name: "The Founder", path: "/about/the-founder" }]} />
// //       <Section eyebrow="About" title="The Founder">
// //         <div className="max-w-2xl space-y-6">
// //           <div>
// //             <p className="text-2xl font-display text-primary-dark">{founder.name}</p>
// //             <p className="eyebrow mt-1">{founder.title}</p>
// //           </div>
// //           <div className="space-y-5 text-ink-soft text-lg leading-relaxed">
// //             {founder.bio.map((p, i) => <p key={i}>{p}</p>)}
// //           </div>
// //           <Link href="/contact" className="btn-primary inline-flex mt-4">Book a consultation</Link>
// //         </div>
// //       </Section>
// //     </>
// //   );
// // }


// import Image from "next/image";
// import Link from "next/link";

// import Section from "@/components/Section";
// import { buildMetadata } from "@/lib/seo/metadata";
// import { PersonJsonLd, BreadcrumbJsonLd } from "@/lib/seo/jsonld";
// import { founder } from "@/lib/data/about";

// export const metadata = buildMetadata({
//   title: "Meet Our Founder and Lead Psychologist | Lt. Col. Rajesh Sharma (Retd.)",
//   description:
//     "Meet Lt. Col. Rajesh Sharma (Retd.), Post Graduate in Clinical Psychology and Clinical Hypnotherapy, registered with NCAHP, with over 25 years of experience supporting individuals and organisations across Navi Mumbai.",
//   path: "/about/the-founder"
// });

// export default function FounderPage() {
//   return (
//     <>
//       <PersonJsonLd />

//       <BreadcrumbJsonLd
//         items={[
//           { name: "Home", path: "/" },
//           { name: "About", path: "/about" },
//           {
//             name: "The Founder",
//             path: "/about/the-founder"
//           }
//         ]}
//       />

//       {/* HERO */}
//       <section className="relative overflow-hidden bg-sand py-20 md:py-28">
//         <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-[0.9fr_1.1fr] md:px-10">
//           {/* Founder Image */}
//           <div className="relative">
//             <div className="absolute -left-5 -top-5 h-32 w-32 rounded-full border border-primary/20" />

//             <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-primary-dark">
//               <Image
//                 src={founder.image}
//                 alt={founder.imageAlt}
//                 fill
//                 priority
//                 className="object-cover"
//                 sizes="(max-width: 768px) 100vw, 45vw"
//               />
//             </div>

//             <div className="absolute -bottom-6 -right-5 rounded-2xl bg-white px-6 py-5 shadow-xl">
//               <p className="text-3xl font-display text-primary-dark">
//                 25+
//               </p>

//               <p className="mt-1 text-sm text-ink-soft">
//                 Years of experience
//               </p>
//             </div>
//           </div>

//           {/* Hero Content */}
//           <div className="max-w-2xl">
//             <p className="eyebrow mb-5">Founder & Lead Psychologist</p>

//             <h1 className="max-w-3xl text-5xl leading-[1.05] text-primary-dark md:text-7xl">
//               Meet Our Founder
//             </h1>

//             <h2 className="mt-6 text-2xl font-display text-primary-dark md:text-3xl">
//               {founder.name}
//             </h2>

//             <p className="mt-3 max-w-xl text-sm font-medium uppercase tracking-[0.12em] text-primary">
//               {founder.qualifications}
//             </p>

//             <p className="mt-8 text-lg leading-relaxed text-ink-soft md:text-xl">
//               {founder.bio[0]}
//             </p>

//             <div className="mt-8 flex flex-wrap gap-4">
//               <Link
//                 href="/contact"
//                 className="btn-primary inline-flex"
//               >
//                 Book a Consultation
//               </Link>

//               <Link
//                 href="#approach"
//                 className="inline-flex items-center rounded-full border border-primary-dark/20 px-6 py-3 text-sm font-medium text-primary-dark transition hover:bg-white"
//               >
//                 Explore Our Approach
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* PROFESSIONAL JOURNEY */}
//       <Section
//         eyebrow="A Journey Rooted in Service"
//         title="From military service to clinical psychology"
//       >
//         <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-start">
//           <div>
//             <p className="text-4xl font-display leading-tight text-primary-dark md:text-5xl">
//               A lifetime of understanding people, behaviour, and resilience.
//             </p>
//           </div>

//           <div className="space-y-6 text-lg leading-relaxed text-ink-soft">
//             {founder.bio.slice(1).map((paragraph, index) => (
//               <p key={index}>{paragraph}</p>
//             ))}
//           </div>
//         </div>
//       </Section>

//       {/* PSYCHOTHERAPY */}
//       <section className="bg-primary-dark py-20 text-white md:py-28">
//         <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:px-10">
//           <div>
//             <p className="eyebrow text-white/60">
//               Understanding the work
//             </p>

//             <h2 className="mt-5 max-w-xl text-4xl leading-tight md:text-6xl">
//               What is psychotherapy, and why does it matter?
//             </h2>
//           </div>

//           <div className="space-y-6 text-lg leading-relaxed text-white/70">
//             <p>
//               Childhood experiences, whether lived firsthand or absorbed from
//               those around us, often leave a deeper mark than we realise.
//             </p>

//             <p>
//               These moments get pushed aside as we grow up, but they don't
//               disappear. They can quietly shape our sleep, our patience, our
//               reactions, and our relationships well into adulthood.
//             </p>

//             <p>
//               The same patterns can follow people into their working lives,
//               showing up as stress, conflict, or burnout.
//             </p>

//             <p>
//               Psychotherapy creates space to bring these patterns into the
//               light and work through them at their root.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* HEALING */}
//       <Section
//         eyebrow="A central belief"
//         title="Healing is possible"
//       >
//         <div className="mx-auto max-w-4xl text-center">
//           <p className="text-3xl font-display leading-relaxed text-primary-dark md:text-5xl">
//             With the right support, it is possible to move past old experiences
//             and build a life that feels genuinely healthy and sustainable.
//           </p>

//           <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
//             This belief sits at the centre of everything we do at Chaitanya Raj.
//             Our work is about creating the space, structure, and support needed
//             to understand what is happening beneath the surface and move
//             forward with greater clarity.
//           </p>
//         </div>
//       </Section>

//       {/* APPROACH */}
//       <section
//         id="approach"
//         className="bg-sand py-20 md:py-28"
//       >
//         <div className="mx-auto max-w-7xl px-6 md:px-10">
//           <div className="max-w-2xl">
//             <p className="eyebrow">Our approach</p>

//             <h2 className="mt-4 text-4xl text-primary-dark md:text-6xl">
//               Different people need different ways forward.
//             </h2>

//             <p className="mt-6 text-lg leading-relaxed text-ink-soft">
//               At Chaitanya Raj, we draw on a range of psychological methods and
//               hypnotherapy techniques to help individuals work through conflict,
//               understand difficult emotions, and develop healthier patterns.
//             </p>
//           </div>

//           <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//             {founder.sections[2].points.map((technique, index) => (
//               <div
//                 key={technique}
//                 className="rounded-2xl border border-primary-dark/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
//               >
//                 <span className="text-sm text-primary/70">
//                   0{index + 1}
//                 </span>

//                 <h3 className="mt-8 text-xl font-medium text-primary-dark">
//                   {technique}
//                 </h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* WHO WE WORK WITH */}
//       <Section
//         eyebrow="Who we work with"
//         title="Support for individuals and organisations"
//       >
//         <div className="grid gap-6 md:grid-cols-2">
//           <div className="rounded-3xl bg-sand p-8 md:p-10">
//             <p className="eyebrow">Individuals</p>

//             <h3 className="mt-4 text-3xl font-display text-primary-dark">
//               Personal support for the challenges life brings.
//             </h3>

//             <ul className="mt-8 space-y-4">
//               {founder.whoWeWorkWith.individuals.areas.map((area) => (
//                 <li
//                   key={area}
//                   className="flex gap-3 text-ink-soft"
//                 >
//                   <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
//                   {area}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="rounded-3xl bg-primary-dark p-8 text-white md:p-10">
//             <p className="eyebrow text-white/60">Organisations</p>

//             <h3 className="mt-4 text-3xl font-display">
//               Healthier people. Stronger organisations.
//             </h3>

//             <ul className="mt-8 space-y-4 text-white/75">
//               {founder.whoWeWorkWith.organisations.services.map(
//                 (service) => (
//                   <li
//                     key={service}
//                     className="flex gap-3"
//                   >
//                     <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
//                     {service}
//                   </li>
//                 )
//               )}
//             </ul>

//             <p className="mt-8 border-t border-white/10 pt-6 text-sm leading-relaxed text-white/60">
//               {founder.whoWeWorkWith.organisations.locations}
//             </p>
//           </div>
//         </div>
//       </Section>

//       {/* HOW WE HELP */}
//       <section className="border-y border-primary-dark/10 py-20 md:py-28">
//         <div className="mx-auto max-w-7xl px-6 md:px-10">
//           <div className="max-w-2xl">
//             <p className="eyebrow">How we help</p>

//             <h2 className="mt-4 text-4xl text-primary-dark md:text-6xl">
//               A thoughtful process, from the first conversation onward.
//             </h2>
//           </div>

//           <div className="mt-14 grid gap-8 md:grid-cols-4">
//             {founder.howWeHelp.steps.map((step, index) => (
//               <div
//                 key={step}
//                 className="border-t border-primary-dark/20 pt-6"
//               >
//                 <p className="text-sm text-primary">
//                   0{index + 1}
//                 </p>

//                 <p className="mt-5 text-lg leading-relaxed text-ink-soft">
//                   {step}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <Section
//         eyebrow="Frequently asked questions"
//         title="Questions about our work"
//       >
//         <div className="mx-auto max-w-4xl divide-y divide-primary-dark/10">
//           {founder.faqs.map((faq) => (
//             <details
//               key={faq.question}
//               className="group py-6"
//             >
//               <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl font-medium text-primary-dark">
//                 {faq.question}

//                 <span className="text-2xl transition-transform group-open:rotate-45">
//                   +
//                 </span>
//               </summary>

//               <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-soft">
//                 {faq.answer}
//               </p>
//             </details>
//           ))}
//         </div>
//       </Section>

//       {/* FINAL CTA */}
//       <section className="bg-sand py-20 md:py-28">
//         <div className="mx-auto max-w-4xl px-6 text-center">
//           <p className="eyebrow">Begin with a conversation</p>

//           <h2 className="mt-5 text-4xl leading-tight text-primary-dark md:text-6xl">
//             You do not have to figure everything out alone.
//           </h2>

//           <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
//             Whether you are seeking personal support or looking for
//             psychological wellbeing solutions for your organisation, the first
//             step is simply a conversation.
//           </p>

//           <Link
//             href="/contact"
//             className="btn-primary mt-8 inline-flex"
//           >
//             Book a Consultation
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
import { PersonJsonLd, BreadcrumbJsonLd } from "@/lib/seo/jsonld";
import { founder } from "@/lib/data/about";

export const metadata = buildMetadata({
  title:
    "Meet Our Founder and Lead Psychologist | Lt. Col. Rajesh Sharma (Retd.)",
  description:
    "Meet Lt. Col. Rajesh Sharma (Retd.), Post Graduate in Clinical Psychology and Clinical Hypnotherapy, registered with NCAHP, with over 25 years of experience supporting individuals and organisations across Navi Mumbai.",
  path: "/about/the-founder"
});

export default function FounderPage() {
  return (
    <>
      <PersonJsonLd />

      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          {
            name: "The Founder",
            path: "/about/the-founder"
          }
        ]}
      />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-sand py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-[0.9fr_1.1fr] md:px-10">

          {/* Founder Image */}
          <div className="relative">
            <div className="absolute -left-5 -top-5 h-32 w-32 rounded-full border border-primary/20" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-primary-dark">
              <Image
                src={founder.image}
                alt={founder.imageAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>

            <div className="absolute -bottom-6 -right-5 rounded-2xl bg-white px-6 py-5 shadow-xl">
              <p className="text-3xl font-display text-primary-dark">
                25+
              </p>

              <p className="mt-1 text-sm text-ink-soft">
                Years of experience
              </p>
            </div>
          </div>

          {/* Hero Content */}
          <div className="max-w-2xl">
            <p className="eyebrow mb-5">
              Founder & Lead Psychologist
            </p>

            <h1 className="max-w-3xl text-5xl leading-[1.05] text-primary-dark md:text-7xl">
              Meet Our Founder
            </h1>

            <h2 className="mt-6 text-2xl font-display text-primary-dark md:text-3xl">
              {founder.name}
            </h2>

            <p className="mt-3 max-w-xl text-sm font-medium uppercase tracking-[0.12em] text-primary">
              {founder.qualifications}
            </p>

            <p className="mt-8 text-lg leading-relaxed text-ink-soft md:text-xl">
              {founder.bio[0]}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="btn-primary inline-flex"
              >
                Book a Consultation
              </Link>

              <Link
                href="#approach"
                className="inline-flex items-center rounded-full border border-primary-dark/20 px-6 py-3 text-sm font-medium text-primary-dark transition hover:bg-white"
              >
                Explore Our Approach
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROFESSIONAL JOURNEY
      ====================================================== */}

      <Section
        eyebrow="A Journey Rooted in Service"
        title="From military service to clinical psychology"
      >
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-start">

          <div>
            <p className="text-4xl font-display leading-tight text-primary-dark md:text-5xl">
              A lifetime of understanding people, behaviour, and resilience.
            </p>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-ink-soft">
            {founder.bio.slice(1).map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}
          </div>

        </div>
      </Section>

      {/* =====================================================
          PSYCHOTHERAPY
      ====================================================== */}

      <section className="bg-primary-dark py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:px-10">

          <div>
            <p className="eyebrow text-white/60">
              Understanding the work
            </p>

            <h2 className="mt-5 max-w-xl text-4xl leading-tight text-white md:text-6xl">
              What is psychotherapy, and why does it matter?
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-white/70">

            <p>
              Childhood experiences, whether lived firsthand or absorbed from
              those around us, often leave a deeper mark than we realise.
            </p>

            <p>
              These moments get pushed aside as we grow up, but they don't
              disappear. They can quietly shape our sleep, our patience, our
              reactions, and our relationships well into adulthood.
            </p>

            <p>
              The same patterns can follow people into their working lives,
              showing up as stress, conflict, or burnout.
            </p>

            <p>
              Psychotherapy creates space to bring these patterns into the
              light and work through them at their root.
            </p>

          </div>

        </div>
      </section>

      {/* =====================================================
          HEALING
      ====================================================== */}

      <Section
        eyebrow="A central belief"
        title="Healing is possible"
      >
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-3xl font-display leading-relaxed text-primary-dark md:text-5xl">
            With the right support, it is possible to move past old experiences
            and build a life that feels genuinely healthy and sustainable.
          </p>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
            This belief sits at the centre of everything we do at Chaitanya Raj.
            Our work is about creating the space, structure, and support needed
            to understand what is happening beneath the surface and move
            forward with greater clarity.
          </p>

        </div>
      </Section>

      {/* =====================================================
          APPROACH
      ====================================================== */}

      <section
        id="approach"
        className="bg-sand py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">

          <div className="max-w-2xl">

            <p className="eyebrow">
              Our approach
            </p>

            <h2 className="mt-4 text-4xl text-primary-dark md:text-6xl">
              Different people need different ways forward.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              At Chaitanya Raj, we draw on a range of psychological methods and
              hypnotherapy techniques to help individuals work through conflict,
              understand difficult emotions, and develop healthier patterns.
            </p>

          </div>

          {/* <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {founder.sections[2]!.points.map((technique, index) => (
              <div
                key={technique}
                className="rounded-2xl border border-primary-dark/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >

                <span className="text-sm text-primary/70">
                  0{index + 1}
                </span>

                <h3 className="mt-8 text-xl font-medium text-primary-dark">
                  {technique}
                </h3>

              </div>
            ))}

          </div> */}

        </div>
      </section>

      {/* =====================================================
          WHO WE WORK WITH
      ====================================================== */}

      <Section
        eyebrow="Who we work with"
        title="Support for individuals and organisations"
      >
        <div className="grid gap-6 md:grid-cols-2">

          {/* INDIVIDUALS */}

          <div className="rounded-3xl bg-sand p-8 md:p-10">

            <p className="eyebrow">
              Individuals
            </p>

            <h3 className="mt-4 text-3xl font-display text-primary-dark">
              Personal support for the challenges life brings.
            </h3>

            <ul className="mt-8 space-y-4">

              {founder.whoWeWorkWith.individuals.areas.map((area) => (
                <li
                  key={area}
                  className="flex gap-3 text-ink-soft"
                >

                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />

                  <span>
                    {area}
                  </span>

                </li>
              ))}

            </ul>

          </div>

          {/* ORGANISATIONS */}

          <div className="rounded-3xl bg-primary-dark p-8 text-white md:p-10">

            <p className="eyebrow text-white/60">
              Organisations
            </p>

            <h3 className="mt-4 text-3xl font-display text-white">
              Healthier people. Stronger organisations.
            </h3>

            <ul className="mt-8 space-y-4">

              {founder.whoWeWorkWith.organisations.services.map(
                (service) => (
                  <li
                    key={service}
                    className="flex gap-3 text-white/75"
                  >

                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />

                    <span className="text-white/75">
                      {service}
                    </span>

                  </li>
                )
              )}

            </ul>

            <p className="mt-8 border-t border-white/10 pt-6 text-sm leading-relaxed text-white/60">
              {founder.whoWeWorkWith.organisations.locations}
            </p>

          </div>

        </div>
      </Section>

      {/* =====================================================
          HOW WE HELP
      ====================================================== */}

      <section className="border-y border-primary-dark/10 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">

          <div className="max-w-2xl">

            <p className="eyebrow">
              How we help
            </p>

            <h2 className="mt-4 text-4xl text-primary-dark md:text-6xl">
              A thoughtful process, from the first conversation onward.
            </h2>

          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-4">

            {founder.howWeHelp.steps.map((step, index) => (
              <div
                key={step}
                className="border-t border-primary-dark/20 pt-6"
              >

                <p className="text-sm text-primary">
                  0{index + 1}
                </p>

                <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                  {step}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}

      <Section
        eyebrow="Frequently asked questions"
        title="Questions about our work"
      >

        <div className="mx-auto max-w-4xl divide-y divide-primary-dark/10">

          {founder.faqs.map((faq) => (
            <details
              key={faq.question}
              className="group py-6"
            >

              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl font-medium text-primary-dark">

                <span>
                  {faq.question}
                </span>

                <span className="shrink-0 text-2xl text-primary-dark transition-transform group-open:rotate-45">
                  +
                </span>

              </summary>

              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-soft">
                {faq.answer}
              </p>

            </details>
          ))}

        </div>

      </Section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="bg-sand py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <p className="eyebrow">
            Begin with a conversation
          </p>

          <h2 className="mt-5 text-4xl leading-tight text-primary-dark md:text-6xl">
            You do not have to figure everything out alone.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Whether you are seeking personal support or looking for
            psychological wellbeing solutions for your organisation, the first
            step is simply a conversation.
          </p>

          <Link
            href="/contact"
            className="btn-primary mt-8 inline-flex"
          >
            Book a Consultation
          </Link>

        </div>
      </section>
    </>
  );
}