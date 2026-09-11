import Container from "./ui/Container";
import Reveal from "./ui/Reveal";

export default function WhyInvest() {
  return (
    <section className="relative px-6 py-20 sm:py-28">
      <Container size="narrow">
        <Reveal className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-violet-50/30 p-8 shadow-sm sm:p-12">
          <span className="mb-4 inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-700">
            The Investment Case
          </span>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Why Invest in Bhugaon
          </h2>
          <div className="space-y-5 text-base leading-relaxed text-zinc-600 sm:text-lg">
            <p>
              Bhugaon is doing what Baner and Wakad did a decade ago —
              quietly building the infrastructure case before the crowd
              catches on. Limited premium housing supply, improving highway
              and Metro access, and a growing preference among families for
              cleaner, less congested living are converging here at once.
              For end-users, that means getting into a genuinely liveable
              neighbourhood before it densifies. For investors, it means
              entering a corridor at a price point that established Pune
              West markets left behind years ago — with the same underlying
              growth drivers now catching up.
            </p>
            <p>
              Park Pebbles adds a layer most Bhugaon projects don&apos;t
              have: an amenity and academy ecosystem built for how families
              actually want to live now, not how developments were built a
              decade ago. That combination — early-corridor pricing with
              late-corridor lifestyle standards — is a rare pairing, and
              it&apos;s the core of the investment case here.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
