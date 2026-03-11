/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search, ArrowRight, Clock, Home, Calendar, X, ChevronRight } from "lucide-react";

const fullContent: Record<number, string[]> = {
  1: [
  "Filing your Income Tax Return (ITR) is not just a legal requirement but also an important financial responsibility that protects you from penalties and strengthens your financial credibility. A properly filed ITR is essential when applying for loans, visas, government tenders, or claiming tax refunds.",
  "Every year, many taxpayers miss deadlines or make costly mistakes due to selecting the wrong ITR form, incomplete disclosures, or lack of awareness about the online filing process.",
  "You must file an ITR if your total income exceeds ₹2.5 lakh under the old regime or ₹3 lakh under the new regime. Self-employed professionals, freelancers, business owners, and NRIs earning income in India are also required to file. Companies and LLPs must file returns regardless of profit or loss, and individuals claiming TDS refunds should also submit their ITR.",
  "Before starting the ITR filing process, keep essential documents ready such as Form 16, Form 26AS, AIS (Annual Information Statement), bank statements, investment proofs under Sections 80C and 80D, home loan interest certificate, rent receipts for HRA, and business financial statements if applicable.",
  "The first step in online ITR filing is choosing the correct form. ITR-1 (Sahaj) is for salaried individuals with simple income, ITR-2 is for capital gains or multiple income sources, ITR-3 is for business or professional income, ITR-4 (Sugam) is for presumptive taxation, ITR-5 is for LLPs, and ITR-6 is for companies.",
  "Next, log in to the official income tax portal at incometax.gov.in using your PAN as the user ID. Select ‘File Income Tax Return’, choose the appropriate assessment year, select online mode, and enter your income details while claiming eligible deductions under Sections 80C, 80D, 80E, HRA, and Section 24.",
  "After entering all details, verify the auto-calculated tax liability, pay any outstanding balance if required, and submit the return. Complete the verification within 30 days using Aadhaar OTP, net banking, bank EVC, or Digital Signature Certificate (DSC) to make your return valid.",
  "Key deadlines for ITR filing generally include July 31 for individuals (non-audit cases), October 31 for audit cases, and December 31 for belated or revised returns. Late filing may attract a penalty of up to ₹5,000 under Section 234F along with applicable interest.",
  "Common mistakes to avoid during ITR filing include selecting the wrong form, not reconciling Form 26AS and AIS, missing additional income such as freelance or interest income, and failing to verify the return after submission. Professional assistance can help ensure accurate filing and maximum deduction optimization."
  ],
  2: [
  "The introduction of Goods and Services Tax (GST) transformed India’s indirect tax system by replacing multiple central and state taxes with a single unified tax structure. For businesses operating in India, GST registration may be mandatory depending on annual turnover, nature of supply, and business category. Failure to register when required can result in heavy penalties, interest, and legal consequences.",
  "GST (Goods and Services Tax) is a destination-based indirect tax levied on the supply of goods and services. It replaced earlier taxes such as VAT, Service Tax, Excise Duty, Octroi, and Entry Tax. GST in India is divided into CGST (Central GST), SGST (State GST), IGST (Integrated GST for inter-state transactions), and UTGST (Union Territory GST).",
  "GST registration becomes mandatory if a business exceeds the prescribed annual turnover threshold of ₹20 lakhs in most states or ₹10 lakhs in special category states. In certain cases, registration is compulsory regardless of turnover, including inter-state suppliers, e-commerce sellers, importers, exporters, non-resident taxable persons, casual taxable persons, and Input Service Distributors (ISD).",
  "There are several benefits of GST registration, including legal recognition as a supplier, the ability to collect GST from customers, eligibility to claim Input Tax Credit (ITC), smoother inter-state business expansion, and improved credibility with clients and vendors.",
  "To apply for GST registration, businesses must keep required documents ready. For proprietorships, this includes PAN card, Aadhaar card, photograph, bank details, and business address proof. For partnerships, LLPs, or companies, additional documents such as Certificate of Incorporation, Partnership Deed, MOA & AOA, director or partner KYC documents, authorization letter, and registered office proof are required.",
  "The GST registration process is fully online through the official GST portal. Applicants must select ‘New Registration,’ enter business details as per PAN, verify mobile number and email via OTP, and obtain a Temporary Reference Number (TRN). After completing Part B of the application with promoter details, principal place of business, bank details, and uploading documents, the application must be verified using Aadhaar authentication or Digital Signature Certificate (DSC) in the case of companies.",
  "Once approved, the business receives a GSTIN (Goods and Services Tax Identification Number), which is a unique 15-digit identification number assigned to every registered taxpayer. GSTIN contains the state code, PAN details, entity code, default character ‘Z,’ and a checksum digit.",
  "After obtaining GST registration, businesses must comply with regular return filing requirements. Key returns include GSTR-1 for outward supplies, GSTR-3B as a monthly summary return, GSTR-9 as the annual return, and GSTR-4 for composition scheme dealers. Late filing attracts penalties of ₹50 per day (₹20 per day for nil return) along with interest at 18% per annum on unpaid tax.",
  "Common mistakes to avoid in GST compliance include incorrect HSN or SAC code selection, wrong turnover declaration, failure to update amendments, missing monthly return deadlines, and claiming incorrect Input Tax Credit. Proper record keeping and timely filing are essential to avoid notices and penalties.",
  "GST registration can also be cancelled if the business is discontinued, turnover falls below the threshold limit, the business is merged or transferred, or there is a change in business constitution. Cancellation must be applied for through the GST portal.",
  "GST registration is not just a legal formality but a crucial step in building a compliant and scalable business in India. Understanding eligibility, documentation, and return filing obligations helps businesses operate smoothly while avoiding penalties. Professional assistance can make GST registration and compliance simple, accurate, and stress-free."
  ],
  3: [
  "Starting a business is exciting, but choosing the right legal structure is one of the most important decisions you will make. A Private Limited Company is one of the most preferred business structures in India because it offers limited liability protection, strong credibility, and better scalability for startups and growing businesses.",
  "A Private Limited Company is registered under the Companies Act, 2013 and has a separate legal identity from its owners. It provides limited liability to shareholders, ensures perpetual succession, restricts share transfers, and allows a minimum of 2 and a maximum of 200 shareholders. It is regulated by the Ministry of Corporate Affairs (MCA).",
  "One of the major benefits of registering a Private Limited Company is limited liability protection, where shareholders are responsible only to the extent of their shareholding. The company can own property, enter into contracts, and take legal action in its own name. It also makes fundraising easier through equity shares, venture capital, angel investors, and private equity while maintaining better credibility with banks, clients, and investors.",
  "To incorporate a Private Limited Company in India, certain minimum requirements must be fulfilled. You need at least 2 directors and 2 shareholders, with at least one director being a resident of India. A unique company name, a registered office address in India, and Digital Signature Certificates (DSC) for directors are mandatory.",
  "For registration, directors and shareholders must provide documents such as PAN card, Aadhaar card or passport, passport-size photographs, and address proof like a bank statement or utility bill. For the registered office, documents such as rent agreement or ownership proof, NOC from the property owner, and a recent electricity bill are required.",
  "The incorporation process begins with obtaining a Digital Signature Certificate (DSC) for all proposed directors. Next, Director Identification Number (DIN) is allotted during the incorporation process through the SPICe+ form. Company name approval is then applied through the MCA portal to ensure uniqueness and compliance with naming guidelines.",
  "After name approval, the SPICe+ Part B form is filed, which is an integrated form covering company incorporation, PAN and TAN allotment, GST registration (if required), EPFO and ESIC registration, and even bank account opening. The Memorandum of Association (MOA) defining company objectives and Articles of Association (AOA) outlining internal management rules must also be drafted and submitted.",
  "Once the documents are verified, the Registrar of Companies (ROC) issues the Certificate of Incorporation along with the Corporate Identification Number (CIN), PAN, and TAN. The entire process generally takes around 3 to 7 working days, depending on approvals.",
  "After incorporation, companies must complete post-incorporation compliances such as opening a current bank account, depositing share capital, filing INC-20A for commencement of business, appointing a statutory auditor within 30 days, issuing share certificates within 60 days, maintaining statutory registers, and filing annual ROC returns like AOC-4 and MGT-7.",
  "The cost of registering a Private Limited Company in India depends on factors such as authorized capital, number of directors, professional fees, and government filing charges. Typically, the total cost ranges between ₹6,000 to ₹20,000 based on specific requirements.",
  "Common mistakes to avoid during company registration include choosing a non-compliant name, drafting an incorrect MOA object clause, using an invalid registered office address, delaying post-incorporation compliances, and failing to maintain proper statutory records.",
  "A Private Limited Company is suitable for entrepreneurs who plan to scale operations, raise external funding, seek limited liability protection, build strong brand credibility, and focus on long-term growth. With proper professional guidance, the incorporation process can be smooth, compliant, and efficient."
  ],
  4: [
  "Choosing the right legal structure is one of the most important decisions when starting a business in India. Two of the most popular options are Limited Liability Partnership (LLP) and Private Limited Company (Pvt Ltd). While both offer limited liability protection, they differ significantly in compliance requirements, taxation, ownership flexibility, and fundraising capabilities.",
  "A Limited Liability Partnership (LLP) is a hybrid business structure that combines the flexibility of a traditional partnership with the limited liability protection of a company. Governed by the LLP Act, 2008, LLPs are commonly preferred by consultants, chartered accountants, legal professionals, and small service-based businesses due to their lower compliance burden and operational flexibility.",
  "A Private Limited Company is governed by the Companies Act, 2013 and operates as a separate legal entity owned by shareholders and managed by directors. It is the preferred structure for startups, businesses planning to raise investment, companies aiming for rapid scalability, and organizations seeking strong corporate credibility in the market.",
  "In terms of legal structure, an LLP is managed directly by its partners and does not have the concept of shareholders. It is governed by an LLP Agreement. In contrast, a Private Limited Company is owned by shareholders and managed by directors, with governance defined through the Memorandum of Association (MOA) and Articles of Association (AOA).",
  "Both LLP and Private Limited Company structures provide limited liability protection, meaning partners or shareholders are liable only to the extent of their capital contribution. This protects personal assets from business liabilities.",
  "Compliance requirements differ significantly between the two. LLPs have a lower compliance burden with annual filings such as Form 8 and Form 11, and audit is required only if turnover exceeds ₹40 lakh or contribution exceeds ₹25 lakh. Private Limited Companies, however, must undergo mandatory annual audit regardless of turnover, conduct board meetings, maintain statutory registers, and file annual ROC returns such as AOC-4 and MGT-7.",
  "Taxation also varies between the two structures. LLPs are taxed at a flat rate of 30% on profits, and there is no dividend distribution tax. Private Limited Companies are subject to corporate tax ranging from 22% to 25% depending on the regime, and dividends are taxable in the hands of shareholders. Tax planning opportunities depend on profit levels and business scale.",
  "Fundraising ability is a major differentiator. LLPs cannot issue equity shares and generally find it difficult to attract venture capital or angel investors. Private Limited Companies can issue shares, raise venture capital funding, offer Employee Stock Option Plans (ESOPs), and are strongly preferred by investors. For businesses planning external funding, Pvt Ltd is usually the better option.",
  "Ownership transfer is comparatively easier in a Private Limited Company, where shares can be transferred with fewer complications. In an LLP, transfer of partnership interest can be more complex and may require agreement amendments.",
  "Foreign Direct Investment (FDI) is permitted in both LLP and Private Limited Company structures under the automatic route in most sectors, subject to regulations. However, Private Limited Companies are generally more attractive to foreign investors due to structured governance and better transparency.",
  "You should choose an LLP if you operate a professional services firm, prefer lower compliance costs, do not plan to raise external funding, and want operational flexibility in a partnership model. On the other hand, a Private Limited Company is more suitable if you aim to scale rapidly, raise investment, offer ESOPs, build strong brand credibility, and focus on long-term expansion.",
  "There is no one-size-fits-all answer when choosing between LLP and Private Limited Company. The right decision depends on your business goals, funding plans, compliance tolerance, and long-term growth strategy. Understanding these differences helps you select the most suitable legal structure and avoid costly restructuring in the future."
  ],
  5: [
  "In today’s digital-first regulatory environment, a Digital Signature Certificate (DSC) is essential for businesses, professionals, and company directors in India. Whether you are filing income tax returns, incorporating a company, submitting GST returns, or participating in government tenders, a DSC ensures secure and legally valid digital authentication.",
  "A Digital Signature Certificate is the electronic equivalent of a physical signature. It is used to authenticate the identity of the signatory, ensure data integrity, secure online transactions, and prevent document tampering. In India, DSCs are issued by licensed Certifying Authorities under the Information Technology Act, 2000.",
  "There are different types of DSC available in India. Class 1 DSC is a basic-level certificate mainly used for email verification and has limited practical application. Class 2 DSC, which was previously used for Income Tax and MCA filings, has now largely merged into Class 3 standards. Class 3 DSC is the most common and highest level of security, mandatory for e-tendering, MCA filings, GST registration for companies, and ICEGATE customs filings. DGFT DSC is specifically issued for importers and exporters for use on the DGFT portal.",
  "A Digital Signature Certificate is widely used for income tax compliance such as e-filing ITR for companies and LLPs, submitting tax audit reports, and verifying returns. It is also required for MCA and ROC filings including company incorporation through SPICe+, annual filings like AOC-4 and MGT-7, and director KYC compliance.",
  "On the GST portal, DSC is mandatory for GST registration for companies and LLPs, amendment applications, and return filings. For government e-tendering, a Class 3 DSC is compulsory to participate in portals such as GeM, CPPP, and various state tender platforms. It is also required for customs and import-export documentation on ICEGATE and DGFT portals.",
  "A DSC is generally valid for one or two years and can be renewed upon expiry. It is issued in a secure USB token device and protected with a password to ensure security. Proper handling and timely renewal are important to avoid compliance delays.",
  "To obtain a Digital Signature Certificate, individuals must provide PAN card, Aadhaar card, passport-size photograph, mobile number linked with Aadhaar, and email ID. Organizations must submit company PAN, Certificate of Incorporation, authorization letter, and director or authorized signatory documents. The process is paperless and includes online video verification.",
  "The process to get a DSC involves selecting the appropriate type based on usage, submitting KYC documents digitally, completing online video verification, receiving the DSC in a secure USB token, and installing it for use on government portals. The usual processing time is one to two working days.",
  "Common mistakes to avoid include applying for the wrong type of DSC, using an expired certificate for filings, sharing the token password insecurely, failing to renew before expiry, and incorrect installation on the system.",
  "A Digital Signature Certificate provides legal validity to online documents, secure authentication, faster compliance processing, protection against fraud, and smooth access to government portals. Without a valid DSC, many statutory filings cannot be completed.",
  "A Digital Signature Certificate is a critical compliance tool for modern businesses in India. From company incorporation to tax filings and government tenders, a DSC ensures secure and legally recognized digital transactions, making it an essential requirement for seamless regulatory compliance."
  ],
  6: [
  "If your business turnover or professional receipts cross specified limits, a Tax Audit under Section 44AB becomes mandatory. This audit ensures that income, expenses, deductions, and tax calculations are accurately reported according to the Income Tax Act, 1961. Non-compliance can result in penalties and scrutiny from the Income Tax Department.",
  "A Tax Audit is an examination of a taxpayer’s books of accounts conducted by a Chartered Accountant (CA). The purpose is to verify the accuracy of declared income, ensure proper maintenance of accounts, confirm compliance with tax provisions, and report prescribed details in audit forms. The audit report must be filed electronically on the Income Tax Portal.",
  "Businesses under non-presumptive taxation must undergo a tax audit if turnover exceeds ₹1 crore, with the threshold increased to ₹10 crore if cash receipts and payments do not exceed 5% of total receipts and payments. Professionals such as doctors, lawyers, architects, consultants, and freelancers must get a tax audit if gross receipts exceed ₹50 lakhs.",
  "Under presumptive taxation schemes (Sections 44AD/44ADA), a tax audit is required if declared income is lower than the presumptive rate and total income exceeds the basic exemption limit. Similarly, if a business declares losses but total income exceeds the exemption limit, an audit may also be mandatory.",
  "The tax audit report is filed using Forms 3CA, 3CB, and 3CD. Form 3CA is used when accounts are already audited under another law, Form 3CB is for cases where no other statutory audit applies, and Form 3CD contains a detailed statement with over 40 clauses including financial and compliance disclosures.",
  "Form 3CD requires reporting of key details such as the method of accounting, depreciation, inventory valuation, TDS compliance, payments to related parties, disallowances under various sections, MSME payments, loans and advances, and GST reconciliation. Accurate reporting is critical to avoid notices from the Income Tax Department.",
  "The due date for filing the tax audit report is generally September 30 of the Assessment Year, although this may be extended by government notification. Late filing can attract penalties and interest.",
  "Failure to comply with tax audit requirements can result in penalties under Section 271B. The penalty is 0.5% of turnover or gross receipts, with a maximum of ₹1,50,000. Penalties may be waived in reasonable circumstances such as natural calamities or auditor resignation.",
  "Common mistakes to avoid include incorrect tracking of turnover, ignoring cash transaction limits, late appointment of auditor, poor bookkeeping practices, and mismatches between GST and income tax data. Such errors can trigger scrutiny notices.",
  "To prepare for a tax audit, maintain updated books of accounts, reconcile GST returns with financial statements, track TDS deductions, organize invoices and supporting documents, and avoid excessive cash transactions. Good record-keeping reduces audit risk and ensures smoother compliance.",
  "Timely tax audits offer multiple benefits including avoidance of penalties, improved financial discipline, better creditworthiness with banks, reduced chances of scrutiny, and clear financial insights for business growth. Proper planning and professional guidance ensure smooth compliance and peace of mind."
  ],
  7: [
  "Receiving an Income Tax Notice can be stressful, even if your return is filed correctly. Notices may arise due to mismatched data, high-value transactions, under-reported income, or routine scrutiny selection. The key is to respond accurately and within the prescribed deadline. Professional tax representation ensures your reply is legally sound, well-documented, and timely.",
  "Income Tax notices are issued for various reasons, including mismatches between ITR and Form 26AS/AIS, large transactions (property, shares, deposits), high deductions claimed, sudden drops in income, non-filing of returns, or random scrutiny selection. Each notice type requires a different approach.",
  "Common types of notices include: Section 139(9) for defective returns requiring correction, Section 142(1) for inquiry and document requests, Section 143(1) for intimation showing demand or refund, Section 143(2) for scrutiny requiring detailed examination, Section 148 for reassessment when income is believed to have escaped assessment, Section 156 for demand of additional tax, and Section 271 for penalties related to concealment or non-compliance.",
  "A scrutiny notice under Section 143(2) indicates the Assessing Officer wants to verify income, deductions, capital gains, business expenses, and high-value transactions. Taxpayers typically have 30 days to respond. Professional drafting and proper documentation are critical for compliance.",
  "To respond to an Income Tax notice, first read the notice carefully to note the section, deadline, and required documents. Gather supporting evidence such as bank statements, investment proofs, sale/purchase deeds, books of accounts, invoices, and agreements.",
  "Draft a proper reply that addresses each point clearly, provides documentary evidence, is legally structured, and avoids contradictions. Submit your response through the Income Tax Portal, typically under the e-Proceedings section.",
  "If the assessment is unfavorable, you can appeal. The first appeal is to the CIT (Appeals) within 30 days, the second appeal is to the ITAT within 60 days, followed by High Court for substantial questions of law, and ultimately the Supreme Court. Timely filing is crucial to protect your rights.",
  "Common mistakes to avoid include ignoring the notice, missing deadlines, submitting incomplete documentation, giving inconsistent explanations, or responding without professional review. Even small errors can lead to significant tax demands.",
  "Preventive measures help reduce future notices, such as reconciling Form 26AS & AIS before filing ITR, reporting all income sources correctly, maintaining clean books of accounts, ensuring TDS compliance, and avoiding excessive cash transactions. Prevention is always better than litigation.",
  "Professional tax representation offers benefits such as accurate drafting of replies, strong legal positioning, reduced penalty exposure, proper handling of documentation, representation before the Assessing Officer, and assistance in appeal filing. Expert support significantly improves outcomes.",
  "An income tax notice is not a penalty but an opportunity to clarify your position. Timely, well-documented, and professionally drafted replies are key to successful resolution. Prompt action ensures compliance and protects you from unnecessary financial and legal complications."
  ],
};

const featuredArticle = {
  id: 1,
  image: "/images/blog/article-1.png",
  category: "GST & Tax",
  catColor: "#ea580c",
  catBg: "#fff7ed",
  date: "Mar 7, 2026",
  readTime: "8 min read",
  author: "Legalsri",
  authorRole: "Tax Consultant",
  initials: "LT",
  authorColor: "#c9a84c",
  title: "How to File Income Tax Return (ITR) Online in India",
  excerpt: "Filing your ITR is not just a statutory requirement — it protects you from penalties and strengthens your financial credibility. Whether applying for a loan, visa, or government tender, a properly filed ITR is essential. This comprehensive guide walks you through the complete online filing process.",
};

const regularArticles = [
  {
    id: 2,
    image: "/images/blog/article-2.png",
    category: "GST & Tax",
    catColor: "#ea580c",
    catBg: "#fff7ed",
    date: "Mar 7, 2026",
    readTime: "7 min",
    author: "Legalsri",
    initials: "LT",
    authorColor: "#c9a84c",
    title: "GST Registration in India: Who Needs It, How to Apply & Compliance Requirements",
    excerpt: "GST registration may be mandatory depending on your turnover. Failure to register can result in heavy penalties. This guide covers eligibility, documents, and the full registration process.",
    tags: ["GST", "GSTIN", "Registration"],
  },
  {
    id: 3,
    image: "/images/blog/article-3.png",
    category: "Company Law",
    catColor: "#0f1a35",
    catBg: "#f1f5f9",
    date: "Mar 7, 2026",
    readTime: "9 min",
    author: "Legalsri",
    initials: "LT",
    authorColor: "#c9a84c",
    title: "How to Register a Private Limited Company in India: Complete Step-by-Step Process",
    excerpt: "Private Limited is the most preferred structure for startups. This guide covers DSC, DIN, SPICe+ filing, MOA/AOA drafting, and post-incorporation compliance.",
    tags: ["Pvt Ltd", "Incorporation", "MCA"],
  },
  {
    id: 4,
    image: "/images/blog/article-4.png",
    category: "Startup Guide",
    catColor: "#0ea5e9",
    catBg: "#f0f9ff",
    date: "Mar 7, 2026",
    readTime: "8 min",
    author: "Legalsri",
    initials: "LT",
    authorColor: "#c9a84c",
    title: "LLP vs Private Limited Company: Which Business Structure is Right for You?",
    excerpt: "Both offer limited liability but differ in compliance, taxation, and fundraising. A clear comparison to help you make the right decision for your business.",
    tags: ["LLP", "Pvt Ltd", "Structure"],
  },
  {
    id: 5,
    image: "/images/blog/article-5.png",
    category: "Company Law",
    catColor: "#0f1a35",
    catBg: "#f1f5f9",
    date: "Mar 7, 2026",
    readTime: "6 min",
    author: "Legalsri",
    initials: "LT",
    authorColor: "#c9a84c",
    title: "Digital Signature Certificate (DSC): Types, Uses, Documents & How to Get One Fast",
    excerpt: "DSC is essential for MCA filings, GST, income tax, and e-tendering. Learn about Class 3 DSC, required documents, and how to get yours in 24–48 hours.",
    tags: ["DSC", "Digital Signature", "E-filing"],
  },
  {
    id: 6,
    image: "/images/blog/article-6.png",
    category: "GST & Tax",
    catColor: "#ea580c",
    catBg: "#fff7ed",
    date: "Mar 7, 2026",
    readTime: "7 min",
    author: "Legalsri",
    initials: "LT",
    authorColor: "#c9a84c",
    title: "Tax Audit Under Section 44AB: Who Needs It, Turnover Limits, Forms & Penalty",
    excerpt: "If your business turnover crosses specified limits, Tax Audit under Section 44AB is mandatory. Covers who needs it, applicable limits, Form 3CD, and compliance tips.",
    tags: ["Tax Audit", "Section 44AB", "Form 3CD"],
  },
  {
    id: 7,
    image: "/images/blog/article-7.png",
    category: "GST & Tax",
    catColor: "#ea580c",
    catBg: "#fff7ed",
    date: "Mar 7, 2026",
    readTime: "9 min",
    author: "LegalSsri",
    initials: "LT",
    authorColor: "#c9a84c",
    title: "Income Tax Notice: Types, How to Respond, Scrutiny Under 143(2) & Tax Representation",
    excerpt: "Receiving a tax notice doesn't mean you did something wrong. This guide covers all notice types, the correct response strategy, and how expert representation helps.",
    tags: ["Tax Notice", "Scrutiny", "Section 143"],
  },
];

const allCategories = ["All Articles", "Company Law", "GST & Tax", "Startup Guide"];
type AnyArticle = typeof regularArticles[0] | typeof featuredArticle;

// ─────────────────────────────────────────────────────────────────────────────
// MODAL — fixed: image compact, NO gap between image and content
// ─────────────────────────────────────────────────────────────────────────────
function ArticleModal({ article, onClose }: { article: AnyArticle | null; onClose: () => void }) {
  const router = useRouter();
  if (!article) return null;
  const content = fullContent[article.id] || [];
  return (
    <div
      className="fixed inset-0 z-[200] flex items-start justify-center overflow-y-auto"
      style={{ backgroundColor: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)", padding: "16px" }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full overflow-hidden relative"
        style={{ maxWidth: "720px", boxShadow: "0 32px 80px rgba(0,0,0,0.4)", marginTop: "8px" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button — absolute top-right */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
          style={{ backgroundColor: "rgba(255,255,255,0.9)", boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}
        >
          <X size={16} style={{ color: "#374151" }} />
        </button>

        {/* Content — tight padding, no gap after image */}
        <div style={{ padding: "16px 20px 24px" }}>
          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold"
              style={{ backgroundColor: article.catBg, color: article.catColor }}>
              {article.category}
            </span>
            <span className="text-xs flex items-center gap-1" style={{ color: "#9ca3af" }}>
              <Calendar size={10} /> {article.date}
            </span>
            <span className="text-xs flex items-center gap-1" style={{ color: "#9ca3af" }}>
              <Clock size={10} /> {article.readTime}
            </span>
          </div>

          {/* Title */}
          <h2 className="font-bold leading-snug mb-3"
            style={{ fontFamily: "Playfair Display, serif", color: "#0f1a35", fontSize: "clamp(1rem, 3vw, 1.3rem)" }}>
            {article.title}
          </h2>

          {/* Author */}
          <div className="flex items-center gap-2.5 mb-5 pb-5 border-b" style={{ borderColor: "#f3f4f6" }}>
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
              style={{ backgroundColor: article.authorColor }}>
              {article.initials}
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: "#0f1a35" }}>{article.author}</p>
              {"authorRole" in article && (
                <p className="text-xs" style={{ color: "#9ca3af" }}>{(article as typeof featuredArticle).authorRole}</p>
              )}
            </div>
          </div>

          {/* Body paragraphs */}
          <div className="space-y-3">
            {content.map((para, i) => (
              <p key={i} className="text-sm leading-relaxed" style={{ color: "#374151" }}>{para}</p>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-6 pt-5 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
            style={{ borderColor: "#f3f4f6" }}>
            <p className="text-sm font-semibold" style={{ color: "#0f1a35" }}>Need help with this?</p>
            <button
              onClick={() => {
                onClose();
                router.push("/#consultation");
              }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm hover:opacity-90 transition-all"
              style={{ backgroundColor: "#c9a84c", color: "#0f1a35" }}
            >
              Book Free Consultation <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN BLOG PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [searchQuery, setSearchQuery]       = useState("");
  const [openArticle, setOpenArticle]       = useState<AnyArticle | null>(null);

  const filteredRegular = regularArticles.filter((a) => {
    const catMatch    = activeCategory === 0 || a.category === allCategories[activeCategory];
    const searchMatch = !searchQuery || a.title.toLowerCase().includes(searchQuery.toLowerCase());
    return catMatch && searchMatch;
  });

  const featuredMatch =
    (activeCategory === 0 || featuredArticle.category === allCategories[activeCategory]) &&
    (!searchQuery || featuredArticle.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="pt-16 min-h-screen" style={{ backgroundColor: "#f8f9fb" }}>

      {/* Hero */}
      <div
        className="py-12 sm:py-16 px-4 sm:px-6 text-center"
        style={{ background: "linear-gradient(135deg, #0b1429 0%, #0f1a35 50%, #162040 100%)" }}
      >
        <div className="max-w-3xl mx-auto anim-up">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-4"
            style={{ backgroundColor: "rgba(201,168,76,0.15)", color: "#c9a84c", border: "1px solid rgba(201,168,76,0.2)" }}>
            📚 INSIGHTS &amp; UPDATES
          </span>
          <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-white mb-3"
            style={{ fontFamily: "Playfair Display, serif" }}>
            Legal Knowledge <span style={{ color: "#c9a84c" }}>Hub</span>
          </h1>
          <p className="text-sm sm:text-base" style={{ color: "#94a3b8" }}>
            Expert guides on tax filing, company registration, GST, and business compliance.
          </p>
        </div>
      </div>

      {/* Sticky filter bar */}
      <div className="bg-white border-b sticky z-30 py-3 sm:py-4" style={{ top: "64px", borderColor: "#e5e7eb" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            {allCategories.map((cat, i) => (
              <button key={cat} onClick={() => setActiveCategory(i)}
                className="px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap"
                style={activeCategory === i
                  ? { backgroundColor: "#0f1a35", color: "white" }
                  : { backgroundColor: "#f3f4f6", color: "#374151" }}>
                {cat}
              </button>
            ))}
            <span className="text-xs px-2.5 py-1 rounded-full" style={{ backgroundColor: "#eef2ff", color: "#3b4dc8" }}>
              {filteredRegular.length + (featuredMatch ? 1 : 0)} articles
            </span>
          </div>
          <div className="relative">
            <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#9ca3af" }} />
            <input type="text" placeholder="Search articles..." value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 pr-4 py-2 rounded-xl border text-xs sm:text-sm outline-none focus:border-yellow-400 transition-colors bg-white"
              style={{ borderColor: "#e5e7eb", width: "180px" }} />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-14">

        {/* ── FEATURED ARTICLE ─────────────────────────────────── */}
        {featuredMatch && (
          <div className="mb-10 sm:mb-14">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 rounded-full" style={{ backgroundColor: "#c9a84c" }} />
              <h2 className="text-base sm:text-lg font-bold" style={{ color: "#0f1a35", fontFamily: "Playfair Display, serif" }}>
                Featured Article
              </h2>
            </div>

            <div
              className="bg-white rounded-2xl overflow-hidden cursor-pointer group card-lift"
              style={{ border: "1px solid #e5e7eb", boxShadow: "0 4px 20px rgba(15,26,53,0.06)" }}
              onClick={() => setOpenArticle(featuredArticle)}
            >
              <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-[46%] relative overflow-hidden" style={{ minHeight: "220px", maxHeight: "340px" }}>
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: "center top" }}
                  />
                </div>
                {/* Content */}
                <div className="flex-1 p-5 sm:p-7 lg:p-8 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold"
                      style={{ backgroundColor: "#fff3cd", color: "#c9a84c", border: "1px solid #c9a84c44" }}>
                      ★ FEATURED
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold"
                      style={{ backgroundColor: featuredArticle.catBg, color: featuredArticle.catColor }}>
                      {featuredArticle.category}
                    </span>
                    <span className="text-xs flex items-center gap-1" style={{ color: "#9ca3af" }}>
                      <Calendar size={10} /> {featuredArticle.date}
                    </span>
                    <span className="text-xs flex items-center gap-1" style={{ color: "#9ca3af" }}>
                      <Clock size={10} /> {featuredArticle.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold leading-snug mb-3 group-hover:text-yellow-600 transition-colors"
                    style={{ fontFamily: "Playfair Display, serif", color: "#0f1a35" }}>
                    {featuredArticle.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "#6b7280" }}>
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                        style={{ backgroundColor: featuredArticle.authorColor }}>
                        {featuredArticle.initials}
                      </div>
                      <div>
                        <p className="text-sm font-semibold" style={{ color: "#0f1a35" }}>{featuredArticle.author}</p>
                        <p className="text-xs" style={{ color: "#9ca3af" }}>{featuredArticle.authorRole}</p>
                      </div>
                    </div>
                    <span className="flex items-center gap-1.5 text-sm font-bold group-hover:gap-2.5 transition-all"
                      style={{ color: "#c9a84c" }}>
                      Read Article <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── LATEST ARTICLES ──────────────────────────────────── */}
        {filteredRegular.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-1 h-6 rounded-full" style={{ backgroundColor: "#c9a84c" }} />
              <h2 className="text-base sm:text-lg font-bold" style={{ color: "#0f1a35", fontFamily: "Playfair Display, serif" }}>
                Latest Articles
              </h2>
            </div>

            {/*
              GRID:
              - Mobile: 2 columns (so 6 articles = 3 rows of 2) — compact and neat
              - Tablet: 2 columns
              - Desktop: 3 columns
            */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {filteredRegular.map((a, i) => (
                <article
                  key={a.id}
                  className="bg-white rounded-2xl overflow-hidden card-lift cursor-pointer group"
                  style={{ border: "1px solid #e5e7eb" }}
                  onClick={() => setOpenArticle(a)}
                >
                  {/* Image — 160px mobile, 200px desktop */}
                  <div className="relative overflow-hidden w-full h-[200px] sm:h-[160px] lg:h-[200px]">
                    <Image
                      src={a.image}
                      alt={a.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    <span
                      className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-xs font-bold"
                      style={{ backgroundColor: a.catBg, color: a.catColor, fontSize: "0.65rem" }}
                    >
                      {a.category}
                    </span>
                  </div>

                  <div className="p-3 sm:p-4">
                    {/* Date + time — hide on very small to save space */}
                    <div className="hidden sm:flex items-center gap-2 mb-2">
                      <span className="flex items-center gap-1 text-xs" style={{ color: "#9ca3af" }}>
                        <Calendar size={9} /> {a.date}
                      </span>
                      <span className="flex items-center gap-1 text-xs" style={{ color: "#9ca3af" }}>
                        <Clock size={9} /> {a.readTime}
                      </span>
                    </div>

                    <h3 className="font-bold leading-snug mb-2 group-hover:text-yellow-600 transition-colors"
                      style={{ color: "#0f1a35", fontSize: "clamp(0.72rem, 1.8vw, 0.875rem)", lineHeight: 1.4,
                        display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                      {a.title}
                    </h3>

                    <div className="flex items-center justify-between pt-2 border-t mt-auto"
                      style={{ borderColor: "#f3f4f6" }}>
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center text-white flex-shrink-0"
                          style={{ backgroundColor: a.authorColor, fontSize: "0.5rem", fontWeight: 700 }}>
                          {a.initials}
                        </div>
                        <span className="text-xs font-medium hidden sm:block" style={{ color: "#374151" }}>{a.author}</span>
                      </div>
                      <span className="flex items-center gap-0.5 font-bold group-hover:gap-1.5 transition-all"
                        style={{ color: "#c9a84c", fontSize: "0.7rem" }}>
                        Read More <ArrowRight size={10} />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {filteredRegular.length === 0 && !featuredMatch && (
          <div className="text-center py-20">
            <p className="text-lg font-semibold mb-2" style={{ color: "#0f1a35" }}>No articles found</p>
            <p className="text-sm" style={{ color: "#9ca3af" }}>Try a different category or search term.</p>
          </div>
        )}

        <div className="text-center mt-10 sm:mt-14">
          <Link href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-xl border hover:bg-gray-50 transition-colors"
            style={{ color: "#0f1a35", borderColor: "#e5e7eb" }}>
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Modal */}
      {openArticle && <ArticleModal article={openArticle} onClose={() => setOpenArticle(null)} />}
    </div>
  );
}
