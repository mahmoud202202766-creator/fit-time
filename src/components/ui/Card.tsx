import type { HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

type Props = HTMLAttributes<HTMLDivElement> & {
  highlighted?: boolean;
};

export default function Card({ highlighted, className, ...props }: Props) {
  return (
    <div
      className={cn(
        "rounded-lg p-6 transition",
        highlighted
          ? "bg-accent text-black"
          : "bg-card border border-white/5 hover:border-accent/40",
        className,
      )}
      {...props}
    />
  );
}
