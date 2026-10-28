import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const isAr = i18n.resolvedLanguage === "ar";

  return (
    <button
      onClick={() => i18n.changeLanguage(isAr ? "en" : "ar")}
      className="rounded-md border border-white/20 px-3 py-1 text-sm hover:border-accent hover:text-accent transition"
    >
      {isAr ? "EN" : "عربي"}
    </button>
  );
}
