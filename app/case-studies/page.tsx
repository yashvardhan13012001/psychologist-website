import Link from "next/link";
import Section from "@/components/Section";
import { caseStudies } from "@/lib/data/caseStudies";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Case Studies",
  description: "Anonymised case studies from Chaitanya Raj Psychology & Counselling, illustrating our approach across common concerns.",
  path: "/case-studies"
});

export default function CaseStudiesPage() {
  return (
    <Section eyebrow="Case Studies" title="How sessions actually help">
      <div className="grid sm:grid-cols-2 gap-6">
        {caseStudies.map((c) => (
          <Link
            key={c.slug}
            href={`/case-studies/${c.slug}`}
            className="card p-6 flex flex-col gap-3 hover:border-accent/40 hover:-translate-y-0.5 transition-all"
          >
            <h3 className="text-xl text-primary-dark font-display">{c.title}</h3>
            <p className="text-ink-soft text-sm leading-relaxed">{c.summary}</p>
            <span className="font-mono text-xs uppercase tracking-widest text-accent mt-1">Read case study →</span>
          </Link>
        ))}
      </div>
      <p className="text-sm text-ink-soft/60 mt-8">
        All case studies are anonymised and shared with client consent. Identifying details are
        changed or removed.
      </p>
    </Section>
  );
}
