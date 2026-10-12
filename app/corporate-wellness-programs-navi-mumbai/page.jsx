// import Link from "next/link";

// import Section from "@/components/Section";
// import { buildMetadata } from "@/lib/seo/metadata";

// export const metadata = buildMetadata({
//   title:
//     "Corporate Wellness Programs & EAP Services in Navi Mumbai | Chaitanya Raj",

//   description:
//     "Corporate wellness programs, EAP services, stress management & leadership wellness for organisations in Vashi, Belapur, Nerul, Kharghar & across Navi Mumbai. 25+ years experience. Partner with us today.",

//   path: "/corporate-wellness-programs-navi-mumbai"
// });

// const corporateServices = [
//   {
//     title: "Employee Assistance Program (EAP)",

//     description:
//       "An Employee Assistance Program gives your employees confidential, professional support for personal or work-related challenges, stress, anxiety, relationship issues, grief, or burnout, without it ever touching their HR file.",

//     points: [
//       "Confidential one-on-one corporate counselling on a retainer basis",
//       "Flexible access, in-person or online, to fit varied work schedules",
//       "Aggregate, anonymised usage reporting for HR, with zero individual disclosure",
//       "Scalable plans suited to team size and budget"
//     ]
//   },

//   {
//     title: "Employee Mental Health Workshops",

//     description:
//       "Group workshops bring practical psychological tools directly to your teams, delivered in a format built for a corporate calendar, including half-day sessions, lunch-and-learns, or offsite modules.",

//     points: [
//       "Stress and anxiety management",
//       "Emotional intelligence for managers and teams",
//       "Anger and conflict management",
//       "Burnout prevention and recovery",
//       "Building psychological safety within teams"
//     ]
//   },

//   {
//     title: "Stress Management Workshops",

//     description:
//       "Corporate stress management is one of the most requested interventions we deliver. Unmanaged stress is often the earliest signal of larger burnout and retention issues.",

//     points: [
//       "Identifying early signs of chronic stress in individuals and teams",
//       "Practical, evidence-based techniques for daily stress regulation",
//       "Building sustainable work habits that reduce long-term strain",
//       "Manager training to recognise and respond to team stress signals"
//     ]
//   },

//   {
//     title: "Burnout Prevention",

//     description:
//       "Burnout rarely announces itself until performance and morale have already taken a hit. Burnout prevention programs help identify risk early and build resilience before it becomes a retention problem.",

//     points: [
//       "Organisational assessment of burnout risk factors",
//       "Practical resilience-building tools for employees",
//       "Manager training on recognising early warning signs",
//       "Structured recovery support for employees already experiencing burnout"
//     ]
//   },

//   {
//     title: "Leadership & Executive Wellness",

//     description:
//       "Senior leaders carry a specific kind of pressure, including decision fatigue, isolation, interpersonal conflict, and the weight of always appearing composed. Executive wellness coaching offers a confidential space to work through this away from internal politics.",

//     points: [
//       "Decision-making under sustained pressure",
//       "Navigating conflict with peers, boards, or direct reports",
//       "Preventing and recovering from leadership burnout",
//       "Building sustainable habits for long-term performance"
//     ]
//   },

//   {
//     title: "Emotional Intelligence Training",

//     description:
//       "Emotional intelligence directly shapes how teams communicate, resolve conflict, and collaborate under pressure. Training builds skills that compound across every level of an organisation.",

//     points: [
//       "Self-awareness and emotional regulation",
//       "Empathy and active listening in team settings",
//       "Constructive conflict resolution",
//       "Applying emotional intelligence to leadership and management"
//     ]
//   },

//   {
//     title: "Psychological Safety",

//     description:
//       "Teams do their best work when people feel safe to speak up, take risks, and admit mistakes without fear of judgment. Building psychological safety is a structured, learnable process.",

//     points: [
//       "Assessing current levels of psychological safety within teams",
//       "Practical frameworks for managers to build trust and openness",
//       "Structured team exercises to strengthen collaboration",
//       "Ongoing measurement to track progress over time"
//     ]
//   },

//   {
//     title: "Team Building & Employee Engagement",

//     description:
//       "Strong teams are built, not assumed. Team building and engagement sessions combine psychological insight with practical group exercises to strengthen how people work together.",

//     points: [
//       "Interactive, psychology-based team exercises",
//       "Structured reflection on team dynamics and communication",
//       "Engagement assessments to identify what is working and what is not",
//       "Recommendations tailored to your team's specific dynamics"
//     ]
//   },

//   {
//     title: "One-on-One Employee Counselling",

//     description:
//       "Individual employees may need dedicated, confidential support for personal or work-related challenges. One-on-one corporate counselling offers this directly, integrated into your broader wellness program.",

//     points: [
//       "Confidential individual sessions, in-person or online",
//       "Flexible scheduling around work commitments",
//       "Support for anxiety, stress, relationship issues, grief, and more",
//       "Seamless integration with your existing EAP or wellness program"
//     ]
//   },

//   {
//     title: "Custom Corporate Wellness Solutions",

//     description:
//       "Every organisation's culture, size, and challenges are different. Custom corporate wellness solutions are built around your specific goals rather than a fixed package.",

//     points: [
//       "An organisational needs assessment",
//       "A tailored combination of workshops, coaching, EAP, and ongoing support",
//       "Flexible scaling as your organisation and needs evolve",
//       "Regular reporting and program refinement over time"
//     ]
//   }
// ];

// const locations = [
//   "Vashi",
//   "Belapur",
//   "Nerul",
//   "Kharghar",
//   "Seawoods",
//   "Airoli",
//   "Ghansoli",
//   "Panvel"
// ];

// const faqs = [
//   {
//     question: "What is included in a corporate wellness program?",

//     answer:
//       "Programs can include an Employee Assistance Program, mental health workshops, stress management training, leadership coaching, and one-on-one counselling, combined based on your organisation's specific needs."
//   },

//   {
//     question: "How is employee confidentiality maintained in an EAP?",

//     answer:
//       "Individual session content is never shared with the organisation. HR receives only aggregate, anonymised usage data to understand program engagement."
//   },

//   {
//     question: "Do you serve organisations outside Vashi?",

//     answer:
//       "Yes, we work with organisations across Navi Mumbai, including Belapur, Nerul, Kharghar, Seawoods, Airoli, Ghansoli, and Panvel, both in-person and online."
//   },

//   {
//     question:
//       "Can programs be customised for our organisation's size and industry?",

//     answer:
//       "Yes. Every program is scoped around your team size, industry context, and specific goals, from a single workshop to an ongoing retainer."
//   },

//   {
//     question: "How do we get started?",

//     answer:
//       "Reach out to discuss your organisation's needs, and we will propose a program structure and pricing suited to your goals."
//   }
// ];

// export default function CorporateWellnessPage() {
//   return (
//     <>
//       {/* HERO */}
//       <section className="bg-sand py-20 md:py-28">
//         <div className="mx-auto max-w-7xl px-6 md:px-10">
//           <div className="max-w-4xl">
//             <p className="eyebrow">
//               Corporate Wellness & Organisational Psychology
//             </p>

//             <h1 className="mt-5 text-5xl leading-[1.05] text-primary-dark md:text-7xl">
//               Corporate Wellness Programs in Navi Mumbai
//             </h1>

//             <p className="mt-8 max-w-3xl text-xl leading-relaxed text-ink-soft">
//               Stress, burnout, and unresolved conflict do not stay contained to
//               one individual. They surface as absenteeism, disengagement,
//               strained teams, and talent walking out the door.
//             </p>

//             <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-soft">
//               Supporting your people's mental wellbeing is one of the most
//               direct ways to protect performance, retention, and culture.
//             </p>

//             <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-soft">
//               At Chaitanya Raj, we partner with organisations across Navi Mumbai
//               to bring structured psychological support directly into the
//               workplace. Led by Lt. Col. Rajesh Sharma (Retd.), with over 25
//               years of experience in clinical psychology and hypnotherapy, our
//               corporate wellness services are shaped around your organisation's
//               specific needs, not a generic template.
//             </p>

//             <Link
//               href="/contact"
//               className="btn-primary mt-8 inline-flex"
//             >
//               Discuss a Partnership →
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* SERVICES */}
//       <Section
//         eyebrow="What we offer"
//         title="Psychological support designed around your organisation"
//       >
//         <div className="grid gap-6 md:grid-cols-2">
//           {corporateServices.map((service, index) => (
//             <article
//               key={service.title}
//               className="rounded-3xl border border-primary-dark/10 bg-white p-8 md:p-10"
//             >
//               <span className="text-sm text-primary">
//                 {String(index + 1).padStart(2, "0")}
//               </span>

//               <h2 className="mt-5 text-2xl font-display text-primary-dark">
//                 {service.title}
//               </h2>

//               <p className="mt-5 leading-relaxed text-ink-soft">
//                 {service.description}
//               </p>

//               <ul className="mt-6 space-y-3">
//                 {service.points.map((point) => (
//                   <li
//                     key={point}
//                     className="flex gap-3 text-sm leading-relaxed text-ink-soft"
//                   >
//                     <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />

//                     {point}
//                   </li>
//                 ))}
//               </ul>
//             </article>
//           ))}
//         </div>
//       </Section>

//       {/* LOCATIONS */}
//       <section className="bg-primary-dark py-20 text-white md:py-28">
//         <div className="mx-auto max-w-7xl px-6 md:px-10">
//           <div className="max-w-2xl">
//             <p className="eyebrow text-white/60">
//               Across Navi Mumbai
//             </p>

//             <h2 className="mt-5 text-4xl md:text-6xl">
//               Corporate wellness support where your organisation is.
//             </h2>

//             <p className="mt-6 text-lg leading-relaxed text-white/70">
//               We deliver corporate wellness programs in-person at your office,
//               at our Vashi or Belapur centre, or online.
//             </p>
//           </div>

//           <div className="mt-12 flex flex-wrap gap-3">
//             {locations.map((location) => (
//               <span
//                 key={location}
//                 className="rounded-full border border-white/20 px-5 py-3 text-sm text-white/75"
//               >
//                 Corporate Wellness in {location}
//               </span>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* HOW WE WORK */}
//       <Section
//         eyebrow="Our process"
//         title="How we work with organisations"
//       >
//         <div className="grid gap-8 md:grid-cols-4">
//           {[
//             "An initial conversation to understand your organisation's specific needs and goals",

//             "A proposed program structure, EAP, workshops, coaching, or a custom combination",

//             "A clear scope, timeline, and fee structure agreed upfront",

//             "Ongoing delivery with regular check-ins and reporting, guided by 25+ years of clinical experience"
//           ].map((step, index) => (
//             <div
//               key={step}
//               className="border-t border-primary-dark/20 pt-6"
//             >
//               <span className="text-sm text-primary">
//                 0{index + 1}
//               </span>

//               <p className="mt-5 text-lg leading-relaxed text-ink-soft">
//                 {step}
//               </p>
//             </div>
//           ))}
//         </div>
//       </Section>

//       {/* FAQ */}
//       <section className="bg-sand py-20 md:py-28">
//         <div className="mx-auto max-w-4xl px-6 md:px-10">
//           <p className="eyebrow">Frequently asked questions</p>

//           <h2 className="mt-5 text-4xl text-primary-dark md:text-6xl">
//             Questions about corporate wellness programs
//           </h2>

//           <div className="mt-12 divide-y divide-primary-dark/10">
//             {faqs.map((faq) => (
//               <details
//                 key={faq.question}
//                 className="group py-6"
//               >
//                 <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl font-medium text-primary-dark">
//                   {faq.question}

//                   <span className="text-2xl transition-transform group-open:rotate-45">
//                     +
//                   </span>
//                 </summary>

//                 <p className="mt-4 text-lg leading-relaxed text-ink-soft">
//                   {faq.answer}
//                 </p>
//               </details>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 md:py-28">
//         <div className="mx-auto max-w-4xl px-6 text-center">
//           <p className="eyebrow">
//             Start a conversation
//           </p>

//           <h2 className="mt-5 text-4xl leading-tight text-primary-dark md:text-6xl">
//             Partner with us to support your people.
//           </h2>

//           <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
//             Tell us about your organisation, your people, and the challenges you
//             are trying to solve. We will help you explore a programme that
//             fits.
//           </p>

//           <Link
//             href="/contact"
//             className="btn-primary mt-8 inline-flex"
//           >
//             Discuss a Partnership →
//           </Link>
//         </div>
//       </section>
//     </>
//   );
// }


import Image from "next/image";
import Link from "next/link";

import Section from "@/components/Section";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title:
    "Corporate Wellness Programs & EAP in Navi Mumbai",

  description:
    "EAP services, mental health workshops, burnout prevention and leadership wellness for organisations across Navi Mumbai and Mumbai. Discuss a partnership.",

  path: "/corporate-wellness-programs-navi-mumbai"
});

const corporateServices = [
  {
    title: "Employee Assistance Program (EAP)",

    description:
      "An Employee Assistance Program gives your employees confidential, professional support for personal or work-related challenges, stress, anxiety, relationship issues, grief, or burnout, without it ever touching their HR file.",

    points: [
      "Confidential one-on-one corporate counselling on a retainer basis",
      "Flexible access, in-person or online, to fit varied work schedules",
      "Aggregate, anonymised usage reporting for HR, with zero individual disclosure",
      "Scalable plans suited to team size and budget"
    ]
  },

  {
    title: "Employee Mental Health Workshops",

    description:
      "Group workshops bring practical psychological tools directly to your teams, delivered in a format built for a corporate calendar, including half-day sessions, lunch-and-learns, or offsite modules.",

    points: [
      "Stress and anxiety management",
      "Emotional intelligence for managers and teams",
      "Anger and conflict management",
      "Burnout prevention and recovery",
      "Building psychological safety within teams"
    ]
  },

  {
    title: "Stress Management Workshops",

    description:
      "Corporate stress management is one of the most requested interventions we deliver. Unmanaged stress is often the earliest signal of larger burnout and retention issues.",

    points: [
      "Identifying early signs of chronic stress in individuals and teams",
      "Practical, evidence-based techniques for daily stress regulation",
      "Building sustainable work habits that reduce long-term strain",
      "Manager training to recognise and respond to team stress signals"
    ]
  },

  {
    title: "Burnout Prevention",

    description:
      "Burnout rarely announces itself until performance and morale have already taken a hit. Burnout prevention programs help identify risk early and build resilience before it becomes a retention problem.",

    points: [
      "Organisational assessment of burnout risk factors",
      "Practical resilience-building tools for employees",
      "Manager training on recognising early warning signs",
      "Structured recovery support for employees already experiencing burnout"
    ]
  },

  {
    title: "Leadership & Executive Wellness",

    description:
      "Senior leaders carry a specific kind of pressure, including decision fatigue, isolation, interpersonal conflict, and the weight of always appearing composed. Executive wellness coaching offers a confidential space to work through this away from internal politics.",

    points: [
      "Decision-making under sustained pressure",
      "Navigating conflict with peers, boards, or direct reports",
      "Preventing and recovering from leadership burnout",
      "Building sustainable habits for long-term performance"
    ]
  },

  {
    title: "Emotional Intelligence Training",

    description:
      "Emotional intelligence directly shapes how teams communicate, resolve conflict, and collaborate under pressure. Training builds skills that compound across every level of an organisation.",

    points: [
      "Self-awareness and emotional regulation",
      "Empathy and active listening in team settings",
      "Constructive conflict resolution",
      "Applying emotional intelligence to leadership and management"
    ]
  },

  {
    title: "Psychological Safety",

    description:
      "Teams do their best work when people feel safe to speak up, take risks, and admit mistakes without fear of judgment. Building psychological safety is a structured, learnable process.",

    points: [
      "Assessing current levels of psychological safety within teams",
      "Practical frameworks for managers to build trust and openness",
      "Structured team exercises to strengthen collaboration",
      "Ongoing measurement to track progress over time"
    ]
  },

  {
    title: "Team Building & Employee Engagement",

    description:
      "Strong teams are built, not assumed. Team building and engagement sessions combine psychological insight with practical group exercises to strengthen how people work together.",

    points: [
      "Interactive, psychology-based team exercises",
      "Structured reflection on team dynamics and communication",
      "Engagement assessments to identify what is working and what is not",
      "Recommendations tailored to your team's specific dynamics"
    ]
  },

  {
    title: "One-on-One Employee Counselling",

    description:
      "Individual employees may need dedicated, confidential support for personal or work-related challenges. One-on-one corporate counselling offers this directly, integrated into your broader wellness program.",

    points: [
      "Confidential individual sessions, in-person or online",
      "Flexible scheduling around work commitments",
      "Support for anxiety, stress, relationship issues, grief, and more",
      "Seamless integration with your existing EAP or wellness program"
    ]
  },

  {
    title: "Custom Corporate Wellness Solutions",

    description:
      "Every organisation's culture, size, and challenges are different. Custom corporate wellness solutions are built around your specific goals rather than a fixed package.",

    points: [
      "An organisational needs assessment",
      "A tailored combination of workshops, coaching, EAP, and ongoing support",
      "Flexible scaling as your organisation and needs evolve",
      "Regular reporting and program refinement over time"
    ]
  }
];

const locations = [
  "Vashi",
  "Belapur",
  "Nerul",
  "Kharghar",
  "Seawoods",
  "Airoli",
  "Ghansoli",
  "Panvel"
];

const faqs = [
  {
    question: "What is included in a corporate wellness program?",

    answer:
      "Programs can include an Employee Assistance Program, mental health workshops, stress management training, leadership coaching, and one-on-one counselling, combined based on your organisation's specific needs."
  },

  {
    question: "How is employee confidentiality maintained in an EAP?",

    answer:
      "Individual session content is never shared with the organisation. HR receives only aggregate, anonymised usage data to understand program engagement."
  },

  {
    question: "Do you serve organisations outside Vashi?",

    answer:
      "Yes, we work with organisations across Navi Mumbai, including Belapur, Nerul, Kharghar, Seawoods, Airoli, Ghansoli, and Panvel, both in-person and online."
  },

  {
    question:
      "Can programs be customised for our organisation's size and industry?",

    answer:
      "Yes. Every program is scoped around your team size, industry context, and specific goals, from a single workshop to an ongoing retainer."
  },

  {
    question: "How do we get started?",

    answer:
      "Reach out to discuss your organisation's needs, and we will propose a program structure and pricing suited to your goals."
  }
];

export default function CorporateWellnessPage() {
  return (
    <>
      {/* =====================================================
    HERO
====================================================== */}

<section className="bg-sand py-16 md:py-24">
  <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[1.15fr_0.85fr] md:px-10">

    {/* HERO CONTENT */}

    <div className="max-w-3xl">

      <p className="eyebrow">
        Corporate Wellness & Organisational Psychology
      </p>

      <h1 className="mt-5 text-5xl leading-[1.05] text-primary-dark md:text-7xl">
        Corporate Wellness Programs in Navi Mumbai, Mumbai & Pan India
      </h1>

      <p className="mt-8 text-xl leading-relaxed text-ink-soft">
        Stress, burnout, and unresolved conflict do not stay contained to
        one individual. They surface as absenteeism, disengagement,
        strained teams, and talent walking out the door.
      </p>

      <p className="mt-5 text-lg leading-relaxed text-ink-soft">
        Supporting your people's mental wellbeing is one of the most
        direct ways to protect performance, retention, and culture.
      </p>

      <p className="mt-5 text-lg leading-relaxed text-ink-soft">
        At Chaitanya Raj, we partner with organisations across Navi Mumbai
        to bring structured psychological support directly into the
        workplace. Led by Lt. Col. Rajesh Sharma (Retd.), with over 25
        years of experience in clinical psychology and hypnotherapy, our
        corporate wellness services are shaped around your organisation's
        specific needs, not a generic template.
      </p>

      <Link
  href="/contact"
  className="btn-primary mt-8 inline-flex relative z-10"
>
  Discuss a Partnership →
</Link>

    </div>


    {/* HERO IMAGE */}

    <div className="relative">

      {/* Decorative background shape */}

      <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full border border-primary/20" />

      <div className="absolute -bottom-6 -left-6 h-40 w-40 rounded-[2rem] bg-primary/10" />


      {/* Image */}

      <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] bg-primary-dark shadow-xl">

        <Image
          src="/images/corporate/burnout-prevention.jpg"
          alt="Corporate team participating in a workplace wellness session"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 40vw"
        />

      </div>

    </div>

  </div>
</section>

      {/* =====================================================
          WHY CORPORATE WELLNESS
      ====================================================== */}

      <Section
        eyebrow="Why it matters"
        title="A healthier workplace begins with understanding people."
      >
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/corporate/workshops.jpg"
              alt="Professionals collaborating in a workplace"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-ink-soft">
            <p>
              Workplace stress rarely exists in isolation. Over time, unresolved
              stress, conflict, and emotional strain can affect how people
              communicate, collaborate, perform, and remain engaged.
            </p>

            <p>
              Corporate wellness is not simply about reacting when someone
              reaches burnout. It is about creating systems of support that
              help people recognise challenges earlier and develop healthier
              ways of navigating them.
            </p>

            <p>
              Our work combines psychological expertise with practical
              workplace interventions designed around your organisation's people,
              culture, and goals.
            </p>
          </div>
        </div>
      </Section>

      {/* =====================================================
          EAP FEATURE
      ====================================================== */}

      <section className="bg-primary-dark py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2 md:px-10">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/corporate/employee-assistance-program.jpg"
              alt="Private one-on-one employee counselling session"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div>
            <p className="eyebrow text-white/60">
              Employee Assistance Program
            </p>

            <h2 className="mt-5 text-4xl leading-tight text-white md:text-6xl">
  Confidential support for the people behind your organisation.
</h2>

            <p className="mt-6 text-lg leading-relaxed text-white/70">
              An Employee Assistance Program gives employees access to
              confidential professional support for personal or work-related
              challenges without individual session content being shared with
              their employer.
            </p>

            <ul className="mt-8 space-y-4 text-white/75">
              {corporateServices[0].points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* =====================================================
          WORKSHOPS
      ====================================================== */}

      <Section
        eyebrow="Workshops & training"
        title="Practical psychological tools for everyday work."
      >
        <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 text-lg leading-relaxed text-ink-soft">
            <p>
              Group workshops bring practical psychological tools directly to
              your teams in a format designed for the realities of a corporate
              calendar.
            </p>

            <p>
              Sessions can be structured as half-day workshops, lunch-and-learn
              sessions, offsite modules, or customised programmes based on your
              organisation's needs.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Stress and anxiety management",
                "Emotional intelligence",
                "Anger and conflict management",
                "Burnout prevention",
                "Psychological safety",
                "Team communication"
              ].map((topic) => (
                <div
                  key={topic}
                  className="rounded-xl border border-primary-dark/10 p-4 text-sm"
                >
                  {topic}
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/corporate/chp.jpg"
              alt="Corporate mental health workshop with employees"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>
        </div>
      </Section>

      {/* =====================================================
          BURNOUT
      ====================================================== */}

      <section className="bg-sand py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2 md:px-10">
          <div>
            <p className="eyebrow">
              Burnout prevention
            </p>

            <h2 className="mt-5 text-4xl leading-tight text-primary-dark md:text-6xl">
              Recognising the warning signs before burnout becomes a crisis.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              Burnout rarely announces itself until performance and morale have
              already taken a hit. Prevention begins with recognising risk
              earlier and building resilience before the problem becomes a
              retention issue.
            </p>

            <ul className="mt-8 space-y-4 text-ink-soft">
              {corporateServices[3].points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/corporate/burnout-prevention.jpg"
              alt="Professional taking a moment during a demanding workday"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          LEADERSHIP
      ====================================================== */}

      <section className="bg-primary-dark py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-[0.9fr_1.1fr] md:px-10">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/corporate/leadership-wellness.jpg"
              alt="Executive leadership wellness and coaching session"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>

          <div>
            <p className="eyebrow text-white/60">
              Leadership & Executive Wellness
            </p>

            <h2 className="mt-5 text-4xl leading-tight text-white md:text-6xl">
              Leadership carries pressure that is not always visible.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Senior leaders often carry decision fatigue, isolation,
              interpersonal conflict, and the pressure of always appearing
              composed.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-white/70">
              Executive wellness coaching creates a confidential space to work
              through these challenges away from internal politics.
            </p>

            <ul className="mt-8 space-y-4 text-white/75">
              {corporateServices[4].points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* =====================================================
          ALL SERVICES
      ====================================================== */}

      <Section
        eyebrow="Our services"
        title="Support that can grow with your organisation."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {corporateServices.slice(5).map((service, index) => (
            <article
              key={service.title}
              className="rounded-3xl border border-primary-dark/10 bg-white p-8 md:p-10"
            >
              <span className="text-sm text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h2 className="mt-5 text-2xl font-display text-primary-dark">
                {service.title}
              </h2>

              <p className="mt-5 leading-relaxed text-ink-soft">
                {service.description}
              </p>

              <ul className="mt-6 space-y-3">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-ink-soft"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* =====================================================
          CUSTOM SOLUTIONS
      ====================================================== */}

      <section className="bg-sand py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2 md:px-10">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/corporate/custom-corporate-wellness.png"
              alt="Corporate team working together in a professional environment"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div>
            <p className="eyebrow">
              Custom solutions
            </p>

            <h2 className="mt-5 text-4xl leading-tight text-primary-dark md:text-6xl">
              Your organisation is not a template.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              Every organisation's culture, size, and challenges are different.
              Our custom corporate wellness solutions are built around your
              specific goals rather than a fixed package.
            </p>

            <ul className="mt-8 space-y-4 text-ink-soft">
              {corporateServices[9].points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* =====================================================
          LOCATIONS
      ====================================================== */}

      <section className="bg-primary-dark py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-2xl">
            <p className="eyebrow text-white/60">
              Serving organisations across Navi Mumbai
            </p>

            <h2 className="mt-5 text-4xl text-white md:text-6xl">
              Support where your organisation is.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/70">
              We deliver corporate wellness programs in-person at your office,
              at our Vashi or Belapur centre, or online.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {locations.map((location) => (
              <span
                key={location}
                className="rounded-full border border-white/20 px-5 py-3 text-sm text-white/75"
              >
                Corporate Wellness in {location}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW WE WORK
      ====================================================== */}

      <Section
        eyebrow="Our process"
        title="How we work with organisations"
      >
        <div className="grid gap-8 md:grid-cols-4">
          {[
            "An initial conversation to understand your organisation's specific needs and goals",

            "A proposed program structure, EAP, workshops, coaching, or a custom combination",

            "A clear scope, timeline, and fee structure agreed upfront",

            "Ongoing delivery with regular check-ins and reporting, guided by 25+ years of clinical experience"
          ].map((step, index) => (
            <div
              key={step}
              className="border-t border-primary-dark/20 pt-6"
            >
              <span className="text-sm text-primary">
                0{index + 1}
              </span>

              <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                {step}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* =====================================================
          FAQ
      ====================================================== */}

      <section className="bg-sand py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <p className="eyebrow">
            Frequently asked questions
          </p>

          <h2 className="mt-5 text-4xl text-primary-dark md:text-6xl">
            Questions about corporate wellness programs
          </h2>

          <div className="mt-12 divide-y divide-primary-dark/10">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group py-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl font-medium text-primary-dark">
                  {faq.question}

                  <span className="text-2xl transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="eyebrow">
            Start a conversation
          </p>

          <h2 className="mt-5 text-4xl leading-tight text-primary-dark md:text-6xl">
            Partner with us to support your people.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Tell us about your organisation, your people, and the challenges you
            are trying to solve. We will help you explore a programme that fits.
          </p>

          <Link
            href="/contact"
            className="btn-primary mt-8 inline-flex"
          >
            Discuss a Partnership →
          </Link>
        </div>
      </section>
    </>
  );
}