// Structured content for Park Pebbles — aligned with the single-page content deck.

export type Configuration = {
  id: string;
  type: "2 BHK" | "3 BHK";
  tier: "Optima" | "Ultima" | "Grande";
  carpetAreaSqFt: number;
  price: string;
  description: string;
  image: { src: string; width: number; height: number };
};

export const configurations: Configuration[] = [
  {
    id: "2bhk-optima",
    type: "2 BHK",
    tier: "Optima",
    carpetAreaSqFt: 797,
    price: "₹86 Lakh*",
    description:
      "A smartly efficient 2-bedroom layout for young families and first-time buyers — no wasted passage space, every room earns its place.",
    image: {
      src: "/images/park-pebbles/floor-plan-2rlk-optima.jpg",
      width: 1100,
      height: 1413,
    },
  },
  {
    id: "2bhk-ultima",
    type: "2 BHK",
    tier: "Ultima",
    carpetAreaSqFt: 829,
    price: "₹90 Lakh*",
    description:
      "The Optima's extra room to breathe — slightly larger bedrooms and a more generous living-dining flow.",
    image: {
      src: "/images/park-pebbles/floor-plan-2rlk-ultima.jpg",
      width: 1100,
      height: 1427,
    },
  },
  {
    id: "3bhk-optima",
    type: "3 BHK",
    tier: "Optima",
    carpetAreaSqFt: 1020,
    price: "₹1.10 Cr*",
    description:
      "The entry point into 3-bedroom living at Park Pebbles — built for growing families who've outgrown a 2 BHK.",
    image: {
      src: "/images/park-pebbles/floor-plan-3rlk-optima.jpg",
      width: 1100,
      height: 1206,
    },
  },
  {
    id: "3bhk-ultima",
    type: "3 BHK",
    tier: "Ultima",
    carpetAreaSqFt: 1050,
    price: "₹1.15 Cr*",
    description:
      "A more spacious take on the 3 BHK, with room for a dedicated study or guest zone.",
    image: {
      src: "/images/park-pebbles/floor-plan-3rlk-ultima.jpg",
      width: 1100,
      height: 1183,
    },
  },
  {
    id: "3bhk-grande",
    type: "3 BHK",
    tier: "Grande",
    carpetAreaSqFt: 1250,
    price: "₹1.33 Cr*",
    description:
      "The flagship layout — the largest carpet area in the project, for families who want space to entertain and grow into.",
    image: {
      src: "/images/park-pebbles/floor-plan-3rlk-grande.jpg",
      width: 1100,
      height: 1072,
    },
  },
];

export const masterPlanImage = {
  src: "/images/park-pebbles/master-layout.jpg",
  width: 1600,
  height: 1051,
  caption: "Master site plan — artistic impression, not to scale",
};

export const heroStatChips = [
  { label: "Starting from", value: "₹86 Lakh*" },
  { label: "Carpet area", value: "797–1,250 sq.ft" },
  { label: "Lifestyle", value: "35+ amenities" },
  { label: "Land parcel", value: "7.25 acres*" },
] as const;

export const projectAtGlanceRows = [
  { label: "Project", value: "Park Pebbles" },
  { label: "Location", value: "Bhugaon, Pune – 412 115" },
  { label: "Developer", value: "Rainbow Housing × Purple Corp" },
  { label: "Configurations", value: "2 & 3 BHK (5 layouts)" },
  { label: "Carpet area", value: "797 – 1,250 sq.ft (RERA carpet)" },
  { label: "Price range", value: "₹86 Lakh* – ₹1.33 Cr*" },
  { label: "Land parcel", value: "7.25 acres" },
  { label: "Podium & clubhouses", value: "82,000+ sq.ft · 3 clubhouses" },
  { label: "Amenities", value: "35+ lifestyle amenities" },
  { label: "Signature USP", value: "Legend-led academies" },
  { label: "Possession", value: "December 2028 possession" },
] as const;

export const highlightsList = [
  "Large 2 & 3 BHK luxury residences, 797–1,250 sq.ft carpet",
  "Located in Bhugaon — Pune West's fastest-growing corridor",
  "82,000+ sq.ft. lifestyle podium across 3 exclusive clubhouses",
  "Legend-led sports, performing-arts & skill-development academies",
  "35+ lifestyle amenities, including a lap pool with jacuzzi and cricket turf",
  "Backed by 28+ years of Rainbow Housing × Purple Corp development legacy",
  "Seamless connectivity to Kothrud, Baner, Wakad & Hinjawadi",
] as const;

export const currentOffers = [
  "Exclusive gift voucher worth ₹2 Lakh* — confirm current validity and terms",
  "Zero EMI till possession* — confirm scheme terms, lender tie-up, and eligibility",
  "Lowest down payment & custom EMI plans",
  "Registration charges waiver* — confirm if currently active",
] as const;

export type SpecGroup = { title: string; items: string[] };

export const specificationGroups: SpecGroup[] = [
  {
    title: "Flooring",
    items: [
      "800mm × 1600mm vitrified flooring in living, dining, kitchen & bedrooms",
      "600mm × 1200mm dado up to false ceiling in toilets",
      "200mm × 1200mm wooden-finish flooring on attached terrace",
    ],
  },
  {
    title: "Paint",
    items: [
      "Branded emulsion paint for internal walls",
      "Branded acrylic paint with texture finish for external walls",
    ],
  },
  {
    title: "Electrical",
    items: [
      "Branded electrical switches in all rooms",
      "Electrical provision for air conditioner in all bedrooms and living room",
      "Electrical provision for inverter",
      "Wi-Fi point provision in living/passage area",
    ],
  },
  {
    title: "Washroom",
    items: [
      "Branded CP and sanitary fittings in all toilets/bathrooms",
      "Exhaust fan in all toilets",
      "Geyser point provision in all toilets",
      "False ceiling in all toilets",
    ],
  },
  {
    title: "Kitchen",
    items: [
      "Granite platform with stainless-steel sink",
      "Cabinet below kitchen platform with branded hardware",
      "Dado up to 2 feet above counter top",
      "Separate SS sink in dry balcony",
      "Provision for dishwasher and washing machine in dry balcony",
      "Water purifier provision",
      "Branded chimney & hob",
    ],
  },
  {
    title: "Doors & Windows",
    items: [
      "Branded door fittings",
      "Aluminium powder-coated windows",
      "Laminated main door with digital lock (biometric and numeric)",
      "Laminated doors for bedrooms and toilets",
      "Granite laminate frame for toilet doors and windows",
    ],
  },
  {
    title: "Automation",
    items: [
      "Home automation with provision for voice-control connectivity",
    ],
  },
  {
    title: "At Project Level",
    items: [
      "100% DG back-up for lifts and limited common areas",
      "Common washroom for drivers in parking area",
    ],
  },
];

export type AmenityCategory = {
  id: string;
  title: string;
  icon:
    | "sports"
    | "wellness"
    | "kids"
    | "social"
    | "fitness"
    | "comfort";
  items: string[];
};

export const amenityCategories: AmenityCategory[] = [
  {
    id: "sports",
    title: "Sports & Active Play",
    icon: "sports",
    items: [
      "Cricket Turf",
      "Skating Rink",
      "Multipurpose Court with Seating",
      "Pickleball Courts (2)",
      "Badminton Court",
      "Cross Fit Zone",
      "Lap Pool with Jacuzzi",
      "Kids' Pool",
    ],
  },
  {
    id: "wellness",
    title: "Wellness & Relaxation",
    icon: "wellness",
    items: [
      "Meditation Court & Deck",
      "Semi-Covered Yoga Deck",
      "Zen Garden",
      "Acupressure Pathway with Senior Citizen Seating",
      "Sunken Loungers",
      "Gazebo",
    ],
  },
  {
    id: "kids",
    title: "Kids & Family",
    icon: "kids",
    items: [
      "Toddlers' Play Park",
      "Kids' Play Area / Play Zone",
      "Creche",
      "Music / Dance Academy",
      "Swing Court",
    ],
  },
  {
    id: "social",
    title: "Social & Community",
    icon: "social",
    items: [
      "Party Lawn",
      "Festive Court",
      "Community Lawn",
      "Floor Games Deck",
      "Multipurpose Hall & Pre-Function Area with Kitchen & Store",
      "Pets Park",
    ],
  },
  {
    id: "fitness",
    title: "Fitness & Work",
    icon: "fitness",
    items: [
      "Fully Equipped Gym",
      "Co-Working Area & Covered Co-Working Pods",
      "Indoor Games Area / Zone",
    ],
  },
  {
    id: "comfort",
    title: "Comfort Add-Ons",
    icon: "comfort",
    items: ["Covered Seating Deck for Pool", "3 Exclusive Clubhouses"],
  },
];

export type ConnectivityGroup = {
  id: string;
  title: string;
  icon: "road" | "metro" | "school" | "hospital" | "retail" | "travel";
  items: string[];
};

export const connectivityGroups: ConnectivityGroup[] = [
  {
    id: "road",
    title: "Highways & Roads",
    icon: "road",
    items: [
      "Mumbai–Pune Highway access",
      "Chandani Chowk",
      "Baner & Balewadi High Street",
      "Kothrud & Bavdhan",
    ],
  },
  {
    id: "metro",
    title: "Metro & IT Hubs",
    icon: "metro",
    items: [
      "Vanaz Metro Station (Aqua Line)",
      "Hinjawadi Rajiv Gandhi IT Park",
    ],
  },
  {
    id: "school",
    title: "Education",
    icon: "school",
    items: [
      "Ryan International School",
      "The Little Galaxy School",
      "Indian Model International School",
    ],
  },
  {
    id: "hospital",
    title: "Healthcare",
    icon: "hospital",
    items: ["Chellaram Hospital", "Unique Multispeciality Hospital"],
  },
  {
    id: "retail",
    title: "Retail & Daily Needs",
    icon: "retail",
    items: [
      "DMart and retail hubs across the Bhugaon–Bavdhan–Kothrud–Baner belt",
    ],
  },
  {
    id: "travel",
    title: "Travel",
    icon: "travel",
    items: ["Pune International Airport", "Pune Railway Station"],
  },
];

export const faqs: { question: string; answer: string }[] = [
  {
    question: "What is the RERA registration number for Park Pebbles?",
    answer:
      "Park Pebbles is registered under MahaRERA No. PR1261012600124. You can verify all official project details directly on the MahaRERA portal at maharera.maharashtra.gov.in.",
  },
  {
    question: "What configurations are available at Park Pebbles?",
    answer:
      "Park Pebbles offers 2 and 3 BHK homes ranging from 797 to 1,250 sq.ft carpet area, across five layout options — Optima, Ultima, and Grande variants.",
  },
  {
    question: "What is the price of a 2 BHK / 3 BHK at Park Pebbles?",
    answer:
      "Prices start from ₹86 Lakh* for a 2 BHK Optima (797 sq.ft) and go up to ₹1.33 Cr* for the flagship 3 BHK Grande (1,250 sq.ft). Confirm current pricing with our advisory team — prices are revised periodically.",
  },
  {
    question: "What are the major amenities at Park Pebbles?",
    answer:
      "The project features 3 exclusive clubhouses, a lap pool with jacuzzi, a cricket turf, a skating rink, pickleball courts, kids' play areas, co-working spaces, and 35+ amenities in total, spread across an 82,000+ sq.ft. podium.",
  },
  {
    question: 'What is the "legend-led academies" concept?',
    answer:
      "It's Park Pebbles' signature offering — on-site sports, performing-arts, and skill-development academies, giving resident children structured, expert-led access to these disciplines without leaving the community.",
  },
  {
    question: "Is Park Pebbles well connected to Pune's key areas?",
    answer:
      "Yes — the project connects to Kothrud, Baner, Wakad, and Hinjawadi, with access to the Mumbai–Pune Highway and the Vanaz Metro Station (Aqua Line).",
  },
  {
    question: "Are schools, hospitals, and markets nearby?",
    answer:
      "Yes. Reputed schools (including Ryan International School and Indian Model International School), hospitals (Chellaram, Unique Multispeciality), and retail across the Bhugaon–Bavdhan–Kothrud–Baner belt are all within reach. Verify exact drive times on Google Maps or ask our team during your consultation.",
  },
  {
    question: "Who is developing Park Pebbles?",
    answer:
      "Park Pebbles is a joint development by Rainbow Housing and Purple Corp, combining 20+ and 28+ years of development experience respectively.",
  },
  {
    question: "What is the possession date for Park Pebbles?",
    answer:
      "Confirm the exact possession date or quarter from the current MahaRERA record for PR1261012600124 before relying on any date — our team can walk you through the official filing during your site visit.",
  },
  {
    question: "Is Park Pebbles a good investment?",
    answer:
      "Bhugaon is one of Pune West's fastest-emerging corridors, priced below established neighbours like Baner and Kothrud, with improving highway and Metro connectivity. As with any property purchase, we recommend evaluating your own timeline and requirements — speak with our advisory team for a personalised view. This is not a guarantee of returns.",
  },
  {
    question: "What are the current payment plans and offers?",
    answer:
      "Park Pebbles offers flexible, construction-linked payment plans with home-loan assistance. Current offers change frequently — contact us at 9324307002 for time-stamped terms rather than relying on outdated listings.",
  },
  {
    question: "How do I schedule a site visit or get exact pricing?",
    answer:
      "Fill out the enquiry form on this page or call/WhatsApp us directly at 9324307002 — we'll arrange your visit and share current pricing and available offers.",
  },
  {
    question: "Can NRIs buy a home at Park Pebbles?",
    answer:
      "Yes — NRIs can purchase subject to RBI and documentation requirements. Our advisory team handles NRI enquiries on request; reach out via the form or WhatsApp for step-by-step guidance.",
  },
  {
    question: "What is the carpet area vs. saleable area at Park Pebbles?",
    answer:
      "All carpet-area figures on this page (797–1,250 sq.ft) refer to RERA carpet area as mandated by the RERA Act, 2016. Ask our team for current saleable or built-up figures and the applicable loading factor for your chosen layout.",
  },
];

export const projectFacts = {
  name: "Park Pebbles",
  location: "Bhugaon, Pune – 412 115, Maharashtra",
  developer: "Rainbow Housing × Purple Corp",
  landParcel: "7.25 acres*",
  podium: "82,000+ sq.ft. lifestyle podium across 3 exclusive clubhouses",
  configurationsLabel: "2 & 3 BHK homes",
  amenityCount: "35+",
  possession: "December 2028",
  priceFrom: "₹86 Lakh*",
  usp: "Legend-led academies",
};

export const howWeHelpSteps = [
  {
    step: "01",
    title: "Enquire",
    description: "Tell us your budget, configuration, and priorities.",
  },
  {
    step: "02",
    title: "Site Visit",
    description: "We arrange and accompany you on your visit to Park Pebbles.",
  },
  {
    step: "03",
    title: "Compare & Choose",
    description:
      "Honest, side-by-side guidance — no pressure toward any one unit or configuration.",
  },
  {
    step: "04",
    title: "Book with Assistance",
    description:
      "Loan guidance, paperwork, and RERA checks handled end-to-end.",
  },
] as const;

export const whyChooseUs = [
  {
    title: "Local expertise",
    description: "We live and work Pune West, not the whole city.",
  },
  {
    title: "Direct developer relationships",
    description: "Faster answers, better access to inventory and offers.",
  },
  {
    title: "Transparent process",
    description: "No hidden commissions influencing what we recommend.",
  },
  {
    title: "Post-sale support",
    description: "We don't disappear after you book.",
  },
  {
    title: "No-pressure advisory",
    description: "We're here to inform, not push.",
  },
] as const;

export const developerCredentials = [
  "Asia Pacific Property Awards 2024",
  "ET Real Estate Awards",
  "Realty+ Excellence Awards",
] as const;

export const developerLogos = [
  {
    id: "rainbow-housing",
    name: "Rainbow Housing",
    src: "/images/park-pebbles/logo-rainbow-housing.png",
    width: 563,
    height: 508,
  },
  {
    id: "purple-corp",
    name: "Purple Corp",
    src: "/images/park-pebbles/logo-purple-corp.png",
    width: 1369,
    height: 508,
  },
] as const;

export const legendAcademiesImage = {
  src: "/images/park-pebbles/legend-academies.jpg",
  width: 1600,
  height: 1051,
  quote:
    "A better everyday for parents. A stronger tomorrow for children.",
};

export const developerPortfolio = [
  "Park Street",
  "Park Royale",
  "Park Grandeur",
  "Park Express",
  "Park Connect",
  "Park Astra",
  "Park Titan",
] as const;

export const gallery = [
  {
    id: "podium",
    caption: "Podium Life at Park Pebbles",
    image: {
      src: "/images/park-pebbles/gallery-podium-pool.jpg",
      width: 1600,
      height: 1051,
    },
  },
  {
    id: "play",
    caption: "Where Kids Actually Want to Play Outside",
    image: {
      src: "/images/park-pebbles/gallery-kids-play.jpg",
      width: 1600,
      height: 791,
    },
  },
  {
    id: "clubhouses",
    caption: "3 Clubhouses, Endless Ways to Unwind",
    image: {
      src: "/images/park-pebbles/gallery-clubhouse.jpg",
      width: 1600,
      height: 791,
    },
  },
  {
    id: "site",
    caption: "Site Progress: Building Your Future, Brick by Brick",
    image: {
      src: "/images/park-pebbles/gallery-site-aerial.jpg",
      width: 1600,
      height: 1051,
    },
  },
  {
    id: "exterior",
    caption: "Exterior View at Dusk",
    image: {
      src: "/images/park-pebbles/hero-exterior.jpg",
      width: 1600,
      height: 1051,
    },
  },
] as const;

export const overviewParagraphs = {
  lead:
    "Park Pebbles is a thoughtfully positioned residential development in Bhugaon, Pune, built on the joint legacy of Rainbow Housing and Purple Corp. Spread across 7.25 acres*, the project offers 2 and 3 BHK homes ranging from 797 to 1,250 sq.ft carpet area, wrapped around an 82,000+ sq.ft lifestyle podium and 3 exclusive clubhouses. Every home is designed for abundant natural light, cross-ventilation, and genuine privacy — the kind of everyday comfort that's harder to find as Pune's inner suburbs get denser.",
  body:
    "What sets Park Pebbles apart isn't just the space — it's what surrounds it. The project's signature offering is a set of legend-led academies in sports, performing arts, and skill development, giving resident children structured access to expert-led programs without leaving the community. Combined with 35+ lifestyle amenities, a dedicated no-vehicle zone across the podium, and a location that keeps Kothrud, Baner, and Hinjawadi within easy reach, Park Pebbles is built for families who want more than four walls — they want an environment that grows with their children.",
  extended:
    "Strategically positioned in Bhugaon, Park Pebbles offers the advantage of being well-connected while retaining a sense of calm and openness. The town is rapidly emerging as a high-potential residential corridor — with proximity to Kothrud, Baner, and Hinjawadi, and a more open, serene, and livable environment with better air quality than its established neighbours. With improving infrastructure, rising demand, and limited premium supply, Bhugaon is positioned for meaningful value appreciation in the years ahead.",
} as const;
