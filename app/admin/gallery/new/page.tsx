"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import AdminGuard from "../../AdminGuard";
import { storage } from "@/lib/firebase/storage";
import { createAlbum, addPhotoToAlbum } from "@/lib/firebase/gallery";

export default function NewAlbumPage() {
  const router = useRouter();

  const [heading, setHeading] = useState("");
  const [event, setEvent] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [published, setPublished] = useState(true);

  const [images, setImages] = useState<File[]>([]);
  const [captions, setCaptions] = useState<string[]>([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    setImages(files);
    setCaptions(files.map(() => ""));
  }

  function handleCaptionChange(index: number, value: string) {
    setCaptions((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // 1. Create the album first
      const albumRef = await createAlbum({ heading, event, year, description, published });
      const albumId = albumRef.id;

      // 2. Upload each photo and link it to the new album
      for (let i = 0; i < images.length; i++) {
        const file = images[i];
        const imageRef = ref(storage, `gallery/${albumId}/${Date.now()}-${file.name}`);
        await uploadBytes(imageRef, file);
        const imageUrl = await getDownloadURL(imageRef);

        await addPhotoToAlbum({
          albumId,
          imageUrl,
          caption: captions[i] || undefined,
        });
      }

      router.push("/admin/gallery");
    } catch (err) {
      console.error(err);
      setError("Something went wrong while creating the album.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AdminGuard>
      <main className="min-h-screen bg-sand px-6 py-10 md:px-10">
        <div className="mx-auto max-w-2xl">
          <Link href="/admin/gallery" className="text-sm text-primary hover:underline">
            ← Back to Gallery
          </Link>

          <p className="eyebrow mt-8">Content management</p>
          <h1 className="mt-3 text-5xl text-primary-dark">New Album</h1>

          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6 rounded-3xl bg-white p-8 shadow-sm md:p-10"
          >
            <div>
              <label className="mb-2 block text-sm font-medium">Album Heading</label>
              <input
                required
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
                placeholder="Summer Wellness Camp"
                className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">Event</label>
                <input
                  required
                  value={event}
                  onChange={(e) => setEvent(e.target.value)}
                  placeholder="Community Outing"
                  className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Year</label>
                <input
                  required
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  placeholder="2025"
                  className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Description (optional)</label>
              <textarea
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
              />
            </div>

            {/* PHOTOS */}
            <div className="border-t border-primary-dark/10 pt-6">
              <label className="mb-2 block text-sm font-medium">Photos</label>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                className="w-full rounded-xl border border-primary-dark/15 px-4 py-3"
              />
              <p className="mt-2 text-sm text-ink-soft">
                Select one or more photos. You can add captions below, or leave them blank.
              </p>

              {images.length > 0 && (
                <div className="mt-5 space-y-3">
                  {images.map((file, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-xl border border-primary-dark/10 p-3">
                      <span className="w-40 shrink-0 truncate text-sm text-ink-soft">
                        {file.name}
                      </span>
                      <input
                        value={captions[i]}
                        onChange={(e) => handleCaptionChange(i, e.target.value)}
                        placeholder="Caption (optional)"
                        className="w-full rounded-lg border border-primary-dark/15 px-3 py-2 text-sm outline-none focus:border-primary"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center gap-3 border-t border-primary-dark/10 pt-6">
              <input
                id="published"
                type="checkbox"
                checked={published}
                onChange={(e) => setPublished(e.target.checked)}
                className="h-4 w-4"
              />
              <label htmlFor="published" className="text-sm text-ink-soft">
                Publish this album immediately
              </label>
            </div>

            {error && (
              <p className="rounded-xl bg-red-50 p-4 text-sm text-red-600">{error}</p>
            )}

            <div className="flex gap-4 border-t border-primary-dark/10 pt-6">
              <Link
                href="/admin/gallery"
                className="rounded-full border border-primary-dark/20 px-6 py-3 text-sm font-medium"
              >
                Cancel
              </Link>
              <button type="submit" disabled={loading} className="btn-primary disabled:opacity-60">
                {loading ? "Creating Album..." : "Create Album"}
              </button>
            </div>
          </form>
        </div>
      </main>
    </AdminGuard>
  );
}