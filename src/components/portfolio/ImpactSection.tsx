import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Zap, Database, Shield } from "lucide-react";

export const ImpactSection = () => {
  const achievements = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Legacy Vendor Modernization",
      impact: "Replaced 20-Year-Old System",
      description: "Leading the migration of a mission-critical trade monitoring system from NICE Actimize to a custom AWS architecture, eliminating high vendor licensing costs and enabling bespoke business enhancements.",
      technologies: ["AWS Glue", "PySpark", "Apache Iceberg", "MWAA", "Medallion Architecture"],
      color: "skill-expert"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Compliance Rule Engine",
      impact: "100+ Rules, 100K+ Records/Day",
      description: "Developed 100+ compliance rules in AWS Glue (PySpark) processing 100K+ daily records to identify ~100 high-priority alerts with rule execution times of 2–10 minutes.",
      technologies: ["AWS Glue", "PySpark", "Compliance", "Data Quality", "S3"],
      color: "skill-proficient"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Best-Sales-Practice Compliance",
      impact: "10M+ Records in 10 Minutes",
      description: "Designed and built a custom AWS Glue solution from scratch to run daily best-sales-practice compliance checks across 10M+ records, replacing a 20-year-old proprietary vendor system with fail-safe recovery and idempotent reprocessing.",
      technologies: ["AWS Glue", "PySpark", "Step Functions", "Data Modeling", "Reconciliation"],
      color: "skill-expert"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Pipeline Performance Optimization",
      impact: "30% Cost & Time Reduction",
      description: "Led the migration of a complex, monthly data processing job from AWS EMR to AWS Glue, converting Scala code to optimized PySpark. Achieved 30% cost reduction and 30-minute decrease in job startup time.",
      technologies: ["AWS Glue", "PySpark", "AWS EMR", "Scala Migration"],
      color: "skill-proficient"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "S3 Bottleneck Resolution",
      impact: "Solved 5,500 RPS Limit",
      description: "Resolved critical S3 bottleneck hitting the 5,500 get-requests-per-second limit. Re-architected data partitioning strategy to consolidate numerous small files into optimized larger files.",
      technologies: ["AWS S3", "Data Partitioning", "Performance Tuning", "Architecture Design"],
      color: "skill-expert"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Serverless Cost Savings",
      impact: "80% Cost Reduction",
      description: "Architected and developed event-driven, serverless data processing workflows using AWS Lambda and Python, resulting in an 80% reduction in server costs compared to legacy systems.",
      technologies: ["AWS Lambda", "Python", "Event-driven Architecture", "Serverless"],
      color: "skill-skilled"
    }
  ];

  return (
    <section id="impact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Quantifiable Impact
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Real solutions, measurable results
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="card-hover p-8 h-full">
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${achievement.color} flex-shrink-0`}>
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-primary">{achievement.title}</h3>
                    <Badge variant="secondary" className="text-accent font-semibold">
                      {achievement.impact}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {achievement.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {achievement.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="card-hover p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-primary">The Impact Philosophy</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every project I work on is guided by one principle: <span className="text-accent font-semibold">create measurable value</span>. 
              Whether it's cost reduction, performance optimization, or building scalable solutions, 
              I focus on delivering results that matter to both the business and the engineering team.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};