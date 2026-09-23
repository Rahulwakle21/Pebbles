import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import ProjectImage from "./ui/ProjectImage";
import { ArrowRightIcon, DownloadIcon, PhoneIcon } from "./ui/Icons";
import { heroStatChips } from "@/lib/park-pebbles-data";
import { siteConfig } from "@/lib/site-config";

const trustStrip = [
  "RERA Registered Channel Partner",
  "Direct Developer Tie-Up",
  "Zero-Pressure Advisory",
  "Site Visits Arranged Free",
] as const;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pb-16 pt-28 sm:pb-20 sm:pt-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-100 via-white to-zinc-50" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl" />

      <Container className="relative z-10" size="wide">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal delay={60}>
              <h1 className="mb-4 text-3xl font-bold leading-[1.12] tracking-tight text-zinc-900 sm:text-5xl lg:text-[3.25rem]">
                Park Pebbles, Bhugaon - Homes Built Around Your Child&apos;s
                Future
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="mb-8 text-base leading-relaxed text-zinc-600 sm:text-lg">
                Thoughtfully designed 2 &amp; 3 BHK residences by Rainbow
                Housing × Purple Corp, set across a 7.25-acre address* in Pune
                West&apos;s fastest-growing residential corridor — with
                legend-led academies, 35+ lifestyle amenities, and 3 exclusive
                clubhouses.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {heroStatChips.map((chip) => (
                  <div
                    key={chip.label}
                    className="rounded-xl border border-zinc-200 bg-white/80 px-3 py-3 text-center shadow-sm backdrop-blur-sm"
                  >
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 sm:text-xs">
                      {chip.label}
                    </div>
                    <div className="mt-0.5 text-sm font-bold text-zinc-900 sm:text-base">
                      {chip.value}
                    </div>
                  </div>
                ))}
              </div>
              {/* <p className="mb-8 text-xs text-zinc-500">
                *Confirm land parcel (7.25 vs 7.5 acres) and whether ₹86 Lakh
                is basic or all-inclusive with our team before booking.
              </p> */}
            </Reveal>

            <Reveal delay={200}>
              <div className="mb-8 flex flex-col gap-3">
                <Button href="#contact" size="lg" className="w-full">
                  Schedule a Site Visit
                  <ArrowRightIcon className="h-4 w-4" />
                </Button>
                <Button
                  href="#contact"
                  variant="secondary"
                  size="lg"
                  className="w-full"
                >
                  <DownloadIcon className="h-4 w-4" />
                  Download Brochure
                </Button>
                <Button
                  href={siteConfig.contact.phoneTel}
                  variant="secondary"
                  size="lg"
                  className="w-full"
                >
                  <PhoneIcon className="h-4 w-4" />
                  Call {siteConfig.contact.phone}
                </Button>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <ul className="flex flex-col gap-2 text-xs text-zinc-600 sm:text-sm">
                {trustStrip.map((item) => (
                  <li key={item} className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

          </div>

          <Reveal delay={100} direction="none">
            <ProjectImage
              src="/images/park-pebbles/hero-exterior.jpg"
              alt="Park Pebbles — exterior render at dusk (artistic impression)"
              ratio="wide"
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
