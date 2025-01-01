import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#F5961B", // Matches 'gradientOrange1' in Tailwind
    },
    secondary: {
      main: "#E76420", // Matches 'gradientOrange2' in Tailwind
    },
    gradient: {
      orange:
        "linear-gradient(to right, #F5961B 0%, #E76420 51%, #F5961B 100%)",
    },
  },
  typography: {
    fontFamily: ["Rajdhani", "serif"].join(","), // Matches Tailwind's 'rajdhani'
  },
  spacing: 8, // Base spacing unit, can be used similarly to Tailwind's spacing
});
