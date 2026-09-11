import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import SustainabilitySection from "@/components/sections/SustainabilitySection";
import ContactCtaSection from "@/components/sections/ContactCtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ExpertiseSection />
      <CertificationsSection />
      <SustainabilitySection />
      <ContactCtaSection />
    </>
  );
}
