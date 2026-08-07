export const dynamic = "force-dynamic";


import Section from "@/components/Section";
import Image from "next/image";
import PlaceholderImage from "@/components/PlaceholderImage";
import { buildMetadata } from "@/lib/seo/metadata";
import { BreadcrumbJsonLd } from "@/lib/seo/jsonld";
import {
  getPublishedAlbums,
  getPhotosForAlbum,
  GalleryAlbum,
  GalleryPhoto,
} from "@/lib/firebase/gallery";

export const metadata = buildMetadata({
  title: "Gallery",
  description:
    "Photos from past camps, outings and community events at Chaitanya Raj Psychology & Counselling.",
  path: "/gallery",
});

export default async function GalleryPage() {
  let albums: GalleryAlbum[] = [];
  let photosByAlbum: Record<string, GalleryPhoto[]> = {};

  try {
    albums = await getPublishedAlbums();
    const photoLists = await Promise.all(
      albums.map((a) => getPhotosForAlbum(a.id))
    );
    albums.forEach((a, i) => {
      photosByAlbum[a.id] = photoLists[i];
    });
  } catch (error) {
    console.error("Failed to fetch gallery albums:", error);
  }

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Gallery", path: "/gallery" }]} />
      <Section eyebrow="Gallery" title="From our events">
        <p className="text-ink-soft max-w-2xl mb-12 leading-relaxed">
          A look back at camps, outings, open houses and community sessions — grouped into
          albums by event.
        </p>

        {albums.length === 0 && (
          <p className="text-ink-soft">No albums published yet.</p>
        )}

        <div className="space-y-16">
          {albums.map((album) => (
            <div key={album.id}>
              <div className="flex items-baseline gap-3 mb-2">
                <h2 className="text-2xl font-display text-primary-dark">{album.heading}</h2>
                <span className="eyebrow">{album.year}</span>
              </div>
              {album.description && (
                <p className="text-sm text-ink-soft mb-5">{album.description}</p>
              )}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {photosByAlbum[album.id]?.map((photo) => (
                  <div key={photo.id} className="rounded-2xl overflow-hidden border border-primary/10">
                    {photo.imageUrl ? (
                      <div className="relative aspect-square w-full">
                        <Image
                          src={photo.imageUrl}
                          alt={photo.caption ?? album.heading}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <PlaceholderImage label={album.heading} className="w-full aspect-square" />
                    )}
                    {photo.caption && (
                      <p className="px-4 py-3 text-sm text-ink-soft bg-surface">{photo.caption}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}