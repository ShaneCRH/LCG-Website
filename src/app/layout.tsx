import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: {
    default: "Landmark Creative Group — Development Leadership for Complex Projects",
    template: "%s | Landmark Creative Group",
  },
  description:
    "Landmark Creative Group brings experienced, owner-side development leadership to complex real estate projects — from development strategy and entitlement through construction management and operational readiness.",
  keywords: [
    "real estate development",
    "development strategy",
    "feasibility",
    "entitlements",
    "rezoning",
    "owner representation",
    "construction management",
    "senior living development",
    "active adult development",
    "multifamily development",
    "industrial development",
    "commercial development",
    "due diligence",
    "project execution",
    "development leadership",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Landmark Creative Group",
    title: "Landmark Creative Group — Development Leadership for Complex Projects",
    description:
      "Owner-side development leadership from feasibility through closeout. Vision. Capital. Development. Execution.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Landmark Creative Group LLC",
              description:
                "Development leadership for complex real estate projects — from site strategy to successful delivery.",
              url: "https://landmarkcreativegroup.com",
              areaServed: "US",
              serviceType: [
                "Real Estate Development",
                "Development Strategy",
                "Entitlements",
                "Construction Management",
                "Owner Representation",
              ],
            }),
          }}
        />
      </head>
      <body>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
