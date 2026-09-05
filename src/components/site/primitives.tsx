"use client";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow flex items-center gap-3"><span aria-hidden className="inline-block h-px w-10 bg-gold" />{children}</p>;
}

export function LinkButton({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "outline" }) {
  return (
    <a href={href} className={`inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-medium transition-colors duration-300 ${variant === "primary" ? "bg-primary text-primary-foreground hover:bg-gold hover:text-foreground" : "border border-hairline text-foreground hover:bg-secondary"}`}>
      {children}
    </a>
  );
}

export function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({ eyebrow, heading, paragraph }: { eyebrow: string; heading: string; paragraph?: string }) {
  return (
    <Reveal>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="display-lg mt-6 max-w-[20ch] text-balance">{heading}</h2>
      {paragraph && <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">{paragraph}</p>}
    </Reveal>
  );
}

export const staggerParent: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};
