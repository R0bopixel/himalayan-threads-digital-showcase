import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ScrollReveal from "./ScrollReveal";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Head Office",
      details: ["Industrial Area", "Goodi, Himachal Pradesh", "India"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 1795 244 XXX", "+91 1795 244 XXX"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["mis@himalayanspinners.com", "info@himalayanspinners.com"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Monday - Saturday", "9:00 AM - 6:00 PM IST"],
    },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 section-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <ScrollReveal direction="left">
            <div>
              <span className="inline-block px-4 py-1.5 bg-accent/10 rounded-full text-accent text-sm font-body font-medium mb-4">
                Get in Touch
              </span>
              
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                Let's Discuss Your Requirements
              </h2>
              
              <p className="font-body text-lg text-muted-foreground mb-10">
                Whether you need bulk orders, custom specifications, or just want to learn more about our products, our team is here to help.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <ScrollReveal key={info.title} delay={0.1 * index}>
                    <div className="bg-card rounded-xl p-6 card-soft h-full">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                        <info.icon className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="font-body text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="bg-card rounded-2xl p-8 lg:p-10 card-elevated">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Send us a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-2 block">
                      Your Name
                    </label>
                    <Input 
                      placeholder="John Doe" 
                      className="bg-background border-border font-body"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-2 block">
                      Company Name
                    </label>
                    <Input 
                      placeholder="Your Company" 
                      className="bg-background border-border font-body"
                    />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-2 block">
                      Email Address
                    </label>
                    <Input 
                      type="email"
                      placeholder="john@company.com" 
                      className="bg-background border-border font-body"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-2 block">
                      Phone Number
                    </label>
                    <Input 
                      type="tel"
                      placeholder="+1 234 567 890" 
                      className="bg-background border-border font-body"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-2 block">
                    Product Interest
                  </label>
                  <Input 
                    placeholder="e.g., Pure Cotton Yarn, Polyester Cotton Mix" 
                    className="bg-background border-border font-body"
                  />
                </div>

                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    className="bg-background border-border font-body resize-none"
                  />
                </div>

                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body text-base py-6">
                  Send Message
                </Button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
