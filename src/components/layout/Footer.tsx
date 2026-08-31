import Link from "next/link";
import Container from "../ui/Container";
import { contact } from "@/data/contacts";

export default function Footer() {
  return (
    <footer className="bg-[var(--background)] py-10 text-[var(--foreground)]">
      <Container>
        <div className="grid border-b border-white/10 pb-10 md:grid-cols-2">
          <div>
            <Link
              href="/"
              className="font-[var(--font-heading)] text-3xl font-bold uppercase"
            >
              Mano <span className="text-[var(--primary)]">Autoservisas</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--muted)]">
              Premium autimobilių servisas Vilniuje
            </p>
          </div>
          <nav className="md:justify-self-end">
            <p className="mb-4 font-[var(--font-heading)] text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
              Navigacija
            </p>
            <ul className="space-y-2 font-[var(--font-heading)] text-lg font-bold uppercase">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-[var(--primary)]"
                >
                  Pradžia
                </Link>
              </li>
              <li>
                <Link
                  href="/#paslaugos"
                  className="transition-colors hover:text-[var(--primary)]"
                >
                  Paslaugos
                </Link>
              </li>

              <li>
                <Link
                  href="/#apie-mus"
                  className="transition-colors hover:text-[var(--primary)]"
                >
                  Apie mus
                </Link>
              </li>

              <li>
                <Link
                  href="/kontaktai"
                  className="transition-colors hover:text-[var(--primary)]"
                >
                  Kontaktai
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col gap-3 pt-6 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Mano autoservisas</p>
          <a
            href={contact.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit font-[var(--font-heading)] font-bold uppercase text-white transition-colors hover:text-[var(--primary)]"
          >
            Facebook →
          </a>
        </div>
      </Container>
    </footer>
  );
}
