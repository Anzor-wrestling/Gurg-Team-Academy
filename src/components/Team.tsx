import { motion } from "framer-motion";
import student1 from "@/assets/student-1.jpg";
import student2 from "@/assets/student-2.jpg";
import student3 from "@/assets/student-3.jpg";
import student4 from "@/assets/student-4.jpg";

const students = [
  { 
    image: student1,
    name: "Невядомский Владиник",
    level: "Чемпион Казахстана и мира по MMA и грэпплингу • МС по MMA и грэпплингу",
    achievement: ""
  },
  { 
    image: student2,
    name: "Куркаев Салават",
    level: "Чемпион Кубка Казахстана по Arashi MMA • КМС • Многократный чемпион турниров по MMA и грэпплингу",
    achievement: ""
  },
  { 
    image: student3,
    name: "Акберген Абильмансур",
    level: "Действующий чемпион международного турнира AIGA по грэпплингу",
    achievement: ""
  },
  { 
    image: student4,
    name: "Каримбаев Бахтиер",
    level: "Чемпион мира по панкратиону • Чемпион KZ по BJJ • Чемпион AIGA • Призёр ЧРК (Arashi MMA, UWW Grappling)",
    achievement: ""
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Team = () => {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            Наши <span className="gradient-text-red">Чемпионы</span>
          </h2>
          <p className="section-subheading mx-auto">
            Ученики, которые достигли вершины в боевых искусствах
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {students.map((student, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg"
              variants={item}
              transition={{ duration: 0.5 }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-square">
                <motion.img
                  src={student.image}
                  alt={student.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                {/* Dark Overlay on Hover */}
                <motion.div
                  className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex flex-col justify-end p-6"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-heading text-2xl font-bold text-white mb-2">
                    {student.name}
                  </h3>
                  <p className="text-gray-200 text-sm mb-2">
                    {student.level}
                  </p>
                  <p className="text-gray-100 text-xs leading-relaxed">
                    {student.achievement}
                  </p>
                </motion.div>
              </div>

              {/* Card Info (visible always) */}
              <div className="p-4 bg-card border border-border">
                <h3 className="font-heading text-lg font-bold text-foreground">
                  {student.name}
                </h3>
                <p className="text-primary text-sm font-heading uppercase tracking-wider">
                  {student.level}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-muted-foreground text-lg mb-6">
            Это можешь быть и ты! Начни свою трансформацию прямо сейчас.
          </p>
          <a
          href="https://wa.me/77073843775?text=Здравствуйте!%20Хочу%20записаться%20на%20тренировку."
            target="_blank"
               rel="noopener noreferrer"
  className="inline-block px-8 py-3 bg-primary text-primary-foreground font-heading uppercase tracking-wider rounded hover:bg-primary/90 transition-colors"
>
  Начать тренировки
        </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
