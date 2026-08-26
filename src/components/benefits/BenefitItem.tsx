import type { Benefit } from "@/types/benefit";

type BenefitItemProps = {
  benefit: Benefit;
};

export default function BenefitItem({ benefit }: BenefitItemProps) {
  return (
    <article className="border-b border-[var(--border)] py-8 md:even:border-1 md:even:pl-10 md:odd:pr-10">
      <span className="font-[var(--font-heading)] text-sm font-semibold tracking-widest text-[var(--muted)]">
        {benefit.number}
      </span>
      <h3 className="mt-5 font-[var(--font-heading)] text-3xl font-bold uppercase leading-none md:text-4xl">
        {benefit.title}
      </h3>

      <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--muted)] md:text-base">
        {benefit.description}
      </p>
    </article>
  );
}
