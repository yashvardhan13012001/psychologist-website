import Section from "@/components/Section";
import PlaceholderImage from "@/components/PlaceholderImage";
import { buildMetadata } from "@/lib/seo/metadata";
import { BreadcrumbJsonLd } from "@/lib/seo/jsonld";
import { galleryItems, GalleryItem } from "@/lib/data/gallery";

export const metadata = buildMetadata({
  title: "Gallery",
  description:
    "Photos from past camps, outings and community events at Chaitanya Raj Psychology & Counselling.",
  path: "/gallery"
});

type Album = { event: string; year: string; items: GalleryItem[] };

function groupIntoAlbums(items: GalleryItem[]): Album[] {
  const albums = new Map<string, Album>();
  for (const item of items) {
    const key = `${item.event}__${item.year}`;
    if (!albums.has(key)) {
      albums.set(key, { event: item.event, year: item.year, items: [] });
    }
    albums.get(key)!.items.push(item);
  }
  return Array.from(albums.values());
}

export default function GalleryPage() {
  const albums = groupIntoAlbums(galleryItems);

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Gallery", path: "/gallery" }]} />
      <Section eyebrow="Gallery" title="From our events">
        <p className="text-ink-soft max-w-2xl mb-12 leading-relaxed">
          A look back at camps, outings, open houses and community sessions — grouped into
          albums by event.
        </p>

        <div className="space-y-16">
          {albums.map((album) => (
            <div key={`${album.event}-${album.year}`}>
              <div className="flex items-baseline gap-3 mb-5">
                <h2 className="text-2xl font-display text-primary-dark">{album.event}</h2>
                <span className="eyebrow">{album.year}</span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {album.items.map((g, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden border border-primary/10">
                    <PlaceholderImage label={`${g.event}, ${g.year}`} className="w-full aspect-square" />
                    <p className="px-4 py-3 text-sm text-ink-soft bg-surface">{g.caption}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-ink-soft/60 mt-12">
          Placeholder gallery entries — replace with real event photography before launch.
        </p>
      </Section>
    </>
  );
}