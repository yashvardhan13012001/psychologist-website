import { site } from "@/lib/data/site";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        name: site.name,
        image: `${site.url}/og-default.jpg`,
        url: site.url,
        telephone: site.phone,
        email: site.email,
        priceRange: "₹₹",
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          addressLocality: "Navi Mumbai",
          addressRegion: site.address.region,
          postalCode: site.address.postalCode,
          addressCountry: site.address.country
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: site.geo.lat,
          longitude: site.geo.lng
        },
        openingHours: "Mo-Sa 10:00-19:00",
        sameAs: [site.social.facebook, site.social.instagram, site.social.linkedin]
      }}
    />
  );
}

export function PersonJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Person",
        name: site.founder,
        jobTitle: "Clinical Hypnotherapist & Counselling Psychologist",
        worksFor: { "@type": "Organization", name: site.name },
        url: `${site.url}/about`
      }}
    />
  );
}

export function BreadcrumbJsonLd({
  items
}: {
  items: { name: string; path: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: `${site.url}${item.path}`
        }))
      }}
    />
  );
}

export function FAQJsonLd({
  items
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer }
        }))
      }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  path,
  datePublished,
  author
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  author: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        url: `${site.url}${path}`,
        datePublished,
        author: { "@type": "Organization", name: author },
        publisher: {
          "@type": "Organization",
          name: site.name,
          logo: { "@type": "ImageObject", url: `${site.url}/logo.png` }
        }
      }}
    />
  );
}

export function MedicalTherapyJsonLd({
  name,
  description,
  path
}: {
  name: string;
  description: string;
  path: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "MedicalTherapy",
        name,
        description,
        url: `${site.url}${path}`,
        provider: { "@type": "MedicalBusiness", name: site.name }
      }}
    />
  );
}
