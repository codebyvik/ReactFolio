export const PagesAnim = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "linear",
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};

export const fade = {
  hidden: {
    opacity: 0,
  },
  show: { opacity: 1, transition: { duration: 0.5, ease: "linear" } },
};

export const fadeLeftAnim = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "linear" },
  },
};
export const fadeRightAnim = {
  hidden: {
    x: 200,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "linear" },
  },
};

export const RevealAnim = {
  hidden: {
    opacity: 0,
    scale: 1.2,
    transition: { duration: 0.5 },
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export const LineAnim = {
  hidden: {
    width: "0%",
    transition: { duration: 0.5 },
  },
  show: {
    width: "100%",
    transition: { duration: 0.5 },
  },
};
