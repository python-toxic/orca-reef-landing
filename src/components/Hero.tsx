
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Badge - with slower animation */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 mb-8 animate-[float_8s_ease-in-out_infinite]">
            <Star className="h-4 w-4 text-yellow-300 fill-current" />
            <span className="text-white font-inter text-sm">Premium Ocean Collection</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
            Dive Into 
            <span className="block ocean-text-gradient">Oceanic Luxury</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xl sm:text-2xl text-blue-100 font-inter font-light mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover premium merchandise inspired by the depths of the ocean. 
            From elegant whale-themed accessories to coral-inspired jewelry.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/explore">
              <button className="group flex items-center space-x-3 px-8 py-4 ocean-gradient rounded-full text-white font-inter font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
                <span>Explore Collection</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
            
            <button className="group flex items-center space-x-3 px-8 py-4 glass-card text-white font-inter font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <span>Watch Story</span>
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                <div className="w-0 h-0 border-l-[6px] border-l-white border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent ml-0.5" />
              </div>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <StatCard number="10K+" label="Happy Customers" />
            <StatCard number="500+" label="Ocean Products" />
            <StatCard number="50+" label="Countries Served" />
          </div>
        </div>
      </div>

      {/* Floating Elements - Repositioned for minimalistic look */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left side bubbles */}
        <div className="absolute top-1/4 left-8 w-24 h-24 glass rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-1/3 left-16 w-16 h-16 glass rounded-full animate-float" style={{ animationDelay: '4s' }} />
        
        {/* Right side bubbles */}
        <div className="absolute top-1/3 right-8 w-20 h-20 glass rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-12 w-28 h-28 glass rounded-full animate-float" style={{ animationDelay: '6s' }} />
        
        {/* Additional corner bubbles for depth */}
        <div className="absolute top-16 left-32 w-12 h-12 glass rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-16 right-24 w-14 h-14 glass rounded-full animate-float" style={{ animationDelay: '3s' }} />
      </div>
    </section>
  );
};

interface StatCardProps {
  number: string;
  label: string;
}

const StatCard = ({ number, label }: StatCardProps) => {
  return (
    <div className="text-center">
      <div className="text-3xl sm:text-4xl font-playfair font-bold text-white mb-2">
        {number}
      </div>
      <div className="text-blue-200 font-inter">
        {label}
      </div>
    </div>
  );
};

export default Hero;
