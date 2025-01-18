import { ThemeProvider } from "@mui/material";
import "./App.css";
import Layout from "./components/Layout";

import LandingPage from "./Pages/LandingPage";

import { theme } from "./Theme/theme";

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
