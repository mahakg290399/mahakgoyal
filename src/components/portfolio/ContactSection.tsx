import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github, MessageCircle } from "lucide-react";

export const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "mahakg290399@gmail.com",
      href: "mailto:mahakg290399@gmail.com",
      color: "skill-expert"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 8818851715",
      href: "tel:+918818851715",
      color: "skill-proficient"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "mahakdgoyal",
      href: "https://www.linkedin.com/in/mahakdgoyal",
      color: "skill-expert"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "mahakg290399",
      href: "https://github.com/mahakg290399",
      color: "skill-skilled"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to discuss your next data engineering challenge
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <Card key={index} className="card-hover p-6 text-center group">
              <a 
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block"
              >
                <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${contact.color} group-hover:scale-110 transition-transform duration-300`}>
                  {contact.icon}
                </div>
                <h3 className="font-bold text-primary mb-2">{contact.label}</h3>
                <p className="text-muted-foreground text-sm group-hover:text-accent transition-colors">
                  {contact.value}
                </p>
              </a>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="card-hover p-8">
            <div className="text-center mb-6">
              <MessageCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold text-primary mb-2">Open to Opportunities</h3>
              <p className="text-muted-foreground">
                Looking for challenging projects in data engineering, cloud architecture, or emerging technologies.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-muted-foreground">Available for full-time opportunities</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-muted-foreground">Open to consulting projects</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-muted-foreground">Interested in technical mentoring</span>
              </div>
            </div>
          </Card>

          <Card className="card-hover p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">Let's Build Something Amazing</h3>
              <p className="text-muted-foreground mb-6">
                Whether you have a complex data challenge, need cloud architecture expertise, 
                or want to explore emerging technologies, I'm here to help create impactful solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => window.open('mailto:mahakg290399@gmail.com', '_blank')}
                  className="group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Send Email
                </Button>
                <Button 
                  variant="outline-hero" 
                  size="lg"
                  onClick={() => window.open('https://www.linkedin.com/in/mahakdgoyal', '_blank')}
                  className="group"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center mt-16">
          <Card className="card-hover p-6 inline-block">
            <p className="text-muted-foreground">
              Made with passion for data engineering • Mahak Goyal © 2024
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};