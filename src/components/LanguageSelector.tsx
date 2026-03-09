import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-full px-3 py-2 shadow-strong">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <Button
        variant={language === "es" ? "default" : "ghost"}
        size="sm"
        className="h-7 px-3 text-sm"
        onClick={() => setLanguage("es")}
      >
        ES
      </Button>
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        className="h-7 px-3 text-sm"
        onClick={() => setLanguage("en")}
      >
        EN
      </Button>
    </div>
  );
};

export default LanguageSelector;
