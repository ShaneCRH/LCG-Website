"use client";

import { useState } from "react";

const sectors = [
  "Senior Living & Active Adult",
  "Multifamily & Mixed Use",
  "Commercial / Retail / Medical Office",
  "Industrial / Manufacturing / R&D",
  "Hospitality & Entertainment",
  "Residential",
  "Other / Not Sure",
];

const projectTypes = [
  "Development Strategy & Feasibility",
  "Entitlements & Public Coordination",
  "Construction Management",
  "Owner Representation",
  "Full Lifecycle — Feasibility Through Closeout",
  "Other / Not Sure",
];

const stageOptions = [
  "Pre-acquisition / Site evaluation",
  "Under contract / Due diligence",
  "Entitlement process",
  "Design / Permitting",
  "Construction / Pre-construction",
  "Closeout / Operational readiness",
  "Strategic inquiry — no active project yet",
];

export function ContactForm() {
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
          Thank you for reaching out.
        </h2>
        <p className="prose-editorial mb-2">
          We&rsquo;ve received your inquiry and will follow up shortly.
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
          Organization / Company
        </label>
        <input
          id="organization"
          name="organization"
          type="text"
          className="w-full border border-charcoal/20 px-4 py-3 text-sm text-charcoal bg-ivory focus:outline-none focus:border-charcoal transition-colors placeholder:text-graphite/30"
          placeholder="Organization or company name"
        />
      </div>

      <div>
        <label htmlFor="sector" className="eyebrow block mb-2">
          Project Sector
        </label>
        <select
          id="sector"
          name="sector"
          className="w-full border border-charcoal/20 px-4 py-3 text-sm text-charcoal bg-ivory focus:outline-none focus:border-charcoal transition-colors appearance-none"
        >
          <option value="">Select a sector…</option>
          {sectors.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="project-type" className="eyebrow block mb-2">
          Type of Engagement
        </label>
        <select
          id="project-type"
          name="project-type"
          className="w-full border border-charcoal/20 px-4 py-3 text-sm text-charcoal bg-ivory focus:outline-none focus:border-charcoal transition-colors appearance-none"
        >
          <option value="">Select a type…</option>
          {projectTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="stage" className="eyebrow block mb-2">
          Project Stage
        </label>
        <select
          id="stage"
          name="stage"
          className="w-full border border-charcoal/20 px-4 py-3 text-sm text-charcoal bg-ivory focus:outline-none focus:border-charcoal transition-colors appearance-none"
        >
          <option value="">Select a stage…</option>
          {stageOptions.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="location" className="eyebrow block mb-2">
          Project Location / Market
        </label>
        <input
          id="location"
          name="location"
          type="text"
          className="w-full border border-charcoal/20 px-4 py-3 text-sm text-charcoal bg-ivory focus:outline-none focus:border-charcoal transition-colors placeholder:text-graphite/30"
          placeholder="City, state, or region"
        />
      </div>

      <div>
        <label htmlFor="message" className="eyebrow block mb-2">
          Project Overview <span className="text-brass">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full border border-charcoal/20 px-4 py-3 text-sm text-charcoal bg-ivory focus:outline-none focus:border-charcoal transition-colors placeholder:text-graphite/30 resize-none"
          placeholder="Tell us about your project, opportunity, or the challenge you're facing."
        />
      </div>

      <p className="text-[0.65rem] text-graphite/40 leading-relaxed">
        We do not request sensitive financial information through this form. This inquiry is for preliminary project discussion only.
      </p>

      <button
        type="submit"
        disabled={submitting}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Sending…" : "Discuss a Project"}
      </button>
    </form>
  );
}
