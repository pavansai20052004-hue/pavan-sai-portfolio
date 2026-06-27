// src/hooks/useReveal.ts
import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    const observeTargets = () => {
      document.querySelectorAll("[data-reveal]:not(.is-visible)").forEach((target) => observer.observe(target));
    };

    targets.forEach((target) => observer.observe(target));
    const mutationObserver = new MutationObserver(observeTargets);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, []);
}
// src/hooks/useScrollProgress.ts
import { useState, useEffect } from "react";

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, nextProgress)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return progress;
}
// src/hooks/useTilt.ts
import { useEffect } from "react";

export function useTilt() {
  useEffect(() => {
    const cards = [...document.querySelectorAll("[data-tilt]")];
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return undefined;

    const cleanups = cards.map((card) => {
      const glowLayer = document.createElement("div");
      glowLayer.style.position = "absolute";
      glowLayer.style.inset = "0";
      glowLayer.style.borderRadius = "inherit";
      glowLayer.style.opacity = "0";
      glowLayer.style.transition = "opacity 300ms ease";
      glowLayer.style.pointerEvents = "none";
      glowLayer.style.zIndex = "1";
      card.appendChild(glowLayer);

      let lastX = 0;
      let lastY = 0;

      const onMove = (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        const tiltX = -y * 8;
        const tiltY = x * 10;
        card.style.setProperty("--tilt-x", `${tiltX.toFixed(2)}deg`);
        card.style.setProperty("--tilt-y", `${tiltY.toFixed(2)}deg`);
        card.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
        card.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);

        const dx = event.clientX - lastX;
        const dy = event.clientY - lastY;
        lastX = event.clientX;
        lastY = event.clientY;

        const intensity = Math.min(Math.sqrt(dx * dx + dy * dy) / 20, 1);
        glowLayer.style.opacity = String(intensity * 0.4);
        glowLayer.style.background = `radial-gradient(circle at ${event.clientX - rect.left}px ${event.clientY - rect.top}px, ${intensity > 0.5 ? "rgba(98, 228, 205, 0.35)" : "rgba(98, 228, 205, 0.15)"}, transparent 60%)`;
      };

      const onLeave = () => {
        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--tilt-y", "0deg");
        glowLayer.style.opacity = "0";
      };

      const onClick = (e) => {
        if (Math.sqrt(dx * dx + dy * dy) < 5) {
          card.classList.add("card-clicked");
          setTimeout(() => card.classList.remove("card-clicked"), 300);
        }
      };

      card.style.position = "relative";
      card.style.overflow = "hidden";

      card.addEventListener("pointermove", onMove);
      card.addEventListener("pointerleave", onLeave);
      card.addEventListener("click", onClick);

      return () => {
        card.removeEventListener("pointermove", onMove);
        card.removeEventListener("pointerleave", onLeave);
        card.removeEventListener("click", onClick);
        if (glowLayer.parentNode === card) {
          card.removeChild(glowLayer);
        }
      };
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);
}

export { useReveal, useScrollProgress, useTilt };