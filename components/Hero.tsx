"use client";

import { ArrowRight, Play, CheckCircle, Shield, FileText, Briefcase } from "lucide-react";

const stats = [
  { value: "500+", label: "CLIENTS SERVED" },
  { value: "99%",  label: "SUCCESS RATE" },
  { value: "24h",  label: "RESPONSE TIME" },
  { value: "50+",  label: "LEGAL EXPERTS" },
];

const complianceItems = [
  { icon: FileText,    label: "Income Tax Filing", sub: "Due in 3 Days",               status: "arrow", iconBg: "#3b4dc8" },
  { icon: FileText,    label: "GST Return Filing", sub: "In Progress",                 status: "bar",   iconBg: "#6b4db8" },
  { icon: Briefcase,   label: "Company Incorporation (Pvt Ltd / LLP)", sub: "Documentation Stage", status: "bar", iconBg: "#c9a84c" },
  { icon: CheckCircle, label: "Digital Signature Certificate (DSC)", sub: "Active",    status: "done",  iconBg: "#16a34a" },
];

export default function Hero() {
  const scrollToProcess      = () => document.getElementById("process")?.scrollIntoView({ behavior: "smooth" });
  const scrollToConsultation = () => document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <section
        id="hero"
        className="relative pt-16 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0b1429 0%, #0f1a35 40%, #162040 70%, #0f1a35 100%)" }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-0 right-0 w-96 h-96 opacity-20"
            style={{
              background: "radial-gradient(circle at center, #c9a84c22, transparent 60%)",
              transform: "translate(20%,-20%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-96 h-96 opacity-10"
            style={{
              background: "radial-gradient(circle at center, #3b4dc888, transparent 60%)",
              transform: "translate(-30%,20%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 lg:pt-16 pb-28 sm:pb-32">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12 w-full">

            {/* LEFT SIDE */}
            <div className="flex-1 w-full max-w-xl">
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 border"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  borderColor: "rgba(201,168,76,0.3)",
                }}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#c9a84c" }} />
                <span className="text-xs font-semibold text-white tracking-widest uppercase">
                  Trusted by 500+ Businesses
                </span>
              </div>

              <h1
                className="font-bold text-white leading-tight mb-5"
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                  lineHeight: 1.15,
                }}
              >
                Secure Your<br />
                Business Legacy<br />
                with <span className="shimmer-gold">Expert Legal</span>
                <br />Guidance.
              </h1>

              <p
                className="text-sm sm:text-base leading-relaxed mb-8 max-w-md"
                style={{ color: "#94a3b8" }}
              >
                Comprehensive legal solutions for startups and enterprises.
                From registration to compliance, we handle the complexities
                so you can focus on growth.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8">
                <button
                  onClick={scrollToConsultation}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm hover:opacity-90 active:scale-95 transition-all"
                  style={{ backgroundColor: "#c9a84c", color: "#0f1a35" }}
                >
                  Start Free Consultation <ArrowRight size={15} />
                </button>

                <button
                  onClick={scrollToProcess}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white border hover:bg-white/10 transition-colors"
                  style={{ borderColor: "rgba(255,255,255,0.2)" }}
                >
                  <Play size={13} fill="currentColor" /> Watch How We Work
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                {["Fast Processing", "100% Confidential", "Expert Support"].map((b) => (
                  <span key={b} className="flex items-center gap-1.5 text-xs" style={{ color: "#94a3b8" }}>
                    <CheckCircle size={12} style={{ color: "#c9a84c" }} /> {b}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative w-full lg:w-[400px] xl:w-[430px] shrink-0 lg:ml-16 xl:ml-24 mt-16 lg:mt-0">

              {/* 15+ Badge */}
              <div
                className="absolute -top-16 right-6 lg:-right-14 lg:-top-4 z-20 flex flex-col items-center justify-center text-center rounded-2xl"
                style={{
                  width: "72px",
                  height: "72px",
                  backgroundColor: "#c9a84c",
                  boxShadow: "0 8px 28px rgba(201,168,76,0.5)",
                }}
              >
                <span
                  className="text-lg font-black leading-tight"
                  style={{ color: "#0f1a35", fontFamily: "DM Sans, sans-serif" }}
                >
                  15+
                </span>
                <span
                  style={{
                    color: "#0f1a35",
                    fontSize: "0.44rem",
                    fontWeight: 700,
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                    lineHeight: 1.3,
                  }}
                >
                  YEARS<br />EXP.
                </span>
              </div>

              {/* Compliance Card */}
              <div
                className="rounded-2xl p-5 sm:p-6"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                }}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: "rgba(201,168,76,0.18)" }}
                    >
                      <Shield size={17} style={{ color: "#c9a84c" }} />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Your Compliance Overview</p>
                      <p className="text-xs" style={{ color: "#5a6070" }}>Updated Recently</p>
                    </div>
                  </div>
                  <span
                    className="px-2.5 py-1 rounded-full text-xs font-bold"
                    style={{ backgroundColor: "#dcfce7", color: "#16a34a" }}
                  >
                    On Track
                  </span>
                </div>

                <div className="space-y-2.5">
                  {complianceItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="flex items-center justify-between rounded-xl px-4 py-3 hover:bg-white/5 transition-colors"
                        style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center"
                            style={{ backgroundColor: item.iconBg + "28" }}
                          >
                            <Icon size={14} style={{ color: item.iconBg }} />
                          </div>
                          <div>
                            <p className="text-white text-sm font-medium">{item.label}</p>
                            <p className="text-xs" style={{ color: "#5a6070" }}>{item.sub}</p>
                          </div>
                        </div>
                        {item.status === "done" && (
                          <CheckCircle size={16} style={{ color: "#16a34a" }} />
                        )}
                        {item.status === "bar" && (
                          <div className="w-10 h-1.5 rounded-full" style={{ backgroundColor: "#c9a84c" }} />
                        )}
                        {item.status === "arrow" && (
                          <ArrowRight size={14} style={{ color: "#5a6070" }} />
                        )}
                      </div>
                    );
                  })}
                </div>


              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}