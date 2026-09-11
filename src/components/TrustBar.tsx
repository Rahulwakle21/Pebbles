import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import { ShieldCheckIcon, UsersIcon, HomeIcon, SparklesIcon } from "./ui/Icons";

const trustItems = [
  {
    icon: ShieldCheckIcon,
    label: "RERA Registered Channel Partner",
  },
  {
    icon: HomeIcon,
    label: "Direct Developer Tie-ups Across Pune West",
  },
  {
    icon: SparklesIcon,
    label: "Zero-Pressure Advisory Process",
  },
  {
    icon: UsersIcon,
    label: "Focused Exclusively on Pune West",
  },
];

export default function TrustBar() {
  return (
    <section aria-label="Why buyers trust us" className="relative border-y border-zinc-200 bg-zinc-50 px-6 py-10">
      <Container size="wide">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => (
            <Reveal
              key={item.label}
              delay={index * 80}
              className="flex items-center gap-3 text-left"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                <item.icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-medium text-zinc-700">
                {item.label}
              </span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
