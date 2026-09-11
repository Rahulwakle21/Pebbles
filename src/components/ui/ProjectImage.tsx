import Image from "next/image";

type ProjectImageProps = {
  src: string;
  alt: string;
  ratio?: "square" | "portrait" | "landscape" | "wide";
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

const ratioClasses: Record<NonNullable<ProjectImageProps["ratio"]>, string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
};

export default function ProjectImage({
  src,
  alt,
  ratio,
  width,
  height,
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: ProjectImageProps) {
  if (!ratio && width && height) {
    return (
      <div
        className={`overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 shadow-sm ${className}`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          priority={priority}
          className="h-auto w-full"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-sm ${
        ratio ? ratioClasses[ratio] : ""
      } ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
