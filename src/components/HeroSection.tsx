"use client"
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Logic to handle form submission would go here
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 subtle-pattern overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-orange/70 to-black/50"></div>
      
      <div className="relative container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0 animate-fade-in-up">
          <h1 className="heading-xl text-white mb-6">
            Start Your<br />
            <span className="text-orange">Digital</span> Journey<br />
            Now
          </h1>
          <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto md:mx-0">
            We empower global leaders through innovative digital engineering solutions that drive growth and transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#contact" className="btn-primary">
              Get Started
            </a>
            <a href="#services" className="btn-secondary flex items-center justify-center gap-2">
              Our Services <ArrowRight size={16} />
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 md:pl-10 animate-fade-in">
          <div className="glassmorphism rounded-xl p-6 max-w-md mx-auto">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-1">Request a Proposal</h3>
              <div className="h-1 w-20 bg-orange rounded-full"></div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/60 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange/50 transition-all"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/60 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange/50 transition-all"
                  required
                />
              </div>
              
              <div>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/60 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange/50 transition-all"
                  required
                >
                  <option value="" disabled>Select Service</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile App Development</option>
                  <option value="design">UI/UX Design</option>
                  <option value="marketing">Digital Marketing</option>
                </select>
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Tell us about your project"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/60 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange/50 transition-all"
                  required
                ></textarea>
              </div>
              
              <div className="flex justify-center md:justify-end">
                <button
                  type="submit"
                  className="btn-primary w-full md:w-auto"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;