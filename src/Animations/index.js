export const variants = {
  slideFromLeft: {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "ease",
        duration: 1.5,
      },
    },
  },
  slideFromRight: {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "ease",
        duration: 1.5,
      },
    },
  },
  slideFromBottom: {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "ease",
        duration: 1.5,
      },
    },
  },
};
