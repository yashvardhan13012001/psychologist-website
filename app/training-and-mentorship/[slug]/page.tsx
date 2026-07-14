import { notFound } from "next/navigation";
import Link from "next/link";
import Section from "@/components/Section";
import { trainingPrograms, getTrainingProgram } from "@/lib/data/training";
import { buildMetadata } from "@/lib/seo/metadata";
import { BreadcrumbJsonLd } from "@/lib/seo/jsonld";

export function generateStaticParams() {
  return trainingPrograms.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const program = getTrainingProgram(params.slug);
  if (!program) return {};
  return buildMetadata({
    title: program.metaTitle,
    description: program.metaDescription,
    path: `/training-and-mentorship/${program.slug}`
  });
}

export default function TrainingProgramPage({ params }: { params: { slug: string } }) {
  const program = getTrainingProgram(params.slug);
  if (!program) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Training and Mentorship", path: "/training-and-mentorship" },
          { name: program.name, path: `/training-and-mentorship/${program.slug}` }
        ]}
      />
      <Section eyebrow={program.level} title={program.name}>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <p className="text-lg text-ink-soft leading-relaxed">{program.intro}</p>
            <div>
              <h2 className="text-xl mb-3">Curriculum</h2>
              <ul className="space-y-2">
                {program.curriculum.map((s) => (
                  <li key={s} className="flex gap-3 text-ink-soft">
                    <span className="text-gold mt-1">•</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/contact" className="btn-primary inline-flex">Enquire about this program</Link>
          </div>
          <aside className="card p-6 h-fit">
            <p className="eyebrow mb-4">Who it's for</p>
            <ul className="space-y-3">
              {program.whoItsFor.map((w) => (
                <li key={w} className="text-ink-soft text-sm">{w}</li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>
    </>
  );
}
