"use client";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { Eyebrow, Reveal } from "./primitives";
import { BRANCHES } from "@/constants/data";

const fieldClass = "mt-2 w-full rounded-sm border border-hairline bg-card px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-foreground focus:outline-none";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    const form = event.currentTarget;

     const SERVICE_ID = "service_cvb290p";
    const TEMPLATE_ID = "template_28tx0mf";
    const PUBLIC_KEY = "hGkMq3Sm_VjmminhS";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          toast.success("Thank you for reaching out! We will get back to you shortly.");
          form.reset();
          setSending(false);
        },
        (error) => {
          console.error("EmailJS error:", error);
          toast.error("Something went wrong. Please try again.");
          setSending(false);
        }
      );
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
                  {sending ? "Sending..." : "Send message"}
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
                
                <div className="relative w-full h-44 overflow-hidden border-b border-hairline bg-secondary">
                  <iframe
                    title={`Map of ${b.name}`}
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(b.address)}&z=15&output=embed`}
                    className="absolute inset-0 w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="font-display text-2xl mb-4">{b.name}</h3>
                  
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <Clock className="size-4 mt-0.5 text-foreground/40 flex-shrink-0" />
                      <div dangerouslySetInnerHTML={{ __html: b.hours }} />
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="size-4 mt-0.5 text-foreground/40 flex-shrink-0" />
                      <span>{b.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="size-4 text-foreground/40 flex-shrink-0" />
                      <a href={`tel:${b.hotline.replace(/\s/g, "")}`} className="text-foreground hover:text-gold transition-colors">
                        {b.hotline}
                      </a>
                    </div>
                  </div>

                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.address)}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group mt-6 pt-4 border-t border-hairline inline-flex items-center justify-center gap-2 text-sm font-medium text-foreground hover:text-gold transition-colors"
                  >
                    <Navigation className="size-4" />
                    Get directions
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
