"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BRANCHES, OPENING_HOURS, COMPANY_INFO } from "@/constants/data";
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker, HiOutlineClock } from "react-icons/hi";
import { FormEvent, useState } from "react";

export default function ContactUs() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formStatus, setFormStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus("success");
    setTimeout(() => setFormStatus("idle"), 3000);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          <span className="text-gold-600 font-semibold text-xs sm:text-sm tracking-widest uppercase">Contact Us</span>
          <h2 className="heading-primary mt-2 sm:mt-3 mb-3 sm:mb-6">
            Get In <span className="gold-gradient-text">Touch</span>
          </h2>
          <p className="text-body">Visit any of our branches or send us an inquiry. We&apos;re here to help with your financial needs.</p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 xl:gap-20">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }}>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-charcoal mb-1.5 sm:mb-2">Name</label>
                  <input type="text" required className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-offwhite-100 border border-offwhite-300 rounded-xl focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all outline-none text-sm sm:text-base" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-charcoal mb-1.5 sm:mb-2">Email</label>
                  <input type="email" required className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-offwhite-100 border border-offwhite-300 rounded-xl focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all outline-none text-sm sm:text-base" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-charcoal mb-1.5 sm:mb-2">Phone Number</label>
                <input type="tel" required className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-offwhite-100 border border-offwhite-300 rounded-xl focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all outline-none text-sm sm:text-base" placeholder="+94 XX XXX XXXX" />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-charcoal mb-1.5 sm:mb-2">Message</label>
                <textarea rows={4} required className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-offwhite-100 border border-offwhite-300 rounded-xl focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all outline-none resize-none text-sm sm:text-base" placeholder="How can we help you?" />
              </div>
              <button type="submit" className="w-full py-3 sm:py-3.5 md:py-4 gold-gradient text-white rounded-xl font-semibold text-base sm:text-lg hover:shadow-lg hover:shadow-gold-500/25 transition-all">
                {formStatus === "success" ? "✓ Sent Successfully!" : "Send Inquiry"}
              </button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.25 }} className="space-y-4 sm:space-y-5 md:space-y-6">
            {BRANCHES.map((branch) => (
              <div key={branch.name} className="p-4 sm:p-5 md:p-6 bg-offwhite-100 rounded-xl border border-offwhite-300 hover:border-gold-500/30 transition-all">
                <h3 className="font-heading text-base sm:text-lg md:text-xl font-bold text-charcoal mb-3 sm:mb-4">{branch.name} Branch</h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <HiOutlineClock className="text-gold-600 mt-0.5 flex-shrink-0" size={16} />
                    <div>
                      <p className="text-xs sm:text-sm text-charcoal-50/80">{OPENING_HOURS.weekdays}</p>
                      <p className="text-xs sm:text-sm text-charcoal-50/80">{OPENING_HOURS.sunday}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <HiOutlineLocationMarker className="text-gold-600 mt-0.5 flex-shrink-0" size={16} />
                    <p className="text-xs sm:text-sm text-charcoal-50/80">{branch.address}</p>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <HiOutlinePhone className="text-gold-600 flex-shrink-0" size={16} />
                    <a href={`tel:${branch.phone}`} className="text-xs sm:text-sm text-gold-600 hover:text-gold-700 font-medium">{branch.phone}</a>
                  </div>
                </div>
              </div>
            ))}
            <div className="p-4 sm:p-5 md:p-6 gold-gradient rounded-xl text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-xs sm:text-sm">24/7 Hotline</p>
                  <p className="text-xl sm:text-2xl font-bold">{COMPANY_INFO.hotline}</p>
                </div>
                <HiOutlinePhone size={28} className="text-white/80" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
