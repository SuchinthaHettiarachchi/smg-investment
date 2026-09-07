"use client";
import { motion } from "framer-motion";
import { Eyebrow, Reveal, staggerChild, staggerParent } from "./primitives";
import { WHY_CHOOSE_US } from "@/constants/data";

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section-padding hairline-t">
      <div className="shell">
        {/* Centered Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-8">
          <Eyebrow>Why Choose Us</Eyebrow>
          <h2 className="display-lg mt-4 text-balance">Gold Pawning Made Simple</h2>
          <p className="mt-4 max-w-md mx-auto text-base leading-relaxed text-muted-foreground md:text-lg">
            With 30+ years of experience, we make gold pawning simple, secure, and convenient with flexible options and customer-focused service.
          </p>
        </Reveal>

        <motion.ul variants={staggerParent} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} className="mt-8 grid border-t border-hairline sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_US.map((b, i) => (
            <motion.li key={b.title} variants={staggerChild} className="group relative border-b border-hairline px-0 py-6 transition-colors duration-500 sm:px-6 sm:odd:border-r lg:border-r lg:px-8 lg:[&:nth-child(3n)]:border-r-0 hover:bg-secondary/70">
              <span className="eyebrow text-gold">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 font-display text-2xl leading-tight">{b.title}</h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">{b.body}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
