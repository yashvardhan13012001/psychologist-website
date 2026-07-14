import { notFound } from "next/navigation";
import Section from "@/components/Section";
import { blogPosts, getBlogPost } from "@/lib/data/blog";
import { buildMetadata } from "@/lib/seo/metadata";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/lib/seo/jsonld";
import { site } from "@/lib/data/site";
import Link from "next/link";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.metaDescription,
    path: `/blog/${post.slug}`
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` }
        ]}
      />
      <ArticleJsonLd
        title={post.title}
        description={post.metaDescription}
        path={`/blog/${post.slug}`}
        datePublished={post.date}
        author={post.author}
      />
      <Section>
        <article className="max-w-2xl mx-auto">
          <p className="eyebrow mb-3">
            {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
            {" · "}
            {post.readingTime}
          </p>
          <h1 className="text-3xl md:text-4xl mb-8">{post.title}</h1>
          <div className="space-y-5 text-ink-soft text-lg leading-relaxed">
            {post.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="mt-12 card p-6 flex items-center justify-between flex-wrap gap-4">
            <p className="text-ink-soft">
              Recognise this pattern in your own life? {site.shortName} can help.
            </p>
            <Link href="/contact" className="btn-primary whitespace-nowrap">
              Book a consultation
            </Link>
          </div>
        </article>
      </Section>
    </>
  );
}
