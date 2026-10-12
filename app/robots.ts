// import { MetadataRoute } from "next";
// import { site } from "@/lib/data/site";

// export default function robots(): MetadataRoute.Robots {
//   return {
//     rules: {
//       userAgent: "*",
//       allow: "/",
//       disallow: ["/api/", "/privacy-policy"]
//     },
//     sitemap: `${site.url}/sitemap.xml`
//   };
// }



import { MetadataRoute } from "next";
import { site } from "@/lib/data/site";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = site.url.replace(/\/$/, "");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },

    sitemap: `${baseUrl}/sitemap.xml`,
  };
}