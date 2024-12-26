import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format, addDays } from "date-fns";
import { CalendarIcon, MapPin, ChevronDown } from "lucide-react";
import { DateRange } from "react-day-picker";

const HeroSection = () => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 2)
  });
  const [destination, setDestination] = useState("");
  const [planType, setPlanType] = useState("Get a recommended plan");

  const handleSearch = () => {
    console.log({
      destination,
      date,
      planType
    });
  };

  return (
    <div className="relative min-h-screen md:min-h-[75vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://cdn.globaleur.com/whitelabel/photos/5e6f6b8f01b7510004b5c3e8)'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Travel Smart
          <span className="block text-2xl md:text-3xl font-normal mt-2">A new way to plan</span>
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Plan your travel itinerary with AI recommendation &amp; route optimization
        </p>

        {/* Search Form */}
        <div className="bg-white rounded-lg p-4 md:p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Where are you going?"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="pl-10 text-gray-900"
              />
            </div>
            
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
                  {date?.from ? (
                    date.to ? (
                      <>
                        {format(date.from, "MMM d")} - {format(date.to, "MMM d")}
                      </>
                    ) : (
                      format(date.from, "MMM d")
                    )
                  ) : (
                    <span>Pick dates</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>

            <Select value={planType} onValueChange={setPlanType}>
              <SelectTrigger className="w-full text-gray-900">
                <SelectValue placeholder="Select plan type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Get a recommended plan">
                  Get a recommended plan
                </SelectItem>
                <SelectItem value="Create custom plan">
                  Create custom plan
                </SelectItem>
              </SelectContent>
            </Select>

            <Button 
              className="w-full bg-primary hover:bg-primary-hover text-white"
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
