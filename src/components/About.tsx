import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import coachImg1 from "@/assets/coach.webp";
import coachImg2 from "@/assets/coach-2.webp";
import coachImg3 from "@/assets/coach-3.webp";
import worldPoster from "@/assets/world-poster.webp";
import worldTeam from "@/assets/world-team.webp";
import worldMedals from "@/assets/world-medals.webp";

const coachImages = [coachImg1, coachImg2, coachImg3];

const fadeInLeft = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const fadeInRight = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const About = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % coachImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-14 md:py-24 bg-card">
      <div className="container mx-auto px-5 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Photo Carousel */}
          <motion.div
            className="relative"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-hidden rounded-3xl h-[460px] md:h-[600px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={coachImages[currentImage]}
                  alt="Тренер по боевым искусствам"
                  className="w-full h-full object-cover object-top absolute inset-0"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.7 }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
            {/* Red accent line */}
            <div className="hidden md:block absolute -bottom-4 -right-4 w-32 h-32 border-r-4 border-b-4 border-primary rounded-br-3xl" />
            
            {/* Carousel indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {coachImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImage ? "bg-primary w-6" : "bg-muted-foreground/50"
                  }`}
                  aria-label={`Фото ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="section-heading mb-6">
              О <span className="gradient-text-red">Тренере</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>
                <strong className="text-foreground">Более 11 лет опыта</strong> работы тренером в сфере боевых искусств и подготовки спортсменов. <br /> <strong className="text-foreground">Раджабов Анзор Имомалиевич - </strong><strong className="text-foreground">Чемпион мира 2026</strong>, основатель академии смешанных единоборств Gurg Team Academy, президент Федерации ARASHI MMA и обладатель черного пояса. Мастер спорта по вольной борьбе, тренер международного уровня, кандидат в мастера спорта по самбо, выпускник олимпийского резерва.
              </p>
              <ul className="space-y-2">
                <li className="glass rounded-2xl px-4 py-3 flex items-center gap-3 text-foreground font-medium text-base">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  Президент Федерации ARASHI MMA по Центральной Азии
                </li>
                <li className="glass rounded-2xl px-4 py-3 flex items-center gap-3 text-foreground font-medium text-base">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  Исполнительный член Международной федерации ARASHI-MMA
                </li>
              </ul>
              <p>
                <strong className="text-foreground">Дисциплина и характер</strong> - основа моей философии. Я не просто обучаю технике, я формирую личность, способную преодолевать любые трудности.
              </p>
              <p>
                <strong className="text-foreground">Безопасность</strong> - приоритет на каждой тренировке. Современное оборудование, индивидуальный подход, контроль нагрузки.
              </p>
              <p>
                <strong className="text-foreground">Результаты учеников</strong>: больше 20 чемпионов мира, Азии, Европы, мастера спорта, сотни детей и взрослых, открывших для себя силу единоборств.
              </p>
            </div>

            <motion.div
              className="mt-8 flex items-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="h-px flex-1 bg-border" />
              <span className="text-primary font-heading uppercase tracking-wider">
                Твой путь начинается здесь
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* World Championship 2026 */}
        <motion.div
          className="mt-12 md:mt-20 rounded-3xl p-4 md:p-8 border border-secondary/30 bg-secondary/5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-baseline justify-between gap-4 mb-4 md:mb-6">
            <h3 className="font-heading text-2xl md:text-4xl uppercase tracking-wider gradient-text-gold">
              Чемпионат мира 2026
            </h3>
            <span className="text-muted-foreground text-xs md:text-sm shrink-0">Arashi MMA</span>
          </div>
          <div className="grid md:grid-cols-[1fr_1fr] gap-3 md:gap-6">
            <img
              src={worldPoster}
              alt="Анзор Раджабов — чемпион мира Arashi MMA 2026"
              loading="lazy"
              className="w-full rounded-2xl bg-black object-contain"
            />
            <div className="grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-6">
              <img
                src={worldTeam}
                alt="Тренер и ученики Gurg Team на 3rd World Arashi MMA Championship 2026"
                loading="lazy"
                className="w-full h-48 md:h-full md:max-h-[420px] rounded-2xl object-cover"
              />
              <img
                src={worldMedals}
                alt="Медали чемпионата мира Arashi MMA 2026"
                loading="lazy"
                className="w-full h-48 md:h-full md:max-h-[420px] rounded-2xl object-cover object-[center_30%]"
              />
            </div>
          </div>
          <p className="mt-4 text-muted-foreground text-sm md:text-base">
            3rd World Arashi MMA Championship 2026 — тренер и ученики Gurg Team Academy с медалями чемпионата мира.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
