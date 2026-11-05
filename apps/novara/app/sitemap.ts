import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://novara-digital.vercel.app";
  const paths = ["/", "/work/form-and-field", "/work/common-ground", "/work/northline-advisory", "/work/arcwell-systems"];
  return paths.map(path => ({ url: new URL(path, base).toString(), lastModified: new Date(), changeFrequency: path === "/" ? "weekly" : "monthly", priority: path === "/" ? 1 : 0.65 }));
}
