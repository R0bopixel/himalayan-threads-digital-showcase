import { Shield, Leaf, Award, Microscope, Recycle, Globe } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Quality = () => {
  const certifications = [
    {
      icon: Shield,
      title: "ISO 9002",
      description: "Quality Management System certified by BIS ensuring consistent product quality",
    },
    {
      icon: Leaf,
      title: "ISO 14000",
      description: "Environmental Management System certified by BIS for sustainable operations",
    },
    {
      icon: Award,
      title: "BIS Certified",
      description: "Bureau of Indian Standards certification validating our quality commitment",
    },
    {
      icon: Microscope,
      title: "Thoroughly Tested",
      description: "All yarns tested for quality parameters using advanced testing instruments",
    },
    {
      icon: Recycle,
      title: "Eco-Friendly",
      description: "Commitment to sustainable manufacturing and environmental responsibility",
    },
    {
      icon: Globe,
      title: "Export Quality",
      description: "Meeting international standards to compete successfully in global markets",
    },
  ];

  return (
    <section id="quality" className="py-24 lg:py-32 hero-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary/20 backdrop-blur-sm rounded-full text-secondary-foreground text-sm font-body font-medium mb-4">
            Quality Assurance
          </span>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-6">
            Certified Excellence at Every Step
          </h2>
          
          <p className="font-body text-lg text-primary-foreground/80">
            Our commitment to quality is validated by internationally recognized certifications and rigorous testing protocols.
          </p>
        </ScrollReveal>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {certifications.map((cert, index) => (
            <ScrollReveal key={cert.title} delay={index * 0.1}>
              <div className="group bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors">
                  <cert.icon className="h-6 w-6 text-secondary" />
                </div>
                
                <h3 className="font-display text-xl font-semibold text-primary-foreground mb-2">
                  {cert.title}
                </h3>
                
                <p className="font-body text-primary-foreground/70 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Quality Promise */}
        <ScrollReveal delay={0.4}>
          <div className="mt-16 text-center bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-primary-foreground/10">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Our Quality Promise
            </h3>
            <p className="font-body text-primary-foreground/80 max-w-2xl mx-auto">
              Every meter of yarn that leaves our facility undergoes rigorous quality checks. From raw material inspection to final packaging, we maintain strict quality control protocols to ensure consistent excellence.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Quality;
