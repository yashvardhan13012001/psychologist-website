const TONES = ["teal", "coral", "gold", "sky", "moss", "rose"] as const;
export type Tone = (typeof TONES)[number];

// Deterministic by slug — same idea your IconTile component uses for cards.
// If IconTile.tsx already exports a hashing function, swap this import for
// that one so cards and detail pages always agree on a condition's tone.
export function getTone(slug: string): Tone {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return TONES[hash % TONES.length];
}

// Splits off the first sentence for an editorial "lede" treatment.
export function splitLede(text: string): { lede: string; rest: string } {
  const match = text.match(/^(.*?[.!?])\s+([\s\S]*)$/);
  if (!match) return { lede: text, rest: "" };
  return { lede: match[1], rest: match[2] };
}