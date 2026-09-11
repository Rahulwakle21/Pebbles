import { Resend } from "resend";
import { NextResponse } from "next/server";
import {
  buildLeadEmailContent,
  parseLeadFormPayload,
  validateLeadForm,
} from "@/lib/lead-form";

const DEFAULT_TO_EMAIL = "r.wakle21@gmail.com";
const DEFAULT_FROM_EMAIL = "Pebbles Leads <onboarding@resend.dev>";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const payload = parseLeadFormPayload(body);
  if (!payload) {
    return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
  }

  // Honeypot (_hp) — silently accept so bots don't retry.
  if (payload.website) {
    return NextResponse.json({ ok: true });
  }

  const errors = validateLeadForm(payload);
  if (Object.keys(errors).length > 0) {
    const firstMessage =
      errors.name ?? errors.phone ?? errors.email ?? "Please check the form and try again.";
    return NextResponse.json({ error: firstMessage, fields: errors }, { status: 400 });
  }

  const toEmail = process.env.CONTACT_TO_EMAIL ?? DEFAULT_TO_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? DEFAULT_FROM_EMAIL;
  const { subject, text } = buildLeadEmailContent(payload);

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const emailMode = process.env.CONTACT_EMAIL_MODE?.trim().toLowerCase();

  // Local testing without a Resend account — logs the enquiry to the server console.
  if (!apiKey && emailMode === "log") {
    console.info("[contact] Lead enquiry (CONTACT_EMAIL_MODE=log — no email sent):");
    console.info(`  To: ${toEmail}`);
    console.info(`  Subject: ${subject}`);
    console.info(text);
    return NextResponse.json({ ok: true, mode: "log" });
  }

  if (!apiKey) {
    console.error(
      "RESEND_API_KEY is not configured. Add it to .env.local or set CONTACT_EMAIL_MODE=log for local testing."
    );
    return NextResponse.json(
      {
        error:
          "Email service is not configured. Add RESEND_API_KEY to .env.local (see env.example).",
      },
      { status: 503 }
    );
  }

  const { html } = buildLeadEmailContent(payload);
  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    replyTo: payload.email,
    subject,
    text,
    html,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Unable to send your enquiry right now. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
