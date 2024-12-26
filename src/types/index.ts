export interface Tour {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  duration: {
    days: number;
    hours?: number;
  };
  location: string;
  city: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  highlights: string[];
  included: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
}

export interface City {
  id: string;
  name: string;
  country: string;
  description: string;
  imageUrl: string;
  popularTours: number;
}

export interface SearchFilters {
  city?: string;
  minPrice?: number;
  maxPrice?: number;
  duration?: number;
  sortBy?: 'price' | 'rating' | 'popularity';
}
