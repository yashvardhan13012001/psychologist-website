import Link from "next/link";
import Section from "@/components/Section";
import { trainingPrograms } from "@/lib/data/training";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Hypnotherapy & PLR Training Courses in Navi Mumbai",
  description: "Structured training and mentorship in clinical hypnosis and past life regression, from basic to advanced levels, in Navi Mumbai. View the course levels.",
  path: "/training-and-mentorship"
});

export default function TrainingPage() {
  return (
    <Section eyebrow="Training and Mentorship" title="Learn under supervision">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {trainingPrograms.map((t) => (
          <Link
            key={t.slug}
            href={`/training-and-mentorship/${t.slug}`}
            className="card p-6 flex flex-col gap-3 hover:border-accent/40 hover:-translate-y-0.5 transition-all"
          >
            <p className="eyebrow">{t.level}</p>
            <h3 className="text-xl text-primary-dark font-display">{t.name}</h3>
            <p className="text-ink-soft text-sm leading-relaxed">{t.shortDescription}</p>
            <span className="font-mono text-xs uppercase tracking-widest text-accent mt-1">Learn more →</span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
