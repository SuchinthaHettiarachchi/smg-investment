"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SERVICES } from "@/constants/data";
import { HiOutlineShieldCheck, HiOutlineScale, HiOutlineRefresh, HiOutlineCurrencyDollar } from "react-icons/hi";

const iconMap: Record<string, React.ReactNode> = {
  pawn: <HiOutlineShieldCheck size={24} />,
  valuation: <HiOutlineScale size={24} />,
  redeem: <HiOutlineRefresh size={24} />,
  installment: <HiOutlineCurrencyDollar size={24} />,
};

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="section-padding bg-charcoal">
      <div className="container-custom" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="lg:sticky lg:top-28 lg:self-start">
            <span className="text-gold-500 font-semibold text-xs sm:text-sm tracking-widest uppercase">Our Services</span>
            <h2 className="heading-primary mt-2 sm:mt-3 mb-4 sm:mb-6 text-white">
              Reliable Gold Pawning, <span className="gold-gradient-text">Made Simple</span>
            </h2>
            <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed">We offer secure and convenient gold pawning solutions with transparent valuations, competitive rates, flexible payments, and professional customer service.</p>
            <div className="mt-6 sm:mt-8 relative rounded-2xl overflow-hidden">
              <img src="/images/services-bg.svg" alt="Gold Pawning Services" className="w-full h-48 sm:h-56 lg:h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal-400/80 to-transparent" />
              <div className="absolute inset-0 flex items-center p-5 sm:p-8">
                <p className="text-white font-heading text-lg sm:text-xl font-bold max-w-xs">Your Gold, Your Financial Freedom</p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-4 sm:space-y-6">
            {SERVICES.map((service, i) => (
              <motion.div key={service.title} initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.12 }} className="group p-4 sm:p-6 bg-charcoal-400 rounded-xl border border-white/10 hover:border-gold-500/50 hover:bg-charcoal-300 transition-all duration-300">
                <div className="flex items-start gap-3 sm:gap-5">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 gold-gradient rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    {iconMap[service.icon]}
                  </div>
                  <div>
                    <h3 className="font-heading text-base sm:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2">{service.title}</h3>
                    <p className="text-xs sm:text-sm md:text-base text-white/60 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
