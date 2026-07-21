import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

import HeroCanvas from "./HeroCanvas";
import HeroContent from "./HeroContent";
import ScrollCue from "./ScrollCue";
import { SCROLL, TAGLINES } from "../../lib/scrollConfig";

export default function HeroSection() {
  const containerRef = useRef(null);
  const [activeTagline, setActiveTagline] = useState(0);
  const [canvasEnabled, setCanvasEnabled] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const darkenOpacity = useTransform(
    scrollYProgress,
    [SCROLL.taglineStart, SCROLL.taglineEnd],
    [0, 0.5],
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [SCROLL.scaleStart, SCROLL.scaleEnd],
    [1, 0, 0],
  );

  const scale = useTransform(
    scrollYProgress,
    prefersReducedMotion ? [0, 1] : [SCROLL.scaleStart, SCROLL.scaleEnd],
    prefersReducedMotion ? [1, 1] : [SCROLL.scaleFrom, SCROLL.scaleTo],
  );

  const borderRadius = useTransform(
    scrollYProgress,
    prefersReducedMotion ? [0, 1] : [SCROLL.scaleStart, SCROLL.scaleEnd],
    prefersReducedMotion ? [0, 0] : [0, SCROLL.radiusTo],
  );

  const scrollCueOpacity = useTransform(
    scrollYProgress,
    [0, SCROLL.scrollCueFadeEnd],
    [1, 0],
  );

  const band = SCROLL.taglineEnd - SCROLL.taglineStart;
  // 0 and 2 hold for free outside the band, so spend the band mostly on the
  // middle line — just quick hand-offs at each edge.
  const enter = SCROLL.taglineStart + band * 0.18; // headline → "Because I'm always…"
  const exit = SCROLL.taglineStart + band * 0.82; // "Because I'm always…" → punchline

  const taglineProgress = useTransform(
    scrollYProgress,
    prefersReducedMotion
      ? [0, 1]
      : [SCROLL.taglineStart, enter, exit, SCROLL.taglineEnd],
    prefersReducedMotion
      ? [TAGLINES.length - 1, TAGLINES.length - 1]
      : [0, 1, 1, 2],
  );

  useMotionValueEvent(taglineProgress, "change", (value) => {
    const index = Math.min(TAGLINES.length - 1, Math.max(0, Math.round(value)));
    setActiveTagline(index);
  });

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setCanvasEnabled(entry.isIntersecting),
      { threshold: 0.05 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  if (prefersReducedMotion) {
    return (
      <section className="relative min-h-[640px] h-screen overflow-hidden bg-ink-950">
        <HeroCanvas enabled={canvasEnabled} />
        <div className="hero-vignette pointer-events-none absolute inset-0" />
        <HeroContent activeTagline={TAGLINES.length - 1} animateOnMount />
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      className="relative bg-white"
      style={{ height: SCROLL.sectionHeight }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ scale, borderRadius }}
          className="relative h-full origin-center overflow-hidden bg-ink-950"
        >
          <HeroCanvas enabled={canvasEnabled} />

          {/* Stage 2 — background darkens as you scroll into the taglines */}
          <motion.div
            style={{ opacity: darkenOpacity }}
            className="pointer-events-none absolute inset-0 bg-ink-950"
          />

          <div className="hero-vignette pointer-events-none absolute inset-0" />

          {/* Stage 4 — text block fades as the card scales down */}
          <HeroContent activeTagline={activeTagline} opacity={contentOpacity} />

          <ScrollCue opacity={scrollCueOpacity} />
        </motion.div>
      </div>
    </section>
  );
}
