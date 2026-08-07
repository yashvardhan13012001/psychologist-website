// import Section from "@/components/Section";
// import { buildMetadata } from "@/lib/seo/metadata";
// import { BreadcrumbJsonLd } from "@/lib/seo/jsonld";
// import { mediaHighlights } from "@/lib/data/about";

// export const metadata = buildMetadata({
//   title: "Media Highlights",
//   description: "Press features, interviews and media appearances from Chaitanya Raj Psychology & Counselling.",
//   path: "/about/media-highlights"
// });

// export default function MediaHighlightsPage() {
//   return (
//     <>
//       <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }, { name: "Media Highlights", path: "/about/media-highlights" }]} />
//       <Section eyebrow="About" title="Media Highlights">
//         <div className="max-w-2xl space-y-6">
//           {mediaHighlights.map((m) => (
//             <a
//               key={m.title}
//               href={m.link}
//               className="card p-6 flex flex-col gap-2 hover:border-accent/40 transition-colors"
//             >
//               <p className="font-mono text-xs text-accent uppercase tracking-widest">{m.outlet} · {m.date}</p>
//               <p className="text-xl font-display text-primary-dark">{m.title}</p>
//               <p className="text-ink-soft">{m.description}</p>
//             </a>
//           ))}
//           <p className="text-sm text-ink-soft/60">
//             Placeholder entries — replace with real press mentions, links, and dates before launch.
//           </p>
//         </div>
//       </Section>
//     </>
//   );
// }



import Image from "next/image";
import Section from "@/components/Section";
import { buildMetadata } from "@/lib/seo/metadata";
import { BreadcrumbJsonLd } from "@/lib/seo/jsonld";
import { mediaHighlights } from "@/lib/data/about";

export const metadata = buildMetadata({
  title: "Media Highlights",
  description: "Press features, interviews and media appearances from Chaitanya Raj Psychology & Counselling.",
  path: "/about/media-highlights"
});

export default function MediaHighlightsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }, { name: "Media Highlights", path: "/about/media-highlights" }]} />
      <Section eyebrow="About" title="Media Highlights">
        <div className="max-w-2xl space-y-6">
          {mediaHighlights.map((m) => (
            <a key={m.title}
              href={m.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card overflow-hidden flex flex-col gap-2 hover:border-accent/40 transition-colors"
            >
              {m.image && (
                // <div className="relative aspect-[4/3] w-full overflow-hidden">
                // <div className="relative aspect-video w-full overflow-hidden">
                // <div className="relative aspect-square w-full overflow-hidden">
                // <div className="relative h-96 w-full overflow-hidden">
                <div className="relative h-[1077px] w-full overflow-hidden">
                  <Image
                    src={m.image}
                    alt={m.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 42rem"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col gap-2">
                <p className="font-mono text-xs text-accent uppercase tracking-widest">{m.outlet} · {m.date}</p>
                <p className="text-xl font-display text-primary-dark">{m.title}</p>
                <p className="text-ink-soft">{m.description}</p>
              </div>
            </a>
          ))}
          <p className="text-sm text-ink-soft/60">
            Placeholder entries — replace with real press mentions, links, and dates before launch.
          </p>
        </div>
      </Section>
    </>
  );
}