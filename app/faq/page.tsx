import Section from "@/components/Section";
import { buildMetadata } from "@/lib/seo/metadata";
import { FAQJsonLd } from "@/lib/seo/jsonld";

export const metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description: "Answers to common questions about therapy, hypnotherapy, confidentiality and what to expect at Chaitanya Raj Psychology & Counselling.",
  path: "/faq"
});

const faqs = [
  {
    question: "Do I need a referral to book a session?",
    answer: "No referral is needed. You can book a consultation directly through the contact page or by phone."
  },
  {
    question: "Is everything I share confidential?",
    answer: "Yes. Sessions are confidential, with the standard professional exceptions around risk of serious harm, which will always be explained clearly upfront."
  },
  {
    question: "How is clinical hypnotherapy different from stage hypnosis?",
    answer: "Clinical hypnotherapy is a recognised therapeutic technique used for specific treatment goals. You remain aware and in control throughout — it is not the loss-of-control experience associated with stage hypnosis."
  },
  {
    question: "How many sessions will I need?",
    answer: "This varies by person and issue. Some concerns are addressed in 6–8 structured sessions; others benefit from longer-term work. This is reviewed regularly rather than fixed upfront."
  },
  {
    question: "Are online sessions as effective as in-person sessions?",
    answer: "For most talk-therapy work, yes — research generally shows comparable outcomes. Some hypnotherapy and Ego State work is better suited to in-person sessions, which will be discussed with you directly."
  }
];

export default function FAQPage() {
  return (
    <>
      <FAQJsonLd items={faqs} />
      <Section eyebrow="FAQ" title="Common questions">
        <div className="max-w-2xl space-y-8">
          {faqs.map((f) => (
            <div key={f.question}>
              <h2 className="text-lg text-primary-dark font-display mb-2">{f.question}</h2>
              <p className="text-ink-soft leading-relaxed">{f.answer}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
