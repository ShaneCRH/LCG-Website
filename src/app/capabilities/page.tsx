import type { Metadata } from "next";
import Link from "next/link";
import { capabilities } from "@/data/capabilities";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Landmark Creative Group provides owner-side development leadership across the full project lifecycle — from development strategy and feasibility through entitlements, construction management, and operational readiness.",
};

export default function CapabilitiesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-20 bg-navy text-ivory">
        <div className="container-site">
          <p className="eyebrow-light mb-6">Capabilities</p>
          <h1 className="font-serif text-display-lg text-ivory mb-8 text-balance max-w-3xl">
            Owner-side leadership across the full development lifecycle.
          </h1>
          <div className="w-12 h-px bg-brass mb-8" />
          <p className="text-ivory/60 text-xl leading-relaxed max-w-2xl">
            From feasibility through closeout.
          </p>
        </div>
      </section>

      {/* Lifecycle Overview */}
      <section className="py-section border-b border-charcoal/8">
        <div className="container-site">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1">
              <p className="eyebrow mb-5">The Development Problem</p>
              <h2 className="font-serif text-display-sm text-charcoal mb-5 text-balance">
                Every phase creates risk. We manage it from the owner&rsquo;s side.
              </h2>
              <div className="architectural-rule mb-5" />
              <p className="prose-editorial mb-5">
                Development projects fail — or underperform — because of decisions made in phases before the current one. Feasibility assumptions that don&rsquo;t survive entitlement. Design programs that don&rsquo;t reflect construction cost reality. Procurement decisions that weren&rsquo;t made early enough.
              </p>
              <p className="prose-editorial">
                Our capabilities span the complete lifecycle because owner-side accountability must span it too.
              </p>
            </div>

            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {capabilities.map((cap) => (
                  <a
                    key={cap.id}
                    href={`#${cap.id}`}
                    className="group border border-charcoal/10 p-4 hover:border-charcoal/25 hover:bg-charcoal/3 transition-all"
                  >
                    <span className="text-[0.6rem] tracking-[0.15em] uppercase text-brass font-medium block mb-2">{cap.phase}</span>
                    <span className="text-xs font-medium text-charcoal leading-snug group-hover:text-navy">{cap.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capability Sections */}
      {capabilities.map((cap, i) => (
        <section
          key={cap.id}
          id={cap.id}
          className={`py-section ${i % 2 === 1 ? "bg-charcoal/3" : ""} border-b border-charcoal/8`}
        >
          <div className="container-site">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="text-[0.65rem] tracking-[0.2em] uppercase text-brass font-medium block mb-5">
                  Phase {cap.phase}
                </span>
                <h2 className="font-serif text-display-md text-charcoal mb-6 text-balance">{cap.title}</h2>
                <div className="architectural-rule mb-6" />
                <p className="prose-editorial">{cap.description}</p>
              </div>

              <div>
                <p className="eyebrow mb-5">Services Include</p>
                <ul className="flex flex-col gap-0">
                  {cap.services.map((service, j) => (
                    <li
                      key={service}
                      className={`flex items-start gap-4 py-4 ${j < cap.services.length - 1 ? "border-b border-charcoal/8" : ""}`}
                    >
                      <div className="w-1 h-1 rounded-full bg-brass mt-2 shrink-0" />
                      <span className="text-sm text-graphite leading-relaxed">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* How We Engage */}
      <section className="py-section">
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="eyebrow mb-5">How We Engage</p>
            <h2 className="font-serif text-display-md text-charcoal mb-6 text-balance">
              Phase-specific or full-lifecycle. Early is better.
            </h2>
            <div className="architectural-rule mb-6" />
            <div className="prose-editorial space-y-5 mb-10">
              <p>
                Landmark Creative Group can engage at any phase of development — but the earlier in the lifecycle, the more value owner-side leadership can create. Feasibility decisions made with experienced construction, entitlement, and operational perspective are almost always better decisions.
              </p>
              <p>
                We do not apply a rigid service model to every project. We bring the relevant capabilities to each project&rsquo;s specific phase, complexity, and risk profile.
              </p>
              <p>
                There are no guarantees about timeline or budget outcomes. Development is complex, and honest owner-side leadership means giving clients clear visibility into risk — not promises that eliminate it.
              </p>
            </div>
            <Link href="/contact" className="btn-primary">
              Discuss a Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
