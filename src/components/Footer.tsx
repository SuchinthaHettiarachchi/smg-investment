"use client";
import { motion } from "framer-motion";
import { COMPANY_INFO, QUICK_LINKS, BRANCHES } from "@/constants/data";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white relative overflow-hidden">
      <div className="container-custom py-20 md:py-32 relative z-10 border-b border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Ready to get <br/> <span className="italic gold-text">started?</span>
            </h2>
          </div>
          <a 
            href="#contact" 
            className="px-10 py-5 bg-gold-500 text-charcoal rounded-full font-medium text-lg hover:bg-white transition-colors inline-flex items-center gap-4 group"
          >
            Pawn Your Gold Today
            <span className="w-8 h-8 bg-charcoal text-gold-500 rounded-full flex items-center justify-center group-hover:bg-gold-500 group-hover:text-white transition-colors">→</span>
          </a>
        </div>

        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <span className="font-heading text-3xl font-bold">SMG<span className="text-gold-500">.</span></span>
            <p className="text-white/40 text-sm mt-4 max-w-xs">Trusted gold pawning services for over 30 years.</p>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}><a href={link.href} className="text-white/80 hover:text-gold-500 transition-colors text-sm">{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-6">Our Branches</h4>
            <ul className="space-y-4">
              {BRANCHES.map((b) => (
                <li key={b.name} className="flex items-center gap-2 text-white/80 text-sm">
                  <HiOutlineLocationMarker className="text-gold-500" size={14} />
                  {b.name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-6">Contact</h4>
            <ul className="space-y-4">
              <li><a href={`tel:${COMPANY_INFO.hotline}`} className="text-white/80 hover:text-gold-500 transition-colors text-sm">{COMPANY_INFO.hotline}</a></li>
              <li><a href={`mailto:${COMPANY_INFO.email}`} className="text-white/80 hover:text-gold-500 transition-colors text-sm">{COMPANY_INFO.email}</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative h-[150px] md:h-[200px] flex items-center justify-center overflow-hidden">
        <motion.h2 
          initial={{ y: 100 }} 
          whileInView={{ y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[20vw] md:text-[18vw] lg:text-[15vw] font-bold text-white/[0.03] tracking-tighter leading-none absolute bottom-[-20px]"
        >
          SMG INVESTMENT
        </motion.h2>
        <div className="absolute bottom-4 left-0 right-0 z-20">
          <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-xs">&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
            <p className="text-white/30 text-xs">Partner: {COMPANY_INFO.partnerCompany}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
