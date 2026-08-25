"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Capabilities", href: "/capabilities" },
  {
    label: "Sectors",
    href: "/sectors",
    children: [
      { label: "Senior Living & Active Adult", href: "/sectors/senior-living" },
      { label: "Multifamily & Mixed Use", href: "/sectors/multifamily-mixed-use" },
      { label: "Commercial / Retail / Medical", href: "/sectors/commercial-retail-medical" },
      { label: "Industrial / Manufacturing / R&D", href: "/sectors/industrial-manufacturing-rd" },
      { label: "Hospitality & Entertainment", href: "/sectors/hospitality-entertainment" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Leadership", href: "/leadership" },
  { label: "Approach", href: "/approach" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const transparent = !scrolled && !menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-ivory/96 backdrop-blur-sm shadow-sm border-b border-charcoal/8"
          : "bg-transparent"
      }`}
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2 flex items-center">
            <Image
              src="/brand/logo-horizontal.png"
              alt="Landmark Creative Group LLC"
              width={220}
              height={60}
              className={`h-10 w-auto transition-all duration-300 ${transparent ? "brightness-0 invert" : ""}`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.href)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`text-[0.7rem] tracking-[0.12em] uppercase font-medium transition-colors flex items-center gap-1 ${
                    transparent
                      ? "text-ivory/80 hover:text-ivory"
                      : "text-charcoal/70 hover:text-charcoal"
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <svg className="w-2.5 h-2.5 opacity-50" viewBox="0 0 10 6" fill="none">
                      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  )}
                </Link>
                {item.children && activeDropdown === item.href && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-ivory border border-charcoal/10 shadow-lg py-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-5 py-3 text-xs tracking-[0.1em] uppercase font-medium text-charcoal/70 hover:text-charcoal hover:bg-charcoal/4 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className={`text-xs py-3 px-6 tracking-widest uppercase font-medium transition-colors border ${
                transparent
                  ? "border-ivory/60 text-ivory hover:bg-ivory hover:text-charcoal"
                  : "bg-charcoal text-ivory border-charcoal hover:bg-charcoal/80"
              }`}
            >
              Discuss a Project
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-px transition-all duration-200 ${transparent ? "bg-ivory" : "bg-charcoal"} ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-px transition-all duration-200 ${transparent ? "bg-ivory" : "bg-charcoal"} ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px transition-all duration-200 ${transparent ? "bg-ivory" : "bg-charcoal"} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-ivory border-t border-charcoal/10 py-6">
          <nav className="container-site flex flex-col gap-4" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block text-xs tracking-[0.15em] uppercase font-medium text-charcoal/80 hover:text-charcoal py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 flex flex-col gap-2 mt-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block text-xs tracking-[0.1em] uppercase text-charcoal/50 hover:text-charcoal/80 py-1"
                        onClick={() => setMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="btn-primary text-xs py-3 px-6 mt-2 self-start"
              onClick={() => setMenuOpen(false)}
            >
              Discuss a Project
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
