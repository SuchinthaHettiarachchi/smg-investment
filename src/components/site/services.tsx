"use client";
import { motion } from "framer-motion";
import { Coins, Gem, RotateCcw, CalendarClock } from "lucide-react";
import { Eyebrow, Reveal, staggerChild, staggerParent } from "./primitives";
import { SERVICES } from "@/constants/data";

const iconMap = { Coins, Gem, RotateCcw, CalendarClock };

export function Services() {
  return (
    <section id="services" className="section-padding hairline-t bg-secondary/60">
      <div className="shell grid gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow>Our Services</Eyebrow>
            <h2 className="display-lg mt-4 text-balance">Reliable Gold Pawning Services, Made Simple</h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              We offer secure and convenient gold pawning solutions with transparent valuations, competitive rates, flexible payments, and professional customer service.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <img src="/images/Image3.webp" alt="Gold purity being tested" width={1280} height={960} loading="lazy" className="mt-6 aspect-4/3 w-full rounded-sm border border-hairline object-cover" />
          </Reveal>
        </div>

        <motion.ul variants={staggerParent} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="grid gap-4 sm:grid-cols-2 lg:col-span-6 lg:col-start-7 lg:gap-5">
          {SERVICES.map((s) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            return (
              <motion.li key={s.title} variants={staggerChild} className="group relative flex flex-col justify-between overflow-hidden rounded-sm border border-hairline bg-card p-6 transition-colors duration-500 hover:border-foreground/40 md:p-8">
                <span aria-hidden className="absolute inset-x-0 bottom-0 h-0 bg-accent/50 transition-all duration-500 group-hover:h-full" />
                <div className="relative">
                  {Icon && <Icon className="size-6 text-gold" strokeWidth={1.4} aria-hidden />}
                  <h3 className="mt-6 font-display text-2xl md:text-3xl">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
