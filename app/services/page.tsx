import Navbar from "@/components/layout/Navbar";
import ServicesHero from "@/components/services/ServicesHero";
import ProcessSection from "@/components/services/ProcessSection";
import PricingSection from "@/components/services/PricingSection";
import ContactForm from "@/components/services/ContactForm";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/PageTransition";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <main id="services">
          <ServicesHero />
          <ProcessSection />
          <PricingSection />
          <ContactForm />
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
