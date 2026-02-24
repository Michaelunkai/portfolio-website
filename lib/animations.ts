import type { Variants } from "framer-motion";

export const fadeUp: Variants = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
};

export const fadeUpProps = {
  initial: "initial",
  whileInView: "whileInView",
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
};

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export const staggerContainer: Variants = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
};

export const staggerChild: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
};

export const staggerChildTransition = { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] as const };

export const expandHeight = {
  initial: { height: 0, opacity: 0 },
  animate: { height: "auto", opacity: 1 },
  exit: { height: 0, opacity: 0 },
  transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] as const },
};
