import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/layout/SiteShell";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CK-Infinity | Infinite Luxury Living",
    template: "%s | CK-Infinity",
  },
  description:
    "CK-Infinity crafts premium residential experiences where elegance, comfort, and lifestyle converge—luxury homes in Mumbai, Dubai, and beyond.",
  keywords: [
    "luxury real estate",
    "CK-Infinity",
    "premium apartments",
    "Mumbai",
    "Dubai",
  ],
  openGraph: {
    title: "CK-Infinity | Infinite Luxury Living",
    description:
      "Experience infinite luxury living—refined architecture, world-class amenities, and timeless communities.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${cormorant.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
