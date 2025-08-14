import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      "Digital Billboards",
      "Streetpole Advertising",
      "Campaign Analytics",
      "Creative Services",
      "Mobile Integration"
    ],
    company: [
      "About Us",
      "Our Team",
      "Careers",
      "Press",
      "Partners"
    ],
    support: [
      "Help Center",
      "Contact Support",
      "Documentation",
      "System Status",
      "Privacy Policy"
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/lovable-uploads/55e76238-1068-48fc-8fcc-253e3bcb5566.png" 
                alt="KaLerato Holdings"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Transforming the advertising landscape with innovative digital billboard 
              solutions that connect brands with their audiences.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-foreground/70">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-foreground/70">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@kalerato.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-foreground/70">
                <MapPin className="w-4 h-4 text-primary" />
                <span>123 Business District, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-primary rounded-2xl p-8 mb-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Stay Updated with Industry Insights
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Get the latest trends, tips, and case studies in digital advertising 
            delivered to your inbox monthly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-foreground/60 text-sm">
              © {currentYear} KaLerato Holdings. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 text-foreground/60 hover:text-primary transition-colors hover:bg-primary/10 rounded-lg"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;