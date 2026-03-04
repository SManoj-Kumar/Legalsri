"use client";

import { useEffect, useRef } from "react";
import { Building2, FileText, Scale, Briefcase, PenLine, Receipt } from "lucide-react";

const services = [
  {
    icon: Building2, iconBg: "#eef2ff", iconColor: "#3b4dc8",
    title: "Company Registration",
    desc: "Private Limited Company and LLP incorporation with complete MCA filing and documentation support. Reliable assistance to help you legally establish your business as per Indian corporate regulations.",
  },
  {
    icon: Receipt, iconBg: "#fefce8", iconColor: "#ca8a04",
    title: "GST & Income Tax Filing",
    desc: "Accurate and timely filing of GST returns and Income Tax Returns (ITR) in compliance with Indian tax laws. Ensuring smooth, error-free submissions for individuals and businesses.",
  },
  {
    icon: Scale, iconBg: "#f0fdf4", iconColor: "#16a34a",
    title: "Compliance & Advisory",
    desc: "Support for GST registration, amendments, statutory filings, and ongoing regulatory compliance. Helping your business stay compliant and penalty-free.",
  },
  {
    icon: Briefcase, iconBg: "#f5f0ff", iconColor: "#7c3aed",
    title: "Tax Notice & Representation",
    desc: "Professional assistance in handling Income Tax and GST notices, audits, and communications with tax authorities.",
  },
  {
    icon: FileText, iconBg: "#fff7ed", iconColor: "#ea580c",
    title: "Record Keeping",
    desc: "Organized maintenance of financial records and tax documentation to ensure audit readiness and smooth future filings.",
  },
  {
    icon: PenLine, iconBg: "#fdf2f8", iconColor: "#be185d",
    title: "Digital Signature Certificate (DSC)",
    desc: "Class II and Class III DSC services for MCA filing, GST compliance, company registration, and e-tendering requirements.",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale") || [];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-16 sm:py-24" style={{ backgroundColor: "#f8f9fb" }} ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 reveal">
          <span className="section-label">OUR EXPERTISE</span>
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold mb-4" style={{ fontFamily: "Playfair Display, serif", color: "#0f1a35" }}>
            Tax Compliance Consultancy
          </h2>
          <p className="text-sm sm:text-base max-w-xl mx-auto" style={{ color: "#6b7280" }}>
            I simplify tax filings, business registration, and regulatory requirements so you can focus on growing your business with confidence.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className="reveal reveal-scale bg-white rounded-2xl p-6 sm:p-7 card-lift group"
                style={{ border: "1px solid #e5e7eb", transitionDelay: `${i * 0.08}s` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: svc.iconBg }}
                >
                  <Icon size={22} style={{ color: svc.iconColor }} />
                </div>
                <h3 className="text-lg font-bold mb-2.5" style={{ color: "#0f1a35" }}>{svc.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{svc.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
