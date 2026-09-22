import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import { projectAtGlanceRows } from "@/lib/park-pebbles-data";

export default function ProjectAtGlance() {
  return (
    <section
      id="at-a-glance"
      aria-labelledby="at-a-glance-heading"
      className="border-y border-zinc-200 bg-zinc-50 px-6 py-12 sm:py-16"
    >
      <Container size="wide">
        <Reveal>
          <h2
            id="at-a-glance-heading"
            className="mb-8 text-center text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl"
          >
            Project at a Glance
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <dl className="divide-y divide-zinc-200">
              {projectAtGlanceRows.map((row, index) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-1 gap-1 px-5 py-4 sm:grid-cols-[minmax(0,220px)_1fr] sm:gap-6 sm:px-8 ${
                    index % 2 === 0 ? "bg-white" : "bg-zinc-50/80"
                  }`}
                >
                  <dt className="text-sm font-semibold text-zinc-800">
                    {row.label}
                  </dt>
                  <dd className="text-sm leading-relaxed text-zinc-600">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
