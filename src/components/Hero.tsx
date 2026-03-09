import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/pool-dramatic.jpeg";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />
      </div>
      
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-4 text-5xl font-bold text-white drop-shadow-lg md:text-7xl animate-in fade-in duration-700">
          Bahia Sirena
        </h1>
        <p className="mb-2 text-xl text-white drop-shadow-md md:text-2xl animate-in fade-in duration-700 delay-150">
          {t("hero.subtitle")}
        </p>
        <p className="mb-8 text-lg text-white/90 drop-shadow-md animate-in fade-in duration-700 delay-300">
          {t("hero.location")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in duration-700 delay-500">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 shadow-strong"
            asChild
          >
            <a href="https://www.airbnb.com/l/2YZ74Hr2" target="_blank" rel="noopener noreferrer">
              {t("hero.bookAirbnb")}
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="secondary"
            className="shadow-strong"
            asChild
          >
            <a href="https://www.booking.com/hotel/cr/hermosa-casa-en-esterillos-este-esterillos-este.html?chal_t=1773034909359&force_referer=" target="_blank" rel="noopener noreferrer">
              {t("hero.bookBooking")}
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white"
            asChild
          >
            <a 
              href="https://wa.me/50688414845" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              {t("hero.whatsapp")}
            </a>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg 
          className="h-8 w-8 text-white drop-shadow-lg" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
