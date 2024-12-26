import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="mr-8">
            <img 
              src="https://cdn.globaleur.com/assets/build/brand.svg"
              alt="Globaleur"
              className="h-8"
            />
          </a>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/cities" className="text-gray-600 hover:text-gray-900">
              Destinations
            </a>
            <a href="/tours" className="text-gray-600 hover:text-gray-900">
              Tours &amp; Activities
            </a>
            <a href="/tour-check-booking" className="text-gray-600 hover:text-gray-900">
              My Bookings
            </a>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-gray-600">USD</span>
            <span className="text-gray-600">EN</span>
          </div>
          <Button variant="ghost" asChild>
            <a href="/signin">Log in</a>
          </Button>
          <Button variant="default" asChild>
            <a href="/signup">Sign up</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
