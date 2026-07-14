export type UpcomingEvent = {
  tag: string;
  title: string;
  date: string;
  location: string;
  description: string;
};

// Placeholder events — replace with real upcoming camps, outings and workshops before launch.
export const upcomingEvents: UpcomingEvent[] = [
  {
    tag: "Weekend Camp",
    title: "Mindfulness & Recovery Retreat, Matheran",
    date: "15–16 August 2026",
    location: "Matheran",
    description:
      "A two-day guided retreat combining mindfulness practice, group sessions, and quiet time away from the city — open to current and new clients."
  },
  {
    tag: "Community Outing",
    title: "Stress-Free Sunday, Karnala",
    date: "6 September 2026",
    location: "Karnala Bird Sanctuary",
    description:
      "A relaxed group outing designed around gentle activity, nature, and informal peer support — no clinical agenda, just a change of pace."
  },
  {
    tag: "Public Talk",
    title: "Understanding Anxiety in Teenagers",
    date: "20 September 2026",
    location: "Vashi Clinic",
    description:
      "A free public session for parents and educators on recognising and responding to anxiety in adolescents, led by Lt. Col. Rajesh Sharma (Retd.)."
  }
];
