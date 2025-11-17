import { CheckCircle2 } from "lucide-react";

export function About() {
  const benefits = [
    "Affordable digital tools designed for MSMEs",
    "Simple, user-friendly technology anyone can use",
    "All-in-one platform for invoicing, records, and tracking",
    "Performance recognition and business visibility",
    "Practical training and ongoing support",
    "Scalable solutions that grow with your business",
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                COVA Solutions
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              COVA Solutions is an affordable digital platform created to help small and medium-scale 
              businesses thrive through improved technology and growth recognition.
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              We bridge the gap between traditional business management and modern technology by 
              offering simple, user-friendly tools that help businesses manage key operations—from 
              invoicing and customer records to sales tracking and performance insights—all in one place.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We make business management easier with smart technology and celebrate success through 
              badges and visibility, helping SMEs work smarter, gain recognition, and grow affordably.
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Why Choose Us?</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300"
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-base md:text-lg text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
