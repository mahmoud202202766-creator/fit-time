import { Star } from "lucide-react";

type Props = {
  name: string;
  text: string;
};

export default function ReviewCard({ name, text }: Props) {
  return (
    <figure className="flex h-full flex-col items-center gap-4 rounded-lg border border-white/5 bg-card p-6 text-center">
      <div className="flex gap-1" aria-label="5 stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={16} className="fill-accent text-accent" />
        ))}
      </div>

      <blockquote className="flex-1 text-sm leading-relaxed text-white/70">
        {text}
      </blockquote>

      <figcaption className="flex flex-col items-center gap-2">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent font-bold text-black">
          {name.charAt(0)}
        </span>
        <span className="text-xs text-white/60">{name}</span>
      </figcaption>
    </figure>
  );
}
