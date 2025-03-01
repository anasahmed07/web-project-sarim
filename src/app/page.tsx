import Image from "next/image";
import Hero from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Tex from "./Components/Tex";
import Div from "./Components/Div";
import Get from "./Components/get"; // Fixed casing issue
import Faq from "./Components/Faq";
import NewsletterSection from "./Components/NewsletterSection";
import LocationsSection from "./Components/LocationsSection";
import Footer from "./Components/Footer";


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

