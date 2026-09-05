"use client";
import { Reveal, SectionHeader } from "./primitives";

const cards = [
  { number: "01", title: "How It Works", body: "Bring your gold article to any of our branches. Our team will assess its purity and value, explain the available terms, and provide your loan quickly." },
  { number: "02", title: "Eligibility", body: "Applicants must be 18 years or older and present a valid identification document — NIC, Passport, or Driving Licence. No guarantor is required, and loan requests are considered according to our terms and conditions." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="hairline-t bg-secondary/60 py-20 md:py-32">
      <div className="shell">
        <SectionHeader eyebrow="Simple & Transparent" heading="How It Works & Eligibility" />

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {cards.map((c, i) => (
            <Reveal key={c.number} delay={i * 0.12}>
              <article className="group flex h-full flex-col justify-between rounded-sm border border-hairline bg-card p-8 transition-colors duration-500 hover:border-foreground/40 md:p-12">
                <div className="flex items-start justify-between gap-6">
                  <h3 className="display-md max-w-[14ch]">{c.title}</h3>
                  <span className="font-display text-5xl text-gold md:text-6xl">{c.number}</span>
                </div>
                <p className="mt-16 max-w-lg text-base leading-relaxed text-muted-foreground md:mt-24 md:text-lg">
                  {c.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
