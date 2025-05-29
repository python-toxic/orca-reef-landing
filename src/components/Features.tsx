
import { Waves, Shield, Heart, Truck } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Waves,
      title: "Ocean Inspired",
      description: "Every piece tells a story of the deep blue sea, crafted with marine life in mind."
    },
    {
      icon: Shield,
      title: "Premium Quality",
      description: "Sustainable materials that honor the ocean while delivering exceptional durability."
    },
    {
      icon: Heart,
      title: "Marine Conservation",
      description: "10% of every purchase goes directly to ocean conservation efforts worldwide."
    },
    {
      icon: Truck,
      title: "Global Shipping",
      description: "Free shipping worldwide with carbon-neutral delivery options available."
    }
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-playfair font-bold text-white mb-6">
            Why Choose <span className="ocean-text-gradient">Orca's</span>
          </h2>
          <p className="text-xl text-blue-200 font-inter max-w-3xl mx-auto">
            We're more than just a store – we're ocean advocates creating beautiful products 
            that celebrate and protect marine life.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="group glass-card p-6 hover:transform hover:scale-105 transition-all duration-300">
      {/* Icon */}
      <div className="mb-6">
        <div className="w-16 h-16 mx-auto ocean-gradient rounded-full flex items-center justify-center group-hover:animate-pulse">
          <Icon className="h-8 w-8 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="text-center">
        <h3 className="text-xl font-playfair font-semibold text-white mb-3">
          {title}
        </h3>
        <p className="text-blue-200 font-inter leading-relaxed">
          {description}
        </p>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 rounded-2xl shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default Features;
