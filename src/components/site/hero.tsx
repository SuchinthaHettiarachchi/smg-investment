"use client";
import { motion, useReducedMotion } from "framer-motion";
import { LinkButton } from "./primitives";

const words = "Get the Financial Support You Need, With the Value of Your Gold".split(" ");

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-4 md:pt-20 md:pb-8">
      <div className="shell">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <motion.p initial={reduced ? undefined : { opacity: 0, y: 12 }} animate={reduced ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="eyebrow">
              Trusted Gold Pawning in Sri Lanka
            </motion.p>

            <h1 className="display-xl mt-8 max-w-[22ch] text-balance">
              {words.map((word, i) => (
                <motion.span key={`${word}-${i}`} className="inline-block" initial={reduced ? undefined : { opacity: 0, y: "0.4em" }} animate={reduced ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.12 + i * 0.045, ease: "easeOut" }}>
                  {word === "Gold" ? <em className="not-italic text-gold">{word}</em> : word}
                  {i < words.length - 1 ? "\u00A0" : ""}
                </motion.span>
              ))}
            </h1>

            <motion.div initial={reduced ? undefined : { opacity: 0 }} animate={reduced ? undefined : { opacity: 1 }} transition={{ duration: 0.8, delay: 0.7 }} className="mt-10 flex flex-wrap items-center gap-3">
              <LinkButton href="#contact">Get a valuation</LinkButton>
              <LinkButton href="#services" variant="outline">Explore services</LinkButton>
            </motion.div>

            <motion.dl initial={reduced ? undefined : { opacity: 0, y: 16 }} animate={reduced ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.85 }} className="hairline-t mt-6 grid grid-cols-3 gap-6 pt-6">
              {[
                { k: "Since", v: "1995" },
                { k: "Experience", v: "30+ yrs" },
                { k: "Branches", v: "3" },
              ].map((item) => (
                <div key={item.k}>
                  <dt className="eyebrow">{item.k}</dt>
                  <dd className="font-display mt-2 text-3xl md:text-4xl">{item.v}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <motion.div initial={reduced ? undefined : { opacity: 0, scale: 1.06 }} animate={reduced ? undefined : { opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: "easeOut" }} className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-sm border border-hairline">
              <img src="/images/Image1.webp" alt="Traditional Sri Lankan gold jewellery" width={1280} height={1600} className="aspect-4/5 w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent p-6 pt-16">
                <p className="text-sm leading-snug text-primary-foreground">
                  Transparent valuations. Secure storage. Complete confidentiality.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Removed Scroll element and centered the branch locations */}
        <div className="hairline-t mt-8 flex items-center justify-center pt-6">
          <p className="eyebrow hidden md:block">Maharagama · Kottawa · Nugegoda</p>
        </div>
      </div>
    </section>
  );
}
