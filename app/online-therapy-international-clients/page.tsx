import Image from "next/image";
import Link from "next/link";

import Section from "@/components/Section";
import { buildMetadata } from "@/lib/seo/metadata";
import { site } from "@/lib/data/site";

export const metadata = buildMetadata({
  title: "Online Clinical  Psychologist for Global Clients | Therapy & Counselling",
  description:
    "Looking for an online clinical psychologist? Get confidential, personalised oonline therapy, counselling & clinical hypnotherapy for international clinets. Bok a consultation",
  path: "/online-therapy-international-clients",
  image: "/founder.jpg"
});

const concerns = [
  "Anxiety and persistent worry",
  "Depression and low mood",
  "Chronic stress",
  "Burnout and emotional exhaustion",
  "OCD and intrusive thoughts",
  "Trauma-related difficulties",
  "Phobias and fears",
  "Relationship difficulties",
  "Grief and loss",
  "Sleep-related concerns",
  "Low self-esteem and confidence",
  "Emotional regulation and behavioural concerns"
];

const approach = [
  { title: "Your experiences", text: "What you have been through and what you are currently experiencing." },
  { title: "Your circumstances", text: "Your relationships, work, family, environment and other relevant factors." },
  { title: "Your goals", text: "What you would like to understand, change, manage or improve." },
  { title: "Your pace", text: "A professional and supportive environment in which difficult subjects can be explored appropriately." }
];

const faqs = [
  {
    question: "Do you provide online therapy for international clients?",
    answer:
      "Online psychological services may be available to clients located outside India, subject to applicable professional, legal and regulatory requirements in the client's location. Please enquire with your location and circumstances before booking."
  },
  {
    question: "Can I have online therapy if I live in the USA, UK, Canada, UAE or Australia?",
    answer:
      "Online sessions may be possible depending on the applicable requirements in your jurisdiction. Your location should be discussed before an appointment is scheduled."
  },
  {
    question: "What can I discuss with an online clinical psychologist?",
    answer:
      "You can discuss a wide range of emotional, behavioural and relationship concerns, including anxiety, depression, stress, burnout, OCD, trauma, phobias, relationship difficulties, grief, sleep problems, self-esteem and other personal challenges."
  },
  {
    question: "Do I need a diagnosis before starting therapy?",
    answer:
      "No. You do not need to arrive with a diagnosis or know exactly what is wrong. The initial consultation can help clarify your concerns and determine what type of support may be appropriate."
  },
  {
    question: "Is online therapy confidential?",
    answer:
      "Confidentiality is an important part of professional psychological care. For online sessions, clients should participate from a private and appropriate environment and use a reliable internet connection."
  },
  {
    question: "What if I am not sure whether therapy is right for me?",
    answer:
      "The initial consultation can be used to discuss your concerns and determine whether online psychological support is appropriate for your circumstances."
  }
];

export default function InternationalClientsPage() {
  return (
    <>
      <section className="bg-surface-soft py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[1.08fr_0.92fr] md:px-10">
          <div className="max-w-3xl">
            <p className="eyebrow">Online Therapy · International Clients</p>
            <h1 className="mt-5 text-5xl leading-[1.05] md:text-7xl">Professional psychological support, wherever you are.</h1>
            <p className="mt-7 max-w-2xl text-xl leading-relaxed text-ink-soft">
              Online clinical psychology, counselling and clinical hypnotherapy for clients seeking personalised psychological support while living away from home or outside India.
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Online sessions may be available for clients in the USA, UK, Canada, UAE, Australia and other locations, subject to applicable professional and legal requirements.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Book an online consultation</Link>
              <Link href="#first-consultation" className="btn-outline">What to expect</Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full border border-primary/20" />
            <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-[2rem] bg-primary/10" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-primary/10 shadow-xl">
              <Image src="/founder.jpg" alt="Lt Col Rajesh Sharma, psychologist providing online therapy" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="A private space" title="A place to understand what you are going through">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>Therapy is not simply about talking about what is wrong. It is an opportunity to step away from everyday pressure, understand what may be contributing to your difficulties, recognise patterns and develop more effective ways of moving forward.</p>
            <p>Every person's experience is different. Sessions therefore begin with listening and understanding rather than assumptions.</p>
          </div>
          <div className="card p-8">
            <p className="eyebrow">Depending on your needs</p>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">Therapy may incorporate clinical psychology, counselling, Cognitive Behavioural Therapy (CBT), behaviour modification and clinical hypnotherapy where appropriate.</p>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">The aim is to help you develop greater understanding and practical ways of managing the challenges you are facing.</p>
          </div>
        </div>
      </Section>

      <section className="bg-primary-dark py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="eyebrow text-white/60">Online clinical psychology</p>
          <h2 className="mt-5 max-w-3xl text-4xl leading-tight text-white md:text-6xl">Support for the concerns that can follow you across borders.</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {concerns.map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-white/80">{item}</div>)}
          </div>
        </div>
      </section>

      <Section eyebrow="Personalised therapy" title="Therapy designed around you" className="rounded-3xl bg-surface-soft/60">
        <div className="grid gap-6 sm:grid-cols-2">
          {approach.map((item, index) => (
            <div key={item.title} className="card p-7">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">0{index + 1}</p>
              <h3 className="mt-4 font-display text-2xl text-primary-dark">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-3xl">
            <p className="eyebrow">Support for Indians and NRIs living abroad</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Cultural familiarity can matter when you are far from home.</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-soft">
              <p>Living abroad can bring experiences that are difficult to explain. You may be managing family expectations in India while building a life elsewhere, navigating cultural differences, career pressure, relationships, loneliness or the emotional impact of being away from familiar surroundings.</p>
              <p>For some clients, speaking with an Indian psychologist can offer a sense of cultural familiarity while still providing professional psychological support.</p>
              <p>Your cultural background is considered as part of your individual context — without making assumptions about who you are or what you should feel.</p>
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="Why online therapy" title="Professional support without the need to travel">
        <div className="grid gap-6 md:grid-cols-5">
          {[
            ["Professional", "Concerns are approached within a professional psychological framework."],
            ["Personalised", "Sessions are shaped around your circumstances, concerns and goals."],
            ["Convenient", "Attend from a suitable private location without the time and travel of an in-person appointment."],
            ["Confidential", "Online sessions provide a private setting when you participate from an appropriate environment."],
            ["Accessible", "Online therapy can make continuity easier when you live away from a clinic or travel frequently."]
          ].map(([title, text]) => (
            <div key={title} className="card p-6">
              <h3 className="font-display text-xl text-primary-dark">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <section id="first-consultation" className="bg-surface-soft py-20 md:py-28 scroll-mt-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[1fr_1fr] md:items-center md:px-10">
          <div>
            <p className="eyebrow">Your first consultation</p>
            <h2 className="mt-4 text-4xl md:text-5xl">You do not need to prepare the “right” answers.</h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">The first consultation is primarily an opportunity to understand you and what has brought you to seek support.</p>
          </div>
          <div className="card p-8">
            <p className="font-display text-2xl text-primary-dark">We may discuss</p>
            <ul className="mt-5 space-y-3 text-ink-soft">
              {[
                "What you have been experiencing",
                "How it has been affecting your life",
                "When the difficulties began",
                "Relevant personal circumstances",
                "What you would like to change",
                "What you hope to gain from therapy"
              ].map((item) => <li key={item} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{item}</li>)}
            </ul>
            <p className="mt-6 leading-relaxed text-ink-soft">There is no expectation that you need a diagnosis or fully understand your problem before making an enquiry. Your first step is simply a conversation.</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <p className="eyebrow">Frequently asked questions</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Online psychological support starts with a conversation.</h2>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="card group p-6">
                <summary className="cursor-pointer list-none pr-8 font-display text-lg text-primary-dark">{faq.question}</summary>
                <p className="mt-4 leading-relaxed text-ink-soft">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-dark py-20 text-white md:py-24">
        <div className="mx-auto max-w-5xl px-6 text-center md:px-10">
          <p className="eyebrow text-white/60">For international clients</p>
          <h2 className="mt-4 text-4xl leading-tight text-white md:text-6xl">You do not need to explain everything perfectly to begin.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">Share what has been difficult, discuss your circumstances and explore whether online psychological support is appropriate for you.</p>
          <Link href="/contact" className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-medium text-primary-dark transition hover:bg-white/90">Book an online consultation</Link>
        </div>
      </section>
    </>
  );
}
