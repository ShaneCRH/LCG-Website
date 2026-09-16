import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { leadership } from "@/data/leadership";
import { getProjectsByLeader } from "@/data/projects";

interface Props {
  params: { id: string };
}

export async function generateStaticParams() {
  return leadership.map((l) => ({ id: l.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const leader = leadership.find((l) => l.id === params.id);
  if (!leader) return { title: "Leader Not Found" };
  return {
    title: leader.name,
    description: `${leader.name} — ${leader.title}. ${leader.bio[0].slice(0, 150)}...`,
  };
}

export default function LeaderProfilePage({ params }: Props) {
  const leader = leadership.find((l) => l.id === params.id);
  if (!leader) notFound();

  const leaderProjects = getProjectsByLeader(leader.id);

  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-20 bg-charcoal text-ivory">
        <div className="container-site">
          <Link href="/leadership" className="eyebrow-light mb-8 inline-flex items-center gap-2 hover:text-ivory/80 transition-colors">
            <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
              <path d="M10 6H2M5 3L2 6l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Leadership
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 mt-6">
            <div>
              <div className="w-32 h-32 rounded-full overflow-hidden bg-ivory/10 flex items-center justify-center mb-8 shrink-0">
                {leader.imageUrl ? (
                  <img src={leader.imageUrl} alt={leader.name} className={`w-full h-full object-cover ${leader.imagePosition ?? "object-center"}`} />
                ) : (
                  <span className="font-serif font-medium text-ivory text-2xl">
                    {leader.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </span>
                )}
              </div>
              <h1 className="font-serif text-display-md text-ivory mb-3">{leader.name}</h1>
              <p className="text-xs tracking-[0.12em] uppercase text-ivory/50 mb-6">{leader.title}</p>
              <div className="w-12 h-px bg-brass" />
            </div>
            <div className="flex flex-wrap content-start gap-2">
              <p className="eyebrow-light w-full mb-3">Focus Areas</p>
              {leader.focus.map((f) => (
                <span key={f} className="text-[0.65rem] tracking-[0.08em] uppercase text-ivory/60 border border-ivory/20 px-3 py-1.5">
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-section border-b border-charcoal/8">
        <div className="container-site">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <p className="eyebrow mb-6">Professional Background</p>
              <div className="space-y-6 prose-editorial">
                {leader.bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
            <div>
              {leader.platforms && leader.platforms.length > 0 && (
                <div>
                  <p className="eyebrow mb-5">Associated Platforms</p>
                  <div className="flex flex-col gap-3">
                    {leader.platforms.map((p) => (
                      <Link
                        key={p}
                        href={`/leadership/platforms#${p}`}
                        className="border border-charcoal/12 p-4 hover:border-charcoal/30 transition-colors block"
                      >
                        <p className="text-sm font-medium text-charcoal capitalize mb-1">
                          {p.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()).replace("Llc", "LLC")}
                        </p>
                        <p className="text-[0.65rem] tracking-[0.08em] uppercase text-graphite/40">
                          View Platform →
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Experience */}
      {leaderProjects.length > 0 && (
        <section className="py-section bg-charcoal/3 border-b border-charcoal/8">
          <div className="container-site">
            <p className="eyebrow mb-5">Selected Project Experience</p>
            <h2 className="font-serif text-display-sm text-charcoal mb-10 text-balance max-w-xl">
              Project experience associated with {leader.name.split(" ")[0]}&rsquo;s leadership.
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {leaderProjects.map((project) => (
                <div key={project.id} className="bg-ivory border border-charcoal/10 overflow-hidden">
                  {project.imageUrl && (
                    <div className="w-full h-40 overflow-hidden bg-charcoal/5">
                      <img
                        src={project.imageUrl}
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <p className="font-medium text-charcoal text-sm mb-2">{project.name}</p>
                    {project.location && (
                      <p className="text-xs text-graphite/45 mb-2">{project.location}</p>
                    )}
                    {project.role && (
                      <p className="text-[0.6rem] tracking-tight uppercase text-graphite/50 mb-3">{project.role}</p>
                    )}
                    {project.summary && (
                      <p className="text-xs text-graphite/60 leading-relaxed">{project.summary}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-xs text-graphite/35 italic">
              Individual project roles, ownership, and delivery relationships vary by project. Project-specific scope is available upon request.
            </p>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20">
        <div className="container-site">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2 className="font-serif text-display-sm text-charcoal mb-3">
                Ready to discuss a project?
              </h2>
              <p className="text-graphite/60 text-sm">Bring your site, your opportunity, or your challenge.</p>
            </div>
            <div className="flex gap-4">
              <Link href="/contact" className="btn-primary">
                Discuss a Project
              </Link>
              <Link href="/leadership" className="btn-ghost">
                All Leadership
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
