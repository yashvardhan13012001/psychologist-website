

// // "use client";

// // import { useState } from "react";
// // import Link from "next/link";
// // import dynamic from "next/dynamic";
// // import { useRouter } from "next/navigation";
// // import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// // import AdminGuard from "../../AdminGuard";
// // import { storage } from "@/lib/firebase/storage";
// // import { createPost } from "@/lib/firebase/blogs";
// // import "react-quill-new/dist/quill.snow.css";




// // const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

// // const quillModules = {
// //   toolbar: [
// //     [{ size: ["small", false, "large", "huge"] }],
// //     ["bold", "italic", "underline"],
// //     [{ color: [] }, { background: [] }],
// //     [{ list: "ordered" }, { list: "bullet" }],
// //     ["clean"],
// //   ],
// // };

// // export default function NewBlogPostPage() {
// //   const router = useRouter();

// //   const [title, setTitle] = useState("");
// //   const [slug, setSlug] = useState("");
// //   const [excerpt, setExcerpt] = useState("");
// //   const [content, setContent] = useState("");
// //   const [publishedDate, setPublishedDate] = useState("");
// //   const [published, setPublished] = useState(true);
// //   const [coverImage, setCoverImage] = useState<File | null>(null);

// //   const [metaTitle, setMetaTitle] = useState("");
// //   const [metaDescription, setMetaDescription] = useState("");
// //   const [focusKeyword, setFocusKeyword] = useState("");

// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState("");

// //   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError("");

// //     try {
// //       let coverImageUrl: string | undefined;

// //       if (coverImage) {
// //         const imageRef = ref(storage, `blogs/${Date.now()}-${coverImage.name}`);
// //         await uploadBytes(imageRef, coverImage);
// //         coverImageUrl = await getDownloadURL(imageRef);
// //       }

// //       await createPost({
// //         title,
// //         slug,
// //         excerpt,
// //         content,
// //         coverImageUrl,
// //         published,
// //         publishedDate: publishedDate || new Date().toISOString().slice(0, 10),
// //         metaTitle,
// //         metaDescription,
// //         focusKeyword,
// //       });

// //       router.push("/admin/blogs");
// //     } catch (err) {
// //       console.error(err);
// //       setError("Something went wrong while creating the post.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   }

// //   return (
// //     <AdminGuard>
// //       <main className="min-h-screen bg-sand px-6 py-10 md:px-10">
// //         <div className="mx-auto max-w-3xl">
// //           <Link href="/admin/blogs" className="text-sm text-primary hover:underline">
// //             ← Back to Blogs
// //           </Link>

// //           <p className="eyebrow mt-8">Content management</p>
// //           <h1 className="mt-3 text-5xl text-primary-dark">New Post</h1>

// //           <form
// //             onSubmit={handleSubmit}
// //             className="mt-10 space-y-6 rounded-3xl bg-white p-8 shadow-sm md:p-10"
// //           >
// //             <div>
// //               <label className="mb-2 block text-sm font-medium">Title</label>
// //               <input
// //                 required
// //                 value={title}
// //                 onChange={(e) => setTitle(e.target.value)}
// //                 placeholder="Understanding Anxiety in Daily Life"
// //                 className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
// //               />
// //             </div>

// //             <div>
// //               <label className="mb-2 block text-sm font-medium">
// //                 Slug (optional — auto-generated from title if left blank)
// //               </label>
// //               <input
// //                 value={slug}
// //                 onChange={(e) => setSlug(e.target.value)}
// //                 placeholder="understanding-anxiety-in-daily-life"
// //                 className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
// //               />
// //             </div>

// //             <div>
// //               <label className="mb-2 block text-sm font-medium">Excerpt</label>
// //               <textarea
// //                 required
// //                 rows={2}
// //                 value={excerpt}
// //                 onChange={(e) => setExcerpt(e.target.value)}
// //                 placeholder="A short summary shown on the blog listing page..."
// //                 className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
// //               />
// //             </div>

// //             {/* <div>
// //               <label className="mb-2 block text-sm font-medium">
// //                 Content (Markdown supported — **bold**, ## headings, - lists, etc.)
// //               </label>
// //               <textarea
// //                 required
// //                 rows={16}
// //                 value={content}
// //                 onChange={(e) => setContent(e.target.value)}
// //                 placeholder={"## Introduction\n\nWrite your article here using markdown formatting..."}
// //                 className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 font-mono text-sm outline-none focus:border-primary"
// //               />
// //             </div> */}

// //             <div>
// //               <label className="mb-2 block text-sm font-medium">Content</label>
// //               <div className="rounded-xl border border-primary-dark/15 bg-white">
// //                 <ReactQuill
// //                   theme="snow"
// //                   value={content}
// //                   onChange={setContent}
// //                   modules={quillModules}
// //                   placeholder="Write your article here..."
// //                 />
// //               </div>
// //             </div>

// //             <div className="rounded-2xl border border-primary-dark/10 bg-sand/50 p-6 space-y-5">
// //               <p className="text-sm font-semibold text-primary-dark">SEO Settings</p>

// //               <div>
// //                 <label className="mb-2 block text-sm font-medium">
// //                   Meta Title (optional — defaults to Title above, ideal ≤60 characters)
// //                 </label>
// //                 <input
// //                   value={metaTitle}
// //                   onChange={(e) => setMetaTitle(e.target.value)}
// //                   placeholder="Best Psychotherapist in Navi Mumbai | Chaitanya Raj"
// //                   maxLength={70}
// //                   className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
// //                 />
// //                 <p className="mt-1 text-xs text-ink-soft/60">{metaTitle.length}/60</p>
// //               </div>

// //               <div>
// //                 <label className="mb-2 block text-sm font-medium">
// //                   Meta Description (optional — defaults to Excerpt, ideal ≤160 characters)
// //                 </label>
// //                 <textarea
// //                   rows={2}
// //                   value={metaDescription}
// //                   onChange={(e) => setMetaDescription(e.target.value)}
// //                   placeholder="Looking for the best psychotherapist in Navi Mumbai? Learn practical, expert-backed techniques from Chaitanya Raj..."
// //                   maxLength={170}
// //                   className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
// //                 />
// //                 <p className="mt-1 text-xs text-ink-soft/60">{metaDescription.length}/160</p>
// //               </div>

// //               <div>
// //                 <label className="mb-2 block text-sm font-medium">Focus Keyword (optional)</label>
// //                 <input
// //                   value={focusKeyword}
// //                   onChange={(e) => setFocusKeyword(e.target.value)}
// //                   placeholder="best psychotherapist in navi mumbai"
// //                   className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
// //                 />
// //               </div>
// //             </div>

// //             <div>
// //               <label className="mb-2 block text-sm font-medium">Published Date</label>
// //               <input
// //                 type="date"
// //                 value={publishedDate}
// //                 onChange={(e) => setPublishedDate(e.target.value)}
// //                 className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
// //               />
// //             </div>

// //             <div>
// //               <label className="mb-2 block text-sm font-medium">Cover Image (optional)</label>
// //               <input
// //                 type="file"
// //                 accept="image/*"
// //                 onChange={(e) => setCoverImage(e.target.files?.[0] ?? null)}
// //                 className="w-full rounded-xl border border-primary-dark/15 px-4 py-3"
// //               />
// //             </div>

// //             <div className="flex items-center gap-3 border-t border-primary-dark/10 pt-6">
// //               <input
// //                 id="published"
// //                 type="checkbox"
// //                 checked={published}
// //                 onChange={(e) => setPublished(e.target.checked)}
// //                 className="h-4 w-4"
// //               />
// //               <label htmlFor="published" className="text-sm text-ink-soft">
// //                 Publish this post immediately
// //               </label>
// //             </div>

// //             {error && (
// //               <p className="rounded-xl bg-red-50 p-4 text-sm text-red-600">{error}</p>
// //             )}

// //             <div className="flex gap-4 border-t border-primary-dark/10 pt-6">
// //               <Link
// //                 href="/admin/blogs"
// //                 className="rounded-full border border-primary-dark/20 px-6 py-3 text-sm font-medium"
// //               >
// //                 Cancel
// //               </Link>
// //               <button type="submit" disabled={loading} className="btn-primary disabled:opacity-60">
// //                 {loading ? "Creating Post..." : "Create Post"}
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       </main>
// //     </AdminGuard>
// //   );
// // }



// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import dynamic from "next/dynamic";
// import { useRouter } from "next/navigation";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import AdminGuard from "../../AdminGuard";
// import { storage } from "@/lib/firebase/storage";
// import { createPost } from "@/lib/firebase/blogs";
// import { conditions } from "@/lib/data/conditions";
// import "react-quill-new/dist/quill.snow.css";

// const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

// const quillModules = {
//   toolbar: [
//     [{ size: ["small", false, "large", "huge"] }],
//     ["bold", "italic", "underline"],
//     [{ color: [] }, { background: [] }],
//     [{ list: "ordered" }, { list: "bullet" }],
//     ["clean"],
//   ],
// };

// export default function NewBlogPostPage() {
//   const router = useRouter();

//   const [title, setTitle] = useState("");
//   const [slug, setSlug] = useState("");
//   const [excerpt, setExcerpt] = useState("");
//   const [content, setContent] = useState("");
//   const [publishedDate, setPublishedDate] = useState("");
//   const [published, setPublished] = useState(true);
//   const [coverImage, setCoverImage] = useState<File | null>(null);

//   const [metaTitle, setMetaTitle] = useState("");
//   const [metaDescription, setMetaDescription] = useState("");
//   const [focusKeyword, setFocusKeyword] = useState("");

//   const [relatedConditions, setRelatedConditions] = useState<string[]>([]);
//   const [conditionSearch, setConditionSearch] = useState("");

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const [faqs, setFaqs] = useState<{ tempId: number; q: string; a: string }[]>([]);
//   const faqIdRef = useRef(0);

// function addFaqRow() {
//   setFaqs([...faqs, { tempId: faqIdRef.current++, q: "", a: "" }]);
// }

// function removeFaqRow(tempId: number) {
//   setFaqs(faqs.filter((f) => f.tempId !== tempId));
// }

// function updateFaqRow(tempId: number, field: "q" | "a", value: string) {
//   setFaqs(faqs.map((f) => (f.tempId === tempId ? { ...f, [field]: value } : f)));
// }

//   function addCondition(condSlug: string) {
//     if (!relatedConditions.includes(condSlug)) {
//       setRelatedConditions([...relatedConditions, condSlug]);
//     }
//     setConditionSearch("");
//   }

//   function removeCondition(condSlug: string) {
//     setRelatedConditions(relatedConditions.filter((s) => s !== condSlug));
//   }

//   const matchingConditions = conditionSearch.trim()
//     ? conditions.filter(
//         (c) =>
//           c.name.toLowerCase().includes(conditionSearch.toLowerCase()) &&
//           !relatedConditions.includes(c.slug)
//       )
//     : [];

//   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       let coverImageUrl: string | undefined;

//       if (coverImage) {
//         const imageRef = ref(storage, `blogs/${Date.now()}-${coverImage.name}`);
//         await uploadBytes(imageRef, coverImage);
//         coverImageUrl = await getDownloadURL(imageRef);
//       }

//       await createPost({
//         title,
//         slug,
//         excerpt,
//         content,
//         coverImageUrl,
//         published,
//         publishedDate: publishedDate || new Date().toISOString().slice(0, 10),
//         metaTitle,
//         metaDescription,
//         focusKeyword,
//         relatedConditions,
//       });

//       router.push("/admin/blogs");
//     } catch (err) {
//       console.error(err);
//       setError("Something went wrong while creating the post.");
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <AdminGuard>
//       <main className="min-h-screen bg-sand px-6 py-10 md:px-10">
//         <div className="mx-auto max-w-3xl">
//           <Link href="/admin/blogs" className="text-sm text-primary hover:underline">
//             ← Back to Blogs
//           </Link>

//           <p className="eyebrow mt-8">Content management</p>
//           <h1 className="mt-3 text-5xl text-primary-dark">New Post</h1>

//           <form
//             onSubmit={handleSubmit}
//             className="mt-10 space-y-6 rounded-3xl bg-white p-8 shadow-sm md:p-10"
//           >
//             <div>
//               <label className="mb-2 block text-sm font-medium">Title</label>
//               <input
//                 required
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 placeholder="Understanding Anxiety in Daily Life"
//                 className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
//               />
//             </div>

//             <div>
//               <label className="mb-2 block text-sm font-medium">
//                 Slug (optional — auto-generated from title if left blank)
//               </label>
//               <input
//                 value={slug}
//                 onChange={(e) => setSlug(e.target.value)}
//                 placeholder="understanding-anxiety-in-daily-life"
//                 className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
//               />
//             </div>

//             <div>
//               <label className="mb-2 block text-sm font-medium">Excerpt</label>
//               <textarea
//                 required
//                 rows={2}
//                 value={excerpt}
//                 onChange={(e) => setExcerpt(e.target.value)}
//                 placeholder="A short summary shown on the blog listing page..."
//                 className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
//               />
//             </div>

//             <div>
//               <label className="mb-2 block text-sm font-medium">Content</label>
//               <div className="rounded-xl border border-primary-dark/15 bg-white">
//                 <ReactQuill
//                   theme="snow"
//                   value={content}
//                   onChange={setContent}
//                   modules={quillModules}
//                   placeholder="Write your article here..."
//                 />
//               </div>
//             </div>

//             <div className="rounded-2xl border border-primary-dark/10 bg-sand/50 p-6 space-y-5">
//               <p className="text-sm font-semibold text-primary-dark">SEO Settings</p>

//               <div>
//                 <label className="mb-2 block text-sm font-medium">
//                   Meta Title (optional — defaults to Title above, ideal ≤60 characters)
//                 </label>
//                 <input
//                   value={metaTitle}
//                   onChange={(e) => setMetaTitle(e.target.value)}
//                   placeholder="Best Psychotherapist in Navi Mumbai | Chaitanya Raj"
//                   maxLength={70}
//                   className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
//                 />
//                 <p className="mt-1 text-xs text-ink-soft/60">{metaTitle.length}/60</p>
//               </div>

//               <div>
//                 <label className="mb-2 block text-sm font-medium">
//                   Meta Description (optional — defaults to Excerpt, ideal ≤160 characters)
//                 </label>
//                 <textarea
//                   rows={2}
//                   value={metaDescription}
//                   onChange={(e) => setMetaDescription(e.target.value)}
//                   placeholder="Looking for the best psychotherapist in Navi Mumbai? Learn practical, expert-backed techniques from Chaitanya Raj..."
//                   maxLength={170}
//                   className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
//                 />
//                 <p className="mt-1 text-xs text-ink-soft/60">{metaDescription.length}/160</p>
//               </div>

//               <div>
//                 <label className="mb-2 block text-sm font-medium">Focus Keyword (optional)</label>
//                 <input
//                   value={focusKeyword}
//                   onChange={(e) => setFocusKeyword(e.target.value)}
//                   placeholder="best psychotherapist in navi mumbai"
//                   className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
//                 />
//               </div>
//             </div>

//             {/* <div className="rounded-2xl border border-primary-dark/10 bg-sand/50 p-6 space-y-4">
//               <p className="text-sm font-semibold text-primary-dark">
//                 Related Conditions — what helps solve this
//               </p>
//               <p className="text-xs text-ink-soft/70">
//                 Link this post to the condition page(s) it relates to, so readers can go straight
//                 from the article to the service that helps.
//               </p>

//               <input
//                 value={conditionSearch}
//                 onChange={(e) => setConditionSearch(e.target.value)}
//                 placeholder="Search conditions (e.g. anxiety, grief, trauma)…"
//                 className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
//               />

//               {matchingConditions.length > 0 && (
//                 <div className="rounded-xl border border-primary-dark/10 bg-white divide-y divide-primary-dark/5">
//                   {matchingConditions.slice(0, 6).map((c) => (
//                     <button
//                       type="button"
//                       key={c.slug}
//                       onClick={() => addCondition(c.slug)}
//                       className="block w-full px-4 py-2 text-left text-sm hover:bg-sand"
//                     >
//                       + {c.name}
//                     </button>
//                   ))}
//                 </div>
//               )}

//               {relatedConditions.length > 0 && (
//                 <div className="flex flex-wrap gap-2">
//                   {relatedConditions.map((condSlug) => {
//                     const c = conditions.find((x) => x.slug === condSlug);
//                     return (
//                       <span
//                         key={condSlug}
//                         className="inline-flex items-center gap-2 rounded-full bg-primary-dark/10 px-3 py-1 text-xs text-primary-dark"
//                       >
//                         {c ? c.name : condSlug}
//                         <button
//                           type="button"
//                           onClick={() => removeCondition(condSlug)}
//                           className="text-primary-dark/50 hover:text-primary-dark"
//                           aria-label="Remove"
//                         >
//                           ×
//                         </button>
//                       </span>
//                     );
//                   })}
//                 </div>
//               )}
//             </div> */}


// <div className="rounded-2xl border border-primary-dark/10 bg-sand/50 p-6 space-y-4">
//               <p className="text-sm font-semibold text-primary-dark">
//                 Related Conditions — what helps solve this
//               </p>
//               <p className="text-xs text-ink-soft/70">
//                 Select the condition(s) this post relates to. Each one shows as a button on the
//                 live post, linking straight to that condition's page.
//               </p>

//               <select
//                 value=""
//                 onChange={(e) => {
//                   if (e.target.value) addCondition(e.target.value);
//                 }}
//                 className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
//               >
//                 <option value="">+ Add a condition…</option>
//                 {conditions
//                   .filter((c) => !relatedConditions.includes(c.slug))
//                   .map((c) => (
//                     <option key={c.slug} value={c.slug}>
//                       {c.name}
//                     </option>
//                   ))}
//               </select>

//               {relatedConditions.length > 0 && (
//                 <div className="flex flex-wrap gap-2">
//                   {relatedConditions.map((condSlug) => {
//                     const c = conditions.find((x) => x.slug === condSlug);
//                     return (
//                       <span
//                         key={condSlug}
//                         className="inline-flex items-center gap-2 rounded-full bg-primary-dark/10 px-3 py-1 text-xs text-primary-dark"
//                       >
//                         {c ? c.name : condSlug}
//                         <button
//                           type="button"
//                           onClick={() => removeCondition(condSlug)}
//                           className="text-primary-dark/50 hover:text-primary-dark"
//                           aria-label="Remove"
//                         >
//                           ×
//                         </button>
//                       </span>
//                     );
//                   })}
//                 </div>
//               )}
//             </div>

//             <div>
//               <label className="mb-2 block text-sm font-medium">Published Date</label>
//               <input
//                 type="date"
//                 value={publishedDate}
//                 onChange={(e) => setPublishedDate(e.target.value)}
//                 className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
//               />
//             </div>

//             <div>
//               <label className="mb-2 block text-sm font-medium">Cover Image (optional)</label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) => setCoverImage(e.target.files?.[0] ?? null)}
//                 className="w-full rounded-xl border border-primary-dark/15 px-4 py-3"
//               />
//             </div>

//             <div className="flex items-center gap-3 border-t border-primary-dark/10 pt-6">
//               <input
//                 id="published"
//                 type="checkbox"
//                 checked={published}
//                 onChange={(e) => setPublished(e.target.checked)}
//                 className="h-4 w-4"
//               />
//               <label htmlFor="published" className="text-sm text-ink-soft">
//                 Publish this post immediately
//               </label>
//             </div>

//             {error && (
//               <p className="rounded-xl bg-red-50 p-4 text-sm text-red-600">{error}</p>
//             )}

//             <div className="flex gap-4 border-t border-primary-dark/10 pt-6">
//               <Link
//                 href="/admin/blogs"
//                 className="rounded-full border border-primary-dark/20 px-6 py-3 text-sm font-medium"
//               >
//                 Cancel
//               </Link>
//               <button type="submit" disabled={loading} className="btn-primary disabled:opacity-60">
//                 {loading ? "Creating Post..." : "Create Post"}
//               </button>
//             </div>
//           </form>
//         </div>
//       </main>
//     </AdminGuard>
//   );
// }




"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import AdminGuard from "../../AdminGuard";
import { storage } from "@/lib/firebase/storage";
import { createPost } from "@/lib/firebase/blogs";
import { conditions } from "@/lib/data/conditions";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const quillModules = {
  toolbar: [
    [{ size: ["small", false, "large", "huge"] }],
    ["bold", "italic", "underline"],
    [{ color: [] }, { background: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["clean"],
  ],
};

export default function NewBlogPostPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [published, setPublished] = useState(true);
  const [coverImage, setCoverImage] = useState<File | null>(null);

  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [focusKeyword, setFocusKeyword] = useState("");

  const [relatedConditions, setRelatedConditions] = useState<string[]>([]);

  const [faqs, setFaqs] = useState<{ tempId: number; q: string; a: string }[]>([]);
  const faqIdRef = useRef(0);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function addFaqRow() {
    setFaqs([...faqs, { tempId: faqIdRef.current++, q: "", a: "" }]);
  }

  function removeFaqRow(tempId: number) {
    setFaqs(faqs.filter((f) => f.tempId !== tempId));
  }

  function updateFaqRow(tempId: number, field: "q" | "a", value: string) {
    setFaqs(faqs.map((f) => (f.tempId === tempId ? { ...f, [field]: value } : f)));
  }

  function addCondition(condSlug: string) {
    if (!relatedConditions.includes(condSlug)) {
      setRelatedConditions([...relatedConditions, condSlug]);
    }
  }

  function removeCondition(condSlug: string) {
    setRelatedConditions(relatedConditions.filter((s) => s !== condSlug));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      let coverImageUrl: string | undefined;

      if (coverImage) {
        const imageRef = ref(storage, `blogs/${Date.now()}-${coverImage.name}`);
        await uploadBytes(imageRef, coverImage);
        coverImageUrl = await getDownloadURL(imageRef);
      }

      await createPost({
        title,
        slug,
        excerpt,
        content,
        coverImageUrl,
        published,
        publishedDate: publishedDate || new Date().toISOString().slice(0, 10),
        metaTitle,
        metaDescription,
        focusKeyword,
        relatedConditions,
        faqs: faqs
          .filter((f) => f.q.trim() && f.a.trim())
          .map(({ q, a }) => ({ q: q.trim(), a: a.trim() })),
      });

      router.push("/admin/blogs");
    } catch (err) {
      console.error(err);
      setError("Something went wrong while creating the post.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AdminGuard>
      <main className="min-h-screen bg-sand px-6 py-10 md:px-10">
        <div className="mx-auto max-w-3xl">
          <Link href="/admin/blogs" className="text-sm text-primary hover:underline">
            ← Back to Blogs
          </Link>

          <p className="eyebrow mt-8">Content management</p>
          <h1 className="mt-3 text-5xl text-primary-dark">New Post</h1>

          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6 rounded-3xl bg-white p-8 shadow-sm md:p-10"
          >
            <div>
              <label className="mb-2 block text-sm font-medium">Title</label>
              <input
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Understanding Anxiety in Daily Life"
                className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Slug (optional — auto-generated from title if left blank)
              </label>
              <input
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="understanding-anxiety-in-daily-life"
                className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Excerpt</label>
              <textarea
                required
                rows={2}
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="A short summary shown on the blog listing page..."
                className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Content</label>
              <div className="rounded-xl border border-primary-dark/15 bg-white">
                <ReactQuill
                  theme="snow"
                  value={content}
                  onChange={setContent}
                  modules={quillModules}
                  placeholder="Write your article here..."
                />
              </div>
            </div>

            <div className="rounded-2xl border border-primary-dark/10 bg-sand/50 p-6 space-y-5">
              <p className="text-sm font-semibold text-primary-dark">SEO Settings</p>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Meta Title (optional — defaults to Title above, ideal ≤60 characters)
                </label>
                <input
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                  placeholder="Best Psychotherapist in Navi Mumbai | Chaitanya Raj"
                  maxLength={70}
                  className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
                />
                <p className="mt-1 text-xs text-ink-soft/60">{metaTitle.length}/60</p>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Meta Description (optional — defaults to Excerpt, ideal ≤160 characters)
                </label>
                <textarea
                  rows={2}
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                  placeholder="Looking for the best psychotherapist in Navi Mumbai? Learn practical, expert-backed techniques from Chaitanya Raj..."
                  maxLength={170}
                  className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
                />
                <p className="mt-1 text-xs text-ink-soft/60">{metaDescription.length}/160</p>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Focus Keyword (optional)</label>
                <input
                  value={focusKeyword}
                  onChange={(e) => setFocusKeyword(e.target.value)}
                  placeholder="best psychotherapist in navi mumbai"
                  className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-primary-dark/10 bg-sand/50 p-6 space-y-4">
              <p className="text-sm font-semibold text-primary-dark">
                Related Conditions — what helps solve this
              </p>
              <p className="text-xs text-ink-soft/70">
                Select the condition(s) this post relates to. Each one shows as a button on the
                live post, linking straight to that condition's page.
              </p>

              <select
                value=""
                onChange={(e) => {
                  if (e.target.value) addCondition(e.target.value);
                }}
                className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
              >
                <option value="">+ Add a condition…</option>
                {conditions
                  .filter((c) => !relatedConditions.includes(c.slug))
                  .map((c) => (
                    <option key={c.slug} value={c.slug}>
                      {c.name}
                    </option>
                  ))}
              </select>

              {relatedConditions.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {relatedConditions.map((condSlug) => {
                    const c = conditions.find((x) => x.slug === condSlug);
                    return (
                      <span
                        key={condSlug}
                        className="inline-flex items-center gap-2 rounded-full bg-primary-dark/10 px-3 py-1 text-xs text-primary-dark"
                      >
                        {c ? c.name : condSlug}
                        <button
                          type="button"
                          onClick={() => removeCondition(condSlug)}
                          className="text-primary-dark/50 hover:text-primary-dark"
                          aria-label="Remove"
                        >
                          ×
                        </button>
                      </span>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="rounded-2xl border border-primary-dark/10 bg-sand/50 p-6 space-y-5">
              <p className="text-sm font-semibold text-primary-dark">FAQ</p>
              <p className="text-xs text-ink-soft/70">
                Add common questions and answers about this topic — this feeds directly into
                search engine FAQ results.
              </p>

              {faqs.map((row) => (
                <div
                  key={row.tempId}
                  className="space-y-3 rounded-xl border border-primary-dark/10 bg-white p-4"
                >
                  <input
                    value={row.q}
                    onChange={(e) => updateFaqRow(row.tempId, "q", e.target.value)}
                    placeholder="Question"
                    className="w-full rounded-lg border border-primary-dark/15 px-3 py-2 text-sm outline-none focus:border-primary"
                  />
                  <textarea
                    rows={2}
                    value={row.a}
                    onChange={(e) => updateFaqRow(row.tempId, "a", e.target.value)}
                    placeholder="Answer"
                    className="w-full rounded-lg border border-primary-dark/15 px-3 py-2 text-sm outline-none focus:border-primary"
                  />
                  <button
                    type="button"
                    onClick={() => removeFaqRow(row.tempId)}
                    className="text-xs font-medium text-red-600 hover:underline"
                  >
                    Remove Question
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={addFaqRow}
                className="rounded-full border border-primary-dark/20 px-5 py-2 text-sm font-medium text-primary-dark transition hover:bg-sand"
              >
                + Add Another Question
              </button>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Published Date</label>
              <input
                type="date"
                value={publishedDate}
                onChange={(e) => setPublishedDate(e.target.value)}
                className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Cover Image (optional)</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setCoverImage(e.target.files?.[0] ?? null)}
                className="w-full rounded-xl border border-primary-dark/15 px-4 py-3"
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
                Publish this post immediately
              </label>
            </div>

            {error && (
              <p className="rounded-xl bg-red-50 p-4 text-sm text-red-600">{error}</p>
            )}

            <div className="flex gap-4 border-t border-primary-dark/10 pt-6">
              <Link
                href="/admin/blogs"
                className="rounded-full border border-primary-dark/20 px-6 py-3 text-sm font-medium"
              >
                Cancel
              </Link>
              <button type="submit" disabled={loading} className="btn-primary disabled:opacity-60">
                {loading ? "Creating Post..." : "Create Post"}
              </button>
            </div>
          </form>
        </div>
      </main>
    </AdminGuard>
  );
}