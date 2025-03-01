"use client"
import { motion } from "framer-motion";

const locations = [
  {
    city: "San Francisco",
    address: "525 Market St, Suite 2000",
    state: "CA 94105",
    country: "United States"
  },
  {
    city: "New York",
    address: "1350 Avenue of the Americas",
    state: "NY 10019",
    country: "United States"
  },
  {
    city: "London",
    address: "30 St Mary Axe",
    state: "EC3A 8BF",
    country: "United Kingdom"
  },
  {
    city: "Singapore",
    address: "Marina Bay Financial Centre",
    state: "018983",
    country: "Singapore"
  }
];

const LocationsSection = () => {
  return (
    <section className="py-20 bg-dark-800 subtle-pattern">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="heading-md text-white mb-4">
            App Vertices Franchise
          </h2>
          <div className="h-1 w-24 bg-orange rounded-full mx-auto mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            With offices strategically located around the globe, we deliver world-class digital solutions
            wherever you are.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glassmorphism rounded-xl p-6 card-hover"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{location.city}</h3>
              <address className="text-white/70 not-italic">
                <p>{location.address}</p>
                <p>{location.state}</p>
                <p>{location.country}</p>
              </address>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-xl overflow-hidden h-80 relative">
              <div className="absolute inset-0 flex items-center justify-center bg-dark-900/60 z-10">
                <p className="text-white text-lg font-medium">Interactive map loading...</p>
              </div>
              {/* This would be replaced with an actual map component */}
              <div className="w-full h-full bg-dark-700"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;