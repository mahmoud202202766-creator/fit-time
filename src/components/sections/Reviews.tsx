import { useTranslation } from "react-i18next";
import SectionTitle from "../ui/SectionTitle";
import ReviewCard from "../ui/ReviewCard";
import Reveal from "../ui/Reveal";

export default function Reviews() {
  const { t } = useTranslation();
  const items = t("reviews.items", { returnObjects: true }) as {
    name: string;
    text: string;
  }[];

  return (
    <section id="reviews" className="scroll-mt-16 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle label={t("reviews.label")} title={t("reviews.title")} />

        <div className="grid gap-4 md:grid-cols-3">
          {items.map((r, i) => (
            <Reveal key={r.name} delay={i * 100}>
              <ReviewCard name={r.name} text={r.text} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
