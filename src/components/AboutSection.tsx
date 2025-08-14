import { Card, CardContent } from '@/components/ui/card';
import { Target, Zap, Award, Users } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: "Strategic Placement",
      description: "Prime locations with maximum visibility and foot traffic to ensure your message reaches the right audience."
    },
    {
      icon: Zap,
      title: "Dynamic Content",
      description: "Real-time content updates, weather-responsive ads, and time-based messaging for maximum engagement."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "High-resolution displays with vibrant colors and crystal-clear imagery that make your brand stand out."
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Dedicated account managers and 24/7 technical support to ensure your campaigns run flawlessly."
    }
  ];

  return (
    <section id="about" className="py-section bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-heading font-display font-bold text-foreground mb-6">
            Why Choose 
            <span className="text-transparent bg-gradient-primary bg-clip-text"> KaLerato Holdings</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            With over a decade of experience in outdoor advertising, we've revolutionized 
            the digital billboard industry with cutting-edge technology and strategic insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300 hover:transform hover:scale-105">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-primary rounded-lg shadow-primary">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                To transform the advertising landscape by providing innovative digital billboard 
                solutions that connect brands with their audiences in meaningful, impactful ways. 
                We believe in the power of strategic outdoor advertising to drive real business results.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground/80">Industry-leading technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground/80">Data-driven campaign optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground/80">Sustainable advertising practices</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-primary rounded-2xl p-8 shadow-primary">
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-2">10+</div>
                  <div className="text-white/90 mb-6">Years of Excellence</div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-semibold">1000+</div>
                      <div className="text-white/80">Campaigns</div>
                    </div>
                    <div>
                      <div className="font-semibold">50+</div>
                      <div className="text-white/80">Cities</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;