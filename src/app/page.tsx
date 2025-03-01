import Hero from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Tex from "@/components/Tex";
import Div from "@/components/Div";
import Get from "@/components/get"; // Fixed casing issue
import Faq from "@/components/Faq";
import NewsletterSection from "@/components/NewsletterSection";
import LocationsSection from "@/components/LocationsSection";
import Footer from "@/components/Footer";


export default function Home() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <Div />
   <Tex />
   <Get/>
   <Faq/>
   <NewsletterSection/>
   <LocationsSection/>
   <Footer/>
   </>
  )
}

