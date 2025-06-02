
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  badge?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Whale Song Pendant",
    price: 89.99,
    originalPrice: 120.00,
    rating: 4.9,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=800&q=80",
    category: "jewelry",
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Ocean Waves Canvas Art",
    price: 45.99,
    rating: 4.8,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
    category: "art",
    badge: "New"
  },
  {
    id: 3,
    name: "Coral Reef Earrings",
    price: 65.99,
    originalPrice: 85.00,
    rating: 5.0,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=800&q=80",
    category: "jewelry"
  },
  {
    id: 4,
    name: "Marine Life Photography Print",
    price: 35.99,
    rating: 4.6,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&q=80",
    category: "art"
  },
  {
    id: 5,
    name: "Ocean Breeze Beach Towel",
    price: 29.99,
    rating: 4.5,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
    category: "beachwear",
    badge: "Sale"
  },
  {
    id: 6,
    name: "Deep Sea Explorer Wetsuit",
    price: 199.99,
    originalPrice: 259.99,
    rating: 4.9,
    reviews: 45,
    image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=800&q=80",
    category: "jewelry",
    badge: "Premium"
  },
  {
    id: 7,
    name: "Seahorse Sculpture",
    price: 125.99,
    rating: 4.7,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&q=80",
    category: "art"
  },
  {
    id: 8,
    name: "Pearl Diving Mask",
    price: 95.99,
    originalPrice: 130.00,
    rating: 4.8,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=800&q=80",
    category: "jewelry",
    badge: "Popular"
  },
  {
    id: 9,
    name: "Ocean Current Swimsuit",
    price: 79.99,
    rating: 4.6,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
    category: "beachwear"
  },
  {
    id: 10,
    name: "Starfish Wall Art",
    price: 42.99,
    rating: 4.4,
    reviews: 56,
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&q=80",
    category: "art"
  },
  {
    id: 11,
    name: "Nautilus Shell Necklace",
    price: 155.99,
    originalPrice: 200.00,
    rating: 4.9,
    reviews: 93,
    image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=800&q=80",
    category: "jewelry",
    badge: "Limited Edition"
  },
  {
    id: 12,
    name: "Tropical Fish Print Set",
    price: 68.99,
    rating: 4.7,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&q=80",
    category: "art"
  },
  {
    id: 13,
    name: "Mermaid Tail Blanket",
    price: 39.99,
    rating: 4.3,
    reviews: 267,
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
    category: "beachwear",
    badge: "Cozy"
  },
  {
    id: 14,
    name: "Dolphin Ring",
    price: 115.99,
    rating: 4.8,
    reviews: 87,
    image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=800&q=80",
    category: "jewelry"
  },
  {
    id: 15,
    name: "Ocean Sunset Canvas",
    price: 89.99,
    originalPrice: 110.00,
    rating: 4.9,
    reviews: 178,
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&q=80",
    category: "art",
    badge: "Bestseller"
  }
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "jewelry", name: "Jewelry" },
  { id: "art", name: "Marine Art" },
  { id: "beachwear", name: "Beachwear" }
];
