"use client";

import { useState } from "react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import ProjectImage from "./ui/ProjectImage";
import Button from "./ui/Button";
import {
  configurations,
  masterPlanImage,
} from "@/lib/park-pebbles-data";

type TabId = "master" | (typeof configurations)[number]["id"];

export default function FloorPlans() {
  const [activeId, setActiveId] = useState<TabId>("master");

  const isMaster = activeId === "master";
  const activeConfig = configurations.find((c) => c.id === activeId);

  return (
    <section
      id="floor-plans"
      className="relative border-t border-zinc-200 bg-zinc-50 px-6 py-20 sm:py-28"
    >
      <Container size="wide">
        <SectionHeading
          eyebrow="Floor Plans & Master Plan"
          title="Find the Layout That Fits Your Family"
          description="Five configurations, one thoughtful design philosophy — browse each layout below."
        />

        <Reveal>
          <div
            role="tablist"
            aria-label="Master plan and configuration floor plans"
            className="mb-10 flex flex-wrap justify-center gap-2"
          >
            <button
              type="button"
              role="tab"
              aria-selected={isMaster}
              onClick={() => setActiveId("master")}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 ${
                isMaster
                  ? "border-violet-600 bg-violet-600 text-white shadow-md shadow-violet-600/20"
                  : "border-zinc-300 text-zinc-600 hover:border-zinc-400 hover:text-zinc-900"
              }`}
            >
              Master Plan
            </button>
            {configurations.map((config) => {
              const isActive = config.id === activeId;
              return (
                <button
                  key={config.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
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

        <div role="tabpanel" className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {isMaster ? (
            <>
              <ProjectImage
                src={masterPlanImage.src}
                alt="Park Pebbles master site plan — artistic impression, not to scale"
                ratio="wide"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div>
                <h3 className="mb-4 text-2xl font-bold text-zinc-900 sm:text-3xl">
                  Master Plan
                </h3>
                <p className="mb-6 text-base leading-relaxed text-zinc-600">
                  {masterPlanImage.caption}. Explore individual 2 &amp; 3 BHK
                  layouts using the tabs above.
                </p>
                <Button href="#contact">Enquire Now</Button>
              </div>
            </>
          ) : activeConfig ? (
            <>
              <ProjectImage
                key={activeConfig.id}
                src={activeConfig.image.src}
                alt={`${activeConfig.type} ${activeConfig.tier} floor plan — ${activeConfig.carpetAreaSqFt} sq.ft carpet area`}
                width={activeConfig.image.width}
                height={activeConfig.image.height}
                className="mx-auto w-full max-w-md bg-white"
                sizes="(min-width: 1024px) 448px, 100vw"
              />
              <div key={`${activeConfig.id}-details`} className="animate-fade-in">
                <span className="mb-3 inline-block rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-700">
                  {activeConfig.type} {activeConfig.tier}
                </span>
                <h3 className="mb-1 text-2xl font-bold text-zinc-900 sm:text-3xl">
                  {activeConfig.type} {activeConfig.tier} —{" "}
                  {activeConfig.carpetAreaSqFt.toLocaleString("en-IN")} sq.ft
                  Carpet Area
                </h3>
                <p className="mb-6 text-base leading-relaxed text-zinc-600 sm:text-lg">
                  {activeConfig.description}
                </p>
                <div className="mb-6 flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                  <span className="text-sm text-zinc-500">Indicative Price</span>
                  <span className="text-xl font-bold text-violet-700">
                    {activeConfig.price}
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button href="#contact">Enquire Now</Button>
                  <Button href="#contact" variant="secondary">
                    Download Floor Plan
                  </Button>
                </div>
                <p className="mt-4 text-xs text-zinc-500">
                  Artistic impression, not to scale.
                </p>
              </div>
            </>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
