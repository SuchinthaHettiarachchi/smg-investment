"use client";
import { motion } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";
import Particles from "./Particles";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/hero-bg.svg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-400/80 via-charcoal-300/70 to-charcoal-400/90" />
      </div>

      <Particles />

      <div className="relative z-10 container-custom text-center px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gold-500/20 border border-gold-500/30 rounded-full text-gold-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Trusted Gold Pawning in Sri Lanka
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight"
        >
          Get the Financial Support
          <br className="hidden sm:block" />
          <span className="gold-gradient-text"> You Need</span>, With the Value
          <br className="hidden sm:block" />
          of Your <span className="text-gold-400">Gold</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto text-white/80 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-10 px-2"
        >
          Over 30 years of trusted service. Secure, transparent, and flexible gold pawning solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
        >
          <a href="#contact" className="px-6 py-3 sm:px-8 sm:py-4 gold-gradient text-white rounded-full font-semibold text-base sm:text-lg hover:shadow-xl hover:shadow-gold-500/30 transition-all hover:scale-105">
            Pawn Your Gold Today
          </a>
          <a href="#services" className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-white/30 text-white rounded-full font-semibold text-base sm:text-lg hover:bg-white/10 transition-all">
            Learn More
          </a>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a href="#about" className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-[10px] sm:text-xs tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <HiArrowDown size={18} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
