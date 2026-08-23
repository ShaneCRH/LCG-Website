import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sectors",
  description:
    "Landmark Creative Group brings owner-side development leadership across senior living, multifamily, commercial, industrial, and hospitality sectors.",
};

const sectors = [
  {
    title: "Senior Living & Active Adult",
    href: "/sectors/senior-living",
    description: "Development leadership for one of the most technically complex, politically sensitive, and operationally demanding sector types in real estate.",
    leader: "Mark Orshoski",
    leaderId: "mark-orshoski",
  },
  {
    title: "Multifamily & Mixed Use",
    href: "/sectors/multifamily-mixed-use",
    description: "Owner-side leadership across multifamily, residential, and mixed-use development — from feasibility through delivery.",
    leader: "Landmark Creative Group",
  },
  {
    title: "Commercial / Retail / Medical Office",
    href: "/sectors/commercial-retail-medical",
    description: "National commercial construction experience, with documented projects across retail, office, and medical office sectors.",
    leader: "Scott Burdette / SDP",
    leaderId: "scott-burdette",
  },
  {
    title: "Industrial / Manufacturing / R&D",
    href: "/sectors/industrial-manufacturing-rd",
    description: "Documented national experience in advanced manufacturing, industrial, and R&D facility development and construction.",
    leader: "Scott Burdette / SDP",
    leaderId: "scott-burdette",
  },
  {
    title: "Hospitality & Entertainment",
    href: "/sectors/hospitality-entertainment",
    description: "Complex hospitality and entertainment project experience, including documented Las Vegas market experience.",
    leader: "Scott Burdette / Mike Petersen",
  },
];

export default function SectorsPage() {
  return (
    <>
      <section className="pt-40 pb-20 bg-charcoal text-ivory">
        <div className="container-site">
          <p className="eyebrow-light mb-6">Sectors</p>
          <h1 className="font-serif text-display-lg text-ivory mb-8 text-balance max-w-3xl">
            Experience across the sectors that demand sophisticated owner-side development leadership.
          </h1>
          <div className="w-12 h-px bg-brass" />
        </div>
      </section>

      <section className="py-section">
        <div className="container-site">
          <div className="grid sm:grid-cols-2 gap-6">
            {sectors.map((sector) => (
              <Link
                key={sector.href}
                href={sector.href}
                className="group border border-charcoal/10 p-8 hover:border-charcoal/25 hover:shadow-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
              >
                <h2 className="font-serif text-xl text-charcoal mb-3 group-hover:text-navy transition-colors">
                  {sector.title}
                </h2>
                <p className="text-sm text-graphite/60 leading-relaxed mb-5">{sector.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[0.6rem] tracking-[0.1em] uppercase text-graphite/40">{sector.leader}</span>
                  <span className="text-xs text-brass opacity-0 group-hover:opacity-100 transition-opacity">Explore →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal/3 border-t border-charcoal/8">
        <div className="container-site text-center">
          <h2 className="font-serif text-display-md text-charcoal mb-6">Ready to discuss a project?</h2>
          <Link href="/contact" className="btn-primary">Discuss a Project</Link>
        </div>
      </section>
    </>
  );
}
