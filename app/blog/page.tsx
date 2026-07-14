import Link from "next/link";
import Section from "@/components/Section";
import { blogPosts } from "@/lib/data/blog";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Blog | Psychology & Mental Health Insights",
  description:
    "Practical, evidence-based articles on anxiety, depression, relationships and mental wellbeing from Chaitanya Raj Psychology & Counselling.",
  path: "/blog"
});

export default function BlogPage() {
  return (
    <Section eyebrow="Reading" title="From the practice">
      <div className="grid md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="card p-6 flex flex-col gap-3">
            <p className="font-mono text-xs text-ink-soft/70">
              {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
              {" · "}
              {post.readingTime}
            </p>
            <h2 className="text-2xl font-display text-primary-dark">{post.title}</h2>
            <p className="text-ink-soft leading-relaxed">{post.excerpt}</p>
            <span className="font-mono text-xs uppercase tracking-widest text-accent mt-1">Read →</span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
