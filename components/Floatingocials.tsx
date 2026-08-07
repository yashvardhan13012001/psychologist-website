// // // // "use client";

// // // // import Link from "next/link";
// // // // import { Instagram, Youtube, Linkedin, Facebook } from "lucide-react";

// // // // const socials = [
// // // //   {
// // // //     name: "Instagram",
// // // //     href: "https://instagram.com/yourhandle",
// // // //     icon: Instagram,
// // // //   },
// // // //   {
// // // //     name: "YouTube",
// // // //     href: "https://youtube.com/@yourchannel",
// // // //     icon: Youtube,
// // // //   },
// // // //   {
// // // //     name: "LinkedIn",
// // // //     href: "https://linkedin.com/in/yourprofile",
// // // //     icon: Linkedin,
// // // //   },
// // // //   {
// // // //     name: "Facebook",
// // // //     href: "https://facebook.com/yourpage",
// // // //     icon: Facebook,
// // // //   },
// // // // ];

// // // // export default function FloatingSocials() {
// // // //   return (
// // // //     <div className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 md:flex">
// // // //       {socials.map(({ name, href, icon: Icon }) => (
// // // //         <Link
// // // //           key={name}
// // // //           href={href}
// // // //           target="_blank"
// // // //           rel="noopener noreferrer"
// // // //           aria-label={name}
// // // //           className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/10 bg-white text-primary-dark shadow-md transition hover:-translate-y-0.5 hover:bg-primary-dark hover:text-white"
// // // //         >
// // // //           <Icon size={18} />
// // // //         </Link>
// // // //       ))}
// // // //     </div>
// // // //   );
// // // // }


// // // "use client";

// // // import Link from "next/link";

// // // const socials = [
// // //   {
// // //     name: "Instagram",
// // //     href: "https://instagram.com/yourhandle",
// // //     icon: (
// // //       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
// // //         <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
// // //         <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
// // //         <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
// // //       </svg>
// // //     ),
// // //   },
// // //   {
// // //     name: "YouTube",
// // //     href: "https://youtube.com/@yourchannel",
// // //     icon: (
// // //       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
// // //         <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
// // //         <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
// // //       </svg>
// // //     ),
// // //   },
// // //   {
// // //     name: "LinkedIn",
// // //     href: "https://linkedin.com/in/yourprofile",
// // //     icon: (
// // //       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
// // //         <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
// // //         <rect x="2" y="9" width="4" height="12" />
// // //         <circle cx="4" cy="4" r="2" />
// // //       </svg>
// // //     ),
// // //   },
// // // ];

// // // export default function FloatingSocials() {
// // //   return (
// // //     <div className="fixed right-4 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-3">
// // //       {socials.map(({ name, href, icon }) => (
// // //         <Link
// // //           key={name}
// // //           href={href}
// // //           target="_blank"
// // //           rel="noopener noreferrer"
// // //           aria-label={name}
// // //           className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/10 bg-white text-primary-dark shadow-md transition hover:-translate-y-0.5 hover:bg-primary-dark hover:text-white"
// // //         >
// // //           {icon}
// // //         </Link>
// // //       ))}
// // //     </div>
// // //   );
// // // }


// // "use client";

// // import Link from "next/link";

// // const socials = [
// //   {
// //     name: "Instagram",
// //     href: "https://instagram.com/yourhandle",
// //     bg: "url(#instagramGradient)",
// //     icon: (
// //       <svg viewBox="0 0 24 24" width="20" height="20">
// //         <defs>
// //           <linearGradient id="instagramGradient" x1="0%" y1="100%" x2="100%" y2="0%">
// //             <stop offset="0%" stopColor="#FFDD55" />
// //             <stop offset="30%" stopColor="#FF543E" />
// //             <stop offset="60%" stopColor="#C837AB" />
// //             <stop offset="100%" stopColor="#5851DB" />
// //           </linearGradient>
// //         </defs>
// //         <path
// //           fill="#ffffff"
// //           d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.56a5.87 5.87 0 0 0-2.13 1.39A5.87 5.87 0 0 0 .62 4.14c-.3.76-.5 1.63-.56 2.91C0 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.31.79.72 1.46 1.39 2.13a5.87 5.87 0 0 0 2.13 1.39c.76.3 1.63.5 2.91.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56a5.87 5.87 0 0 0 2.13-1.39 5.87 5.87 0 0 0 1.39-2.13c.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91a5.87 5.87 0 0 0-1.39-2.13A5.87 5.87 0 0 0 19.86.63c-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0z"
// //         />
// //         <path
// //           fill="#ffffff"
// //           d="M12 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4zM18.41 4.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z"
// //         />
// //       </svg>
// //     ),
// //   },
// //   {
// //     name: "YouTube",
// //     href: "https://youtube.com/@yourchannel",
// //     bg: "#FF0000",
// //     icon: (
// //       <svg viewBox="0 0 24 24" width="20" height="20" fill="#ffffff">
// //         <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.75 15.57V8.43L15.82 12z" />
// //       </svg>
// //     ),
// //   },
// //   {
// //     name: "LinkedIn",
// //     href: "https://linkedin.com/in/yourprofile",
// //     bg: "#0A66C2",
// //     icon: (
// //       <svg viewBox="0 0 24 24" width="18" height="18" fill="#ffffff">
// //         <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.15 1.45-2.15 2.94v5.66H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56z" />
// //       </svg>
// //     ),
// //   },
// //   {
// //     name: "Facebook",
// //     href: "https://facebook.com/yourpage",
// //     bg: "#1877F2",
// //     icon: (
// //       <svg viewBox="0 0 24 24" width="18" height="18" fill="#ffffff">
// //         <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.62.77-1.62 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
// //       </svg>
// //     ),
// //   },
// // ];

// // export default function FloatingSocials() {
// //   return (
// //     <div className="fixed right-4 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-3">
// //       {socials.map(({ name, href, icon, bg }) => (
// //         <Link
// //           key={name}
// //           href={href}
// //           target="_blank"
// //           rel="noopener noreferrer"
// //           aria-label={name}
// //           style={{ background: bg }}
// //           className="flex h-11 w-11 items-center justify-center rounded-full shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
// //         >
// //           {icon}
// //         </Link>
// //       ))}
// //     </div>
// //   );
// // }

// "use client";

// import Link from "next/link";

// const socials = [
//   {
//     name: "Instagram",
//     href: "https://instagram.com/yourhandle",
//     bg: null, // background is now painted inside the SVG itself
//     icon: (
//       <svg viewBox="0 0 44 44" width="44" height="44">
//         <defs>
//           <linearGradient id="instagramGradient" x1="0%" y1="100%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="#FFDD55" />
//             <stop offset="30%" stopColor="#FF543E" />
//             <stop offset="60%" stopColor="#C837AB" />
//             <stop offset="100%" stopColor="#5851DB" />
//           </linearGradient>
//         </defs>
//         <circle cx="22" cy="22" r="22" fill="url(#instagramGradient)" />
//         <g transform="translate(12, 12) scale(0.83)">
//           <path
//             fill="#ffffff"
//             d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.56a5.87 5.87 0 0 0-2.13 1.39A5.87 5.87 0 0 0 .62 4.14c-.3.76-.5 1.63-.56 2.91C0 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.31.79.72 1.46 1.39 2.13a5.87 5.87 0 0 0 2.13 1.39c.76.3 1.63.5 2.91.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56a5.87 5.87 0 0 0 2.13-1.39 5.87 5.87 0 0 0 1.39-2.13c.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91a5.87 5.87 0 0 0-1.39-2.13A5.87 5.87 0 0 0 19.86.63c-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0z"
//           />
//           <path
//             fill="#ffffff"
//             d="M12 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4zM18.41 4.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z"
//           />
//         </g>
//       </svg>
//     ),
//   },
//   {
//     name: "YouTube",
//     href: "https://youtube.com/@yourchannel",
//     bg: "#FF0000",
//     icon: (
//       <svg viewBox="0 0 24 24" width="20" height="20" fill="#ffffff">
//         <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.75 15.57V8.43L15.82 12z" />
//       </svg>
//     ),
//   },
//   {
//     name: "LinkedIn",
//     href: "https://linkedin.com/in/yourprofile",
//     bg: "#0A66C2",
//     icon: (
//       <svg viewBox="0 0 24 24" width="18" height="18" fill="#ffffff">
//         <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.15 1.45-2.15 2.94v5.66H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56z" />
//       </svg>
//     ),
//   },
//   {
//     name: "Facebook",
//     href: "https://facebook.com/yourpage",
//     bg: "#1877F2",
//     icon: (
//       <svg viewBox="0 0 24 24" width="18" height="18" fill="#ffffff">
//         <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.62.77-1.62 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
//       </svg>
//     ),
//   },
// ];

// export default function FloatingSocials() {
//   return (
//     <div className="fixed right-4 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-3">
//       {socials.map(({ name, href, icon, bg }) => (
//         <Link
//           key={name}
//           href={href}
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label={name}
//           style={bg ? { background: bg } : undefined}
//           className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
//         >
//           {icon}
//         </Link>
//       ))}
//     </div>
//   );
// }


"use client";

import Link from "next/link";

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/rajmeditation?igsh=dngxbGI2anU4emFm&utm_source=qr",
    bg: null,
    icon: (
      <svg viewBox="0 0 44 44" width="44" height="44">
        <defs>
          <linearGradient id="instagramGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFDD55" />
            <stop offset="30%" stopColor="#FF543E" />
            <stop offset="60%" stopColor="#C837AB" />
            <stop offset="100%" stopColor="#5851DB" />
          </linearGradient>
        </defs>
        <circle cx="22" cy="22" r="22" fill="url(#instagramGradient)" />
        <g transform="translate(12, 12) scale(0.83)">
          <path
            fill="#ffffff"
            d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.56a5.87 5.87 0 0 0-2.13 1.39A5.87 5.87 0 0 0 .62 4.14c-.3.76-.5 1.63-.56 2.91C0 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.31.79.72 1.46 1.39 2.13a5.87 5.87 0 0 0 2.13 1.39c.76.3 1.63.5 2.91.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56a5.87 5.87 0 0 0 2.13-1.39 5.87 5.87 0 0 0 1.39-2.13c.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91a5.87 5.87 0 0 0-1.39-2.13A5.87 5.87 0 0 0 19.86.63c-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0z"
          />
          <path
            fill="#ffffff"
            d="M12 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4zM18.41 4.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z"
          />
        </g>
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCkg_00o4qZyzbbes3JJRibA",
    bg: "#FF0000",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="#ffffff">
        <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.75 15.57V8.43L15.82 12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/lt-col-rajesh-sharma-retd-06b4621b7?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    bg: "#0A66C2",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="#ffffff">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.15 1.45-2.15 2.94v5.66H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/CRmentalhealthservices",
    bg: "#1877F2",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="#ffffff">
        <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.62.77-1.62 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
      </svg>
    ),
  },
];

export default function FloatingSocials() {
  return (
    <div className="fixed right-4 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-3">
      {socials.map(({ name, href, icon, bg }) => (
        <Link
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="group relative flex h-11 w-11 items-center justify-center"
        >
          {/* tooltip */}
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-primary-dark px-3 py-1.5 text-sm text-white opacity-0 shadow-md transition-all duration-200 group-hover:opacity-100 group-hover:mr-4">
            {name}
          </span>

          {/* icon circle */}
          <span
            style={bg ? { background: bg } : undefined}
            className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full shadow-md transition group-hover:-translate-y-0.5 group-hover:shadow-lg"
          >
            {icon}
          </span>
        </Link>
      ))}
    </div>
  );
}