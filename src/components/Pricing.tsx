import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Unlock Your Potential</h2>
        <p className="text-lg text-muted-foreground mt-2">
          Choose the plan that's right for you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Silver</CardTitle>
              <CardDescription>Basic Features</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">$10/mo</p>
              <ul className="mt-4 space-y-2 text-left">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button>Embark on Your Journey</Button>
            </CardFooter>
          </Card>
          <Card className="border-primary">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Gold</CardTitle>
                <Badge>Most Popular</Badge>
              </div>
              <CardDescription>Advanced Features</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">$20/mo</p>
              <ul className="mt-4 space-y-2 text-left">
                <li>All Silver Features</li>
                <li>Feature 4</li>
                <li>Feature 5</li>
                <li>Feature 6</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button>Embark on Your Journey</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Diamond</CardTitle>
              <CardDescription>Premium Features</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">$30/mo</p>
              <ul className="mt-4 space-y-2 text-left">
                <li>All Gold Features</li>
                <li>Feature 7</li>
                <li>Feature 8</li>
                <li>Feature 9</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button>Embark on Your Journey</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};
