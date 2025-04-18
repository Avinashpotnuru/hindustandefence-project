import { Box, Button } from "@mui/material";
import Welcome from "/welcome.webp";
import Flag from "/plain.svg";
import Complete from "/complete.svg";
import { HeadingTitle } from "../index";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { motion } from "framer-motion";

import { variants } from "../../Animations";

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

        <motion.img
          variants={variants["slideFromLeft"]}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full h-auto lg:w-1/2"
          src={Welcome}
          alt="Welcome"
        />
        <motion.div
          variants={variants["slideFromRight"]}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center justify-center w-full p-5 bg-white lg:w-1/2 lg:p-10"
        >
          <HeadingTitle text="About Our Academy" />

          <Box className="gap-3 my-2 space-y-3 lg:space-y-6">
            <h2 className="text-3xl font-bold md:text-5xl lg:text-5xl">
              Hindustan defence - <br />
              academy
            </h2>
            <h1 className="">
              Hindustan defence academy is the best NDA coaching institute in
              Dehradun that provides a strong infrastructure and platform to
              Defence aspirants to compete in various defence sector exams
              laying great emphasis on overall personality grooming and academic
              excellence, in our endeavour to prepare the students to face the
              latest Hindustan defence in the field of defence warfare. We
              provide a comprehensive course update and study material based on
              the current syllabus and examination pattern from the current
              perspective.
            </h1>
            <Box className="grid grid-cols-1 md:grid-cols-2">
              {data.map((item, i) => (
                <Box className="flex items-center gap-3 " key={i}>
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
        </motion.div>
      </Box>
    </>
  );
};

export default WelcomeSection;
