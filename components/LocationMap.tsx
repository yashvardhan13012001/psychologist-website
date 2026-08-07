"use client";

import { useState } from "react";
import { site } from "@/lib/data/site";

export default function LocationMap() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = site.locations[activeIndex];

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="space-y-6 text-ink-soft">
        <div>
          <p className="eyebrow">Phone</p>
          <a href={`tel:${site.phone}`} className="hover:text-accent">
            {site.phoneDisplay}
          </a>
        </div>

        <div>
          <p className="eyebrow">Email</p>
          <a href={`mailto:${site.email}`} className="hover:text-accent">
            {site.email}
          </a>
        </div>

        <div>
          <p className="eyebrow">Hours</p>
          <p>{site.hours}</p>
        </div>

        <div className="flex gap-3 pt-2">
          {site.locations.map((loc, i) => (
            <button
              key={loc.name}
              onClick={() => setActiveIndex(i)}
              className={`rounded-full px-5 py-2 text-sm transition ${
                i === activeIndex
                  ? "bg-primary-dark text-white"
                  : "border border-primary-dark/20 text-ink-soft hover:border-primary-dark/40"
              }`}
            >
              {loc.name}
            </button>
          ))}
        </div>

        <div>
          <p className="eyebrow">{active.name}</p>
          <p>
            {active.address.street}<br />
            {active.address.locality}, {active.address.region} {active.address.postalCode}
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-primary/10 aspect-[4/3]">
        <iframe
          key={active.name}
          title={`${active.name} location map`}
          src={`https://www.google.com/maps?q=${active.geo.lat},${active.geo.lng}&z=17&output=embed`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        />
      </div>
    </div>
  );
}