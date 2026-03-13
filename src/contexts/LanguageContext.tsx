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
    "about.description":
      "Experimenta la combinación perfecta de comodidad y belleza tropical en Bahia Sirena. Nuestra casa vacacional ofrece todo lo que necesitas para una escapada inolvidable en Costa Rica.",
    "about.description2": "Disfrute en familia sin perder la privacidad.",
    "about.bedrooms": "3 Habitaciones",
    "about.bedroomsDesc": "Espaciosas habitaciones diseñadas para tu comodidad",
    "about.guests": "Hasta 12 Huéspedes",
    "about.guestsDesc": "Perfecto para familias y grupos",
    "about.bathrooms": "3 Baños Completos",
    "about.bathroomsDesc": "Cada habitación con baño privado",
    "about.parking": "Estacionamiento Privado",
    "about.parkingDesc":
      "Estacionamiento privado y seguro con espacio para más de cinco vehículos.",
    "about.beach": "Cercanía a la Playa",
    "about.beachDesc": "A solo 5 minutos de Playa Bejuco",
    "about.restaurant": "Cerca de Esterillos Town Center",
    "about.restaurantDesc":
      "A 5 minutos de restaurantes, supermercados y tiendas de souvenirs.",

    // Gallery
    "gallery.title": "Galería de Fotos",
    "gallery.subtitle": "Descubre los hermosos espacios que te esperan",

    // Amenities
    "amenities.title": "Amenidades Premium",
    "amenities.subtitle":
      "Todo lo que necesitas para unas vacaciones perfectas",
    "amenities.pool": "Piscina Privada",
    "amenities.poolDesc": "Hermosa piscina con área infantil",
    "amenities.bbq": "Área de BBQ",
    "amenities.bbqDesc": "Perfecta para cenas al aire libre",
    "amenities.social": "Área Social",
    "amenities.socialDesc":
      "Sala espaciosa equipada con TV y cómodos lugares para sentarse.",
    "amenities.kitchen": "Cocina Completa",
    "amenities.kitchenDesc":
      "Con todo lo necesario para tu estadía, además de enfriador, congelador y refrigeradora grande.",
    "amenities.appliances": "Electrodomésticos Modernos",
    "amenities.appliancesDesc":
      "Cocina completa con congelador y utensilios de cocina.",
    "amenities.tropical": "Entorno Tropical",
    "amenities.tropicalDesc": "Rodeado de exuberante vegetación",
    "amenities.wifi": "Wi-Fi Gratis",
    "amenities.wifiDesc":
      "Internet satelital de alta velocidad, con conexión estable en toda la propiedad.",
    "amenities.bedrooms": "Habitaciones",
    "amenities.bedroomsDesc":
      "Habitaciones amplias y acogedoras, cada una con aire acondicionado y baño privado.",

    // Booking CTA
    "cta.title": "¿Listo para tu Aventura Costarricense?",
    "cta.description":
      "Reserva tu estadía en Bahia Sirena hoy y crea recuerdos inolvidables en el paraíso.",
    "cta.bookAirbnb": "Reservar en Airbnb",
    "cta.bookBooking": "Reservar en Booking.com",
    "cta.whatsapp": "Contactar por WhatsApp",
    "cta.followInstagram": "Síguenos en Instagram",

    // Footer
    "footer.tagline":
      "Tu escape tropical en Esterillos Este, Puntarenas, Costa Rica",
    "footer.quickInfo": "Información Rápida",
    "footer.bedrooms": "3 Habitaciones",
    "footer.guests": "Hasta 12 Huéspedes",
    "footer.bathrooms": "3 ½ Baños",
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
    "about.description":
      "Experience the perfect blend of comfort and tropical beauty at Bahia Sirena. Our vacation home offers everything you need for an unforgettable Costa Rican getaway.",
    "about.description2":
      "Share special moments with your family without sacrificing privacy.",
    "about.bedrooms": "3 Bedrooms",
    "about.bedroomsDesc":
      "Spacious, comfortable rooms created with your relaxation in mind.",
    "about.guests": "Up to 12 Guests",
    "about.guestsDesc": "Perfect getaway for families and groups.",
    "about.bathrooms": "3 Full Bathrooms",
    "about.bathroomsDesc": "Private bathroom in every room.",
    "about.parking": "Private Parking",
    "about.parkingDesc":
      "Private, secure parking area accommodating over five vehicles.",
    "about.beach": "Beach Proximity",
    "about.beachDesc": "Located just 5 minutes away from Playa Bejuco.",
    "about.restaurant": "Nearby Restaurants",
    "about.restaurantDesc":
      "Conveniently located just 5 minutes from restaurants, supermarkets, and souvenir stores.",

    // Gallery
    "gallery.title": "Photo Gallery",
    "gallery.subtitle": "Discover the beautiful spaces awaiting you",

    // Amenities
    "amenities.title": "Premium Amenities",
    "amenities.subtitle": "Everything you need for a perfect vacation",
    "amenities.pool": "Private Pool",
    "amenities.poolDesc": "Family-friendly pool with a children's area.",
    "amenities.bbq": "BBQ Area",
    "amenities.bbqDesc": "A great spot for outdoor meals",
    "amenities.social": "Social Area",
    "amenities.socialDesc": "Large common area with TV and plenty of seating.",
    "amenities.kitchen": "Full Kitchen",
    "amenities.kitchenDesc":
      "Fully equipped for your stay, featuring a cooler, freezer, and a spacious refrigerator.",
    "amenities.appliances": "Modern Appliances",
    "amenities.appliancesDesc":
      "Well-equipped kitchen with freezer and cooking essentials.",
    "amenities.tropical": "Tropical Setting",
    "amenities.tropicalDesc": "Set amidst lush tropical greenery.",
    "amenities.wifi": "Free Wi-Fi",
    "amenities.wifiDesc":
      "Reliable high-speed satellite internet, with stable coverage across the entire property.",
    "amenities.bedrooms": "Bedrooms",
    "amenities.bedroomsDesc":
      "Spacious and comfortable rooms, all featuring air conditioning and private bathrooms.",

    // Booking CTA
    "cta.title": "Ready for Your Costa Rican Adventure?",
    "cta.description":
      "Book your stay at Bahia Sirena today and create unforgettable memories in paradise.",
    "cta.bookAirbnb": "Book on Airbnb",
    "cta.bookBooking": "Book on Booking.com",
    "cta.whatsapp": "Contact via WhatsApp",
    "cta.followInstagram": "Follow on Instagram",

    // Footer
    "footer.tagline":
      "Your tropical escape in Esterillos Este, Puntarenas, Costa Rica",
    "footer.quickInfo": "Quick Info",
    "footer.bedrooms": "3 Bedrooms",
    "footer.guests": "Up to 12 Guests",
    "footer.bathrooms": "3 ½ Bathrooms",
    "footer.pool": "Private Pool",
    "footer.connect": "Connect",
    "footer.rights": "All rights reserved.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

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
