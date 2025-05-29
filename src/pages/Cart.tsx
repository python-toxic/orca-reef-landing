
import { useState, useEffect } from "react";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (cartItems.length === 0) {
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

        <div className="relative z-10">
          <Navbar />
          
          <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <ShoppingBag className="h-24 w-24 text-blue-300 mx-auto mb-6" />
                <h1 className="text-4xl sm:text-6xl font-playfair font-bold text-white mb-6">
                  Your Cart is <span className="ocean-text-gradient">Empty</span>
                </h1>
                <p className="text-xl text-blue-200 font-inter max-w-3xl mx-auto mb-8">
                  Discover our amazing ocean-themed products and start your underwater adventure.
                </p>
                <Link to="/explore">
                  <button className="ocean-gradient px-8 py-4 rounded-full text-white font-inter font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                    Start Shopping
                  </button>
                </Link>
              </div>
            </div>
          </div>
          
          <Footer />
        </div>
      </div>
    );
  }

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

      <div className="relative z-10">
        <Navbar />
        
        <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-4xl sm:text-6xl font-playfair font-bold text-white mb-8 text-center">
                Shopping <span className="ocean-text-gradient">Cart</span>
              </h1>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                  {cartItems.map((item, index) => (
                    <div 
                      key={item.id} 
                      className={`glass-card p-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center space-x-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        
                        <div className="flex-1">
                          <h3 className="text-xl font-playfair font-semibold text-white">
                            {item.name}
                          </h3>
                          <p className="text-blue-200 font-inter">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>

                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 glass-dark rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                          >
                            <Minus className="h-4 w-4 text-white" />
                          </button>
                          
                          <span className="text-white font-inter font-semibold w-8 text-center">
                            {item.quantity}
                          </span>
                          
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 glass-dark rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                          >
                            <Plus className="h-4 w-4 text-white" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="w-10 h-10 glass-dark rounded-full flex items-center justify-center hover:bg-red-500/20 transition-colors"
                        >
                          <Trash2 className="h-5 w-5 text-red-300" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <div className={`glass-card p-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="text-2xl font-playfair font-bold text-white mb-6">
                      Order Summary
                    </h2>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between text-blue-200">
                        <span>Subtotal:</span>
                        <span>${getTotalPrice().toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-blue-200">
                        <span>Shipping:</span>
                        <span>Free</span>
                      </div>
                      <div className="border-t border-white/20 pt-4">
                        <div className="flex justify-between text-white font-semibold text-lg">
                          <span>Total:</span>
                          <span>${getTotalPrice().toFixed(2)}</span>
                        </div>
                      </div>
                    </div>

                    <button className="w-full ocean-gradient py-3 rounded-full text-white font-inter font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 mb-4">
                      Proceed to Checkout
                    </button>

                    <button
                      onClick={clearCart}
                      className="w-full glass-dark py-3 rounded-full text-white font-inter hover:bg-white/20 transition-colors"
                    >
                      Clear Cart
                    </button>
                  </div>
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

export default Cart;
