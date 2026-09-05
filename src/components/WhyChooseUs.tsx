"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { WHY_CHOOSE_US } from "@/constants/data";
import { HiOutlineShieldCheck, HiOutlineCash, HiOutlineUserRemove, HiOutlineChartBar, HiOutlineBeaker, HiOutlineLockClosed, HiOutlineCurrencyDollar, HiOutlineLightningBolt, HiOutlineEyeOff, HiOutlineLocationMarker } from "react-icons/hi";

const iconMap: Record<string, React.ReactNode> = {
  trust: <HiOutlineShieldCheck size={22} />,
  noLimit: <HiOutlineCash size={22} />,
  noGuarantor: <HiOutlineUserRemove size={22} />,
  interest: <HiOutlineChartBar size={22} />,
  testing: <HiOutlineBeaker size={22} />,
  security: <HiOutlineLockClosed size={22} />,
  flexible: <HiOutlineCurrencyDollar size={22} />,
  fast: <HiOutlineLightningBolt size={22} />,
  privacy: <HiOutlineEyeOff size={22} />,
  branch: <HiOutlineLocationMarker size={22} />,
};

export default function WhyChooseUs() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="why-us" className="section-padding bg-offwhite-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(45deg,transparent,transparent 35px,#D4AF37 35px,#D4AF37 36px)" }} />
      </div>
      <div className="container-custom relative z-10" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          <span className="text-gold-600 font-semibold text-xs sm:text-sm tracking-widest uppercase">Why Choose Us</span>
          <h2 className="heading-primary mt-2 sm:mt-3 mb-3 sm:mb-6">
            Gold Pawning Made <span className="gold-gradient-text">Simple</span>
          </h2>
          <p className="text-body">With 30+ years of experience, we make gold pawning simple, secure, and convenient with flexible options and customer-focused service.</p>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {WHY_CHOOSE_US.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.06 }} className="group p-3 sm:p-4 md:p-6 bg-white rounded-xl border border-offwhite-300 hover:border-gold-500/50 hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-2 sm:mb-3 md:mb-4 gold-gradient rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                {iconMap[item.icon]}
              </div>
              <h3 className="font-heading text-xs sm:text-sm md:text-base lg:text-lg font-bold text-charcoal mb-1 sm:mb-2 leading-tight">{item.title}</h3>
              <p className="text-[10px] sm:text-xs md:text-sm text-charcoal-50/70 leading-relaxed hidden sm:block">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
