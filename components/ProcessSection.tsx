/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Users, DollarSign, MessageSquare, FileCheck, Settings, Trophy, Shield } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

const steps = [
  {
    num: "01", icon: MessageSquare,
    color: "#c9a84c", lightBg: "#fffbeb", border: "#c9a84c50",
    title: "Initial Consultation",
    desc: "Connect with a legal expert to discuss your business needs. The expert will identify the right structure and provide a clear roadmap tailored to your goals.",
    side: "right", // card goes on RIGHT, dot in centre
  },
  {
    num: "02", icon: FileCheck,
    color: "#3b4dc8", lightBg: "#eef2ff", border: "#3b4dc850",
    title: "Document Collection",
    desc: "Documents are securely collected after consultation, ensuring complete privacy and confidentiality.",
    side: "left",  // card goes on LEFT
  },
  {
    num: "03", icon: Settings,
    color: "#16a34a", lightBg: "#f0fdf4", border: "#16a34a50",
    title: "Filing and Processing",
    desc: "The expert prepares and files the application with the relevant authorities, handling all communication and queries on behalf of the client.",
    side: "right",
  },
  {
    num: "04", icon: Trophy,
    color: "#ea580c", lightBg: "#fff7ed", border: "#ea580c50",
    title: "Completion and Handover",
    desc: "Receive certificates and compliance documents digitally, with the expert providing support to ensure the business is fully set up and ready to operate.",
    side: "left",
  },
];

const advantages = [
  { icon: DollarSign, title: "Transparent & Honest Pricing",       desc: "Upfront fee structure with no hidden charges." },
  { icon: FileCheck,  title: "Accurate & Timely Filing",           desc: "Carefully prepared and submitted on time to avoid penalties." },
  { icon: Users,      title: "Direct One-to-One Support",          desc: "Personal consultation for registrations and filings with timely support." },
  { icon: Shield,     title: "Confidential & Professional Handling", desc: "Your financial and legal information is managed with complete discretion." },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const whyRef     = useRef<HTMLDivElement>(null);
  const [lineH, setLineH] = useState(0);
  // Track which step circles are visible
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>([false, false, false, false]);

  /* ── Scroll-driven gold line ─────────────────────────────── */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const onScroll = () => {
      const rect    = section.getBoundingClientRect();
      const winH    = window.innerHeight;
      const progress = Math.min(1, Math.max(0, (winH - rect.top) / (rect.height * 0.9)));
      setLineH(progress * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Reveal observer for step cards ─────────────────────── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.15 }
    );

    sectionRef.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right")
      .forEach((el) => observer.observe(el));

    // Animate step circles one by one
    const dotObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = parseInt((e.target as HTMLElement).dataset.step || "0");
            setVisibleSteps((prev) => {
              const next = [...prev];
              next[idx] = true;
              return next;
            });
          }
        });
      },
      { threshold: 0.5 }
    );
    sectionRef.current?.querySelectorAll("[data-step]").forEach((el) => dotObserver.observe(el));

    return () => { observer.disconnect(); dotObserver.disconnect(); };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.12 }
    );
    whyRef.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── 4-STEP PROCESS ──────────────────────────────────────── */}
      <section id="process" className="py-16 sm:py-24 bg-white overflow-hidden" ref={sectionRef}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">

          {/* Header */}
          <div className="text-center mb-12 sm:mb-20 reveal">
            <span className="section-label">HOW IT WORKS</span>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "Playfair Display, serif", color: "#0f1a35" }}>
              Streamlined 4-Step Process
            </h2>
            <p className="mt-3 text-sm sm:text-base max-w-lg mx-auto" style={{ color: "#6b7280" }}>
              From consultation to completion — a clear, transparent, fully digital journey.
            </p>
          </div>

          {/* ── DESKTOP: alternating left/right with center line ── */}
          <div className="hidden sm:block relative">
            {/* Centre vertical track — visible grey */}
            <div
              className="absolute"
              style={{
                left: "50%",
                top: 0,
                bottom: 0,
                width: "4px",
                transform: "translateX(-50%)",
                backgroundColor: "#dde3ee",
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              {/* Gold fill grows on scroll — bright gold with strong glow */}
              <div
                style={{
                  position: "absolute",
                  top: 0, left: 0,
                  width: "100%",
                  height: `${lineH}%`,
                  background: "linear-gradient(to bottom, #c9a84c 0%, #f5e090 50%, #c9a84c 100%)",
                  transition: "height 0.35s ease-out",
                  borderRadius: "4px",
                  boxShadow: "0 0 12px 3px rgba(201,168,76,0.7)",
                }}
              />
            </div>

            <div className="space-y-10">
              {steps.map((step, i) => {
                const Icon = step.icon;
                const isRight = step.side === "right";
                return (
                  <div key={step.num} className="relative flex items-center">

                    {/* ── LEFT slot ── */}
                    <div className="flex-1 pr-12">
                      {!isRight && (
                        <div
                          className="reveal-left rounded-2xl p-5 sm:p-6 card-lift"
                          style={{ background: step.lightBg, border: `1.5px solid ${step.border}`, transitionDelay: `${i * 0.1}s` }}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                              style={{ backgroundColor: step.color, boxShadow: `0 4px 14px ${step.color}44` }}>
                              <Icon size={20} color="white" />
                            </div>
                            <h3 className="font-bold text-base sm:text-lg" style={{ fontFamily: "Playfair Display, serif", color: "#0f1a35" }}>
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-sm leading-relaxed pl-13" style={{ color: "#4b5563", paddingLeft: "52px" }}>{step.desc}</p>
                        </div>
                      )}
                    </div>

                    {/* ── Centre dot — animated pulse when visible ── */}
                    <div
                      data-step={i}
                      className={`absolute z-10 flex items-center justify-center font-black text-sm${visibleSteps[i] ? " step-dot-active" : ""}`}
                      style={{
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "56px",
                        height: "56px",
                        borderRadius: "50%",
                        border: `3px solid ${step.color}`,
                        color: step.color,
                        backgroundColor: visibleSteps[i] ? step.lightBg : "white",
                        boxShadow: visibleSteps[i]
                          ? `0 0 0 5px white, 0 0 0 7px ${step.color}30`
                          : "0 2px 8px rgba(0,0,0,0.08)",
                        transition: "background-color 0.4s ease, box-shadow 0.4s ease",
                        fontSize: "0.85rem",
                      }}
                    >
                      {step.num}
                    </div>

                    {/* ── RIGHT slot ── */}
                    <div className="flex-1 pl-12">
                      {isRight && (
                        <div
                          className="reveal-right rounded-2xl p-5 sm:p-6 card-lift"
                          style={{ background: step.lightBg, border: `1.5px solid ${step.border}`, transitionDelay: `${i * 0.1}s` }}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                              style={{ backgroundColor: step.color, boxShadow: `0 4px 14px ${step.color}44` }}>
                              <Icon size={20} color="white" />
                            </div>
                            <h3 className="font-bold text-base sm:text-lg" style={{ fontFamily: "Playfair Display, serif", color: "#0f1a35" }}>
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-sm leading-relaxed" style={{ color: "#4b5563", paddingLeft: "52px" }}>{step.desc}</p>
                        </div>
                      )}
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

          {/* ── MOBILE: left dot + card, alternating indent for visual variety ── */}
          <div className="sm:hidden relative">
            {/* Mobile vertical line — visible */}
            <div
              className="absolute"
              style={{ left: "23px", top: "28px", width: "3px", bottom: "28px", backgroundColor: "#dde3ee", borderRadius: "2px", overflow: "hidden" }}
            >
              <div style={{
                position: "absolute", top: 0, left: 0, width: "100%",
                height: `${lineH}%`,
                background: "linear-gradient(to bottom, #c9a84c, #f5e090, #c9a84c)",
                transition: "height 0.3s ease-out",
                boxShadow: "0 0 8px 2px rgba(201,168,76,0.6)",
              }} />
            </div>

            <div className="space-y-5">
              {steps.map((step, i) => {
                const Icon = step.icon;
                const isRight = step.side === "right"; // right = normal indent, left = more indent
                return (
                  <div key={step.num} className="flex items-start gap-3">
                    {/* Dot */}
                    <div
                      data-step={i}
                      className={`relative z-10 flex-shrink-0 flex items-center justify-center font-black text-xs${visibleSteps[i] ? " step-dot-active" : ""}`}
                      style={{
                        width: "48px", height: "48px", borderRadius: "50%",
                        border: `2.5px solid ${step.color}`,
                        color: step.color,
                        backgroundColor: visibleSteps[i] ? step.lightBg : "white",
                        transition: "background-color 0.4s ease",
                      }}
                    >
                      {step.num}
                    </div>
                    {/* Card */}
                    <div
                      className="flex-1 rounded-2xl p-4 card-lift"
                      style={{ background: step.lightBg, border: `1.5px solid ${step.border}`, marginLeft: isRight ? "0" : "4px" }}
                    >
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: step.color }}>
                          <Icon size={16} color="white" />
                        </div>
                        <h3 className="font-bold text-sm" style={{ fontFamily: "Playfair Display, serif", color: "#0f1a35" }}>
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-xs leading-relaxed" style={{ color: "#4b5563", paddingLeft: "42px" }}>{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ── WHY LEGALSRI ────────────────────────────────────────── */}
      <section id="why-us" className="py-16 sm:py-24" style={{ backgroundColor: "#0f1a35" }} ref={whyRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="reveal-left">
            <span className="section-label">WHY LEGALSRI</span>
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-white mb-5" style={{ fontFamily: "Playfair Display, serif" }}>
              The Legalsri<br />Advantage
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mb-8" style={{ color: "#94a3b8" }}>
              Personalized tax and compliance consultancy for individuals and businesses, ensuring accurate filings and complete legal compliance.
            </p>
            <ul className="space-y-6 mb-10">
              {advantages.map((adv) => {
                const Icon = adv.icon;
                return (
                  <li key={adv.title} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.2)" }}>
                      <Icon size={18} style={{ color: "#c9a84c" }} />
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-0.5">{adv.title}</p>
                      <p className="text-sm" style={{ color: "#94a3b8" }}>{adv.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <button
              onClick={() => document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm hover:opacity-90 active:scale-95 transition-all"
              style={{ backgroundColor: "#c9a84c", color: "#0f1a35" }}
            >
              Get Started Now
            </button>
          </div>

          <div className="relative reveal-right">
            {/*
              ADD YOUR IMAGE: Replace the placeholder below with:
              <img src="/images/your-team-photo.jpg" alt="Legalsri team"
                className="w-full aspect-video object-cover rounded-2xl"
                style={{ border: "2px solid rgba(255,255,255,0.07)" }} />
            */}
            <div className="group relative rounded-2xl overflow-hidden w-full aspect-video transition-all duration-500 hover:shadow-[0_32px_64px_rgba(201,168,76,0.15)] hover:-translate-y-2"
              style={{ border: "2px solid rgba(255,255,255,0.07)" }}>
              <Image
                src={getAssetPath("/images/manoj.png")}
                alt="Legalsri Founder"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Subtle overlay glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#c9a84c]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            {/* Small floating review card removed per user request */}
          </div>

        </div>
      </section>
    </>
  );
}
