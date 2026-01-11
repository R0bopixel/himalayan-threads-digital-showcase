import { CheckCircle } from "lucide-react";
import mountainImage from "@/assets/himalayan-mountains.jpg";

const About = () => {
  const highlights = [
    "State-of-the-art spinning facilities",
    "ISO 9001:2015 certified operations",
    "Sustainable & eco-friendly practices",
    "Global export network",
  ];

  return (
    <section id="about" className="py-24 lg:py-32 section-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
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

          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-accent/10 rounded-full text-accent text-sm font-body font-medium mb-4">
              Our Heritage
            </span>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Four Decades of{" "}
              <span className="text-gradient">Spinning Excellence</span>
            </h2>
            
            <p className="font-body text-lg text-muted-foreground mb-6">
              Himalayan Spinners was founded with a simple yet powerful vision: to create the finest quality yarns while honoring the natural beauty and resources of the Himalayan region.
            </p>
            
            <p className="font-body text-muted-foreground mb-8">
              Today, we stand as one of India's leading textile manufacturers, combining traditional craftsmanship with cutting-edge technology. Our integrated spinning mills produce over 50 million kilograms of premium yarn annually, serving clients across 25+ countries.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="font-body text-sm text-foreground">{item}</span>
                </div>
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
        </div>
      </div>
    </section>
  );
};

export default About;
