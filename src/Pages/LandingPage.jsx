import { Box } from "@mui/material";
import { Header,WelcomeSection,Gallery,Testimonials,Courses } from "../components/index";

const LandingPage = () => {
  return (
    <Box className="w-full">
      <Header />
      <WelcomeSection />
      <Gallery />
      <Testimonials/>
      <Courses/>

    </Box>
  );
};

export default LandingPage;
