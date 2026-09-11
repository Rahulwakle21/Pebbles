import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import Accordion from "./ui/Accordion";
import { faqs } from "@/lib/park-pebbles-data";

export default function FAQ() {
  return (
    <section id="faq" className="relative px-6 py-20 sm:py-28">
      <Container size="narrow">
        <SectionHeading
          eyebrow="FAQs"
          title="Common Questions About Park Pebbles"
        />
        <Reveal>
          <Accordion items={faqs} />
        </Reveal>
      </Container>
    </section>
  );
}
