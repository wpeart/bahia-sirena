import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Bahia Sirena</h3>
            <p className="text-background/80">
              Your tropical escape in Esterillos Este, Puntarenas, Costa Rica
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Info</h4>
            <ul className="space-y-2 text-background/80">
              <li>3 Bedrooms</li>
              <li>Up to 12 Guests</li>
              <li>3 Full Bathrooms</li>
              <li>Private Pool</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
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
          <p>&copy; {new Date().getFullYear()} Bahia Sirena. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
