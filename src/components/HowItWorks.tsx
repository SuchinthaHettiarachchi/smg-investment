"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiOutlineDocumentText, HiOutlineIdentification } from "react-icons/hi";

export default function HowItWorks() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container-custom" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          <span className="text-gold-600 font-semibold text-xs sm:text-sm tracking-widest uppercase">Simple &amp; Transparent</span>
          <h2 className="heading-primary mt-2 sm:mt-3 mb-3 sm:mb-6">
            How It Works &amp; <span className="gold-gradient-text">Eligibility</span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }} className="relative p-5 sm:p-6 md:p-8 bg-gradient-to-br from-gold-50 to-offwhite-100 rounded-2xl border border-gold-200">
            <div className="absolute -top-3 sm:-top-4 left-6 sm:left-8 w-7 h-7 sm:w-8 sm:h-8 gold-gradient rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm">1</div>
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-4 sm:mb-6 gold-gradient rounded-2xl flex items-center justify-center text-white">
              <HiOutlineDocumentText size={28} />
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-charcoal mb-3 sm:mb-4">How It Works</h3>
            <p className="text-sm sm:text-base text-charcoal-50/80 leading-relaxed">Bring your gold article to any of our branches. Our team will assess its purity and value, explain the available terms, and provide your loan quickly.</p>
            <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
              {["Visit any branch", "Gold assessment", "Receive your loan"].map((step, i) => (
                <div key={i} className="flex items-center gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold-600 text-[10px] sm:text-xs font-bold">{i + 1}</span>
                  </div>
                  <span className="text-xs sm:text-sm text-charcoal-50/80">{step}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.25 }} className="relative p-5 sm:p-6 md:p-8 bg-gradient-to-br from-charcoal-100 to-charcoal-200 rounded-2xl border border-charcoal-50/20">
            <div className="absolute -top-3 sm:-top-4 left-6 sm:left-8 w-7 h-7 sm:w-8 sm:h-8 bg-charcoal rounded-full flex items-center justify-center text-gold-400 font-bold text-xs sm:text-sm">2</div>
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-4 sm:mb-6 bg-charcoal rounded-2xl flex items-center justify-center text-gold-400">
              <HiOutlineIdentification size={28} />
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Eligibility</h3>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">Applicants must be 18 years or older and present a valid identification document — NIC, Passport, or Driving Licence. No guarantor is required, and loan requests are considered according to our terms and conditions.</p>
            <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
              {["18+ years old", "Valid ID (NIC/Passport/License)", "No guarantor needed"].map((req, i) => (
                <div key={i} className="flex items-center gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold-400 text-[10px] sm:text-xs">✓</span>
                  </div>
                  <span className="text-xs sm:text-sm text-white/80">{req}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
