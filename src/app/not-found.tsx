import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ivory">
      <div className="container-site text-center py-40">
        <p className="eyebrow mb-6">404</p>
        <h1 className="font-serif text-display-lg text-charcoal mb-6">Page not found.</h1>
        <div className="w-12 h-px bg-brass mx-auto mb-8" />
        <p className="prose-editorial mb-12 max-w-md mx-auto text-center">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">Return Home</Link>
          <Link href="/contact" className="btn-ghost">Discuss a Project</Link>
        </div>
      </div>
    </div>
  );
}
