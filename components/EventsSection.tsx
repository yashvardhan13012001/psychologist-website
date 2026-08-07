"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { db } from "@/lib/firebase/firestore";

type Event = {
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

export default function EventsSection() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const eventsQuery = query(
          collection(db, "events"),
          where("published", "==", true)
        );

        const snapshot = await getDocs(eventsQuery);

        const fetchedEvents: Event[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Event[];

        // Sort events by date
        fetchedEvents.sort(
          (a, b) =>
            new Date(a.date).getTime() -
            new Date(b.date).getTime()
        );

        setEvents(fetchedEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  if (loading) {
    return null;
  }

  /*
   * Separate upcoming and previous events
   */

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    eventDate.setHours(0, 0, 0, 0);

    return eventDate >= today;
  });

  const previousEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    eventDate.setHours(0, 0, 0, 0);

    return eventDate < today;
  });

  /*
   * If upcoming events exist,
   * show upcoming events.
   *
   * Otherwise show previous events.
   */

  const showingUpcoming = upcomingEvents.length > 0;

  const displayedEvents = showingUpcoming
    ? upcomingEvents
    : previousEvents;

  /*
   * If there are absolutely no events,
   * don't show the section.
   */

  if (displayedEvents.length === 0) {
    return null;
  }

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* SECTION HEADER */}

        <div className="mb-10">
          <p className="eyebrow">
            {showingUpcoming ? "Notices" : "From our events"}
          </p>

          <h2 className="mt-3 text-4xl text-primary-dark md:text-5xl">
            {showingUpcoming
              ? "Upcoming camps, outings & events"
              : "Previous camps, outings & events"}
          </h2>
        </div>

        {/* EVENTS */}

        <div className="grid gap-6 md:grid-cols-3">

          {displayedEvents.map((event) => (

            <div
              key={event.id}
              className="card flex flex-col overflow-hidden"
            >

              {/* IMAGE */}

              {event.imageUrl ? (

                <div className="relative aspect-[4/3] w-full">

                  <Image
                    src={event.imageUrl}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />

                </div>

              ) : (

                <div className="flex aspect-[4/3] items-center justify-center bg-surface-soft">

                  <span className="eyebrow">
                    {showingUpcoming ? "Upcoming Event" : "Past Event"}
                  </span>

                </div>

              )}

              {/* CONTENT */}

              <div className="flex flex-1 flex-col gap-3 p-6">

                <p className="eyebrow">

                  {new Date(event.date).toLocaleDateString(
                    "en-IN",
                    {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }
                  )}

                  {event.location && (
                    <>
                      {" "}
                      · {event.location}
                    </>
                  )}

                </p>

                <h3 className="font-display text-lg text-primary-dark">
                  {event.title}
                </h3>

                <p className="flex-1 text-sm leading-relaxed text-ink-soft">
                  {event.shortDescription}
                </p>

                {showingUpcoming && event.registrationLink ? (

                  <a
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 font-mono text-xs uppercase tracking-widest text-accent"
                  >
                    Reserve a spot →
                  </a>

                ) : (

                  <Link
                    href="/contact"
                    className="mt-2 font-mono text-xs uppercase tracking-widest text-accent"
                  >
                    Learn more →
                  </Link>

                )}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}