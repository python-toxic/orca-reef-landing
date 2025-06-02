import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Star, Heart, ShoppingCart, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { products, categories } from "@/data/products";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const [likedProducts, setLikedProducts] = useState<Set<number>>(new Set());
  const { addToCart } = useCart();
  const { toast } = useToast();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleLike = (productId: number) => {
    setLikedProducts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

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
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-900/90 via-deep-900/40 to-deep-900/60" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        
        {/* Page Header */}
        <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-4xl sm:text-6xl font-playfair font-bold text-white mb-6">
                Ocean <span className="ocean-text-gradient">Collection</span>
              </h1>
              <p className="text-xl text-blue-200 font-inter max-w-3xl mx-auto">
                Discover premium ocean-inspired products crafted for marine enthusiasts and ocean lovers.
              </p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="px-4 sm:px-6 lg:px-8 mb-8">
          <div className="max-w-7xl mx-auto">
            <div className={`flex flex-wrap gap-4 justify-center mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-inter font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'ocean-gradient text-white shadow-lg'
                      : 'glass-dark text-white hover:bg-white/20'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  index={index}
                  isVisible={isVisible}
                  isLiked={likedProducts.has(product.id)}
                  onToggleLike={() => toggleLike(product.id)}
                  onAddToCart={() => handleAddToCart(product)}
                />
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    rating: number;
    reviews: number;
    image: string;
    category: string;
    badge?: string;
  };
  index: number;
  isVisible: boolean;
  isLiked: boolean;
  onToggleLike: () => void;
  onAddToCart: () => void;
}

const ProductCard = ({ product, index, isVisible, isLiked, onToggleLike, onAddToCart }: ProductCardProps) => {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    onAddToCart();
    
    // Reset animation after delay
    setTimeout(() => {
      setIsAdding(false);
    }, 600);
  };

  return (
    <div 
      className={`group glass-card overflow-hidden hover:transform hover:scale-105 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-64">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4 glass-dark px-3 py-1 rounded-full">
            <span className="text-white text-sm font-inter font-medium">{product.badge}</span>
          </div>
        )}

        {/* Wishlist Button */}
        <button 
          onClick={onToggleLike}
          className="absolute top-4 right-4 w-10 h-10 glass-dark rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
        >
          <Heart 
            className={`h-5 w-5 transition-all duration-300 ${
              isLiked 
                ? "text-red-500 fill-red-500 scale-110" 
                : "text-white hover:text-red-300"
            }`} 
          />
        </button>

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link to={`/products/${product.id}`}>
            <button className="px-6 py-2 ocean-gradient rounded-full text-white font-inter font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              View Product
            </button>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-playfair font-semibold text-white mb-2">
          {product.name}
        </h3>
        
        {/* Rating */}
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

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-playfair font-bold text-white">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-gray-400 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <button 
            onClick={handleAddToCart}
            className={`w-10 h-10 ocean-gradient rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 ${
              isAdding ? 'animate-pulse scale-110' : 'hover:scale-110'
            }`}
          >
            <ShoppingCart className={`h-5 w-5 text-white transition-transform duration-300 ${
              isAdding ? 'animate-bounce' : ''
            }`} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
