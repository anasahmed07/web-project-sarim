"use client"
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const contactMethods = [
  {
    icon: <Mail className="h-6 w-6 text-orange" />,
    title: "Send Us Email",
    description: "Our friendly team is here to help.",
    action: "hello@appvertices.com",
    link: "mailto:hello@appvertices.com"
  },
  {
    icon: <Phone className="h-6 w-6 text-orange" />,
    title: "Call Us",
    description: "Mon-Fri from 8am to 5pm.",
    action: "+1 (555) 000-0000",
    link: "tel:+15550000000"
  },
  {
    icon: <MapPin className="h-6 w-6 text-orange" />,
    title: "Visit Our Office",
    description: "Come say hello at our office HQ.",
    action: "Find Our Office",
    link: "#map"
  }
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-dark-900 subtle-pattern">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 text-sm font-medium text-orange bg-orange/10 rounded-full mb-4">
              CONTACT US
            </span>
            <h2 className="heading-lg text-white mb-6">
              Get in touch with us today!
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Have a question or ready to start your next project? Reach out to our team and we'll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glassmorphism rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center mx-auto mb-4">
                {method.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
              <p className="text-white/70 mb-4">{method.description}</p>
              <a 
                href={method.link}
                className="text-orange hover:text-orange-400 font-medium transition-colors"
              >
                {method.action}
              </a>
            </motion.div>
          ))}
        </div>
        
        <div className="glassmorphism rounded-xl p-8 max-w-4xl mx-auto">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-white mb-2">Send us a message</h3>
            <p className="text-white/70">Fill out the form below and we'll get back to you within 24 hours.</p>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-white/90 mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange/50 transition-all"
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white/90 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange/50 transition-all"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-white/90 mb-2">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange/50 transition-all"
                placeholder="What's this about?"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-white/90 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange/50 transition-all"
                placeholder="Tell us what you need"
                required
              />
            </div>
            
            <div>
              <button
                type="submit"
                className="btn-primary"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;