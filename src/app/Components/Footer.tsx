import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-900 subtle-pattern pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="/" className="flex items-center gap-2 mb-6">
              <span className="text-orange font-bold text-2xl">App</span>
              <span className="text-white font-medium text-lg">Vertices</span>
            </a>
            <p className="text-white/70 mb-6">
              Empowering businesses through innovative digital solutions that drive growth and transformation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#work" className="text-white/70 hover:text-white transition-colors">Our Work</a>
              </li>
              <li>
                <a href="#careers" className="text-white/70 hover:text-white transition-colors">Careers</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#terms" className="text-white/70 hover:text-white transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#privacy" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#cookies" className="text-white/70 hover:text-white transition-colors">Cookie Policy</a>
              </li>
              <li>
                <a href="#gdpr" className="text-white/70 hover:text-white transition-colors">GDPR Compliance</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <address className="not-italic text-white/70 space-y-3">
              <p>525 Market St, Suite 2000</p>
              <p>San Francisco, CA 94105</p>
              <p>United States</p>
              <p className="mt-4">
                <a href="mailto:hello@appvertices.com" className="hover:text-white transition-colors">
                  hello@appvertices.com
                </a>
              </p>
              <p>
                <a href="tel:+15550000000" className="hover:text-white transition-colors">
                  +1 (555) 000-0000
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © {currentYear} App Vertices. All rights reserved Created by Muhammad Sarim.
          </p>
          <div className="flex items-center gap-4">
            {/* <img src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoiY2VydGlmaWVkXC9icmFuZHNcLzE2NDY2XC9maWxlc1wvX2hlYWRsZXNzX2NvbnRlbnRfbWFuYWdlbWVudFwvdmVjdG9yXC90cmFuc3BvcnRhdGlvbl9wYXltZW50XzIwMjBfcGMucG5nIn0:certified:sNT4chbpKcGnL8yZNLw2VUVXrODo_HTKkHCMXmCk3So?width=120" alt="Payment Method" className="h-8" />
            <img src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoiY2VydGlmaWVkXC9icmFuZHNcLzE2NDY2XC9maWxlc1wvX2hlYWRsZXNzX2NvbnRlbnRfbWFuYWdlbWVudFwvdmVjdG9yXC92aXNhLW1hc3RlcmNhcmQyLnBuZyJ9:certified:h6j5_wqP1bKwpyEzrxjuhiW5HX4PZCh5KdqgRf2hR54?width=90" alt="Payment Method" className="h-8" />
            <img src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoiY2VydGlmaWVkXC9icmFuZHNcLzE2NDY2XC9maWxlc1wvX2hlYWRsZXNzX2NvbnRlbnRfbWFuYWdlbWVudFwvdmVjdG9yXC9wYXlwYWwyMDIwX2VkaXRlZC5wbmcifQ:certified:D0B0zl49XA-2x0dNKzrL6XOAzIPUL1QAgc2-0sxoGwE?width=70" alt="Payment Method" className="h-8" />
            <img src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoiY2VydGlmaWVkXC9icmFuZHNcLzE2NDY2XC9maWxlc1wvX2hlYWRsZXNzX2NvbnRlbnRfbWFuYWdlbWVudFwvdmVjdG9yXC9OZXRlbGxlci5wbmcifQ:certified:OtdwkGd8tX3nQ-hImj9hZLVzxNvgzj8v-rPYXrbCHB8?width=90" alt="Payment Method" className="h-8" /> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;