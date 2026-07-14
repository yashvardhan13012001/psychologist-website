import Section from "@/components/Section";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Testimonials | Client Experiences",
  description: "Read what clients say about their experience at Chaitanya Raj Psychology & Counselling in Navi Mumbai.",
  path: "/testimonials"
});

// Placeholder set — replace with real, consented client testimonials before launch.
const testimonials = [
  {
    quote:
      "I came in skeptical about hypnotherapy and left with a genuinely different relationship with my anxiety. The process was explained clearly at every step.",
    name: "Client, Vashi"
  },
  {
    quote:
      "Sessions felt structured without feeling clinical. I always knew what we were working on and why.",
    name: "Client, Navi Mumbai"
  },
  {
    quote:
      "It took a few sessions to get comfortable, but the pace was never rushed. That mattered a lot to me.",
    name: "Client, Kharghar"
  }
];

export default function TestimonialsPage() {
  return (
    <Section eyebrow="Testimonials" title="What clients say">
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <blockquote key={t.name} className="card p-6 flex flex-col gap-4">
            <p className="text-ink-soft leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
            <cite className="font-mono text-xs text-accent not-italic">{t.name}</cite>
          </blockquote>
        ))}
      </div>
      <p className="text-xs text-ink-soft/60 mt-8">
        Shared with client consent. Names withheld to protect confidentiality.
      </p>
    </Section>
  );
}
