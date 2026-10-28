import { useTranslation } from "react-i18next";
import Button from "../ui/Button";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center bg-card bg-cover bg-center pt-16"
      style={{ backgroundImage: "url('/images/hero/hero.jpg')" }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/60 to-black/50" />

      <div className="relative mx-auto w-full max-w-6xl px-4">
        <h1 className="text-4xl font-extrabold uppercase leading-tight md:text-6xl">
          {t("hero.title1")} <br />
          {t("hero.title2")} <br />
          <span className="text-accent">{t("hero.title3")}</span>
        </h1>
        <p className="mt-4 max-w-md text-white/80">{t("hero.subtitle")}</p>
        <Button
          className="mt-8"
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          {t("hero.cta")}
        </Button>
      </div>
    </section>
  );
}
