import type { Preview } from "@storybook/react";
import React from "react";
// import "styles.css";
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

import { CssBaseline, ThemeProvider } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
// import { lightTheme, darkTheme } from '../src/themes.js';
import { createTheme } from "@mui/material/styles";
import { theme } from "../src/theme";
import { blueGrayTheme, darkTheme, lightTheme } from "../src/themes";
// import { addDecorator } from '@storybook/react'

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
      dark: darkTheme,
      Ilana: theme,
      Ayellet: blueGrayTheme,
    },
    defaultTheme: "dark",
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];

// export const globalTypes = {
//   theme: {
//     name: "Theme",
//     description: "Global theme for components",
//     defaultValue: "light",
//     toolbar: {
//       // The icon for the toolbar item
//       icon: "circlehollow",
//       text: "theme",
//       // Array of options
//       items: [
//         { value: "light", icon: "circlehollow", title: "light" },
//         { value: "dark", icon: "circle", title: "dark" },
//       ],
//       // Property that specifies if the name of the item will be displayed
//       showName: true,
//     },
//   },
// };

// export default preview;
