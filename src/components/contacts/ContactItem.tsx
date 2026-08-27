type ContactItemProps = {
  label: string;
  value: string;
  href?: string;
};

export default function ContactItem({ label, value, href }: ContactItemProps) {
  return (
    <div>
      <p className="mb-2 font-[var(--font-heading)] text-xs font-bold uppercase tracking-[0.15em] text-[var(--muted)]">
        {label}
      </p>
      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="font-[var(--font-heading)] text-lg font-bold uppercase transition-colors hover:text-[var(--primary)]"
        >
          {value}
        </a>
      ) : (
        <p className="font-[var(--font-heading)] text-lg font-bold uppercase">
          {value}
        </p>
      )}
    </div>
  );
}
