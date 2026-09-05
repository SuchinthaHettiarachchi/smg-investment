"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-charcoal pt-24 pb-10">
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-charcoal-300 rounded-full blur-[120px]" />
      </div>

      <div className="container-custom relative z-10 flex flex-col items-center text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-white/70 mb-8 backdrop-blur-sm"
        >
          Trusted Gold Pawning in Sri Lanka
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.4 }}
          className="heading-massive text-white max-w-5xl"
        >
          Financial <span className="gold-text">Support.</span> <br/>
          With Your <span className="text-white/20">Gold.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-xl text-lg text-white/50 leading-relaxed mt-8 mb-10"
        >
          A trusted gold pawning service, live in minutes. No hidden fees, just secure loans and transparent valuations.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#contact" className="px-8 py-4 bg-gold-500 text-charcoal rounded-full font-medium hover:bg-white transition-colors">
            Pawn Your Gold
          </a>
          <a href="#services" className="px-8 py-4 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-colors">
            View Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}
