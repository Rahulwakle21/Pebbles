import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { faqs } from "@/lib/park-pebbles-data";
import { siteConfig } from "@/lib/site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Park Pebbles Bhugaon | 2 & 3 BHK Homes ₹86L+";
const description =
  "Park Pebbles, Bhugaon, Pune by Rainbow Housing & Purple Corp — 2 & 3 BHK homes from ₹86 Lakh with 35+ amenities & legend-led academies. Book a site visit.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Park Pebbles Bhugaon",
    "2 BHK Bhugaon Pune",
    "3 BHK Bhugaon under 1.2 crore",
    "Park Pebbles price",
    "Pune West real estate channel partner",
    "Bhugaon vs Baner",
  ],
  openGraph: {
    title: "Park Pebbles, Bhugaon, Pune | 2 & 3 BHK Homes from ₹86 Lakh",
    description,
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.brandName,
  },
  twitter: {
    card: "summary_large_image",
    title: "Park Pebbles, Bhugaon, Pune | 2 & 3 BHK Homes from ₹86 Lakh",
    description,
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const listingJsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  name: "Park Pebbles",
  description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bhugaon",
    addressRegion: "Maharashtra",
    postalCode: "412115",
    addressCountry: "IN",
  },
  identifier: siteConfig.rera.projectNumber,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: siteConfig.brandName,
  description: siteConfig.brandTagline,
  telephone: siteConfig.contact.phone,
  identifier: siteConfig.rera.channelPartnerNumber,
  areaServed: "Pune West, Maharashtra, India",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(listingJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
