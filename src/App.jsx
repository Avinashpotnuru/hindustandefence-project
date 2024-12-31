import { ThemeProvider } from "@mui/material";
import "./App.css";
import Layout from "./components/Layout";
import { theme } from "./components/Theme/theme";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <LandingPage />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
