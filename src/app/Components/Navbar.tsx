"use client"
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { 
    label: "Services", 
    href: "#services",
    children: [
      { label: "Web Development", href: "#web-development" },
      { label: "Mobile Apps", href: "#mobile-apps" },
      { label: "Digital Marketing", href: "#digital-marketing" },
    ]
  },
  { label: "Our Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const toggleSubmenu = (label: string) => {
    if (openSubmenu === label) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(label);
    }
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "py-3 bg-dark-900/90 backdrop-blur-md shadow-md" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2">
          <span className="text-orange font-bold text-3xl">App</span>
          <span className="text-white font-medium text-xl">Vertices</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.label} className="relative group">
                {item.children ? (
                  <div className="flex items-center gap-1 text-white/80 hover:text-orange-500 cursor-pointer transition">
                    <span>{item.label}</span>
                    <ChevronDown size={16} />
                    
                    <div className="absolute hidden group-hover:block top-full left-0 mt-2 bg-dark-800 rounded-lg shadow-xl p-2 min-w-[200px] border border-dark-700">
                      {item.children.map((child) => (
                        <a 
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2 text-white/80 hover:text-orange-500 hover:bg-dark-700 rounded-md transition"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="text-white/80 hover:text-orange-500 transition"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn-primary">
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-dark-900/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out overflow-hidden",
          isOpen ? "max-h-[80vh]" : "max-h-0"
        )}
      >
        <div className="container mx-auto px-4 py-4">
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <div>
                    <div 
                      onClick={() => toggleSubmenu(item.label)}
                      className="flex items-center justify-between text-white/80 hover:text-orange-500 cursor-pointer transition py-2"
                    >
                      <span>{item.label}</span>
                      <ChevronDown 
                        size={16} 
                        className={cn(
                          "transition-transform duration-200",
                          openSubmenu === item.label ? "rotate-180" : ""
                        )}
                      />
                    </div>
                    
                    <div 
                      className={cn(
                        "pl-4 border-l border-dark-700 ml-2 mt-2 space-y-2 overflow-hidden transition-all duration-200",
                        openSubmenu === item.label ? "max-h-40" : "max-h-0"
                      )}
                    >
                      {item.children.map((child) => (
                        <a 
                          key={child.label}
                          href={child.href}
                          className="block py-2 text-white/70 hover:text-orange-500 transition"
                          onClick={toggleMenu}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="block py-2 text-white/80 hover:text-orange-500 transition"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
            <li className="pt-4">
              <a href="#contact" className="btn-primary inline-block w-full text-center">
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;