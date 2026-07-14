import { notFound } from "next/navigation";
import Link from "next/link";
import Section from "@/components/Section";
import { conditions, getCondition } from "@/lib/data/conditions";
import { getTherapy } from "@/lib/data/therapies";
import { buildMetadata } from "@/lib/seo/metadata";
import { BreadcrumbJsonLd } from "@/lib/seo/jsonld";

export function generateStaticParams() {
  return conditions.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const condition = getCondition(params.slug);
  if (!condition) return {};
  return buildMetadata({
    title: condition.metaTitle,
    description: condition.metaDescription,
    path: `/conditions/${condition.slug}`
  });
}

export default function ConditionPage({ params }: { params: { slug: string } }) {
  const condition = getCondition(params.slug);
  if (!condition) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Conditions", path: "/conditions" },
          { name: condition.name, path: `/conditions/${condition.slug}` }
        ]}
      />
      <Section eyebrow="Condition" title={condition.name}>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <p className="text-lg text-ink-soft leading-relaxed">{condition.intro}</p>

            <div>
              <h2 className="text-xl mb-3">Common signs</h2>
              <ul className="space-y-2">
                {condition.signs.map((s) => (
                  <li key={s} className="flex gap-3 text-ink-soft">
                    <span className="text-gold mt-1">•</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl mb-3">Our approach</h2>
              <p className="text-ink-soft leading-relaxed">{condition.approach}</p>
            </div>

            <Link href="/contact" className="btn-primary inline-flex">
              Book a consultation
            </Link>
          </div>

          <aside className="card p-6 h-fit">
            <p className="eyebrow mb-4">Related therapies</p>
            <ul className="space-y-3">
              {condition.relatedTherapies.map((slug) => {
                const therapy = getTherapy(slug);
                if (!therapy) return null;
                return (
                  <li key={slug}>
                    <Link href={`/therapies/${slug}`} className="text-primary-dark hover:text-accent font-medium">
                      {therapy.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
      </Section>
    </>
  );
}
