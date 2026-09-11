import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import ProjectImage from "./ui/ProjectImage";
import { CheckIcon, amenityIconMap } from "./ui/Icons";
import { amenityCategories, projectFacts } from "@/lib/park-pebbles-data";

export default function Amenities() {
  return (
    <section id="amenities" className="relative px-6 py-20 sm:py-28">
      <Container size="wide">
        <SectionHeading
          eyebrow={`${projectFacts.amenityCount} Amenities`}
          title="A Well-Rounded, High-Demand Lifestyle"
          description="Beyond its core proposition, Park Pebbles offers thoughtfully planned amenities across a structured podium and open zones — grouped here for easy browsing."
        />

        <Reveal className="mb-12 flex justify-center">
          <ProjectImage
            src="/images/park-pebbles/master-layout.jpg"
            alt="Park Pebbles master layout plan showing towers, podium garden, pool, clubhouses, and open spaces (artistic impression, not to scale)"
            width={1400}
            height={1621}
            className="max-w-xl"
            sizes="(min-width: 1024px) 576px, 100vw"
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {amenityCategories.map((category, index) => {
            const Icon = amenityIconMap[category.icon];
            return (
              <Reveal
                key={category.id}
                delay={(index % 3) * 90}
                className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-md"
              >
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-700 transition-colors group-hover:bg-violet-200">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mb-3 text-lg font-semibold text-zinc-900">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm leading-relaxed text-zinc-600"
                    >
                      <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-zinc-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
