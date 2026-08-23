import type { Metadata } from "next";
import Link from "next/link";
import { leadership } from "@/data/leadership";
import { capabilities } from "@/data/capabilities";
import { getFeaturedProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Development Leadership for Complex Projects",
  description:
    "Landmark Creative Group brings integrated, owner-side development leadership to complex real estate projects — from feasibility and entitlement through construction management and operational readiness.",
};

const sectors = [
  {
    title: "Senior Living & Active Adult",
    href: "/sectors/senior-living",
    description: "Development strategy, entitlement, design coordination, and execution for senior living and active adult communities.",
  },
  {
    title: "Multifamily & Mixed Use",
    href: "/sectors/multifamily-mixed-use",
    description: "Owner-side leadership across multifamily and mixed-use development.",
  },
  {
    title: "Commercial / Retail / Medical",
    href: "/sectors/commercial-retail-medical",
    description: "Commercial, retail, and medical office development from feasibility through delivery.",
  },
  {
    title: "Industrial / Manufacturing / R&D",
    href: "/sectors/industrial-manufacturing-rd",
    description: "Advanced manufacturing, industrial, and R&D facilities requiring disciplined owner-side execution.",
  },
  {
    title: "Hospitality & Entertainment",
    href: "/sectors/hospitality-entertainment",
    description: "Complex hospitality, entertainment, and experiential development.",
  },
];

const proofStats = [
  { value: "20M+", label: "Square Feet", context: "SDP national commercial project experience" },
  { value: "30+", label: "States", context: "SDP general contractor licensing" },
  { value: "27+", label: "Years", context: "Scott Burdette — construction & development" },
  { value: "32+", label: "Years", context: "Mike Petersen — construction & development" },
];

const lifecycle = [
  { phase: "01", title: "Development Strategy & Feasibility" },
  { phase: "02", title: "Entitlements & Public Coordination" },
  { phase: "03", title: "Site Planning & Design Coordination" },
  { phase: "04", title: "Construction Management" },
  { phase: "04–05", title: "Owner Representation" },
  { phase: "05", title: "Closeout & Operational Readiness" },
];

export default function HomePage() {
  const featured = getFeaturedProjects().slice(0, 6);

  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-charcoal overflow-hidden" aria-label="Hero">
        {/* Background texture */}
        <div className="absolute inset-0 bg-navy-gradient opacity-80" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(245,240,224,0.3) 79px, rgba(245,240,224,0.3) 80px),
              repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(245,240,224,0.3) 79px, rgba(245,240,224,0.3) 80px)`,
          }}
        />

        <div className="container-site relative z-10 pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="max-w-4xl">
            <p className="eyebrow-light mb-6">Landmark Creative Group</p>

            <h1 className="font-serif text-ivory text-display-xl mb-8 text-balance">
              Development leadership for complex projects—from site strategy to successful delivery.
            </h1>

            <p className="text-ivory/60 text-lg leading-relaxed max-w-2xl mb-12">
              Landmark Creative Group brings together experienced, owner-side leadership across real estate investment, development, entitlement, construction management, and execution. Different disciplines. One integrated development perspective.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary-light">
                Discuss a Project
              </Link>
              <Link href="/projects" className="btn-ghost-light">
                View Project Experience
              </Link>
            </div>
          </div>
        </div>

        {/* Brand line */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-ivory/10 py-5">
          <div className="container-site">
            <p className="text-[0.6rem] tracking-[0.3em] uppercase text-ivory/30">
              Vision &middot; Capital &middot; Development &middot; Execution
            </p>
          </div>
        </div>
      </section>

      {/* ─── PROOF STATS ───────────────────────────────────────────────────── */}
      <section className="bg-ivory border-b border-charcoal/8" aria-label="Experience metrics">
        <div className="container-site py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-charcoal/10">
            {proofStats.map((stat) => (
              <div key={stat.value} className="lg:px-10 first:lg:pl-0 last:lg:pr-0">
                <p className="font-serif text-4xl md:text-5xl text-charcoal font-medium mb-2">{stat.value}</p>
                <p className="text-xs tracking-[0.15em] uppercase font-medium text-graphite mb-1">{stat.label}</p>
                <p className="text-xs text-graphite/50 leading-snug">{stat.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INTEGRATED PLATFORM ───────────────────────────────────────────── */}
      <section className="py-section" aria-label="Integrated platform">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="eyebrow mb-5">The Landmark Creative Group Platform</p>
              <h2 className="font-serif text-display-lg text-charcoal mb-6 text-balance">
                Different disciplines. One integrated development perspective.
              </h2>
              <div className="architectural-rule mb-6" />
              <p className="prose-editorial mb-6">
                Landmark Creative Group is the integrated platform connecting experienced leadership across capital strategy, development, entitlement, construction management, owner representation, and execution.
              </p>
              <p className="prose-editorial mb-10">
                Rather than five separate résumés, this is a coordinated development leadership capability — built to apply the right experience at the right phase of a complex project.
              </p>
              <Link href="/about" className="btn-ghost">
                About the Group
              </Link>
            </div>

            {/* Lifecycle Visual */}
            <div className="bg-charcoal/3 border border-charcoal/8 p-8">
              <p className="eyebrow mb-8">Full Development Lifecycle</p>
              <div className="flex flex-col gap-0">
                {lifecycle.map((item, i) => (
                  <div
                    key={item.phase}
                    className={`flex items-start gap-5 py-5 ${i < lifecycle.length - 1 ? "border-b border-charcoal/8" : ""}`}
                  >
                    <span className="text-[0.6rem] tracking-[0.15em] uppercase text-brass font-medium mt-0.5 w-8 shrink-0">
                      {item.phase}
                    </span>
                    <span className="font-medium text-charcoal text-sm">{item.title}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-charcoal/8">
                <p className="text-xs text-graphite/50 italic">From feasibility through closeout.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTORS ───────────────────────────────────────────────────────── */}
      <section className="py-section bg-charcoal" aria-label="Sectors">
        <div className="container-site">
          <div className="mb-14">
            <p className="eyebrow-light mb-5">Sectors</p>
            <h2 className="font-serif text-display-md text-ivory text-balance max-w-2xl">
              Experience across the development types that demand sophisticated owner-side leadership.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ivory/8">
            {sectors.map((sector) => (
              <Link
                key={sector.href}
                href={sector.href}
                className="group bg-charcoal p-8 hover:bg-navy/60 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory focus-visible:ring-inset"
              >
                <p className="text-sm font-medium text-ivory mb-3 group-hover:text-ivory/90 leading-snug">
                  {sector.title}
                </p>
                <p className="text-xs text-ivory/40 leading-relaxed group-hover:text-ivory/55 transition-colors">
                  {sector.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-brass text-[0.65rem] tracking-widest uppercase font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn More</span>
                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NATIONAL CONSTRUCTION EXPERIENCE (Scott/SDP Feature) ──────────── */}
      <section className="py-section border-b border-charcoal/8" aria-label="National construction experience">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Visual */}
            <div className="relative">
              <div className="bg-charcoal/4 border border-charcoal/10 aspect-[4/3] flex flex-col justify-end p-8">
                <div className="mb-auto">
                  <div className="grid grid-cols-2 gap-4 mb-8 mt-8">
                    {[
                      { v: "20M+", l: "Square Feet" },
                      { v: "30+", l: "States Licensed" },
                      { v: "27+", l: "Years Experience" },
                      { v: "6+", l: "Sectors" },
                    ].map((s) => (
                      <div key={s.l} className="border border-charcoal/12 p-4">
                        <p className="font-serif text-3xl text-charcoal font-medium">{s.v}</p>
                        <p className="text-[0.65rem] tracking-[0.1em] uppercase text-graphite/60 mt-1">{s.l}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="eyebrow mb-2">Strategic Development Partners LLC</p>
                  <p className="text-xs text-graphite/60">National commercial construction platform</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-navy opacity-10" />
            </div>

            {/* Right: Content */}
            <div>
              <p className="eyebrow mb-5">National Construction Experience</p>
              <h2 className="font-serif text-display-md text-charcoal mb-6 text-balance">
                A nationally scaled commercial construction platform with 30+ states of licensure.
              </h2>
              <div className="architectural-rule mb-6" />
              <p className="prose-editorial mb-5">
                Scott Burdette's platform, Strategic Development Partners LLC, represents one of the core proof pillars of Landmark Creative Group — a documented national commercial construction capability spanning retail, industrial, R&D, advanced manufacturing, hospitality, entertainment, active living, and care sectors.
              </p>
              <p className="prose-editorial mb-5">
                SDP's documented project experience spans more than 20 million square feet across a national footprint, with general contractor licensing in 30+ states enabling engagement with nationally scaled clients and multi-site programs.
              </p>
              <p className="prose-editorial mb-10">
                This is not a regional general contractor. This is a national-scale owner-side construction platform with sector depth across industrial and R&D projects — including documented work on Rivian Automotive, Redwood EV Recycling, Nuro Robotics, Solarlink, and Multimatic R&D facilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/projects?platform=strategic-development-partners" className="btn-primary">
                  View SDP Projects
                </Link>
                <Link href="/leadership/scott-burdette" className="btn-ghost">
                  Scott Burdette
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SENIOR LIVING FEATURE (Mark) ──────────────────────────────────── */}
      <section className="py-section bg-navy text-ivory" aria-label="Senior living development">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow-light mb-5">Senior Living & Active Adult</p>
              <h2 className="font-serif text-display-md text-ivory mb-6 text-balance">
                Development leadership in senior living — from site strategy through entitlement and execution.
              </h2>
              <div className="w-12 h-px bg-brass mb-6" />
              <p className="text-ivory/65 leading-relaxed mb-5" style={{ fontSize: "1.05rem" }}>
                Senior living development is technically complex, politically sensitive, and operationally demanding. The combination of entitlement risk, care-operator programming, specialized regulatory requirements, and operational readiness creates a development environment that rewards deep, sector-specific experience.
              </p>
              <p className="text-ivory/65 leading-relaxed mb-5" style={{ fontSize: "1.05rem" }}>
                Mark Orshoski brings documented senior living and active adult development experience across Arizona and the Southwest — including Carefree senior living communities and Elegance Senior Living projects — complemented by SDP's documented experience in active living, retirement, and care facility construction across multiple markets.
              </p>
              <p className="text-ivory/65 leading-relaxed mb-10" style={{ fontSize: "1.05rem" }}>
                Landmark Creative Group approaches senior living development with the depth of teams that have navigated entitlement, design coordination, operator integration, and operational readiness on real projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/sectors/senior-living" className="btn-primary-light">
                  Senior Living Sector
                </Link>
                <Link href="/leadership/mark-orshoski" className="btn-ghost-light">
                  Mark Orshoski
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-navy-gradient border border-ivory/10 p-8 aspect-[4/3] flex flex-col justify-between">
                <div>
                  <p className="eyebrow-light mb-4">Senior Living Capabilities</p>
                  <div className="flex flex-col gap-3">
                    {[
                      "Community development strategy and site selection",
                      "Entitlement, rezoning, and public coordination",
                      "Care operator programming and integration",
                      "Design coordination — architecture through FF&E",
                      "Construction management and owner representation",
                      "Pre-opening and operational readiness",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full bg-brass mt-2 shrink-0" />
                        <p className="text-sm text-ivory/65">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-ivory/10">
                  <p className="text-xs text-ivory/30 italic">
                    From feasibility through operational readiness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SELECTED PROJECT EXPERIENCE ───────────────────────────────────── */}
      <section className="py-section" aria-label="Selected project experience">
        <div className="container-site">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <p className="eyebrow mb-5">Selected Leadership & Project Experience</p>
              <h2 className="font-serif text-display-md text-charcoal text-balance">
                A curated view of the group&rsquo;s documented project experience.
              </h2>
            </div>
            <Link href="/projects" className="btn-ghost shrink-0">
              View All Projects
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((project) => (
              <div
                key={project.id}
                className="border border-charcoal/10 p-6 hover:border-charcoal/25 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <p className="font-medium text-charcoal text-sm leading-snug">{project.name}</p>
                  {project.platform && (
                    <span className="shrink-0 text-[0.6rem] tracking-[0.1em] uppercase text-brass font-medium border border-brass/30 px-2 py-1">
                      SDP
                    </span>
                  )}
                </div>
                {project.location && (
                  <p className="text-xs text-graphite/50 mb-3">{project.location}</p>
                )}
                {project.summary && (
                  <p className="text-xs text-graphite/65 leading-relaxed line-clamp-3">{project.summary}</p>
                )}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.sector.slice(0, 2).map((s) => (
                    <span key={s} className="text-[0.6rem] tracking-[0.08em] uppercase text-graphite/40 border border-charcoal/10 px-2 py-0.5">
                      {s.replace(/-/g, " / ").replace("rd", "R&D")}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-charcoal/8">
            <p className="text-xs text-graphite/40 italic max-w-2xl">
              Individual project roles, ownership, and delivery relationships vary by project. Historical project experience referenced here does not automatically represent work completed by Landmark Creative Group LLC. Project-specific scope is available upon request.
            </p>
          </div>
        </div>
      </section>

      {/* ─── LEADERSHIP EDITORIAL ──────────────────────────────────────────── */}
      <section className="py-section bg-charcoal/3 border-y border-charcoal/8" aria-label="Leadership">
        <div className="container-site">
          <p className="eyebrow mb-5">Integrated Leadership</p>
          <h2 className="font-serif text-display-md text-charcoal mb-12 text-balance max-w-2xl">
            Five principals. Five dimensions of owner-side development experience.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.map((leader) => (
              <Link
                key={leader.id}
                href={`/leadership/${leader.id}`}
                className="group bg-ivory border border-charcoal/10 p-8 hover:border-charcoal/25 hover:shadow-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2"
              >
                <div className="w-10 h-10 bg-charcoal/8 rounded-full flex items-center justify-center mb-6 group-hover:bg-navy group-hover:text-ivory transition-colors">
                  <span className="text-xs font-medium text-charcoal group-hover:text-ivory">
                    {leader.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </span>
                </div>
                <p className="font-serif font-medium text-charcoal text-lg mb-2">{leader.name}</p>
                <p className="text-xs tracking-[0.08em] uppercase text-graphite/55 mb-4 leading-snug">{leader.shortTitle}</p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {leader.focus.slice(0, 3).map((f) => (
                    <span key={f} className="text-[0.6rem] tracking-tight text-graphite/50 border border-charcoal/10 px-1.5 py-0.5">
                      {f}
                    </span>
                  ))}
                </div>
                <span className="text-[0.65rem] tracking-widest uppercase text-brass font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Profile →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/leadership" className="btn-ghost">
              Full Leadership Profiles
            </Link>
          </div>
        </div>
      </section>

      {/* ─── APPROACH ──────────────────────────────────────────────────────── */}
      <section className="py-section" aria-label="Approach">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow mb-5">Our Approach</p>
              <h2 className="font-serif text-display-md text-charcoal mb-6 text-balance">
                Ready to operate — not simply ready to occupy.
              </h2>
              <div className="architectural-rule mb-6" />
              <p className="prose-editorial mb-6">
                The goal of every project engagement is a building, community, or facility that is genuinely ready to operate — not a certificate of occupancy and a handshake.
              </p>
              <p className="prose-editorial mb-10">
                We approach development from the owner&rsquo;s side of the table at every phase. That means early decisions are made with full visibility into schedule, budget, entitlement risk, construction complexity, and operational requirements — before those decisions become expensive.
              </p>
              <Link href="/approach" className="btn-ghost">
                View Our Approach
              </Link>
            </div>

            <div>
              <div className="flex flex-col gap-0">
                {[
                  { step: "Strategy", desc: "Opportunity through feasibility — early risk visibility, buildable program, financeable assumptions." },
                  { step: "Development", desc: "Entitlement, planning, design coordination — aligned to budget, schedule, and operational intent." },
                  { step: "Build", desc: "Disciplined construction management and owner representation through substantial completion." },
                  { step: "Closeout", desc: "Commissioning, operational readiness, and handoff — from permit to opening." },
                ].map((item, i) => (
                  <div key={item.step} className={`flex gap-6 py-7 ${i < 3 ? "border-b border-charcoal/8" : ""}`}>
                    <div className="shrink-0 w-20">
                      <span className="font-serif text-3xl text-charcoal/15 font-medium">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <div>
                      <p className="font-medium text-charcoal mb-2 tracking-tight">{item.step}</p>
                      <p className="text-sm text-graphite/65 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-charcoal text-ivory" aria-label="Contact CTA">
        <div className="container-site text-center">
          <p className="eyebrow-light mb-6">Start a Conversation</p>
          <h2 className="font-serif text-display-lg text-ivory mb-6 text-balance max-w-2xl mx-auto">
            Have a site, an opportunity, or a project that needs experienced leadership?
          </h2>
          <p className="text-ivory/55 text-lg mb-12 max-w-xl mx-auto">
            Landmark Creative Group brings owner-side development leadership to complex projects from the earliest stages through operational readiness.
          </p>
          <Link href="/contact" className="btn-primary-light">
            Discuss a Project
          </Link>
        </div>
      </section>
    </>
  );
}
