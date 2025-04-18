import { ThemeProvider } from "@mui/material";
import LandingPage from "./Pages/LandingPage";
import { theme } from "./Theme/theme";
import { ScrollToTop } from "./components/index";
import Layout from "./Layout";
import "./App.css";

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
