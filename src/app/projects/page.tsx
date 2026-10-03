"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import type { Sector } from "@/types";

const sectorLabels: Record<Sector, string> = {
  "senior-living": "Senior Living",
  "multifamily-mixed-use": "Multifamily & Mixed Use",
  "commercial-retail-medical": "Commercial / Retail / Medical",
  "industrial-manufacturing-rd": "Industrial / Manufacturing / R&D",
  "hospitality-entertainment": "Hospitality & Entertainment",
  "residential": "Residential",
  "active-living": "Active Living",
  "skilled-care": "Skilled Care",
  "other": "Other",
};

const platformLabels: Record<string, string> = {
  "strategic-development-partners": "Strategic Development Partners",
  "vanguard-building": "Vanguard Building",
  "creative-roots-holdings": "Creative Roots Holdings",
  "elegance-senior-living": "Elegance Senior Living",
  "transcendent-development": "Transcendent Development",
};

const leaderLabels: Record<string, string> = {
  "mark-orshoski": "Mark Orshoski",
  "scott-burdette": "Scott Burdette",
  "mike-petersen": "Mike Petersen",
  "marli-tarbaux": "Marli Tarbaux",
  "shane-evans": "Shane Evans",
};

type FilterType = "all" | Sector | string;

export default function ProjectsPage() {
  const [sectorFilter, setSectorFilter] = useState<FilterType>("all");
  const [leaderFilter, setLeaderFilter] = useState<FilterType>("all");

  const allSectors = Array.from(new Set(projects.flatMap((p) => p.sector)));
  const allLeaders = Array.from(new Set(projects.flatMap((p) => p.leaders ?? [])));

  const filtered = projects.filter((p) => {
    if (sectorFilter !== "all" && !p.sector.includes(sectorFilter as Sector)) return false;
    if (leaderFilter !== "all" && !p.leaders?.includes(leaderFilter as never)) return false;
    return true;
  });

  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-20 bg-charcoal text-ivory">
        <div className="container-site">
          <p className="eyebrow-light mb-6">Project Experience</p>
          <h1 className="font-serif text-display-lg text-ivory mb-8 text-balance max-w-3xl">
            Selected leadership and project experience.
          </h1>
          <div className="w-12 h-px bg-brass mb-8" />
          <p className="text-ivory/55 text-sm max-w-2xl leading-relaxed">
            Individual project roles, ownership, and delivery relationships vary by project. Historical project experience referenced here does not automatically represent work completed by Landmark Creative Group LLC. Project-specific scope is available upon request where appropriate.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-charcoal/8 bg-ivory sticky top-20 md:top-24 z-30">
        <div className="container-site">
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex flex-col gap-2">
              <label className="eyebrow text-[0.55rem]">Sector</label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSectorFilter("all")}
                  className={`text-[0.6rem] tracking-[0.1em] uppercase px-3 py-1.5 border transition-colors ${
                    sectorFilter === "all"
                      ? "bg-charcoal text-ivory border-charcoal"
                      : "border-charcoal/20 text-charcoal/60 hover:border-charcoal/50"
                  }`}
                >
                  All
                </button>
                {allSectors.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSectorFilter(s)}
                    className={`text-[0.6rem] tracking-[0.1em] uppercase px-3 py-1.5 border transition-colors ${
                      sectorFilter === s
                        ? "bg-charcoal text-ivory border-charcoal"
                        : "border-charcoal/20 text-charcoal/60 hover:border-charcoal/50"
                    }`}
                  >
                    {sectorLabels[s]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-section">
        <div className="container-site">
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-graphite/50">{filtered.length} projects</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <article
                key={project.id}
                className="border border-charcoal/10 bg-ivory hover:border-charcoal/25 hover:shadow-md transition-all duration-300"
              >
                {project.imageUrl && (
                  <div className="w-full h-48 overflow-hidden bg-charcoal/5">
                    <img
                      src={project.imageUrl}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h2 className="font-medium text-charcoal text-sm leading-snug">{project.name}</h2>
                    {project.platform && (
                      <span className="shrink-0 text-[0.55rem] tracking-[0.1em] uppercase text-brass font-medium border border-brass/30 px-1.5 py-0.5">
                        {project.platform === "strategic-development-partners" ? "SDP" :
                         project.platform === "vanguard-building" ? "VBC" :
                         project.platform === "elegance-senior-living" ? "ESL" : "CRH"}
                      </span>
                    )}
                  </div>

                  {project.location && (
                    <p className="text-xs text-graphite/45 mb-3">{project.location}</p>
                  )}

                  {project.role && (
                    <p className="text-[0.65rem] tracking-[0.05em] uppercase text-graphite/55 mb-3">
                      {project.role}
                    </p>
                  )}

                  {project.summary && (
                    <p className="text-xs text-graphite/60 leading-relaxed mb-4">
                      {project.summary}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.sector.map((s) => (
                      <span key={s} className="text-[0.55rem] tracking-tight text-graphite/40 border border-charcoal/8 px-1.5 py-0.5">
                        {sectorLabels[s]}
                      </span>
                    ))}
                  </div>

                  {project.leaders && project.leaders.length > 0 && (
                    <div className="pt-4 border-t border-charcoal/8 flex flex-wrap gap-2">
                      {project.leaders.map((l) => (
                        <Link
                          key={l}
                          href={`/leadership/${l}`}
                          className="text-[0.6rem] tracking-tight text-graphite/50 hover:text-charcoal transition-colors"
                        >
                          {leaderLabels[l]}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-graphite/40 text-sm">No projects match the selected filters.</p>
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-charcoal/8">
            <p className="text-xs text-graphite/35 italic max-w-3xl">
              Individual project roles, ownership, and delivery relationships vary by project. Historical project experience referenced on this site does not automatically represent work completed by Landmark Creative Group LLC. Project-specific scope is available upon request where appropriate. Public project context provides background information only and does not establish specific individual or organizational roles.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal/3 border-t border-charcoal/8">
        <div className="container-site">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2 className="font-serif text-display-sm text-charcoal mb-3">
                Have a project that could use this kind of experience?
              </h2>
              <p className="text-graphite/60 text-sm">Start with a conversation.</p>
            </div>
            <Link href="/contact" className="btn-primary shrink-0">
              Discuss a Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
