import { services } from "@/data/services";
import type { Service } from "@/types/services";
import Container from "../ui/Container";

export default function Services() {
  return (
    <section
      id="paslaugos"
      className="bg-[var(--light)] py-24 text-[var(--light-foreground)] md:py-32"
    >
      <Container>
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 font-[var(--font-heading)] text-sm font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
            01 / Paslaugos
          </p>
          <h2 className="font-[var(--font-heading)] text-6xl font-bold uppercase leading-[0.9] tracking-tight md:text-8xl">
            Mūsų <br /> paslaugos
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-black/60 md:text-lg">
            Nuo kasdienės automobilio priežiūros iki sudėtingesnio remonto –
            pasirūpiname jūsų VAG automobiliu.
          </p>
        </div>
      </Container>
    </section>
  );
}
