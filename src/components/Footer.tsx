
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-deep-900/80 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-3xl font-playfair font-bold text-white">Orca's</h3>
            <p className="text-blue-200 font-inter leading-relaxed">
              Premium ocean-inspired merchandise that celebrates marine life while 
              supporting ocean conservation efforts worldwide.
            </p>
            <div className="flex space-x-4">
              <SocialButton icon={Facebook} />
              <SocialButton icon={Instagram} />
              <SocialButton icon={Twitter} />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-playfair font-semibold text-white">Quick Links</h4>
            <div className="space-y-3">
              <FooterLink text="Shop All" />
              <FooterLink text="New Arrivals" />
              <FooterLink text="Best Sellers" />
              <FooterLink text="Sale" />
              <FooterLink text="Gift Cards" />
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            <h4 className="text-xl font-playfair font-semibold text-white">Categories</h4>
            <div className="space-y-3">
              <FooterLink text="Jewelry" />
              <FooterLink text="Artwork" />
              <FooterLink text="Accessories" />
              <FooterLink text="Home Decor" />
              <FooterLink text="Apparel" />
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-xl font-playfair font-semibold text-white">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-300" />
                <span className="text-blue-200 font-inter">hello@orcas.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-300" />
                <span className="text-blue-200 font-inter">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-300" />
                <span className="text-blue-200 font-inter">Ocean City, CA 90210</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-blue-300 font-inter text-center md:text-left">
            © 2024 Orca's. All rights reserved. Made with 🌊 for ocean lovers.
          </p>
          <div className="flex space-x-6">
            <FooterLink text="Privacy Policy" />
            <FooterLink text="Terms of Service" />
            <FooterLink text="Cookie Policy" />
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialButtonProps {
  icon: React.ComponentType<any>;
}

const SocialButton = ({ icon: Icon }: SocialButtonProps) => {
  return (
    <button className="w-10 h-10 glass-dark rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
      <Icon className="h-5 w-5 text-white" />
    </button>
  );
};

interface FooterLinkProps {
  text: string;
}

const FooterLink = ({ text }: FooterLinkProps) => {
  return (
    <a
      href="#"
      className="block text-blue-200 font-inter hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
    >
      {text}
    </a>
  );
};

export default Footer;
