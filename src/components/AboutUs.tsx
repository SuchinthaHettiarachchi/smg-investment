"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AboutUs() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="about" className="section-padding bg-offwhite-100 relative overflow-hidden">
      <div className="container-custom" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="/images/about.svg" alt="SMG Investment Services" className="w-full h-[280px] sm:h-[350px] lg:h-[450px] xl:h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-400/40 to-transparent" />
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5, delay: 0.4 }} className="absolute -bottom-5 -right-4 sm:-bottom-6 sm:-right-6 lg:-right-8 bg-gold-500 text-white p-4 sm:p-5 lg:p-6 rounded-2xl shadow-xl">
              <div className="text-center">
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold">30+</span>
                <span className="text-xs sm:text-sm font-medium">Years of Trust</span>
              </div>
            </motion.div>
            <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-16 h-16 sm:w-24 sm:h-24 border-2 border-gold-500/30 rounded-2xl" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }}>
            <span className="text-gold-600 font-semibold text-xs sm:text-sm tracking-widest uppercase">About Us</span>
            <h2 className="heading-primary mt-2 sm:mt-3 mb-4 sm:mb-6">
              Three Decades of Trust, <span className="gold-gradient-text">Built on Experience</span>
            </h2>
            <div className="space-y-3 sm:space-y-4 text-body">
              <p>Established in 1995, SMG Investment Services has been serving customers for over 30 years, building a reputation for trusted and reliable gold pawning services. Today, we operate through three conveniently located branches in Maharagama, Kottawa, and Nugegoda, making our services accessible to customers across the region.</p>
              <p>As a partner company of Harith Engineering &amp; Company (Pvt) Ltd, we continue to uphold a commitment to professionalism, customer care, and secure gold pawning services. With decades of experience and a strong focus on transparency and confidentiality, we are dedicated to providing customers with a dependable financial partner when they need it most.</p>
            </div>
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-offwhite-300">
              {[
                { value: "3", label: "Branches" },
                { value: "30+", label: "Years" },
                { value: "10K+", label: "Customers" },
              ].map((stat, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }} className="text-center">
                  <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-gold-600">{stat.value}</span>
                  <span className="text-xs sm:text-sm text-charcoal-50/60">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
