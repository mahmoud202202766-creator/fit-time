import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import Logo from "../ui/Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import { cn } from "../../lib/utils";

const links = [
  { id: "home", key: "nav.home" },
  { id: "about", key: "nav.about" },
  { id: "team", key: "nav.team" },
  { id: "pricing", key: "nav.pricing" },
  { id: "contact", key: "nav.contact" },
];

export default function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Logo />

        {/* Desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-sm text-white/80 transition hover:text-accent"
            >
              {t(l.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <button
            className="md:hidden"
            aria-label={t("nav.menu")}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile */}
      <nav
        className={cn(
          "overflow-hidden border-t border-white/5 bg-bg transition-all md:hidden",
          open ? "max-h-80" : "max-h-0 border-t-0",
        )}
      >
        <ul className="flex flex-col px-4 py-2">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="block py-3 text-white/80 hover:text-accent"
              >
                {t(l.key)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
