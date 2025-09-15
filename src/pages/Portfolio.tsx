import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ImpactSection } from "@/components/portfolio/ImpactSection";
import { TechStackSection } from "@/components/portfolio/TechStackSection";
import { CredentialsSection } from "@/components/portfolio/CredentialsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ImpactSection />
      <TechStackSection />
      <CredentialsSection />
      <ContactSection />
    </div>
  );
};

export default Portfolio;