import { Target, Eye } from "lucide-react";
import { Card } from "@/components/ui/card";

export function Mission() {
  return (
    <section id="mission" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 gradient-dark opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Purpose</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Driving the digital transformation of small and medium businesses
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <Card className="p-8 md:p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-primary/50 bg-card/80 backdrop-blur-sm animate-fade-in-up group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-3 md:p-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Target className="w-full h-full text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">Mission</h3>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              To empower small business owners with affordable digital tools and practical training 
              that help them work smarter, stay organised, and achieve measurable growth.
            </p>
            <div className="mt-6 pt-6 border-t border-border/50">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Affordable</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Practical</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Growth-Focused</span>
              </div>
            </div>
          </Card>

          <Card className="p-8 md:p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-accent/50 bg-card/80 backdrop-blur-sm animate-fade-in-up group" style={{ animationDelay: "200ms" }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 p-3 md:p-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Eye className="w-full h-full text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">Vision</h3>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              To become the leading platform that enables small businesses to access modern technology, 
              improve their productivity, and gain recognition regardless of their capital size.
            </p>
            <div className="mt-6 pt-6 border-t border-border/50">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Accessible</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Modern</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Inclusive</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
