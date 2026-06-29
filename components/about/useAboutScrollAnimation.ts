import { useLayoutEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SCRUB_MOBILE, SCRUB_SMOOTH } from "@/lib/gsap/config";

gsap.registerPlugin(ScrollTrigger);

type AboutAnimationRefs = {
  sectionRef: RefObject<HTMLElement | null>;
  pinRef: RefObject<HTMLDivElement | null>;
  heroRef: RefObject<HTMLDivElement | null>;
  typographyRef: RefObject<HTMLDivElement | null>;
  textRef: RefObject<HTMLHeadingElement | null>;
  morphRef: RefObject<HTMLDivElement | null>;
  morphInnerRef: RefObject<HTMLDivElement | null>;
};

type BreakpointConfig = {
  scrollEnd: string;
  scrub: number;
  scaleEnd: number;
  bgZoomEnd: string;
  morphInnerScaleEnd: number;
  escapeStart: number;
  clipInsetStart: string;
};

function buildHeroTimeline(
  tl: gsap.core.Timeline,
  refs: AboutAnimationRefs,
  config: BreakpointConfig
) {
  const { typographyRef, textRef, heroRef, morphRef, morphInnerRef } = refs;

  const hero = heroRef.current;
  const typography = typographyRef.current;
  const text = textRef.current;
  const morph = morphRef.current;
  const morphInner = morphInnerRef.current;

  if (!hero || !typography || !text || !morph || !morphInner) return;

  const { escapeStart } = config;

  tl.fromTo(
    typography,
    { scale: 1, opacity: 1 },
    {
      scale: config.scaleEnd,
      opacity: 0,
      ease: "power2.inOut",
      duration: escapeStart,
    },
    0
  );

  tl.fromTo(
    text,
    {
      backgroundSize: "cover",
      color: "var(--foreground)",
      WebkitTextFillColor: "var(--foreground)",
    },
    {
      backgroundSize: config.bgZoomEnd,
      ease: "power2.inOut",
      duration: escapeStart,
    },
    0
  );

  tl.fromTo(
    text.querySelector("span"),
    {
      color: "transparent",
      WebkitTextFillColor: "transparent",
    },
    {
      color: "transparent",
      WebkitTextFillColor: "transparent",
      ease: "none",
      duration: 0,
    },
    0
  );

  tl.fromTo(
    morphInner,
    { scale: 1 },
    {
      scale: config.morphInnerScaleEnd,
      ease: "power2.inOut",
      duration: escapeStart,
    },
    0
  );

  tl.fromTo(
    morph,
    {
      opacity: 0,
      clipPath: config.clipInsetStart,
    },
    {
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0% round 0px)",
      ease: "power3.inOut",
      duration: 1 - escapeStart + 0.08,
    },
    escapeStart - 0.04
  );

  tl.to(
    hero,
    {
      opacity: 0,
      ease: "power3.inOut",
      duration: 0.2,
    },
    escapeStart + 0.12
  );

  tl.to(
    morphInner,
    { scale: 1, ease: "power3.inOut", duration: 0.25 },
    escapeStart + 0.35
  );
}

function setInitialState(refs: AboutAnimationRefs) {
  const { textRef, morphRef, morphInnerRef, heroRef, typographyRef } = refs;

  gsap.set(textRef.current, {
    backgroundSize: "cover",
    backgroundPosition: "center center",
    color: "transparent",
    WebkitTextFillColor: "transparent",
  });

  gsap.set(textRef.current?.querySelector("span.heroTextMask"), {
    opacity: 1,
  });

  gsap.set(morphRef.current, {
    opacity: 0,
    top: "50%",
    left: "50%",
    xPercent: -50,
    yPercent: -50,
    width: "100%",
    height: "100%",
    borderRadius: 0,
    clipPath: "inset(38% 6% 38% 6% round 0px)",
  });

  gsap.set(morphInnerRef.current, { scale: 1 });
  gsap.set(heroRef.current, { opacity: 1 });
  gsap.set(typographyRef.current, { scale: 1, opacity: 1 });
}

function showFinalState(refs: AboutAnimationRefs) {
  const { heroRef, morphRef, morphInnerRef, typographyRef } = refs;

  gsap.set(heroRef.current, { opacity: 0 });
  gsap.set(typographyRef.current, { opacity: 0 });
  gsap.set(morphRef.current, {
    opacity: 1,
    clipPath: "inset(0% 0% 0% 0% round 0px)",
  });
  gsap.set(morphInnerRef.current, { scale: 1 });
}

const DESKTOP_CONFIG: BreakpointConfig = {
  scrollEnd: "+=220%",
  scrub: SCRUB_SMOOTH,
  scaleEnd: 0.62,
  bgZoomEnd: "155% 155%",
  morphInnerScaleEnd: 1.28,
  escapeStart: 0.38,
  clipInsetStart: "inset(36% 5% 36% 5% round 2px)",
};

const TABLET_CONFIG: BreakpointConfig = {
  scrollEnd: "+=200%",
  scrub: SCRUB_SMOOTH,
  scaleEnd: 0.68,
  bgZoomEnd: "148% 148%",
  morphInnerScaleEnd: 1.22,
  escapeStart: 0.36,
  clipInsetStart: "inset(38% 7% 38% 7% round 2px)",
};

const MOBILE_CONFIG: BreakpointConfig = {
  scrollEnd: "+=180%",
  scrub: SCRUB_MOBILE,
  scaleEnd: 0.74,
  bgZoomEnd: "140% 140%",
  morphInnerScaleEnd: 1.16,
  escapeStart: 0.34,
  clipInsetStart: "inset(40% 8% 40% 8% round 2px)",
};

function createPinnedTimeline(
  section: HTMLElement,
  pin: HTMLElement,
  refs: AboutAnimationRefs,
  config: BreakpointConfig
) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: config.scrollEnd,
      pin,
      scrub: config.scrub,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  buildHeroTimeline(tl, refs, config);
  return tl;
}

export function useAboutScrollAnimation(refs: AboutAnimationRefs) {
  useLayoutEffect(() => {
    const { sectionRef, pinRef } = refs;
    const section = sectionRef.current;
    const pin = pinRef.current;

    if (!section || !pin) return;

    const ctx = gsap.context(() => {
      setInitialState(refs);

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        showFinalState(refs);
      });

      mm.add("(min-width: 1024px)", () => {
        createPinnedTimeline(section, pin, refs, DESKTOP_CONFIG);
      });

      mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
        createPinnedTimeline(section, pin, refs, TABLET_CONFIG);
      });

      mm.add("(max-width: 767px)", () => {
        createPinnedTimeline(section, pin, refs, MOBILE_CONFIG);
      });
    }, section);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
