// import Link from "next/link";
// import { site } from "@/lib/data/site";
// import { conditions } from "@/lib/data/conditions";
// import { therapies } from "@/lib/data/therapies";

// export default function Footer() {
//   return (
//     <footer className="bg-primary-dark text-surface-soft mt-24">
//       <div className="mx-auto max-w-6xl px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-10 text-sm">
//         <div className="col-span-2 md:col-span-1">
//           <p className="font-display text-lg text-surface-soft mb-3">{site.shortName}</p>
//           <p className="text-surface-soft/70 leading-relaxed">{site.tagline}</p>
//         </div>
//         <div>
//           <p className="eyebrow text-gold mb-3">Conditions</p>
//           <ul className="space-y-2">
//             {conditions.slice(0, 6).map((c) => (
//               <li key={c.slug}>
//                 <Link href={`/conditions/${c.slug}`} className="text-surface-soft/80 hover:text-gold">
//                   {c.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <p className="eyebrow text-gold mb-3">Therapies</p>
//           <ul className="space-y-2">
//             {therapies.slice(0, 6).map((t) => (
//               <li key={t.slug}>
//                 <Link href={`/therapies/${t.slug}`} className="text-surface-soft/80 hover:text-gold">
//                   {t.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <p className="eyebrow text-gold mb-3">Practice</p>
//           <ul className="space-y-2 text-surface-soft/80">
//             <li>{site.address.street}</li>
//             <li>{site.address.locality}</li>
//             <li>
//               <a href={`tel:${site.phone}`} className="hover:text-gold">
//                 {site.phoneDisplay}
//               </a>
//             </li>
//             <li>
//               <a href={`mailto:${site.email}`} className="hover:text-gold">
//                 {site.email}
//               </a>
//             </li>
//             <li className="pt-1">
//               <Link href="/about" className="hover:text-gold">About</Link>
//             </li>
//             <li>
//               <Link href="/training-and-mentorship" className="hover:text-gold">Training and Mentorship</Link>
//             </li>
//             <li>
//               <Link href="/case-studies" className="hover:text-gold">Case Studies</Link>
//             </li>
//             <li>
//               <Link href="/privacy-policy" className="hover:text-gold">
//                 Privacy Policy
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="border-t border-surface-soft/10 py-5 text-center text-xs text-surface-soft/50">
//         © {new Date().getFullYear()} {site.name}. All rights reserved.
//       </div>
//     </footer>
//   );
// }


import Link from "next/link";
import { site } from "@/lib/data/site";
import { conditions } from "@/lib/data/conditions";
import { therapies } from "@/lib/data/therapies";

export default function Footer() {
  const individualConditions = conditions.filter((c) => c.audience !== "corporate").slice(0, 6);
  const corporateConditions = conditions.filter((c) => c.audience === "corporate");

  return (
    <footer className="bg-primary-dark text-surface-soft mt-24">
      <div className="mx-auto max-w-6xl px-6 py-14 grid grid-cols-2 md:grid-cols-5 gap-10 text-sm">
        <div className="col-span-2 md:col-span-1">
          <p className="font-display text-lg text-surface-soft mb-3">{site.shortName}</p>
          <p className="text-surface-soft/70 leading-relaxed">{site.tagline}</p>
        </div>

        <div>
          <p className="eyebrow text-gold mb-3">Conditions</p>
          <ul className="space-y-2">
            {individualConditions.map((c) => (
              <li key={c.slug}>
                <Link href={`/conditions/${c.slug}`} className="text-surface-soft/80 hover:text-gold">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>

          {corporateConditions.length > 0 && (
            <>
              <p className="eyebrow text-gold mb-3 mt-6">For Organisations</p>
              <ul className="space-y-2">
                {corporateConditions.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/conditions/${c.slug}`} className="text-surface-soft/80 hover:text-gold">
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}

          <p className="pt-2">
            <Link href="/conditions" className="text-surface-soft/60 hover:text-gold text-xs">
              View all conditions →
            </Link>
          </p>
        </div>

        <div>
          <p className="eyebrow text-gold mb-3">Therapies</p>
          <ul className="space-y-2">
            {therapies.slice(0, 6).map((t) => (
              <li key={t.slug}>
                <Link href={`/therapies/${t.slug}`} className="text-surface-soft/80 hover:text-gold">
                  {t.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-gold mb-3">Practice</p>
          <ul className="space-y-2 text-surface-soft/80">
            <li>
              <Link href="/about" className="hover:text-gold">About</Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-gold">Gallery</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-gold">Blog</Link>
            </li>
            <li>
              <Link href="/training-and-mentorship" className="hover:text-gold">Training and Mentorship</Link>
            </li>
            <li>
              <Link href="/case-studies" className="hover:text-gold">Case Studies</Link>
            </li>
            <li>
              <Link href="/corporate-wellness-programs-navi-mumbai" className="hover:text-gold">
                Corporate Wellness
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-gold">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-gold mb-3">Get in touch</p>
          <ul className="space-y-2 text-surface-soft/80">
            <li>{site.address.street}</li>
            <li>{site.address.locality}</li>
            <li>
              <a href={`tel:${site.phone}`} className="hover:text-gold">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-gold">
                {site.email}
              </a>
            </li>
            <li className="pt-2">
              <Link href="/contact" className="btn-primary inline-flex text-xs py-2 px-4">
                Book a session
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-surface-soft/10 py-5 text-center text-xs text-surface-soft/50">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}