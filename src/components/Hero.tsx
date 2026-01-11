import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-yarn.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium quality yarn and textiles"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-75" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full text-secondary-foreground text-sm font-body font-medium mb-6 animate-fade-up">
            Trusted Since 1985
          </span>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Weaving Excellence from the{" "}
            <span className="text-secondary">Heart of Himalayas</span>
          </h1>
          
          <p className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Premium quality yarns crafted with precision, passion, and a commitment to sustainable textile manufacturing. From raw fiber to finished yarn, we deliver excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button 
              size="lg" 
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-body text-base px-8 group"
            >
              Explore Products
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-body text-base px-8"
            >
              Our Story
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-primary-foreground/20 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "40+", label: "Years Experience" },
              { value: "50M+", label: "Kg Yarn/Year" },
              { value: "25+", label: "Countries Export" },
              { value: "500+", label: "Team Members" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl md:text-4xl font-bold text-secondary">{stat.value}</div>
                <div className="font-body text-sm text-primary-foreground/70 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
