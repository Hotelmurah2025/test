import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TourCardProps {
  id: string;
  title: string;
  image: string;
  price: number;
  duration: string;
  location: string;
  rating: number;
}

const TourCard = ({ id, title, image, price, duration, location, rating }: TourCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-medium">
          ⭐ {rating}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
        
        <div className="flex items-center text-gray-600 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-sm">{location}</span>
        </div>
        
        <div className="flex items-center text-gray-600 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm">{duration}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold">
            ${price}
            <span className="text-sm font-normal text-gray-600">/person</span>
          </div>
          <Button variant="default" asChild>
            <a href={`/tours/${id}`}>View Details</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
