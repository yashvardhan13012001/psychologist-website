"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import AdminGuard from "../../AdminGuard";
import { storage } from "@/lib/firebase/storage";
import {
  getAlbumById,
  getPhotosForAlbum,
  addPhotoToAlbum,
  deletePhoto,
  GalleryAlbum,
  GalleryPhoto,
} from "@/lib/firebase/gallery";

export default function AlbumDetailPage() {
  const params = useParams();
  const albumId = params.albumId as string;

  const [album, setAlbum] = useState<GalleryAlbum | null>(null);
  const [photos, setPhotos] = useState<GalleryPhoto[]>([]);
  const [loading, setLoading] = useState(true);

  const [caption, setCaption] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  async function loadData() {
    setLoading(true);
    const [albumData, photoData] = await Promise.all([
      getAlbumById(albumId),
      getPhotosForAlbum(albumId),
    ]);
    setAlbum(albumData);
    setPhotos(photoData);
    setLoading(false);
  }

  useEffect(() => {
    loadData();
  }, [albumId]);

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    if (!image) {
      setError("Select an image first.");
      return;
    }

    setUploading(true);
    setError("");

    try {
      const imageRef = ref(storage, `gallery/${albumId}/${Date.now()}-${image.name}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);

      await addPhotoToAlbum({ albumId, imageUrl, caption });

      setCaption("");
      setImage(null);
      await loadData();
    } catch (err) {
      console.error(err);
      setError("Something went wrong while uploading the photo.");
    } finally {
      setUploading(false);
    }
  }

  async function handleDeletePhoto(photoId: string) {
    if (!confirm("Delete this photo?")) return;
    try {
      await deletePhoto(photoId);
      setPhotos((prev) => prev.filter((p) => p.id !== photoId));
    } catch (err) {
      console.error(err);
      alert("Failed to delete photo.");
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

  if (!album) {
    return (
      <AdminGuard>
        <main className="flex min-h-screen items-center justify-center bg-sand">
          <p className="text-ink-soft">Album not found.</p>
        </main>
      </AdminGuard>
    );
  }

  return (
    <AdminGuard>
      <main className="min-h-screen bg-sand px-6 py-10 md:px-10">
        <div className="mx-auto max-w-5xl">
          <Link href="/admin/gallery" className="text-sm text-primary hover:underline">
            ← Back to Gallery
          </Link>

          <p className="eyebrow mt-8">{album.year} · {album.event}</p>
          <h1 className="mt-3 text-5xl text-primary-dark">{album.heading}</h1>

          <Link
            href={`/admin/gallery/${albumId}/edit`}
            className="mt-4 inline-flex rounded-full border border-primary-dark/20 px-5 py-2 text-sm font-medium text-primary-dark hover:bg-sand"
          >
            Edit Album Details
          </Link>

          {/* ADD PHOTO FORM */}
          <form
            onSubmit={handleUpload}
            className="mt-10 space-y-5 rounded-3xl bg-white p-8 shadow-sm"
          >
            <h2 className="text-xl text-primary-dark">Add a Photo</h2>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files?.[0] ?? null)}
              className="w-full rounded-xl border border-primary-dark/15 px-4 py-3"
            />

            <input
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Caption (optional)"
              className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
            />

            {error && <p className="text-sm text-red-600">{error}</p>}

            <button type="submit" disabled={uploading} className="btn-primary disabled:opacity-60">
              {uploading ? "Uploading..." : "Add Photo"}
            </button>
          </form>

          {/* EXISTING PHOTOS */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {photos.map((photo) => (
              <div key={photo.id} className="relative overflow-hidden rounded-2xl border border-primary/10">
                <button
                  onClick={() => handleDeletePhoto(photo.id)}
                  className="absolute right-2 top-2 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-red-600 hover:bg-white"
                >
                  Delete
                </button>
                <div className="relative aspect-square w-full">
                  <Image src={photo.imageUrl} alt={photo.caption ?? ""} fill className="object-cover" />
                </div>
                {photo.caption && (
                  <p className="bg-white px-4 py-3 text-sm text-ink-soft">{photo.caption}</p>
                )}
              </div>
            ))}
          </div>

          {photos.length === 0 && (
            <p className="mt-10 text-center text-ink-soft">No photos in this album yet.</p>
          )}
        </div>
      </main>
    </AdminGuard>
  );
}