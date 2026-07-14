import Section from "@/components/Section";
import { buildMetadata } from "@/lib/seo/metadata";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/lib/seo/jsonld";
import { hypnotherapyMyths } from "@/lib/data/about";

export const metadata = buildMetadata({
  title: "Myths and Facts about Hypnotherapy",
  description: "Common misconceptions about clinical hypnotherapy, addressed directly — from control and memory to what the evidence actually shows.",
  path: "/about/myths-and-facts-about-hypnotherapy"
});

export default function MythsAndFactsPage() {
  const faqItems = hypnotherapyMyths.map((m) => ({ question: m.myth, answer: m.fact }));

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }, { name: "Myths and Facts about Hypnotherapy", path: "/about/myths-and-facts-about-hypnotherapy" }]} />
      <FAQJsonLd items={faqItems} />
      <Section eyebrow="About" title="Myths and Facts about Hypnotherapy">
        <div className="max-w-2xl space-y-8">
          {hypnotherapyMyths.map((m) => (
            <div key={m.myth} className="card p-6">
              <p className="eyebrow mb-2">Myth</p>
              <p className="text-ink font-medium mb-4">{m.myth}</p>
              <p className="eyebrow mb-2">Fact</p>
              <p className="text-ink-soft leading-relaxed">{m.fact}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
