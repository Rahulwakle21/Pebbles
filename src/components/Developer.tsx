import Image from "next/image";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { AwardIcon, BuildingIcon, ShieldCheckIcon } from "./ui/Icons";
import {
  developerCredentials,
  developerLogos,
  developerPortfolio,
} from "@/lib/park-pebbles-data";
import { siteConfig } from "@/lib/site-config";

export default function Developer() {
  return (
    <section
      id="developer"
      className="relative border-t border-zinc-200 bg-zinc-50 px-6 py-20 sm:py-28"
    >
      <Container size="wide">
        <SectionHeading
          eyebrow="Developer Credentials"
          title="Built by Rainbow Housing × Purple Corp"
          description="Credentials that matter when you're trusting a developer with years of construction ahead."
        />

        <Reveal className="mb-12 flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:gap-10 sm:p-8">
          {developerLogos.map((logo) => (
            <Image
              key={logo.id}
              src={logo.src}
              alt={logo.name}
              width={logo.width}
              height={logo.height}
              className="h-9 w-auto object-contain sm:h-11"
            />
          ))}
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal className="space-y-5 text-base leading-relaxed text-zinc-600 sm:text-lg">
            <p>
              Park Pebbles is a joint development by Rainbow Housing,
              bringing 20+ years of focused residential execution, and
              Purple Corp, one of Pune&apos;s most established developers
              with 28+ years&apos; legacy, 35–40+ landmark projects, and over
              20 million sq.ft. developed across the city. The partnership
              has been recognised at the Asia Pacific Property Awards 2024,
              the ET Real Estate Awards, and the Realty+ Excellence Awards.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {developerCredentials.map((award) => (
                <span
                  key={award}
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-medium text-zinc-700 shadow-sm"
                >
                  <AwardIcon className="h-4 w-4 text-amber-600" />
                  {award}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100} className="space-y-6">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-zinc-800">
                <BuildingIcon className="h-4 w-4 text-violet-600" />
                Notable Portfolio
              </h3>
              <div className="flex flex-wrap gap-2">
                {developerPortfolio.map((project) => (
                  <span
                    key={project}
                    className="rounded-full bg-zinc-100 px-3 py-1.5 text-xs text-zinc-700"
                  >
                    {project}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-violet-200 bg-violet-50 p-6">
              <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-violet-700">
                <ShieldCheckIcon className="h-4 w-4" />
                RERA Registration
              </h3>
              <p className="mb-1 text-lg font-semibold text-zinc-900">
                {siteConfig.rera.number}
              </p>
              <p className="text-sm leading-relaxed text-zinc-600">
                Verify all official project details directly on the{" "}
                <a
                  href={siteConfig.rera.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-700 underline decoration-violet-300 underline-offset-2 hover:text-violet-900"
                >
                  MahaRERA portal
                </a>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
