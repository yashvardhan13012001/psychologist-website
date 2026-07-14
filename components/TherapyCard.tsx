// // import Link from "next/link";
// // import { Therapy } from "@/lib/data/therapies";

// // export default function TherapyCard({ therapy }: { therapy: Therapy }) {
// //   return (
// //     <Link
// //       href={`/therapies/${therapy.slug}`}
// //       className="card p-6 flex flex-col gap-3 hover:border-accent/40 hover:-translate-y-0.5 transition-all"
// //     >
// //       <h3 className="text-xl text-primary-dark font-display">{therapy.name}</h3>
// //       <p className="text-ink-soft text-sm leading-relaxed">{therapy.shortDescription}</p>
// //       <span className="font-mono text-xs uppercase tracking-widest text-accent mt-1">
// //         Learn more →
// //       </span>
// //     </Link>
// //   );
// // }


// import Link from "next/link";
// import { Therapy } from "@/lib/data/therapies";
// import IconTile from "@/components/IconTile";

// export default function TherapyCard({ therapy }: { therapy: Therapy }) {
//   return (
//     <Link
//       href={`/therapies/${therapy.slug}`}
//       className="card p-6 flex flex-col gap-4 hover:border-accent/40 hover:-translate-y-1 transition-all"
//     >
//       <IconTile slug={therapy.slug} />
//       <div className="flex flex-col gap-2">
//         <h3 className="text-xl text-primary-dark font-display">{therapy.name}</h3>
//         <p className="text-ink-soft text-sm leading-relaxed">{therapy.shortDescription}</p>
//       </div>
//       <span className="font-mono text-xs uppercase tracking-widest text-accent mt-auto pt-1">
//         Learn more →
//       </span>
//     </Link>
//   );
// }

import Link from "next/link";
import { Therapy } from "@/lib/data/therapies";
import IconTile from "@/components/IconTile";

export default function TherapyCard({ therapy }: { therapy: Therapy }) {
  return (
    <Link
      href={`/therapies/${therapy.slug}`}
      className="card overflow-hidden flex flex-col hover:border-accent/40 hover:-translate-y-1 transition-all"
    >
      <IconTile slug={therapy.slug} variant="card" />
      <div className="p-6 flex flex-col gap-2 flex-1">
        <h3 className="text-xl text-primary-dark font-display">{therapy.name}</h3>
        <p className="text-ink-soft text-sm leading-relaxed flex-1">{therapy.shortDescription}</p>
        <span className="font-mono text-xs uppercase tracking-widest text-accent mt-1">
          Learn more →
        </span>
      </div>
    </Link>
  );
}