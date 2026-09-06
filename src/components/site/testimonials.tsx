"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Eyebrow } from "./primitives";
import { TESTIMONIALS } from "@/constants/data";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = TESTIMONIALS[index];

  const go = (dir: number) => setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section id="testimonials" className="section-padding hairline-t">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <Eyebrow>Testimonials</Eyebrow>
            <h2 className="display-lg mt-6 max-w-[18ch] text-balance">What Our Customers Say</h2>
          </div>
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => go(-1)} aria-label="Previous testimonial" className="inline-flex size-12 items-center justify-center rounded-full border border-hairline transition-colors hover:bg-secondary">
              <ArrowLeft className="size-4" />
            </button>
            <button type="button" onClick={() => go(1)} aria-label="Next testimonial" className="inline-flex size-12 items-center justify-center rounded-full border border-hairline transition-colors hover:bg-secondary">
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-8 border-t border-hairline pt-8 lg:grid-cols-12">
          <AnimatePresence mode="wait">
            <motion.figure key={index} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.5, ease: "easeOut" }} className="contents">
              <div className="lg:col-span-4">
                <div className="flex aspect-square w-full max-w-xs items-center justify-center rounded-sm border border-hairline bg-accent/60">
                  {active.image ? (
                    <img src={active.image} alt={active.name} loading="lazy" className="size-full rounded-sm object-cover" />
                  ) : (
                    <span className="font-display text-5xl text-foreground/50" aria-hidden>{active.initials}</span>
                  )}
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="flex gap-1" aria-label={`${active.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} aria-hidden className={i < active.rating ? "size-4 fill-gold text-gold" : "size-4 text-muted-foreground"} />
                  ))}
                </div>
                <blockquote className="mt-6 font-display text-3xl leading-tight text-balance md:text-4xl">
                  “{active.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4">
                  <span className="text-base font-medium">{active.name}</span>
                  <span className="eyebrow">{active.role}</span>
                </figcaption>
              </div>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex gap-2">
          {TESTIMONIALS.map((t, i) => (
            <button key={i} type="button" onClick={() => setIndex(i)} aria-label={`Show testimonial ${i + 1}`} aria-current={i === index} className={`h-px w-12 transition-all duration-300 ${i === index ? "bg-foreground" : "bg-hairline hover:bg-foreground/40"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
