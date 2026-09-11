"use client";

import { ElementType, ReactNode, useEffect, useRef, useState } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  delay?: number;
  /** Direction the element enters from. */
  direction?: "up" | "none";
};

// Rendered dynamically since `as` can be any intrinsic tag; the ref is
// handled generically at runtime (all intrinsic elements accept refs).
type AnyComponent = ElementType;

/**
 * Lightweight, dependency-free scroll-reveal wrapper.
 * Uses IntersectionObserver to add entrance classes once an element enters
 * the viewport, and respects `prefers-reduced-motion` by skipping the
 * animation entirely (content is visible immediately).
 */
export default function Reveal({
  children,
  className = "",
  as: Tag = "div",
  delay = 0,
  direction = "up",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const Comp = Tag as AnyComponent;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Note: we still observe visibility for reduced-motion users so content
    // reveals in sync with scroll — the actual animation (translate/opacity
    // transition) is neutralized globally via the `motion-reduce:` classes
    // below and the `prefers-reduced-motion` override in globals.css, so
    // this branch never needs to bypass the observer with a synchronous
    // setState call.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const hiddenTransform = direction === "up" ? "translate-y-6" : "";

  return (
    <Comp
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
        visible ? "translate-y-0 opacity-100" : `${hiddenTransform} opacity-0`
      } ${className}`}
    >
      {children}
    </Comp>
  );
}
