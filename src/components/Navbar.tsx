
import { ShoppingCart, Compass, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-2xl md:text-3xl font-playfair font-bold text-white">
                Orca's
              </h1>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              <NavButton 
                icon={ShoppingCart} 
                text="Shop" 
                to="/products"
                isActive={location.pathname === "/products"}
              />
              <NavButton 
                icon={Compass} 
                text="Explore" 
                to="/explore"
                isActive={location.pathname === "/explore"}
              />
              <NavButton 
                icon={Mail} 
                text="Contact" 
                to="/contact"
                isActive={location.pathname === "/contact"}
              />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="glass-dark p-2 rounded-full hover:bg-white/20 transition-all duration-300">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

interface NavButtonProps {
  icon: React.ComponentType<any>;
  text: string;
  to: string;
  isActive?: boolean;
}

const NavButton = ({ icon: Icon, text, to, isActive }: NavButtonProps) => {
  return (
    <Link to={to}>
      <button className={`group flex items-center space-x-2 px-4 py-2 rounded-full glass-dark hover:bg-white/20 transition-all duration-300 transform hover:scale-105 ${isActive ? 'bg-white/20' : ''}`}>
        <Icon className="h-4 w-4 text-white group-hover:text-blue-200 transition-colors duration-300" />
        <span className="text-white font-inter font-medium group-hover:text-blue-200 transition-colors duration-300">
          {text}
        </span>
        <div className="absolute inset-0 rounded-full shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </button>
    </Link>
  );
};

export default Navbar;
