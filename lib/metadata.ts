import { url, title, description, keywords, siteName } from "@/lib/config";
import type { Metadata } from "next";

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
    siteName,
    images: [
      {
        url: "https://jamesmurphy.fishing/jimmycover.webp",
        width: 800,
        height: 600,
        alt: "James Murphy Fishing",
      },
    ],
  },
  keywords,
  title,
  description,
};
