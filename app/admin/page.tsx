import Link from "next/link";
import AdminGuard from "./AdminGuard";

const adminSections = [
  {
    title: "Events",
    description: "Create and manage events, workshops, and sessions.",
    href: "/admin/events",
  },
  {
    title: "Gallery",
    description: "Manage event photos and visual highlights.",
    href: "/admin/gallery",
  },
  {
    title: "Blogs",
    description: "Create, edit, and publish articles.",
    href: "/admin/blogs",
  },
];

export default function AdminDashboard() {
    return (
      <AdminGuard>
    <main className="min-h-screen bg-sand px-6 py-10 md:px-10">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Administration</p>

            <h1 className="mt-3 text-5xl text-primary-dark">
              Dashboard
            </h1>

            <p className="mt-4 max-w-xl text-lg text-ink-soft">
              Manage the content and experiences across Chaitanya Raj.
            </p>
          </div>

          <Link
            href="/"
            className="hidden rounded-full border border-primary-dark/20 px-5 py-3 text-sm font-medium text-primary-dark transition hover:bg-white md:inline-flex"
          >
            View Website
          </Link>
        </div>

        {/* STAT CARDS */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">

          {adminSections.map((section) => (
            <Link
              key={section.title}
              href={section.href}
              className="group rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm uppercase tracking-widest text-primary/70">
                    Manage
                  </p>

                  <h2 className="mt-4 text-3xl text-primary-dark">
                    {section.title}
                  </h2>
                </div>

                <span className="text-2xl text-primary transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>

              <p className="mt-6 leading-relaxed text-ink-soft">
                {section.description}
              </p>
            </Link>
          ))}

        </div>

        {/* QUICK INFO */}
        <div className="mt-12 rounded-3xl bg-primary-dark p-8 text-white md:p-10">
          <p className="eyebrow text-white/60">
            Content management
          </p>

          <h2 className="mt-4 max-w-2xl text-3xl text-white md:text-4xl">
            Everything you need to keep the website current.
          </h2>

          <p className="mt-5 max-w-2xl leading-relaxed text-white/70">
            Use the admin dashboard to publish upcoming events, add images to
            the gallery, and share new psychological wellbeing insights through
            the blog.
          </p>
        </div>

      </div>
    </main>
    </AdminGuard>
  );
}