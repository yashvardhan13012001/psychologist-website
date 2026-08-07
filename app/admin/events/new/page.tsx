// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { addDoc, collection, serverTimestamp } from "firebase/firestore";
// import {
//   ref,
//   uploadBytes,
//   getDownloadURL,
// } from "firebase/storage";
// import { useRouter } from "next/navigation";
// import { storage } from "@/lib/firebase/storage";

// import AdminGuard from "../../AdminGuard";
// import { db } from "@/lib/firebase/firestore";

// export default function NewEventPage() {
//   const router = useRouter();

//   const [title, setTitle] = useState("");
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [location, setLocation] = useState("");
//   const [shortDescription, setShortDescription] = useState("");
//   const [description, setDescription] = useState("");
//   const [registrationLink, setRegistrationLink] = useState("");
//   const [published, setPublished] = useState(true);

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [image, setImage] = useState<File | null>(null);

//   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();

//     setLoading(true);
//     setError("");

//     try {
//       await addDoc(collection(db, "events"), {
//         title,
//         date,
//         time,
//         location,
//         shortDescription,
//         description,
//         registrationLink,
//         published,
//         createdAt: serverTimestamp(),
//       });

//       router.push("/admin/events");
//     } catch (error) {
//       console.error(error);
//       setError("Something went wrong while creating the event.");
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <AdminGuard>
//       <main className="min-h-screen bg-sand px-6 py-10 md:px-10">
//         <div className="mx-auto max-w-4xl">

//           <Link
//             href="/admin/events"
//             className="text-sm text-primary hover:underline"
//           >
//             ← Back to Events
//           </Link>

//           <p className="eyebrow mt-8">
//             Content management
//           </p>

//           <h1 className="mt-3 text-5xl text-primary-dark">
//             Add Event
//           </h1>

//           <p className="mt-4 text-lg text-ink-soft">
//             Create a new event, workshop, or session.
//           </p>

//           <form
//             onSubmit={handleSubmit}
//             className="mt-10 space-y-8 rounded-3xl bg-white p-8 shadow-sm md:p-10"
//           >

//             {/* BASIC INFORMATION */}
//             <div>
//               <h2 className="text-2xl text-primary-dark">
//                 Basic Information
//               </h2>

//               <div className="mt-6 space-y-5">

//                 <div>
//                   <label className="mb-2 block text-sm font-medium">
//                     Event Title
//                   </label>

//                   <input
//                     required
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                     placeholder="Understanding Anxiety"
//                     className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
//                   />
//                 </div>

//                 <div className="grid gap-5 md:grid-cols-2">

//                   <div>
//                     <label className="mb-2 block text-sm font-medium">
//                       Date
//                     </label>

//                     <input
//                       required
//                       type="date"
//                       value={date}
//                       onChange={(e) => setDate(e.target.value)}
//                       className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
//                     />
//                   </div>

//                   <div>
//                     <label className="mb-2 block text-sm font-medium">
//                       Time
//                     </label>

//                     <input
//                       type="text"
//                       value={time}
//                       onChange={(e) => setTime(e.target.value)}
//                       placeholder="5:00 PM"
//                       className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
//                     />
//                   </div>

//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium">
//                     Location
//                   </label>

//                   <input
//                     value={location}
//                     onChange={(e) => setLocation(e.target.value)}
//                     placeholder="Vashi, Navi Mumbai"
//                     className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
//                   />
//                 </div>

//               </div>
//             </div>

//             {/* DESCRIPTION */}
//             <div>
//               <h2 className="text-2xl text-primary-dark">
//                 Description
//               </h2>

//               <div className="mt-6 space-y-5">

//                 <div>
//                   <label className="mb-2 block text-sm font-medium">
//                     Short Description
//                   </label>

//                   <textarea
//                     required
//                     rows={3}
//                     value={shortDescription}
//                     onChange={(e) => setShortDescription(e.target.value)}
//                     placeholder="A short summary of the event..."
//                     className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm font-medium">
//                     Full Description
//                   </label>

//                   <textarea
//                     required
//                     rows={8}
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}
//                     placeholder="Write the full event description..."
//                     className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
//                   />
//                 </div>

//               </div>
//             </div>

//             {/* IMAGE */}
// <div>
//   <h2 className="text-2xl text-primary-dark">
//     Event Image
//   </h2>

//   <div className="mt-6">
//     <label className="mb-2 block text-sm font-medium">
//       Upload Image
//     </label>

//     <input
//       type="file"
//       accept="image/*"
//       onChange={(e) => {
//         if (e.target.files && e.target.files[0]) {
//           setImage(e.target.files[0]);
//         }
//       }}
//       className="w-full rounded-xl border border-primary-dark/15 px-4 py-3"
//     />

//     <p className="mt-2 text-sm text-ink-soft">
//       Recommended: JPG or PNG image.
//     </p>
//   </div>
// </div>

//             {/* REGISTRATION */}
//             <div>
//               <h2 className="text-2xl text-primary-dark">
//                 Registration
//               </h2>

//               <div className="mt-6">

//                 <label className="mb-2 block text-sm font-medium">
//                   Registration Link
//                 </label>

//                 <input
//                   type="url"
//                   value={registrationLink}
//                   onChange={(e) => setRegistrationLink(e.target.value)}
//                   placeholder="https://example.com/register"
//                   className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
//                 />

//               </div>
//             </div>

//             {/* PUBLISH */}
//             <div className="flex items-center gap-3 border-t border-primary-dark/10 pt-6">

//               <input
//                 id="published"
//                 type="checkbox"
//                 checked={published}
//                 onChange={(e) => setPublished(e.target.checked)}
//                 className="h-4 w-4"
//               />

//               <label
//                 htmlFor="published"
//                 className="text-sm text-ink-soft"
//               >
//                 Publish this event immediately
//               </label>

//             </div>

//             {error && (
//               <p className="rounded-xl bg-red-50 p-4 text-sm text-red-600">
//                 {error}
//               </p>
//             )}

//             <div className="flex gap-4 border-t border-primary-dark/10 pt-6">

//               <Link
//                 href="/admin/events"
//                 className="rounded-full border border-primary-dark/20 px-6 py-3 text-sm font-medium"
//               >
//                 Cancel
//               </Link>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="btn-primary disabled:opacity-60"
//               >
//                 {loading ? "Creating Event..." : "Create Event"}
//               </button>

//             </div>

//           </form>

//         </div>
//       </main>
//     </AdminGuard>
//   );
// }



"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

import AdminGuard from "../../AdminGuard";
import { db } from "@/lib/firebase/firestore";
import { storage } from "@/lib/firebase/storage";

export default function NewEventPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");
  const [registrationLink, setRegistrationLink] = useState("");
  const [published, setPublished] = useState(true);

  const [image, setImage] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      let imageUrl = "";

      // Upload image to Firebase Storage
      if (image) {
        const imageRef = ref(
          storage,
          `events/${Date.now()}-${image.name}`
        );

        await uploadBytes(imageRef, image);

        imageUrl = await getDownloadURL(imageRef);
      }

      // Save event data to Firestore
      await addDoc(collection(db, "events"), {
        title,
        date,
        time,
        location,
        shortDescription,
        description,
        registrationLink,
        published,
        imageUrl,
        createdAt: serverTimestamp(),
      });

      // Return to Events admin page
      router.push("/admin/events");

    } catch (error) {
      console.error(error);

      setError(
        "Something went wrong while creating the event."
      );

    } finally {
      setLoading(false);
    }
  }

  return (
    <AdminGuard>
      <main className="min-h-screen bg-sand px-6 py-10 md:px-10">
        <div className="mx-auto max-w-4xl">

          {/* BACK LINK */}

          <Link
            href="/admin/events"
            className="text-sm text-primary hover:underline"
          >
            ← Back to Events
          </Link>

          {/* HEADER */}

          <p className="eyebrow mt-8">
            Content management
          </p>

          <h1 className="mt-3 text-5xl text-primary-dark">
            Add Event
          </h1>

          <p className="mt-4 text-lg text-ink-soft">
            Create a new event, workshop, or session.
          </p>

          {/* FORM */}

          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-8 rounded-3xl bg-white p-8 shadow-sm md:p-10"
          >

            {/* BASIC INFORMATION */}

            <div>
              <h2 className="text-2xl text-primary-dark">
                Basic Information
              </h2>

              <div className="mt-6 space-y-5">

                {/* TITLE */}

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Event Title
                  </label>

                  <input
                    required
                    value={title}
                    onChange={(e) =>
                      setTitle(e.target.value)
                    }
                    placeholder="Understanding Anxiety"
                    className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
                  />
                </div>

                {/* DATE + TIME */}

                <div className="grid gap-5 md:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Date
                    </label>

                    <input
                      required
                      type="date"
                      value={date}
                      onChange={(e) =>
                        setDate(e.target.value)
                      }
                      className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Time
                    </label>

                    <input
                      type="text"
                      value={time}
                      onChange={(e) =>
                        setTime(e.target.value)
                      }
                      placeholder="5:00 PM"
                      className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
                    />
                  </div>

                </div>

                {/* LOCATION */}

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Location
                  </label>

                  <input
                    value={location}
                    onChange={(e) =>
                      setLocation(e.target.value)
                    }
                    placeholder="Vashi, Navi Mumbai"
                    className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
                  />
                </div>

              </div>
            </div>

            {/* DESCRIPTION */}

            <div>
              <h2 className="text-2xl text-primary-dark">
                Description
              </h2>

              <div className="mt-6 space-y-5">

                {/* SHORT DESCRIPTION */}

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Short Description
                  </label>

                  <textarea
                    required
                    rows={3}
                    value={shortDescription}
                    onChange={(e) =>
                      setShortDescription(e.target.value)
                    }
                    placeholder="A short summary of the event..."
                    className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
                  />
                </div>

                {/* FULL DESCRIPTION */}

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Full Description
                  </label>

                  <textarea
                    required
                    rows={8}
                    value={description}
                    onChange={(e) =>
                      setDescription(e.target.value)
                    }
                    placeholder="Write the full event description..."
                    className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
                  />
                </div>

              </div>
            </div>

            {/* EVENT IMAGE */}

            <div>
              <h2 className="text-2xl text-primary-dark">
                Event Image
              </h2>

              <div className="mt-6">

                <label className="mb-2 block text-sm font-medium">
                  Upload Image
                </label>

                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    if (
                      e.target.files &&
                      e.target.files[0]
                    ) {
                      setImage(e.target.files[0]);
                    }
                  }}
                  className="w-full rounded-xl border border-primary-dark/15 px-4 py-3"
                />

                {image && (
                  <p className="mt-2 text-sm text-primary">
                    Selected: {image.name}
                  </p>
                )}

                <p className="mt-2 text-sm text-ink-soft">
                  Recommended: JPG or PNG image.
                </p>

              </div>
            </div>

            {/* REGISTRATION */}

            <div>
              <h2 className="text-2xl text-primary-dark">
                Registration
              </h2>

              <div className="mt-6">

                <label className="mb-2 block text-sm font-medium">
                  Registration Link
                </label>

                <input
                  type="url"
                  value={registrationLink}
                  onChange={(e) =>
                    setRegistrationLink(e.target.value)
                  }
                  placeholder="https://example.com/register"
                  className="w-full rounded-xl border border-primary-dark/15 px-4 py-3 outline-none focus:border-primary"
                />

              </div>
            </div>

            {/* PUBLISH */}

            <div className="flex items-center gap-3 border-t border-primary-dark/10 pt-6">

              <input
                id="published"
                type="checkbox"
                checked={published}
                onChange={(e) =>
                  setPublished(e.target.checked)
                }
                className="h-4 w-4"
              />

              <label
                htmlFor="published"
                className="text-sm text-ink-soft"
              >
                Publish this event immediately
              </label>

            </div>

            {/* ERROR */}

            {error && (
              <p className="rounded-xl bg-red-50 p-4 text-sm text-red-600">
                {error}
              </p>
            )}

            {/* ACTIONS */}

            <div className="flex gap-4 border-t border-primary-dark/10 pt-6">

              <Link
                href="/admin/events"
                className="rounded-full border border-primary-dark/20 px-6 py-3 text-sm font-medium"
              >
                Cancel
              </Link>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary disabled:opacity-60"
              >
                {loading
                  ? "Creating Event..."
                  : "Create Event"}
              </button>

            </div>

          </form>

        </div>
      </main>
    </AdminGuard>
  );
}