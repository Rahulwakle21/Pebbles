import { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

const base = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 4.5c-.7 3.8.6 8.9 4 12.7 3.4 3.8 8.2 5.7 12 5.3.6-.1 1-.6 1-1.2v-2.7c0-.5-.4-1-.9-1.1l-3.4-.8c-.4-.1-.9.1-1.1.4l-1 1.4a11.8 11.8 0 0 1-5.6-5.6l1.4-1c.4-.3.5-.7.4-1.1l-.8-3.4c-.1-.5-.6-.9-1.1-.9H5.7c-.6 0-1.1.4-1.2 1Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </svg>
  );
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 4 6v6c0 5 3.4 8.5 8 9 4.6-.5 8-4 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6" />
      <circle cx="17" cy="8" r="2.5" />
      <path d="M17.5 14c2.5.4 4.5 2.4 4.5 6" />
    </svg>
  );
}

export function AwardIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="8" r="5" />
      <path d="m8.5 12.5-1.7 7.3 5.2-2.9 5.2 2.9-1.7-7.3" />
    </svg>
  );
}

export function BuildingIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1M10 21v-3h4v3" />
    </svg>
  );
}

export function SparklesIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v4M12 17v4M4.2 4.2l2.8 2.8M17 17l2.8 2.8M3 12h4M17 12h4M4.2 19.8 7 17M17 7l2.8-2.8" />
      <circle cx="12" cy="12" r="2.2" />
    </svg>
  );
}

export function DumbbellIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 9v6M2 10.5v3M20 9v6M22 10.5v3M7 12h10" />
      <rect x="4.5" y="8" width="3" height="8" rx="1" />
      <rect x="16.5" y="8" width="3" height="8" rx="1" />
    </svg>
  );
}

export function LeafIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 4C10 4 4 9 4 16c0 2.2 1.8 4 4 4 7 0 12-6 12-16Z" />
      <path d="M8 20c1-4 4-8 10-11" />
    </svg>
  );
}

export function SmileIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
    </svg>
  );
}

export function PartyIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 20 14 8c1.5 1 3 2.5 4 4L6 22Z" />
      <path d="M16 3.5c1.5.5 3 2 3.5 3.5M13 2.5c1.5.2 4 1.2 5 3.5M2.5 15c1 .5 2.5 1 3.5 1" />
    </svg>
  );
}

export function BriefcaseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
    </svg>
  );
}

export function HomeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m3 11 9-7 9 7" />
      <path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" />
    </svg>
  );
}

export function RoadIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 3 4 21M15 3l5 18M12 3v3M12 10.5v3M12 18v3" />
    </svg>
  );
}

export function TrainIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="4" width="14" height="12" rx="3" />
      <path d="M5 12h14M8 20l-2 2M16 20l2 2" />
      <circle cx="8.5" cy="16" r="0.6" fill="currentColor" />
      <circle cx="15.5" cy="16" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function GraduationCapIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m2 8 10-5 10 5-10 5-10-5Z" />
      <path d="M6 10.5v4c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-4" />
    </svg>
  );
}

export function PulseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20.8 8.6a5.5 5.5 0 0 0-9.3-4A5.5 5.5 0 0 0 3 8.6c0 5.1 8.5 10.4 8.5 10.4s8.3-4.9 9.3-10.4Z" />
      <path d="M6 12h2.5l1.5-3 2 6 1.5-3H18" />
    </svg>
  );
}

export function ShoppingBagIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 8h12l1 12.5A1.5 1.5 0 0 1 17.5 22h-11A1.5 1.5 0 0 1 5 20.5L6 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

export function PlaneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m2.5 12.5 18-7-6.5 7.5 1.5 6.5-3-4-4 3 .5-4.5-6.5-1.5Z" />
    </svg>
  );
}

export function CameraIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
      <circle cx="12" cy="13.5" r="3.5" />
    </svg>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 19h16" />
    </svg>
  );
}

export function QuoteIcon(props: IconProps) {
  return (
    <svg {...base} fill="currentColor" stroke="none" {...props}>
      <path d="M7.5 6C4.5 6 2 8.5 2 11.7c0 2.8 2 5 4.6 5 .3 1.4-.6 2.9-2.6 3.8v1.5c3.7-.5 6.5-3 6.5-6.7C10.5 12 10 6 7.5 6Zm10 0c-3 0-5.5 2.5-5.5 5.7 0 2.8 2 5 4.6 5 .3 1.4-.6 2.9-2.6 3.8v1.5c3.7-.5 6.5-3 6.5-6.7C20.5 12 20 6 17.5 6Z" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export const amenityIconMap = {
  sports: DumbbellIcon,
  wellness: LeafIcon,
  kids: SmileIcon,
  social: PartyIcon,
  fitness: BriefcaseIcon,
  comfort: HomeIcon,
} as const;

export const connectivityIconMap = {
  road: RoadIcon,
  metro: TrainIcon,
  school: GraduationCapIcon,
  hospital: PulseIcon,
  retail: ShoppingBagIcon,
  travel: PlaneIcon,
} as const;
