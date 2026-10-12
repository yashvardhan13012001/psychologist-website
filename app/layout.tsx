// import type { Metadata } from "next";
// import { Fraunces, Public_Sans, IBM_Plex_Mono } from "next/font/google";
// import "./globals.css";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import FloatingSocials from "@/components/Floatingocials";
// import { LocalBusinessJsonLd } from "@/lib/seo/jsonld";
// import { site } from "@/lib/data/site";
// import Script from "next/script";

// const fraunces = Fraunces({
//   subsets: ["latin"],
//   variable: "--font-fraunces",
//   weight: ["400", "500", "600"],
//   style: ["normal", "italic"],
//   display: "swap"
// });

// const publicSans = Public_Sans({
//   subsets: ["latin"],
//   variable: "--font-public-sans",
//   weight: ["400", "500", "600", "700"],
//   display: "swap"
// });

// const plexMono = IBM_Plex_Mono({
//   subsets: ["latin"],
//   variable: "--font-plex-mono",
//   weight: ["400", "500"],
//   display: "swap"
// });

// export const metadata: Metadata = {
//   metadataBase: new URL(site.url),
//   title: {
//     default: `${site.name} | Psychologist in Navi Mumbai`,
//     template: `%s | ${site.shortName}`
//   },
//   description: site.description,
//   openGraph: {
//     type: "website",
//     siteName: site.name,
//     locale: "en_IN"
//   }
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en" className={`${fraunces.variable} ${publicSans.variable} ${plexMono.variable}`}>
//     <head>
//   <Script
//     src="https://www.googletagmanager.com/gtag/js?id=G-NRB8977V2M"
//     strategy="afterInteractive"
//   />
//   <Script id="google-analytics" strategy="afterInteractive">
//     {`
//       window.dataLayer = window.dataLayer || [];
//       function gtag(){dataLayer.push(arguments);}
//       gtag('js', new Date());
//       gtag('config', 'G-NRB8977V2M');
//     `}
//   </Script>
// </head>
//       <body>
//         <LocalBusinessJsonLd />
//         <Header />
//         <main>{children}</main>
//         <Footer />
//         <FloatingSocials />
//       </body>
//     </html>
//   );
// }



import type { Metadata } from "next";
import { Fraunces, Public_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingSocials from "@/components/Floatingocials";
import { LocalBusinessJsonLd } from "@/lib/seo/jsonld";
import { site } from "@/lib/data/site";
import Script from "next/script";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Psychologist in Navi Mumbai`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${publicSans.variable} ${plexMono.variable}`}
    >
      <head>
        <Script
          id="google-analytics"
          strategy="beforeInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-NRB8977V2M"
        />

        <Script
          id="google-analytics-config"
          strategy="beforeInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NRB8977V2M');
          `}
        </Script>
      </head>

      <body>
        <LocalBusinessJsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingSocials />
      </body>
    </html>
  );
}
