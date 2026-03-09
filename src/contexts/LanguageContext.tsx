import { createContext, useContext, useState, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  es: {
    // Hero
    "hero.subtitle": "Tu Paraíso Tropical en Costa Rica",
    "hero.location": "Esterillos Este, Puntarenas",
    "hero.bookAirbnb": "Reservar en Airbnb",
    "hero.bookBooking": "Reservar en Booking.com",
    "hero.whatsapp": "Contactar por WhatsApp",
    
    // About
    "about.title": "Bienvenidos al Paraíso",
    "about.description": "Experimenta la combinación perfecta de comodidad y belleza tropical en Bahia Sirena. Nuestra casa vacacional ofrece todo lo que necesitas para una escapada inolvidable en Costa Rica.",
    "about.bedrooms": "3 Habitaciones",
    "about.bedroomsDesc": "Espaciosas y cómodas habitaciones",
    "about.guests": "Hasta 12 Huéspedes",
    "about.guestsDesc": "Perfecto para familias y grupos",
    "about.bathrooms": "3 Baños Completos",
    "about.bathroomsDesc": "Cada habitación con baño privado",
    "about.parking": "Estacionamiento Privado",
    "about.parkingDesc": "Amplio espacio para varios vehículos",
    "about.beach": "Cercanía a la Playa",
    "about.beachDesc": "A solo 5 minutos de la Playa Bejuco",
    "about.restaurant": "Cerca de Esterillos Town Center",
    "about.restaurantDesc": "A 5 minutos de restaurantes, supermercados y tiendas de souvenirs.",
    
    // Gallery
    "gallery.title": "Galería de Fotos",
    "gallery.subtitle": "Descubre los hermosos espacios que te esperan",
    
    // Amenities
    "amenities.title": "Amenidades Premium",
    "amenities.subtitle": "Todo lo que necesitas para unas vacaciones perfectas",
    "amenities.pool": "Piscina Privada",
    "amenities.poolDesc": "Hermosa piscina con área infantil",
    "amenities.bbq": "Área de BBQ",
    "amenities.bbqDesc": "Perfecta para cenas al aire libre",
    "amenities.social": "Área Social",
    "amenities.socialDesc": "Amplio espacio con TV y asientos",
    "amenities.kitchen": "Cocina Completa",
    "amenities.kitchenDesc": "Equipada con todo lo necesario",
    "amenities.appliances": "Electrodomésticos Modernos",
    "amenities.appliancesDesc": "Congelador y todo para cocinar",
    "amenities.tropical": "Entorno Tropical",
    "amenities.tropicalDesc": "Rodeado de exuberante vegetación",
    "amenities.wifi": "Wi-Fi Gratis",
    "amenities.wifiDesc": "Conexión rápida y estable en toda la propiedad",
    
    // Booking CTA
    "cta.title": "¿Listo para tu Aventura Costarricense?",
    "cta.description": "Reserva tu estadía en Bahia Sirena hoy y crea recuerdos inolvidables en el paraíso.",
    "cta.bookAirbnb": "Reservar en Airbnb",
    "cta.bookBooking": "Reservar en Booking.com",
    "cta.whatsapp": "Contactar por WhatsApp",
    "cta.followInstagram": "Síguenos en Instagram",
    
    // Footer
    "footer.tagline": "Tu escape tropical en Esterillos Este, Puntarenas, Costa Rica",
    "footer.quickInfo": "Información Rápida",
    "footer.bedrooms": "3 Habitaciones",
    "footer.guests": "Hasta 12 Huéspedes",
    "footer.bathrooms": "3 Baños Completos",
    "footer.pool": "Piscina Privada",
    "footer.connect": "Conectar",
    "footer.rights": "Todos los derechos reservados.",
  },
  en: {
    // Hero
    "hero.subtitle": "Your Tropical Paradise in Costa Rica",
    "hero.location": "Esterillos Este, Puntarenas",
    "hero.bookAirbnb": "Book on Airbnb",
    "hero.bookBooking": "Book on Booking.com",
    "hero.whatsapp": "Contact via WhatsApp",
    
    // About
    "about.title": "Welcome to Paradise",
    "about.description": "Experience the perfect blend of comfort and tropical beauty at Bahia Sirena. Our vacation home offers everything you need for an unforgettable Costa Rican getaway.",
    "about.bedrooms": "3 Bedrooms",
    "about.bedroomsDesc": "Spacious and comfortable rooms",
    "about.guests": "Up to 12 Guests",
    "about.guestsDesc": "Perfect for families and groups",
    "about.bathrooms": "3 Full Bathrooms",
    "about.bathroomsDesc": "Each bedroom with private bathroom",
    "about.parking": "Private Parking",
    "about.parkingDesc": "Spacious area for multiple vehicles",
    "about.beach": "Beach Proximity",
    "about.beachDesc": "Just 5 minutes from Bejuco Beach",
    "about.restaurant": "Nearby Restaurants",
    "about.restaurantDesc": "Just 5 minutes from restaurants, supermarkets, and souvenir shops",
    
    // Gallery
    "gallery.title": "Photo Gallery",
    "gallery.subtitle": "Discover the beautiful spaces awaiting you",
    
    // Amenities
    "amenities.title": "Premium Amenities",
    "amenities.subtitle": "Everything you need for a perfect vacation",
    "amenities.pool": "Private Pool",
    "amenities.poolDesc": "Beautiful pool with children's area",
    "amenities.bbq": "BBQ Area",
    "amenities.bbqDesc": "Perfect for outdoor dining",
    "amenities.social": "Social Area",
    "amenities.socialDesc": "Spacious area with TV and seating",
    "amenities.kitchen": "Full Kitchen",
    "amenities.kitchenDesc": "Equipped with everything you need",
    "amenities.appliances": "Modern Appliances",
    "amenities.appliancesDesc": "Freezer and all cooking amenities",
    "amenities.tropical": "Tropical Setting",
    "amenities.tropicalDesc": "Surrounded by lush greenery",
    "amenities.wifi": "Free Wi-Fi",
    "amenities.wifiDesc": "Fast and reliable internet throughout the property",
    
    // Booking CTA
    "cta.title": "Ready for Your Costa Rican Adventure?",
    "cta.description": "Book your stay at Bahia Sirena today and create unforgettable memories in paradise.",
    "cta.bookAirbnb": "Book on Airbnb",
    "cta.bookBooking": "Book on Booking.com",
    "cta.whatsapp": "Contact via WhatsApp",
    "cta.followInstagram": "Follow on Instagram",
    
    // Footer
    "footer.tagline": "Your tropical escape in Esterillos Este, Puntarenas, Costa Rica",
    "footer.quickInfo": "Quick Info",
    "footer.bedrooms": "3 Bedrooms",
    "footer.guests": "Up to 12 Guests",
    "footer.bathrooms": "3 Full Bathrooms",
    "footer.pool": "Private Pool",
    "footer.connect": "Connect",
    "footer.rights": "All rights reserved.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("es");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
