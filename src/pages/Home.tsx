import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <HeroSection />
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder for popular destinations */}
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="relative h-64 rounded-lg overflow-hidden group"
            >
              <img
                src={`https://cdn.globaleur.com/whitelabel/photos/destination-${item}.jpg`}
                alt={`Destination ${item}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">
                  {['Tokyo', 'Kyoto', 'Osaka'][item - 1]}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50 -mx-4 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Globaleur?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Best Price Guarantee</h3>
              <p className="text-gray-600">
                Find a lower price? We'll match it and give you an extra 10% off.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Expert Local Guides</h3>
              <p className="text-gray-600">
                Experience authentic culture with our knowledgeable local guides.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-600">
                Our team is always here to help you with any questions or concerns.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
