import { SECTIONS } from "@/constants/data";

const marqueeWords = Array(8).fill("SMG INVESTNG.");

export function Footer() {
  return (
    <footer className="hairline-t bg-primary text-primary-foreground">
      <div className="shell py-16 md:py-24">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="md:max-w-sm">
            <div className="flex items-center gap-4 mb-5">
              <img src="/images/logo.webp" alt="SMG" className="h-14 w-auto object-contain" />
              <p className="font-display text-xl md:text-2xl">SMG Investment Services</p>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-primary-foreground/65">
              Trusted Gold Pawning in Sri Lanka.
            </p>
          </div>

          <div className="md:max-w-xs">
            <p className="eyebrow text-primary-foreground/55">Get in touch</p>
            <ul className="mt-6 space-y-4 text-lg">
              <li>
                <p className="text-primary-foreground/55 text-sm">Maharagama</p>
                <a href="tel:+94112089196" className="inline-block py-1 transition-colors hover:text-gold">
                  (011) 208 9196
                </a>
              </li>
              <li>
                <p className="text-primary-foreground/55 text-sm">Kottawa</p>
                <a href="tel:+94112182966" className="inline-block py-1 transition-colors hover:text-gold">
                  (011) 218 2966
                </a>
              </li>
              <li>
                <p className="text-primary-foreground/55 text-sm">Nugegoda</p>
                <a href="tel:+94112818299" className="inline-block py-1 transition-colors hover:text-gold">
                  (011) 281 8299
                </a>
              </li>
              <li className="pt-4">
                <span className="block text-sm text-primary-foreground/55">Email</span>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@smginvestmentservices.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block py-1 break-all transition-colors hover:text-gold"
                >
                  info@smginvestmentservices.com
                </a>
              </li>
            </ul>
          </div>

          <nav className="md:max-w-xs text-left md:text-right" aria-label="Quick links">
            <p className="eyebrow text-primary-foreground/55">Quick Links</p>
            <ul className="mt-6 grid grid-cols-2 gap-y-3 text-sm lg:grid-cols-1 lg:justify-items-end">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-primary-foreground/75 transition-colors hover:text-gold"
                  >
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

      <div aria-hidden className="relative overflow-hidden border-t border-primary-foreground/15 py-6">
        <div className="flex w-max items-center gap-12 whitespace-nowrap will-change-transform animate-marquee">
          {[0, 1].map((pass) => (
            <div key={pass} className="flex items-center gap-12">
              {marqueeWords.map((word, i) => (
                <span key={i} className="font-display text-7xl md:text-9xl leading-none text-primary-foreground/15">
                  {word}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
