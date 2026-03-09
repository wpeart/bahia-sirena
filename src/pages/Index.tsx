import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Amenities from "@/components/Amenities";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import LanguageSelector from "@/components/LanguageSelector";

const Index = () => {
  return (
    <div className="min-h-screen">
      <LanguageSelector />
      <Hero />
      <About />
      <Gallery />
      <Amenities />
      <BookingCTA />
      <Footer />
    </div>
  );
};

export default Index;
