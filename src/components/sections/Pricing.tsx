import { useTranslation } from "react-i18next";
import SectionTitle from "../ui/SectionTitle";
import PricingCard from "../ui/PricingCard";
import Reveal from "../ui/Reveal";
import { plans } from "../../data/pricing";

export default function Pricing() {
  const { t } = useTranslation();
  const names = t("pricing.plans", { returnObjects: true }) as string[];
  const features = t("pricing.features", { returnObjects: true }) as string[];

  const goToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="pricing" className="scroll-mt-16 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle label={t("pricing.label")} title={t("pricing.title")} />

        <div className="grid gap-4 md:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={names[i]} delay={i * 100}>
              <PricingCard
                name={names[i]}
                price={plan.price}
                perMonth={t("pricing.perMonth")}
                features={features}
                included={plan.included}
                highlighted={plan.highlighted}
                cta={t("pricing.cta")}
                onSelect={goToContact}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
