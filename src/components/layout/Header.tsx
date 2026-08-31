"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

const navigation = [
  { label: "Paslaugos", href: "/#paslaugos" },
  { label: "Apie mus", href: "/#apie-mus" },
  { label: "Kontaktai", href: "/kontaktai" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${isScrolled || !isHomePage ? "border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="mx-auto flex h-20 w-[90%] max-w-7xl items-center justify-between">
        <Link
          href="/"
          className="font-[var(--font-heading) text-2xl font-bold uppercase tracking-tight"
        >
          <span className="text-[var(--foreground)]">Mano</span>
          <span className="text-[var(--primary)]">servisas</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-[var(--font-heading)] text-lg font-semibold uppercase tracking-wide text-[var(--foreground)] transition-colors hover:text-[var(--primary)]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/kontaktai"
            className="bg-[var(--primary)] px-6 py-3 font-[var(--font-heading)] text-lg font-bold uppercase transition-colors hover:bg-[var(--primary-hover)]"
          >
            Registruotis
          </Link>
        </nav>
        <button
          type="button"
          aria-label="Atidaryti meniu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="text-[var(--foreground)] lg:hidden"
        >
          <span className="text-3xl">☰</span>
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-[var(--border)] bg-[var(--background)] lg:hidden">
          <nav className="mx-auto flex w-[90%] max-w-7xl flex-col py-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="border-b border-[var(--border)] py-4 font-[var(--font-heading)] text-xl font-semibold uppercase"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/kontaktai"
              onClick={() => setIsMenuOpen(false)}
              className="mt-6 bg-[var(--primary)] px-6 py-4 text-center font-[var(--font-heading)] text-xl font-bold uppercase"
            >
              Registruotis
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
