"use client";

import dynamic from "next/dynamic";
import { Component, type ReactNode } from "react";

const HeroScene = dynamic(() => import("@/components/hero-scene"), {
  ssr: false,
  loading: () => <div className="hero-canvas hero-fallback" aria-hidden="true"><div className="fallback-orbit" /></div>
});

class HeroSceneBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error("NOVARA 3D hero failed; showing the static fallback.", error);
  }

  render() {
    if (this.state.hasError) {
      return <div className="hero-canvas hero-fallback" role="img" aria-label="NOVARA golden baobab identity artwork"><div className="fallback-orbit" /></div>;
    }
    return this.props.children;
  }
}

export default function HeroExperience() {
  return <HeroSceneBoundary><HeroScene /></HeroSceneBoundary>;
}
