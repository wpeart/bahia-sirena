import { Users, Home, Bath } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Home,
      title: "3 Bedrooms",
      description: "Spacious and comfortable rooms"
    },
    {
      icon: Users,
      title: "Up to 12 Guests",
      description: "Perfect for families and groups"
    },
    {
      icon: Bath,
      title: "3 Full Bathrooms",
      description: "Each bedroom with private bathroom"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-in fade-in duration-700">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Welcome to Paradise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the perfect blend of comfort and tropical beauty at Bahia Sirena. 
            Our vacation home offers everything you need for an unforgettable Costa Rican getaway.
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
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
