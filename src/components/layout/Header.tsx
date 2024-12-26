import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "../ui/button";
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="mr-8">
            <img 
              src="https://cdn.globaleur.com/assets/build/brand.svg"
              alt="Globaleur"
              className="h-8"
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/tours" className="text-gray-600 hover:text-gray-900">
              Tours &amp; Activities
            </Link>
            <Link to="/faq" className="text-gray-600 hover:text-gray-900">
              FAQ
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-gray-600">USD</span>
            <span className="text-gray-600">EN</span>
          </div>
          <div className="hidden md:block">
            <Button variant="ghost" asChild>
              <Link to="/login">Log in</Link>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-4 pt-2 pb-4 space-y-2 bg-white border-t">
            <Link
              to="/tours"
              className="block py-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Tours &amp; Activities
            </Link>
            <Link
              to="/faq"
              className="block py-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              to="/login"
              className="block py-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Log in
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
