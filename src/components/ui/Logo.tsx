import { cn } from "../../lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <a
      href="#home"
      dir="ltr"
      className={cn(
        "inline-flex items-center gap-1 text-2xl font-extrabold tracking-wider",
        className,
      )}
    >
      <span>FIT</span>
      <span className="text-accent">TIME</span>
    </a>
  );
}
