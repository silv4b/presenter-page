import { useEffect } from "react";

/**
 * Adds a scroll-reveal effect: every element with the `.reveal` class gets the
 * `.is-visible` class the first time it enters the viewport.
 */
export function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(".reveal");
    if (nodes.length === 0) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );

    nodes.forEach((node) => {
      if (node.getBoundingClientRect().top < window.innerHeight) {
        node.classList.add("is-visible");
        return;
      }
      observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);
}
