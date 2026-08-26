import Container from "../ui/Container";
import { reviews } from "@/data/reviews";
import ReviewCard from "../reviews/ReviewCard";

export default function Reviews() {
  return (
    <section
      id="atsiliepimai"
      className="bg-[var(--background)] py-24 md:py-32"
    >
      <Container>
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-5 font-[var(--font-heading)] text-sm font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
              04 / Atsiliepimai
            </p>
            <h2 className="font-[var(--font-heading)] text-6xl font-bold uppercase leading-[0.85] tracking-tight md:text-8xl">
              Ką sako
              <br />
              <span className="text-[var(--primary)]">klientai?</span>
            </h2>
          </div>

          <div className="font-[var(--font-heading)] text-lg font-semibold uppercase text-[var(--muted)]">
            ★★★★★
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </Container>
    </section>
  );
}
