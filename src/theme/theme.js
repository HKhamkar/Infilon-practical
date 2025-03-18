import { createTheme } from "@mui/material/styles";
import { tokens } from "./tokens";

const theme = createTheme({
  palette: {
    primary: {
      main: tokens.colors.brown.default,
      light: tokens.colors.brown.light,
      dark: tokens.colors.brown.dark,
      lightGrey: tokens.colors.neutral[10],
      lightBorderGrey: tokens.colors.neutral[40],
      lightButtonBorderGrey: tokens.colors.neutral[20],
    },
    secondary: {
      main: tokens.colors.tan.default,
    },
    background: {
      default: tokens.colors.neutral[2],
      paper: tokens.colors.neutral[1],
      lighter: tokens.colors.tan.lighter,
    },
    text: {
      primary: tokens.colors.neutral[90],
      secondary: tokens.colors.neutral[60],
      white: tokens.colors.neutral[5],
      footerText: tokens.colors.neutral[30],
    },
  },
  typography: {
    fontFamily: tokens.fontfamilies.default,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: tokens.sizes[8],
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
