import type { Metadata } from "next";
import { Suspense } from "react";
import { BlogsView } from "@/components/blogs/blogs-view";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Health Blog & News",
  alternates: { canonical: "/blogs" },
});

export default function BlogsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Blogs", path: "/blogs" }])) }} />
      <Suspense fallback={null}>
        <BlogsView />
      </Suspense>
    </>
  );
}
