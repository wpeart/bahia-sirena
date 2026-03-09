import { Waves, Flame, Tv, UtensilsCrossed, Wind, Refrigerator } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Amenities = () => {
  const { t } = useLanguage();

  const amenities = [
    {
      icon: Waves,
      titleKey: "amenities.pool",
      descKey: "amenities.poolDesc"
    },
    {
      icon: Flame,
      titleKey: "amenities.bbq",
      descKey: "amenities.bbqDesc"
    },
    {
      icon: Tv,
      titleKey: "amenities.social",
      descKey: "amenities.socialDesc"
    },
    {
      icon: UtensilsCrossed,
      titleKey: "amenities.kitchen",
      descKey: "amenities.kitchenDesc"
    },
    {
      icon: Refrigerator,
      titleKey: "amenities.appliances",
      descKey: "amenities.appliancesDesc"
    },
    {
      icon: Wind,
      titleKey: "amenities.tropical",
      descKey: "amenities.tropicalDesc"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-in fade-in duration-700">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            {t("amenities.title")}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t("amenities.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-xl bg-card shadow-soft hover:shadow-strong transition-all duration-300 animate-in fade-in duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <amenity.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{t(amenity.titleKey)}</h3>
                <p className="text-muted-foreground text-sm">{t(amenity.descKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
