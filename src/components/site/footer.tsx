const marqueeWords = Array(8).fill("SMG INVESTING");

const quickLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "services", label: "Services" },
  { id: "why-choose-us", label: "Why Choose Us" },
  { id: "how-it-works", label: "How It Works" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="hairline-t bg-primary text-primary-foreground">
      <div className="shell py-10 md:py-12 relative z-10">
        <div className="grid gap-8 lg:grid-cols-12 mb-10">
          <div className="lg:col-span-5">
            <p className="font-display text-4xl md:text-5xl">SMG Investment Services</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/65">
              Trusted Gold Pawning in Sri Lanka. A partner company of Harith Engineering &amp; Company (Pvt) Ltd.
            </p>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <p className="eyebrow text-primary-foreground/55">Get in touch</p>
            <ul className="mt-4 space-y-3 text-lg">
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
            <ul className="mt-4 grid grid-cols-2 gap-y-3 text-sm lg:grid-cols-1">
              {quickLinks.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-primary-foreground/75 transition-colors hover:text-gold">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/55">
          <p>© {new Date().getFullYear()} SMG Investment Services. All rights reserved.</p>
          <p>Maharagama · Kottawa · Nugegoda</p>
        </div>
      </div>

      {/* Massive Kinetic Marquee */}
      <div aria-hidden className="relative overflow-hidden border-t border-primary-foreground/15 py-10">
        <div className="flex w-max items-center whitespace-nowrap will-change-transform animate-marquee-left">
          {[0, 1].map((pass) => (
            <div key={pass} className="flex items-center">
              {marqueeWords.map((word, i) => (
                <span key={i} className="flex items-center">
                  <span className="font-display text-[3.75rem] md:text-[5.625rem] lg:text-[7.5rem] text-primary-foreground/50 px-6">{word}</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
