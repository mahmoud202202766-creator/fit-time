import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/layout/LanguageSwitcher";
import Logo from "./components/ui/Logo";
import Button from "./components/ui/Button";
import SectionTitle from "./components/ui/SectionTitle";
import Card from "./components/ui/Card";
import Reveal from "./components/ui/Reveal";

export default function App() {
  const { t } = useTranslation();

  return (
    <main className="mx-auto max-w-5xl space-y-16 p-6">
      <header className="flex items-center justify-between">
        <Logo />
        <LanguageSwitcher />
      </header>

      <section className="space-y-4 text-center">
        <h1 className="text-4xl font-bold">{t("hero.title1")}</h1>
        <div className="flex justify-center gap-3">
          <Button>{t("hero.cta")}</Button>
          <Button variant="outline">{t("nav.about")}</Button>
        </div>
      </section>

      <section>
        <SectionTitle label="Our advantages" title="Why choose us" />
        <div className="grid gap-4 md:grid-cols-3">
          <Reveal>
            <Card>Training variety</Card>
          </Reveal>
          <Reveal delay={100}>
            <Card highlighted>Personal programs</Card>
          </Reveal>
          <Reveal delay={200}>
            <Card>Modern equipment</Card>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
