import {
  Users,
  Home,
  Bath,
  ParkingCircle,
  Palmtree,
  Utensils,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Home,
      titleKey: "about.bedrooms",
      descKey: "about.bedroomsDesc",
    },
    {
      icon: Users,
      titleKey: "about.guests",
      descKey: "about.guestsDesc",
    },
    {
      icon: Bath,
      titleKey: "about.bathrooms",
      descKey: "about.bathroomsDesc",
    },
    {
      icon: ParkingCircle,
      titleKey: "about.parking",
      descKey: "about.parkingDesc",
    },
    {
      icon: Palmtree,
      titleKey: "about.beach",
      descKey: "about.beachDesc",
    },
    {
      icon: Utensils,
      titleKey: "about.restaurant",
      descKey: "about.restaurantDesc",
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-in fade-in duration-700">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            {t("about.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("about.description")}
          </p>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-4">
            {t("about.description2")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-card shadow-soft hover:shadow-strong transition-all duration-300 animate-in fade-in duration-700"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t(feature.titleKey)}
              </h3>
              <p className="text-muted-foreground">{t(feature.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
