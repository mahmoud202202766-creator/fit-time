import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
};

export default function Button({
  variant = "primary",
  className,
  ...props
}: Props) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold uppercase tracking-wide transition cursor-pointer",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        variant === "primary" && "bg-accent text-black hover:brightness-110",
        variant === "outline" &&
          "border border-white/20 text-white hover:border-accent hover:text-accent",
        className,
      )}
      {...props}
    />
  );
}
