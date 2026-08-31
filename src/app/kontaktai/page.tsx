import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/contacts/ContactForm";
import ContactInfo from "@/components/contacts/ContactInfo";
import GoogleMaps from "@/components/contacts/GoogleMaps";

export const metadata: Metadata = {
  title: "Kontaktai",
  description:
    "Susisiekite su Mano autoservisas Vilniuje. Užregistruokite automobilį remontui arba užduokite klausimą.",
};

export default function ContactsPage() {
  return (
    <main>
      <section className="bg-[var(--light)] py-24 text-[var(--light-foreground)] md:py-32">
        <Container>
          <div className="mb-16">
            <p className="mb-5 font-[var(--font-heading)] text-sm font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
              01 / Kontaktai
            </p>

            <h1 className="font-[var(--font-heading)] font-bold uppercase leading-[0.85] tracking-tight text-4xl min-[400px]:text-6xl sm:text-7xl md:text-8xl lg:text-[9rem]">
              Susisiekime.
            </h1>
          </div>

          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <ContactInfo />
            <div>
              <h2 className="mb-8 font-[var(--font-heading)] text-3xl font-bold uppercase">
                Parašykite mums
              </h2>
              <ContactForm />
            </div>
          </div>
          <div className="mt-20">
            <p className="mb-5 font-[var(--font-heading)] text-sm font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
              02 / Kur mus rasti?
            </p>
            <h2 className="mb-8 font-[var(--font-heading)] text-4xl font-bold uppercase md:text-6xl">
              Mūsų vieta
            </h2>
            <GoogleMaps />
          </div>
        </Container>
      </section>
    </main>
  );
}
