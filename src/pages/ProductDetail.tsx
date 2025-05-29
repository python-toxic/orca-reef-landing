
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, Heart, ShoppingCart, Plus, Minus } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Mock product data - in a real app, this would be fetched based on the ID
  const product = {
    id: id,
    name: "Professional Diving Mask",
    price: 89.99,
    originalPrice: 120.00,
    rating: 4.8,
    reviews: 124,
    images: [
      "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Experience the ocean like never before with our professional-grade diving mask. Crafted from premium materials with anti-fog technology and a comfortable silicone seal.",
    features: [
      "Anti-fog tempered glass lens",
      "Premium silicone skirt",
      "Adjustable strap system",
      "UV protection",
      "Professional grade materials"
    ],
    inStock: true,
    badge: "Best Seller"
  };

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
        
        <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Back Button */}
            <Link to="/products" className="inline-flex items-center space-x-2 text-blue-200 hover:text-white transition-colors duration-300 mb-8">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-inter">Back to Products</span>
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="glass-card overflow-hidden rounded-2xl">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {product.images.slice(1).map((image, index) => (
                    <div key={index} className="glass-card overflow-hidden rounded-xl">
                      <img
                        src={image}
                        alt={`${product.name} ${index + 2}`}
                        className="w-full h-32 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="glass-card p-8">
                {/* Badge */}
                {product.badge && (
                  <span className="inline-block glass-dark px-3 py-1 rounded-full text-white text-sm font-inter font-medium mb-4">
                    {product.badge}
                  </span>
                )}

                <h1 className="text-3xl font-playfair font-bold text-white mb-4">
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-6">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-blue-200 font-inter">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-3xl font-playfair font-bold text-white">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-400 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-blue-200 font-inter leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-lg font-playfair font-semibold text-white mb-3">
                    Features:
                  </h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-blue-200 font-inter flex items-center">
                        <div className="w-2 h-2 ocean-gradient rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quantity and Add to Cart */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-white font-inter">Quantity:</span>
                    <div className="flex items-center glass-dark rounded-full">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-2 hover:bg-white/10 rounded-l-full transition-colors"
                      >
                        <Minus className="h-4 w-4 text-white" />
                      </button>
                      <span className="px-4 py-2 text-white font-inter">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-2 hover:bg-white/10 rounded-r-full transition-colors"
                      >
                        <Plus className="h-4 w-4 text-white" />
                      </button>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button className="flex-1 ocean-gradient py-3 px-6 rounded-full text-white font-inter font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center space-x-2">
                      <ShoppingCart className="h-5 w-5" />
                      <span>Add to Cart</span>
                    </button>
                    <button className="glass-dark p-3 rounded-full hover:bg-white/20 transition-colors duration-300">
                      <Heart className="h-6 w-6 text-white" />
                    </button>
                  </div>
                </div>

                {/* Stock Status */}
                <div className="mt-4">
                  <span className={`text-sm font-inter ${product.inStock ? 'text-green-400' : 'text-red-400'}`}>
                    {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default ProductDetail;
