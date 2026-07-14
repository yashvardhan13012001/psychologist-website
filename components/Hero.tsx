// // import Link from "next/link";

// // export default function Hero() {
// //   return (
// //     <section className="relative overflow-hidden">
// //       <div className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-2 gap-12 items-center">
// //         <div>
// //           <p className="eyebrow mb-5">Psychology &amp; Counselling · Vashi, Navi Mumbai</p>
// //           <h1 className="text-4xl md:text-5xl leading-[1.15] mb-6">
// //             A quieter place to work through what&apos;s heavy
// //           </h1>
// //           <p className="text-ink-soft text-lg leading-relaxed mb-8 max-w-md">
// //             Evidence-based counselling, clinical hypnotherapy and psychological support —
// //             led by Lt. Col. Rajesh Sharma (Retd.), with over 25 years of clinical experience.
// //           </p>
// //           <div className="flex flex-wrap gap-4">
// //             <Link href="/contact" className="btn-primary">
// //               Book a consultation
// //             </Link>
// //             <Link href="/conditions" className="btn-outline">
// //               Explore what we treat
// //             </Link>
// //           </div>
// //         </div>

// //         <div className="relative h-72 md:h-96 flex items-center justify-center" aria-hidden="true">
// //           <div className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full border border-gold/50 animate-breatheRing" />
// //           <div className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full border border-gold/30 animate-breatheRing [animation-delay:1.5s]" />
// //           <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-primary/90 animate-breathe shadow-[0_20px_60px_rgba(52,82,63,0.35)]" />
// //           <span className="absolute font-mono text-xs uppercase tracking-[0.2em] text-surface-soft/90">
// //             breathe
// //           </span>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }



// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden">
//       <div className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-28 md:pb-32 grid md:grid-cols-2 gap-12 items-center">
//         <div>
//           <p className="eyebrow mb-5">Psychology &amp; Counselling · Vashi, Navi Mumbai</p>
//           <h1 className="text-4xl md:text-6xl leading-[1.08] tracking-tight mb-6">
//             A quieter place to work through what&apos;s heavy
//           </h1>
//           <p className="text-ink-soft text-lg leading-relaxed mb-8 max-w-md">
//             Evidence-based counselling, clinical hypnotherapy and psychological support —
//             led by Lt. Col. Rajesh Sharma (Retd.), with over 25 years of clinical experience.
//           </p>
//           <div className="flex flex-wrap gap-4">
//             <Link href="/contact" className="btn-primary">
//               Book a consultation
//             </Link>
//             <Link href="/conditions" className="btn-outline">
//               Explore what we treat
//             </Link>
//           </div>
//         </div>

//         <div className="relative h-72 md:h-96 flex items-center justify-center" aria-hidden="true">
//           <div className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full border border-gold/50 animate-breatheRing" />
//           <div className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full border border-gold/30 animate-breatheRing [animation-delay:1.5s]" />
//           <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-primary/90 animate-breathe shadow-[0_20px_60px_rgba(21,42,34,0.4)]" />

//           {/* signature marker — a single steady point orbiting the breath,
//               standing in for sustained, disciplined attention */}
//           <div className="absolute w-56 h-56 md:w-72 md:h-72 animate-[spin_18s_linear_infinite]">
//             <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gold animate-drift" />
//           </div>

//           <span className="absolute font-mono text-xs uppercase tracking-[0.2em] text-surface-soft/90">
//             breathe
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// }


import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-28 md:pb-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="eyebrow mb-5">Psychology &amp; Counselling · Vashi, Navi Mumbai</p>
          <h1 className="text-4xl md:text-6xl leading-[1.08] tracking-tight mb-6">
            A quieter place to work through what&apos;s heavy
          </h1>
          <p className="text-ink-soft text-lg leading-relaxed mb-8 max-w-md">
            Evidence-based counselling, clinical hypnotherapy and psychological support —
            led by Lt. Col. Rajesh Sharma (Retd.), with over 25 years of clinical experience.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Book a consultation
            </Link>
            <Link href="/conditions" className="btn-outline">
              Explore what we treat
            </Link>
          </div>
        </div>

        <div className="relative h-72 md:h-96 flex items-center justify-center" aria-hidden="true">
          <div className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full border border-gold/50 animate-breatheRing" />
          <div className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full border border-gold/30 animate-breatheRing [animation-delay:1.5s]" />
          <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-primary/90 animate-breathe shadow-[0_20px_60px_rgba(18,58,54,0.4)]" />

          {/* signature marker — a single steady point orbiting the breath,
              standing in for sustained, disciplined attention */}
          <div className="absolute w-56 h-56 md:w-72 md:h-72 animate-[spin_18s_linear_infinite]">
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gold animate-drift" />
          </div>

          <span className="absolute font-mono text-xs uppercase tracking-[0.2em] text-surface-soft/90">
            breathe
          </span>
        </div>
      </div>
    </section>
  );
}