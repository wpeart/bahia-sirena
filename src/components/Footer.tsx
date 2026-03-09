import { Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Bahia Sirena</h3>
            <p className="text-background/80">
              {t("footer.tagline")}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t("footer.quickInfo")}</h4>
            <ul className="space-y-2 text-background/80">
              <li>{t("footer.bedrooms")}</li>
              <li>{t("footer.guests")}</li>
              <li>{t("footer.bathrooms")}</li>
              <li>{t("footer.pool")}</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t("footer.connect")}</h4>
            <a 
              href="https://www.instagram.com/bahia_sirena?igsh=MTdqbTUwOXlwamdy&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
            >
              <Instagram className="h-5 w-5" />
              @bahia_sirena
            </a>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; {new Date().getFullYear()} Bahia Sirena. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
