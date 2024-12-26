import { Tour, City, SearchFilters } from '../types';
import toursData from '../data/tours.json';
import citiesData from '../data/cities.json';

// Type assertions for imported JSON data
const tours: Tour[] = (toursData.tours as unknown as Tour[]).map(tour => ({
  ...tour,
  duration: {
    days: tour.duration.days || (tour.duration.hours ? tour.duration.hours / 24 : 0),
    hours: tour.duration.hours
  }
}));
const cities: City[] = citiesData.cities as unknown as City[];

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Helper function to filter tours based on search criteria
const filterTours = (tours: Tour[], filters: SearchFilters): Tour[] => {
  return tours.filter(tour => {
    if (filters.city && tour.city.toLowerCase() !== filters.city.toLowerCase()) {
      return false;
    }
    if (filters.minPrice && tour.price < filters.minPrice) {
      return false;
    }
    if (filters.maxPrice && tour.price > filters.maxPrice) {
      return false;
    }
    if (filters.duration) {
      const tourDuration = tour.duration.days || (tour.duration.hours ? tour.duration.hours / 24 : 0);
      if (tourDuration > filters.duration) {
        return false;
      }
    }
    return true;
  });
};

// Helper function to sort tours
const sortTours = (tours: Tour[], sortBy?: 'price' | 'rating' | 'popularity'): Tour[] => {
  if (!sortBy) return tours;

  return [...tours].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'rating':
        return b.rating - a.rating;
      case 'popularity':
        return b.reviewCount - a.reviewCount;
      default:
        return 0;
    }
  });
};

export const api = {
  // Get all tours
  getTours: async (): Promise<Tour[]> => {
    await delay(500); // Simulate network delay
    return tours;
  },

  // Get a specific tour by ID
  getTourById: async (id: string): Promise<Tour | null> => {
    await delay(300);
    const tour = tours.find(t => t.id === id);
    return tour || null;
  },

  // Get all cities
  getCities: async (): Promise<City[]> => {
    await delay(500);
    return cities;
  },

  // Get a specific city by ID
  getCityById: async (id: string): Promise<City | null> => {
    await delay(300);
    const city = cities.find(c => c.id === id);
    return city || null;
  },

  // Search tours with filters
  searchTours: async (filters: SearchFilters): Promise<Tour[]> => {
    await delay(800);
    let filteredTours = filterTours(tours, filters);
    return sortTours(filteredTours, filters.sortBy);
  },

  // Get tours by city
  getToursByCity: async (cityId: string): Promise<Tour[]> => {
    await delay(500);
    return tours.filter(tour => 
      tour.city.toLowerCase() === cityId.toLowerCase()
    );
  },

  // Get popular tours (based on rating and review count)
  getPopularTours: async (limit: number = 3): Promise<Tour[]> => {
    await delay(400);
    return [...tours]
      .sort((a, b) => (b.rating * b.reviewCount) - (a.rating * a.reviewCount))
      .slice(0, limit);
  }
};
