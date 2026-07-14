import { notFound } from "next/navigation";
import Link from "next/link";
import Section from "@/components/Section";
import { caseStudies, getCaseStudy } from "@/lib/data/caseStudies";
import { getCondition } from "@/lib/data/conditions";
import { buildMetadata } from "@/lib/seo/metadata";
import { BreadcrumbJsonLd } from "@/lib/seo/jsonld";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const study = getCaseStudy(params.slug);
  if (!study) return {};
  return buildMetadata({
    title: study.metaTitle,
    description: study.metaDescription,
    path: `/case-studies/${study.slug}`
  });
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();
  const relatedCondition = getCondition(study.issue);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
          { name: study.title, path: `/case-studies/${study.slug}` }
        ]}
      />
      <Section eyebrow="Case Study" title={study.title}>
        <div className="max-w-2xl space-y-8">
          <div>
            <h2 className="text-xl mb-2">Presenting concern</h2>
            <p className="text-ink-soft leading-relaxed">{study.presentingConcern}</p>
          </div>
          <div>
            <h2 className="text-xl mb-2">Approach</h2>
            <p className="text-ink-soft leading-relaxed">{study.approach}</p>
          </div>
          <div>
            <h2 className="text-xl mb-2">Outcome</h2>
            <p className="text-ink-soft leading-relaxed">{study.outcome}</p>
          </div>

          {relatedCondition && (
            <p className="text-sm text-ink-soft">
              Related:{" "}
              <Link href={`/conditions/${relatedCondition.slug}`} className="text-accent font-medium">
                {relatedCondition.name}
              </Link>
            </p>
          )}

          <p className="text-xs text-ink-soft/60">
            This case study has been anonymised. Identifying details have been changed or removed.
          </p>

          <Link href="/contact" className="btn-primary inline-flex">Book a consultation</Link>
        </div>
      </Section>
    </>
  );
}
