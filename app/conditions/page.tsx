// import Section from "@/components/Section";
// import ConditionCard from "@/components/ConditionCard";
// import { conditions } from "@/lib/data/conditions";
// import { buildMetadata } from "@/lib/seo/metadata";

// export const metadata = buildMetadata({
//   title: "Conditions We Treat | Psychologist in Navi Mumbai",
//   description:
//     "Anxiety, depression, stress, trauma, grief and more — explore the conditions treated at our Vashi, Navi Mumbai practice.",
//   path: "/conditions"
// });

// export default function ConditionsPage() {
//   return (
//     <Section eyebrow="Conditions" title="What we help with">
//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {conditions.map((c) => (
//           <ConditionCard key={c.slug} condition={c} />
//         ))}
//       </div>
//     </Section>
//   );
// }



import Section from "@/components/Section";
import ConditionCard from "@/components/ConditionCard";
import { conditions } from "@/lib/data/conditions";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Conditions We Treat | Psychologist in Navi Mumbai",
  description:
    "Anxiety, depression, stress, trauma, grief and more — explore the conditions treated at our Vashi, Navi Mumbai practice.",
  path: "/conditions"
});

export default function ConditionsPage() {
  const individualConditions = conditions.filter((c) => c.audience !== "corporate");
  const corporateConditions = conditions.filter((c) => c.audience === "corporate");

  return (
    <>
      <Section eyebrow="For Individuals" title="What we help with">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {individualConditions.map((c) => (
            <ConditionCard key={c.slug} condition={c} />
          ))}
        </div>
      </Section>

      {corporateConditions.length > 0 && (
        <Section eyebrow="For Organisations" title="What we help with at work">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {corporateConditions.map((c) => (
              <ConditionCard key={c.slug} condition={c} />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}