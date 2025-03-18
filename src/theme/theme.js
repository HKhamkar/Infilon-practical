import { createTheme } from "@mui/material/styles";
import { tokens } from "./tokens";

const theme = createTheme({
  palette: {
    primary: {
      main: tokens.colors.brown.default,
      light: tokens.colors.brown.light,
      dark: tokens.colors.brown.dark,
    },
    secondary: {
      main: tokens.colors.tan.default,
    },
    background: {
      default: tokens.colors.neutral[4],
      paper: tokens.colors.neutral[1],
    },
    text: {
      primary: tokens.colors.neutral[90],
      secondary: tokens.colors.neutral[50],
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
