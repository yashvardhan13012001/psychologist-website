import Image from "next/image";
import Link from "next/link";

import Section from "@/components/Section";
import { buildMetadata } from "@/lib/seo/metadata";
import { site } from "@/lib/data/site";

export const metadata = buildMetadata({
  title: "Couple Counselling & Therapy in Navi Mumbai | Vashi & CBD Belapur",
  description:
    "Looking for Couples counselling in in Navi Mumbai? Get confidential relationship therapy in Vashi & CBD Belapur for communication, trust, conflict and connection.",
  path: "/couples-counselling-navi-mumbai",
  image: "/images/relationship-counselling-navi-mumbai.png"
});

const concerns = [
  "Frequent arguments or recurring disagreements",
  "Communication problems",
  "Emotional distance or loss of connection",
  "Trust issues or difficulties after infidelity",
  "Conflicts involving parents or in-laws",
  "Parenting and relationship stress",
  "Major life changes affecting the relationship",
  "Different expectations about marriage or family life",
  "Difficulty resolving the same arguments",
  "Separation or relationship uncertainty",
  "Long-distance marriage or living apart",
  "Premarital relationship concerns"
];

const sessionPoints = [
  "Understanding recurring patterns of conflict",
  "Improving communication and expressing needs more clearly",
  "Understanding each other's perspective",
  "Working through unresolved relationship issues",
  "Rebuilding trust where appropriate",
  "Developing healthier ways of handling disagreements",
  "Creating practical changes to carry into everyday life"
];

const faqs = [
  {
    question: "What happens in the first couple counselling session?",
    answer:
      "The first session is generally about understanding where things stand and hearing both partners' perspectives. You do not need to prepare a speech or know exactly what to say."
  },
  {
    question: "Does my partner have to agree to counselling?",
    answer:
      "It helps when both partners are willing, but you can still seek professional guidance if your partner is uncertain. You can begin by discussing your concerns with the practitioner."
  },
  {
    question: "Is couple counselling only for married couples?",
    answer:
      "No. It can be relevant to married couples, partners in long-term relationships, and couples preparing for marriage."
  },
  {
    question: "Can counselling help with trust issues or after infidelity?",
    answer:
      "Counselling provides a structured environment for working through trust-related difficulties. Couples may use counselling to understand what happened, communicate about its impact and consider how they want to move forward."
  },
  {
    question: "Can we attend couple counselling online?",
    answer:
      "Yes. Online sessions take place over video call, including for couples living in different cities or countries."
  },
  {
    question: "How often do couples attend counselling?",
    answer:
      "Sessions are generally scheduled regularly, often weekly, although frequency can vary depending on the couple's needs and circumstances."
  }
];

export default function CouplesCounsellingPage() {
  return (
    <>
      <section className="bg-surface-soft py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[1.05fr_0.95fr] md:px-10">
          <div className="max-w-3xl">
            <p className="eyebrow">Couple Counselling · Vashi &amp; CBD Belapur</p>
            <h1 className="mt-5 text-5xl leading-[1.05] md:text-7xl">
              When the relationship has become difficult, you do not have to work through it alone.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-relaxed text-ink-soft">
              Couple counselling gives partners a structured, confidential space with a trained counselling psychologist to work through communication problems, conflict, emotional distance, trust issues and relationship difficulties.
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Sessions are available in person in Vashi and CBD Belapur, Navi Mumbai, as well as online.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Book a couple counselling session</Link>
              <a href={`tel:${site.phone}`} className="btn-outline">Call {site.phoneDisplay}</a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full border border-primary/20" />
            <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-[2rem] bg-primary/10" />
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-primary/10 shadow-xl">
              <Image
                src="/images/relationship-counselling-navi-mumbai.png"
                alt="Couple counselling and relationship therapy in Navi Mumbai"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="A place to begin" title="This is not just happening to you">
        <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-start">
          <div>
            <p className="text-2xl leading-relaxed text-primary-dark font-display">
              Sometimes two people can still care deeply about each other while feeling increasingly far apart.
            </p>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>
              A relationship can gradually become about logistics, recurring arguments, family pressure or simply getting through the week. Communication may become harder, closeness may fade, or the same disagreement may keep returning without being resolved.
            </p>
            <p>
              Couple counselling does not mean that a relationship has failed. It can simply mean that something matters enough to work on. The goal is not to decide who is right or wrong, but to understand the patterns between you and create the conditions in which both partners can work on the relationship.
            </p>
          </div>
        </div>
      </Section>

      <section className="bg-primary-dark py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="eyebrow text-white/60">What couples bring to counselling</p>
          <h2 className="mt-5 max-w-3xl text-4xl leading-tight text-white md:text-6xl">
            The concerns are often connected, not isolated.
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {concerns.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-white/80">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section eyebrow="How it works" title="A structured space for both partners" className="rounded-3xl bg-surface-soft/60">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sessionPoints.map((point, index) => (
            <div key={point} className="card p-6">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">0{index + 1}</p>
              <p className="mt-4 font-display text-lg text-primary-dark">{point}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ink-soft">
          Some sessions involve difficult conversations. Others focus on quietly noticing a pattern neither of you had named before. The pace is set around the couple and the concerns they bring, rather than a fixed programme.
        </p>
      </Section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[0.8fr_1.2fr] md:px-10">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-primary/10">
            <Image src="/founder.jpg" alt="Lt Col Rajesh Sharma, couple counselling practitioner" fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
          </div>
          <div>
            <p className="eyebrow">Meet your practitioner</p>
            <h2 className="mt-4 text-4xl leading-tight md:text-5xl">Experienced, structured and focused on both perspectives.</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-soft">
              <p>
                Lt Col Rajesh Sharma (Retd) is a Post Graduate in Clinical Psychology and Clinical Hypnotherapy (Gold Medalist), with 25+ years of clinical experience working with people through a wide range of psychological and relationship concerns.
              </p>
              <p>
                He is registered with the National Commission for Allied and Healthcare Professions (NCAHP), and holds a Lifetime Membership with the Academy Of Hypnosis.
              </p>
              <p>
                Couple counselling is conducted in a structured, confidential setting, with the focus on understanding both partners' perspectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="Online counselling" title="For couples living apart, too">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>
              One partner may be travelling for work. You may live in different cities or countries, staying connected through calls, messages and mismatched time zones. Over time, that distance can make it easier to quietly drift.
            </p>
            <p>
              Online couple counselling takes place over video call, so you do not need to be physically present at the clinic. It can be useful for long-distance relationships and marriages, or simply when attending in person is difficult.
            </p>
          </div>
          <div className="card p-8">
            <p className="eyebrow">In person &amp; online</p>
            <h3 className="mt-3 font-display text-2xl text-primary-dark">Vashi · CBD Belapur · Video sessions</h3>
            <p className="mt-4 leading-relaxed text-ink-soft">Distance does not have to mean disconnection. It can simply mean that the work happens over a screen instead of in a room.</p>
          </div>
        </div>
      </Section>

      <section className="bg-surface-soft py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <p className="eyebrow">Questions people usually ask</p>
          <h2 className="mt-4 text-4xl md:text-5xl">You do not have to have this figured out to begin.</h2>
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
          <p className="eyebrow text-white/60">Begin with a conversation</p>
          <h2 className="mt-4 text-4xl leading-tight text-white md:text-6xl">You do not need to know exactly what is wrong.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">You only need to recognise that something has changed, and that you would like to understand it.</p>
          <Link href="/contact" className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-medium text-primary-dark transition hover:bg-white/90">Book a couple counselling session</Link>
        </div>
      </section>
    </>
  );
}
