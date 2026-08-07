// // "use client";

// // import Link from "next/link";
// // import AdminGuard from "../AdminGuard";

// // export default function EventsAdminPage() {
// //   return (
// //     <AdminGuard>
// //       <main className="min-h-screen bg-sand px-6 py-10 md:px-10">
// //         <div className="mx-auto max-w-7xl">

// //           {/* HEADER */}
// //           <div className="flex items-end justify-between gap-6">
// //             <div>
// //               <Link
// //                 href="/admin"
// //                 className="text-sm text-primary hover:underline"
// //               >
// //                 ← Back to dashboard
// //               </Link>

// //               <p className="eyebrow mt-8">
// //                 Content management
// //               </p>

// //               <h1 className="mt-3 text-5xl text-primary-dark">
// //                 Events
// //               </h1>

// //               <p className="mt-4 max-w-xl text-lg text-ink-soft">
// //                 Create and manage events, workshops, and sessions.
// //               </p>
// //             </div>

// //             {/* <button className="btn-primary">
// //               + Add Event
// //             </button> */}
// //             <Link
// //   href="/admin/events/new"
// //   className="btn-primary"
// // >
// //   + Add Event
// // </Link>
// //           </div>

// //           {/* EMPTY STATE */}
// //           <div className="mt-12 rounded-3xl bg-white p-12 text-center shadow-sm">
// //             <h2 className="text-2xl text-primary-dark">
// //               No events yet
// //             </h2>

// //             <p className="mx-auto mt-3 max-w-md text-ink-soft">
// //               Create your first event to start building the events section of
// //               the website.
// //             </p>

// //             {/* <button className="btn-primary mt-6">
// //               Create Your First Event
// //             </button> */}
// //             <Link
// //   href="/admin/events/new"
// //   className="btn-primary mt-6"
// // >
// //   Create Your First Event
// // </Link>
// //           </div>

// //         </div>
// //       </main>
// //     </AdminGuard>
// //   );
// // }


// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import {
//   collection,
//   getDocs,
//   orderBy,
//   query,
// } from "firebase/firestore";

// import AdminGuard from "../AdminGuard";
// import { db } from "@/lib/firebase/firestore";


// type EventItem = {
//   id: string;
//   title: string;
//   date: string;
//   time?: string;
//   location?: string;
//   shortDescription: string;
//   description: string;
//   registrationLink?: string;
//   imageUrl?: string;
//   published: boolean;
// };

// export default function EventsAdminPage() {
//   const [events, setEvents] = useState<EventItem[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   async function loadEvents() {
//     try {
//       setLoading(true);
//       setError("");

//       const eventsQuery = query(
//         collection(db, "events"),
//         orderBy("date", "asc")
//       );

//       const snapshot = await getDocs(eventsQuery);

//       const fetchedEvents = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       })) as EventItem[];

//       setEvents(fetchedEvents);
//     } catch (error) {
//       console.error("Error loading events:", error);
//       setError("Unable to load events.");
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     loadEvents();
//   }, []);

//   return (
//     <AdminGuard>
//       <main className="min-h-screen bg-sand px-6 py-10 md:px-10">

//         <div className="mx-auto max-w-7xl">

//           {/* HEADER */}

//           <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

//             <div>

//               <Link
//                 href="/admin"
//                 className="text-sm text-primary hover:underline"
//               >
//                 ← Back to dashboard
//               </Link>

//               <p className="eyebrow mt-8">
//                 Content management
//               </p>

//               <h1 className="mt-3 text-5xl text-primary-dark">
//                 Events
//               </h1>

//               <p className="mt-4 max-w-xl text-lg text-ink-soft">
//                 Create and manage events, workshops, and sessions.
//               </p>

//             </div>

//             <Link
//               href="/admin/events/new"
//               className="btn-primary inline-flex"
//             >
//               + Add Event
//             </Link>

//           </div>

//           {/* LOADING */}

//           {loading && (

//             <div className="mt-12 rounded-3xl bg-white p-12 text-center shadow-sm">

//               <p className="text-ink-soft">
//                 Loading events...
//               </p>

//             </div>

//           )}

//           {/* ERROR */}

//           {!loading && error && (

//             <div className="mt-12 rounded-3xl bg-red-50 p-8 text-center">

//               <p className="text-red-600">
//                 {error}
//               </p>

//               <button
//                 onClick={loadEvents}
//                 className="mt-4 rounded-full border border-red-300 px-5 py-2 text-sm text-red-600"
//               >
//                 Try Again
//               </button>

//             </div>

//           )}

//           {/* EMPTY STATE */}

//           {!loading && !error && events.length === 0 && (

//             <div className="mt-12 rounded-3xl bg-white p-12 text-center shadow-sm">

//               <h2 className="text-2xl text-primary-dark">
//                 No events yet
//               </h2>

//               <p className="mx-auto mt-3 max-w-md text-ink-soft">
//                 Create your first event to start building the events section of
//                 the website.
//               </p>

//               <Link
//                 href="/admin/events/new"
//                 className="btn-primary mt-6 inline-flex"
//               >
//                 Create Your First Event
//               </Link>

//             </div>

//           )}

//           {/* EVENTS LIST */}

//           {!loading && !error && events.length > 0 && (

//             <div className="mt-12 space-y-5">

//               {events.map((event) => (

//                 <div
//                   key={event.id}
//                   className="flex flex-col gap-6 rounded-3xl bg-white p-5 shadow-sm md:flex-row md:items-center"
//                 >

//                   {/* IMAGE */}

//                   <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-2xl bg-surface-soft md:w-56">

//                     {event.imageUrl ? (

//                       <Image
//                         src={event.imageUrl}
//                         alt={event.title}
//                         fill
//                         sizes="224px"
//                         className="object-cover"
//                       />

//                     ) : (

//                       <div className="flex h-full items-center justify-center text-sm text-ink-soft">
//                         No image
//                       </div>

//                     )}

//                   </div>

//                   {/* CONTENT */}

//                   <div className="flex-1">

//                     <div className="flex flex-wrap items-center gap-3">

//                       <h2 className="text-2xl text-primary-dark">
//                         {event.title}
//                       </h2>

//                       <span
//                         className={`rounded-full px-3 py-1 text-xs font-medium ${
//                           event.published
//                             ? "bg-green-100 text-green-700"
//                             : "bg-gray-100 text-gray-600"
//                         }`}
//                       >
//                         {event.published
//                           ? "Published"
//                           : "Draft"}
//                       </span>

//                     </div>

//                     <p className="mt-2 text-sm text-primary">

//                       {new Date(event.date).toLocaleDateString(
//                         "en-IN",
//                         {
//                           day: "numeric",
//                           month: "long",
//                           year: "numeric",
//                         }
//                       )}

//                       {event.time && (
//                         <>
//                           {" · "}
//                           {event.time}
//                         </>
//                       )}

//                     </p>

//                     {event.location && (

//                       <p className="mt-1 text-sm text-ink-soft">
//                         {event.location}
//                       </p>

//                     )}

//                     <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-ink-soft">
//                       {event.shortDescription}
//                     </p>

//                   </div>

//                   {/* ACTIONS */}

//                   <div className="flex shrink-0 gap-3">

//                     <Link
//                       href={`/admin/events/${event.id}/edit`}
//                       className="rounded-full border border-primary-dark/20 px-5 py-2 text-sm font-medium text-primary-dark transition hover:bg-sand"
//                     >
//                       Edit
//                     </Link>

//                     <button
//                       type="button"
//                       className="rounded-full border border-red-200 px-5 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
//                     >
//                       Delete
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
import {
  collection,
  getDocs,
  orderBy,
  query,
  doc,
  deleteDoc,
} from "firebase/firestore";

import AdminGuard from "../AdminGuard";
import { db } from "@/lib/firebase/firestore";


type EventItem = {
  id: string;
  title: string;
  date: string;
  time?: string;
  location?: string;
  shortDescription: string;
  description: string;
  registrationLink?: string;
  imageUrl?: string;
  published: boolean;
};

export default function EventsAdminPage() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadEvents() {
    try {
      setLoading(true);
      setError("");

      const eventsQuery = query(
        collection(db, "events"),
        orderBy("date", "asc")
      );

      const snapshot = await getDocs(eventsQuery);

      const fetchedEvents = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as EventItem[];

      setEvents(fetchedEvents);
    } catch (error) {
      console.error("Error loading events:", error);
      setError("Unable to load events.");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this event? This cannot be undone.")) return;

    try {
      await deleteDoc(doc(db, "events", id));
      setEvents((prev) => prev.filter((e) => e.id !== id));
    } catch (err) {
      console.error("Error deleting event:", err);
      alert("Failed to delete event.");
    }
  }

  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <AdminGuard>
      <main className="min-h-screen bg-sand px-6 py-10 md:px-10">

        <div className="mx-auto max-w-7xl">

          {/* HEADER */}

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>

              <Link
                href="/admin"
                className="text-sm text-primary hover:underline"
              >
                ← Back to dashboard
              </Link>

              <p className="eyebrow mt-8">
                Content management
              </p>

              <h1 className="mt-3 text-5xl text-primary-dark">
                Events
              </h1>

              <p className="mt-4 max-w-xl text-lg text-ink-soft">
                Create and manage events, workshops, and sessions.
              </p>

            </div>

            <Link
              href="/admin/events/new"
              className="btn-primary inline-flex"
            >
              + Add Event
            </Link>

          </div>

          {/* LOADING */}

          {loading && (

            <div className="mt-12 rounded-3xl bg-white p-12 text-center shadow-sm">

              <p className="text-ink-soft">
                Loading events...
              </p>

            </div>

          )}

          {/* ERROR */}

          {!loading && error && (

            <div className="mt-12 rounded-3xl bg-red-50 p-8 text-center">

              <p className="text-red-600">
                {error}
              </p>

              <button
                onClick={loadEvents}
                className="mt-4 rounded-full border border-red-300 px-5 py-2 text-sm text-red-600"
              >
                Try Again
              </button>

            </div>

          )}

          {/* EMPTY STATE */}

          {!loading && !error && events.length === 0 && (

            <div className="mt-12 rounded-3xl bg-white p-12 text-center shadow-sm">

              <h2 className="text-2xl text-primary-dark">
                No events yet
              </h2>

              <p className="mx-auto mt-3 max-w-md text-ink-soft">
                Create your first event to start building the events section of
                the website.
              </p>

              <Link
                href="/admin/events/new"
                className="btn-primary mt-6 inline-flex"
              >
                Create Your First Event
              </Link>

            </div>

          )}

          {/* EVENTS LIST */}

          {!loading && !error && events.length > 0 && (

            <div className="mt-12 space-y-5">

              {events.map((event) => (

                <div
                  key={event.id}
                  className="flex flex-col gap-6 rounded-3xl bg-white p-5 shadow-sm md:flex-row md:items-center"
                >

                  {/* IMAGE */}

                  <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-2xl bg-surface-soft md:w-56">

                    {event.imageUrl ? (

                      <Image
                        src={event.imageUrl}
                        alt={event.title}
                        fill
                        sizes="224px"
                        className="object-cover"
                      />

                    ) : (

                      <div className="flex h-full items-center justify-center text-sm text-ink-soft">
                        No image
                      </div>

                    )}

                  </div>

                  {/* CONTENT */}

                  <div className="flex-1">

                    <div className="flex flex-wrap items-center gap-3">

                      <h2 className="text-2xl text-primary-dark">
                        {event.title}
                      </h2>

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          event.published
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {event.published
                          ? "Published"
                          : "Draft"}
                      </span>

                    </div>

                    <p className="mt-2 text-sm text-primary">

                      {new Date(event.date).toLocaleDateString(
                        "en-IN",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }
                      )}

                      {event.time && (
                        <>
                          {" · "}
                          {event.time}
                        </>
                      )}

                    </p>

                    {event.location && (

                      <p className="mt-1 text-sm text-ink-soft">
                        {event.location}
                      </p>

                    )}

                    <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-ink-soft">
                      {event.shortDescription}
                    </p>

                  </div>

                  {/* ACTIONS */}

                  <div className="flex shrink-0 gap-3">

                    <Link
                      href={`/admin/events/${event.id}/edit`}
                      className="rounded-full border border-primary-dark/20 px-5 py-2 text-sm font-medium text-primary-dark transition hover:bg-sand"
                    >
                      Edit
                    </Link>

                    <button
                      type="button"
                      onClick={() => handleDelete(event.id)}
                      className="rounded-full border border-red-200 px-5 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
                    >
                      Delete
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