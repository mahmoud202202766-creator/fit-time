import { Check, X } from "lucide-react";
import Button from "./Button";
import { cn } from "../../lib/utils";

type Props = {
  name: string;
  price: number;
  perMonth: string;
  features: string[];
  included: number;
  highlighted?: boolean;
  cta: string;
  onSelect: () => void;
};

export default function PricingCard({
  name,
  price,
  perMonth,
  features,
  included,
  highlighted,
  cta,
  onSelect,
}: Props) {
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-lg border bg-card p-6",
        highlighted ? "border-accent" : "border-white/5",
      )}
    >
      <p className="text-center text-sm uppercase tracking-wider text-white/60">
        {name}
      </p>

      <p className="my-4 flex items-baseline justify-center gap-1">
        <span dir="ltr" className="text-4xl font-extrabold">
          ${price}
        </span>
        <span className="text-white/60">{perMonth}</span>
      </p>

      <ul className="mb-8 flex-1 space-y-3">
        {features.map((f, i) => {
          const on = i < included;
          return (
            <li
              key={f}
              className={cn(
                "flex items-start gap-2 text-sm",
                on ? "text-white/80" : "text-white/30",
              )}
            >
              {on ? (
                <Check size={16} className="mt-0.5 shrink-0 text-accent" />
              ) : (
                <X size={16} className="mt-0.5 shrink-0" />
              )}
              <span>{f}</span>
            </li>
          );
        })}
      </ul>

      <Button
        variant={highlighted ? "primary" : "outline"}
        className="w-full"
        onClick={onSelect}
      >
        {cta}
      </Button>
    </div>
  );
}
