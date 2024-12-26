const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.globaleur.com/about-globaleur" className="text-gray-600 hover:text-gray-900">
                  About Us
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/globaleur/" className="text-gray-600 hover:text-gray-900">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="/faq" className="text-gray-600 hover:text-gray-900">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/contact-us" className="text-gray-600 hover:text-gray-900">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="/cities" className="text-gray-600 hover:text-gray-900">
                  Destinations
                </a>
              </li>
              <li>
                <a href="/tours" className="text-gray-600 hover:text-gray-900">
                  Tours &amp; Activities
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Policies</h3>
            <ul className="space-y-2">
              <li>
                <a href="/terms" className="text-gray-600 hover:text-gray-900">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-600 hover:text-gray-900">
                  Privacy &amp; Cookies Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Globaleur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
