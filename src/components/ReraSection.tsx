import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import { siteConfig } from "@/lib/site-config";

export default function ReraSection() {
  return (
    <section
      id="rera"
      className="relative border-t border-zinc-200 px-6 py-20 sm:py-28"
    >
      <Container size="narrow">
        <Reveal className="rounded-3xl border border-violet-200 bg-violet-50/50 p-8 text-center shadow-sm sm:p-12">
          <span className="mb-4 inline-flex items-center rounded-full border border-violet-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-violet-700">
            RERA &amp; Possession Status
          </span>
          <h2 className="mb-4 text-2xl font-bold text-zinc-900 sm:text-3xl">
            Registered on MahaRERA
          </h2>
          <p className="mb-6 text-base leading-relaxed text-zinc-600">
            Park Pebbles is registered under MahaRERA No.{" "}
            <strong>{siteConfig.rera.projectNumber}</strong>. You can verify
            all official project details — including layout plans, promoter
            details, and the sanctioned possession date — directly on the
            MahaRERA portal.
          </p>
          <p className="mb-8 text-xs text-zinc-500">
            Add the MahaRERA QR code image here once your compliance advisor
            confirms placement and format.
          </p>
          <a
            href={siteConfig.rera.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-violet-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-violet-500"
          >
            Verify on MahaRERA →
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
