"use client"
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "What does App Vertices offer?",
    answer: "App Vertices offers comprehensive digital solutions including web development, mobile app development, custom software, digital marketing, data analytics, and IT consulting services tailored to meet the specific needs of your business."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity and requirements. A standard website might take 4-6 weeks, while a complex web or mobile application could take 3-6 months. We'll provide a detailed timeline during our initial consultation based on your specific project needs."
  },
  {
    question: "Can you handle enterprise-level projects?",
    answer: "Absolutely! We have extensive experience working with enterprises across various industries. Our team is equipped to handle large-scale, complex projects requiring advanced security, scalability, and integration with existing systems."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in a wide range of technologies including React, React Native, Angular, Vue.js, Node.js, Python, PHP, .NET, and cloud services like AWS, Azure, and Google Cloud. Our technology stack is constantly evolving to incorporate the latest advancements."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes, we provide comprehensive post-launch support and maintenance services to ensure your digital solutions continue to perform optimally. We offer various support packages tailored to your specific needs, including regular updates, security monitoring, and performance optimization."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-dark-800 subtle-pattern">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg text-white mb-6">
              FAQ
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Here are some of the most common questions we receive. If you don't see your question here, feel free to contact us.
            </p>
          </motion.div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "glassmorphism rounded-xl overflow-hidden mb-4",
                openIndex === index ? "border-orange/20" : "border-white/5"
              )}
            >
              <div
                className={cn(
                  "flex justify-between items-center p-6 cursor-pointer transition-all",
                  openIndex === index ? "border-b border-white/10" : ""
                )}
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-lg font-medium text-white">{item.question}</h3>
                <ChevronDown 
                  className={cn(
                    "h-5 w-5 text-white/70 transition-transform",
                    openIndex === index ? "transform rotate-180" : ""
                  )} 
                />
              </div>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0">
                      <p className="text-white/70">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary">
            Still Have Questions?
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;