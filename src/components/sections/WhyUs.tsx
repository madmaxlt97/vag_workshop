import Container from "../ui/Container";
import { benefits } from "@/data/benefits";
import BenefitItem from "../benefits/BenefitItem";

export default function WhyUs() {
  return (
    <section id="apie-mus" className="bg-[var(--background)] py-24 md:py-32">
      <Container>
        <div className="max-w-4xl">
          <p className="mb-5 font-[var(--font-heading)] text-sm font-bold uppercase tracking-[0.2em] text-[var(--primary-light)]">
            02 / Kodėl mes?
          </p>
          <h2 className="font-[var(--font-heading)] text-4xl font-bold uppercase leading-[0.85] tracking-tight min-[400px]:text-5xl md:text-8xl">
            Ne tiesiog
            <br />
            <span className="text-[var(--primary)]">autoservisas.</span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
            Specializuojamės VAG automobiliuose ir žinome, kad geras remontas
            prasideda nuo teisingos diagnostikos.
          </p>
        </div>
        <div className="mt-20 grid border-t border-[var(--border)] md:grid-cols-2">
          {benefits.map((benefit) => (
            <BenefitItem key={benefit.number} benefit={benefit} />
          ))}
        </div>
      </Container>
    </section>
  );
}
