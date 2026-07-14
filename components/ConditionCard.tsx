// // import Link from "next/link";
// // import { Condition } from "@/lib/data/conditions";

// // export default function ConditionCard({ condition }: { condition: Condition }) {
// //   return (
// //     <Link
// //       href={`/conditions/${condition.slug}`}
// //       className="card p-6 flex flex-col gap-3 hover:border-accent/40 hover:-translate-y-0.5 transition-all"
// //     >
// //       <h3 className="text-xl text-primary-dark font-display">{condition.name}</h3>
// //       <p className="text-ink-soft text-sm leading-relaxed">{condition.shortDescription}</p>
// //       <span className="font-mono text-xs uppercase tracking-widest text-accent mt-1">
// //         Learn more →
// //       </span>
// //     </Link>
// //   );
// // }


// import Link from "next/link";
// import { Condition } from "@/lib/data/conditions";
// import IconTile from "@/components/IconTile";

// export default function ConditionCard({ condition }: { condition: Condition }) {
//   return (
//     <Link
//       href={`/conditions/${condition.slug}`}
//       className="card p-6 flex flex-col gap-4 hover:border-accent/40 hover:-translate-y-1 transition-all"
//     >
//       <IconTile slug={condition.slug} />
//       <div className="flex flex-col gap-2">
//         <h3 className="text-xl text-primary-dark font-display">{condition.name}</h3>
//         <p className="text-ink-soft text-sm leading-relaxed">{condition.shortDescription}</p>
//       </div>
//       <span className="font-mono text-xs uppercase tracking-widest text-accent mt-auto pt-1">
//         Learn more →
//       </span>
//     </Link>
//   );
// }

import Link from "next/link";
import { Condition } from "@/lib/data/conditions";
import IconTile from "@/components/IconTile";

export default function ConditionCard({ condition }: { condition: Condition }) {
  return (
    <Link
      href={`/conditions/${condition.slug}`}
      className="card overflow-hidden flex flex-col hover:border-accent/40 hover:-translate-y-1 transition-all"
    >
      <IconTile slug={condition.slug} variant="card" />
      <div className="p-6 flex flex-col gap-2 flex-1">
        <h3 className="text-xl text-primary-dark font-display">{condition.name}</h3>
        <p className="text-ink-soft text-sm leading-relaxed flex-1">{condition.shortDescription}</p>
        <span className="font-mono text-xs uppercase tracking-widest text-accent mt-1">
          Learn more →
        </span>
      </div>
    </Link>
  );
}