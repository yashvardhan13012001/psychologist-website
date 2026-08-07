// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import AdminGuard from "../AdminGuard";
// import { getAllPosts, deletePost, BlogPost } from "@/lib/firebase/blogs";

// export default function BlogsAdminPage() {
//   const [posts, setPosts] = useState<BlogPost[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [deletingSlug, setDeletingSlug] = useState<string | null>(null);

//   async function loadPosts() {
//     try {
//       setLoading(true);
//       setError("");
//       const data = await getAllPosts();
//       setPosts(data);
//     } catch (err) {
//       console.error("Error loading posts:", err);
//       setError("Unable to load posts.");
//     } finally {
//       setLoading(false);
//     }
//   }

//   async function handleDelete(slug: string, title: string) {
//     if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;

//     setDeletingSlug(slug);
//     try {
//       await deletePost(slug);
//       setPosts((prev) => prev.filter((p) => p.slug !== slug));
//     } catch (err) {
//       console.error(err);
//       alert("Failed to delete post.");
//     } finally {
//       setDeletingSlug(null);
//     }
//   }

//   useEffect(() => {
//     loadPosts();
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
//               <h1 className="mt-3 text-5xl text-primary-dark">Blogs</h1>
//               <p className="mt-4 max-w-xl text-lg text-ink-soft">
//                 Create, edit, and publish articles.
//               </p>
//             </div>

//             <Link href="/admin/blogs/new" className="btn-primary inline-flex">
//               + New Post
//             </Link>
//           </div>

//           {/* LOADING — skeleton rows instead of a plain line */}
//           {loading && (
//             <div className="mt-12 space-y-5">
//               {[0, 1, 2].map((i) => (
//                 <div key={i} className="flex animate-pulse gap-6 rounded-3xl bg-white p-5 shadow-sm">
//                   <div className="h-32 w-48 shrink-0 rounded-2xl bg-surface-soft" />
//                   <div className="flex-1 space-y-3 py-2">
//                     <div className="h-4 w-1/4 rounded bg-surface-soft" />
//                     <div className="h-6 w-2/3 rounded bg-surface-soft" />
//                     <div className="h-4 w-1/2 rounded bg-surface-soft" />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {!loading && error && (
//             <div className="mt-12 rounded-3xl bg-red-50 p-8 text-center">
//               <p className="text-red-600">{error}</p>
//               <button
//                 onClick={loadPosts}
//                 className="mt-4 rounded-full border border-red-300 px-5 py-2 text-sm text-red-600"
//               >
//                 Try Again
//               </button>
//             </div>
//           )}

//           {!loading && !error && posts.length === 0 && (
//             <div className="mt-12 rounded-3xl bg-white p-12 text-center shadow-sm">
//               <h2 className="text-2xl text-primary-dark">No posts yet</h2>
//               <p className="mx-auto mt-3 max-w-md text-ink-soft">
//                 Write your first article to start building the blog.
//               </p>
//               <Link href="/admin/blogs/new" className="btn-primary mt-6 inline-flex">
//                 Create Your First Post
//               </Link>
//             </div>
//           )}

//           {!loading && !error && posts.length > 0 && (
//             <div className="mt-12 space-y-5">
//               {posts.map((post) => (
//                 <div
//                   key={post.id}
//                   className="flex flex-col gap-6 rounded-3xl bg-white p-5 shadow-sm transition hover:shadow-md md:flex-row md:items-center"
//                 >

//                   {/* COVER THUMBNAIL */}
//                   <Link
//                     href={`/admin/blogs/${post.slug}/edit`}
//                     className="relative h-40 w-full shrink-0 overflow-hidden rounded-2xl bg-surface-soft md:w-56"
//                   >
//                     {post.coverImageUrl ? (
//                       <Image
//                         src={post.coverImageUrl}
//                         alt={post.title}
//                         fill
//                         sizes="224px"
//                         className="object-cover"
//                       />
//                     ) : (
//                       <div className="flex h-full items-center justify-center text-sm text-ink-soft">
//                         No cover image
//                       </div>
//                     )}
//                   </Link>

//                   {/* CONTENT */}
//                   <div className="flex-1">
//                     <div className="flex flex-wrap items-center gap-3">
//                       <Link href={`/admin/blogs/${post.slug}/edit`}>
//                         <h2 className="text-2xl text-primary-dark hover:underline">{post.title}</h2>
//                       </Link>

//                       <span
//                         className={`rounded-full px-3 py-1 text-xs font-medium ${
//                           post.published
//                             ? "bg-green-100 text-green-700"
//                             : "bg-gray-100 text-gray-600"
//                         }`}
//                       >
//                         {post.published ? "Published" : "Draft"}
//                       </span>
//                     </div>

//                     <p className="mt-2 text-sm text-primary">
//                       {new Date(post.publishedDate).toLocaleDateString("en-IN", {
//                         day: "numeric",
//                         month: "long",
//                         year: "numeric",
//                       })}
//                     </p>

//                     <p className="mt-1 text-sm text-ink-soft">/blog/{post.slug}</p>

//                     <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-ink-soft">
//                       {post.excerpt}
//                     </p>
//                   </div>

//                   {/* ACTIONS */}
//                   <div className="flex shrink-0 gap-3">
//                     <Link
//                       href={`/admin/blogs/${post.slug}/edit`}
//                       className="rounded-full border border-primary-dark/20 px-5 py-2 text-sm font-medium text-primary-dark transition hover:bg-sand"
//                     >
//                       Edit
//                     </Link>

//                     <Link
//                       href={`/blog/${post.slug}`}
//                       target="_blank"
//                       className="rounded-full border border-primary-dark/20 px-5 py-2 text-sm font-medium text-primary-dark transition hover:bg-sand"
//                     >
//                       View Live
//                     </Link>

//                     <button
//                       onClick={() => handleDelete(post.slug, post.title)}
//                       disabled={deletingSlug === post.slug}
//                       className="rounded-full border border-red-200 px-5 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50 disabled:opacity-50"
//                     >
//                       {deletingSlug === post.slug ? "Deleting..." : "Delete"}
//                     </button>
//                   </div>

//                 </div>
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
import { getAllPosts, deletePostById, BlogPost } from "@/lib/firebase/blogs";

export default function BlogsAdminPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);

  async function loadPosts() {
    try {
      setLoading(true);
      setError("");
      const data = await getAllPosts();
      setPosts(data);
    } catch (err) {
      console.error("Error loading posts:", err);
      setError("Unable to load posts.");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: string, title: string) {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;

    setDeletingId(id);
    try {
      await deletePostById(id);
      setPosts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete post.");
    } finally {
      setDeletingId(null);
    }
  }

  useEffect(() => {
    loadPosts();
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
              <h1 className="mt-3 text-5xl text-primary-dark">Blogs</h1>
              <p className="mt-4 max-w-xl text-lg text-ink-soft">
                Create, edit, and publish articles.
              </p>
            </div>

            <Link href="/admin/blogs/new" className="btn-primary inline-flex">
              + New Post
            </Link>
          </div>

          {/* LOADING — skeleton rows instead of a plain line */}
          {loading && (
            <div className="mt-12 space-y-5">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex animate-pulse gap-6 rounded-3xl bg-white p-5 shadow-sm">
                  <div className="h-32 w-48 shrink-0 rounded-2xl bg-surface-soft" />
                  <div className="flex-1 space-y-3 py-2">
                    <div className="h-4 w-1/4 rounded bg-surface-soft" />
                    <div className="h-6 w-2/3 rounded bg-surface-soft" />
                    <div className="h-4 w-1/2 rounded bg-surface-soft" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {!loading && error && (
            <div className="mt-12 rounded-3xl bg-red-50 p-8 text-center">
              <p className="text-red-600">{error}</p>
              <button
                onClick={loadPosts}
                className="mt-4 rounded-full border border-red-300 px-5 py-2 text-sm text-red-600"
              >
                Try Again
              </button>
            </div>
          )}

          {!loading && !error && posts.length === 0 && (
            <div className="mt-12 rounded-3xl bg-white p-12 text-center shadow-sm">
              <h2 className="text-2xl text-primary-dark">No posts yet</h2>
              <p className="mx-auto mt-3 max-w-md text-ink-soft">
                Write your first article to start building the blog.
              </p>
              <Link href="/admin/blogs/new" className="btn-primary mt-6 inline-flex">
                Create Your First Post
              </Link>
            </div>
          )}

          {!loading && !error && posts.length > 0 && (
            <div className="mt-12 space-y-5">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="flex flex-col gap-6 rounded-3xl bg-white p-5 shadow-sm transition hover:shadow-md md:flex-row md:items-center"
                >

                  {/* COVER THUMBNAIL */}
                  <Link
                    href={`/admin/blogs/${post.slug}/edit`}
                    className="relative h-40 w-full shrink-0 overflow-hidden rounded-2xl bg-surface-soft md:w-56"
                  >
                    {post.coverImageUrl ? (
                      <Image
                        src={post.coverImageUrl}
                        alt={post.title}
                        fill
                        sizes="224px"
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-sm text-ink-soft">
                        No cover image
                      </div>
                    )}
                  </Link>

                  {/* CONTENT */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <Link href={`/admin/blogs/${post.slug}/edit`}>
                        <h2 className="text-2xl text-primary-dark hover:underline">{post.title}</h2>
                      </Link>

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          post.published
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {post.published ? "Published" : "Draft"}
                      </span>
                    </div>

                    <p className="mt-2 text-sm text-primary">
                      {new Date(post.publishedDate).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>

                    <p className="mt-1 text-sm text-ink-soft">/blog/{post.slug}</p>

                    <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-ink-soft">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* ACTIONS */}
                  <div className="flex shrink-0 gap-3">
                    <Link
                      href={`/admin/blogs/${post.slug}/edit`}
                      className="rounded-full border border-primary-dark/20 px-5 py-2 text-sm font-medium text-primary-dark transition hover:bg-sand"
                    >
                      Edit
                    </Link>

                    <Link
                      href={`/blog/${post.slug}`}
                      target="_blank"
                      className="rounded-full border border-primary-dark/20 px-5 py-2 text-sm font-medium text-primary-dark transition hover:bg-sand"
                    >
                      View Live
                    </Link>

                    <button
                      onClick={() => handleDelete(post.id, post.title)}
                      disabled={deletingId === post.id}
                      className="rounded-full border border-red-200 px-5 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50 disabled:opacity-50"
                    >
                      {deletingId === post.id ? "Deleting..." : "Delete"}
                    </button>
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