
import { ArrowRight, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 mb-8 animate-float">
          <Star className="h-4 w-4 text-yellow-300 fill-current" />
          <span className="text-white font-inter text-sm">Premium Ocean Collection</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
          Dive Into 
          <span className="block ocean-text-gradient">Oceanic Luxury</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-blue-100 font-inter font-light mb-8 max-w-3xl mx-auto leading-relaxed">
          Discover premium merchandise inspired by the depths of the ocean. 
          From elegant whale-themed accessories to coral-inspired jewelry.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="group flex items-center space-x-3 px-8 py-4 ocean-gradient rounded-full text-white font-inter font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
            <span>Explore Collection</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <button className="group flex items-center space-x-3 px-8 py-4 glass-card text-white font-inter font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <span>Watch Story</span>
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
              <div className="w-0 h-0 border-l-[6px] border-l-white border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent ml-0.5" />
            </div>
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <StatCard number="10K+" label="Happy Customers" />
          <StatCard number="500+" label="Ocean Products" />
          <StatCard number="50+" label="Countries Served" />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 glass rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 glass rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 glass rounded-full animate-float" style={{ animationDelay: '4s' }} />
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
