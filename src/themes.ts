import { createTheme } from "@mui/material";

export const blueGrayTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#5091cd",
      contrastText: "#f1f1f1",
    },
    secondary: {
      main: "#00a2af",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    error: {
      main: "#ff6666",
    },
    warning: {
      main: "#ffdf4c",
      light: "#e1cd72",
      dark: "#c8a400",
    },
    info: {
      main: "#d8dce3",
      light: "#dadbdd",
      dark: "#9ba0a8",
    },
    success: {
      main: "#00b050",
      light: "#44ca81",
      dark: "#007334",
      contrastText: "#ffffff",
    },
    divider: "#f1f5f9",
  },
});
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
  },
});
