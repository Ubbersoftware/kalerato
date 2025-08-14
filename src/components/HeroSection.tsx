import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import heroImage from '@/assets/hero-billboard.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Digital billboard advertising"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-hero font-display font-bold text-foreground mb-6 animate-fade-in">
            Transform Your
            <span className="text-transparent bg-gradient-primary bg-clip-text"> Advertising </span>
            Experience
          </h1>
          
          <p className="text-subheading text-foreground/90 mb-8 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in delay-150">
            Dynamic digital billboards and streetpole advertising that capture attention, 
            drive engagement, and deliver measurable results for your brand.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in delay-300">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => scrollToSection('contact')}
            >
              Start Your Campaign
            </Button>
            
            <Button 
              variant="glass" 
              size="xl"
              onClick={() => scrollToSection('services')}
            >
              <Play className="mr-2" size={20} />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in delay-500">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-foreground/80">Active Displays</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-foreground/80">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-foreground/80">Campaign Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-primary/60 rounded-full animate-float delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-1 h-1 bg-primary rounded-full animate-float delay-2000"></div>
    </section>
  );
};

export default HeroSection;