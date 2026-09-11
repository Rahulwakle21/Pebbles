export type LeadFormPayload = {
  name: string;
  phone: string;
  email: string;
  budget: string;
  configuration: string;
  visitDate: string;
  /** Honeypot — must stay empty for legitimate submissions. */
  website?: string;
};

export type LeadFormFieldErrors = Partial<Record<keyof LeadFormPayload, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function parseLeadFormPayload(body: unknown): LeadFormPayload | null {
  if (!body || typeof body !== "object") return null;

  const data = body as Record<string, unknown>;

  return {
    name: typeof data.name === "string" ? data.name.trim() : "",
    phone: typeof data.phone === "string" ? data.phone.trim() : "",
    email: typeof data.email === "string" ? data.email.trim() : "",
    budget: typeof data.budget === "string" ? data.budget.trim() : "",
    configuration: typeof data.configuration === "string" ? data.configuration.trim() : "",
    visitDate: typeof data.visitDate === "string" ? data.visitDate.trim() : "",
    website:
      typeof data.website === "string"
        ? data.website.trim()
        : typeof data._hp === "string"
          ? data._hp.trim()
          : "",
  };
}

export function validateLeadForm(payload: LeadFormPayload): LeadFormFieldErrors {
  const errors: LeadFormFieldErrors = {};

  if (payload.name.length < 2) {
    errors.name = "Please enter your full name.";
  }

  const phoneDigits = payload.phone.replace(/\D/g, "");
  // Accept 10-digit Indian mobiles, or +91 prefixed (12 digits total).
  const normalizedPhone =
    phoneDigits.length === 12 && phoneDigits.startsWith("91")
      ? phoneDigits.slice(2)
      : phoneDigits;
  if (normalizedPhone.length < 10) {
    errors.phone = "Please enter a valid 10-digit phone number.";
  }

  if (!EMAIL_PATTERN.test(payload.email)) {
    errors.email = "Please enter a valid email address.";
  }

  return errors;
}

export function buildLeadEmailContent(payload: LeadFormPayload) {
  const lines = [
    ["Name", payload.name],
    ["Phone", payload.phone],
    ["Email", payload.email],
    ["Budget", payload.budget || "Not specified"],
    ["Configuration", payload.configuration || "Not specified"],
    ["Preferred visit date", payload.visitDate || "Not specified"],
  ] as const;

  const text = [
    "New Park Pebbles site-visit enquiry",
    "",
    ...lines.map(([label, value]) => `${label}: ${value}`),
    "",
    `Submitted at: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST`,
  ].join("\n");

  const htmlRows = lines
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;font-weight:600;color:#52525b;border-bottom:1px solid #e4e4e7;">${label}</td><td style="padding:8px 12px;color:#18181b;border-bottom:1px solid #e4e4e7;">${escapeHtml(value)}</td></tr>`
    )
    .join("");

  const html = `
    <div style="font-family:system-ui,sans-serif;max-width:560px;color:#18181b;">
      <h2 style="margin:0 0 16px;font-size:20px;">New Park Pebbles site-visit enquiry</h2>
      <table style="width:100%;border-collapse:collapse;border:1px solid #e4e4e7;border-radius:8px;overflow:hidden;">
        ${htmlRows}
      </table>
      <p style="margin:16px 0 0;font-size:12px;color:#71717a;">
        Submitted at ${escapeHtml(new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }))} IST
      </p>
    </div>
  `.trim();

  return { text, html, subject: `New lead: ${payload.name} — Park Pebbles` };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
