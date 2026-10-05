export interface NewsCategoryMeta {
  label: string;
  description: string;
  accent: "brass" | "navy" | "charcoal";
  pattern: "grid" | "diagonal" | "stack" | "dots";
}

/**
 * Valid category keys for src/content/news/*.md frontmatter.
 * Mirrors LCG's development lifecycle (capabilities.ts) and sector groupings
 * (sectors.ts) so every post maps cleanly onto an existing site section.
 */
export const newsCategories = {
  "development-strategy-feasibility": {
    label: "Development Strategy & Feasibility",
    description: "Site selection, feasibility, due diligence, and early development planning.",
    accent: "brass",
    pattern: "grid",
  },
  "entitlements-public-coordination": {
    label: "Entitlements & Public Coordination",
    description: "Rezoning, land use, permitting, and regulatory/public approval topics.",
    accent: "navy",
    pattern: "diagonal",
  },
  "capital-strategy-financing": {
    label: "Capital Strategy & Financing",
    description: "Capitalization, acquisitions, partnership structuring, and investment strategy.",
    accent: "brass",
    pattern: "stack",
  },
  "construction-management-execution": {
    label: "Construction Management & Execution",
    description: "Procurement, scheduling, budget control, and on-site construction delivery.",
    accent: "charcoal",
    pattern: "grid",
  },
  "owner-representation-closeout": {
    label: "Owner Representation & Closeout",
    description: "Owner-side advisory, commissioning, operational readiness, and project handoff.",
    accent: "navy",
    pattern: "dots",
  },
  "senior-living-development": {
    label: "Senior Living & Active Adult Development",
    description: "Senior living and active adult community development topics.",
    accent: "brass",
    pattern: "dots",
  },
  "commercial-industrial-development": {
    label: "Commercial, Retail, Medical & Industrial",
    description: "Commercial, retail, medical office, industrial, manufacturing, and R&D development.",
    accent: "charcoal",
    pattern: "diagonal",
  },
  "multifamily-hospitality-development": {
    label: "Multifamily & Hospitality Development",
    description: "Multifamily, mixed-use, hospitality, and entertainment development topics.",
    accent: "navy",
    pattern: "stack",
  },
} as const satisfies Record<string, NewsCategoryMeta>;

export type NewsCategoryKey = keyof typeof newsCategories;

export function isNewsCategoryKey(value: string | undefined): value is NewsCategoryKey {
  return !!value && value in newsCategories;
}

export function getNewsCategoryMeta(key?: string): NewsCategoryMeta | undefined {
  return isNewsCategoryKey(key) ? newsCategories[key] : undefined;
}
