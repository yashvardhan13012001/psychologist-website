import { notFound } from "next/navigation";
import Link from "next/link";
import Section from "@/components/Section";
import { therapies, getTherapy } from "@/lib/data/therapies";
import { getCondition } from "@/lib/data/conditions";
import { buildMetadata } from "@/lib/seo/metadata";
import { BreadcrumbJsonLd, MedicalTherapyJsonLd } from "@/lib/seo/jsonld";

export function generateStaticParams() {
  return therapies.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const therapy = getTherapy(params.slug);
  if (!therapy) return {};
  return buildMetadata({
    title: therapy.metaTitle,
    description: therapy.metaDescription,
    path: `/therapies/${therapy.slug}`
  });
}

export default function TherapyPage({ params }: { params: { slug: string } }) {
  const therapy = getTherapy(params.slug);
  if (!therapy) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Therapies", path: "/therapies" },
          { name: therapy.name, path: `/therapies/${therapy.slug}` }
        ]}
      />
      <MedicalTherapyJsonLd
        name={therapy.name}
        description={therapy.metaDescription}
        path={`/therapies/${therapy.slug}`}
      />
      <Section eyebrow="Therapy" title={therapy.name}>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <p className="text-lg text-ink-soft leading-relaxed">{therapy.intro}</p>

            <div>
              <h2 className="text-xl mb-3">What to expect</h2>
              <ul className="space-y-2">
                {therapy.whatToExpect.map((s) => (
                  <li key={s} className="flex gap-3 text-ink-soft">
                    <span className="text-gold mt-1">•</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link href="/contact" className="btn-primary inline-flex">
              Book a consultation
            </Link>
          </div>

          {therapy.goodFor.length > 0 && (
            <aside className="card p-6 h-fit">
              <p className="eyebrow mb-4">Often used for</p>
              <ul className="space-y-3">
                {therapy.goodFor.map((slug) => {
                  const condition = getCondition(slug);
                  if (!condition) return null;
                  return (
                    <li key={slug}>
                      <Link
                        href={`/conditions/${slug}`}
                        className="text-primary-dark hover:text-accent font-medium"
                      >
                        {condition.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </aside>
          )}
        </div>
      </Section>
    </>
  );
}
