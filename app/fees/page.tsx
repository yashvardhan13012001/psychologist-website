import Section from "@/components/Section";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Fees | Session Pricing",
  description: "Session fees and payment information for Chaitanya Raj Psychology & Counselling in Vashi, Navi Mumbai.",
  path: "/fees"
});

const fees = [
  { label: "Individual consultation (60 min)", price: "₹2,000" },
  { label: "Follow-up session (45 min)", price: "₹1,500" },
  { label: "Couples session (75 min)", price: "₹2,800" },
  { label: "Online session (45–60 min)", price: "₹1,500 – ₹2,000" }
];

export default function FeesPage() {
  return (
    <Section eyebrow="Fees" title="Session pricing">
      <div className="max-w-2xl">
        <p className="text-ink-soft leading-relaxed mb-8">
          Fees are kept simple and consistent. If cost is a barrier to getting support, mention
          it when you get in touch — a limited number of adjusted-fee slots are available each month.
        </p>
        <div className="card divide-y divide-primary/10">
          {fees.map((f) => (
            <div key={f.label} className="flex items-center justify-between px-6 py-4">
              <span className="text-ink-soft">{f.label}</span>
              <span className="font-mono text-primary-dark">{f.price}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-ink-soft/70 mt-6">
          Payment is accepted via UPI, bank transfer, or cash at the time of each session.
        </p>
        <Link href="/contact" className="btn-primary inline-flex mt-8">
          Book a consultation
        </Link>
      </div>
    </Section>
  );
}
