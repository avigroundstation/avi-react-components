import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
  interface Palette {
    subtitle: string;
  }
  interface PaletteOptions {
    subtitle?: string;
  }
}

export const theme = createTheme({
    palette: {
      primary: {
        main: "#000",        
      },
      subtitle:"rgba(0, 0, 0, 0.6)"
    },
    typography:{
      h1: {
        fontSize:'10px'
      }
    }

    
  });
