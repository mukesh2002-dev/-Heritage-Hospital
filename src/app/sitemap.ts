import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { blogs } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/doctor",
    "/departments",
    "/services",
    "/treatments",
    "/emergency",
    "/gallery",
    "/blogs",
    "/patient-stories",
    "/facilities",
    "/appointment",
    "/contact",
    "/career",
    "/tender",
    "/privacy",
    "/terms",
  ];

  const today = new Date();

  const staticPages = staticRoutes.map((route) => ({
    url: `${site.website}${route}`,
    lastModified: today,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const blogPages = blogs.map((blog) => ({
    url: `${site.website}/blogs/${blog.slug}`,
    lastModified: new Date(blog.date),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
