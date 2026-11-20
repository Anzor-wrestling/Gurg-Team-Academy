import { motion } from "framer-motion";
import { useState } from "react";

const branches = [
  {
    id: "kenesary",
    name: "Кенесары",
    address: "г. Астана, ул. Кенесары, д. 47",
    // Яндекс. Виджет (iframe). Если у второго филиала другая карта — вставь сюда его um=constructor...
    mapUrl:"https://yandex.ru/map-widget/v1/?um=constructor%3A43d6269b8d3ae2ea8c22209f26bc347784def1822eaedd91001de0a8e68dbc10&source=constructor",
    schedule: [
      { day: "Вт, Чт, Сб", time: "09:30 - 11:00", group: "Дети", age: "10-12 лет" },
      { day: "Вт, Чт, Сб", time: "17:30 - 19:00", group: "Подростки", age: "12-14 лет" },
      { day: "Вт, Чт, Сб", time: "19:00 - 20:00", group: "Дети", age: "5-10 лет" },
      { day: "Вт, Чт, Сб", time: "20:00 - 21:30", group: "Подростки/Взрослые", age: "15+" },
    ],
  },
  {
    id: "kosshygululy",
    name: "Косшыгулулы",
    address: "г. Астана, ул. Косшыгулулы, д. 11/3",
    // ВАЖНО: поставь реальный constructor для этого филиала (сейчас стоит тот же, как заглушка)
    mapUrl:
      "https://yandex.ru/map-widget/v1/?um=constructor%3Aea6e602ed24d52ef63ee442db357ca4224d31692720dac113151341f7505ba7f&source=constructor",
    schedule: [
      { day: "Пн, Ср, Пт", time: "09:30 - 11:00", group: "Дети", age: "10-14 лет" },
      { day: "Пн, Ср, Пт", time: "19:00 - 20:00", group: "Дети", age: "4-10 лет" },
      { day: "Пн, Ср, Пт", time: "20:00 - 21:30", group: "Подростки/Взрослые", age: "15+" },
    ],
  },
];

export type Branch = (typeof branches)[0];
export const getBranches = () => branches;

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

interface ScheduleProps {
  selectedBranch?: string;
  onBranchChange?: (branchId: string) => void;
}

const Schedule = ({ selectedBranch, onBranchChange }: ScheduleProps) => {
  const [internalBranch, setInternalBranch] = useState(branches[0].id);

  const activeBranchId = selectedBranch ?? internalBranch;
  const setActiveBranch = onBranchChange ?? setInternalBranch;

  const activeBranch = branches.find((b) => b.id === activeBranchId) ?? branches[0];

  return (
    <section id="schedule" className="py-14 md:py-24 bg-card">
      <div className="container mx-auto px-5 md:px-6">
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            <span className="gradient-text-red">Расписание</span>
          </h2>
          <p className="section-subheading mx-auto">Выбери удобное время для тренировок</p>
        </motion.div>

        {/* Branch selector — glass segmented control */}
        <motion.div
          className="glass rounded-2xl p-1 grid grid-cols-2 gap-1 max-w-md mx-auto mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {branches.map((branch) => (
            <button
              key={branch.id}
              onClick={() => setActiveBranch(branch.id)}
              className={`h-11 rounded-xl font-heading uppercase tracking-wider text-sm md:text-base transition-all duration-300 ${
                activeBranchId === branch.id
                  ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(0_85%_50%/0.35)]"
                  : "bg-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {branch.name}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Header */}
          <div className="hidden md:grid grid-cols-4 gap-4 pb-4 border-b-2 border-primary mb-4">
            <span className="font-heading uppercase tracking-wider text-primary text-sm md:text-base">День</span>
            <span className="font-heading uppercase tracking-wider text-primary text-sm md:text-base">Время</span>
            <span className="font-heading uppercase tracking-wider text-primary text-sm md:text-base">Группа</span>
            <span className="font-heading uppercase tracking-wider text-primary text-sm md:text-base">Возраст</span>
          </div>

          {/* Rows: cards on mobile, table on desktop */}
          <motion.div key={activeBranchId} className="flex flex-col gap-2 md:block" variants={container} initial="hidden" animate="visible">
            {activeBranch.schedule.map((row, index) => (
              <motion.div
                key={index}
                className="glass rounded-2xl px-4 py-3 flex items-center justify-between md:rounded-none md:bg-transparent md:border-0 md:border-b md:border-border md:backdrop-blur-none md:px-0 md:py-4 md:grid md:grid-cols-4 md:gap-4 md:hover:bg-muted transition-colors"
                variants={item}
                transition={{ duration: 0.4 }}
              >
                <div className="flex flex-col md:contents">
                  <span className="font-heading text-foreground text-lg md:text-base md:order-2 md:font-body md:text-muted-foreground">{row.time}</span>
                  <span className="text-muted-foreground text-xs md:text-base md:order-1 md:font-heading md:text-foreground">{row.day}</span>
                </div>
                <div className="flex flex-col items-end md:contents">
                  <span className="text-foreground text-sm font-medium md:text-base md:font-normal md:order-3">{row.group}</span>
                  <span className="text-secondary text-xs md:text-base md:text-muted-foreground md:order-4">{row.age}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Yandex Map */}
        <div className="max-w-4xl mx-auto mt-8 md:mt-10 rounded-2xl overflow-hidden border border-border">
          <iframe
            key={activeBranchId}
            src={activeBranch.mapUrl}
            width="100%"
            height="340"
            frameBorder={0}
            style={{ border: 0 }}
            allowFullScreen
          />
        </div>

        <motion.p
          className="text-center text-muted-foreground mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          * Индивидуальные тренировки по договорённости
        </motion.p>
      </div>
    </section>
  );
};

export default Schedule;
