import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Pebbles | Pune West Real Estate Channel Partner";
const description =
  "Your trusted Pune West real estate advisor. Explore Park Pebbles, Bhugaon and every leading project across the corridor — honest guidance, zero pressure.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Pune West real estate channel partner",
    "Park Pebbles Bhugaon",
    "Pune West properties",
    "2 RLK 3 RLK Bhugaon",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_IN",
    siteName: "Pebbles",
  },  
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
