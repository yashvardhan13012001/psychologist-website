import { Metadata } from "next";
import { site } from "@/lib/data/site";

type BuildMetadataArgs = {
  title: string;
  description: string;
  path: string; // e.g. "/conditions/anxiety"
  image?: string;
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path,
  image,
  noIndex
}: BuildMetadataArgs): Metadata {
  const url = `${site.url}${path}`;
  const ogImage = image ?? `${site.url}/og-default.jpg`;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale: "en_IN",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage]
    }
  };
}
