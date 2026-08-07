


// import {
//     collection,
//     addDoc,
//     setDoc,
//     getDocs,
//     doc,
//     getDoc,
//     updateDoc,
//     deleteDoc,
//     query,
//     where,
//     serverTimestamp,
//   } from "firebase/firestore";
//   import { db } from "./firestore";
  
//   export type BlogPost = {
//     id: string;
//     title: string;
//     slug: string;
//     excerpt: string;
//     content: string; // markdown
//     coverImageUrl?: string;
//     published: boolean;
//     publishedDate: string; // YYYY-MM-DD
//     metaTitle?: string;        // ADD — falls back to title if empty
//     metaDescription?: string;  // ADD — falls back to excerpt if empty
//     focusKeyword?: string;     // ADD — e.g. "best psychotherapist in Navi Mumbai"
//   };
  
//   function slugify(text: string): string {
//     return text
//       .toLowerCase()
//       .trim()
//       .replace(/[^a-z0-9\s-]/g, "")
//       .replace(/\s+/g, "-")
//       .replace(/-+/g, "-");
//   }
  
//   export async function getPublishedPosts(): Promise<BlogPost[]> {
//     const q = query(collection(db, "blogs"), where("published", "==", true));
//     const snapshot = await getDocs(q);
//     const posts = snapshot.docs.map((d) => ({ id: d.id, ...d.data() })) as BlogPost[];
  
//     return posts.sort(
//       (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
//     );
//   }
  
//   export async function getAllPosts(): Promise<BlogPost[]> {
//     const snapshot = await getDocs(collection(db, "blogs"));
//     const posts = snapshot.docs.map((d) => ({ id: d.id, ...d.data() })) as BlogPost[];
  
//     return posts.sort(
//       (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
//     );
//   }
  
//   // Fetches a single post by slug, which is now also the Firestore document ID.
//   // Using getDoc (not a where() query) lets Firestore evaluate security rules
//   // against this exact document, so public visitors can read published posts
//   // without needing broader query permissions.
//   export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
//     const ref = doc(db, "blogs", slug);
//     const snap = await getDoc(ref);
//     if (!snap.exists()) return null;
//     return { id: snap.id, ...snap.data() } as BlogPost;
//   }
  
//   export async function getPostById(id: string): Promise<BlogPost | null> {
//     const ref = doc(db, "blogs", id);
//     const snap = await getDoc(ref);
//     if (!snap.exists()) return null;
//     return { id: snap.id, ...snap.data() } as BlogPost;
//   }
  
//   // export async function createPost(data: {
//   //   title: string;
//   //   slug?: string;
//   //   excerpt: string;
//   //   content: string;
//   //   coverImageUrl?: string;
//   //   published: boolean;
//   //   publishedDate: string;
//   // }): Promise<string> {
//   //   const finalSlug = data.slug?.trim() ? slugify(data.slug) : slugify(data.title);
  
//   //   const payload: Record<string, unknown> = {
//   //     title: data.title,
//   //     slug: finalSlug,
//   //     excerpt: data.excerpt,
//   //     content: data.content,
//   //     published: data.published,
//   //     publishedDate: data.publishedDate,
//   //     createdAt: serverTimestamp(),
//   //   };
  
//   //   if (data.coverImageUrl) {
//   //     payload.coverImageUrl = data.coverImageUrl;
//   //   }
  
//   //   // Use the slug itself as the Firestore document ID (instead of an
//   //   // auto-generated one via addDoc) so getPostBySlug can fetch it with
//   //   // getDoc directly — see note above.
//   //   await setDoc(doc(db, "blogs", finalSlug), payload);
  
//   //   return finalSlug;
//   // }



//   export async function createPost(data: {
//     title: string;
//     slug?: string;
//     excerpt: string;
//     content: string;
//     coverImageUrl?: string;
//     published: boolean;
//     publishedDate: string;
//     metaTitle?: string;
//     metaDescription?: string;
//     focusKeyword?: string;
//   }): Promise<string> {
//     const finalSlug = data.slug?.trim() ? slugify(data.slug) : slugify(data.title);
  
//     const payload: Record<string, unknown> = {
//       title: data.title,
//       slug: finalSlug,
//       excerpt: data.excerpt,
//       content: data.content,
//       published: data.published,
//       publishedDate: data.publishedDate,
//       metaTitle: data.metaTitle || data.title,
//       metaDescription: data.metaDescription || data.excerpt,
//       focusKeyword: data.focusKeyword || "",
//       createdAt: serverTimestamp(),
//     };
  
//     if (data.coverImageUrl) {
//       payload.coverImageUrl = data.coverImageUrl;
//     }
  
//     await setDoc(doc(db, "blogs", finalSlug), payload);
//     return finalSlug;
//   }
  
//   // export async function updatePost(
//   //   slug: string,
//   //   data: {
//   //     title: string;
//   //     excerpt: string;
//   //     content: string;
//   //     coverImageUrl?: string;
//   //     published: boolean;
//   //     publishedDate: string;
//   //   }
//   // ) {
//   //   const payload: Record<string, any> = {
//   //     title: data.title,
//   //     excerpt: data.excerpt,
//   //     content: data.content,
//   //     published: data.published,
//   //     publishedDate: data.publishedDate,
//   //   };
//   //   if (data.coverImageUrl) payload.coverImageUrl = data.coverImageUrl;
//   //   return updateDoc(doc(db, "blogs", slug), payload);
//   // }


//   export async function updatePost(
//     slug: string,
//     data: {
//       title: string;
//       excerpt: string;
//       content: string;
//       coverImageUrl?: string;
//       published: boolean;
//       publishedDate: string;
//       metaTitle?: string;
//       metaDescription?: string;
//       focusKeyword?: string;
//     }
//   ) {
//     const payload: Record<string, any> = {
//       title: data.title,
//       excerpt: data.excerpt,
//       content: data.content,
//       published: data.published,
//       publishedDate: data.publishedDate,
//       metaTitle: data.metaTitle || data.title,
//       metaDescription: data.metaDescription || data.excerpt,
//       focusKeyword: data.focusKeyword || "",
//     };
//     if (data.coverImageUrl) payload.coverImageUrl = data.coverImageUrl;
//     return updateDoc(doc(db, "blogs", slug), payload);
//   }
  
//   // Deletes a post by its actual Firestore document ID (not the slug field).
//   // This matters for posts created before createPost switched to using the
//   // slug as the document ID — those older posts have a random auto-generated
//   // ID that doesn't match their slug, so deleting "by slug" would silently
//   // target a nonexistent document and do nothing.
//   export async function deletePostById(docId: string) {
//     return deleteDoc(doc(db, "blogs", docId));
//   }




import {
  collection,
  addDoc,
  setDoc,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./firestore";

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // HTML (from the rich text editor) — was markdown before
  coverImageUrl?: string;
  published: boolean;
  publishedDate: string; // YYYY-MM-DD
  metaTitle?: string;
  metaDescription?: string;
  focusKeyword?: string;
  relatedConditions?: string[]; // condition slugs — "what helps solve this"
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  const q = query(collection(db, "blogs"), where("published", "==", true));
  const snapshot = await getDocs(q);
  const posts = snapshot.docs.map((d) => ({ id: d.id, ...d.data() })) as BlogPost[];

  return posts.sort(
    (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const snapshot = await getDocs(collection(db, "blogs"));
  const posts = snapshot.docs.map((d) => ({ id: d.id, ...d.data() })) as BlogPost[];

  return posts.sort(
    (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );
}

// Fetches a single post by slug, which is now also the Firestore document ID.
// Using getDoc (not a where() query) lets Firestore evaluate security rules
// against this exact document, so public visitors can read published posts
// without needing broader query permissions.
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const ref = doc(db, "blogs", slug);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() } as BlogPost;
}

export async function getPostById(id: string): Promise<BlogPost | null> {
  const ref = doc(db, "blogs", id);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() } as BlogPost;
}

export async function createPost(data: {
  title: string;
  slug?: string;
  excerpt: string;
  content: string;
  coverImageUrl?: string;
  published: boolean;
  publishedDate: string;
  metaTitle?: string;
  metaDescription?: string;
  focusKeyword?: string;
  relatedConditions?: string[];
}): Promise<string> {
  const finalSlug = data.slug?.trim() ? slugify(data.slug) : slugify(data.title);

  const payload: Record<string, unknown> = {
    title: data.title,
    slug: finalSlug,
    excerpt: data.excerpt,
    content: data.content,
    published: data.published,
    publishedDate: data.publishedDate,
    metaTitle: data.metaTitle || data.title,
    metaDescription: data.metaDescription || data.excerpt,
    focusKeyword: data.focusKeyword || "",
    relatedConditions: data.relatedConditions || [],
    createdAt: serverTimestamp(),
  };

  if (data.coverImageUrl) {
    payload.coverImageUrl = data.coverImageUrl;
  }

  // Use the slug itself as the Firestore document ID (instead of an
  // auto-generated one via addDoc) so getPostBySlug can fetch it with
  // getDoc directly — see note above.
  await setDoc(doc(db, "blogs", finalSlug), payload);

  return finalSlug;
}

export async function updatePost(
  slug: string,
  data: {
    title: string;
    excerpt: string;
    content: string;
    coverImageUrl?: string;
    published: boolean;
    publishedDate: string;
    metaTitle?: string;
    metaDescription?: string;
    focusKeyword?: string;
    relatedConditions?: string[];
  }
) {
  const payload: Record<string, any> = {
    title: data.title,
    excerpt: data.excerpt,
    content: data.content,
    published: data.published,
    publishedDate: data.publishedDate,
    metaTitle: data.metaTitle || data.title,
    metaDescription: data.metaDescription || data.excerpt,
    focusKeyword: data.focusKeyword || "",
    relatedConditions: data.relatedConditions || [],
  };
  if (data.coverImageUrl) payload.coverImageUrl = data.coverImageUrl;
  return updateDoc(doc(db, "blogs", slug), payload);
}

// Deletes a post by its actual Firestore document ID (not the slug field).
// This matters for posts created before createPost switched to using the
// slug as the document ID — those older posts have a random auto-generated
// ID that doesn't match their slug, so deleting "by slug" would silently
// target a nonexistent document and do nothing.
export async function deletePostById(docId: string) {
  return deleteDoc(doc(db, "blogs", docId));
}