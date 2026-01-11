import { CheckCircle } from "lucide-react";
import mountainImage from "@/assets/himalayan-mountains.jpg";
import ScrollReveal from "./ScrollReveal";

const About = () => {
  const highlights = [
    "Ultra-modern spinning technology",
    "ISO 9002 & ISO 14000 certified by BIS",
    "Industry-leading manufacturing efficiency",
    "International market competitiveness",
  ];

  return (
    <section id="about" className="py-24 lg:py-32 section-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden card-elevated">
                <img
                  src={mountainImage}
                  alt="Himalayan mountains at sunrise"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>
              
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-card p-6 rounded-xl card-elevated max-w-xs">
                <div className="font-display text-4xl font-bold text-accent">1985</div>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  Established in the foothills of the Himalayas with a vision for quality
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right" delay={0.2}>
            <div>
              <span className="inline-block px-4 py-1.5 bg-accent/10 rounded-full text-accent text-sm font-body font-medium mb-4">
                Our Heritage
              </span>
              
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                Industry-Leading{" "}
                <span className="text-gradient">Manufacturing Efficiency</span>
              </h2>
              
              <p className="font-body text-lg text-muted-foreground mb-6">
                Himalayan Spinners Limited operates one of the most modern greige yarn spinning units in the country, equipped with thousands of spindles and open-end rotors producing premium quality yarns.
              </p>
              
              <p className="font-body text-muted-foreground mb-8">
                Our factory consists of 4 specialized mills: Mill 1 & 2 for Pure Cotton, Mill 2 & 3 for PC blends, and Mill 4 for PC and Pure Polyester yarns. We produce counts ranging from 16s to 50s, with coarser yarns for towels and finer counts for premium apparel.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {highlights.map((item, index) => (
                  <ScrollReveal key={item} delay={0.3 + index * 0.1}>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="font-body text-sm text-foreground">{item}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <a 
                href="#contact"
                className="inline-flex items-center font-body font-medium text-accent hover:text-accent/80 transition-colors"
              >
                Learn more about our journey
                <span className="ml-2">→</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
