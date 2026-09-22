import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import { CheckIcon, ShieldCheckIcon } from "./ui/Icons";
import { whyChooseUs } from "@/lib/park-pebbles-data";
import { siteConfig } from "@/lib/site-config";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-20 sm:py-28">
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="mb-4 inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-violet-700">
              About Us (Channel Partner)
            </span>
            <h2 className="mb-5 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Depth, Not Breadth — Pune West Is All We Do
            </h2>
            <p className="mb-4 leading-relaxed text-zinc-600">
              {siteConfig.brandName} started with a simple frustration: buying
              property in Pune shouldn&apos;t require becoming an expert in
              construction, RERA law, and loan paperwork just to avoid getting
              burned. We started as advisors to friends and family navigating
              Pune West&apos;s fast-changing market — and grew into a dedicated
              channel partner because the demand for honest, informed guidance
              never stopped.
            </p>
            <p className="leading-relaxed text-zinc-600">
              Today, we focus entirely on Pune West because we believe true
              expertise comes from depth, not breadth: knowing every project,
              every developer&apos;s track record, and every micro-market&apos;s
              real trajectory across one corridor, rather than spreading thin
              across the whole city.
            </p>

            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-violet-200 bg-violet-50 p-5">
              <ShieldCheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-violet-700" />
              <div>
                <p className="text-sm font-semibold text-zinc-900">
                  RERA-Registered Channel Partner
                </p>
                <p className="text-sm text-zinc-600">
                  Registration No. {siteConfig.rera.channelPartnerNumber}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-800">
              Why work with us
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {whyChooseUs.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-colors hover:border-violet-200"
                >
                  <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <h3 className="mb-1.5 text-sm font-semibold capitalize text-zinc-900">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
