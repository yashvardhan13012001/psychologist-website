// // import { collection, getDocs, orderBy, query } from "firebase/firestore";
// // import { db } from "@/lib/firebase/firestore";

// // export type EventItem = {
// //   id: string;
// //   title: string;
// //   date: string;
// //   time?: string;
// //   location?: string;
// //   shortDescription: string;
// //   description: string;
// //   registrationLink?: string;
// //   imageUrl?: string;
// //   published: boolean;
// // };

// // export async function getPublishedEvents(): Promise<EventItem[]> {
// //   const eventsQuery = query(
// //     collection(db, "events"),
// //     orderBy("date", "asc")
// //   );

// //   const snapshot = await getDocs(eventsQuery);

// //   return snapshot.docs
// //     .map((doc) => ({
// //       id: doc.id,
// //       ...doc.data(),
// //     })) as EventItem[];
// // }


// import {
//     collection,
//     getDocs,
//     query,
//     where,
//     orderBy
//   } from "firebase/firestore";
  
//   import { db } from "./firestore";
  
//   export async function getPublishedEvents() {
//     const eventsQuery = query(
//       collection(db, "events"),
//       where("published", "==", true),
//       orderBy("date", "asc")
//     );
  
//     const snapshot = await getDocs(eventsQuery);
  
//     return snapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data()
//     }));
//   }

import {
    collection,
    getDocs,
    query,
    where,
    orderBy,
  } from "firebase/firestore";
  
  import { db } from "./firestore";
  import { EventItem } from "@/lib/data/types";
  
  export async function getPublishedEvents(): Promise<EventItem[]> {
    const eventsQuery = query(
      collection(db, "events"),
      where("published", "==", true),
      orderBy("date", "asc")
    );
  
    const snapshot = await getDocs(eventsQuery);
  
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as EventItem[];
  }