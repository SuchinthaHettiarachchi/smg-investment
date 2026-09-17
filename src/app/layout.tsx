import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { CheckCircle2, AlertCircle } from "lucide-react";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"], variable: "--font-poppins", display: "swap" });

export const metadata: Metadata = {
  title: "SMG Investment Services | Trusted Gold Pawning in Sri Lanka",
  description: "Get the financial support you need with the value of your gold. Over 30 years of trusted gold pawning services in Maharagama, Kottawa, and Nugegoda.",
  icons: {
    icon: "/images/logo.webp",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="bg-background text-foreground font-sans">
        {children}
        <Toaster
          position="bottom-right"
          icons={{
            success: <CheckCircle2 className="size-5 text-gold" />,
            error: <AlertCircle className="size-5 text-foreground/70" />,
          }}
          toastOptions={{
            unstyled: true,
            classNames: {
              toast:
                "flex items-start gap-3 w-full rounded-sm border border-hairline bg-card p-4 shadow-lg font-sans",
              title: "text-sm font-semibold text-foreground",
              description: "mt-1 text-sm text-muted-foreground",
              icon: "mt-0.5 shrink-0",
              success: "border-gold/40",
              error: "border-foreground/20",
              closeButton:
                "border-hairline bg-card text-muted-foreground hover:text-foreground",
            },
          }}
        />
      </body>
    </html>
  );
}
