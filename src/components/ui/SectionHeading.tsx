import Link from "next/link";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  link?: { label: string; href: string };
};

export function SectionHeading({ title, subtitle, link }: SectionHeadingProps) {
  return (
    <div className="mb-10 flex items-end justify-between gap-5 md:mb-12">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
        {subtitle ? (
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-graphite">{subtitle}</p>
        ) : null}
      </div>
      {link ? (
        <Link
          href={link.href}
          className="shrink-0 border-b border-accent pb-1 text-sm font-medium transition-colors hover:text-accent"
        >
          {link.label} <span aria-hidden="true">→</span>
        </Link>
      ) : null}
    </div>
  );
}
