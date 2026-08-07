"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import AdminGuard from "../../../AdminGuard";
import { getAlbumById, updateAlbum } from "@/lib/firebase/gallery";

export default function EditAlbumPage() {
  const router = useRouter();
  const params = useParams();
  const albumId = params.albumId as string;

  const [heading, setHeading] = useState("");
  const [event, setEvent] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [published, setPublished] = useState(true);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadAlbum() {
      const album = await getAlbumById(albumId);
      if (!album) {
        setError("Album not found.");
        setLoading(false);
        return;
      }
      setHeading(album.heading);
      setEvent(album.event);
      setYear(album.year);
      setDescription(album.description ?? "");
      setPublished(album.published);
      setLoading(false);
    }
    loadAlbum();
  }, [albumId]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaving(true);
    setError("");

    try {
      await updateAlbum(albumId, { heading, event, year, description, published });
      router.push("/admin/gallery");
    } catch (err) {
      console.error(err);
      setError("Something went wrong while saving the album.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <AdminGuard>
        <main className="flex min-h-screen items-center justify-center bg-sand">
          <p className="text-ink-soft">Loading album...</p>
        </main>
      </AdminGuard>
    );
  }

  return (
    <AdminGuard>
      <main className="min-h-screen bg-sand px-6 py-10 md:px-10">
        <div className="mx-auto max-w-2xl">
          <Link href={`/admin/gallery/${albumId}`} className="text-sm text-primary hover:underline">
            ← Back to Album
          </Link>

          <p className="eyebrow mt-8">Content management</p>
          <h1 className="mt-3 text-5xl text-primary-dark">Edit Album</h1>

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
                  className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Year</label>
                <input
                  required
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
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

            <div className="flex items-center gap-3 border-t border-primary-dark/10 pt-6">
              <input
                id="published"
                type="checkbox"
                checked={published}
                onChange={(e) => setPublished(e.target.checked)}
                className="h-4 w-4"
              />
              <label htmlFor="published" className="text-sm text-ink-soft">
                Published
              </label>
            </div>

            {error && <p className="rounded-xl bg-red-50 p-4 text-sm text-red-600">{error}</p>}

            <div className="flex gap-4 border-t border-primary-dark/10 pt-6">
              <Link
                href={`/admin/gallery/${albumId}`}
                className="rounded-full border border-primary-dark/20 px-6 py-3 text-sm font-medium"
              >
                Cancel
              </Link>
              <button type="submit" disabled={saving} className="btn-primary disabled:opacity-60">
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      </main>
    </AdminGuard>
  );
}