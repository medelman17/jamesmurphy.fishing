import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

const title = "James Murphy and the Giant Fishing Expedition";
const description =
  "The story of Atlantic Highlands, NJ -- a small town that faces big challenges when a losing mayoral candidate questions his constituents right to vote -- leading to a community-wide discussion about honesty, respect, and the importance of treating neighbors kindly";
const url = "https://jamesmurphy.fishing";
const name = "James Murphy and the Giant Fishing Expedition";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@edelman215",
    images: ["https://jamesmurphy.fishing/jimmycover.webp"],
  },

  openGraph: {
    title,
    description,
    url,
    locale: "en_US",
    type: "book",
    siteName: name,
    images: [
      {
        url: "https://jamesmurphy.fishing/jimmycover.webp",
        width: 800,
        height: 600,
        alt: "James Murphy Fishing",
      },
    ],
  },
  keywords: ["James Murphy", "Atlantic Highlands", "Election", "Fishing"],
  title: title,
  description: description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Analytics />
    </html>
  );
}
