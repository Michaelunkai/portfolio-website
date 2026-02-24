import Navbar from "@/components/layout/Navbar";
import ServicesHero from "@/components/services/ServicesHero";
import ProcessSection from "@/components/services/ProcessSection";
import PricingSection from "@/components/services/PricingSection";
import ContactForm from "@/components/services/ContactForm";
import Footer from "@/components/layout/Footer";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesHero />
        <ProcessSection />
        <PricingSection />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
