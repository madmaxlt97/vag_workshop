import Container from "../ui/Container";
import ContactItem from "../contacts/ContactItem";
import { contact } from "@/data/contacts";

export default function Contacts() {
  return (
    <section
      id="kontaktai"
      className="bg-[var(--primary)] py-24 text-white md:py-32"
    >
      <Container>
        <div className="max-w-5xl">
          <p className="mb-5 font-[var(--font-heading)] text-sm font-bold uppercase tracking-[0.2em] text-white">
            05 / Kontaktai
          </p>

          <h2 className="font-[var(--font-heading)] text-4xl font-bold uppercase leading-[0.85] tracking-tight min-[400px]:text-5xl md:text-8xl">
            Reikia
            <br />
            remonto?
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-white md:text-xl">
            Susisiekite su mumis ir aptarkime darbus.
          </p>

          <a
            href={`mailto:${contact.email}`}
            className="mt-10 inline-flex bg-black px-8 py-5 font-[var(--font-heading)] text-lg font-bold uppercase transition-transform duration-300 hover: -translate-y-1"
          >
            Susisiekti →
          </a>

          <div className="mt-20 grid gap-10 border-t border-white/20 pt-8 md:grid-cols-3">
            <ContactItem
              label="Telefonas"
              value={contact.phone}
              href={`tel:${contact.phone}`}
            />
            <ContactItem
              label="Facebook"
              value="Mano autoservisas"
              href={contact.facebook}
            />

            <ContactItem label="Darbo laikas" value="I–V 07:00–17:00" />
          </div>
        </div>
      </Container>
    </section>
  );
}
