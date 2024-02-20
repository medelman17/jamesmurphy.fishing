import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "James Murphy and the Giant Fishing Expedition",
  description:
    "The story of Atlantic Highlands, NJ -- a small town that faces big challenges when a losing mayoral candidate questions his constituents right to vote -- leading to a community-wide discussion about honesty, respect, and the importance of treating neighbors kindly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
