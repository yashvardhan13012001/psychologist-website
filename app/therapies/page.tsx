import Section from "@/components/Section";
import TherapyCard from "@/components/TherapyCard";
import { therapies } from "@/lib/data/therapies";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Therapies We Practise | Psychologist in Navi Mumbai",
  description:
    "CBT, clinical hypnotherapy, Ego State Therapy, couples counselling and more — explore the therapeutic approaches used at our Vashi practice.",
  path: "/therapies"
});

export default function TherapiesPage() {
  return (
    <Section eyebrow="Therapies" title="How we work">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {therapies.map((t) => (
          <TherapyCard key={t.slug} therapy={t} />
        ))}
      </div>
    </Section>
  );
}
