import { Helmet } from "react-helmet-async";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ImpactSection } from "@/components/portfolio/ImpactSection";
import { TechStackSection } from "@/components/portfolio/TechStackSection";
import { CredentialsSection } from "@/components/portfolio/CredentialsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Mahak Goyal - AWS Certified Data Engineer | Data Engineering Portfolio</title>
        <meta
          name="description"
          content="Senior Data Engineer with 5+ years of experience. AWS certified expert in PySpark, Python, and cloud data solutions. Proven track record of 80% cost savings and scalable architecture design."
        />
        <link rel="canonical" href="https://mahakgoyal.lovable.app/" />
        <meta property="og:title" content="Mahak Goyal - AWS Certified Data Engineer" />
        <meta
          property="og:description"
          content="Senior Data Engineer specializing in AWS cloud solutions, PySpark, and scalable data pipelines. 5+ years of experience with proven impact."
        />
        <meta property="og:url" content="https://mahakgoyal.lovable.app/" />
        <meta name="twitter:title" content="Mahak Goyal - AWS Certified Data Engineer" />
        <meta
          name="twitter:description"
          content="Senior Data Engineer with expertise in AWS, PySpark, and cloud data solutions"
        />
      </Helmet>
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