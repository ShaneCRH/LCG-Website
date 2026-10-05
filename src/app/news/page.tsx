import type { Metadata } from "next";
import Link from "next/link";
import { getAllNewsPosts } from "@/lib/news";
import { getNewsCategoryMeta } from "@/lib/newsCategories";
import { NewsCoverArt } from "@/components/news/NewsCoverArt";

export const metadata: Metadata = {
  title: "News & Insights",
  description:
    "Perspective on real estate development strategy, entitlements, capital, construction management, and owner representation from Landmark Creative Group.",
};

export default function NewsIndexPage() {
  const posts = getAllNewsPosts();

  return (
    <>
      <section className="pt-40 pb-20 bg-charcoal text-ivory">
        <div className="container-site">
          <p className="eyebrow-light mb-6">News & Insights</p>
          <h1 className="font-serif text-display-lg text-ivory mb-8 text-balance max-w-3xl">
            Perspective on development leadership, from feasibility through closeout.
          </h1>
          <div className="w-12 h-px bg-brass mb-8" />
          <p className="text-ivory/60 text-xl leading-relaxed max-w-2xl">
            Notes from Landmark Creative Group&rsquo;s principals on development strategy, entitlements, capital, construction, and ownership across the sectors we work in.
          </p>
        </div>
      </section>

      <section className="py-section">
        <div className="container-site">
          {posts.length === 0 ? (
            <p className="text-graphite/60">New articles are on the way. Check back soon.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => {
                const category = getNewsCategoryMeta(post.category);
                return (
                  <Link
                    key={post.slug}
                    href={`/news/${post.slug}`}
                    className="group border border-charcoal/10 hover:border-charcoal/25 hover:shadow-md transition-all duration-300 flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
                  >
                    <NewsCoverArt category={post.category} className="aspect-[4/3]" />
                    <div className="p-6 flex flex-col gap-3">
                      {category && (
                        <p className="text-[0.65rem] tracking-[0.1em] uppercase text-brass font-medium">
                          {category.label}
                        </p>
                      )}
                      <p className="font-serif text-lg text-charcoal leading-snug group-hover:text-charcoal/80">
                        {post.title}
                      </p>
                      <p className="text-sm text-graphite/60 leading-relaxed line-clamp-3">{post.excerpt}</p>
                      <p className="text-xs text-graphite/40 mt-auto pt-2">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 border-t border-charcoal/8">
        <div className="container-site text-center">
          <h2 className="font-serif text-display-md text-charcoal mb-6 text-balance">
            Have a project that needs experienced leadership?
          </h2>
          <Link href="/contact" className="btn-primary">
            Discuss a Project
          </Link>
        </div>
      </section>
    </>
  );
}
