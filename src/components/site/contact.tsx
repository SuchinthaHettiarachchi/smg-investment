"use client";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Eyebrow, Reveal } from "./primitives";
import { BRANCHES } from "@/constants/data";

const fieldClass = "mt-2 w-full rounded-sm border border-hairline bg-card px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-foreground focus:outline-none";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    const form = event.currentTarget;
    window.setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Thank you — we'll get back to you shortly.");
    }, 600);
  };

  return (
    <section id="contact" className="hairline-t bg-secondary/60 py-20 md:py-32">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>Contact Us</Eyebrow>
              <h2 className="display-lg mt-6 max-w-[16ch] text-balance">Speak With Our Team Today</h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
                Send us a message or visit any of our three branches for a transparent gold valuation and a clear explanation of your options.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <form onSubmit={onSubmit} className="rounded-sm border border-hairline bg-card p-7 md:p-10">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="eyebrow">Name</label>
                    <input id="name" name="name" required autoComplete="name" placeholder="Your full name" className={fieldClass} />
                  </div>
                  <div>
                    <label htmlFor="email" className="eyebrow">Email</label>
                    <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={fieldClass} />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="number" className="eyebrow">Number</label>
                    <input id="number" name="number" type="tel" required autoComplete="tel" placeholder="Contact number" className={fieldClass} />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="message" className="eyebrow">Message</label>
                    <textarea id="message" name="message" required rows={5} placeholder="How can we help you?" className={`${fieldClass} resize-y`} />
                  </div>
                </div>

                <button type="submit" disabled={sending} className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-colors duration-300 hover:bg-gold hover:text-foreground disabled:opacity-70 sm:w-auto">
                  {sending ? "Sending…" : "Send message"}
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </form>
            </Reveal>
          </div>
        </div>

        <ul className="mt-16 grid gap-5 md:grid-cols-3">
          {BRANCHES.map((b, i) => (
            <Reveal key={b.name} delay={i * 0.1} className="h-full">
              <li className="h-full">
                <div className="h-full rounded-sm border border-hairline bg-card p-7 transition-colors duration-500 hover:border-foreground/40">
                  <h3 className="font-display text-2xl">{b.name}</h3>
                  <dl className="mt-6 space-y-4 text-sm">
                    <div>
                      <dt className="eyebrow">Opening hours</dt>
                      <dd className="mt-1 text-muted-foreground" dangerouslySetInnerHTML={{ __html: b.hours }} />
                    </div>
                    <div>
                      <dt className="eyebrow">Address</dt>
                      <dd className="mt-1 text-muted-foreground">{b.address}</dd>
                    </div>
                    <div>
                      <dt className="eyebrow">Hotline</dt>
                      <dd className="mt-1 text-foreground">{b.hotline}</dd>
                    </div>
                  </dl>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
