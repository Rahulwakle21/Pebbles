// Structured content for the Park Pebbles project, reconciled from the
// Park Pebbles Website Content Deck (single source of truth for copy) and
// cross-referenced with the official Plan Booklet for unit-level detail.
//
// Figures flagged as unconfirmed in the content deck (possession date,
// tower structure, exact land parcel, connectivity drive-times) are
// deliberately presented as "TBC" / without minutes — do not invent them.

export type Configuration = {
  id: string;
  type: "2 RLK" | "3 RLK";
  tier: "Optima" | "Ultima" | "Grande";
  carpetAreaSqFt: number;
  price: string;
  description: string;
  /** Official floor-plan diagram, sourced from the developer's plan booklet. */
  image: { src: string; width: number; height: number };
};

export const configurations: Configuration[] = [
  {
    id: "2rlk-optima",
    type: "2 RLK",
    tier: "Optima",
    carpetAreaSqFt: 797,
    price: "₹86 Lakh",
    description:
      "A smartly efficient 2-bedroom layout for young families and first-time buyers — no wasted passage space, every room earns its place.",
    image: {
      src: "/images/park-pebbles/floor-plan-2rlk-optima.jpg",
      width: 1100,
      height: 1413,
    },
  },
  {
    id: "2rlk-ultima",
    type: "2 RLK",
    tier: "Ultima",
    carpetAreaSqFt: 829,
    price: "₹90 Lakh",
    description:
      "The Optima's extra room to breathe — slightly larger bedrooms and a more generous living-dining flow.",
    image: {
      src: "/images/park-pebbles/floor-plan-2rlk-ultima.jpg",
      width: 1100,
      height: 1427,
    },
  },
  {
    id: "3rlk-optima",
    type: "3 RLK",
    tier: "Optima",
    carpetAreaSqFt: 1020,
    price: "₹1.10 Cr",
    description:
      "The entry point into 3-bedroom living at Park Pebbles — built for growing families who've outgrown a 2 RLK.",
    image: {
      src: "/images/park-pebbles/floor-plan-3rlk-optima.jpg",
      width: 1100,
      height: 1206,
    },
  },
  {
    id: "3rlk-ultima",
    type: "3 RLK",
    tier: "Ultima",
    carpetAreaSqFt: 1050,
    price: "₹1.15 Cr",
    description:
      "A more spacious take on the 3 RLK, with room for a dedicated study or guest zone.",
    image: {
      src: "/images/park-pebbles/floor-plan-3rlk-ultima.jpg",
      width: 1100,
      height: 1183,
    },
  },
  {
    id: "3rlk-grande",
    type: "3 RLK",
    tier: "Grande",
    carpetAreaSqFt: 1250,
    price: "₹1.33 Cr",
    description:
      "The flagship layout — the largest carpet area in the project, for families who want space to entertain and grow into.",
    image: {
      src: "/images/park-pebbles/floor-plan-3rlk-grande.jpg",
      width: 1100,
      height: 1072,
    },
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
      "Pickle Ball Courts (2)",
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
      "Semi-covered Yoga Deck",
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
      "Kids Play Area / Play Zone",
      "Creche",
      "Music/Dance Academy",
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
    title: "Comfort Add-ons",
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
    items: ["DMart and retail hubs across the Bhugaon–Bavdhan–Kothrud–Baner belt"],
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
      "Park Pebbles is registered under MahaRERA No. PR1261012600124. You can verify all official project details directly on the MahaRERA portal.",
  },
  {
    question: "What configurations are available at Park Pebbles?",
    answer:
      "Park Pebbles offers 2 and 3 RLK homes ranging from 797 to 1,250 sq.ft carpet area, across five layout options — Optima, Ultima, and Grande variants.",
  },
  {
    question: "What are the major amenities at Park Pebbles?",
    answer:
      "The project features 3 exclusive clubhouses, a lap pool with jacuzzi, a cricket turf, skating rink, kids' play areas, co-working spaces, and 35+ amenities in total, spread across an 82,000+ sq.ft. podium.",
  },
  {
    question: "Is Park Pebbles well connected to Pune's key areas?",
    answer:
      "Yes — the project connects to Kothrud, Baner, Wakad, and Hinjawadi, with access to the Mumbai–Pune Highway and the Vanaz Metro Station (Aqua Line).",
  },
  {
    question: "Are markets, schools, and hospitals nearby?",
    answer:
      "Yes. Reputed schools (including Ryan International and Indian Model International School), hospitals (Chellaram, Unique Multispeciality), and retail across the Bhugaon–Bavdhan–Kothrud–Baner belt are all within reach.",
  },
  {
    question: "Who is developing Park Pebbles?",
    answer:
      "Park Pebbles is a joint development by Rainbow Housing and Purple Corp, combining 20+ and 28+ years of development experience respectively.",
  },
  {
    question: 'What is the "legend-led academies" concept?',
    answer:
      "It's Park Pebbles' signature offering — on-site sports, performing arts, and skill-development academies run in partnership with recognised names, giving resident children direct access to structured, expert-led programs without leaving the community.",
  },
  {
    question: "How do I schedule a site visit or get exact pricing?",
    answer:
      "Fill out the enquiry form on this page or call our advisory team directly — we'll arrange your visit and share current pricing and available offers.",
  },
];

export const projectFacts = {
  name: "Park Pebbles",
  location: "Bhugaon, Pune – 412115, Maharashtra",
  developer: "Rainbow Housing × Purple Corp",
  landParcel: "7.25+ acres",
  podium: "82,000+ sq.ft. lifestyle podium across 3 exclusive clubhouses",
  configurationsLabel: "2 & 3 RLK homes",
  amenityCount: "35+",
  possession: "TBC",
  priceFrom: "₹86 Lakh",
  usp: "Legend-led academies",
};

export const howWeHelpSteps = [
  {
    step: "01",
    title: "Enquire",
    description: "Tell us your budget, config, and priorities.",
  },
  {
    step: "02",
    title: "Site Visit",
    description: "We arrange and accompany you on shortlisted visits.",
  },
  {
    step: "03",
    title: "Compare & Choose",
    description:
      "Honest side-by-side comparisons, no bias toward any one developer.",
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

/** "Legend-led academies" marketing panel, sourced from the official plan
 * booklet — reinforces the child-centric USP referenced across the page. */
export const legendAcademiesImage = {
  src: "/images/park-pebbles/legend-academies.jpg",
  width: 1600,
  height: 1051,
  quote:
    "Park Pebbles brings together everything a growing family needs — thoughtful homes, open spaces, legend-led academies, lifestyle amenities and a safer everyday environment. A better everyday for parents. A stronger tomorrow for children.",
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
] as const;
