// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { site } from "@/lib/data/site";
// import { conditions } from "@/lib/data/conditions";
// import { therapies } from "@/lib/data/therapies";
// import { trainingPrograms } from "@/lib/data/training";
// import { caseStudies } from "@/lib/data/caseStudies";

// type NavChild = { label: string; href: string };
// type NavItem = { label: string; href: string; children?: NavChild[] };

// const nav: NavItem[] = [
//   {
//     label: "About",
//     href: "/about",
//     children: [
//       { label: "The Founder", href: "/about/the-founder" },
//       { label: "Chaitanya Raj", href: "/about/chaitanya-raj" },
//       { label: "Myths and Facts about Hypnotherapy", href: "/about/myths-and-facts-about-hypnotherapy" },
//       { label: "Media Highlights", href: "/about/media-highlights" },
//       { label: "Our Team", href: "/about/our-team" },
//       { label: "Vastu Consultation", href: "/about/vastu-consultation" }
//     ]
//   },
//   {
//     label: "Issues",
//     href: "/conditions",
//     children: conditions.map((c) => ({ label: c.name, href: `/conditions/${c.slug}` }))
//   },
//   {
//     label: "Therapies",
//     href: "/therapies",
//     children: therapies.map((t) => ({ label: t.name, href: `/therapies/${t.slug}` }))
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

// export default function Header() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [mobileSection, setMobileSection] = useState<string | null>(null);

//   return (
//     <header className="sticky top-0 z-40 bg-bg/95 backdrop-blur border-b border-primary/10">
//       <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
//         <Link href="/" className="font-display text-xl text-primary-dark shrink-0">
//           {site.shortName}
//         </Link>

//         {/* Desktop nav */}
//         <nav className="hidden lg:flex items-center gap-1 font-body text-sm text-ink-soft">
//           {nav.map((item) => (
//             <div key={item.label} className="relative group">
//               <Link
//                 href={item.href}
//                 className="px-3 py-2 inline-flex items-center gap-1 hover:text-accent rounded-md"
//               >
//                 {item.label}
//                 {item.children && (
//                   <svg width="10" height="10" viewBox="0 0 10 10" className="mt-0.5 opacity-60">
//                     <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
//                   </svg>
//                 )}
//               </Link>

//               {item.children && (
//                 <div
//                   className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
//                              transition-all duration-150 absolute left-0 top-full pt-2 z-50"
//                 >
//                   <ul
//                     className="w-72 max-h-[70vh] overflow-y-auto bg-surface rounded-xl border border-primary/10
//                                shadow-[0_12px_32px_rgba(34,54,42,0.14)] py-2"
//                   >
//                     {item.children.map((child) => (
//                       <li key={child.href}>
//                         <Link
//                           href={child.href}
//                           className="block px-4 py-2.5 text-sm text-ink-soft hover:bg-surface-soft hover:text-accent"
//                         >
//                           {child.label}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
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
//                   onClick={() => setMobileOpen(false)}
//                 >
//                   {item.label}
//                 </Link>
//                 {item.children && (
//                   <button
//                     onClick={() =>
//                       setMobileSection((s) => (s === item.label ? null : item.label))
//                     }
//                     className="p-3 text-ink-soft"
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
//                 <ul className="pb-3 pl-3">
//                   {item.children.map((child) => (
//                     <li key={child.href}>
//                       <Link
//                         href={child.href}
//                         className="block py-2 text-sm text-ink-soft hover:text-accent"
//                         onClick={() => setMobileOpen(false)}
//                       >
//                         {child.label}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
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

type NavChild = { label: string; href: string };
type NavItem = { label: string; href: string; children?: NavChild[] };

const nav: NavItem[] = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "The Founder", href: "/about/the-founder" },
      { label: "Chaitanya Raj", href: "/about/chaitanya-raj" },
      { label: "Myths and Facts about Hypnotherapy", href: "/about/myths-and-facts-about-hypnotherapy" },
      { label: "Media Highlights", href: "/about/media-highlights" },
      { label: "Gallery", href: "/gallery" },
      { label: "Our Team", href: "/about/our-team" },
      { label: "Vastu Consultation", href: "/about/vastu-consultation" }
    ]
  },
  {
    label: "Issues",
    href: "/conditions",
    children: conditions.map((c) => ({ label: c.name, href: `/conditions/${c.slug}` }))
  },
  {
    label: "Therapies",
    href: "/therapies",
    children: therapies.map((t) => ({ label: t.name, href: `/therapies/${t.slug}` }))
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

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 bg-bg/95 backdrop-blur border-b border-primary/10">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-display text-xl text-primary-dark shrink-0">
          {site.shortName}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1 font-body text-sm text-ink-soft">
          {nav.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                href={item.href}
                className="px-3 py-2 inline-flex items-center gap-1 hover:text-accent rounded-md"
              >
                {item.label}
                {item.children && (
                  <svg width="10" height="10" viewBox="0 0 10 10" className="mt-0.5 opacity-60">
                    <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </Link>

              {item.children && (
                <div
                  className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                             transition-all duration-150 absolute left-0 top-full pt-2 z-50"
                >
                  <ul
                    className="w-72 max-h-[70vh] overflow-y-auto bg-surface rounded-xl border border-primary/10
                               shadow-[0_12px_32px_rgba(18,58,54,0.14)] py-2"
                  >
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-ink-soft hover:bg-surface-soft hover:text-accent"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
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
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <button
                    onClick={() =>
                      setMobileSection((s) => (s === item.label ? null : item.label))
                    }
                    className="p-3 text-ink-soft"
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
                <ul className="pb-3 pl-3">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="block py-2 text-sm text-ink-soft hover:text-accent"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
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