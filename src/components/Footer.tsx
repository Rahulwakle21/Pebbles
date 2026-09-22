import Container from "./ui/Container";
import { MailIcon, MapPinIcon, PhoneIcon } from "./ui/Icons";
import {
  contactEmailDisplay,
  contactOfficeDisplay,
  contactPhoneDisplay,
  navLinks,
  siteConfig,
} from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <Container className="py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="flex items-center gap-2 text-xl font-bold text-zinc-900">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 text-sm font-black text-white">
                {siteConfig.brandLogoInitial}
              </span>
              {siteConfig.brandName}
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-600">
              Pune West Real Estate Channel Partner. Honest guidance across
              Bhugaon, Baner, Wakad, and Hinjawadi — zero pressure, always.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-800">
              Explore
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-600 transition-colors hover:text-violet-700"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-800">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm text-zinc-600">
              <li className="flex items-start gap-2.5">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-violet-600" />
                <a href={siteConfig.contact.phoneTel} className="hover:text-violet-700">
                  {contactPhoneDisplay()}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-violet-600" />
                <span>{contactEmailDisplay()}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-violet-600" />
                <span>{contactOfficeDisplay()}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-800">
              Project Site
            </h3>
            <p className="text-sm leading-relaxed text-zinc-600">
              {siteConfig.projectSiteAddress}
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-200 pt-8">
          <p className="text-xs leading-relaxed text-zinc-500">
            This project is registered under MahaRERA No.{" "}
            {siteConfig.rera.projectNumber}, available at{" "}
            <a
              href={siteConfig.rera.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-zinc-300 underline-offset-2 hover:text-violet-700"
            >
              maharera.maharashtra.gov.in
            </a>
            . This website is maintained by an independent RERA-registered
            channel partner (Registration No.{" "}
            {siteConfig.rera.channelPartnerNumber}) and is for informational
            purposes only; it does not constitute an offer or contract. Images
            are for representation purposes only. Prices, plans, and
            specifications are subject to change without notice and should be
            confirmed directly with the developer before booking.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-xs text-zinc-500">
            <a href="#" className="hover:text-violet-700">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-violet-700">
              Terms &amp; Conditions
            </a>
            <a href="#" className="hover:text-violet-700">
              Disclaimer
            </a>
          </div>
          <p className="mt-4 text-xs text-zinc-500">
            © {new Date().getFullYear()} {siteConfig.brandName}. All rights
            reserved. {siteConfig.brandName} is an independent RERA-registered
            channel partner (RERA No. {siteConfig.rera.channelPartnerNumber}) and
            is not the developer of Park Pebbles.
          </p>
        </div>
      </Container>
    </footer>
  );
}
