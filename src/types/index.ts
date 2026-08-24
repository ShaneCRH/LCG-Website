export type VerificationState =
  | "verified"
  | "partially-verified"
  | "historical-source"
  | "research-context"
  | "internal-review-required";

export type ContentLevel = "index" | "feature" | "case-study";

export type Sector =
  | "senior-living"
  | "multifamily-mixed-use"
  | "commercial-retail-medical"
  | "industrial-manufacturing-rd"
  | "hospitality-entertainment"
  | "residential"
  | "active-living"
  | "skilled-care"
  | "other";

export type LeaderId = "mark-orshoski" | "scott-burdette" | "mike-petersen" | "marli-tarbaux" | "shane-evans";

export type PlatformId =
  | "strategic-development-partners"
  | "vanguard-building"
  | "creative-roots-holdings"
  | "elegance-senior-living"
  | "transcendent-development";

export interface Project {
  id: string;
  name: string;
  alternateName?: string;
  sector: Sector[];
  location?: string;
  state?: string;
  scale?: string;
  status?: "completed" | "in-progress" | "planned" | "historical";
  role?: string;
  leaders?: LeaderId[];
  platform?: PlatformId;
  summary?: string;
  imageUrl?: string;
  imageVerified?: boolean;
  verificationState: VerificationState;
  contentLevel: ContentLevel;
  notes?: string;
  isFeatured?: boolean;
}

export interface Leader {
  id: LeaderId;
  name: string;
  title: string;
  shortTitle: string;
  focus: string[];
  bio: string[];
  credentials?: string[];
  imageUrl?: string;
  imagePosition?: string;
  platforms?: PlatformId[];
}

export interface Platform {
  id: PlatformId;
  name: string;
  shortName?: string;
  description: string;
  leaders?: LeaderId[];
  website?: string;
}

export interface Capability {
  id: string;
  title: string;
  phase: string;
  description: string;
  services: string[];
}

export interface SectorPage {
  id: Sector;
  title: string;
  shortTitle: string;
  description: string;
  leaders: LeaderId[];
  capabilities: string[];
}
