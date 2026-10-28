type Props = {
  name: string;
  role: string;
  image: string;
};

export default function TrainerCard({ name, role, image }: Props) {
  return (
    <figure className="group overflow-hidden rounded-lg bg-card">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="aspect-3/4 w-full bg-card object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <figcaption className="p-3">
        <p className="text-sm font-bold">{name}</p>
        <p className="text-xs text-white/50">{role}</p>
      </figcaption>
    </figure>
  );
}
