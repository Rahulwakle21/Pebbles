"use client";

import { useState } from "react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import ProjectImage from "./ui/ProjectImage";
import { configurations } from "@/lib/park-pebbles-data";

export default function FloorPlans() {
  const [activeId, setActiveId] = useState(configurations[0].id);
  const active = configurations.find((c) => c.id === activeId) ?? configurations[0];

  return (
    <section
      id="floor-plans"
      className="relative border-t border-zinc-200 bg-zinc-50 px-6 py-20 sm:py-28"
    >
      <Container size="wide">
        <SectionHeading
          eyebrow="Master Plan & Floor Plans"
          title="Find the Layout That Fits Your Family"
          description="Five configurations, one thoughtful design philosophy — browse each layout below."
        />

        <Reveal>
          <div
            role="tablist"
            aria-label="Configuration floor plans"
            className="mb-10 flex flex-wrap justify-center gap-2"
          >
            {configurations.map((config) => {
              const isActive = config.id === activeId;
              return (
                <button
                  key={config.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`floor-plan-panel-${config.id}`}
                  onClick={() => setActiveId(config.id)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 ${
                    isActive
                      ? "border-violet-600 bg-violet-600 text-white shadow-md shadow-violet-600/20"
                      : "border-zinc-300 text-zinc-600 hover:border-zinc-400 hover:text-zinc-900"
                  }`}
                >
                  {config.type} {config.tier}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div
          id={`floor-plan-panel-${active.id}`}
          role="tabpanel"
          className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
        >
          <ProjectImage
            key={active.id}
            src={active.image.src}
            alt={`${active.type} ${active.tier} floor plan — ${active.carpetAreaSqFt} sq.ft carpet area, with room dimensions`}
            width={active.image.width}
            height={active.image.height}
            className="mx-auto w-full max-w-md bg-white"
            sizes="(min-width: 1024px) 448px, 100vw"
          />

          <div key={`${active.id}-details`} className="animate-fade-in">
            <span className="mb-3 inline-block rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-700">
              {active.type} {active.tier}
            </span>
            <h3 className="mb-4 text-2xl font-bold text-zinc-900 sm:text-3xl">
              {active.carpetAreaSqFt.toLocaleString("en-IN")} sq.ft Carpet Area
            </h3>
            <p className="mb-6 text-base leading-relaxed text-zinc-600 sm:text-lg">
              {active.description}
            </p>
            <div className="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <span className="text-sm text-zinc-500">Indicative Price</span>
              <span className="text-xl font-bold text-violet-700">
                {active.price}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
