import React from "react";
import { Button } from "../components/ui/button";

interface TourDetailProps {
  id?: string;
}

const TourDetail: React.FC<TourDetailProps> = ({ id }) => {
  // Placeholder tour data
  const tour = {
    id: id || "1",
    title: "Tokyo City Tour & Mt. Fuji Day Trip",
    images: [
      "https://cdn.globaleur.com/whitelabel/photos/tokyo-1.jpg",
      "https://cdn.globaleur.com/whitelabel/photos/tokyo-2.jpg",
      "https://cdn.globaleur.com/whitelabel/photos/tokyo-3.jpg"
    ],
    price: 149,
    duration: "Full Day",
    location: "Tokyo, Japan",
    rating: 4.8,
    description: `Experience the best of Tokyo and Mt. Fuji in this comprehensive full-day tour. Start your day with a visit to the iconic Tokyo Tower, followed by a traditional tea ceremony in Harajuku. After lunch, travel to Mt. Fuji's 5th station for breathtaking views (weather permitting).

This tour includes:
• Professional English-speaking guide
• Transportation by air-conditioned coach
• Traditional Japanese lunch
• Tea ceremony experience
• Mt. Fuji 5th station visit (weather permitting)
• Hotel pickup and drop-off`,
    highlights: [
      "Visit Tokyo Tower",
      "Experience traditional tea ceremony",
      "See Mt. Fuji (weather permitting)",
      "Enjoy authentic Japanese lunch",
      "Professional guide throughout"
    ],
    itinerary: [
      {
        time: "07:30",
        activity: "Hotel pickup"
      },
      {
        time: "09:00",
        activity: "Tokyo Tower visit"
      },
      {
        time: "10:30",
        activity: "Tea ceremony in Harajuku"
      },
      {
        time: "12:00",
        activity: "Traditional Japanese lunch"
      },
      {
        time: "13:30",
        activity: "Depart for Mt. Fuji"
      },
      {
        time: "15:00",
        activity: "Mt. Fuji 5th station visit"
      },
      {
        time: "18:00",
        activity: "Return to Tokyo"
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Tour Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">{tour.title}</h1>
        <div className="flex items-center space-x-4 text-gray-600">
          <span>⭐ {tour.rating}</span>
          <span>|</span>
          <span>{tour.duration}</span>
          <span>|</span>
          <span>{tour.location}</span>
        </div>
      </div>

      {/* Tour Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="h-96">
          <img
            src={tour.images[0]}
            alt={tour.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {tour.images.slice(1).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${tour.title} ${index + 2}`}
              className="w-full h-44 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>

      {/* Tour Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Tour Description</h2>
            <p className="whitespace-pre-line">{tour.description}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Tour Highlights</h2>
            <ul className="list-disc list-inside space-y-2">
              {tour.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Itinerary</h2>
            <div className="space-y-4">
              {tour.itinerary.map((item, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="w-20 font-bold">{item.time}</div>
                  <div>{item.activity}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Booking Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
            <div className="text-3xl font-bold mb-4">${tour.price}</div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Select Date
                </label>
                <input
                  type="date"
                  className="w-full rounded-md border p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Number of Travelers
                </label>
                <select className="w-full rounded-md border p-2">
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5">5+ People</option>
                </select>
              </div>
              <Button className="w-full">Book Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetail;
