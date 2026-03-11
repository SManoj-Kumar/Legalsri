import Link from "next/link";

export const metadata = {
  title: "Privacy Policy – Legalsri",
  description: "Learn how Legalsri collects, uses, and protects your personal information.",
};

const sections = [
  {
    title: "Information We Collect",
    content: "We collect information you provide directly to us when you use our services, fill out forms, or contact us.",
    items: [
      { name: "Personal Information",  desc: "Name, email address, phone number, PAN number, Aadhaar number, date of birth, and other identification details required to deliver our legal services." },
      { name: "Business Information",  desc: "Company name, registered address, business type, directors/partners information, and other corporate details necessary for registration services." },
      { name: "Financial Information",  desc: "Bank account details, payment information, and transaction history related to our services. Payment data is processed through secure, PCI-compliant payment gateways." },
      { name: "Usage Data",             desc: "Information about how you access and use our website, including IP address, browser type, pages visited, time spent, and referring URLs." },
    ],
  },
  {
    title: "How We Use Your Information",
    items: [
      { name: "Service Delivery",       desc: "To process your applications, registrations, and compliance filings with government authorities on your behalf." },
      { name: "Communication",          desc: "To send you service updates, compliance reminders, appointment confirmations, and respond to your inquiries." },
      { name: "Account Management",     desc: "To create and manage your client account, maintain records, and provide customer support." },
      { name: "Legal Compliance",       desc: "To comply with applicable laws, regulations, and legal processes, including requests from government authorities." },
      { name: "Service Improvement",    desc: "To analyse usage patterns, improve our website, and develop new features and services that better serve our clients." },
    ],
  },
  {
    title: "Information Sharing",
    content: "We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:",
    items: [
      { name: "Government Authorities", desc: "Sharing required information with MCA, GST Council, Trademark Registry, Income Tax Department, and other government bodies to deliver our services." },
      { name: "Service Providers",      desc: "Trusted third-party vendors who assist in delivering our services — payment processors, cloud storage, and communication platforms — under strict confidentiality agreements." },
      { name: "Legal Requirements",     desc: "When required by law, court order, or government request, or to protect the rights, property, and safety of Legalsri and its clients." },
    ],
  },
  {
    title: "Data Security",
    content: "We implement industry-standard security measures to protect your information from unauthorised access, disclosure, alteration, or destruction. This includes SSL encryption for data transmission, secure servers, access controls, and regular security audits. However, no method of transmission over the internet is 100% secure.",
  },
  {
    title: "Data Retention",
    content: "We retain your personal information for as long as necessary to deliver our services and comply with legal obligations. Client records are typically retained for a minimum of 8 years as required by Indian corporate law. You may request deletion of your account and associated data, subject to our legal retention obligations.",
  },
  {
    title: "Your Rights",
    content: "You have the following rights regarding your personal information:",
    items: [
      { name: "Right to Access",     desc: "Request a copy of the personal information we hold about you." },
      { name: "Right to Correction", desc: "Request correction of inaccurate or incomplete personal data." },
      { name: "Right to Deletion",   desc: "Request deletion of your data, subject to legal retention requirements." },
      { name: "Right to Portability", desc: "Request your data in a structured, machine-readable format." },
      { name: "Right to Object",     desc: "Object to the processing of your data for marketing purposes at any time." },
    ],
  },
  {
    title: "Cookies",
    content: "We use cookies and similar tracking technologies to enhance your experience on our website. For detailed information about our use of cookies, please refer to our Cookie Policy.",
  },
  {
    title: "Children's Privacy",
    content: "Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from minors. If you believe a minor has provided us with personal information, please contact us immediately and we will delete it.",
  },
  {
    title: "Changes to This Policy",
    content: "We may update this Privacy Policy periodically to reflect changes in our practices or applicable laws. We will notify you of material changes by posting the updated policy on our website with a revised date. We encourage you to review this policy regularly.",
  }
];

export default function PrivacyPage() {
  return (
    <div className="pt-16 pb-20">
      {/* Hero */}
      <div className="py-10 sm:py-14 px-4 sm:px-6" style={{ background: "linear-gradient(135deg, #0f1a35 0%, #1a2a4a 100%)" }}>
        <div className="max-w-4xl mx-auto anim-up">
          <p className="text-sm mb-3" style={{ color: "#94a3b8" }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link> &gt; <span className="text-white">Privacy Policy</span>
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3" style={{ fontFamily: "Playfair Display, serif" }}>
            Privacy Policy
          </h1>
          <p className="text-sm" style={{ color: "#94a3b8" }}>Last updated: March 15, 2026</p>
        </div>
      </div>

      {/* Trust badges */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">

        <p className="text-sm sm:text-base leading-relaxed mb-10" style={{ color: "#6b7280" }}>
          At Legalsri, we are committed to protecting your privacy and handling your personal information with the highest standards of care. This Privacy Policy explains how we collect, use, and protect your information when you use our services.
        </p>

        <div className="space-y-10">
          {sections.map((sec, i) => (
            <section key={sec.title}>
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
          <Link href="/terms" className="text-sm font-semibold hover:opacity-70 transition-opacity" style={{ color: "#c9a84c" }}>Terms &amp; Conditions</Link>
          <span className="hidden sm:inline text-gray-300">|</span>
          <Link href="/cookies" className="text-sm font-semibold hover:opacity-70 transition-opacity" style={{ color: "#c9a84c" }}>Cookie Policy</Link>
        </div>
      </div>
    </div>
  );
}
