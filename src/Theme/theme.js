import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#F5961B", 
    },
    secondary: {
      main: "#E76420", 
    },
    gradient: {
      orange:
        "linear-gradient(to right, #F5961B 0%, #E76420 51%, #F5961B 100%)",
    },
  },
  typography: {
    fontFamily: ["Rajdhani", "serif"].join(","), 
  },
  spacing: 8, 
});
