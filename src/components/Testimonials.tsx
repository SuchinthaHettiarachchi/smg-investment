"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TESTIMONIALS } from "@/constants/data";
import { HiStar } from "react-icons/hi";

export default function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="testimonials" className="section-padding bg-offwhite-100">
      <div className="container-custom" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          <span className="text-gold-600 font-semibold text-xs sm:text-sm tracking-widest uppercase">Customer Trust</span>
          <h2 className="heading-primary mt-2 sm:mt-3 mb-3 sm:mb-6">
            What Our <span className="gold-gradient-text">Customers</span> Say
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.12 }} className="p-5 sm:p-6 md:p-8 bg-white rounded-2xl border border-offwhite-300 hover:border-gold-500/30 hover:shadow-xl transition-all duration-300">
              <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <HiStar key={j} size={16} className={j < t.rating ? "text-gold-500" : "text-offwhite-300"} />
                ))}
              </div>
              <p className="text-sm sm:text-base text-charcoal-50/80 leading-relaxed mb-4 sm:mb-6 italic">&ldquo;{t.testimonial}&rdquo;</p>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-offwhite-200 flex-shrink-0">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm sm:text-base text-charcoal">{t.name}</h4>
                  <p className="text-[10px] sm:text-xs text-gold-600">Verified Customer</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
