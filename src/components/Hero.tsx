import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
export function Hero() {
  const scrollToOffers = () => {
    document.querySelector("#offers")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 gradient-dark opacity-90"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{
      animationDelay: "1s"
    }}></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Empower Your Business with{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Smart Digital Tools
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Affordable technology and practical training that helps small and medium businesses work smarter, stay organized, and achieve measurable growth.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" onClick={scrollToOffers} className="gradient-primary text-white hover:opacity-90 transition-all duration-300 hover:scale-105 glow-effect group px-8 py-6 text-lg">
              Explore Solutions
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToContact} className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 px-8 py-6 text-lg">
              Get Started
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-border/50">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm md:text-base text-muted-foreground">Businesses Empowered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">95%</div>
              <div className="text-sm md:text-base text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm md:text-base text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}