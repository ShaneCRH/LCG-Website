"use client";

import { useState } from "react";

const licensingOptions = [
  "Registered Representative (Series 7/63/79/82, etc.)",
  "Registered Investment Advisor (RIA)",
  "Broker-Dealer Affiliated",
  "Family Office / Independent Sponsor",
  "Not Currently Licensed",
  "Other / Not Sure",
];

const networkOptions = [
  "Accredited Individual Investors",
  "Family Offices",
  "RIA / Wealth Management Clients",
  "Institutional Investors",
  "High-Net-Worth Network — Informal",
  "Other",
];

const experienceOptions = [
  "Actively raising capital for real estate sponsors now",
  "Prior capital-raise experience, not currently active",
  "New to capital raising, strong investor network",
  "Other / Not Sure",
];

export function CapitalPartnerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // In production: submit to your backend/email service
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setSubmitting(false);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start justify-center py-16">
        <div className="w-12 h-px bg-brass mb-8" />
        <h2 className="font-serif text-display-sm text-charcoal mb-4">
          Thank you for your interest.
        </h2>
        <p className="prose-editorial mb-2">
          We&rsquo;ve received your inquiry and will follow up to discuss next steps.
        </p>
        <p className="text-sm text-graphite/50">
          Landmark Creative Group — development leadership for complex projects.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="first-name" className="eyebrow block mb-2">
            First Name <span className="text-brass">*</span>
          </label>
          <input
            id="first-name"
            name="first-name"
            type="text"
            required
            className="w-full border border-charcoal/20 px-4 py-3 text-sm text-charcoal bg-ivory focus:outline-none focus:border-charcoal transition-colors placeholder:text-graphite/30"
            placeholder="First name"
          />
        </div>
        <div>
          <label htmlFor="last-name" className="eyebrow block mb-2">
            Last Name <span className="text-brass">*</span>
          </label>
          <input
            id="last-name"
            name="last-name"
            type="text"
            required
            className="w-full border border-charcoal/20 px-4 py-3 text-sm text-charcoal bg-ivory focus:outline-none focus:border-charcoal transition-colors placeholder:text-graphite/30"
            placeholder="Last name"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="eyebrow block mb-2">
          Email Address <span className="text-brass">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full border border-charcoal/20 px-4 py-3 text-sm text-charcoal bg-ivory focus:outline-none focus:border-charcoal transition-colors placeholder:text-graphite/30"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="organization" className="eyebrow block mb-2">
          Firm / Organization
        </label>
        <input
          id="organization"
          name="organization"
          type="text"
          className="w-full border border-charcoal/20 px-4 py-3 text-sm text-charcoal bg-ivory focus:outline-none focus:border-charcoal transition-colors placeholder:text-graphite/30"
          placeholder="Firm or organization name"
        />
      </div>

      <div>
        <label htmlFor="licensing" className="eyebrow block mb-2">
          Licensing / Registration Status <span className="text-brass">*</span>
        </label>
        <select
          id="licensing"
          name="licensing"
          required
          className="w-full border border-charcoal/20 px-4 py-3 text-sm text-charcoal bg-ivory focus:outline-none focus:border-charcoal transition-colors appearance-none"
        >
          <option value="">Select an option…</option>
          {licensingOptions.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="network" className="eyebrow block mb-2">
          Primary Investor Network
        </label>
        <select
          id="network"
          name="network"
          className="w-full border border-charcoal/20 px-4 py-3 text-sm text-charcoal bg-ivory focus:outline-none focus:border-charcoal transition-colors appearance-none"
        >
          <option value="">Select an option…</option>
          {networkOptions.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="experience" className="eyebrow block mb-2">
          Capital Raising Experience
        </label>
        <select
          id="experience"
          name="experience"
          className="w-full border border-charcoal/20 px-4 py-3 text-sm text-charcoal bg-ivory focus:outline-none focus:border-charcoal transition-colors appearance-none"
        >
          <option value="">Select an option…</option>
          {experienceOptions.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="eyebrow block mb-2">
          Tell Us About Your Network <span className="text-brass">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full border border-charcoal/20 px-4 py-3 text-sm text-charcoal bg-ivory focus:outline-none focus:border-charcoal transition-colors placeholder:text-graphite/30 resize-none"
          placeholder="Tell us about your investor relationships, prior capital-raise experience, and the sectors or deal sizes you typically work with."
        />
      </div>

      <p className="text-[0.65rem] text-graphite/40 leading-relaxed">
        This inquiry is for preliminary discussion only and does not constitute an offer, solicitation, or engagement of any kind. Compensation arrangements, where applicable, are subject to review and must comply with applicable securities regulations.
      </p>

      <button
        type="submit"
        disabled={submitting}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Sending…" : "Apply to Partner With Us"}
      </button>
    </form>
  );
}
