"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SERVICES } from "@/constants/data";
import { HiOutlineShieldCheck, HiOutlineScale, HiOutlineRefresh, HiOutlineCurrencyDollar } from "react-icons/hi";

const iconMap: Record<string, React.ReactNode> = {
  pawn: <HiOutlineShieldCheck size={32} />,
  valuation: <HiOutlineScale size={32} />,
  redeem: <HiOutlineRefresh size={32} />,
  installment: <HiOutlineCurrencyDollar size={32} />,
};

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="section-padding bg-charcoal border-t border-white/5">
      <div className="container-custom" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-500">Our Services</span>
          <h2 className="heading-primary mt-4 text-white">
            Reliable Gold Pawning, <span className="gold-text">Simplified</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {SERVICES.map((service, i) => (
            <motion.div 
              key={service.title} 
              initial={{ opacity: 0, y: 30 }} 
              animate={inView ? { opacity: 1, y: 0 } : {}} 
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-charcoal-300/50 p-8 md:p-10 rounded-3xl border border-white/10 hover:border-gold-500/30 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold-500/10 rounded-full blur-2xl group-hover:bg-gold-500/20 transition-colors"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-gold-500 mb-8 border border-white/10">
                  {iconMap[service.icon]}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white/50 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
