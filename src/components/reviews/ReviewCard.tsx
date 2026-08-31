"use client";
import { useState } from "react";
import type { Review } from "@/types/review";

type ReviewCardProps = {
  review: Review;
};

export default function ReviewCard({ review }: ReviewCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="min-w-0 flex-1">
      <div className="border border-[var(--border)] bg-[var(--surface)] p-8 md:p-12">
        <div className="mb-8 flex gap-1 text-[var(--primary)]">
          {Array.from({ length: review.rating }).map((_, index) => (
            <span key={index}>★</span>
          ))}
        </div>
        <div
          className={`relative overflow-hidden transition-[max-height] duration-500 ease-in-out ${
            isExpanded ? "max-h-[1000px]" : "max-h-[240px]"
          }`}
        >
          <blockquote className="font-[var(--font-heading)] text-3xl font-semibold uppercase leading-tight">
            „{review.text}“
          </blockquote>

          {!isExpanded && review.text.length > 150 && (
            <div className="pointer-events-none absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-[var(--surface)] to-transparent" />
          )}
        </div>

        {review.text.length > 90 && (
          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            className="mt-4 w-fit font-[var(--font-heading)] text-sm font-bold uppercase tracking-wide text-[var(--primary)] transition-colors hover:text-[var(--foreground)]"
          >
            {isExpanded ? "Rodyti mažiau ↑" : "Skaityti daugiau →"}
          </button>
        )}

        <p className="mt-8 font-[var(--font-heading)] text-lg font-bold uppercase">
          {review.author}
        </p>
      </div>
    </article>
  );
}
