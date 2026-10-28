import { cn } from "../../lib/utils";

type Props = {
  label: string;
  title: string;
  align?: "center" | "start";
  className?: string;
};

export default function SectionTitle({
  label,
  title,
  align = "center",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "mb-10 flex flex-col gap-2",
        align === "center"
          ? "items-center text-center"
          : "items-start text-start",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        {align === "center" && <span className="h-px w-12 bg-accent" />}
        <span className="text-xs font-semibold uppercase tracking-widest text-accent">
          {label}
        </span>
        <span className="h-px w-12 bg-accent" />
      </div>
      <h2 className="text-3xl font-bold uppercase md:text-4xl">{title}</h2>
    </div>
  );
}
