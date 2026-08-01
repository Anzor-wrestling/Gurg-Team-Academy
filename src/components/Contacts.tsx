import { motion } from "framer-motion";
import { MapPin, Phone, Instagram, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { getBranches } from "./Schedule";

interface ContactsProps {
  selectedBranch?: string;
  onBranchChange?: (branchId: string) => void;
}

const Contacts = ({ selectedBranch, onBranchChange }: ContactsProps) => {
  const branches = getBranches();
  const activeBranch = branches.find((b) => b.id === selectedBranch) ?? branches[0];

  return (
    <section id="contacts" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            <span className="gradient-text-red">Контакты</span>
          </h2>
          <p className="section-subheading mx-auto">
            Запишись на первую бесплатную тренировку
          </p>
        </motion.div>

        {/* Branch selector */}
        <motion.div
          className="flex justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {branches.map((branch) => (
            <button
              key={branch.id}
              onClick={() => onBranchChange?.(branch.id)}
              className={`px-6 py-3 font-heading uppercase tracking-wider text-sm md:text-base transition-all duration-300 border-2 ${
                selectedBranch === branch.id
                  ? "bg-primary border-primary text-primary-foreground"
                  : "bg-transparent border-muted-foreground/30 text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {branch.name}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              key={activeBranch.id + "-address"}
              className="flex items-start gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="btn-social shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-heading text-lg uppercase text-foreground mb-1">Адрес</h3>
                <p className="text-muted-foreground">
                  {activeBranch.address}
                </p>
              </div>
            </motion.div>

            <div className="flex items-start gap-4">
              <div className="btn-social shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <h3 className="font-heading text-lg uppercase text-foreground mb-1">Время работы</h3>
                <p className="text-muted-foreground">
                  Пн-Сб: 09:30 - 21:30<br />
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <motion.a
               
                
                className="btn-social shrink-0"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Phone size={20} />
              </motion.a>
              <div>
                <h3 className="font-heading text-lg uppercase text-foreground mb-1">Телефон</h3>
                <a >
                  +7 (707) 384-37-75
                  <br />
                  +7 (700) 900-04-98
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="pt-4">
              <h3 className="font-heading text-lg uppercase text-foreground mb-4">Социальные сети</h3>
              <div className="flex gap-4">
                <motion.a
  href="https://wa.me/77073843775"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-social"
  whileHover={{ scale: 1.1, y: -2 }}
  aria-label="WhatsApp"
>
  <FaWhatsapp size={20} />
</motion.a>
                <motion.a
                  href="https://instagram.com/gurg_team"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-social"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Instagram size={20} />
                </motion.a>
                
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            key={activeBranch.id + "-map"}
            className="relative h-[400px] overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <iframe
              src={activeBranch.mapUrl}
              className="w-full h-full border-0 grayscale contrast-125"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Карта"
            />
            <div className="absolute inset-0 border border-border pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
