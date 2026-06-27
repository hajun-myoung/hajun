type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-4 text-sm font-medium uppercase text-blue-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold text-white sm:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-zinc-400 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
