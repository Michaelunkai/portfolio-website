import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import FocusSection from "@/components/home/FocusSection";
import FeaturedProject from "@/components/home/FeaturedProject";
import ProjectsSection from "@/components/home/ProjectsSection";
import TemplatesSection from "@/components/home/TemplatesSection";
import AboutSection from "@/components/home/AboutSection";
import TeamSection from "@/components/home/TeamSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FocusSection />
        <FeaturedProject />
        <ProjectsSection />
        <TemplatesSection />
        <AboutSection />
        <TeamSection />
      </main>
      <Footer />
    </>
  );
}
