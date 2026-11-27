export default function SectionHeading({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3">
        <span className="card-pop-sm !bg-accent px-3 py-1 font-display text-lg text-white">
          {number}
        </span>
        <h2 className="font-display text-4xl sm:text-5xl">{title}</h2>
      </div>
      {subtitle && <p className="mt-3 max-w-2xl text-muted">{subtitle}</p>}
    </div>
  );
}
