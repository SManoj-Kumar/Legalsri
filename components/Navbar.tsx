"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronDown, X, Menu } from "lucide-react";

// Nav links — unified array representing order
const navItems = [
  { label: "Home",         anchor: "hero",         hasDropdown: false, isPage: false },
  { label: "Services",     anchor: "services",     hasDropdown: false, isPage: false },
  { label: "Process",      anchor: "process",      hasDropdown: false, isPage: false },
  { label: "Why Us",       anchor: "why-us",       hasDropdown: false, isPage: false },
  { label: "Blog",         href: "/blog",          hasDropdown: false, isPage: true },
  { label: "Testimonials", anchor: "testimonials", hasDropdown: false, isPage: false },
  { label: "FAQ",          anchor: "faq",          hasDropdown: false, isPage: false },
];

export default function Navbar() {
  const [openDrop, setOpenDrop]     = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const pathname = usePathname();
  const router   = useRouter();
  const isHome   = pathname === "/";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Track active section only on homepage
  useEffect(() => {
    if (!isHome) return;
    const anchors = navItems.filter((l) => !l.isPage).map((l) => l.anchor as string);
    const fn = () => {
      for (const id of [...anchors].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, [isHome]);

  const scrollTo = useCallback(
    (anchor: string) => {
      setMobileOpen(false);
      setOpenDrop(null);
      if (anchor === "hero") {
        // Logo / Home click — instant top, no scroll animation
        if (isHome) {
          window.scrollTo({ top: 0 });
        } else {
          router.push("/");
        }
        return;
      }
      if (!isHome) {
        // Navigate to homepage first, then scroll after load
        router.push(`/#${anchor}`);
        return;
      }
      document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
    },
    [isHome, router]
  );

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white"
        style={{
          borderBottom: scrolled ? "1px solid #efefef" : "1px solid transparent",
          boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.07)" : "none",
          transition: "box-shadow 0.3s, border-color 0.3s",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center h-16 gap-6">

          {/* ── Logo — click scrolls instantly to top (no smooth) ── */}
          <button
            className="flex items-center gap-2.5 shrink-0"
            onClick={() => scrollTo("hero")}
          >
            <div className="logo-mark"><span>L</span></div>
            <span style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#0f1a35", letterSpacing: "-0.01em" }}>
              Legalsri<span style={{ color: "#c9a84c" }}>.</span>
            </span>
          </button>

          {/* ── Desktop nav — centered with even spacing ── */}
          <nav className="hidden lg:flex items-center justify-center gap-1 flex-1">
            {navItems.map((item) => {
              if (item.isPage) {
                return (
                  <Link
                    key={item.label}
                    href={item.href as string}
                    className="relative px-3 py-2 text-sm rounded-lg transition-all"
                    style={{
                      color: pathname === item.href ? "#0f1a35" : "#4b5563",
                      fontWeight: pathname === item.href ? 600 : 500,
                    }}
                  >
                    {item.label}
                    {pathname === item.href && (
                      <span
                        className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                        style={{ backgroundColor: "#c9a84c" }}
                      />
                    )}
                  </Link>
                );
              }

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setOpenDrop(item.label)}
                  onMouseLeave={() => setOpenDrop(null)}
                >
                  <button
                    onClick={() => scrollTo(item.anchor as string)}
                    className="relative flex items-center gap-1 px-3 py-2 text-sm rounded-lg transition-all"
                    style={{
                      color: isHome && activeSection === item.anchor ? "#0f1a35" : "#4b5563",
                      fontWeight: isHome && activeSection === item.anchor ? 600 : 500,
                    }}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown
                        size={12}
                        style={{
                          opacity: 0.5,
                          transition: "transform 0.2s",
                          transform: openDrop === item.label ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                      />
                    )}
                    {/* Active underline */}
                    {isHome && activeSection === item.anchor && (
                      <span
                        className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                        style={{ backgroundColor: "#c9a84c" }}
                      />
                    )}
                  </button>
                </div>
              );
            })}
          </nav>

          {/* ── No "Get Consultation" button on the right — removed as requested ── */}

          {/* ── Mobile hamburger ─────────────────────────────── */}
          <div className="lg:hidden ml-auto">
            <button
              className="p-2 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen
                ? <X size={22} style={{ color: "#0f1a35" }} />
                : <Menu size={22} style={{ color: "#0f1a35" }} />
              }
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer ─────────────────────────────────────── */}
      {mobileOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-black/40 lg:hidden" onClick={() => setMobileOpen(false)} />
          <div
            className="fixed top-0 right-0 h-full w-72 bg-white z-50 lg:hidden pt-20 pb-8 px-6 overflow-y-auto drawer-anim"
            style={{ boxShadow: "-4px 0 32px rgba(0,0,0,0.14)" }}
          >
            {/* Close button inside drawer */}
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              style={{ backgroundColor: "#f3f4f6" }}
            >
              <X size={18} style={{ color: "#0f1a35" }} />
            </button>
            {/* Nav Items */}
            {navItems.map((item) => {
              if (item.isPage) {
                return (
                  <Link
                    key={item.label}
                    href={item.href as string}
                    onClick={() => setMobileOpen(false)}
                    className="block w-full text-left py-3.5 text-base font-semibold border-b"
                    style={{ color: "#0f1a35", borderColor: "#f3f4f6" }}
                  >
                    {item.label}
                  </Link>
                );
              }
              return (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.anchor as string)}
                  className="block w-full text-left py-3.5 text-base font-semibold border-b"
                  style={{ color: "#0f1a35", borderColor: "#f3f4f6" }}
                >
                  {item.label}
                </button>
              );
            })}
            {/* CTA */}
            <button
              onClick={() => scrollTo("consultation")}
              className="block w-full text-center py-3.5 rounded-xl font-bold text-white text-sm mt-6"
              style={{ backgroundColor: "#0f1a35" }}
            >
              Get Consultation
            </button>
          </div>
        </>
      )}
    </>
  );
}
