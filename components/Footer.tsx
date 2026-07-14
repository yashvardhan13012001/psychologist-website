import Link from "next/link";
import { site } from "@/lib/data/site";
import { conditions } from "@/lib/data/conditions";
import { therapies } from "@/lib/data/therapies";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-surface-soft mt-24">
      <div className="mx-auto max-w-6xl px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-10 text-sm">
        <div className="col-span-2 md:col-span-1">
          <p className="font-display text-lg text-surface-soft mb-3">{site.shortName}</p>
          <p className="text-surface-soft/70 leading-relaxed">{site.tagline}</p>
        </div>
        <div>
          <p className="eyebrow text-gold mb-3">Conditions</p>
          <ul className="space-y-2">
            {conditions.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link href={`/conditions/${c.slug}`} className="text-surface-soft/80 hover:text-gold">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
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
            <li className="pt-1">
              <Link href="/about" className="hover:text-gold">About</Link>
            </li>
            <li>
              <Link href="/training-and-mentorship" className="hover:text-gold">Training and Mentorship</Link>
            </li>
            <li>
              <Link href="/case-studies" className="hover:text-gold">Case Studies</Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-gold">
                Privacy Policy
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
