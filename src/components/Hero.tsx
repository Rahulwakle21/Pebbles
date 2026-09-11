import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import { ArrowRightIcon, ShieldCheckIcon } from "./ui/Icons";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden px-6 pb-20 pt-32 sm:pt-40"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-100 via-white to-zinc-50" />
      <div className="pointer-events-none absolute left-1/2 top-24 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-violet-200/40 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-amber-200/30 blur-3xl" />

      <Container className="relative z-10" size="wide">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-sm text-violet-700">
              <ShieldCheckIcon className="h-4 w-4" />
              RERA Registered Channel Partner · Pune West
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl">
              Pune West, Decoded
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                One Trusted Advisor
              </span>{" "}
              at a Time.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-zinc-600 sm:text-xl">
              We help families find, compare, and confidently buy the right
              home across Pune&apos;s fastest-growing western corridor — no
              sales scripts, no pressure, just straight answers.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="#park-pebbles" size="lg" className="w-full sm:w-auto">
                Explore Park Pebbles
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
              <Button
                href="#contact"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Talk to a Pune West Expert
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
