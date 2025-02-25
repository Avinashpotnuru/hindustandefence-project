import { ThemeProvider } from "@mui/material";
import "./App.css";
import Layout from "./components/Layout";

import LandingPage from "./Pages/LandingPage";

import { theme } from "./Theme/theme";
import { useState, useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import {  IconButton } from "@mui/material";

function App() {
  const [isVisible, setIsVisible] = useState(false);
   useEffect(() => {
      const toggleVisibility = () => {
        setIsVisible(window.scrollY > 200);
      };
      window.addEventListener("scroll", toggleVisibility);
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <LandingPage />
        {isVisible && (
          <IconButton
            onClick={scrollToTop}
            sx={{
              position: "fixed",
              bottom: 80,
              right: 20,
              bgcolor: "primary.main",
              color: "white",
              borderRadius: "50%",
              width: "55px",
              height: "55px",
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
              transition: "all 0.4s ease-in-out",
              transform: isVisible ? "scale(1)" : "scale(0)",
              opacity: isVisible ? 1 : 0,
              visibility: isVisible ? "visible" : "hidden",
              "&:hover": {
                bgcolor: "primary.dark",
                transform: "scale(1.1) translateY(-3px)",
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.4)",
              },
              "&:active": {
                transform: "scale(0.95)",
              },
            }}
          >
            <KeyboardArrowUpIcon sx={{ fontSize: "30px" }} />
          </IconButton>
        )}
      </Layout>
    </ThemeProvider>
  );
}

export default App;
