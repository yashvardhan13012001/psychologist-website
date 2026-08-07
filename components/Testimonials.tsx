// import Section from "@/components/Section";
// import { getGoogleReviews } from "@/lib/google/reviews";

// export default async function Testimonials() {
//     const data = await getGoogleReviews();

//     if (!data || data.reviews.length === 0) return null;
    
//     const topReviews = data.reviews.filter((review) => review.rating >= 4);
    
//     if (topReviews.length === 0) return null;

//   return (
//     <Section
//       eyebrow="What clients say"
//       title="Real feedback from real clients"
//       className="rounded-3xl bg-surface-soft/60"
//     >
//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {data.reviews.slice(0, 6).map((review) => (
//           <div key={review.time} className="card flex flex-col gap-3 p-6">
//             <div className="flex items-center gap-1 text-accent">
//               {Array.from({ length: 5 }).map((_, i) => (
//                 <span key={i}>{i < review.rating ? "★" : "☆"}</span>
//               ))}
//             </div>

//             <p className="flex-1 text-sm leading-relaxed text-ink-soft">
//               {review.text}
//             </p>

//             <div className="flex items-center gap-2 pt-2">
//               {review.profile_photo_url && (
//                 <img
//                   src={review.profile_photo_url}
//                   alt={review.author_name}
//                   className="h-8 w-8 rounded-full"
//                   referrerPolicy="no-referrer"
//                 />
//               )}
//               <div>
//                 <p className="text-sm font-medium text-primary-dark">
//                   {review.author_name}
//                 </p>
//                 <p className="text-xs text-ink-soft/70">
//                   {review.relative_time_description}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <p className="mt-6 text-xs text-ink-soft/60">
//         {data.rating.toFixed(1)} ★ average from {data.userRatingsTotal} Google reviews
//       </p>
//     </Section>
//   );
// }



import Section from "@/components/Section";
import { getGoogleReviews } from "@/lib/google/reviews";

export default async function Testimonials() {
  const data = await getGoogleReviews();

  if (!data) return null;

  const topReviews = data.reviews.filter((review) => review.rating >= 4);
  if (topReviews.length === 0) return null;

  // duplicate the list so the marquee loops seamlessly
  const loopReviews = [...topReviews, ...topReviews];

  return (
    <Section
      eyebrow="What clients say"
      title="Real feedback from real clients"
      className="overflow-hidden rounded-3xl bg-surface-soft/60"
    >
      <div className="relative -mx-6 md:-mx-10">
        {/* fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface-soft to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface-soft to-transparent md:w-32" />

        <div className="group flex gap-6 overflow-hidden px-6 md:px-10">
          <div className="flex shrink-0 animate-marquee gap-6 group-hover:[animation-play-state:paused]">
            {loopReviews.map((review, i) => (
              <div
                key={`${review.time}-${i}`}
                className="relative flex w-[320px] shrink-0 flex-col gap-4 rounded-2xl border border-primary/10 bg-white p-7 shadow-sm"
              >
                <span className="font-display text-6xl leading-none text-primary/15">
                  "
                </span>

                <p className="-mt-8 text-sm leading-relaxed text-ink-soft">
                  {review.text}
                </p>

                <div className="mt-auto flex items-center gap-3 border-t border-primary/10 pt-4">
                  {review.profile_photo_url && (
                    <img
                      src={review.profile_photo_url}
                      alt={review.author_name}
                      className="h-10 w-10 rounded-full"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div>
                    <p className="text-sm font-medium text-primary-dark">
                      {review.author_name}
                    </p>
                    <div className="flex text-accent text-xs">
                      {Array.from({ length: 5 }).map((_, star) => (
                        <span key={star}>{star < review.rating ? "★" : "☆"}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-ink-soft/60">
        {data.rating.toFixed(1)} ★ average from {data.userRatingsTotal} Google reviews
      </p>
    </Section>
  );
}