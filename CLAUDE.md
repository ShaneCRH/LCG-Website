# Landmark Creative Group — Site Notes

## Business facts (do not contradict or embellish)

- **Legal name:** Landmark Creative Group LLC ("LCG")
- **What it is:** An integrated real estate development *leadership* platform — not a single-discipline firm. It coordinates five experienced, owner-side principals across capital strategy, development strategy/feasibility, entitlements, design coordination, construction management, owner representation, and closeout/operational readiness.
- **Base:** Arizona-based, with national engagement capability through its associated platforms.
- **Principals & associated platforms** (independent entities LCG coordinates, does not own/control):
  - **Scott Burdette** — Strategic Development Partners LLC ("SDP"): national commercial construction platform, 20M+ sq ft documented experience, GC licensed in 30+ states. Sectors: retail, industrial, R&D, manufacturing, hospitality, entertainment, active living.
  - **Mike Petersen** — Vanguard Building Corporation LLC: construction management/execution, complex hospitality, entertainment, commercial, mixed-use.
  - **Marli Tarbaux & Shane Evans** — Creative Roots Holdings LLC: investment/ownership platform — acquisitions, capital strategy, partnership development, project-level investment.
  - **Mark Orshoski** — Elegance Senior Living LLC and Transcendent Development LLC: senior living programming/positioning/entitlement/execution; development strategy and entitlement across residential, mixed-use, specialty sectors.
- **Sectors:** Senior Living & Active Adult; Multifamily & Mixed Use; Commercial / Retail / Medical Office; Industrial / Manufacturing / R&D; Hospitality & Entertainment.
- **Lifecycle/capabilities (in order):** Development Strategy & Feasibility → Entitlements & Public Coordination → Site Planning & Design Coordination → Construction Management → Owner Representation → Closeout & Operational Readiness.
- **Tone:** institutional, owner-side, no sales-funnel language. Never invent specific project financials, specific regulatory citations, client names, or partner/platform names not already listed above.
- **No public street address or phone number is published on the site.** Do not invent one. Direct readers to `/contact` instead.
- Primary CTA across the site is "Discuss a Project" → `/contact`.

## News & Insights (`/news`) — SEO & AEO/GEO conventions

This section exists to build organic and AI-answer-engine (AEO/GEO) visibility for Landmark Creative Group among people researching real estate development strategy, entitlements, capital structuring, construction management, and owner representation — particularly around the sectors LCG works in.

Content lives as Markdown in `src/content/news/<slug>.md`, rendered by `src/lib/news.ts` and `src/app/news/[slug]/page.tsx`.

Every new post must:

- Open the body with a **`**Quick answer:**`** paragraph that fully and directly answers the title's implicit question in 2–4 sentences, standalone and correct without reading the rest of the post.
- Phrase at least one `##` heading as a direct question, with the answer immediately beneath it.
- Include a `category` frontmatter field using one of the valid keys in `src/lib/newsCategories.ts`:
  `development-strategy-feasibility`, `entitlements-public-coordination`, `capital-strategy-financing`, `construction-management-execution`, `owner-representation-closeout`, `senior-living-development`, `commercial-industrial-development`, `multifamily-hospitality-development`. Omit only if truly nothing fits.
- Include real internal links (not just `/contact`) to at least one other relevant page: `/capabilities`, `/sectors`, `/sectors/<slug>`, `/approach`, `/about`, `/leadership`, `/capital-partners`, `/news`, or another existing post's `/news/<slug>`.
- Include full frontmatter: `title`, `slug`, `description` (<=155 chars), `excerpt`, `date` (today, ISO format), `keywords` (4–6 phrases), `category`.
- Body length ~600–900 words, confident/plain-spoken institutional tone (not consumer-casual), no H1 (the page renders the title separately).
- Never invent specific prices, specific regulatory citations/statutes, client/project names, or partner names not already established in this file or elsewhere in the repo.

### Topic bank (pick one not already closely covered)

- How to evaluate development feasibility before committing capital
- What makes a site "entitlement-ready" and how long entitlement typically takes
- Owner representation vs. general contracting — what the difference actually is
- How capital structuring and partnership strategy shape a development's design
- What due diligence should cover before a site goes under contract
- Senior living development: what makes it different from multifamily
- Industrial/R&D facility development: specialized systems and schedule risk
- Hospitality/entertainment development: brand standards and compressed openings
- Commercial/retail/medical office rollout coordination across multiple sites
- How construction management reduces change-order and schedule risk
- What "operational readiness" means and why occupancy isn't the finish line
- Questions a landowner or capital partner should ask before engaging a development team
- How entitlement risk gets priced into a deal
- Multifamily/mixed-use phasing and lease-up strategy considerations
- Another natural topic for institutional/capital-partner or landowner audiences researching development leadership

## Build/verify

- Package manager: npm (`package-lock.json` is the source of truth).
- `npm install`, `npm run build`, `npm run lint` must pass before opening a PR.
