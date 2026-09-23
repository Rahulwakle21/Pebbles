"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";
import LeadForm from "./ui/LeadForm";
import { CloseIcon } from "./ui/Icons";

type EnquiryModalContextValue = {
  open: () => void;
  close: () => void;
};

const EnquiryModalContext = createContext<EnquiryModalContextValue | null>(null);

export function useEnquiryModal() {
  const ctx = useContext(EnquiryModalContext);
  if (!ctx) {
    throw new Error("useEnquiryModal must be used within EnquiryModalProvider");
  }
  return ctx;
}

export default function EnquiryModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formKey, setFormKey] = useState(0);
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);

  const open = useCallback(() => {
    setFormKey((k) => k + 1);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close]);

  useEffect(() => {
    function onDocumentClick(event: MouseEvent) {
      const anchor = (event.target as Element | null)?.closest('a[href="#contact"]');
      if (!anchor) return;
      event.preventDefault();
      open();
    }
    document.addEventListener("click", onDocumentClick);
    return () => document.removeEventListener("click", onDocumentClick);
  }, [open]);

  useEffect(() => {
    if (!isOpen) return;
    dialogRef.current?.focus();
  }, [isOpen]);

  return (
    <EnquiryModalContext.Provider value={{ open, close }}>
      {children}
      {isOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-4"
          role="presentation"
        >
          <button
            type="button"
            aria-label="Close enquiry form"
            className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm"
            onClick={close}
          />
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            tabIndex={-1}
            className="relative z-10 max-h-[92dvh] w-full max-w-xl overflow-y-auto rounded-t-3xl border border-zinc-200 bg-white p-6 shadow-2xl sm:rounded-3xl sm:p-8"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-violet-600">
                  Enquiry form
                </p>
                <h2 id={titleId} className="text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl">
                  Schedule your site visit
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  Share your details and our advisor will reach out to confirm a visit at Park
                  Pebbles.
                </p>
              </div>
              <button
                type="button"
                onClick={close}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-zinc-900"
                aria-label="Close"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>
            <LeadForm key={formKey} />
          </div>
        </div>
      ) : null}
    </EnquiryModalContext.Provider>
  );
}
