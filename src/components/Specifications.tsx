import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { specificationGroups } from "@/lib/park-pebbles-data";

export default function Specifications() {
  return (
    <section
      id="specifications"
      className="relative border-t border-zinc-200 bg-zinc-50 px-6 py-20 sm:py-28"
    >
      <Container size="wide">
        <SectionHeading
          eyebrow="Specifications"
          title="Build Quality You Can Verify"
          description="Detailed fit-outs and project-level provisions — the kind of reassurance serious buyers look for before a site visit."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {specificationGroups.map((group, index) => (
            <Reveal
              key={group.title}
              delay={index * 50}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-violet-800">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm leading-relaxed text-zinc-600 before:mr-2 before:text-violet-400 before:content-['•']"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
