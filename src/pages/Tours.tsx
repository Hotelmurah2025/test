import React, { useState, useMemo, useEffect } from "react";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Button } from "../components/ui/button";
import { Search, SlidersHorizontal, Loader2 } from "lucide-react";
import TourCard from "../components/TourCard";

interface Tour {
  id: string;
  title: string;
  image: string;
  price: number;
  duration: string;
  location: string;
  rating: number;
  reviewCount: number;
}

// Placeholder data
const tours: Tour[] = [
  {
    id: "1",
    title: "Tokyo City Tour & Mt. Fuji Day Trip",
    image: "https://cdn.globaleur.com/whitelabel/photos/tokyo-1.jpg",
    price: 149,
    duration: "Full Day",
    location: "Tokyo, Japan",
    rating: 4.8,
    reviewCount: 128
  },
  {
    id: "2",
    title: "Seoul K-Culture & Food Tour",
    image: "https://cdn.globaleur.com/whitelabel/photos/seoul-1.jpg",
    price: 89,
    duration: "8 Hours",
    location: "Seoul, South Korea",
    rating: 4.9,
    reviewCount: 256
  },
  {
    id: "3",
    title: "Bangkok Temple & City Highlights",
    image: "https://cdn.globaleur.com/whitelabel/photos/bangkok-1.jpg",
    price: 69,
    duration: "Half Day",
    location: "Bangkok, Thailand",
    rating: 4.7,
    reviewCount: 184
  }
];

const Tours: React.FC = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [duration, setDuration] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const filteredTours = useMemo(() => {
    let filtered = [...tours];

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        tour =>
          tour.title.toLowerCase().includes(query) ||
          tour.location.toLowerCase().includes(query)
      );
    }

    // Apply duration filter
    if (duration) {
      filtered = filtered.filter(tour => {
        const normalizedDuration = tour.duration.toLowerCase();
        if (duration === "half-day") return normalizedDuration.includes("half day");
        if (duration === "full-day") return normalizedDuration.includes("full day") || normalizedDuration.includes("8 hours");
        if (duration === "multi-day") return normalizedDuration.includes("day") && !normalizedDuration.includes("half") && !normalizedDuration.includes("full");
        return true;
      });
    }

    // Apply price range filter
    if (priceRange) {
      const [min, max] = priceRange.split("-").map(Number);
      filtered = filtered.filter(tour => {
        if (max) {
          return tour.price >= min && tour.price <= max;
        }
        return tour.price >= min;
      });
    }

    // Apply sorting
    if (sortBy) {
      filtered.sort((a, b) => {
        if (sortBy === "price-low") return a.price - b.price;
        if (sortBy === "price-high") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        return 0;
      });
    }

    return filtered;
  }, [searchQuery, duration, priceRange, sortBy]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Filter Section */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Tours & Activities</h1>
          <Button variant="outline" size="sm">
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search tours..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={duration} onValueChange={setDuration}>
            <SelectTrigger>
              <SelectValue placeholder="Duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="half-day">Half Day</SelectItem>
              <SelectItem value="full-day">Full Day</SelectItem>
              <SelectItem value="multi-day">Multi Day</SelectItem>
            </SelectContent>
          </Select>
          <Select value={priceRange} onValueChange={setPriceRange}>
            <SelectTrigger>
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-50">$0 - $50</SelectItem>
              <SelectItem value="51-100">$51 - $100</SelectItem>
              <SelectItem value="101-200">$101 - $200</SelectItem>
              <SelectItem value="201+">$201+</SelectItem>
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger>
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-gray-600">
            {filteredTours.length} {filteredTours.length === 1 ? 'tour' : 'tours'} found
          </p>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTours.map((tour) => (
              <TourCard key={tour.id} {...tour} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tours;
