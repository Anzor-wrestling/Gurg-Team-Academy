import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Home, User, Trophy, CalendarDays, MapPin } from "lucide-react";

const items = [
  { id: "hero", label: "Главная", icon: Home },
  { id: "about", label: "Тренер", icon: User },
  { id: "team", label: "Чемпионы", icon: Trophy },
  { id: "schedule", label: "Расписание", icon: CalendarDays },
  { id: "contacts", label: "Контакты", icon: MapPin },
];

/** iOS-style glass tab bar, shown only on phones. */
const BottomNav = () => {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      aria-label="Разделы"
      className="md:hidden fixed inset-x-3 z-50 glass-strong rounded-[26px] grid grid-cols-5 h-[68px]"
      style={{ bottom: "calc(12px + env(safe-area-inset-bottom))" }}
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
    >
      {items.map(({ id, label, icon: Icon }) => {
        const isActive = active === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            aria-current={isActive ? "true" : undefined}
            className={`flex flex-col items-center justify-center gap-1 text-[10px] font-medium transition-colors ${
              isActive ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <Icon size={22} strokeWidth={isActive ? 2.4 : 2} />
            {label}
          </a>
        );
      })}
    </motion.nav>
  );
};

export default BottomNav;
