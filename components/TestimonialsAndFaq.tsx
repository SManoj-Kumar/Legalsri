"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Plus, Minus } from "lucide-react";

const testimonials = [
  { quote: "Legalsri made our company incorporation incredibly smooth. Their team guided us through every step and handled all the paperwork with zero hassle. Strongly recommend for any startup.", name: "Rajesh Kumar", role: "Founder, TechSpace Pvt Ltd", initials: "RK", color: "#c9a84c" },
  { quote: "We rely on Legalsri for all our GST filings and ROC compliance. Their timely reminders and expert advice have saved us from penalties multiple times. Best legal partner we have had.", name: "Anita Desai", role: "Director, Creative Hub", initials: "AD", color: "#3b4dc8" },
  { quote: "Professional, knowledgeable, and always responsive. Getting our trademark registered was a breeze with their assistance. The team knows exactly what they are doing.", name: "Vikram Singh", role: "CEO, GreenVentures", initials: "VS", color: "#16a34a" },
  { quote: "From DSC to Private Limited registration — Legalsri handled everything in record time. The digital process is seamless and their support team is available whenever I need help.", name: "Meera Patel", role: "Co-founder, FinTech Startup", initials: "MP", color: "#7c3aed" },
];

const faqs = [
  { q: "What tax filing services do you provide?", a: "We offer complete Income Tax Return (ITR), GST, and VAT filing services, including preparation, verification, and timely submission to the relevant tax authorities to ensure full compliance." },
  { q: "Do you handle GST registration and amendments?", a: "Yes, we assist with GST registration, modification, cancellation, and amendments, ensuring your business remains compliant with current tax regulations and deadlines." },
  { q: "What compliance and advisory services do you offer?", a: "Our compliance and advisory services include tax planning, deadline management, regulatory compliance support, and guidance on tax-efficient financial decisions for businesses and individuals." },
  { q: "Can you represent us during tax audits or investigations?", a: "Absolutely. We provide professional representation services during tax audits, scrutiny, notices, and investigations, acting on your behalf before tax authorities." },
  { q: "Do you help with Private Limited Company and LLP incorporation?", a: "Yes, we provide complete assistance for Private Limited Company and LLP registration, including documentation, filing, and regulatory approvals to help you start your business smoothly." },
  { q: "What is a Digital Signature Certificate (DSC) and do you provide it?", a: "A Digital Signature Certificate (DSC) is required for secure online filing, e-tendering, and company registrations. We provide Class-II and Class-III DSC registration services for individuals and businesses." },
  // { q: "Do you maintain financial records for tax purposes?", a: "Yes, we offer professional record-keeping services to maintain accurate financial documents required for taxation, audits, and regulatory compliance." }
];

export default function TestimonialsAndFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 360, behavior: "smooth" });
    }
  };

  // Scroll-reveal
  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale") || [];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef}>
      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
      <section id="testimonials" className="py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-12 reveal">
            <span className="text-sm font-bold tracking-widest uppercase mb-3 block" style={{ color: "#c9a84c" }}>
              TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "Playfair Display, serif", color: "#0f1a35" }}>
              What Our Clients Say
            </h2>
          </div>

          {/* Testimonials Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-6 pt-4 px-4 md:px-0 -mx-4 md:mx-0 reveal-scale scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="group snap-center shrink-0 w-[90vw] sm:w-[350px] lg:w-[calc(33.333%-16px)] rounded-[1.25rem] p-7 sm:p-8 bg-white flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-default"
                style={{
                  boxShadow: "0 12px 40px rgba(0,0,0,0.06)",
                  border: "1px solid rgba(0,0,0,0.03)"
                }}
              >
                <div>
                  {/* 5 stars */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, i) => <span key={i} style={{ color: "#c9a84c", fontSize: "1.1rem", lineHeight: 1 }}>★</span>)}
                  </div>

                  {/* Quote text */}
                  <p
                    className="text-sm sm:text-base leading-relaxed mb-8"
                    style={{ fontStyle: "italic", color: "#4b5563" }}
                  >
                    "{t.quote}"
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shrink-0"
                    style={{ backgroundColor: "#f1f5f9", color: "#64748b" }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: "#0f1a35" }}>{t.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#9ca3af" }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows (Mobile: Below, Desktop: Sides) */}
          <div className="flex justify-center gap-4 mt-6 md:mt-0 md:absolute md:top-[55%] md:-translate-y-1/2 md:left-0 md:right-0 md:justify-between md:pointer-events-none md:px-2 md:z-10 reveal">
            <button 
              onClick={scrollLeft} 
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center border hover:bg-gray-50 transition-all duration-300 hover:scale-110 hover:shadow-xl md:pointer-events-auto md:transform md:-translate-x-1/2"
              style={{ borderColor: "rgba(0,0,0,0.05)", color: "#4b5563" }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={scrollRight} 
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center border hover:bg-gray-50 transition-all duration-300 hover:scale-110 hover:shadow-xl md:pointer-events-auto md:transform md:translate-x-1/2"
              style={{ borderColor: "rgba(0,0,0,0.05)", color: "#4b5563" }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section id="faq" className="py-16 sm:py-24" style={{ backgroundColor: "#f8f9fb" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

            {/* Left */}
            <div className="lg:col-span-2 reveal-left">
              <span className="section-label">FAQ</span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: "Playfair Display, serif", color: "#0f1a35" }}>
                Frequently Asked<br />Questions
              </h2>
              <p className="text-sm mb-6" style={{ color: "#6b7280" }}>
                Can&apos;t find the answer? Reach out to our support team anytime.
              </p>
              <button
                onClick={() => document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" })}
                className="font-semibold text-sm border-b-2 pb-0.5"
                style={{ color: "#0f1a35", borderColor: "#0f1a35" }}
              >
                Contact Support →
              </button>
            </div>

            {/* Right */}
            <div className="lg:col-span-3 reveal-right">
              {faqs.map((faq, i) => (
                <div key={i} className="faq-row">
                  <button
                    className="w-full flex items-center justify-between text-left gap-4"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-medium text-sm sm:text-base" style={{ color: "#0f1a35" }}>{faq.q}</span>
                    <span className="shrink-0" style={{ color: "#c9a84c" }}>
                      {openFaq === i ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                  {openFaq === i && (
                    <p className="mt-3 text-sm leading-relaxed" style={{ color: "#6b7280" }}>{faq.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
