import type { Metadata } from "next";
import Link from "next/link";
import { CapitalPartnerForm } from "@/components/sections/CapitalPartnerForm";

export const metadata: Metadata = {
  title: "Capital Partners",
  description:
    "Landmark Creative Group is recruiting experienced capital raisers, placement agents, and investor-network partners to bring capital to our development platform.",
};

const proofPoints = [
  { value: "20M+", label: "Square Feet", context: "SDP national commercial project experience" },
  { value: "30+", label: "States", context: "SDP general contractor licensing" },
  { value: "5", label: "Principals", context: "Integrated development leadership platform" },
  { value: "5", label: "Sectors", context: "Senior living, industrial, commercial, multifamily, hospitality" },
];

const lookingFor = [
  "Registered representatives and placement agents with active investor relationships",
  "Family offices and independent sponsors seeking co-sponsorship or deal-flow partnerships",
  "RIAs and wealth managers whose clients are seeking real estate exposure",
  "Individuals with strong high-net-worth or accredited-investor networks",
  "Partners who value a documented, owner-side execution track record over a pitch deck",
];

const whyLcg = [
  {
    title: "A Documented Track Record",
    description:
      "Scott Burdette's Strategic Development Partners platform brings more than 20 million square feet of national commercial construction experience across 30+ states — a proof pillar your investors can verify, not just a narrative.",
  },
  {
    title: "Five Integrated Disciplines",
    description:
      "Development strategy, entitlement, construction management, owner representation, and capital strategy — under one coordinated leadership platform rather than a single generalist sponsor.",
  },
  {
    title: "Sector Breadth",
    description:
      "Senior living, multifamily, commercial/retail/medical, industrial/manufacturing/R&D, and hospitality — giving your investors more than one thesis to consider.",
  },
  {
    title: "Owner-Side Discipline",
    description:
      "Every principal brings owner-side, execution-first experience — the operational discipline that protects capital through entitlement, construction, and closeout.",
  },
];

export default function CapitalPartnersPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-20 bg-navy text-ivory">
        <div className="container-site">
          <p className="eyebrow-light mb-6">Capital Partners</p>
          <h1 className="font-serif text-display-lg text-ivory mb-8 text-balance max-w-3xl">
            We&rsquo;re looking for experienced capital raisers to partner with our platform.
          </h1>
          <div className="w-12 h-px bg-brass mb-8" />
          <p className="text-ivory/60 text-xl leading-relaxed max-w-2xl">
            Landmark Creative Group brings a documented, owner-side execution platform to real estate development. We&rsquo;re building relationships with placement agents, registered representatives, family offices, and investor-network partners to bring capital to our pipeline.
          </p>
        </div>
      </section>

      {/* Proof Stats */}
      <section className="bg-ivory border-b border-charcoal/8">
        <div className="container-site py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-charcoal/10">
            {proofPoints.map((stat) => (
              <div key={stat.label} className="lg:px-10 first:lg:pl-0 last:lg:pr-0">
                <p className="font-serif text-4xl md:text-5xl text-charcoal font-medium mb-2">{stat.value}</p>
                <p className="text-xs tracking-[0.15em] uppercase font-medium text-graphite mb-1">{stat.label}</p>
                <p className="text-xs text-graphite/50 leading-snug">{stat.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With LCG */}
      <section className="py-section border-b border-charcoal/8">
        <div className="container-site">
          <div className="max-w-2xl mb-16">
            <p className="eyebrow mb-5">Why Partner With Us</p>
            <h2 className="font-serif text-display-md text-charcoal mb-6 text-balance">
              Give your investors something they can verify, not just a pitch.
            </h2>
            <div className="architectural-rule mb-6" />
            <p className="prose-editorial">
              Capital raisers succeed when the sponsor behind the deal can stand up to diligence. Landmark Creative Group is built on documented experience across development, entitlement, construction management, and capital strategy — the kind of platform depth that makes a conversation with your investors easier, not harder.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {whyLcg.map((item) => (
              <div key={item.title} className="border border-charcoal/10 bg-ivory p-8">
                <h3 className="font-serif text-lg text-charcoal mb-3">{item.title}</h3>
                <p className="text-sm text-graphite/60 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We're Looking For */}
      <section className="py-section bg-charcoal/3 border-b border-charcoal/8">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="eyebrow mb-5">Who We&rsquo;re Looking For</p>
              <h2 className="font-serif text-display-sm text-charcoal mb-8 text-balance">
                Partners with real investor relationships.
              </h2>
              <div className="flex flex-col gap-4">
                {lookingFor.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full bg-brass mt-2 shrink-0" />
                    <p className="text-sm text-graphite/70 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="eyebrow mb-5">The Platform</p>
              <h2 className="font-serif text-display-sm text-charcoal mb-8 text-balance">
                Backed by five integrated leaders.
              </h2>
              <p className="prose-editorial mb-8">
                Mark Orshoski, Scott Burdette, Mike Petersen, Marli Tarbaux, and Shane Evans bring complementary, documented experience across development, national construction, complex project execution, capital strategy, and trades-informed investment evaluation.
              </p>
              <Link href="/leadership" className="btn-ghost">
                Meet the Leadership Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Note */}
      <section className="py-16 border-b border-charcoal/8">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <p className="eyebrow mb-4">A Note on Compliance</p>
            <p className="text-sm text-graphite/50 leading-relaxed">
              Landmark Creative Group takes securities compliance seriously. This page is a preliminary inquiry point only — it is not an offer, solicitation, or engagement of any kind. Any capital-raise partnership, including compensation arrangements, will be structured to comply with applicable securities laws and, where required, will involve appropriately licensed or registered individuals and entities.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-section">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <p className="eyebrow mb-6">Start the Conversation</p>
              <h2 className="font-serif text-display-sm text-charcoal mb-6 text-balance">
                Tell us about your network.
              </h2>
              <div className="prose-editorial space-y-5">
                <p>
                  Share your background, licensing status, and investor relationships. We&rsquo;ll follow up to discuss whether there&rsquo;s a fit — and what a partnership could look like.
                </p>
                <p>
                  We do not request sensitive financial information through this form.
                </p>
              </div>
            </div>
            <CapitalPartnerForm />
          </div>
        </div>
      </section>
    </>
  );
}
