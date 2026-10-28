import { useTranslation } from "react-i18next";
import Logo from "../ui/Logo";

const columns = [
  {
    key: "footer.about",
    links: [
      { id: "about", k: "nav.about" },
      { id: "contact", k: "nav.contact" },
    ],
  },
  {
    key: "footer.services",
    links: [
      { id: "team", k: "nav.team" },
      { id: "pricing", k: "nav.pricing" },
    ],
  },
];

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[2fr_1fr_1fr]">
        <div className="space-y-3">
          <Logo />
          <p className="max-w-xs text-sm text-white/50">
            {t("footer.tagline")}
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.key}>
            <h3 className="mb-3 text-sm font-bold">{t(col.key)}</h3>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className="text-sm text-white/50 transition hover:text-accent"
                  >
                    {t(l.k)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-10 text-center text-xs text-white/30">
        © {new Date().getFullYear()} FIT TIME. {t("footer.rights")}
      </p>
    </footer>
  );
}
