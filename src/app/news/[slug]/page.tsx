import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllNewsSlugs, getNewsPostBySlug } from "@/lib/news";
import { getNewsCategoryMeta } from "@/lib/newsCategories";
import { NewsCoverArt } from "@/components/news/NewsCoverArt";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllNewsSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getNewsPostBySlug(params.slug);
  if (!post) return { title: "Article Not Found" };
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
    },
  };
}

export default function NewsPostPage({ params }: Props) {
  const post = getNewsPostBySlug(params.slug);
  if (!post) notFound();

  const category = getNewsCategoryMeta(post.category);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            dateModified: post.date,
            author: {
              "@type": "Organization",
              name: "Landmark Creative Group LLC",
            },
            publisher: {
              "@type": "Organization",
              name: "Landmark Creative Group LLC",
            },
            keywords: post.keywords.join(", "),
          }),
        }}
      />

      <section className="pt-40 pb-16 bg-charcoal text-ivory">
        <div className="container-site">
          <Link href="/news" className="eyebrow-light mb-8 inline-flex items-center gap-2 hover:text-ivory/80 transition-colors">
            <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
              <path d="M10 6H2M5 3L2 6l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            News & Insights
          </Link>
          {category && <p className="eyebrow-light mb-5 text-brass/80">{category.label}</p>}
          <h1 className="font-serif text-display-lg text-ivory mb-6 text-balance max-w-3xl mt-2">
            {post.title}
          </h1>
          <div className="w-12 h-px bg-brass mb-6" />
          <p className="text-ivory/50 text-sm">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </section>

      <NewsCoverArt category={post.category} className="aspect-[21/9] w-full" />

      <section className="py-section">
        <div className="container-site">
          <article
            className="prose-editorial max-w-3xl mx-auto [&>h2]:font-serif [&>h2]:text-display-sm [&>h2]:text-charcoal [&>h2]:mt-12 [&>h2]:mb-4 [&>h3]:font-medium [&>h3]:text-charcoal [&>h3]:mt-8 [&>h3]:mb-3 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-5 [&>ol]:space-y-2 [&_a]:text-navy [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-brass [&>p:first-of-type]:text-charcoal [&>p:first-of-type]:font-medium"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          <div className="max-w-3xl mx-auto mt-16 pt-10 border-t border-charcoal/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="text-sm text-graphite/60">Have a project this topic touches on?</p>
            <div className="flex gap-4">
              <Link href="/contact" className="btn-primary">Discuss a Project</Link>
              <Link href="/news" className="btn-ghost">More Insights</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
