export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const motionDurations = {
  fast: 0.25,
  base: 0.45,
  slow: 0.6,
} as const;

export const motionDistances = {
  hero: 16,
  section: 14,
  card: 12,
  mobile: 10,
} as const;

export const stagger = {
  hero: 0.08,
  section: 0.06,
} as const;

export function getFadeUpVariant(reducedMotion: boolean, distance: number = motionDistances.section) {
  if (reducedMotion) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };
  }

  return {
    hidden: { opacity: 0, y: distance },
    visible: { opacity: 1, y: 0 },
  };
}

export function getScaleUpVariant(reducedMotion: boolean) {
  if (reducedMotion) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };
  }

  return {
    hidden: { opacity: 0, y: motionDistances.card, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };
}

export function getTransition(
  reducedMotion: boolean,
  duration: number = motionDurations.base,
  delay: number = 0,
) {
  return {
    duration: reducedMotion ? 0.15 : duration,
    delay,
    ease: EASE_OUT,
  };
}

export const viewportOnce = {
  once: true,
  margin: "-10% 0px -8% 0px",
  amount: 0.2,
} as const;

export function getDriftAnimation(reducedMotion: boolean, delay = 0) {
  if (reducedMotion) {
    return {};
  }

  return {
    y: [0, -6, 0],
    transition: {
      duration: 6,
      delay,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut" as const,
    },
  };
}
