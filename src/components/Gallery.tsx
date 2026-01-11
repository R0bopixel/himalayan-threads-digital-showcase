import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const galleryImages = [
    {
      title: "Modern Spinning Machines",
      description: "State-of-the-art ring spinning frames ensuring consistent yarn quality",
      category: "Machinery",
    },
    {
      title: "Production Floor",
      description: "Our expansive production facility spanning over 50,000 sq ft",
      category: "Facility",
    },
    {
      title: "Roving Section",
      description: "Precision roving frames for optimal fiber alignment",
      category: "Machinery",
    },
    {
      title: "Winding Department",
      description: "Automatic winding machines for defect-free yarn packages",
      category: "Machinery",
    },
    {
      title: "Quality Control Lab",
      description: "Advanced testing equipment for yarn quality assurance",
      category: "Quality",
    },
    {
      title: "Warehouse & Dispatch",
      description: "Climate-controlled storage for finished goods",
      category: "Logistics",
    },
  ];

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 rounded-full text-accent text-sm font-body font-medium mb-4">
            Our Facility
          </span>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Manufacturing Excellence
          </h2>

          <p className="font-body text-lg text-muted-foreground">
            Take a virtual tour of our modern manufacturing facility equipped with cutting-edge spinning technology.
          </p>
        </div>

        {/* Gallery Carousel */}
        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 aspect-[4/3] card-soft hover:card-elevated transition-all duration-300">
                    {/* Placeholder pattern for industrial look */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl opacity-30">
                          {image.category === "Machinery" && "⚙️"}
                          {image.category === "Facility" && "🏭"}
                          {image.category === "Quality" && "🔬"}
                          {image.category === "Logistics" && "📦"}
                        </div>
                      </div>
                      {/* Grid pattern overlay */}
                      <div
                        className="absolute inset-0 opacity-5"
                        style={{
                          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                                          linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
                          backgroundSize: "20px 20px",
                        }}
                      />
                    </div>

                    {/* Content overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent flex flex-col justify-end p-6">
                      <span className="inline-block self-start px-2 py-1 bg-accent/20 backdrop-blur-sm rounded text-accent-foreground text-xs font-body font-medium mb-2">
                        {image.category}
                      </span>
                      <h3 className="font-display text-lg font-semibold text-background mb-1">
                        {image.title}
                      </h3>
                      <p className="font-body text-sm text-background/80 line-clamp-2">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-card border-border hover:bg-accent hover:text-accent-foreground" />
            <CarouselNext className="hidden md:flex -right-12 bg-card border-border hover:bg-accent hover:text-accent-foreground" />
          </Carousel>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { value: "50,000+", label: "Sq Ft Facility" },
            { value: "200+", label: "Spindles" },
            { value: "24/7", label: "Operations" },
            { value: "100+", label: "Skilled Workers" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-xl bg-card card-soft">
              <div className="font-display text-2xl md:text-3xl font-bold text-accent mb-1">
                {stat.value}
              </div>
              <div className="font-body text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
