// // // // import type { Config } from "tailwindcss";

// // // // const config: Config = {
// // // //   content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
// // // //   theme: {
// // // //     extend: {
// // // //       colors: {
// // // //         bg: "#EEEFE6",
// // // //         surface: "#FFFFFF",
// // // //         "surface-soft": "#F7F6EF",
// // // //         ink: "#232A24",
// // // //         "ink-soft": "#4B564C",
// // // //         primary: "#34523F",
// // // //         "primary-dark": "#22362A",
// // // //         accent: "#9C5B3C",
// // // //         gold: "#B99457"
// // // //       },
// // // //       fontFamily: {
// // // //         display: ["var(--font-fraunces)", "serif"],
// // // //         body: ["var(--font-public-sans)", "sans-serif"],
// // // //         mono: ["var(--font-plex-mono)", "monospace"]
// // // //       },
// // // //       borderRadius: {
// // // //         organic: "60% 40% 55% 45% / 45% 55% 40% 60%"
// // // //       },
// // // //       keyframes: {
// // // //         breathe: {
// // // //           "0%, 100%": { transform: "scale(0.86)", opacity: "0.55" },
// // // //           "50%": { transform: "scale(1)", opacity: "0.9" }
// // // //         },
// // // //         breatheRing: {
// // // //           "0%, 100%": { transform: "scale(1)", opacity: "0.35" },
// // // //           "50%": { transform: "scale(1.18)", opacity: "0.08" }
// // // //         }
// // // //       },
// // // //       animation: {
// // // //         breathe: "breathe 8s ease-in-out infinite",
// // // //         breatheRing: "breatheRing 8s ease-in-out infinite"
// // // //       }
// // // //     }
// // // //   },
// // // //   plugins: []
// // // // };
// // // // export default config;



// // // import type { Config } from "tailwindcss";

// // // const config: Config = {
// // //   content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
// // //   theme: {
// // //     extend: {
// // //       colors: {
// // //         // -- updated palette: away from cream + terracotta, toward a deeper
// // //         // ink-green / brass direction (previous values kept as comments) --
// // //         bg: "#F1F1EA",              // was #EEEFE6
// // //         surface: "#FFFFFF",          // unchanged
// // //         "surface-soft": "#E9ECE4",   // was #F7F6EF
// // //         ink: "#1B231F",              // was #232A24
// // //         "ink-soft": "#5B6961",       // was #4B564C
// // //         primary: "#24463A",          // was #34523F
// // //         "primary-dark": "#152A22",   // was #22362A
// // //         accent: "#A9713C",           // was #9C5B3C
// // //         gold: "#C6A15B"              // was #B99457
// // //       },
// // //       fontFamily: {
// // //         display: ["var(--font-fraunces)", "serif"],
// // //         body: ["var(--font-public-sans)", "sans-serif"],
// // //         mono: ["var(--font-plex-mono)", "monospace"]
// // //       },
// // //       borderRadius: {
// // //         organic: "60% 40% 55% 45% / 45% 55% 40% 60%"
// // //       },
// // //       keyframes: {
// // //         breathe: {
// // //           "0%, 100%": { transform: "scale(0.86)", opacity: "0.55" },
// // //           "50%": { transform: "scale(1)", opacity: "0.9" }
// // //         },
// // //         breatheRing: {
// // //           "0%, 100%": { transform: "scale(1)", opacity: "0.35" },
// // //           "50%": { transform: "scale(1.18)", opacity: "0.08" }
// // //         },
// // //         // new: powers the small orbiting marker on the Hero's breathing ring
// // //         drift: {
// // //           "0%, 100%": { transform: "translateY(0)" },
// // //           "50%": { transform: "translateY(-4px)" }
// // //         }
// // //       },
// // //       animation: {
// // //         breathe: "breathe 8s ease-in-out infinite",
// // //         breatheRing: "breatheRing 8s ease-in-out infinite",
// // //         drift: "drift 5s ease-in-out infinite"
// // //       }
// // //     }
// // //   },
// // //   plugins: []
// // // };
// // // export default config;

// // import type { Config } from "tailwindcss";

// // const config: Config = {
// //   content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
// //   theme: {
// //     extend: {
// //       colors: {
// //         // -- cool, minimal, "clinical" direction: calm slate-blues and greys,
// //         // light background kept. Previous (earthy green/brass) values kept
// //         // as comments so the full history is visible in one place. --
// //         bg: "#F3F5F6",              // was #F1F1EA, before that #EEEFE6
// //         surface: "#FFFFFF",          // unchanged
// //         "surface-soft": "#E7ECEE",   // was #E9ECE4, before that #F7F6EF
// //         ink: "#1D272B",              // was #1B231F, before that #232A24
// //         "ink-soft": "#57676C",       // was #5B6961, before that #4B564C
// //         primary: "#2E4A56",          // was #24463A, before that #34523F
// //         "primary-dark": "#1C2E36",   // was #152A22, before that #22362A
// //         accent: "#3E6E80",           // was #A9713C, before that #9C5B3C
// //         // token still named "gold" for backward compatibility with existing
// //         // classNames (bg-gold, text-gold, border-gold) — now holds a muted
// //         // slate-blue highlight rather than an actual gold tone. Worth a
// //         // find/replace rename to e.g. "highlight" if you touch those files.
// //         gold: "#7C99A3"              // was #C6A15B, before that #B99457
// //       },
// //       fontFamily: {
// //         display: ["var(--font-fraunces)", "serif"],
// //         body: ["var(--font-public-sans)", "sans-serif"],
// //         mono: ["var(--font-plex-mono)", "monospace"]
// //       },
// //       borderRadius: {
// //         organic: "60% 40% 55% 45% / 45% 55% 40% 60%"
// //       },
// //       keyframes: {
// //         breathe: {
// //           "0%, 100%": { transform: "scale(0.86)", opacity: "0.55" },
// //           "50%": { transform: "scale(1)", opacity: "0.9" }
// //         },
// //         breatheRing: {
// //           "0%, 100%": { transform: "scale(1)", opacity: "0.35" },
// //           "50%": { transform: "scale(1.18)", opacity: "0.08" }
// //         },
// //         // new: powers the small orbiting marker on the Hero's breathing ring
// //         drift: {
// //           "0%, 100%": { transform: "translateY(0)" },
// //           "50%": { transform: "translateY(-4px)" }
// //         }
// //       },
// //       animation: {
// //         breathe: "breathe 8s ease-in-out infinite",
// //         breatheRing: "breatheRing 8s ease-in-out infinite",
// //         drift: "drift 5s ease-in-out infinite"
// //       }
// //     }
// //   },
// //   plugins: []
// // };
// // export default config;


// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         // -- calm + happy direction: a richer, more saturated teal as the
//         // confident "calm" anchor (pale/muted reads as tired, not calm),
//         // paired with a warm coral/gold accent for genuine optimism. The
//         // background is warmed slightly off pure white/grey so surfaces
//         // don't collapse into each other. Full history kept as comments. --
//         bg: "#EEF3F1",              // was #F3F5F6, before #F1F1EA, before #EEEFE6
//         surface: "#FFFFFF",          // unchanged
//         "surface-soft": "#DCEAE4",   // was #E7ECEE — now a real mint tint, not near-white, so section bands actually read as a different surface
//         ink: "#16302E",              // was #1D272B, before #1B231F, before #232A24
//         "ink-soft": "#4C6864",       // was #57676C, before #5B6961, before #4B564C
//         primary: "#1F5C56",          // was #2E4A56 — richer, more saturated teal (the calm anchor)
//         "primary-dark": "#123A36",   // was #1C2E36
//         accent: "#E0794F",           // was #3E6E80 — warm coral, the deliberate "happy" pop against the teal
//         gold: "#F0B860"              // was #7C99A3 — genuine warm gold highlight, not a blue standing in for gold
//       },
//       fontFamily: {
//         display: ["var(--font-fraunces)", "serif"],
//         body: ["var(--font-public-sans)", "sans-serif"],
//         mono: ["var(--font-plex-mono)", "monospace"]
//       },
//       borderRadius: {
//         organic: "60% 40% 55% 45% / 45% 55% 40% 60%"
//       },
//       keyframes: {
//         breathe: {
//           "0%, 100%": { transform: "scale(0.86)", opacity: "0.55" },
//           "50%": { transform: "scale(1)", opacity: "0.9" }
//         },
//         breatheRing: {
//           "0%, 100%": { transform: "scale(1)", opacity: "0.35" },
//           "50%": { transform: "scale(1.18)", opacity: "0.08" }
//         },
//         // new: powers the small orbiting marker on the Hero's breathing ring
//         drift: {
//           "0%, 100%": { transform: "translateY(0)" },
//           "50%": { transform: "translateY(-4px)" }
//         }
//       },
//       animation: {
//         breathe: "breathe 8s ease-in-out infinite",
//         breatheRing: "breatheRing 8s ease-in-out infinite",
//         drift: "drift 5s ease-in-out infinite"
//       }
//     }
//   },
//   plugins: []
// };
// export default config;


import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],

  theme: {
    extend: {
      colors: {
        bg: "#EEF3F1",
        surface: "#FFFFFF",
        "surface-soft": "#DCEAE4",
        ink: "#16302E",
        "ink-soft": "#4C6864",
        primary: "#1F5C56",
        "primary-dark": "#123A36",
        accent: "#E0794F",
        gold: "#F0B860"
      },

      // colors: {
      //   bg: "#F4FCFB",
      //   surface: "#FFFFFF",
      //   "surface-soft": "#D6F5F0",
      //   ink: "#152526",
      //   "ink-soft": "#476362",
      //   primary: "#00B8A9",
      //   "primary-dark": "#008C80",
      //   accent: "#E4306F",
      //   gold: "#FFD23F"
      // },

      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-public-sans)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"]
      },

      borderRadius: {
        organic: "60% 40% 55% 45% / 45% 55% 40% 60%"
      },

      keyframes: {
        breathe: {
          "0%, 100%": {
            transform: "scale(0.86)",
            opacity: "0.55"
          },
          "50%": {
            transform: "scale(1)",
            opacity: "0.9"
          }
        },

        breatheRing: {
          "0%, 100%": {
            transform: "scale(1)",
            opacity: "0.35"
          },
          "50%": {
            transform: "scale(1.18)",
            opacity: "0.08"
          }
        },

        drift: {
          "0%, 100%": {
            transform: "translateY(0)"
          },
          "50%": {
            transform: "translateY(-4px)"
          }
        },

        // Marquee animation
        marquee: {
          "0%": {
            transform: "translateX(0)"
          },
          "100%": {
            transform: "translateX(-50%)"
          }
        }
      },

      animation: {
        breathe: "breathe 8s ease-in-out infinite",
        breatheRing: "breatheRing 8s ease-in-out infinite",
        drift: "drift 5s ease-in-out infinite",

        // Marquee animation
        marquee: "marquee 40s linear infinite"
      }
    }
  },

  plugins: []
};

export default config;