import Section from "@/components/Section";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { BreadcrumbJsonLd } from "@/lib/seo/jsonld";
import { vastuConsultation } from "@/lib/data/about";

export const metadata = buildMetadata({
  title: "Vastu Consultation",
  description: "Vastu consultation services offered alongside psychological support at Chaitanya Raj Psychology & Counselling.",
  path: "/about/vastu-consultation"
});

export default function VastuConsultationPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }, { name: "Vastu Consultation", path: "/about/vastu-consultation" }]} />
      <Section eyebrow="About" title="Vastu Consultation">
        <div className="max-w-2xl space-y-8">
          <p className="text-lg text-ink-soft leading-relaxed">{vastuConsultation.intro}</p>
          <div>
            <h2 className="text-xl mb-3">What to expect</h2>
            <ul className="space-y-2">
              {vastuConsultation.whatToExpect.map((s) => (
                <li key={s} className="flex gap-3 text-ink-soft">
                  <span className="text-gold mt-1">•</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <Link href="/contact" className="btn-primary inline-flex">Enquire</Link>
        </div>
      </Section>
    </>
  );
}
