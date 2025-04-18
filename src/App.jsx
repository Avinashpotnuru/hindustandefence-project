import { ThemeProvider } from "@mui/material";
import "./App.css";
import Layout from "./components/Layout";

import LandingPage from "./Pages/LandingPage";

import { theme } from "./Theme/theme";

import { ScrollToTop } from "./components/index";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <LandingPage />
        <ScrollToTop />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
