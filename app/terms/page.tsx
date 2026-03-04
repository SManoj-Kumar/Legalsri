import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions – Legalsri",
  description: "Read the terms and conditions governing the use of Legalsri's legal services platform.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    content: "By accessing or using the Legalsri website and services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services. These terms apply to all visitors, users, and clients of Legalsri.",
  },
  {
    title: "Services Provided",
    content: "Legalsri provides online legal services including but not limited to company registration, GST registration and filing, trademark registration, ROC compliance, startup advisory, and legal document drafting. Our services are subject to availability and applicable laws of India.",
    items: [
      { name: "Company Registration",  desc: "Private Limited, LLP, OPC, and other business entity registrations." },
      { name: "GST Services",           desc: "GST registration, monthly return filing, and compliance assistance." },
      { name: "Trademark & IP",         desc: "Trademark search, registration filing, and intellectual property protection." },
      { name: "ROC Compliance",         desc: "Annual return filing, director KYC, and statutory compliance services." },
    ],
  },
  {
    title: "User Responsibilities",
    content: "You agree to provide accurate, complete, and up-to-date information when using our services. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must not use our services for any illegal, fraudulent, or unauthorised purpose.",
  },
  {
    title: "Fees and Payment",
    content: "All fees for our services are stated on our website and are subject to change. Fees are exclusive of applicable government charges, stamp duties, and other statutory fees unless explicitly stated otherwise. Payment is required before commencement of any service. All transactions are processed securely.",
  },
  {
    title: "Refund Policy",
    content: "Refunds are processed on a case-by-case basis. Our professional service fees are generally non-refundable once work has commenced. Government fees paid on your behalf are non-refundable. In case of service failure due to our error, we will offer a full refund or re-service at no additional cost.",
  },
  {
    title: "Confidentiality",
    content: "Legalsri treats all client information as strictly confidential. We do not share your personal or business information with third parties except as required to deliver our services or as required by law. Our team is bound by professional confidentiality obligations.",
  },
  {
    title: "Intellectual Property",
    content: "All content on the Legalsri website — including text, graphics, logos, icons, images, and software — is the property of Legalsri and is protected by applicable intellectual property laws. You may not copy, reproduce, distribute, or create derivative works from our content without our prior written consent.",
  },
  {
    title: "Limitation of Liability",
    content: "Legalsri's liability is limited to the fees paid for the specific service in question. We are not liable for any indirect, incidental, special, or consequential damages arising from the use of our services. We do not guarantee specific outcomes from government authorities or regulatory bodies.",
  },
  {
    title: "Governing Law",
    content: "These Terms and Conditions are governed by the laws of India. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Delhi, India.",
  },
  {
    title: "Changes to Terms",
    content: "We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any changes constitutes your acceptance of the updated terms.",
  },
  {
    title: "Contact Us",
    content: "For questions, concerns, or disputes related to these Terms and Conditions, please contact us at support@legalsri.com or call +91 98765 43210. We aim to respond within 24 business hours.",
  },
];

export default function TermsPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="py-10 sm:py-14 px-4 sm:px-6" style={{ background: "linear-gradient(135deg, #0f1a35 0%, #1a2a4a 100%)" }}>
        <div className="max-w-4xl mx-auto anim-up">
          <p className="text-sm mb-3" style={{ color: "#94a3b8" }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link> &gt; <span className="text-white">Terms &amp; Conditions</span>
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3" style={{ fontFamily: "Playfair Display, serif" }}>
            Terms &amp; Conditions
          </h1>
          <p className="text-sm" style={{ color: "#94a3b8" }}>Last updated: December 15, 2024</p>
        </div>
      </div>

      {/* Quick nav box */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        <div className="rounded-2xl p-5 sm:p-6 mb-10 anim-up" style={{ backgroundColor: "#f8f9fb", border: "1px solid #e5e7eb" }}>
          <p className="text-sm font-semibold mb-3" style={{ color: "#0f1a35" }}>Quick Navigation</p>
          <div className="flex flex-wrap gap-2">
            {sections.map((s, i) => (
              <span
                key={s.title}
                className="px-3 py-1.5 rounded-full text-xs font-medium"
                style={{ backgroundColor: "white", color: "#374151", border: "1px solid #e5e7eb" }}
              >
                {i + 1}. {s.title}
              </span>
            ))}
          </div>
        </div>

        <p className="text-sm sm:text-base leading-relaxed mb-10" style={{ color: "#6b7280" }}>
          Please read these Terms and Conditions carefully before using Legalsri&apos;s website and services. These terms constitute a legally binding agreement between you and Legalsri Legal Services Pvt. Ltd.
        </p>

        <div className="space-y-10">
          {sections.map((sec, i) => (
            <section key={sec.title}>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                  style={{ backgroundColor: "#c9a84c", color: "#0f1a35" }}
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
                    <div key={item.name} className="rounded-xl p-4" style={{ backgroundColor: "#f8f9fb", border: "1px solid #e5e7eb" }}>
                      <p className="font-semibold text-sm mb-1" style={{ color: "#0f1a35" }}>{item.name}</p>
                      <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Links */}
        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center gap-3" style={{ borderColor: "#e5e7eb" }}>
          <Link href="/" className="text-sm font-semibold hover:opacity-70 transition-opacity" style={{ color: "#0f1a35" }}>← Back to Home</Link>
          <span className="hidden sm:inline text-gray-300">|</span>
          <Link href="/privacy" className="text-sm font-semibold hover:opacity-70 transition-opacity" style={{ color: "#c9a84c" }}>Privacy Policy</Link>
          <span className="hidden sm:inline text-gray-300">|</span>
          <Link href="/cookies" className="text-sm font-semibold hover:opacity-70 transition-opacity" style={{ color: "#c9a84c" }}>Cookie Policy</Link>
        </div>
      </div>
    </div>
  );
}
