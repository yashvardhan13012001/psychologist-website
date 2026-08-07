import Section from "@/components/Section";
import { buildMetadata } from "@/lib/seo/metadata";
import { PersonJsonLd } from "@/lib/seo/jsonld";
import { site } from "@/lib/data/site";
import Link from "next/link";

const aboutLinks = [
  { label: "The Founder", href: "/about/the-founder", blurb: "Meet Lt. Col. Rajesh Sharma (Retd.) and his clinical background." },
  { label: "Chaitanya Raj", href: "/about/chaitanya-raj", blurb: "The practice's mission and approach." },
  { label: "Myths and Facts about Hypnotherapy", href: "/about/myths-and-facts-about-hypnotherapy", blurb: "Common misconceptions, addressed directly." },
  // { label: "Media Highlights", href: "/about/media-highlights", blurb: "Press features and interviews." },
  // { label: "Our Team", href: "/about/our-team", blurb: "The people behind the practice." },
  // { label: "Vastu Consultation", href: "/about/vastu-consultation", blurb: "A complementary service for your space." }
];

export const metadata = buildMetadata({
  title: "About | Chaitanya Raj Psychology & Counselling",
  description:
    "Meet Lt. Col. Rajesh Sharma (Retd.), clinical hypnotherapist and counselling psychologist with over 25 years of experience in Navi Mumbai.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <PersonJsonLd />
      <Section eyebrow="About" title="A practice built on discipline and care">
        <div className="max-w-2xl space-y-6 text-ink-soft text-lg leading-relaxed">
          <p>
            {site.name} was founded by {site.founder}, a {site.founderCredentials.toLowerCase()}.
            Two decades of structured, disciplined service before entering full-time clinical
            practice shape the way sessions are run here — methodical, unhurried, and focused
            on what actually helps.
          </p>
          <p>
            The practice combines evidence-based approaches — Cognitive Behavioural Therapy and
            Behaviour Modification Therapy — with clinical hypnotherapy and Ego State Therapy,
            recognised by the British Psychological Society as effective therapeutic techniques
            when practised by a trained clinician.
          </p>
          <p>
            Every client&apos;s process looks different. Some need a structured, short-term plan
            to work through a specific issue; others need a longer, steadier relationship to work
            through something that&apos;s built up over years. Sessions are shaped around what&apos;s
            actually needed, not a fixed programme.
          </p>
          <p>
            The practice is based in Vashi, Navi Mumbai, with both in-person and online sessions
            available for clients who prefer to work remotely.
          </p>
          <Link href="/contact" className="btn-primary inline-flex mt-4">
            Book a consultation
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {aboutLinks.map((link) => (
            <Link key={link.href} href={link.href} className="card p-6 flex flex-col gap-2 hover:border-accent/40 transition-colors">
              <p className="text-lg font-display text-primary-dark">{link.label}</p>
              <p className="text-sm text-ink-soft">{link.blurb}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
