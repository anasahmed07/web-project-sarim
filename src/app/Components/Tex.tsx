"use client"
import { Monitor, Smartphone, LineChart, Code, Zap, BarChart3, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const services: Service[] = [
  {
    icon: <Monitor size={32} className="text-orange" />,
    title: "Web Development",
    description: "Custom websites and web apps built with cutting-edge technologies that drive business growth.",
    link: "#web-development"
  },
  {
    icon: <Smartphone size={32} className="text-orange" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that engage users and deliver exceptional experiences.",
    link: "#mobile-apps"
  },
  {
    icon: <Code size={32} className="text-orange" />,
    title: "Custom Software",
    description: "Tailored software solutions designed to address your specific business challenges and objectives.",
    link: "#custom-software"
  },
  {
    icon: <LineChart size={32} className="text-orange" />,
    title: "Digital Marketing",
    description: "Strategic digital marketing campaigns that increase visibility, drive traffic, and generate leads.",
    link: "#digital-marketing"
  },
  {
    icon: <BarChart3 size={32} className="text-orange" />,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with our advanced analytics solutions.",
    link: "#data-analytics"
  },
  {
    icon: <Zap size={32} className="text-orange" />,
    title: "IT Consulting",
    description: "Expert guidance to help you navigate the complexities of digital transformation.",
    link: "#it-consulting"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-dark-900 subtle-pattern">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-3 py-1 text-sm font-medium text-orange bg-orange/10 rounded-full mb-4">
            OUR SERVICES
          </span>
          <h2 className="heading-lg text-white mb-6">
            We empower Global Leaders <br />
            through Digital Engineering.
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Leverage our expertise in cutting-edge technologies to drive innovation and accelerate 
            your digital transformation journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "glassmorphism rounded-xl p-6 card-hover",
                "border border-white/5 hover:border-orange/20"
              )}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-white/70 mb-4">{service.description}</p>
              <a
                href={service.link}
                className="inline-flex items-center text-orange hover:text-orange-400 font-medium transition-colors"
              >
                Learn More <ArrowRight size={16} className="ml-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default ServicesSection;