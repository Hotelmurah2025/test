import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

const HeroSection = () => {
  const [date, setDate] = useState<Date>();
  const [destination, setDestination] = useState("");
  const [planType, setPlanType] = useState("");

  const handleSearch = () => {
    console.log({
      destination,
      date,
      planType
    });
  };

  return (
    <div className="relative h-[600px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://cdn.globaleur.com/whitelabel/photos/5e6...)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-white">
        <h1 className="text-5xl font-bold mb-4">Travel Smart</h1>
        <p className="text-xl mb-8">
          Plan your travel itinerary with AI recommendation &amp; route optimization
        </p>

        {/* Search Form */}
        <div className="bg-white rounded-lg p-4 max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input
              type="text"
              placeholder="Where are you going?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full text-gray-900"
            />
            
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal text-gray-900",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <Select
              value={planType}
              onValueChange={setPlanType}
              className="text-gray-900"
            >
              <option value="">Select plan type</option>
              <option value="recommended">Get a recommended plan</option>
              <option value="custom">Create custom plan</option>
            </Select>

            <Button 
              className="w-full"
              onClick={handleSearch}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
