"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

function scrollTo(id: string) {
  if (typeof window === "undefined") return;
  if (id === "top") { window.scrollTo({ top: 0 }); return; }
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0a1020" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <button onClick={() => scrollTo("top")} className="flex items-center gap-2.5 mb-5">
            <div className="logo-mark"><span>L</span></div>
            <span style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "white" }}>
              Legalsri<span style={{ color: "#c9a84c" }}>.</span>
            </span>
          </button>
          <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: "#9ca3af" }}>
            Trusted tax and compliance consultancy supporting individuals and businesses across India.
          </p>
          <div className="flex items-center gap-3">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors" style={{ backgroundColor: "#1a2a4a" }}>
                <Icon size={15} style={{ color: "#9ca3af" }} />
              </a>
            ))}
          </div>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="text-white font-semibold mb-5 text-sm tracking-wide">Our Services</h4>
          <ul className="space-y-3">
            {["Company Registration", "GST & Income Tax Filing", "Compliance & Advisory", "Tax Notice & Representation", "Record Keeping", "Digital Signature Certificate (DSC)"].map((label) => (
              <li key={label}>
                <button
                  onClick={() => scrollTo("services")}
                  className="text-sm hover:text-white transition-colors text-left"
                  style={{ color: "#9ca3af" }}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-5 text-sm tracking-wide">Quick Links</h4>
          <ul className="space-y-3">
            {[
              { label: "How It Works",       anchor: "process",      isPage: false },
              { label: "Why Legalsri",        anchor: "why-us",       isPage: false },
              { label: "Testimonials",        anchor: "testimonials", isPage: false },
              { label: "FAQ",                 anchor: "faq",          isPage: false },
              { label: "Blog",                href: "/blog",          isPage: true  },
              { label: "Free Consultation",   anchor: "consultation", isPage: false },
            ].map((l) => (
              <li key={l.label}>
                {l.isPage ? (
                  <Link href={l.href!} className="text-sm hover:text-white transition-colors" style={{ color: "#9ca3af" }}>
                    {l.label}
                  </Link>
                ) : (
                  <button onClick={() => scrollTo(l.anchor!)} className="text-sm hover:text-white transition-colors text-left" style={{ color: "#9ca3af" }}>
                    {l.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-5 text-sm tracking-wide">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin size={15} className="mt-0.5 shrink-0" style={{ color: "#c9a84c" }} />
              <span className="text-sm" style={{ color: "#9ca3af" }}>Ashok Nagar, Near B.ED College<br />Koraput, Odisha, India - 764020</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={15} className="shrink-0" style={{ color: "#c9a84c" }} />
              <a href="tel:+919876543210" className="text-sm hover:text-white transition-colors" style={{ color: "#9ca3af" }}>+91 70085 22175</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={15} className="shrink-0" style={{ color: "#c9a84c" }} />
              <a href="mailto:support@legalsri.com" className="text-sm hover:text-white transition-colors" style={{ color: "#9ca3af" }}>100.manoj@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderColor: "#1a2a4a" }}>
        <p className="text-xs" style={{ color: "#6b7280" }}>
          © 2026 Legalsri. All rights reserved. | Built by{" "}
          <a 
            href="https://buildstax.in" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ textDecoration: "underline" }}
          >
            Buildstax
          </a>
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <Link href="/privacy" className="text-xs hover:text-white transition-colors" style={{ color: "#6b7280" }}>Privacy Policy</Link>
          <Link href="/terms"   className="text-xs hover:text-white transition-colors" style={{ color: "#6b7280" }}>Terms &amp; Conditions</Link>
          <Link href="/cookies" className="text-xs hover:text-white transition-colors" style={{ color: "#6b7280" }}>Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}
