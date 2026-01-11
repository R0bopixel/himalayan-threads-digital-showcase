import { Shield, Leaf, Award, Microscope, Recycle, Globe } from "lucide-react";

const Quality = () => {
  const certifications = [
    {
      icon: Shield,
      title: "ISO 9001:2015",
      description: "Quality Management System certified ensuring consistent product quality",
    },
    {
      icon: Leaf,
      title: "GOTS Certified",
      description: "Global Organic Textile Standard for organic cotton processing",
    },
    {
      icon: Award,
      title: "OEKO-TEX®",
      description: "Standard 100 certified products free from harmful substances",
    },
    {
      icon: Microscope,
      title: "Uster Tested",
      description: "All yarns tested for quality parameters using Uster instruments",
    },
    {
      icon: Recycle,
      title: "BCI Member",
      description: "Better Cotton Initiative member promoting sustainable cotton farming",
    },
    {
      icon: Globe,
      title: "Export Quality",
      description: "Meeting international standards for 25+ export destinations",
    },
  ];

  return (
    <section id="quality" className="py-24 lg:py-32 hero-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary/20 backdrop-blur-sm rounded-full text-secondary-foreground text-sm font-body font-medium mb-4">
            Quality Assurance
          </span>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-6">
            Certified Excellence at Every Step
          </h2>
          
          <p className="font-body text-lg text-primary-foreground/80">
            Our commitment to quality is validated by internationally recognized certifications and rigorous testing protocols.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="group bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
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
          ))}
        </div>

        {/* Quality Promise */}
        <div className="mt-16 text-center bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-primary-foreground/10">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Our Quality Promise
          </h3>
          <p className="font-body text-primary-foreground/80 max-w-2xl mx-auto">
            Every meter of yarn that leaves our facility undergoes rigorous quality checks. From raw material inspection to final packaging, we maintain strict quality control protocols to ensure consistent excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Quality;
