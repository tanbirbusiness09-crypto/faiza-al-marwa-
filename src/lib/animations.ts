import { Variants, Transition } from 'motion/react';

// Crisp, natural easing matching the original HTML .reveal (.5s ease)
export const smoothEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1.0];

export const defaultTransition: Transition = {
  duration: 0.48,
  ease: smoothEase,
};

// Standard snappy viewport configuration for immediate on-scroll appearance
export const viewportConfig = {
  once: true,
  amount: 0.05,
  margin: '0px 0px -30px 0px',
};

// Reusable Section Reveal Variants — Subtly tuned to 14px matching original HTML
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.48,
      delay: custom * 0.06,
      ease: smoothEase,
    },
  }),
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -14 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: custom * 0.05,
      ease: smoothEase,
    },
  }),
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.48,
      delay: custom * 0.06,
      ease: smoothEase,
    },
  }),
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 16 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.48,
      delay: custom * 0.06,
      ease: smoothEase,
    },
  }),
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.45,
      delay: custom * 0.06,
      ease: smoothEase,
    },
  }),
};

// Staggered Container & Children (Quick & responsive)
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.02,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: smoothEase,
    },
  },
};

// Interactive Hover & Tap Presets
export const hoverCard = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -3,
    scale: 1.005,
    transition: { duration: 0.18, ease: smoothEase },
  },
  tap: {
    scale: 0.985,
    transition: { duration: 0.1 },
  },
};

export const hoverButton = {
  whileHover: { y: -1, scale: 1.015, transition: { duration: 0.15, ease: smoothEase } },
  whileTap: { scale: 0.97, transition: { duration: 0.08 } },
};

export const hoverLink = {
  whileHover: { x: 2, color: 'var(--gold)', transition: { duration: 0.12 } },
};
