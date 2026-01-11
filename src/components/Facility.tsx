import { Factory, Layers, Cog, Settings, CircleDot, Package } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "./ScrollReveal";

import spinningMachinesImg from "@/assets/gallery-spinning-machines.jpg";
import productionFloorImg from "@/assets/gallery-production-floor.jpg";
import rovingImg from "@/assets/gallery-roving.jpg";
import windingImg from "@/assets/gallery-winding.jpg";
import qualityLabImg from "@/assets/gallery-quality-lab.jpg";
import warehouseImg from "@/assets/gallery-warehouse.jpg";

const Facility = () => {
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

  const mills = [
    { name: "Mill 1", products: "Pure Cotton" },
    { name: "Mill 2", products: "Pure Cotton & PC Blend" },
    { name: "Mill 3", products: "PC Blend" },
    { name: "Mill 4", products: "PC Blend & Pure Polyester" },
  ];

  const yarnTypes = [
    { type: "Pure Cotton", description: "100% cotton yarn for premium textiles" },
    { type: "Polyester-Cotton Mix", description: "52:48 and 65:35 blend ratios" },
    { type: "Pure Polyester", description: "High-strength synthetic yarn" },
  ];

  const counts = ["16s", "20s", "24s", "30s", "40s", "50s"];

  const manufacturingProcess = [
    {
      step: 1,
      name: "Carding",
      machine: "Carding Machine (with Blow Room)",
      icon: Layers,
      description: "Cotton bales are spread to make them airy and undergo basic cleaning. The fibers are drawn into thick strands known as sliver.",
    },
    {
      step: 2,
      name: "Combing",
      machine: "Combing Machine",
      icon: Cog,
      description: "The strands are combed to remove all solid impurities and small fibers, ensuring only quality fibers proceed.",
    },
    {
      step: 3,
      name: "Drawing",
      machine: "Speed Frames",
      icon: Settings,
      description: "Speed frames pull the thick strands to elongate them and reduce their width. Output is approximately one centimeter thick sliver.",
    },
    {
      step: 4,
      name: "Spinning",
      machine: "Ring Frames",
      icon: CircleDot,
      description: "Slivers are fed to ring frames where final spinning happens in spindles. Speed and angle determine yarn count. Lower counts (16s, 20s) yield higher kg/hour output.",
    },
    {
      step: 5,
      name: "Winding",
      machine: "Winding Machine",
      icon: Package,
      description: "The final step where yarn is rolled onto hollow cardboard cylinders, ready for packaging and dispatch to customers.",
    },
  ];

  return (
    <section id="facility" className="py-24 lg:py-32 bg-muted/30">
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
            Greige Yarn (pronounced "grey") is thread spun from cotton and other fibers. Off-white in color, it is later dyed and processed into colorful threads used for fabric manufacturing.
          </p>
        </ScrollReveal>

        {/* Gallery Carousel */}
        <ScrollReveal delay={0.2} className="max-w-5xl mx-auto mb-16">
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
                    <img
                      src={image.image}
                      alt={image.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
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

        {/* Details Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Yarn Classification & Mills */}
          <div className="space-y-8">
            {/* Yarn Classification */}
            <ScrollReveal>
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Yarn Classification
                </h3>
                
                <p className="font-body text-muted-foreground mb-6">
                  Greige yarns are primarily classified by two parameters:
                </p>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="material">
                    <AccordionTrigger className="font-display text-lg font-medium">
                      Material Type
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 pt-2">
                        {yarnTypes.map((yarn) => (
                          <div key={yarn.type} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                            <span className="font-body font-medium text-foreground">{yarn.type}</span>
                            <span className="font-body text-sm text-muted-foreground">{yarn.description}</span>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="count">
                    <AccordionTrigger className="font-display text-lg font-medium">
                      Yarn Count (Thickness)
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="font-body text-muted-foreground mb-4">
                        Count represents the thinness of thread. Coarser yarns (12s, 16s) are thicker, used in towels. Finer counts (40s+) are premium, used for shirts.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {counts.map((count) => (
                          <span 
                            key={count}
                            className="px-4 py-2 bg-accent/10 rounded-full text-accent font-body font-medium text-sm"
                          >
                            {count}
                          </span>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </ScrollReveal>

            {/* Mill Structure */}
            <ScrollReveal delay={0.1}>
              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Factory className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    Factory Structure
                  </h3>
                </div>
                
                <p className="font-body text-muted-foreground mb-6">
                  Our factory is divided into 4 specialized mills, each focusing on specific product lines:
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {mills.map((mill) => (
                    <div 
                      key={mill.name}
                      className="p-4 bg-muted/50 rounded-xl border border-border"
                    >
                      <div className="font-display font-semibold text-foreground mb-1">
                        {mill.name}
                      </div>
                      <div className="font-body text-sm text-muted-foreground">
                        {mill.products}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Market Info */}
            <ScrollReveal delay={0.2}>
              <div className="bg-accent/5 rounded-2xl p-8 border border-accent/20">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Market Position
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Greige yarn is a commodity product with no fixed vendors or customers, though we maintain strong repeat business relationships. Himalayan Spinners yarn is respected for its consistent quality in both domestic and international markets.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column - Manufacturing Process */}
          <ScrollReveal delay={0.2}>
            <div className="bg-card rounded-2xl p-8 border border-border h-fit">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                Manufacturing Process
              </h3>
              <p className="font-body text-muted-foreground mb-8">
                Our yarn production follows a 5-stage process with specialized machinery at each step.
              </p>

              <div className="space-y-6">
                {manufacturingProcess.map((process, index) => (
                  <div key={process.step} className="relative">
                    {index < manufacturingProcess.length - 1 && (
                      <div className="absolute left-5 top-12 w-0.5 h-[calc(100%-0.5rem)] bg-border" />
                    )}
                    
                    <div className="flex gap-4">
                      <div className="relative z-10 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <process.icon className="h-5 w-5 text-accent" />
                      </div>
                      
                      <div className="flex-1 pb-2">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="font-display text-lg font-semibold text-foreground">
                            {process.step}. {process.name}
                          </span>
                        </div>
                        <div className="font-body text-xs text-accent mb-2">
                          {process.machine}
                        </div>
                        <p className="font-body text-sm text-muted-foreground leading-relaxed">
                          {process.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Facility;
