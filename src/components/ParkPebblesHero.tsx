import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import ProjectImage from "./ui/ProjectImage";
import { ArrowRightIcon, CheckIcon, DownloadIcon } from "./ui/Icons";
import { projectFacts } from "@/lib/park-pebbles-data";

const highlights = [
  "2 & 3 RLK homes, 797–1,250 sq.ft carpet",
  "Starting ₹86 Lakh onwards",
  "35+ amenities across an 82,000+ sq.ft. podium",
  "By Rainbow Housing × Purple Corp — 28+ years' legacy",
];

export default function ParkPebblesHero() {
  return (
    <section
      id="park-pebbles"
      className="relative overflow-hidden border-t border-zinc-200 px-6 py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-amber-100/60 blur-3xl" />

      <Container size="wide" className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <span className="mb-5 inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-700">
                Featured Launch — Bhugaon
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mb-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
                Park Pebbles, Bhugaon
              </h2>
              <p className="mb-6 text-lg font-medium text-violet-700 sm:text-xl">
                Thoughtfully Designed 2 &amp; 3 RLK Homes, Backed by 28+ Years
                of Trusted Development
              </p>
            </Reveal>

            <Reveal delay={140}>
              <p className="mb-8 text-base leading-relaxed text-zinc-600 sm:text-lg">
                &ldquo;The First Home in Bhugaon Built Around Your
                Child&apos;s Future.&rdquo;
              </p>
            </Reveal>

            <Reveal delay={200}>
              <ul className="mb-8 space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-zinc-700 sm:text-base">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-violet-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={260}>
              <div className="mb-8 flex flex-wrap gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-700 sm:text-base">
                <span className="font-semibold text-zinc-900">2 &amp; 3 RLK</span>
                <span className="text-zinc-400">•</span>
                <span className="font-semibold text-zinc-900">
                  Starting {projectFacts.priceFrom}
                </span>
                <span className="text-zinc-400">•</span>
                <span>
                  Possession:{" "}
                  <span className="text-amber-700">{projectFacts.possession}</span>
                </span>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button href="#contact" size="lg" className="w-full sm:w-auto">
                  Schedule a Site Visit
                  <ArrowRightIcon className="h-4 w-4" />
                </Button>
                <Button href="#contact" variant="secondary" size="lg" className="w-full sm:w-auto">
                  <DownloadIcon className="h-4 w-4" />
                  Download Brochure
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} direction="none">
            <ProjectImage
              src="/images/park-pebbles/hero-exterior.jpg"
              alt="Park Pebbles — exterior view of the residential towers and clubhouse at dusk (artistic impression)"
              ratio="square"
              className="lg:aspect-[4/5]"
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
