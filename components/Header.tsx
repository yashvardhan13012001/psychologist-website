


// // "use client";

// // import { useState } from "react";
// // import Link from "next/link";
// // import { site } from "@/lib/data/site";
// // import { conditions } from "@/lib/data/conditions";
// // import { therapies } from "@/lib/data/therapies";
// // import { trainingPrograms } from "@/lib/data/training";
// // import { caseStudies } from "@/lib/data/caseStudies";

// // type NavChild = { label: string; href: string; group?: string };
// // type NavItem = { label: string; href: string; children?: NavChild[] };

// // const issuesChildren: NavChild[] = [
// //   ...conditions
// //     .filter((c) => c.audience !== "corporate")
// //     .map((c) => ({ label: c.name, href: `/conditions/${c.slug}`, group: "Individuals" })),
// //   ...conditions
// //     .filter((c) => c.audience === "corporate")
// //     .map((c) => ({ label: c.name, href: `/conditions/${c.slug}`, group: "Organisations" }))
// // ];

// // const nav: NavItem[] = [
// //   {
// //     label: "About",
// //     href: "/#about",
// //     children: [
// //       { label: "The Founder", href: "/about/the-founder" },
// //       { label: "Myths and Facts about Hypnotherapy", href: "/about/myths-and-facts-about-hypnotherapy" },
// //       { label: "Media Highlights", href: "/about/media-highlights" },
// //       { label: "Gallery", href: "/gallery" }
// //     ]
// //   },
// //   {
// //     label: "Issues",
// //     href: "/conditions",
// //     children: issuesChildren
// //   },
// //   {
// //     label: "Corporate Programs",
// //     href: "/corporate-wellness-programs-navi-mumbai"
// //   },
// //   {
// //     label: "Training and Mentorship",
// //     href: "/training-and-mentorship",
// //     children: trainingPrograms.map((t) => ({ label: t.name, href: `/training-and-mentorship/${t.slug}` }))
// //   },
// //   { label: "Blog", href: "/blog" },
// //   {
// //     label: "Case Studies",
// //     href: "/case-studies",
// //     children: caseStudies.map((c) => ({ label: c.title, href: `/case-studies/${c.slug}` }))
// //   },
// //   { label: "Contact", href: "/contact" }
// // ];

// // function groupChildren(children: NavChild[]): [string, NavChild[]][] {
// //   const order: string[] = [];
// //   const map = new Map<string, NavChild[]>();

// //   for (const child of children) {
// //     const key = child.group ?? "";
// //     if (!map.has(key)) {
// //       order.push(key);
// //       map.set(key, []);
// //     }
// //     map.get(key)!.push(child);
// //   }

// //   return order.map((key) => [key, map.get(key)!]);
// // }

// // export default function Header() {
// //   const [mobileOpen, setMobileOpen] = useState(false);
// //   const [mobileSection, setMobileSection] = useState<string | null>(null);

// //   function handleAboutClick(e: React.MouseEvent<HTMLAnchorElement>) {
// //     if (typeof window !== "undefined" && window.location.pathname === "/") {
// //       e.preventDefault();
// //       document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
// //     }
// //   }

// //   return (
// //     <header className="sticky top-0 z-40 bg-bg/95 backdrop-blur border-b border-primary/10">
// //       <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between gap-4">
// //         <Link href="/" className="font-display text-3xl text-primary-dark shrink-0 leading-none">
// //           {site.shortName}
// //         </Link>

// //         {/* Desktop nav */}
// //         <nav className="hidden lg:flex items-center gap-0.5 font-body text-sm text-ink flex-1 justify-center whitespace-nowrap">
// //           {nav.map((item) => (
// //             <div key={item.label} className="relative group">
// //               <Link
// //                 href={item.href}
// //                 onClick={item.label === "About" ? handleAboutClick : undefined}
// //                 className="px-2.5 py-2 inline-flex items-center gap-1 hover:text-accent rounded-md whitespace-nowrap"
// //               >
// //                 {item.label}
// //                 {item.children && (
// //                   <svg width="10" height="10" viewBox="0 0 10 10" className="mt-0.5 opacity-60">
// //                     <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
// //                   </svg>
// //                 )}
// //               </Link>

// //               {item.children && (() => {
// //                 const groups = groupChildren(item.children);
// //                 const isMultiGroup = groups.length > 1;

// //                 return (
// //                   <div
// //                     className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
// //                                transition-all duration-150 absolute left-0 top-full pt-2 z-50"
// //                   >
// //                     <div
// //                       className={`flex bg-surface rounded-xl border border-primary/10
// //                                  shadow-[0_12px_32px_rgba(18,58,54,0.14)] py-2 ${
// //                                    isMultiGroup ? "" : "w-72"
// //                                  }`}
// //                     >
// //                       {groups.map(([groupLabel, groupItems], i) => (
// //                         <ul
// //                           key={groupLabel || item.label}
// //                           className={`py-1 max-h-[70vh] overflow-y-auto ${
// //                             isMultiGroup
// //                               ? `w-64 shrink-0 ${i > 0 ? "border-l border-primary/10" : ""}`
// //                               : "w-full"
// //                           }`}
// //                         >
// //                           {/* {groupLabel && (
// //                             <li className="px-4 pt-2 pb-1 text-xs font-medium uppercase tracking-wide text-ink-soft/80">
// //                               {groupLabel}
// //                             </li>
// //                           )} */}
// //                           {groupLabel && (
// //   <li className="px-4 pt-2 pb-1 text-xs font-semibold uppercase tracking-wide text-black">
// //     {groupLabel}
// //   </li>
// // )}
// //                           {groupItems.map((child) => (
// //                             <li key={child.href}>
// //                               <Link
// //                                 href={child.href}
// //                                 className="block px-4 py-2.5 text-sm text-ink hover:bg-surface-soft hover:text-accent"
// //                               >
// //                                 {child.label}
// //                               </Link>
// //                             </li>
// //                           ))}
// //                         </ul>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 );
// //               })()}
// //             </div>
// //           ))}
// //         </nav>

// //         <div className="flex items-center gap-3">
// //           <Link href="/contact" className="hidden lg:inline-flex btn-primary text-sm py-2.5 px-5">
// //             Book a session
// //           </Link>
// //           <button
// //             onClick={() => setMobileOpen((v) => !v)}
// //             className="lg:hidden p-2 -mr-2"
// //             aria-label="Toggle menu"
// //             aria-expanded={mobileOpen}
// //           >
// //             <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
// //               {mobileOpen ? (
// //                 <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
// //               ) : (
// //                 <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
// //               )}
// //             </svg>
// //           </button>
// //         </div>
// //       </div>

// //       {/* Mobile nav */}
// //       {mobileOpen && (
// //         <nav className="lg:hidden border-t border-primary/10 bg-bg px-6 py-4 max-h-[75vh] overflow-y-auto">
// //           {nav.map((item) => (
// //             <div key={item.label} className="border-b border-primary/10 last:border-0">
// //               <div className="flex items-center justify-between">
// //                 <Link
// //                   href={item.href}
// //                   className="py-3 text-ink font-medium flex-1"
// //                   onClick={(e) => {
// //                     if (item.label === "About") handleAboutClick(e);
// //                     setMobileOpen(false);
// //                   }}
// //                 >
// //                   {item.label}
// //                 </Link>
// //                 {item.children && (
// //                   <button
// //                     onClick={() =>
// //                       setMobileSection((s) => (s === item.label ? null : item.label))
// //                     }
// //                     className="p-3 text-ink"
// //                     aria-label={`Toggle ${item.label} submenu`}
// //                   >
// //                     <svg
// //                       width="12"
// //                       height="12"
// //                       viewBox="0 0 10 10"
// //                       className={`transition-transform ${mobileSection === item.label ? "rotate-180" : ""}`}
// //                     >
// //                       <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
// //                     </svg>
// //                   </button>
// //                 )}
// //               </div>
// //               {item.children && mobileSection === item.label && (
// //                 <div className="pb-3 pl-3">
// //                   {groupChildren(item.children).map(([groupLabel, groupItems]) => (
// //                     <ul key={groupLabel || item.label}>
// //                       {/* {groupLabel && (
// //                         <li className="pt-2 pb-1 text-xs font-medium uppercase tracking-wide text-ink-soft/80">
// //                           {groupLabel}
// //                         </li>
// //                       )} */}
// //                       {groupLabel && (
// //   <li className="pt-2 pb-1 text-xs font-semibold uppercase tracking-wide text-black">
// //     {groupLabel}
// //   </li>
// // )}
// //                       {groupItems.map((child) => (
// //                         <li key={child.href}>
// //                           <Link
// //                             href={child.href}
// //                             className="block py-2 text-sm text-ink hover:text-accent"
// //                             onClick={() => setMobileOpen(false)}
// //                           >
// //                             {child.label}
// //                           </Link>
// //                         </li>
// //                       ))}
// //                     </ul>
// //                   ))}
// //                 </div>
// //               )}
// //             </div>
// //           ))}
// //           <Link
// //             href="/contact"
// //             className="btn-primary w-full mt-4"
// //             onClick={() => setMobileOpen(false)}
// //           >
// //             Book a session
// //           </Link>
// //         </nav>
// //       )}
// //     </header>
// //   );
// // }



// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { site } from "@/lib/data/site";
// import { conditions } from "@/lib/data/conditions";
// import { therapies } from "@/lib/data/therapies";
// import { trainingPrograms } from "@/lib/data/training";
// import { caseStudies } from "@/lib/data/caseStudies";

// type NavChild = { label: string; href: string; group?: string };
// type NavItem = { label: string; href: string; children?: NavChild[] };

// const issuesChildren: NavChild[] = [
//   ...conditions
//     .filter((c) => c.audience !== "corporate")
//     .map((c) => ({ label: c.name, href: `/conditions/${c.slug}`, group: "Individuals" })),
//   ...conditions
//     .filter((c) => c.audience === "corporate")
//     .map((c) => ({ label: c.name, href: `/conditions/${c.slug}`, group: "Organisations" }))
// ];

// const nav: NavItem[] = [
//   {
//     label: "About",
//     href: "/#about",
//     children: [
//       { label: "The Founder", href: "/about/the-founder" },
//       { label: "Myths and Facts about Hypnotherapy", href: "/about/myths-and-facts-about-hypnotherapy" },
//       { label: "Media Highlights", href: "/about/media-highlights" },
//       { label: "Gallery", href: "/gallery" }
//     ]
//   },
//   {
//     label: "Issues",
//     href: "/conditions",
//     children: issuesChildren
//   },
//   {
//     label: "Counselling",
//     href: "/counselling-navi-mumbai"
//   },
//   {
//     label: "Hypnotherapy",
//     href: "/hypnotherapy-navi-mumbai"
//   },
//   {
//     label: "Corporate Programs",
//     href: "/corporate-wellness-programs-navi-mumbai"
//   },
//   {
//     label: "Training and Mentorship",
//     href: "/training-and-mentorship",
//     children: trainingPrograms.map((t) => ({ label: t.name, href: `/training-and-mentorship/${t.slug}` }))
//   },
//   { label: "Blog", href: "/blog" },
//   {
//     label: "Case Studies",
//     href: "/case-studies",
//     children: caseStudies.map((c) => ({ label: c.title, href: `/case-studies/${c.slug}` }))
//   },
//   { label: "Contact", href: "/contact" }
// ];

// function groupChildren(children: NavChild[]): [string, NavChild[]][] {
//   const order: string[] = [];
//   const map = new Map<string, NavChild[]>();

//   for (const child of children) {
//     const key = child.group ?? "";
//     if (!map.has(key)) {
//       order.push(key);
//       map.set(key, []);
//     }
//     map.get(key)!.push(child);
//   }

//   return order.map((key) => [key, map.get(key)!]);
// }

// export default function Header() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [mobileSection, setMobileSection] = useState<string | null>(null);

//   function handleAboutClick(e: React.MouseEvent<HTMLAnchorElement>) {
//     if (typeof window !== "undefined" && window.location.pathname === "/") {
//       e.preventDefault();
//       document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
//     }
//   }

//   return (
//     <header className="sticky top-0 z-40 bg-bg/95 backdrop-blur border-b border-primary/10">
//       <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between gap-4">
//         <Link href="/" className="font-display text-3xl text-primary-dark shrink-0 leading-none">
//           {site.shortName}
//         </Link>

//         {/* Desktop nav */}
//         <nav className="hidden lg:flex items-center gap-0.5 font-body text-sm text-ink flex-1 justify-center whitespace-nowrap">
//           {nav.map((item) => (
//             <div key={item.label} className="relative group">
//               <Link
//                 href={item.href}
//                 onClick={item.label === "About" ? handleAboutClick : undefined}
//                 className="px-2.5 py-2 inline-flex items-center gap-1 hover:text-accent rounded-md whitespace-nowrap"
//               >
//                 {item.label}
//                 {item.children && (
//                   <svg width="10" height="10" viewBox="0 0 10 10" className="mt-0.5 opacity-60">
//                     <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
//                   </svg>
//                 )}
//               </Link>

//               {item.children && (() => {
//                 const groups = groupChildren(item.children);
//                 const isMultiGroup = groups.length > 1;

//                 return (
//                   <div
//                     className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
//                                transition-all duration-150 absolute left-0 top-full pt-2 z-50"
//                   >
//                     <div
//                       className={`flex bg-surface rounded-xl border border-primary/10
//                                  shadow-[0_12px_32px_rgba(18,58,54,0.14)] py-2 ${
//                                    isMultiGroup ? "" : "w-72"
//                                  }`}
//                     >
//                       {groups.map(([groupLabel, groupItems], i) => (
//                         <ul
//                           key={groupLabel || item.label}
//                           className={`py-1 max-h-[70vh] overflow-y-auto ${
//                             isMultiGroup
//                               ? `w-64 shrink-0 ${i > 0 ? "border-l border-primary/10" : ""}`
//                               : "w-full"
//                           }`}
//                         >
//                           {/* {groupLabel && (
//                             <li className="px-4 pt-2 pb-1 text-xs font-medium uppercase tracking-wide text-ink-soft/80">
//                               {groupLabel}
//                             </li>
//                           )} */}
//                           {groupLabel && (
//   <li className="px-4 pt-2 pb-1 text-xs font-semibold uppercase tracking-wide text-black">
//     {groupLabel}
//   </li>
// )}
//                           {groupItems.map((child) => (
//                             <li key={child.href}>
//                               <Link
//                                 href={child.href}
//                                 className="block px-4 py-2.5 text-sm text-ink hover:bg-surface-soft hover:text-accent"
//                               >
//                                 {child.label}
//                               </Link>
//                             </li>
//                           ))}
//                         </ul>
//                       ))}
//                     </div>
//                   </div>
//                 );
//               })()}
//             </div>
//           ))}
//         </nav>

//         <div className="flex items-center gap-3">
//           <Link href="/contact" className="hidden lg:inline-flex btn-primary text-sm py-2.5 px-5">
//             Book a session
//           </Link>
//           <button
//             onClick={() => setMobileOpen((v) => !v)}
//             className="lg:hidden p-2 -mr-2"
//             aria-label="Toggle menu"
//             aria-expanded={mobileOpen}
//           >
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//               {mobileOpen ? (
//                 <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
//               ) : (
//                 <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
//               )}
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile nav */}
//       {mobileOpen && (
//         <nav className="lg:hidden border-t border-primary/10 bg-bg px-6 py-4 max-h-[75vh] overflow-y-auto">
//           {nav.map((item) => (
//             <div key={item.label} className="border-b border-primary/10 last:border-0">
//               <div className="flex items-center justify-between">
//                 <Link
//                   href={item.href}
//                   className="py-3 text-ink font-medium flex-1"
//                   onClick={(e) => {
//                     if (item.label === "About") handleAboutClick(e);
//                     setMobileOpen(false);
//                   }}
//                 >
//                   {item.label}
//                 </Link>
//                 {item.children && (
//                   <button
//                     onClick={() =>
//                       setMobileSection((s) => (s === item.label ? null : item.label))
//                     }
//                     className="p-3 text-ink"
//                     aria-label={`Toggle ${item.label} submenu`}
//                   >
//                     <svg
//                       width="12"
//                       height="12"
//                       viewBox="0 0 10 10"
//                       className={`transition-transform ${mobileSection === item.label ? "rotate-180" : ""}`}
//                     >
//                       <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
//                     </svg>
//                   </button>
//                 )}
//               </div>
//               {item.children && mobileSection === item.label && (
//                 <div className="pb-3 pl-3">
//                   {groupChildren(item.children).map(([groupLabel, groupItems]) => (
//                     <ul key={groupLabel || item.label}>
//                       {/* {groupLabel && (
//                         <li className="pt-2 pb-1 text-xs font-medium uppercase tracking-wide text-ink-soft/80">
//                           {groupLabel}
//                         </li>
//                       )} */}
//                       {groupLabel && (
//   <li className="pt-2 pb-1 text-xs font-semibold uppercase tracking-wide text-black">
//     {groupLabel}
//   </li>
// )}
//                       {groupItems.map((child) => (
//                         <li key={child.href}>
//                           <Link
//                             href={child.href}
//                             className="block py-2 text-sm text-ink hover:text-accent"
//                             onClick={() => setMobileOpen(false)}
//                           >
//                             {child.label}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//           <Link
//             href="/contact"
//             className="btn-primary w-full mt-4"
//             onClick={() => setMobileOpen(false)}
//           >
//             Book a session
//           </Link>
//         </nav>
//       )}
//     </header>
//   );
// }







"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/data/site";
import { conditions } from "@/lib/data/conditions";
import { therapies } from "@/lib/data/therapies";
import { trainingPrograms } from "@/lib/data/training";
import { caseStudies } from "@/lib/data/caseStudies";

type NavChild = { label: string; href: string; group?: string };
type NavItem = { label: string; href: string; children?: NavChild[] };

const issuesChildren: NavChild[] = [
  ...conditions
    .filter((c) => c.audience !== "corporate")
    .map((c) => ({ label: c.name, href: `/conditions/${c.slug}`, group: "Individuals" })),
  ...conditions
    .filter((c) => c.audience === "corporate")
    .map((c) => ({ label: c.name, href: `/conditions/${c.slug}`, group: "Organisations" }))
];

const nav: NavItem[] = [
  {
    label: "About",
    href: "/#about",
    children: [
      { label: "The Founder", href: "/about/the-founder" },
      { label: "Myths and Facts about Hypnotherapy", href: "/about/myths-and-facts-about-hypnotherapy" },
      { label: "Media Highlights", href: "/about/media-highlights" },
      { label: "Gallery", href: "/gallery" }
    ]
  },
  {
    label: "Issues",
    href: "/conditions",
    children: issuesChildren
  },
  {
    label: "Counselling",
    href: "/counselling-navi-mumbai",
    children: [
      { label: "Counselling in Navi Mumbai", href: "/counselling-navi-mumbai" },
      { label: "Couples Counselling", href: "/couples-counselling-navi-mumbai" }
    ]
  },
  {
    label: "International Clients",
    href: "/online-therapy-international-clients"
  },
  {
    label: "Hypnotherapy",
    href: "/hypnotherapy-navi-mumbai"
  },
  {
    label: "Corporate Programs",
    href: "/corporate-wellness-programs-navi-mumbai"
  },
  {
    label: "Training and Mentorship",
    href: "/training-and-mentorship",
    children: trainingPrograms.map((t) => ({ label: t.name, href: `/training-and-mentorship/${t.slug}` }))
  },
  { label: "Blog", href: "/blog" },
  {
    label: "Case Studies",
    href: "/case-studies",
    children: caseStudies.map((c) => ({ label: c.title, href: `/case-studies/${c.slug}` }))
  },
  { label: "Contact", href: "/contact" }
];

function groupChildren(children: NavChild[]): [string, NavChild[]][] {
  const order: string[] = [];
  const map = new Map<string, NavChild[]>();

  for (const child of children) {
    const key = child.group ?? "";
    if (!map.has(key)) {
      order.push(key);
      map.set(key, []);
    }
    map.get(key)!.push(child);
  }

  return order.map((key) => [key, map.get(key)!]);
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  function handleAboutClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      e.preventDefault();
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <header className="sticky top-0 z-40 bg-bg/95 backdrop-blur border-b border-primary/10">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="font-display text-3xl text-primary-dark shrink-0 leading-none">
          {site.shortName}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5 font-body text-sm text-ink flex-1 justify-center whitespace-nowrap">
          {nav.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                href={item.href}
                onClick={item.label === "About" ? handleAboutClick : undefined}
                className="px-2.5 py-2 inline-flex items-center gap-1 hover:text-accent rounded-md whitespace-nowrap"
              >
                {item.label}
                {item.children && (
                  <svg width="10" height="10" viewBox="0 0 10 10" className="mt-0.5 opacity-60">
                    <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </Link>

              {item.children && (() => {
                const groups = groupChildren(item.children);
                const isMultiGroup = groups.length > 1;

                return (
                  <div
                    className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                               transition-all duration-150 absolute left-0 top-full pt-2 z-50"
                  >
                    <div
                      className={`flex bg-surface rounded-xl border border-primary/10
                                 shadow-[0_12px_32px_rgba(18,58,54,0.14)] py-2 ${
                                   isMultiGroup ? "" : "w-72"
                                 }`}
                    >
                      {groups.map(([groupLabel, groupItems], i) => (
                        <ul
                          key={groupLabel || item.label}
                          className={`py-1 max-h-[70vh] overflow-y-auto ${
                            isMultiGroup
                              ? `w-64 shrink-0 ${i > 0 ? "border-l border-primary/10" : ""}`
                              : "w-full"
                          }`}
                        >
                          {/* {groupLabel && (
                            <li className="px-4 pt-2 pb-1 text-xs font-medium uppercase tracking-wide text-ink-soft/80">
                              {groupLabel}
                            </li>
                          )} */}
                          {groupLabel && (
  <li className="px-4 pt-2 pb-1 text-xs font-semibold uppercase tracking-wide text-black">
    {groupLabel}
  </li>
)}
                          {groupItems.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className="block px-4 py-2.5 text-sm text-ink hover:bg-surface-soft hover:text-accent"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden lg:inline-flex btn-primary text-sm py-2.5 px-5">
            Book a session
          </Link>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden p-2 -mr-2"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              {mobileOpen ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-primary/10 bg-bg px-6 py-4 max-h-[75vh] overflow-y-auto">
          {nav.map((item) => (
            <div key={item.label} className="border-b border-primary/10 last:border-0">
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  className="py-3 text-ink font-medium flex-1"
                  onClick={(e) => {
                    if (item.label === "About") handleAboutClick(e);
                    setMobileOpen(false);
                  }}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <button
                    onClick={() =>
                      setMobileSection((s) => (s === item.label ? null : item.label))
                    }
                    className="p-3 text-ink"
                    aria-label={`Toggle ${item.label} submenu`}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 10 10"
                      className={`transition-transform ${mobileSection === item.label ? "rotate-180" : ""}`}
                    >
                      <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                )}
              </div>
              {item.children && mobileSection === item.label && (
                <div className="pb-3 pl-3">
                  {groupChildren(item.children).map(([groupLabel, groupItems]) => (
                    <ul key={groupLabel || item.label}>
                      {/* {groupLabel && (
                        <li className="pt-2 pb-1 text-xs font-medium uppercase tracking-wide text-ink-soft/80">
                          {groupLabel}
                        </li>
                      )} */}
                      {groupLabel && (
  <li className="pt-2 pb-1 text-xs font-semibold uppercase tracking-wide text-black">
    {groupLabel}
  </li>
)}
                      {groupItems.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block py-2 text-sm text-ink hover:text-accent"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            className="btn-primary w-full mt-4"
            onClick={() => setMobileOpen(false)}
          >
            Book a session
          </Link>
        </nav>
      )}
    </header>
  );
}