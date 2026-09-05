import { SECTIONS } from "@/constants/data";

const marqueeWords = [
  "Trusted Gold Pawning",
  "Since 1995",
  "Transparent Valuations",
  "Confidential Service",
  "Three Branches",
];

export function Footer() {
  return (
    <footer className="hairline-t bg-primary text-primary-foreground">
      <div className="shell py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-4xl md:text-5xl">SMG Investment Services</p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/65">
              Trusted Gold Pawning in Sri Lanka. A partner company of Harith Engineering &amp; Company (Pvt) Ltd.
            </p>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <p className="eyebrow text-primary-foreground/55">Get in touch</p>
            <ul className="mt-6 space-y-4 text-lg">
              <li>
                <a href="tel:+94112700000" className="transition-colors hover:text-gold" aria-label="Call our hotline">
                  Hotline: +94 11 270 0000
                </a>
              </li>
              <li>
                <a href="mailto:info@smginvestments.lk" className="transition-colors hover:text-gold">
                  Email: info@smginvestments.lk
                </a>
              </li>
            </ul>
          </div>

          <nav className="lg:col-span-3 lg:col-start-10" aria-label="Quick links">
            <p className="eyebrow text-primary-foreground/55">Quick Links</p>
            <ul className="mt-6 grid grid-cols-2 gap-y-3 text-sm lg:grid-cols-1">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-primary-foreground/75 transition-colors hover:text-gold">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/55">
          <p>© {new Date().getFullYear()} SMG Investment Services. All rights reserved.</p>
          <p>Maharagama · Kottawa · Nugegoda</p>
        </div>
      </div>

      {/* Kinetic band below the footer */}
      <div aria-hidden className="relative overflow-hidden border-t border-primary-foreground/15 py-6">
        <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap will-change-transform animate-marquee">
          {[0, 1].map((pass) => (
            <div key={pass} className="flex items-center gap-10">
              {marqueeWords.map((word) => (
                <span key={word} className="flex items-center gap-10">
                  <span className="font-display text-5xl text-primary-foreground/85 md:text-7xl">{word}</span>
                  <span className="text-3xl text-gold md:text-4xl">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
