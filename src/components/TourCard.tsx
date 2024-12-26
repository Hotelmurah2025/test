import { Button } from "@/components/ui/button";
import { MapPin, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface TourCardProps {
  id: string;
  title: string;
  image: string;
  price: number;
  duration: string;
  location: string;
  rating: number;
  reviewCount?: number;
}

const TourCard = ({ 
  id, 
  title, 
  image, 
  price, 
  duration, 
  location, 
  rating,
  reviewCount = 0 
}: TourCardProps) => {
  return (
    <Link 
      to={`/tours/${id}`} 
      className="group block bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative">
        <div className="aspect-w-16 aspect-h-9">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="absolute top-4 right-4 bg-white px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span>{rating.toFixed(1)}</span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
          <div className="flex items-center gap-4">
            <div className="flex items-center text-white/90">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">{location}</span>
            </div>
            <div className="flex items-center text-white/90">
              <Clock className="h-4 w-4 mr-1" />
              <span className="text-sm">{duration}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-gray-600">From</span>
            <div className="text-lg font-bold text-primary">
              ${price}
              <span className="text-sm font-normal text-gray-600 ml-1">/person</span>
            </div>
          </div>
          <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-white">
            View Details
          </Button>
        </div>
        {reviewCount > 0 && (
          <div className="mt-2 text-sm text-gray-600">
            {reviewCount} reviews
          </div>
        )}
      </div>
    </Link>
  );
};

export default TourCard;
