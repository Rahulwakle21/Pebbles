import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import { configurations } from "@/lib/park-pebbles-data";
import { ArrowRightIcon } from "./ui/Icons";

export default function ConfigPricing() {
  return (
    <section
      id="pricing"
      className="relative border-t border-zinc-200 bg-zinc-50 px-6 py-20 sm:py-28"
    >
      <Container size="wide">
        <SectionHeading
          eyebrow="Configurations & Pricing"
          title="Five Layouts, One Thoughtful Design Philosophy"
          description="Every layout at Park Pebbles is built to maximise light, ventilation, and usable space — from an efficient 2 RLK to the flagship 3 RLK Grande."
        />

        <Reveal className="hidden overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm sm:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-zinc-50 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                <th className="px-6 py-4">Configuration</th>
                <th className="px-6 py-4">Carpet Area</th>
                <th className="px-6 py-4">Indicative Price</th>
                <th className="px-6 py-4">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200">
              {configurations.map((config) => (
                <tr
                  key={config.id}
                  className="transition-colors hover:bg-violet-50/50"
                >
                  <td className="px-6 py-5 font-semibold text-zinc-900">
                    {config.type} {config.tier}
                  </td>
                  <td className="px-6 py-5 text-zinc-700">
                    {config.carpetAreaSqFt.toLocaleString("en-IN")} sq.ft
                  </td>
                  <td className="px-6 py-5 font-semibold text-violet-700">
                    {config.price}
                  </td>
                  <td className="max-w-sm px-6 py-5 text-sm text-zinc-600">
                    {config.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <div className="grid gap-4 sm:hidden">
          {configurations.map((config, index) => (
            <Reveal
              key={config.id}
              delay={index * 60}
              className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-lg font-semibold text-zinc-900">
                  {config.type} {config.tier}
                </span>
                <span className="font-semibold text-violet-700">
                  {config.price}
                </span>
              </div>
              <p className="mb-2 text-sm text-zinc-500">
                {config.carpetAreaSqFt.toLocaleString("en-IN")} sq.ft carpet
              </p>
              <p className="text-sm leading-relaxed text-zinc-600">
                {config.description}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={120}
          className="mt-10 flex flex-col items-center justify-between gap-6 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:flex-row sm:p-8"
        >
          <div>
            <h3 className="mb-1 text-lg font-semibold text-zinc-900">
              Flexible, Construction-Linked Payment Plans
            </h3>
            <p className="max-w-xl text-sm leading-relaxed text-zinc-600">
              Park Pebbles offers flexible payment plans designed to ease
              your cash flow through possession — with dedicated support for
              home loan processing and documentation. Exact pricing and
              current developer offers are best confirmed with our advisory
              team, since they&apos;re revised periodically.
            </p>
          </div>
          <Button href="#contact" size="lg" className="w-full shrink-0 sm:w-auto">
            Get Today&apos;s Exact Pricing
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
