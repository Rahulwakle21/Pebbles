import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import LeadForm from "./ui/LeadForm";
import { MailIcon, MapPinIcon, PhoneIcon } from "./ui/Icons";
import {
  contactEmailDisplay,
  contactOfficeDisplay,
  contactPhoneDisplay,
  siteConfig,
} from "@/lib/site-config";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-zinc-200 px-6 py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-violet-100/60 blur-3xl" />

      <Container size="wide" className="relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <span className="mb-4 inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-violet-700">
              Enquiry Form &amp; Contact
            </span>
            <h2 className="mb-5 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Ready to See Park Pebbles for Yourself?
            </h2>
            <p className="mb-8 text-base leading-relaxed text-zinc-600 sm:text-lg">
              Tell us your budget and priorities — we&apos;ll tell you
              honestly what&apos;s worth seeing across Pune West, and arrange a
              site visit at Park Pebbles that works for you.
            </p>

            <ul className="space-y-4 text-sm text-zinc-600">
              <li className="flex items-start gap-3">
                <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-violet-600" />
                <div>
                  <div className="font-medium text-zinc-900">Call</div>
                  <a
                    href={siteConfig.contact.phoneTel}
                    className="hover:text-violet-700"
                  >
                    {contactPhoneDisplay()}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                <div>
                  <div className="font-medium text-zinc-900">WhatsApp</div>
                  <a
                    href={siteConfig.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-violet-700"
                  >
                    {contactPhoneDisplay()}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-violet-600" />
                <div>
                  <div className="font-medium text-zinc-900">Email</div>
                  <div>{contactEmailDisplay()}</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-violet-600" />
                <div>
                  <div className="font-medium text-zinc-900">Project Site Address</div>
                  <div>{siteConfig.projectSiteAddress}</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-zinc-400" />
                <div>
                  <div className="font-medium text-zinc-900">Office</div>
                  <div>{contactOfficeDisplay()}</div>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={100} className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
            <LeadForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
