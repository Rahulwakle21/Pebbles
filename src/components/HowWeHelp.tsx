import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { howWeHelpSteps } from "@/lib/park-pebbles-data";

export default function HowWeHelp() {
  return (
    <section
      id="how-it-works"
      className="relative border-t border-zinc-200 bg-zinc-50 px-6 py-20 sm:py-28"
    >
      <Container size="wide">
        <SectionHeading
          eyebrow="Our Process"
          title="How We Help You Buy"
          description="A straightforward, four-step path from first enquiry to holding your keys — with an advisor beside you at every step."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {howWeHelpSteps.map((item, index) => (
            <Reveal
              key={item.step}
              delay={index * 100}
              className="group relative rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-md"
            >
              <span className="mb-6 block text-4xl font-bold text-zinc-200 transition-colors group-hover:text-violet-200">
                {item.step}
              </span>
              <h3 className="mb-2 text-lg font-semibold text-zinc-900">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
