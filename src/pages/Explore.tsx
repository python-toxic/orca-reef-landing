
import { useState, useEffect } from "react";
import { Star, Heart, ShoppingCart, TrendingUp, Users, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";

const Explore = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { addToCart } = useCart();

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mock user preferences and browsing history for recommendations
  const userPreferences = {
    favoriteCategories: ['jewelry', 'art'],
    priceRange: [30, 150],
    recentlyViewed: [1, 3, 5],
    wishlist: [2, 4]
  };

  const allProducts = [
    {
      id: 1,
      name: "Ocean Pearl Necklace",
      price: 89.99,
      rating: 4.8,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=800&q=80",
      category: "jewelry",
      popularity: 95,
      tags: ["elegant", "pearl", "ocean-inspired"]
    },
    {
      id: 2,
      name: "Whale Song Canvas",
      price: 45.99,
      rating: 4.9,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
      category: "art",
      popularity: 87,
      tags: ["artistic", "whale", "canvas"]
    },
    {
      id: 3,
      name: "Coral Ring Set",
      price: 65.99,
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=800&q=80",
      category: "jewelry",
      popularity: 92,
      tags: ["coral", "ring", "set"]
    },
    {
      id: 4,
      name: "Deep Sea Photography",
      price: 35.99,
      rating: 4.6,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&q=80",
      category: "art",
      popularity: 78,
      tags: ["photography", "deep-sea", "print"]
    },
    {
      id: 5,
      name: "Seashell Earrings",
      price: 29.99,
      rating: 4.5,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
      category: "jewelry",
      popularity: 85,
      tags: ["seashell", "earrings", "summer"]
    },
    {
      id: 6,
      name: "Marine Life Sculpture",
      price: 199.99,
      rating: 4.9,
      reviews: 45,
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=800&q=80",
      category: "art",
      popularity: 93,
      tags: ["sculpture", "marine", "luxury"]
    }
  ];

  // Recommendation algorithms
  const getRecommendedProducts = () => {
    // Content-based filtering
    const categoryMatches = allProducts.filter(product => 
      userPreferences.favoriteCategories.includes(product.category)
    );

    // Price-based filtering
    const priceMatches = allProducts.filter(product => 
      product.price >= userPreferences.priceRange[0] && 
      product.price <= userPreferences.priceRange[1]
    );

    // Popularity-based recommendations
    const popularProducts = allProducts
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, 3);

    return {
      forYou: categoryMatches.slice(0, 3),
      trending: popularProducts,
      similarToViewed: allProducts.filter(product => 
        userPreferences.recentlyViewed.includes(product.id)
      )
    };
  };

  const recommendations = getRecommendedProducts();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Ocean Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-900 via-ocean-800 to-deep-950" />
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=2000&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-900/90 via-deep-900/40 to-deep-900/60" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-4xl sm:text-6xl font-playfair font-bold text-white mb-6">
                Explore & <span className="ocean-text-gradient">Discover</span>
              </h1>
              <p className="text-xl text-blue-200 font-inter max-w-3xl mx-auto mb-8">
                Personalized recommendations based on your preferences and ocean exploration journey.
              </p>
            </div>
          </div>
        </div>

        {/* Recommendations Sections */}
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="max-w-7xl mx-auto space-y-16">
            
            {/* For You Section */}
            <RecommendationSection
              title="Recommended For You"
              subtitle="Based on your favorite categories and browsing history"
              icon={Sparkles}
              products={recommendations.forYou}
              isVisible={isVisible}
              delay={200}
              onAddToCart={addToCart}
            />

            {/* Trending Section */}
            <RecommendationSection
              title="Trending Now"
              subtitle="Most popular items among ocean enthusiasts"
              icon={TrendingUp}
              products={recommendations.trending}
              isVisible={isVisible}
              delay={400}
              onAddToCart={addToCart}
            />

            {/* Community Favorites */}
            <RecommendationSection
              title="Community Favorites"
              subtitle="Highly rated by our marine community"
              icon={Users}
              products={allProducts.filter(p => p.rating >= 4.8)}
              isVisible={isVisible}
              delay={600}
              onAddToCart={addToCart}
            />

          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

interface RecommendationSectionProps {
  title: string;
  subtitle: string;
  icon: any;
  products: any[];
  isVisible: boolean;
  delay: number;
  onAddToCart: (item: any) => void;
}

const RecommendationSection = ({ 
  title, 
  subtitle, 
  icon: Icon, 
  products, 
  isVisible, 
  delay, 
  onAddToCart 
}: RecommendationSectionProps) => {
  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${delay}ms` }}>
      <div className="flex items-center space-x-3 mb-6">
        <Icon className="h-8 w-8 text-blue-300" />
        <div>
          <h2 className="text-3xl font-playfair font-bold text-white">{title}</h2>
          <p className="text-blue-200 font-inter">{subtitle}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            index={index}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

interface ProductCardProps {
  product: any;
  index: number;
  onAddToCart: (item: any) => void;
}

const ProductCard = ({ product, index, onAddToCart }: ProductCardProps) => {
  const handleAddToCart = () => {
    onAddToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  return (
    <div className="group glass-card overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
      <div className="relative overflow-hidden h-64">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        <button className="absolute top-4 right-4 w-10 h-10 glass-dark rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
          <Heart className="h-5 w-5 text-white hover:text-red-300 transition-colors duration-300" />
        </button>

        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button 
            onClick={handleAddToCart}
            className="px-6 py-2 ocean-gradient rounded-full text-white font-inter font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-playfair font-semibold text-white mb-2">
          {product.name}
        </h3>
        
        <div className="flex items-center space-x-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-400"
                }`}
              />
            ))}
          </div>
          <span className="text-blue-200 text-sm font-inter">({product.reviews})</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-playfair font-bold text-white">
            ${product.price}
          </span>
          <div className="flex space-x-1">
            {product.tags?.slice(0, 2).map((tag: string, i: number) => (
              <span key={i} className="text-xs bg-blue-500/20 text-blue-200 px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
