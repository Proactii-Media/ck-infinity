"use client";

import { SmoothScrollProvider } from "./SmoothScrollProvider";
import { LuxuryLoader } from "./LuxuryLoader";
import { ScrollProgress } from "./ScrollProgress";
import { CustomCursor } from "./CustomCursor";
import { FloatingActions } from "./FloatingActions";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScrollProvider>
      <LuxuryLoader />
      <ScrollProgress />
      <CustomCursor />
      <div className="noise-overlay" aria-hidden />
      <Navbar />
      <main className="relative flex-1">{children}</main>
      <Footer />
      <FloatingActions />
    </SmoothScrollProvider>
  );
}
