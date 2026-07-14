# Chaitanya Raj Psychology & Counselling — Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS. Built as a reusable, data-driven
SEO system: every "Condition", "Therapy" and "Blog Post" page is generated from a single
object in `lib/data/`, not hand-coded — so this same skeleton can be reused for future
client sites by swapping the data files and the Tailwind theme tokens.

## Quick start

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run start     # run the production build locally
```

Deploy: push to GitHub, import into Vercel, done. Static pages are pre-rendered at build
time (`generateStaticParams`), so hosting is essentially free at this scale.

## How the reusable SEO system works

- **`lib/data/*.ts`** — the single source of truth for content. Add a new condition,
  therapy, or blog post by adding one object to the array. The list page, the detail
  page, the sitemap, and the metadata all update automatically — nothing else to touch.
- **`lib/seo/metadata.ts`** — one function (`buildMetadata`) that every page calls to get
  consistent `<title>`, meta description, canonical URL, and Open Graph/Twitter tags.
- **`lib/seo/jsonld.tsx`** — structured data components: `LocalBusinessJsonLd` (site-wide,
  in the root layout), `PersonJsonLd`, `BreadcrumbJsonLd`, `FAQJsonLd`, `ArticleJsonLd`,
  `MedicalTherapyJsonLd`. Drop the relevant one into any new page type.
- **`app/sitemap.ts`** / **`app/robots.ts`** — use the Next.js Metadata API, generated
  dynamically from the same data files. No manual sitemap maintenance, ever.

### To reuse this scaffold for a different client
1. Update `lib/data/site.ts` (name, NAP, socials).
2. Replace the arrays in `conditions.ts` / `therapies.ts` / `blog.ts` with the new
   client's content.
3. Update the Tailwind tokens in `tailwind.config.ts` and the font imports in
   `app/layout.tsx` for a new visual identity — don't reuse the same palette/type
   pairing for two clients, per the design brief.

## Design system

- **Palette**: warm sage-linen background (`#EEEFE6`), deep pine green primary
  (`#34523F`), muted clay accent (`#9C5B3C`), soft dawn gold (`#B99457`) — deliberately
  avoiding the generic "cream + terracotta" AI-design default.
- **Type**: Fraunces (display serif, warm/humanist) + Public Sans (body) + IBM Plex Mono
  (eyebrow labels/captions, a small clinical touch that fits a psychology practice).
- **Signature element**: the slow-pulsing "breathing circle" in the homepage hero —
  an 8s inhale/exhale rhythm, tying the page's first impression directly to the
  grounding/mindfulness work the practice does. Respects `prefers-reduced-motion`.

## Still to do before launch

- [ ] Replace placeholder testimonials in `app/testimonials/page.tsx` with real,
      consented client quotes.
- [ ] Add real photography (`next/image`) — hero panel, founder photo, clinic space.
      Nothing here uses stock/scraped imagery.
- [ ] Wire `app/api/contact/route.ts` to an actual email delivery service (Resend,
      SendGrid) or a Google Sheets webhook, same pattern as the gaming café app.
      Currently it validates + rate-limits + logs, but doesn't send anywhere.
- [ ] Swap the in-memory rate limiter in the contact API for a durable store
      (Upstash Redis) before deploying to Vercel — serverless functions don't share
      memory across invocations.
- [ ] Have the actual privacy policy reviewed by a professional — the current one is a
      structural placeholder, not legal advice.
- [x] Full mega-menu navbar added, matching the requested structure: About, Issues,
      Therapies, Training and Mentorship, Blog, Case Studies, Contact — each with a
      hover dropdown on desktop and an accordion on mobile (`components/Header.tsx`).
      PLRT, SRT, Age Regression, Third Party Regression, Energy Exchange and Quantum
      Therapy are back in `lib/data/therapies.ts`, each framed with an honest note that
      they sit outside mainstream clinical psychology — review that framing with the
      client before launch.
- [ ] Replace placeholder content in `lib/data/about.ts` (founder bio detail, team
      members, media highlights, real BPS/certification references) and
      `lib/data/caseStudies.ts` (real, consented, anonymised case studies) before launch.
- [ ] Set up Google Analytics 4 + Search Console (add GA4 script to `app/layout.tsx`).
- [ ] Add real Open Graph images (`/public/og-default.jpg`, 1200×630) and a favicon/logo.
