// Brand / channel-partner configuration.
// NOTE: Several values below are intentionally left as clearly-labelled
// placeholders per the content deck's instructions — do not reuse contact
// details or numbers scraped from third-party marketing sites.

export const siteConfig = {
  brandName: "Pebbles",
  brandLogoInitial: "P",
  brandTagline: "Pune West Real Estate Channel Partner",
  legalDisclaimerAccepted: false,
  contact: {
    phonePlaceholder: "Add brand phone number",
    whatsappPlaceholder: "Add WhatsApp number",
    emailPlaceholder: "Add brand email address",
    addressPlaceholder: "Add office address",
    hoursPlaceholder: "Add office hours",
  },
  // Official project sales-office details, sourced directly from the Park
  // Pebbles plan booklet (a primary developer document, cross-checked against
  // the newer "V2 Digital" unit/floor-plan booklet's back cover) — distinct
  // from the brand's own advisory contact above.
  projectOffice: {
    name: "Park Pebbles — Project Sales Office",
    address:
      "5th Floor, Pride House, 108, Ganeshkhind Road, Near Pune University, Pune - 411 016",
    phone: "+91 70261 92525",
    website: "www.theparkpebbles.com",
  },
  rera: {
    number: "PR1261012600124",
    verifyUrl: "https://maharera.maharashtra.gov.in",
  },
} as const;

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#pune-west", label: "Pune West" },
  { href: "#park-pebbles", label: "Park Pebbles" },
  { href: "#amenities", label: "Amenities" },
  { href: "#faq", label: "FAQs" },
  { href: "#contact", label: "Contact" },
] as const;
