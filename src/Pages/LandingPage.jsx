import { Box } from "@mui/material";
import { Header,WelcomeSection,Gallery } from "../components/index";

const LandingPage = () => {
  return (
    <Box className="w-full">
      <Header />
      <WelcomeSection />
      <Gallery />

    </Box>
  );
};

export default LandingPage;
