import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { sectorData } from "@/data/sectors";
import { leadership } from "@/data/leadership";
import { getProjectsBySector } from "@/data/projects";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return Object.keys(sectorData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const sector = sectorData[params.slug as keyof typeof sectorData];
  if (!sector) return { title: "Sector Not Found" };
  return {
    title: sector.title,
    description: sector.description.slice(0, 160),
  };
}

export default function SectorPage({ params }: Props) {
  const sector = sectorData[params.slug as keyof typeof sectorData];
  if (!sector) notFound();

  const sectorLeaders = leadership.filter((l) =>
    sector.leaders.includes(l.id)
  );

  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-20 bg-charcoal text-ivory">
        <div className="container-site">
          <Link href="/sectors" className="eyebrow-light mb-8 inline-flex items-center gap-2 hover:text-ivory/80 transition-colors">
            <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
              <path d="M10 6H2M5 3L2 6l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Sectors
          </Link>
          <h1 className="font-serif text-display-lg text-ivory mb-6 text-balance max-w-3xl mt-6">
            {sector.title}
          </h1>
          <div className="w-12 h-px bg-brass mb-6" />
          <p className="text-ivory/60 text-xl leading-relaxed max-w-2xl">
            {sector.heroTagline}
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-section border-b border-charcoal/8">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="eyebrow mb-5">The Sector</p>
              <h2 className="font-serif text-display-md text-charcoal mb-6 text-balance">{sector.title}</h2>
              <div className="architectural-rule mb-6" />
              <p className="prose-editorial mb-6">{sector.description}</p>
              {sector.marketNote && (
                <p className="prose-editorial">{sector.marketNote}</p>
              )}
            </div>
            <div>
              <p className="eyebrow mb-5">Capabilities in This Sector</p>
              <ul className="flex flex-col gap-0">
                {sector.capabilities.map((cap, i) => (
                  <li key={cap} className={`flex items-start gap-4 py-4 ${i < sector.capabilities.length - 1 ? "border-b border-charcoal/8" : ""}`}>
                    <div className="w-1 h-1 rounded-full bg-brass mt-2 shrink-0" />
                    <span className="text-sm text-graphite leading-relaxed">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Experience */}
      {sector.featured && sector.featured.length > 0 && (
        <section className="py-section bg-charcoal/3 border-b border-charcoal/8">
          <div className="container-site">
            <p className="eyebrow mb-5">Selected Experience</p>
            <h2 className="font-serif text-display-sm text-charcoal mb-8 text-balance max-w-xl">
              Documented project experience in this sector.
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sector.featured.map((item) => (
                <div key={item} className="bg-ivory border border-charcoal/10 p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full bg-brass mt-2 shrink-0" />
                    <p className="text-sm text-charcoal leading-relaxed">{item}</p>
                  </div>
                </div>
              ))}
            </div>
            {"note" in sector && sector.note && (
              <p className="mt-6 text-xs text-graphite/40 italic">{sector.note}</p>
            )}
            <p className="mt-4 text-xs text-graphite/35 italic">
              Individual project roles and scope vary. Project-specific information available upon request.
            </p>
          </div>
        </section>
      )}

      {/* Leadership */}
      {sectorLeaders.length > 0 && (
        <section className="py-section border-b border-charcoal/8">
          <div className="container-site">
            <p className="eyebrow mb-5">Relevant Leadership</p>
            {sector.leaderNote && (
              <p className="prose-editorial mb-10 max-w-2xl">{sector.leaderNote}</p>
            )}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectorLeaders.map((leader) => (
                <Link
                  key={leader.id}
                  href={`/leadership/${leader.id}`}
                  className="group border border-charcoal/10 p-6 hover:border-charcoal/25 hover:shadow-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
                >
                  <div className="w-10 h-10 bg-charcoal/8 rounded-full flex items-center justify-center mb-4 group-hover:bg-navy group-hover:text-ivory transition-colors">
                    <span className="text-xs font-medium text-charcoal group-hover:text-ivory">
                      {leader.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </span>
                  </div>
                  <p className="font-serif font-medium text-charcoal mb-1">{leader.name}</p>
                  <p className="text-xs text-graphite/50 tracking-wide mb-4">{leader.shortTitle}</p>
                  <span className="text-[0.65rem] tracking-widest uppercase text-brass font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Full Profile →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20">
        <div className="container-site">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2 className="font-serif text-display-sm text-charcoal mb-3">
                Have a {sector.title.toLowerCase()} project?
              </h2>
              <p className="text-graphite/60 text-sm">Let&rsquo;s discuss your project, site, or opportunity.</p>
            </div>
            <div className="flex gap-4 flex-wrap">
              <Link href="/contact" className="btn-primary">Discuss a Project</Link>
              <Link href="/projects" className="btn-ghost">Project Experience</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
