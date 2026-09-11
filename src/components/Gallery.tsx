import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import ProjectImage from "./ui/ProjectImage";
import { gallery } from "@/lib/park-pebbles-data";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative border-t border-zinc-200 bg-zinc-50 px-6 py-20 sm:py-28"
    >
      <Container size="wide">
        <SectionHeading
          eyebrow="Gallery"
          title="A Closer Look at Park Pebbles"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {gallery.map((item, index) => (
            <Reveal key={item.id} delay={index * 90} className="group overflow-hidden rounded-2xl">
              <ProjectImage
                src={item.image.src}
                alt={item.caption}
                ratio="wide"
                className="transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(min-width: 640px) 50vw, 100vw"
              />
              <p className="mt-3 text-sm font-medium text-zinc-600">
                {item.caption}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
