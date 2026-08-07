export const dynamic = "force-dynamic";

import Link from "next/link";
import Image from "next/image";
import Section from "@/components/Section";
import PlaceholderImage from "@/components/PlaceholderImage";
import { buildMetadata } from "@/lib/seo/metadata";
import { getPublishedPosts, BlogPost } from "@/lib/firebase/blogs";

export const metadata = buildMetadata({
  title: "Blog",
  description: "Psychological wellbeing insights and articles from Chaitanya Raj Psychology & Counselling.",
  path: "/blog",
});

export default async function BlogListPage() {
  let posts: BlogPost[] = [];

  try {
    posts = await getPublishedPosts();
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
  }

  return (
    <Section eyebrow="Blog" title="Insights on psychological wellbeing">
      {posts.length === 0 ? (
        <p className="text-ink-soft">No posts published yet.</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-3xl border border-primary/10 bg-white transition hover:-translate-y-1 hover:shadow-xl"
            >
              {post.coverImageUrl ? (
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={post.coverImageUrl}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <PlaceholderImage label="Article" className="aspect-[4/3] w-full" />
              )}

              <div className="p-6">
                <p className="eyebrow">
                  {new Date(post.publishedDate).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <h2 className="mt-2 text-xl text-primary-dark">{post.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </Section>
  );
}