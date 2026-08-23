import type { Metadata } from "next";
import Link from "next/link";
import { platforms } from "@/data/platforms";
import { leadership } from "@/data/leadership";

export const metadata: Metadata = {
  title: "Companies & Platforms",
  description:
    "The associated companies and platforms behind the Landmark Creative Group leadership team — including Strategic Development Partners, Vanguard Building Corporation, Creative Roots Holdings, Elegance Senior Living, and Transcendent Development.",
};

const platformDetails = [
  {
    id: "strategic-development-partners",
    highlights: [
      "20M+ square feet of documented project experience",
      "General contractor licensing in 30+ states",
      "Sector experience: Retail, Industrial, R&D, Manufacturing, Hospitality, Entertainment, Active Living, Care",
      "Select documented projects: Rivian Automotive R&D, Redwood EV Recycling, Nuro Robotics, Solarlink Manufacturing, Multimatic R&D, Bridge Street Town Centre",
      "Hospitality & entertainment experience including Las Vegas market",
    ],
    disclosure: "Project roles and scope vary. SDP is an independent entity. Project-specific scope available upon request.",
  },
  {
    id: "vanguard-building",
    highlights: [
      "32+ years of construction and development experience (Mike Petersen)",
      "Documented experience in complex hospitality, entertainment, and commercial construction",
      "Large-scale project management and field leadership",
      "Demanding operational environments and compressed schedule experience",
    ],
    disclosure: "Professional experience context. Specific project scope available upon request.",
  },
  {
    id: "creative-roots-holdings",
    highlights: [
      "Owner/operator perspective on acquisitions and investment",
      "Capital strategy and partnership development",
      "Project-level investment structuring",
      "Operational planning and analysis",
    ],
    disclosure: null,
  },
  {
    id: "elegance-senior-living",
    highlights: [
      "Senior living development in Arizona",
      "Programming, positioning, and entitlement experience",
      "Care operator integration and development coordination",
    ],
    disclosure: null,
  },
  {
    id: "transcendent-development",
    highlights: [
      "Development strategy and entitlement",
      "Residential, mixed-use, and specialty sectors",
      "Arizona and Southwest focus",
    ],
    disclosure: null,
  },
];

export default function PlatformsPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-20 bg-navy text-ivory">
        <div className="container-site">
          <Link href="/leadership" className="eyebrow-light mb-8 inline-flex items-center gap-2 hover:text-ivory/80 transition-colors">
            <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
              <path d="M10 6H2M5 3L2 6l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Leadership
          </Link>
          <h1 className="font-serif text-display-lg text-ivory mb-8 text-balance max-w-3xl mt-6">
            Companies & Platforms
          </h1>
          <div className="w-12 h-px bg-brass mb-8" />
          <p className="text-ivory/60 text-xl leading-relaxed max-w-2xl">
            The companies and platforms associated with the Landmark Creative Group leadership team.
          </p>
        </div>
      </section>

      {/* Context Note */}
      <section className="py-10 border-b border-charcoal/8 bg-charcoal/3">
        <div className="container-site">
          <p className="text-sm text-graphite/60 max-w-3xl leading-relaxed italic">
            The companies and platforms listed here are associated with individual Landmark Creative Group principals. They are independent entities — not subsidiaries of Landmark Creative Group LLC. Their documented experience and project portfolios inform the depth of capability available through the Landmark Creative Group leadership platform.
          </p>
        </div>
      </section>

      {/* Platform Sections */}
      {platforms.map((platform, i) => {
        const details = platformDetails.find((d) => d.id === platform.id);
        const leaders = leadership.filter((l) => platform.leaders?.includes(l.id));

        return (
          <section
            key={platform.id}
            id={platform.id}
            className={`py-section ${i % 2 === 1 ? "bg-charcoal/3" : ""} border-b border-charcoal/8`}
          >
            <div className="container-site">
              <div className="grid lg:grid-cols-3 gap-12">
                <div>
                  <p className="eyebrow mb-3">
                    {platform.shortName ? `${platform.shortName}` : "Platform"}
                  </p>
                  <h2 className="font-serif text-display-sm text-charcoal mb-4 text-balance">
                    {platform.name}
                  </h2>
                  <div className="architectural-rule mb-5" />
                  {leaders.map((leader) => (
                    <Link
                      key={leader.id}
                      href={`/leadership/${leader.id}`}
                      className="inline-flex items-center gap-2 text-sm text-graphite/60 hover:text-charcoal transition-colors mb-2 block"
                    >
                      <div className="w-6 h-6 bg-charcoal/10 rounded-full flex items-center justify-center text-[0.55rem] font-medium text-charcoal">
                        {leader.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                      </div>
                      {leader.name}
                    </Link>
                  ))}
                </div>

                <div className="lg:col-span-2">
                  <p className="prose-editorial mb-6">{platform.description}</p>

                  {details?.highlights && (
                    <div>
                      <p className="eyebrow mb-4">Key Experience Points</p>
                      <ul className="flex flex-col gap-3">
                        {details.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-3">
                            <div className="w-1 h-1 rounded-full bg-brass mt-2 shrink-0" />
                            <span className="text-sm text-graphite/70 leading-relaxed">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {details?.disclosure && (
                    <p className="mt-6 text-xs text-graphite/40 italic">{details.disclosure}</p>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-20">
        <div className="container-site text-center">
          <h2 className="font-serif text-display-md text-charcoal mb-6 text-balance">
            Ready to discuss a project?
          </h2>
          <Link href="/contact" className="btn-primary">
            Discuss a Project
          </Link>
        </div>
      </section>
    </>
  );
}
