"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "react-feather";
import Image from "next/image";


const partners = [
  {
    name: "Clutch",
    description: "Rated as a top development partner for startups and enterprises",
    logo: "/path-to-clutch-logo.png",
  },
  {
    name: "Oxford",
    description: "Selected for Oxford University's innovation program",
    logo: "/path-to-oxford-logo.png",
  },
  {
    name: "Thrive",
    description: "Featured in Thrive's top 10 emerging tech companies in 2023",
    logo: "/path-to-thrive-logo.png",
  }
];

const ClientsSection = () => {
  return (
    <section className="py-20 bg-black subtle-pattern">
      <div className="container mx-auto px-4 md:px-6">
        {/* Back Text */}
        <div className="relative text-center mb-32">
          <div className="absolute top-0 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-white/10 text-6xl font-bold z-0 pointer-events-none whitespace-nowrap">
            Cutting Edge Digital Solutions
          </div>
          {/* Orange line */}
          <div className="bg-orange-600 w-1/3 min-h-0.5 mx-auto mr-1"/>
            {/* Main Content */}
            <div className="relative z-10 animate-fade-in-up top-0 left-0 right-0 mx-auto text-center py-2">
              <h2 className="heading-md text-white font-extralight text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center mb-6">We Empower Global Leaders <br /><span className="text-white">Through Digital Engineering</span></h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Achieve digital excellence with our cutting-edge solutions tailored for startups and enterprises.
              </p>
          </div>
        </div>  

        {/* Two-Column Layout */}
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          {/* Left Section */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-white text-center p-8">
            <h2 className="text-3xl sm:text-4xl leading-tight mb-6">
              Become the <br className="hidden sm:block" /> next big story
            </h2>
            <a
              href="#services"
              className="btn-secondary bg-orange-600 hover:bg-orange-700 text-white flex items-center justify-center gap-2 py-3 px-6 rounded-lg"
            >
              Our Services <ArrowRight size={16} />
            </a>
          </div>

          {/* Right Section */}
          <div className="glassmorphism w-full md:w-1/2 bg-gray-700 rounded-xl p-6 h-auto">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold mr-3">
                M
              </div>
              <h3 className="text-xl font-semibold text-white">MC Donalds</h3>
            </div>
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-medium text-white/90 bg-white/10 rounded-full">
                E-commerce Platform
              </span>
            </div>
            <p className="text-white/70 text-sm mb-4">
              "App Vertices helped us build a scalable e-commerce platform that increased our sales by 50% within the first quarter. Their expertise in digital engineering and user experience design was instrumental in our success."
            </p>
            <div className="flex justify-between items-center">
              <span className="text-white/50 text-sm">CEO, Sarim</span>
              <div className="flex">
                <span className="text-orange">★★★★★</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}

      <div className="relative px-6 md:px-10 h-96 overflow-x-hidden">
        <div className="absolute w-36 h-48 bg-orange-500 rounded-3xl opacity-80 blur-sm"/>
        {/* Main Image */}
        <div className="relative pt-8 ml-8 ">
          <Image
            src="/3.jpg" // Replace with actual image path
            alt="Creative Workspace"
            width={400}
            height={400}
            className="absolute rounded-lg shadow-lg"
          />
          {/* Floating Card */}

          {/* Right Section - Partner Cards */}
          <div className="relative top-32 left-60 flex gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 max-w-60 rounded-2xl p-6 shadow-lg text-center"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={80}
                  height={40}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-bold">{partner.name}</h3>
                <p className="text-sm text-gray-300 mt-2">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default ClientsSection;