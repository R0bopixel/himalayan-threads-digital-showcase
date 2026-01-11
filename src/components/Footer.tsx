import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#" },
      { name: "Careers", href: "#" },
      { name: "News", href: "#" },
    ],
    products: [
      { name: "Cotton Yarn", href: "#products" },
      { name: "Blended Yarn", href: "#products" },
      { name: "Organic Yarn", href: "#products" },
      { name: "Specialty Yarn", href: "#products" },
    ],
    resources: [
      { name: "Quality Standards", href: "#quality" },
      { name: "Certifications", href: "#quality" },
      { name: "Technical Specs", href: "#" },
      { name: "Sustainability", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-secondary-foreground font-display font-bold text-lg">HS</span>
              </div>
              <div>
                <span className="font-display text-xl font-semibold">Himalayan</span>
                <span className="font-display text-xl font-medium text-secondary ml-1">Spinners</span>
              </div>
            </div>
            
            <p className="font-body text-primary-foreground/70 max-w-sm mb-6">
              Crafting premium quality yarns since 1985. From the heart of Himalayas to textile manufacturers worldwide.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                  aria-label="Social media link"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-primary-foreground/50">
            © 2024 Himalayan Spinners Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-sm text-primary-foreground/50 hover:text-primary-foreground/70 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-sm text-primary-foreground/50 hover:text-primary-foreground/70 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
