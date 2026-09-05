import { Card } from "@/components/ui/card";
import { GraduationCap, Lightbulb, TrendingUp } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              My Journey
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            From Electronics Engineering to Data Engineering Excellence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="card-hover p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-primary">My Foundation</h3>
            <p className="text-muted-foreground">
              Started with a B.Tech in Electronics & Communications from Medi-caps University. 
              IoT internships and IEEE research on automated IV drip controllers ignited my passion for software solutions.
            </p>
          </Card>

          <Card className="card-hover p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full mx-auto mb-6 flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-accent">My Growth</h3>
            <p className="text-muted-foreground">
              5+ years across Tata Consultancy Services and Matrix - IFS, progressing from Assistant System Engineer to Senior Data Engineer. 
              Architecting cloud-based data solutions for leading US asset management and financial services companies.
            </p>
          </Card>

          <Card className="card-hover p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center">
              <Lightbulb className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-primary">My Drive</h3>
            <p className="text-muted-foreground">
              Curiosity for technology and drive to build scalable, high-impact solutions. 
              Eager to explore emerging fields like AI/ML, LLMs, and Model Context Protocol (MCP).
            </p>
          </Card>
        </div>

        <Card className="card-hover p-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6 text-primary">The Complete Story</h3>
            <div className="prose prose-lg max-w-4xl mx-auto text-muted-foreground">
              <p className="mb-6">
                My journey began with a strong foundation in Electronics & Communications Engineering, 
                where I discovered the power of technology to solve real-world problems through IoT projects 
                and research work on automated medical systems.
              </p>
              <p className="mb-6">
                At Tata Consultancy Services, I spent over 4 years architecting and optimizing large-scale, 
                cloud-based data solutions for a leading US asset management company. Now at Matrix - IFS, 
                I'm leading the migration of mission-critical trade monitoring systems from legacy vendor 
                platforms to modern AWS architectures, building compliance rules and medallion data lakes 
                that process millions of records daily.
              </p>
              <p>
                What drives me is curiosity and the belief that technology should create meaningful impact. 
                Whether it's reducing costs by 80% through serverless architecture, replacing 20-year-old 
                vendor systems with custom AWS Glue solutions, or leveraging AI-assisted engineering to 
                accelerate development, I focus on solutions that matter.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};