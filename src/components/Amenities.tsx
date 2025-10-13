import { Waves, Flame, Tv, UtensilsCrossed, Wind, Refrigerator } from "lucide-react";

const Amenities = () => {
  const amenities = [
    {
      icon: Waves,
      title: "Private Pool",
      description: "Beautiful pool with children's area"
    },
    {
      icon: Flame,
      title: "BBQ Area",
      description: "Perfect for outdoor dining"
    },
    {
      icon: Tv,
      title: "Social Area",
      description: "Spacious area with TV and seating"
    },
    {
      icon: UtensilsCrossed,
      title: "Full Kitchen",
      description: "Equipped with everything you need"
    },
    {
      icon: Refrigerator,
      title: "Modern Appliances",
      description: "Freezer and all cooking amenities"
    },
    {
      icon: Wind,
      title: "Tropical Setting",
      description: "Surrounded by lush greenery"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-in fade-in duration-700">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Premium Amenities
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need for a perfect vacation
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
                <h3 className="font-semibold text-lg mb-1">{amenity.title}</h3>
                <p className="text-muted-foreground text-sm">{amenity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
