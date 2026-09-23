import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { CheckIcon } from "./ui/Icons";
import { highlightsList } from "@/lib/park-pebbles-data";

export default function Highlights() {
  return (
    <section
      id="highlights"
      className="relative border-t border-zinc-200 px-6 py-20 sm:py-28"
    >
      <Container size="wide">
        <SectionHeading
          eyebrow="Highlights"
          title="Legend-Led Academies & Lifestyle"
          description="What makes Park Pebbles stand out in Bhugaon's growing residential corridor."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <ul className="space-y-4">
              {highlightsList.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-zinc-700 sm:text-base"
                >
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-violet-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-violet-50/40 p-6 shadow-sm sm:p-8">
              <span className="mb-3 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-800">
                The Unfair Advantage
              </span>
              <h3 className="mb-4 text-xl font-bold text-zinc-900 sm:text-2xl">
                Give your child an unfair advantage.
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
                The strongest differentiator of Park Pebbles is its legend-led
                academies across sports, performing arts, and skill development.
                This isn&apos;t an add-on amenity — it&apos;s the core of what
                makes Park Pebbles different. For families, it means structured,
                expert-led access to disciplines like sport, dance, and
                performing arts, right within the community their children grow
                up in.
              </p>
              {/* <p className="text-xs leading-relaxed text-zinc-500">
                We use the generic phrase &ldquo;legend-led academies&rdquo;
                until written confirmation from the developer allows naming
                specific academy partners on this site.
              </p> */}
              <p className="mt-6 text-sm font-medium italic text-violet-800">
                &ldquo;A better everyday for parents. A stronger tomorrow for
                children.&rdquo;
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
