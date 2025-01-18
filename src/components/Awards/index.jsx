/* eslint-disable react/prop-types */
import { Box, Button, IconButton } from "@mui/material";
import { HeadingTitle } from "../index";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { motion } from "framer-motion";

import { variants } from "../../Animations";

import {awardsContent} from "../../Data";

const PrevArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    style={{
      position: "absolute",
      top: "50%",
      left: "10px",
      transform: "translateY(-50%)",
      zIndex: 2,
      background: "transparent",
      color: "orange",
    }}
  >
    <ArrowBackIos />
  </IconButton>
);

const NextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    style={{
      position: "absolute",
      top: "50%",

      right: window.innerWidth >= 1024 ? "50px" : "10px",
      transform: "translateY(-50%)",
      zIndex: 2,
      background: "",
      color: "orange",
    }}
  >
    <ArrowForwardIos />
  </IconButton>
);

const Awards = () => {
  const images = Array.from({ length: 4 }).map(
    (_, index) => `/awards/award${index + 1}.webp`
  );

 
  const showArrows = images.length > 1;
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: showArrows ? <NextArrow /> : null,
    prevArrow: showArrows ? <PrevArrow /> : null,
  };

  return (
    <Box className="flex justify-center items-center bg-[#fbd5be] py-16 md:py-24 lg:py-30 px-5 md:px-8 lg:px-24">
      <motion.div
        variants={variants["slideFromBottom"]}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full !h-full max-w-[1200px]  "
      >
        <Slider {...settings}>
          {images.map((image, index) => (
            <Box key={index} className="flex justify-center items-center">
              <Box className=" flex flex-col md:flex-row justify-center items-center w-full h-full  bg-white">
                <img
                  className="w-full h-full md:w-1/2  "
                  src={image}
                  alt="awards"
                />
                <Box className="p-5 md:w-1/2 space-y-3 md:p-7 xl:p-10">
                  <HeadingTitle
                    text="Awards"
                    content={awardsContent[index].title}
                  />
                  <h4>{awardsContent[index].content}</h4>
                  <Button
                    sx={{
                      fontFamily: "Rajdhani, serif",
                      background:
                        "linear-gradient(to right, #F5961B, #E76420, #F5961B)",
                      color: "white",
                    }}
                    endIcon={<KeyboardDoubleArrowRightIcon />}
                  >
                    View More
                  </Button>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </motion.div>
    </Box>
  );
};

export default Awards;
