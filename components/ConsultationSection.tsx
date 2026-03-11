"use client";

import { useState, useEffect, useRef } from "react";
import { CheckCircle } from "lucide-react";

const serviceOptions = [
  "Company Registration",
  "GST & Income Tax Filing",
  "Compliance & Advisory",
  "Tax Notice & Representation",
  "Record Keeping",
  "Digital Signature Certificate (DSC)",
];

export default function ConsultationSection() {
  const [name, setName]       = useState("");
  const [phone, setPhone]     = useState("");
  const [service, setService] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".reveal-left, .reveal-right") || [];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    // Create WhatsApp message
    const waNumber = "917008522175";
    const message = `Hello Legalsri! I would like to request a free callback.
    
*Details:*
- *Name:* ${name}
- *Phone:* ${phone}
- *Service:* ${service}`;
    
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    window.open(waUrl, "_blank");
    
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setName(""); setPhone(""); setService("");
  }

  return (
    <section
      id="consultation"
      className="py-16 sm:py-24"
      style={{ background: "linear-gradient(135deg, #0b1429 0%, #0f1a35 50%, #162040 100%)" }}
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — text only, NO phone/email/address */}
          <div className="reveal-left">
            <span className="section-label">FREE CONSULTATION</span>
            <h2
              className="text-3xl sm:text-4xl xl:text-5xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Ready to Start Your<br />Business Journey?
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mb-8" style={{ color: "#94a3b8" }}>
              Receive professional guidance for company registration, tax filing, and compliance support. 
              Schedule a consultation and move forward with clarity and confidence.
            </p>

            {/* 4 bullet points — contact info removed after these */}
            <ul className="space-y-4">
              {[
                "Personal consultation",
                "Clear and upfront pricing",
                "Secure digital process",
                "Reliable compliance management",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm" style={{ color: "#cbd5e1" }}>
                  <CheckCircle size={15} style={{ color: "#c9a84c", flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
            {/* Phone, email, and address intentionally removed as requested */}
          </div>

          {/* RIGHT — form */}
          <div className="reveal-right">
            <div className="bg-white rounded-2xl p-6 sm:p-8" style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.3)" }}>
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#dcfce7" }}>
                    <CheckCircle size={32} style={{ color: "#16a34a" }} />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "#0f1a35" }}>Thank you!</h3>
                  <p className="text-sm" style={{ color: "#6b7280" }}>We&apos;ll call you back within 15 minutes.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold mb-6" style={{ fontFamily: "Playfair Display, serif", color: "#0f1a35" }}>
                    Book Your Free Consultation
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "#374151" }}>Your Name</label>
                      <input
                        type="text" placeholder="Enter your full name"
                        value={name} onChange={(e) => setName(e.target.value)} required
                        className="w-full px-4 py-3.5 rounded-xl border text-sm outline-none transition-colors focus:border-yellow-400"
                        style={{ borderColor: "#e5e7eb", color: "#0f1a35" }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "#374151" }}>Phone Number</label>
                      <input
                        type="tel" placeholder="+91 98765 43210"
                        value={phone} onChange={(e) => setPhone(e.target.value)} required
                        className="w-full px-4 py-3.5 rounded-xl border text-sm outline-none transition-colors focus:border-yellow-400"
                        style={{ borderColor: "#e5e7eb", color: "#0f1a35" }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "#374151" }}>Service Required</label>
                      <select
                        value={service} onChange={(e) => setService(e.target.value)} required
                        className="w-full px-4 py-3.5 rounded-xl border text-sm outline-none transition-colors focus:border-yellow-400"
                        style={{ borderColor: "#e5e7eb", color: service ? "#0f1a35" : "#9ca3af" }}
                      >
                        <option value="" disabled>Select a service</option>
                        {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl font-bold text-base hover:opacity-90 active:scale-95 transition-all mt-2"
                      style={{ backgroundColor: "#c9a84c", color: "#0f1a35" }}
                    >
                      Request Free Callback
                    </button>
                    <p className="text-xs text-center" style={{ color: "#9ca3af" }}>
                      By submitting, you agree to our{" "}
                      <a href="/privacy" className="underline">Privacy Policy</a> and{" "}
                      <a href="/terms" className="underline">Terms of Service</a>.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
