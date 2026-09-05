"use client";
import { motion } from "framer-motion";
import { COMPANY_INFO, QUICK_LINKS, BRANCHES } from "@/constants/data";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-charcoal-400 text-white relative overflow-hidden">
      <div className="container-custom py-16 md:py-24 relative z-10 border-t border-white/10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <span className="font-heading text-4xl md:text-5xl font-bold">SMG</span>
            <p className="text-white/40 text-sm mt-4 max-w-xs">Trusted gold pawning services for over 30 years. A partner company of {COMPANY_INFO.partnerCompany}.</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}><a href={link.href} className="text-white/80 hover:text-gold-500 transition-colors">{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4">Our Branches</h4>
            <ul className="space-y-3">
              {BRANCHES.map((b) => (
                <li key={b.name} className="flex items-center gap-2 text-white/80">
                  <HiOutlineLocationMarker className="text-gold-500" size={14} />
                  {b.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-white/10 gap-4">
          <p className="text-white/30 text-xs">&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
          <p className="text-white/30 text-xs">Partner: {COMPANY_INFO.partnerCompany}</p>
        </div>
      </div>

      <div className="relative h-[200px] md:h-[300px] flex items-center justify-center overflow-hidden border-t border-white/10">
        <motion.h2 
          initial={{ y: 100 }} 
          whileInView={{ y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[20vw] md:text-[18vw] lg:text-[15vw] font-bold text-white/[0.03] tracking-tighter leading-none absolute bottom-[-20px]"
        >
          SMG INVESTMENT
        </motion.h2>

        <motion.div
          animate={{
            x: [-100, typeof window !== "undefined" ? window.innerWidth + 100 : 1920],
            y: [0, -15, 5, -10, 0],
            rotate: [0, 5, -3, 4, 0]
          }}
          transition={{
            x: { duration: 15, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-4 md:top-12 z-20"
        >
          <svg width="40" height="60" viewBox="0 0 50 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 2 L48 25 L25 48 L2 25 Z" fill="#D4AF37" stroke="#8B7536" strokeWidth="1.5" />
            <line x1="25" y1="2" x2="25" y2="48" stroke="#8B7536" strokeWidth="1" />
            <line x1="2" y1="25" x2="48" y2="25" stroke="#8B7536" strokeWidth="1" />
            <path d="M25 48 Q30 55 25 62 Q20 70 25 78" stroke="#D4AF37" strokeWidth="2" fill="none" />
          </svg>
        </motion.div>
      </div>
    </footer>
  );
}
