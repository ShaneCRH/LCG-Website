import type { Metadata } from "next";
import Link from "next/link";
import { leadership } from "@/data/leadership";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "The Landmark Creative Group leadership team brings together experienced owner-side professionals across development strategy, entitlement, capital strategy, construction management, and execution.",
};

export default function LeadershipPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-20 bg-navy text-ivory">
        <div className="container-site">
          <p className="eyebrow-light mb-6">Leadership</p>
          <h1 className="font-serif text-display-lg text-ivory mb-8 text-balance max-w-3xl">
            Five principals. Five dimensions of development experience.
          </h1>
          <div className="w-12 h-px bg-brass mb-8" />
          <p className="text-ivory/60 text-xl leading-relaxed max-w-2xl">
            Different disciplines. One integrated development perspective.
          </p>
        </div>
      </section>

      {/* The Concept */}
      <section className="py-section border-b border-charcoal/8">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <p className="eyebrow mb-5">Integrated Leadership</p>
            <h2 className="font-serif text-display-md text-charcoal mb-8 text-balance">
              Not a team of generalists. A platform of specialists.
            </h2>
            <div className="w-12 h-px bg-brass mx-auto mb-8" />
            <p className="prose-editorial text-center mb-5">
              Landmark Creative Group is built on the premise that complex real estate development requires experienced leadership across multiple distinct disciplines — not a single generalist wearing multiple hats.
            </p>
            <p className="prose-editorial text-center">
              The five principals of Landmark Creative Group bring complementary, deeply developed capabilities across the full development lifecycle. The result is an integrated platform that can engage a project from feasibility through closeout with the right experience at each phase.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Profiles */}
      <section className="py-section">
        <div className="container-site">
          <div className="flex flex-col gap-0">
            {leadership.map((leader, i) => (
              <article
                key={leader.id}
                className={`grid lg:grid-cols-3 gap-12 py-16 ${i < leadership.length - 1 ? "border-b border-charcoal/8" : ""}`}
              >
                {/* Name / Title Column */}
                <div>
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-charcoal/8 flex items-center justify-center mb-6 shrink-0">
                    {leader.imageUrl ? (
                      <img src={leader.imageUrl} alt={leader.name} className="w-full h-full object-cover object-center" />
                    ) : (
                      <span className="font-serif font-medium text-charcoal text-xl">
                        {leader.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                      </span>
                    )}
                  </div>
                  <h2 className="font-serif text-display-sm text-charcoal mb-3">
                    {leader.name}
                  </h2>
                  <p className="text-xs tracking-[0.1em] uppercase text-graphite/55 mb-6 leading-snug">
                    {leader.title}
                  </p>
                  <div className="architectural-rule mb-6" />
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {leader.focus.map((f) => (
                      <span key={f} className="text-[0.6rem] tracking-tight text-graphite/50 border border-charcoal/10 px-2 py-1">
                        {f}
                      </span>
                    ))}
                  </div>
                  <Link href={`/leadership/${leader.id}`} className="btn-ghost text-xs py-3 px-6">
                    Full Profile
                  </Link>
                </div>

                {/* Bio Column */}
                <div className="lg:col-span-2">
                  <div className="space-y-5 prose-editorial">
                    {leader.bio.slice(0, 2).map((para, j) => (
                      <p key={j}>{para}</p>
                    ))}
                  </div>
                  {leader.platforms && leader.platforms.length > 0 && (
                    <div className="mt-8 pt-6 border-t border-charcoal/8">
                      <p className="eyebrow mb-3">Associated Platforms</p>
                      <div className="flex flex-wrap gap-3">
                        {leader.platforms.map((p) => (
                          <Link
                            key={p}
                            href={`/leadership/platforms#${p}`}
                            className="text-[0.65rem] tracking-[0.08em] uppercase text-graphite/60 border border-charcoal/15 px-3 py-1.5 hover:border-charcoal/40 hover:text-charcoal transition-colors"
                          >
                            {p.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Link */}
      <section className="py-16 bg-charcoal/3 border-y border-charcoal/8">
        <div className="container-site">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="eyebrow mb-3">Associated Companies & Platforms</p>
              <h2 className="font-serif text-display-sm text-charcoal mb-3">
                The platforms and companies behind the experience.
              </h2>
              <p className="prose-editorial text-sm">
                Strategic Development Partners, Vanguard Building, Creative Roots Holdings, Elegance Senior Living, and Transcendent Development.
              </p>
            </div>
            <Link href="/leadership/platforms" className="btn-ghost shrink-0">
              View All Platforms
            </Link>
          </div>
        </div>
      </section>

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
