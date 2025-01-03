import { Box } from "@mui/material";
import {
  Header,
  WelcomeSection,
  Gallery,
  Testimonials,
  Courses,
  Exams,
  MoreInformation,
  Magazine,
  Awards,
  VideoGallery,
  Stories
} from "../components/index";

const LandingPage = () => {
  return (
    <Box className="w-full">
      <Header />
      <WelcomeSection />
      <Gallery />
      <Stories />
      <Testimonials />
      <Courses />
      <Exams />
      <Awards />
      <Magazine />
      <VideoGallery/>
      <MoreInformation />
    </Box>
  );
};

export default LandingPage;
