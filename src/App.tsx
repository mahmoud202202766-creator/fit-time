import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/layout/LanguageSwitcher";

export default function App() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-6">
      <LanguageSwitcher />
      <h1 className="text-4xl font-bold text-center leading-tight">
        {t("hero.title1")} <br />
        {t("hero.title2")} <br />
        <span className="text-accent">{t("hero.title3")}</span>
      </h1>
      <p className="text-white/70">{t("hero.subtitle")}</p>
      <button className="bg-accent text-black font-semibold px-6 py-3 rounded-md">
        {t("hero.cta")}
      </button>
    </main>
  );
}
