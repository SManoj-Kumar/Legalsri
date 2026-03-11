import Link from "next/link";

export const metadata = {
  title: "Cookie Policy – Legalsri",
  description: "Learn how Legalsri uses cookies and similar technologies on our website.",
};

const sections = [
  {
    title: "What Are Cookies?",
    content: "Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They help websites remember information about your visit, making your next visit easier and the site more useful to you.",
  },
  {
    title: "How We Use Cookies",
    content: "Legalsri uses cookies to improve your browsing experience, analyse website traffic, remember your preferences, and deliver relevant content. We do not use cookies to collect personally identifiable information without your explicit consent.",
  },
  {
    title: "Types of Cookies We Use",
    items: [
      { name: "Essential Cookies", desc: "These cookies are necessary for the website to function properly. They enable core features like security, navigation, and access to secure areas. The website cannot function properly without these cookies." },
      { name: "Analytics Cookies",  desc: "We use analytics cookies (such as Google Analytics) to understand how visitors interact with our website — which pages are most visited, how long users stay, and how they navigate. This data helps us improve the site." },
      { name: "Preference Cookies", desc: "These cookies remember your settings and preferences (such as your preferred language or region) so we can personalise your experience on return visits." },
      { name: "Marketing Cookies",  desc: "We may use marketing cookies to show you relevant advertisements on other websites. These cookies track your visit across websites and build a profile of your interests." },
    ],
  },
  {
    title: "Third-Party Cookies",
    content: "Some pages on our website may include content from third-party services such as Google Maps, YouTube, or social media platforms. These services may set their own cookies over which we have no control. We recommend reviewing the privacy policies of these third-party providers.",
  },
  {
    title: "Managing Your Cookies",
    content: "You can control and manage cookies in your browser settings. Most browsers allow you to refuse cookies, delete existing cookies, or be notified when a new cookie is set. Please note that disabling certain cookies may affect the functionality of our website.",
    items: [
      { name: "Google Chrome",  desc: "Settings → Privacy and Security → Cookies and other site data" },
      { name: "Mozilla Firefox", desc: "Options → Privacy & Security → Cookies and Site Data" },
      { name: "Safari",          desc: "Preferences → Privacy → Manage Website Data" },
      { name: "Microsoft Edge",  desc: "Settings → Cookies and site permissions → Cookies and site data" },
    ],
  },
  {
    title: "Cookie Consent",
    content: "By continuing to use our website, you consent to the use of cookies as described in this policy. You may withdraw your consent at any time by adjusting your browser settings or contacting us directly.",
  },
  {
    title: "Changes to This Policy",
    content: "We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business practices. We encourage you to review this page periodically. The date of the latest update is shown at the bottom of this page.",
  },
];

export default function CookiesPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="py-10 sm:py-14 px-4 sm:px-6" style={{ background: "linear-gradient(135deg, #0f1a35 0%, #1a2a4a 100%)" }}>
        <div className="max-w-4xl mx-auto anim-up">
          <p className="text-sm mb-3" style={{ color: "#94a3b8" }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link> &gt; <span className="text-white">Cookie Policy</span>
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3" style={{ fontFamily: "Playfair Display, serif" }}>
            Cookie Policy
          </h1>
          <p className="text-sm" style={{ color: "#94a3b8" }}>Last updated: March 15, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <p className="text-sm sm:text-base leading-relaxed mb-10" style={{ color: "#6b7280" }}>
          This Cookie Policy explains how Legalsri (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies and similar tracking technologies when you visit our website at legalsri.com. Please read this policy carefully to understand our practices.
        </p>

        <div className="space-y-10">
          {sections.map((sec, i) => (
            <section key={sec.title}>
              {/* Section number + title */}
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                  style={{ backgroundColor: "#0f1a35", color: "white" }}
                >
                  {i + 1}
                </span>
                <h2 className="text-lg sm:text-xl font-bold" style={{ fontFamily: "Playfair Display, serif", color: "#0f1a35" }}>
                  {sec.title}
                </h2>
              </div>

              {sec.content && (
                <p className="text-sm sm:text-base leading-relaxed mb-4 pl-11" style={{ color: "#374151" }}>
                  {sec.content}
                </p>
              )}

              {sec.items && (
                <div className="pl-11 space-y-3">
                  {sec.items.map((item) => (
                    <div
                      key={item.name}
                      className="rounded-xl p-4"
                      style={{ backgroundColor: "#f8f9fb", border: "1px solid #e5e7eb" }}
                    >
                      <p className="font-semibold text-sm mb-1" style={{ color: "#0f1a35" }}>{item.name}</p>
                      <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Back links */}
        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center gap-3" style={{ borderColor: "#e5e7eb" }}>
          <Link href="/" className="text-sm font-semibold hover:opacity-70 transition-opacity" style={{ color: "#0f1a35" }}>← Back to Home</Link>
          <span className="hidden sm:inline text-gray-300">|</span>
          <Link href="/privacy" className="text-sm font-semibold hover:opacity-70 transition-opacity" style={{ color: "#c9a84c" }}>Privacy Policy</Link>
          <span className="hidden sm:inline text-gray-300">|</span>
          <Link href="/terms" className="text-sm font-semibold hover:opacity-70 transition-opacity" style={{ color: "#c9a84c" }}>Terms & Conditions</Link>
        </div>
      </div>
    </div>
  );
}
