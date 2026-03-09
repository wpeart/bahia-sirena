import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import poolDay from "@/assets/pool-day.jpeg";
import poolNight from "@/assets/pool-night.jpeg";
import poolSide from "@/assets/pool-side.jpeg";
import poolBlueSky from "@/assets/pool-blue-sky.jpeg";
import corridor from "@/assets/corridor.jpeg";
import socialArea from "@/assets/social-area.jpeg";
import bedroom from "@/assets/bedroom.jpeg";
import nightView from "@/assets/night-view.jpeg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { t } = useLanguage();

  const images = [
    { src: poolDay, alt: "Pool area during daytime" },
    { src: poolNight, alt: "Pool illuminated at night" },
    { src: socialArea, alt: "Social area with wooden ceiling" },
    { src: corridor, alt: "Covered corridor with natural light" },
    { src: bedroom, alt: "Comfortable bedroom" },
    { src: poolSide, alt: "Pool side view" },
    { src: poolBlueSky, alt: "Pool under blue skies" },
    { src: nightView, alt: "Property exterior at night" }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-in fade-in duration-700">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            {t("gallery.title")}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t("gallery.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer aspect-square animate-in fade-in duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Property view"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
