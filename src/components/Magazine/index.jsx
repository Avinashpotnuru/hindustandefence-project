import { Box } from "@mui/material";
import Slider from "react-slick";

import { HeadingTitle } from "../index";
import { motion } from "framer-motion";

import { variants } from "../../Animations";

const Magazine = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const images = Array.from({ length: 5 }).map(
    (_, index) => `/magazine/magazine${index + 1}.webp`
  );

  const content = [
    "Indian Army Magazine",
    "Indian Navy Magazine",
    "Indian Air Force Magazine",
    "Chandrayaan 3",
    "Magazine 4",
  ];

  return (
    <motion.div
      variants={variants["slideFromBottom"]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-16 md:py-24 lg:py-30 px-5 md:px-8 lg:px-24 space-y-6 lg:space-y-8"
    >
      <HeadingTitle text="Magazine" content="Popular Magazine" />
      <Box className="slider-container">
        <Slider className="" {...settings}>
          {images.map((item, index) => (
            <Box key={index} className="overflow-hidden mx-3 p-2 rounded-md ">
              <Box className="overflow-hidden ">
                <img
                  className="w-full h-auto hover:scale-105 transition-all duration-300"
                  src={item}
                  alt={`Magazine ${index + 1}`}
                />
              </Box>
              <h4 className="text-center  p-3 leading-[1.2] text-[#111] font-bold text-[14px] md:text-[24px] lg:text-[26px]">
                {content[index]}
              </h4>
            </Box>
          ))}
        </Slider>
      </Box>
    </motion.div>
  );
};

export default Magazine;
