import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://novara-digital.vercel.app"),
  title: { default: "NOVARA Digital | Premium Web Design & Development", template: "%s | NOVARA Digital" },
  description: "NOVARA Digital designs and develops premium websites and digital experiences for ambitious businesses in Zimbabwe, Southern Africa and beyond.",
  keywords: ["web design Zimbabwe", "website development Zimbabwe", "web design Harare", "corporate website design", "e-commerce website development", "web design Southern Africa"],
  openGraph: { type: "website", siteName: "NOVARA Digital", title: "NOVARA Digital | Premium Web Design & Development", description: "Thoughtful digital experiences. Built for ambitious businesses." },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NOVARA Digital",
    description: "Premium web design and development for ambitious businesses.",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://novara-digital.vercel.app",
    areaServed: ["Zimbabwe", "Southern Africa", "International markets"]
  };
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />{children}</body></html>;
}
