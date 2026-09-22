"use client";

import { DownloadIcon, PhoneIcon } from "./ui/Icons";
import { siteConfig } from "@/lib/site-config";

export default function MobileStickyBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-zinc-200 bg-white/95 px-2 py-2 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-md lg:hidden"
      role="navigation"
      aria-label="Quick contact actions"
    >
      <div className="mx-auto flex max-w-lg gap-1">
        <a
          href={siteConfig.contact.phoneTel}
          className="flex flex-1 flex-col items-center gap-0.5 rounded-lg py-2 text-[10px] font-medium text-zinc-800"
        >
          <PhoneIcon className="h-5 w-5 text-violet-600" />
          Call
        </a>
        <a
          href={siteConfig.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 flex-col items-center gap-0.5 rounded-lg py-2 text-[10px] font-medium text-zinc-800"
        >
          <span className="text-lg leading-none text-emerald-600" aria-hidden>
            WA
          </span>
          WhatsApp
        </a>
        <a
          href="#contact"
          className="flex flex-1 flex-col items-center gap-0.5 rounded-lg py-2 text-[10px] font-medium text-zinc-800"
        >
          <DownloadIcon className="h-5 w-5 text-violet-600" />
          Brochure
        </a>
        <a
          href="#contact"
          className="flex flex-[1.2] flex-col items-center justify-center rounded-lg bg-violet-600 py-2 text-[10px] font-semibold text-white"
        >
          Site Visit
        </a>
      </div>
    </div>
  );
}
