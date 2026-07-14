import Section from "@/components/Section";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { PersonJsonLd, BreadcrumbJsonLd } from "@/lib/seo/jsonld";
import { founder } from "@/lib/data/about";

export const metadata = buildMetadata({
  title: "The Founder",
  description: `Meet ${founder.name}, ${founder.title.toLowerCase()} with over 25 years of clinical experience.`,
  path: "/about/the-founder"
});

export default function FounderPage() {
  return (
    <>
      <PersonJsonLd />
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }, { name: "The Founder", path: "/about/the-founder" }]} />
      <Section eyebrow="About" title="The Founder">
        <div className="max-w-2xl space-y-6">
          <div>
            <p className="text-2xl font-display text-primary-dark">{founder.name}</p>
            <p className="eyebrow mt-1">{founder.title}</p>
          </div>
          <div className="space-y-5 text-ink-soft text-lg leading-relaxed">
            {founder.bio.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <Link href="/contact" className="btn-primary inline-flex mt-4">Book a consultation</Link>
        </div>
      </Section>
    </>
  );
}
