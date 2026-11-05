"use client";
import dynamic from "next/dynamic";
const HeroScene = dynamic(() => import("@/components/hero-scene"), {
  ssr: false,
  loading: () => <div className="hero-canvas hero-fallback" aria-hidden="true"><div className="fallback-orbit" /></div>
});
export default function HeroExperience() {
  return <HeroScene />;
}
