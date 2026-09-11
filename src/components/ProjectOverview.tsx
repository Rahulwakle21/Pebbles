import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import ProjectImage from "./ui/ProjectImage";
import { legendAcademiesImage, projectFacts } from "@/lib/park-pebbles-data";

const facts = [
  { label: "Location", value: "Bhugaon, Pune" },
  { label: "Land Parcel", value: projectFacts.landParcel },
  { label: "Configurations", value: projectFacts.configurationsLabel },
  { label: "Amenities", value: `${projectFacts.amenityCount} Lifestyle Amenities` },
  { label: "Podium", value: "82,000+ sq.ft. across 3 clubhouses" },
  { label: "Possession", value: `${projectFacts.possession} — confirm with our team` },
];

export default function ProjectOverview() {
  return (
    <section className="relative px-6 pb-20 sm:pb-28">
      <Container size="wide">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <Reveal className="space-y-5 text-base leading-relaxed text-zinc-600 sm:text-lg">
            <h3 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
              Project Overview
            </h3>
            <p>
              Park Pebbles is a thoughtfully positioned residential
              development in Bhugaon, Pune, built on a joint legacy of
              Rainbow Housing (20+ years) and Purple Corp (28+ years). Spread
              across {projectFacts.landParcel}, the project offers 2 and 3
              RLK homes ranging from 797 to 1,250 sq.ft carpet area, wrapped
              around an 82,000+ sq.ft. lifestyle podium and 3 exclusive
              clubhouses. Every home is designed for abundant natural light,
              cross-ventilation, and genuine privacy — the kind of everyday
              comfort that&apos;s harder to find as Pune&apos;s inner suburbs
              get denser.
            </p>
            <p>
              What sets Park Pebbles apart isn&apos;t just the space —
              it&apos;s what surrounds it. The project&apos;s signature
              offering is a set of legend-led academies in sports, performing
              arts, and skill development, giving resident children access
              most housing societies simply can&apos;t offer. Combined with
              35+ lifestyle amenities and a dedicated no-vehicle zone across
              the podium, Park Pebbles is built for families who want more
              than four walls — they want an environment that grows with
              their children.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid-cols-2 gap-4">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-colors hover:border-violet-200"
                >
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    {fact.label}
                  </div>
                  <div className="text-sm font-semibold leading-snug text-zinc-900 sm:text-base">
                    {fact.value}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={140} className="relative mt-10 overflow-hidden rounded-2xl">
          <ProjectImage
            src={legendAcademiesImage.src}
            alt="Park Pebbles' legend-led academies — sports, fitness, and performing-arts partners featured in the developer's brochure"
            ratio="wide"
            sizes="(min-width: 1024px) 1152px, 100vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-900/70 via-zinc-900/10 to-transparent" />
          <p className="pointer-events-none absolute inset-x-0 bottom-0 p-6 text-sm font-medium leading-relaxed text-white sm:p-8 sm:text-base">
            &ldquo;A better everyday for parents. A stronger tomorrow for
            children.&rdquo;
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
