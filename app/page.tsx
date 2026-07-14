// // import Link from "next/link";
// // import Hero from "@/components/Hero";
// // import Section from "@/components/Section";
// // import ConditionCard from "@/components/ConditionCard";
// // import TherapyCard from "@/components/TherapyCard";
// // import PlaceholderImage from "@/components/PlaceholderImage";
// // import { conditions } from "@/lib/data/conditions";
// // import { therapies } from "@/lib/data/therapies";
// // import { differentiators } from "@/lib/data/differentiators";
// // import { upcomingEvents } from "@/lib/data/events";
// // import { galleryItems } from "@/lib/data/gallery";
// // import { site } from "@/lib/data/site";
// // import { buildMetadata } from "@/lib/seo/metadata";

// // export const metadata = buildMetadata({
// //   title: `${site.name} | Psychologist in Navi Mumbai`,
// //   description: site.description,
// //   path: "/"
// // });

// // export default function HomePage() {
// //   return (
// //     <>
// //       <Hero />

// //       {/* About */}
// //       <Section eyebrow="About us" title="A practice built on discipline and care">
// //         <div className="grid md:grid-cols-5 gap-12 items-center">
// //           <div className="md:col-span-2">
// //             <PlaceholderImage
// //               label="Founder photo"
// //               className="w-full aspect-[4/5] rounded-organic border border-primary/10"
// //             />
// //             <p className="mt-4 font-display text-lg text-primary-dark">{site.founder}</p>
// //             <p className="eyebrow mt-1">{site.founderCredentials}</p>
// //           </div>
// //           <div className="md:col-span-3 space-y-5 text-ink-soft text-lg leading-relaxed">
// //             <p>
// //               {site.name} is led by {site.founder}, a {site.founderCredentials.toLowerCase()}.
// //               Two decades of structured, disciplined service before entering full-time clinical
// //               practice shape the way sessions are run here — methodical, unhurried, and focused
// //               on what actually helps.
// //             </p>
// //             <p>
// //               The practice combines evidence-based talk therapy with clinical hypnotherapy,
// //               recognised by the British Psychological Society, offering a grounded path through
// //               anxiety, depression, trauma, relationships and more.
// //             </p>
// //             <Link href="/about" className="btn-outline inline-flex">
// //               Read our full story
// //             </Link>
// //           </div>
// //         </div>
// //       </Section>

// //       {/* Why we're different */}
// //       <Section eyebrow="Why Chaitanya Raj" title="What makes us different in Navi Mumbai" className="bg-surface-soft/60 rounded-3xl">
// //         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //           {differentiators.map((d) => (
// //             <div key={d.title} className="card p-6">
// //               <p className="text-lg font-display text-primary-dark mb-2">{d.title}</p>
// //               <p className="text-ink-soft text-sm leading-relaxed">{d.description}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </Section>

// //       {/* Conditions */}
// //       <Section eyebrow="What brings people in" title="Support for what you're carrying">
// //         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
// //           {conditions.slice(0, 8).map((c) => (
// //             <ConditionCard key={c.slug} condition={c} />
// //           ))}
// //         </div>
// //         <div className="mt-8">
// //           <Link href="/conditions" className="btn-outline inline-flex">
// //             See all conditions we treat
// //           </Link>
// //         </div>
// //       </Section>

// //       {/* Therapies */}
// //       <Section eyebrow="How we work" title="Therapies we practise" className="bg-surface-soft/60 rounded-3xl">
// //         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //           {therapies.slice(0, 6).map((t) => (
// //             <TherapyCard key={t.slug} therapy={t} />
// //           ))}
// //         </div>
// //         <div className="mt-8">
// //           <Link href="/therapies" className="btn-outline inline-flex">
// //             See all therapies
// //           </Link>
// //         </div>
// //       </Section>

// //       {/* Notices / upcoming events */}
// //       <Section eyebrow="Notices" title="Upcoming camps, outings & events">
// //         <div className="grid md:grid-cols-3 gap-6">
// //           {upcomingEvents.map((e) => (
// //             <div key={e.title} className="card overflow-hidden flex flex-col">
// //               <PlaceholderImage label={e.tag} className="w-full aspect-[4/3]" />
// //               <div className="p-6 flex flex-col gap-2 flex-1">
// //                 <p className="eyebrow">{e.date} · {e.location}</p>
// //                 <h3 className="text-lg font-display text-primary-dark">{e.title}</h3>
// //                 <p className="text-ink-soft text-sm leading-relaxed flex-1">{e.description}</p>
// //                 <Link href="/contact" className="font-mono text-xs uppercase tracking-widest text-accent mt-2">
// //                   Reserve a spot →
// //                 </Link>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </Section>

// //       {/* Gallery */}
// //       <Section eyebrow="Gallery" title="From past events" className="bg-surface-soft/60 rounded-3xl">
// //         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //           {galleryItems.map((g, i) => (
// //             <div key={i} className="rounded-2xl overflow-hidden border border-primary/10">
// //               <PlaceholderImage label={`${g.event}, ${g.year}`} className="w-full aspect-square" />
// //               <p className="px-4 py-3 text-sm text-ink-soft bg-surface">{g.caption}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </Section>

// //       {/* Schedule a visit */}
// //       <Section eyebrow="Ready when you are" title="Schedule a visit">
// //         <div className="card p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
// //           <p className="text-ink-soft max-w-lg">
// //             Sessions are available in person in Vashi, Navi Mumbai, and online. The first
// //             conversation is about understanding what you need — there&apos;s no pressure to
// //             commit beyond that.
// //           </p>
// //           <Link href="/contact" className="btn-primary whitespace-nowrap">
// //             Schedule a visit
// //           </Link>
// //         </div>
// //       </Section>
// //     </>
// //   );
// // }



// import Link from "next/link";
// import Image from "next/image";
// import Hero from "@/components/Hero";
// import Section from "@/components/Section";
// import ConditionCard from "@/components/ConditionCard";
// import TherapyCard from "@/components/TherapyCard";
// import PlaceholderImage from "@/components/PlaceholderImage";
// import { conditions } from "@/lib/data/conditions";
// import { therapies } from "@/lib/data/therapies";
// import { differentiators } from "@/lib/data/differentiators";
// import { upcomingEvents } from "@/lib/data/events";
// import { galleryItems } from "@/lib/data/gallery";
// import { site } from "@/lib/data/site";
// import { buildMetadata } from "@/lib/seo/metadata";

// export const metadata = buildMetadata({
//   title: `${site.name} | Psychologist in Navi Mumbai`,
//   description: site.description,
//   path: "/"
// });

// export default function HomePage() {
//   return (
//     <>
//       <Hero />

//       {/* About */}
//       <Section eyebrow="About us" title="A practice built on discipline and care">
//         <div className="grid md:grid-cols-5 gap-12 items-center">
//           <div className="md:col-span-2">
//             <div className="relative w-full aspect-[4/5] rounded-organic border border-primary/10 overflow-hidden">
//               <Image
//                 src="/founder.jpg"
//                 alt={site.founder}
//                 fill
//                 sizes="(min-width: 768px) 40vw, 100vw"
//                 className="object-cover"
//                 priority
//               />
//             </div>
//             <p className="mt-4 font-display text-lg text-primary-dark">{site.founder}</p>
//             <p className="eyebrow mt-1">{site.founderCredentials}</p>
//           </div>
//           <div className="md:col-span-3 space-y-5 text-ink-soft text-lg leading-relaxed">
//             <p>
//               {site.name} is led by {site.founder}, a {site.founderCredentials.toLowerCase()}.
//               Two decades of structured, disciplined service before entering full-time clinical
//               practice shape the way sessions are run here — methodical, unhurried, and focused
//               on what actually helps.
//             </p>
//             <p>
//               The practice combines evidence-based talk therapy with clinical hypnotherapy,
//               recognised by the British Psychological Society, offering a grounded path through
//               anxiety, depression, trauma, relationships and more.
//             </p>
//             <Link href="/about" className="btn-outline inline-flex">
//               Read our full story
//             </Link>
//           </div>
//         </div>
//       </Section>

//       {/* Why we're different */}
//       <Section eyebrow="Why Chaitanya Raj" title="What makes us different in Navi Mumbai" className="bg-surface-soft/60 rounded-3xl">
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {differentiators.map((d) => (
//             <div key={d.title} className="card p-6">
//               <p className="text-lg font-display text-primary-dark mb-2">{d.title}</p>
//               <p className="text-ink-soft text-sm leading-relaxed">{d.description}</p>
//             </div>
//           ))}
//         </div>
//       </Section>

//       {/* Conditions */}
//       <Section eyebrow="What brings people in" title="Support for what you're carrying">
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {conditions.slice(0, 8).map((c) => (
//             <ConditionCard key={c.slug} condition={c} />
//           ))}
//         </div>
//         <div className="mt-8">
//           <Link href="/conditions" className="btn-outline inline-flex">
//             See all conditions we treat
//           </Link>
//         </div>
//       </Section>

//       {/* Therapies */}
//       <Section eyebrow="How we work" title="Therapies we practise" className="bg-surface-soft/60 rounded-3xl">
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {therapies.slice(0, 6).map((t) => (
//             <TherapyCard key={t.slug} therapy={t} />
//           ))}
//         </div>
//         <div className="mt-8">
//           <Link href="/therapies" className="btn-outline inline-flex">
//             See all therapies
//           </Link>
//         </div>
//       </Section>

//       {/* Notices / upcoming events */}
//       <Section eyebrow="Notices" title="Upcoming camps, outings & events">
//         <div className="grid md:grid-cols-3 gap-6">
//           {upcomingEvents.map((e) => (
//             <div key={e.title} className="card overflow-hidden flex flex-col">
//               <PlaceholderImage label={e.tag} className="w-full aspect-[4/3]" />
//               <div className="p-6 flex flex-col gap-2 flex-1">
//                 <p className="eyebrow">{e.date} · {e.location}</p>
//                 <h3 className="text-lg font-display text-primary-dark">{e.title}</h3>
//                 <p className="text-ink-soft text-sm leading-relaxed flex-1">{e.description}</p>
//                 <Link href="/contact" className="font-mono text-xs uppercase tracking-widest text-accent mt-2">
//                   Reserve a spot →
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </Section>

//       {/* Gallery */}
//       <Section eyebrow="Gallery" title="From past events" className="bg-surface-soft/60 rounded-3xl">
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {galleryItems.map((g, i) => (
//             <div key={i} className="rounded-2xl overflow-hidden border border-primary/10">
//               <PlaceholderImage label={`${g.event}, ${g.year}`} className="w-full aspect-square" />
//               <p className="px-4 py-3 text-sm text-ink-soft bg-surface">{g.caption}</p>
//             </div>
//           ))}
//         </div>
//       </Section>

//       {/* Schedule a visit */}
//       <Section eyebrow="Ready when you are" title="Schedule a visit">
//         <div className="card p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
//           <p className="text-ink-soft max-w-lg">
//             Sessions are available in person in Vashi, Navi Mumbai, and online. The first
//             conversation is about understanding what you need — there&apos;s no pressure to
//             commit beyond that.
//           </p>
//           <Link href="/contact" className="btn-primary whitespace-nowrap">
//             Schedule a visit
//           </Link>
//         </div>
//       </Section>
//     </>
//   );
// }


import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ConditionCard from "@/components/ConditionCard";
import TherapyCard from "@/components/TherapyCard";
import PlaceholderImage from "@/components/PlaceholderImage";
import { conditions } from "@/lib/data/conditions";
import { therapies } from "@/lib/data/therapies";
import { differentiators } from "@/lib/data/differentiators";
import { upcomingEvents } from "@/lib/data/events";
import { galleryItems } from "@/lib/data/gallery";
import { site } from "@/lib/data/site";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: `${site.name} | Psychologist in Navi Mumbai`,
  description: site.description,
  path: "/"
});

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* About */}
      <Section eyebrow="About us" title="A practice built on discipline and care">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <div className="relative w-full aspect-[4/5] rounded-organic border border-primary/10 overflow-hidden">
              <Image
                src="/founder.jpg"
                alt={site.founder}
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
            <p className="mt-4 font-display text-lg text-primary-dark">{site.founder}</p>
            <p className="eyebrow mt-1">{site.founderCredentials}</p>
          </div>
          <div className="md:col-span-3 space-y-5 text-ink-soft text-lg leading-relaxed">
            <p>
              {site.name} is led by {site.founder}, a {site.founderCredentials.toLowerCase()}.
              Two decades of structured, disciplined service before entering full-time clinical
              practice shape the way sessions are run here — methodical, unhurried, and focused
              on what actually helps.
            </p>
            <p>
              The practice combines evidence-based talk therapy with clinical hypnotherapy,
              recognised by the British Psychological Society, offering a grounded path through
              anxiety, depression, trauma, relationships and more.
            </p>
            <Link href="/about" className="btn-outline inline-flex">
              Read our full story
            </Link>
          </div>
        </div>
      </Section>

      {/* Why we're different */}
      <Section eyebrow="Why Chaitanya Raj" title="What makes us different in Navi Mumbai" className="bg-surface-soft/60 rounded-3xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((d) => (
            <div key={d.title} className="card p-6">
              <p className="text-lg font-display text-primary-dark mb-2">{d.title}</p>
              <p className="text-ink-soft text-sm leading-relaxed">{d.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Conditions */}
      <Section eyebrow="What brings people in" title="Support for what you're carrying">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {conditions.slice(0, 8).map((c) => (
            <ConditionCard key={c.slug} condition={c} />
          ))}
        </div>
        <div className="mt-8">
          <Link href="/conditions" className="btn-outline inline-flex">
            See all conditions we treat
          </Link>
        </div>
      </Section>

      {/* Therapies */}
      <Section eyebrow="How we work" title="Therapies we practise" className="bg-surface-soft/60 rounded-3xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {therapies.slice(0, 6).map((t) => (
            <TherapyCard key={t.slug} therapy={t} />
          ))}
        </div>
        <div className="mt-8">
          <Link href="/therapies" className="btn-outline inline-flex">
            See all therapies
          </Link>
        </div>
      </Section>

      {/* Notices / upcoming events */}
      <Section eyebrow="Notices" title="Upcoming camps, outings & events">
        <div className="grid md:grid-cols-3 gap-6">
          {upcomingEvents.map((e) => (
            <div key={e.title} className="card overflow-hidden flex flex-col">
              <PlaceholderImage label={e.tag} className="w-full aspect-[4/3]" />
              <div className="p-6 flex flex-col gap-2 flex-1">
                <p className="eyebrow">{e.date} · {e.location}</p>
                <h3 className="text-lg font-display text-primary-dark">{e.title}</h3>
                <p className="text-ink-soft text-sm leading-relaxed flex-1">{e.description}</p>
                <Link href="/contact" className="font-mono text-xs uppercase tracking-widest text-accent mt-2">
                  Reserve a spot →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Gallery */}
      <Section eyebrow="Gallery" title="From past events" className="bg-surface-soft/60 rounded-3xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.slice(0, 6).map((g, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-primary/10">
              <PlaceholderImage label={`${g.event}, ${g.year}`} className="w-full aspect-square" />
              <p className="px-4 py-3 text-sm text-ink-soft bg-surface">{g.caption}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/gallery" className="btn-outline inline-flex">
            View our work
          </Link>
        </div>
      </Section>

      {/* Schedule a visit */}
      <Section eyebrow="Ready when you are" title="Schedule a visit">
        <div className="card p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-ink-soft max-w-lg">
            Sessions are available in person in Vashi, Navi Mumbai, and online. The first
            conversation is about understanding what you need — there&apos;s no pressure to
            commit beyond that.
          </p>
          <Link href="/contact" className="btn-primary whitespace-nowrap">
            Schedule a visit
          </Link>
        </div>
      </Section>
    </>
  );
}