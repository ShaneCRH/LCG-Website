import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const NEWS_DIR = path.join(process.cwd(), "src/content/news");

export interface NewsPostFrontmatter {
  title: string;
  slug: string;
  description: string;
  excerpt: string;
  date: string;
  keywords: string[];
  category?: string;
}

export interface NewsPost extends NewsPostFrontmatter {
  contentHtml: string;
}

function readSlugs(): string[] {
  if (!fs.existsSync(NEWS_DIR)) return [];
  return fs
    .readdirSync(NEWS_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllNewsPosts(): NewsPost[] {
  const slugs = readSlugs();
  const posts = slugs.map((slug) => getNewsPostBySlug(slug)).filter((p): p is NewsPost => !!p);
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getNewsPostBySlug(slug: string): NewsPost | undefined {
  const filePath = path.join(NEWS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return undefined;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const contentHtml = marked.parse(content, { async: false }) as string;

  return {
    title: data.title,
    slug: data.slug ?? slug,
    description: data.description,
    excerpt: data.excerpt,
    date: data.date,
    keywords: data.keywords ?? [],
    category: data.category,
    contentHtml,
  };
}

export function getAllNewsSlugs(): string[] {
  return readSlugs();
}
