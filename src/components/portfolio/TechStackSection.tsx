import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Star, Code, Database, Cloud } from "lucide-react";

export const TechStackSection = () => {
  const skillCategories = [
    {
      title: "Expert Level",
      icon: <Star className="w-6 h-6" />,
      level: "8.5/10",
      color: "skill-expert",
      skills: ["Python", "PySpark", "AWS Glue", "AWS Lambda", "AWS S3", "ETL/ELT Design", "Git", "GitHub Actions"],
      progress: 85
    },
    {
      title: "Proficient",
      icon: <Cloud className="w-6 h-6" />,
      level: "7.5/10", 
      color: "skill-proficient",
      skills: ["AWS EMR", "CloudFormation", "Athena", "SQL", "Scala", "Hadoop", "Hive", "REST APIs"],
      progress: 75
    },
    {
      title: "Skilled In",
      icon: <Code className="w-6 h-6" />,
      level: "6.5/10",
      color: "skill-skilled",
      skills: ["CI/CD", "Microservices", "MongoDB", "Atlassian Suite"],
      progress: 65
    }
  ];

  const certifications = [
    "AWS Certified Cloud Practitioner",
    "AWS Certified Solutions Architect – Associate", 
    "AWS Certified Data Engineer – Associate"
  ];

  return (
    <section id="tech-stack" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Technical Excellence
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Proven expertise across the modern data engineering stack
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover p-8">
              <div className="text-center mb-6">
                <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{category.title}</h3>
                <Badge variant="secondary" className="text-accent font-semibold">
                  {category.level}
                </Badge>
                <div className="mt-4 px-4">
                  <Progress value={category.progress} className="h-2" />
                </div>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between">
                    <span className="text-muted-foreground">{skill}</span>
                    <div className="flex items-center gap-1">
                      {[...Array(Math.floor(category.progress / 20))].map((_, starIndex) => (
                        <Star key={starIndex} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="card-hover p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
          <div className="text-center">
            <Database className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-2xl font-bold mb-6 text-primary">Data Engineering Specialization</h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-semibold text-accent mb-3">Core Competencies</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Large-scale data pipeline architecture</li>
                  <li>• Cloud-native serverless solutions</li>
                  <li>• Performance optimization & cost reduction</li>
                  <li>• Data quality & governance frameworks</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-accent mb-3">AWS Certifications</h4>
                <div className="space-y-2">
                  {certifications.map((cert, index) => (
                    <Badge key={index} variant="outline" className="block text-center py-2">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};