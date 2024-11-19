import { createTheme, ThemeOptions } from "@mui/material";
import { darkScrollbar } from "@mui/material";

const themeOptions: ThemeOptions = {
  palette: {
    /* ==== default colors ==== */
    mode: "dark",
    primary: {
      main: "#5091cd",
    },
    secondary: {
      main: "#028292",
    },
    error: {
      main: "#ff6666",
    },
    warning: {
      main: "#ffdf4c",
    },
    success: {
      main: "#00b050",
    },
    info: {
      main: "#d8dce3",
    },
    background: {
      default: "#1e1e1e", //'#262626',
    },
    text: {
      primary: "#D8DCE3",
      // secondary: "#999999",
    },
    /* ==== custom colors ==== */
    none: {
      main: "#00000000",
    },
    normal: {
      main: "#D8DCE3",
    },
    bright: {
      main: "#FFFFFF",
    },
    disabled: {
      main: "#b3b3b3",
    },
    active: {
      main: "#66B2FF",
    },
    /* ==== statuses ==== */
    stsEmpty: {
      main: "#666666",
    },
    stsOff: {
      main: "#999999",
    },
    stsOK: {
      main: "#D8DCE3",
    },
    stsWarning: {
      main: "#FFDF4C",
    },
    stsError: {
      main: "#FF6666",
    },
    stsErrorDark: {
      main: "#990000",
    },
    stsReady: {
      main: "#00B050",
    },
    /* ==== others ==== */
    foreground: {
      // bright: "#FFFFFF",
      // disabled: "#b3b3b3",
      // active: "#66B2FF",
      // none: "#00000000",

      cardTitle: "#999999",
      fieldTitle: "#999999",
      dialogWinTitle: "#66B2FF",
      shellWinTitle: "#93CDDD",
      inputBorder: "#028292",
    },
  },
  typography: {
    fontFamily: "Assistant",
    fontSize: 14,
    htmlFontSize: 14,
    fontWeightBold: 900,
    fontWeightMedium: 700,
    h1: {
      fontSize: "2rem",
      fontWeight: 300,
    },
    h2: {
      fontSize: "1.8rem",
    },
    h3: {
      fontSize: "1.6rem",
    },
    h4: {
      fontSize: "1.5rem",
    },
    h5: {
      fontSize: "1.3rem",
      fontWeight: 600,
      color: "#727272",
    },
    h6: {
      fontSize: "1.3rem",
    },
    subtitle1: {
      fontSize: "1.2rem",
    },
    subtitle2: {
      fontSize: "1.1rem",
    },
    body1: {
      fontSize: ".9rem",
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: "#689f38",
        color: "#fff",
      },
    },
  },
  props: {
    MuiAppBar: {
      color: "inherit",
    },
    MuiList: {
      dense: true,
    },
    MuiMenuItem: {
      dense: true,
    },
    MuiTable: {
      size: "small",
    },
    MuiButton: {
      size: "small",
    },
    MuiButtonGroup: {
      size: "small",
    },
    MuiCheckbox: {
      size: "small",
    },
    MuiFab: {
      size: "small",
    },
    MuiFormControl: {
      margin: "dense",
      size: "small",
    },
    MuiFormHelperText: {
      margin: "dense",
    },
    MuiIconButton: {
      size: "small",
    },
    MuiInputBase: {
      margin: "dense",
    },
    MuiInputLabel: {
      margin: "dense",
      fontWeight: 500,
      fontSize: "1.1rem",
      color: "#999999",
    },
    MuiRadio: {
      size: "small",
    },
    MuiSwitch: {
      size: "small",
    },
    MuiTextField: {
      margin: "dense",
      size: "small",
    },
    MuiTooltip: {
      arrow: true,
    },
  },
  components: {
    // components: {
    //   MuiCssBaseline: {
    //     styleOverrides: {
    //       body: {
    //         // Default styles
    //         fontSize: '18px',
    //         // Media query for screens up to 900px
    //         [createTheme().breakpoints.down('md')]: {
    //           fontSize: '16px',
    //         },
    //         // Media query for screens up to 768px
    //         '@media (max-width: 768px)': {
    //           fontSize: '14px',
    //         },
    //         // Media query for screens up to 1080px
    //         '@media (max-width: 1080px)': {
    //           fontSize: '15px',
    //         },
    //       },
    //     },
    //   },
    // },
    MuiCssBaseline: {
      styleOverrides: (themeParam) => ({
        body: themeParam.palette.mode === "dark" ? darkScrollbar() : null,
        ":root": {
          fontSize: "16px",

          // Media query for screens up to 1080px
          "@media (max-width: 1080px)": {
            fontSize: "16px",
          },

          "@media (max-width: 900px)": {
            fontSize: "14px",
          },

          "@media (max-width: 768px)": {
            fontSize: "12px",
          },
        },
      }),
    },
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        // disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
    // MuiCardHeader: {
    //   styleOverrides: (themeParam) => ({
    //          title: grey[400]
    //     }),
    // },
    MuiFormLabel: {
      styleOverrides: (themeParam) => ({
        // text: {
        fontWeight: 600,
        // }
      }),
    },
  },
};

export const theme = createTheme(themeOptions);
