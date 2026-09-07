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
    
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const number = formData.get("number");
    const message = formData.get("message");

    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${number}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    const mailtoLink = `mailto:info@smginvestmentservices.com?subject=New Inquiry from ${name}&body=${body}`;
    
    window.location.href = mailtoLink;

    window.setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Thank you — your email client should now be open.");
    }, 600);
  };

  return (
    <section id="contact" className="section-padding hairline-t bg-secondary/60">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>Contact Us</Eyebrow>
              <h2 className="display-lg mt-4 max-w-[16ch] text-balance">Speak With Our Team Today</h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
                Send us a message or visit any of our three branches for a transparent gold valuation and a clear explanation of your options.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <form onSubmit={onSubmit} className="rounded-sm border border-hairline bg-card p-6 md:p-8">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="eyebrow">Name</label>
                    <input id="name" name="name" required autoComplete="name" placeholder="Enter your full name" className={fieldClass} />
                  </div>
                  <div>
                    <label htmlFor="email" className="eyebrow">Email</label>
                    <input id="email" name="email" type="email" required autoComplete="email" placeholder="Enter your email address" className={fieldClass} />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="number" className="eyebrow">Number</label>
                    <input id="number" name="number" type="tel" required autoComplete="tel" placeholder="Enter your phone number" className={fieldClass} />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="message" className="eyebrow">Message</label>
                    <textarea id="message" name="message" required rows={5} placeholder="Write your message here..." className={`${fieldClass} resize-y`} />
                  </div>
                </div>

                <button type="submit" disabled={sending} className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-colors duration-300 hover:bg-gold hover:text-foreground disabled:opacity-70 sm:w-auto">
                  {sending ? "Opening email..." : "Send message"}
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </form>
            </Reveal>
          </div>
        </div>

        <ul className="mt-12 grid gap-8 md:grid-cols-3">
          {BRANCHES.map((b, i) => (
            <Reveal key={b.name} delay={i * 0.1} className="h-full">
              <li className="h-full rounded-sm border border-hairline bg-card overflow-hidden flex flex-col transition-colors duration-500 hover:border-foreground/40">
                
                {/* Interactive Google Map Embed */}
                <div className="relative w-full h-44 overflow-hidden border-b border-hairline bg-secondary">
                  <iframe
                    title={`Map of ${b.name}`}
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(b.address)}&z=15&output=embed`}
                    className="absolute inset-0 w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="font-display text-2xl">{b.name}</h3>
                  <dl className="mt-4 space-y-3 text-sm flex-grow">
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
                      <dd className="mt-1 text-foreground">
                        <a href={`tel:${b.hotline.replace(/\s/g, "")}`} className="hover:text-gold transition-colors">
                          {b.hotline}
                        </a>
                      </dd>
                    </div>
                  </dl>
                  
                  {/* Get Directions Button (Opens in new tab) */}
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.address)}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-gold transition-colors"
                  >
                    Get directions
                    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
