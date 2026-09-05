"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { NAV_LINKS } from "@/constants/data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = NAV_LINKS.map((link) => link.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
  }, [isMobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-offwhite-100/95 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-6"}`}
      >
        <div className="container-custom flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 gold-gradient rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div>
              <span className={`font-heading font-bold text-xl ${isScrolled ? "text-charcoal" : "text-white"}`}>SMG</span>
              <span className={`block text-[10px] tracking-widest uppercase -mt-1 ${isScrolled ? "text-gold-600" : "text-gold-400"}`}>Investment Services</span>
            </div>
          </a>
          <div className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className={`text-sm font-medium transition-colors relative ${activeSection === link.href.replace("#", "") ? (isScrolled ? "text-gold-600" : "text-gold-400") : (isScrolled ? "text-charcoal hover:text-gold-600" : "text-white hover:text-gold-400")}`}>
                {link.label}
                {activeSection === link.href.replace("#", "") && (
                  <motion.div layoutId="activeNav" className="absolute -bottom-1 left-0 right-0 h-0.5 gold-gradient rounded-full" />
                )}
              </a>
            ))}
            <a href="#contact" className="px-6 py-2.5 gold-gradient text-white rounded-full font-medium text-sm hover:shadow-lg transition-shadow">Get a Quote</a>
          </div>
          <button onClick={() => setIsMobileOpen(true)} className={`lg:hidden ${isScrolled ? "text-charcoal" : "text-white"}`}>
            <HiMenuAlt3 size={28} />
          </button>
        </div>
      </motion.nav>
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-charcoal lg:hidden"
          >
            <div className="flex items-center justify-between p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 gold-gradient rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="font-heading font-bold text-xl text-white">SMG</span>
              </div>
              <button onClick={() => setIsMobileOpen(false)} className="text-white"><HiX size={28} /></button>
            </div>
            <div className="flex flex-col gap-2 p-6">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className={`py-4 border-b border-white/10 text-lg font-medium ${activeSection === link.href.replace("#", "") ? "text-gold-400" : "text-white/80"}`}
                >
                  {link.label}
                </motion.a>
              ))}
              <a href="#contact" onClick={() => setIsMobileOpen(false)} className="mt-6 px-6 py-3 gold-gradient text-white rounded-lg font-medium text-center">Get a Quote</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
