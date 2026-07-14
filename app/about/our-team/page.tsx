import Section from "@/components/Section";
import { buildMetadata } from "@/lib/seo/metadata";
import { BreadcrumbJsonLd } from "@/lib/seo/jsonld";
import { team } from "@/lib/data/about";

export const metadata = buildMetadata({
  title: "Our Team",
  description: "Meet the team at Chaitanya Raj Psychology & Counselling in Vashi, Navi Mumbai.",
  path: "/about/our-team"
});

export default function OurTeamPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }, { name: "Our Team", path: "/about/our-team" }]} />
      <Section eyebrow="About" title="Our Team">
        <div className="grid sm:grid-cols-2 gap-6">
          {team.map((member) => (
            <div key={member.name} className="card p-6">
              <p className="text-xl font-display text-primary-dark">{member.name}</p>
              <p className="eyebrow mt-1 mb-3">{member.role}</p>
              <p className="text-ink-soft leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-ink-soft/60 mt-6">
          Placeholder entries — replace with real team member names, roles, and bios before launch.
        </p>
      </Section>
    </>
  );
}
