import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const links = [
  { href: "#about", label: "Тренер" },
  { href: "#gallery", label: "Тренировки" },
  { href: "#team", label: "Чемпионы" },
  { href: "#schedule", label: "Расписание" },
  { href: "#contacts", label: "Контакты" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-3 inset-x-3 md:top-4 md:inset-x-6 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div
        className={`mx-auto max-w-6xl h-14 md:h-16 rounded-2xl flex items-center justify-between pl-5 pr-2 transition-colors duration-300 glass-strong ${
          scrolled ? "" : "md:bg-transparent md:border-transparent md:backdrop-blur-none"
        }`}
      >
        <a href="#hero" className="font-display text-xl md:text-2xl gradient-text-red tracking-wider">
          GURG TEAM
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Разделы">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-heading uppercase tracking-wider text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/77073843775"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Написать в WhatsApp"
          className="h-10 md:h-11 px-4 rounded-xl bg-primary text-primary-foreground font-heading uppercase tracking-wider text-sm flex items-center gap-2 hover:bg-primary/90 transition-colors"
        >
          <FaWhatsapp size={18} />
          <span className="hidden sm:inline">Написать</span>
        </a>
      </div>
    </motion.header>
  );
};

export default Header;
