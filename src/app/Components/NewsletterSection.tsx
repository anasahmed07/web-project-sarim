"use client"
import { useState } from "react";
import { toast } from "sonner";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation`
    if (!email.trim() || !email.includes('@')) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    // Here you would typically send the email to your API
    console.log("Newsletter signup:", email);
    toast.success("Thanks for subscribing to our newsletter!");
    setEmail("");
  };
  
  return (
    <section className="py-20 bg-dark-900 subtle-pattern">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-md text-white mb-6">
            Sign Up For Our Newsletter
          </h2>
          <p className="text-white/70 mb-8">
            Stay updated with the latest trends in digital technology, exclusive offers, and insights 
            from our experts delivered directly to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-grow bg-white/10 border border-white/20 text-white placeholder:text-white/60 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-orange/50 transition-all"
              required
            />
            <button
              type="submit"
              className="btn-primary whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          
          <p className="text-white/50 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;