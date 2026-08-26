import Image from "next/image";
import Container from "../ui/Container";

export default function Workshop() {
  return (
    <section
      id="dirbtuves"
      className="bg-[var(--light)] py-24 text-[var(--light-foreground)] md:py-32"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden md:aspect-[4/3">
            <Image
              src="/workshop-placeholder.avif"
              alt="Audi dirbuvėse"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="mb-5 font-[var(--font-heading)] text-sm font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
              {" "}
              03 / Mūsų dirbtuvės
            </p>

            <h2 className="font-[var(--font-heading)] text-6xl font-bold uppercase leading-[0.85] tracking-tight md:text-8xl">
              Čia
              <br />
              prasideda
              <br />
              <span className="text-[var(--primary)]">geras remontas.</span>
            </h2>

            <p className="mt-8 max-w-lg text-base leading-relaxed text-black/60 md:text-lg">
              Dirbame su VAG automobiliais kiekvieną dieną. Mūsų tikslas – ne
              tik pašalinti gedimą, bet suprasti jo priežastį ir pasiūlyti
              tinkamą sprendimą.
            </p>

            <a
              href="#kontaktai"
              className="mt-10 inline-flex border border-black/20 px-7 py-4 font-[var(--font-heading)] text-lg font-bold uppercase transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              Susisiekti
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
