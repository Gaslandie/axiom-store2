import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "dark" | "outline" | "whatsapp";
  className?: string;
  external?: boolean;
};

const variants = {
  dark: "bg-ink text-white hover:bg-graphite",
  outline: "border border-ink/20 bg-transparent text-ink hover:border-ink hover:bg-white/60",
  whatsapp: "bg-whatsapp text-white hover:bg-[#1fbd59]",
};

export function Button({
  href,
  children,
  variant = "dark",
  className = "",
  external = false,
}: ButtonProps) {
  const classes = `inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300 ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
