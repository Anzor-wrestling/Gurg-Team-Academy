import { motion } from "framer-motion";
import { Instagram, Trophy } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[100svh] flex items-end md:items-center justify-center overflow-hidden">
      {/* Background with slow zoom */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background md:from-background/80 md:via-background/60" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-5 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-bold uppercase tracking-wider mb-4 leading-none">
            <span className="font-display gradient-text-red text-[52px] sm:text-6xl md:text-7xl lg:text-8xl">GURG TEAM</span>
            <br />
            <span className="font-display text-foreground inline-block mt-2 text-[27px] sm:text-4xl md:text-7xl lg:text-8xl">ANZOR RADZHABOV</span>
          </h1>
        </motion.div>

        <motion.p
          className="text-muted-foreground text-base md:text-2xl max-w-2xl md:mx-auto mb-1 md:mb-4 font-body"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Mixed martial arts and grappling
        </motion.p>

        <motion.p
          className="text-foreground/80 text-base md:text-xl max-w-xl md:mx-auto mb-5 md:mb-8 font-body"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Подготовка детей и взрослых
        </motion.p>

        <motion.p
          className="text-white text-sm md:text-xl font-heading uppercase tracking-widest mb-7 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          «Это не кружок, это школа характера.»
        </motion.p>

        {/* Social buttons */}
        <motion.div
          className="flex items-center md:justify-center gap-3 md:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="https://wa.me/77073843775?text=Здравствуйте!%20Хочу%20записаться%20на%20пробную%20тренировку."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero flex-1 md:flex-none h-14 px-4 md:px-8 rounded-2xl font-heading text-[15px] sm:text-base"
          >
            Записаться на пробную
          </a>
          <a
  href="https://wa.me/77073843775"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-social hidden md:inline-flex"
  aria-label="WhatsApp"
>
  <FaWhatsapp size={24} />
</a>
          <a
            href="https://instagram.com/gurg_team"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-social"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
