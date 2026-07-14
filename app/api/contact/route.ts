import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiter (per server instance).
// For production on Vercel, swap this for a durable store (Upstash Redis, etc.)
// since serverless instances don't share memory.
const submissions = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 3;

function isRateLimited(ip: string) {
  const now = Date.now();
  const timestamps = (submissions.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  submissions.set(ip, timestamps);
  return timestamps.length > MAX_PER_WINDOW;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests. Please try again shortly." }, { status: 429 });
  }

  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, phone, message } = body as Record<string, string>;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  // TODO: wire this up to your actual delivery method — e.g. Resend, SendGrid,
  // or forwarding into Google Sheets like the gaming-cafe app's Apps Script webhook.
  console.log("New contact submission:", { name, email, phone, message });

  return NextResponse.json({ ok: true });
}
