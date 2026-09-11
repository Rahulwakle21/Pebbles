import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import ProjectImage from "./ui/ProjectImage";
import { connectivityIconMap } from "./ui/Icons";
import { connectivityGroups } from "@/lib/park-pebbles-data";

export default function Location() {
  return (
    <section id="location" className="relative px-6 py-20 sm:py-28">
      <Container size="wide">
        <SectionHeading
          eyebrow="Location & Connectivity"
          title="A Rare Intersection: Close Enough, Yet Quiet Enough"
          description="Bhugaon sits at a genuinely rare intersection for Pune West buyers: close enough to Kothrud, Baner, and Hinjawadi to make daily commutes practical, yet far enough from the density to keep its air cleaner and its streets quieter."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <ProjectImage
              src="/images/park-pebbles/location-map.jpg"
              alt="Map showing Park Pebbles' location in Bhugaon relative to Sus, Baner, Pashan, Kothrud, and nearby schools, hospitals, and malls"
              ratio="portrait"
              className="lg:aspect-auto lg:h-full"
            />
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {connectivityGroups.map((group, index) => {
              const Icon = connectivityIconMap[group.icon];
              return (
                <Reveal
                  key={group.id}
                  delay={index * 70}
                  className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-colors hover:border-violet-200"
                >
                  <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-100 text-violet-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-800">
                    {group.title}
                  </h3>
                  <ul className="space-y-1">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm leading-relaxed text-zinc-600">
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={100} className="mt-8 text-center text-xs text-zinc-500">
          Drive-times vary by source across current listings — we recommend
          verifying exact travel times on Google Maps, and can share our
          latest on-ground estimates during your consultation.
        </Reveal>
      </Container>
    </section>
  );
}
