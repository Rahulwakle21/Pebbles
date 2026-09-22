// Brand / channel-partner configuration.

export const siteConfig = {
  brandName: "Pebbles",
  brandLogoInitial: "P",
  brandTagline: "Pune West Real Estate Channel Partner",
  contact: {
    phone: "9324307002",
    phoneTel: "tel:9324307002",
    whatsapp: "919324307002",
    whatsappUrl:
      "https://wa.me/919324307002?text=Hi%2C%20I%27m%20interested%20in%20Park%20Pebbles%2C%20Bhugaon.%20Please%20share%20more%20details.",
    email: "", // Add business email before publishing
    officeAddress: "", // Add office address if you want to display one
  },
  projectSiteAddress:
    "Park Pebbles, Bhugaon, Pune – 412 115, Maharashtra",
  projectOffice: {
    name: "Park Pebbles — Project Sales Office",
    address:
      "5th Floor, Pride House, 108, Ganeshkhind Road, Near Pune University, Pune - 411 016",
    phone: "+91 70261 92525",
    website: "www.theparkpebbles.com",
  },
  rera: {
    projectNumber: "PR1261012600124",
    channelPartnerNumber: "A52100033587",
    verifyUrl: "https://maharera.maharashtra.gov.in",
  },
} as const;

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#overview", label: "Overview" },
  { href: "#pricing", label: "Pricing" },
  { href: "#floor-plans", label: "Floor Plans" },
  { href: "#amenities", label: "Amenities" },
  { href: "#location", label: "Location" },
  { href: "#why-bhugaon", label: "Why Bhugaon" },
  { href: "#faq", label: "FAQs" },
  { href: "#contact", label: "Contact" },
] as const;

export function contactPhoneDisplay(): string {
  return siteConfig.contact.phone;
}

export function contactEmailDisplay(): string {
  return siteConfig.contact.email || "Add business email";
}

export function contactOfficeDisplay(): string {
  return siteConfig.contact.officeAddress || "Add office address (optional)";
}
