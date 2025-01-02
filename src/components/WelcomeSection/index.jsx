import { Box, Button } from "@mui/material";
import Welcome from "/welcome.webp";
import Flag from "/plain.svg";
import Complete from "/complete.svg";
import { HeadingTitle} from "../index";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const data = [
  "Best Academy",
  "Outstanding Results",
  "Best teachers",
  "Holistic Development",
];

const WelcomeSection = () => {
  return (
    <>
      <Box className="overflow-hidden flex flex-col  justify-center items-center lg:flex-row  bg-[#fff5eb] p-4 md:p-10 gap-3 lg:gap-7 lg:px-28 lg:py-20 relative">
        <img
          className="absolute right-0 bottom-0 lg:right-[90px] lg:bottom-[90px] "
          src={Flag}
          alt="Welcome"
        />
        <img className="w-full lg:w-1/2 h-auto" src={Welcome} alt="Welcome" />
        <Box className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center p-5 lg:p-10">
          <HeadingTitle title="About Our Academy" />

          <Box className="gap-3 space-y-3 lg:space-y-6 my-2">
            <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold">
              Welcome to Parmanu- <br />
              defence
            </h2>
            <h1 className="">
              Parmanu Defence is the best NDA coaching institute in Dehradun
              that provides a strong infrastructure and platform to Defence
              aspirants to compete in various defence sector exams laying great
              emphasis on overall personality grooming and academic excellence,
              in our endeavour to prepare the students to face the latest
              Parmanu Defence in the field of defence warfare. We provide a
              comprehensive course update and study material based on the
              current syllabus and examination pattern from the current
              perspective.
            </h1>
            <Box className="grid grid-cols-1 md:grid-cols-2">
              {data.map((item, i) => (
                <Box className=" flex items-center gap-3 " key={i}>
                  <img className="py-1" src={Complete} alt="Welcome" />
                  <h6 className="font-semibold text-black uppercase">{item}</h6>
                </Box>
              ))}
            </Box>
            <Button
              sx={{
                fontFamily: "Rajdhani, serif",
                background:
                  "linear-gradient(to right, #F5961B, #E76420, #F5961B)",
                color: "white",
              }}
              endIcon={<KeyboardDoubleArrowRightIcon />}
            >
              Read More
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default WelcomeSection;
