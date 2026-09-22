"use client";

import { FormEvent, useState } from "react";
import { CheckIcon } from "./Icons";
import { validateLeadForm, type LeadFormFieldErrors, type LeadFormPayload } from "@/lib/lead-form";

const budgetRanges = [
  "Under ₹85 Lakh",
  "₹85 Lakh – ₹1 Cr",
  "₹1 Cr – ₹1.2 Cr",
  "₹1.2 Cr – ₹1.35 Cr",
  "Above ₹1.35 Cr",
];

const configOptions = [
  "2 BHK Optima",
  "2 BHK Ultima",
  "3 BHK Optima",
  "3 BHK Ultima",
  "3 BHK Grande",
  "Not sure yet",
];

const inputClasses =
  "w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30 sm:text-base";

const inputErrorClasses =
  "border-red-400 focus:border-red-500 focus:ring-red-500/30";

const labelClasses = "mb-1.5 block text-sm font-medium text-zinc-700";

function readPayload(form: HTMLFormElement): LeadFormPayload {
  const formData = new FormData(form);
  return {
    name: String(formData.get("name") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    budget: String(formData.get("budget") ?? "").trim(),
    configuration: String(formData.get("configuration") ?? "").trim(),
    visitDate: String(formData.get("visitDate") ?? "").trim(),
    website: String(formData.get("_hp") ?? "").trim(),
  };
}

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<LeadFormFieldErrors>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);
    setFieldErrors({});

    const form = event.currentTarget;
    const payload = readPayload(form);

    const clientErrors = validateLeadForm(payload);
    if (Object.keys(clientErrors).length > 0) {
      setFieldErrors(clientErrors);
      setError(
        clientErrors.name ??
          clientErrors.phone ??
          clientErrors.email ??
          "Please check the highlighted fields."
      );
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as {
        error?: string;
        ok?: boolean;
        fields?: LeadFormFieldErrors;
      };

      if (!response.ok) {
        if (data.fields) setFieldErrors(data.fields);
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
      form.reset();
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-14 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckIcon className="h-7 w-7" />
        </span>
        <h3 className="text-xl font-semibold text-zinc-900">
          Thank you — we&apos;ve got your enquiry.
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-zinc-600">
          Our advisor will reach out shortly to help with next steps. While
          you wait, feel free to explore the amenities and floor plans above.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Honeypot — renamed to reduce browser autofill; must stay empty */}
      <input
        type="text"
        name="_hp"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="pointer-events-none absolute h-0 w-0 opacity-0"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="lead-name" className={labelClasses}>
            Full Name
          </label>
          <input
            id="lead-name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={`${inputClasses} ${fieldErrors.name ? inputErrorClasses : ""}`}
          />
          {fieldErrors.name ? (
            <p className="mt-1 text-xs text-red-600">{fieldErrors.name}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="lead-phone" className={labelClasses}>
            Phone Number
          </label>
          <input
            id="lead-phone"
            name="phone"
            type="tel"
            required
            inputMode="tel"
            placeholder="9876543210"
            className={`${inputClasses} ${fieldErrors.phone ? inputErrorClasses : ""}`}
          />
          {fieldErrors.phone ? (
            <p className="mt-1 text-xs text-red-600">{fieldErrors.phone}</p>
          ) : (
            <p className="mt-1 text-xs text-zinc-500">10-digit mobile number (with or without +91)</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="lead-email" className={labelClasses}>
          Email Address
        </label>
        <input
          id="lead-email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className={`${inputClasses} ${fieldErrors.email ? inputErrorClasses : ""}`}
        />
        {fieldErrors.email ? (
          <p className="mt-1 text-xs text-red-600">{fieldErrors.email}</p>
        ) : null}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="lead-budget" className={labelClasses}>
            Budget Range{" "}
            <span className="font-normal text-zinc-500">(optional)</span>
          </label>
          <select id="lead-budget" name="budget" className={inputClasses} defaultValue="">
            <option value="">Select a range</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="lead-config" className={labelClasses}>
            Configuration Preference{" "}
            <span className="font-normal text-zinc-500">(optional)</span>
          </label>
          <select id="lead-config" name="configuration" className={inputClasses} defaultValue="">
            <option value="">Select configuration</option>
            {configOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="lead-visit-date" className={labelClasses}>
          Preferred Visit Date{" "}
          <span className="font-normal text-zinc-500">(optional)</span>
        </label>
        <input id="lead-visit-date" name="visitDate" type="date" className={inputClasses} />
      </div>

      {error ? (
        <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-violet-600 py-3.5 text-base font-medium text-white shadow-lg shadow-violet-600/20 transition-all hover:bg-violet-500 hover:shadow-violet-500/30 active:scale-[0.98] disabled:cursor-wait disabled:opacity-70"
      >
        {submitting ? "Submitting…" : "Schedule My Site Visit"}
      </button>

      <p className="text-center text-xs leading-relaxed text-zinc-500">
        By submitting, you agree to be contacted by our advisory team
        regarding Pune West properties. We don&apos;t spam or share your
        details with third parties.
      </p>
    </form>
  );
}
