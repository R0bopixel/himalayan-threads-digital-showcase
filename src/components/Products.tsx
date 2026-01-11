import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Products = () => {
  const products = [
    {
      title: "Pure Cotton Yarn",
      description: "Premium 100% cotton greige yarn spun from quality raw cotton. Off-white in color, ready for dyeing in later processing. Produced in Mill 1 & Mill 2.",
      counts: "16s, 20s, 24s, 30s, 40s",
      image: "🧶",
    },
    {
      title: "Polyester Cotton Mix",
      description: "Durable PC blended yarns in 52:48 and 65:35 ratios. Combines cotton comfort with polyester strength. Produced in Mill 2, 3 & 4.",
      counts: "16s, 20s, 24s, 30s, 40s",
      image: "🧵",
    },
    {
      title: "Pure Polyester Yarn",
      description: "High-tenacity 100% polyester yarns with excellent durability and colorfastness. Produced in our specialized Mill 4.",
      counts: "16s to 50s",
      image: "✨",
    },
    {
      title: "Slub Yarn",
      description: "Fashion-forward slub and injected slub yarns creating unique textures. Available in cotton, polyester, and blended varieties.",
      counts: "Custom Specs",
      image: "💫",
    },
  ];

  return (
    <section id="products" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 rounded-full text-accent text-sm font-body font-medium mb-4">
            Our Products
          </span>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Premium Yarns for Every Need
          </h2>
          
          <p className="font-body text-lg text-muted-foreground">
            Greige yarn spun from cotton and polyester fibers. Our yarns are respected for quality in both domestic and international markets, used by textile mills for dyeing and further processing into fabrics.
          </p>
        </ScrollReveal>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ScrollReveal key={product.title} delay={index * 0.1}>
              <div
                className="group relative bg-card rounded-2xl p-8 border border-border hover:border-accent/30 transition-all duration-300 card-soft hover:card-elevated h-full"
              >
                <div className="text-4xl mb-4">{product.image}</div>
                
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {product.title}
                </h3>
                
                <p className="font-body text-muted-foreground text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="font-body text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {product.counts}
                  </span>
                  
                  <button className="p-2 rounded-full bg-muted group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.4} className="text-center mt-12">
          <p className="font-body text-muted-foreground mb-4">
            Need a custom yarn solution? We specialize in bespoke manufacturing.
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center font-body font-medium text-accent hover:text-accent/80 transition-colors"
          >
            Request custom specifications
            <span className="ml-2">→</span>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Products;
