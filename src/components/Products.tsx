import { ArrowUpRight } from "lucide-react";

const Products = () => {
  const products = [
    {
      title: "Cotton Yarn",
      description: "Premium 100% cotton yarn in various counts from Ne 10 to Ne 80. Ideal for knitting, weaving, and industrial applications.",
      counts: "Ne 10 - Ne 80",
      image: "🧶",
    },
    {
      title: "Blended Yarn",
      description: "Poly-cotton, viscose blends, and custom fiber combinations tailored to your specific requirements.",
      counts: "Custom Blends",
      image: "🧵",
    },
    {
      title: "Melange Yarn",
      description: "Beautifully textured melange yarns with consistent quality and vibrant color combinations.",
      counts: "Ne 16 - Ne 40",
      image: "🎨",
    },
    {
      title: "Compact Yarn",
      description: "High-quality compact spun yarns with superior strength, smoothness, and reduced hairiness.",
      counts: "Ne 20 - Ne 60",
      image: "✨",
    },
    {
      title: "Organic Yarn",
      description: "GOTS certified organic cotton yarns for sustainable and eco-conscious textile production.",
      counts: "Ne 16 - Ne 50",
      image: "🌱",
    },
    {
      title: "Specialty Yarn",
      description: "Slub, injected slub, and other specialty yarns for fashion-forward textile applications.",
      counts: "Custom Specs",
      image: "💫",
    },
  ];

  return (
    <section id="products" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 rounded-full text-accent text-sm font-body font-medium mb-4">
            Our Products
          </span>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Premium Yarns for Every Need
          </h2>
          
          <p className="font-body text-lg text-muted-foreground">
            From classic cotton to innovative specialty yarns, we offer a comprehensive range of products to meet diverse textile manufacturing requirements.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-accent/30 transition-all duration-300 card-soft hover:card-elevated"
              style={{ animationDelay: `${index * 0.1}s` }}
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
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
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
        </div>
      </div>
    </section>
  );
};

export default Products;
