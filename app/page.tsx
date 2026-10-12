
























// export const dynamic = "force-dynamic";

// import { getPublishedAlbums, getPhotosForAlbum, GalleryAlbum, GalleryPhoto } from "@/lib/firebase/gallery";
// import Link from "next/link";
// import Image from "next/image";
// import Testimonials from "@/components/Testimonials";

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
// import LocationMap from "@/components/LocationMap";

// const featuredGalleryPhotos = [
//   {
//     imageUrl: "/images/featured-1.jpg",
//     heading: "Corporate Leadership & Team Building workshop, 2024",
//     description: "Group session exploring guided visualisation techniques."
//   },
//   {
//     imageUrl: "/images/featured-2.jpg",
//     heading: "Corporate Wellness Program",
//     description: "On-site stress management session for a Navi Mumbai team."
//   },
//   {
//     imageUrl: "/images/featured-3.jpg",
//     heading: "Training Cohort, 2023",
//     description: "Practitioners completing their certification module."
//   }
// ];

// export const metadata = buildMetadata({
//   title: "Chaitanya Raj Psychology & Counselling | Psychologist in Navi Mumbai",
//   description:
//     "Psychologist in Navi Mumbai. Evidence based counselling, clinical hypnotherapy and support for anxiety, depression, stress and trauma. 25+ years' experience.",
//   path: "/"
// });

// export default async function HomePage() {
//   let events: EventItem[] = [];

//   try {
//     events = await getPublishedEvents();
//   } catch (error) {
//     console.error("Failed to fetch events:", error);
//   }

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

//       {/* Hero copy is controlled by @/components/Hero.
//           Required homepage copy:
//           H1: Healing Begins with a Conversation
//           Body: Led by Lt Col Rajesh Sharma (Retd), a psychologist in Navi Mumbai
//           with over 25 years of clinical experience. Evidence based support for
//           anxiety, depression, stress, trauma, and more, in Vashi, Belapur, and online.
//           Hero image alt: Psychologist in Navi Mumbai, Lt Col Rajesh Sharma, Chaitanya Raj
//           CTAs remain unchanged. */}
//       <Hero />

//       {/* =====================================================
//           ABOUT
//       ====================================================== */}

//       {/* <div id="about" className="scroll-mt-24">
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
//                 {site.founderCredentials}.
//                 Two decades of structured, disciplined service before entering
//                 full-time clinical practice shape the way sessions are run here
//                 methodical, unhurried, and focused on what actually helps.
//               </p>

//               <p>
//                 The practice combines evidence-based talk therapy with clinical
//                 hypnotherapy, recognised by the Academy Of Hypnosis India (Lifetime Membership 202301LM000034),
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
//       </div> */}


// {/* <div id="about" className="scroll-mt-24">
//   <Section
//     eyebrow="About us"
//     title="A practice built on discipline and care"
//   >
//     <div className="grid items-center gap-12 md:grid-cols-5">

//       <div className="md:col-span-2">

//         <div className="relative aspect-[4/5] w-full overflow-hidden rounded-organic border border-primary/10">
//           <Image
//             src="/IMG_6121.jpg"
//             alt={site.founder}
//             fill
//             sizes="(min-width: 768px) 40vw, 100vw"
//             className="object-cover"
//             priority
//           />
//         </div>

       
//         <div className="relative -mt-10 ml-auto h-28 w-28 overflow-hidden rounded-organic border-4 border-background shadow-lg md:h-32 md:w-32">
//           <Image
//             src="/IMG_3650.jpeg"
//             alt={`${site.founder}'s degree`}
//             fill
//             sizes="128px"
//             className="object-cover"
//           />
//         </div>

//         <p className="mt-4 font-display text-lg text-primary-dark">
//           {site.founder}
//         </p>

//         <p className="eyebrow mt-1">
//           {site.founderCredentials}
//         </p>

//       </div>

//       <div className="space-y-5 text-lg leading-relaxed text-ink-soft md:col-span-3">

//         <p>
//           {site.name} is led by {site.founder}, a{" "}
//           {site.founderCredentials}.
//           Two decades of structured, disciplined service before entering
//           full-time clinical practice shape the way sessions are run here
//           methodical, unhurried, and focused on what actually helps.
//         </p>

//         <p>
//           The practice combines evidence-based talk therapy with clinical
//           hypnotherapy, recognised by the Academy Of Hypnosis India (Lifetime Membership 202301LM000034),
//           offering a grounded path through anxiety, depression, trauma,
//           relationships and more.
//         </p>

//         <Link
//           href="/about/the-founder"
//           className="btn-outline inline-flex"
//         >
//           Read our full story
//         </Link>

//       </div>

//     </div>
//   </Section>
// </div> */}


// <div id="about" className="scroll-mt-24">
//   <Section
//     eyebrow="About us"
//     title="A practice built on discipline and care"
//   >
//     <div className="space-y-16">

//       {/* Row 1: Portrait + intro paragraph */}
//       <div className="grid items-center gap-12 md:grid-cols-5">

//         <div className="md:col-span-2">
//           <div className="relative aspect-[3/4] w-full overflow-hidden rounded-organic border border-primary/10">
//             <Image
//               src="/IMG_6121.jpg"
//               alt="Lt Col Rajesh Sharma, psychologist in Navi Mumbai, Chaitanya Raj"
//               fill
//               sizes="(min-width: 768px) 40vw, 100vw"
//               className="object-cover"
//               priority
//             />
//           </div>

//           <p className="mt-4 font-display text-lg text-primary-dark">
//             {site.founder}
//           </p>

//           <p className="eyebrow mt-1">
//             {site.founderCredentials}
//           </p>
//         </div>

//         <div className="space-y-5 text-lg leading-relaxed text-ink-soft md:col-span-3">
//           <p>
//             {site.name} is led by {site.founder}, a{" "}
//             {site.founderCredentials}.
//             Two decades of structured, disciplined service before entering
//             full-time clinical practice shape the way sessions are run here
//             methodical, unhurried, and focused on what actually helps.
//           </p>
//         </div>

//       </div>

//       {/* Row 2: Degree + credentials paragraph */}
//       <div className="grid items-center gap-12 md:grid-cols-5">

//         <div className="md:col-span-2 md:order-2">
//           <div className="relative aspect-[3/4] w-full overflow-hidden rounded-organic border border-primary/10">
//             <Image
//               src="/IMG_3650.jpeg"
//               alt="Academy of Hypnosis India lifetime membership certificate, Rajesh Sharma"
//               fill
//               sizes="(min-width: 768px) 40vw, 100vw"
//               className="object-contain bg-white"
//             />
//           </div>
//         </div>

//         <div className="space-y-5 text-lg leading-relaxed text-ink-soft md:col-span-3 md:order-1">
//           <p>
//           The practice combines evidence-based talk therapy with clinical hypnotherapy, recognised by the Academy of Hypnosis , India's only professional hypnotherapy academy (Lifetime Membership: 202301LM000034), offering a grounded path through anxiety, depression, trauma, relationships, and more.

//           </p>

//           <Link
//             href="/about/the-founder"
//             className="btn-outline inline-flex"
//           >
//             Read our full story
//           </Link>
//         </div>

//       </div>

//     </div>
//   </Section>
// </div>


//       {/* =====================================================
//           WHY WE ARE DIFFERENT
//       ====================================================== */}

//       <Section
//         eyebrow="Why Chaitanya Raj"
//         title="Why Choose This Psychologist in Navi Mumbai"
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

// <section className="bg-primary-dark py-20 text-white md:py-28">

// <div className="mx-auto max-w-7xl px-6 md:px-10">

//   <p className="eyebrow text-white/60">
//     What brings people in
//   </p>

//   <h2 className="mt-5 max-w-xl text-4xl leading-tight text-white md:text-6xl">
//     Support for what you&apos;re carrying
//   </h2>

//   <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

//     {conditions
//       .slice(0, 8)
//       .map((condition) => (
//         <ConditionCard
//           key={condition.slug}
//           condition={condition}
//         />
//       ))}

//   </div>

//   <div className="mt-8">

//     <Link
//       href="/conditions"
//       className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-primary-dark transition hover:bg-white/90"
//     >
//       See all conditions we treat
//     </Link>

//   </div>

// </div>

// </section>

//       {/* =====================================================
//           STRUCTURED COUNSELLING
//       ====================================================== */}

//       <Section
//         eyebrow="Counselling"
//         title="Structured Counselling in Navi Mumbai, Built Around You"
//         className="rounded-3xl bg-surface-soft/60"
//       >
//         <div className="max-w-3xl">
//           <p className="text-lg leading-relaxed text-ink-soft">
//             We offer structured, evidence based counselling in Navi Mumbai
//             for anxiety, stress, relationships, grief, and more. Our approach
//             combines CBT techniques with over 25 years of clinical experience.
//           </p>

//           <Link
//             href="/counselling-navi-mumbai"
//             className="btn-primary mt-8 inline-flex"
//           >
//             Learn more about counselling in Navi Mumbai →
//           </Link>
//         </div>
//       </Section>

//       {/* =====================================================
//           LEGACY COMMENTED-OUT CONDITIONS SECTION
//       ====================================================== */}

//       {/* <Section
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

//       </Section> */}

      

// {/* =====================================================
//     PAST LIFE REGRESSION THERAPY
// ====================================================== */}

//  <Section
//   eyebrow="Clinical Hypnotherapy"
//   title="Clinical Hypnotherapy in Navi Mumbai, When Talk Therapy Alone Isn&apos;t Enough"
// >
//   <div className="max-w-3xl">
//     <p className="text-lg leading-relaxed text-ink-soft">
//       Alongside psychological counselling, we offer clinical hypnotherapy in
//       Navi Mumbai, led by a Lifetime Professional Member of the Academy of
//       Hypnosis India. It works as a complement to evidence based psychological
//       care, supporting patterns and blocks that call for a different approach.
//     </p>

//     <Link
//       href="/conditions/best-past-life-regression-therapy-in-navi-mumbai"
//       className="btn-primary mt-8 inline-flex"
//     >
//       Learn more about hypnotherapy in Navi Mumbai →
//     </Link>
//   </div>
// </Section>
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
//               We work with organisations across Navi Mumbai, Mumbai and pan India to provide
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
//           className="rounded-3xl bg-surface-soft/60"
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

//                       <a
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

// <Testimonials />

//       {/* =====================================================
//           BLOG
//       ====================================================== */}

//       {blogPosts.length > 0 && (

//         <Section
//           eyebrow="From the blog"
//           title="Latest thoughts & articles"
//           className="rounded-3xl bg-white"
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

// {/* <Section
//   eyebrow="Gallery"
//   title="From past events"
//   className="rounded-3xl bg-surface-soft/60"
// >
//   {albums.length === 0 ? (
//     <p className="text-ink-soft">No gallery albums published yet.</p>
//   ) : (
//     <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//       {albums.slice(0, 6).map((album) => {
//         const coverPhoto = photosByAlbum[album.id]?.[0];

//         return (
//           <Link
//             key={album.id}
//             href={`/gallery`}
//             className="group relative block aspect-square overflow-hidden rounded-2xl border border-primary/10"
//           >
//             {coverPhoto?.imageUrl ? (
//               <Image
//                 src={coverPhoto.imageUrl}
//                 alt={album.heading}
//                 fill
//                 sizes="(max-width: 768px) 100vw, 33vw"
//                 className="object-cover transition-transform duration-500 group-hover:scale-105"
//               />
//             ) : (
//               <PlaceholderImage
//                 label={`${album.event}, ${album.year}`}
//                 className="h-full w-full"
//               />
//             )}

//             <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/10 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//               <h3 className="font-display text-lg text-white">
//                 {album.heading}
//               </h3>
//               {album.description && (
//                 <p className="mt-1 line-clamp-2 text-sm text-white/80">
//                   {album.description}
//                 </p>
//               )}
//             </div>
//           </Link>
//         );
//       })}
//     </div>
//   )}

//   <div className="mt-8">
//     <Link href="/gallery" className="btn-outline inline-flex">
//       View our work
//     </Link>
//   </div>
// </Section> */}


// <Section
//   eyebrow="Gallery"
//   title="From past events"
//   className="rounded-3xl bg-surface-soft/60"
// >
//   <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//     {featuredGalleryPhotos.map((photo) => (
//       <Link
//         key={photo.imageUrl}
//         href="/gallery"
//         className="group relative block aspect-square overflow-hidden rounded-2xl border border-primary/10"
//       >
//         <Image
//           src={photo.imageUrl}
//           alt={photo.heading}
//           fill
//           sizes="(max-width: 768px) 100vw, 33vw"
//           className="object-cover transition-transform duration-500 group-hover:scale-105"
//         />

//         <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/10 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//           <h3 className="font-display text-lg text-white">
//             {photo.heading}
//           </h3>
//           {photo.description && (
//             <p className="mt-1 line-clamp-2 text-sm text-white/80">
//               {photo.description}
//             </p>
//           )}
//         </div>
//       </Link>
//     ))}
//   </div>

//   <div className="mt-8">
//     <Link href="/gallery" className="btn-outline inline-flex">
//       View our work
//     </Link>
//   </div>
// </Section>

//       {/* <Section
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
//       </Section> */}

      

//       {/* =====================================================
//           FAQS
//       ====================================================== */}

//       <Section
//         eyebrow="Frequently Asked Questions"
//         title="Questions About Psychology & Counselling in Navi Mumbai"
//         className="rounded-3xl bg-white"
//       >
//         <div className="mx-auto max-w-4xl space-y-6">
//           {[
//             {
//               question: "How do I know if I need to see a psychologist?",
//               answer:
//                 "If anxiety, low mood, stress, or a difficult pattern is affecting your daily life, relationships, or sleep, it may help to see a psychologist. Chaitanya Raj Psychology & Counselling, led by Lt Col Rajesh Sharma (Retd) in Navi Mumbai, offers a first conversation to understand what you&apos;re going through and what kind of support fits."
//             },
//             {
//               question: "What happens in the first session with a psychologist?",
//               answer:
//                 "The first session with Chaitanya Raj Psychology & Counselling in Navi Mumbai is focused on understanding what you need. There is space to share as much or as little as feels right, and Lt Col Rajesh Sharma (Retd) shapes a plan around your specific situation from there."
//             },
//             {
//               question: "Do you offer online counselling, or only in person sessions?",
//               answer:
//                 "Chaitanya Raj Psychology & Counselling offers both. In person sessions run at the Vashi and CBD Belapur clinics in Navi Mumbai, and online sessions are available for clients across Mumbai and beyond."
//             },
//             {
//               question: "Is therapy confidential in India?",
//               answer:
//                 "Yes, therapy in India is bound by professional confidentiality standards. At Chaitanya Raj Psychology & Counselling in Navi Mumbai, every conversation, from the first enquiry through ongoing sessions, is kept strictly confidential."
//             },
//             {
//               question: "Is clinical hypnotherapy safe, and how is it different from talk therapy?",
//               answer:
//                 "Clinical hypnotherapy is a recognised psychological technique used alongside talk therapy, not instead of it. At Chaitanya Raj in Navi Mumbai, it is practised by Lt Col Rajesh Sharma (Retd), a Lifetime Professional Member of the Academy of Hypnosis, India&apos;s only professional hypnotherapy academy, for patterns and blocks that haven&apos;t responded to other approaches."
//             },
//             {
//               question: "What conditions does a psychologist in Navi Mumbai typically treat?",
//               answer:
//                 "A psychologist in Navi Mumbai typically treats anxiety, depression, OCD, stress, burnout, phobias, trauma, grief, and relationship difficulties. Chaitanya Raj Psychology & Counselling, led by Lt Col Rajesh Sharma (Retd), covers all of these conditions across its Vashi and Belapur clinics."
//             },
//             {
//               question: "How many therapy sessions will I need?",
//               answer:
//                 "The number of sessions varies by person and by the concern being addressed. Some people see improvement within a few sessions at Chaitanya Raj Psychology & Counselling, while others benefit from ongoing support over a longer period, and this is discussed openly during the first consultation."
//             },
//             {
//               question: "How do I book an appointment with a psychologist in Vashi or Belapur?",
//               answer:
//                 "You can book an appointment with Chaitanya Raj Psychology & Counselling by calling +91 96284 93677, emailing contactchaitanyaraj@gmail.com, or using the contact form on chaitanyaraj.com. Sessions are available in person in Vashi and CBD Belapur, and online."
//             }
//           ].map((faq) => (
//             <details
//               key={faq.question}
//               className="card group p-6"
//             >
//               <summary className="cursor-pointer list-none pr-8 font-display text-lg text-primary-dark marker:hidden">
//                 {faq.question}
//               </summary>
//               <p className="mt-4 leading-relaxed text-ink-soft">
//                 {faq.answer}
//               </p>
//             </details>
//           ))}
//         </div>
//       </Section>

//       {/* =====================================================
//           SCHEDULE A VISIT
//       ====================================================== */}

//       <Section
//         eyebrow="Ready when you are"
//         title="Schedule a visit"
//         className="rounded-3xl bg-surface-soft/60"
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


//       {/* //contatc us section below  */}

//       {/* <Section eyebrow="Find us" title="How to reach us" id="contact" className="scroll-mt-24">
//   <div className="grid gap-8 md:grid-cols-2">
//     <div className="space-y-4 text-ink-soft">
//       <div>
//         <p className="eyebrow">Address</p>
//         <p>
//           {site.address.street}<br />
//           {site.address.locality}, {site.address.region} {site.address.postalCode}
//         </p>
//       </div>

//       <div>
//         <p className="eyebrow">Phone</p>
//         <a href={`tel:${site.phone}`} className="hover:text-accent">
//           {site.phoneDisplay}
//         </a>
//       </div>

//       <div>
//         <p className="eyebrow">Email</p>
//         <a href={`mailto:${site.email}`} className="hover:text-accent">
//           {site.email}
//         </a>
//       </div>

//       <div>
//         <p className="eyebrow">Hours</p>
//         <p>{site.hours}</p>
//       </div>

//       <Link href="/contact" className="btn-primary inline-flex mt-2">
//         Schedule a visit
//       </Link>
//     </div>

//     <div className="overflow-hidden rounded-organic border border-primary/10 aspect-[4/3]">
//     <iframe
//   title="Location map"
//   src={`https://www.google.com/maps?q=${site.geo.lat},${site.geo.lng}&z=17&output=embed`}
//   width="100%"
//   height="100%"
//   style={{ border: 0 }}
//   loading="lazy"
// />
//     </div>
//   </div>
// </Section> */}

// <div id="contact" className="scroll-mt-24">
//   <Section eyebrow="Find us" title="How to reach us">
//     <LocationMap />
//   </Section>
// </div>

//     </>
//   );
// }









export const dynamic = "force-dynamic";

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
  title: "Chaitanya Raj Psychology & Counselling | Psychologist in Navi Mumbai",
  description:
    "Psychologist in Navi Mumbai. Evidence based counselling, clinical hypnotherapy and support for anxiety, depression, stress and trauma. 25+ years' experience.",
  path: "/"
});

export default async function HomePage() {
  let events: EventItem[] = [];

  try {
    events = await getPublishedEvents();
  } catch (error) {
    console.error("Failed to fetch events:", error);
  }
  let blogPosts: BlogPost[] = [];

  try {
    blogPosts = await getPublishedPosts();
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
  }

  

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

  

  const isShowingUpcomingEvents = upcomingEvents.length > 0;

  const displayedEvents = isShowingUpcomingEvents
    ? upcomingEvents
    : previousEvents;

  return (
    <>
      

      
      <Hero />

      

      





<div id="about" className="scroll-mt-24">
  <div className="section-soft">
<Section
    eyebrow="About us"
    title="A practice built on discipline and care"
    className="!bg-transparent"
  >
    <div className="space-y-16">

      
      <div className="grid items-center gap-12 md:grid-cols-5">

        <div className="md:col-span-2">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-organic border border-primary/10">
            <Image
              src="/IMG_6121.jpg"
              alt="Lt Col Rajesh Sharma, psychologist in Navi Mumbai, Chaitanya Raj"
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

      
      <div className="grid items-center gap-12 md:grid-cols-5">

        <div className="md:col-span-2 md:order-2">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-organic border border-primary/10">
            <Image
              src="/IMG_3650.jpeg"
              alt="Academy of Hypnosis India lifetime membership certificate, Rajesh Sharma"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-contain bg-white"
            />
          </div>
        </div>

        <div className="space-y-5 text-lg leading-relaxed text-ink-soft md:col-span-3 md:order-1">
          <p>
          The practice combines evidence-based talk therapy with clinical hypnotherapy, recognised by the Academy of Hypnosis , India's only professional hypnotherapy academy (Lifetime Membership: 202301LM000034), offering a grounded path through anxiety, depression, trauma, relationships, and more.

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
</div>


      

      <div className="section-white">
<Section
        eyebrow="Why Chaitanya Raj"
        title="Why Choose This Psychologist in Navi Mumbai"
        className="!bg-transparent"
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
</div>

      

<section className="section-dark py-20 text-white md:py-28">

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

      

      <div className="section-soft">
<Section
        eyebrow="Counselling"
        title="Structured Counselling in Navi Mumbai, Built Around You"
        className="!bg-transparent"
      >
        <div className="max-w-3xl">
          <p className="text-lg leading-relaxed text-ink-soft">
            We offer structured, evidence based counselling in Navi Mumbai
            for anxiety, stress, relationships, grief, and more. Our approach
            combines CBT techniques with over 25 years of clinical experience.
          </p>

          <Link
            href="/counselling-navi-mumbai"
            className="btn-primary mt-8 inline-flex"
          >
            Learn more about counselling in Navi Mumbai →
          </Link>
        </div>
      </Section>
</div>

      

      

      



 <div className="section-soft">
<Section
  eyebrow="Clinical Hypnotherapy"
  title="Clinical Hypnotherapy in Navi Mumbai, When Talk Therapy Alone Isn&apos;t Enough"
>
  <div className="max-w-3xl">
    <p className="text-lg leading-relaxed text-ink-soft">
      Alongside psychological counselling, we offer clinical hypnotherapy in
      Navi Mumbai, led by a Lifetime Professional Member of the Academy of
      Hypnosis India. It works as a complement to evidence based psychological
      care, supporting patterns and blocks that call for a different approach.
    </p>

    <Link
      href="/conditions/best-past-life-regression-therapy-in-navi-mumbai"
      className="btn-primary mt-8 inline-flex"
    >
      Learn more about hypnotherapy in Navi Mumbai →
    </Link>
  </div>
</Section>
</div>
      

      <section className="section-primary py-20 text-white md:py-28">

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

      

      {displayedEvents.length > 0 && (

        <div className="section-soft">
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
          className="!bg-transparent"
        >

          <div className="grid gap-6 md:grid-cols-3">

            {displayedEvents.map((event) => (

              <div
                key={event.id}
                className="card flex flex-col overflow-hidden"
              >

                

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
</div>

      )}

<Testimonials />

      

      {blogPosts.length > 0 && (

        <div className="section-white">
<Section
          eyebrow="From the blog"
          title="Latest thoughts & articles"
          className="!bg-transparent"
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
</div>

      )}

      




<div className="section-soft">
<Section
  eyebrow="Gallery"
  title="From past events"
  className="!bg-transparent"
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
</div>

      

      

      

      <div className="section-white">
<Section
        eyebrow="Frequently Asked Questions"
        title="Questions About Psychology & Counselling in Navi Mumbai"
        className="!bg-transparent"
      >
        <div className="mx-auto max-w-4xl space-y-6">
          {[
            {
              question: "How do I know if I need to see a psychologist?",
              answer:
                "If anxiety, low mood, stress, or a difficult pattern is affecting your daily life, relationships, or sleep, it may help to see a psychologist. Chaitanya Raj Psychology & Counselling, led by Lt Col Rajesh Sharma (Retd) in Navi Mumbai, offers a first conversation to understand what you&apos;re going through and what kind of support fits."
            },
            {
              question: "What happens in the first session with a psychologist?",
              answer:
                "The first session with Chaitanya Raj Psychology & Counselling in Navi Mumbai is focused on understanding what you need. There is space to share as much or as little as feels right, and Lt Col Rajesh Sharma (Retd) shapes a plan around your specific situation from there."
            },
            {
              question: "Do you offer online counselling, or only in person sessions?",
              answer:
                "Chaitanya Raj Psychology & Counselling offers both. In person sessions run at the Vashi and CBD Belapur clinics in Navi Mumbai, and online sessions are available for clients across Mumbai and beyond."
            },
            {
              question: "Is therapy confidential in India?",
              answer:
                "Yes, therapy in India is bound by professional confidentiality standards. At Chaitanya Raj Psychology & Counselling in Navi Mumbai, every conversation, from the first enquiry through ongoing sessions, is kept strictly confidential."
            },
            {
              question: "Is clinical hypnotherapy safe, and how is it different from talk therapy?",
              answer:
                "Clinical hypnotherapy is a recognised psychological technique used alongside talk therapy, not instead of it. At Chaitanya Raj in Navi Mumbai, it is practised by Lt Col Rajesh Sharma (Retd), a Lifetime Professional Member of the Academy of Hypnosis, India&apos;s only professional hypnotherapy academy, for patterns and blocks that haven&apos;t responded to other approaches."
            },
            {
              question: "What conditions does a psychologist in Navi Mumbai typically treat?",
              answer:
                "A psychologist in Navi Mumbai typically treats anxiety, depression, OCD, stress, burnout, phobias, trauma, grief, and relationship difficulties. Chaitanya Raj Psychology & Counselling, led by Lt Col Rajesh Sharma (Retd), covers all of these conditions across its Vashi and Belapur clinics."
            },
            {
              question: "How many therapy sessions will I need?",
              answer:
                "The number of sessions varies by person and by the concern being addressed. Some people see improvement within a few sessions at Chaitanya Raj Psychology & Counselling, while others benefit from ongoing support over a longer period, and this is discussed openly during the first consultation."
            },
            {
              question: "How do I book an appointment with a psychologist in Vashi or Belapur?",
              answer:
                "You can book an appointment with Chaitanya Raj Psychology & Counselling by calling +91 96284 93677, emailing contactchaitanyaraj@gmail.com, or using the contact form on chaitanyaraj.com. Sessions are available in person in Vashi and CBD Belapur, and online."
            }
          ].map((faq) => (
            <details
              key={faq.question}
              className="card group p-6"
            >
              <summary className="cursor-pointer list-none pr-8 font-display text-lg text-primary-dark marker:hidden">
                {faq.question}
              </summary>
              <p className="mt-4 leading-relaxed text-ink-soft">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </Section>
</div>

      

      <div className="section-soft">
<Section
        eyebrow="Ready when you are"
        title="Schedule a visit"
        className="!bg-transparent"
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
</div>


      

      

<div id="contact" className="scroll-mt-24">
  <Section eyebrow="Find us" title="How to reach us">
    <LocationMap />
  </Section>
</div>

    </>
  );
}