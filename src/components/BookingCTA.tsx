import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import exteriorSunset from "@/assets/exterior-sunset.jpeg";

const BookingCTA = () => {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${exteriorSunset})` }}
      >
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="relative z-10 container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-in fade-in duration-700">
          Ready for Your Costa Rican Adventure?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-in fade-in duration-700 delay-150">
          Book your stay at Bahia Sirena today and create unforgettable memories in paradise.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in duration-700 delay-300">
          <Button 
            size="lg" 
            variant="secondary"
            className="w-full sm:w-auto shadow-strong"
            asChild
          >
            <a href="https://www.airbnb.com/l/2YZ74Hr2" target="_blank" rel="noopener noreferrer">
              Book on Airbnb
            </a>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white"
            asChild
          >
            <a 
              href="https://www.instagram.com/bahia_sirena?igsh=MTdqbTUwOXlwamdy&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Instagram className="h-5 w-5" />
              Follow on Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;
