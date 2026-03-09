import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import exteriorSunset from "@/assets/exterior-sunset.jpeg";

const BookingCTA = () => {
  const { t } = useLanguage();

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
          {t("cta.title")}
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-in fade-in duration-700 delay-150">
          {t("cta.description")}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in duration-700 delay-300">
          <Button 
            size="lg" 
            variant="secondary"
            className="w-full sm:w-auto shadow-strong"
            asChild
          >
            <a href="https://www.airbnb.com/l/2YZ74Hr2" target="_blank" rel="noopener noreferrer">
              {t("cta.bookAirbnb")}
            </a>
          </Button>
          
          <Button 
            size="lg" 
            variant="secondary"
            className="w-full sm:w-auto shadow-strong"
            asChild
          >
            <a href="https://www.booking.com/hotel/cr/hermosa-casa-en-esterillos-este-esterillos-este.html" target="_blank" rel="noopener noreferrer">
              {t("cta.bookBooking")}
            </a>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white"
            asChild
          >
            <a 
              href="https://wa.me/50688414845" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              {t("cta.whatsapp")}
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
              {t("cta.followInstagram")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;
