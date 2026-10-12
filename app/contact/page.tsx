// // import Section from "@/components/Section";
// // import ContactForm from "@/components/ContactForm";
// // import { buildMetadata } from "@/lib/seo/metadata";
// // import { site } from "@/lib/data/site";

// // export const metadata = buildMetadata({
// //   title: "Contact | Book a Consultation in Navi Mumbai",
// //   description:
// //     "Get in touch with Chaitanya Raj Psychology & Counselling in Vashi, Navi Mumbai. In-person and online consultations available.",
// //   path: "/contact"
// // });

// // export default function ContactPage() {
// //   return (
// //     <Section eyebrow="Contact" title="Let's talk">
// //       <div className="grid md:grid-cols-5 gap-12">
// //         <div className="md:col-span-2 space-y-6">
// //           <p className="text-ink-soft leading-relaxed">
// //             Reach out using the form, or contact the practice directly. Everything shared is
// //             treated in confidence.
// //           </p>
// //           <div className="space-y-3 text-ink-soft">
// //             <p>
// //               <span className="font-medium text-ink">Address: </span>
// //               {site.address.street}, {site.address.locality}
// //             </p>
// //             <p>
// //               <span className="font-medium text-ink">Phone: </span>
// //               <a href={`tel:${site.phone}`} className="hover:text-accent">{site.phoneDisplay}</a>
// //             </p>
// //             <p>
// //               <span className="font-medium text-ink">Email: </span>
// //               <a href={`mailto:${site.email}`} className="hover:text-accent">{site.email}</a>
// //             </p>
// //             <p>
// //               <span className="font-medium text-ink">Hours: </span>
// //               {site.hours}
// //             </p>
// //           </div>
// //         </div>
// //         <div className="md:col-span-3">
// //           <ContactForm />
// //         </div>
// //       </div>
// //     </Section>
// //   );
// // }



// import Section from "@/components/Section";
// import ContactForm from "@/components/ContactForm";
// import LocationMap from "@/components/LocationMap";
// import { buildMetadata } from "@/lib/seo/metadata";
// import { site } from "@/lib/data/site";

// export const metadata = buildMetadata({
//   title: "Contact | Book a Consultation in Navi Mumbai",
//   description:
//     "Get in touch with Chaitanya Raj Psychology & Counselling in Vashi, Navi Mumbai. In-person and online consultations available.",
//   path: "/contact",
// });

// export default function ContactPage() {
//   return (
//     <>
//       {/* Contact Section */}
//       <Section eyebrow="Contact" title="Let's talk">
//         <div className="grid md:grid-cols-5 gap-12">
//           <div className="md:col-span-2 space-y-6">
//             <p className="text-ink-soft leading-relaxed">
//               Reach out using the form, or contact the practice directly.
//               Everything shared is treated in confidence.
//             </p>

//             <div className="space-y-3 text-ink-soft">
//               <p>
//                 <span className="font-medium text-ink">Address: </span>
//                 {site.address.street}, {site.address.locality}
//               </p>

//               <p>
//                 <span className="font-medium text-ink">Phone: </span>
//                 <a
//                   href={`tel:${site.phone}`}
//                   className="hover:text-accent"
//                 >
//                   {site.phoneDisplay}
//                 </a>
//               </p>

//               <p>
//                 <span className="font-medium text-ink">Email: </span>
//                 <a
//                   href={`mailto:${site.email}`}
//                   className="hover:text-accent"
//                 >
//                   {site.email}
//                 </a>
//               </p>

//               <p>
//                 <span className="font-medium text-ink">Hours: </span>
//                 {site.hours}
//               </p>
//             </div>
//           </div>

//           <div className="md:col-span-3">
//             <ContactForm />
//           </div>
//         </div>
//       </Section>

//       {/* Location Section */}
//       <div id="contact" className="scroll-mt-24">
//         <Section eyebrow="Find us" title="How to reach us">
//           <LocationMap />
//         </Section>
//       </div>
//     </>
//   );
// }

import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import LocationMap from "@/components/LocationMap";
import { buildMetadata } from "@/lib/seo/metadata";
import { site } from "@/lib/data/site";

export const metadata = buildMetadata({
  title: "Book a Consultation | Psychologist in Vashi, Navi Mumbai",
  description:
    "Book an in-person or online session at Chaitanya Raj, Gold City, Sector 19D, Vashi, Navi Mumbai. Open Mon-Sat, 10am-7pm. Call +91 96284 93677.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Section eyebrow="Contact" title="Let's talk">
      <div className="grid lg:grid-cols-5 gap-12">

        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">

          {/* Contact Information */}
          <div className="space-y-6">
            <p className="text-ink-soft leading-relaxed">
              Reach out using the form, or contact the practice directly.
              Everything shared is treated in confidence.
            </p>

            <div className="space-y-3 text-ink-soft">
              <p>
                <span className="font-medium text-ink">Address: </span>
                {site.address.street}, {site.address.locality}
              </p>

              <p>
                <span className="font-medium text-ink">Phone: </span>
                <a
                  href={`tel:${site.phone}`}
                  className="hover:text-accent"
                >
                  {site.phoneDisplay}
                </a>
              </p>

              <p>
                <span className="font-medium text-ink">Email: </span>
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-accent"
                >
                  {site.email}
                </a>
              </p>

              <p>
                <span className="font-medium text-ink">Hours: </span>
                {site.hours}
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="h-[320px] overflow-hidden rounded-2xl">
            <LocationMap />
          </div>

        </div>

        {/* Right Column - Contact Form */}
        <div className="lg:col-span-3">
          <ContactForm />
        </div>

      </div>
    </Section>
  );
}