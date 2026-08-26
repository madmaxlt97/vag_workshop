import Image from "next/image";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero.avif"
          alt="Audi RS3 trasoje"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[var(--background)] via-[var(--background)]/80 to-transparent" />
      </div>
      <Container>
        <div className="max-w-4xl">
          <p className="mb-5 font-[var(--font-heading)] text-xl font-semibold uppercase tracking-widest text-[var(--primary)]">
            VAG specialistai
          </p>

          <h1 className="font-[var(--font-heading]) text-7xl font-bold uppercase leading-[0.85] tracking-tight md:text-8xl lg:text-[9rem]">
            Autoservisas <br />
            <span className="text-[var(--primary)]">Vilniuje</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-[var(--muted)]md:text-lg">
            Volkswagen, Audi, Porsche, Škoda ir SEAT automobilių diagnostika,
            techninė priežiūra ir remontas.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#kontaktai"
              className="bg-[var(--primary)] px-7 py-4 font-[var(--font-heading) text-lg font-bold uppercase transition-colors hover:bg-[var(--primary-hover)]"
            >
              Registruotis servisui
            </a>
            <a
              href="#kontaktai"
              className="border border-[var(--border)] px-7 py-4 font-[var(--font-heading)] text-lg font-bold uppercase transition-colors hover:border-[var(--foreground)]"
            >
              Susisiekti
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
