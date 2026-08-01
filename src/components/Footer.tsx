import { Instagram, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            
            <span className="font-heading text-lg uppercase tracking-wider">
              GURG TEAM
            </span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
  href="https://wa.me/77073843775"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-social"
  aria-label="WhatsApp"
>
  <FaWhatsapp size={24} />
</a>
            <a
              href="https://instagram.com/gurg_team"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
