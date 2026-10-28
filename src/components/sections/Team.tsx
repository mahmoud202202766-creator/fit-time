import { useTranslation } from "react-i18next";
import SectionTitle from "../ui/SectionTitle";
import TrainerCard from "../ui/TrainerCard";
import Reveal from "../ui/Reveal";
import { trainerImages } from "../../data/trainers";

export default function Team() {
  const { t } = useTranslation();
  const items = t("team.items", { returnObjects: true }) as {
    name: string;
    role: string;
  }[];

  return (
    <section id="team" className="scroll-mt-16 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle label={t("team.label")} title={t("team.title")} />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {items.map((trainer, i) => (
            <Reveal key={trainer.name} delay={(i % 3) * 100}>
              <TrainerCard
                name={trainer.name}
                role={trainer.role}
                image={trainerImages[i]}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
