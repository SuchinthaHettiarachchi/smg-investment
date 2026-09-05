import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
  title: "SMG Investment Services | Trusted Gold Pawning in Sri Lanka",
  description: "Get the financial support you need with the value of your gold. Over 30 years of trusted gold pawning services in Maharagama, Kottawa, and Nugegoda.",
  keywords: ["gold pawning", "pawn shop", "gold loan", "Sri Lanka", "Maharagama", "Kottawa", "Nugegoda", "SMG Investment"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-offwhite">{children}</body>
    </html>
  );
}
