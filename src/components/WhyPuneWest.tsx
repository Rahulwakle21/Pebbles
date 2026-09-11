import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { CheckIcon } from "./ui/Icons";

const marketInsights = [
  "Bhugaon and neighbouring Pune West micro-markets remain priced meaningfully below established Baner/Kothrud rates",
  "Major infra drivers: Mumbai–Pune Highway access, Chandani Chowk improvements, Vanaz Metro (Aqua Line) extension",
  "Premium residential supply remains limited relative to demand — a key driver of price appreciation",
  "IT & business hubs at Hinjawadi continue to anchor rental and resale demand across the corridor",
];

export default function WhyPuneWest() {
  return (
    <section id="pune-west" className="relative px-6 py-20 sm:py-28">
      <Container size="wide">
        <SectionHeading
          eyebrow="Why Pune West"
          title="The Corridor Rewriting Pune's Growth Map"
          description="Stretching from Kothrud's edge through Bavdhan, Baner, and Wakad, out to Hinjawadi and Bhugaon — Pune West has quietly become the city's most consistent real estate growth story."
        />

        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <Reveal className="space-y-5 text-base leading-relaxed text-zinc-600 sm:text-lg">
            <p>
              Pune West isn&apos;t the &ldquo;next big thing&rdquo; anymore —
              it&apos;s already happening. Corridors like Bhugaon, Baner, and
              Hinjawadi have gone from quiet outskirts to some of the
              city&apos;s most sought-after residential belts, pulled forward
              by better roads, the Metro&apos;s westward reach, and
              Pune&apos;s ever-expanding IT and business hubs nearby. What
              used to be a compromise — space and greenery, but a long
              commute — is fast disappearing as connectivity keeps closing
              that gap.
            </p>
            <p>
              For buyers, the appeal is straightforward: homes here still
              cost meaningfully less per square foot than the established
              micro-markets they border, while offering something those
              markets have largely lost — open skies, cleaner air, and room
              to breathe. Add rising infrastructure investment and shrinking
              premium land supply, and the price-appreciation story writes
              itself: early movers in Pune West&apos;s inner corridors have
              already seen strong value growth, and that trend shows no sign
              of slowing.
            </p>
            <p>
              This is exactly why we built our business here. Pune West
              rewards buyers who move with the right information, at the
              right time, through the right advisor — and that&apos;s the gap
              we exist to close.
            </p>
          </Reveal>

          <div className="space-y-6">
            <Reveal
              delay={80}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-colors hover:border-violet-200"
            >
              <span className="mb-3 inline-block rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-700">
                Featured Micro-Market
              </span>
              <h3 className="mb-2 text-xl font-semibold text-zinc-900">
                Bhugaon
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600">
                Pune West&apos;s newest growth frontier — quieter and greener
                than its established neighbours, but rapidly closing the
                connectivity gap to Kothrud, Baner, and Hinjawadi. Buyers
                choose Bhugaon for cleaner air, larger land parcels (meaning
                better-planned, lower-density projects), and meaningfully
                lower entry prices than the corridor it borders — with strong
                upside as infrastructure catches up.
              </p>
            </Reveal>

            <Reveal
              delay={160}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-800">
                Market Insight Snapshot
              </h3>
              <ul className="space-y-3">
                {marketInsights.map((insight) => (
                  <li key={insight} className="flex gap-3 text-sm leading-relaxed text-zinc-600">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-violet-600" />
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
