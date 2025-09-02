// Utility functions for animations

export const staggerDelay = (index: number, baseDelay: number = 100) => {
  return `${index * baseDelay}ms`;
};

export const generateDelayClasses = (delay: number) => {
  return `delay-${delay}`;
};

// Animation variants for framer motion or similar libraries
export const animationVariants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  },
  slideInLeft: {
    hidden: { x: "-100%" },
    visible: { x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  },
  slideInRight: {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  },
};
