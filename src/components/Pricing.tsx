import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const pricingPlans = [
  {
    title: "Silver",
    description: "Basic Features",
    price: "$10/mo",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    isPopular: false,
  },
  {
    title: "Gold",
    description: "Advanced Features",
    price: "$20/mo",
    features: ["All Silver Features", "Feature 4", "Feature 5", "Feature 6"],
    isPopular: true,
  },
  {
    title: "Diamond",
    description: "Premium Features",
    price: "$30/mo",
    features: ["All Gold Features", "Feature 7", "Feature 8", "Feature 9"],
    isPopular: false,
  },
];

const PricingCard = ({ plan, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -10,
        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
        borderColor: "hsl(var(--primary))",
      }}
      className="border-2 border-transparent rounded-lg"
    >
      <Card className={`h-full flex flex-col ${plan.isPopular ? "border-primary" : ""}`}>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>{plan.title}</CardTitle>
            {plan.isPopular && <Badge>Most Popular</Badge>}
          </div>
          <CardDescription>{plan.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-4xl font-bold">{plan.price}</p>
          <ul className="mt-4 space-y-2 text-left">
            {plan.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Embark on Your Journey</Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Unlock Your Potential</h2>
        <p className="text-lg text-muted-foreground mt-2">
          Choose the plan that's right for you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
