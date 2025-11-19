import { BarChart3, Users, Award, TrendingUp, Shield, Zap, Calendar, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { InteractiveBadge } from "@/components/ui/InteractiveBadge";
import { ChartDemo } from "@/components/ui/ChartDemo";

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

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card
                className={`group p-6 md:p-8 h-full cursor-pointer border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm ${
                  index === 5 ? 'ring-2 ring-primary/30' : ''
                }`}
              >
                <div
                  className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-3 md:p-4 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                >
                  <feature.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {feature.description}
                </p>

                {feature.title === "Performance Recognition" && (
                  <div className="mt-4 flex justify-center">
                    <InteractiveBadge />
                  </div>
                )}

                {feature.title === "Growth Tracking" && (
                  <div className="mt-4">
                    <ChartDemo />
                  </div>
                )}

                {index === 5 && (
                  <div className="mt-6 p-4 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30 relative overflow-hidden">
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-red-500 text-white animate-pulse">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mr-1 animate-ping"></span>
                        LIVE
                      </Badge>
                    </div>
                    
                    <h4 className="font-bold text-lg mb-3 text-foreground">Upcoming Training</h4>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <Zap className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground font-medium">Various sources of income for MSME's</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">BBS Aud A</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">9:00am - 3:00pm</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-3 border-t border-primary/20">
                      <button className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium text-sm">
                        Register Now
                      </button>
                    </div>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
