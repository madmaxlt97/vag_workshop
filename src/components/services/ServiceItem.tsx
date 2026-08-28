import type { Service } from "@/types/services";

type ServiceItemProps = {
  service: Service;
};

export default function ServiceItem({ service }: ServiceItemProps) {
  return (
    <article className="group border-b border-black/15">
      <div className="flex flex-col gap-6 py-7 transition-all duration-300 md:grid md:grid-cols-[80px_1fr_auto] md:items-center md:py-9">
        <span className="font-[var(--font-heading)] text-sm font-semibold tracking-widest text-[var(--light-muted)]">
          {service.number}
        </span>
        <div>
          <h3 className="font-[var(--font-heading)] text-3xl font-bold uppercase leading-none transition-colors group-hover:text-[var(--primary)] md:text-5xl">
            {service.title}
          </h3>

          <p className="mt-2 text-sm text-black/65 md:text-base">
            {service.description}
          </p>
        </div>
        <span
          aria-hidden="true"
          className="hidden font-[var(--font-heading)] text-3xl transition-transform duration-300 group-hover:translate-x-2 md:block"
        >
          →
        </span>
      </div>
    </article>
  );
}
