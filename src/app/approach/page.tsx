import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "Landmark Creative Group's approach: owner-side development leadership from opportunity through operational readiness. Strategy → Development → Build → Closeout.",
};

const phases = [
  {
    number: "01",
    title: "Strategy",
    subtitle: "Opportunity through feasibility",
    description:
      "Before capital is committed, before design begins, and before a site is under contract — the decisions made in the earliest phase of a project establish the ceiling on every outcome that follows. We engage at the strategy phase to establish honest feasibility: a buildable program, financeable assumptions, and a clear view of the entitlement, construction, and operational risk ahead.",
    principles: [
      "Early risk visibility is more valuable than later certainty",
      "A project that cannot be built as designed is not a design problem",
      "Capitalization strategy and development strategy should inform each other",
      "Owner-side leadership does not sell optimism",
    ],
  },
  {
    number: "02",
    title: "Development",
    subtitle: "Entitlement through permit",
    description:
      "Development — in the sense of moving a project from opportunity to entitled, designed, and permitted — is where real estate projects are won or lost before a shovel breaks ground. Entitlement misjudgments, design misalignment, and permit failures are expensive. We navigate this phase with the discipline of teams that have done it before.",
    principles: [
      "Entitlement risk deserves honest assessment, not optimistic framing",
      "Design coordination is budget management",
      "Public coordination requires patience, credibility, and preparation",
      "Permits follow good process — good process is not optional",
    ],
  },
  {
    number: "03",
    title: "Build",
    subtitle: "Construction through substantial completion",
    description:
      "Construction management is where owner-side accountability has the most direct, measurable impact on project outcome. Disciplined procurement, rigorous schedule management, transparent change management, and genuine QA/QC are not optional add-ons. They are the work.",
    principles: [
      "The owner's interest is not always the contractor's priority",
      "Change orders are manageable with proper documentation and process",
      "Schedule is a budget issue before it is a schedule issue",
      "Quality is built into process, not inspected into the product",
    ],
  },
  {
    number: "04",
    title: "Closeout",
    subtitle: "From certificate of occupancy to operational readiness",
    description:
      "The difference between a building that occupies and a building that operates is the work of closeout. Commissioning, punch resolution, O&M training, warranty coordination, FF&E installation, and operational readiness are not finish-line formalities. They are the final proof that a project was executed with the owner's operational success in mind.",
    principles: [
      "Ready to operate — not simply ready to occupy",
      "Closeout discipline reflects project execution discipline",
      "Operational readiness is the owner's responsibility — we carry it",
      "The opening is not the end of our accountability",
    ],
  },
];

export default function ApproachPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-20 bg-navy text-ivory">
        <div className="container-site">
          <p className="eyebrow-light mb-6">Our Approach</p>
          <h1 className="font-serif text-display-lg text-ivory mb-8 text-balance max-w-3xl">
            Owner-side accountability from opportunity to operational readiness.
          </h1>
          <div className="w-12 h-px bg-brass mb-8" />
          <p className="text-ivory/60 text-xl leading-relaxed max-w-2xl">
            Strategy → Development → Build → Closeout.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-section border-b border-charcoal/8">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="eyebrow mb-5">The Owner&rsquo;s Perspective</p>
              <h2 className="font-serif text-display-md text-charcoal mb-6 text-balance">
                Development is a series of decisions. We make better ones.
              </h2>
              <div className="architectural-rule mb-6" />
              <div className="prose-editorial space-y-5">
                <p>
                  Real estate development is not a linear process. It is a series of interconnected decisions — each of which creates risk and opportunity for the decisions that follow. Feasibility assumptions made early will be tested in entitlement. Entitlement outcomes will constrain design. Design decisions will drive construction cost. Construction performance will determine operational readiness.
                </p>
                <p>
                  Owner-side development leadership means making decisions — and advising decisions — with full visibility into the entire chain. Not just the current phase. Not just the current problem.
                </p>
                <p>
                  This is what separates experienced owner-side leadership from contractors who manage a scope, consultants who manage their deliverable, or advisors who review without accountability.
                </p>
              </div>
            </div>
            <div>
              <p className="eyebrow mb-5">What This Means in Practice</p>
              <div className="flex flex-col gap-0">
                {[
                  {
                    title: "We sit on the owner's side",
                    desc: "Our accountability is to the owner's outcome — not to a contract scope, a design fee, or a construction margin.",
                  },
                  {
                    title: "We engage early",
                    desc: "The earlier in the lifecycle, the more value owner-side leadership can create. We encourage early engagement.",
                  },
                  {
                    title: "We give honest assessments",
                    desc: "We do not sell optimism. Our value is accurate risk visibility and experienced judgment — not cheerleading.",
                  },
                  {
                    title: "We own outcomes",
                    desc: "We are not consultants who advise and exit. We are development leaders who own the result.",
                  },
                ].map((item, i) => (
                  <div key={item.title} className={`py-5 ${i < 3 ? "border-b border-charcoal/8" : ""}`}>
                    <p className="font-medium text-charcoal mb-2">{item.title}</p>
                    <p className="text-sm text-graphite/65 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase Sections */}
      {phases.map((phase, i) => (
        <section
          key={phase.number}
          className={`py-section ${i % 2 === 1 ? "bg-charcoal/3" : ""} border-b border-charcoal/8`}
        >
          <div className="container-site">
            <div className="grid lg:grid-cols-3 gap-12">
              <div>
                <span className="font-serif text-6xl text-charcoal/10 font-medium block mb-4">{phase.number}</span>
                <h2 className="font-serif text-display-sm text-charcoal mb-2">{phase.title}</h2>
                <p className="text-xs tracking-[0.1em] uppercase text-graphite/50 mb-5">{phase.subtitle}</p>
                <div className="architectural-rule" />
              </div>
              <div className="lg:col-span-2">
                <p className="prose-editorial mb-8">{phase.description}</p>
                <div>
                  <p className="eyebrow mb-4">Principles</p>
                  <div className="flex flex-col gap-3">
                    {phase.principles.map((p) => (
                      <div key={p} className="flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full bg-brass mt-2 shrink-0" />
                        <p className="text-sm text-graphite/70 italic">&ldquo;{p}&rdquo;</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Ready to Operate */}
      <section className="py-section bg-charcoal text-ivory">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <p className="eyebrow-light mb-6">The Goal</p>
            <h2 className="font-serif text-display-lg text-ivory mb-8 text-balance">
              Ready to operate. Not simply ready to occupy.
            </h2>
            <div className="w-12 h-px bg-brass mx-auto mb-8" />
            <p className="text-ivory/60 text-lg leading-relaxed">
              Every engagement, every phase, every decision — measured against the standard of a project that is genuinely ready to operate on day one.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-site text-center">
          <h2 className="font-serif text-display-md text-charcoal mb-6 text-balance">
            Let&rsquo;s apply this approach to your project.
          </h2>
          <Link href="/contact" className="btn-primary">Discuss a Project</Link>
        </div>
      </section>
    </>
  );
}
