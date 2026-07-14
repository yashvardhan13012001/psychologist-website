import { MetadataRoute } from "next";
import { site } from "@/lib/data/site";
import { conditions } from "@/lib/data/conditions";
import { therapies } from "@/lib/data/therapies";
import { blogPosts } from "@/lib/data/blog";
import { trainingPrograms } from "@/lib/data/training";
import { caseStudies } from "@/lib/data/caseStudies";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/about/the-founder",
    "/about/chaitanya-raj",
    "/about/myths-and-facts-about-hypnotherapy",
    "/about/media-highlights",
    "/about/our-team",
    "/about/vastu-consultation",
    "/contact",
    "/conditions",
    "/therapies",
    "/training-and-mentorship",
    "/case-studies",
    "/blog",
    "/fees",
    "/faq",
    "/testimonials"
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7
  }));

  const conditionPages = conditions.map((c) => ({
    url: `${site.url}/conditions/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8
  }));

  const therapyPages = therapies.map((t) => ({
    url: `${site.url}/therapies/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8
  }));

  const blogPages = blogPosts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.6
  }));

  const trainingPages = trainingPrograms.map((t) => ({
    url: `${site.url}/training-and-mentorship/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6
  }));

  const caseStudyPages = caseStudies.map((c) => ({
    url: `${site.url}/case-studies/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.5
  }));

  return [
    ...staticPages,
    ...conditionPages,
    ...therapyPages,
    ...blogPages,
    ...trainingPages,
    ...caseStudyPages
  ];
}
