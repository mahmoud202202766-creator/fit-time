import { useTranslation } from "react-i18next";
import SectionTitle from "../ui/SectionTitle";
import Reveal from "../ui/Reveal";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="scroll-mt-16 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
        <Reveal>
          <SectionTitle
            align="start"
            label={t("about.label")}
            title={`${t("about.title1")} ${t("about.title2")}`}
            className="mb-6"
          />
          <p className="mb-4 text-white/70 leading-relaxed">{t("about.p1")}</p>
          <p className="text-white/70 leading-relaxed">{t("about.p2")}</p>
        </Reveal>

        <Reveal delay={150}>
          <img
            src="/images/about/about.jpg"
            alt="FIT TIME gym"
            loading="lazy"
            className="aspect-4/3 w-full rounded-lg bg-card object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
