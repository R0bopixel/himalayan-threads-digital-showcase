import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ScrollReveal from "./ScrollReveal";

import spinningMachinesImg from "@/assets/gallery-spinning-machines.jpg";
import productionFloorImg from "@/assets/gallery-production-floor.jpg";
import rovingImg from "@/assets/gallery-roving.jpg";
import windingImg from "@/assets/gallery-winding.jpg";
import qualityLabImg from "@/assets/gallery-quality-lab.jpg";
import warehouseImg from "@/assets/gallery-warehouse.jpg";

const Gallery = () => {
  const galleryImages = [
    {
      title: "Ring Frames",
      description: "Final spinning happens in spindles where slivers are converted to yarn. Speed determines yarn count.",
      category: "Spinning",
      image: spinningMachinesImg,
    },
    {
      title: "Production Floor",
      description: "Our 4-mill facility with Mill 1-2 for Cotton, Mill 3 for PC, Mill 4 for PC & Polyester",
      category: "Facility",
      image: productionFloorImg,
    },
    {
      title: "Speed Frames",
      description: "Frames that pull thick strands to elongate and reduce width, creating centimeter-thick slivers",
      category: "Processing",
      image: rovingImg,
    },
    {
      title: "Winding Department",
      description: "Final step where yarn is rolled onto hollow cardboard cylinders for packaging and dispatch",
      category: "Finishing",
      image: windingImg,
    },
    {
      title: "Quality Control Lab",
      description: "Advanced testing ensuring our yarn meets ISO 9002 and international export standards",
      category: "Quality",
      image: qualityLabImg,
    },
    {
      title: "Warehouse & Dispatch",
      description: "Storage for finished greige yarn packages ready for domestic and export shipment",
      category: "Logistics",
      image: warehouseImg,
    },
  ];

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 rounded-full text-accent text-sm font-body font-medium mb-4">
            Our Facility
          </span>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Manufacturing Excellence
          </h2>

          <p className="font-body text-lg text-muted-foreground">
            Take a virtual tour of our modern manufacturing facility equipped with cutting-edge spinning technology.
          </p>
        </ScrollReveal>

        {/* Gallery Carousel */}
        <ScrollReveal delay={0.2} className="max-w-5xl mx-auto">
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
                  <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] card-soft hover:card-elevated transition-all duration-300">
                    {/* Actual Image */}
                    <img
                      src={image.image}
                      alt={image.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Content overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent flex flex-col justify-end p-6">
                      <span className="inline-block self-start px-2 py-1 bg-accent/30 backdrop-blur-sm rounded text-background text-xs font-body font-medium mb-2">
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
        </ScrollReveal>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { value: "4", label: "Specialized Mills" },
            { value: "1000s", label: "Spindles & Rotors" },
            { value: "5", label: "Production Stages" },
            { value: "16-50s", label: "Count Range" },
          ].map((stat, index) => (
            <ScrollReveal key={stat.label} delay={0.1 * index}>
              <div className="text-center p-6 rounded-xl bg-card card-soft">
                <div className="font-display text-2xl md:text-3xl font-bold text-accent mb-1">
                  {stat.value}
                </div>
                <div className="font-body text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
