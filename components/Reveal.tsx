"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    let io: IntersectionObserver | null = null;

    const raf = requestAnimationFrame(() => {
      const els = document.querySelectorAll<HTMLElement>(
        "[data-animate]:not(.in)",
      );
      if (!els.length) return;

      io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              io?.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
      );

      els.forEach((el) => io!.observe(el));
    });

    return () => {
      cancelAnimationFrame(raf);
      io?.disconnect();
    };
  }, [pathname]);

  return null;
}
