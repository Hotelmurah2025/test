import { Input } from "../components/ui/input";
import { Select } from "../components/ui/select";
import TourCard from "../components/TourCard";

// Placeholder data
const tours = [
  {
    id: "1",
    title: "Tokyo City Tour & Mt. Fuji Day Trip",
    image: "https://cdn.globaleur.com/whitelabel/photos/tokyo-1.jpg",
    price: 149,
    duration: "Full Day",
    location: "Tokyo, Japan",
    rating: 4.8
  },
  {
    id: "2",
    title: "Seoul K-Culture & Food Tour",
    image: "https://cdn.globaleur.com/whitelabel/photos/seoul-1.jpg",
    price: 89,
    duration: "8 Hours",
    location: "Seoul, South Korea",
    rating: 4.9
  },
  {
    id: "3",
    title: "Bangkok Temple & City Highlights",
    image: "https://cdn.globaleur.com/whitelabel/photos/bangkok-1.jpg",
    price: 69,
    duration: "Half Day",
    location: "Bangkok, Thailand",
    rating: 4.7
  }
];

const Tours = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Filter Section */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Input
            type="text"
            placeholder="Search tours..."
            className="w-full"
          />
          <Select>
            <option value="">Duration</option>
            <option value="half-day">Half Day</option>
            <option value="full-day">Full Day</option>
            <option value="multi-day">Multi Day</option>
          </Select>
          <Select>
            <option value="">Price Range</option>
            <option value="0-50">$0 - $50</option>
            <option value="51-100">$51 - $100</option>
            <option value="101-200">$101 - $200</option>
            <option value="201+">$201+</option>
          </Select>
          <Select>
            <option value="">Sort By</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Rating</option>
          </Select>
        </div>
      </div>

      {/* Tours Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map((tour) => (
          <TourCard key={tour.id} {...tour} />
        ))}
      </div>
    </div>
  );
};

export default Tours;
