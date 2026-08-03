import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import HeroCanvas from "./HeroCanvas";
import HeroContent from "./HeroContent";
import ScrollCue from "./ScrollCue";
import { SCROLL, TAGLINES } from "../../lib/scrollConfig";

export default function HeroSection() {
  const containerRef = useRef(null);
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
    [1, 0],
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
      <section className="hero-section--reduced">
        <HeroCanvas enabled={canvasEnabled} />
        <div className="hero-vignette" />
        <HeroContent
          scrollYProgress={scrollYProgress}
          staticTaglineIndex={TAGLINES.length - 1}
          animateOnMount
        />
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      className="hero-section"
      style={{ height: SCROLL.sectionHeight }}
    >
      <div className="hero-section__sticky">
        <motion.div
          style={{ scale, borderRadius }}
          className="hero-section__stage"
        >
          <HeroCanvas enabled={canvasEnabled} />

          <motion.div
            style={{ opacity: darkenOpacity }}
            className="hero-section__darken"
          />

          <div className="hero-vignette" />

          {/* Taglines scrub with scroll — no discrete index / AnimatePresence */}
          <HeroContent
            scrollYProgress={scrollYProgress}
            opacity={contentOpacity}
          />

          <ScrollCue opacity={scrollCueOpacity} />
        </motion.div>
      </div>
    </section>
  );
}
