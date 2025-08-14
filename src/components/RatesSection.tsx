import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';

const RatesSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "$2,500",
      period: "/month",
      description: "Perfect for small businesses and local campaigns",
      features: [
        "Up to 5 billboard locations",
        "Standard resolution displays",
        "Basic analytics dashboard",
        "Email support",
        "Monthly content updates",
        "Standard scheduling"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$5,500",
      period: "/month",
      description: "Ideal for growing businesses and regional campaigns",
      features: [
        "Up to 15 billboard locations",
        "4K resolution displays",
        "Advanced analytics & reporting",
        "Priority phone support",
        "Weekly content updates",
        "Dynamic scheduling",
        "Mobile integration",
        "Custom branding"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$12,000",
      period: "/month",
      description: "For large corporations and national campaigns",
      features: [
        "Unlimited billboard locations",
        "Premium 4K+ displays",
        "Real-time analytics dashboard",
        "Dedicated account manager",
        "Daily content updates",
        "AI-powered scheduling",
        "Full mobile integration",
        "White-label solutions",
        "API access",
        "24/7 support"
      ],
      popular: false
    }
  ];

  const addOns = [
    { name: "Creative Design Service", price: "$500", period: "/design" },
    { name: "Campaign Strategy Consulting", price: "$1,200", period: "/session" },
    { name: "Advanced Analytics Package", price: "$300", period: "/month" },
    { name: "Priority Support Upgrade", price: "$200", period: "/month" }
  ];

  return (
    <section id="rates" className="py-section bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-heading font-display font-bold text-foreground mb-6">
            Transparent
            <span className="text-transparent bg-gradient-primary bg-clip-text"> Pricing</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect plan for your advertising needs. All plans include 
            premium support and no hidden fees.
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative bg-card border-border hover:shadow-card transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular ? 'ring-2 ring-primary shadow-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-foreground/60">{plan.period}</span>
                </div>
                <p className="text-foreground/70 text-sm">
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? "cta" : "outline"} 
                  className="w-full"
                  size="lg"
                >
                  {plan.popular ? "Get Started Now" : "Choose Plan"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add-on Services */}
        <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Add-on Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-background/50 hover:bg-background/80 transition-all duration-300">
                <h4 className="font-semibold text-foreground mb-2">{addon.name}</h4>
                <div className="text-primary font-bold mb-2">
                  {addon.price}
                  <span className="text-foreground/60 text-sm font-normal">{addon.period}</span>
                </div>
                <Button variant="ghost" size="sm" className="text-xs">
                  Add to Plan
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Pricing CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-2xl p-8 shadow-primary max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-white/90 mb-6">
              We offer flexible pricing for unique requirements, bulk campaigns, 
              and long-term partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glass" size="lg" className="bg-white/20 hover:bg-white/30">
                Request Custom Quote
              </Button>
              <Button variant="glass" size="lg" className="bg-white/20 hover:bg-white/30">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RatesSection;