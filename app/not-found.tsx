import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-16 min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: "#f8f9fb" }}>
      <div className="text-center max-w-lg mx-auto anim-up">
        {/* Big 404 */}
        <p
          className="font-black leading-none mb-4"
          style={{ fontSize: "clamp(80px, 20vw, 160px)", color: "#0f1a35", opacity: 0.08 }}
        >
          404
        </p>

        {/* Icon */}
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 -mt-16"
          style={{ backgroundColor: "#0f1a35" }}
        >
          <span
            className="text-3xl font-bold"
            style={{ color: "#c9a84c", fontFamily: "DM Sans, sans-serif" }}>
            L
          </span>
        </div>

        <h1
          className="text-3xl sm:text-4xl font-bold mb-4"
          style={{ fontFamily: "Playfair Display, serif", color: "#0f1a35" }}
        >
          Page Not Found
        </h1>
        <p className="text-sm sm:text-base leading-relaxed mb-8" style={{ color: "#6b7280" }}>
          The page you are looking for doesn&apos;t exist or has been moved.
          Let us help you find what you need.
        </p>

        {/* Quick links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm w-full sm:w-auto hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#0f1a35", color: "white" }}
          >
            ← Back to Home
          </Link>
          <Link
            href="/#consultation"
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm w-full sm:w-auto border-2 hover:bg-gray-50 transition-colors"
            style={{ borderColor: "#0f1a35", color: "#0f1a35" }}
          >
            Get Consultation
          </Link>
        </div>

        {/* Helpful links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Services",    href: "/services" },
            { label: "How It Works", href: "/how-it-works" },
            { label: "Blog",        href: "/blog" },
            { label: "Contact",     href: "/#consultation" },
          ].map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="rounded-xl py-3 text-sm font-medium text-center hover:bg-white transition-colors"
              style={{ backgroundColor: "white", color: "#374151", border: "1px solid #e5e7eb" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
