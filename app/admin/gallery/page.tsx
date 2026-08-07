// // "use client";

// // import { useEffect, useState } from "react";
// // import Link from "next/link";
// // import AdminGuard from "../AdminGuard";
// // import { getAllAlbums, GalleryAlbum } from "@/lib/firebase/gallery";

// // export default function GalleryAdminPage() {
// //   const [albums, setAlbums] = useState<GalleryAlbum[]>([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState("");

// //   async function loadAlbums() {
// //     try {
// //       setLoading(true);
// //       setError("");
// //       const data = await getAllAlbums();
// //       setAlbums(data);
// //     } catch (err) {
// //       console.error("Error loading albums:", err);
// //       setError("Unable to load albums.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   }

// //   useEffect(() => {
// //     loadAlbums();
// //   }, []);

// //   return (
// //     <AdminGuard>
// //       <main className="min-h-screen bg-sand px-6 py-10 md:px-10">
// //         <div className="mx-auto max-w-7xl">

// //           <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
// //             <div>
// //               <Link href="/admin" className="text-sm text-primary hover:underline">
// //                 ← Back to dashboard
// //               </Link>
// //               <p className="eyebrow mt-8">Content management</p>
// //               <h1 className="mt-3 text-5xl text-primary-dark">Gallery</h1>
// //               <p className="mt-4 max-w-xl text-lg text-ink-soft">
// //                 Manage albums and event photos.
// //               </p>
// //             </div>

// //             <Link href="/admin/gallery/new" className="btn-primary inline-flex">
// //               + New Album
// //             </Link>
// //           </div>

// //           {loading && (
// //             <div className="mt-12 rounded-3xl bg-white p-12 text-center shadow-sm">
// //               <p className="text-ink-soft">Loading albums...</p>
// //             </div>
// //           )}

// //           {!loading && error && (
// //             <div className="mt-12 rounded-3xl bg-red-50 p-8 text-center">
// //               <p className="text-red-600">{error}</p>
// //               <button
// //                 onClick={loadAlbums}
// //                 className="mt-4 rounded-full border border-red-300 px-5 py-2 text-sm text-red-600"
// //               >
// //                 Try Again
// //               </button>
// //             </div>
// //           )}

// //           {!loading && !error && albums.length === 0 && (
// //             <div className="mt-12 rounded-3xl bg-white p-12 text-center shadow-sm">
// //               <h2 className="text-2xl text-primary-dark">No albums yet</h2>
// //               <p className="mx-auto mt-3 max-w-md text-ink-soft">
// //                 Create your first album to start adding event photos.
// //               </p>
// //               <Link href="/admin/gallery/new" className="btn-primary mt-6 inline-flex">
// //                 Create Your First Album
// //               </Link>
// //             </div>
// //           )}

// //           {!loading && !error && albums.length > 0 && (
// //             <div className="mt-12 grid gap-5 md:grid-cols-3">
// //               {albums.map((album) => (
// //                 <Link
// //                   key={album.id}
// //                   href={`/admin/gallery/${album.id}`}
// //                   className="group rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
// //                 >
// //                   <div className="flex items-center justify-between">
// //                     <span
// //                       className={`rounded-full px-3 py-1 text-xs font-medium ${
// //                         album.published
// //                           ? "bg-green-100 text-green-700"
// //                           : "bg-gray-100 text-gray-600"
// //                       }`}
// //                     >
// //                       {album.published ? "Published" : "Draft"}
// //                     </span>
// //                     <span className="text-sm text-ink-soft">{album.year}</span>
// //                   </div>
// //                   <h2 className="mt-4 text-2xl text-primary-dark">{album.heading}</h2>
// //                   <p className="mt-1 text-sm text-ink-soft">{album.event}</p>
// //                 </Link>
// //               ))}
// //             </div>
// //           )}

// //         </div>
// //       </main>
// //     </AdminGuard>
// //   );
// // }

// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import AdminGuard from "../AdminGuard";
// import { getAllAlbums, deleteAlbum, GalleryAlbum } from "@/lib/firebase/gallery";

// export default function GalleryAdminPage() {
//   const [albums, setAlbums] = useState<GalleryAlbum[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   async function loadAlbums() {
//     try {
//       setLoading(true);
//       setError("");
//       const data = await getAllAlbums();
//       setAlbums(data);
//     } catch (err) {
//       console.error("Error loading albums:", err);
//       setError("Unable to load albums.");
//     } finally {
//       setLoading(false);
//     }
//   }

//   async function handleDeleteAlbum(e: React.MouseEvent, albumId: string) {
//     e.preventDefault();
//     e.stopPropagation();
//     if (!confirm("Delete this album and all its photos? This cannot be undone.")) return;

//     try {
//       await deleteAlbum(albumId);
//       setAlbums((prev) => prev.filter((a) => a.id !== albumId));
//     } catch (err) {
//       console.error(err);
//       alert("Failed to delete album.");
//     }
//   }

//   useEffect(() => {
//     loadAlbums();
//   }, []);

//   return (
//     <AdminGuard>
//       <main className="min-h-screen bg-sand px-6 py-10 md:px-10">
//         <div className="mx-auto max-w-7xl">

//           <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
//             <div>
//               <Link href="/admin" className="text-sm text-primary hover:underline">
//                 ← Back to dashboard
//               </Link>
//               <p className="eyebrow mt-8">Content management</p>
//               <h1 className="mt-3 text-5xl text-primary-dark">Gallery</h1>
//               <p className="mt-4 max-w-xl text-lg text-ink-soft">
//                 Manage albums and event photos.
//               </p>
//             </div>

//             <Link href="/admin/gallery/new" className="btn-primary inline-flex">
//               + New Album
//             </Link>
//           </div>

//           {loading && (
//             <div className="mt-12 rounded-3xl bg-white p-12 text-center shadow-sm">
//               <p className="text-ink-soft">Loading albums...</p>
//             </div>
//           )}

//           {!loading && error && (
//             <div className="mt-12 rounded-3xl bg-red-50 p-8 text-center">
//               <p className="text-red-600">{error}</p>
//               <button
//                 onClick={loadAlbums}
//                 className="mt-4 rounded-full border border-red-300 px-5 py-2 text-sm text-red-600"
//               >
//                 Try Again
//               </button>
//             </div>
//           )}

//           {!loading && !error && albums.length === 0 && (
//             <div className="mt-12 rounded-3xl bg-white p-12 text-center shadow-sm">
//               <h2 className="text-2xl text-primary-dark">No albums yet</h2>
//               <p className="mx-auto mt-3 max-w-md text-ink-soft">
//                 Create your first album to start adding event photos.
//               </p>
//               <Link href="/admin/gallery/new" className="btn-primary mt-6 inline-flex">
//                 Create Your First Album
//               </Link>
//             </div>
//           )}

//           {!loading && !error && albums.length > 0 && (
//             <div className="mt-12 grid gap-5 md:grid-cols-3">
//               {albums.map((album) => (
//                 <Link
//                   key={album.id}
//                   href={`/admin/gallery/${album.id}`}
//                   className="group relative rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
//                 >
//                   <button
//                     onClick={(e) => handleDeleteAlbum(e, album.id)}
//                     className="absolute right-4 top-4 rounded-full border border-red-200 px-3 py-1 text-xs font-medium text-red-600 hover:bg-red-50"
//                   >
//                     Delete
//                   </button>

//                   <div className="flex items-center justify-between">
//                     <span
//                       className={`rounded-full px-3 py-1 text-xs font-medium ${
//                         album.published
//                           ? "bg-green-100 text-green-700"
//                           : "bg-gray-100 text-gray-600"
//                       }`}
//                     >
//                       {album.published ? "Published" : "Draft"}
//                     </span>
//                     <span className="text-sm text-ink-soft">{album.year}</span>
//                   </div>
//                   <h2 className="mt-4 text-2xl text-primary-dark">{album.heading}</h2>
//                   <p className="mt-1 text-sm text-ink-soft">{album.event}</p>
//                 </Link>
//               ))}
//             </div>
//           )}

//         </div>
//       </main>
//     </AdminGuard>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AdminGuard from "../AdminGuard";
import { getAllAlbums, getPhotosForAlbum, deleteAlbum, GalleryAlbum } from "@/lib/firebase/gallery";

type AlbumWithPreview = GalleryAlbum & {
  photoCount: number;
  thumbnailUrl?: string;
};

export default function GalleryAdminPage() {
  const [albums, setAlbums] = useState<AlbumWithPreview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);

  async function loadAlbums() {
    try {
      setLoading(true);
      setError("");

      const baseAlbums = await getAllAlbums();

      const withPreviews = await Promise.all(
        baseAlbums.map(async (album) => {
          const photos = await getPhotosForAlbum(album.id);
          return {
            ...album,
            photoCount: photos.length,
            thumbnailUrl: photos[0]?.imageUrl,
          };
        })
      );

      setAlbums(withPreviews);
    } catch (err) {
      console.error("Error loading albums:", err);
      setError("Unable to load albums.");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(albumId: string, heading: string) {
    if (!confirm(`Delete "${heading}" and all its photos? This cannot be undone.`)) return;

    setDeletingId(albumId);
    try {
      await deleteAlbum(albumId);
      setAlbums((prev) => prev.filter((a) => a.id !== albumId));
    } catch (err) {
      console.error(err);
      alert("Failed to delete album.");
    } finally {
      setDeletingId(null);
    }
  }

  useEffect(() => {
    loadAlbums();
  }, []);

  return (
    <AdminGuard>
      <main className="min-h-screen bg-sand px-6 py-10 md:px-10">
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Link href="/admin" className="text-sm text-primary hover:underline">
              ← Back to dashboard
            </Link>
            <p className="eyebrow mt-8">Content management</p>
            <h1 className="mt-3 text-5xl text-primary-dark">Gallery</h1>
            <p className="mt-4 max-w-xl text-lg text-ink-soft">
              Manage albums and event photos.
            </p>
          </div>

          <Link href="/admin/gallery/new" className="btn-primary inline-flex">
            + New Album
          </Link>
        </div>

        {/* LOADING — skeleton grid instead of a plain line */}
        {loading && (
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="animate-pulse overflow-hidden rounded-3xl bg-white shadow-sm">
                <div className="aspect-[4/3] w-full bg-surface-soft" />
                <div className="space-y-3 p-6">
                  <div className="h-4 w-1/3 rounded bg-surface-soft" />
                  <div className="h-6 w-2/3 rounded bg-surface-soft" />
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && error && (
          <div className="mt-12 rounded-3xl bg-red-50 p-8 text-center">
            <p className="text-red-600">{error}</p>
            <button
              onClick={loadAlbums}
              className="mt-4 rounded-full border border-red-300 px-5 py-2 text-sm text-red-600"
            >
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && albums.length === 0 && (
          <div className="mt-12 rounded-3xl bg-white p-12 text-center shadow-sm">
            <h2 className="text-2xl text-primary-dark">No albums yet</h2>
            <p className="mx-auto mt-3 max-w-md text-ink-soft">
              Create your first album to start adding event photos.
            </p>
            <Link href="/admin/gallery/new" className="btn-primary mt-6 inline-flex">
              Create Your First Album
            </Link>
          </div>
        )}

        {!loading && !error && albums.length > 0 && (
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {albums.map((album) => (
              <div
                key={album.id}
                className="group overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-xl"
              >
                {/* THUMBNAIL — clicking it opens the album */}
                <Link href={`/admin/gallery/${album.id}`} className="block">
                  <div className="relative aspect-[4/3] w-full bg-surface-soft">
                    {album.thumbnailUrl ? (
                      <Image
                        src={album.thumbnailUrl}
                        alt={album.heading}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition group-hover:scale-[1.02]"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-sm text-ink-soft">
                        No photos yet
                      </div>
                    )}

                    <span
                      className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-medium ${
                        album.published
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {album.published ? "Published" : "Draft"}
                    </span>

                    <span className="absolute right-3 top-3 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white">
                      {album.photoCount} {album.photoCount === 1 ? "photo" : "photos"}
                    </span>
                  </div>
                </Link>

                {/* DETAILS + ACTIONS */}
                <div className="p-6">
                  <Link href={`/admin/gallery/${album.id}`}>
                    <p className="text-sm text-ink-soft">{album.year} · {album.event}</p>
                    <h2 className="mt-1 text-2xl text-primary-dark hover:underline">{album.heading}</h2>
                  </Link>

                  <div className="mt-5 flex gap-3 border-t border-primary-dark/10 pt-5">
                    <Link
                      href={`/admin/gallery/${album.id}/edit`}
                      className="flex-1 rounded-full border border-primary-dark/20 px-4 py-2 text-center text-sm font-medium text-primary-dark transition hover:bg-sand"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(album.id, album.heading)}
                      disabled={deletingId === album.id}
                      className="flex-1 rounded-full border border-red-200 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50 disabled:opacity-50"
                    >
                      {deletingId === album.id ? "Deleting..." : "Delete"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </main>
   </AdminGuard>
  );
}