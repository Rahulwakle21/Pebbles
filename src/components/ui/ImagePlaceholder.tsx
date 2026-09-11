import { CameraIcon } from "./Icons";

type ImagePlaceholderProps = {
  label: string;
  ratio?: "square" | "portrait" | "landscape" | "wide";
  className?: string;
};

const ratioClasses: Record<NonNullable<ImagePlaceholderProps["ratio"]>, string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
};

export default function ImagePlaceholder({
  label,
  ratio = "landscape",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`Placeholder — ${label}`}
      className={`relative flex ${ratioClasses[ratio]} w-full items-center justify-center overflow-hidden rounded-2xl border border-dashed border-zinc-300 bg-[linear-gradient(135deg,rgba(139,92,246,0.08),rgba(250,250,250,1)_45%,rgba(251,191,36,0.06))] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.1),transparent_55%)]" />
      <div className="relative flex flex-col items-center gap-3 px-6 text-center">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-500">
          <CameraIcon className="h-5 w-5" />
        </span>
        <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
          Image placeholder
        </span>
        <span className="max-w-[220px] text-sm font-medium text-zinc-700">
          {label}
        </span>
      </div>
    </div>
  );
}
