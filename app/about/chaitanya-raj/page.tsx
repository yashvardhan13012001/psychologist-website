import Section from "@/components/Section";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { BreadcrumbJsonLd } from "@/lib/seo/jsonld";
import { site } from "@/lib/data/site";

export const metadata = buildMetadata({
  title: "Chaitanya Raj",
  description: site.description,
  path: "/about/chaitanya-raj"
});

export default function ChaitanyaRajPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }, { name: "Chaitanya Raj", path: "/about/chaitanya-raj" }]} />
      <Section eyebrow="About" title="Chaitanya Raj">
        <div className="max-w-2xl space-y-6 text-ink-soft text-lg leading-relaxed">
          <p>
            {site.name} is a psychology and counselling practice based in {site.address.locality},
            combining evidence-based talk therapy with clinical hypnotherapy and specialised
            technique for clients who need it.
          </p>
          <p>
            The practice was built on the belief that structure and warmth aren&apos;t opposites —
            that a disciplined, methodical approach to therapy is what makes space for real
            change to happen at an unhurried, human pace.
          </p>
          <p>
            Replace this page with the practice&apos;s full mission, history, and values before
            launch.
          </p>
          <Link href="/contact" className="btn-primary inline-flex mt-4">Book a consultation</Link>
        </div>
      </Section>
    </>
  );
}
