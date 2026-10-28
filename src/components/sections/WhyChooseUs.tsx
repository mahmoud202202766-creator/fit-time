import { useTranslation } from "react-i18next";
import { Dumbbell, Target, Zap, ArrowUpRight } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import Reveal from "../ui/Reveal";

const icons = [Dumbbell, Target, Zap];

export default function WhyChooseUs() {
  const { t } = useTranslation();
  const items = t("why.items", { returnObjects: true }) as {
    title: string;
    text: string;
  }[];

  return (
    <section id="why" className="scroll-mt-16 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle label={t("why.label")} title={t("why.title")} />

        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item, i) => {
            const Icon = icons[i];
            const highlighted = i === 1;
            return (
              <Reveal key={item.title} delay={i * 100}>
                <Card highlighted={highlighted} className="h-full space-y-4">
                  <Icon
                    size={40}
                    className={highlighted ? "text-black" : "text-accent"}
                  />
                  <h3 className="text-lg font-bold uppercase">{item.title}</h3>
                  <p
                    className={highlighted ? "text-black/70" : "text-white/60"}
                  >
                    {item.text}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-semibold uppercase"
                  >
                    {t("why.learnMore")}
                    <ArrowUpRight size={14} className="rtl:-scale-x-100" />
                  </a>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
