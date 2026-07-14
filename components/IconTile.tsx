// // import { ReactNode } from "react";

// // /**
// //  * A small, hand-drawn line-icon system — one distinct mark per condition/therapy,
// //  * replacing the old repeated generic PlaceholderImage on every card.
// //  *
// //  * Each icon is deliberately simple (a handful of strokes, 24x24 grid) so the set
// //  * reads as one coherent family rather than clip art. Tile color is derived
// //  * deterministically from the slug, so any listing page (home, /conditions,
// //  * /therapies) gets consistent, varied color without needing to pass an index down.
// //  */

// // const ICONS: Record<string, ReactNode> = {
// //   // ---- Conditions ----
// //   anxiety: (
// //     <>
// //       <circle cx="12" cy="12" r="8.5" />
// //       <path d="M5.5 12c1.2-2.2 2.1 2.2 3.3 0s2.1-4.4 3.3-1.1 2.1 3.3 3.3 1.1 2.1-2.2 3.3 0" />
// //     </>
// //   ),
// //   depression: (
// //     <>
// //       <circle cx="12" cy="12" r="8.5" />
// //       <path d="M12 7.5v6" />
// //       <path d="M8.7 12.2 12 15.5l3.3-3.3" />
// //       <path d="M8 17.5h8" />
// //     </>
// //   ),
// //   "stress-and-burnout": (
// //     <>
// //       <path d="M12 4.5a7.5 7.5 0 1 0 7.5 7.5" />
// //       <path d="M12 8a4 4 0 1 0 4 4" />
// //     </>
// //   ),
// //   "phobias-and-fears": (
// //     <>
// //       <circle cx="12" cy="12" r="8.5" />
// //       <circle cx="12" cy="12" r="3" />
// //       <path d="M12 5.8v1.7M12 16.5v1.7M18.2 12h-1.7M7.5 12H5.8" />
// //     </>
// //   ),
// //   "grief-and-loss": (
// //     <>
// //       <path d="M12 4.5c3.2 2 5 5.6 3.3 9.2-1.6 3.1-5.7 3.1-6.9.3-1.4-3.2.7-6.9 3.6-9.5Z" />
// //       <path d="M10.2 17.8 12.8 13.6" />
// //     </>
// //   ),
// //   "trauma-and-ptsd": (
// //     <>
// //       <circle cx="12" cy="12" r="8.5" />
// //       <path d="M9 6.2 12 11l-2.3 2.6L13.5 17" />
// //     </>
// //   ),
// //   "sleep-disorders": (
// //     <>
// //       <path d="M16.2 5.2A7.6 7.6 0 1 0 16.2 18.8 6.1 6.1 0 0 1 16.2 5.2Z" />
// //       <path d="M5 19.2c.9-.8 1.8.8 2.7 0s1.8-.8 2.7 0" />
// //     </>
// //   ),
// //   "drug-or-alcohol-abuse": (
// //     <>
// //       <rect x="3.8" y="9.2" width="7" height="5.6" rx="2.8" />
// //       <rect x="13.2" y="9.2" width="7" height="5.6" rx="2.8" />
// //       <path d="M10.8 10.4 9.6 13.6M14.4 10.4l-1.2 3.2" />
// //     </>
// //   ),
// //   "sexual-dysfunctions": (
// //     <>
// //       <circle cx="9" cy="12" r="5" />
// //       <path d="M19.3 8.9a5 5 0 1 1-1.8 8.9" />
// //     </>
// //   ),
// //   stammering: (
// //     <>
// //       <path d="M4 6.5h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9.5L6 19.5v-3H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2Z" transform="translate(0 -0.3)" />
// //       <path d="M6 11.2h2M10.5 11.2h2M15.5 11.2h1.5" />
// //     </>
// //   ),
// //   abuse: (
// //     <>
// //       <path d="M12 3.3 19 6v6c0 5-3 8-7 9-4-1-7-4-7-9V6l7-2.7Z" />
// //       <circle cx="12" cy="12" r="1.8" />
// //     </>
// //   ),
// //   abandonment: (
// //     <>
// //       <path d="M6.5 11V6.8a1.8 1.8 0 0 1 3.6 0V11" />
// //       <path d="M5 11h9v3.5a1.8 1.8 0 0 1-1.8 1.8H6.8A1.8 1.8 0 0 1 5 14.5V11Z" />
// //       <path d="M6.8 16.3v2.4M12.2 16.3v2.4" />
// //       <path d="M16 8l3 3.5-3 3.5" />
// //     </>
// //   ),
// //   "anger-management": (
// //     <>
// //       <circle cx="12" cy="12" r="8.5" />
// //       <path d="M12 6.8v1.6M12 15.6v1.6M17.2 12h-1.6M8.4 12H6.8" />
// //       <path d="M15.3 8.7l-1.1 1.1M9.8 14.2l-1.1 1.1M15.3 15.3l-1.1-1.1M9.8 9.8 8.7 8.7" />
// //     </>
// //   ),

// //   // ---- Therapies ----
// //   "cognitive-behavioural-therapy": (
// //     <>
// //       <circle cx="7" cy="17.2" r="1.9" />
// //       <circle cx="17" cy="17.2" r="1.9" />
// //       <circle cx="12" cy="6.2" r="1.9" />
// //       <path d="M8.4 15.6 11 8M15.6 15.6 13 8M8.9 17.2h6.2" />
// //     </>
// //   ),
// //   "behaviour-modification-therapy": (
// //     <>
// //       <path d="M4 18.5h3.5v-3H11v-3h3.5v-3H18" />
// //       <path d="M15.6 8.7 18 9.5l-.8-2.4" />
// //     </>
// //   ),
// //   "clinical-hypnotherapy": (
// //     <>
// //       <path d="M12 20a8 8 0 1 1 0-16 6 6 0 1 1 0 12 4 4 0 1 1 0-8 2 2 0 1 1 0 4" />
// //     </>
// //   ),
// //   "ego-state-therapy": (
// //     <>
// //       <circle cx="11.5" cy="13" r="6.5" />
// //       <circle cx="9.5" cy="10" r="3.6" />
// //       <circle cx="15" cy="8.5" r="2.1" />
// //     </>
// //   ),
// //   "past-life-regression-therapy": (
// //     <>
// //       <path d="M7 4.3h10M7 19.7h10" />
// //       <path d="M7 4.3c0 4.6 5 5.6 5 7.7s-5 3.1-5 7.7M17 4.3c0 4.6-5 5.6-5 7.7s5 3.1 5 7.7" />
// //     </>
// //   ),
// //   "spirit-release-therapy": (
// //     <>
// //       <circle cx="12" cy="7.3" r="2.3" />
// //       <path d="M8.3 19.3c.2-3.6 2-5.4 3.7-5.4s3.5 1.8 3.7 5.4" />
// //       <circle cx="6.6" cy="18.4" r="0.5" />
// //       <circle cx="5.2" cy="16.3" r="0.4" />
// //       <circle cx="17.4" cy="18.4" r="0.5" />
// //       <circle cx="18.8" cy="16.3" r="0.4" />
// //     </>
// //   ),
// //   "age-regression": (
// //     <>
// //       <circle cx="12" cy="12" r="8" />
// //       <path d="M12 7.8V12l2.6 1.7" />
// //       <path d="M5.6 8.2A7 7 0 0 1 8 5.8" />
// //       <path d="M4.4 7.9 5.6 8.2 5.9 6.9" />
// //     </>
// //   ),
// //   "third-party-regression": (
// //     <>
// //       <path d="M4.3 14V9.8a1.4 1.4 0 0 1 2.8 0V14" />
// //       <path d="M3.5 14h5.4v2.7a1 1 0 0 1-1 1H4.5a1 1 0 0 1-1-1V14Z" />
// //       <path d="M15.5 14V9.8a1.4 1.4 0 0 1 2.8 0V14" strokeDasharray="2.2 2.2" />
// //       <path d="M14.7 14h5.4v2.7a1 1 0 0 1-1 1h-3.4a1 1 0 0 1-1-1V14Z" strokeDasharray="2.2 2.2" />
// //     </>
// //   ),
// //   "energy-exchange": (
// //     <>
// //       <path d="M4.5 12c0-2.6 1.8-4 3.6-2.2s1.8 4.4 3.6 2.2 1.8-4.4 3.6-2.2 1.8 4.4 3.6 2.2" />
// //     </>
// //   ),
// //   "quantum-therapy": (
// //     <>
// //       <circle cx="12" cy="12" r="1.5" />
// //       <ellipse cx="12" cy="12" rx="8" ry="3.1" transform="rotate(24 12 12)" />
// //       <ellipse cx="12" cy="12" rx="8" ry="3.1" transform="rotate(-24 12 12)" />
// //       <circle cx="18.6" cy="8.6" r="0.9" />
// //     </>
// //   ),
// //   "couples-and-relationship-counselling": (
// //     <>
// //       <circle cx="9" cy="12" r="5.3" />
// //       <circle cx="15" cy="12" r="5.3" />
// //     </>
// //   ),
// //   "mindfulness-based-therapy": (
// //     <>
// //       <circle cx="12" cy="12" r="2.6" />
// //       <circle cx="12" cy="12" r="6.3" strokeDasharray="1 3.4" />
// //     </>
// //   ),
// // };

// // const FALLBACK: ReactNode = <circle cx="12" cy="12" r="8.5" />;

// // // six muted, desaturated tile tones — cycled deterministically per slug so the
// // // same condition/therapy always gets the same tile, on any listing page.
// // const TILE_CLASSES = ["tile-sage", "tile-brass", "tile-clay", "tile-slate", "tile-plum", "tile-moss"];

// // function tileForSlug(slug: string) {
// //   let hash = 0;
// //   for (let i = 0; i < slug.length; i++) hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
// //   return TILE_CLASSES[hash % TILE_CLASSES.length];
// // }

// // export default function IconTile({
// //   slug,
// //   className = "",
// // }: {
// //   slug: string;
// //   className?: string;
// // }) {
// //   const tileClass = tileForSlug(slug);
// //   return (
// //     <div className={`icon-tile ${tileClass} ${className}`}>
// //       <svg
// //         viewBox="0 0 24 24"
// //         fill="none"
// //         stroke="currentColor"
// //         strokeWidth="1.4"
// //         strokeLinecap="round"
// //         strokeLinejoin="round"
// //         className="w-7 h-7"
// //         aria-hidden="true"
// //       >
// //         {ICONS[slug] ?? FALLBACK}
// //       </svg>
// //     </div>
// //   );
// // }


// import { ReactNode } from "react";

// /**
//  * A small, hand-drawn line-icon system — one distinct mark per condition/therapy,
//  * replacing the old repeated generic PlaceholderImage on every card.
//  *
//  * Each icon is deliberately simple (a handful of strokes, 24x24 grid) so the set
//  * reads as one coherent family rather than clip art. Tile color is derived
//  * deterministically from the slug, so any listing page (home, /conditions,
//  * /therapies) gets consistent, varied color without needing to pass an index down.
//  */

// const ICONS: Record<string, ReactNode> = {
//   // ---- Conditions ----
//   anxiety: (
//     <>
//       <circle cx="12" cy="12" r="8.5" />
//       <path d="M5.5 12c1.2-2.2 2.1 2.2 3.3 0s2.1-4.4 3.3-1.1 2.1 3.3 3.3 1.1 2.1-2.2 3.3 0" />
//     </>
//   ),
//   depression: (
//     <>
//       <circle cx="12" cy="12" r="8.5" />
//       <path d="M12 7.5v6" />
//       <path d="M8.7 12.2 12 15.5l3.3-3.3" />
//       <path d="M8 17.5h8" />
//     </>
//   ),
//   "stress-and-burnout": (
//     <>
//       <path d="M12 4.5a7.5 7.5 0 1 0 7.5 7.5" />
//       <path d="M12 8a4 4 0 1 0 4 4" />
//     </>
//   ),
//   "phobias-and-fears": (
//     <>
//       <circle cx="12" cy="12" r="8.5" />
//       <circle cx="12" cy="12" r="3" />
//       <path d="M12 5.8v1.7M12 16.5v1.7M18.2 12h-1.7M7.5 12H5.8" />
//     </>
//   ),
//   "grief-and-loss": (
//     <>
//       <path d="M12 4.5c3.2 2 5 5.6 3.3 9.2-1.6 3.1-5.7 3.1-6.9.3-1.4-3.2.7-6.9 3.6-9.5Z" />
//       <path d="M10.2 17.8 12.8 13.6" />
//     </>
//   ),
//   "trauma-and-ptsd": (
//     <>
//       <circle cx="12" cy="12" r="8.5" />
//       <path d="M9 6.2 12 11l-2.3 2.6L13.5 17" />
//     </>
//   ),
//   "sleep-disorders": (
//     <>
//       <path d="M16.2 5.2A7.6 7.6 0 1 0 16.2 18.8 6.1 6.1 0 0 1 16.2 5.2Z" />
//       <path d="M5 19.2c.9-.8 1.8.8 2.7 0s1.8-.8 2.7 0" />
//     </>
//   ),
//   "drug-or-alcohol-abuse": (
//     <>
//       <rect x="3.8" y="9.2" width="7" height="5.6" rx="2.8" />
//       <rect x="13.2" y="9.2" width="7" height="5.6" rx="2.8" />
//       <path d="M10.8 10.4 9.6 13.6M14.4 10.4l-1.2 3.2" />
//     </>
//   ),
//   "sexual-dysfunctions": (
//     <>
//       <circle cx="9" cy="12" r="5" />
//       <path d="M19.3 8.9a5 5 0 1 1-1.8 8.9" />
//     </>
//   ),
//   stammering: (
//     <>
//       <path d="M4 6.5h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9.5L6 19.5v-3H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2Z" transform="translate(0 -0.3)" />
//       <path d="M6 11.2h2M10.5 11.2h2M15.5 11.2h1.5" />
//     </>
//   ),
//   abuse: (
//     <>
//       <path d="M12 3.3 19 6v6c0 5-3 8-7 9-4-1-7-4-7-9V6l7-2.7Z" />
//       <circle cx="12" cy="12" r="1.8" />
//     </>
//   ),
//   abandonment: (
//     <>
//       <path d="M6.5 11V6.8a1.8 1.8 0 0 1 3.6 0V11" />
//       <path d="M5 11h9v3.5a1.8 1.8 0 0 1-1.8 1.8H6.8A1.8 1.8 0 0 1 5 14.5V11Z" />
//       <path d="M6.8 16.3v2.4M12.2 16.3v2.4" />
//       <path d="M16 8l3 3.5-3 3.5" />
//     </>
//   ),
//   "anger-management": (
//     <>
//       <circle cx="12" cy="12" r="8.5" />
//       <path d="M12 6.8v1.6M12 15.6v1.6M17.2 12h-1.6M8.4 12H6.8" />
//       <path d="M15.3 8.7l-1.1 1.1M9.8 14.2l-1.1 1.1M15.3 15.3l-1.1-1.1M9.8 9.8 8.7 8.7" />
//     </>
//   ),

//   // ---- Therapies ----
//   "cognitive-behavioural-therapy": (
//     <>
//       <circle cx="7" cy="17.2" r="1.9" />
//       <circle cx="17" cy="17.2" r="1.9" />
//       <circle cx="12" cy="6.2" r="1.9" />
//       <path d="M8.4 15.6 11 8M15.6 15.6 13 8M8.9 17.2h6.2" />
//     </>
//   ),
//   "behaviour-modification-therapy": (
//     <>
//       <path d="M4 18.5h3.5v-3H11v-3h3.5v-3H18" />
//       <path d="M15.6 8.7 18 9.5l-.8-2.4" />
//     </>
//   ),
//   "clinical-hypnotherapy": (
//     <>
//       <path d="M12 20a8 8 0 1 1 0-16 6 6 0 1 1 0 12 4 4 0 1 1 0-8 2 2 0 1 1 0 4" />
//     </>
//   ),
//   "ego-state-therapy": (
//     <>
//       <circle cx="11.5" cy="13" r="6.5" />
//       <circle cx="9.5" cy="10" r="3.6" />
//       <circle cx="15" cy="8.5" r="2.1" />
//     </>
//   ),
//   "past-life-regression-therapy": (
//     <>
//       <path d="M7 4.3h10M7 19.7h10" />
//       <path d="M7 4.3c0 4.6 5 5.6 5 7.7s-5 3.1-5 7.7M17 4.3c0 4.6-5 5.6-5 7.7s5 3.1 5 7.7" />
//     </>
//   ),
//   "spirit-release-therapy": (
//     <>
//       <circle cx="12" cy="7.3" r="2.3" />
//       <path d="M8.3 19.3c.2-3.6 2-5.4 3.7-5.4s3.5 1.8 3.7 5.4" />
//       <circle cx="6.6" cy="18.4" r="0.5" />
//       <circle cx="5.2" cy="16.3" r="0.4" />
//       <circle cx="17.4" cy="18.4" r="0.5" />
//       <circle cx="18.8" cy="16.3" r="0.4" />
//     </>
//   ),
//   "age-regression": (
//     <>
//       <circle cx="12" cy="12" r="8" />
//       <path d="M12 7.8V12l2.6 1.7" />
//       <path d="M5.6 8.2A7 7 0 0 1 8 5.8" />
//       <path d="M4.4 7.9 5.6 8.2 5.9 6.9" />
//     </>
//   ),
//   "third-party-regression": (
//     <>
//       <path d="M4.3 14V9.8a1.4 1.4 0 0 1 2.8 0V14" />
//       <path d="M3.5 14h5.4v2.7a1 1 0 0 1-1 1H4.5a1 1 0 0 1-1-1V14Z" />
//       <path d="M15.5 14V9.8a1.4 1.4 0 0 1 2.8 0V14" strokeDasharray="2.2 2.2" />
//       <path d="M14.7 14h5.4v2.7a1 1 0 0 1-1 1h-3.4a1 1 0 0 1-1-1V14Z" strokeDasharray="2.2 2.2" />
//     </>
//   ),
//   "energy-exchange": (
//     <>
//       <path d="M4.5 12c0-2.6 1.8-4 3.6-2.2s1.8 4.4 3.6 2.2 1.8-4.4 3.6-2.2 1.8 4.4 3.6 2.2" />
//     </>
//   ),
//   "quantum-therapy": (
//     <>
//       <circle cx="12" cy="12" r="1.5" />
//       <ellipse cx="12" cy="12" rx="8" ry="3.1" transform="rotate(24 12 12)" />
//       <ellipse cx="12" cy="12" rx="8" ry="3.1" transform="rotate(-24 12 12)" />
//       <circle cx="18.6" cy="8.6" r="0.9" />
//     </>
//   ),
//   "couples-and-relationship-counselling": (
//     <>
//       <circle cx="9" cy="12" r="5.3" />
//       <circle cx="15" cy="12" r="5.3" />
//     </>
//   ),
//   "mindfulness-based-therapy": (
//     <>
//       <circle cx="12" cy="12" r="2.6" />
//       <circle cx="12" cy="12" r="6.3" strokeDasharray="1 3.4" />
//     </>
//   ),
// };

// const FALLBACK: ReactNode = <circle cx="12" cy="12" r="8.5" />;

// // six muted, desaturated tones — cycled deterministically per slug so the
// // same condition/therapy always gets the same tone everywhere it appears,
// // while sitting next to differently-toned cards.
// const TONE_CLASSES = ["tone-sage", "tone-brass", "tone-clay", "tone-slate", "tone-plum", "tone-moss"];

// function toneForSlug(slug: string) {
//   let hash = 0;
//   for (let i = 0; i < slug.length; i++) hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
//   return TONE_CLASSES[hash % TONE_CLASSES.length];
// }

// function Mark({ slug, strokeWidth }: { slug: string; strokeWidth: number }) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth={strokeWidth}
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       aria-hidden="true"
//       className="w-full h-full"
//     >
//       {ICONS[slug] ?? FALLBACK}
//     </svg>
//   );
// }

// /**
//  * variant="tile": the original small 48px badge (nav dropdowns, dense lists).
//  * variant="card": a full-bleed illustrated header — a soft gradient wash in
//  * the slug's tone, an oversized faint duplicate of the mark for depth, and
//  * the crisp mark sitting on top. Meant to fill the top of a card the way a
//  * photo would, without needing stock photography of a clinical condition.
//  */
// export default function IconTile({
//   slug,
//   variant = "tile",
//   className = "",
// }: {
//   slug: string;
//   variant?: "tile" | "card";
//   className?: string;
// }) {
//   const tone = toneForSlug(slug);

//   if (variant === "card") {
//     return (
//       <div className={`art-panel ${tone} relative w-full aspect-[4/3] overflow-hidden ${className}`}>
//         {/* oversized, faint duplicate for depth/composition */}
//         <div className="absolute -right-6 -bottom-8 w-32 h-32 opacity-[0.16] rotate-[-8deg]">
//           <Mark slug={slug} strokeWidth={1.1} />
//         </div>
//         {/* crisp foreground mark */}
//         <div className="absolute left-6 bottom-6 w-14 h-14 drop-shadow-sm">
//           <Mark slug={slug} strokeWidth={1.3} />
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className={`icon-tile ${tone} ${className}`}>
//       <div className="w-7 h-7">
//         <Mark slug={slug} strokeWidth={1.4} />
//       </div>
//     </div>
//   );
// }


import { ReactNode } from "react";

/**
 * A small, hand-drawn line-icon system — one distinct mark per condition/therapy,
 * replacing the old repeated generic PlaceholderImage on every card.
 *
 * Each icon is deliberately simple (a handful of strokes, 24x24 grid) so the set
 * reads as one coherent family rather than clip art. Tile color is derived
 * deterministically from the slug, so any listing page (home, /conditions,
 * /therapies) gets consistent, varied color without needing to pass an index down.
 */

const ICONS: Record<string, ReactNode> = {
  // ---- Conditions ----
  anxiety: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M5.5 12c1.2-2.2 2.1 2.2 3.3 0s2.1-4.4 3.3-1.1 2.1 3.3 3.3 1.1 2.1-2.2 3.3 0" />
    </>
  ),
  depression: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5v6" />
      <path d="M8.7 12.2 12 15.5l3.3-3.3" />
      <path d="M8 17.5h8" />
    </>
  ),
  "stress-and-burnout": (
    <>
      <path d="M12 4.5a7.5 7.5 0 1 0 7.5 7.5" />
      <path d="M12 8a4 4 0 1 0 4 4" />
    </>
  ),
  "phobias-and-fears": (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 5.8v1.7M12 16.5v1.7M18.2 12h-1.7M7.5 12H5.8" />
    </>
  ),
  "grief-and-loss": (
    <>
      <path d="M12 4.5c3.2 2 5 5.6 3.3 9.2-1.6 3.1-5.7 3.1-6.9.3-1.4-3.2.7-6.9 3.6-9.5Z" />
      <path d="M10.2 17.8 12.8 13.6" />
    </>
  ),
  "trauma-and-ptsd": (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M9 6.2 12 11l-2.3 2.6L13.5 17" />
    </>
  ),
  "sleep-disorders": (
    <>
      <path d="M16.2 5.2A7.6 7.6 0 1 0 16.2 18.8 6.1 6.1 0 0 1 16.2 5.2Z" />
      <path d="M5 19.2c.9-.8 1.8.8 2.7 0s1.8-.8 2.7 0" />
    </>
  ),
  "drug-or-alcohol-abuse": (
    <>
      <rect x="3.8" y="9.2" width="7" height="5.6" rx="2.8" />
      <rect x="13.2" y="9.2" width="7" height="5.6" rx="2.8" />
      <path d="M10.8 10.4 9.6 13.6M14.4 10.4l-1.2 3.2" />
    </>
  ),
  "sexual-dysfunctions": (
    <>
      <circle cx="9" cy="12" r="5" />
      <path d="M19.3 8.9a5 5 0 1 1-1.8 8.9" />
    </>
  ),
  stammering: (
    <>
      <path d="M4 6.5h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9.5L6 19.5v-3H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2Z" transform="translate(0 -0.3)" />
      <path d="M6 11.2h2M10.5 11.2h2M15.5 11.2h1.5" />
    </>
  ),
  abuse: (
    <>
      <path d="M12 3.3 19 6v6c0 5-3 8-7 9-4-1-7-4-7-9V6l7-2.7Z" />
      <circle cx="12" cy="12" r="1.8" />
    </>
  ),
  abandonment: (
    <>
      <path d="M6.5 11V6.8a1.8 1.8 0 0 1 3.6 0V11" />
      <path d="M5 11h9v3.5a1.8 1.8 0 0 1-1.8 1.8H6.8A1.8 1.8 0 0 1 5 14.5V11Z" />
      <path d="M6.8 16.3v2.4M12.2 16.3v2.4" />
      <path d="M16 8l3 3.5-3 3.5" />
    </>
  ),
  "anger-management": (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 6.8v1.6M12 15.6v1.6M17.2 12h-1.6M8.4 12H6.8" />
      <path d="M15.3 8.7l-1.1 1.1M9.8 14.2l-1.1 1.1M15.3 15.3l-1.1-1.1M9.8 9.8 8.7 8.7" />
    </>
  ),

  // ---- Therapies ----
  "cognitive-behavioural-therapy": (
    <>
      <circle cx="7" cy="17.2" r="1.9" />
      <circle cx="17" cy="17.2" r="1.9" />
      <circle cx="12" cy="6.2" r="1.9" />
      <path d="M8.4 15.6 11 8M15.6 15.6 13 8M8.9 17.2h6.2" />
    </>
  ),
  "behaviour-modification-therapy": (
    <>
      <path d="M4 18.5h3.5v-3H11v-3h3.5v-3H18" />
      <path d="M15.6 8.7 18 9.5l-.8-2.4" />
    </>
  ),
  "clinical-hypnotherapy": (
    <>
      <path d="M12 20a8 8 0 1 1 0-16 6 6 0 1 1 0 12 4 4 0 1 1 0-8 2 2 0 1 1 0 4" />
    </>
  ),
  "ego-state-therapy": (
    <>
      <circle cx="11.5" cy="13" r="6.5" />
      <circle cx="9.5" cy="10" r="3.6" />
      <circle cx="15" cy="8.5" r="2.1" />
    </>
  ),
  "past-life-regression-therapy": (
    <>
      <path d="M7 4.3h10M7 19.7h10" />
      <path d="M7 4.3c0 4.6 5 5.6 5 7.7s-5 3.1-5 7.7M17 4.3c0 4.6-5 5.6-5 7.7s5 3.1 5 7.7" />
    </>
  ),
  "spirit-release-therapy": (
    <>
      <circle cx="12" cy="7.3" r="2.3" />
      <path d="M8.3 19.3c.2-3.6 2-5.4 3.7-5.4s3.5 1.8 3.7 5.4" />
      <circle cx="6.6" cy="18.4" r="0.5" />
      <circle cx="5.2" cy="16.3" r="0.4" />
      <circle cx="17.4" cy="18.4" r="0.5" />
      <circle cx="18.8" cy="16.3" r="0.4" />
    </>
  ),
  "age-regression": (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7.8V12l2.6 1.7" />
      <path d="M5.6 8.2A7 7 0 0 1 8 5.8" />
      <path d="M4.4 7.9 5.6 8.2 5.9 6.9" />
    </>
  ),
  "third-party-regression": (
    <>
      <path d="M4.3 14V9.8a1.4 1.4 0 0 1 2.8 0V14" />
      <path d="M3.5 14h5.4v2.7a1 1 0 0 1-1 1H4.5a1 1 0 0 1-1-1V14Z" />
      <path d="M15.5 14V9.8a1.4 1.4 0 0 1 2.8 0V14" strokeDasharray="2.2 2.2" />
      <path d="M14.7 14h5.4v2.7a1 1 0 0 1-1 1h-3.4a1 1 0 0 1-1-1V14Z" strokeDasharray="2.2 2.2" />
    </>
  ),
  "energy-exchange": (
    <>
      <path d="M4.5 12c0-2.6 1.8-4 3.6-2.2s1.8 4.4 3.6 2.2 1.8-4.4 3.6-2.2 1.8 4.4 3.6 2.2" />
    </>
  ),
  "quantum-therapy": (
    <>
      <circle cx="12" cy="12" r="1.5" />
      <ellipse cx="12" cy="12" rx="8" ry="3.1" transform="rotate(24 12 12)" />
      <ellipse cx="12" cy="12" rx="8" ry="3.1" transform="rotate(-24 12 12)" />
      <circle cx="18.6" cy="8.6" r="0.9" />
    </>
  ),
  "couples-and-relationship-counselling": (
    <>
      <circle cx="9" cy="12" r="5.3" />
      <circle cx="15" cy="12" r="5.3" />
    </>
  ),
  "mindfulness-based-therapy": (
    <>
      <circle cx="12" cy="12" r="2.6" />
      <circle cx="12" cy="12" r="6.3" strokeDasharray="1 3.4" />
    </>
  ),
};

const FALLBACK: ReactNode = <circle cx="12" cy="12" r="8.5" />;

// six tones mixing the calm teal base with warm coral/gold/rose — richer
// and more varied than a pure grey-blue set, cycled deterministically per
// slug so the same condition/therapy always gets the same tone.
const TONE_CLASSES = ["tone-teal", "tone-coral", "tone-gold", "tone-sky", "tone-moss", "tone-rose"];

function toneForSlug(slug: string) {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  return TONE_CLASSES[hash % TONE_CLASSES.length];
}

function Mark({ slug, strokeWidth }: { slug: string; strokeWidth: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="w-full h-full"
    >
      {ICONS[slug] ?? FALLBACK}
    </svg>
  );
}

/**
 * variant="tile": the original small 48px badge (nav dropdowns, dense lists).
 * variant="card": a full-bleed illustrated header — a soft gradient wash in
 * the slug's tone, an oversized faint duplicate of the mark for depth, and
 * the crisp mark sitting on top. Meant to fill the top of a card the way a
 * photo would, without needing stock photography of a clinical condition.
 */
export default function IconTile({
  slug,
  variant = "tile",
  className = "",
}: {
  slug: string;
  variant?: "tile" | "card";
  className?: string;
}) {
  const tone = toneForSlug(slug);

  if (variant === "card") {
    return (
      <div className={`art-panel ${tone} relative w-full aspect-[4/3] overflow-hidden ${className}`}>
        {/* oversized, faint duplicate for depth/composition */}
        <div className="absolute -right-6 -bottom-8 w-32 h-32 opacity-[0.16] rotate-[-8deg]">
          <Mark slug={slug} strokeWidth={1.1} />
        </div>
        {/* crisp foreground mark */}
        <div className="absolute left-6 bottom-6 w-14 h-14 drop-shadow-sm">
          <Mark slug={slug} strokeWidth={1.3} />
        </div>
      </div>
    );
  }

  return (
    <div className={`icon-tile ${tone} ${className}`}>
      <div className="w-7 h-7">
        <Mark slug={slug} strokeWidth={1.4} />
      </div>
    </div>
  );
}