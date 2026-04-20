type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  const aligned = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <header className={`mb-8 flex max-w-2xl flex-col gap-3 md:mb-12 ${aligned}`}>
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.28em] text-caramel">{eyebrow}</p>
      ) : null}
      <h2 className="font-serif text-3xl leading-tight text-ivory sm:text-4xl">{title}</h2>
      {description ? <p className="text-sm text-mist sm:text-base">{description}</p> : null}
    </header>
  );
}
