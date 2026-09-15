import Link from "next/link";
import Image from "next/image";

const footerNav = {
  company: [
    { label: "About", href: "/about" },
    { label: "Our Approach", href: "/approach" },
    { label: "Leadership", href: "/leadership" },
    { label: "Companies & Platforms", href: "/leadership/platforms" },
    { label: "Capital Partners", href: "/capital-partners" },
  ],
  capabilities: [
    { label: "Development Strategy", href: "/capabilities#development-strategy-feasibility" },
    { label: "Entitlements", href: "/capabilities#entitlements-public-coordination" },
    { label: "Construction Management", href: "/capabilities#construction-management" },
    { label: "Owner Representation", href: "/capabilities#owner-representation" },
    { label: "Closeout & Operational Readiness", href: "/capabilities#closeout-operational-readiness" },
  ],
  sectors: [
    { label: "Senior Living & Active Adult", href: "/sectors/senior-living" },
    { label: "Multifamily & Mixed Use", href: "/sectors/multifamily-mixed-use" },
    { label: "Commercial / Retail / Medical", href: "/sectors/commercial-retail-medical" },
    { label: "Industrial / Manufacturing / R&D", href: "/sectors/industrial-manufacturing-rd" },
    { label: "Hospitality & Entertainment", href: "/sectors/hospitality-entertainment" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-ivory/80">
      <div className="container-site py-20">
        {/* Top: Brand + CTA */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 pb-16 border-b border-ivory/10">
          <div>
            <div className="bg-ivory/95 inline-block px-4 py-3 mb-6">
              <Image
                src="/brand/logo-horizontal.png"
                alt="Landmark Creative Group LLC"
                width={220}
                height={135}
                className="h-11 w-auto"
              />
            </div>
            <p className="text-sm text-ivory/60 leading-relaxed max-w-sm">
              Development leadership for complex projects — from opportunity and site strategy through successful delivery.
            </p>
            <div className="architectural-rule mt-8 bg-brass" />
          </div>
          <div className="flex flex-col md:items-end md:text-right justify-between gap-6">
            <div>
              <p className="eyebrow-light mb-3">Start a Conversation</p>
              <p className="font-serif text-xl text-ivory mb-6">
                Have a site, an opportunity, or a project that needs experienced leadership?
              </p>
            </div>
            <Link href="/contact" className="btn-primary-light self-start md:self-end">
              Discuss a Project
            </Link>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          <div>
            <p className="eyebrow-light mb-5">Company</p>
            <ul className="flex flex-col gap-3">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ivory/60 hover:text-ivory transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow-light mb-5">Capabilities</p>
            <ul className="flex flex-col gap-3">
              {footerNav.capabilities.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ivory/60 hover:text-ivory transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow-light mb-5">Sectors</p>
            <ul className="flex flex-col gap-3">
              {footerNav.sectors.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ivory/60 hover:text-ivory transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-8 border-t border-ivory/10">
          <div className="flex flex-col gap-1">
            <p className="text-xs text-ivory/40">
              &copy; {new Date().getFullYear()} Landmark Creative Group LLC. All rights reserved.
            </p>
            <p className="text-[0.65rem] text-ivory/25 leading-relaxed max-w-xl">
              Individual project roles, ownership, and delivery relationships vary by project. Historical project experience referenced on this site does not automatically represent work completed by Landmark Creative Group LLC. Project-specific scope is available upon request where appropriate.
            </p>
          </div>
          <div className="flex gap-6">
            <Link href="/projects" className="text-xs text-ivory/40 hover:text-ivory/60 transition-colors">
              Projects
            </Link>
            <Link href="/contact" className="text-xs text-ivory/40 hover:text-ivory/60 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Brand line */}
      <div className="border-t border-ivory/5 bg-navy/50">
        <div className="container-site py-4 text-center">
          <p className="text-[0.6rem] tracking-[0.3em] uppercase text-ivory/20">
            Vision &middot; Capital &middot; Development &middot; Execution
          </p>
        </div>
      </div>
    </footer>
  );
}
