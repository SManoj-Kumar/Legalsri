import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Legalsri – Expert Legal Services for Businesses",
  description: "Company Registration: Private Limited Company and LLP incorporation with complete MCA filing and documentation support. Reliable assistance to help you legally establish your business as per Indian corporate regulations. GST & Income Tax Filing: Accurate and timely filing of GST returns and Income Tax Returns (ITR) in compliance with Indian tax laws. Ensuring smooth, error-free submissions for individuals and businesses. Compliance & Advisory: Support for GST registration, amendments, statutory filings, and ongoing regulatory compliance. Helping your business stay compliant and penalty-free. Tax Notice & Representation: Professional assistance in handling Income Tax and GST notices, audits, and communications with tax authorities. Record Keeping: Organized maintenance of financial records and tax documentation to ensure audit readiness and smooth future filings. Digital Signature Certificate (DSC): Class II and Class III DSC services for MCA filing, GST compliance, company registration, and e-tendering requirements.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
