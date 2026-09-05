"use client";
import { Eyebrow, Reveal } from "./primitives";

export function About() {
  return (
    <section id="about" className="hairline-t py-20 md:py-32">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow>About Us</Eyebrow>
            <h2 className="display-lg mt-6 text-balance">
              Three Decades of Trust, Built on Experience
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="mt-10">
            <img src="/images/about.svg" alt="Quiet consultation room with secure deposit lockers" width={1104} height={1408} loading="lazy" className="aspect-4/5 w-full rounded-sm border border-hairline object-cover" />
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 lg:pt-24">
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-foreground/85 md:text-xl">
              Established in 1995, SMG Investment Services has been serving customers for over 30 years, building a reputation for trusted and reliable gold pawning services. Today, we operate through three conveniently located branches in Maharagama, Kottawa, and Nugegoda, making our services accessible to customers across the region.
            </p>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
              As a partner company of Harith Engineering &amp; Company (Pvt) Ltd, we continue to uphold a commitment to professionalism, customer care, and secure gold pawning services. With decades of experience and a strong focus on transparency and confidentiality, we are dedicated to providing customers with a dependable financial partner when they need it most.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="hairline-t mt-12 grid grid-cols-2 gap-x-8 gap-y-8 pt-8 sm:grid-cols-3">
              {[
                { k: "Established", v: "1995" },
                { k: "Partner company", v: "Harith Engineering" },
                { k: "Branch network", v: "3 locations" },
              ].map((i) => (
                <div key={i.k}>
                  <dt className="eyebrow">{i.k}</dt>
                  <dd className="mt-2 font-display text-2xl leading-tight">{i.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
