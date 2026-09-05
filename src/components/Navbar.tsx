"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { NAV_LINKS } from "@/constants/data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileOpen ? "bg-charcoal/90 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-6"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          <a href="#home" className="font-heading font-bold text-xl text-white">
            SMG<span className="text-gold-500">.</span>
          </a>
          <div className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden lg:block text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal bg-gold-500 hover:bg-white transition-colors py-2 px-4 rounded-full">
              Get a Quote
            </a>
            <button onClick={() => setIsMobileOpen(true)} className="lg:hidden text-white p-2 -mr-2">
              <HiMenuAlt3 size={28} />
            </button>
          </div>
        </div>
      </motion.nav>
      
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-charcoal lg:hidden flex flex-col p-6"
          >
            <div className="flex items-center justify-between mb-12">
              <span className="font-heading font-bold text-xl text-white">SMG<span className="text-gold-500">.</span></span>
              <button onClick={() => setIsMobileOpen(false)} className="text-white p-2 -mr-2"><HiX size={28} /></button>
            </div>
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="font-heading text-4xl font-bold text-white hover:text-gold-500 transition-colors py-2"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
