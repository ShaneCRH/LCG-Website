import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Discuss a Project",
  description:
    "Discuss a project with Landmark Creative Group. Owner-side development leadership for complex real estate projects — from feasibility through closeout.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-20 bg-charcoal text-ivory">
        <div className="container-site">
          <p className="eyebrow-light mb-6">Contact</p>
          <h1 className="font-serif text-display-lg text-ivory mb-8 text-balance max-w-3xl">
            Discuss a project.
          </h1>
          <div className="w-12 h-px bg-brass mb-8" />
          <p className="text-ivory/60 text-xl leading-relaxed max-w-2xl">
            Have a site, an opportunity, or a project that needs experienced leadership? Start with a conversation.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-section">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div>
              <p className="eyebrow mb-6">What to Expect</p>
              <div className="prose-editorial space-y-5 mb-12">
                <p>
                  Tell us about your project, site, or opportunity. We&rsquo;ll review your inquiry and respond with an honest owner-side assessment of how Landmark Creative Group might be able to help — or how you might be better served by a different resource.
                </p>
                <p>
                  We do not maintain a sales funnel or a deal room. This is a conversation with experienced development professionals.
                </p>
              </div>

              <div className="space-y-8">
                <div className="border-t border-charcoal/8 pt-8">
                  <p className="eyebrow mb-4">What We&rsquo;re Interested In</p>
                  <div className="flex flex-col gap-3">
                    {[
                      "Development opportunities requiring owner-side leadership",
                      "Sites with entitlement or development complexity",
                      "Projects requiring construction management or owner representation",
                      "Senior living, industrial/R&D, and commercial development",
                      "Large-scale and nationally-scoped project programs",
                      "Feasibility and development strategy engagements",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full bg-brass mt-2 shrink-0" />
                        <p className="text-sm text-graphite/70">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-charcoal/8 pt-8">
                  <p className="eyebrow mb-4">Landmark Creative Group LLC</p>
                  <p className="text-sm text-graphite/60 leading-relaxed">
                    Arizona-based. National engagement capability through the Strategic Development Partners and Vanguard Building platforms.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
