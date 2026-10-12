

export const dynamic = "force-dynamic";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import { buildMetadata } from "@/lib/seo/metadata";
import { ArticleJsonLd } from "@/lib/seo/jsonld";
import { getPostBySlug } from "@/lib/firebase/blogs";
import { conditions } from "@/lib/data/conditions";
import FAQAccordion from "@/components/FAQAccordion";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return buildMetadata({
      title: "Post Not Found",
      description: "This blog post could not be found.",
      path: `/blog/${params.slug}`,
    });
  }

  return buildMetadata({
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post || !post.published) {
    notFound();
  }

  const relatedConditions = (post.relatedConditions ?? [])
    .map((condSlug) => conditions.find((c) => c.slug === condSlug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  const faqs = post.faqs ?? [];

  const faqJsonLd =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.a,
            },
          })),
        }
      : null;

  return (
    <>
      <ArticleJsonLd
        title={post.metaTitle || post.title}
        description={post.metaDescription || post.excerpt}
        path={`/blog/${post.slug}`}
        datePublished={post.publishedDate}
        author="Chaitanya Raj Team"
      />

      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <Section eyebrow="Blog" title={post.title}>
        <p className="eyebrow mb-8">
          {new Date(post.publishedDate).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>

        {post.coverImageUrl && (
          <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden rounded-3xl">
            <Image src={post.coverImageUrl} alt={post.title} fill className="object-cover" />
          </div>
        )}

<div
  className="prose prose-lg max-w-none blog-content text-ink-soft prose-headings:text-primary-dark prose-a:text-accent"
  dangerouslySetInnerHTML={{ __html: post.content }}
/>

{faqs.length > 0 && (
  <div className="mt-16 border-t border-primary-dark/10 pt-10">
    <p className="eyebrow mb-6">Frequently asked questions</p>
    <FAQAccordion faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
  </div>
)}

        {relatedConditions.length > 0 && (
          <div className="mt-16 border-t border-primary-dark/10 pt-10">
            <p className="eyebrow mb-4">What can help</p>
            <div className="flex flex-wrap gap-3">
              {relatedConditions.map((condition) => (
                <Link
                  key={condition.slug}
                  href={`/conditions/${condition.slug}`}
                  className="inline-flex items-center rounded-full border border-primary-dark/20 bg-white px-5 py-2.5 text-sm font-medium text-primary-dark transition hover:bg-primary-dark hover:text-white"
                >
                  {condition.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Section>
    </>
  );
}