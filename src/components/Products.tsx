import ScrollReveal from "./ScrollReveal";
import { Badge } from "@/components/ui/badge";
import cottonImg from "@/assets/product-cotton.jpg";
import polyesterImg from "@/assets/product-polyester.jpg";
import pcBlendImg from "@/assets/product-pc-blend.jpg";
import slubImg from "@/assets/product-slub.jpg";
const Products = () => {
  const products = [{
    title: "Pure Cotton Yarn",
    description: "Premium quality 100% cotton yarn in counts ranging from 16s to 50s. Ideal for towels, apparel, and fine textiles. Produced in our dedicated Mill 1 with specialized cotton processing.",
    counts: "16s - 50s",
    image: cottonImg,
    applications: ["Towels", "Apparel", "Home Textiles"]
  }, {
    title: "Pure Polyester Yarn",
    description: "High-strength synthetic polyester yarn offering excellent durability and color fastness. Perfect for industrial applications and modern fabric blends.",
    counts: "16s - 50s",
    image: polyesterImg,
    applications: ["Industrial Fabrics", "Blended Textiles", "Technical Wear"]
  }, {
    title: "Polyester-Cotton Blend",
    description: "Optimized PC blends in 52:48 and 65:35 ratios combining the best properties of both fibers. Excellent for shirting and workwear applications.",
    counts: "16s - 50s",
    image: pcBlendImg,
    applications: ["Shirting", "Workwear", "Uniforms"]
  }, {
    title: "Slub Yarn",
    description: "Specialty textured yarn with intentional thick-and-thin variations creating unique fabric aesthetics. Popular for fashion and decorative textiles.",
    counts: "20s - 40s",
    image: slubImg,
    applications: ["Fashion Wear", "Decorative", "Premium Textiles"]
  }];
  return <section id="products" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 rounded-full text-accent text-sm font-body font-medium mb-4">
            Our Products
          </span>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Premium Quality Yarns
          </h2>
          
          <p className="font-body text-lg text-muted-foreground">
            We manufacture a comprehensive range of greige yarns using the finest raw materials and cutting-edge technology, ensuring consistent quality for domestic and international markets.
          </p>
        </ScrollReveal>

        {/* Products Grid - 2x2 layout */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {products.map((product, index) => <ScrollReveal key={product.title} delay={index * 0.1}>
              <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/30 transition-all duration-300 card-soft hover:card-elevated h-full">
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                
                {/* Content */}
                <div className="p-6 lg:p-8">
                  <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-3">
                    {product.title}
                  </h3>
                  
                  <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>
                  
                  <div className="inline-block px-3 py-1 bg-accent/10 rounded-full text-accent text-xs font-body font-medium mb-5">
                    Count: {product.counts}
                  </div>
                  
                  {/* Applications */}
                  <div className="pt-4 border-t border-border">
                    <span className="block text-xs font-body text-muted-foreground uppercase tracking-wider mb-2">
                      Applications
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map(app => <Badge key={app} variant="outline" className="font-body text-xs font-normal border-border text-foreground hover:bg-accent/10">
                          {app}
                        </Badge>)}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>)}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.4} className="text-center mt-12">
          <p className="font-body text-muted-foreground mb-4">
            Need a custom yarn solution? We specialize in bespoke manufacturing.
          </p>
          <a href="#contact" className="inline-flex items-center font-body font-medium text-accent hover:text-accent/80 transition-colors">
            Request custom specifications
            <span className="ml-2">→</span>
          </a>
        </ScrollReveal>
      </div>
    </section>;
};
export default Products;