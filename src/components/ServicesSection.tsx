import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Monitor, MapPin, BarChart3, Smartphone, Clock, Shield } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Monitor,
      title: "Digital Billboard Networks",
      description: "Premium LED displays in high-traffic locations with full HD resolution and weather-resistant technology.",
      features: ["4K Resolution", "Weather Resistant", "Remote Control", "24/7 Monitoring"]
    },
    {
      icon: MapPin,
      title: "Streetpole Advertising",
      description: "Strategic streetpole placements for maximum visibility and targeted audience reach in urban environments.",
      features: ["Prime Locations", "Targeted Demographics", "High Visibility", "Cost Effective"]
    },
    {
      icon: BarChart3,
      title: "Campaign Analytics",
      description: "Comprehensive reporting and analytics to track campaign performance and optimize your advertising ROI.",
      features: ["Real-time Data", "Audience Analytics", "ROI Tracking", "Custom Reports"]
    }
  ];

  const additionalServices = [
    { icon: Smartphone, title: "Mobile Integration", description: "QR codes and mobile-responsive campaigns" },
    { icon: Clock, title: "Scheduling", description: "Time-based and event-triggered content delivery" },
    { icon: Shield, title: "Brand Safety", description: "Content moderation and brand protection" }
  ];

  return (
    <section id="services" className="py-section bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-heading font-display font-bold text-foreground mb-6">
            Our 
            <span className="text-transparent bg-gradient-primary bg-clip-text"> Services</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital advertising solutions designed to amplify your brand's 
            presence and drive meaningful engagement with your target audience.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-card transition-all duration-300 hover:transform hover:scale-105 group">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto p-4 bg-gradient-primary rounded-full shadow-primary mb-4 group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center space-x-2 text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Additional Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-background/50 hover:bg-background/80 transition-all duration-300">
                <div className="mx-auto p-3 bg-primary/10 rounded-full mb-4 w-fit">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{service.title}</h4>
                <p className="text-sm text-foreground/70">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-2xl p-8 shadow-primary max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Launch Your Campaign?
            </h3>
            <p className="text-white/90 mb-6">
              Our team of experts is ready to help you create a powerful advertising 
              campaign that delivers results.
            </p>
            <Button variant="glass" size="lg" className="bg-white/20 hover:bg-white/30">
              Get Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;