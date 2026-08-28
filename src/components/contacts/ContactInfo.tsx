import { contact } from "@/data/contacts";

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-2 font-[var(--font-heading)] text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
          Telefonas
        </p>

        <a
          href={`tel:${contact.phone}`}
          className="font-[var(--font-heading)] text-xl font-bold uppercase transition-colors hover:text-[var(--primary)] min-[400px]:text-2xl"
        >
          {contact.phone}
        </a>
      </div>
      <div>
        <p className="mb-2 font-[var(--font-heading)] text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
          El. paštas
        </p>

        <a
          href={`mailto:${contact.email}`}
          className="font-[var(--font-heading)] text-xl font-bold uppercase transition-colors hover:text-[var(--primary)] min-[400px]:text-2xl break-all"
        >
          {contact.email}
        </a>
      </div>

      <div>
        <p className="mb-2 font-[var(--font-heading)] text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
          Facebook
        </p>

        <a
          href={contact.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="font-[var(--font-heading)] text-xl font-bold uppercase transition-colors hover:text-[var(--primary)] min-[400px]:text-2xl"
        >
          VAG Workshop →
        </a>
      </div>

      <div>
        <p className="mb-2 font-[var(--font-heading)] text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
          Adresas
        </p>

        <p className="font-[var(--font-heading)] text-xl font-bold uppercase transition-colors hover:text-[var(--primary)] min-[400px]:text-2xl">
          {contact.address}
        </p>
      </div>
    </div>
  );
}
