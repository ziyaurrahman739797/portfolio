export const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

export const DURATION = {
  fast: 0.2,
  base: 0.4,
  slow: 0.7,
  hero: 3,
} as const;

export const STAGGER = {
  text: 0.08,
  cards: 0.12,
  list: 0.1,
} as const;

export const SCROLL_REVEAL_AMOUNT = 0.25;

export const MAGNETIC_MAX_OFFSET = 8;
export const BUTTON_MAX_SCALE = 1.03;
export const CARD_ENTER_SCALE = 0.96;

export const PARTICLE_COUNT = 20;

export const VIDEO_FADE = {
  fadeInMs: 500,
  fadeOutBeforeEndMs: 550,
  restartDelayMs: 100,
  shiftDownPercent: 17,
} as const;
