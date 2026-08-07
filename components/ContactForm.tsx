// "use client";

// import { useState } from "react";

// export default function ContactForm() {
//   const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
//   const [errorMsg, setErrorMsg] = useState("");

//   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     setStatus("loading");
//     setErrorMsg("");

//     const form = e.currentTarget;
//     const data = new FormData(form);

//     // Honeypot field — bots tend to fill every field, humans never see this one
//     if (data.get("company_website")) {
//       setStatus("success");
//       form.reset();
//       return;
//     }

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         body: JSON.stringify({
//           name: data.get("name"),
//           email: data.get("email"),
//           phone: data.get("phone"),
//           message: data.get("message")
//         }),
//         headers: { "Content-Type": "application/json" }
//       });

//       if (!res.ok) throw new Error("Something went wrong. Please try again.");

//       setStatus("success");
//       form.reset();
//     } catch (err) {
//       setStatus("error");
//       setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
//     }
//   }

//   if (status === "success") {
//     return (
//       <div className="card p-8 text-center">
//         <p className="font-display text-xl text-primary-dark mb-2">Message sent</p>
//         <p className="text-ink-soft">
//           Thank you for reaching out — we&apos;ll get back to you within one business day.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <form onSubmit={handleSubmit} className="card p-8 space-y-5">
//       {/* Honeypot — hidden from real users via CSS, left open for bots */}
//       <div className="absolute -left-[9999px]" aria-hidden="true">
//         <label htmlFor="company_website">Company Website</label>
//         <input type="text" id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
//       </div>

//       <div>
//         <label htmlFor="name" className="block text-sm text-ink-soft mb-1.5">
//           Name
//         </label>
//         <input
//           id="name"
//           name="name"
//           type="text"
//           required
//           className="w-full rounded-lg border border-primary/20 bg-surface-soft px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent/40"
//         />
//       </div>

//       <div className="grid sm:grid-cols-2 gap-5">
//         <div>
//           <label htmlFor="email" className="block text-sm text-ink-soft mb-1.5">
//             Email
//           </label>
//           <input
//             id="email"
//             name="email"
//             type="email"
//             required
//             className="w-full rounded-lg border border-primary/20 bg-surface-soft px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent/40"
//           />
//         </div>
//         <div>
//           <label htmlFor="phone" className="block text-sm text-ink-soft mb-1.5">
//             Phone (optional)
//           </label>
//           <input
//             id="phone"
//             name="phone"
//             type="tel"
//             className="w-full rounded-lg border border-primary/20 bg-surface-soft px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent/40"
//           />
//         </div>
//       </div>

//       <div>
//         <label htmlFor="message" className="block text-sm text-ink-soft mb-1.5">
//           What would you like to talk about?
//         </label>
//         <textarea
//           id="message"
//           name="message"
//           rows={5}
//           required
//           className="w-full rounded-lg border border-primary/20 bg-surface-soft px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent/40"
//         />
//       </div>

//       {status === "error" && <p className="text-sm text-accent">{errorMsg}</p>}

//       <button type="submit" disabled={status === "loading"} className="btn-primary w-full sm:w-auto">
//         {status === "loading" ? "Sending..." : "Send message"}
//       </button>
//       <p className="text-xs text-ink-soft/70">
//         Everything shared here is confidential. If this is a medical emergency, please contact
//         your nearest emergency services directly rather than using this form.
//       </p>
//     </form>
//   );
// }



"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot field — bots tend to fill every field, humans never see this one
    if (data.get("company_website")) {
      setStatus("success");
      form.reset();
      return;
    }

    // Web3Forms required fields
    data.append("access_key", "253f695e-143f-4cf8-9691-0cc3f34ba2ce");
    data.append("subject", `New contact form submission from ${data.get("name")}`);
    data.append("from_name", "Chaitanya Raj Psychology & Counselling — Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data, // sent as multipart/form-data — no JSON headers needed
      });

      const result = await res.json();

      if (!result.success) {
        throw new Error(result.message || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="card p-8 text-center">
        <p className="font-display text-xl text-primary-dark mb-2">Message sent</p>
        <p className="text-ink-soft">
          Thank you for reaching out — we&apos;ll get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-8 space-y-5">
      {/* Honeypot — hidden from real users via CSS, left open for bots */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="company_website">Company Website</label>
        <input type="text" id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className="block text-sm text-ink-soft mb-1.5">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-lg border border-primary/20 bg-surface-soft px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent/40"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm text-ink-soft mb-1.5">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-primary/20 bg-surface-soft px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent/40"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm text-ink-soft mb-1.5">
            Phone (optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-lg border border-primary/20 bg-surface-soft px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent/40"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-ink-soft mb-1.5">
          What would you like to talk about?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-lg border border-primary/20 bg-surface-soft px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent/40"
        />
      </div>

      {status === "error" && <p className="text-sm text-accent">{errorMsg}</p>}

      <button type="submit" disabled={status === "loading"} className="btn-primary w-full sm:w-auto">
        {status === "loading" ? "Sending..." : "Send message"}
      </button>
      <p className="text-xs text-ink-soft/70">
        Everything shared here is confidential. If this is a medical emergency, please contact
        your nearest emergency services directly rather than using this form.
      </p>
    </form>
  );
}