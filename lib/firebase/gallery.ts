// import {
//     collection,
//     addDoc,
//     getDocs,
//     doc,
//     getDoc,
//     query,
//     where,
//     serverTimestamp,
//   } from "firebase/firestore";
//   import { db } from "./firestore";
  
//   export type GalleryAlbum = {
//     id: string;
//     heading: string;
//     event: string;
//     year: string;
//     description?: string;
//     coverImageUrl?: string;
//     published: boolean;
//   };
  
//   export type GalleryPhoto = {
//     id: string;
//     albumId: string;
//     imageUrl: string;
//     caption?: string;
//   };
  
//   // ---------- ALBUMS ----------
  
//   export async function getPublishedAlbums(): Promise<GalleryAlbum[]> {
//     const q = query(
//       collection(db, "galleryAlbums"),
//       where("published", "==", true)
//     );
//     const snapshot = await getDocs(q);
//     const albums = snapshot.docs.map((d) => ({
//       id: d.id,
//       ...d.data(),
//     })) as GalleryAlbum[];
  
//     // sort client-side: newest year first, then event name
//     return albums.sort((a, b) => {
//       if (b.year !== a.year) return b.year.localeCompare(a.year);
//       return a.event.localeCompare(b.event);
//     });
//   }
  
//   export async function getAllAlbums(): Promise<GalleryAlbum[]> {
//     const snapshot = await getDocs(collection(db, "galleryAlbums"));
//     const albums = snapshot.docs.map((d) => ({
//       id: d.id,
//       ...d.data(),
//     })) as GalleryAlbum[];
  
//     return albums.sort((a, b) => b.year.localeCompare(a.year));
//   }
  
//   export async function getAlbumById(
//     albumId: string
//   ): Promise<GalleryAlbum | null> {
//     const ref = doc(db, "galleryAlbums", albumId);
//     const snap = await getDoc(ref);
//     if (!snap.exists()) return null;
//     return { id: snap.id, ...snap.data() } as GalleryAlbum;
//   }
  
//   export async function createAlbum(data: {
//     heading: string;
//     event: string;
//     year: string;
//     description?: string;
//     published: boolean;
//   }) {
//     return addDoc(collection(db, "galleryAlbums"), {
//       ...data,
//       createdAt: serverTimestamp(),
//     });
//   }
  
//   // ---------- PHOTOS ----------
  
//   export async function getPhotosForAlbum(
//     albumId: string
//   ): Promise<GalleryPhoto[]> {
//     const q = query(
//       collection(db, "galleryPhotos"),
//       where("albumId", "==", albumId)
//     );
//     const snapshot = await getDocs(q);
//     return snapshot.docs.map((d) => ({
//       id: d.id,
//       ...d.data(),
//     })) as GalleryPhoto[];
//   }
  
// //   export async function addPhotoToAlbum(data: {
// //     albumId: string;
// //     imageUrl: string;
// //     caption?: string;
// //   }) {
// //     return addDoc(collection(db, "galleryPhotos"), {
// //       ...data,
// //       createdAt: serverTimestamp(),
// //     });
// //   }

// export async function addPhotoToAlbum(data: {
//     albumId: string;
//     imageUrl: string;
//     caption?: string;
//   }) {
//     const payload: Record<string, unknown> = {
//       albumId: data.albumId,
//       imageUrl: data.imageUrl,
//       createdAt: serverTimestamp(),
//     };
  
//     if (data.caption) {
//       payload.caption = data.caption;
//     }
  
//     return addDoc(collection(db, "galleryPhotos"), payload);
//   }

import {
    collection,
    addDoc,
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
  
  export type GalleryAlbum = {
    id: string;
    heading: string;
    event: string;
    year: string;
    description?: string;
    coverImageUrl?: string;
    published: boolean;
  };
  
  export type GalleryPhoto = {
    id: string;
    albumId: string;
    imageUrl: string;
    caption?: string;
  };
  
  // ---------- ALBUMS ----------
  
  export async function getPublishedAlbums(): Promise<GalleryAlbum[]> {
    const q = query(
      collection(db, "galleryAlbums"),
      where("published", "==", true)
    );
    const snapshot = await getDocs(q);
    const albums = snapshot.docs.map((d) => ({
      id: d.id,
      ...d.data(),
    })) as GalleryAlbum[];
  
    return albums.sort((a, b) => {
      if (b.year !== a.year) return b.year.localeCompare(a.year);
      return a.event.localeCompare(b.event);
    });
  }
  
  export async function getAllAlbums(): Promise<GalleryAlbum[]> {
    const snapshot = await getDocs(collection(db, "galleryAlbums"));
    const albums = snapshot.docs.map((d) => ({
      id: d.id,
      ...d.data(),
    })) as GalleryAlbum[];
  
    return albums.sort((a, b) => b.year.localeCompare(a.year));
  }
  
  export async function getAlbumById(
    albumId: string
  ): Promise<GalleryAlbum | null> {
    const ref = doc(db, "galleryAlbums", albumId);
    const snap = await getDoc(ref);
    if (!snap.exists()) return null;
    return { id: snap.id, ...snap.data() } as GalleryAlbum;
  }
  
  export async function createAlbum(data: {
    heading: string;
    event: string;
    year: string;
    description?: string;
    published: boolean;
  }) {
    return addDoc(collection(db, "galleryAlbums"), {
      ...data,
      createdAt: serverTimestamp(),
    });
  }
  
  export async function updateAlbum(
    albumId: string,
    data: {
      heading: string;
      event: string;
      year: string;
      description?: string;
      published: boolean;
    }
  ) {
    const payload: Record<string, unknown> = {
      heading: data.heading,
      event: data.event,
      year: data.year,
      published: data.published,
    };
    if (data.description) payload.description = data.description;
    return updateDoc(doc(db, "galleryAlbums", albumId), payload);
  }
  
  export async function deleteAlbum(albumId: string) {
    // delete all photos in the album first
    const photos = await getPhotosForAlbum(albumId);
    await Promise.all(photos.map((p) => deleteDoc(doc(db, "galleryPhotos", p.id))));
    // then delete the album itself
    await deleteDoc(doc(db, "galleryAlbums", albumId));
  }
  
  // ---------- PHOTOS ----------
  
  export async function getPhotosForAlbum(
    albumId: string
  ): Promise<GalleryPhoto[]> {
    const q = query(
      collection(db, "galleryPhotos"),
      where("albumId", "==", albumId)
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((d) => ({
      id: d.id,
      ...d.data(),
    })) as GalleryPhoto[];
  }
  
  export async function addPhotoToAlbum(data: {
    albumId: string;
    imageUrl: string;
    caption?: string;
  }) {
    const payload: Record<string, unknown> = {
      albumId: data.albumId,
      imageUrl: data.imageUrl,
      createdAt: serverTimestamp(),
    };
  
    if (data.caption) {
      payload.caption = data.caption;
    }
  
    return addDoc(collection(db, "galleryPhotos"), payload);
  }
  
  export async function deletePhoto(photoId: string) {
    return deleteDoc(doc(db, "galleryPhotos", photoId));
  }