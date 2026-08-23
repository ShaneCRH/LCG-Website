import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Landmark Creative Group is an integrated real estate development leadership platform — bringing together experienced owner-side leadership across development strategy, entitlement, construction management, and execution.",
};

const platforms = [
  {
    name: "Strategic Development Partners LLC",
    shortName: "SDP",
    leader: "Scott Burdette",
    description:
      "National commercial construction platform with documented experience exceeding 20 million square feet across retail, industrial, R&D, manufacturing, hospitality, entertainment, and active living sectors. GC licensed in 30+ states.",
    href: "/leadership/platforms#strategic-development-partners",
  },
  {
    name: "Vanguard Building Corporation LLC",
    shortName: "Vanguard",
    leader: "Mike Petersen",
    description:
      "Construction management and project execution platform with experience in complex hospitality, entertainment, commercial, and mixed-use development.",
    href: "/leadership/platforms#vanguard-building",
  },
  {
    name: "Creative Roots Holdings LLC",
    leader: "Marli Tarbaux & Shane Evans",
    description:
      "Investment and ownership platform bringing an owner/operator perspective to acquisitions, capital strategy, partnership development, and project-level investment.",
    href: "/leadership/platforms#creative-roots-holdings",
  },
  {
    name: "Elegance Senior Living LLC",
    leader: "Mark Orshoski",
    description:
      "Senior living development platform focused on senior living programming, positioning, entitlement, and execution.",
    href: "/leadership/platforms#elegance-senior-living",
  },
  {
    name: "Transcendent Development LLC",
    leader: "Mark Orshoski",
    description:
      "Development platform focused on development strategy, entitlement, and execution across residential, mixed-use, and specialty sectors.",
    href: "/leadership/platforms#transcendent-development",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-20 bg-charcoal text-ivory">
        <div className="container-site">
          <p className="eyebrow-light mb-6">About</p>
          <h1 className="font-serif text-display-lg text-ivory mb-8 text-balance max-w-3xl">
            An integrated development leadership platform.
          </h1>
          <div className="w-12 h-px bg-brass mb-8" />
          <p className="text-ivory/60 text-xl leading-relaxed max-w-2xl">
            Vision. Capital. Development. Execution.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-section">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="eyebrow mb-5">Who We Are</p>
              <h2 className="font-serif text-display-md text-charcoal mb-6 text-balance">
                Landmark Creative Group LLC
              </h2>
              <div className="architectural-rule mb-6" />
              <div className="prose-editorial space-y-5">
                <p>
                  Landmark Creative Group is a real estate development leadership platform — bringing together experienced, owner-side professionals across development strategy, entitlement, capital strategy, construction management, owner representation, and execution.
                </p>
                <p>
                  The group was formed around a straightforward premise: sophisticated real estate projects require experienced leadership at every phase, not a single discipline applied to a multi-disciplinary problem. The Landmark Creative Group platform connects five experienced principals — each bringing distinct capabilities — into one integrated development perspective.
                </p>
                <p>
                  This is not five résumés beneath one logo. It is a coordinated platform designed to evaluate and execute complex development opportunities across the full lifecycle — from feasibility through closeout.
                </p>
              </div>
            </div>
            <div>
              <p className="eyebrow mb-5">What We Do</p>
              <h2 className="font-serif text-display-md text-charcoal mb-6 text-balance">
                Owner-side leadership across the full development lifecycle.
              </h2>
              <div className="architectural-rule mb-6" />
              <div className="prose-editorial space-y-5">
                <p>
                  Landmark Creative Group provides development leadership — the kind that sits on the owner&rsquo;s side of the table and brings accountability for outcomes, not just completion of tasks.
                </p>
                <p>
                  Our leadership spans the complete development lifecycle: opportunity evaluation and feasibility through entitlement, design coordination, construction management, and operational readiness. We engage where the complexity is — and where experienced owner-side judgment matters most.
                </p>
                <p>
                  The goal of every engagement is a project that is buildable, financeable, and operationally ready — and a client who understands the path to get there from the earliest stages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-section bg-charcoal/3 border-y border-charcoal/8">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <p className="eyebrow mb-5">The Development Problem</p>
            <h2 className="font-serif text-display-md text-charcoal mb-8 text-balance">
              Complex projects require experienced leadership on the owner&rsquo;s side — at every phase.
            </h2>
            <div className="w-12 h-px bg-brass mx-auto mb-8" />
            <p className="prose-editorial mb-6 text-center">
              The most expensive decisions in real estate development are often made in the earliest phases — before a shovel breaks ground, before a permit is issued, sometimes before a site is even under contract. Poor feasibility assumptions, entitlement misjudgments, design misalignment, and procurement failures don&rsquo;t become visible until they become expensive.
            </p>
            <p className="prose-editorial text-center">
              Landmark Creative Group is built to provide early, experienced, owner-side leadership — so that development decisions are made with full visibility into schedule, budget, entitlement risk, construction complexity, and operational requirements from the beginning.
            </p>
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="py-section">
        <div className="container-site">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Capital → Development",
                description:
                  "The group's capital strategy and acquisitions dimension, led by Marli Tarbaux and Shane Evans, ensures that development planning is grounded in investment reality — understanding what makes an opportunity financeable and how to structure the relationships and capital that surround it.",
              },
              {
                title: "Development → Entitlement",
                description:
                  "Mark Orshoski's documented entitlement and development experience — across senior living, commercial, and residential sectors — covers the regulatory, public coordination, and land use dimensions that determine whether a project moves forward or stalls.",
              },
              {
                title: "Construction → Execution",
                description:
                  "Scott Burdette's national construction platform (SDP) and Mike Petersen's complex construction experience (Vanguard) provide the construction management and owner representation depth to execute from procurement through closeout.",
              },
            ].map((item) => (
              <div key={item.title} className="border-t-2 border-brass pt-6">
                <p className="font-medium text-charcoal mb-3">{item.title}</p>
                <p className="text-sm text-graphite/65 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Associated Platforms */}
      <section className="py-section bg-charcoal text-ivory">
        <div className="container-site">
          <p className="eyebrow-light mb-5">Leadership Companies & Platforms</p>
          <h2 className="font-serif text-display-md text-ivory mb-12 text-balance max-w-2xl">
            Associated experience and platforms.
          </h2>

          <div className="grid sm:grid-cols-2 gap-px bg-ivory/8">
            {platforms.map((platform) => (
              <div key={platform.name} className="bg-charcoal p-8">
                <p className="font-medium text-ivory text-sm mb-1">{platform.name}</p>
                <p className="text-xs text-brass mb-4">{platform.leader}</p>
                <p className="text-sm text-ivory/50 leading-relaxed">{platform.description}</p>
                <Link href={platform.href} className="inline-block mt-5 text-[0.65rem] tracking-widest uppercase text-brass/70 hover:text-brass transition-colors">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs text-ivory/25 italic">
            Associated platforms are independent entities. Their experience and project portfolios reflect their respective histories. Landmark Creative Group coordinates these capabilities — it does not own or control these entities.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-charcoal/8">
        <div className="container-site text-center">
          <h2 className="font-serif text-display-md text-charcoal mb-6 text-balance">
            Ready to discuss a project?
          </h2>
          <p className="text-graphite/60 text-lg mb-10 max-w-xl mx-auto">
            Bring us your site, your opportunity, or your challenge. We&rsquo;ll give you an honest owner-side perspective.
          </p>
          <Link href="/contact" className="btn-primary">
            Discuss a Project
          </Link>
        </div>
      </section>
    </>
  );
}
