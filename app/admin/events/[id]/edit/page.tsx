"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import AdminGuard from "../../../AdminGuard";
import { db } from "@/lib/firebase/firestore";
import { storage } from "@/lib/firebase/storage";

export default function EditEventPage() {
  const router = useRouter();
  const params = useParams();
  const eventId = params.id as string;

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");
  const [registrationLink, setRegistrationLink] = useState("");
  const [published, setPublished] = useState(true);
  const [existingImageUrl, setExistingImageUrl] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadEvent() {
      try {
        const snap = await getDoc(doc(db, "events", eventId));
        if (!snap.exists()) {
          setError("Event not found.");
          setLoading(false);
          return;
        }
        const data = snap.data();
        setTitle(data.title ?? "");
        setDate(data.date ?? "");
        setTime(data.time ?? "");
        setLocation(data.location ?? "");
        setShortDescription(data.shortDescription ?? "");
        setDescription(data.description ?? "");
        setRegistrationLink(data.registrationLink ?? "");
        setPublished(data.published ?? true);
        setExistingImageUrl(data.imageUrl ?? "");
      } catch (err) {
        console.error(err);
        setError("Failed to load event.");
      } finally {
        setLoading(false);
      }
    }
    loadEvent();
  }, [eventId]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaving(true);
    setError("");

    try {
      let imageUrl = existingImageUrl;

      if (image) {
        const imageRef = ref(storage, `events/${Date.now()}-${image.name}`);
        await uploadBytes(imageRef, image);
        imageUrl = await getDownloadURL(imageRef);
      }

      await updateDoc(doc(db, "events", eventId), {
        title,
        date,
        time,
        location,
        shortDescription,
        description,
        registrationLink,
        published,
        imageUrl,
      });

      router.push("/admin/events");
    } catch (err) {
      console.error(err);
      setError("Something went wrong while saving the event.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <AdminGuard>
        <main className="flex min-h-screen items-center justify-center bg-sand">
          <p className="text-ink-soft">Loading event...</p>
        </main>
      </AdminGuard>
    );
  }

  if (error && !title) {
    return (
      <AdminGuard>
        <main className="flex min-h-screen items-center justify-center bg-sand">
          <p className="text-red-600">{error}</p>
        </main>
      </AdminGuard>
    );
  }

  return (
    <AdminGuard>
      <main className="min-h-screen bg-sand px-6 py-10 md:px-10">
        <div className="mx-auto max-w-4xl">
          <Link href="/admin/events" className="text-sm text-primary hover:underline">
            ← Back to Events
          </Link>

          <p className="eyebrow mt-8">Content management</p>
          <h1 className="mt-3 text-5xl text-primary-dark">Edit Event</h1>

          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-8 rounded-3xl bg-white p-8 shadow-sm md:p-10"
          >
            <div>
              <label className="mb-2 block text-sm font-medium">Event Title</label>
              <input
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">Date</label>
                <input
                  required
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Time</label>
                <input
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Location</label>
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Short Description</label>
              <textarea
                required
                rows={3}
                value={shortDescription}
                onChange={(e) => setShortDescription(e.target.value)}
                className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Full Description</label>
              <textarea
                required
                rows={8}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Event Image</label>
              {existingImageUrl && !image && (
                <p className="mb-2 text-sm text-ink-soft">Current image is set. Upload a new one to replace it.</p>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files?.[0] ?? null)}
                className="w-full rounded-xl border border-primary-dark/15 px-4 py-3"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Registration Link</label>
              <input
                type="url"
                value={registrationLink}
                onChange={(e) => setRegistrationLink(e.target.value)}
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
                href="/admin/events"
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