// // import { ReactNode } from "react";

// // export default function Section({
// //   eyebrow,
// //   title,
// //   children,
// //   className = ""
// // }: {
// //   eyebrow?: string;
// //   title?: string;
// //   children: ReactNode;
// //   className?: string;
// // }) {
// //   return (
// //     <section className={`mx-auto max-w-6xl px-6 py-16 ${className}`}>
// //       {(eyebrow || title) && (
// //         <div className="mb-10">
// //           {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
// //           <div className="divider mb-4" />
// //           {title && <h2 className="text-3xl">{title}</h2>}
// //         </div>
// //       )}
// //       {children}
// //     </section>
// //   );
// // }


// import { ReactNode } from "react";

// export default function Section({
//   eyebrow,
//   title,
//   children,
//   className = ""
// }: {
//   eyebrow?: string;
//   title?: string;
//   children: ReactNode;
//   className?: string;
// }) {
//   return (
//     <section className={`mx-auto max-w-6xl px-6 py-16 ${className}`}>
//       {(eyebrow || title) && (
//         <div className="mb-10">
//           {eyebrow && (
//             <p className="eyebrow mb-3 text-primary-dark font-semibold">
//               {eyebrow}
//             </p>
//           )}
//           <div className="divider mb-4" />
//           {title && <h2 className="text-3xl text-primary-dark">{title}</h2>}
//         </div>
//       )}
//       {children}
//     </section>
//   );
// }


import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  eyebrow,
  title,
  children,
  className = ""
}: SectionProps) {
  return (
    <section className={`mx-auto max-w-6xl px-6 py-16 ${className}`}>
      {(eyebrow || title) && (
        <div className="mb-10">
          {eyebrow && (
            <p className="eyebrow mb-3 text-primary-dark font-semibold">
              {eyebrow}
            </p>
          )}
          <div className="divider mb-4" />
          {title && (
            <h2 className="text-3xl text-primary-dark">{title}</h2>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
