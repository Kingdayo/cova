import { BarChart3, Users, Award, TrendingUp, Shield, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: BarChart3,
    title: "Business Analytics",
    description: "Track sales, invoicing, and performance insights all in one intuitive dashboard.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Customer Management",
    description: "Manage customer records efficiently with our simple, user-friendly system.",
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: Award,
    title: "Performance Recognition",
    description: "Earn badges and gain visibility for your achievements and business milestones.",
    color: "from-teal-500 to-green-500",
  },
  {
    icon: TrendingUp,
    title: "Growth Tracking",
    description: "Monitor your business growth with measurable metrics and actionable insights.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Your business data is protected with enterprise-grade security measures.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Zap,
    title: "Easy Training",
    description: "Access practical training materials designed specifically for small businesses.",
    color: "from-purple-500 to-pink-500",
  },
];

export function Features() {
  return (
    <section id="offers" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage, grow, and get recognized for your business success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group p-6 md:p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-3 md:p-4 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
              >
                <feature.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
