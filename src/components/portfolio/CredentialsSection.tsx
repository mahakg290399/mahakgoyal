import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, GraduationCap, CheckCircle } from "lucide-react";

export const CredentialsSection = () => {
  const certifications = [
    {
      title: "AWS Certified Data Engineer – Associate",
      issuer: "Amazon Web Services",
      year: "Dec 2024 – Dec 2027",
      level: "Associate",
      color: "skill-expert",
      link: "https://drive.google.com/file/d/1zxXXE1LdLAF0rMPsaeUNJcsI6qS0fCKS/view?usp=sharing"
    },
    {
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services", 
      year: "Aug 2023 – Aug 2026",
      level: "Associate",
      color: "skill-proficient",
      link: "https://drive.google.com/file/d/1eWvDrOAqVQ34lyHbgzBcH-CSV-T5YGpc/view?usp=sharing"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "Mar 2023 – Dec 2027", 
      level: "Foundational",
      color: "skill-skilled",
      link: "https://drive.google.com/file/d/1k1oDkDc5s-d8pHSWvVAVTxk2kTBjKJW6/view?usp=sharing"
    }
  ];

  const education = {
    degree: "B.Tech in Electronics and Communications",
    university: "Medi-caps University",
    year: "2020",
    achievements: ["GATE-2021 Qualified", "IEEE Research Publication", "IoT Project Specialization"]
  };

  return (
    <section id="credentials" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Credentials & Education
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Certified expertise backed by continuous learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-primary flex items-center gap-3">
              <Award className="w-8 h-8" />
              AWS Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <Card 
                  key={index} 
                  className="card-hover p-6 cursor-pointer transition-all hover:shadow-lg" 
                  onClick={() => window.open(cert.link, '_blank')}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${cert.color} flex-shrink-0`}>
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-bold text-foreground">{cert.title}</h4>
                        <Badge variant="secondary">{cert.year}</Badge>
                      </div>
                      <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {cert.level} Level
                        </Badge>
                        <Badge variant="default" className="text-xs">
                          Click to View Certificate
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-primary flex items-center gap-3">
              <GraduationCap className="w-8 h-8" />
              Education
            </h3>
            <Card className="card-hover p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-2">{education.degree}</h4>
                <p className="text-muted-foreground mb-2">{education.university}</p>
                <Badge variant="secondary" className="text-accent font-semibold">
                  Graduated {education.year}
                </Badge>
              </div>
              
              <div className="space-y-3">
                <h5 className="font-semibold text-accent">Key Achievements</h5>
                {education.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Additional Credentials */}
            <Card className="card-hover p-6 mt-6 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <h5 className="font-bold text-primary mb-3">Professional Development</h5>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>• 4+ years of hands-on experience at Tata Consultancy Services</p>
                <p>• Progression from Assistant System Engineer to Senior Data Engineer</p>
                <p>• Continuous learning in emerging technologies (AI/ML, LLMs, MCP)</p>
                <p>• Active participation in IEEE research and technical publications</p>
              </div>
            </Card>
          </div>
        </div>

        <Card className="card-hover p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-primary">Commitment to Excellence</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My certifications represent more than just credentials—they demonstrate my commitment to 
            staying current with cloud technologies and best practices. Combined with practical experience 
            and continuous learning, they form the foundation of my technical expertise.
          </p>
        </Card>
      </div>
    </section>
  );
};