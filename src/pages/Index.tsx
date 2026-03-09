import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Amenities from "@/components/Amenities";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import LanguageSelector from "@/components/LanguageSelector";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <LanguageSelector />
        <Hero />
        <About />
        <Gallery />
        <Amenities />
        <BookingCTA />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
