export default function ContactForm() {
  return (
    <form className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="mb-2 block font-[var(--font-heading)] text-sm font-bold uppercase tracking-wide"
        >
          Vardas
        </label>

        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full border-b border-black/20 bg-transparent px-0 py-3 outline-none transition-colors placeholder:text-black/30 focus:border-[var(--primary)]"
          placeholder="Jūsų vardas"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="mb-2 block font-[var(--font-heading)] text-sm font-bold uppercase tracking-wide"
        >
          Telefonas
        </label>

        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="w-full border-b border-black/20 bg-transparent px-0 py-3 outline-none transition-colors placeholder:text-black/30 focus:border-[var(--primary)]"
          placeholder="+370..."
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block font-[var(--font-heading)] text-sm font-bold uppercase tracking-wide"
        >
          El. paštas
        </label>

        <input
          id="email"
          name="email"
          type="email"
          className="w-full border-b border-black/20 bg-transparent px-0 py-3 outline-none transition-colors placeholder:text-black/30 focus:border-[var(--primary)]"
          placeholder="jusu@email.lt"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block font-[var(--font-heading)] text-sm font-bold uppercase tracking-wide"
        >
          Žinutė
        </label>

        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full resize-none border-b border-black/20 bg-transparent px-0 py-3 outline-none transition-colors placeholder:text-black/30 focus:border-[var(--primary)]"
          placeholder="Kuo galime padėti?"
        />
      </div>

      <button
        type="submit"
        className="bg-[var(--primary)] px-8 py-4 font-[var(--font-heading)] text-lg font-bold uppercase text-white transition-transform duration-300 hover:-translate-y-1"
      >
        Siųsti užklausą →
      </button>
    </form>
  );
}
