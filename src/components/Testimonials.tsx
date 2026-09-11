import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import { QuoteIcon } from "./ui/Icons";

export default function Testimonials() {
  return (
    <section
      className="relative border-t border-zinc-200 bg-zinc-50 px-6 py-20 sm:py-28"
      aria-labelledby="testimonials-heading"
    >
      <Container size="narrow">
        <Reveal className="flex flex-col items-center rounded-3xl border border-zinc-200 bg-white px-8 py-14 text-center shadow-sm sm:px-12">
          <QuoteIcon className="mb-6 h-10 w-10 text-violet-300" />
          <h2 id="testimonials-heading" className="mb-3 text-2xl font-bold text-zinc-900 sm:text-3xl">
            Client Stories, Coming Soon
          </h2>
          <p className="max-w-md text-base leading-relaxed text-zinc-600">
            We&apos;re building trust one home at a time. Real client stories
            from Park Pebbles buyers will be featured here as they come in.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
