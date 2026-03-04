import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsAndFaq from "@/components/TestimonialsAndFaq";
import ConsultationSection from "@/components/ConsultationSection";

// Section order: Hero → Services → Process → Why Us (inside ProcessSection) → Testimonials → FAQ → Consultation
// Blog is SEPARATE page at /blog — NOT on homepage
export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsAndFaq />
      <ConsultationSection />
    </>
  );
}
