import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-machinery.jpg";
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Premium quality yarn and textiles" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-gradient opacity-75" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <motion.span initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full text-secondary-foreground text-sm font-body font-medium mb-6">
            Trusted Since 1985
          </motion.span>
          
          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7,
          delay: 0.3
        }} className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Spinning Excellence from the{" "}
            <span className="text-secondary">Heart of Himalayas</span>
          </motion.h1>
          
          <motion.p initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7,
          delay: 0.4
        }} className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-8">One of the most modern greige yarn spinning units in the country. Thousands of spindles and open-end rotors producing cotton, polyester, and blended yarns from counts 16s to 50s.</motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7,
          delay: 0.5
        }} className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-body text-base px-8 group">
              Explore Products
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-body text-base px-8">
              Our Story
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7,
          delay: 0.6
        }} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-primary-foreground/20">
            {[{
            value: "4",
            label: "Spinning Mills"
          }, {
            value: "1000s",
            label: "Spindles & Rotors"
          }, {
            value: "16-50s",
            label: "Yarn Count Range"
          }, {
            value: "ISO",
            label: "Certified Quality"
          }].map((stat, index) => <motion.div key={stat.label} initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.5,
            delay: 0.7 + index * 0.1
          }}>
                <div className="font-display text-3xl md:text-4xl font-bold text-secondary">{stat.value}</div>
                <div className="font-body text-sm text-primary-foreground/70 mt-1">{stat.label}</div>
              </motion.div>)}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 1,
      delay: 1
    }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{
        y: [0, 8, 0]
      }} transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }} className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary-foreground/50" />
        </motion.div>
      </motion.div>
    </section>;
};
export default Hero;