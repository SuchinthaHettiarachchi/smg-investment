"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { WHY_CHOOSE_US } from "@/constants/data";

export default function WhyChooseUs() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="why-us" className="section-padding bg-offwhite-100 text-charcoal">
      <div className="container-custom" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-24">
          <div className="lg:col-span-6">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Why Choose Us</span>
            <h2 className="heading-primary mt-4">
              Gold Pawning <br/> Made <span className="italic gold-text">Simple</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-body">
              With 30+ years of experience, we make gold pawning simple, secure, and convenient with flexible options and customer-focused service.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal/10 border border-charcoal/10 rounded-2xl overflow-hidden">
          {WHY_CHOOSE_US.map((item, i) => (
            <motion.div 
              key={item.title} 
              initial={{ opacity: 0 }} 
              animate={inView ? { opacity: 1 } : {}} 
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-offwhite-100 p-8 md:p-10 hover:bg-white transition-colors duration-300 group min-h-[250px] flex flex-col justify-between"
            >
              <span className="text-sm text-charcoal/30 font-mono mb-4">0{i + 1}</span>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:gold-text transition-colors">{item.title}</h3>
                <p className="text-sm text-charcoal/60 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
