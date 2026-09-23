"use client";

import { useState } from "react";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import ProjectImage from "./ui/ProjectImage";
import {
  legendAcademiesImage,
  overviewParagraphs,
  projectFacts,
} from "@/lib/park-pebbles-data";

export default function ProjectOverview() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="overview" className="relative px-6 pb-20 sm:pb-28">
      <Container size="wide">
        <Reveal>
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Overview
          </h2>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <Reveal className="space-y-5 text-base leading-relaxed text-zinc-600 sm:text-lg">
            <p>{overviewParagraphs.lead}</p>
            {!expanded ? (
              <>
                <p className="line-clamp-3">{overviewParagraphs.body}</p>
                <button
                  type="button"
                  onClick={() => setExpanded(true)}
                  className="text-sm font-semibold text-violet-700 underline decoration-violet-300 underline-offset-2 hover:text-violet-900"
                >
                  Read More
                </button>
              </>
            ) : (
              <>
                <p>{overviewParagraphs.body}</p>
                <p>{overviewParagraphs.extended}</p>
                <button
                  type="button"
                  onClick={() => setExpanded(false)}
                  className="text-sm font-semibold text-violet-700 underline decoration-violet-300 underline-offset-2 hover:text-violet-900"
                >
                  Show Less
                </button>
              </>
            )}
            {/* <p className="text-xs text-zinc-500">
              *Land parcel stated as 7.25 acres on developer and partner
              materials — confirm the correct figure ({projectFacts.landParcel})
              before publishing.
            </p> */}
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Location", value: "Bhugaon, Pune" },
                { label: "Land Parcel", value: projectFacts.landParcel },
                { label: "Configurations", value: projectFacts.configurationsLabel },
                {
                  label: "Amenities",
                  value: `${projectFacts.amenityCount} lifestyle amenities`,
                },
                {
                  label: "Podium",
                  value: "82,000+ sq.ft · 3 clubhouses",
                },
                { label: "Possession", value: projectFacts.possession },
              ].map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-colors hover:border-violet-200"
                >
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    {fact.label}
                  </div>
                  <div className="text-sm font-semibold leading-snug text-zinc-900 sm:text-base">
                    {fact.value}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={140} className="relative mt-10 overflow-hidden rounded-2xl">
          <ProjectImage
            src={legendAcademiesImage.src}
            alt="Park Pebbles lifestyle and academy concept — artistic impression from developer brochure"
            ratio="wide"
            sizes="(min-width: 1024px) 1152px, 100vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-900/70 via-zinc-900/10 to-transparent" />
          <p className="pointer-events-none absolute inset-x-0 bottom-0 p-6 text-sm font-medium leading-relaxed text-white sm:p-8 sm:text-base">
            &ldquo;{legendAcademiesImage.quote}&rdquo;
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
