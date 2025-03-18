const colors = {
  neutral: {
    0: "#ffffff",
    1: "#fdfdfd",
    2: "#fcfcfb",
    3: "#fafafa",
    4: "#f9f9f8",
    5: "#f7f7f6",
    10: "#dfdedd",
    20: "#c6c5c3",
    30: "#aeadaa",
    40: "#969491",
    50: "#7d7b77",
    60: "#65625e",
    70: "#4d4a45",
    80: "#34312b",
    90: "#1c1812",
    100: "#000000",
  },
  tan: {
    lighter: "#f1ece1",
    light: "#e4d9c3",
    default: "#ddcfb4",
    dark: "#b1a690",
    darker: "#857c6c",
  },
  brown: {
    lighter: "#978f84",
    light: "#74695b",
    default: "#514432",
    dark: "#31291e",
    darker: "#201b14",
  },
};

const sizes = {
  1: "0.0625rem",
  2: "0.125rem",
  4: "0.25rem",
  8: "0.5rem",
  12: "0.75rem",
  14: "0.875rem",
  16: "1rem",
  20: "1.25rem",
  24: "1.5rem",
  32: "2rem",
  40: "2.5rem",
  48: "3rem",
  56: "3.5rem",
  64: "4rem",
  72: "4.5rem",
  80: "5rem",
  96: "6rem",
};

const fontfamilies = {
  default: "Inter, sans-serif",
  alternate: "Gluten, cursive",
};

const fontweights = {
  regular: 400,
  semibold: 600,
};

const lineheights = {
  none: 1,
  tight: 1.125,
  default: 1.25,
  loose: 1.5,
};

const headingShared = {
  fontFamily: fontfamilies.default,
  lineHeight: lineheights.tight,
  fontWeight: fontweights.semibold,
};

const bodyShared = {
  fontFamily: fontfamilies.default,
  fontWeight: fontweights.regular,
};

const type = {
  heading: {
    large: {
      ...headingShared,
      fontSize: sizes[56],
    },
    medium: {
      ...headingShared,
      fontSize: sizes[48],
    },
    default: {
      ...headingShared,
      fontSize: sizes[40],
    },
    small: {
      ...headingShared,
      fontSize: sizes[32],
    },
  },
  body: {
    large: {
      ...bodyShared,
      fontSize: sizes[24],
      lineHeight: lineheights.default,
    },
    medium: {
      ...bodyShared,
      fontSize: sizes[20],
      lineHeight: lineheights.loose,
    },
    default: {
      ...bodyShared,
      fontSize: sizes[16],
      lineHeight: lineheights.loose,
    },
    small: {
      ...bodyShared,
      fontSize: sizes[14],
      lineHeight: lineheights.loose,
    },
    caption: {
      ...bodyShared,
      fontSize: sizes[12],
      lineHeight: lineheights.loose,
    },
  },
  accent: {
    fontFamily: fontfamilies.alternate,
    fontSize: sizes[32],
    lineHeight: lineheights.default,
  },
};

export const tokens = {
  colors,
  sizes,
  fontfamilies,
  fontweights,
  lineheights,
  type,
  spacing: sizes,
};
