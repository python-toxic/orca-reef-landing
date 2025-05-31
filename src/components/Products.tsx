import { Star, Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const Products = () => {
  const [likedProducts, setLikedProducts] = useState<Set<number>>(new Set());
  const { addToCart } = useCart();
  const { toast } = useToast();

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
      price: parseFloat(product.price.replace('$', '')),
      image: product.image
    });
    
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const products = [
    {
      id: 1,
      name: "Whale Song Pendant",
      price: "$89.99",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=800&q=80",
      category: "Jewelry"
    },
    {
      id: 2,
      name: "Ocean Waves Print",
      price: "$45.99",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
      category: "Art"
    },
    {
      id: 3,
      name: "Coral Reef Earrings",
      price: "$65.99",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=800&q=80",
      category: "Jewelry"
    }
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-playfair font-bold text-white mb-6">
            Featured <span className="ocean-text-gradient">Collection</span>
          </h2>
          <p className="text-xl text-blue-200 font-inter max-w-3xl mx-auto">
            Handpicked treasures from the depths of creativity, each piece crafted 
            to bring the ocean's beauty into your life.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              {...product} 
              isLiked={likedProducts.has(product.id)}
              onToggleLike={() => toggleLike(product.id)}
              onAddToCart={() => handleAddToCart(product)}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/products">
            <button className="group inline-flex items-center space-x-3 px-8 py-4 ocean-gradient rounded-full text-white font-inter font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
              <span>View All Products</span>
              <ShoppingCart className="h-5 w-5 group-hover:animate-bounce" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  rating: number;
  image: string;
  category: string;
  isLiked: boolean;
  onToggleLike: () => void;
  onAddToCart: () => void;
}

const ProductCard = ({ name, price, rating, image, category, isLiked, onToggleLike, onAddToCart }: ProductCardProps) => {
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
    <div className="group glass-card overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
      {/* Image */}
      <div className="relative overflow-hidden h-64">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 glass-dark px-3 py-1 rounded-full">
          <span className="text-white text-sm font-inter">{category}</span>
        </div>

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

        {/* Quick Add Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button 
            onClick={handleAddToCart}
            className="px-6 py-2 ocean-gradient rounded-full text-white font-inter font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            Quick Add
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-playfair font-semibold text-white mb-2">
          {name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center space-x-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-400"
                }`}
              />
            ))}
          </div>
          <span className="text-blue-200 text-sm font-inter">({rating})</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-playfair font-bold text-white">{price}</span>
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
